var xE=Object.create;var Vv=Object.defineProperty;var SE=Object.getOwnPropertyDescriptor;var ME=Object.getOwnPropertyNames;var bE=Object.getPrototypeOf,EE=Object.prototype.hasOwnProperty;var Vs=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var TE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ME(t))!EE.call(e,s)&&s!==n&&Vv(e,s,{get:()=>t[s],enumerable:!(i=SE(t,s))||i.enumerable});return e};var gu=(e,t,n)=>(n=e!=null?xE(bE(e)):{},TE(t||!e||!e.__esModule?Vv(n,"default",{value:e,enumerable:!0}):n,e));var t_=Vs(kt=>{"use strict";var rp=Symbol.for("react.transitional.element"),AE=Symbol.for("react.portal"),wE=Symbol.for("react.fragment"),RE=Symbol.for("react.strict_mode"),CE=Symbol.for("react.profiler"),DE=Symbol.for("react.consumer"),UE=Symbol.for("react.context"),NE=Symbol.for("react.forward_ref"),LE=Symbol.for("react.suspense"),IE=Symbol.for("react.memo"),Wv=Symbol.for("react.lazy"),OE=Symbol.for("react.activity"),PE=Symbol.for("react.view_transition"),Gv=Symbol.iterator;function zE(e){return e===null||typeof e!="object"?null:(e=Gv&&e[Gv]||e["@@iterator"],typeof e=="function"?e:null)}var Yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zv=Object.assign,Jv={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=Jv,this.updater=n||Yv}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kv(){}Kv.prototype=Nr.prototype;function op(e,t,n){this.props=e,this.context=t,this.refs=Jv,this.updater=n||Yv}var lp=op.prototype=new Kv;lp.constructor=op;Zv(lp,Nr.prototype);lp.isPureReactComponent=!0;var kv=Array.isArray;function ap(){}var we={H:null,A:null,T:null,S:null},Qv=Object.prototype.hasOwnProperty;function cp(e,t,n){var i=n.ref;return{$$typeof:rp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function BE(e,t){return cp(e.type,t,e.props)}function up(e){return typeof e=="object"&&e!==null&&e.$$typeof===rp}function FE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xv=/\/+/g;function sp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?FE(""+e.key):t.toString(36)}function HE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ap,ap):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ur(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case rp:case AE:r=!0;break;case Wv:return r=e._init,Ur(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+sp(e,0):i,kv(s)?(n="",r!=null&&(n=r.replace(Xv,"$&/")+"/"),Ur(s,t,n,"",function(c){return c})):s!=null&&(up(s)&&(s=BE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Xv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(kv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+sp(i,l),r+=Ur(i,t,n,a,s);else if(l=zE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+sp(i,l++),r+=Ur(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Ur(HE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function vu(e,t,n){if(e==null)return e;var i=[],s=0;return Ur(e,i,"","",function(a){return t.call(n,a,s++)}),i}function VE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var qv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jv(e){var t=we.T,n={};n.types=t!==null?t.types:null,we.T=n;try{var i=e(),s=we.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ap,qv)}catch(a){qv(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),we.T=t}}function $v(e){var t=we.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else jv($v.bind(null,e))}var GE={map:vu,forEach:function(e,t,n){vu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vu(e,function(){t++}),t},toArray:function(e){return vu(e,function(t){return t})||[]},only:function(e){if(!up(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};kt.Activity=OE;kt.Children=GE;kt.Component=Nr;kt.Fragment=wE;kt.Profiler=CE;kt.PureComponent=op;kt.StrictMode=RE;kt.Suspense=LE;kt.ViewTransition=PE;kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return we.H.useMemoCache(e)}};kt.addTransitionType=$v;kt.cache=function(e){return function(){return e.apply(null,arguments)}};kt.cacheSignal=function(){return null};kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Zv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Qv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return cp(e.type,s,i)};kt.createContext=function(e){return e={$$typeof:UE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:DE,_context:e},e};kt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Qv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return cp(e,a,s)};kt.createRef=function(){return{current:null}};kt.forwardRef=function(e){return{$$typeof:NE,render:e}};kt.isValidElement=up;kt.lazy=function(e){return{$$typeof:Wv,_payload:{_status:-1,_result:e},_init:VE}};kt.memo=function(e,t){return{$$typeof:IE,type:e,compare:t===void 0?null:t}};kt.startTransition=jv;kt.unstable_useCacheRefresh=function(){return we.H.useCacheRefresh()};kt.use=function(e){return we.H.use(e)};kt.useActionState=function(e,t,n){return we.H.useActionState(e,t,n)};kt.useCallback=function(e,t){return we.H.useCallback(e,t)};kt.useContext=function(e){return we.H.useContext(e)};kt.useDebugValue=function(){};kt.useDeferredValue=function(e,t){return we.H.useDeferredValue(e,t)};kt.useEffect=function(e,t){return we.H.useEffect(e,t)};kt.useEffectEvent=function(e){return we.H.useEffectEvent(e)};kt.useId=function(){return we.H.useId()};kt.useImperativeHandle=function(e,t,n){return we.H.useImperativeHandle(e,t,n)};kt.useInsertionEffect=function(e,t){return we.H.useInsertionEffect(e,t)};kt.useLayoutEffect=function(e,t){return we.H.useLayoutEffect(e,t)};kt.useMemo=function(e,t){return we.H.useMemo(e,t)};kt.useOptimistic=function(e,t){return we.H.useOptimistic(e,t)};kt.useReducer=function(e,t,n){return we.H.useReducer(e,t,n)};kt.useRef=function(e){return we.H.useRef(e)};kt.useState=function(e){return we.H.useState(e)};kt.useSyncExternalStore=function(e,t,n){return we.H.useSyncExternalStore(e,t,n)};kt.useTransition=function(){return we.H.useTransition()};kt.version="19.3.1"});var bl=Vs((aN,e_)=>{"use strict";e_.exports=t_()});var h_=Vs(Le=>{"use strict";function pp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<_u(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Gi(e){return e.length===0?null:e[0]}function xu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>_u(o,n))l<s&&0>_u(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>_u(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function _u(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Le.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(n_=performance,Le.unstable_now=function(){return n_.now()}):(hp=Date,i_=hp.now(),Le.unstable_now=function(){return hp.now()-i_});var n_,hp,i_,ds=[],Gs=[],kE=1,gi=null,yn=3,mp=!1,El=!1,Tl=!1,gp=!1,r_=typeof setTimeout=="function"?setTimeout:null,o_=typeof clearTimeout=="function"?clearTimeout:null,s_=typeof setImmediate<"u"?setImmediate:null;function yu(e){for(var t=Gi(Gs);t!==null;){if(t.callback===null)xu(Gs);else if(t.startTime<=e)xu(Gs),t.sortIndex=t.expirationTime,pp(ds,t);else break;t=Gi(Gs)}}function vp(e){if(Tl=!1,yu(e),!El)if(Gi(ds)!==null)El=!0,Ir||(Ir=!0,Lr());else{var t=Gi(Gs);t!==null&&_p(vp,t.startTime-e)}}var Ir=!1,Al=-1,l_=5,c_=-1;function u_(){return gp?!0:!(Le.unstable_now()-c_<l_)}function fp(){if(gp=!1,Ir){var e=Le.unstable_now();c_=e;var t=!0;try{t:{El=!1,Tl&&(Tl=!1,o_(Al),Al=-1),mp=!0;var n=yn;try{e:{for(yu(e),gi=Gi(ds);gi!==null&&!(gi.expirationTime>e&&u_());){var i=gi.callback;if(typeof i=="function"){gi.callback=null,yn=gi.priorityLevel;var s=i(gi.expirationTime<=e);if(e=Le.unstable_now(),typeof s=="function"){gi.callback=s,yu(e),t=!0;break e}gi===Gi(ds)&&xu(ds),yu(e)}else xu(ds);gi=Gi(ds)}if(gi!==null)t=!0;else{var a=Gi(Gs);a!==null&&_p(vp,a.startTime-e),t=!1}}break t}finally{gi=null,yn=n,mp=!1}t=void 0}}finally{t?Lr():Ir=!1}}}var Lr;typeof s_=="function"?Lr=function(){s_(fp)}:typeof MessageChannel<"u"?(dp=new MessageChannel,a_=dp.port2,dp.port1.onmessage=fp,Lr=function(){a_.postMessage(null)}):Lr=function(){r_(fp,0)};var dp,a_;function _p(e,t){Al=r_(function(){e(Le.unstable_now())},t)}Le.unstable_IdlePriority=5;Le.unstable_ImmediatePriority=1;Le.unstable_LowPriority=4;Le.unstable_NormalPriority=3;Le.unstable_Profiling=null;Le.unstable_UserBlockingPriority=2;Le.unstable_cancelCallback=function(e){e.callback=null};Le.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):l_=0<e?Math.floor(1e3/e):5};Le.unstable_getCurrentPriorityLevel=function(){return yn};Le.unstable_next=function(e){switch(yn){case 1:case 2:case 3:var t=3;break;default:t=yn}var n=yn;yn=t;try{return e()}finally{yn=n}};Le.unstable_requestPaint=function(){gp=!0};Le.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=yn;yn=e;try{return t()}finally{yn=n}};Le.unstable_scheduleCallback=function(e,t,n){var i=Le.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:kE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,pp(Gs,e),Gi(ds)===null&&e===Gi(Gs)&&(Tl?(o_(Al),Al=-1):Tl=!0,_p(vp,n-i))):(e.sortIndex=s,pp(ds,e),El||mp||(El=!0,Ir||(Ir=!0,Lr()))),e};Le.unstable_shouldYield=u_;Le.unstable_wrapCallback=function(e){var t=yn;return function(){var n=yn;yn=t;try{return e.apply(this,arguments)}finally{yn=n}}}});var d_=Vs((oN,f_)=>{"use strict";f_.exports=h_()});var g_=Vs(xn=>{"use strict";var XE=bl();function m_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ks(){}var wn={d:{f:ks,r:function(){throw Error(m_(522))},D:ks,C:ks,L:ks,m:ks,X:ks,S:ks,M:ks},p:0,findDOMNode:null},qE=Symbol.for("react.portal"),WE=Symbol.for("react.recoverable"),p_=Symbol.for("react.optimistic_key");function YE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qE,key:i==null?null:i===p_?p_:""+i,children:e,containerInfo:t,implementation:n}}var wl=XE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Su(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=wn;xn.browser=function(e){return{$$typeof:WE,_reason:e}};xn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(m_(299));return YE(e,t,null,n)};xn.flushSync=function(e){var t=wl.T,n=wn.p;try{if(wl.T=null,wn.p=2,e)return e()}finally{wl.T=t,wn.p=n,wn.d.f()}};xn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,wn.d.C(e,t))};xn.prefetchDNS=function(e){typeof e=="string"&&wn.d.D(e)};xn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Su(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?wn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&wn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};xn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Su(t.as,t.crossOrigin);wn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&wn.d.M(e)};xn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Su(n,t.crossOrigin);wn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};xn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Su(t.as,t.crossOrigin);wn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else wn.d.m(e)};xn.requestFormReset=function(e){wn.d.r(e)};xn.unstable_batchedUpdates=function(e,t){return e(t)};xn.useFormState=function(e,t,n){return wl.H.useFormState(e,t,n)};xn.useFormStatus=function(){return wl.H.useHostTransitionStatus()};xn.version="19.3.1"});var yp=Vs((cN,__)=>{"use strict";function v_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v_)}catch(e){console.error(e)}}v_(),__.exports=g_()});var s1=Vs(nf=>{"use strict";var Ke=d_(),ix=bl(),ZE=yp();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function sx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function ax(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y_(e){if(pc(e)!==e)throw Error(J(188))}function JE(e){var t=e.alternate;if(!t){if(t=pc(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return y_(s),e;if(a===i)return y_(s),t;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function ox(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ox(e),t!==null)return t;e=e.sibling}return null}function kn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&kn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function nr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function x_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function lx(e){var t=[null,null],n=nr(e);return n===null||cx(t,e,n.child,{foundSelf:!1}),t}function cx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&cx(e,t,n.child,i))return!0;n=n.sibling}return!1}function Je(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(J(559))}}var Vr=null,Qp=null;function KE(e,t,n){return e===n?!0:e===t?(Vr=e,!0):!1}function QE(e,t,n){return e===n?(Qp=e,!1):e===t?(Qp!==null&&(Vr=e),!0):!1}function S_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function jp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Ae=Object.assign,jE=Symbol.for("react.element"),Mu=Symbol.for("react.transitional.element"),Il=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),ux=Symbol.for("react.strict_mode"),$p=Symbol.for("react.profiler"),hx=Symbol.for("react.consumer"),Zi=Symbol.for("react.context"),lg=Symbol.for("react.forward_ref"),tm=Symbol.for("react.suspense"),em=Symbol.for("react.suspense_list"),cg=Symbol.for("react.memo"),Ys=Symbol.for("react.lazy"),nm=Symbol.for("react.activity"),$E=Symbol.for("react.legacy_hidden"),tT=Symbol.for("react.memo_cache_sentinel"),im=Symbol.for("react.view_transition"),eT=Symbol.for("react.recoverable"),M_=Symbol.iterator;function Rl(e){return e===null||typeof e!="object"?null:(e=M_&&e[M_]||e["@@iterator"],typeof e=="function"?e:null)}var nT=Symbol.for("react.client.reference");function sm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gr:return"Fragment";case $p:return"Profiler";case ux:return"StrictMode";case tm:return"Suspense";case em:return"SuspenseList";case nm:return"Activity";case im:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Il:return"Portal";case Zi:return e.displayName||"Context";case hx:return(e._context.displayName||"Context")+".Consumer";case lg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cg:return t=e.displayName||null,t!==null?t:sm(e.type)||"Memo";case Ys:t=e._payload,e=e._init;try{return sm(e(t))}catch{}}return null}var Ol=Array.isArray,Ht=ix.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe=ZE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ka={pending:!1,data:null,method:null,action:null},am=[],kr=-1;function es(e){return{current:e}}function fn(e){0>kr||(e.current=am[kr],am[kr]=null,kr--)}function De(e,t){kr++,am[kr]=e.current,e.current=t}var ji=es(null),jl=es(null),na=es(null),lh=es(null);function ch(e,t){switch(De(na,t),De(jl,e),De(ji,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Py(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Py(t),e=LM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}fn(ji),De(ji,e)}function co(){fn(ji),fn(jl),fn(na)}function rm(e){var t=e.memoizedState;t!==null&&(xo._currentValue=t.memoizedState,De(lh,e)),t=ji.current;var n=LM(t,e.type);t!==n&&(De(jl,e),De(ji,n))}function uh(e){jl.current===e&&(fn(ji),fn(jl)),lh.current===e&&(fn(lh),xo._currentValue=ka)}var xp,b_;function qs(e){if(xp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xp=t&&t[1]||"",b_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xp+e+b_}var Sp=!1;function Mp(e,t){if(!e||Sp)return"";Sp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var h=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){h=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){h=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Sp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?qs(n):""}function iT(e,t){switch(e.tag){case 26:case 27:case 5:return qs(e.type);case 16:return qs("Lazy");case 13:return e.child!==t&&t!==null?qs("Suspense Fallback"):qs("Suspense");case 19:return qs("SuspenseList");case 0:case 15:return Mp(e.type,!1);case 11:return Mp(e.type.render,!1);case 1:return Mp(e.type,!0);case 31:return qs("Activity");case 30:return qs("ViewTransition");default:return""}}function E_(e){try{var t="",n=null;do t+=iT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var om=Object.prototype.hasOwnProperty,ug=Ke.unstable_scheduleCallback,bp=Ke.unstable_cancelCallback,sT=Ke.unstable_shouldYield,aT=Ke.unstable_requestPaint,ti=Ke.unstable_now,rT=Ke.unstable_getCurrentPriorityLevel,fx=Ke.unstable_ImmediatePriority,dx=Ke.unstable_UserBlockingPriority,hh=Ke.unstable_NormalPriority,oT=Ke.unstable_LowPriority,px=Ke.unstable_IdlePriority,lT=Ke.log,cT=Ke.unstable_setDisableYieldValue,mc=null,ei=null;function Ks(e){if(typeof lT=="function"&&cT(e),ei&&typeof ei.setStrictMode=="function")try{ei.setStrictMode(mc,e)}catch{}}var ni=Math.clz32?Math.clz32:fT,uT=Math.log,hT=Math.LN2;function fT(e){return e>>>=0,e===0?32:31-(uT(e)/hT|0)|0}var bu=256,Eu=262144,Tu=4194304;function Ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ba(i):(r&=o,r!==0?s=Ba(r):n||(n=o&~e,n!==0&&(s=Ba(n))))):(o=i&~a,o!==0?s=Ba(o):r!==0?s=Ba(r):n||(n=i&~e,n!==0&&(s=Ba(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function gc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ni(n),s=1<<i;t|=e[i],n&=~s}return t}function dT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gx(){var e=Tu;return Tu<<=1,(Tu&62914560)===0&&(Tu=4194304),e}function Ep(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-ni(n),d=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&vx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function vx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ni(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function _x(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ni(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function yx(e,t){var n=t&-t;return n=(n&42)!==0?1:hg(n),(n&(e.suspendedLanes|t))!==0?0:n}function hg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xx(){var e=pe.p;return e!==0?e:(e=window.event,e===void 0?32:e1(e.type))}function T_(e,t){var n=pe.p;try{return pe.p=e,t()}finally{pe.p=n}}var As=Math.random().toString(36).slice(2),un="__reactFiber$"+As,Xn="__reactProps$"+As,bo="__reactContainer$"+As,A_="__reactEvents$"+As,mT="__reactListeners$"+As,gT="__reactHandles$"+As,w_="__reactResources$"+As,_c="__reactMarker$"+As,fh="__reactLoad$"+As;function Bh(e){delete e[un],delete e[Xn],delete e[mT],delete e[gT]}function Va(e){var t;if(t=e[un])return t;for(var n=e.parentNode;n;){if(t=n[bo]||n[un]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xy(e);e!==null;){if(n=e[un])return n;e=Xy(e)}return t}e=n,n=e.parentNode}return null}function Eo(e){if(e=e[un]||e[bo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Pl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function $r(e){var t=e[w_];return t||(t=e[w_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function an(e){e[_c]=!0}function Sx(e){e[fh]=void 0}var Mx=new Set,bx={};function ir(e,t){uo(e,t),uo(e+"Capture",t)}function uo(e,t){for(bx[e]=t,e=0;e<t.length;e++)Mx.add(t[e])}var vT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),R_={},C_={};function _T(e){return om.call(C_,e)?!0:om.call(R_,e)?!1:vT.test(e)?C_[e]=!0:(R_[e]=!0,!1)}var fe=!1;function D_(){var e=fe;return fe=!1,e}function ku(e,t,n){if(_T(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Au(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function ps(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ex(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lm(e){if(!e._valueTracker){var t=Ex(e)?"checked":"value";e._valueTracker=yT(e,t,""+e[t])}}function Tx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ex(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var xT=/[\n"\\]/g;function Si(e){return e.replace(xT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kn(t)):e.value!==""+Kn(t)&&(e.value=""+Kn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Tp(e,Kn(e.value)):Tp(e,Kn(t)):n!=null?Tp(e,Kn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Kn(o):e.removeAttribute("name")}function Ax(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){lm(e);return}n=n!=null?""+Kn(n):"",t=t!=null?""+Kn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),lm(e)}function Tp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function to(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function wx(e,t,n){if(t!=null&&(t=""+Kn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Kn(n):""}function Rx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(Ol(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Kn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),lm(e)}function ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ST=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function U_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ST.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Cx(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",fe=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(U_(e,s,i),fe=!0)}else for(var a in t)t.hasOwnProperty(a)&&U_(e,a,t[a])}function dg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var MT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xu(e){return bT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var um=null;function pg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,eo=null;function N_(e){var t=Eo(e);if(t&&(e=t.stateNode)){var n=e[Xn]||null;t:switch(e=t.stateNode,t.type){case"input":if(cm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Si(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Xn]||null;if(!s)throw Error(J(90));cm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Tx(i)}break t;case"textarea":wx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&to(e,!!n.multiple,t,!1)}}}var Ap=!1;function Dx(e,t,n){if(Ap)return e(t,n);Ap=!0;try{var i=e(t);return i}finally{if(Ap=!1,(Xr!==null||eo!==null)&&(jh(),Xr&&(t=Xr,e=eo,eo=Xr=null,N_(t),e)))for(t=0;t<e.length;t++)N_(e[t])}}function $l(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Xn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var xs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hm=!1;if(xs)try{Or={},Object.defineProperty(Or,"passive",{get:function(){hm=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{hm=!1}var Or,Qs=null,mg=null,qu=null;function Ux(){if(qu)return qu;var e,t=mg,n=t.length,i,s="value"in Qs?Qs.value:Qs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return qu=s.slice(e,1<i?1-i:void 0)}function Wu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wu(){return!0}function L_(){return!1}function Un(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?wu:L_,this.isPropagationStopped=L_,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wu)},persist:function(){},isPersistent:wu}),t}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fh=Un(va),yc=Ae({},va,{view:0,detail:0}),ET=Un(yc),wp,Rp,Cl,Hh=Ae({},yc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cl&&(Cl&&e.type==="mousemove"?(wp=e.screenX-Cl.screenX,Rp=e.screenY-Cl.screenY):Rp=wp=0,Cl=e),wp)},movementY:function(e){return"movementY"in e?e.movementY:Rp}}),I_=Un(Hh),TT=Ae({},Hh,{dataTransfer:0}),AT=Un(TT),wT=Ae({},yc,{relatedTarget:0}),Cp=Un(wT),RT=Ae({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),CT=Un(RT),DT=Ae({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),UT=Un(DT),NT=Ae({},va,{data:0}),O_=Un(NT),LT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=OT[e])?!!t[e]:!1}function gg(){return PT}var zT=Ae({},yc,{key:function(e){if(e.key){var t=LT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?IT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gg,charCode:function(e){return e.type==="keypress"?Wu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),BT=Un(zT),FT=Ae({},Hh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P_=Un(FT),HT=Ae({},va,{submitter:0}),VT=Un(HT),GT=Ae({},yc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gg}),kT=Un(GT),XT=Ae({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),qT=Un(XT),WT=Ae({},Hh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),YT=Un(WT),ZT=Ae({},va,{newState:0,oldState:0,source:0}),JT=Un(ZT),KT=[9,13,27,32],vg=xs&&"CompositionEvent"in window,Fl=null;xs&&"documentMode"in document&&(Fl=document.documentMode);var QT=xs&&"TextEvent"in window&&!Fl,Nx=xs&&(!vg||Fl&&8<Fl&&11>=Fl),z_=" ",B_=!1;function Lx(e,t){switch(e){case"keyup":return KT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ix(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function jT(e,t){switch(e){case"compositionend":return Ix(t);case"keypress":return t.which!==32?null:(B_=!0,z_);case"textInput":return e=t.data,e===z_&&B_?null:e;default:return null}}function $T(e,t){if(qr)return e==="compositionend"||!vg&&Lx(e,t)?(e=Ux(),qu=mg=Qs=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nx&&t.locale!=="ko"?null:t.data;default:return null}}var tA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function F_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tA[e.type]:t==="textarea"}function Ox(e,t,n,i){Xr?eo?eo.push(i):eo=[i]:Xr=i,t=Ih(t,"onChange"),0<t.length&&(n=new Fh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Hl=null,tc=null;function eA(e){DM(e,0)}function Vh(e){var t=Pl(e);if(Tx(t))return e}function H_(e,t){if(e==="change")return t}var Px=!1;xs&&(xs?(Cu="oninput"in document,Cu||(Dp=document.createElement("div"),Dp.setAttribute("oninput","return;"),Cu=typeof Dp.oninput=="function"),Ru=Cu):Ru=!1,Px=Ru&&(!document.documentMode||9<document.documentMode));var Ru,Cu,Dp;function V_(){Hl&&(Hl.detachEvent("onpropertychange",zx),tc=Hl=null)}function zx(e){if(e.propertyName==="value"&&Vh(tc)){var t=[];Ox(t,tc,e,pg(e)),Dx(eA,t)}}function nA(e,t,n){e==="focusin"?(V_(),Hl=t,tc=n,Hl.attachEvent("onpropertychange",zx)):e==="focusout"&&V_()}function iA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vh(tc)}function sA(e,t){if(e==="click")return Vh(t)}function aA(e,t){if(e==="input"||e==="change")return Vh(t)}function rA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var si=typeof Object.is=="function"?Object.is:rA;function ec(e,t){if(si(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!om.call(t,s)||!si(e[s],t[s]))return!1}return!0}function fm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function G_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function k_(e,t){var n=G_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=G_(n)}}function Bx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fm(e.document)}return t}function _g(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var oA=xs&&"documentMode"in document&&11>=document.documentMode,Wr=null,dm=null,Vl=null,pm=!1;function X_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pm||Wr==null||Wr!==fm(i)||(i=Wr,"selectionStart"in i&&_g(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vl&&ec(Vl,i)||(Vl=i,i=Ih(dm,"onSelect"),0<i.length&&(t=new Fh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Wr)))}function Pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yr={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},Up={},Hx={};xs&&(Hx=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function sr(e){if(Up[e])return Up[e];if(!Yr[e])return e;var t=Yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hx)return Up[e]=t[n];return e}var Vx=sr("animationend"),Gx=sr("animationiteration"),kx=sr("animationstart"),lA=sr("transitionrun"),cA=sr("transitionstart"),uA=sr("transitioncancel"),Xx=sr("transitionend"),qx=new Map,mm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mm.push("scrollEnd");function Li(e,t){qx.set(e,t),ir(t,[e])}var hA=0;function Ss(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ni.identifierPrefix;var n=hA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function q_(e){if(e==null||typeof e=="string")return e;var t=null,n=lo;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function ws(e,t){return e=q_(e),t=q_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var dh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],Zr=0,yg=0;function Gh(){for(var e=Zr,t=yg=Zr=0;t<e;){var n=_i[t];_i[t++]=null;var i=_i[t];_i[t++]=null;var s=_i[t];_i[t++]=null;var a=_i[t];if(_i[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Wx(n,s,a)}}function kh(e,t,n,i){_i[Zr++]=e,_i[Zr++]=t,_i[Zr++]=n,_i[Zr++]=i,yg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function xg(e,t,n,i){return kh(e,t,n,i),ph(e)}function ar(e,t){return kh(e,null,null,t),ph(e)}function Wx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ni(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function ph(e){if(50<Ql)throw Ql=0,nh=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jr={};function fA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(e,t,n,i){return new fA(e,t,n,i)}function Sg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _s(e,t){var n=e.alternate;return n===null?(n=Vn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Yx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Sg(i)&&(r=1);else if(typeof i=="string")r=Bw(e,n,ji.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case nm:return e=Vn(31,n,t,s),e.elementType=nm,e.lanes=a,e;case Gr:return Xa(n.children,s,a,t);case ux:r=8,s|=24;break;case $p:return e=Vn(12,n,t,s|2),e.elementType=$p,e.lanes=a,e;case tm:return e=Vn(13,n,t,s),e.elementType=tm,e.lanes=a,e;case em:return e=Vn(19,n,t,s),e.elementType=em,e.lanes=a,e;case $E:case im:return e=s|32,e=Vn(30,n,t,e),e.elementType=im,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Zi:r=10;break t;case hx:r=9;break t;case lg:r=11;break t;case cg:r=14;break t;case Ys:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=Vn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Xa(e,t,n,i){return e=Vn(7,e,i,t),e.lanes=n,e}function Np(e,t,n){return e=Vn(6,e,null,t),e.lanes=n,e}function Zx(e){var t=Vn(18,null,null,0);return t.stateNode=e,t}function Lp(e,t,n){return t=Vn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var W_=new WeakMap;function Mi(e,t){if(typeof e=="object"&&e!==null){var n=W_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:E_(t)},W_.set(e,t),t)}return{value:e,source:t,stack:E_(t)}}var Kr=[],Qr=0,mh=null,nc=0,yi=[],xi=0,fa=null,Ki=1,Qi="";function gs(e,t){Kr[Qr++]=nc,Kr[Qr++]=mh,mh=e,nc=t}function Jx(e,t,n){yi[xi++]=Ki,yi[xi++]=Qi,yi[xi++]=fa,fa=e;var i=Ki;e=Qi;var s=32-ni(i)-1;i&=~(1<<s),n+=1;var a=32-ni(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ki=1<<32-ni(t)+s|n<<s|i,Qi=a+e}else Ki=1<<a|n<<s|i,Qi=e}function Xh(e){e.return!==null&&(gs(e,1),Jx(e,1,0))}function Mg(e){for(;e===mh;)mh=Kr[--Qr],Kr[Qr]=null,nc=Kr[--Qr],Kr[Qr]=null;for(;e===fa;)fa=yi[--xi],yi[xi]=null,Qi=yi[--xi],yi[xi]=null,Ki=yi[--xi],yi[xi]=null}function Kx(e,t){yi[xi++]=Ki,yi[xi++]=Qi,yi[xi++]=fa,Ki=t.id,Qi=t.overflow,fa=e}var rn=null,Ce=null,jt=!1,ia=null,bi=!1,gm=Error(J(519));function da(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ic(Mi(t,e)),gm}function Y_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[un]=e,t[Xn]=i,n){case"dialog":te("cancel",t),te("close",t);break;case"iframe":case"object":case"embed":te("load",t);break;case"video":case"audio":for(n=0;n<oc.length;n++)te(oc[n],t);break;case"source":te("error",t);break;case"img":case"image":case"link":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"input":te("invalid",t),Ax(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":te("invalid",t);break;case"textarea":te("invalid",t),Rx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||NM(t.textContent,n)?(i.popover!=null&&(te("beforetoggle",t),te("toggle",t)),i.onScroll!=null&&te("scroll",t),i.onScrollEnd!=null&&te("scrollend",t),i.onClick!=null&&(t.onclick=Ji),t=!0):t=!1,t||da(e,!0)}function gh(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:rn=rn.return}}function Pr(e){if(e!==rn)return!1;if(!jt)return gh(e),jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||tg(e.type,e.memoizedProps)),n=!n),n&&Ce&&da(e),gh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ce=ky(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Ce=ky(e)}else t===27?(t=Ce,_a(e.type)?(e=sg,sg=null,Ce=e):Ce=t):Ce=rn?Ei(e.stateNode.nextSibling):null;return!0}function Za(){Ce=rn=null,jt=!1}function Ip(){var e=ia;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),ia=null),e}function ic(e){ia===null?ia=[e]:ia.push(e)}var vm=es(null),rr=null,vs=null;function js(e,t,n){De(vm,t._currentValue),t._currentValue=n}function ys(e){e._currentValue=vm.current,fn(vm)}function Zu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function _m(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Zu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Zu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Zu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ja(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;si(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===lh.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}s=s.return}return e!==null&&_m(t,e,n,i),t.flags|=262144,e!==null}function vh(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){rr=e,vs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hn(e){return Qx(rr,e)}function Du(e,t){return rr===null&&Ka(e),Qx(e,t)}function Qx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},vs===null){if(e===null)throw Error(J(308));vs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vs=vs.next=t;return n}var dA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},pA=Ke.unstable_scheduleCallback,mA=Ke.unstable_NormalPriority,Xe={$$typeof:Zi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bg(){return{controller:new dA,data:new Map,refCount:0}}function xc(e){e.refCount--,e.refCount===0&&pA(mA,function(){e.controller.abort()})}function Z_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var zl=null;function gA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Gl=null,ym=0,Qa=0,no=null;function vA(e,t){if(Gl===null){var n=Gl=[];ym=0,Qa=Qg(),no={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ym++,t.then(J_,J_),t}function J_(){if(--ym===0&&(zl=null,Gl!==null)){no!==null&&(no.status="fulfilled");var e=Gl;Gl=null,Qa=0,no=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _A(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var K_=Ht.S;Ht.S=function(e,t){if(mM=ti(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vA(e,t),zl!==null)for(var n=vo;n!==null;)Z_(n,zl),n=n.next;if(n=e.types,n!==null){for(var i=vo;i!==null;)Z_(i,n),i=i.next;if(Qa!==0){i=zl,i===null&&(i=zl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}K_!==null&&K_(e,t)};var qa=es(null);function Eg(){var e=qa.current;return e!==null?e:Te.pooledCache}function Ju(e,t){t===null?De(qa,qa.current):De(qa,t.pool)}function jx(){var e=Eg();return e===null?null:{parent:Xe._currentValue,pool:e}}var To=Error(J(460)),Tg=Error(J(474)),qh=Error(J(542)),_h={then:function(){}};function Q_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $x(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ji,Ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$_(e),e===void 0&&!("reason"in t)?Error(J(600)):e;default:if(typeof t.status=="string")t.then(Ji,Ji);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$_(e),e}throw Wa=t,To}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Wa=n,To):n}}var Wa=null;function j_(){if(Wa===null)throw Error(J(459));var e=Wa;return Wa=null,e}function $_(e){if(e===To||e===qh)throw Error(J(483))}var io=null,sc=0;function Uu(e){var t=sc;return sc+=1,io===null&&(io=[]),$x(io,e,t)}function Xs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nu(e,t){throw t.$$typeof===jE?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function tS(e){function t(f,v){if(e){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key===null?v.set(f.index,f):v.set(f.key,f),f=f.sibling;return v}function s(f,v){return f=_s(f,v),f.index=0,f.sibling=null,f}function a(f,v,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=134217730,v)):(f.flags|=1048576,v)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,v,_,y){return v===null||v.tag!==6?(v=Np(_,f.mode,y),v.return=f,v):(v=s(v,_),v.return=f,v)}function l(f,v,_,y){var A=_.type;return A===Gr?(f=u(f,v,_.props.children,y,_.key),Xs(f,_),f):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ys&&Fa(A)===v.type)?(v=s(v,_.props),Xs(v,_),v.return=f,v):(v=Yu(_.type,_.key,_.props,null,f.mode,y),Xs(v,_),v.return=f,v)}function c(f,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Lp(_,f.mode,y),v.return=f,v):(v=s(v,_.children||[]),v.return=f,v)}function u(f,v,_,y,A){return v===null||v.tag!==7?(v=Xa(_,f.mode,y,A),v.return=f,v):(v=s(v,_),v.return=f,v)}function d(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Np(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mu:return _=Yu(v.type,v.key,v.props,null,f.mode,_),Xs(_,v),_.return=f,_;case Il:return v=Lp(v,f.mode,_),v.return=f,v;case Ys:return v=Fa(v),d(f,v,_)}if(Ol(v)||Rl(v))return v=Xa(v,f.mode,_,null),v.return=f,v;if(typeof v.then=="function")return d(f,Uu(v),_);if(v.$$typeof===Zi)return d(f,Du(f,v),_);Nu(f,v)}return null}function h(f,v,_,y){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A!==null?null:o(f,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Mu:return _.key===A?l(f,v,_,y):null;case Il:return _.key===A?c(f,v,_,y):null;case Ys:return _=Fa(_),h(f,v,_,y)}if(Ol(_)||Rl(_))return A!==null?null:u(f,v,_,y,null);if(typeof _.then=="function")return h(f,v,Uu(_),y);if(_.$$typeof===Zi)return h(f,v,Du(f,_),y);Nu(f,_)}return null}function p(f,v,_,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(_)||null,o(v,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Mu:return f=f.get(y.key===null?_:y.key)||null,l(v,f,y,A);case Il:return f=f.get(y.key===null?_:y.key)||null,c(v,f,y,A);case Ys:return y=Fa(y),p(f,v,_,y,A)}if(Ol(y)||Rl(y))return f=f.get(_)||null,u(v,f,y,A,null);if(typeof y.then=="function")return p(f,v,_,Uu(y),A);if(y.$$typeof===Zi)return p(f,v,_,Du(v,y),A);Nu(v,y)}return null}function g(f,v,_,y){for(var A=null,R=null,w=v,U=v=0,E=null;w!==null&&U<_.length;U++){w.index>U?(E=w,w=null):E=w.sibling;var S=h(f,w,_[U],y);if(S===null){w===null&&(w=E);break}e&&w&&S.alternate===null&&t(f,w),v=a(S,v,U),R===null?A=S:R.sibling=S,R=S,w=E}if(U===_.length)return n(f,w),jt&&gs(f,U),A;if(w===null){for(;U<_.length;U++)w=d(f,_[U],y),w!==null&&(v=a(w,v,U),R===null?A=w:R.sibling=w,R=w);return jt&&gs(f,U),A}for(w=i(w);U<_.length;U++)E=p(w,f,U,_[U],y),E!==null&&(e&&(S=E.alternate,S!==null&&w.delete(S.key===null?U:S.key)),v=a(E,v,U),R===null?A=E:R.sibling=E,R=E);return e&&w.forEach(function(D){return t(f,D)}),jt&&gs(f,U),A}function x(f,v,_,y){if(_==null)throw Error(J(151));for(var A=null,R=null,w=v,U=v=0,E=null,S=_.next();w!==null&&!S.done;U++,S=_.next()){w.index>U?(E=w,w=null):E=w.sibling;var D=h(f,w,S.value,y);if(D===null){w===null&&(w=E);break}e&&w&&D.alternate===null&&t(f,w),v=a(D,v,U),R===null?A=D:R.sibling=D,R=D,w=E}if(S.done)return n(f,w),jt&&gs(f,U),A;if(w===null){for(;!S.done;U++,S=_.next())S=d(f,S.value,y),S!==null&&(v=a(S,v,U),R===null?A=S:R.sibling=S,R=S);return jt&&gs(f,U),A}for(w=i(w);!S.done;U++,S=_.next())S=p(w,f,U,S.value,y),S!==null&&(e&&(E=S.alternate,E!==null&&w.delete(E.key===null?U:E.key)),v=a(S,v,U),R===null?A=S:R.sibling=S,R=S);return e&&w.forEach(function(H){return t(f,H)}),jt&&gs(f,U),A}function m(f,v,_,y){if(typeof _=="object"&&_!==null&&_.type===Gr&&_.key===null&&_.props.ref===void 0&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Mu:t:{for(var A=_.key;v!==null;){if(v.key===A){if(A=_.type,A===Gr){if(v.tag===7){n(f,v.sibling),y=s(v,_.props.children),Xs(y,_),y.return=f,f=y;break t}}else if(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ys&&Fa(A)===v.type){n(f,v.sibling),y=s(v,_.props),Xs(y,_),y.return=f,f=y;break t}n(f,v);break}else t(f,v);v=v.sibling}_.type===Gr?(y=Xa(_.props.children,f.mode,y,_.key),Xs(y,_),y.return=f,f=y):(y=Yu(_.type,_.key,_.props,null,f.mode,y),Xs(y,_),y.return=f,f=y)}return r(f);case Il:t:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(f,v.sibling),y=s(v,_.children||[]),y.return=f,f=y;break t}else{n(f,v);break}else t(f,v);v=v.sibling}y=Lp(_,f.mode,y),y.return=f,f=y}return r(f);case Ys:return _=Fa(_),m(f,v,_,y)}if(Ol(_))return g(f,v,_,y);if(Rl(_)){if(A=Rl(_),typeof A!="function")throw Error(J(150));return _=A.call(_),x(f,v,_,y)}if(typeof _.then=="function")return m(f,v,Uu(_),y);if(_.$$typeof===Zi)return m(f,v,Du(f,_),y);Nu(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,v!==null&&v.tag===6?(n(f,v.sibling),y=s(v,_),y.return=f,f=y):(n(f,v),y=Np(_,f.mode,y),y.return=f,f=y),r(f)):n(f,v)}return function(f,v,_,y){try{sc=0;var A=m(f,v,_,y);return io=null,A}catch(w){if(w===To||w===qh)throw w;var R=Vn(29,w,null,f.mode);return R.lanes=y,R.return=f,R}}}var ja=tS(!0),eS=tS(!1),Zs=!1;function Ag(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(de&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ph(e),Wx(e,null,n),t}return kh(e,i,t,n),ph(e)}function kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,_x(e,n)}}function Op(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Sm=!1;function Xl(){if(Sm){var e=no;if(e!==null)throw e}}function ql(e,t,n,i){Sm=!1;var s=e.updateQueue;Zs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,u=c=l=null,o=a;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(ae&h)===h:(i&h)===h){h!==0&&h===Qa&&(Sm=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;h=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,h);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break t;d=Ae({},d,h);break t;case 2:Zs=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),ga|=r,e.lanes=r,e.memoizedState=d}}function nS(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function iS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)nS(n[e],t)}var pa=es(null),yh=es(0);function ty(e,t){e=Ts,De(yh,e),De(pa,t),Ts=e|t.baseLanes}function Mm(){De(yh,Ts),De(pa,pa.current)}function wg(){Ts=yh.current,fn(pa),fn(yh)}var mn=es(null),Sn=null;function ra(e){var t=e.alternate;De(dn,dn.current&1),De(mn,e),Sn===null&&(t===null||pa.current!==null||t.memoizedState!==null)&&(Sn=e)}function bm(e){De(dn,dn.current),De(mn,e),Sn===null&&(Sn=e)}function sS(e){e.tag===22?(De(dn,dn.current),De(mn,e),Sn===null&&(Sn=e)):oa()}function oa(){De(dn,dn.current),De(mn,mn.current)}function Qn(e){fn(mn),Sn===e&&(Sn=null),fn(dn)}var dn=es(0);function ac(e,t){De(mn,mn.current),De(dn,t)}function Rg(e){fn(dn),fn(mn),Sn===e&&(Sn=null)}function xh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ig(n)||e0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ms=0,Wt=null,Ee=null,ke=null,Sh=!1,so=!1,$a=!1,Mh=0,rc=0,ao=null,yA=0;function Be(){throw Error(J(321))}function Cg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!si(e[n],t[n]))return!1;return!0}function Dg(e,t,n,i,s,a){return Ms=a,Wt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ht.H=e===null||e.memoizedState===null?OS:PS,$a=!1,a=n(i,s),$a=!1,so&&(a=rS(t,n,i,s)),aS(e),a}function aS(e){Ht.H=bh;var t=Ee!==null&&Ee.next!==null;if(Ms=0,ke=Ee=Wt=null,Sh=!1,rc=0,ao=null,t)throw Error(J(300));e===null||qe||(e=e.dependencies,e!==null&&vh(e)&&(qe=!0))}function rS(e,t,n,i){Wt=e;var s=0;do{if(so&&(ao=null),rc=0,so=!1,25<=s)throw Error(J(301));if(s+=1,ke=Ee=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ht.H=wA,a=t(n,i)}while(so);return a}function xA(){var e=Ht.H,t=e.useState()[0];return t=typeof t.then=="function"?Sc(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(Wt.flags|=1024),t}function Ug(){var e=Mh!==0;return Mh=0,e}function Ng(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Lg(e){if(Sh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Sh=!1}Ms=0,ke=Ee=Wt=null,so=!1,rc=Mh=0,ao=null}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?Wt.memoizedState=ke=e:ke=ke.next=e,ke}function He(){if(Ee===null){var e=Wt.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=ke===null?Wt.memoizedState:ke.next;if(t!==null)ke=t,Ee=e;else{if(e===null)throw Wt.alternate===null?Error(J(467)):Error(J(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},ke===null?Wt.memoizedState=ke=e:ke=ke.next=e}return ke}function Wh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sc(e){var t=rc;return rc+=1,ao===null&&(ao=[]),e=$x(ao,e,t),t=Wt,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,Ht.H=t===null||t.memoizedState===null?OS:PS),e}function Yh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sc(e);if(e.$$typeof===eT)return;if(e.$$typeof===Zi)return hn(e)}throw Error(J(438,String(e)))}function Ig(e){var t=null,n=Wt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Wt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Wh(),Wt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=tT;return t.index++,n}function bs(e,t){return typeof t=="function"?t(e):t}function Ku(e){var t=He();return Og(t,Ee,e)}function Og(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ae&d)===d:(Ms&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Qa&&(u=!0);else if((Ms&h)===h){c=c.next,h===Qa&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Wt.lanes|=h,ga|=h;d=c.action,$a&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,Wt.lanes|=d,ga|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!si(a,e.memoizedState)&&(qe=!0,u&&(n=no,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Pp(e){var t=He(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);si(a,t.memoizedState)||(qe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function oS(e,t,n){var i=Wt,s=He(),a=jt;if(a){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!si((Ee||s).memoizedState,n);if(r&&(s.memoizedState=n,qe=!0),s=s.queue,Pg(uS.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||ke!==null&&(ke.memoizedState.tag&1)!==0,fo(e?9:8,{destroy:void 0},cS.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Te===null)throw Error(J(349));a||(Ms&127)!==0||lS(i,t,n)}return n}function lS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Wt.updateQueue,t===null?(t=Wh(),Wt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cS(e,t,n,i){t.value=n,t.getSnapshot=i,hS(t)&&fS(e)}function uS(e,t,n){return n(function(){hS(t)&&fS(e)})}function hS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!si(e,n)}catch{return!0}}function fS(e){var t=ar(e,2);t!==null&&Gn(t,e,2)}function Em(e){var t=Dn();if(typeof e=="function"){var n=e;if(e=n(),$a){Ks(!0);try{n()}finally{Ks(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:e},t}function dS(e,t,n,i){return e.baseState=n,Og(e,Ee,typeof i=="function"?i:bs)}function SA(e,t,n,i,s){if(Jh(e))throw Error(J(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ht.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,pS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function pS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ht.T,r={};r.types=a!==null?a.types:null,Ht.T=r;try{var o=n(s,i),l=Ht.S;l!==null&&l(r,o),ey(e,t,o)}catch(c){Tm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ht.T=a}}else try{a=n(s,i),ey(e,t,a)}catch(c){Tm(e,t,c)}}function ey(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ny(e,t,i)},function(i){return Tm(e,t,i)}):ny(e,t,n)}function ny(e,t,n){t.status="fulfilled",t.value=n,mS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,pS(e,n)))}function Tm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,mS(t),t=t.next;while(t!==i)}e.action=null}function mS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gS(e,t){return t}function iy(e,t){if(jt){var n=Te.formState;if(n!==null){t:{var i=Wt;if(jt){if(Ce){e:{for(var s=Ce,a=bi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ei(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ce=Ei(s.nextSibling),i=s.data==="F!";break t}}da(i)}i=!1}i&&(t=n[0])}}return n=Dn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gS,lastRenderedState:t},n.queue=i,n=NS.bind(null,Wt,i),i.dispatch=n,i=Em(!1),a=Hg.bind(null,Wt,!1,i.queue),i=Dn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=SA.bind(null,Wt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function sy(e){var t=He();return vS(t,Ee,e)}function vS(e,t,n){if(t=Og(e,t,gS)[0],e=Ku(bs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Sc(t)}catch(r){throw r===To?qh:r}else i=t;t=He();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Wt.flags|=2048,fo(9,{destroy:void 0},MA.bind(null,s,n),null)),[i,a,e]}function MA(e,t){e.action=t}function ay(e){var t=He(),n=Ee;if(n!==null)return vS(t,n,e);He(),t=t.memoizedState,n=He();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function fo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Wt.updateQueue,t===null&&(t=Wh(),Wt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function _S(){return He().memoizedState}function Qu(e,t,n,i){var s=Dn();Wt.flags|=e,s.memoizedState=fo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Zh(e,t,n,i){var s=He();i=i===void 0?null:i;var a=s.memoizedState.inst;Ee!==null&&i!==null&&Cg(i,Ee.memoizedState.deps)?s.memoizedState=fo(t,a,n,i):(Wt.flags|=e,s.memoizedState=fo(1|t,a,n,i))}function ry(e,t){Qu(8390656,8,e,t)}function Pg(e,t){Zh(2048,8,e,t)}function bA(e){Wt.flags|=4;var t=Wt.updateQueue;if(t===null)t=Wh(),Wt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function yS(e){var t=He().memoizedState;return bA({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function xS(e,t){return Zh(4,2,e,t)}function SS(e,t){return Zh(4,4,e,t)}function MS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bS(e,t,n){n=n!=null?n.concat([e]):null,Zh(4,4,MS.bind(null,t,e),n)}function zg(){}function ES(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Cg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function TS(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Cg(t,i[1]))return i[0];if(i=e(),$a){Ks(!0);try{e()}finally{Ks(!1)}}return n.memoizedState=[i,t],i}function Bg(e,t,n){return n===void 0||(Ms&1073741824)!==0&&(ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=vM(),Wt.lanes|=e,ga|=e,n)}function AS(e,t,n,i){return si(n,t)?n:pa.current!==null?(e=Bg(e,n,i),si(e,t)||(qe=!0),e):(Ms&106)===0||(Ms&1073741824)!==0&&(ae&261930)===0?(qe=!0,e.memoizedState=n):(e=vM(),Wt.lanes|=e,ga|=e,t)}function wS(e,t,n,i,s){var a=pe.p;pe.p=a!==0&&8>a?a:8;var r=Ht.T,o={};o.types=r!==null?r.types:null,Ht.T=o,Hg(e,!1,t,n);try{var l=s(),c=Ht.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=_A(l,i);Wl(e,t,u,ii(e))}else Wl(e,t,i,ii(e))}catch(d){Wl(e,t,{then:function(){},status:"rejected",reason:d},ii())}finally{pe.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ht.T=r}}function EA(){}function Am(e,t,n,i){if(e.tag!==5)throw Error(J(476));var s=RS(e).queue;wS(e,s,t,ka,n===null?EA:function(){return CS(e),n(i)})}function RS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ka,baseState:ka,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:ka},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function CS(e){var t=RS(e);t.next===null&&(t=e.alternate.memoizedState),Wl(e,t.next.queue,{},ii())}function Fg(){return hn(xo)}function DS(){return He().memoizedState}function US(){return He().memoizedState}function TA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ii();e=sa(n);var i=aa(t,e,n);i!==null&&(Gn(i,t,n),kl(i,t,n)),t={cache:bg()},e.payload=t;return}t=t.return}}function AA(e,t,n){var i=ii();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Jh(e)?LS(t,n):(n=xg(e,t,n,i),n!==null&&(Gn(n,e,i),IS(n,t,i)))}function NS(e,t,n){var i=ii();Wl(e,t,n,i)}function Wl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jh(e))LS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,si(o,r))return kh(e,t,s,0),Te===null&&Gh(),!1}catch{}if(n=xg(e,t,s,i),n!==null)return Gn(n,e,i),IS(n,t,i),!0}return!1}function Hg(e,t,n,i){if(i={lane:2,revertLane:Qg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Jh(e)){if(t)throw Error(J(479))}else t=xg(e,n,i,2),t!==null&&Gn(t,e,2)}function Jh(e){var t=e.alternate;return e===Wt||t!==null&&t===Wt}function LS(e,t){so=Sh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function IS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,_x(e,n)}}var bh={readContext:hn,use:Yh,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be,useEffectEvent:Be},OS={readContext:hn,use:Yh,useCallback:function(e,t){return Dn().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:ry,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Qu(4194308,4,MS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qu(4194308,4,e,t)},useInsertionEffect:function(e,t){Qu(4,2,e,t)},useMemo:function(e,t){var n=Dn();t=t===void 0?null:t;var i=e();if($a){Ks(!0);try{e()}finally{Ks(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Dn();if(n!==void 0){var s=n(t);if($a){Ks(!0);try{n(t)}finally{Ks(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=AA.bind(null,Wt,e),[i.memoizedState,e]},useRef:function(e){var t=Dn();return e={current:e},t.memoizedState=e},useState:function(e){e=Em(e);var t=e.queue,n=NS.bind(null,Wt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zg,useDeferredValue:function(e,t){var n=Dn();return Bg(n,e,t)},useTransition:function(){var e=Em(!1);return e=wS.bind(null,Wt,e.queue,!0,!1),Dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Wt,s=Dn();if(jt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),Te===null)throw Error(J(349));(ae&127)!==0||lS(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,ry(uS.bind(null,i,a,e),[e]),i.flags|=2048,fo(9,{destroy:void 0},cS.bind(null,i,a,n,t),null),n},useId:function(){var e=Dn(),t=Te.identifierPrefix;if(jt){var n=Qi,i=Ki;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Mh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=yA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Fg,useFormState:iy,useActionState:iy,useOptimistic:function(e){var t=Dn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hg.bind(null,Wt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ig,useCacheRefresh:function(){return Dn().memoizedState=TA.bind(null,Wt)},useEffectEvent:function(e){var t=Dn(),n={impl:e};return t.memoizedState=n,function(){if((de&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},PS={readContext:hn,use:Yh,useCallback:ES,useContext:hn,useEffect:Pg,useImperativeHandle:bS,useInsertionEffect:xS,useLayoutEffect:SS,useMemo:TS,useReducer:Ku,useRef:_S,useState:function(){return Ku(bs)},useDebugValue:zg,useDeferredValue:function(e,t){var n=He();return AS(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Ku(bs)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Sc(e),t]},useSyncExternalStore:oS,useId:DS,useHostTransitionStatus:Fg,useFormState:sy,useActionState:sy,useOptimistic:function(e,t){var n=He();return dS(n,Ee,e,t)},useMemoCache:Ig,useCacheRefresh:US,useEffectEvent:yS},wA={readContext:hn,use:Yh,useCallback:ES,useContext:hn,useEffect:Pg,useImperativeHandle:bS,useInsertionEffect:xS,useLayoutEffect:SS,useMemo:TS,useReducer:Pp,useRef:_S,useState:function(){return Pp(bs)},useDebugValue:zg,useDeferredValue:function(e,t){var n=He();return Ee===null?Bg(n,e,t):AS(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Pp(bs)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Sc(e),t]},useSyncExternalStore:oS,useId:DS,useHostTransitionStatus:Fg,useFormState:ay,useActionState:ay,useOptimistic:function(e,t){var n=He();return Ee!==null?dS(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ig,useCacheRefresh:US,useEffectEvent:yS};function zp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ii(),s=sa(i);s.payload=t,n!=null&&(s.callback=n),t=aa(e,s,i),t!==null&&(Gn(t,e,i),kl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ii(),s=sa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=aa(e,s,i),t!==null&&(Gn(t,e,i),kl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ii(),i=sa(n);i.tag=2,t!=null&&(i.callback=t),t=aa(e,i,n),t!==null&&(Gn(t,e,n),kl(t,e,n))}};function oy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!ec(n,i)||!ec(s,a):!0}function ly(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&wm.enqueueReplaceState(t,t.state,null)}function tr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ae({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function zS(e){dh(e)}function BS(e){console.error(e)}function FS(e){dh(e)}function Eh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function cy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Rm(e,t,n){return n=sa(n),n.tag=3,n.payload={element:null},n.callback=function(){Eh(e,t)},n}function HS(e){return e=sa(e),e.tag=3,e}function VS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){cy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){cy(t,n,i),typeof s!="function"&&(la===null?la=new Set([this]):la.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function RA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ja(t,n,s,!0),n=mn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Sn===null?Nh():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===_h?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Xp(e,i,s)),!1;case 22:return n.flags|=65536,i===_h?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Xp(e,i,s)),!1}throw Error(J(435,n.tag))}return Xp(e,i,s),Nh(),!1}if(jt)return t=mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==gm&&(e=Error(J(422),{cause:i}),ic(Mi(e,n)))):(i!==gm&&(t=Error(J(423),{cause:i}),ic(Mi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Mi(i,n),s=Rm(e.stateNode,i,s),Op(e,s),Fe!==4&&(Fe=2)),!1;var a=Error(J(520),{cause:i});if(a=Mi(a,n),Kl===null?Kl=[a]:Kl.push(a),Fe!==4&&(Fe=2),t===null)return!0;i=Mi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Rm(n.stateNode,i,e),Op(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(la===null||!la.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=HS(s),VS(s,e,n,i),Op(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Vg=Error(J(461)),qe=!1;function Ze(e,t,n,i){t.child=e===null?eS(t,null,n,i):ja(t,e.child,n,i)}function uy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ka(t),i=Dg(e,t,n,r,a,s),o=Ug(),e!==null&&!qe?(Ng(e,t,s),Es(e,t,s)):(jt&&o&&Xh(t),t.flags|=1,Ze(e,t,i,s),t.child)}function hy(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Sg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,GS(e,t,a,i,s)):(e=Yu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:ec,n(r,i)&&e.ref===t.ref)return Es(e,t,s)}return t.flags|=1,e=_s(a,i),e.ref=t.ref,e.return=t,t.child=e}function GS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(ec(a,i)&&e.ref===t.ref)if(qe=!1,t.pendingProps=i=a,kg(e,s))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Es(e,t,s)}return Cm(e,t,n,i,s)}function kS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return fy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ju(t,a!==null?a.cachePool:null),a!==null?ty(t,a):Mm(),sS(t);else return i=t.lanes=536870912,fy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Ju(t,a.cachePool),ty(t,a),oa(),t.memoizedState=null):(e!==null&&Ju(t,null),Mm(),oa());return Ze(e,t,s,n),t.child}function Yl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fy(e,t,n,i,s){var a=Eg();return a=a===null?null:{parent:Xe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ju(t,null),Mm(),sS(t),e!==null&&Ja(e,t,i,!0),t.childLanes=s,null}function ju(e,t){return t=Kh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dy(e,t,n){return ja(t,e.child,null,n),e=ju(t,t.pendingProps),e.flags|=2,Qn(t),t.memoizedState=null,e}function CA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(jt){if(i.mode==="hidden")return e=ju(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Yl(null,e);if(bm(t),(e=Ce)?(e=kM(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},n=Zx(e),n.return=t,t.child=n,rn=t,Ce=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return ju(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(bm(t),s)if(t.flags&256)t.flags&=-257,t=dy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(qe||Ja(e,t,n,!1),s=(n&e.childLanes)!==0,qe||s){if(pa.current===null){if(i=Te,i!==null&&(r=yx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,ar(e,r),Gn(i,e,r),Vg;Nh()}t=dy(e,t,n)}else e=a.treeContext,Ce=Ei(r.nextSibling),rn=t,jt=!0,ia=null,bi=!1,e!==null&&Kx(t,e),t=ju(t,i),t.flags|=134221824;return t}return e=_s(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Br(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cm(e,t,n,i,s){return Ka(t),n=Dg(e,t,n,i,void 0,s),i=Ug(),e!==null&&!qe?(Ng(e,t,s),Es(e,t,s)):(jt&&i&&Xh(t),t.flags|=1,Ze(e,t,n,s),t.child)}function py(e,t,n,i,s,a){return Ka(t),t.updateQueue=null,n=rS(t,i,n,s),aS(e),i=Ug(),e!==null&&!qe?(Ng(e,t,a),Es(e,t,a)):(jt&&i&&Xh(t),t.flags|=1,Ze(e,t,n,a),t.child)}function my(e,t,n,i,s){if(Ka(t),t.stateNode===null){var a=Jr,r=n.contextType;typeof r=="object"&&r!==null&&(a=hn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=wm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Ag(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?hn(r):Jr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(zp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&wm.enqueueReplaceState(a,a.state,null),ql(t,i,a,s),Xl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=tr(n,o);a.props=l;var c=a.context,u=n.contextType;r=Jr,typeof u=="object"&&u!==null&&(r=hn(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&ly(t,a,i,r),Zs=!1;var h=t.memoizedState;a.state=h,ql(t,i,a,s),Xl(),c=t.memoizedState,o||h!==c||Zs?(typeof d=="function"&&(zp(t,n,d,i),c=t.memoizedState),(l=Zs||oy(t,n,l,i,h,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,xm(e,t),r=t.memoizedProps,u=tr(n,r),a.props=u,d=t.pendingProps,h=a.context,c=n.contextType,l=Jr,typeof c=="object"&&c!==null&&(l=hn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||h!==l)&&ly(t,a,i,l),Zs=!1,h=t.memoizedState,a.state=h,ql(t,i,a,s),Xl();var p=t.memoizedState;r!==d||h!==p||Zs||e!==null&&e.dependencies!==null&&vh(e.dependencies)?(typeof o=="function"&&(zp(t,n,o,i),p=t.memoizedState),(u=Zs||oy(t,n,u,i,h,p,l)||e!==null&&e.dependencies!==null&&vh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Br(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ja(t,e.child,null,s),t.child=ja(t,null,n,s)):Ze(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Es(e,t,s),e}function gy(e,t,n,i){return Za(),t.flags|=256,Ze(e,t,n,i),t.child}var Dm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Um(e){return{baseLanes:e,cachePool:jx()}}function Nm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=$n),e}function XS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(jt){if(s?ra(t):oa(),(e=Ce)?(e=kM(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},n=Zx(e),n.return=t,t.child=n,rn=t,Ce=null)):e=null,e===null)throw da(t);return e0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(oa(),s=t.mode,a=Kh({mode:"hidden",children:a},s),i=Xa(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Um(n),i.childLanes=Nm(e,r,n),t.memoizedState=Dm,Yl(null,i)):(ra(t),Gg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return DA(e,t,a,r,i,l,o,n)}return s?(oa(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=_s(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=_s(l,s):(s=Xa(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Yl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Um(n):(a=s.cachePool,a!==null?(o=Xe._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=jx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Nm(e,r,n),t.memoizedState=Dm,Yl(e.child,i)):(ra(t),n=e.child,e=n.sibling,n=_s(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Gg(e,t){return t=Kh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Kh(e,t){return e=Vn(22,e,null,t),e.lanes=0,e}function Lu(e,t,n){return ja(t,e.child,null,n),e=Gg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function DA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(ra(t),t.flags&=-257,Lu(e,t,o)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,null):(oa(),a=s.fallback,r=t.mode,s=Kh({mode:"visible",children:s.children},r),a=Xa(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,ja(t,e.child,null,o),s=t.child,s.memoizedState=Um(o),s.childLanes=Nm(e,i,o),t.memoizedState=Dm,Yl(null,s));if(ra(t),e0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(J(419)),s.stack="",s.digest=i,ic({value:s,source:null,stack:null})),Lu(e,t,o)}if(qe||Ja(e,t,o,!1),i=(o&e.childLanes)!==0,qe||i){if(pa.current!==null)return Lu(e,t,o);if(i=Te,i!==null&&(s=yx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,ar(e,s),Gn(i,e,s),Vg;return ig(a)||Nh(),Lu(e,t,o)}return ig(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ce=Ei(a.nextSibling),rn=t,jt=!0,ia=null,bi=!1,e!==null&&Kx(t,e),t=Gg(t,s.children),t.flags|=134221824,t)}function vy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Zu(e.return,t,n)}function _y(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&xh(n)===null&&(t=e),e=e.sibling}return t}function Iu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Bp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Lm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=dn.current;if(t.flags&128)return ac(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ac(t,r),s==="backwards"&&e!==null?(Bp(e),Ze(e,t,i,n),Bp(e)):Ze(e,t,i,n),i=jt?nc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vy(e,n,t);else if(e.tag===19)vy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=_y(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Bp(t)),Iu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&xh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Iu(t,!0,n,null,a,i);break;case"together":Iu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=_y(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Iu(t,!1,s,n,a,i)}return t.child}function yy(e,t,n){var i=t.pendingProps;return js(t,t.type,i.value),Ze(e,t,i.children,n),t.child}function Es(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ga|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ja(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=_s(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_s(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&vh(e)))}function UA(e,t,n){switch(t.tag){case 3:ch(t,t.stateNode.containerInfo),js(t,Xe,e.memoizedState.cache),Za();break;case 27:case 5:rm(t);break;case 4:ch(t,t.stateNode.containerInfo);break;case 10:js(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return ra(t),t.flags|=128,null;i=Ja(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?XS(e,t,n):(ra(t),e=Es(e,t,n),e!==null?e.sibling:null)}ra(t);break;case 19:if(t.flags&128)return Lm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ja(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Lm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ac(t,dn.current),i)break;return null;case 22:return t.lanes=0,kS(e,t,n,t.pendingProps);case 24:js(t,Xe,e.memoizedState.cache)}return Es(e,t,n)}function qS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!kg(e,n)&&(t.flags&128)===0)return qe=!1,UA(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,jt&&(t.flags&1048576)!==0&&Jx(t,nc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e=="function")Sg(e)?(i=tr(e,i),t.tag=1,t=my(null,t,e,i,n)):(t.tag=0,t=Cm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===lg){t.tag=11,t=uy(null,t,e,i,n);break t}else if(s===cg){t.tag=14,t=hy(null,t,e,i,n);break t}else if(s===Zi){t.tag=10,t.type=e,t=yy(null,t,n);break t}}throw t=sm(e)||e,Error(J(306,t,""))}}return t;case 0:return Cm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=tr(i,t.pendingProps),my(e,t,i,s,n);case 3:t:{if(ch(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,xm(e,t),ql(t,i,null,n);var r=t.memoizedState;if(i=r.cache,js(t,Xe,i),i!==a.cache&&_m(t,[Xe],n,!0),Xl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=gy(e,t,i,n);break t}else if(i!==s){s=Mi(Error(J(424)),t),ic(s),t=gy(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=Ei(e.firstChild),rn=t,jt=!0,ia=null,bi=!0,n=eS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Za(),i===s){t=Es(e,t,n);break t}Ze(e,t,i,n)}t=t.child}return t;case 26:return Br(e,t),e===null?(n=Wy(t.type,null,t.pendingProps,null))?t.memoizedState=n:jt||(t.stateNode=IM(t.type,t.pendingProps,na.current,t)):t.memoizedState=Wy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rm(t),e===null&&jt&&(i=t.stateNode=XM(t.type,t.pendingProps,na.current),rn=t,bi=!0,s=Ce,_a(t.type)?(sg=s,Ce=Ei(i.firstChild)):Ce=s),Ze(e,t,t.pendingProps.children,n),Br(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&jt&&((s=i=Ce)&&(i=bw(i,t.type,t.pendingProps,bi),i!==null?(t.stateNode=i,rn=t,Ce=Ei(i.firstChild),bi=!1,s=!0):s=!1),s||da(t)),rm(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,tg(s,a)?i=null:r!==null&&tg(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Dg(e,t,xA,null,null,n),xo._currentValue=s),Br(e,t),Ze(e,t,i,n),t.child;case 6:return e===null&&jt&&((e=n=Ce)&&(n=Ew(n,t.pendingProps,bi),n!==null?(t.stateNode=n,rn=t,Ce=null,e=!0):e=!1),e||da(t)),null;case 13:return XS(e,t,n);case 4:return ch(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ja(t,null,i,n):Ze(e,t,i,n),t.child;case 11:return uy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Br(e,t),Ze(e,t,i,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:return yy(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Ka(t),s=hn(s),i=i(s),t.flags|=1,Ze(e,t,i,n),t.child;case 14:return hy(e,t,t.type,t.pendingProps,n);case 15:return GS(e,t,t.type,t.pendingProps,n);case 19:return Lm(e,t,n);case 31:return CA(e,t,n);case 22:return kS(e,t,n,t.pendingProps);case 24:return Ka(t),i=hn(Xe),e===null?(s=Eg(),s===null&&(s=Te,a=bg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Ag(t),js(t,Xe,s)):((e.lanes&n)!==0&&(xm(e,t),ql(t,null,null,n),Xl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),js(t,Xe,i)):(i=a.cache,js(t,Xe,i),i!==s.cache&&_m(t,[Xe],n,!0))),Ze(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:jt&&Xh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Br(e,t),Ze(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function ms(e){e.flags|=4}function Fp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Jy(t,i):Jy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(xM())e.flags|=8192;else throw Wa=_h,Tg}else e.flags&=-16777217}function xy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ZM(t))if(xM())e.flags|=8192;else throw Wa=_h,Tg}function Ou(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gx():536870912,e.lanes|=t,po|=t)}function Dl(e,t){if(!jt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function NA(e,t,n){var i=t.pendingProps;switch(Mg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ys(Xe),co(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?ms(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ip())),Re(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ms(t),a!==null?(Re(t),xy(t,a)):(Re(t),Fp(t,s,null,i,n))):a?a!==e.memoizedState?(ms(t),Re(t),xy(t,a)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ms(t),Re(t),Fp(t,s,e,i,n)),null;case 27:if(uh(t),n=na.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ms(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Re(t),t.subtreeFlags&=-33554433,null}e=ji.current,Pr(t)?Y_(t,e):(e=XM(s,i,n),t.stateNode=e,ms(t))}return Re(t),t.subtreeFlags&=-33554433,null;case 5:if(uh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ms(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return Re(t),t.subtreeFlags&=-33554433,null}if(a=ji.current,Pr(t))Y_(t,a);else{var r=cc(na.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[un]=t,a[Xn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(pn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ms(t)}}return Re(t),t.subtreeFlags&=-33554433,Fp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ms(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=na.current,Pr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=rn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[un]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||NM(e.nodeValue,n)),e||da(t,!0)}else e=cc(e).createTextNode(i),e[un]=t,t.stateNode=e}return Re(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Pr(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[un]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else n=Ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Qn(t),t):(Qn(t),null);if((t.flags&128)!==0)throw Error(J(558))}return Re(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Pr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[un]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),s=!1}else s=Ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Qn(t),t):(Qn(t),null)}return Qn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ou(t,t.updateQueue),Re(t),null);case 4:return co(),e===null&&jg(t.stateNode.containerInfo),t.flags|=67108864,Re(t),null;case 10:return ys(t.type),Re(t),null;case 19:if(Rg(t),i=t.memoizedState,i===null)return Re(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Dl(i,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=xh(e),a!==null){for(t.flags|=128,Dl(i,!1),e=a.updateQueue,t.updateQueue=e,Ou(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Yx(n,e),n=n.sibling;return ac(t,dn.current&1|2),jt&&gs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ti()>Dh&&(t.flags|=128,s=!0,Dl(i,!1),t.lanes=4194304)}else{if(!s)if(e=xh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Ou(t,e),Dl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!jt)return Re(t),null}else 2*ti()-i.renderingStartTime>Dh&&n!==536870912&&(t.flags|=128,s=!0,Dl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ti(),e.sibling=null,a=dn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||jt?ac(t,a):(n=a,De(mn,t),De(dn,n),Sn===null&&(Sn=t)),jt&&gs(t,i.treeForkCount),e}return Re(t),null;case 22:case 23:return Qn(t),wg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),n=t.updateQueue,n!==null&&Ou(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&fn(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ys(Xe),Re(t),null;case 25:return null;case 30:return t.flags|=33554432,Re(t),null}throw Error(J(156,t.tag))}function LA(e,t){switch(Mg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ys(Xe),co(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return uh(t),null;case 31:if(t.memoizedState!==null){if(Qn(t),t.alternate===null)throw Error(J(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Qn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Rg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return co(),null;case 10:return ys(t.type),null;case 22:case 23:return Qn(t),wg(),e!==null&&fn(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ys(Xe),null;case 25:return null;default:return null}}function WS(e,t){switch(Mg(t),t.tag){case 3:ys(Xe),co();break;case 26:case 27:case 5:uh(t);break;case 4:co();break;case 31:t.memoizedState!==null&&Qn(t);break;case 13:Qn(t);break;case 19:Rg(t);break;case 10:ys(t.type);break;case 22:case 23:Qn(t),wg(),e!==null&&fn(qa);break;case 24:ys(Xe)}}function Mc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){xe(t,t.return,o)}}function ma(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){xe(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){xe(t,t.return,u)}}function YS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{iS(t,n)}catch(i){xe(e,e.return,i)}}}function ZS(e,t,n){n.props=tr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){xe(e,t,i)}}function Wi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Ss(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=BM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new ai(e);kn(e.child,!1,Sw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){xe(e,t,o)}}function cn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){xe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){xe(e,t,s)}else n.current=null}function Th(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)GM(e.stateNode,t[n])}function Sy(e){for(var t=e.return;t!==null&&(qg(t)&&GM(e.stateNode,t.stateNode),!Xg(t));)t=t.return}function Zl(e){for(var t=e.return;t!==null&&(qg(t)&&Mw(e.stateNode,t.stateNode),!Xg(t));)t=t.return}function Xg(e){return e.tag===5||e.tag===3||e.tag===27}function qg(e){return e&&e.tag===7&&e.stateNode!==null}function Im(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){xe(e,e.return,s)}}function Hp(e,t,n){try{var i=e.stateNode;iw(i,e.type,n,t),i[Xn]=t}catch(s){xe(e,e.return,s)}}function JS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function Vp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||JS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Om(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji)),Th(e,i),fe=!0;else if(s!==4&&(s===27&&(Th(e,i),i=null,_a(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Om(e,t,n,i),e=e.sibling;e!==null;)Om(e,t,n,i),e=e.sibling}function Ah(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Th(e,i),fe=!0;else if(s!==4&&(s===27&&(Th(e,i),i=null,_a(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ah(e,t,n,i),e=e.sibling;e!==null;)Ah(e,t,n,i),e=e.sibling}function KS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);pn(t,i,n),t[un]=e,t[Xn]=n}catch(a){xe(e,e.return,a)}}var wh=!1,jn=null;function My(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(wh=!0)}var Yi=null;function by(){var e=Yi;return Yi=null,e}var Hn=0;function Ao(e,t,n,i,s){return Hn=0,QS(e.child,t,n,i,s)}function QS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=eg(r);i.push(o),o.view&&(a=!0)}else a||eg(r).view&&(a=!0);wh=!0,OM(r,Hn===0?t:t+"_"+Hn,n),Hn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||QS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ts(e,t){for(;e!==null;)e.tag===5?PM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ts(e.child,t)),e=e.sibling}function $u(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&($u(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(J(544));var n=t.name;t=ws(t.default,t.share),t!=="none"&&(Ao(e,n,t,null,!1)||ts(e.child,!1))}e=e.sibling}}function Pm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Ss(i,n),a=ws(i.default,n.paired?i.share:i.enter);a!=="none"?Ao(e,s,a,null,!1)?($u(e),n.paired||t||mo(e,i.onEnter)):ts(e.child,!1):$u(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Pm(e,t),e=e.sibling;else $u(e)}function zm(e){if(jn!==null&&jn.size!==0){var t=jn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=ws(n.default,n.share);if(a!=="none"&&(Ao(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,mo(e,n.onShare)):ts(e.child,!1)),t.delete(i),t.size===0)break}}}zm(e)}e=e.sibling}}}function Bm(e){if(e.tag===30){var t=e.memoizedProps,n=Ss(t,e.stateNode),i=jn!==null?jn.get(n):void 0,s=ws(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Ao(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,jn.delete(n),mo(e,t.onShare)):mo(e,t.onExit):ts(e.child,!1)),jn!==null&&zm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bm(e),e=e.sibling;else jn!==null&&zm(e)}function jS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Ss(t,e.stateNode);t=ws(t.default,t.update),e.flags&=-5,t!=="none"&&Ao(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&jS(e);e=e.sibling}}function Fm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ts(e.child,!1))}Fm(e)}e=e.sibling}}function th(e){if(e.tag===30)e.stateNode.paired=null,ts(e.child,!1),Fm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)th(e),e=e.sibling;else Fm(e)}function $S(e){for(e=e.child;e!==null;)e.tag===30?ts(e.child,!1):(e.subtreeFlags&33554432)!==0&&$S(e),e=e.sibling}function Wg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Hn<a.length){var c=a[Hn],u=eg(l);(c.view||u.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(u.clip)d=!0;else{d=c.rect;var h=u.rect;d=d.y!==h.y||d.x!==h.x||d.height!==h.height||d.width!==h.width}d&&(e.flags|=4),u.abs?u=!c.abs:(c=c.rect,u=u.rect,u=c.height!==u.height||c.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&OM(l,Hn===0?n:n+"_"+Hn,s),o&&(e.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(l,Hn===0?i:i+"_"+Hn,t.memoizedProps)),Hn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Wg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function tM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Ss(n,i),a=ws(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(cw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Hn=0,s=Wg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||mo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&tM(e,t);e=e.sibling}}var nn=!1,me=!1,ki=!1,Gp=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,sn=null,Xi=!1,Bl=!1,Rh=!1,Hm=!1;function IA(e,t,n){if(e=e.containerInfo,jm=So,e=Fx(e),_g(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,u=0,d=0,h=e,p=null;e:for(;;){for(var g;h!==i||a!==0&&h.nodeType!==3||(l=o+a),h!==r||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===e)break e;if(p===i&&++u===a&&(l=o),p===r&&++d===s&&(c=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for($m={focusedElem:e,selectionRange:i},So=!1,n=(n&335544064)===n,sn=t,t=n?9270:1024;sn!==null;){if(e=sn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Bm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&My(e),Pu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Bm(i),Pu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&My(e),Pu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,sn=i):(n&&jS(e),Pu(n))}}jn=null}function Pu(e){for(;sn!==null;){var t=sn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=tr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){xe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)ng(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":ng(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Ss(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=ws(s.default,s.update),s!=="none"&&Ao(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(J(163))}if(i=t.sibling,i!==null){i.return=t.return,sn=i;break}sn=t.return}}function eM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:qi(e,n),i&4&&Mc(5,n);break;case 1:if(qi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){xe(n,n.return,r)}else{var s=tr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){xe(n,n.return,r)}}i&64&&YS(n),i&512&&Wi(n,n.return);break;case 3:if(qi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{iS(e,t)}catch(r){xe(n,n.return,r)}}break;case 27:t===null&&i&4&&KS(n);case 26:case 5:qi(e,n),t===null&&i&4&&Im(n),i&512&&Wi(n,n.return);break;case 12:qi(e,n);break;case 31:qi(e,n),i&4&&aM(e,n);break;case 13:qi(e,n),i&4&&rM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=WA.bind(null,n),Tw(e,n))));break;case 22:if(i=n.memoizedState!==null||nn,!i){var a=t!==null&&t.memoizedState!==null||me;t=nn,s=me,nn=i,(me=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ci(e,n,i)):qi(e,n),nn=t,me=s}break;case 30:qi(e,n),i&512&&Wi(n,n.return);break;case 7:i&512&&Wi(n,n.return);default:qi(e,n)}}function Vm(e,t){for(e=e.child;e!==null;)nM(e,t),e=e.sibling}function nM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){xe(e,e.return,l)}Gm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,fe=!0}catch(l){xe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Hy(o,!0):Hy(e.stateNode,!1)}catch(l){xe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Vm(e,t);break;default:Vm(e,t)}}function Gm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:nM(n,i);break t;case 22:n.memoizedState===null&&Gm(n,i);break t;default:Gm(n,i)}}e=e.sibling}}function iM(e){var t=e.alternate;t!==null&&(e.alternate=null,iM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,Bn=!1;function Ri(e,t,n){for(n=n.child;n!==null;)sM(e,t,n),n=n.sibling}function sM(e,t,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 26:me||cn(n,t),Ri(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!me&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:me||cn(n,t),Zl(n);var i=Ie,s=Bn;_a(n.type)&&(Ie=n.stateNode,Bn=!1),Ri(e,t,n),qM(n.stateNode,n.type,n.memoizedProps),Ie=i,Bn=s;break;case 5:me||cn(n,t),Zl(n);case 6:if(n.tag===6&&Zl(n),i=Ie,s=Bn,Ie=null,Ri(e,t,n),Ie=i,Bn=s,Ie!==null)if(Bn)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(n.stateNode),fe=!0}catch(a){xe(n,t,a)}else try{Ie.removeChild(n.stateNode),fe=!0}catch(a){xe(n,t,a)}break;case 18:Ie!==null&&(Bn?(e=Ie,Fy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Mo(e)):Fy(Ie,n.stateNode));break;case 4:i=Ie,s=Bn,Ie=n.stateNode.containerInfo,Bn=!0,Ri(e,t,n),Ie=i,Bn=s;break;case 0:case 11:case 14:case 15:ma(2,n,t),me||ma(4,n,t),Ri(e,t,n);break;case 1:me||(cn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ZS(n,t,i)),Ri(e,t,n);break;case 21:Ri(e,t,n);break;case 22:me=(i=me)||n.memoizedState!==null,Ri(e,t,n),me=i;break;case 30:cn(n,t),Ri(e,t,n);break;case 7:me||cn(n,t),Ri(e,t,n);break;default:Ri(e,t,n)}}function aM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mo(e)}catch(n){xe(t,t.return,n)}}}function rM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(n){xe(t,t.return,n)}}function OA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ey),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ey),t;default:throw Error(J(435,e.tag))}}function zu(e,t){var n=OA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=YA.bind(null,e,i);i.then(s,s)}})}function Rn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(_a(l.type)){Ie=l.stateNode,Bn=!1;break t}break;case 5:Ie=l.stateNode,Bn=!1;break t;case 3:case 4:Ie=l.stateNode.containerInfo,Bn=!0;break t}l=l.return}if(Ie===null)throw Error(J(160));sM(r,o,a),Ie=null,Bn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)oM(t,e,n),t=t.sibling}var Di=null;function oM(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Rn(t,e,n),Cn(e),s&4&&(ma(3,e,e.return),Mc(3,e),ma(5,e,e.return));break;case 1:Rn(t,e,n),Cn(e),s&512&&(me||i===null||cn(i,i.return)),s&64&&nn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Di,Rn(t,e,n),Cn(e),s&512&&(me||i===null||cn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(nn)e.stateNode=IM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[_c]||i[un]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),pn(i,t,n),i[un]=e,an(i),t=i;break t;case"link":if(a=Zy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),pn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Zy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),pn(i,t,n),s.head.appendChild(i);break;default:throw Error(J(468,t))}i[un]=e,an(i),t=i}e.stateNode=t}else nn||ag(a,e.type,e.stateNode);else e.stateNode=Yy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||me||t.parentNode.removeChild(t)):s.count--,n===null?nn||ag(a,e.type,e.stateNode):Yy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Hp(e,e.memoizedProps,i.memoizedProps);break;case 27:Rn(t,e,n),Cn(e),s&512&&(me||i===null||cn(i,i.return)),i!==null&&s&4&&Hp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=ki,ki=!1,Rn(t,e,n),ki=a,Cn(e),s&512&&(me||i===null||cn(i,i.return)),e.flags&32){t=e.stateNode;try{ho(t,""),fe=!0}catch(u){xe(e,e.return,u)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Hp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Gp=!0);break;case 6:if(Rn(t,e,n),Cn(e),s&4){if(e.stateNode===null)throw Error(J(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,fe=!0}catch(u){xe(e,e.return,u)}}break;case 3:if(fe=!1,sh=null,a=Di,Di=uc(t.containerInfo),Rn(t,e,n),Di=a,Cn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Mo(t.containerInfo)}catch(u){xe(e,e.return,u)}Gp&&(Gp=!1,lM(e)),fe=!1;break;case 4:s=ki,ki=nn,i=D_(),a=Di,Di=uc(e.stateNode.containerInfo),Rn(t,e,n),Cn(e),Di=a,fe&&Bl&&(Rh=!0),fe=i,ki=s;break;case 12:Rn(t,e,n),Cn(e);break;case 31:Rn(t,e,n),Cn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,zu(e,t)));break;case 13:Rn(t,e,n),Cn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Qh=ti()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,zu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=nn,l=me,c=ki;nn=o||a,ki=c||a,me=l||r,Rn(t,e,n),me=l,ki=c,nn=o,Cn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||nn||me||(t=r||me,n=nn,i=me,nn=a||nn,me=t,Ws(e,2),nn=n,me=i),!a&&ki||Vm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,zu(e,n))));break;case 19:Rn(t,e,n),Cn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,zu(e,t)));break;case 30:s&512&&(me||i===null||cn(i,i.return)),s=D_(),a=Bl,r=(n&335544064)===n,o=e.memoizedProps,Bl=r&&ws(o.default,o.update)!=="none",Rn(t,e,n),Cn(e),r&&i!==null&&fe&&(e.flags|=4),Bl=a,fe=s;break;case 21:break;case 7:s&512&&(me||i===null||cn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Rn(t,e,n),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(JS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(qg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Xg(s))break;s=s.return}var r=i;if(n==null)throw Error(J(160));switch(n.tag){case 27:var o=n.stateNode,l=Vp(e);Ah(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(ho(c,""),n.flags&=-33);var u=Vp(e);Ah(e,u,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=Vp(e);Om(e,h,d,r);break;default:throw Error(J(161))}}catch(p){xe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lM(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,So=!0,t.reset(),So=!1),e=e.sibling}}function zr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)cM(t,e),t=t.sibling;else tM(t,!1)}function cM(e,t){var n=e.alternate;if(n===null)Pm(e,!1);else switch(e.tag){case 3:if(Hm=Xi=!1,by(),zr(t,e),!Xi&&!Rh){if(e=Yi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];PM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Hm=!0}Yi=null;break;case 5:zr(t,e);break;case 4:i=Xi,Xi=!1,zr(t,e),Xi&&(Rh=!0),Xi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Pm(e,!1):zr(t,e));break;case 30:i=Xi,s=by(),Xi=!1,zr(t,e),Xi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Ss(a,r),r=Ss(n.memoizedProps,r);var o=ws(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Hn=0,t=Wg(e,n,t,r,o,a,!0),Hn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(mo(e,e.memoizedProps.onUpdate),Yi=s):s!==null&&(s.push.apply(s,Yi),Yi=s),Xi=(e.flags&32)!==0?!0:i;break;default:zr(t,e)}}function qi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)eM(e,t.alternate,t),t=t.sibling}function Ws(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),Ws(n,i);break;case 1:cn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&ZS(n,n.return,s),Ws(n,i);break;case 27:(i&2)!==0&&qM(n.stateNode,n.type,n.memoizedProps);case 5:cn(n,n.return),n.tag!==5&&n.tag!==27||Zl(n),Ws(n,i);break;case 6:Zl(n);break;case 26:cn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||me||s.parentNode.removeChild(s),Ws(n,i);break;case 22:n.memoizedState===null&&Ws(n,i);break;case 30:cn(n,n.return),Ws(n,i);break;case 7:cn(n,n.return);default:Ws(n,i)}e=e.sibling}}function Ci(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ci(s,a,n),Mc(4,a);break;case 1:if(Ci(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(u){xe(i,i.return,u)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)nS(c[s],l)}catch(u){xe(i,i.return,u)}}o&&r&64&&YS(a),Wi(a,a.return);break;case 27:(n&2)!==0&&KS(a);case 5:a.tag!==5&&a.tag!==27||Sy(a),Ci(s,a,n),o&&i===null&&r&4&&Im(a),Wi(a,a.return);break;case 6:Sy(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||nn||ag(uc(l.ownerDocument),a.type,l),Ci(s,a,n),o&&i===null&&r&4&&Im(a),Wi(a,a.return);break;case 12:Ci(s,a,n);break;case 31:Ci(s,a,n),o&&r&4&&aM(s,a);break;case 13:Ci(s,a,n),o&&r&4&&rM(s,a);break;case 22:a.memoizedState===null&&Ci(s,a,n),Wi(a,a.return);break;case 30:Ci(s,a,n),Wi(a,a.return);break;case 7:Wi(a,a.return);default:Ci(s,a,n)}t=t.sibling}}function Yg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&xc(n))}function Zg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xc(e))}function vi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)uM(e,t,n,i),t=t.sibling;else s&&$S(t)}function uM(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&th(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:vi(e,t,n,i),a&2048&&Mc(9,t);break;case 1:vi(e,t,n,i);break;case 3:vi(e,t,n,i),s&&Hm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&xc(a)));break;case 12:if(a&2048){vi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){xe(t,t.return,c)}}else vi(e,t,n,i);break;case 31:vi(e,t,n,i);break;case 13:vi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&th(o),r._visibility&2?vi(e,t,n,i):Jl(e,t)):(s&&o!==null&&o.memoizedState!==null&&th(t),r._visibility&2?vi(e,t,n,i):(r._visibility|=2,Fr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Yg(o,t);break;case 24:vi(e,t,n,i),a&2048&&Zg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ts(a.child,!0),ts(t.child,!0))),vi(e,t,n,i);break;default:vi(e,t,n,i)}}function Fr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Fr(a,r,o,l,s),Mc(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?Fr(a,r,o,l,s):Jl(a,r):(u._visibility|=2,Fr(a,r,o,l,s)),s&&c&2048&&Yg(r.alternate,r);break;case 24:Fr(a,r,o,l,s),s&&c&2048&&Zg(r.alternate,r);break;default:Fr(a,r,o,l,s)}t=t.sibling}}function Jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Jl(n,i),s&2048&&Yg(i.alternate,i);break;case 24:Jl(n,i),s&2048&&Zg(i.alternate,i);break;default:Jl(n,i)}t=t.sibling}}var Ha=8192;function za(e,t,n){if(e.subtreeFlags&Ha)for(e=e.child;e!==null;)hM(e,t,n),e=e.sibling}function hM(e,t,n){switch(e.tag){case 26:za(e,t,n),e.flags&Ha&&(e.memoizedState!==null?Fw(n,Di,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Ky(n,e)));break;case 5:za(e,t,n),e.flags&Ha&&(e=e.stateNode,(t&335544128)===t&&Ky(n,e));break;case 3:case 4:var i=Di;Di=uc(e.stateNode.containerInfo),za(e,t,n),Di=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ha,Ha=16777216,za(e,t,n),Ha=i):za(e,t,n));break;case 30:if((e.flags&Ha)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,jn===null&&(jn=new Map),jn.set(i,s)}za(e,t,n);break;default:za(e,t,n)}}function fM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ul(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];sn=i,pM(i,e)}fM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dM(e),e=e.sibling}function dM(e){switch(e.tag){case 0:case 11:case 15:Ul(e),e.flags&2048&&ma(9,e,e.return);break;case 3:Ul(e);break;case 12:Ul(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,eh(e)):Ul(e);break;default:Ul(e)}}function eh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];sn=i,pM(i,e)}fM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),eh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,eh(t));break;default:eh(t)}e=e.sibling}}function pM(e,t){for(;sn!==null;){var n=sn;switch(n.tag){case 0:case 11:case 15:ma(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:xc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,sn=i;else t:for(n=e;sn!==null;){i=sn;var s=i.sibling,a=i.return;if(iM(i),i===n){sn=null;break t}if(s!==null){s.return=a,sn=s;break t}sn=a}}}var PA={getCacheForType:function(e){var t=hn(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return hn(Xe).controller.signal}},zA=typeof WeakMap=="function"?WeakMap:Map,de=0,Te=null,ee=null,ae=0,_e=0,Jn=null,$s=!1,wo=!1,Jg=!1,Ts=0,Fe=0,ga=0,Ya=0,Ch=0,$n=0,po=0,Kl=null,Fn=null,km=!1,Qh=0,mM=0,Dh=1/0,Uh=null,la=null,Oe=0,Ni=null,er=null,$i=0,Xm=0,qm=null,gM=null,ro=null,oo=null,lo=null,Ql=0,nh=null;function ii(){return(de&2)!==0&&ae!==0?ae&-ae:Ht.T!==null?Qg():xx()}function vM(){if($n===0)if((ae&536870912)===0||jt){var e=Eu;Eu<<=1,(Eu&3932160)===0&&(Eu=262144),$n=e}else $n=536870912;return e=mn.current,e!==null&&(e.flags|=32),$n}function mo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=BM(Ss(e.memoizedProps,n))),oo===null&&(oo=[]),oo.push(t.bind(null,i))}}function Gn(e,t,n){(e===Te&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(go(e,0),ta(e,ae,$n,!1)),vc(e,n),((de&2)===0||e!==Te)&&(e===Te&&((de&2)===0&&(Ya|=n),Fe===4&&ta(e,ae,$n,!1)),ns(e))}function _M(e,t,n){if((de&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||gc(e,t),s=i?HA(e,t):kp(e,t,!0),a=i;do{if(s===0){wo&&!i&&ta(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!BA(n)){s=kp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Kl;var l=o.current.memoizedState.isDehydrated;if(l&&(go(o,r).flags|=256),r=kp(o,r,!1),r!==2&&r!==6){if(Jg&&!l){o.errorRecoveryDisabledLanes|=a,Ya|=a,s=4;break t}a=Fn,Fn=s,a!==null&&(Fn===null?Fn=a:Fn.push.apply(Fn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){go(e,0),ta(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ta(i,t,$n,!$s);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(s=Qh+300-ti(),10<s)){if(ta(i,t,$n,!$s),zh(i,0,!0)!==0)break t;$i=t,i.timeoutHandle=$g(Ty.bind(null,i,n,Fn,Uh,km,t,$n,Ya,po,$s,a,"Throttled",-0,0),s);break t}Ty(i,n,Fn,Uh,km,t,$n,Ya,po,$s,a,null,-0,0)}}break}while(!0);ns(e)}function Ty(e,t,n,i,s,a,r,o,l,c,u,d,h,p){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},jn=null,hM(t,a,d),x&&(g=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=hc.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?Qh-ti():(a&4194048)===a?mM-ti():0,g=Hw(d,g),g!==null)){$i=a,e.cancelPendingCommit=g(wy.bind(null,e,t,a,n,i,s,r,o,l,c,u,d,null,h,p)),ta(e,a,r,!c);return}wy(e,t,a,n,i,s,r,o,l,c,u,d)}function BA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!si(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ta(e,t,n,i){t=mx(e,t),t&=~Ch,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ni(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&vx(e,n,t)}function jh(){return(de&6)===0?(bc(0,!1),!1):!0}function Kg(){if(ee!==null){if(_e===0)var e=ee.return;else e=ee,vs=rr=null,Lg(e),io=null,sc=0,e=ee;for(;e!==null;)WS(e.alternate,e),e=e.return;ee=null}}function go(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,rw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),$i=0,Kg(),Te=e,ee=n=_s(e.current,null),ae=t,_e=0,Jn=null,$s=!1,wo=gc(e,t),Jg=!1,po=$n=Ch=Ya=ga=Fe=0,Fn=Kl=null,km=!1,Ts=mx(e,t),Gh(),n}function yM(e,t){Wt=null,Ht.H=bh,t===To||t===qh?(t=j_(),_e=3):t===Tg?(t=j_(),_e=4):_e=t===Vg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Jn=t,ee===null&&(Fe=1,Eh(e,Mi(t,e.current)))}function xM(){var e=mn.current;return e===null?!0:(ae&4194048)===ae?Sn===null:(ae&62914560)===ae||(ae&536870912)!==0?e===Sn:!1}function SM(){var e=Ht.H;return Ht.H=bh,e===null?bh:e}function MM(){var e=Ht.A;return Ht.A=PA,e}function Nh(){Fe=4,$s||(ae&4194048)!==ae&&mn.current!==null||(wo=!0),(ga&134217727)===0&&(Ya&134217727)===0||Te===null||ta(Te,ae,$n,!1)}function kp(e,t,n){var i=de;de|=2;var s=SM(),a=MM();(Te!==e||ae!==t)&&(Uh=null,go(e,t)),t=!1;var r=Fe;t:do try{if(_e!==0&&ee!==null){var o=ee,l=Jn;switch(_e){case 8:Kg(),r=6;break t;case 3:case 2:case 9:case 6:mn.current===null&&(t=!0);var c=_e;if(_e=0,Jn=null,jr(e,o,l,c),n&&wo){r=0;break t}break;default:c=_e,_e=0,Jn=null,jr(e,o,l,c)}}FA(),r=Fe;break}catch(u){yM(e,u)}while(!0);return t&&e.shellSuspendCounter++,vs=rr=null,de=i,Ht.H=s,Ht.A=a,ee===null&&(Te=null,ae=0,Gh()),r}function FA(){for(;ee!==null;)bM(ee)}function HA(e,t){var n=de;de|=2;var i=SM(),s=MM();Te!==e||ae!==t?(Uh=null,Dh=ti()+500,go(e,t)):wo=gc(e,t);t:do try{if(_e!==0&&ee!==null){t=ee;var a=Jn;e:switch(_e){case 1:_e=0,Jn=null,jr(e,t,a,1);break;case 2:case 9:if(Q_(a)){_e=0,Jn=null,Ay(t);break}t=function(){_e!==2&&_e!==9||Te!==e||(_e=7),ns(e)},a.then(t,t);break t;case 3:_e=7;break t;case 4:_e=5;break t;case 7:Q_(a)?(_e=0,Jn=null,Ay(t)):(_e=0,Jn=null,jr(e,t,a,7));break;case 5:var r=null;switch(ee.tag){case 26:r=ee.memoizedState;case 5:case 27:var o=ee;if(r?ZM(r):o.stateNode.complete){_e=0,Jn=null;var l=o.sibling;if(l!==null)ee=l;else{var c=o.return;c!==null?(ee=c,$h(c)):ee=null}break e}}_e=0,Jn=null,jr(e,t,a,5);break;case 6:_e=0,Jn=null,jr(e,t,a,6);break;case 8:Kg(),Fe=6;break t;default:throw Error(J(462))}}VA();break}catch(u){yM(e,u)}while(!0);return vs=rr=null,Ht.H=i,Ht.A=s,de=n,ee!==null?0:(Te=null,ae=0,Gh(),Fe)}function VA(){for(;ee!==null&&!sT();)bM(ee)}function bM(e){var t=qS(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,t===null?$h(e):ee=t}function Ay(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=py(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=py(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:Lg(t);var i=t;i===rn&&(jt?(gh(i),i.tag===5&&i.stateNode!=null&&(Ce=i.stateNode)):(gh(i),jt=!0));default:WS(n,t),t=ee=Yx(t,Ts),t=qS(n,t,Ts)}e.memoizedProps=e.pendingProps,t===null?$h(e):ee=t}function jr(e,t,n,i){vs=rr=null,Lg(t),io=null,sc=0;var s=t.return;try{if(RA(e,s,t,n,ae)){Fe=1,Eh(e,Mi(n,e.current)),ee=null;return}}catch(a){if(s!==null)throw ee=s,a;Fe=1,Eh(e,Mi(n,e.current)),ee=null;return}t.flags&32768?(jt||i===1?e=!0:wo||(ae&536870912)!==0?e=!1:($s=e=!0,(i===2||i===9||i===3||i===6)&&(i=mn.current,i!==null&&i.tag===13&&(i.flags|=16384))),EM(t,e)):$h(t)}function $h(e){var t=e;do{if((t.flags&32768)!==0){EM(t,$s);return}e=t.return;var n=NA(t.alternate,t,Ts);if(n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);Fe===0&&(Fe=5)}function EM(e,t){do{var n=LA(e.alternate,e);if(n!==null){n.flags&=32767,ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ee=e;return}ee=e=n}while(e!==null);Fe=6,ee=null}function wy(e,t,n,i,s,a,r,o,l,c,u,d){e.cancelPendingCommit=null;do tf();while(Oe!==0);if((de&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));e===Te&&(ee=Te=null,ae=0),er=t,Ni=e,$i=n,qm=s,gM=i,GA(e,t,n,r,o,l,d)}}function GA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Xm=o,o|=yg,pT(e,n,o,i,s,a),oo=null,(n&335544064)===n?(lo=gA(e),i=10262):(lo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,ZA(hh,function(){return Jm(),null})):(e.callbackNode=null,e.callbackPriority=0),wh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ht.T,Ht.T=null,s=pe.p,pe.p=2,a=de,de|=4;try{IA(e,t,n)}finally{de=a,pe.p=s,Ht.T=i}}Oe=1,wh?ro=fw(r,e.containerInfo,lo,Wm,Ym,XA,Zm,Jm,kA,null,null):(Wm(),Ym(),Zm())}function kA(e){if(Oe!==0){var t=Ni.onRecoverableError;t(e,{componentStack:null})}}function XA(){Oe===3&&(Oe=0,cM(er,Ni),Oe=4)}function Wm(){if(Oe===1){Oe=0;var e=Ni,t=er,n=$i,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ht.T,Ht.T=null;var s=pe.p;pe.p=2;var a=de;de|=4;try{Bl=Rh=!1,oM(t,e,n),n=$m;var r=Fx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Bx(o.ownerDocument.documentElement,o)){if(l!==null&&_g(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!p.extend&&x>m&&(r=m,m=x,x=r);var f=k_(o,x),v=k_(o,m);if(f&&v&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var _=d.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),x>m?(p.addRange(_),p.extend(v.node,v.offset)):(_.setEnd(v.node,v.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}So=!!jm,$m=jm=null}finally{de=a,pe.p=s,Ht.T=i}}e.current=t,Oe=2}}function Ym(){if(Oe===2){Oe=0;var e=Ni,t=er,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ht.T,Ht.T=null;var i=pe.p;pe.p=2;var s=de;de|=4;try{eM(e,t.alternate,t)}finally{de=s,pe.p=i,Ht.T=n}}Oe=3}}function Zm(){if(Oe===4||Oe===3){Oe=0;var e=ro;ro=null,aT();var t=Ni,n=er,i=$i,s=gM,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Oe=5:(Oe=0,er=Ni=null,TM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(la=null),fg(i),n=n.stateNode,ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(mc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ht.T,a=pe.p,pe.p=2,Ht.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Ht.T=n,pe.p=a}}if(s=oo,r=lo,lo=null,s!==null&&(oo=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);($i&3)!==0&&tf(),ns(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===nh?Ql++:(Ql=0,nh=t):(Ql=0,nh=null),bc(0,!1)}}function TM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xc(t)))}function tf(){return ro!==null&&(ro.skipTransition(),ro=null),Wm(),Ym(),Zm(),Jm()}function Jm(){if(Oe!==5)return!1;var e=Ni,t=Xm;Xm=0;var n=fg($i),i=Ht.T,s=pe.p;try{pe.p=32>n?32:n,Ht.T=null,n=qm,qm=null;var a=Ni,r=$i;if(Oe=0,er=Ni=null,$i=0,(de&6)!==0)throw Error(J(331));var o=de;if(de|=4,dM(a.current),uM(a,a.current,r,n),de=o,bc(0,!1),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(mc,a)}catch{}return!0}finally{pe.p=s,Ht.T=i,TM(e,t)}}function Ry(e,t,n){t=Mi(n,t),t=Rm(e.stateNode,t,2),e=aa(e,t,2),e!==null&&(vc(e,2),ns(e))}function xe(e,t,n){if(e.tag===3)Ry(e,e,n);else for(;t!==null;){if(t.tag===3){Ry(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(la===null||!la.has(i))){e=Mi(n,e),n=HS(2),i=aa(t,n,2),i!==null&&(VS(n,i,t,e),vc(i,2),ns(i));break}}t=t.return}}function Xp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new zA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Jg=!0,s.add(n),e=qA.bind(null,e,t,n),t.then(e,e))}function qA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(ae&n)===n&&((Fe===4||Fe===3&&(ae&62914560)===ae&&300>ti()-Qh)&&(de&2)===0?go(e,0):Ch|=n,po===ae&&(po=0)),ns(e)}function AM(e,t){t===0&&(t=gx()),e=ar(e,t),e!==null&&(vc(e,t),ns(e))}function WA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),AM(e,n)}function YA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),AM(e,n)}function ZA(e,t){return ug(e,t)}var vo=null,Hr=null,Km=!1,Lh=!1,qp=!1,ea=0;function ns(e){e!==Hr&&e.next===null&&(Hr===null?vo=Hr=e:Hr=Hr.next=e),Lh=!0,Km||(Km=!0,KA())}function bc(e,t){if(!qp&&Lh){qp=!0;do for(var n=!1,i=vo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ni(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Cy(i,a))}else a=ae,a=zh(i,i===Te?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||gc(i,a)||(n=!0,Cy(i,a));i=i.next}while(n);qp=!1}}function JA(){wM()}function wM(){Lh=Km=!1;var e=0;ea!==0&&aw()&&(e=ea);for(var t=ti(),n=null,i=vo;i!==null;){var s=i.next,a=RM(i,t);a===0?(i.next=null,n===null?vo=s:n.next=s,s===null&&(Hr=n)):(n=i,(e!==0||(a&3)!==0)&&(Lh=!0)),i=s}Oe!==0&&Oe!==5||bc(e,!1),ea!==0&&(ea=0)}function RM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ni(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=dT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Te,n=ae,n=zh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&bp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||gc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&bp(i),fg(n)){case 2:case 8:n=dx;break;case 32:n=hh;break;case 268435456:n=px;break;default:n=hh}return i=CM.bind(null,e),n=ug(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&bp(i),e.callbackPriority=2,e.callbackNode=null,2}function CM(e,t){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(tf()&&e.callbackNode!==n)return null;var i=ae;return i=zh(e,e===Te?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(_M(e,i,t),RM(e,ti()),e.callbackNode!=null&&e.callbackNode===n?CM.bind(null,e):null)}function Cy(e,t){if(tf())return null;_M(e,t,!0)}function KA(){ow(function(){(de&6)!==0?ug(fx,JA):wM()})}function Qg(){if(ea===0){var e=Qa;e===0&&(e=bu,bu<<=1,(bu&261888)===0&&(bu=256)),ea=e}return ea}function Dy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xu(e)}function QA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Dy((s[Xn]||null).action),r=i.submitter;r&&(t=(t=r[Xn]||null)?Dy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Fh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ea!==0){var l=new FormData(s,r);Am(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Am(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Bu=0;Bu<mm.length;Bu++)Fu=mm[Bu],Uy=Fu.toLowerCase(),Ny=Fu[0].toUpperCase()+Fu.slice(1),Li(Uy,"on"+Ny);var Fu,Uy,Ny,Bu;Li(Vx,"onAnimationEnd");Li(Gx,"onAnimationIteration");Li(kx,"onAnimationStart");Li("dblclick","onDoubleClick");Li("focusin","onFocus");Li("focusout","onBlur");Li(lA,"onTransitionRun");Li(cA,"onTransitionStart");Li(uA,"onTransitionCancel");Li(Xx,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oc));function DM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){dh(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){dh(u)}s.currentTarget=null,a=l}}}}function te(e,t){var n=t[A_];n===void 0&&(n=t[A_]=new Set);var i=e+"__bubble";n.has(i)||(UM(t,e,2,!1),n.add(i))}function Wp(e,t,n){var i=0;t&&(i|=4),UM(n,e,i,t)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function jg(e){if(!e[Hu]){e[Hu]=!0,Mx.forEach(function(n){n!=="selectionchange"&&(jA.has(n)||Wp(n,!1,e),Wp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hu]||(t[Hu]=!0,Wp("selectionchange",!1,t))}}function UM(e,t,n,i){switch(e1(t)){case 2:var s=Xw;break;case 8:s=qw;break;default:s=a0}n=s.bind(null,t,n,e),s=void 0,!hm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Yp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Va(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Dx(function(){var c=a,u=pg(n),d=[];t:{var h=qx.get(e);if(h!==void 0){var p=Fh,g=e;switch(e){case"keypress":if(Wu(n)===0)break t;case"keydown":case"keyup":p=BT;break;case"focusin":g="focus",p=Cp;break;case"focusout":g="blur",p=Cp;break;case"beforeblur":case"afterblur":p=Cp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=I_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=AT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kT;break;case Vx:case Gx:case kx:p=CT;break;case Xx:p=qT;break;case"scroll":case"scrollend":p=ET;break;case"wheel":p=YT;break;case"copy":case"cut":case"paste":p=UT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=P_;break;case"submit":p=VT;break;case"toggle":case"beforetoggle":p=JT}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),f=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,_;v!==null;){var y=v;if(_=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||_===null||f===null||(y=$l(v,f),y!=null&&x.push(lc(v,y,_))),m)break;v=v.return}0<x.length&&(h=new p(h,g,null,n,u),d.push({event:h,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==um&&(g=n.relatedTarget||n.fromElement)&&(Va(g)||g[bo]))break t;(h||p)&&(g=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?Va(p):null,p!==null&&(m=pc(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(h=null,p=c),h!==p&&(x=I_,y="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(x=P_,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=h==null?g:Pl(h),_=p==null?g:Pl(p),g=new x(y,v+"leave",h,n,u),g.target=m,g.relatedTarget=_,y=null,Va(u)===c&&(x=new x(f,v+"enter",p,n,u),x.target=_,x.relatedTarget=m,y=x),m=y,x=h&&p?jp(h,p,$A):null,h!==null&&Ly(d,g,h,x,!1),p!==null&&m!==null&&Ly(d,m,p,x,!0)))}t:{if(h=c?Pl(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=H_;else if(F_(h))if(Px)A=aA;else{A=iA;var R=nA}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&dg(c.elementType)&&(A=H_):A=sA;if(A&&(A=A(e,c))){Ox(d,A,n,u);break t}R&&R(e,h,c)}switch(R=c?Pl(c):window,e){case"focusin":(F_(R)||R.contentEditable==="true")&&(Wr=R,dm=c,Vl=null);break;case"focusout":Vl=dm=Wr=null;break;case"mousedown":pm=!0;break;case"contextmenu":case"mouseup":case"dragend":pm=!1,X_(d,n,u);break;case"selectionchange":if(oA)break;case"keydown":case"keyup":X_(d,n,u)}var w;if(vg)t:{switch(e){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else qr?Lx(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Nx&&n.locale!=="ko"&&(qr||U!=="onCompositionStart"?U==="onCompositionEnd"&&qr&&(w=Ux()):(Qs=u,mg="value"in Qs?Qs.value:Qs.textContent,qr=!0)),R=Ih(c,U),0<R.length&&(U=new O_(U,e,null,n,u),d.push({event:U,listeners:R}),w?U.data=w:(w=Ix(n),w!==null&&(U.data=w)))),(w=QT?jT(e,n):$T(e,n))&&(U=Ih(c,"onBeforeInput"),0<U.length&&(R=new O_("onBeforeInput","beforeinput",null,n,u),d.push({event:R,listeners:U}),R.data=w)),QA(d,e,c,n,u)}DM(d,t)})}function lc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ih(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=$l(e,n),s!=null&&i.unshift(lc(e,s,a)),s=$l(e,t),s!=null&&i.push(lc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function $A(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ly(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=$l(n,a),c!=null&&r.unshift(lc(n,c,l))):s||(c=$l(n,a),c!=null&&r.push(lc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var tw=/\r\n?/g,ew=/\u0000|\uFFFD/g;function Iy(e){return(typeof e=="string"?e:""+e).replace(tw,`
`).replace(ew,"")}function NM(e,t){return t=Iy(t),Iy(e)===t}function ye(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||ho(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&ho(e,""+i);else return;break;case"className":Au(e,"class",i);break;case"tabIndex":Au(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Au(e,n,i);break;case"style":Cx(e,i,a);return;case"data":if(t!=="object"){Au(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Xu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ye(e,t,"name",s.name,s,null),ye(e,t,"formEncType",s.formEncType,s,null),ye(e,t,"formMethod",s.formMethod,s,null),ye(e,t,"formTarget",s.formTarget,s,null)):(ye(e,t,"encType",s.encType,s,null),ye(e,t,"method",s.method,s,null),ye(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Xu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ji);return;case"onScroll":i!=null&&te("scroll",e);return;case"onScrollEnd":i!=null&&te("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Xu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":te("beforetoggle",e),te("toggle",e),ku(e,"popover",i);break;case"xlinkActuate":ps(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ps(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ps(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ps(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ps(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ps(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ps(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ps(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ps(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ku(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=MT.get(n)||n,ku(e,n,i);else return}fe=!0}function Qm(e,t,n,i,s,a){switch(n){case"style":Cx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")ho(e,i);else if(typeof i=="number"||typeof i=="bigint")ho(e,""+i);else return;break;case"onScroll":i!=null&&te("scroll",e);return;case"onScrollEnd":i!=null&&te("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!bx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Xn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}fe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):ku(e,n,i)}return}fe=!0}function pn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",e),te("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:ye(e,t,a,r,n,null)}}s&&ye(e,t,"srcSet",n.srcSet,n,null),i&&ye(e,t,"src",n.src,n,null);return;case"input":te("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:ye(e,t,i,u,n,null)}}Ax(e,a,o,l,c,r,s,!1);return;case"select":te("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ye(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?to(e,!!i,t,!1):n!=null&&to(e,!!i,n,!0);return;case"textarea":te("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:ye(e,t,r,o,n,null)}Rx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ye(e,t,l,i,n,null));return;case"dialog":te("beforetoggle",e),te("toggle",e),te("cancel",e),te("close",e);break;case"iframe":case"object":te("load",e);break;case"video":case"audio":for(i=0;i<oc.length;i++)te(oc[i],e);break;case"image":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"embed":case"source":case"link":te("error",e),te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:ye(e,t,c,i,n,null)}return;default:if(dg(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Qm(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ye(e,t,o,i,n,null))}var nw={};function iw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ye(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":p!==d&&(fe=!0),a=p;break;case"name":p!==d&&(fe=!0),s=p;break;case"checked":p!==d&&(fe=!0),c=p;break;case"defaultChecked":p!==d&&(fe=!0),u=p;break;case"value":p!==d&&(fe=!0),r=p;break;case"defaultValue":p!==d&&(fe=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(J(137,t));break;default:p!==d&&ye(e,t,h,p,i,d)}}cm(e,r,o,l,c,u,a,s);return;case"select":p=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||ye(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(fe=!0),h=a;break;case"defaultValue":a!==l&&(fe=!0),o=a;break;case"multiple":a!==l&&(fe=!0),r=a;default:a!==l&&ye(e,t,s,a,i,l)}t=o,n=r,i=p,h!=null?to(e,!!n,h,!1):!!i!=!!n&&(t!=null?to(e,!!n,t,!0):to(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ye(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(fe=!0),h=s;break;case"defaultValue":s!==a&&(fe=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&ye(e,t,r,s,i,a)}wx(e,h,p);return;case"option":for(var g in n)h=n[g],n.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:ye(e,t,g,null,i,h));for(l in i)h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null)&&(l==="selected"?(h!==p&&(fe=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol"):ye(e,t,l,h,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x)&&ye(e,t,x,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:ye(e,t,c,h,i,p)}return;default:if(dg(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Qm(e,t,m,void 0,i,h);for(u in i)h=i[u],p=n[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||Qm(e,t,u,h,i,p);return}}for(var f in n)h=n[f],n.hasOwnProperty(f)&&h!=null&&!i.hasOwnProperty(f)&&ye(e,t,f,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||ye(e,t,d,h,i,p)}function Oy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Oy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&Oy(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jm=null,$m=null;function cc(e){return e.nodeType===9?e:e.ownerDocument}function Py(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function LM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function IM(e,t,n,i){return n=cc(n).createElement(e),n[un]=i,n[Xn]=t,pn(n,e,t),an(n),n}function tg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zp=null;function aw(){var e=window.event;return e&&e.type==="popstate"?e===Zp?!1:(Zp=e,!0):(Zp=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,rw=typeof clearTimeout=="function"?clearTimeout:void 0,zy=typeof Promise=="function"?Promise:void 0,By=typeof requestAnimationFrame=="function"?requestAnimationFrame:$g,ow=typeof queueMicrotask=="function"?queueMicrotask:typeof zy<"u"?function(e){return zy.resolve(null).then(e).catch(lw)}:$g;function lw(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function Fy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Mo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Kp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Kp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[_c]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Kp(e.ownerDocument.body);n=s}while(n);Mo(t)}function Hy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function OM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function PM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function zM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function eg(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return zM(t,n,e)}function cw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return zM(t,n,e)}function uw(e){return e.documentElement.clientHeight}function hw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function fw(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var u=c.startViewTransition({update:function(){var h=c.defaultView,p=h.navigation&&h.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(uw(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,f=0,v=0;v<m.length;v++){var _=m[v];if(!_.complete){var y=_.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<h.innerHeight&&y.left<h.innerWidth){if(f+=JM(_),f>ah){x.length=g;break}_=new Promise(hw.bind(_)),x.push(_)}}}if(0<x.length)return h=Promise.race([Promise.all(x),new Promise(function(A){return setTimeout(A,500)})]).then(s,s),(p?Promise.allSettled([p.finished,h]):h).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),p=0;p<h.length;p++){var g=h[p],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=x.getKeyframes();for(var f=m=void 0,v=!0,_=0;_<g.length;_++){var y=g[_],A=y.width;if(m===void 0)m=A;else if(m!==A){v=!1;break}if(A=y.height,f===void 0)f=A;else if(f!==A){v=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}v&&m!==void 0&&f!==void 0&&(x.setKeyframes(g),v=getComputedStyle(x.target,x.pseudoElement),v.width!==m||v.height!==f)&&(v=g[0],v.width=m,v.height=f,v=g[g.length-1],v.width=m,v.height=f,x.setKeyframes(g))}}r()},function(h){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{typeof h=="object"&&h!==null&&h.name==="InvalidStateError"&&(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null),h!==null&&l(h)}finally{i(),s(),r()}}),u.finished.finally(function(){for(var h=0;h<d.length;h++)d[h].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),o()}),u}catch{return i(),s(),r(),null}}function Ga(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ga.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Ae({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Ga.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Ga.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function BM(e){return{name:e,group:new Ga("group",e),imagePair:new Ga("image-pair",e),old:new Ga("old",e),new:new Ga("new",e)}}function ai(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ai.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(FM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=_o(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),kn(this._fragmentFiber.child,!1,dw,e,o,i)}this._eventListeners=a}};function dw(e,t,n,i){return Je(e).addEventListener(t,n,i),!1}ai.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=FM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=_o(s.optionsOrUseCapture),kn(this._fragmentFiber.child,!1,pw,e,n,s),i.splice(t,1),a!==null&&a()}};function pw(e,t,n,i){return Je(e).removeEventListener(t,n,i),!1}function _o(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Vy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function FM(e,t,n,i){if(e.length===0)return-1;i=Vy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Vy(a.optionsOrUseCapture)===i)return s}return-1}ai.prototype.dispatchEvent=function(e){var t=nr(this._fragmentFiber);if(t===null)return!0;t=Je(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,_o(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,_o(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ai.prototype.focus=function(e){kn(this._fragmentFiber.child,!0,HM,e,void 0,void 0)};function HM(e,t){return e.tag===6?!1:(e=Je(e),Aw(e,t))}ai.prototype.focusLast=function(e){var t=[];kn(this._fragmentFiber.child,!0,t0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!HM(t[n],e);n--);};function t0(e,t){return t.push(e),!1}ai.prototype.blur=function(){var e=nr(this._fragmentFiber);e!==null&&(e=Je(e),e=cc(e).activeElement,e!==null&&kn(this._fragmentFiber.child,!1,mw,e,void 0,void 0))};function mw(e,t){return e.tag===6?!1:(e=Je(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ai.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),kn(this._fragmentFiber.child,!1,gw,e,void 0,void 0)};function gw(e,t){return e.tag===6||(e=Je(e),t.observe(e)),!1}ai.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),kn(this._fragmentFiber.child,!1,vw,e,void 0,void 0);for(var n=t=0;n<Ui.length;n++){var i=Ui[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ui[t++]=i}Ui.length=t}};function vw(e,t){return e.tag===6||(e=Je(e),t.unobserve(e)),!1}var Ui=[],Jp=!1;function _w(e,t,n){Ui.push({fragmentInstance:e,observer:t,instance:n}),Jp||(Jp=!0,ww(function(){Jp=!1;var i=Ui;Ui=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ai.prototype.getClientRects=function(){var e=[];return kn(this._fragmentFiber.child,!1,yw,e,void 0,void 0),e};function yw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Je(e),t.push.apply(t,e.getClientRects());return!1}ai.prototype.getRootNode=function(e){var t=nr(this._fragmentFiber);return t===null?this:Je(t).getRootNode(e)};ai.prototype.compareDocumentPosition=function(e){var t=nr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];kn(this._fragmentFiber.child,!1,t0,n,void 0,void 0);var i=Je(t);if(n.length===0){if(n=i,x_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=lx(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Je(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Je(n[0]),s=Je(n[n.length-1]);var a=x_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||xw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function xw(e,t,n,i,s){var a=Va(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=nr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=jp(n,a,S_),t===null?t=!1:(kn(t,!0,KE,a,n),a=Vr,Vr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=jp(i,a,S_),t===null?t=!1:(kn(t,!0,QE,a,i),a=Vr,Qp=Vr=null,t=a!==null)),t):!1}function Gy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ai.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(J(566));var t=[];kn(this._fragmentFiber.child,!1,t0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=lx(this._fragmentFiber);if(i=n?i[1]||i[0]||nr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Je(i),Gy(e,n);return}if(i=Je(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Je(s),Gy(s,n)):Je(s).scrollIntoView(e),i+=n?-1:1}};function Sw(e,t){return e=Je(e),VM(e,t),!1}function VM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function GM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,_o(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ui.length;o++){var l=Ui[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ui[r++]=l)}Ui.length=r,a.observe(e)}),VM(e,t))}function Mw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,_o(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?_w(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function ng(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ng(n),Bh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function bw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[_c])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function Ew(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function kM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ei(e.nextSibling),e===null))return null;return e}function ig(e){return e.data==="$?"||e.data==="$~"}function e0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ei(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var sg=null;function ky(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ei(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Xy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Aw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function ww(e){By(function(){By(function(t){return e(t)})})}function XM(e,t,n){switch(t=cc(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function qM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&ye(e,t,i,null,nw,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ji&&(e.onclick=null),Bh(e)}function Kp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bh(e)}var Ti=new Map,qy=new Set;function uc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Rs=pe.d;pe.d={f:Rw,r:Cw,D:Dw,C:Uw,L:Nw,m:Lw,X:Ow,S:Iw,M:Pw};function Rw(){var e=Rs.f(),t=jh();return e||t}function Cw(e){var t=Eo(e);t!==null&&t.tag===5&&t.type==="form"?CS(t):Rs.r(e)}var Ro=typeof document>"u"?null:document;function WM(e,t,n){var i=Ro;if(i&&typeof t=="string"&&t){var s=Si(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),qy.has(s)||(qy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),pn(t,"link",e),an(t),i.head.appendChild(t)))}}function Dw(e){Rs.D(e),WM("dns-prefetch",e,null)}function Uw(e,t){Rs.C(e,t),WM("preconnect",e,t)}function Nw(e,t,n){Rs.L(e,t,n);var i=Ro;if(i&&e&&t){var s='link[rel="preload"][as="'+Si(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Si(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Si(n.imageSizes)+'"]')):s+='[href="'+Si(e)+'"]';var a=s;switch(t){case"style":a=yo(e);break;case"script":a=Co(e)}if(!(Ti.has(a)||(e=Ae({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ti.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Ec(a))||t==="script"&&i.querySelector(Tc(a))))){var r=i.createElement("link");pn(r,"link",e),t==="style"&&(r[fh]=!0,r.onload=r.onerror=function(){Sx(r)}),an(r),i.head.appendChild(r)}}}function Lw(e,t){Rs.m(e,t);var n=Ro;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Si(i)+'"][href="'+Si(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Co(e)}if(!Ti.has(a)&&(e=Ae({rel:"modulepreload",href:e},t),Ti.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Tc(a)))return}i=n.createElement("link"),pn(i,"link",e),an(i),n.head.appendChild(i)}}}function Iw(e,t,n){Rs.S(e,t,n);var i=Ro;if(i&&e){var s=$r(i).hoistableStyles,a=yo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Ec(a)))o.loading=5;else{e=Ae({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ti.get(a))&&n0(e,n);var l=r=i.createElement("link");an(l),pn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ih(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function Ow(e,t){Rs.X(e,t);var n=Ro;if(n&&e){var i=$r(n).hoistableScripts,s=Co(e),a=i.get(s);a||(a=n.querySelector(Tc(s)),a||(e=Ae({src:e,async:!0},t),(t=Ti.get(s))&&i0(e,t),a=n.createElement("script"),an(a),pn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Pw(e,t){Rs.M(e,t);var n=Ro;if(n&&e){var i=$r(n).hoistableScripts,s=Co(e),a=i.get(s);a||(a=n.querySelector(Tc(s)),a||(e=Ae({src:e,async:!0,type:"module"},t),(t=Ti.get(s))&&i0(e,t),a=n.createElement("script"),an(a),pn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Wy(e,t,n,i){var s=(s=na.current)?uc(s):null;if(!s)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=yo(n.href),t=$r(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=yo(n.href);var a=$r(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Ec(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Ti.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ti.set(e,a)),zw(s,e,a,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Co(n),t=$r(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function yo(e){return'href="'+Si(e)+'"'}function Ec(e){return'link[rel="stylesheet"]['+e+"]"}function YM(e){return Ae({},e,{"data-precedence":e.precedence,precedence:null})}function zw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[fh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[fh]=!0,t.onload=t.onerror=Sx.bind(null,t),pn(t,"link",n),an(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Co(e){return'[src="'+Si(e)+'"]'}function Tc(e){return"script[async]"+e}function Yy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Si(n.href)+'"]');if(i)return t.instance=i,an(i),i;var s=Ae({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),an(i),pn(i,"style",s),ih(i,n.precedence,e),t.instance=i;case"stylesheet":s=yo(n.href);var a=e.querySelector(Ec(s));if(a)return t.state.loading|=4,t.instance=a,an(a),a;i=YM(n),(s=Ti.get(s))&&n0(i,s),a=(e.ownerDocument||e).createElement("link"),an(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),pn(a,"link",i),t.state.loading|=4,ih(a,n.precedence,e),t.instance=a;case"script":return a=Co(n.src),(s=e.querySelector(Tc(a)))?(t.instance=s,an(s),s):(i=n,(s=Ti.get(a))&&(i=Ae({},n),i0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),an(s),pn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ih(i,n.precedence,e));return t.instance}function ih(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function n0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function i0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var sh=null;function Zy(e,t,n){if(sh===null){var i=new Map,s=sh=new Map;s.set(n,i)}else s=sh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[_c]||a[un]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function ag(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Bw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Jy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function ZM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function JM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Ky(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=JM(t),e.suspenseyImages.push(t)),e=Vw.bind(e),t.decode().then(e,e))}function Fw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=yo(i.href),a=t.querySelector(Ec(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=hc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,an(a);return}a=t.ownerDocument||t,i=YM(i),(s=Ti.get(s))&&n0(i,s),a=a.createElement("link"),an(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),pn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=hc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ah=0;function Hw(e,t){return e.stylesheets&&e.count===0&&rh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&rh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&ah===0&&(ah=62500*sw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>ah?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function KM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)rh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function hc(){this.count--,KM(this)}function Vw(){this.imgCount--,KM(this)}var Oh=null;function rh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oh=new Map,t.forEach(Gw,e),Oh=null,hc.call(e))}function Gw(e,t){if(!(t.state.loading&4)){var n=Oh.get(e);if(n)var i=n.get(null);else{n=new Map,Oh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=hc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var xo={$$typeof:Zi,Provider:null,Consumer:null,_currentValue:ka,_currentValue2:ka,_threadCount:0};function kw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ep(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ep(0),this.hiddenUpdates=Ep(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function QM(e,t,n,i,s,a,r,o,l,c,u,d){return e=new kw(e,t,n,r,l,c,u,d,o),t=1,a===!0&&(t|=24),a=Vn(3,null,null,t),e.current=a,a.stateNode=e,t=bg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Ag(a),e}function jM(e){return e?(e=Jr,e):Jr}function $M(e,t,n,i,s,a){s=jM(s),i.context===null?i.context=s:i.pendingContext=s,i=sa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=aa(e,i,t),n!==null&&(Gn(n,e,t),kl(n,e,t))}function Qy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function s0(e,t){Qy(e,t),(e=e.alternate)&&Qy(e,t)}function t1(e){if(e.tag===13||e.tag===31){var t=ar(e,67108864);t!==null&&Gn(t,e,67108864),s0(e,67108864)}}function jy(e){if(e.tag===13||e.tag===31){var t=ii();t=hg(t);var n=ar(e,t);n!==null&&Gn(n,e,t),s0(e,t)}}var So=!0;function Xw(e,t,n,i){var s=Ht.T;Ht.T=null;var a=pe.p;try{pe.p=2,a0(e,t,n,i)}finally{pe.p=a,Ht.T=s}}function qw(e,t,n,i){var s=Ht.T;Ht.T=null;var a=pe.p;try{pe.p=8,a0(e,t,n,i)}finally{pe.p=a,Ht.T=s}}function a0(e,t,n,i){if(So){var s=rg(i);if(s===null)Yp(e,t,i,Ph,n),$y(e,i);else if(Yw(s,e,t,n,i))i.stopPropagation();else if($y(e,i),t&4&&-1<Ww.indexOf(e)){for(;s!==null;){var a=Eo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ba(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ni(r);o.entanglements[1]|=l,r&=~l}ns(a),(de&6)===0&&(Dh=ti()+500,bc(0,!1))}}break;case 31:case 13:o=ar(a,2),o!==null&&Gn(o,a,2),jh(),s0(a,2)}if(a=rg(i),a===null&&Yp(e,t,i,Ph,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Yp(e,t,i,null,n)}}function rg(e){return e=pg(e),r0(e)}var Ph=null;function r0(e){if(Ph=null,e=Va(e),e!==null){var t=pc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ax(t),e!==null)return e;e=null}else if(n===31){if(e=rx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ph=e,null}function e1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rT()){case fx:return 2;case dx:return 8;case hh:case oT:return 32;case px:return 268435456;default:return 32}default:return 32}}var og=!1,ca=null,ua=null,ha=null,fc=new Map,dc=new Map,Js=[],Ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $y(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":fc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dc.delete(t.pointerId)}}function Nl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Eo(t),t!==null&&t1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Yw(e,t,n,i,s){switch(t){case"focusin":return ca=Nl(ca,e,t,n,i,s),!0;case"dragenter":return ua=Nl(ua,e,t,n,i,s),!0;case"mouseover":return ha=Nl(ha,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return fc.set(a,Nl(fc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,dc.set(a,Nl(dc.get(a)||null,e,t,n,i,s)),!0}return!1}function n1(e){var t=Va(e.target);if(t!==null){var n=pc(t);if(n!==null){if(t=n.tag,t===13){if(t=ax(n),t!==null){e.blockedOn=t,T_(e.priority,function(){jy(n)});return}}else if(t===31){if(t=rx(n),t!==null){e.blockedOn=t,T_(e.priority,function(){jy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);um=i,n.target.dispatchEvent(i),um=null}else return t=Eo(n),t!==null&&t1(t),e.blockedOn=n,!1;t.shift()}return!0}function tx(e,t,n){oh(e)&&n.delete(t)}function Zw(){og=!1,ca!==null&&oh(ca)&&(ca=null),ua!==null&&oh(ua)&&(ua=null),ha!==null&&oh(ha)&&(ha=null),fc.forEach(tx),dc.forEach(tx)}function Vu(e,t){e.blockedOn===t&&(e.blockedOn=null,og||(og=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Zw)))}var Gu=null;function ex(e){Gu!==e&&(Gu=e,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,function(){Gu===e&&(Gu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(r0(i||n)===null)continue;break}var a=Eo(n);a!==null&&(e.splice(t,3),t-=3,Am(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Mo(e){function t(l){return Vu(l,e)}ca!==null&&Vu(ca,e),ua!==null&&Vu(ua,e),ha!==null&&Vu(ha,e),fc.forEach(t),dc.forEach(t);for(var n=0;n<Js.length;n++){var i=Js[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Js.length&&(n=Js[0],n.blockedOn===null);)n1(n),n.blockedOn===null&&Js.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Xn]||null;if(typeof a=="function")r||ex(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Xn]||null)o=r.formAction;else if(r0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ex(n)}}}function i1(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function o0(e){this._internalRoot=e}ef.prototype.render=o0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=ii();$M(n,i,e,t,null,null)};ef.prototype.unmount=o0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$M(e.current,2,null,e,null,null),jh(),t[bo]=null}};function ef(e){this._internalRoot=e}ef.prototype.unstable_scheduleHydration=function(e){if(e){var t=xx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Js.length&&t!==0&&t<Js[n].priority;n++);Js.splice(n,0,e),n===0&&n1(e)}};var nx=ix.version;if(nx!=="19.3.1")throw Error(J(527,nx,"19.3.1"));pe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=JE(t),e=e!==null?ox(e):null,e=e===null?null:e.stateNode,e};var Jw={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ht,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ll.isDisabled&&Ll.supportsFiber))try{mc=Ll.inject(Jw),ei=Ll}catch{}var Ll;nf.createRoot=function(e,t){if(!sx(e))throw Error(J(299));var n=!1,i="",s=zS,a=BS,r=FS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=QM(e,1,!1,null,null,n,i,null,s,a,r,i1),e[bo]=t.current,jg(e),new o0(t)};nf.hydrateRoot=function(e,t,n){if(!sx(e))throw Error(J(299));var i=!1,s="",a=zS,r=BS,o=FS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=QM(e,1,!0,t,n??null,i,s,l,a,r,o,i1),t.context=jM(null),n=t.current,i=ii(),i=hg(i),s=sa(i),s.callback=null,aa(n,s,i),n=i,t.current.lanes=n,vc(t,n),ns(t),e[bo]=t.current,jg(e),new ef(t)};nf.version="19.3.1"});var o1=Vs((hN,r1)=>{"use strict";function a1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a1)}catch(e){console.error(e)}}a1(),r1.exports=s1()});var vE=gu(bl()),_E=gu(o1()),yE=gu(yp());var Rr=gu(bl());var L1=0,Z0=1,I1=2;var J0=1,O1=2,cs=3,Os=0,In=1,fi=2,zs=0,fr=1,K0=2,Q0=3,j0=4,P1=5,Aa=100,z1=101,B1=102,F1=103,H1=104,V1=200,G1=201,k1=202,X1=203,Af=204,wf=205,q1=206,W1=207,Y1=208,Z1=209,J1=210,K1=211,Q1=212,j1=213,$1=214,td=0,ed=1,nd=2,dr=3,id=4,sd=5,ad=6,rd=7,$0=0,tb=1,eb=2,Bs=0,nb=1,ib=2,sb=3,ab=4,rb=5,ob=6,od=7;var tv=300,Sr=301,Mr=302,ld=303,cd=304,su=306,os=1e3,ss=1001,Rf=1002,Wn=1003,lb=1004;var au=1005;var li=1006,ud=1007;var us=1008;var Hi=1009,ev=1010,nv=1011,al=1012,hd=1013,La=1014,hs=1015,rl=1016,fd=1017,dd=1018,ol=1020,iv=35902,sv=35899,av=1021,rv=1022,wi=1023,ko=1026,ll=1027,ov=1028,pd=1029,lv=1030,md=1031;var gd=1033,ru=33776,ou=33777,lu=33778,cu=33779,vd=35840,_d=35841,yd=35842,xd=35843,Sd=36196,Md=37492,bd=37496,Ed=37808,Td=37809,Ad=37810,wd=37811,Rd=37812,Cd=37813,Dd=37814,Ud=37815,Nd=37816,Ld=37817,Id=37818,Od=37819,Pd=37820,zd=37821,Bd=36492,Fd=36494,Hd=36495,Vd=36283,Gd=36284,kd=36285,Xd=36286;var Ic=2300,Cf=2301,Tf=2302,O0=2400,P0=2401,z0=2402;var cb=3200,ub=3201;var cv=0,hb=1,Fs="",gn="srgb",pr="srgb-linear",Oc="linear",Se="srgb";var hr=7680;var B0=519,fb=512,db=513,pb=514,uv=515,mb=516,gb=517,vb=518,_b=519,F0=35044;var hv="300 es",zi=2e3,Pc=2001;var Ps=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var l0=Math.PI/180,Df=180/Math.PI;function cl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[e&255]+Mn[e>>8&255]+Mn[e>>16&255]+Mn[e>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[n&63|128]+Mn[n>>8&255]+"-"+Mn[n>>16&255]+Mn[n>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function $t(e,t,n){return Math.max(t,Math.min(n,e))}function Kw(e,t){return(e%t+t)%t}function c0(e,t,n){return(1-n)*e+n*t}function Ac(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function qn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var vt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==h||c!==p||u!==g){let m=1-o,f=l*h+c*p+u*g+d*x,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let A=Math.sqrt(_),R=Math.atan2(A,f*v);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let y=o*v;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,d=d*m+x*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],h=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+u*d+l*p-c*h,t[n+1]=l*g+u*h+c*d-o*p,t[n+2]=c*g+u*p+o*h-l*d,t[n+3]=u*g-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),h=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(l1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(l1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return u0.copy(this).projectOnVector(t),this.sub(u0)}reflect(t){return this.sub(u0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},u0=new N,l1=new Yn,Yt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],v=s[1],_=s[4],y=s[7],A=s[2],R=s[5],w=s[8];return a[0]=r*x+o*v+l*A,a[3]=r*m+o*_+l*R,a[6]=r*f+o*y+l*w,a[1]=c*x+u*v+d*A,a[4]=c*m+u*_+d*R,a[7]=c*f+u*y+d*w,a[2]=h*x+p*v+g*A,a[5]=h*m+p*_+g*R,a[8]=h*f+p*y+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,h=o*l-u*a,p=c*a-r*l,g=n*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*r)*x,t[3]=h*x,t[4]=(u*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(h0.makeScale(t,n)),this}rotate(t){return this.premultiply(h0.makeRotation(-t)),this}translate(t,n){return this.premultiply(h0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},h0=new Yt;function fv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function zc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function yb(){let e=zc("canvas");return e.style.display="block",e}var c1={};function Xo(e){e in c1||(c1[e]=!0,console.warn(e))}function xb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var u1=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h1=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qw(){let e={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Se&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Se&&(s.r=Go(s.r),s.g=Go(s.g),s.b=Go(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fs?Oc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Xo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Xo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[pr]:{primaries:t,whitePoint:i,transfer:Oc,toXYZ:u1,fromXYZ:h1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:u1,fromXYZ:h1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),e}var le=Qw();function Is(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Go(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Do,Uf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Do===void 0&&(Do=zc("canvas")),Do.width=t.width,Do.height=t.height;let s=Do.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Do}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=zc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Is(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jw=0,qo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jw++}),this.uuid=cl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(f0(s[r].image)):a.push(f0(s[r]))}else a=f0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function f0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Uf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $w=0,d0=new N,Nn=class e extends Ps{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ss,s=ss,a=li,r=us,o=wi,l=Hi,c=e.DEFAULT_ANISOTROPY,u=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$w++}),this.uuid=cl(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(d0).x}get height(){return this.source.getSize(d0).y}get depth(){return this.source.getSize(d0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case ss:t.x=t.x<0?0:1;break;case Rf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case ss:t.y=t.y<0?0:1;break;case Rf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=tv;Nn.DEFAULT_ANISOTROPY=1;var ze=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,y=(p+1)/2,A=(f+1)/2,R=(u+h)/4,w=(d+x)/4,U=(g+m)/4;return _>y&&_>A?_<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(_),s=R/i,a=w/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=R/s,a=U/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=w/a,s=U/a),this.set(i,s,a,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this.w=$t(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this.w=$t(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nf=class extends Ps{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ze(0,0,t,n),this.scissorTest=!1,this.viewport=new ze(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Nn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new qo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ls=class extends Nf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Bc=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lf=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wa=class{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ii.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ii.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ii.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ii):Ii.fromBufferAttribute(a,r),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sf.copy(i.boundingBox)),sf.applyMatrix4(t.matrixWorld),this.union(sf)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wc),af.subVectors(this.max,wc),Uo.subVectors(t.a,wc),No.subVectors(t.b,wc),Lo.subVectors(t.c,wc),ya.subVectors(No,Uo),xa.subVectors(Lo,No),or.subVectors(Uo,Lo);let n=[0,-ya.z,ya.y,0,-xa.z,xa.y,0,-or.z,or.y,ya.z,0,-ya.x,xa.z,0,-xa.x,or.z,0,-or.x,-ya.y,ya.x,0,-xa.y,xa.x,0,-or.y,or.x,0];return!p0(n,Uo,No,Lo,af)||(n=[1,0,0,0,1,0,0,0,1],!p0(n,Uo,No,Lo,af))?!1:(rf.crossVectors(ya,xa),n=[rf.x,rf.y,rf.z],p0(n,Uo,No,Lo,af))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Cs=[new N,new N,new N,new N,new N,new N,new N,new N],Ii=new N,sf=new wa,Uo=new N,No=new N,Lo=new N,ya=new N,xa=new N,or=new N,wc=new N,af=new N,rf=new N,lr=new N;function p0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){lr.fromArray(e,a);let o=s.x*Math.abs(lr.x)+s.y*Math.abs(lr.y)+s.z*Math.abs(lr.z),l=t.dot(lr),c=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var tR=new wa,Rc=new N,m0=new N,Wo=class{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):tR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rc.subVectors(t,this.center);let n=Rc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Rc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(m0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rc.copy(t.center).add(m0)),this.expandByPoint(Rc.copy(t.center).sub(m0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ds=new N,g0=new N,of=new N,Sa=new N,v0=new N,lf=new N,_0=new N,Fc=class{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ds)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ds.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ds.copy(this.origin).addScaledVector(this.direction,n),Ds.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){g0.copy(t).add(n).multiplyScalar(.5),of.copy(n).sub(t).normalize(),Sa.copy(this.origin).sub(g0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(of),o=Sa.dot(this.direction),l=-Sa.dot(of),c=Sa.lengthSq(),u=Math.abs(1-r*r),d,h,p,g;if(u>0)if(d=r*l-o,h=r*o-l,g=a*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(g0).addScaledVector(of,h),p}intersectSphere(t,n){Ds.subVectors(t.center,this.origin);let i=Ds.dot(this.direction),s=Ds.dot(Ds)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ds)!==null}intersectTriangle(t,n,i,s,a){v0.subVectors(n,t),lf.subVectors(i,t),_0.crossVectors(v0,lf);let r=this.direction.dot(_0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Sa.subVectors(this.origin,t);let l=o*this.direction.dot(lf.crossVectors(Sa,lf));if(l<0)return null;let c=o*this.direction.dot(v0.cross(Sa));if(c<0||l+c>r)return null;let u=-o*Sa.dot(_0);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class e{constructor(t,n,i,s,a,r,o,l,c,u,d,h,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,d,h,p,g,x,m)}set(t,n,i,s,a,r,o,l,c,u,d,h,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Io.setFromMatrixColumn(t,0).length(),a=1/Io.setFromMatrixColumn(t,1).length(),r=1/Io.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let h=r*u,p=r*d,g=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h+x*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=p*o-g,n[6]=x+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h-x*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*u,n[9]=x-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*u,p=r*d,g=o*u,x=o*d;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*u,n[4]=x-h*d,n[8]=g*d+p,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+g,n[10]=h-x*d}else if(t.order==="XZY"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=r*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eR,t,nR)}lookAt(t,n,i){let s=this.elements;return ri.subVectors(t,n),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ma.crossVectors(i,ri),Ma.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ma.crossVectors(i,ri)),Ma.normalize(),cf.crossVectors(ri,Ma),s[0]=Ma.x,s[4]=cf.x,s[8]=ri.x,s[1]=Ma.y,s[5]=cf.y,s[9]=ri.y,s[2]=Ma.z,s[6]=cf.z,s[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],A=i[15],R=s[0],w=s[4],U=s[8],E=s[12],S=s[1],D=s[5],H=s[9],W=s[13],k=s[2],Y=s[6],q=s[10],at=s[14],V=s[3],gt=s[7],Mt=s[11],At=s[15];return a[0]=r*R+o*S+l*k+c*V,a[4]=r*w+o*D+l*Y+c*gt,a[8]=r*U+o*H+l*q+c*Mt,a[12]=r*E+o*W+l*at+c*At,a[1]=u*R+d*S+h*k+p*V,a[5]=u*w+d*D+h*Y+p*gt,a[9]=u*U+d*H+h*q+p*Mt,a[13]=u*E+d*W+h*at+p*At,a[2]=g*R+x*S+m*k+f*V,a[6]=g*w+x*D+m*Y+f*gt,a[10]=g*U+x*H+m*q+f*Mt,a[14]=g*E+x*W+m*at+f*At,a[3]=v*R+_*S+y*k+A*V,a[7]=v*w+_*D+y*Y+A*gt,a[11]=v*U+_*H+y*q+A*Mt,a[15]=v*E+_*W+y*at+A*At,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+a*l*d-s*c*d-a*o*h+i*c*h+s*o*p-i*l*p)+x*(+n*l*p-n*c*h+a*r*h-s*r*p+s*c*u-a*l*u)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*u-i*c*u)+f*(-s*o*u-n*l*d+n*o*h+s*r*d-i*r*h+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],v=d*m*c-x*h*c+x*l*p-o*m*p-d*l*f+o*h*f,_=g*h*c-u*m*c-g*l*p+r*m*p+u*l*f-r*h*f,y=u*x*c-g*d*c+g*o*p-r*x*p-u*o*f+r*d*f,A=g*d*l-u*x*l-g*o*h+r*x*h+u*o*m-r*d*m,R=n*v+i*_+s*y+a*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=v*w,t[1]=(x*h*a-d*m*a-x*s*p+i*m*p+d*s*f-i*h*f)*w,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*f+i*l*f)*w,t[3]=(d*l*a-o*h*a-d*s*c+i*h*c+o*s*p-i*l*p)*w,t[4]=_*w,t[5]=(u*m*a-g*h*a+g*s*p-n*m*p-u*s*f+n*h*f)*w,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*f-n*l*f)*w,t[7]=(r*h*a-u*l*a+u*s*c-n*h*c-r*s*p+n*l*p)*w,t[8]=y*w,t[9]=(g*d*a-u*x*a-g*i*p+n*x*p+u*i*f-n*d*f)*w,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*f+n*o*f)*w,t[11]=(u*o*a-r*d*a-u*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=A*w,t[13]=(u*x*s-g*d*s+g*i*h-n*x*h-u*i*m+n*d*m)*w,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-u*o*s+u*i*l-n*d*l-r*i*h+n*o*h)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,d=o+o,h=a*c,p=a*u,g=a*d,x=r*u,m=r*d,f=o*d,v=l*c,_=l*u,y=l*d,A=i.x,R=i.y,w=i.z;return s[0]=(1-(x+f))*A,s[1]=(p+y)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(h+f))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+_)*w,s[9]=(m-v)*w,s[10]=(1-(h+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Io.set(s[0],s[1],s[2]).length(),r=Io.set(s[4],s[5],s[6]).length(),o=Io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Oi.copy(this);let c=1/a,u=1/r,d=1/o;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=u,Oi.elements[5]*=u,Oi.elements[6]*=u,Oi.elements[8]*=d,Oi.elements[9]*=d,Oi.elements[10]*=d,n.setFromRotationMatrix(Oi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=zi,l=!1){let c=this.elements,u=2*a/(n-t),d=2*a/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===zi)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Pc)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=zi,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===zi)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Pc)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Io=new N,Oi=new Ne,eR=new N(0,0,0),nR=new N(1,1,1),Ma=new N,cf=new N,ri=new N,f1=new Ne,d1=new Yn,Bi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return f1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(f1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return d1.setFromEuler(this),this.setFromQuaternion(d1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Yo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},iR=0,p1=new N,Oo=new Yn,Us=new Ne,uf=new N,Cc=new N,sR=new N,aR=new Yn,m1=new N(1,0,0),g1=new N(0,1,0),v1=new N(0,0,1),_1={type:"added"},rR={type:"removed"},Po={type:"childadded",child:null},y0={type:"childremoved",child:null},Ln=class e extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iR++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new N,n=new Bi,i=new Yn,s=new N(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Yt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Oo.setFromAxisAngle(t,n),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(t,n){return Oo.setFromAxisAngle(t,n),this.quaternion.premultiply(Oo),this}rotateX(t){return this.rotateOnAxis(m1,t)}rotateY(t){return this.rotateOnAxis(g1,t)}rotateZ(t){return this.rotateOnAxis(v1,t)}translateOnAxis(t,n){return p1.copy(t).applyQuaternion(this.quaternion),this.position.add(p1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(m1,t)}translateY(t){return this.translateOnAxis(g1,t)}translateZ(t){return this.translateOnAxis(v1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Us.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?uf.copy(t):uf.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Us.lookAt(Cc,uf,this.up):Us.lookAt(uf,Cc,this.up),this.quaternion.setFromRotationMatrix(Us),s&&(Us.extractRotation(s.matrixWorld),Oo.setFromRotationMatrix(Us),this.quaternion.premultiply(Oo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_1),Po.child=t,this.dispatchEvent(Po),Po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(rR),y0.child=t,this.dispatchEvent(y0),y0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Us.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Us.multiply(t.parent.matrixWorld)),t.applyMatrix4(Us),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_1),Po.child=t,this.dispatchEvent(Po),Po.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cc,t,sR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cc,aR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ln.DEFAULT_UP=new N(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pi=new N,Ns=new N,x0=new N,Ls=new N,zo=new N,Bo=new N,y1=new N,S0=new N,M0=new N,b0=new N,E0=new ze,T0=new ze,A0=new ze,Ta=class e{constructor(t=new N,n=new N,i=new N){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Pi.subVectors(t,n),s.cross(Pi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Pi.subVectors(s,n),Ns.subVectors(i,n),x0.subVectors(t,n);let r=Pi.dot(Pi),o=Pi.dot(Ns),l=Pi.dot(x0),c=Ns.dot(Ns),u=Ns.dot(x0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,g=(r*u-o*l)*h;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ls)===null?!1:Ls.x>=0&&Ls.y>=0&&Ls.x+Ls.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ls.x),l.addScaledVector(r,Ls.y),l.addScaledVector(o,Ls.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return E0.setScalar(0),T0.setScalar(0),A0.setScalar(0),E0.fromBufferAttribute(t,n),T0.fromBufferAttribute(t,i),A0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(E0,a.x),r.addScaledVector(T0,a.y),r.addScaledVector(A0,a.z),r}static isFrontFacing(t,n,i,s){return Pi.subVectors(i,n),Ns.subVectors(t,n),Pi.cross(Ns).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ns.subVectors(this.a,this.b),Pi.cross(Ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;zo.subVectors(s,i),Bo.subVectors(a,i),S0.subVectors(t,i);let l=zo.dot(S0),c=Bo.dot(S0);if(l<=0&&c<=0)return n.copy(i);M0.subVectors(t,s);let u=zo.dot(M0),d=Bo.dot(M0);if(u>=0&&d<=u)return n.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(zo,r);b0.subVectors(t,a);let p=zo.dot(b0),g=Bo.dot(b0);if(g>=0&&p<=g)return n.copy(a);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Bo,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return y1.subVectors(a,s),o=(d-u)/(d-u+(p-g)),n.copy(s).addScaledVector(y1,o);let f=1/(m+x+h);return r=x*f,o=h*f,n.copy(i).addScaledVector(zo,r).addScaledVector(Bo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Sb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ba={h:0,s:0,l:0},hf={h:0,s:0,l:0};function w0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Kt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=le.workingColorSpace){return this.r=t,this.g=n,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=le.workingColorSpace){if(t=Kw(t,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=w0(r,a,t+1/3),this.g=w0(r,a,t),this.b=w0(r,a,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,n=gn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gn){let i=Sb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return le.workingToColorSpace(bn.copy(this),t),Math.round($t(bn.r*255,0,255))*65536+Math.round($t(bn.g*255,0,255))*256+Math.round($t(bn.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=le.workingColorSpace){le.workingToColorSpace(bn.copy(this),n);let i=bn.r,s=bn.g,a=bn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=le.workingColorSpace){return le.workingToColorSpace(bn.copy(this),n),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=gn){le.workingToColorSpace(bn.copy(this),t);let n=bn.r,i=bn.g,s=bn.b;return t!==gn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ba),this.setHSL(ba.h+t,ba.s+n,ba.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ba),t.getHSL(hf);let i=c0(ba.h,hf.h,n),s=c0(ba.s,hf.s,n),a=c0(ba.l,hf.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Kt;Kt.NAMES=Sb;var oR=0,Ra=class extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=fr,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=wf,this.blendEquation=Aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==Os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Af&&(i.blendSrc=this.blendSrc),this.blendDst!==wf&&(i.blendDst=this.blendDst),this.blendEquation!==Aa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},mr=class extends Ra{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=$0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new N,ff=new vt,lR=0,vn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=F0,this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ff.fromBufferAttribute(this,n),ff.applyMatrix3(t),this.setXY(n,ff.x,ff.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix3(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix4(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyNormalMatrix(t),this.setXYZ(n,We.x,We.y,We.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.transformDirection(t),this.setXYZ(n,We.x,We.y,We.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ac(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ac(n,this.array)),n}setX(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ac(n,this.array)),n}setY(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ac(n,this.array)),n}setZ(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ac(n,this.array)),n}setW(t,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array),a=qn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==F0&&(t.usage=this.usage),t}};var Hc=class extends vn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Vc=class extends vn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ln=class extends vn{constructor(t,n,i){super(new Float32Array(t),n,i)}},cR=0,Ai=new Ne,R0=new Ln,Fo=new N,oi=new wa,Dc=new wa,on=new N,ci=class e extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cR++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fv(t)?Vc:Hc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Yt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,n,i){return Ai.makeTranslation(t,n,i),this.applyMatrix4(Ai),this}scale(t,n,i){return Ai.makeScale(t,n,i),this.applyMatrix4(Ai),this}lookAt(t){return R0.lookAt(t),R0.updateMatrix(),this.applyMatrix4(R0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fo).negate(),this.translate(Fo.x,Fo.y,Fo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ln(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];oi.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Dc.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(oi.min,Dc.min),oi.expandByPoint(on),on.addVectors(oi.max,Dc.max),oi.expandByPoint(on)):(oi.expandByPoint(Dc.min),oi.expandByPoint(Dc.max))}oi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)on.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(on));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(Fo.fromBufferAttribute(t,c),on.add(Fo)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new N,l[U]=new N;let c=new N,u=new N,d=new N,h=new vt,p=new vt,g=new vt,x=new N,m=new N;function f(U,E,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(a,U),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,S),u.sub(c),d.sub(c),p.sub(h),g.sub(h);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[U].add(x),o[E].add(x),o[S].add(x),l[U].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let U=0,E=v.length;U<E;++U){let S=v[U],D=S.start,H=S.count;for(let W=D,k=D+H;W<k;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let _=new N,y=new N,A=new N,R=new N;function w(U){A.fromBufferAttribute(s,U),R.copy(A);let E=o[U];_.copy(E),_.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(R,E);let D=y.dot(l[U])<0?-1:1;r.setXYZW(U,_.x,_.y,_.z,D)}for(let U=0,E=v.length;U<E;++U){let S=v[U],D=S.start,H=S.count;for(let W=D,k=D+H;W<k;W+=3)w(t.getX(W+0)),w(t.getX(W+1)),w(t.getX(W+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new N,a=new N,r=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)on.fromBufferAttribute(t,n),on.normalize(),t.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new vn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],d=a[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},x1=new Ne,cr=new Fc,df=new Wo,S1=new N,pf=new N,mf=new N,gf=new N,C0=new N,vf=new N,M1=new N,_f=new N,Ve=class extends Ln{constructor(t=new ci,n=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){vf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(C0.fromBufferAttribute(d,t),r?vf.addScaledVector(C0,u):vf.addScaledVector(C0.sub(n),u))}n.add(vf)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),df.copy(i.boundingSphere),df.applyMatrix4(a),cr.copy(t.ray).recast(t.near),!(df.containsPoint(cr.origin)===!1&&(cr.intersectSphere(df,S1)===null||cr.origin.distanceToSquared(S1)>(t.far-t.near)**2))&&(x1.copy(a).invert(),cr.copy(t.ray).applyMatrix4(x1),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,cr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],f=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){let R=o.getX(y),w=o.getX(y+1),U=o.getX(y+2);s=yf(this,f,t,i,c,u,d,R,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=yf(this,r,t,i,c,u,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],f=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){let R=y,w=y+1,U=y+2;s=yf(this,f,t,i,c,u,d,R,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=m,_=m+1,y=m+2;s=yf(this,r,t,i,c,u,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function uR(e,t,n,i,s,a,r,o){let l;if(t.side===In?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Os,o),l===null)return null;_f.copy(o),_f.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(_f);return c<n.near||c>n.far?null:{distance:c,point:_f.clone(),object:e}}function yf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,pf),e.getVertexPosition(l,mf),e.getVertexPosition(c,gf);let u=uR(e,t,n,i,pf,mf,gf,M1);if(u){let d=new N;Ta.getBarycoord(M1,pf,mf,gf,d),s&&(u.uv=Ta.getInterpolatedAttribute(s,o,l,c,d,new vt)),a&&(u.uv1=Ta.getInterpolatedAttribute(a,o,l,c,d,new vt)),r&&(u.normal=Ta.getInterpolatedAttribute(r,o,l,c,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new N,materialIndex:0};Ta.getNormal(pf,mf,gf,h.normal),u.face=h,u.barycoord=d}return u}var Zo=class e extends ci{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2));function g(x,m,f,v,_,y,A,R,w,U,E){let S=y/w,D=A/U,H=y/2,W=A/2,k=R/2,Y=w+1,q=U+1,at=0,V=0,gt=new N;for(let Mt=0;Mt<q;Mt++){let At=Mt*D-W;for(let Bt=0;Bt<Y;Bt++){let Zt=Bt*S-H;gt[x]=Zt*v,gt[m]=At*_,gt[f]=k,c.push(gt.x,gt.y,gt.z),gt[x]=0,gt[m]=0,gt[f]=R>0?1:-1,u.push(gt.x,gt.y,gt.z),d.push(Bt/w),d.push(1-Mt/U),at+=1}}for(let Mt=0;Mt<U;Mt++)for(let At=0;At<w;At++){let Bt=h+At+Y*Mt,Zt=h+At+Y*(Mt+1),re=h+(At+1)+Y*(Mt+1),ne=h+(At+1)+Y*Mt;l.push(Bt,Zt,ne),l.push(Zt,re,ne),V+=6}o.addGroup(p,V,E),p+=V,h+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function br(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Tn(e){let t={};for(let n=0;n<e.length;n++){let i=br(e[n]);for(let s in i)t[s]=i[s]}return t}function hR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function dv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Mb={clone:br,merge:Tn},fR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends Ra{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fR,this.fragmentShader=dR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=hR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Gc=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ea=new N,b1=new vt,E1=new vt,En=class extends Gc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Df*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(l0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Df*2*Math.atan(Math.tan(l0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z),Ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z)}getViewSize(t,n){return this.getViewBounds(t,b1,E1),n.subVectors(E1,b1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(l0*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Ho=-90,Vo=1,If=class extends Ln{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new En(Ho,Vo,t,n);s.layers=this.layers,this.add(s);let a=new En(Ho,Vo,t,n);a.layers=this.layers,this.add(a);let r=new En(Ho,Vo,t,n);r.layers=this.layers,this.add(r);let o=new En(Ho,Vo,t,n);o.layers=this.layers,this.add(o);let l=new En(Ho,Vo,t,n);l.layers=this.layers,this.add(l);let c=new En(Ho,Vo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},kc=class extends Nn{constructor(t=[],n=Sr,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Of=class extends ls{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zo(5,5,5),a=new Fi({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:zs});a.uniforms.tEquirect.value=n;let r=new Ve(s,a),o=n.minFilter;return n.minFilter===us&&(n.minFilter=li),new If(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},as=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},pR={type:"move"},Jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new as;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var Ko=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Xc=class extends Nn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Wn,u=Wn,d,h){super(null,r,o,l,c,u,s,a,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var D0=new N,mR=new N,gR=new Yt,is=class{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=D0.subVectors(i,n).cross(mR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(D0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||gR.getNormalMatrix(t),s=this.coplanarPoint(D0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ur=new Wo,vR=new vt(.5,.5),xf=new N,Qo=class{constructor(t=new is,n=new is,i=new is,s=new is,a=new is,r=new is){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=zi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],h=a[6],p=a[7],g=a[8],x=a[9],m=a[10],f=a[11],v=a[12],_=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-u,f-g,A-v).normalize(),s[1].setComponents(c+r,p+u,f+g,A+v).normalize(),s[2].setComponents(c+o,p+d,f+x,A+_).normalize(),s[3].setComponents(c-o,p-d,f-x,A-_).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,f-m,A-y).normalize();else if(s[4].setComponents(c-l,p-h,f-m,A-y).normalize(),n===zi)s[5].setComponents(c+l,p+h,f+m,A+y).normalize();else if(n===Pc)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){ur.center.set(0,0,0);let n=vR.distanceTo(t.center);return ur.radius=.7071067811865476+n,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(xf.x=s.normal.x>0?t.max.x:t.min.x,xf.y=s.normal.y>0?t.max.y:t.min.y,xf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends Nn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qc=class extends Nn{constructor(t,n,i=La,s,a,r,o=Wn,l=Wn,c,u=ko,d=1){if(u!==ko&&u!==ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Wc=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let u=i[s],h=i[s+1]-u,p=(r-u)/h;return(s+p)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new vt:new N);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new N,s=[],a=[],r=[],o=new N,l=new Ne;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new N)}a[0]=new N,r[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($t(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(n===!0){let p=Math.acos($t(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},jo=class extends ui{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new vt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pf=class extends jo{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function pv(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,d){let h=(r-a)/c-(o-a)/(c+u)+(o-r)/u,p=(o-r)/u-(l-r)/(u+d)+(l-o)/d;h*=u,p*=u,s(r,o,h,p)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var Sf=new N,U0=new pv,N0=new pv,L0=new pv,$o=class extends ui{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new N){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(Sf.subVectors(s[0],s[1]).add(s[0]),c=Sf);let d=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(Sf.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=Sf),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),U0.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,m),N0.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,m),L0.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(U0.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),N0.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),L0.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(U0.calc(l),N0.calc(l),L0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function T1(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function _R(e,t){let n=1-e;return n*n*t}function yR(e,t){return 2*(1-e)*e*t}function xR(e,t){return e*e*t}function Nc(e,t,n,i){return _R(e,t)+yR(e,n)+xR(e,i)}function SR(e,t){let n=1-e;return n*n*n*t}function MR(e,t){let n=1-e;return 3*n*n*e*t}function bR(e,t){return 3*(1-e)*e*e*t}function ER(e,t){return e*e*e*t}function Lc(e,t,n,i,s){return SR(e,t)+MR(e,n)+bR(e,i)+ER(e,s)}var Yc=class extends ui{constructor(t=new vt,n=new vt,i=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new vt){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Lc(t,s.x,a.x,r.x,o.x),Lc(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zf=class extends ui{constructor(t=new N,n=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new N){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Lc(t,s.x,a.x,r.x,o.x),Lc(t,s.y,a.y,r.y,o.y),Lc(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zc=class extends ui{constructor(t=new vt,n=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new vt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new vt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bf=class extends ui{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jc=class extends ui{constructor(t=new vt,n=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new vt){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Nc(t,s.x,a.x,r.x),Nc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ff=class extends ui{constructor(t=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new N){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Nc(t,s.x,a.x,r.x),Nc(t,s.y,a.y,r.y),Nc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kc=class extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new vt){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(T1(o,l.x,c.x,u.x,d.x),T1(o,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new vt().fromArray(s))}return this}},H0=Object.freeze({__proto__:null,ArcCurve:Pf,CatmullRomCurve3:$o,CubicBezierCurve:Yc,CubicBezierCurve3:zf,EllipseCurve:jo,LineCurve:Zc,LineCurve3:Bf,QuadraticBezierCurve:Jc,QuadraticBezierCurve3:Ff,SplineCurve:Kc}),Hf=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new H0[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new H0[s.type]().fromJSON(s))}return this}},vr=class extends Hf{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new Zc(this.currentPoint.clone(),new vt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let a=new Jc(this.currentPoint.clone(),new vt(t,n),new vt(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,a,r){let o=new Yc(this.currentPoint.clone(),new vt(t,n),new vt(i,s),new vt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new Kc(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,s,a,r),this}absarc(t,n,i,s,a,r){return this.absellipse(t,n,i,i,s,a,r),this}ellipse(t,n,i,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,n+u,i,s,a,r,o,l),this}absellipse(t,n,i,s,a,r,o,l){let c=new jo(t,n,i,s,a,r,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ca=class extends vr{constructor(t){super(t),this.uuid=cl(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new vr().fromJSON(s))}return this}};function TR(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,a=bb(e,0,s,n,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=DR(e,t,a,n)),e.length>80*n){o=1/0,l=1/0;let u=-1/0,d=-1/0;for(let h=n;h<s;h+=n){let p=e[h],g=e[h+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Qc(a,r,n,o,l,c,0),r}function bb(e,t,n,i,s){let a;if(s===VR(e,t,n,i)>0)for(let r=t;r<n;r+=i)a=A1(r/i|0,e[r],e[r+1],a);else for(let r=n-i;r>=t;r-=i)a=A1(r/i|0,e[r],e[r+1],a);return a&&tl(a,a.next)&&($c(a),a=a.next),a}function _r(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(tl(n,n.next)||Pe(n.prev,n,n.next)===0)){if($c(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Qc(e,t,n,i,s,a,r){if(!e)return;!r&&a&&OR(e,i,s,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(a?wR(e,i,s,a):AR(e)){t.push(l.i,e.i,c.i),$c(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=RR(_r(e),t),Qc(e,t,n,i,s,a,2)):r===2&&CR(e,t,n,i,s,a):Qc(_r(e),t,n,i,s,a,1);break}}}function AR(e){let t=e.prev,n=e,i=e.next;if(Pe(t,n,i)>=0)return!1;let s=t.x,a=n.x,r=i.x,o=t.y,l=n.y,c=i.y,u=Math.min(s,a,r),d=Math.min(o,l,c),h=Math.max(s,a,r),p=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&Uc(s,o,a,l,r,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wR(e,t,n,i){let s=e.prev,a=e,r=e.next;if(Pe(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,d=a.y,h=r.y,p=Math.min(o,l,c),g=Math.min(u,d,h),x=Math.max(o,l,c),m=Math.max(u,d,h),f=V0(p,g,t,n,i),v=V0(x,m,t,n,i),_=e.prevZ,y=e.nextZ;for(;_&&_.z>=f&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Uc(o,u,l,d,c,h,_.x,_.y)&&Pe(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Uc(o,u,l,d,c,h,y.x,y.y)&&Pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Uc(o,u,l,d,c,h,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Uc(o,u,l,d,c,h,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function RR(e,t){let n=e;do{let i=n.prev,s=n.next.next;!tl(i,s)&&Tb(i,n,n.next,s)&&jc(i,s)&&jc(s,i)&&(t.push(i.i,n.i,s.i),$c(n),$c(n.next),n=e=s),n=n.next}while(n!==e);return _r(n)}function CR(e,t,n,i,s,a){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&BR(r,o)){let l=Ab(r,o);r=_r(r,r.next),l=_r(l,l.next),Qc(r,t,n,i,s,a,0),Qc(l,t,n,i,s,a,0);return}o=o.next}r=r.next}while(r!==e)}function DR(e,t,n,i){let s=[];for(let a=0,r=t.length;a<r;a++){let o=t[a]*i,l=a<r-1?t[a+1]*i:e.length,c=bb(e,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(zR(c))}s.sort(UR);for(let a=0;a<s.length;a++)n=NR(s[a],n);return n}function UR(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}return n}function NR(e,t){let n=LR(e,t);if(!n)return t;let i=Ab(n,e);return _r(i,i.next),_r(n,n.next)}function LR(e,t){let n=t,i=e.x,s=e.y,a=-1/0,r;if(tl(e,n))return n;do{if(tl(e,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>a&&(a=d,r=n.x<n.next.x?n:n.next,d===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Eb(s<c?i:a,s,l,c,s<c?a:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);jc(n,e)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&IR(r,n)))&&(r=n,u=d)}n=n.next}while(n!==o);return r}function IR(e,t){return Pe(e.prev,e,t.prev)<0&&Pe(t.next,e,e.next)<0}function OR(e,t,n,i){let s=e;do s.z===0&&(s.z=V0(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,PR(s)}function PR(e){let t,n=1;do{let i=e,s;e=null;let a=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:e=s,s.prevZ=a,a=s;i=r}a.nextZ=null,n*=2}while(t>1);return e}function V0(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function zR(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Eb(e,t,n,i,s,a,r,o){return(s-r)*(t-o)>=(e-r)*(a-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(a-o)>=(s-r)*(i-o)}function Uc(e,t,n,i,s,a,r,o){return!(e===r&&t===o)&&Eb(e,t,n,i,s,a,r,o)}function BR(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!FR(e,t)&&(jc(e,t)&&jc(t,e)&&HR(e,t)&&(Pe(e.prev,e,t.prev)||Pe(e,t.prev,t))||tl(e,t)&&Pe(e.prev,e,e.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function tl(e,t){return e.x===t.x&&e.y===t.y}function Tb(e,t,n,i){let s=bf(Pe(e,t,n)),a=bf(Pe(e,t,i)),r=bf(Pe(n,i,e)),o=bf(Pe(n,i,t));return!!(s!==a&&r!==o||s===0&&Mf(e,n,t)||a===0&&Mf(e,i,t)||r===0&&Mf(n,e,i)||o===0&&Mf(n,t,i))}function Mf(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function bf(e){return e>0?1:e<0?-1:0}function FR(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Tb(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function jc(e,t){return Pe(e.prev,e,e.next)<0?Pe(e,t,e.next)>=0&&Pe(e,e.prev,t)>=0:Pe(e,t,e.prev)<0||Pe(e,e.next,t)<0}function HR(e,t){let n=e,i=!1,s=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&s<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function Ab(e,t){let n=G0(e.i,e.x,e.y),i=G0(t.i,t.x,t.y),s=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,a.next=i,i.prev=a,i}function A1(e,t,n,i){let s=G0(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $c(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function G0(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function VR(e,t,n,i){let s=0;for(let a=t,r=n-i;a<n;a+=i)s+=(e[r]-e[a])*(e[a+1]+e[r+1]),r=a;return s}var k0=class{static triangulate(t,n,i=2){return TR(t,n,i)}},rs=class e{static area(t){let n=t.length,i=0;for(let s=n-1,a=0;a<n;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],a=[];w1(t),R1(i,t);let r=t.length;n.forEach(w1);for(let l=0;l<n.length;l++)s.push(r),r+=n[l].length,R1(i,n[l]);let o=k0.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function w1(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function R1(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var el=class e extends ci{constructor(t=new Ca([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new ln(s,3)),this.setAttribute("uv",new ln(a,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,f=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:GR,_,y=!1,A,R,w,U;f&&(_=f.getSpacedPoints(u),y=!0,h=!1,A=f.computeFrenetFrames(u,!1),R=new N,w=new N,U=new N),h||(m=0,p=0,g=0,x=0);let E=o.extractPoints(c),S=E.shape,D=E.holes;if(!rs.isClockWise(S)){S=S.reverse();for(let tt=0,Q=D.length;tt<Q;tt++){let Z=D[tt];rs.isClockWise(Z)&&(D[tt]=Z.reverse())}}function W(tt){let Z=10000000000000001e-36,j=tt[0];for(let dt=1;dt<=tt.length;dt++){let st=dt%tt.length,ht=tt[st],Pt=ht.x-j.x,Ft=ht.y-j.y,T=Pt*Pt+Ft*Ft,M=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(j.x),Math.abs(j.y)),P=Z*M*M;if(T<=P){tt.splice(st,1),dt--;continue}j=ht}}W(S),D.forEach(W);let k=D.length,Y=S;for(let tt=0;tt<k;tt++){let Q=D[tt];S=S.concat(Q)}function q(tt,Q,Z){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Q,Z)}let at=S.length;function V(tt,Q,Z){let j,dt,st,ht=tt.x-Q.x,Pt=tt.y-Q.y,Ft=Z.x-tt.x,T=Z.y-tt.y,M=ht*ht+Pt*Pt,P=ht*T-Pt*Ft;if(Math.abs(P)>Number.EPSILON){let X=Math.sqrt(M),nt=Math.sqrt(Ft*Ft+T*T),z=Q.x-Pt/X,Rt=Q.y+ht/X,ct=Z.x-T/nt,Ct=Z.y+Ft/nt,Dt=((ct-z)*T-(Ct-Rt)*Ft)/(ht*T-Pt*Ft);j=z+ht*Dt-tt.x,dt=Rt+Pt*Dt-tt.y;let it=j*j+dt*dt;if(it<=2)return new vt(j,dt);st=Math.sqrt(it/2)}else{let X=!1;ht>Number.EPSILON?Ft>Number.EPSILON&&(X=!0):ht<-Number.EPSILON?Ft<-Number.EPSILON&&(X=!0):Math.sign(Pt)===Math.sign(T)&&(X=!0),X?(j=-Pt,dt=ht,st=Math.sqrt(M)):(j=ht,dt=Pt,st=Math.sqrt(M/2))}return new vt(j/st,dt/st)}let gt=[];for(let tt=0,Q=Y.length,Z=Q-1,j=tt+1;tt<Q;tt++,Z++,j++)Z===Q&&(Z=0),j===Q&&(j=0),gt[tt]=V(Y[tt],Y[Z],Y[j]);let Mt=[],At,Bt=gt.concat();for(let tt=0,Q=k;tt<Q;tt++){let Z=D[tt];At=[];for(let j=0,dt=Z.length,st=dt-1,ht=j+1;j<dt;j++,st++,ht++)st===dt&&(st=0),ht===dt&&(ht=0),At[j]=V(Z[j],Z[st],Z[ht]);Mt.push(At),Bt=Bt.concat(At)}let Zt;if(m===0)Zt=rs.triangulateShape(Y,D);else{let tt=[],Q=[];for(let Z=0;Z<m;Z++){let j=Z/m,dt=p*Math.cos(j*Math.PI/2),st=g*Math.sin(j*Math.PI/2)+x;for(let ht=0,Pt=Y.length;ht<Pt;ht++){let Ft=q(Y[ht],gt[ht],st);Lt(Ft.x,Ft.y,-dt),j===0&&tt.push(Ft)}for(let ht=0,Pt=k;ht<Pt;ht++){let Ft=D[ht];At=Mt[ht];let T=[];for(let M=0,P=Ft.length;M<P;M++){let X=q(Ft[M],At[M],st);Lt(X.x,X.y,-dt),j===0&&T.push(X)}j===0&&Q.push(T)}}Zt=rs.triangulateShape(tt,Q)}let re=Zt.length,ne=g+x;for(let tt=0;tt<at;tt++){let Q=h?q(S[tt],Bt[tt],ne):S[tt];y?(w.copy(A.normals[0]).multiplyScalar(Q.x),R.copy(A.binormals[0]).multiplyScalar(Q.y),U.copy(_[0]).add(w).add(R),Lt(U.x,U.y,U.z)):Lt(Q.x,Q.y,0)}for(let tt=1;tt<=u;tt++)for(let Q=0;Q<at;Q++){let Z=h?q(S[Q],Bt[Q],ne):S[Q];y?(w.copy(A.normals[tt]).multiplyScalar(Z.x),R.copy(A.binormals[tt]).multiplyScalar(Z.y),U.copy(_[tt]).add(w).add(R),Lt(U.x,U.y,U.z)):Lt(Z.x,Z.y,d/u*tt)}for(let tt=m-1;tt>=0;tt--){let Q=tt/m,Z=p*Math.cos(Q*Math.PI/2),j=g*Math.sin(Q*Math.PI/2)+x;for(let dt=0,st=Y.length;dt<st;dt++){let ht=q(Y[dt],gt[dt],j);Lt(ht.x,ht.y,d+Z)}for(let dt=0,st=D.length;dt<st;dt++){let ht=D[dt];At=Mt[dt];for(let Pt=0,Ft=ht.length;Pt<Ft;Pt++){let T=q(ht[Pt],At[Pt],j);y?Lt(T.x,T.y+_[u-1].y,_[u-1].x+Z):Lt(T.x,T.y,d+Z)}}}K(),et();function K(){let tt=s.length/3;if(h){let Q=0,Z=at*Q;for(let j=0;j<re;j++){let dt=Zt[j];wt(dt[2]+Z,dt[1]+Z,dt[0]+Z)}Q=u+m*2,Z=at*Q;for(let j=0;j<re;j++){let dt=Zt[j];wt(dt[0]+Z,dt[1]+Z,dt[2]+Z)}}else{for(let Q=0;Q<re;Q++){let Z=Zt[Q];wt(Z[2],Z[1],Z[0])}for(let Q=0;Q<re;Q++){let Z=Zt[Q];wt(Z[0]+at*u,Z[1]+at*u,Z[2]+at*u)}}i.addGroup(tt,s.length/3-tt,0)}function et(){let tt=s.length/3,Q=0;bt(Y,Q),Q+=Y.length;for(let Z=0,j=D.length;Z<j;Z++){let dt=D[Z];bt(dt,Q),Q+=dt.length}i.addGroup(tt,s.length/3-tt,1)}function bt(tt,Q){let Z=tt.length;for(;--Z>=0;){let j=Z,dt=Z-1;dt<0&&(dt=tt.length-1);for(let st=0,ht=u+m*2;st<ht;st++){let Pt=at*st,Ft=at*(st+1),T=Q+j+Pt,M=Q+dt+Pt,P=Q+dt+Ft,X=Q+j+Ft;qt(T,M,P,X)}}}function Lt(tt,Q,Z){l.push(tt),l.push(Q),l.push(Z)}function wt(tt,Q,Z){ge(tt),ge(Q),ge(Z);let j=s.length/3,dt=v.generateTopUV(i,s,j-3,j-2,j-1);C(dt[0]),C(dt[1]),C(dt[2])}function qt(tt,Q,Z,j){ge(tt),ge(Q),ge(j),ge(Q),ge(Z),ge(j);let dt=s.length/3,st=v.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);C(st[0]),C(st[1]),C(st[3]),C(st[1]),C(st[2]),C(st[3])}function ge(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function C(tt){a.push(tt.x),a.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return kR(n,i,t)}static fromJSON(t,n){let i=[];for(let a=0,r=t.shapes.length;a<r;a++){let o=n[t.shapes[a]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new H0[s.type]().fromJSON(s)),new e(i,t.options)}},GR={generateTopUV:function(e,t,n,i,s){let a=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new vt(a,r),new vt(o,l),new vt(c,u)]},generateSideWallUV:function(e,t,n,i,s,a){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new vt(r,1-l),new vt(c,1-d),new vt(h,1-g),new vt(x,1-f)]:[new vt(o,1-l),new vt(u,1-d),new vt(p,1-g),new vt(m,1-f)]}};function kR(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let a=e[i];n.shapes.push(a.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var yr=class e extends ci{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=n/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){let v=f*h-r;for(let _=0;_<c;_++){let y=_*d-a;g.push(y,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let _=v+c*f,y=v+c*(f+1),A=v+1+c*(f+1),R=v+1+c*f;p.push(_,y,R),p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var tu=class e extends ci{constructor(t=new Ca([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(a,3)),this.setAttribute("uv",new ln(r,2));function c(u){let d=s.length/3,h=u.extractPoints(n),p=h.shape,g=h.holes;rs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let v=g[m];rs.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=rs.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let v=g[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){let v=p[m];s.push(v.x,v.y,0),a.push(0,0,1),r.push(v.x,v.y)}for(let m=0,f=x.length;m<f;m++){let v=x[m],_=v[0]+d,y=v[1]+d,A=v[2]+d;i.push(_,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return XR(n,t)}static fromJSON(t,n){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let r=n[t.shapes[s]];i.push(r)}return new e(i,t.curveSegments)}};function XR(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}var nl=class e extends ci{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);let r=[],o=[],l=[],c=[],u=new N,d=new N,h=new N;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*a,m=p/i*Math.PI*2;d.x=(t+n*Math.cos(m))*Math.cos(x),d.y=(t+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;r.push(x,m,v),r.push(m,f,v)}this.setIndex(r),this.setAttribute("position",new ln(o,3)),this.setAttribute("normal",new ln(l,3)),this.setAttribute("uv",new ln(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var il=class extends Ra{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cv,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Da=class extends il{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Vf=class extends Ra{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gf=class extends Ra{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ef(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function qR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var xr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kf=class extends xr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:O0,endingEnd:O0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case P0:a=t,o=2*n-i;break;case z0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case P0:r=t,l=2*i-n;break;case z0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,f=-h*m+2*h*x-h*g,v=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let A=0;A!==o;++A)a[A]=f*r[u+A]+v*r[c+A]+_*r[l+A]+y*r[d+A];return a}},Xf=class extends xr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*u;return a}},qf=class extends xr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ef(n,this.TimeBufferType),this.values=Ef(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Ef(t.times,Array),values:Ef(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new qf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Ic:n=this.InterpolantFactoryMethodDiscrete;break;case Cf:n=this.InterpolantFactoryMethodLinear;break;case Tf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ic;case this.InterpolantFactoryMethodLinear:return Cf;case this.InterpolantFactoryMethodSmooth:return Tf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&qR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let x=n[d+g];if(x!==n[h+g]||x!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Cf;var Ua=class extends hi{constructor(t,n,i){super(t,n,i)}};Ua.prototype.ValueTypeName="bool";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=Ic;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Wf=class extends hi{constructor(t,n,i,s){super(t,n,i,s)}};Wf.prototype.ValueTypeName="color";var Yf=class extends hi{constructor(t,n,i,s){super(t,n,i,s)}};Yf.prototype.ValueTypeName="number";var Zf=class extends xr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)Yn.slerpFlat(a,0,r,c-o,r,c,l);return a}},eu=class extends hi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Zf(this.times,this.values,this.getValueSize(),t)}};eu.prototype.ValueTypeName="quaternion";eu.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends hi{constructor(t,n,i){super(t,n,i)}};Na.prototype.ValueTypeName="string";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=Ic;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Jf=class extends hi{constructor(t,n,i,s){super(t,n,i,s)}};Jf.prototype.ValueTypeName="vector";var Kf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},wb=new Kf,Qf=class{constructor(t){this.manager=t!==void 0?t:wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qf.DEFAULT_MATERIAL_NAME="__DEFAULT";var jf=class extends Ln{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var I0=new Ne,C1=new N,D1=new N,X0=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;C1.setFromMatrixPosition(t.matrixWorld),n.position.copy(C1),D1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(D1),n.updateMatrixWorld(),I0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(I0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(I0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nu=class extends Gc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},q0=class extends X0{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sl=class extends jf{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new q0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var $f=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var mv="\\[\\]\\.:\\/",WR=new RegExp("["+mv+"]","g"),gv="[^"+mv+"]",YR="[^"+mv.replace("\\.","")+"]",ZR=/((?:WC+[\/:])*)/.source.replace("WC",gv),JR=/(WCOD+)?/.source.replace("WCOD",YR),KR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gv),QR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gv),jR=new RegExp("^"+ZR+JR+KR+QR+"$"),$R=["material","materials","bones","map"],W0=class{constructor(t,n,i){let s=i||Ue.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ue=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(WR,"")}static parseTrackName(t){let n=jR.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);$R.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=W0;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fN=new Float32Array(1);var U1=new Ne,iu=class{constructor(t,n,i=0,s=1/0){this.ray=new Fc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return U1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(U1),this}intersectObject(t,n=!0,i=[]){return Y0(t,this,i,n),i.sort(N1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)Y0(t[s],this,i,n);return i.sort(N1),i}};function N1(e,t){return e.distance-t.distance}function Y0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)Y0(a[r],t,n,!0)}}function vv(e,t,n,i){let s=tC(i);switch(n){case av:return e*t;case ov:return e*t/s.components*s.byteLength;case pd:return e*t/s.components*s.byteLength;case lv:return e*t*2/s.components*s.byteLength;case md:return e*t*2/s.components*s.byteLength;case rv:return e*t*3/s.components*s.byteLength;case wi:return e*t*4/s.components*s.byteLength;case gd:return e*t*4/s.components*s.byteLength;case ru:case ou:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case lu:case cu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _d:case xd:return Math.max(e,16)*Math.max(t,8)/4;case vd:case yd:return Math.max(e,8)*Math.max(t,8)/2;case Sd:case Md:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Td:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case wd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Nd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Od:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case zd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Bd:case Fd:case Hd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Vd:case Gd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case kd:case Xd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tC(e){switch(e){case Hi:case ev:return{byteLength:1,components:1};case al:case nv:case rl:return{byteLength:2,components:1};case fd:case dd:return{byteLength:2,components:4};case La:case hd:case hs:return{byteLength:4,components:1};case iv:case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Qb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function nC(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var iC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_C=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,AC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LC="gl_FragColor = linearToOutputTexel( gl_FragColor );",IC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$C=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,A2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,F2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,K2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:iC,alphahash_pars_fragment:sC,alphamap_fragment:aC,alphamap_pars_fragment:rC,alphatest_fragment:oC,alphatest_pars_fragment:lC,aomap_fragment:cC,aomap_pars_fragment:uC,batching_pars_vertex:hC,batching_vertex:fC,begin_vertex:dC,beginnormal_vertex:pC,bsdfs:mC,iridescence_fragment:gC,bumpmap_pars_fragment:vC,clipping_planes_fragment:_C,clipping_planes_pars_fragment:yC,clipping_planes_pars_vertex:xC,clipping_planes_vertex:SC,color_fragment:MC,color_pars_fragment:bC,color_pars_vertex:EC,color_vertex:TC,common:AC,cube_uv_reflection_fragment:wC,defaultnormal_vertex:RC,displacementmap_pars_vertex:CC,displacementmap_vertex:DC,emissivemap_fragment:UC,emissivemap_pars_fragment:NC,colorspace_fragment:LC,colorspace_pars_fragment:IC,envmap_fragment:OC,envmap_common_pars_fragment:PC,envmap_pars_fragment:zC,envmap_pars_vertex:BC,envmap_physical_pars_fragment:JC,envmap_vertex:FC,fog_vertex:HC,fog_pars_vertex:VC,fog_fragment:GC,fog_pars_fragment:kC,gradientmap_pars_fragment:XC,lightmap_pars_fragment:qC,lights_lambert_fragment:WC,lights_lambert_pars_fragment:YC,lights_pars_begin:ZC,lights_toon_fragment:KC,lights_toon_pars_fragment:QC,lights_phong_fragment:jC,lights_phong_pars_fragment:$C,lights_physical_fragment:t2,lights_physical_pars_fragment:e2,lights_fragment_begin:n2,lights_fragment_maps:i2,lights_fragment_end:s2,logdepthbuf_fragment:a2,logdepthbuf_pars_fragment:r2,logdepthbuf_pars_vertex:o2,logdepthbuf_vertex:l2,map_fragment:c2,map_pars_fragment:u2,map_particle_fragment:h2,map_particle_pars_fragment:f2,metalnessmap_fragment:d2,metalnessmap_pars_fragment:p2,morphinstance_vertex:m2,morphcolor_vertex:g2,morphnormal_vertex:v2,morphtarget_pars_vertex:_2,morphtarget_vertex:y2,normal_fragment_begin:x2,normal_fragment_maps:S2,normal_pars_fragment:M2,normal_pars_vertex:b2,normal_vertex:E2,normalmap_pars_fragment:T2,clearcoat_normal_fragment_begin:A2,clearcoat_normal_fragment_maps:w2,clearcoat_pars_fragment:R2,iridescence_pars_fragment:C2,opaque_fragment:D2,packing:U2,premultiplied_alpha_fragment:N2,project_vertex:L2,dithering_fragment:I2,dithering_pars_fragment:O2,roughnessmap_fragment:P2,roughnessmap_pars_fragment:z2,shadowmap_pars_fragment:B2,shadowmap_pars_vertex:F2,shadowmap_vertex:H2,shadowmask_pars_fragment:V2,skinbase_vertex:G2,skinning_pars_vertex:k2,skinning_vertex:X2,skinnormal_vertex:q2,specularmap_fragment:W2,specularmap_pars_fragment:Y2,tonemapping_fragment:Z2,tonemapping_pars_fragment:J2,transmission_fragment:K2,transmission_pars_fragment:Q2,uv_pars_fragment:j2,uv_pars_vertex:$2,uv_vertex:t3,worldpos_vertex:e3,background_vert:n3,background_frag:i3,backgroundCube_vert:s3,backgroundCube_frag:a3,cube_vert:r3,cube_frag:o3,depth_vert:l3,depth_frag:c3,distanceRGBA_vert:u3,distanceRGBA_frag:h3,equirect_vert:f3,equirect_frag:d3,linedashed_vert:p3,linedashed_frag:m3,meshbasic_vert:g3,meshbasic_frag:v3,meshlambert_vert:_3,meshlambert_frag:y3,meshmatcap_vert:x3,meshmatcap_frag:S3,meshnormal_vert:M3,meshnormal_frag:b3,meshphong_vert:E3,meshphong_frag:T3,meshphysical_vert:A3,meshphysical_frag:w3,meshtoon_vert:R3,meshtoon_frag:C3,points_vert:D3,points_frag:U3,shadow_vert:N3,shadow_frag:L3,sprite_vert:I3,sprite_frag:O3},St={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},fs={basic:{uniforms:Tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Tn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Tn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Tn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Tn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Tn([St.points,St.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Tn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Tn([St.common,St.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Tn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Tn([St.sprite,St.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Tn([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Tn([St.lights,St.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};fs.physical={uniforms:Tn([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var qd={r:0,b:0,g:0},Er=new Bi,P3=new Ne;function z3(e,t,n,i,s,a,r){let o=new Kt(0),l=a===!0?0:1,c,u,d=null,h=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:t).get(y)),y}function x(_){let y=!1,A=g(_);A===null?f(o,l):A&&A.isColor&&(f(A,1),y=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===su)?(u===void 0&&(u=new Ve(new Zo(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:br(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Er.copy(y.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P3.makeRotationFromEuler(Er)),u.material.toneMapped=le.getTransfer(A.colorSpace)!==Se,(d!==A||h!==A.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ve(new yr(2,2),new Fi({name:"BackgroundMaterial",uniforms:br(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(A.colorSpace)!==Se,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(qd,dv(e)),i.buffers.color.setClear(qd.r,qd.g,qd.b,y,r)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:x,addToRenderList:m,dispose:v}}function B3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(S,D,H,W,k){let Y=!1,q=d(W,H,D);a!==q&&(a=q,c(a.object)),Y=p(S,W,H,k),Y&&g(S,W,H,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,y(S,D,H,W),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function u(S){return e.deleteVertexArray(S)}function d(S,D,H){let W=H.wireframe===!0,k=i[S.id];k===void 0&&(k={},i[S.id]=k);let Y=k[D.id];Y===void 0&&(Y={},k[D.id]=Y);let q=Y[W];return q===void 0&&(q=h(l()),Y[W]=q),q}function h(S){let D=[],H=[],W=[];for(let k=0;k<n;k++)D[k]=0,H[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:W,object:S,attributes:{},index:null}}function p(S,D,H,W){let k=a.attributes,Y=D.attributes,q=0,at=H.getAttributes();for(let V in at)if(at[V].location>=0){let Mt=k[V],At=Y[V];if(At===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(At=S.instanceColor)),Mt===void 0||Mt.attribute!==At||At&&Mt.data!==At.data)return!0;q++}return a.attributesNum!==q||a.index!==W}function g(S,D,H,W){let k={},Y=D.attributes,q=0,at=H.getAttributes();for(let V in at)if(at[V].location>=0){let Mt=Y[V];Mt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor));let At={};At.attribute=Mt,Mt&&Mt.data&&(At.data=Mt.data),k[V]=At,q++}a.attributes=k,a.attributesNum=q,a.index=W}function x(){let S=a.newAttributes;for(let D=0,H=S.length;D<H;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){let H=a.newAttributes,W=a.enabledAttributes,k=a.attributeDivisors;H[S]=1,W[S]===0&&(e.enableVertexAttribArray(S),W[S]=1),k[S]!==D&&(e.vertexAttribDivisor(S,D),k[S]=D)}function v(){let S=a.newAttributes,D=a.enabledAttributes;for(let H=0,W=D.length;H<W;H++)D[H]!==S[H]&&(e.disableVertexAttribArray(H),D[H]=0)}function _(S,D,H,W,k,Y,q){q===!0?e.vertexAttribIPointer(S,D,H,k,Y):e.vertexAttribPointer(S,D,H,W,k,Y)}function y(S,D,H,W){x();let k=W.attributes,Y=H.getAttributes(),q=D.defaultAttributeValues;for(let at in Y){let V=Y[at];if(V.location>=0){let gt=k[at];if(gt===void 0&&(at==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),at==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){let Mt=gt.normalized,At=gt.itemSize,Bt=t.get(gt);if(Bt===void 0)continue;let Zt=Bt.buffer,re=Bt.type,ne=Bt.bytesPerElement,K=re===e.INT||re===e.UNSIGNED_INT||gt.gpuType===hd;if(gt.isInterleavedBufferAttribute){let et=gt.data,bt=et.stride,Lt=gt.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<V.locationSize;wt++)f(V.location+wt,et.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<V.locationSize;wt++)m(V.location+wt);e.bindBuffer(e.ARRAY_BUFFER,Zt);for(let wt=0;wt<V.locationSize;wt++)_(V.location+wt,At/V.locationSize,re,Mt,bt*ne,(Lt+At/V.locationSize*wt)*ne,K)}else{if(gt.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)f(V.location+et,gt.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let et=0;et<V.locationSize;et++)m(V.location+et);e.bindBuffer(e.ARRAY_BUFFER,Zt);for(let et=0;et<V.locationSize;et++)_(V.location+et,At/V.locationSize,re,Mt,At*ne,At/V.locationSize*et*ne,K)}}else if(q!==void 0){let Mt=q[at];if(Mt!==void 0)switch(Mt.length){case 2:e.vertexAttrib2fv(V.location,Mt);break;case 3:e.vertexAttrib3fv(V.location,Mt);break;case 4:e.vertexAttrib4fv(V.location,Mt);break;default:e.vertexAttrib1fv(V.location,Mt)}}}}v()}function A(){U();for(let S in i){let D=i[S];for(let H in D){let W=D[H];for(let k in W)u(W[k].object),delete W[k];delete D[H]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;let D=i[S.id];for(let H in D){let W=D[H];for(let k in W)u(W[k].object),delete W[k];delete D[H]}delete i[S.id]}function w(S){for(let D in i){let H=i[D];if(H[S.id]===void 0)continue;let W=H[S.id];for(let k in W)u(W[k].object),delete W[k];delete H[S.id]}}function U(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function F3(e,t,n){let i;function s(c){i=c}function a(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,d){d!==0&&(e.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function H3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==wi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let U=w===rl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Hi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hs&&!U)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:R}}function V3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new is,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{let v=a?0:i,_=v*4,y=f.clippingState||null;l.value=y,y=u(g,h,_,p);for(let A=0;A!==_;++A)y[A]=n[A];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==x;++_,y+=4)r.copy(d[_]).applyMatrix4(v,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function G3(e){let t=new WeakMap;function n(r,o){return o===ld?r.mapping=Sr:o===cd&&(r.mapping=Mr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===ld||o===cd)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Of(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var hl=4,Rb=[.125,.215,.35,.446,.526,.582],wr=20,_v=new nu,Cb=new Kt,yv=null,xv=0,Sv=0,Mv=!1,Ar=(1+Math.sqrt(5))/2,ul=1/Ar,Db=[new N(-Ar,ul,0),new N(Ar,ul,0),new N(-ul,0,Ar),new N(ul,0,Ar),new N(0,Ar,-ul),new N(0,Ar,ul),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],k3=new N,dl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=k3}=a;yv=this._renderer.getRenderTarget(),xv=this._renderer.getActiveCubeFace(),Sv=this._renderer.getActiveMipmapLevel(),Mv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yv,xv,Sv),this._renderer.xr.enabled=Mv,t.scissorTest=!1,Wd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Sr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yv=this._renderer.getRenderTarget(),xv=this._renderer.getActiveCubeFace(),Sv=this._renderer.getActiveMipmapLevel(),Mv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:rl,format:wi,colorSpace:pr,depthBuffer:!1},s=Ub(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ub(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X3(a)),this._blurMaterial=q3(a,t,n)}return s}_compileMaterial(t){let n=new Ve(this._lodPlanes[0],t);this._renderer.compile(n,_v)}_sceneToCubeUV(t,n,i,s,a){let l=new En(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Cb),d.toneMapping=Bs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new mr({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),m=new Ve(new Zo,x),f=!1,v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,f=!0):(x.color.copy(Cb),f=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[_],a.y,a.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[_],a.z)):(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[_]));let A=this._cubeSize;Wd(s,y*A,_>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Sr||t.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Ve(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Wd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,_v)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Db[(s-a-1)%Db.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ve(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*wr-1),x=a/g,m=isFinite(a)?1+Math.floor(u*x):wr;m>wr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);let f=[],v=0;for(let w=0;w<wr;++w){let U=w/x,E=Math.exp(-U*U/2);f.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;let y=this._sizeLods[s],A=3*y*(s>_-hl?s-_+hl:0),R=4*(this._cubeSize-y);Wd(n,A,R,3*y,2*y),l.setRenderTarget(n),l.render(d,_v)}};function X3(e){let t=[],n=[],i=[],s=e,a=e-hl+1+Rb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-hl?l=Rb[r-e+hl-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,U=R>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];v.set(E,x*g*R),_.set(h,m*g*R);let S=[R,R,R,R,R,R];y.set(S,f*g*R)}let A=new ci;A.setAttribute("position",new vn(v,x)),A.setAttribute("uv",new vn(_,m)),A.setAttribute("faceIndex",new vn(y,f)),t.push(A),s>hl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ub(e,t,n){let i=new ls(e,t,n);return i.texture.mapping=su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function q3(e,t,n){let i=new Float32Array(wr),s=new N(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Nb(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Lb(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Nv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ld||l===cd,u=l===Sr||l===Mr;if(c||u){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new dl(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new dl(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function Y3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Xo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Z3(e,t,n,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){let A=v[_+0],R=v[_+1],w=v[_+2];h.push(A,R,R,w,w,A)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let A=_+0,R=_+1,w=_+2;h.push(A,R,R,w,w,A)}}else return;let m=new(fv(h)?Vc:Hc)(h,1);m.version=x;let f=a.get(d);f&&t.remove(f),a.set(d,m)}function u(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function J3(e,t,n){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,a,h*r),n.update(p,i,1)}function c(h,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,h*r,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function d(h,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/r,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,x,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*x[v];n.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function K3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Q3(e,t,n){let i=new WeakMap,s=new ze;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*A*4*d),w=new Bc(R,y,A,d);w.type=hs,w.needsUpdate=!0;let U=_*4;for(let S=0;S<d;S++){let D=m[S],H=f[S],W=v[S],k=y*A*4*S;for(let Y=0;Y<D.count;Y++){let q=Y*U;p===!0&&(s.fromBufferAttribute(D,Y),R[k+q+0]=s.x,R[k+q+1]=s.y,R[k+q+2]=s.z,R[k+q+3]=0),g===!0&&(s.fromBufferAttribute(H,Y),R[k+q+4]=s.x,R[k+q+5]=s.y,R[k+q+6]=s.z,R[k+q+7]=0),x===!0&&(s.fromBufferAttribute(W,Y),R[k+q+8]=s.x,R[k+q+9]=s.y,R[k+q+10]=s.z,R[k+q+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new vt(y,A)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function j3(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var jb=new Nn,Ib=new qc(1,1),$b=new Bc,tE=new Lf,eE=new kc,Ob=[],Pb=[],zb=new Float32Array(16),Bb=new Float32Array(9),Fb=new Float32Array(4);function pl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Ob[s];if(a===void 0&&(a=new Float32Array(s),Ob[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Qe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Jd(e,t){let n=Pb[t];n===void 0&&(n=new Int32Array(t),Pb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function $3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function tD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;e.uniform2fv(this.addr,t),je(n,t)}}function eD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qe(n,t))return;e.uniform3fv(this.addr,t),je(n,t)}}function nD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;e.uniform4fv(this.addr,t),je(n,t)}}function iD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Qe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),je(n,t)}else{if(Qe(n,i))return;Fb.set(i),e.uniformMatrix2fv(this.addr,!1,Fb),je(n,i)}}function sD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Qe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),je(n,t)}else{if(Qe(n,i))return;Bb.set(i),e.uniformMatrix3fv(this.addr,!1,Bb),je(n,i)}}function aD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Qe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),je(n,t)}else{if(Qe(n,i))return;zb.set(i),e.uniformMatrix4fv(this.addr,!1,zb),je(n,i)}}function rD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function oD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;e.uniform2iv(this.addr,t),je(n,t)}}function lD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;e.uniform3iv(this.addr,t),je(n,t)}}function cD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;e.uniform4iv(this.addr,t),je(n,t)}}function uD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function hD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qe(n,t))return;e.uniform2uiv(this.addr,t),je(n,t)}}function fD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qe(n,t))return;e.uniform3uiv(this.addr,t),je(n,t)}}function dD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qe(n,t))return;e.uniform4uiv(this.addr,t),je(n,t)}}function pD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Ib.compareFunction=uv,a=Ib):a=jb,n.setTexture2D(t||a,s)}function mD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||tE,s)}function gD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||eE,s)}function vD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||$b,s)}function _D(e){switch(e){case 5126:return $3;case 35664:return tD;case 35665:return eD;case 35666:return nD;case 35674:return iD;case 35675:return sD;case 35676:return aD;case 5124:case 35670:return rD;case 35667:case 35671:return oD;case 35668:case 35672:return lD;case 35669:case 35673:return cD;case 5125:return uD;case 36294:return hD;case 36295:return fD;case 36296:return dD;case 35678:case 36198:case 36298:case 36306:case 35682:return pD;case 35679:case 36299:case 36307:return mD;case 35680:case 36300:case 36308:case 36293:return gD;case 36289:case 36303:case 36311:case 36292:return vD}}function yD(e,t){e.uniform1fv(this.addr,t)}function xD(e,t){let n=pl(t,this.size,2);e.uniform2fv(this.addr,n)}function SD(e,t){let n=pl(t,this.size,3);e.uniform3fv(this.addr,n)}function MD(e,t){let n=pl(t,this.size,4);e.uniform4fv(this.addr,n)}function bD(e,t){let n=pl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ED(e,t){let n=pl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function TD(e,t){let n=pl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function AD(e,t){e.uniform1iv(this.addr,t)}function wD(e,t){e.uniform2iv(this.addr,t)}function RD(e,t){e.uniform3iv(this.addr,t)}function CD(e,t){e.uniform4iv(this.addr,t)}function DD(e,t){e.uniform1uiv(this.addr,t)}function UD(e,t){e.uniform2uiv(this.addr,t)}function ND(e,t){e.uniform3uiv(this.addr,t)}function LD(e,t){e.uniform4uiv(this.addr,t)}function ID(e,t,n){let i=this.cache,s=t.length,a=Jd(n,s);Qe(i,a)||(e.uniform1iv(this.addr,a),je(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||jb,a[r])}function OD(e,t,n){let i=this.cache,s=t.length,a=Jd(n,s);Qe(i,a)||(e.uniform1iv(this.addr,a),je(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||tE,a[r])}function PD(e,t,n){let i=this.cache,s=t.length,a=Jd(n,s);Qe(i,a)||(e.uniform1iv(this.addr,a),je(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||eE,a[r])}function zD(e,t,n){let i=this.cache,s=t.length,a=Jd(n,s);Qe(i,a)||(e.uniform1iv(this.addr,a),je(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||$b,a[r])}function BD(e){switch(e){case 5126:return yD;case 35664:return xD;case 35665:return SD;case 35666:return MD;case 35674:return bD;case 35675:return ED;case 35676:return TD;case 5124:case 35670:return AD;case 35667:case 35671:return wD;case 35668:case 35672:return RD;case 35669:case 35673:return CD;case 5125:return DD;case 36294:return UD;case 36295:return ND;case 36296:return LD;case 35678:case 36198:case 36298:case 36306:case 35682:return ID;case 35679:case 36299:case 36307:return OD;case 35680:case 36300:case 36308:case 36293:return PD;case 36289:case 36303:case 36311:case 36292:return zD}}var Ev=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_D(n.type)}},Tv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BD(n.type)}},Av=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},bv=/(\w+)(\])?(\[|\.)?/g;function Hb(e,t){e.seq.push(t),e.map[t.id]=t}function FD(e,t,n){let i=e.name,s=i.length;for(bv.lastIndex=0;;){let a=bv.exec(i),r=bv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Hb(n,c===void 0?new Ev(o,e,t):new Tv(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Av(o),Hb(n,d)),n=d}}}var fl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);FD(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Vb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var HD=37297,VD=0;function GD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Gb=new Yt;function kD(e){le._getMatrix(Gb,le.workingColorSpace,e);let t=`mat3( ${Gb.elements.map(n=>n.toFixed(4))} )`;switch(le.getTransfer(e)){case Oc:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function kb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+GD(e.getShaderSource(t),o)}else return a}function XD(e,t){let n=kD(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function qD(e,t){let n;switch(t){case nb:n="Linear";break;case ib:n="Reinhard";break;case sb:n="Cineon";break;case ab:n="ACESFilmic";break;case ob:n="AgX";break;case od:n="Neutral";break;case rb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Yd=new N;function WD(){le.getLuminanceCoefficients(Yd);let e=Yd.x.toFixed(4),t=Yd.y.toFixed(4),n=Yd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uu).join(`
`)}function ZD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function JD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function uu(e){return e!==""}function Xb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var KD=/^[ \t]*#include +<([\w\d./]+)>/gm;function wv(e){return e.replace(KD,jD)}var QD=new Map;function jD(e,t){let n=Qt[t];if(n===void 0){let i=QD.get(t);if(i!==void 0)n=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wv(n)}var $D=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wb(e){return e.replace($D,tU)}function tU(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Yb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function eU(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===J0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===O1?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===cs&&(t="SHADOWMAP_TYPE_VSM"),t}function nU(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Sr:case Mr:t="ENVMAP_TYPE_CUBE";break;case su:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iU(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Mr&&(t="ENVMAP_MODE_REFRACTION"),t}function sU(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case $0:t="ENVMAP_BLENDING_MULTIPLY";break;case tb:t="ENVMAP_BLENDING_MIX";break;case eb:t="ENVMAP_BLENDING_ADD";break}return t}function aU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function rU(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=eU(n),c=nU(n),u=iU(n),d=sU(n),h=aU(n),p=YD(n),g=ZD(a),x=s.createProgram(),m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(uu).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(uu).join(`
`),f.length>0&&(f+=`
`)):(m=[Yb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uu).join(`
`),f=[Yb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bs?"#define TONE_MAPPING":"",n.toneMapping!==Bs?Qt.tonemapping_pars_fragment:"",n.toneMapping!==Bs?qD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,XD("linearToOutputTexel",n.outputColorSpace),WD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(uu).join(`
`)),r=wv(r),r=Xb(r,n),r=qb(r,n),o=wv(o),o=Xb(o,n),o=qb(o,n),r=Wb(r),o=Wb(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===hv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=v+m+r,y=v+f+o,A=Vb(s,s.VERTEX_SHADER,_),R=Vb(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,R),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(D){if(e.debug.checkShaderErrors){let H=s.getProgramInfoLog(x)||"",W=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(R)||"",Y=H.trim(),q=W.trim(),at=k.trim(),V=!0,gt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,A,R);else{let Mt=kb(s,A,"vertex"),At=kb(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+Mt+`
`+At)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||at==="")&&(gt=!1);gt&&(D.diagnostics={runnable:V,programLog:Y,vertexShader:{log:q,prefix:m},fragmentShader:{log:at,prefix:f}})}s.deleteShader(A),s.deleteShader(R),U=new fl(s,x),E=JD(s,x)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,HD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VD++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}var oU=0,Rv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Cv(t),n.set(t,i)),i}},Cv=class{constructor(t){this.id=oU++,this.code=t,this.usedTimes=0}};function lU(e,t,n,i,s,a,r){let o=new Yo,l=new Rv,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,H,W){let k=H.fog,Y=W.geometry,q=E.isMeshStandardMaterial?H.environment:null,at=(E.isMeshStandardMaterial?n:t).get(E.envMap||q),V=at&&at.mapping===su?at.image.height:null,gt=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let Mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,At=Mt!==void 0?Mt.length:0,Bt=0;Y.morphAttributes.position!==void 0&&(Bt=1),Y.morphAttributes.normal!==void 0&&(Bt=2),Y.morphAttributes.color!==void 0&&(Bt=3);let Zt,re,ne,K;if(gt){let oe=fs[gt];Zt=oe.vertexShader,re=oe.fragmentShader}else Zt=E.vertexShader,re=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);let et=e.getRenderTarget(),bt=e.state.buffers.depth.getReversed(),Lt=W.isInstancedMesh===!0,wt=W.isBatchedMesh===!0,qt=!!E.map,ge=!!E.matcap,C=!!at,tt=!!E.aoMap,Q=!!E.lightMap,Z=!!E.bumpMap,j=!!E.normalMap,dt=!!E.displacementMap,st=!!E.emissiveMap,ht=!!E.metalnessMap,Pt=!!E.roughnessMap,Ft=E.anisotropy>0,T=E.clearcoat>0,M=E.dispersion>0,P=E.iridescence>0,X=E.sheen>0,nt=E.transmission>0,z=Ft&&!!E.anisotropyMap,Rt=T&&!!E.clearcoatMap,ct=T&&!!E.clearcoatNormalMap,Ct=T&&!!E.clearcoatRoughnessMap,Dt=P&&!!E.iridescenceMap,it=P&&!!E.iridescenceThicknessMap,ft=X&&!!E.sheenColorMap,It=X&&!!E.sheenRoughnessMap,Ut=!!E.specularMap,yt=!!E.specularColorMap,Vt=!!E.specularIntensityMap,L=nt&&!!E.transmissionMap,lt=nt&&!!E.thicknessMap,mt=!!E.gradientMap,Tt=!!E.alphaMap,rt=E.alphaTest>0,$=!!E.alphaHash,Et=!!E.extensions,Gt=Bs;E.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Gt=e.toneMapping);let ve={shaderID:gt,shaderType:E.type,shaderName:E.name,vertexShader:Zt,fragmentShader:re,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:wt,batchingColor:wt&&W._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&W.instanceColor!==null,instancingMorph:Lt&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pr,alphaToCoverage:!!E.alphaToCoverage,map:qt,matcap:ge,envMap:C,envMapMode:C&&at.mapping,envMapCubeUVHeight:V,aoMap:tt,lightMap:Q,bumpMap:Z,normalMap:j,displacementMap:h&&dt,emissiveMap:st,normalMapObjectSpace:j&&E.normalMapType===hb,normalMapTangentSpace:j&&E.normalMapType===cv,metalnessMap:ht,roughnessMap:Pt,anisotropy:Ft,anisotropyMap:z,clearcoat:T,clearcoatMap:Rt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ct,dispersion:M,iridescence:P,iridescenceMap:Dt,iridescenceThicknessMap:it,sheen:X,sheenColorMap:ft,sheenRoughnessMap:It,specularMap:Ut,specularColorMap:yt,specularIntensityMap:Vt,transmission:nt,transmissionMap:L,thicknessMap:lt,gradientMap:mt,opaque:E.transparent===!1&&E.blending===fr&&E.alphaToCoverage===!1,alphaMap:Tt,alphaTest:rt,alphaHash:$,combine:E.combine,mapUv:qt&&x(E.map.channel),aoMapUv:tt&&x(E.aoMap.channel),lightMapUv:Q&&x(E.lightMap.channel),bumpMapUv:Z&&x(E.bumpMap.channel),normalMapUv:j&&x(E.normalMap.channel),displacementMapUv:dt&&x(E.displacementMap.channel),emissiveMapUv:st&&x(E.emissiveMap.channel),metalnessMapUv:ht&&x(E.metalnessMap.channel),roughnessMapUv:Pt&&x(E.roughnessMap.channel),anisotropyMapUv:z&&x(E.anisotropyMap.channel),clearcoatMapUv:Rt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ct&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(E.sheenRoughnessMap.channel),specularMapUv:Ut&&x(E.specularMap.channel),specularColorMapUv:yt&&x(E.specularColorMap.channel),specularIntensityMapUv:Vt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:lt&&x(E.thicknessMap.channel),alphaMapUv:Tt&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(j||Ft),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Y.attributes.uv&&(qt||Tt),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:W.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Gt,decodeVideoTexture:qt&&E.map.isVideoTexture===!0&&le.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:st&&E.emissiveMap.isVideoTexture===!0&&le.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fi,flipSided:E.side===In,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function f(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(v(S,E),_(S,E),S.push(e.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let S=g[E.type],D;if(S){let H=fs[S];D=Mb.clone(H.uniforms)}else D=E.uniforms;return D}function A(E,S){let D;for(let H=0,W=u.length;H<W;H++){let k=u[H];if(k.cacheKey===S){D=k,++D.usedTimes;break}}return D===void 0&&(D=new rU(e,S,E,a),u.push(D)),D}function R(E){if(--E.usedTimes===0){let S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:U}}function cU(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function uU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Zb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Jb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,h,p,g,x,m){let f=e[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},e[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function o(d,h,p,g,x,m){let f=r(d,h,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):n.push(f)}function l(d,h,p,g,x,m){let f=r(d,h,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||uU),i.length>1&&i.sort(h||Zb),s.length>1&&s.sort(h||Zb)}function u(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function hU(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Jb,e.set(i,[r])):s>=a.length?(r=new Jb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function fU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Kt};break;case"SpotLight":n={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":n={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function dU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var pU=0;function mU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function gU(e){let t=new fU,n=dU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,a=new Ne,r=new Ne;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,v=0,_=0,y=0,A=0,R=0,w=0;c.sort(mU);for(let E=0,S=c.length;E<S;E++){let D=c[E],H=D.color,W=D.intensity,k=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=H.r*W,d+=H.g*W,h+=H.b*W;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],W);w++}else if(D.isDirectionalLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let at=D.shadow,V=n.get(D);V.shadowIntensity=at.intensity,V.shadowBias=at.bias,V.shadowNormalBias=at.normalBias,V.shadowRadius=at.radius,V.shadowMapSize=at.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=q,p++}else if(D.isSpotLight){let q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(H).multiplyScalar(W),q.distance=k,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[x]=q;let at=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,at.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[x]=at.matrix,D.castShadow){let V=n.get(D);V.shadowIntensity=at.intensity,V.shadowBias=at.bias,V.shadowNormalBias=at.normalBias,V.shadowRadius=at.radius,V.shadowMapSize=at.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=Y,y++}x++}else if(D.isRectAreaLight){let q=t.get(D);q.color.copy(H).multiplyScalar(W),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=q,m++}else if(D.isPointLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let at=D.shadow,V=n.get(D);V.shadowIntensity=at.intensity,V.shadowBias=at.bias,V.shadowNormalBias=at.normalBias,V.shadowRadius=at.radius,V.shadowMapSize=at.mapSize,V.shadowCameraNear=at.camera.near,V.shadowCameraFar=at.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=q,g++}else if(D.isHemisphereLight){let q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(W),q.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[f]=q,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==v||U.numPointShadows!==_||U.numSpotShadows!==y||U.numSpotMaps!==A||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=v,U.numPointShadows=_,U.numSpotShadows=y,U.numSpotMaps=A,U.numLightProbes=w,i.version=pU++)}function l(c,u){let d=0,h=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let _=c[f];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(_.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Kb(e){let t=new gU(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function vU(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Kb(e),t.set(s,[o])):a>=r.length?(o=new Kb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var _U=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xU(e,t,n){let i=new Qo,s=new vt,a=new vt,r=new ze,o=new Vf({depthPacking:ub}),l=new Gf,c={},u=n.maxTextureSize,d={[Os]:In,[In]:Os,[fi]:fi},h=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:_U,fragmentShader:yU}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new ci;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ve(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J0;let f=this.type;this.render=function(R,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=e.getRenderTarget(),S=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),H=e.state;H.setBlending(zs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let W=f!==cs&&this.type===cs,k=f===cs&&this.type!==cs;for(let Y=0,q=R.length;Y<q;Y++){let at=R[Y],V=at.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let gt=V.getFrameExtents();if(s.multiply(gt),a.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/gt.x),s.x=a.x*gt.x,V.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/gt.y),s.y=a.y*gt.y,V.mapSize.y=a.y)),V.map===null||W===!0||k===!0){let At=this.type!==cs?{minFilter:Wn,magFilter:Wn}:{};V.map!==null&&V.map.dispose(),V.map=new ls(s.x,s.y,At),V.map.texture.name=at.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();let Mt=V.getViewportCount();for(let At=0;At<Mt;At++){let Bt=V.getViewport(At);r.set(a.x*Bt.x,a.y*Bt.y,a.x*Bt.z,a.y*Bt.w),H.viewport(r),V.updateMatrices(at,At),i=V.getFrustum(),y(w,U,V.camera,at,this.type)}V.isPointLightShadow!==!0&&this.type===cs&&v(V,U),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(E,S,D)};function v(R,w){let U=t.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ls(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,U,h,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,U,p,x,null)}function _(R,w,U,E){let S=null,D=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=U.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=S.uuid,W=w.uuid,k=c[H];k===void 0&&(k={},c[H]=k);let Y=k[W];Y===void 0&&(Y=S.clone(),k[W]=Y,w.addEventListener("dispose",A)),S=Y}if(S.visible=w.visible,S.wireframe=w.wireframe,E===cs?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=e.properties.get(S);H.light=U}return S}function y(R,w,U,E,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===cs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let W=t.update(R),k=R.material;if(Array.isArray(k)){let Y=W.groups;for(let q=0,at=Y.length;q<at;q++){let V=Y[q],gt=k[V.materialIndex];if(gt&&gt.visible){let Mt=_(R,gt,E,S);R.onBeforeShadow(e,R,w,U,W,Mt,V),e.renderBufferDirect(U,null,W,Mt,R,V),R.onAfterShadow(e,R,w,U,W,Mt,V)}}}else if(k.visible){let Y=_(R,k,E,S);R.onBeforeShadow(e,R,w,U,W,Y,null),e.renderBufferDirect(U,null,W,Y,R,null),R.onAfterShadow(e,R,w,U,W,Y,null)}}let H=R.children;for(let W=0,k=H.length;W<k;W++)y(H[W],w,U,E,S)}function A(R){R.target.removeEventListener("dispose",A);for(let U in c){let E=c[U],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var SU={[td]:ed,[nd]:ad,[id]:rd,[dr]:sd,[ed]:td,[ad]:nd,[rd]:id,[sd]:dr};function MU(e,t){function n(){let L=!1,lt=new ze,mt=null,Tt=new ze(0,0,0,0);return{setMask:function(rt){mt!==rt&&!L&&(e.colorMask(rt,rt,rt,rt),mt=rt)},setLocked:function(rt){L=rt},setClear:function(rt,$,Et,Gt,ve){ve===!0&&(rt*=Gt,$*=Gt,Et*=Gt),lt.set(rt,$,Et,Gt),Tt.equals(lt)===!1&&(e.clearColor(rt,$,Et,Gt),Tt.copy(lt))},reset:function(){L=!1,mt=null,Tt.set(-1,0,0,0)}}}function i(){let L=!1,lt=!1,mt=null,Tt=null,rt=null;return{setReversed:function($){if(lt!==$){let Et=t.get("EXT_clip_control");$?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),lt=$;let Gt=rt;rt=null,this.setClear(Gt)}},getReversed:function(){return lt},setTest:function($){$?et(e.DEPTH_TEST):bt(e.DEPTH_TEST)},setMask:function($){mt!==$&&!L&&(e.depthMask($),mt=$)},setFunc:function($){if(lt&&($=SU[$]),Tt!==$){switch($){case td:e.depthFunc(e.NEVER);break;case ed:e.depthFunc(e.ALWAYS);break;case nd:e.depthFunc(e.LESS);break;case dr:e.depthFunc(e.LEQUAL);break;case id:e.depthFunc(e.EQUAL);break;case sd:e.depthFunc(e.GEQUAL);break;case ad:e.depthFunc(e.GREATER);break;case rd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Tt=$}},setLocked:function($){L=$},setClear:function($){rt!==$&&(lt&&($=1-$),e.clearDepth($),rt=$)},reset:function(){L=!1,mt=null,Tt=null,rt=null,lt=!1}}}function s(){let L=!1,lt=null,mt=null,Tt=null,rt=null,$=null,Et=null,Gt=null,ve=null;return{setTest:function(oe){L||(oe?et(e.STENCIL_TEST):bt(e.STENCIL_TEST))},setMask:function(oe){lt!==oe&&!L&&(e.stencilMask(oe),lt=oe)},setFunc:function(oe,di,pi){(mt!==oe||Tt!==di||rt!==pi)&&(e.stencilFunc(oe,di,pi),mt=oe,Tt=di,rt=pi)},setOp:function(oe,di,pi){($!==oe||Et!==di||Gt!==pi)&&(e.stencilOp(oe,di,pi),$=oe,Et=di,Gt=pi)},setLocked:function(oe){L=oe},setClear:function(oe){ve!==oe&&(e.clearStencil(oe),ve=oe)},reset:function(){L=!1,lt=null,mt=null,Tt=null,rt=null,$=null,Et=null,Gt=null,ve=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,_=null,y=null,A=null,R=null,w=new Kt(0,0,0),U=0,E=!1,S=null,D=null,H=null,W=null,k=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,at=0,V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=at>=1):V.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=at>=2);let gt=null,Mt={},At=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),Zt=new ze().fromArray(At),re=new ze().fromArray(Bt);function ne(L,lt,mt,Tt){let rt=new Uint8Array(4),$=e.createTexture();e.bindTexture(L,$),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Et=0;Et<mt;Et++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,e.RGBA,1,1,Tt,0,e.RGBA,e.UNSIGNED_BYTE,rt):e.texImage2D(lt+Et,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,rt);return $}let K={};K[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),K[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),K[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(dr),Z(!1),j(Z0),et(e.CULL_FACE),tt(zs);function et(L){u[L]!==!0&&(e.enable(L),u[L]=!0)}function bt(L){u[L]!==!1&&(e.disable(L),u[L]=!1)}function Lt(L,lt){return d[L]!==lt?(e.bindFramebuffer(L,lt),d[L]=lt,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=lt),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=lt),!0):!1}function wt(L,lt){let mt=p,Tt=!1;if(L){mt=h.get(lt),mt===void 0&&(mt=[],h.set(lt,mt));let rt=L.textures;if(mt.length!==rt.length||mt[0]!==e.COLOR_ATTACHMENT0){for(let $=0,Et=rt.length;$<Et;$++)mt[$]=e.COLOR_ATTACHMENT0+$;mt.length=rt.length,Tt=!0}}else mt[0]!==e.BACK&&(mt[0]=e.BACK,Tt=!0);Tt&&e.drawBuffers(mt)}function qt(L){return g!==L?(e.useProgram(L),g=L,!0):!1}let ge={[Aa]:e.FUNC_ADD,[z1]:e.FUNC_SUBTRACT,[B1]:e.FUNC_REVERSE_SUBTRACT};ge[F1]=e.MIN,ge[H1]=e.MAX;let C={[V1]:e.ZERO,[G1]:e.ONE,[k1]:e.SRC_COLOR,[Af]:e.SRC_ALPHA,[J1]:e.SRC_ALPHA_SATURATE,[Y1]:e.DST_COLOR,[q1]:e.DST_ALPHA,[X1]:e.ONE_MINUS_SRC_COLOR,[wf]:e.ONE_MINUS_SRC_ALPHA,[Z1]:e.ONE_MINUS_DST_COLOR,[W1]:e.ONE_MINUS_DST_ALPHA,[K1]:e.CONSTANT_COLOR,[Q1]:e.ONE_MINUS_CONSTANT_COLOR,[j1]:e.CONSTANT_ALPHA,[$1]:e.ONE_MINUS_CONSTANT_ALPHA};function tt(L,lt,mt,Tt,rt,$,Et,Gt,ve,oe){if(L===zs){x===!0&&(bt(e.BLEND),x=!1);return}if(x===!1&&(et(e.BLEND),x=!0),L!==P1){if(L!==m||oe!==E){if((f!==Aa||y!==Aa)&&(e.blendEquation(e.FUNC_ADD),f=Aa,y=Aa),oe)switch(L){case fr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case K0:e.blendFunc(e.ONE,e.ONE);break;case Q0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case j0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case K0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Q0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,A=null,R=null,w.set(0,0,0),U=0,m=L,E=oe}return}rt=rt||lt,$=$||mt,Et=Et||Tt,(lt!==f||rt!==y)&&(e.blendEquationSeparate(ge[lt],ge[rt]),f=lt,y=rt),(mt!==v||Tt!==_||$!==A||Et!==R)&&(e.blendFuncSeparate(C[mt],C[Tt],C[$],C[Et]),v=mt,_=Tt,A=$,R=Et),(Gt.equals(w)===!1||ve!==U)&&(e.blendColor(Gt.r,Gt.g,Gt.b,ve),w.copy(Gt),U=ve),m=L,E=!1}function Q(L,lt){L.side===fi?bt(e.CULL_FACE):et(e.CULL_FACE);let mt=L.side===In;lt&&(mt=!mt),Z(mt),L.blending===fr&&L.transparent===!1?tt(zs):tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let Tt=L.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),st(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):bt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Z(L){S!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),S=L)}function j(L){L!==L1?(et(e.CULL_FACE),L!==D&&(L===Z0?e.cullFace(e.BACK):L===I1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):bt(e.CULL_FACE),D=L}function dt(L){L!==H&&(q&&e.lineWidth(L),H=L)}function st(L,lt,mt){L?(et(e.POLYGON_OFFSET_FILL),(W!==lt||k!==mt)&&(e.polygonOffset(lt,mt),W=lt,k=mt)):bt(e.POLYGON_OFFSET_FILL)}function ht(L){L?et(e.SCISSOR_TEST):bt(e.SCISSOR_TEST)}function Pt(L){L===void 0&&(L=e.TEXTURE0+Y-1),gt!==L&&(e.activeTexture(L),gt=L)}function Ft(L,lt,mt){mt===void 0&&(gt===null?mt=e.TEXTURE0+Y-1:mt=gt);let Tt=Mt[mt];Tt===void 0&&(Tt={type:void 0,texture:void 0},Mt[mt]=Tt),(Tt.type!==L||Tt.texture!==lt)&&(gt!==mt&&(e.activeTexture(mt),gt=mt),e.bindTexture(L,lt||K[L]),Tt.type=L,Tt.texture=lt)}function T(){let L=Mt[gt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){Zt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Zt.copy(L))}function It(L){re.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function Ut(L,lt){let mt=c.get(lt);mt===void 0&&(mt=new WeakMap,c.set(lt,mt));let Tt=mt.get(L);Tt===void 0&&(Tt=e.getUniformBlockIndex(lt,L.name),mt.set(L,Tt))}function yt(L,lt){let Tt=c.get(lt).get(L);l.get(lt)!==Tt&&(e.uniformBlockBinding(lt,Tt,L.__bindingPointIndex),l.set(lt,Tt))}function Vt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},gt=null,Mt={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,_=null,y=null,A=null,R=null,w=new Kt(0,0,0),U=0,E=!1,S=null,D=null,H=null,W=null,k=null,Zt.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:bt,bindFramebuffer:Lt,drawBuffers:wt,useProgram:qt,setBlending:tt,setMaterial:Q,setFlipSided:Z,setCullFace:j,setLineWidth:dt,setPolygonOffset:st,setScissorTest:ht,activeTexture:Pt,bindTexture:Ft,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:P,texImage2D:Dt,texImage3D:it,updateUBOMapping:Ut,uniformBlockBinding:yt,texStorage2D:ct,texStorage3D:Ct,texSubImage2D:X,texSubImage3D:nt,compressedTexSubImage2D:z,compressedTexSubImage3D:Rt,scissor:ft,viewport:It,reset:Vt}}function bU(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):zc("canvas")}function x(T,M,P){let X=1,nt=Ft(T);if((nt.width>P||nt.height>P)&&(X=P/Math.max(nt.width,nt.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let z=Math.floor(X*nt.width),Rt=Math.floor(X*nt.height);d===void 0&&(d=g(z,Rt));let ct=M?g(z,Rt):d;return ct.width=z,ct.height=Rt,ct.getContext("2d").drawImage(T,0,0,z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+z+"x"+Rt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){e.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(T,M,P,X,nt=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let z=M;if(M===e.RED&&(P===e.FLOAT&&(z=e.R32F),P===e.HALF_FLOAT&&(z=e.R16F),P===e.UNSIGNED_BYTE&&(z=e.R8)),M===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(z=e.R8UI),P===e.UNSIGNED_SHORT&&(z=e.R16UI),P===e.UNSIGNED_INT&&(z=e.R32UI),P===e.BYTE&&(z=e.R8I),P===e.SHORT&&(z=e.R16I),P===e.INT&&(z=e.R32I)),M===e.RG&&(P===e.FLOAT&&(z=e.RG32F),P===e.HALF_FLOAT&&(z=e.RG16F),P===e.UNSIGNED_BYTE&&(z=e.RG8)),M===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(z=e.RG8UI),P===e.UNSIGNED_SHORT&&(z=e.RG16UI),P===e.UNSIGNED_INT&&(z=e.RG32UI),P===e.BYTE&&(z=e.RG8I),P===e.SHORT&&(z=e.RG16I),P===e.INT&&(z=e.RG32I)),M===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(z=e.RGB8UI),P===e.UNSIGNED_SHORT&&(z=e.RGB16UI),P===e.UNSIGNED_INT&&(z=e.RGB32UI),P===e.BYTE&&(z=e.RGB8I),P===e.SHORT&&(z=e.RGB16I),P===e.INT&&(z=e.RGB32I)),M===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(z=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(z=e.RGBA16UI),P===e.UNSIGNED_INT&&(z=e.RGBA32UI),P===e.BYTE&&(z=e.RGBA8I),P===e.SHORT&&(z=e.RGBA16I),P===e.INT&&(z=e.RGBA32I)),M===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(z=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(z=e.R11F_G11F_B10F)),M===e.RGBA){let Rt=nt?Oc:le.getTransfer(X);P===e.FLOAT&&(z=e.RGBA32F),P===e.HALF_FLOAT&&(z=e.RGBA16F),P===e.UNSIGNED_BYTE&&(z=Rt===Se?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(z=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(z=e.RGB5_A1)}return(z===e.R16F||z===e.R32F||z===e.RG16F||z===e.RG32F||z===e.RGBA16F||z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function y(T,M){let P;return T?M===null||M===La||M===ol?P=e.DEPTH24_STENCIL8:M===hs?P=e.DEPTH32F_STENCIL8:M===al&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===La||M===ol?P=e.DEPTH_COMPONENT24:M===hs?P=e.DEPTH_COMPONENT32F:M===al&&(P=e.DEPTH_COMPONENT16),P}function A(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Wn&&T.minFilter!==li?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){let M=T.target;M.removeEventListener("dispose",R),U(M),M.isVideoTexture&&u.delete(M)}function w(T){let M=T.target;M.removeEventListener("dispose",w),S(M)}function U(T){let M=i.get(T);if(M.__webglInit===void 0)return;let P=T.source,X=h.get(P);if(X){let nt=X[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(T),Object.keys(X).length===0&&h.delete(P)}i.remove(T)}function E(T){let M=i.get(T);e.deleteTexture(M.__webglTexture);let P=T.source,X=h.get(P);delete X[M.__cacheKey],r.memory.textures--}function S(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let nt=0;nt<M.__webglFramebuffer[X].length;nt++)e.deleteFramebuffer(M.__webglFramebuffer[X][nt]);else e.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)e.deleteFramebuffer(M.__webglFramebuffer[X]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let P=T.textures;for(let X=0,nt=P.length;X<nt;X++){let z=i.get(P[X]);z.__webglTexture&&(e.deleteTexture(z.__webglTexture),r.memory.textures--),i.remove(P[X])}i.remove(T)}let D=0;function H(){D=0}function W(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function k(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function Y(T,M){let P=i.get(T);if(T.isVideoTexture&&ht(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&P.__version!==T.version){let X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(P,T,M);return}}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+M)}function q(T,M){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){K(P,T,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+M)}function at(T,M){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){K(P,T,M);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+M)}function V(T,M){let P=i.get(T);if(T.version>0&&P.__version!==T.version){et(P,T,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+M)}let gt={[os]:e.REPEAT,[ss]:e.CLAMP_TO_EDGE,[Rf]:e.MIRRORED_REPEAT},Mt={[Wn]:e.NEAREST,[lb]:e.NEAREST_MIPMAP_NEAREST,[au]:e.NEAREST_MIPMAP_LINEAR,[li]:e.LINEAR,[ud]:e.LINEAR_MIPMAP_NEAREST,[us]:e.LINEAR_MIPMAP_LINEAR},At={[fb]:e.NEVER,[_b]:e.ALWAYS,[db]:e.LESS,[uv]:e.LEQUAL,[pb]:e.EQUAL,[vb]:e.GEQUAL,[mb]:e.GREATER,[gb]:e.NOTEQUAL};function Bt(T,M){if(M.type===hs&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===li||M.magFilter===ud||M.magFilter===au||M.magFilter===us||M.minFilter===li||M.minFilter===ud||M.minFilter===au||M.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,gt[M.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,gt[M.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,gt[M.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Mt[M.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Mt[M.minFilter]),M.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,At[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wn||M.minFilter!==au&&M.minFilter!==us||M.type===hs&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Zt(T,M){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));let X=M.source,nt=h.get(X);nt===void 0&&(nt={},h.set(X,nt));let z=k(M);if(z!==T.__cacheKey){nt[z]===void 0&&(nt[z]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),nt[z].usedTimes++;let Rt=nt[T.__cacheKey];Rt!==void 0&&(nt[T.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(M)),T.__cacheKey=z,T.__webglTexture=nt[z].texture}return P}function re(T,M,P){return Math.floor(Math.floor(T/P)/M)}function ne(T,M,P,X){let z=T.updateRanges;if(z.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,P,X,M.data);else{z.sort((it,ft)=>it.start-ft.start);let Rt=0;for(let it=1;it<z.length;it++){let ft=z[Rt],It=z[it],Ut=ft.start+ft.count,yt=re(It.start,M.width,4),Vt=re(ft.start,M.width,4);It.start<=Ut+1&&yt===Vt&&re(It.start+It.count-1,M.width,4)===yt?ft.count=Math.max(ft.count,It.start+It.count-ft.start):(++Rt,z[Rt]=It)}z.length=Rt+1;let ct=e.getParameter(e.UNPACK_ROW_LENGTH),Ct=e.getParameter(e.UNPACK_SKIP_PIXELS),Dt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let it=0,ft=z.length;it<ft;it++){let It=z[it],Ut=Math.floor(It.start/4),yt=Math.ceil(It.count/4),Vt=Ut%M.width,L=Math.floor(Ut/M.width),lt=yt,mt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Vt,L,lt,mt,P,X,M.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ct),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(e.UNPACK_SKIP_ROWS,Dt)}}function K(T,M,P){let X=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=e.TEXTURE_3D);let nt=Zt(T,M),z=M.source;n.bindTexture(X,T.__webglTexture,e.TEXTURE0+P);let Rt=i.get(z);if(z.version!==Rt.__version||nt===!0){n.activeTexture(e.TEXTURE0+P);let ct=le.getPrimaries(le.workingColorSpace),Ct=M.colorSpace===Fs?null:le.getPrimaries(M.colorSpace),Dt=M.colorSpace===Fs||ct===Ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let it=x(M.image,!1,s.maxTextureSize);it=Pt(M,it);let ft=a.convert(M.format,M.colorSpace),It=a.convert(M.type),Ut=_(M.internalFormat,ft,It,M.colorSpace,M.isVideoTexture);Bt(X,M);let yt,Vt=M.mipmaps,L=M.isVideoTexture!==!0,lt=Rt.__version===void 0||nt===!0,mt=z.dataReady,Tt=A(M,it);if(M.isDepthTexture)Ut=y(M.format===ll,M.type),lt&&(L?n.texStorage2D(e.TEXTURE_2D,1,Ut,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,Ut,it.width,it.height,0,ft,It,null));else if(M.isDataTexture)if(Vt.length>0){L&&lt&&n.texStorage2D(e.TEXTURE_2D,Tt,Ut,Vt[0].width,Vt[0].height);for(let rt=0,$=Vt.length;rt<$;rt++)yt=Vt[rt],L?mt&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,yt.width,yt.height,ft,It,yt.data):n.texImage2D(e.TEXTURE_2D,rt,Ut,yt.width,yt.height,0,ft,It,yt.data);M.generateMipmaps=!1}else L?(lt&&n.texStorage2D(e.TEXTURE_2D,Tt,Ut,it.width,it.height),mt&&ne(M,it,ft,It)):n.texImage2D(e.TEXTURE_2D,0,Ut,it.width,it.height,0,ft,It,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Tt,Ut,Vt[0].width,Vt[0].height,it.depth);for(let rt=0,$=Vt.length;rt<$;rt++)if(yt=Vt[rt],M.format!==wi)if(ft!==null)if(L){if(mt)if(M.layerUpdates.size>0){let Et=vv(yt.width,yt.height,M.format,M.type);for(let Gt of M.layerUpdates){let ve=yt.data.subarray(Gt*Et/yt.data.BYTES_PER_ELEMENT,(Gt+1)*Et/yt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,Gt,yt.width,yt.height,1,ft,ve)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,0,yt.width,yt.height,it.depth,ft,yt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,rt,Ut,yt.width,yt.height,it.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?mt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,0,yt.width,yt.height,it.depth,ft,It,yt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,rt,Ut,yt.width,yt.height,it.depth,0,ft,It,yt.data)}else{L&&lt&&n.texStorage2D(e.TEXTURE_2D,Tt,Ut,Vt[0].width,Vt[0].height);for(let rt=0,$=Vt.length;rt<$;rt++)yt=Vt[rt],M.format!==wi?ft!==null?L?mt&&n.compressedTexSubImage2D(e.TEXTURE_2D,rt,0,0,yt.width,yt.height,ft,yt.data):n.compressedTexImage2D(e.TEXTURE_2D,rt,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?mt&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,yt.width,yt.height,ft,It,yt.data):n.texImage2D(e.TEXTURE_2D,rt,Ut,yt.width,yt.height,0,ft,It,yt.data)}else if(M.isDataArrayTexture)if(L){if(lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Tt,Ut,it.width,it.height,it.depth),mt)if(M.layerUpdates.size>0){let rt=vv(it.width,it.height,M.format,M.type);for(let $ of M.layerUpdates){let Et=it.data.subarray($*rt/it.data.BYTES_PER_ELEMENT,($+1)*rt/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,it.width,it.height,1,ft,It,Et)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,It,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ut,it.width,it.height,it.depth,0,ft,It,it.data);else if(M.isData3DTexture)L?(lt&&n.texStorage3D(e.TEXTURE_3D,Tt,Ut,it.width,it.height,it.depth),mt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,It,it.data)):n.texImage3D(e.TEXTURE_3D,0,Ut,it.width,it.height,it.depth,0,ft,It,it.data);else if(M.isFramebufferTexture){if(lt)if(L)n.texStorage2D(e.TEXTURE_2D,Tt,Ut,it.width,it.height);else{let rt=it.width,$=it.height;for(let Et=0;Et<Tt;Et++)n.texImage2D(e.TEXTURE_2D,Et,Ut,rt,$,0,ft,It,null),rt>>=1,$>>=1}}else if(Vt.length>0){if(L&&lt){let rt=Ft(Vt[0]);n.texStorage2D(e.TEXTURE_2D,Tt,Ut,rt.width,rt.height)}for(let rt=0,$=Vt.length;rt<$;rt++)yt=Vt[rt],L?mt&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,ft,It,yt):n.texImage2D(e.TEXTURE_2D,rt,Ut,ft,It,yt);M.generateMipmaps=!1}else if(L){if(lt){let rt=Ft(it);n.texStorage2D(e.TEXTURE_2D,Tt,Ut,rt.width,rt.height)}mt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,It,it)}else n.texImage2D(e.TEXTURE_2D,0,Ut,ft,It,it);m(M)&&f(X),Rt.__version=z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function et(T,M,P){if(M.image.length!==6)return;let X=Zt(T,M),nt=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+P);let z=i.get(nt);if(nt.version!==z.__version||X===!0){n.activeTexture(e.TEXTURE0+P);let Rt=le.getPrimaries(le.workingColorSpace),ct=M.colorSpace===Fs?null:le.getPrimaries(M.colorSpace),Ct=M.colorSpace===Fs||Rt===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Dt=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Dt&&!it?ft[$]=x(M.image[$],!0,s.maxCubemapSize):ft[$]=it?M.image[$].image:M.image[$],ft[$]=Pt(M,ft[$]);let It=ft[0],Ut=a.convert(M.format,M.colorSpace),yt=a.convert(M.type),Vt=_(M.internalFormat,Ut,yt,M.colorSpace),L=M.isVideoTexture!==!0,lt=z.__version===void 0||X===!0,mt=nt.dataReady,Tt=A(M,It);Bt(e.TEXTURE_CUBE_MAP,M);let rt;if(Dt){L&&lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Tt,Vt,It.width,It.height);for(let $=0;$<6;$++){rt=ft[$].mipmaps;for(let Et=0;Et<rt.length;Et++){let Gt=rt[Et];M.format!==wi?Ut!==null?L?mt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et,0,0,Gt.width,Gt.height,Ut,Gt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et,Vt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et,0,0,Gt.width,Gt.height,Ut,yt,Gt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et,Vt,Gt.width,Gt.height,0,Ut,yt,Gt.data)}}}else{if(rt=M.mipmaps,L&&lt){rt.length>0&&Tt++;let $=Ft(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Tt,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(it){L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Ut,yt,ft[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,ft[$].width,ft[$].height,0,Ut,yt,ft[$].data);for(let Et=0;Et<rt.length;Et++){let ve=rt[Et].image[$].image;L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et+1,0,0,ve.width,ve.height,Ut,yt,ve.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et+1,Vt,ve.width,ve.height,0,Ut,yt,ve.data)}}else{L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ut,yt,ft[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Ut,yt,ft[$]);for(let Et=0;Et<rt.length;Et++){let Gt=rt[Et];L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et+1,0,0,Ut,yt,Gt.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et+1,Vt,Ut,yt,Gt.image[$])}}}m(M)&&f(e.TEXTURE_CUBE_MAP),z.__version=nt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function bt(T,M,P,X,nt,z){let Rt=a.convert(P.format,P.colorSpace),ct=a.convert(P.type),Ct=_(P.internalFormat,Rt,ct,P.colorSpace),Dt=i.get(M),it=i.get(P);if(it.__renderTarget=M,!Dt.__hasExternalTextures){let ft=Math.max(1,M.width>>z),It=Math.max(1,M.height>>z);nt===e.TEXTURE_3D||nt===e.TEXTURE_2D_ARRAY?n.texImage3D(nt,z,Ct,ft,It,M.depth,0,Rt,ct,null):n.texImage2D(nt,z,Ct,ft,It,0,Rt,ct,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,nt,it.__webglTexture,0,dt(M)):(nt===e.TEXTURE_2D||nt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,nt,it.__webglTexture,z),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Lt(T,M,P){if(e.bindRenderbuffer(e.RENDERBUFFER,T),M.depthBuffer){let X=M.depthTexture,nt=X&&X.isDepthTexture?X.type:null,z=y(M.stencilBuffer,nt),Rt=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=dt(M);st(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ct,z,M.width,M.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,ct,z,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,z,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Rt,e.RENDERBUFFER,T)}else{let X=M.textures;for(let nt=0;nt<X.length;nt++){let z=X[nt],Rt=a.convert(z.format,z.colorSpace),ct=a.convert(z.type),Ct=_(z.internalFormat,Rt,ct,z.colorSpace),Dt=dt(M);P&&st(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,Ct,M.width,M.height):st(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Dt,Ct,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,Ct,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function wt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=i.get(M.depthTexture);X.__renderTarget=M,(!X.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let nt=X.__webglTexture,z=dt(M);if(M.depthTexture.format===ko)st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0,z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,nt,0);else if(M.depthTexture.format===ll)st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0,z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function qt(T){let M=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let X=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){let nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",nt)};X.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=X}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let X=T.texture.mipmaps;X&&X.length>0?wt(M.__webglFramebuffer[0],T):wt(M.__webglFramebuffer,T)}else if(P){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=e.createRenderbuffer(),Lt(M.__webglDepthbuffer[X],T,!1);else{let nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,z=M.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,z),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,z)}}else{let X=T.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),Lt(M.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,z=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,z),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,z)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(T,M,P){let X=i.get(T);M!==void 0&&bt(X.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&qt(T)}function C(T){let M=T.texture,P=i.get(T),X=i.get(M);T.addEventListener("dispose",w);let nt=T.textures,z=T.isWebGLCubeRenderTarget===!0,Rt=nt.length>1;if(Rt||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=M.version,r.memory.textures++),z){P.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer[ct]=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)P.__webglFramebuffer[ct][Ct]=e.createFramebuffer()}else P.__webglFramebuffer[ct]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)P.__webglFramebuffer[ct]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Rt)for(let ct=0,Ct=nt.length;ct<Ct;ct++){let Dt=i.get(nt[ct]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&st(T)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ct=0;ct<nt.length;ct++){let Ct=nt[ct];P.__webglColorRenderbuffer[ct]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[ct]);let Dt=a.convert(Ct.format,Ct.colorSpace),it=a.convert(Ct.type),ft=_(Ct.internalFormat,Dt,it,Ct.colorSpace,T.isXRRenderTarget===!0),It=dt(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,It,ft,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,P.__webglColorRenderbuffer[ct])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Lt(P.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(z){n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Bt(e.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)bt(P.__webglFramebuffer[ct][Ct],T,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ct);else bt(P.__webglFramebuffer[ct],T,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Rt){for(let ct=0,Ct=nt.length;ct<Ct;ct++){let Dt=nt[ct],it=i.get(Dt),ft=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,it.__webglTexture),Bt(ft,Dt),bt(P.__webglFramebuffer,T,Dt,e.COLOR_ATTACHMENT0+ct,ft,0),m(Dt)&&f(ft)}n.unbindTexture()}else{let ct=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ct,X.__webglTexture),Bt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)bt(P.__webglFramebuffer[Ct],T,M,e.COLOR_ATTACHMENT0,ct,Ct);else bt(P.__webglFramebuffer,T,M,e.COLOR_ATTACHMENT0,ct,0);m(M)&&f(ct),n.unbindTexture()}T.depthBuffer&&qt(T)}function tt(T){let M=T.textures;for(let P=0,X=M.length;P<X;P++){let nt=M[P];if(m(nt)){let z=v(T),Rt=i.get(nt).__webglTexture;n.bindTexture(z,Rt),f(z),n.unbindTexture()}}}let Q=[],Z=[];function j(T){if(T.samples>0){if(st(T)===!1){let M=T.textures,P=T.width,X=T.height,nt=e.COLOR_BUFFER_BIT,z=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Rt=i.get(T),ct=M.length>1;if(ct)for(let Dt=0;Dt<M.length;Dt++)n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let Ct=T.texture.mipmaps;Ct&&Ct.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Dt=0;Dt<M.length;Dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=e.STENCIL_BUFFER_BIT)),ct){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Rt.__webglColorRenderbuffer[Dt]);let it=i.get(M[Dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,it,0)}e.blitFramebuffer(0,0,P,X,0,0,P,X,nt,e.NEAREST),l===!0&&(Q.length=0,Z.length=0,Q.push(e.COLOR_ATTACHMENT0+Dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(z),Z.push(z),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Z)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Q))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ct)for(let Dt=0;Dt<M.length;Dt++){n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,Rt.__webglColorRenderbuffer[Dt]);let it=i.get(M[Dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,it,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function dt(T){return Math.min(s.maxSamples,T.samples)}function st(T){let M=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(T){let M=r.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Pt(T,M){let P=T.colorSpace,X=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==pr&&P!==Fs&&(le.getTransfer(P)===Se?(X!==wi||nt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),M}function Ft(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=V,this.rebindTextures=ge,this.setupRenderTarget=C,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=st}function EU(e,t){function n(i,s=Fs){let a,r=le.getTransfer(s);if(i===Hi)return e.UNSIGNED_BYTE;if(i===fd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===dd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===iv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===sv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===ev)return e.BYTE;if(i===nv)return e.SHORT;if(i===al)return e.UNSIGNED_SHORT;if(i===hd)return e.INT;if(i===La)return e.UNSIGNED_INT;if(i===hs)return e.FLOAT;if(i===rl)return e.HALF_FLOAT;if(i===av)return e.ALPHA;if(i===rv)return e.RGB;if(i===wi)return e.RGBA;if(i===ko)return e.DEPTH_COMPONENT;if(i===ll)return e.DEPTH_STENCIL;if(i===ov)return e.RED;if(i===pd)return e.RED_INTEGER;if(i===lv)return e.RG;if(i===md)return e.RG_INTEGER;if(i===gd)return e.RGBA_INTEGER;if(i===ru||i===ou||i===lu||i===cu)if(r===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ru)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ru)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ou)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vd||i===_d||i===yd||i===xd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===vd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sd||i===Md||i===bd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Sd||i===Md)return r===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===bd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ed||i===Td||i===Ad||i===wd||i===Rd||i===Cd||i===Dd||i===Ud||i===Nd||i===Ld||i===Id||i===Od||i===Pd||i===zd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ed)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Td)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ad)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ud)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ld)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Id)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Od)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bd||i===Fd||i===Hd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Bd)return r===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vd||i===Gd||i===kd||i===Xd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Vd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ol?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var TU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Wc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Fi({vertexShader:TU,fragmentShader:AU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ve(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uv=class extends Ps{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Dv,f={},v=n.getContextAttributes(),_=null,y=null,A=[],R=[],w=new vt,U=null,E=new En;E.viewport=new ze;let S=new En;S.viewport=new ze;let D=[E,S],H=new $f,W=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=A[K];return et===void 0&&(et=new Jo,A[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=A[K];return et===void 0&&(et=new Jo,A[K]=et),et.getGripSpace()},this.getHand=function(K){let et=A[K];return et===void 0&&(et=new Jo,A[K]=et),et.getHandSpace()};function Y(K){let et=R.indexOf(K.inputSource);if(et===-1)return;let bt=A[et];bt!==void 0&&(bt.update(K.inputSource,K.frame,c||r),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",at);for(let K=0;K<A.length;K++){let et=R[K];et!==null&&(R[K]=null,A[K].disconnect(et))}W=null,k=null,m.reset();for(let K in f)delete f[K];t.setRenderTarget(_),p=null,h=null,d=null,s=null,y=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",at),v.xrCompatible!==!0&&await n.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Lt=null,wt=null;v.depth&&(wt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=v.stencil?ll:ko,Lt=v.stencil?ol:La);let qt={colorFormat:n.RGBA8,depthFormat:wt,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(qt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new ls(h.textureWidth,h.textureHeight,{format:wi,type:Hi,depthTexture:new qc(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let bt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ls(p.framebufferWidth,p.framebufferHeight,{format:wi,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(K){for(let et=0;et<K.removed.length;et++){let bt=K.removed[et],Lt=R.indexOf(bt);Lt>=0&&(R[Lt]=null,A[Lt].disconnect(bt))}for(let et=0;et<K.added.length;et++){let bt=K.added[et],Lt=R.indexOf(bt);if(Lt===-1){for(let qt=0;qt<A.length;qt++)if(qt>=R.length){R.push(bt),Lt=qt;break}else if(R[qt]===null){R[qt]=bt,Lt=qt;break}if(Lt===-1)break}let wt=A[Lt];wt&&wt.connect(bt)}}let V=new N,gt=new N;function Mt(K,et,bt){V.setFromMatrixPosition(et.matrixWorld),gt.setFromMatrixPosition(bt.matrixWorld);let Lt=V.distanceTo(gt),wt=et.projectionMatrix.elements,qt=bt.projectionMatrix.elements,ge=wt[14]/(wt[10]-1),C=wt[14]/(wt[10]+1),tt=(wt[9]+1)/wt[5],Q=(wt[9]-1)/wt[5],Z=(wt[8]-1)/wt[0],j=(qt[8]+1)/qt[0],dt=ge*Z,st=ge*j,ht=Lt/(-Z+j),Pt=ht*-Z;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Pt),K.translateZ(ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),wt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Ft=ge+ht,T=C+ht,M=dt-Pt,P=st+(Lt-Pt),X=tt*C/T*Ft,nt=Q*C/T*Ft;K.projectionMatrix.makePerspective(M,P,X,nt,Ft,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function At(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,bt=K.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),H.near=S.near=E.near=et,H.far=S.far=E.far=bt,(W!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),W=H.near,k=H.far),H.layers.mask=K.layers.mask|6,E.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;let Lt=K.parent,wt=H.cameras;At(H,Lt);for(let qt=0;qt<wt.length;qt++)At(wt[qt],Lt);wt.length===2?Mt(H,E,S):H.projectionMatrix.copy(E.projectionMatrix),Bt(K,H,Lt)};function Bt(K,et,bt){bt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Df*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(K){return f[K]};let Zt=null;function re(K,et){if(u=et.getViewerPose(c||r),g=et,u!==null){let bt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Lt=!1;bt.length!==H.cameras.length&&(H.cameras.length=0,Lt=!0);for(let C=0;C<bt.length;C++){let tt=bt[C],Q=null;if(p!==null)Q=p.getViewport(tt);else{let j=d.getViewSubImage(h,tt);Q=j.viewport,C===0&&(t.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(y))}let Z=D[C];Z===void 0&&(Z=new En,Z.layers.enable(C),Z.viewport=new ze,D[C]=Z),Z.matrix.fromArray(tt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(tt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Q.x,Q.y,Q.width,Q.height),C===0&&(H.matrix.copy(Z.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Lt===!0&&H.cameras.push(Z)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let C=d.getDepthInformation(bt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let C=0;C<bt.length;C++){let tt=bt[C].camera;if(tt){let Q=f[tt];Q||(Q=new Wc,f[tt]=Q);let Z=d.getCameraImage(tt);Q.sourceTexture=Z}}}}for(let bt=0;bt<A.length;bt++){let Lt=R[bt],wt=A[bt];Lt!==null&&wt!==void 0&&wt.update(Lt,et,c||r)}Zt&&Zt(K,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let ne=new Qb;ne.setAnimationLoop(re),this.setAnimationLoop=function(K){Zt=K},this.dispose=function(){}}},Tr=new Bi,wU=new Ne;function RU(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,dv(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===In&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===In&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,Tr.copy(y),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(wU.makeRotationFromEuler(Tr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===In&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function CU(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",m));let A=_.program;i.updateUBOMapping(v,A);let R=t.render.frame;a[v.id]!==R&&(h(v),a[v.id]=R)}function u(v){let _=d();v.__bindingPointIndex=_;let y=e.createBuffer(),A=v.__size,R=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,A,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let _=s[v.id],y=v.uniforms,A=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let R=0,w=y.length;R<w;R++){let U=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,S=U.length;E<S;E++){let D=U[E];if(p(D,R,E,A)===!0){let H=D.__offset,W=Array.isArray(D.value)?D.value:[D.value],k=0;for(let Y=0;Y<W.length;Y++){let q=W[Y],at=x(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,H+k,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,k),k+=at.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,_,y,A){let R=v.value,w=_+"_"+y;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{let U=A[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return A[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(v){let _=v.uniforms,y=0,A=16;for(let w=0,U=_.length;w<U;w++){let E=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,D=E.length;S<D;S++){let H=E[S],W=Array.isArray(H.value)?H.value:[H.value];for(let k=0,Y=W.length;k<Y;k++){let q=W[k],at=x(q),V=y%A,gt=V%at.boundary,Mt=V+gt;y+=gt,Mt!==0&&A-Mt<at.storage&&(y+=A-Mt),H.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=at.storage}}}let R=y%A;return R>0&&(y+=A-R),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function f(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:f}}var Zd=class{constructor(t={}){let{canvas:n=yb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=gn;let R=0,w=0,U=null,E=-1,S=null,D=new ze,H=new ze,W=null,k=new Kt(0),Y=0,q=n.width,at=n.height,V=1,gt=null,Mt=null,At=new ze(0,0,q,at),Bt=new ze(0,0,q,at),Zt=!1,re=new Qo,ne=!1,K=!1,et=new Ne,bt=new N,Lt=new ze,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function ge(){return U===null?V:1}let C=i;function tt(b,I){return n.getContext(b,I)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",Tt,!1),n.addEventListener("webglcontextcreationerror",rt,!1),C===null){let I="webgl2";if(C=tt(I,b),C===null)throw tt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Q,Z,j,dt,st,ht,Pt,Ft,T,M,P,X,nt,z,Rt,ct,Ct,Dt,it,ft,It,Ut,yt,Vt;function L(){Q=new Y3(C),Q.init(),Ut=new EU(C,Q),Z=new H3(C,Q,t,Ut),j=new MU(C,Q),Z.reversedDepthBuffer&&h&&j.buffers.depth.setReversed(!0),dt=new K3(C),st=new cU,ht=new bU(C,Q,j,st,Z,Ut,dt),Pt=new G3(y),Ft=new W3(y),T=new nC(C),yt=new B3(C,T),M=new Z3(C,T,dt,yt),P=new j3(C,M,T,dt),it=new Q3(C,Z,ht),ct=new V3(st),X=new lU(y,Pt,Ft,Q,Z,yt,ct),nt=new RU(y,st),z=new hU,Rt=new vU(Q),Dt=new z3(y,Pt,Ft,j,P,p,l),Ct=new xU(y,P,Z),Vt=new CU(C,dt,Z,j),ft=new F3(C,Q,dt),It=new J3(C,Q,dt),dt.programs=X.programs,y.capabilities=Z,y.extensions=Q,y.properties=st,y.renderLists=z,y.shadowMap=Ct,y.state=j,y.info=dt}L();let lt=new Uv(y,C);this.xr=lt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=Q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(q,at,!1))},this.getSize=function(b){return b.set(q,at)},this.setSize=function(b,I,F=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,at=I,n.width=Math.floor(b*V),n.height=Math.floor(I*V),F===!0&&(n.style.width=b+"px",n.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(q*V,at*V).floor()},this.setDrawingBufferSize=function(b,I,F){q=b,at=I,V=F,n.width=Math.floor(b*F),n.height=Math.floor(I*F),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,I,F,G){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,I,F,G),j.viewport(D.copy(At).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Bt)},this.setScissor=function(b,I,F,G){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,I,F,G),j.scissor(H.copy(Bt).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(b){j.setScissorTest(Zt=b)},this.setOpaqueSort=function(b){gt=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,F=!0){let G=0;if(b){let O=!1;if(U!==null){let ot=U.texture.format;O=ot===gd||ot===md||ot===pd}if(O){let ot=U.texture.type,xt=ot===Hi||ot===La||ot===al||ot===ol||ot===fd||ot===dd,Nt=Dt.getClearColor(),B=Dt.getClearAlpha(),ut=Nt.r,_t=Nt.g,pt=Nt.b;xt?(g[0]=ut,g[1]=_t,g[2]=pt,g[3]=B,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=ut,x[1]=_t,x[2]=pt,x[3]=B,C.clearBufferiv(C.COLOR,0,x))}else G|=C.COLOR_BUFFER_BIT}I&&(G|=C.DEPTH_BUFFER_BIT),F&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",rt,!1),Dt.dispose(),z.dispose(),Rt.dispose(),st.dispose(),Pt.dispose(),Ft.dispose(),P.dispose(),yt.dispose(),Vt.dispose(),X.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",pi),lt.removeEventListener("sessionend",ml),Zn.stop()};function mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=dt.autoReset,I=Ct.enabled,F=Ct.autoUpdate,G=Ct.needsUpdate,O=Ct.type;L(),dt.autoReset=b,Ct.enabled=I,Ct.autoUpdate=F,Ct.needsUpdate=G,Ct.type=O}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $(b){let I=b.target;I.removeEventListener("dispose",$),Et(I)}function Et(b){Gt(b),st.remove(b)}function Gt(b){let I=st.get(b).programs;I!==void 0&&(I.forEach(function(F){X.releaseProgram(F)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,F,G,O,ot){I===null&&(I=wt);let xt=O.isMesh&&O.matrixWorld.determinant()<0,Nt=_l(b,I,F,G,O);j.setMaterial(G,xt);let B=F.index,ut=1;if(G.wireframe===!0){if(B=M.getWireframeAttribute(F),B===void 0)return;ut=2}let _t=F.drawRange,pt=F.attributes.position,zt=_t.start*ut,Jt=(_t.start+_t.count)*ut;ot!==null&&(zt=Math.max(zt,ot.start*ut),Jt=Math.min(Jt,(ot.start+ot.count)*ut)),B!==null?(zt=Math.max(zt,0),Jt=Math.min(Jt,B.count)):pt!=null&&(zt=Math.max(zt,0),Jt=Math.min(Jt,pt.count));let ce=Jt-zt;if(ce<0||ce===1/0)return;yt.setup(O,G,Nt,F,B);let ue,Xt=ft;if(B!==null&&(ue=T.get(B),Xt=It,Xt.setIndex(ue)),O.isMesh)G.wireframe===!0?(j.setLineWidth(G.wireframeLinewidth*ge()),Xt.setMode(C.LINES)):Xt.setMode(C.TRIANGLES);else if(O.isLine){let Ot=G.linewidth;Ot===void 0&&(Ot=1),j.setLineWidth(Ot*ge()),O.isLineSegments?Xt.setMode(C.LINES):O.isLineLoop?Xt.setMode(C.LINE_LOOP):Xt.setMode(C.LINE_STRIP)}else O.isPoints?Xt.setMode(C.POINTS):O.isSprite&&Xt.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Xt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ot=O._multiDrawStarts,be=O._multiDrawCounts,ie=O._multiDrawCount,An=B?T.get(B).bytesPerElement:1,Pn=st.get(G).currentProgram.getUniforms();for(let _n=0;_n<ie;_n++)Pn.setValue(C,"_gl_DrawID",_n),Xt.render(Ot[_n]/An,be[_n])}else if(O.isInstancedMesh)Xt.renderInstances(zt,ce,O.count);else if(F.isInstancedBufferGeometry){let Ot=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,be=Math.min(F.instanceCount,Ot);Xt.renderInstances(zt,ce,be)}else Xt.render(zt,ce)};function ve(b,I,F){b.transparent===!0&&b.side===fi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Dr(b,I,F),b.side=Os,b.needsUpdate=!0,Dr(b,I,F),b.side=fi):Dr(b,I,F)}this.compile=function(b,I,F=null){F===null&&(F=b),f=Rt.get(F),f.init(I),_.push(f),F.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),b!==F&&b.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let G=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ot=O.material;if(ot)if(Array.isArray(ot))for(let xt=0;xt<ot.length;xt++){let Nt=ot[xt];ve(Nt,F,O),G.add(Nt)}else ve(ot,F,O),G.add(ot)}),f=_.pop(),G},this.compileAsync=function(b,I,F=null){let G=this.compile(b,I,F);return new Promise(O=>{function ot(){if(G.forEach(function(xt){st.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){O(b);return}setTimeout(ot,10)}Q.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let oe=null;function di(b){oe&&oe(b)}function pi(){Zn.stop()}function ml(){Zn.start()}let Zn=new Qb;Zn.setAnimationLoop(di),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(b){oe=b,lt.setAnimationLoop(b),b===null?Zn.stop():Zn.start()},lt.addEventListener("sessionstart",pi),lt.addEventListener("sessionend",ml),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(I),I=lt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,I,U),f=Rt.get(b,_.length),f.init(I),_.push(f),et.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),re.setFromProjectionMatrix(et,zi,I.reversedDepth),K=this.localClippingEnabled,ne=ct.init(this.clippingPlanes,K),m=z.get(b,v.length),m.init(),v.push(m),lt.enabled===!0&&lt.isPresenting===!0){let ot=y.xr.getDepthSensingMesh();ot!==null&&Oa(ot,I,-1/0,y.sortObjects)}Oa(b,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(gt,Mt),qt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,qt&&Dt.addToRenderList(m,b),this.info.render.frame++,ne===!0&&ct.beginShadows();let F=f.state.shadowsArray;Ct.render(F,b,I),ne===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,O=m.transmissive;if(f.setupLights(),I.isArrayCamera){let ot=I.cameras;if(O.length>0)for(let xt=0,Nt=ot.length;xt<Nt;xt++){let B=ot[xt];Vi(G,O,b,B)}qt&&Dt.render(b);for(let xt=0,Nt=ot.length;xt<Nt;xt++){let B=ot[xt];pu(m,b,B,B.viewport)}}else O.length>0&&Vi(G,O,b,I),qt&&Dt.render(b),pu(m,b,I);U!==null&&w===0&&(ht.updateMultisampleRenderTarget(U),ht.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(y,b,I),yt.resetDefaultState(),E=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],ne===!0&&ct.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Oa(b,I,F,G){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||re.intersectsSprite(b)){G&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(et);let xt=P.update(b),Nt=b.material;Nt.visible&&m.push(b,xt,Nt,F,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||re.intersectsObject(b))){let xt=P.update(b),Nt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Lt.copy(xt.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(et)),Array.isArray(Nt)){let B=xt.groups;for(let ut=0,_t=B.length;ut<_t;ut++){let pt=B[ut],zt=Nt[pt.materialIndex];zt&&zt.visible&&m.push(b,xt,zt,F,Lt.z,pt)}}else Nt.visible&&m.push(b,xt,Nt,F,Lt.z,null)}}let ot=b.children;for(let xt=0,Nt=ot.length;xt<Nt;xt++)Oa(ot[xt],I,F,G)}function pu(b,I,F,G){let O=b.opaque,ot=b.transmissive,xt=b.transparent;f.setupLightsView(F),ne===!0&&ct.setGlobalState(y.clippingPlanes,F),G&&j.viewport(D.copy(G)),O.length>0&&Cr(O,I,F),ot.length>0&&Cr(ot,I,F),xt.length>0&&Cr(xt,I,F),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Vi(b,I,F,G){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new ls(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?rl:Hi,minFilter:us,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let ot=f.state.transmissionRenderTarget[G.id],xt=G.viewport||D;ot.setSize(xt.z*y.transmissionResolutionScale,xt.w*y.transmissionResolutionScale);let Nt=y.getRenderTarget(),B=y.getActiveCubeFace(),ut=y.getActiveMipmapLevel();y.setRenderTarget(ot),y.getClearColor(k),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),qt&&Dt.render(F);let _t=y.toneMapping;y.toneMapping=Bs;let pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),ne===!0&&ct.setGlobalState(y.clippingPlanes,G),Cr(b,F,G),ht.updateMultisampleRenderTarget(ot),ht.updateRenderTargetMipmap(ot),Q.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Jt=0,ce=I.length;Jt<ce;Jt++){let ue=I[Jt],Xt=ue.object,Ot=ue.geometry,be=ue.material,ie=ue.group;if(be.side===fi&&Xt.layers.test(G.layers)){let An=be.side;be.side=In,be.needsUpdate=!0,gl(Xt,F,G,Ot,be,ie),be.side=An,be.needsUpdate=!0,zt=!0}}zt===!0&&(ht.updateMultisampleRenderTarget(ot),ht.updateRenderTargetMipmap(ot))}y.setRenderTarget(Nt,B,ut),y.setClearColor(k,Y),pt!==void 0&&(G.viewport=pt),y.toneMapping=_t}function Cr(b,I,F){let G=I.isScene===!0?I.overrideMaterial:null;for(let O=0,ot=b.length;O<ot;O++){let xt=b[O],Nt=xt.object,B=xt.geometry,ut=xt.group,_t=xt.material;_t.allowOverride===!0&&G!==null&&(_t=G),Nt.layers.test(F.layers)&&gl(Nt,I,F,B,_t,ut)}}function gl(b,I,F,G,O,ot){b.onBeforeRender(y,I,F,G,O,ot),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(y,I,F,G,b,ot),O.transparent===!0&&O.side===fi&&O.forceSinglePass===!1?(O.side=In,O.needsUpdate=!0,y.renderBufferDirect(F,I,G,O,b,ot),O.side=Os,O.needsUpdate=!0,y.renderBufferDirect(F,I,G,O,b,ot),O.side=fi):y.renderBufferDirect(F,I,G,O,b,ot),b.onAfterRender(y,I,F,G,O,ot)}function Dr(b,I,F){I.isScene!==!0&&(I=wt);let G=st.get(b),O=f.state.lights,ot=f.state.shadowsArray,xt=O.state.version,Nt=X.getParameters(b,O.state,ot,I,F),B=X.getProgramCacheKey(Nt),ut=G.programs;G.environment=b.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(b.isMeshStandardMaterial?Ft:Pt).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,ut===void 0&&(b.addEventListener("dispose",$),ut=new Map,G.programs=ut);let _t=ut.get(B);if(_t!==void 0){if(G.currentProgram===_t&&G.lightsStateVersion===xt)return mi(b,Nt),_t}else Nt.uniforms=X.getUniforms(b),b.onBeforeCompile(Nt,y),_t=X.acquireProgram(Nt,B),ut.set(B,_t),G.uniforms=Nt.uniforms;let pt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(pt.clippingPlanes=ct.uniform),mi(b,Nt),G.needsLights=yl(b),G.lightsStateVersion=xt,G.needsLights&&(pt.ambientLightColor.value=O.state.ambient,pt.lightProbe.value=O.state.probe,pt.directionalLights.value=O.state.directional,pt.directionalLightShadows.value=O.state.directionalShadow,pt.spotLights.value=O.state.spot,pt.spotLightShadows.value=O.state.spotShadow,pt.rectAreaLights.value=O.state.rectArea,pt.ltc_1.value=O.state.rectAreaLTC1,pt.ltc_2.value=O.state.rectAreaLTC2,pt.pointLights.value=O.state.point,pt.pointLightShadows.value=O.state.pointShadow,pt.hemisphereLights.value=O.state.hemi,pt.directionalShadowMap.value=O.state.directionalShadowMap,pt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,pt.spotShadowMap.value=O.state.spotShadowMap,pt.spotLightMatrix.value=O.state.spotLightMatrix,pt.spotLightMap.value=O.state.spotLightMap,pt.pointShadowMap.value=O.state.pointShadowMap,pt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=_t,G.uniformsList=null,_t}function vl(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=fl.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function mi(b,I){let F=st.get(b);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function _l(b,I,F,G,O){I.isScene!==!0&&(I=wt),ht.resetTextureUnits();let ot=I.fog,xt=G.isMeshStandardMaterial?I.environment:null,Nt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:pr,B=(G.isMeshStandardMaterial?Ft:Pt).get(G.envMap||xt),ut=G.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,_t=!!F.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),pt=!!F.morphAttributes.position,zt=!!F.morphAttributes.normal,Jt=!!F.morphAttributes.color,ce=Bs;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ce=y.toneMapping);let ue=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xt=ue!==void 0?ue.length:0,Ot=st.get(G),be=f.state.lights;if(ne===!0&&(K===!0||b!==S)){let tn=b===S&&G.id===E;ct.setState(G,b,tn)}let ie=!1;G.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==be.state.version||Ot.outputColorSpace!==Nt||O.isBatchedMesh&&Ot.batching===!1||!O.isBatchedMesh&&Ot.batching===!0||O.isBatchedMesh&&Ot.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ot.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ot.instancing===!1||!O.isInstancedMesh&&Ot.instancing===!0||O.isSkinnedMesh&&Ot.skinning===!1||!O.isSkinnedMesh&&Ot.skinning===!0||O.isInstancedMesh&&Ot.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ot.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ot.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ot.instancingMorph===!1&&O.morphTexture!==null||Ot.envMap!==B||G.fog===!0&&Ot.fog!==ot||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ct.numPlanes||Ot.numIntersection!==ct.numIntersection)||Ot.vertexAlphas!==ut||Ot.vertexTangents!==_t||Ot.morphTargets!==pt||Ot.morphNormals!==zt||Ot.morphColors!==Jt||Ot.toneMapping!==ce||Ot.morphTargetsCount!==Xt)&&(ie=!0):(ie=!0,Ot.__version=G.version);let An=Ot.currentProgram;ie===!0&&(An=Dr(G,I,O));let Pn=!1,_n=!1,$e=!1,he=An.getUniforms(),se=Ot.uniforms;if(j.useProgram(An.program)&&(Pn=!0,_n=!0,$e=!0),G.id!==E&&(E=G.id,_n=!0),Pn||S!==b){j.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),he.setValue(C,"projectionMatrix",b.projectionMatrix),he.setValue(C,"viewMatrix",b.matrixWorldInverse);let en=he.map.cameraPosition;en!==void 0&&en.setValue(C,bt.setFromMatrixPosition(b.matrixWorld)),Z.logarithmicDepthBuffer&&he.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,_n=!0,$e=!0)}if(O.isSkinnedMesh){he.setOptional(C,O,"bindMatrix"),he.setOptional(C,O,"bindMatrixInverse");let tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),he.setValue(C,"boneTexture",tn.boneTexture,ht))}O.isBatchedMesh&&(he.setOptional(C,O,"batchingTexture"),he.setValue(C,"batchingTexture",O._matricesTexture,ht),he.setOptional(C,O,"batchingIdTexture"),he.setValue(C,"batchingIdTexture",O._indirectTexture,ht),he.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&he.setValue(C,"batchingColorTexture",O._colorsTexture,ht));let Ge=F.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&it.update(O,F,An),(_n||Ot.receiveShadow!==O.receiveShadow)&&(Ot.receiveShadow=O.receiveShadow,he.setValue(C,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(se.envMap.value=B,se.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(se.envMapIntensity.value=I.environmentIntensity),_n&&(he.setValue(C,"toneMappingExposure",y.toneMappingExposure),Ot.needsLights&&mu(se,$e),ot&&G.fog===!0&&nt.refreshFogUniforms(se,ot),nt.refreshMaterialUniforms(se,G,V,at,f.state.transmissionRenderTarget[b.id]),fl.upload(C,vl(Ot),se,ht)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fl.upload(C,vl(Ot),se,ht),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(C,"center",O.center),he.setValue(C,"modelViewMatrix",O.modelViewMatrix),he.setValue(C,"normalMatrix",O.normalMatrix),he.setValue(C,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let tn=G.uniformsGroups;for(let en=0,Ml=tn.length;en<Ml;en++){let zn=tn[en];Vt.update(zn,An),Vt.bind(zn,An)}}return An}function mu(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function yl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,I,F){let G=st.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),st.get(b.texture).__webglTexture=I,st.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:F,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){let F=st.get(b);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0};let xl=C.createFramebuffer();this.setRenderTarget=function(b,I=0,F=0){U=b,R=I,w=F;let G=!0,O=null,ot=!1,xt=!1;if(b){let B=st.get(b);if(B.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(B.__webglFramebuffer===void 0)ht.setupRenderTarget(b);else if(B.__hasExternalTextures)ht.rebindTextures(b,st.get(b.texture).__webglTexture,st.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let pt=b.depthTexture;if(B.__boundDepthTexture!==pt){if(pt!==null&&st.has(pt)&&(b.width!==pt.image.width||b.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(b)}}let ut=b.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(xt=!0);let _t=st.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(_t[I])?O=_t[I][F]:O=_t[I],ot=!0):b.samples>0&&ht.useMultisampledRTT(b)===!1?O=st.get(b).__webglMultisampledFramebuffer:Array.isArray(_t)?O=_t[F]:O=_t,D.copy(b.viewport),H.copy(b.scissor),W=b.scissorTest}else D.copy(At).multiplyScalar(V).floor(),H.copy(Bt).multiplyScalar(V).floor(),W=Zt;if(F!==0&&(O=xl),j.bindFramebuffer(C.FRAMEBUFFER,O)&&G&&j.drawBuffers(b,O),j.viewport(D),j.scissor(H),j.setScissorTest(W),ot){let B=st.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,B.__webglTexture,F)}else if(xt){let B=I;for(let ut=0;ut<b.textures.length;ut++){let _t=st.get(b.textures[ut]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ut,_t.__webglTexture,F,B)}}else if(b!==null&&F!==0){let B=st.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,B.__webglTexture,F)}E=-1},this.readRenderTargetPixels=function(b,I,F,G,O,ot,xt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(B=B[xt]),B){j.bindFramebuffer(C.FRAMEBUFFER,B);try{let ut=b.textures[Nt],_t=ut.format,pt=ut.type;if(!Z.textureFormatReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-G&&F>=0&&F<=b.height-O&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Nt),C.readPixels(I,F,G,O,Ut.convert(_t),Ut.convert(pt),ot))}finally{let ut=U!==null?st.get(U).__webglFramebuffer:null;j.bindFramebuffer(C.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(b,I,F,G,O,ot,xt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(B=B[xt]),B)if(I>=0&&I<=b.width-G&&F>=0&&F<=b.height-O){j.bindFramebuffer(C.FRAMEBUFFER,B);let ut=b.textures[Nt],_t=ut.format,pt=ut.type;if(!Z.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let zt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.bufferData(C.PIXEL_PACK_BUFFER,ot.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Nt),C.readPixels(I,F,G,O,Ut.convert(_t),Ut.convert(pt),0);let Jt=U!==null?st.get(U).__webglFramebuffer:null;j.bindFramebuffer(C.FRAMEBUFFER,Jt);let ce=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await xb(C,ce,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ot),C.deleteBuffer(zt),C.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,F=0){let G=Math.pow(2,-F),O=Math.floor(b.image.width*G),ot=Math.floor(b.image.height*G),xt=I!==null?I.x:0,Nt=I!==null?I.y:0;ht.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,xt,Nt,O,ot),j.unbindTexture()};let Sl=C.createFramebuffer(),$d=C.createFramebuffer();this.copyTextureToTexture=function(b,I,F=null,G=null,O=0,ot=null){ot===null&&(O!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=O,O=0):ot=0);let xt,Nt,B,ut,_t,pt,zt,Jt,ce,ue=b.isCompressedTexture?b.mipmaps[ot]:b.image;if(F!==null)xt=F.max.x-F.min.x,Nt=F.max.y-F.min.y,B=F.isBox3?F.max.z-F.min.z:1,ut=F.min.x,_t=F.min.y,pt=F.isBox3?F.min.z:0;else{let Ge=Math.pow(2,-O);xt=Math.floor(ue.width*Ge),Nt=Math.floor(ue.height*Ge),b.isDataArrayTexture?B=ue.depth:b.isData3DTexture?B=Math.floor(ue.depth*Ge):B=1,ut=0,_t=0,pt=0}G!==null?(zt=G.x,Jt=G.y,ce=G.z):(zt=0,Jt=0,ce=0);let Xt=Ut.convert(I.format),Ot=Ut.convert(I.type),be;I.isData3DTexture?(ht.setTexture3D(I,0),be=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(ht.setTexture2DArray(I,0),be=C.TEXTURE_2D_ARRAY):(ht.setTexture2D(I,0),be=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let ie=C.getParameter(C.UNPACK_ROW_LENGTH),An=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Pn=C.getParameter(C.UNPACK_SKIP_PIXELS),_n=C.getParameter(C.UNPACK_SKIP_ROWS),$e=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,_t),C.pixelStorei(C.UNPACK_SKIP_IMAGES,pt);let he=b.isDataArrayTexture||b.isData3DTexture,se=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){let Ge=st.get(b),tn=st.get(I),en=st.get(Ge.__renderTarget),Ml=st.get(tn.__renderTarget);j.bindFramebuffer(C.READ_FRAMEBUFFER,en.__webglFramebuffer),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ml.__webglFramebuffer);for(let zn=0;zn<B;zn++)he&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,st.get(b).__webglTexture,O,pt+zn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,st.get(I).__webglTexture,ot,ce+zn)),C.blitFramebuffer(ut,_t,xt,Nt,zt,Jt,xt,Nt,C.DEPTH_BUFFER_BIT,C.NEAREST);j.bindFramebuffer(C.READ_FRAMEBUFFER,null),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||st.has(b)){let Ge=st.get(b),tn=st.get(I);j.bindFramebuffer(C.READ_FRAMEBUFFER,Sl),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,$d);for(let en=0;en<B;en++)he?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ge.__webglTexture,O,pt+en):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ge.__webglTexture,O),se?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,tn.__webglTexture,ot,ce+en):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,tn.__webglTexture,ot),O!==0?C.blitFramebuffer(ut,_t,xt,Nt,zt,Jt,xt,Nt,C.COLOR_BUFFER_BIT,C.NEAREST):se?C.copyTexSubImage3D(be,ot,zt,Jt,ce+en,ut,_t,xt,Nt):C.copyTexSubImage2D(be,ot,zt,Jt,ut,_t,xt,Nt);j.bindFramebuffer(C.READ_FRAMEBUFFER,null),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else se?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(be,ot,zt,Jt,ce,xt,Nt,B,Xt,Ot,ue.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(be,ot,zt,Jt,ce,xt,Nt,B,Xt,ue.data):C.texSubImage3D(be,ot,zt,Jt,ce,xt,Nt,B,Xt,Ot,ue):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ot,zt,Jt,xt,Nt,Xt,Ot,ue.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ot,zt,Jt,ue.width,ue.height,Xt,ue.data):C.texSubImage2D(C.TEXTURE_2D,ot,zt,Jt,xt,Nt,Xt,Ot,ue);C.pixelStorei(C.UNPACK_ROW_LENGTH,ie),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,An),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pn),C.pixelStorei(C.UNPACK_SKIP_ROWS,_n),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$e),ot===0&&I.generateMipmaps&&C.generateMipmap(be),j.unbindTexture()},this.initRenderTarget=function(b){st.get(b).__webglFramebuffer===void 0&&ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ht.setTextureCube(b,0):b.isData3DTexture?ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ht.setTexture2DArray(b,0):ht.setTexture2D(b,0),j.unbindTexture()},this.resetState=function(){R=0,w=0,U=null,j.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),n.unpackColorSpace=le._getUnpackColorSpace()}};var nE={portrait:[1.6,2.25],landscape:[2.25,1.6]},UU={left:.27,center:.5,right:.73},du=.018,On=.007,Ye=4,iE=1/.05,NU=1/960,LU=2,Hs=72,sE=24,Lv=.36,hE=.095,IU=.0135,Kd=.036,fu=.15,aE=1024,rE={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Qd=[0,.07,.93,1],OU=[-.95,-.28,.28,.95],PU=9,zU=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,BU=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,FU=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,HU=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,oE={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Ia=(e,t,n)=>Math.min(n,Math.max(t,e)),hu=(e,t,n)=>e+(t-e)*n,Iv=(e,t)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return t;n.fillStyle="#000000",n.fillStyle=e;let i=n.fillStyle;if(i.startsWith("#")){let a=parseInt(i.slice(1),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}let s=i.match(/[\d.]+/g);return!s||s.length<3?t:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255]}catch{return t}},VU=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],jd=(e,t=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${t})`,fE=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},Bv=(e,t,n,i,s,a)=>{let r=Math.max(0,Math.min(a,i/2,s/2)),o=r*.4477;e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.bezierCurveTo(t+i-o,n,t+i,n+o,t+i,n+r),e.lineTo(t+i,n+s-r),e.bezierCurveTo(t+i,n+s-o,t+i-o,n+s,t+i-r,n+s),e.lineTo(t+r,n+s),e.bezierCurveTo(t+o,n+s,t,n+s-o,t,n+s-r),e.lineTo(t,n+r),e.bezierCurveTo(t,n+o,t+o,n,t+r,n)},Ov=(e,t)=>{if(!t)return Promise.resolve(null);let n=e.get(t);if(n)return n;let i=new Promise(s=>{let a=new Image;a.crossOrigin="anonymous",a.decoding="async",a.onload=()=>s(a),a.onerror=()=>s(null),a.src=t});return e.set(t,i),i},lE=(e,t)=>{let[n,i]=nE[e]||nE.portrait,s=hu(.03,Math.min(n,i)*.2,Ia(t,0,1)),a={width:.34,height:.07,y:i/2-.13},r=i/2-.055;return{width:n,height:i,radius:s,slot:a,ringY:r,hangY:r+hE}},GU=e=>{let{width:t,height:n,radius:i,slot:s}=e,a=new Ca;Bv(a,-t/2+On,-n/2+On,t-On*2,n-On*2,Math.max(i-On,.005));let r=new vr;Bv(r,-s.width/2-On,s.y-s.height/2-On,s.width+On*2,s.height+On*2,s.height/2+On),a.holes.push(r);let o=new el(a,{depth:du,bevelEnabled:!0,bevelThickness:On,bevelSize:On,bevelSegments:5,curveSegments:24});o.translate(0,0,-du/2);let l=new tu(a,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let d=0;d<c.count;d++)u.setXY(d,(c.getX(d)+t/2)/t,(c.getY(d)+n/2)/n);return u.needsUpdate=!0,{body:o,face:l}},cE=e=>{let t=new Ca,n=e*1.16;Bv(t,-n/2+.014,-fu/2+.014,n-.028,fu-.028,.024);let i=new el(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},kU=e=>{let t=Qd.length,n=new ci;n.setAttribute("position",new vn(new Float32Array(e*t*3),3)),n.setAttribute("normal",new vn(new Float32Array(e*t*3),3)),n.setAttribute("uv",new vn(new Float32Array(e*t*2),2));let i=[];for(let s=0;s<e-1;s++)for(let a=0;a<t-1;a++){let r=s*t+a;i.push(r,r+t,r+1,r+1,r+t,r+t+1)}return n.setIndex(i),n},XU=e=>{let t=new Ko;t.background=new Kt(.035,.035,.04);let n=new yr(1,1),i=[],s=(o,l,c,u=0)=>{let d=new mr({color:new Kt(o,o,o),side:fi});i.push(d);let h=new Ve(n,d);h.position.set(...l),h.scale.set(c[0],c[1],1),h.lookAt(0,0,0),h.rotateZ(u),t.add(h)};s(2.6,[0,4.5,8],[9,4]),s(6,[-5.5,.5,7],[.9,14]),s(4,[5,-.5,8],[.6,14]),s(3.5,[0,-1,9],[24,.35],Math.PI/3),s(2.5,[1,2.5,9],[24,.2],Math.PI/3),s(1.4,[0,6,-6],[12,4]),s(.5,[0,-7,1],[16,6]),s(.9,[8,0,-2],[4,10]);let a=new dl(e),r=a.fromScene(t,.035);return a.dispose(),n.dispose(),i.forEach(o=>o.dispose()),r},Pv=(e,t)=>{let n=new gr(e);return n.colorSpace=gn,n.anisotropy=t,n},qU=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n)return new gr(t);let i=fE(7),s=Float32Array.from({length:16384},()=>i()),a=(l,c)=>{let u=0;for(let d=-1;d<=1;d++)for(let h=-1;h<=1;h++)u+=s[(c+d+128)%128*128+(l+h+128)%128];return u/9*1.6},r=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=a((c-1+128)%128,l)-a((c+1)%128,l),d=a(c,(l-1+128)%128)-a(c,(l+1)%128),h=Math.hypot(u,d,1),p=(l*128+c)*4;r.data[p]=(u/h*.5+.5)*255,r.data[p+1]=(d/h*.5+.5)*255,r.data[p+2]=(1/h*.5+.5)*255,r.data[p+3]=255}n.putImageData(r,0,0);let o=new gr(t);return o.wrapS=os,o.wrapT=os,o.repeat.set(5,7),o},WU=()=>{let n=fE(19),i=Float32Array.from({length:16384},()=>n()),s=l=>Math.sqrt(Math.max(0,1-4*l*l)),a=(l,c)=>{let u=(l%128+128)%128,d=(c%128+128)%128,h=u/128*8,p=d/128*8,g=Math.floor(h),x=Math.floor(p),m=h-g-.5,f=p-x-.5,v=(g+x)%2===0,_=s(m)*(.55+.45*Math.cos(f*Math.PI*(v?1:.6))),y=s(f)*(.55+.45*Math.cos(m*Math.PI*(v?.6:1)));return(v?Math.max(_,y*.7):Math.max(y,_*.7))+i[d*128+u]*.08},r=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(a(c-1,l)-a(c+1,l))*1.6,d=(a(c,l-1)-a(c,l+1))*1.6,h=Math.hypot(u,d,1),p=(l*128+c)*4;r[p]=(u/h*.5+.5)*255,r[p+1]=(d/h*.5+.5)*255,r[p+2]=(1/h*.5+.5)*255,r[p+3]=255}let o=new Xc(r,128,128);return o.wrapS=os,o.wrapT=os,o.magFilter=li,o.minFilter=us,o.generateMipmaps=!0,o.needsUpdate=!0,o},YU=(e,t,n,i,s)=>{let a=(s==="contain"?Math.min:Math.max)(n/t.width,i/t.height),r=t.width*a,o=t.height*a;e.drawImage(t,(n-r)/2,(i-o)/2,r,o)},uE=(e,t,n,i)=>{let s=e.getContext("2d");s&&(s.fillStyle=jd(n),s.fillRect(0,0,e.width,e.height),t&&YU(s,t,e.width,e.height,i))},ZU=(e,t,n)=>{let s=t?Math.max(64,Math.round(t.width/t.height*192)):384;e.width=192,e.height=s;let a=e.getContext("2d");if(!a)return s/192;if(a.fillStyle=jd(n),a.fillRect(0,0,192,s),t)return a.save(),a.translate(192,0),a.rotate(Math.PI/2),a.drawImage(t,0,0,s,192),a.restore(),s/192;let r=VU(n)>.5?[0,0,0]:[1,1,1];a.fillStyle=jd(r,.05);for(let o=0;o<s;o+=4)a.fillRect(0,o,192,1);a.fillStyle=jd(r,.2);for(let o=0;o<s;o+=14)a.fillRect(192*.075,o,2,8),a.fillRect(192*.925-2,o,2,8);return s/192},JU=()=>{let e=()=>Array.from({length:Ye+1},()=>new N);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(Ye),impulses:new Float64Array(Ye),rest:1,anchor:new N,body:{position:new N,previous:new N,velocity:new N,quaternion:new Yn,previousQuaternion:new Yn,angular:new N,mass:1,inverseInertia:new N(1,1,1),hang:new N},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Me={a:new N,b:new N,c:new N,d:new N,e:new N,f:new N,g:new N,pin:new N,q:new Yn,r:new Yn},Fv=(e,t,n)=>(Me.r.copy(e.quaternion).invert(),n.copy(t).applyQuaternion(Me.r),n.set(n.x*e.inverseInertia.x,n.y*e.inverseInertia.y,n.z*e.inverseInertia.z),n.applyQuaternion(e.quaternion)),dE=(e,t)=>{let{x:n,y:i,z:s,w:a}=e;e.x+=.5*(t.x*a+t.y*s-t.z*i),e.y+=.5*(t.y*a+t.z*n-t.x*s),e.z+=.5*(t.z*a+t.x*i-t.y*n),e.w+=.5*(-t.x*n-t.y*i-t.z*s),e.normalize()},pE=(e,t,n)=>{let i=Me.c.crossVectors(t,n);return 1/e.mass+i.dot(Fv(e,i,Me.d))},mE=(e,t,n)=>{e.position.addScaledVector(n,1/e.mass),dE(e.quaternion,Fv(e,Me.e.crossVectors(t,n),Me.f))},KU=(e,t,n,i)=>{let{nodes:s,body:a}=e,r=s[t],o=t===0?0:iE,l=t===Ye-1,c=Me.g,u=s[t+1];l&&(c.copy(a.hang).applyQuaternion(a.quaternion),u=Me.b.copy(a.position).add(c));let d=Me.a.subVectors(u,r),h=d.length(),p=h-e.rest;if(p<=0||h<1e-9)return;let g=d.divideScalar(h),x=l?pE(a,c,g):iE,m=(h-e.lengths[t])/n,v=(i.hold*Math.tanh(i.stiffness*p/i.hold)+i.spring*p+i.bandDamping*Math.max(0,m))*n*n-e.impulses[t];if(v<=0)return;let _=Math.min(p/(o+x),v);e.impulses[t]+=_,o&&r.addScaledVector(g,_*o),l?mE(a,c,g.multiplyScalar(-_)):u.addScaledVector(g,-_*x)},QU=(e,t,n)=>{let i=Me.g.copy(t.local).applyQuaternion(e.quaternion),s=Me.a.copy(n).sub(e.position).sub(i),a=s.length();if(a<1e-9)return;let r=s.divideScalar(a),o=a/pE(e,i,r);mE(e,i,r.multiplyScalar(o))},zv=(e,t,n)=>{let{nodes:i,previous:s,velocities:a,body:r,anchor:o}=e;i[0].copy(o);for(let c=1;c<=Ye;c++)i[c].copy(i[c-1]),n?i[c].x+=e.rest:i[c].y-=e.rest;r.quaternion.identity(),n&&r.quaternion.setFromAxisAngle(new N(0,0,1),Math.PI/2),r.hang.set(0,t.hangY,0);let l=Me.a.copy(r.hang).applyQuaternion(r.quaternion);r.position.copy(i[Ye]).sub(l),r.previous.copy(r.position),r.previousQuaternion.copy(r.quaternion),r.velocity.set(0,0,0),r.angular.set(0,0,0);for(let c=0;c<=Ye;c++)s[c].copy(i[c]),a[c].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},jU=(e,t,n)=>{e.rest=n/Ye;let{width:i,height:s}=t,a=e.body,r=du+On*2;a.mass=1,a.inverseInertia.set(12/(s*s+r*r),12/(i*i+r*r),12/(i*i+s*s)),a.hang.set(0,t.hangY,0)},$U=(e,t,n,i)=>{let s=Math.max(1,Math.ceil(t/NU-1e-6)),a=t/s,{nodes:r,previous:o,velocities:l,body:c}=e,u=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3+(n.tiltX||0)*24,d=n.breeze*Math.sin(i*.37+.6)*2+(n.tiltZ||0)*18,h=e.grab,p=Me.pin,g=Math.exp(-n.nodeDrag*a),x=Math.exp(-n.linearDrag*a),m=Math.exp(-n.angularDrag*a);for(let v=0;v<s;v++){for(let S=1;S<Ye;S++){let D=l[S];D.y-=n.gravity*a,D.x+=u*a,D.z+=d*a,o[S].copy(r[S]),r[S].addScaledVector(D,a)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let _=c.quaternion;if(h){let S=Me.q.copy(h.rotation).multiply(Me.r.copy(_).invert());S.w<0&&S.set(-S.x,-S.y,-S.z,-S.w);let D=Me.a.set(S.x,S.y,S.z).multiplyScalar(2*n.grip);D.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(Fv(c,D,Me.b),a)}let y=Me.a.set(0,1,0).applyQuaternion(_),A=Me.b.set(-y.x*y.z,-y.y*y.z,1-y.z*y.z);if(A.lengthSq()>.001){let S=Me.d.set(0,0,1).applyQuaternion(_),D=Math.atan2(Me.e.crossVectors(A,S).dot(y),A.dot(S)),H=D-e.twistRaw;H>Math.PI?H-=Math.PI*2:H<-Math.PI&&(H+=Math.PI*2),e.twist+=H,e.twistRaw=D}if(!h){let S=c.angular.dot(y);c.angular.addScaledVector(y,(n.twist*(e.turn-e.twist)-n.twistDamping*S)*a)}c.velocity.y-=n.gravity*a,c.velocity.x+=u*.35*a,c.velocity.z+=d*.35*a,c.position.addScaledVector(c.velocity,a),dE(c.quaternion,Me.f.copy(c.angular).multiplyScalar(a)),e.impulses.fill(0),h&&p.lerpVectors(h.from,h.target,(v+1)/s);for(let S=0;S<LU;S++){for(let D=0;D<Ye;D++)KU(e,D,a,n);h&&QU(c,h,p)}for(let S=1;S<Ye;S++){let D=l[S].subVectors(r[S],o[S]).divideScalar(a).multiplyScalar(g);D.multiplyScalar(1/(1+n.nodeAir*D.length()*a))}c.velocity.subVectors(c.position,c.previous).divideScalar(a);let R=Me.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(R.x,R.y,R.z).multiplyScalar(2/a*(R.w<0?-1:1));let w=Me.a.set(0,0,1).applyQuaternion(c.quaternion),U=c.velocity.dot(w),E=Me.b.copy(c.velocity).addScaledVector(w,-U);E.multiplyScalar(1/(1+n.air*E.length()*a)),c.velocity.copy(E).addScaledVector(w,U/(1+n.broadside*Math.abs(U)*a)).multiplyScalar(x),c.angular.multiplyScalar(m/(1+n.spinAir*c.angular.length()*a)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),r[Ye].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let S=0;S<Ye;S++)e.lengths[S]=r[S].distanceTo(r[S+1])}h&&h.from.copy(h.target);let f=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let v=1;v<Ye;v++)f+=l[v].lengthSq()*.05;e.calm=f<2e-4?e.calm+t:0},tN=({frontImage:e,backImage:t,imageFit:n="cover",cardColor:i="#ffffff",orientation:s="portrait",finish:a="glossy",cornerRadius:r=.3,size:o=.6,anchor:l="center",strapLength:c=.5,strapImage:u,strapColor:d="#111111",strapWidth:h=.65,metal:p="silver",gravity:g=1,damping:x=.5,elasticity:m=.5,breeze:f=.5,interactive:v=!0,intro:_=!0,className:y="",style:A})=>{let R=(0,Rr.useRef)(null),w=(0,Rr.useRef)(null),U=(0,Rr.useRef)(null);return w.current={frontImage:e,backImage:t,imageFit:n==="contain"?"contain":"cover",cardColor:i,orientation:s==="landscape"?"landscape":"portrait",finish:a,cornerRadius:r,size:o,anchor:l,strapLength:c,strapImage:u,strapColor:d,strapWidth:h,metal:p,gravity:g,damping:x,elasticity:m,breeze:f,interactive:v,intro:_},(0,Rr.useEffect)(()=>{U.current?.()}),(0,Rr.useEffect)(()=>{let E=R.current;if(!E)return;let S;try{S=new Zd({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}S.setClearColor(0,0),S.outputColorSpace=gn,S.toneMapping=od,S.toneMappingExposure=1;let D=0,H=0,W=B=>{D=Math.max(-1,Math.min(1,B.detail?.x||0)),H=Math.max(-1,Math.min(1,B.detail?.z||0)),mi()};E.parentElement.addEventListener("lanyardtilt",W);let k=S.domElement;k.className="lanyard-canvas",k.setAttribute("aria-hidden","true"),E.appendChild(k);let Y=Math.min(8,S.capabilities.getMaxAnisotropy()),q=new Ko,at=XU(S);q.environment=at.texture;let V=new En(sE,1,.1,200),gt=new sl(16777215,1.6);gt.position.set(-2.5,4,6);let Mt=new sl(16777215,.35);Mt.position.set(3,-1,4),q.add(gt,Mt);let At=new Map,Bt={front:null,back:null,strap:null},Zt=document.createElement("canvas"),re=document.createElement("canvas"),ne=document.createElement("canvas"),K=Pv(Zt,Y),et=Pv(re,Y),bt=Pv(ne,Y);bt.wrapS=ss,bt.wrapT=os;let Lt=qU(),wt=WU(),qt={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new N},foilFill:{value:new N},foilTop:{value:new N}},ge=B=>{Object.assign(B.uniforms,qt),B.vertexShader=B.vertexShader.replace("#include <common>",`#include <common>
${zU}`).replace("#include <project_vertex>",`#include <project_vertex>
${BU}`),B.fragmentShader=B.fragmentShader.replace("#include <common>",`#include <common>
${FU}`).replace("#include <opaque_fragment>",`${HU}
#include <opaque_fragment>`)},C=new Da({map:K,normalMap:Lt,normalScale:new vt(.06,.06)}),tt=new Da({map:et,normalMap:Lt,normalScale:new vt(.06,.06)});C.onBeforeCompile=ge,tt.onBeforeCompile=ge;let Q=new Da,Z=new il({metalness:1}),j=new Da({map:bt,normalMap:wt,normalScale:new vt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new Kt(.32,.32,.34),side:fi}),dt=new as,st=new Ve(void 0,Q),ht=new Ve(void 0,C),Pt=new Ve(void 0,tt),Ft=new Ve(new nl(hE,IU,18,72),Z);Ft.rotation.y=Math.PI/2-.7,dt.add(st,ht,Pt,Ft),q.add(dt);let T=kU(Hs),M=new Ve(T,j);M.frustumCulled=!1,q.add(M);let P=new as,X=new Ve(cE(Lv),Z);X.position.y=Kd+fu/2-.004;let nt=new Ve(new nl(Kd,.0105,14,40),Z);P.add(X,nt),q.add(P);let z=JU(),Rt=[],ct=new N,Ct=new N,Dt=new $o(Rt,!1,"centripetal"),it={width:1,height:1},ft=lE("portrait",.3),It={},Ut=Lv,yt=2,Vt=0,L=performance.now(),lt=0,mt=!0,Tt=!0,rt=!1,$=!1,Et=null,Gt=0,ve=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,oe=()=>{let B=w.current,ut=Iv(B.cardColor,[1,1,1]),_t=aE,pt=Math.round(aE*ft.height/ft.width);(Zt.width!==_t||Zt.height!==pt)&&(Zt.width=_t,Zt.height=pt,re.width=_t,re.height=pt,K.dispose(),et.dispose()),uE(Zt,Bt.front,ut,B.imageFit),uE(re,Bt.back||Bt.front,ut,B.imageFit),K.needsUpdate=!0,et.needsUpdate=!0,mi()},di=()=>{let B=w.current;yt=ZU(ne,Bt.strap,Iv(B.strapColor,[.07,.07,.07])),wt.repeat.set(2,2*yt),bt.dispose(),bt.needsUpdate=!0,mi()},pi=()=>{let B=w.current,ut=it.width/it.height,_t=ft.height/Ia(B.size,.15,.9),pt=ft.width/.72;_t*ut<pt&&(_t=pt/ut);let zt=_t*ut;V.aspect=ut,V.position.set(0,0,_t/2/Math.tan(sE*Math.PI/360)),V.lookAt(0,0,0),V.updateProjectionMatrix(),V.updateMatrixWorld(),qt.foilKey.value.set(-2.5,4,6).normalize().transformDirection(V.matrixWorldInverse),qt.foilFill.value.set(3,-1,4).normalize().transformDirection(V.matrixWorldInverse),qt.foilTop.value.set(.5,4.5,8).normalize().transformDirection(V.matrixWorldInverse);let Jt=((UU[B.anchor]??.5)-.5)*zt,ce=_t/2+.2,Xt=_t/2-_t*hu(.12,.42,Ia(B.strapLength,0,1))+(ft.hangY-ft.height/2);z.anchor.set(Jt,ce,0),jU(z,ft,ce-Xt),z.nodes[0].copy(z.anchor),z.previous[0].copy(z.anchor)},ml=()=>{let B=w.current,ut=`${B.orientation}|${B.cornerRadius}`;if(ut!==It.layoutKey){ft=lE(B.orientation,B.cornerRadius);let Xt=GU(ft);st.geometry.dispose(),ht.geometry.dispose(),Pt.geometry.dispose(),st.geometry=Xt.body,ht.geometry=Xt.face,Pt.geometry=Xt.face.clone(),ht.position.z=du/2+On+6e-4,Pt.rotation.y=Math.PI,Pt.position.z=-(du/2+On+6e-4),Ft.position.set(0,ft.ringY,0),It.framingKey=""}let _t=`${ut}|${B.size}|${B.anchor}|${B.strapLength}|${it.width}|${it.height}`;_t!==It.framingKey&&(pi(),rt?ut!==It.layoutKey&&zv(z,ft,!1):(zv(z,ft,B.intro&&!ve),rt=!0));let pt=`${B.frontImage}|${B.backImage}|${B.strapImage}`;if(pt!==It.imageKey){let Xt=++Gt;Promise.all([Ov(At,B.frontImage),Ov(At,B.backImage),Ov(At,B.strapImage)]).then(([Ot,be,ie])=>{!Tt||Xt!==Gt||(Bt.front=Ot,Bt.back=be,Bt.strap=ie,oe(),di())})}let zt=`${ut}|${B.cardColor}|${B.imageFit}`;zt!==It.faceKey&&oe(),B.strapColor!==It.strapColor&&di();let Jt=rE[B.finish]||rE.glossy,ce=Iv(B.cardColor,[1,1,1]);[C,tt].forEach(Xt=>{Xt.roughness=Jt.roughness,Xt.metalness=Jt.metalness,Xt.clearcoat=Jt.clearcoat,Xt.clearcoatRoughness=Jt.clearcoatRoughness,Xt.anisotropy=Jt.anisotropy}),qt.foilStrength.value=Jt.foil,qt.foilAspect.value=ft.height/ft.width,Q.color.setRGB(ce[0]*.92,ce[1]*.92,ce[2]*.92,gn),Q.roughness=Math.min(Jt.roughness,.35),Q.metalness=Jt.metalness,Q.clearcoat=1,Q.clearcoatRoughness=.08;let ue=oE[B.metal]||oE.silver;Z.color.set(ue.color),Z.roughness=ue.roughness,Ut=Lv*Ia(B.strapWidth,.4,2),Ut!==It.strapScale&&(X.geometry.dispose(),X.geometry=cE(Ut)),k.style.touchAction=B.interactive?"pan-y":"auto",It={layoutKey:ut,framingKey:_t,imageKey:pt,faceKey:zt,strapColor:B.strapColor,strapScale:Ut},mi()},Zn=Array.from({length:Hs},()=>new N),Oa=Array.from({length:Hs},()=>new N),pu=OU.map(B=>[Math.cos(B),Math.sin(B)]),Vi={tangent:new N,toCamera:new N,basis:new Ne,up:new N,across:new N,facing:new N,end:new N},Cr=()=>{let B=z.nodes[Ye],ut=Kd+fu+.05,_t=Ye-1;for(;_t>0&&z.nodes[_t].distanceTo(B)<ut*1.1;)_t--;let pt=Vi.up.subVectors(z.nodes[_t],B);pt.lengthSq()<1e-8&&pt.set(0,1,0).applyQuaternion(z.body.quaternion),pt.normalize(),ct.copy(B).addScaledVector(pt,ut),Ct.copy(B).addScaledVector(pt,Kd+fu*.35),Rt.length=0;for(let se=0;se<=_t;se++)Rt.push(z.nodes[se]);Rt.push(ct,Ct),Dt.updateArcLengths();for(let se=0;se<Hs;se++)Dt.getPointAt(se/(Hs-1),Zn[se]);let zt=Dt.getLength(),Jt=1-ct.distanceTo(Ct)/Math.max(zt,.001),ce=T.getAttribute("position"),ue=T.getAttribute("normal"),Xt=T.getAttribute("uv"),Ot=Qd.length,be=z.rest*Ye,ie=be/(Ut*yt),An=Ut/Math.pow(Math.max(1,zt/Math.max(be,.001)),.35),{tangent:Pn,toCamera:_n,across:$e,facing:he}=Vi;for(let se=0;se<Hs;se++){Pn.subVectors(Zn[Math.min(Hs-1,se+1)],Zn[Math.max(0,se-1)]),Pn.lengthSq()<1e-12&&Pn.set(0,-1,0),Pn.normalize(),_n.subVectors(V.position,Zn[se]).normalize();let Ge=Oa[se].crossVectors(_n,Pn);Ge.lengthSq()<1e-10&&Ge.copy(se>0?Oa[se-1]:Me.a.set(1,0,0)),Ge.normalize(),se>0&&Ge.dot(Oa[se-1])<0&&Ge.negate();let tn=-z.twist*Math.pow(Math.min(1,se/(Hs-1)/Jt),1.3);he.crossVectors(Pn,Ge),$e.copy(Ge).multiplyScalar(Math.cos(tn)).addScaledVector(he,Math.sin(tn)),he.crossVectors(Pn,$e);let en=Zn[se],Ml=(1-se/(Hs-1))*ie;for(let zn=0;zn<Ot;zn++){let tp=se*Ot+zn,ep=(Qd[zn]-.5)*An,[np,ip]=pu[zn];ce.setXYZ(tp,en.x+$e.x*ep,en.y+$e.y*ep,en.z+$e.z*ep),ue.setXYZ(tp,he.x*np+$e.x*ip,he.y*np+$e.y*ip,he.z*np+$e.z*ip),Xt.setXY(tp,Qd[zn],Ml)}}Vi.end.copy($e),ce.needsUpdate=!0,ue.needsUpdate=!0,Xt.needsUpdate=!0,$e.copy(Vi.end).addScaledVector(pt,-Vi.end.dot(pt)).normalize(),he.crossVectors($e,pt).normalize(),Vi.basis.makeBasis($e,pt,he),P.quaternion.setFromRotationMatrix(Vi.basis),P.position.copy(B)},gl=()=>{dt.position.copy(z.body.position),dt.quaternion.copy(z.body.quaternion),Cr(),S.render(q,V)},Dr=()=>{let B=w.current,ut=40*Ia(B.gravity,0,3),_t=Math.max(ut,20),pt=Ia(B.elasticity,0,1),zt=Ia(B.damping,0,1);return{tiltX:D,tiltZ:H,gravity:ut,hold:_t*hu(2.2,5.5,pt),stiffness:_t*10*Ye,spring:_t*hu(.1,.4,pt)*Ye,bandDamping:_t*hu(.3,.08,pt)*Ye,linearDrag:.25*Math.pow(16,zt),angularDrag:.5*Math.pow(12,zt),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:ve?0:Ia(B.breeze,0,1)}},vl=B=>{if(Vt=0,!Tt)return;let ut=Math.min(1/30,Math.max(1/240,(B-L)/1e3));L=B,lt+=ut;let _t=Dr();$U(z,ut,_t,lt);let pt=z.body;Number.isFinite(pt.position.x+pt.position.y+pt.position.z+pt.quaternion.w)||(z.grab=null,zv(z,ft,!1)),gl();let zt=z.calm>1.2&&!z.grab&&_t.breeze===0;mt&&!zt&&(Vt=requestAnimationFrame(vl))},mi=()=>{Vt||!mt||!Tt||(z.calm=0,L=performance.now(),Vt=requestAnimationFrame(vl))},_l=new iu,mu=new vt,yl=B=>{let ut=k.getBoundingClientRect();mu.set((B.clientX-ut.left)/ut.width*2-1,-((B.clientY-ut.top)/ut.height)*2+1),_l.setFromCamera(mu,V)},xl=()=>(dt.updateMatrixWorld(),_l.intersectObjects([st,ht,Pt],!1)[0]||null),Sl=B=>{k.style.cursor!==B&&(k.style.cursor=B)},$d=B=>{let ut=z.body,_t=Me.a.set(0,1,0).applyQuaternion(ut.quaternion),pt=z.turn>0?-1:1;if(z.turn===0){let zt=Me.c.subVectors(B,V.position).normalize();pt=Me.b.subVectors(B,ut.position).cross(zt).dot(_t)<0?-1:1}z.turn=z.turn===0?Math.PI*pt:0,ut.angular.addScaledVector(_t,PU*pt)},b=B=>{if(!w.current.interactive||B.button>0)return;yl(B);let ut=xl();ut&&(z.grab={local:ut.point.clone().sub(z.body.position).applyQuaternion(z.body.quaternion.clone().invert()),rotation:z.body.quaternion.clone(),reach:ut.distance,from:ut.point.clone(),target:ut.point.clone()},Et={x:B.clientX,y:B.clientY,time:performance.now(),point:ut.point.clone()},k.setPointerCapture?.(B.pointerId),Sl("grabbing"),B.preventDefault(),mi())},I=B=>{if(w.current.interactive){if(yl(B),z.grab){Et&&Math.hypot(B.clientX-Et.x,B.clientY-Et.y)>6&&(Et=null),_l.ray.at(z.grab.reach,z.grab.target),mi();return}B.pointerType!=="touch"&&($=!!xl(),Sl($?"grab":""))}},F=B=>{z.grab&&(z.grab=null,Et&&B.type==="pointerup"&&performance.now()-Et.time<450&&$d(Et.point),Et=null,k.releasePointerCapture?.(B.pointerId),Sl($&&B.pointerType!=="touch"?"grab":""),mi())},G=B=>{!w.current.interactive||B.touches.length!==1||(yl(B.touches[0]),xl()&&B.preventDefault())};k.addEventListener("pointerdown",b),k.addEventListener("pointermove",I),k.addEventListener("pointerup",F),k.addEventListener("pointercancel",F),k.addEventListener("lostpointercapture",F),k.addEventListener("touchstart",G,{passive:!1});let O=()=>{it.width=Math.max(1,E.clientWidth),it.height=Math.max(1,E.clientHeight),S.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),S.setSize(it.width,it.height,!1),ml(),gl()},ot=new ResizeObserver(O);ot.observe(E);let xt=new IntersectionObserver(([B])=>{mt=B.isIntersecting,mt&&mi()});xt.observe(E);let Nt=()=>{document.hidden||mi()};return document.addEventListener("visibilitychange",Nt),U.current=ml,O(),()=>{Tt=!1,E.parentElement?.removeEventListener("lanyardtilt",W),cancelAnimationFrame(Vt),U.current=null,ot.disconnect(),xt.disconnect(),document.removeEventListener("visibilitychange",Nt),k.removeEventListener("pointerdown",b),k.removeEventListener("pointermove",I),k.removeEventListener("pointerup",F),k.removeEventListener("pointercancel",F),k.removeEventListener("lostpointercapture",F),k.removeEventListener("touchstart",G),[st,ht,Pt,Ft,X,nt,M].forEach(B=>B.geometry?.dispose()),[C,tt,Q,Z,j].forEach(B=>B.dispose()),[K,et,bt,Lt,wt].forEach(B=>B.dispose()),at.dispose(),S.dispose(),k.parentNode&&k.parentNode.removeChild(k)}},[]),React.createElement("div",{ref:R,className:`lanyard ${y}`.trim(),style:A})},gE=tN;var Hv=(e,t)=>{let n=document.createElement("canvas");return n.width=e,n.height=t,n},eN=e=>new Promise(t=>e.toBlob(n=>t(URL.createObjectURL(n)),"image/png"));function nN(e,t,n,i,s,a){let r=Math.max(s/t.width,a/t.height),o=s/r,l=a/r;e.drawImage(t,(t.width-o)/2,(t.height-l)*.3,o,l,n,i,s,a)}async function RO(e,t,n={}){let i=await new Promise((h,p)=>{let g=new Image;g.onload=()=>h(g),g.onerror=p,g.src=t}),s=Hv(1024,1440),a=Hv(1024,1440),r=Hv(1536,256),o=s.getContext("2d");o.fillStyle="#111111",o.fillRect(0,0,1024,1440),o.fillStyle="#ff4925",o.fillRect(0,0,1024,196),o.fillStyle="#111111",o.font="bold 38px Arial",o.fillText("OMAR / CREATIVE STUDIO",62,124),nN(o,i,36,218,952,932),o.fillStyle="#ff4925",o.fillRect(62,1185,92,7),o.fillStyle="#ffffff",o.font="bold 62px Arial",o.fillText("OMAR AL NAJJAR",62,1282),o.font="24px Arial",o.fillStyle="#b8b8b8",o.fillText("DESIGNER  /  BRANDING & PACKAGING",64,1346),o.fillStyle="#ff4925",o.font="22px Arial",o.fillText("01",925,1389),o=a.getContext("2d"),o.fillStyle="#ff4925",o.fillRect(0,0,1024,1440),o.fillStyle="#111111",o.font="bold 184px Arial",o.fillText("OMAR",58,460),o.font="bold 58px Arial",o.fillText("AL NAJJAR",68,540),o.fillRect(68,610,888,4),o.font="30px Arial",["VISUAL IDENTITY","PACKAGING DESIGN","DIGITAL EXPERIENCES"].forEach((h,p)=>o.fillText(h,70,725+p*65)),o.font="bold 27px Arial",o.fillText("IDEAS THAT MAKE AN IMPACT.",70,1280),o.font="22px Arial",o.fillText("CREATIVE STUDIO  /  ERBIL",70,1340),o=r.getContext("2d"),o.fillStyle="#ff4925",o.fillRect(0,0,1536,256),o.fillStyle="#111111",o.font="bold 75px Arial",o.fillText("OMAR AL NAJJAR",50,155),o.font="bold 43px Arial",o.fillText("CREATIVE STUDIO",865,151),o.fillRect(0,12,1536,5),o.fillRect(0,239,1536,5);let[l,c,u]=await Promise.all([s,a,r].map(eN)),d=(0,_E.createRoot)(e);if((0,yE.flushSync)(()=>d.render(vE.default.createElement(gE,{frontImage:l,backImage:c,strapImage:u,cardColor:"#111111",finish:"glossy",size:.57,strapLength:.48,strapWidth:.8,metal:"silver",gravity:1,damping:.5,elasticity:.5,breeze:n.reduced?0:.15,interactive:!n.reduced,intro:!n.reduced,style:{width:"100%",height:"100%"}}))),await new Promise(h=>requestAnimationFrame(()=>requestAnimationFrame(h))),!e.querySelector("canvas")){d.unmount();let h=document.createElement("img");h.src=l,h.alt="Omar Al Najjar identity card",h.className="lanyard-fallback-design",e.append(h)}return d}export{RO as mountLanyard};
/*! For license information please see lanyard-original.js.LEGAL.txt */
