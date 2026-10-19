import os,json,sqlite3,secrets,time,threading,hmac,collections
from http.server import ThreadingHTTPServer,BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse

ORIGINS={x.strip().rstrip('/') for x in os.getenv('ALLOWED_ORIGINS','https://omarnajjar52to-del.github.io').split(',') if x.strip()}
PASSWORD=os.environ.get('ADMIN_PASSWORD','')
if len(PASSWORD)<16: raise SystemExit('Set ADMIN_PASSWORD to a unique password of at least 16 characters.')
DB=Path(os.getenv('DATABASE_PATH','data/analytics.sqlite3'));DB.parent.mkdir(parents=True,exist_ok=True)
with sqlite3.connect(DB) as c:
 c.executescript('CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY, created INTEGER NOT NULL, session TEXT NOT NULL,type TEXT NOT NULL,target TEXT NOT NULL,name TEXT NOT NULL);CREATE INDEX IF NOT EXISTS event_date ON events(created);CREATE INDEX IF NOT EXISTS event_session ON events(session);')
SESSIONS={};RATES={};LOCK=threading.Lock();MAX_AGE=90*86400
class App(BaseHTTPRequestHandler):
 def log_message(self,*args): pass
 def send(self,status,data,kind='application/json',cors=False,headers=None):
  if isinstance(data,(dict,list)):data=json.dumps(data,ensure_ascii=False).encode()
  elif isinstance(data,str):data=data.encode()
  self.send_response(status);self.send_header('Content-Type',kind+'; charset=utf-8');self.send_header('Content-Length',str(len(data)));self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff');self.send_header('X-Frame-Options','DENY');self.send_header('Referrer-Policy','no-referrer')
  if cors and self.headers.get('Origin') in ORIGINS:self.send_header('Access-Control-Allow-Origin',self.headers['Origin']);self.send_header('Vary','Origin')
  for k,v in (headers or {}).items():self.send_header(k,v)
  self.end_headers();self.wfile.write(data)
 def allowed(self):return self.headers.get('Origin') in ORIGINS
 def limited(self,key,maximum):
  now=time.time();key=(self.client_address[0],key)
  with LOCK:
   if len(RATES)>10000:
    for old in [k for k,v in RATES.items() if now-v[0]>60]:RATES.pop(old,None)
   start,n=RATES.get(key,(now,0))
   if now-start>=60:start,n=now,0
   RATES[key]=(start,n+1)
  return n>=maximum
 def readjson(self):
  size=int(self.headers.get('Content-Length','0'))
  if size<1 or size>4096:raise ValueError()
  return json.loads(self.rfile.read(size))
 def admin(self):
  from http.cookies import SimpleCookie
  cookie=SimpleCookie();cookie.load(self.headers.get('Cookie',''));token=cookie.get('omar_admin');return bool(token and SESSIONS.get(token.value,0)>time.time())
 def do_OPTIONS(self):
  if not self.allowed():return self.send(403,{})
  self.send(204,b'',cors=True,headers={'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Access-Control-Max-Age':'600'})
 def do_GET(self):
  path=urlparse(self.path).path
  if path=='/health':return self.send(200,{'ok':True})
  if path in ('/','/admin'):return self.send(200,Path(__file__).with_name('dashboard.html').read_bytes(),'text/html')
  if path=='/stats':
   if not self.admin():return self.send(401,{'error':'Sign in required'})
   with sqlite3.connect(DB) as c:
    c.row_factory=sqlite3.Row
    rows=[dict(r) for r in c.execute('SELECT created,session,type,target,name FROM events WHERE created>? ORDER BY id DESC LIMIT 1000',(int(time.time())-MAX_AGE,))]
    totals=dict(c.execute('SELECT type,count(*) FROM events WHERE created>? GROUP BY type',(int(time.time())-MAX_AGE,)).fetchall());unique=c.execute("SELECT count(DISTINCT session) FROM events WHERE type='visit' AND created>?",(int(time.time())-MAX_AGE,)).fetchone()[0]
   return self.send(200,{'totals':totals,'sessions':unique,'events':rows})
  self.send(404,{'error':'Not found'})
 def do_POST(self):
  path=urlparse(self.path).path
  if path=='/login':
   if self.limited('login',10):return self.send(429,{'error':'Please try again later'})
   try:password=self.readjson().get('password','')
   except Exception:return self.send(400,{})
   if not isinstance(password,str) or not hmac.compare_digest(password,PASSWORD):return self.send(401,{'error':'Incorrect password'})
   with LOCK:
    for key in [k for k,v in SESSIONS.items() if v<time.time()]:SESSIONS.pop(key,None)
    token=secrets.token_urlsafe(32);SESSIONS[token]=time.time()+28800
   secure='' if os.getenv('LOCAL_DEV')=='1' else '; Secure'
   return self.send(200,{'ok':True},headers={'Set-Cookie':f'omar_admin={token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800{secure}'})
  if path=='/logout':
   from http.cookies import SimpleCookie
   cookie=SimpleCookie();cookie.load(self.headers.get('Cookie',''));token=cookie.get('omar_admin')
   if token:SESSIONS.pop(token.value,None)
   return self.send(200,{'ok':True},headers={'Set-Cookie':'omar_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0'})
  if path!='/collect':return self.send(404,{})
  if not self.allowed():return self.send(403,{})
  if self.limited('collect',120):return self.send(429,{},cors=True)
  try:
   d=self.readjson();sid=d['session'];kind=d['type'];target=d.get('target','');name=d.get('name','')
   if not isinstance(sid,str) or len(sid)>64 or len(sid)<8 or kind not in ('visit','name','social_click','work_open','external_site_click'):raise ValueError()
   if not isinstance(target,str) or len(target)>200 or not isinstance(name,str) or len(name)>60:raise ValueError()
   now=int(time.time())
   with sqlite3.connect(DB) as c:
    c.execute('DELETE FROM events WHERE created<?',(now-MAX_AGE,))
    c.execute('INSERT INTO events(created,session,type,target,name) VALUES(?,?,?,?,?)',(now,sid,kind,target,name.strip()))
   self.send(200,{'ok':True},cors=True)
  except Exception:self.send(400,{'error':'Invalid event'},cors=True)
if __name__=='__main__':ThreadingHTTPServer(('0.0.0.0',int(os.getenv('PORT','8080'))),App).serve_forever()
