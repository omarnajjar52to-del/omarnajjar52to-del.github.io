(()=>{
'use strict';
const endpoint=(window.OMAR_ANALYTICS_ENDPOINT||'').replace(/\/$/,'');
if(!/^https:\/\//.test(endpoint)&&!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(endpoint))return;
let sid;try{sid=sessionStorage.getItem('omar.analytics.session');if(!sid){sid=crypto.randomUUID();sessionStorage.setItem('omar.analytics.session',sid);}}catch(e){sid=crypto.randomUUID();}
let visitorName='';
async function record(type,target=''){
 try{const response=await fetch(endpoint+'/collect',{method:'POST',mode:'cors',credentials:'omit',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({session:sid,type,target:target.slice(0,200),name:visitorName})});return response.ok;}catch(e){return false;}
}
record('visit');
const root=document.createElement('div');root.id='visitorWelcome';root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-labelledby','visitorTitle');
root.innerHTML='<form><span class="visitor-kicker">OMAR AL NAJJAR / CREATIVE STUDIO</span><h2 id="visitorTitle">WELCOME IN.</h2><p>How should we call you?</p><label for="visitorName">Your name <small>(optional)</small></label><input id="visitorName" name="visitorName" autocomplete="given-name" maxlength="60" placeholder="Your name"><label class="visitor-consent"><input type="checkbox" name="consent"><span>I agree to share my name and interactions with this studio for visit statistics.</span></label><p class="visitor-privacy">We count visits and link clicks. Your name is only sent if you choose to share it.</p><button class="visitor-submit" type="submit">ENTER THE STUDIO <span aria-hidden="true">↗</span></button><button class="visitor-skip" type="button">Continue without sharing a name</button><p class="visitor-error" hidden>Could not save your name. Please try again or continue without sharing.</p></form>';
let shown=false;try{shown=sessionStorage.getItem('omar.welcome.seen')==='1';visitorName=sessionStorage.getItem('omar.visitor.name')||'';}catch(e){}
if(!shown){document.body.append(root);const previous=document.activeElement,form=root.querySelector('form'),name=form.elements.visitorName,check=form.elements.consent,submit=root.querySelector('[type=submit]');const inertNodes=Array.from(document.body.children).filter(el=>el!==root&&!['SCRIPT','STYLE'].includes(el.tagName)).map(el=>[el,el.inert]);inertNodes.forEach(([el])=>el.inert=true);const oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
 const close=()=>{inertNodes.forEach(([el,was])=>el.inert=was);document.body.style.overflow=oldOverflow;root.remove();try{sessionStorage.setItem('omar.welcome.seen','1');}catch(e){}if(previous?.isConnected)previous.focus();};
 root.querySelector('.visitor-skip').onclick=close;
 form.onsubmit=async e=>{e.preventDefault();if(!name.value.trim()){close();return;}if(!check.checked){check.focus();check.setCustomValidity('Please agree before sharing your name, or continue without sharing.');check.reportValidity();return;}visitorName=name.value.trim();submit.disabled=true;const ok=await record('name');submit.disabled=false;if(ok){try{sessionStorage.setItem('omar.visitor.name',visitorName);}catch(e){}close();}else{visitorName='';root.querySelector('.visitor-error').hidden=false;}};
 check.onchange=()=>check.setCustomValidity('');root.addEventListener('keydown',e=>{if(e.key==='Escape')close();if(e.key==='Tab'){const items=[...root.querySelectorAll('input,button')].filter(el=>!el.disabled);if(e.shiftKey&&document.activeElement===items[0]){e.preventDefault();items.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===items.at(-1)){e.preventDefault();items[0].focus();}}});requestAnimationFrame(()=>name.focus({preventScroll:true}));
}
const socialHosts=['instagram.com','facebook.com','fb.com','wa.me','whatsapp.com','t.me','tiktok.com','linkedin.com','youtube.com','x.com','twitter.com'];
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(a){let url;try{url=new URL(a.href,location.href);}catch(e){return;}if(socialHosts.some(h=>url.hostname===h||url.hostname.endsWith('.'+h))){record('social_click',url.hostname);return;}if(url.origin!==location.origin&&/^https?:$/.test(url.protocol))record('external_site_click',url.hostname);}
 const button=e.target.closest('button[onclick]');if(button){const action=button.getAttribute('onclick')||'';const names={openSocialPage:'Social media portfolio',openPackagePage:'Packaging portfolio',openNormalBoxPage:'Normal box portfolio',openAiVideoPage:'Video portfolio',openWebsitePage:'Website portfolio'};for(const [fn,label]of Object.entries(names))if(action.includes(fn)){record('work_open',label);break;}}
},true);
})();
