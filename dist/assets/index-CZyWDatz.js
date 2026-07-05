(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var uh={exports:{}},Bo={};var t_;function KS(){if(t_)return Bo;t_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Bo.Fragment=t,Bo.jsx=i,Bo.jsxs=i,Bo}var e_;function QS(){return e_||(e_=1,uh.exports=KS()),uh.exports}var mv=QS(),ch={exports:{}},ue={};var n_;function JS(){if(n_)return ue;n_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function S(U,Z,yt){this.props=U,this.context=Z,this.refs=E,this.updater=yt||T}S.prototype.isReactComponent={},S.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=S.prototype;function P(U,Z,yt){this.props=U,this.context=Z,this.refs=E,this.updater=yt||T}var C=P.prototype=new F;C.constructor=P,w(C,S.prototype),C.isPureReactComponent=!0;var B=Array.isArray;function N(){}var L={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function O(U,Z,yt){var Ct=yt.ref;return{$$typeof:r,type:U,key:Z,ref:Ct!==void 0?Ct:null,props:yt}}function K(U,Z){return O(U.type,Z,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function J(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(yt){return Z[yt]})}var ht=/\/+/g;function _t(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?J(""+U.key):Z.toString(36)}function j(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(N,N):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function z(U,Z,yt,Ct,Tt){var it=typeof U;(it==="undefined"||it==="boolean")&&(U=null);var St=!1;if(U===null)St=!0;else switch(it){case"bigint":case"string":case"number":St=!0;break;case"object":switch(U.$$typeof){case r:case t:St=!0;break;case v:return St=U._init,z(St(U._payload),Z,yt,Ct,Tt)}}if(St)return Tt=Tt(U),St=Ct===""?"."+_t(U,0):Ct,B(Tt)?(yt="",St!=null&&(yt=St.replace(ht,"$&/")+"/"),z(Tt,Z,yt,"",function(ie){return ie})):Tt!=null&&(V(Tt)&&(Tt=K(Tt,yt+(Tt.key==null||U&&U.key===Tt.key?"":(""+Tt.key).replace(ht,"$&/")+"/")+St)),Z.push(Tt)),1;St=0;var Mt=Ct===""?".":Ct+":";if(B(U))for(var Ht=0;Ht<U.length;Ht++)Ct=U[Ht],it=Mt+_t(Ct,Ht),St+=z(Ct,Z,yt,it,Tt);else if(Ht=M(U),typeof Ht=="function")for(U=Ht.call(U),Ht=0;!(Ct=U.next()).done;)Ct=Ct.value,it=Mt+_t(Ct,Ht++),St+=z(Ct,Z,yt,it,Tt);else if(it==="object"){if(typeof U.then=="function")return z(j(U),Z,yt,Ct,Tt);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return St}function H(U,Z,yt){if(U==null)return U;var Ct=[],Tt=0;return z(U,Ct,"","",function(it){return Z.call(yt,it,Tt++)}),Ct}function tt(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(yt){(U._status===0||U._status===-1)&&(U._status=1,U._result=yt)},function(yt){(U._status===0||U._status===-1)&&(U._status=2,U._result=yt)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var pt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},vt={map:H,forEach:function(U,Z,yt){H(U,function(){Z.apply(this,arguments)},yt)},count:function(U){var Z=0;return H(U,function(){Z++}),Z},toArray:function(U){return H(U,function(Z){return Z})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ue.Activity=x,ue.Children=vt,ue.Component=S,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=P,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ue.__COMPILER_RUNTIME={__proto__:null,c:function(U){return L.H.useMemoCache(U)}},ue.cache=function(U){return function(){return U.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(U,Z,yt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ct=w({},U.props),Tt=U.key;if(Z!=null)for(it in Z.key!==void 0&&(Tt=""+Z.key),Z)!b.call(Z,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&Z.ref===void 0||(Ct[it]=Z[it]);var it=arguments.length-2;if(it===1)Ct.children=yt;else if(1<it){for(var St=Array(it),Mt=0;Mt<it;Mt++)St[Mt]=arguments[Mt+2];Ct.children=St}return O(U.type,Tt,Ct)},ue.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ue.createElement=function(U,Z,yt){var Ct,Tt={},it=null;if(Z!=null)for(Ct in Z.key!==void 0&&(it=""+Z.key),Z)b.call(Z,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Tt[Ct]=Z[Ct]);var St=arguments.length-2;if(St===1)Tt.children=yt;else if(1<St){for(var Mt=Array(St),Ht=0;Ht<St;Ht++)Mt[Ht]=arguments[Ht+2];Tt.children=Mt}if(U&&U.defaultProps)for(Ct in St=U.defaultProps,St)Tt[Ct]===void 0&&(Tt[Ct]=St[Ct]);return O(U,it,Tt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(U){return{$$typeof:d,render:U}},ue.isValidElement=V,ue.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:tt}},ue.memo=function(U,Z){return{$$typeof:p,type:U,compare:Z===void 0?null:Z}},ue.startTransition=function(U){var Z=L.T,yt={};L.T=yt;try{var Ct=U(),Tt=L.S;Tt!==null&&Tt(yt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(N,pt)}catch(it){pt(it)}finally{Z!==null&&yt.types!==null&&(Z.types=yt.types),L.T=Z}},ue.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ue.use=function(U){return L.H.use(U)},ue.useActionState=function(U,Z,yt){return L.H.useActionState(U,Z,yt)},ue.useCallback=function(U,Z){return L.H.useCallback(U,Z)},ue.useContext=function(U){return L.H.useContext(U)},ue.useDebugValue=function(){},ue.useDeferredValue=function(U,Z){return L.H.useDeferredValue(U,Z)},ue.useEffect=function(U,Z){return L.H.useEffect(U,Z)},ue.useEffectEvent=function(U){return L.H.useEffectEvent(U)},ue.useId=function(){return L.H.useId()},ue.useImperativeHandle=function(U,Z,yt){return L.H.useImperativeHandle(U,Z,yt)},ue.useInsertionEffect=function(U,Z){return L.H.useInsertionEffect(U,Z)},ue.useLayoutEffect=function(U,Z){return L.H.useLayoutEffect(U,Z)},ue.useMemo=function(U,Z){return L.H.useMemo(U,Z)},ue.useOptimistic=function(U,Z){return L.H.useOptimistic(U,Z)},ue.useReducer=function(U,Z,yt){return L.H.useReducer(U,Z,yt)},ue.useRef=function(U){return L.H.useRef(U)},ue.useState=function(U){return L.H.useState(U)},ue.useSyncExternalStore=function(U,Z,yt){return L.H.useSyncExternalStore(U,Z,yt)},ue.useTransition=function(){return L.H.useTransition()},ue.version="19.2.7",ue}var i_;function Wd(){return i_||(i_=1,ch.exports=JS()),ch.exports}var Rn=Wd(),fh={exports:{}},Fo={},hh={exports:{}},dh={};var a_;function jS(){return a_||(a_=1,(function(r){function t(z,H){var tt=z.length;z.push(H);t:for(;0<tt;){var pt=tt-1>>>1,vt=z[pt];if(0<l(vt,H))z[pt]=H,z[tt]=vt,tt=pt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var H=z[0],tt=z.pop();if(tt!==H){z[0]=tt;t:for(var pt=0,vt=z.length,U=vt>>>1;pt<U;){var Z=2*(pt+1)-1,yt=z[Z],Ct=Z+1,Tt=z[Ct];if(0>l(yt,tt))Ct<vt&&0>l(Tt,yt)?(z[pt]=Tt,z[Ct]=tt,pt=Ct):(z[pt]=yt,z[Z]=tt,pt=Z);else if(Ct<vt&&0>l(Tt,tt))z[pt]=Tt,z[Ct]=tt,pt=Ct;else break t}}return H}function l(z,H){var tt=z.sortIndex-H.sortIndex;return tt!==0?tt:z.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,x=null,g=3,M=!1,T=!1,w=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=z)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function B(z){if(w=!1,C(z),!T)if(i(m)!==null)T=!0,N||(N=!0,J());else{var H=i(p);H!==null&&j(B,H.startTime-z)}}var N=!1,L=-1,b=5,O=-1;function K(){return E?!0:!(r.unstable_now()-O<b)}function V(){if(E=!1,N){var z=r.unstable_now();O=z;var H=!0;try{t:{T=!1,w&&(w=!1,F(L),L=-1),M=!0;var tt=g;try{e:{for(C(z),x=i(m);x!==null&&!(x.expirationTime>z&&K());){var pt=x.callback;if(typeof pt=="function"){x.callback=null,g=x.priorityLevel;var vt=pt(x.expirationTime<=z);if(z=r.unstable_now(),typeof vt=="function"){x.callback=vt,C(z),H=!0;break e}x===i(m)&&s(m),C(z)}else s(m);x=i(m)}if(x!==null)H=!0;else{var U=i(p);U!==null&&j(B,U.startTime-z),H=!1}}break t}finally{x=null,g=tt,M=!1}H=void 0}}finally{H?J():N=!1}}}var J;if(typeof P=="function")J=function(){P(V)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,_t=ht.port2;ht.port1.onmessage=V,J=function(){_t.postMessage(null)}}else J=function(){S(V,0)};function j(z,H){L=S(function(){z(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(z){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var tt=g;g=H;try{return z()}finally{g=tt}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var tt=g;g=z;try{return H()}finally{g=tt}},r.unstable_scheduleCallback=function(z,H,tt){var pt=r.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?pt+tt:pt):tt=pt,z){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=tt+vt,z={id:v++,callback:H,priorityLevel:z,startTime:tt,expirationTime:vt,sortIndex:-1},tt>pt?(z.sortIndex=tt,t(p,z),i(m)===null&&z===i(p)&&(w?(F(L),L=-1):w=!0,j(B,tt-pt))):(z.sortIndex=vt,t(m,z),T||M||(T=!0,N||(N=!0,J()))),z},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(z){var H=g;return function(){var tt=g;g=H;try{return z.apply(this,arguments)}finally{g=tt}}}})(dh)),dh}var s_;function $S(){return s_||(s_=1,hh.exports=jS()),hh.exports}var ph={exports:{}},Dn={};var r_;function tM(){if(r_)return Dn;r_=1;var r=Wd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Dn.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.7",Dn}var o_;function eM(){if(o_)return ph.exports;o_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ph.exports=tM(),ph.exports}var l_;function nM(){if(l_)return Fo;l_=1;var r=$S(),t=Wd(),i=eM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return m(c),e;if(h===o)return m(c),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=h;else{for(var _=!1,R=c.child;R;){if(R===a){_=!0,a=c,o=h;break}if(R===o){_=!0,o=c,a=h;break}R=R.sibling}if(!_){for(R=h.child;R;){if(R===a){_=!0,a=h,o=c;break}if(R===o){_=!0,o=h,a=c;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),P=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case B:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case P:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var j=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},pt=[],vt=-1;function U(e){return{current:e}}function Z(e){0>vt||(e.current=pt[vt],pt[vt]=null,vt--)}function yt(e,n){vt++,pt[vt]=e.current,e.current=n}var Ct=U(null),Tt=U(null),it=U(null),St=U(null);function Mt(e,n){switch(yt(it,n),yt(Tt,e),yt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?E0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=E0(n),e=b0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Ct),yt(Ct,e)}function Ht(){Z(Ct),Z(Tt),Z(it)}function ie(e){e.memoizedState!==null&&yt(St,e);var n=Ct.current,a=b0(n,e.type);n!==a&&(yt(Tt,e),yt(Ct,a))}function Jt(e){Tt.current===e&&(Z(Ct),Z(Tt)),St.current===e&&(Z(St),Lo._currentValue=tt)}var Ve,fe;function ve(e){if(Ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ve=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+e+fe}var xe=!1;function pe(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var ot=ut}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ut){ot=ut}e.call(xt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),_=h[0],R=h[1];if(_&&R){var I=_.split(`
`),nt=R.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===nt.length)for(o=I.length-1,c=nt.length-1;1<=o&&0<=c&&I[o]!==nt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==nt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==nt[c]){var dt=`
`+I[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=c);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ve(a):""}function Ze(e,n){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return ve("Activity");default:return""}}function Ke(e){try{var n="",a=null;do n+=Ze(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var At=Object.prototype.hasOwnProperty,zt=r.unstable_scheduleCallback,Qt=r.unstable_cancelCallback,le=r.unstable_shouldYield,G=r.unstable_requestPaint,Se=r.unstable_now,re=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,y=r.unstable_UserBlockingPriority,q=r.unstable_NormalPriority,$=r.unstable_LowPriority,lt=r.unstable_IdlePriority,Rt=r.log,Dt=r.unstable_setDisableYieldValue,ft=null,ct=null;function bt(e){if(typeof Rt=="function"&&Dt(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(ft,e)}catch{}}var Nt=Math.clz32?Math.clz32:$t,Lt=Math.log,Ot=Math.LN2;function $t(e){return e>>>=0,e===0?32:31-(Lt(e)/Ot|0)|0}var te=256,oe=262144,k=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?c=wt(o):(_&=R,_!==0?c=wt(_):a||(a=R&~e,a!==0&&(c=wt(a))))):(R=o&~h,R!==0?c=wt(R):_!==0?c=wt(_):a||(a=o&~e,a!==0&&(c=wt(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Ut(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function It(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var e=k;return k<<=1,(k&62914560)===0&&(k=4194304),e}function Zt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Xt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function je(e,n,a,o,c,h){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,nt=e.hiddenUpdates;for(a=_&~a;0<a;){var dt=31-Nt(a),xt=1<<dt;R[dt]=0,I[dt]=-1;var ot=nt[dt];if(ot!==null)for(nt[dt]=null,dt=0;dt<ot.length;dt++){var ut=ot[dt];ut!==null&&(ut.lane&=-536870913)}a&=~xt}o!==0&&ze(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(_&~n))}function ze(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Nt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Jn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Nt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function jn(e,n){var a=n&-n;return a=(a&42)!==0?1:qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Y0(e.type))}function Gs(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Pi=Math.random().toString(36).slice(2),un="__reactFiber$"+Pi,yn="__reactProps$"+Pi,In="__reactContainer$"+Pi,cs="__reactEvents$"+Pi,rl="__reactListeners$"+Pi,ol="__reactHandles$"+Pi,fs="__reactResources$"+Pi,Ra="__reactMarker$"+Pi;function Ca(e){delete e[un],delete e[yn],delete e[cs],delete e[rl],delete e[ol]}function Qi(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[In]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=U0(e);e!==null;){if(a=e[un])return a;e=U0(e)}return n}e=a,a=e.parentNode}return null}function Ji(e){if(e=e[un]||e[In]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function hs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function wa(e){var n=e[fs];return n||(n=e[fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[Ra]=!0}var ll=new Set,A={};function Y(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(A[e]=n,e=0;e<n.length;e++)ll.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},Bt={};function Vt(e){return At.call(Bt,e)?!0:At.call(st,e)?!1:at.test(e)?Bt[e]=!0:(st[e]=!0,!1)}function Pt(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,h.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function De(e){if(!e._valueTracker){var n=he(e)?"checked":"value";e._valueTracker=jt(e,n,""+e[n])}}function $e(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=he(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Be=/[\n"\\]/g;function Fe(e){return e.replace(Be,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(e,n,a,o,c,h,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ee(n)):e.value!==""+ee(n)&&(e.value=""+ee(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Me(e,_,ee(n)):a!=null?Me(e,_,ee(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ee(R):e.removeAttribute("name")}function wn(e,n,a,o,c,h,_,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){De(e);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),De(e)}function Me(e,n,a){n==="number"&&qe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gn(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function $n(e,n,a){if(n!=null&&(n=""+ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ee(a):""}function Ei(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(j(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ee(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),De(e)}function ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ie=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ie.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function bi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&tn(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&tn(e,h,n[h])}function Oe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Da=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ds(e){return Da.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var sc=null;function rc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,Xs=null;function yp(e){var n=Ji(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Gt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[yn]||null;if(!c)throw Error(s(90));Gt(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&$e(o)}break t;case"textarea":$n(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gn(e,!!a.multiple,n,!1)}}}var oc=!1;function Ep(e,n,a){if(oc)return e(n,a);oc=!0;try{var o=e(n);return o}finally{if(oc=!1,(Vs!==null||Xs!==null)&&(Kl(),Vs&&(n=Vs,e=Xs,Xs=Vs=null,yp(n),e)))for(n=0;n<e.length;n++)yp(e[n])}}function Kr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=!1;if($i)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){lc=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{lc=!1}var Ua=null,uc=null,ul=null;function bp(){if(ul)return ul;var e,n=uc,a=n.length,o,c="value"in Ua?Ua.value:Ua.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===c[h-o];o++);return ul=c.slice(e,1<o?1-o:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function Tp(){return!1}function Hn(e){function n(a,o,c,h,_){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fl:Tp,this.isPropagationStopped=Tp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Hn(ps),Jr=x({},ps,{view:0,detail:0}),Yv=Hn(Jr),cc,fc,jr,dl=x({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(cc=e.screenX-jr.screenX,fc=e.screenY-jr.screenY):fc=cc=0,jr=e),cc)},movementY:function(e){return"movementY"in e?e.movementY:fc}}),Ap=Hn(dl),Zv=x({},dl,{dataTransfer:0}),Kv=Hn(Zv),Qv=x({},Jr,{relatedTarget:0}),hc=Hn(Qv),Jv=x({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Hn(Jv),$v=x({},ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tx=Hn($v),ex=x({},ps,{data:0}),Rp=Hn(ex),nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ax[e])?!!n[e]:!1}function dc(){return sx}var rx=x({},Jr,{key:function(e){if(e.key){var n=nx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ix[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ox=Hn(rx),lx=x({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Hn(lx),ux=x({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),cx=Hn(ux),fx=x({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=Hn(fx),dx=x({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),px=Hn(dx),mx=x({},ps,{newState:0,oldState:0}),gx=Hn(mx),_x=[9,13,27,32],pc=$i&&"CompositionEvent"in window,$r=null;$i&&"documentMode"in document&&($r=document.documentMode);var vx=$i&&"TextEvent"in window&&!$r,wp=$i&&(!pc||$r&&8<$r&&11>=$r),Dp=" ",Up=!1;function Np(e,n){switch(e){case"keyup":return _x.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function xx(e,n){switch(e){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Up=!0,Dp);case"textInput":return e=n.data,e===Dp&&Up?null:e;default:return null}}function Sx(e,n){if(ks)return e==="compositionend"||!pc&&Np(e,n)?(e=bp(),ul=uc=Ua=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wp&&n.locale!=="ko"?null:n.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Mx[e.type]:n==="textarea"}function Pp(e,n,a,o){Vs?Xs?Xs.push(o):Xs=[o]:Vs=o,n=nu(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var to=null,eo=null;function yx(e){_0(e,0)}function pl(e){var n=hs(e);if($e(n))return e}function zp(e,n){if(e==="change")return n}var Bp=!1;if($i){var mc;if($i){var gc="oninput"in document;if(!gc){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),gc=typeof Fp.oninput=="function"}mc=gc}else mc=!1;Bp=mc&&(!document.documentMode||9<document.documentMode)}function Ip(){to&&(to.detachEvent("onpropertychange",Hp),eo=to=null)}function Hp(e){if(e.propertyName==="value"&&pl(eo)){var n=[];Pp(n,eo,e,rc(e)),Ep(yx,n)}}function Ex(e,n,a){e==="focusin"?(Ip(),to=n,eo=a,to.attachEvent("onpropertychange",Hp)):e==="focusout"&&Ip()}function bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(eo)}function Tx(e,n){if(e==="click")return pl(n)}function Ax(e,n){if(e==="input"||e==="change")return pl(n)}function Rx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:Rx;function no(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!At.call(n,c)||!ei(e[c],n[c]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,n){var a=Gp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gp(a)}}function Xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=qe(e.document)}return n}function _c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Cx=$i&&"documentMode"in document&&11>=document.documentMode,Ws=null,vc=null,io=null,xc=!1;function Wp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||Ws==null||Ws!==qe(o)||(o=Ws,"selectionStart"in o&&_c(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=nu(vc,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ws)))}function ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Sc={},qp={};$i&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function gs(e){if(Sc[e])return Sc[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Sc[e]=n[a];return e}var Yp=gs("animationend"),Zp=gs("animationiteration"),Kp=gs("animationstart"),wx=gs("transitionrun"),Dx=gs("transitionstart"),Ux=gs("transitioncancel"),Qp=gs("transitionend"),Jp=new Map,Mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mc.push("scrollEnd");function Ti(e,n){Jp.set(e,n),Y(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],Ys=0,yc=0;function gl(){for(var e=Ys,n=yc=Ys=0;n<e;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var c=di[n];di[n++]=null;var h=di[n];if(di[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}h!==0&&jp(a,c,h)}}function _l(e,n,a,o){di[Ys++]=e,di[Ys++]=n,di[Ys++]=a,di[Ys++]=o,yc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ec(e,n,a,o){return _l(e,n,a,o),vl(e)}function _s(e,n){return _l(e,null,null,n),vl(e)}function jp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Nt(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function vl(e){if(50<Ao)throw Ao=0,Lf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function Nx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new Nx(e,n,a,o)}function bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,c,h){var _=0;if(o=e,typeof e=="function")bc(e)&&(_=1);else if(typeof e=="string")_=BS(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ni(31,a,n,c),e.elementType=O,e.lanes=h,e;case w:return vs(a.children,c,h,n);case E:_=8,c|=24;break;case S:return e=ni(12,a,n,c|2),e.elementType=S,e.lanes=h,e;case B:return e=ni(13,a,n,c),e.elementType=B,e.lanes=h,e;case N:return e=ni(19,a,n,c),e.elementType=N,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:_=10;break t;case F:_=9;break t;case C:_=11;break t;case L:_=14;break t;case b:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ni(_,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function vs(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function Tc(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function tm(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function Ac(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var em=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=em.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ke(n)},em.set(e,n),n)}return{value:e,source:n,stack:Ke(n)}}var Ks=[],Qs=0,Sl=null,ao=0,mi=[],gi=0,Na=null,Bi=1,Fi="";function ea(e,n){Ks[Qs++]=ao,Ks[Qs++]=Sl,Sl=e,ao=n}function nm(e,n,a){mi[gi++]=Bi,mi[gi++]=Fi,mi[gi++]=Na,Na=e;var o=Bi;e=Fi;var c=32-Nt(o)-1;o&=~(1<<c),a+=1;var h=32-Nt(n)+c;if(30<h){var _=c-c%5;h=(o&(1<<_)-1).toString(32),o>>=_,c-=_,Bi=1<<32-Nt(n)+c|a<<c|o,Fi=h+e}else Bi=1<<h|a<<c|o,Fi=e}function Rc(e){e.return!==null&&(ea(e,1),nm(e,1,0))}function Cc(e){for(;e===Sl;)Sl=Ks[--Qs],Ks[Qs]=null,ao=Ks[--Qs],Ks[Qs]=null;for(;e===Na;)Na=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null,Bi=mi[--gi],mi[gi]=null}function im(e,n){mi[gi++]=Bi,mi[gi++]=Fi,mi[gi++]=Na,Bi=n.id,Fi=n.overflow,Na=e}var En=null,Qe=null,Ce=!1,La=null,_i=!1,wc=Error(s(519));function Oa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(pi(n,e)),wc}function am(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[yn]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)Ee(Co[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),wn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||M0(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Oa(e,!0)}function sm(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:En=En.return}}function Js(e){if(e!==En)return!1;if(!Ce)return sm(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zf(e.type,e.memoizedProps)),a=!a),a&&Qe&&Oa(e),sm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=D0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=D0(e)}else n===27?(n=Qe,Za(e.type)?(e=$f,$f=null,Qe=e):Qe=n):Qe=En?xi(e.stateNode.nextSibling):null;return!0}function xs(){Qe=En=null,Ce=!1}function Dc(){var e=La;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),La=null),e}function so(e){La===null?La=[e]:La.push(e)}var Uc=U(null),Ss=null,na=null;function Pa(e,n,a){yt(Uc,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=Uc.current,Z(Uc)}function Nc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Lc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var _=c.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=c;for(var I=0;I<n.length;I++)if(R.context===n[I]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),Nc(h.return,a,e),o||(_=null);break t}h=R.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,h=_.alternate,h!==null&&(h.lanes|=a),Nc(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function js(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=c.type;ei(c.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(c===St.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}c=c.return}e!==null&&Lc(n,e,a,o),n.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){Ss=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return rm(Ss,e)}function yl(e,n){return Ss===null&&Ms(e),rm(e,n)}function rm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var Lx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ox=r.unstable_scheduleCallback,Px=r.unstable_NormalPriority,fn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oc(){return{controller:new Lx,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&Ox(Px,function(){e.controller.abort()})}var oo=null,Pc=0,$s=0,tr=null;function zx(e,n){if(oo===null){var a=oo=[];Pc=0,$s=If(),tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Pc++,n.then(om,om),n}function om(){if(--Pc===0&&oo!==null){tr!==null&&(tr.status="fulfilled");var e=oo;oo=null,$s=0,tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Bx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var lm=z.S;z.S=function(e,n){Wg=Se(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zx(e,n),lm!==null&&lm(e,n)};var ys=U(null);function zc(){var e=ys.current;return e!==null?e:Ye.pooledCache}function El(e,n){n===null?yt(ys,ys.current):yt(ys,n.pool)}function um(){var e=zc();return e===null?null:{parent:fn._currentValue,pool:e}}var er=Error(s(460)),Bc=Error(s(474)),bl=Error(s(542)),Tl={then:function(){}};function cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e}throw bs=n,er}}function Es(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(bs=a,er):a}}var bs=null;function hm(){if(bs===null)throw Error(s(459));var e=bs;return bs=null,e}function dm(e){if(e===er||e===bl)throw Error(s(483))}var nr=null,lo=0;function Al(e){var n=lo;return lo+=1,nr===null&&(nr=[]),fm(nr,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pm(e){function n(Q,X){if(e){var et=Q.deletions;et===null?(Q.deletions=[X],Q.flags|=16):et.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function c(Q,X){return Q=ta(Q,X),Q.index=0,Q.sibling=null,Q}function h(Q,X,et){return Q.index=et,e?(et=Q.alternate,et!==null?(et=et.index,et<X?(Q.flags|=67108866,X):et):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function _(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,et,gt){return X===null||X.tag!==6?(X=Tc(et,Q.mode,gt),X.return=Q,X):(X=c(X,et),X.return=Q,X)}function I(Q,X,et,gt){var ne=et.type;return ne===w?dt(Q,X,et.props.children,gt,et.key):X!==null&&(X.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===b&&Es(ne)===X.type)?(X=c(X,et.props),uo(X,et),X.return=Q,X):(X=xl(et.type,et.key,et.props,null,Q.mode,gt),uo(X,et),X.return=Q,X)}function nt(Q,X,et,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Ac(et,Q.mode,gt),X.return=Q,X):(X=c(X,et.children||[]),X.return=Q,X)}function dt(Q,X,et,gt,ne){return X===null||X.tag!==7?(X=vs(et,Q.mode,gt,ne),X.return=Q,X):(X=c(X,et),X.return=Q,X)}function xt(Q,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Tc(""+X,Q.mode,et),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return et=xl(X.type,X.key,X.props,null,Q.mode,et),uo(et,X),et.return=Q,et;case T:return X=Ac(X,Q.mode,et),X.return=Q,X;case b:return X=Es(X),xt(Q,X,et)}if(j(X)||J(X))return X=vs(X,Q.mode,et,null),X.return=Q,X;if(typeof X.then=="function")return xt(Q,Al(X),et);if(X.$$typeof===P)return xt(Q,yl(Q,X),et);Rl(Q,X)}return null}function ot(Q,X,et,gt){var ne=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ne!==null?null:R(Q,X,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===ne?I(Q,X,et,gt):null;case T:return et.key===ne?nt(Q,X,et,gt):null;case b:return et=Es(et),ot(Q,X,et,gt)}if(j(et)||J(et))return ne!==null?null:dt(Q,X,et,gt,null);if(typeof et.then=="function")return ot(Q,X,Al(et),gt);if(et.$$typeof===P)return ot(Q,X,yl(Q,et),gt);Rl(Q,et)}return null}function ut(Q,X,et,gt,ne){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Q=Q.get(et)||null,R(X,Q,""+gt,ne);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return Q=Q.get(gt.key===null?et:gt.key)||null,I(X,Q,gt,ne);case T:return Q=Q.get(gt.key===null?et:gt.key)||null,nt(X,Q,gt,ne);case b:return gt=Es(gt),ut(Q,X,et,gt,ne)}if(j(gt)||J(gt))return Q=Q.get(et)||null,dt(X,Q,gt,ne,null);if(typeof gt.then=="function")return ut(Q,X,et,Al(gt),ne);if(gt.$$typeof===P)return ut(Q,X,et,yl(X,gt),ne);Rl(X,gt)}return null}function qt(Q,X,et,gt){for(var ne=null,Ue=null,Kt=X,me=X=0,Ae=null;Kt!==null&&me<et.length;me++){Kt.index>me?(Ae=Kt,Kt=null):Ae=Kt.sibling;var Ne=ot(Q,Kt,et[me],gt);if(Ne===null){Kt===null&&(Kt=Ae);break}e&&Kt&&Ne.alternate===null&&n(Q,Kt),X=h(Ne,X,me),Ue===null?ne=Ne:Ue.sibling=Ne,Ue=Ne,Kt=Ae}if(me===et.length)return a(Q,Kt),Ce&&ea(Q,me),ne;if(Kt===null){for(;me<et.length;me++)Kt=xt(Q,et[me],gt),Kt!==null&&(X=h(Kt,X,me),Ue===null?ne=Kt:Ue.sibling=Kt,Ue=Kt);return Ce&&ea(Q,me),ne}for(Kt=o(Kt);me<et.length;me++)Ae=ut(Kt,Q,me,et[me],gt),Ae!==null&&(e&&Ae.alternate!==null&&Kt.delete(Ae.key===null?me:Ae.key),X=h(Ae,X,me),Ue===null?ne=Ae:Ue.sibling=Ae,Ue=Ae);return e&&Kt.forEach(function($a){return n(Q,$a)}),Ce&&ea(Q,me),ne}function ae(Q,X,et,gt){if(et==null)throw Error(s(151));for(var ne=null,Ue=null,Kt=X,me=X=0,Ae=null,Ne=et.next();Kt!==null&&!Ne.done;me++,Ne=et.next()){Kt.index>me?(Ae=Kt,Kt=null):Ae=Kt.sibling;var $a=ot(Q,Kt,Ne.value,gt);if($a===null){Kt===null&&(Kt=Ae);break}e&&Kt&&$a.alternate===null&&n(Q,Kt),X=h($a,X,me),Ue===null?ne=$a:Ue.sibling=$a,Ue=$a,Kt=Ae}if(Ne.done)return a(Q,Kt),Ce&&ea(Q,me),ne;if(Kt===null){for(;!Ne.done;me++,Ne=et.next())Ne=xt(Q,Ne.value,gt),Ne!==null&&(X=h(Ne,X,me),Ue===null?ne=Ne:Ue.sibling=Ne,Ue=Ne);return Ce&&ea(Q,me),ne}for(Kt=o(Kt);!Ne.done;me++,Ne=et.next())Ne=ut(Kt,Q,me,Ne.value,gt),Ne!==null&&(e&&Ne.alternate!==null&&Kt.delete(Ne.key===null?me:Ne.key),X=h(Ne,X,me),Ue===null?ne=Ne:Ue.sibling=Ne,Ue=Ne);return e&&Kt.forEach(function(ZS){return n(Q,ZS)}),Ce&&ea(Q,me),ne}function We(Q,X,et,gt){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var ne=et.key;X!==null;){if(X.key===ne){if(ne=et.type,ne===w){if(X.tag===7){a(Q,X.sibling),gt=c(X,et.props.children),gt.return=Q,Q=gt;break t}}else if(X.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===b&&Es(ne)===X.type){a(Q,X.sibling),gt=c(X,et.props),uo(gt,et),gt.return=Q,Q=gt;break t}a(Q,X);break}else n(Q,X);X=X.sibling}et.type===w?(gt=vs(et.props.children,Q.mode,gt,et.key),gt.return=Q,Q=gt):(gt=xl(et.type,et.key,et.props,null,Q.mode,gt),uo(gt,et),gt.return=Q,Q=gt)}return _(Q);case T:t:{for(ne=et.key;X!==null;){if(X.key===ne)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(Q,X.sibling),gt=c(X,et.children||[]),gt.return=Q,Q=gt;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}gt=Ac(et,Q.mode,gt),gt.return=Q,Q=gt}return _(Q);case b:return et=Es(et),We(Q,X,et,gt)}if(j(et))return qt(Q,X,et,gt);if(J(et)){if(ne=J(et),typeof ne!="function")throw Error(s(150));return et=ne.call(et),ae(Q,X,et,gt)}if(typeof et.then=="function")return We(Q,X,Al(et),gt);if(et.$$typeof===P)return We(Q,X,yl(Q,et),gt);Rl(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(Q,X.sibling),gt=c(X,et),gt.return=Q,Q=gt):(a(Q,X),gt=Tc(et,Q.mode,gt),gt.return=Q,Q=gt),_(Q)):a(Q,X)}return function(Q,X,et,gt){try{lo=0;var ne=We(Q,X,et,gt);return nr=null,ne}catch(Kt){if(Kt===er||Kt===bl)throw Kt;var Ue=ni(29,Kt,null,Q.mode);return Ue.lanes=gt,Ue.return=Q,Ue}}}var Ts=pm(!0),mm=pm(!1),za=!1;function Fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ic(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=vl(e),jp(e,null,a),n}return _l(e,o,n,a),vl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Jn(e,a)}}function Hc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=_:h=h.next=_,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Gc=!1;function fo(){if(Gc){var e=tr;if(e!==null)throw e}}function ho(e,n,a,o){Gc=!1;var c=e.updateQueue;za=!1;var h=c.firstBaseUpdate,_=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var I=R,nt=I.next;I.next=null,_===null?h=nt:_.next=nt,_=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==_&&(R===null?dt.firstBaseUpdate=nt:R.next=nt,dt.lastBaseUpdate=I))}if(h!==null){var xt=c.baseState;_=0,dt=nt=I=null,R=h;do{var ot=R.lane&-536870913,ut=ot!==R.lane;if(ut?(Te&ot)===ot:(o&ot)===ot){ot!==0&&ot===$s&&(Gc=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var qt=e,ae=R;ot=n;var We=a;switch(ae.tag){case 1:if(qt=ae.payload,typeof qt=="function"){xt=qt.call(We,xt,ot);break t}xt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ae.payload,ot=typeof qt=="function"?qt.call(We,xt,ot):qt,ot==null)break t;xt=x({},xt,ot);break t;case 2:za=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(nt=dt=ut,I=xt):dt=dt.next=ut,_|=ot;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);dt===null&&(I=xt),c.baseState=I,c.firstBaseUpdate=nt,c.lastBaseUpdate=dt,h===null&&(c.shared.lanes=0),Xa|=_,e.lanes=_,e.memoizedState=xt}}function gm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],n)}var ir=U(null),Cl=U(0);function vm(e,n){e=ha,yt(Cl,e),yt(ir,n),ha=e|n.baseLanes}function Vc(){yt(Cl,ha),yt(ir,ir.current)}function Xc(){ha=Cl.current,Z(ir),Z(Cl)}var ii=U(null),vi=null;function Ia(e){var n=e.alternate;yt(on,on.current&1),yt(ii,e),vi===null&&(n===null||ir.current!==null||n.memoizedState!==null)&&(vi=e)}function kc(e){yt(on,on.current),yt(ii,e),vi===null&&(vi=e)}function xm(e){e.tag===22?(yt(on,on.current),yt(ii,e),vi===null&&(vi=e)):Ha()}function Ha(){yt(on,on.current),yt(ii,ii.current)}function ai(e){Z(ii),vi===e&&(vi=null),Z(on)}var on=U(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jf(a)||jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,de=null,Xe=null,hn=null,Dl=!1,ar=!1,As=!1,Ul=0,po=0,sr=null,Fx=0;function sn(){throw Error(s(321))}function Wc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function qc(e,n,a,o,c,h){return aa=h,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?ng:lf,As=!1,h=a(o,c),As=!1,ar&&(h=Mm(n,a,o,c)),Sm(e),h}function Sm(e){z.H=_o;var n=Xe!==null&&Xe.next!==null;if(aa=0,hn=Xe=de=null,Dl=!1,po=0,sr=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&Ml(e)&&(dn=!0))}function Mm(e,n,a,o){de=e;var c=0;do{if(ar&&(sr=null),po=0,ar=!1,25<=c)throw Error(s(301));if(c+=1,hn=Xe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=ig,h=n(a,o)}while(ar);return h}function Ix(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(de.flags|=1024),n}function Yc(){var e=Ul!==0;return Ul=0,e}function Zc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Kc(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}aa=0,hn=Xe=de=null,ar=!1,po=Ul=0,sr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?de.memoizedState=hn=e:hn=hn.next=e,hn}function ln(){if(Xe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=hn===null?de.memoizedState:hn.next;if(n!==null)hn=n,Xe=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},hn===null?de.memoizedState=hn=e:hn=hn.next=e}return hn}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,sr===null&&(sr=[]),e=fm(sr,e,n),n=de,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?ng:lf),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===P)return bn(e)}throw Error(s(438,String(e)))}function Qc(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=K;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=ln();return Jc(n,Xe,e)}function Jc(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var _=c.next;c.next=h.next,h.next=_}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var R=_=null,I=null,nt=n,dt=!1;do{var xt=nt.lane&-536870913;if(xt!==nt.lane?(Te&xt)===xt:(aa&xt)===xt){var ot=nt.revertLane;if(ot===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),xt===$s&&(dt=!0);else if((aa&ot)===ot){nt=nt.next,ot===$s&&(dt=!0);continue}else xt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(R=I=xt,_=h):I=I.next=xt,de.lanes|=ot,Xa|=ot;xt=nt.action,As&&a(h,xt),h=nt.hasEagerState?nt.eagerState:a(h,xt)}else ot={lane:xt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(R=I=ot,_=h):I=I.next=ot,de.lanes|=xt,Xa|=xt;nt=nt.next}while(nt!==null&&nt!==n);if(I===null?_=h:I.next=R,!ei(h,e.memoizedState)&&(dn=!0,dt&&(a=tr,a!==null)))throw a;e.memoizedState=h,e.baseState=_,e.baseQueue=I,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function jc(e){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do h=e(h,_.action),_=_.next;while(_!==c);ei(h,n.memoizedState)||(dn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function ym(e,n,a){var o=de,c=ln(),h=Ce;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ei((Xe||c).memoizedState,a);if(_&&(c.memoizedState=a,dn=!0),c=c.queue,ef(Tm.bind(null,o,c,e),[e]),c.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,rr(9,{destroy:void 0},bm.bind(null,o,c,a,n),null),Ye===null)throw Error(s(349));h||(aa&127)!==0||Em(o,n,a)}return a}function Em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Nl(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function bm(e,n,a,o){n.value=a,n.getSnapshot=o,Am(n)&&Rm(e)}function Tm(e,n,a){return a(function(){Am(n)&&Rm(e)})}function Am(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function Rm(e){var n=_s(e,2);n!==null&&Wn(n,e,2)}function $c(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),As){bt(!0);try{a()}finally{bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function Cm(e,n,a,o){return e.baseState=a,Jc(e,Xe,typeof o=="function"?o:sa)}function Hx(e,n,a,o,c){if(Bl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){h.listeners.push(_)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,wm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function wm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=z.T,_={};z.T=_;try{var R=a(c,o),I=z.S;I!==null&&I(_,R),Dm(e,n,R)}catch(nt){tf(e,n,nt)}finally{h!==null&&_.types!==null&&(h.types=_.types),z.T=h}}else try{h=a(c,o),Dm(e,n,h)}catch(nt){tf(e,n,nt)}}function Dm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Um(e,n,o)},function(o){return tf(e,n,o)}):Um(e,n,a)}function Um(e,n,a){n.status="fulfilled",n.value=a,Nm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,wm(e,a)))}function tf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==o)}e.action=null}function Nm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lm(e,n){return n}function Om(e,n){if(Ce){var a=Ye.formState;if(a!==null){t:{var o=de;if(Ce){if(Qe){e:{for(var c=Qe,h=_i;c.nodeType!==8;){if(!h){c=null;break e}if(c=xi(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Qe=xi(c.nextSibling),o=c.data==="F!";break t}}Oa(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=o,a=$m.bind(null,de,o),o.dispatch=a,o=$c(!1),h=of.bind(null,de,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Hx.bind(null,de,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Pm(e){var n=ln();return zm(n,Xe,e)}function zm(e,n,a){if(n=Jc(e,n,Lm)[0],e=Ol(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(_){throw _===er?bl:_}else o=n;n=ln();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,rr(9,{destroy:void 0},Gx.bind(null,c,a),null)),[o,h,e]}function Gx(e,n){e.action=n}function Bm(e){var n=ln(),a=Xe;if(a!==null)return zm(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function rr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Nl(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Fm(){return ln().memoizedState}function Pl(e,n,a,o){var c=Pn();de.flags|=e,c.memoizedState=rr(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(e,n,a,o){var c=ln();o=o===void 0?null:o;var h=c.memoizedState.inst;Xe!==null&&o!==null&&Wc(o,Xe.memoizedState.deps)?c.memoizedState=rr(n,h,a,o):(de.flags|=e,c.memoizedState=rr(1|n,h,a,o))}function Im(e,n){Pl(8390656,8,e,n)}function ef(e,n){zl(2048,8,e,n)}function Vx(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=Nl(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Hm(e){var n=ln().memoizedState;return Vx({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Gm(e,n){return zl(4,2,e,n)}function Vm(e,n){return zl(4,4,e,n)}function Xm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function km(e,n,a){a=a!=null?a.concat([e]):null,zl(4,4,Xm.bind(null,n,e),a)}function nf(){}function Wm(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Wc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function qm(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Wc(n,o[1]))return o[0];if(o=e(),As){bt(!0);try{e()}finally{bt(!1)}}return a.memoizedState=[o,n],o}function af(e,n,a){return a===void 0||(aa&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Yg(),de.lanes|=e,Xa|=e,a)}function Ym(e,n,a,o){return ei(a,n)?a:ir.current!==null?(e=af(e,a,o),ei(e,n)||(dn=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(Te&261930)===0?(dn=!0,e.memoizedState=a):(e=Yg(),de.lanes|=e,Xa|=e,n)}function Zm(e,n,a,o,c){var h=H.p;H.p=h!==0&&8>h?h:8;var _=z.T,R={};z.T=R,of(e,!1,n,a);try{var I=c(),nt=z.S;if(nt!==null&&nt(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=Bx(I,o);go(e,n,dt,oi(e))}else go(e,n,o,oi(e))}catch(xt){go(e,n,{then:function(){},status:"rejected",reason:xt},oi())}finally{H.p=h,_!==null&&R.types!==null&&(_.types=R.types),z.T=_}}function Xx(){}function sf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Km(e).queue;Zm(e,c,n,tt,a===null?Xx:function(){return Qm(e),a(o)})}function Km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Qm(e){var n=Km(e);n.next===null&&(n=e.alternate.memoizedState),go(e,n.next.queue,{},oi())}function rf(){return bn(Lo)}function Jm(){return ln().memoizedState}function jm(){return ln().memoizedState}function kx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=Ba(a);var o=Fa(n,e,a);o!==null&&(Wn(o,n,a),co(o,n,a)),n={cache:Oc()},e.payload=n;return}n=n.return}}function Wx(e,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(e)?tg(n,a):(a=Ec(e,n,a,o),a!==null&&(Wn(a,e,o),eg(a,n,o)))}function $m(e,n,a){var o=oi();go(e,n,a,o)}function go(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))tg(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var _=n.lastRenderedState,R=h(_,a);if(c.hasEagerState=!0,c.eagerState=R,ei(R,_))return _l(e,n,c,0),Ye===null&&gl(),!1}catch{}if(a=Ec(e,n,c,o),a!==null)return Wn(a,e,o),eg(a,n,o),!0}return!1}function of(e,n,a,o){if(o={lane:2,revertLane:If(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(n)throw Error(s(479))}else n=Ec(e,a,o,2),n!==null&&Wn(n,e,2)}function Bl(e){var n=e.alternate;return e===de||n!==null&&n===de}function tg(e,n){ar=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function eg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Jn(e,a)}}var _o={readContext:bn,use:Ll,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};_o.useEffectEvent=sn;var ng={readContext:bn,use:Ll,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:Im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Xm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(As){bt(!0);try{e()}finally{bt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(As){bt(!0);try{a(n)}finally{bt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Wx.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=$c(e);var n=e.queue,a=$m.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=Pn();return af(a,e,n)},useTransition:function(){var e=$c(!1);return e=Zm.bind(null,de,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,c=Pn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Te&127)!==0||Em(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,Im(Tm.bind(null,o,h,e),[e]),o.flags|=2048,rr(9,{destroy:void 0},bm.bind(null,o,h,a,n),null),a},useId:function(){var e=Pn(),n=Ye.identifierPrefix;if(Ce){var a=Fi,o=Bi;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Fx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:rf,useFormState:Om,useActionState:Om,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qc,useCacheRefresh:function(){return Pn().memoizedState=kx.bind(null,de)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:bn,use:Ll,useCallback:Wm,useContext:bn,useEffect:ef,useImperativeHandle:km,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Ol,useRef:Fm,useState:function(){return Ol(sa)},useDebugValue:nf,useDeferredValue:function(e,n){var a=ln();return Ym(a,Xe.memoizedState,e,n)},useTransition:function(){var e=Ol(sa)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:ym,useId:Jm,useHostTransitionStatus:rf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,n){var a=ln();return Cm(a,Xe,e,n)},useMemoCache:Qc,useCacheRefresh:jm};lf.useEffectEvent=Hm;var ig={readContext:bn,use:Ll,useCallback:Wm,useContext:bn,useEffect:ef,useImperativeHandle:km,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:jc,useRef:Fm,useState:function(){return jc(sa)},useDebugValue:nf,useDeferredValue:function(e,n){var a=ln();return Xe===null?af(a,e,n):Ym(a,Xe.memoizedState,e,n)},useTransition:function(){var e=jc(sa)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:ym,useId:Jm,useHostTransitionStatus:rf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,n){var a=ln();return Xe!==null?Cm(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qc,useCacheRefresh:jm};ig.useEffectEvent=Hm;function uf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),c=Ba(o);c.payload=n,a!=null&&(c.callback=a),n=Fa(e,c,o),n!==null&&(Wn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),c=Ba(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Fa(e,c,o),n!==null&&(Wn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=Fa(e,o,a),n!==null&&(Wn(n,e,a),co(n,e,a))}};function ag(e,n,a,o,c,h,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,_):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(c,h):!0}function sg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&cf.enqueueReplaceState(n,n.state,null)}function Rs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function rg(e){ml(e)}function og(e){console.error(e)}function lg(e){ml(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ug(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ff(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function cg(e){return e=Ba(e),e.tag=3,e}function fg(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){ug(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){ug(n,a,o),typeof c!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function qx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&js(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?Ql():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(e,o,c)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(e,o,c)),!1}throw Error(s(435,a.tag))}return zf(e,o,c),Ql(),!1}if(Ce)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==wc&&(e=Error(s(422),{cause:o}),so(pi(e,a)))):(o!==wc&&(n=Error(s(423),{cause:o}),so(pi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=pi(o,a),c=ff(e.stateNode,o,c),Hc(e,c),rn!==4&&(rn=2)),!1;var h=Error(s(520),{cause:o});if(h=pi(h,a),To===null?To=[h]:To.push(h),rn!==4&&(rn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ff(a.stateNode,o,e),Hc(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ka===null||!ka.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=cg(c),fg(c,e,a,o),Hc(a,c),!1}a=a.return}while(a!==null);return!1}var hf=Error(s(461)),dn=!1;function Tn(e,n,a,o){n.child=e===null?mm(n,null,a,o):Ts(n,e.child,a,o)}function hg(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Ms(n),o=qc(e,n,a,_,h,c),R=Yc(),e!==null&&!dn?(Zc(e,n,c),ra(e,n,c)):(Ce&&R&&Rc(n),n.flags|=1,Tn(e,n,o,c),n.child)}function dg(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!bc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,pg(e,n,h,o,c)):(e=xl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Sf(e,c)){var _=h.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(_,o)&&e.ref===n.ref)return ra(e,n,c)}return n.flags|=1,e=ta(h,o),e.ref=n.ref,e.return=n,n.child=e}function pg(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(no(h,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=h,Sf(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,ra(e,n,c)}return df(e,n,a,o,c)}function mg(e,n,a,o){var c=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return gg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,h!==null?h.cachePool:null),h!==null?vm(n,h):Vc(),xm(n);else return o=n.lanes=536870912,gg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(El(n,h.cachePool),vm(n,h),Ha(),n.memoizedState=null):(e!==null&&El(n,null),Vc(),Ha());return Tn(e,n,c,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gg(e,n,a,o,c){var h=zc();return h=h===null?null:{parent:fn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&El(n,null),Vc(),xm(n),e!==null&&js(e,n,o,!0),n.childLanes=c,null}function Il(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function _g(e,n,a){return Ts(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function Yx(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=Il(n,o),n.lanes=536870912,vo(null,e);if(kc(n),(e=Qe)?(e=w0(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,En=n,Qe=null)):e=null,e===null)throw Oa(n);return n.lanes=536870912,null}return Il(n,o)}var h=e.memoizedState;if(h!==null){var _=h.dehydrated;if(kc(n),c)if(n.flags&256)n.flags&=-257,n=_g(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||js(e,n,a,!1),c=(a&e.childLanes)!==0,dn||c){if(o=Ye,o!==null&&(_=jn(o,a),_!==0&&_!==h.retryLane))throw h.retryLane=_,_s(e,_),Wn(o,e,_),hf;Ql(),n=_g(e,n,a)}else e=h.treeContext,Qe=xi(_.nextSibling),En=n,Ce=!0,La=null,_i=!1,e!==null&&im(n,e),n=Il(n,o),n.flags|=4096;return n}return e=ta(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function df(e,n,a,o,c){return Ms(n),a=qc(e,n,a,o,void 0,c),o=Yc(),e!==null&&!dn?(Zc(e,n,c),ra(e,n,c)):(Ce&&o&&Rc(n),n.flags|=1,Tn(e,n,a,c),n.child)}function vg(e,n,a,o,c,h){return Ms(n),n.updateQueue=null,a=Mm(n,o,a,c),Sm(e),o=Yc(),e!==null&&!dn?(Zc(e,n,h),ra(e,n,h)):(Ce&&o&&Rc(n),n.flags|=1,Tn(e,n,a,h),n.child)}function xg(e,n,a,o,c){if(Ms(n),n.stateNode===null){var h=Zs,_=a.contextType;typeof _=="object"&&_!==null&&(h=bn(_)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=cf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Fc(n),_=a.contextType,h.context=typeof _=="object"&&_!==null?bn(_):Zs,h.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(uf(n,a,_,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(_=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),_!==h.state&&cf.enqueueReplaceState(h,h.state,null),ho(n,o,h,c),fo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,I=Rs(a,R);h.props=I;var nt=h.context,dt=a.contextType;_=Zs,typeof dt=="object"&&dt!==null&&(_=bn(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||nt!==_)&&sg(n,h,o,_),za=!1;var ot=n.memoizedState;h.state=ot,ho(n,o,h,c),fo(),nt=n.memoizedState,R||ot!==nt||za?(typeof xt=="function"&&(uf(n,a,xt,o),nt=n.memoizedState),(I=za||ag(n,a,I,o,ot,nt,_))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=_,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Ic(e,n),_=n.memoizedProps,dt=Rs(a,_),h.props=dt,xt=n.pendingProps,ot=h.context,nt=a.contextType,I=Zs,typeof nt=="object"&&nt!==null&&(I=bn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(_!==xt||ot!==I)&&sg(n,h,o,I),za=!1,ot=n.memoizedState,h.state=ot,ho(n,o,h,c),fo();var ut=n.memoizedState;_!==xt||ot!==ut||za||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof R=="function"&&(uf(n,a,R,o),ut=n.memoizedState),(dt=za||ag(n,a,dt,o,ot,ut,I)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=I,o=dt):(typeof h.componentDidUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Hl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ts(n,e.child,null,c),n.child=Ts(n,null,a,c)):Tn(e,n,a,c),n.memoizedState=h.state,e=n.child):e=ra(e,n,c),e}function Sg(e,n,a,o){return xs(),n.flags|=256,Tn(e,n,a,o),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:um()}}function gf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Mg(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,_;if((_=h)||(_=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(c?Ia(n):Ha(),(e=Qe)?(e=w0(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,En=n,Qe=null)):e=null,e===null)throw Oa(n);return jf(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(Ha(),c=n.mode,R=Gl({mode:"hidden",children:R},c),o=vs(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=mf(a),o.childLanes=gf(e,_,a),n.memoizedState=pf,vo(null,o)):(Ia(n),_f(n,R))}var I=e.memoizedState;if(I!==null&&(R=I.dehydrated,R!==null)){if(h)n.flags&256?(Ia(n),n.flags&=-257,n=vf(e,n,a)):n.memoizedState!==null?(Ha(),n.child=e.child,n.flags|=128,n=null):(Ha(),R=o.fallback,c=n.mode,o=Gl({mode:"visible",children:o.children},c),R=vs(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ts(n,e.child,null,a),o=n.child,o.memoizedState=mf(a),o.childLanes=gf(e,_,a),n.memoizedState=pf,n=vo(null,o));else if(Ia(n),jf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var nt=_.dgst;_=nt,o=Error(s(419)),o.stack="",o.digest=_,so({value:o,source:null,stack:null}),n=vf(e,n,a)}else if(dn||js(e,n,a,!1),_=(a&e.childLanes)!==0,dn||_){if(_=Ye,_!==null&&(o=jn(_,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,_s(e,o),Wn(_,e,o),hf;Jf(R)||Ql(),n=vf(e,n,a)}else Jf(R)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Qe=xi(R.nextSibling),En=n,Ce=!0,La=null,_i=!1,e!==null&&im(n,e),n=_f(n,o.children),n.flags|=4096);return n}return c?(Ha(),R=o.fallback,c=n.mode,I=e.child,nt=I.sibling,o=ta(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,nt!==null?R=ta(nt,R):(R=vs(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,vo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=mf(a):(c=R.cachePool,c!==null?(I=fn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=um(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=gf(e,_,a),n.memoizedState=pf,vo(e.child,o)):(Ia(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function _f(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function vf(e,n,a){return Ts(n,e.child,null,a),e=_f(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function yg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Nc(e.return,n,a)}function xf(e,n,a,o,c,h){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=c,_.treeForkCount=h)}function Eg(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var _=on.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,yt(on,_),Tn(e,n,o,a),o=Ce?ao:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yg(e,a,n);else if(e.tag===19)yg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),xf(n,!1,c,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&wl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}xf(n,!0,a,null,h,o);break;case"together":xf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function Zx(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),Pa(n,fn,e.memoizedState.cache),xs();break;case 27:case 5:ie(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,kc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Mg(e,n,a):(Ia(n),e=ra(e,n,a),e!==null?e.sibling:null);Ia(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(js(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Eg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(on,on.current),o)break;return null;case 22:return n.lanes=0,mg(e,n,a,n.pendingProps);case 24:Pa(n,fn,e.memoizedState.cache)}return ra(e,n,a)}function bg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Sf(e,a)&&(n.flags&128)===0)return dn=!1,Zx(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Ce&&(n.flags&1048576)!==0&&nm(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Es(n.elementType),n.type=e,typeof e=="function")bc(e)?(o=Rs(e,o),n.tag=1,n=xg(null,n,e,o,a)):(n.tag=0,n=df(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===C){n.tag=11,n=hg(null,n,e,o,a);break t}else if(c===L){n.tag=14,n=dg(null,n,e,o,a);break t}}throw n=_t(e)||e,Error(s(306,n,""))}}return n;case 0:return df(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Rs(o,n.pendingProps),xg(e,n,o,c,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,Ic(e,n),ho(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Pa(n,fn,o),o!==h.cache&&Lc(n,[fn],a,!0),fo(),o=_.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Sg(e,n,o,a);break t}else if(o!==c){c=pi(Error(s(424)),n),so(c),n=Sg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=xi(e.firstChild),En=n,Ce=!0,La=null,_i=!0,a=mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),o===c){n=ra(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=P0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=iu(it.current).createElement(a),o[un]=n,o[yn]=e,An(o,a,e),cn(o),n.stateNode=o):n.memoizedState=P0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Ce&&(o=n.stateNode=N0(n.type,n.pendingProps,it.current),En=n,_i=!0,c=Qe,Za(n.type)?($f=c,Qe=xi(o.firstChild)):Qe=c),Tn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((c=o=Qe)&&(o=bS(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,En=n,Qe=xi(o.firstChild),_i=!1,c=!0):c=!1),c||Oa(n)),ie(n),c=n.type,h=n.pendingProps,_=e!==null?e.memoizedProps:null,o=h.children,Zf(c,h)?o=null:_!==null&&Zf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=qc(e,n,Ix,null,null,a),Lo._currentValue=c),Hl(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=Qe)&&(a=TS(a,n.pendingProps,_i),a!==null?(n.stateNode=a,En=n,Qe=null,e=!0):e=!1),e||Oa(n)),null;case 13:return Mg(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ts(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return hg(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Ms(n),c=bn(c),o=o(c),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return dg(e,n,n.type,n.pendingProps,a);case 15:return pg(e,n,n.type,n.pendingProps,a);case 19:return Eg(e,n,a);case 31:return Yx(e,n,a);case 22:return mg(e,n,a,n.pendingProps);case 24:return Ms(n),o=bn(fn),e===null?(c=zc(),c===null&&(c=Ye,h=Oc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},Fc(n),Pa(n,fn,c)):((e.lanes&a)!==0&&(Ic(e,n),ho(n,null,null,a),fo()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Pa(n,fn,o)):(o=h.cache,Pa(n,fn,o),o!==c.cache&&Lc(n,[fn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(e){e.flags|=4}function Mf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Jg())e.flags|=8192;else throw bs=Tl,Bc}else e.flags&=-16777217}function Tg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(n))if(Jg())e.flags|=8192;else throw bs=Tl,Bc}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Et():536870912,e.lanes|=n,cr|=n)}function xo(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Kx(e,n,a){var o=n.pendingProps;switch(Cc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(fn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?oa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Dc())),Je(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?(oa(n),h!==null?(Je(n),Tg(n,h)):(Je(n),Mf(n,c,null,o,a))):h?h!==e.memoizedState?(oa(n),Je(n),Tg(n,h)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&oa(n),Je(n),Mf(n,c,e,o,a)),null;case 27:if(Jt(n),a=it.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}e=Ct.current,Js(n)?am(n):(e=N0(c,o,a),n.stateNode=e,oa(n))}return Je(n),null;case 5:if(Jt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(h=Ct.current,Js(n))am(n);else{var _=iu(it.current);switch(h){case 1:h=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=_.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?_.createElement(c,{is:o.is}):_.createElement(c)}}h[un]=n,h[yn]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)h.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=h;t:switch(An(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&oa(n)}}return Je(n),Mf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=En,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||M0(e.nodeValue,a)),e||Oa(n,!0)}else e=iu(e).createTextNode(o),e[un]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Js(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[un]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),c=!1}else c=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Je(n),null);case 4:return Ht(),e===null&&Xf(n.stateNode.containerInfo),Je(n),null;case 10:return ia(n.type),Je(n),null;case 19:if(Z(on),o=n.memoizedState,o===null)return Je(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)xo(o,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=wl(e),h!==null){for(n.flags|=128,xo(o,!1),e=h.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$p(a,e),a=a.sibling;return yt(on,on.current&1|2),Ce&&ea(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Se()>Yl&&(n.flags|=128,c=!0,xo(o,!1),n.lanes=4194304)}else{if(!c)if(e=wl(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ce)return Je(n),null}else 2*Se()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,c=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Se(),e.sibling=null,a=on.current,yt(on,c?a&1|2:a&1),Ce&&ea(n,o.treeForkCount),e):(Je(n),null);case 22:case 23:return ai(n),Xc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(ys),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(fn),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Qx(e,n){switch(Cc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(fn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Jt(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(on),null;case 4:return Ht(),null;case 10:return ia(n.type),null;case 22:case 23:return ai(n),Xc(),e!==null&&Z(ys),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(fn),null;case 25:return null;default:return null}}function Ag(e,n){switch(Cc(n),n.tag){case 3:ia(fn),Ht();break;case 26:case 27:case 5:Jt(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Z(on);break;case 10:ia(n.type);break;case 22:case 23:ai(n),Xc(),e!==null&&Z(ys);break;case 24:ia(fn)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,_=a.inst;o=h(),_.destroy=o}a=a.next}while(a!==c)}}catch(R){Ge(n,n.return,R)}}function Ga(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,c=n;var I=a,nt=R;try{nt()}catch(dt){Ge(c,I,dt)}}}o=o.next}while(o!==h)}}catch(dt){Ge(n,n.return,dt)}}function Rg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_m(n,a)}catch(o){Ge(e,e.return,o)}}}function Cg(e,n,a){a.props=Rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ge(e,n,c)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function wg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function yf(e,n,a){try{var o=e.stateNode;vS(o,e.type,a,n),o[yn]=n}catch(c){Ge(e,e.return,c)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(bf(e,n,a),e=e.sibling;e!==null;)bf(e,n,a),e=e.sibling}function Xl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Xl(e,n,a),e=e.sibling;e!==null;)Xl(e,n,a),e=e.sibling}function Ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,o,a),n[un]=e,n[yn]=a}catch(h){Ge(e,e.return,h)}}var la=!1,pn=!1,Tf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Jx(e,n){if(e=e.containerInfo,qf=cu,e=kp(e),_c(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var _=0,R=-1,I=-1,nt=0,dt=0,xt=e,ot=null;e:for(;;){for(var ut;xt!==a||c!==0&&xt.nodeType!==3||(R=_+c),xt!==h||o!==0&&xt.nodeType!==3||(I=_+o),xt.nodeType===3&&(_+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)ot=xt,xt=ut;for(;;){if(xt===e)break e;if(ot===a&&++nt===c&&(R=_),ot===h&&++dt===o&&(I=_),(ut=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ut}a=R===-1||I===-1?null:{start:R,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:e,selectionRange:a},cu=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var qt=Rs(a.type,c);e=o.getSnapshotBeforeUpdate(qt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ge(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function Lg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),o&4&&So(5,a);break;case 1:if(ca(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Ge(a,a.return,_)}else{var c=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ge(a,a.return,_)}}o&64&&Rg(a),o&512&&Mo(a,a.return);break;case 3:if(ca(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_m(e,n)}catch(_){Ge(a,a.return,_)}}break;case 27:n===null&&o&4&&Ug(a);case 26:case 5:ca(e,a),n===null&&o&4&&wg(a),o&512&&Mo(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),o&4&&zg(e,a);break;case 13:ca(e,a),o&4&&Bg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rS.bind(null,a),AS(e,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||pn,c=la;var h=pn;la=o,(pn=n)&&!h?fa(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),la=c,pn=h}break;case 30:break;default:ca(e,a)}}function Og(e){var n=e.alternate;n!==null&&(e.alternate=null,Og(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ca(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Gn=!1;function ua(e,n,a){for(a=a.child;a!==null;)Pg(e,n,a),a=a.sibling}function Pg(e,n,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:pn||Ii(a,n),ua(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Ii(a,n);var o=en,c=Gn;Za(a.type)&&(en=a.stateNode,Gn=!1),ua(e,n,a),Do(a.stateNode),en=o,Gn=c;break;case 5:pn||Ii(a,n);case 6:if(o=en,c=Gn,en=null,ua(e,n,a),en=o,Gn=c,en!==null)if(Gn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(h){Ge(a,n,h)}else try{en.removeChild(a.stateNode)}catch(h){Ge(a,n,h)}break;case 18:en!==null&&(Gn?(e=en,R0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vr(e)):R0(en,a.stateNode));break;case 4:o=en,c=Gn,en=a.stateNode.containerInfo,Gn=!0,ua(e,n,a),en=o,Gn=c;break;case 0:case 11:case 14:case 15:Ga(2,a,n),pn||Ga(4,a,n),ua(e,n,a);break;case 1:pn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Cg(a,n,o)),ua(e,n,a);break;case 21:ua(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ua(e,n,a),pn=o;break;default:ua(e,n,a)}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vr(e)}catch(a){Ge(n,n.return,a)}}}function Bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vr(e)}catch(a){Ge(n,n.return,a)}}function jx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ng),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ng),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=jx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=oS.bind(null,e,o);o.then(c,c)}})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,_=n,R=_;t:for(;R!==null;){switch(R.tag){case 27:if(Za(R.type)){en=R.stateNode,Gn=!1;break t}break;case 5:en=R.stateNode,Gn=!1;break t;case 3:case 4:en=R.stateNode.containerInfo,Gn=!0;break t}R=R.return}if(en===null)throw Error(s(160));Pg(h,_,c),en=null,Gn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fg(n,e),n=n.sibling}var Ai=null;function Fg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),Xn(e),o&4&&(Ga(3,e,e.return),So(3,e),Ga(5,e,e.return));break;case 1:Vn(n,e),Xn(e),o&512&&(pn||a===null||Ii(a,a.return)),o&64&&la&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ai;if(Vn(n,e),Xn(e),o&512&&(pn||a===null||Ii(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Ra]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),An(h,o,a),h[un]=e,cn(h),o=h;break t;case"link":var _=F0("link","href",c).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(h=_[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break e}}h=c.createElement(o),An(h,o,a),c.head.appendChild(h);break;case"meta":if(_=F0("meta","content",c).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(h=_[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break e}}h=c.createElement(o),An(h,o,a),c.head.appendChild(h);break;default:throw Error(s(468,o))}h[un]=e,cn(h),o=h}e.stateNode=o}else I0(c,e.type,e.stateNode);else e.stateNode=B0(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?I0(c,e.type,e.stateNode):B0(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&yf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),Xn(e),o&512&&(pn||a===null||Ii(a,a.return)),a!==null&&o&4&&yf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),Xn(e),o&512&&(pn||a===null||Ii(a,a.return)),e.flags&32){c=e.stateNode;try{ti(c,"")}catch(qt){Ge(e,e.return,qt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,yf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Tf=!0);break;case 6:if(Vn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(qt){Ge(e,e.return,qt)}}break;case 3:if(ru=null,c=Ai,Ai=au(n.containerInfo),Vn(n,e),Ai=c,Xn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(qt){Ge(e,e.return,qt)}Tf&&(Tf=!1,Ig(e));break;case 4:o=Ai,Ai=au(e.stateNode.containerInfo),Vn(n,e),Xn(e),Ai=o;break;case 12:Vn(n,e),Xn(e);break;case 31:Vn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:Vn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=Se()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,nt=la,dt=pn;if(la=nt||c,pn=dt||I,Vn(n,e),pn=dt,la=nt,Xn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||la||pn||Cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,c)_=h.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=I.stateNode;var xt=I.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(qt){Ge(I,I.return,qt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(qt){Ge(I,I.return,qt)}}}else if(n.tag===18){if(a===null){I=n;try{var ut=I.stateNode;c?C0(ut,!0):C0(I.stateNode,!1)}catch(qt){Ge(I,I.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:Vn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:Vn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Dg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,h=Ef(e);Xl(e,h,c);break;case 5:var _=a.stateNode;a.flags&32&&(ti(_,""),a.flags&=-33);var R=Ef(e);Xl(e,R,_);break;case 3:case 4:var I=a.stateNode.containerInfo,nt=Ef(e);bf(e,nt,I);break;default:throw Error(s(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lg(e,n.alternate,n),n=n.sibling}function Cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),Cs(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cg(n,n.return,a),Cs(n);break;case 27:Do(n.stateNode);case 26:case 5:Ii(n,n.return),Cs(n);break;case 22:n.memoizedState===null&&Cs(n);break;case 30:Cs(n);break;default:Cs(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,_=h.flags;switch(h.tag){case 0:case 11:case 15:fa(c,h,a),So(4,h);break;case 1:if(fa(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Ge(o,o.return,nt)}if(o=h,c=o.updateQueue,c!==null){var R=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)gm(I[c],R)}catch(nt){Ge(o,o.return,nt)}}a&&_&64&&Rg(h),Mo(h,h.return);break;case 27:Ug(h);case 26:case 5:fa(c,h,a),a&&o===null&&_&4&&wg(h),Mo(h,h.return);break;case 12:fa(c,h,a);break;case 31:fa(c,h,a),a&&_&4&&zg(c,h);break;case 13:fa(c,h,a),a&&_&4&&Bg(c,h);break;case 22:h.memoizedState===null&&fa(c,h,a),Mo(h,h.return);break;case 30:break;default:fa(c,h,a)}n=n.sibling}}function Af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function Rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hg(e,n,a,o),n=n.sibling}function Hg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),c&2048&&So(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(c&2048){Ri(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,_=h.id,R=h.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ge(n,n.return,I)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,_=n.alternate,n.memoizedState!==null?h._visibility&2?Ri(e,n,a,o):yo(e,n):h._visibility&2?Ri(e,n,a,o):(h._visibility|=2,or(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Af(_,n);break;case 24:Ri(e,n,a,o),c&2048&&Rf(n.alternate,n);break;default:Ri(e,n,a,o)}}function or(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,_=n,R=a,I=o,nt=_.flags;switch(_.tag){case 0:case 11:case 15:or(h,_,R,I,c),So(8,_);break;case 23:break;case 22:var dt=_.stateNode;_.memoizedState!==null?dt._visibility&2?or(h,_,R,I,c):yo(h,_):(dt._visibility|=2,or(h,_,R,I,c)),c&&nt&2048&&Af(_.alternate,_);break;case 24:or(h,_,R,I,c),c&&nt&2048&&Rf(_.alternate,_);break;default:or(h,_,R,I,c)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:yo(a,o),c&2048&&Af(o.alternate,o);break;case 24:yo(a,o),c&2048&&Rf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var Eo=8192;function lr(e,n,a){if(e.subtreeFlags&Eo)for(e=e.child;e!==null;)Gg(e,n,a),e=e.sibling}function Gg(e,n,a){switch(e.tag){case 26:lr(e,n,a),e.flags&Eo&&e.memoizedState!==null&&FS(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:lr(e,n,a);break;case 3:case 4:var o=Ai;Ai=au(e.stateNode.containerInfo),lr(e,n,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,lr(e,n,a),Eo=o):lr(e,n,a));break;default:lr(e,n,a)}}function Vg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function bo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,kg(o,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xg(e),e=e.sibling}function Xg(e){switch(e.tag){case 0:case 11:case 15:bo(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:bo(e);break;case 12:bo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):bo(e);break;default:bo(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,kg(o,e)}Vg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function kg(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var c=o.sibling,h=o.return;if(Og(o),o===a){Sn=null;break t}if(c!==null){c.return=h,Sn=c;break t}Sn=h}}}var $x={getCacheForType:function(e){var n=bn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(fn).controller.signal}},tS=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ye=null,ye=null,Te=0,He=0,si=null,Va=!1,ur=!1,Cf=!1,ha=0,rn=0,Xa=0,ws=0,wf=0,ri=0,cr=0,To=null,kn=null,Df=!1,ql=0,Wg=0,Yl=1/0,Zl=null,ka=null,_n=0,Wa=null,fr=null,da=0,Uf=0,Nf=null,qg=null,Ao=0,Lf=null;function oi(){return(Le&2)!==0&&Te!==0?Te&-Te:z.T!==null?If():Zr()}function Yg(){if(ri===0)if((Te&536870912)===0||Ce){var e=oe;oe<<=1,(oe&3932160)===0&&(oe=262144),ri=e}else ri=536870912;return e=ii.current,e!==null&&(e.flags|=32),ri}function Wn(e,n,a){(e===Ye&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(hr(e,0),qa(e,Te,ri,!1)),Xt(e,a),((Le&2)===0||e!==Ye)&&(e===Ye&&((Le&2)===0&&(ws|=a),rn===4&&qa(e,Te,ri,!1)),Hi(e))}function Zg(e,n,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ut(e,n),c=o?iS(e,n):Pf(e,n,!0),h=o;do{if(c===0){ur&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!eS(a)){c=Pf(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=e;c=To;var I=R.current.memoizedState.isDehydrated;if(I&&(hr(R,_).flags|=256),_=Pf(R,_,!1),_!==2){if(Cf&&!I){R.errorRecoveryDisabledLanes|=h,ws|=h,c=4;break t}h=kn,kn=c,h!==null&&(kn===null?kn=h:kn.push.apply(kn,h))}c=_}if(h=!1,c!==2)continue}}if(c===1){hr(e,0),qa(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ri,!Va);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=ql+300-Se(),10<c)){if(qa(o,n,ri,!Va),mt(o,0,!0)!==0)break t;da=n,o.timeoutHandle=T0(Kg.bind(null,o,a,kn,Zl,Df,n,ri,ws,cr,Va,h,"Throttled",-0,0),c);break t}Kg(o,a,kn,Zl,Df,n,ri,ws,cr,Va,h,null,-0,0)}}break}while(!0);Hi(e)}function Kg(e,n,a,o,c,h,_,R,I,nt,dt,xt,ot,ut){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Gg(n,h,xt);var qt=(h&62914560)===h?ql-Se():(h&4194048)===h?Wg-Se():0;if(qt=IS(xt,qt),qt!==null){da=h,e.cancelPendingCommit=qt(i0.bind(null,e,n,h,a,o,c,_,R,I,dt,xt,null,ot,ut)),qa(e,h,_,!nt);return}}i0(e,n,h,a,o,c,_,R,I)}function eS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!ei(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~wf,n&=~ws,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-Nt(c),_=1<<h;o[h]=-1,c&=~_}a!==0&&ze(e,a,n)}function Kl(){return(Le&6)===0?(Ro(0),!1):!0}function Of(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,na=Ss=null,Kc(e),nr=null,lo=0,e=ye;for(;e!==null;)Ag(e.alternate,e),e=e.return;ye=null}}function hr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,MS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,Of(),Ye=e,ye=a=ta(e.current,null),Te=n,He=0,si=null,Va=!1,ur=Ut(e,n),Cf=!1,cr=ri=wf=ws=Xa=rn=0,kn=To=null,Df=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Nt(o),h=1<<c;n|=e[c],o&=~h}return ha=n,gl(),a}function Qg(e,n){de=null,z.H=_o,n===er||n===bl?(n=hm(),He=3):n===Bc?(n=hm(),He=4):He=n===hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,ye===null&&(rn=1,Fl(e,pi(n,e.current)))}function Jg(){var e=ii.current;return e===null?!0:(Te&4194048)===Te?vi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===vi:!1}function jg(){var e=z.H;return z.H=_o,e===null?_o:e}function $g(){var e=z.A;return z.A=$x,e}function Ql(){rn=4,Va||(Te&4194048)!==Te&&ii.current!==null||(ur=!0),(Xa&134217727)===0&&(ws&134217727)===0||Ye===null||qa(Ye,Te,ri,!1)}function Pf(e,n,a){var o=Le;Le|=2;var c=jg(),h=$g();(Ye!==e||Te!==n)&&(Zl=null,hr(e,n)),n=!1;var _=rn;t:do try{if(He!==0&&ye!==null){var R=ye,I=si;switch(He){case 8:Of(),_=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var nt=He;if(He=0,si=null,dr(e,R,I,nt),a&&ur){_=0;break t}break;default:nt=He,He=0,si=null,dr(e,R,I,nt)}}nS(),_=rn;break}catch(dt){Qg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,na=Ss=null,Le=o,z.H=c,z.A=h,ye===null&&(Ye=null,Te=0,gl()),_}function nS(){for(;ye!==null;)t0(ye)}function iS(e,n){var a=Le;Le|=2;var o=jg(),c=$g();Ye!==e||Te!==n?(Zl=null,Yl=Se()+500,hr(e,n)):ur=Ut(e,n);t:do try{if(He!==0&&ye!==null){n=ye;var h=si;e:switch(He){case 1:He=0,si=null,dr(e,n,h,1);break;case 2:case 9:if(cm(h)){He=0,si=null,e0(n);break}n=function(){He!==2&&He!==9||Ye!==e||(He=7),Hi(e)},h.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:cm(h)?(He=0,si=null,e0(n)):(He=0,si=null,dr(e,n,h,7));break;case 5:var _=null;switch(ye.tag){case 26:_=ye.memoizedState;case 5:case 27:var R=ye;if(_?H0(_):R.stateNode.complete){He=0,si=null;var I=R.sibling;if(I!==null)ye=I;else{var nt=R.return;nt!==null?(ye=nt,Jl(nt)):ye=null}break e}}He=0,si=null,dr(e,n,h,5);break;case 6:He=0,si=null,dr(e,n,h,6);break;case 8:Of(),rn=6;break t;default:throw Error(s(462))}}aS();break}catch(dt){Qg(e,dt)}while(!0);return na=Ss=null,z.H=o,z.A=c,Le=a,ye!==null?0:(Ye=null,Te=0,gl(),rn)}function aS(){for(;ye!==null&&!le();)t0(ye)}function t0(e){var n=bg(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?Jl(e):ye=n}function e0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=vg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Kc(n);default:Ag(a,n),n=ye=$p(n,ha),n=bg(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?Jl(e):ye=n}function dr(e,n,a,o){na=Ss=null,Kc(n),nr=null,lo=0;var c=n.return;try{if(qx(e,c,n,a,Te)){rn=1,Fl(e,pi(a,e.current)),ye=null;return}}catch(h){if(c!==null)throw ye=c,h;rn=1,Fl(e,pi(a,e.current)),ye=null;return}n.flags&32768?(Ce||o===1?e=!0:ur||(Te&536870912)!==0?e=!1:(Va=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),n0(n,e)):Jl(n)}function Jl(e){var n=e;do{if((n.flags&32768)!==0){n0(n,Va);return}e=n.return;var a=Kx(n.alternate,n,ha);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);rn===0&&(rn=5)}function n0(e,n){do{var a=Qx(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);rn=6,ye=null}function i0(e,n,a,o,c,h,_,R,I){e.cancelPendingCommit=null;do jl();while(_n!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=yc,je(e,a,h,_,R,I),e===Ye&&(ye=Ye=null,Te=0),fr=n,Wa=e,da=a,Uf=h,Nf=c,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lS(q,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=H.p,H.p=2,_=Le,Le|=4;try{Jx(e,n,a)}finally{Le=_,H.p=c,z.T=o}}_n=1,a0(),s0(),r0()}}function a0(){if(_n===1){_n=0;var e=Wa,n=fr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var c=Le;Le|=4;try{Fg(n,e);var h=Yf,_=kp(e.containerInfo),R=h.focusedElem,I=h.selectionRange;if(_!==R&&R&&R.ownerDocument&&Xp(R.ownerDocument.documentElement,R)){if(I!==null&&_c(R)){var nt=I.start,dt=I.end;if(dt===void 0&&(dt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(dt,R.value.length);else{var xt=R.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),qt=R.textContent.length,ae=Math.min(I.start,qt),We=I.end===void 0?ae:Math.min(I.end,qt);!ut.extend&&ae>We&&(_=We,We=ae,ae=_);var Q=Vp(R,ae),X=Vp(R,We);if(Q&&X&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var et=xt.createRange();et.setStart(Q.node,Q.offset),ut.removeAllRanges(),ae>We?(ut.addRange(et),ut.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ut.addRange(et))}}}}for(xt=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var gt=xt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}cu=!!qf,Yf=qf=null}finally{Le=c,H.p=o,z.T=a}}e.current=n,_n=2}}function s0(){if(_n===2){_n=0;var e=Wa,n=fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var c=Le;Le|=4;try{Lg(e,n.alternate,n)}finally{Le=c,H.p=o,z.T=a}}_n=3}}function r0(){if(_n===4||_n===3){_n=0,G();var e=Wa,n=fr,a=da,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,fr=Wa=null,o0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ka=null),Yr(a),n=n.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=H.p,H.p=2,z.T=null;try{for(var h=e.onRecoverableError,_=0;_<o.length;_++){var R=o[_];h(R.value,{componentStack:R.stack})}}finally{z.T=n,H.p=c}}(da&3)!==0&&jl(),Hi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Lf?Ao++:(Ao=0,Lf=e):Ao=0,Ro(0)}}function o0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function jl(){return a0(),s0(),r0(),l0()}function l0(){if(_n!==5)return!1;var e=Wa,n=Uf;Uf=0;var a=Yr(da),o=z.T,c=H.p;try{H.p=32>a?32:a,z.T=null,a=Nf,Nf=null;var h=Wa,_=da;if(_n=0,fr=Wa=null,da=0,(Le&6)!==0)throw Error(s(331));var R=Le;if(Le|=4,Xg(h.current),Hg(h,h.current,_,a),Le=R,Ro(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{H.p=c,z.T=o,o0(e,n)}}function u0(e,n,a){n=pi(a,n),n=ff(e.stateNode,n,2),e=Fa(e,n,2),e!==null&&(Xt(e,2),Hi(e))}function Ge(e,n,a){if(e.tag===3)u0(e,e,a);else for(;n!==null;){if(n.tag===3){u0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=pi(a,e),a=cg(2),o=Fa(n,a,2),o!==null&&(fg(a,o,n,e),Xt(o,2),Hi(o));break}}n=n.return}}function zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new tS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Cf=!0,c.add(a),e=sS.bind(null,e,n,a),n.then(e,e))}function sS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Te&a)===a&&(rn===4||rn===3&&(Te&62914560)===Te&&300>Se()-ql?(Le&2)===0&&hr(e,0):wf|=a,cr===Te&&(cr=0)),Hi(e)}function c0(e,n){n===0&&(n=Et()),e=_s(e,n),e!==null&&(Xt(e,n),Hi(e))}function rS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),c0(e,a)}function oS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),c0(e,a)}function lS(e,n){return zt(e,n)}var $l=null,pr=null,Bf=!1,tu=!1,Ff=!1,Ya=0;function Hi(e){e!==pr&&e.next===null&&(pr===null?$l=pr=e:pr=pr.next=e),tu=!0,Bf||(Bf=!0,cS())}function Ro(e,n){if(!Ff&&tu){Ff=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var _=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Nt(42|e)+1)-1,h&=c&~(_&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,p0(o,h))}else h=Te,h=mt(o,o===Ye?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ut(o,h)||(a=!0,p0(o,h));o=o.next}while(a);Ff=!1}}function uS(){f0()}function f0(){tu=Bf=!1;var e=0;Ya!==0&&SS()&&(e=Ya);for(var n=Se(),a=null,o=$l;o!==null;){var c=o.next,h=h0(o,n);h===0?(o.next=null,a===null?$l=c:a.next=c,c===null&&(pr=a)):(a=o,(e!==0||(h&3)!==0)&&(tu=!0)),o=c}_n!==0&&_n!==5||Ro(e),Ya!==0&&(Ya=0)}function h0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var _=31-Nt(h),R=1<<_,I=c[_];I===-1?((R&a)===0||(R&o)!==0)&&(c[_]=It(R,n)):I<=n&&(e.expiredLanes|=R),h&=~R}if(n=Ye,a=Te,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Qt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Qt(o),Yr(a)){case 2:case 8:a=y;break;case 32:a=q;break;case 268435456:a=lt;break;default:a=q}return o=d0.bind(null,e),a=zt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Qt(o),e.callbackPriority=2,e.callbackNode=null,2}function d0(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var o=Te;return o=mt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Zg(e,o,n),h0(e,Se()),e.callbackNode!=null&&e.callbackNode===a?d0.bind(null,e):null)}function p0(e,n){if(jl())return null;Zg(e,n,!0)}function cS(){yS(function(){(Le&6)!==0?zt(D,uS):f0()})}function If(){if(Ya===0){var e=$s;e===0&&(e=te,te<<=1,(te&261888)===0&&(te=256)),Ya=e}return Ya}function m0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ds(""+e)}function g0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function fS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=m0((c[yn]||null).action),_=o.submitter;_&&(n=(n=_[yn]||null)?m0(n.formAction):_.getAttribute("formAction"),n!==null&&(h=n,_=null));var R=new hl("action","action",null,o,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var I=_?g0(c,_):new FormData(c);sf(a,{pending:!0,data:I,method:c.method,action:h},null,I)}}else typeof h=="function"&&(R.preventDefault(),I=_?g0(c,_):new FormData(c),sf(a,{pending:!0,data:I,method:c.method,action:h},h,I))},currentTarget:c}]})}}for(var Hf=0;Hf<Mc.length;Hf++){var Gf=Mc[Hf],hS=Gf.toLowerCase(),dS=Gf[0].toUpperCase()+Gf.slice(1);Ti(hS,"on"+dS)}Ti(Yp,"onAnimationEnd"),Ti(Zp,"onAnimationIteration"),Ti(Kp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(wx,"onTransitionRun"),Ti(Dx,"onTransitionStart"),Ti(Ux,"onTransitionCancel"),Ti(Qp,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function _0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],I=R.instance,nt=R.currentTarget;if(R=R.listener,I!==h&&c.isPropagationStopped())break t;h=R,c.currentTarget=nt;try{h(c)}catch(dt){ml(dt)}c.currentTarget=null,h=I}else for(_=0;_<o.length;_++){if(R=o[_],I=R.instance,nt=R.currentTarget,R=R.listener,I!==h&&c.isPropagationStopped())break t;h=R,c.currentTarget=nt;try{h(c)}catch(dt){ml(dt)}c.currentTarget=null,h=I}}}}function Ee(e,n){var a=n[cs];a===void 0&&(a=n[cs]=new Set);var o=e+"__bubble";a.has(o)||(v0(n,e,2,!1),a.add(o))}function Vf(e,n,a){var o=0;n&&(o|=4),v0(a,e,o,n)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Xf(e){if(!e[eu]){e[eu]=!0,ll.forEach(function(a){a!=="selectionchange"&&(pS.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[eu]||(n[eu]=!0,Vf("selectionchange",!1,n))}}function v0(e,n,a,o){switch(Y0(n)){case 2:var c=VS;break;case 8:c=XS;break;default:c=ah}a=c.bind(null,n,a,e),c=void 0,!lc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function kf(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===c)break;if(_===4)for(_=o.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;R!==null;){if(_=Qi(R),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){o=h=_;continue t}R=R.parentNode}}o=o.return}Ep(function(){var nt=h,dt=rc(a),xt=[];t:{var ot=Jp.get(e);if(ot!==void 0){var ut=hl,qt=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ut=ox;break;case"focusin":qt="focus",ut=hc;break;case"focusout":qt="blur",ut=hc;break;case"beforeblur":case"afterblur":ut=hc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=cx;break;case Yp:case Zp:case Kp:ut=jv;break;case Qp:ut=hx;break;case"scroll":case"scrollend":ut=Yv;break;case"wheel":ut=px;break;case"copy":case"cut":case"paste":ut=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Cp;break;case"toggle":case"beforetoggle":ut=gx}var ae=(n&4)!==0,We=!ae&&(e==="scroll"||e==="scrollend"),Q=ae?ot!==null?ot+"Capture":null:ot;ae=[];for(var X=nt,et;X!==null;){var gt=X;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||Q===null||(gt=Kr(X,Q),gt!=null&&ae.push(wo(X,gt,et))),We)break;X=X.return}0<ae.length&&(ot=new ut(ot,qt,null,a,dt),xt.push({event:ot,listeners:ae}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&a!==sc&&(qt=a.relatedTarget||a.fromElement)&&(Qi(qt)||qt[In]))break t;if((ut||ot)&&(ot=dt.window===dt?dt:(ot=dt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(qt=a.relatedTarget||a.toElement,ut=nt,qt=qt?Qi(qt):null,qt!==null&&(We=u(qt),ae=qt.tag,qt!==We||ae!==5&&ae!==27&&ae!==6)&&(qt=null)):(ut=null,qt=nt),ut!==qt)){if(ae=Ap,gt="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Cp,gt="onPointerLeave",Q="onPointerEnter",X="pointer"),We=ut==null?ot:hs(ut),et=qt==null?ot:hs(qt),ot=new ae(gt,X+"leave",ut,a,dt),ot.target=We,ot.relatedTarget=et,gt=null,Qi(dt)===nt&&(ae=new ae(Q,X+"enter",qt,a,dt),ae.target=et,ae.relatedTarget=We,gt=ae),We=gt,ut&&qt)e:{for(ae=mS,Q=ut,X=qt,et=0,gt=Q;gt;gt=ae(gt))et++;gt=0;for(var ne=X;ne;ne=ae(ne))gt++;for(;0<et-gt;)Q=ae(Q),et--;for(;0<gt-et;)X=ae(X),gt--;for(;et--;){if(Q===X||X!==null&&Q===X.alternate){ae=Q;break e}Q=ae(Q),X=ae(X)}ae=null}else ae=null;ut!==null&&x0(xt,ot,ut,ae,!1),qt!==null&&We!==null&&x0(xt,We,qt,ae,!0)}}t:{if(ot=nt?hs(nt):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Ue=zp;else if(Op(ot))if(Bp)Ue=Ax;else{Ue=bx;var Kt=Ex}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&Oe(nt.elementType)&&(Ue=zp):Ue=Tx;if(Ue&&(Ue=Ue(e,nt))){Pp(xt,Ue,a,dt);break t}Kt&&Kt(e,ot,nt),e==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&Me(ot,"number",ot.value)}switch(Kt=nt?hs(nt):window,e){case"focusin":(Op(Kt)||Kt.contentEditable==="true")&&(Ws=Kt,vc=nt,io=null);break;case"focusout":io=vc=Ws=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Wp(xt,a,dt);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":Wp(xt,a,dt)}var me;if(pc)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else ks?Np(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(wp&&a.locale!=="ko"&&(ks||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&ks&&(me=bp()):(Ua=dt,uc="value"in Ua?Ua.value:Ua.textContent,ks=!0)),Kt=nu(nt,Ae),0<Kt.length&&(Ae=new Rp(Ae,e,null,a,dt),xt.push({event:Ae,listeners:Kt}),me?Ae.data=me:(me=Lp(a),me!==null&&(Ae.data=me)))),(me=vx?xx(e,a):Sx(e,a))&&(Ae=nu(nt,"onBeforeInput"),0<Ae.length&&(Kt=new Rp("onBeforeInput","beforeinput",null,a,dt),xt.push({event:Kt,listeners:Ae}),Kt.data=me)),fS(xt,e,nt,a,dt)}_0(xt,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Kr(e,a),c!=null&&o.unshift(wo(e,c,h)),c=Kr(e,n),c!=null&&o.push(wo(e,c,h))),e.tag===3)return o;e=e.return}return[]}function mS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,n,a,o,c){for(var h=n._reactName,_=[];a!==null&&a!==o;){var R=a,I=R.alternate,nt=R.stateNode;if(R=R.tag,I!==null&&I===o)break;R!==5&&R!==26&&R!==27||nt===null||(I=nt,c?(nt=Kr(a,h),nt!=null&&_.unshift(wo(a,nt,I))):c||(nt=Kr(a,h),nt!=null&&_.push(wo(a,nt,I)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var gS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function S0(e){return(typeof e=="string"?e:""+e).replace(gS,`
`).replace(_S,"")}function M0(e,n){return n=S0(n),S0(e)===n}function ke(e,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(e,""+o);break;case"className":Wt(e,"class",o);break;case"tabIndex":Wt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Wt(e,a,o);break;case"style":bi(e,o,h);break;case"data":if(n!=="object"){Wt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ds(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&ke(e,n,"name",c.name,c,null),ke(e,n,"formEncType",c.formEncType,c,null),ke(e,n,"formMethod",c.formMethod,c,null),ke(e,n,"formTarget",c.formTarget,c,null)):(ke(e,n,"encType",c.encType,c,null),ke(e,n,"method",c.method,c,null),ke(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ds(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ds(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Pt(e,"popover",o);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Pt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zi.get(a)||a,Pt(e,a,o))}}function Wf(e,n,a,o,c,h){switch(a){case"style":bi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ti(e,o):(typeof o=="number"||typeof o=="bigint")&&ti(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=e[yn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Pt(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var _=a[h];if(_!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,h,_,a,null)}}c&&ke(e,n,"srcSet",a.srcSet,a,null),o&&ke(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=h=_=c=null,I=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":c=dt;break;case"type":_=dt;break;case"checked":I=dt;break;case"defaultChecked":nt=dt;break;case"value":h=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:ke(e,n,o,dt,a,null)}}wn(e,h,R,I,nt,_,c,!1);return;case"select":Ee("invalid",e),o=_=h=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":h=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:ke(e,n,c,R,a,null)}n=h,a=_,e.multiple=!!o,n!=null?gn(e,!!o,n,!1):a!=null&&gn(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),h=c=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":c=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:ke(e,n,_,R,a,null)}Ei(e,o,c,h);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ke(e,n,I,o,a,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)Ee(Co[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,nt,o,a,null)}return;default:if(Oe(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Wf(e,n,dt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&ke(e,n,R,o,a,null))}function vS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,_=null,R=null,I=null,nt=null,dt=null;for(ut in a){var xt=a[ut];if(a.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":I=xt;default:o.hasOwnProperty(ut)||ke(e,n,ut,null,o,xt)}}for(var ot in o){var ut=o[ot];if(xt=a[ot],o.hasOwnProperty(ot)&&(ut!=null||xt!=null))switch(ot){case"type":h=ut;break;case"name":c=ut;break;case"checked":nt=ut;break;case"defaultChecked":dt=ut;break;case"value":_=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==xt&&ke(e,n,ot,ut,o,xt)}}Gt(e,_,R,I,nt,dt,h,c);return;case"select":ut=_=R=ot=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":ut=I;default:o.hasOwnProperty(h)||ke(e,n,h,null,o,I)}for(c in o)if(h=o[c],I=a[c],o.hasOwnProperty(c)&&(h!=null||I!=null))switch(c){case"value":ot=h;break;case"defaultValue":R=h;break;case"multiple":_=h;default:h!==I&&ke(e,n,c,h,o,I)}n=R,a=_,o=ut,ot!=null?gn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?gn(e,!!a,n,!0):gn(e,!!a,a?[]:"",!1));return;case"textarea":ut=ot=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:ke(e,n,R,null,o,c)}for(_ in o)if(c=o[_],h=a[_],o.hasOwnProperty(_)&&(c!=null||h!=null))switch(_){case"value":ot=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&ke(e,n,_,c,o,h)}$n(e,ot,ut);return;case"option":for(var qt in a)ot=a[qt],a.hasOwnProperty(qt)&&ot!=null&&!o.hasOwnProperty(qt)&&(qt==="selected"?e.selected=!1:ke(e,n,qt,null,o,ot));for(I in o)ot=o[I],ut=a[I],o.hasOwnProperty(I)&&ot!==ut&&(ot!=null||ut!=null)&&(I==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":ke(e,n,I,ot,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)ot=a[ae],a.hasOwnProperty(ae)&&ot!=null&&!o.hasOwnProperty(ae)&&ke(e,n,ae,null,o,ot);for(nt in o)if(ot=o[nt],ut=a[nt],o.hasOwnProperty(nt)&&ot!==ut&&(ot!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ke(e,n,nt,ot,o,ut)}return;default:if(Oe(n)){for(var We in a)ot=a[We],a.hasOwnProperty(We)&&ot!==void 0&&!o.hasOwnProperty(We)&&Wf(e,n,We,void 0,o,ot);for(dt in o)ot=o[dt],ut=a[dt],!o.hasOwnProperty(dt)||ot===ut||ot===void 0&&ut===void 0||Wf(e,n,dt,ot,o,ut);return}}for(var Q in a)ot=a[Q],a.hasOwnProperty(Q)&&ot!=null&&!o.hasOwnProperty(Q)&&ke(e,n,Q,null,o,ot);for(xt in o)ot=o[xt],ut=a[xt],!o.hasOwnProperty(xt)||ot===ut||ot==null&&ut==null||ke(e,n,xt,ot,o,ut)}function y0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,_=c.initiatorType,R=c.duration;if(h&&R&&y0(_)){for(_=0,R=c.responseEnd,o+=1;o<a.length;o++){var I=a[o],nt=I.startTime;if(nt>R)break;var dt=I.transferSize,xt=I.initiatorType;dt&&y0(xt)&&(I=I.responseEnd,_+=dt*(I<R?1:(R-nt)/(I-nt)))}if(--o,n+=8*(h+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qf=null,Yf=null;function iu(e){return e.nodeType===9?e:e.ownerDocument}function E0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kf=null;function SS(){var e=window.event;return e&&e.type==="popstate"?e===Kf?!1:(Kf=e,!0):(Kf=null,!1)}var T0=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(e){return A0.resolve(null).then(e).catch(ES)}:T0;function ES(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function R0(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),vr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var h=a.firstChild;h;){var _=h.nextSibling,R=h.nodeName;h[Ra]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=_}}else a==="body"&&Do(e.ownerDocument.body);a=c}while(a);vr(n)}function C0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qf(a),Ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function bS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ra])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function TS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function w0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function Jf(e){return e.data==="$?"||e.data==="$~"}function jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function AS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $f=null;function D0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function U0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function N0(e,n,a){switch(n=iu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ca(e)}var Si=new Map,L0=new Set;function au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=H.d;H.d={f:RS,r:CS,D:wS,C:DS,L:US,m:NS,X:OS,S:LS,M:PS};function RS(){var e=pa.f(),n=Kl();return e||n}function CS(e){var n=Ji(e);n!==null&&n.tag===5&&n.type==="form"?Qm(n):pa.r(e)}var mr=typeof document>"u"?null:document;function O0(e,n,a){var o=mr;if(o&&typeof n=="string"&&n){var c=Fe(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),L0.has(c)||(L0.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),An(n,"link",e),cn(n),o.head.appendChild(n)))}}function wS(e){pa.D(e),O0("dns-prefetch",e,null)}function DS(e,n){pa.C(e,n),O0("preconnect",e,n)}function US(e,n,a){pa.L(e,n,a);var o=mr;if(o&&e&&n){var c='link[rel="preload"][as="'+Fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Fe(a.imageSizes)+'"]')):c+='[href="'+Fe(e)+'"]';var h=c;switch(n){case"style":h=gr(e);break;case"script":h=_r(e)}Si.has(h)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Uo(h))||n==="script"&&o.querySelector(No(h))||(n=o.createElement("link"),An(n,"link",e),cn(n),o.head.appendChild(n)))}}function NS(e,n){pa.m(e,n);var a=mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Fe(o)+'"][href="'+Fe(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=_r(e)}if(!Si.has(h)&&(e=x({rel:"modulepreload",href:e},n),Si.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(h)))return}o=a.createElement("link"),An(o,"link",e),cn(o),a.head.appendChild(o)}}}function LS(e,n,a){pa.S(e,n,a);var o=mr;if(o&&e){var c=wa(o).hoistableStyles,h=gr(e);n=n||"default";var _=c.get(h);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Uo(h)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(h))&&th(e,a);var I=_=o.createElement("link");cn(I),An(I,"link",e),I._p=new Promise(function(nt,dt){I.onload=nt,I.onerror=dt}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,su(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},c.set(h,_)}}}function OS(e,n){pa.X(e,n);var a=mr;if(a&&e){var o=wa(a).hoistableScripts,c=_r(e),h=o.get(c);h||(h=a.querySelector(No(c)),h||(e=x({src:e,async:!0},n),(n=Si.get(c))&&eh(e,n),h=a.createElement("script"),cn(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function PS(e,n){pa.M(e,n);var a=mr;if(a&&e){var o=wa(a).hoistableScripts,c=_r(e),h=o.get(c);h||(h=a.querySelector(No(c)),h||(e=x({src:e,async:!0,type:"module"},n),(n=Si.get(c))&&eh(e,n),h=a.createElement("script"),cn(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function P0(e,n,a,o){var c=(c=it.current)?au(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gr(a.href),a=wa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gr(a.href);var h=wa(c).hoistableStyles,_=h.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,_),(h=c.querySelector(Uo(e)))&&!h._p&&(_.instance=h,_.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),h||zS(c,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_r(a),a=wa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function gr(e){return'href="'+Fe(e)+'"'}function Uo(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function zS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),cn(n),e.head.appendChild(n))}function _r(e){return'[src="'+Fe(e)+'"]'}function No(e){return"script[async]"+e}function B0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Fe(a.href)+'"]');if(o)return n.instance=o,cn(o),o;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),cn(o),An(o,"style",c),su(o,a.precedence,e),n.instance=o;case"stylesheet":c=gr(a.href);var h=e.querySelector(Uo(c));if(h)return n.state.loading|=4,n.instance=h,cn(h),h;o=z0(a),(c=Si.get(c))&&th(o,c),h=(e.ownerDocument||e).createElement("link"),cn(h);var _=h;return _._p=new Promise(function(R,I){_.onload=R,_.onerror=I}),An(h,"link",o),n.state.loading|=4,su(h,a.precedence,e),n.instance=h;case"script":return h=_r(a.src),(c=e.querySelector(No(h)))?(n.instance=c,cn(c),c):(o=a,(c=Si.get(h))&&(o=x({},a),eh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),cn(c),An(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,su(o,a.precedence,e));return n.instance}function su(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)h=R;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function eh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ru=null;function F0(e,n,a){if(ru===null){var o=new Map,c=ru=new Map;c.set(a,o)}else c=ru,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[Ra]||h[un]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var _=h.getAttribute(n)||"";_=e+_;var R=o.get(_);R?R.push(h):o.set(_,[h])}}return o}function I0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function BS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function FS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=gr(o.href),h=n.querySelector(Uo(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ou.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,cn(h);return}h=n.ownerDocument||n,o=z0(o),(c=Si.get(c))&&th(o,c),h=h.createElement("link"),cn(h);var _=h;_._p=new Promise(function(R,I){_.onload=R,_.onerror=I}),An(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ou.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var nh=0;function IS(e,n){return e.stylesheets&&e.count===0&&uu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&uu(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&nh===0&&(nh=62500*xS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uu(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>nh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function ou(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lu=null;function uu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lu=new Map,n.forEach(HS,e),lu=null,ou.call(e))}function HS(e,n){if(!(n.state.loading&4)){var a=lu.get(e);if(a)var o=a.get(null);else{a=new Map,lu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var _=c[h];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),h=a.get(_)||o,h===o&&a.set(null,c),a.set(_,c),this.count++,o=ou.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:P,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function GS(e,n,a,o,c,h,_,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zt(0),this.hiddenUpdates=Zt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function G0(e,n,a,o,c,h,_,R,I,nt,dt,xt){return e=new GS(e,n,a,_,I,nt,dt,xt,R),n=1,h===!0&&(n|=24),h=ni(3,null,null,n),e.current=h,h.stateNode=e,n=Oc(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Fc(h),e}function V0(e){return e?(e=Zs,e):Zs}function X0(e,n,a,o,c,h){c=V0(c),o.context===null?o.context=c:o.pendingContext=c,o=Ba(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Fa(e,o,n),a!==null&&(Wn(a,e,n),co(a,e,n))}function k0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ih(e,n){k0(e,n),(e=e.alternate)&&k0(e,n)}function W0(e){if(e.tag===13||e.tag===31){var n=_s(e,67108864);n!==null&&Wn(n,e,67108864),ih(e,67108864)}}function q0(e){if(e.tag===13||e.tag===31){var n=oi();n=qr(n);var a=_s(e,n);a!==null&&Wn(a,e,n),ih(e,n)}}var cu=!0;function VS(e,n,a,o){var c=z.T;z.T=null;var h=H.p;try{H.p=2,ah(e,n,a,o)}finally{H.p=h,z.T=c}}function XS(e,n,a,o){var c=z.T;z.T=null;var h=H.p;try{H.p=8,ah(e,n,a,o)}finally{H.p=h,z.T=c}}function ah(e,n,a,o){if(cu){var c=sh(o);if(c===null)kf(e,n,o,fu,a),Z0(e,o);else if(WS(c,e,n,a,o))o.stopPropagation();else if(Z0(e,o),n&4&&-1<kS.indexOf(e)){for(;c!==null;){var h=Ji(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var _=wt(h.pendingLanes);if(_!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var I=1<<31-Nt(_);R.entanglements[1]|=I,_&=~I}Hi(h),(Le&6)===0&&(Yl=Se()+500,Ro(0))}}break;case 31:case 13:R=_s(h,2),R!==null&&Wn(R,h,2),Kl(),ih(h,2)}if(h=sh(o),h===null&&kf(e,n,o,fu,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else kf(e,n,o,null,a)}}function sh(e){return e=rc(e),rh(e)}var fu=null;function rh(e){if(fu=null,e=Qi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fu=e,null}function Y0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(re()){case D:return 2;case y:return 8;case q:case $:return 32;case lt:return 268435456;default:return 32}default:return 32}}var oh=!1,Ka=null,Qa=null,Ja=null,Oo=new Map,Po=new Map,ja=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Ji(n),n!==null&&W0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function WS(e,n,a,o,c){switch(n){case"focusin":return Ka=zo(Ka,e,n,a,o,c),!0;case"dragenter":return Qa=zo(Qa,e,n,a,o,c),!0;case"mouseover":return Ja=zo(Ja,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return Oo.set(h,zo(Oo.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Po.set(h,zo(Po.get(h)||null,e,n,a,o,c)),!0}return!1}function K0(e){var n=Qi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){q0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){q0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=sh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);sc=o,a.target.dispatchEvent(o),sc=null}else return n=Ji(a),n!==null&&W0(n),e.blockedOn=a,!1;n.shift()}return!0}function Q0(e,n,a){hu(e)&&a.delete(n)}function qS(){oh=!1,Ka!==null&&hu(Ka)&&(Ka=null),Qa!==null&&hu(Qa)&&(Qa=null),Ja!==null&&hu(Ja)&&(Ja=null),Oo.forEach(Q0),Po.forEach(Q0)}function du(e,n){e.blockedOn===n&&(e.blockedOn=null,oh||(oh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,qS)))}var pu=null;function J0(e){pu!==e&&(pu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pu===e&&(pu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(rh(o||a)===null)continue;break}var h=Ji(a);h!==null&&(e.splice(n,3),n-=3,sf(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function vr(e){function n(I){return du(I,e)}Ka!==null&&du(Ka,e),Qa!==null&&du(Qa,e),Ja!==null&&du(Ja,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<ja.length;a++){var o=ja[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)K0(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],_=c[yn]||null;if(typeof h=="function")_||J0(a);else if(_){var R=null;if(h&&h.hasAttribute("formAction")){if(c=h,_=h[yn]||null)R=_.formAction;else if(rh(c)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),J0(a)}}}function j0(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function lh(e){this._internalRoot=e}mu.prototype.render=lh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oi();X0(a,o,e,n,null,null)},mu.prototype.unmount=lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;X0(e.current,2,null,e,null,null),Kl(),n[In]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&K0(e)}};var $0=t.version;if($0!=="19.2.7")throw Error(s(527,$0,"19.2.7"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var YS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{ft=gu.inject(YS),ct=gu}catch{}}return Fo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=rg,h=og,_=lg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=G0(e,1,!1,null,null,a,o,null,c,h,_,j0),e[In]=n.current,Xf(e),new lh(n)},Fo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",h=rg,_=og,R=lg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=G0(e,1,!0,n,a??null,o,c,I,h,_,R,j0),n.context=V0(null),a=n.current,o=oi(),o=qr(o),c=Ba(o),c.callback=null,Fa(a,c,o),a=o,n.current.lanes=a,Xt(n,a),Hi(n),e[In]=n.current,Xf(e),new mu(n)},Fo.version="19.2.7",Fo}var u_;function iM(){if(u_)return fh.exports;u_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fh.exports=nM(),fh.exports}var aM=iM();const qd="185",sM=0,c_=1,rM=2,Hu=1,oM=2,qo=3,us=0,Zn=1,ya=2,qi=0,Lr=1,jh=2,f_=3,h_=4,lM=5,Os=100,uM=101,cM=102,fM=103,hM=104,dM=200,pM=201,mM=202,gM=203,$h=204,td=205,_M=206,vM=207,xM=208,SM=209,MM=210,yM=211,EM=212,bM=213,TM=214,ed=0,nd=1,id=2,zr=3,ad=4,sd=5,rd=6,od=7,gv=0,AM=1,RM=2,Yi=0,Yd=1,Zd=2,Kd=3,Qd=4,Jd=5,jd=6,$d=7,_v=300,Fs=301,Br=302,mh=303,gh=304,ec=306,ld=1e3,Ea=1001,ud=1002,Cn=1003,CM=1004,_u=1005,Ln=1006,_h=1007,zs=1008,fi=1009,vv=1010,xv=1011,Jo=1012,tp=1013,Ki=1014,ki=1015,Kn=1016,ep=1017,np=1018,jo=1020,Sv=35902,Mv=35899,yv=1021,Ev=1022,Ni=1023,Ta=1026,Bs=1027,bv=1028,ip=1029,Is=1030,ap=1031,sp=1033,Gu=33776,Vu=33777,Xu=33778,ku=33779,cd=35840,fd=35841,hd=35842,dd=35843,pd=36196,md=37492,gd=37496,_d=37488,vd=37489,Ku=37490,xd=37491,Sd=37808,Md=37809,yd=37810,Ed=37811,bd=37812,Td=37813,Ad=37814,Rd=37815,Cd=37816,wd=37817,Dd=37818,Ud=37819,Nd=37820,Ld=37821,Od=36492,Pd=36494,zd=36495,Bd=36283,Fd=36284,Qu=36285,Id=36286,wM=3200,Hd=0,DM=1,os="",yi="srgb",Ju="srgb-linear",ju="linear",Pe="srgb",xr=7680,d_=519,UM=512,NM=513,LM=514,rp=515,OM=516,PM=517,op=518,zM=519,p_=35044,m_="300 es",Wi=2e3,$o=2001;function BM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function $u(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function FM(){const r=$u("canvas");return r.style.display="block",r}const g_={};function __(...r){const t="THREE."+r.shift();console.log(t,...r)}function Tv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function se(...r){r=Tv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function we(...r){r=Tv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Or(...r){const t=r.join(" ");t in g_||(g_[t]=!0,se(...r))}function IM(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const HM={[ed]:nd,[id]:rd,[ad]:od,[zr]:sd,[nd]:ed,[rd]:id,[od]:ad,[sd]:zr};class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=Math.PI/180,Gd=180/Math.PI;function nl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function be(r,t,i){return Math.max(t,Math.min(i,r))}function GM(r,t){return(r%t+t)%t}function xh(r,t,i){return(1-i)*r+i*t}function Io(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _p=class _p{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*s-f*l+t.x,this.y=u*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_p.prototype.isVector2=!0;let Yt=_p;class Vr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,f,d){let m=s[l+0],p=s[l+1],v=s[l+2],x=s[l+3],g=u[f+0],M=u[f+1],T=u[f+2],w=u[f+3];if(x!==w||m!==g||p!==M||v!==T){let E=m*g+p*M+v*T+x*w;E<0&&(g=-g,M=-M,T=-T,w=-w,E=-E);let S=1-d;if(E<.9995){const F=Math.acos(E),P=Math.sin(F);S=Math.sin(S*F)/P,d=Math.sin(d*F)/P,m=m*S+g*d,p=p*S+M*d,v=v*S+T*d,x=x*S+w*d}else{m=m*S+g*d,p=p*S+M*d,v=v*S+T*d,x=x*S+w*d;const F=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=F,p*=F,v*=F,x*=F}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,u,f){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],x=u[f],g=u[f+1],M=u[f+2],T=u[f+3];return t[i]=d*T+v*x+m*M-p*g,t[i+1]=m*T+v*g+p*x-d*M,t[i+2]=p*T+v*M+d*g-m*x,t[i+3]=v*T-d*x-m*g-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),x=d(u/2),g=m(s/2),M=m(l/2),T=m(u/2);switch(f){case"XYZ":this._x=g*v*x+p*M*T,this._y=p*M*x-g*v*T,this._z=p*v*T+g*M*x,this._w=p*v*x-g*M*T;break;case"YXZ":this._x=g*v*x+p*M*T,this._y=p*M*x-g*v*T,this._z=p*v*T-g*M*x,this._w=p*v*x+g*M*T;break;case"ZXY":this._x=g*v*x-p*M*T,this._y=p*M*x+g*v*T,this._z=p*v*T+g*M*x,this._w=p*v*x-g*M*T;break;case"ZYX":this._x=g*v*x-p*M*T,this._y=p*M*x+g*v*T,this._z=p*v*T-g*M*x,this._w=p*v*x+g*M*T;break;case"YZX":this._x=g*v*x+p*M*T,this._y=p*M*x+g*v*T,this._z=p*v*T-g*M*x,this._w=p*v*x-g*M*T;break;case"XZY":this._x=g*v*x-p*M*T,this._y=p*M*x-g*v*T,this._z=p*v*T+g*M*x,this._w=p*v*x+g*M*T;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],v=i[6],x=i[10],g=s+d+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(f-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(u-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(f-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,f=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*d+l*p-u*m,this._y=l*v+f*m+u*d-s*p,this._z=u*v+f*p+s*m-l*d,this._w=f*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vp=class vp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(v_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(v_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),v=2*(d*i-u*l),x=2*(u*s-f*i);return this.x=i+m*p+f*x-d*v,this.y=s+m*v+d*p-u*x,this.z=l+m*x+u*v-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Sh.copy(this).projectOnVector(t),this.sub(Sh)}reflect(t){return this.sub(Sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vp.prototype.isVector3=!0;let W=vp;const Sh=new W,v_=new Vr,xp=class xp{constructor(t,i,s,l,u,f,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,m,p)}set(t,i,s,l,u,f,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],v=s[4],x=s[7],g=s[2],M=s[5],T=s[8],w=l[0],E=l[3],S=l[6],F=l[1],P=l[4],C=l[7],B=l[2],N=l[5],L=l[8];return u[0]=f*w+d*F+m*B,u[3]=f*E+d*P+m*N,u[6]=f*S+d*C+m*L,u[1]=p*w+v*F+x*B,u[4]=p*E+v*P+x*N,u[7]=p*S+v*C+x*L,u[2]=g*w+M*F+T*B,u[5]=g*E+M*P+T*N,u[8]=g*S+M*C+T*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*f*v-i*d*p-s*u*v+s*d*m+l*u*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],x=v*f-d*p,g=d*m-v*u,M=p*u-f*m,T=i*x+s*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=x*w,t[1]=(l*p-v*s)*w,t[2]=(d*s-l*f)*w,t[3]=g*w,t[4]=(v*i-l*m)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return Or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mh.makeScale(t,i)),this}rotate(t){return Or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mh.makeRotation(-t)),this}translate(t,i){return Or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xp.prototype.isMatrix3=!0;let ce=xp;const Mh=new ce,x_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VM(){const r={enabled:!0,workingColorSpace:Ju,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Pe&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Pe&&(l.r=Pr(l.r),l.g=Pr(l.g),l.b=Pr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?ju:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ju]:{primaries:t,whitePoint:s,transfer:ju,toXYZ:x_,fromXYZ:S_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:x_,fromXYZ:S_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const Re=VM();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Sr;class XM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Sr===void 0&&(Sr=$u("canvas")),Sr.width=t.width,Sr.height=t.height;const l=Sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=$u("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ba(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kM=0;class lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=nl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(yh(l[f].image)):u.push(yh(l[f]))}else u=yh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?XM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let WM=0;const Eh=new W;class Bn extends Hs{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=Ea,l=Ea,u=Ln,f=zs,d=Ni,m=fi,p=Bn.DEFAULT_ANISOTROPY,v=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=nl(),this.name="",this.source=new lp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_v)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ld:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case ud:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ld:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case ud:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=_v;Bn.DEFAULT_ANISOTROPY=1;const Sp=class Sp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],v=m[4],x=m[8],g=m[1],M=m[5],T=m[9],w=m[2],E=m[6],S=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-w)<.01&&Math.abs(T-E)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+w)<.1&&Math.abs(T+E)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,C=(M+1)/2,B=(S+1)/2,N=(v+g)/4,L=(x+w)/4,b=(T+E)/4;return P>C&&P>B?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=N/s,u=L/s):C>B?C<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),s=N/l,u=b/l):B<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),s=L/u,l=b/u),this.set(s,l,u,i),this}let F=Math.sqrt((E-T)*(E-T)+(x-w)*(x-w)+(g-v)*(g-v));return Math.abs(F)<.001&&(F=1),this.x=(E-T)/F,this.y=(x-w)/F,this.z=(g-v)/F,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sp.prototype.isVector4=!0;let an=Sp;class qM extends Hs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},u=new Bn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new lp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends qM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Av extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class YM extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tc=class tc{constructor(t,i,s,l,u,f,d,m,p,v,x,g,M,T,w,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,m,p,v,x,g,M,T,w,E)}set(t,i,s,l,u,f,d,m,p,v,x,g,M,T,w,E){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=x,S[14]=g,S[3]=M,S[7]=T,S[11]=w,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Mr.setFromMatrixColumn(t,0).length(),u=1/Mr.setFromMatrixColumn(t,1).length(),f=1/Mr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const g=f*v,M=f*x,T=d*v,w=d*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=M+T*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=T+M*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*v,M=m*x,T=p*v,w=p*x;i[0]=g+w*d,i[4]=T*d-M,i[8]=f*p,i[1]=f*x,i[5]=f*v,i[9]=-d,i[2]=M*d-T,i[6]=w+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*v,M=m*x,T=p*v,w=p*x;i[0]=g-w*d,i[4]=-f*x,i[8]=T+M*d,i[1]=M+T*d,i[5]=f*v,i[9]=w-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*v,M=f*x,T=d*v,w=d*x;i[0]=m*v,i[4]=T*p-M,i[8]=g*p+w,i[1]=m*x,i[5]=w*p+g,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,M=f*p,T=d*m,w=d*p;i[0]=m*v,i[4]=w-g*x,i[8]=T*x+M,i[1]=x,i[5]=f*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*x+T,i[10]=g-w*x}else if(t.order==="XZY"){const g=f*m,M=f*p,T=d*m,w=d*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=g*x+w,i[5]=f*v,i[9]=M*x-T,i[2]=T*x-M,i[6]=d*v,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ZM,t,KM)}lookAt(t,i,s){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ts.crossVectors(s,li),ts.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ts.crossVectors(s,li)),ts.normalize(),vu.crossVectors(li,ts),l[0]=ts.x,l[4]=vu.x,l[8]=li.x,l[1]=ts.y,l[5]=vu.y,l[9]=li.y,l[2]=ts.z,l[6]=vu.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],v=s[1],x=s[5],g=s[9],M=s[13],T=s[2],w=s[6],E=s[10],S=s[14],F=s[3],P=s[7],C=s[11],B=s[15],N=l[0],L=l[4],b=l[8],O=l[12],K=l[1],V=l[5],J=l[9],ht=l[13],_t=l[2],j=l[6],z=l[10],H=l[14],tt=l[3],pt=l[7],vt=l[11],U=l[15];return u[0]=f*N+d*K+m*_t+p*tt,u[4]=f*L+d*V+m*j+p*pt,u[8]=f*b+d*J+m*z+p*vt,u[12]=f*O+d*ht+m*H+p*U,u[1]=v*N+x*K+g*_t+M*tt,u[5]=v*L+x*V+g*j+M*pt,u[9]=v*b+x*J+g*z+M*vt,u[13]=v*O+x*ht+g*H+M*U,u[2]=T*N+w*K+E*_t+S*tt,u[6]=T*L+w*V+E*j+S*pt,u[10]=T*b+w*J+E*z+S*vt,u[14]=T*O+w*ht+E*H+S*U,u[3]=F*N+P*K+C*_t+B*tt,u[7]=F*L+P*V+C*j+B*pt,u[11]=F*b+P*J+C*z+B*vt,u[15]=F*O+P*ht+C*H+B*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],f=t[1],d=t[5],m=t[9],p=t[13],v=t[2],x=t[6],g=t[10],M=t[14],T=t[3],w=t[7],E=t[11],S=t[15],F=m*M-p*g,P=d*M-p*x,C=d*g-m*x,B=f*M-p*v,N=f*g-m*v,L=f*x-d*v;return i*(w*F-E*P+S*C)-s*(T*F-E*B+S*N)+l*(T*P-w*B+S*L)-u*(T*C-w*N+E*L)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[1],f=t[5],d=t[9],m=t[2],p=t[6],v=t[10];return i*(f*v-d*p)-s*(u*v-d*m)+l*(u*p-f*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],x=t[9],g=t[10],M=t[11],T=t[12],w=t[13],E=t[14],S=t[15],F=i*d-s*f,P=i*m-l*f,C=i*p-u*f,B=s*m-l*d,N=s*p-u*d,L=l*p-u*m,b=v*w-x*T,O=v*E-g*T,K=v*S-M*T,V=x*E-g*w,J=x*S-M*w,ht=g*S-M*E,_t=F*ht-P*J+C*V+B*K-N*O+L*b;if(_t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/_t;return t[0]=(d*ht-m*J+p*V)*j,t[1]=(l*J-s*ht-u*V)*j,t[2]=(w*L-E*N+S*B)*j,t[3]=(g*N-x*L-M*B)*j,t[4]=(m*K-f*ht-p*O)*j,t[5]=(i*ht-l*K+u*O)*j,t[6]=(E*C-T*L-S*P)*j,t[7]=(v*L-g*C+M*P)*j,t[8]=(f*J-d*K+p*b)*j,t[9]=(s*K-i*J-u*b)*j,t[10]=(T*N-w*C+S*F)*j,t[11]=(x*C-v*N-M*F)*j,t[12]=(d*O-f*V-m*b)*j,t[13]=(i*V-s*O+l*b)*j,t[14]=(w*P-T*B-E*F)*j,t[15]=(v*B-x*P+g*F)*j,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=t.x,d=t.y,m=t.z,p=u*f,v=u*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*f,0,p*m-l*d,v*m+l*f,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,f){return this.set(1,s,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,v=f+f,x=d+d,g=u*p,M=u*v,T=u*x,w=f*v,E=f*x,S=d*x,F=m*p,P=m*v,C=m*x,B=s.x,N=s.y,L=s.z;return l[0]=(1-(w+S))*B,l[1]=(M+C)*B,l[2]=(T-P)*B,l[3]=0,l[4]=(M-C)*N,l[5]=(1-(g+S))*N,l[6]=(E+F)*N,l[7]=0,l[8]=(T+P)*L,l[9]=(E-F)*L,l[10]=(1-(g+w))*L,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let f=Mr.set(l[0],l[1],l[2]).length();const d=Mr.set(l[4],l[5],l[6]).length(),m=Mr.set(l[8],l[9],l[10]).length();u<0&&(f=-f),Ci.copy(this);const p=1/f,v=1/d,x=1/m;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=x,Ci.elements[9]*=x,Ci.elements[10]*=x,i.setFromRotationMatrix(Ci),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,u,f,d=Wi,m=!1){const p=this.elements,v=2*u/(i-t),x=2*u/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let T,w;if(m)T=u/(f-u),w=f*u/(f-u);else if(d===Wi)T=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===$o)T=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,f,d=Wi,m=!1){const p=this.elements,v=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let T,w;if(m)T=1/(f-u),w=f/(f-u);else if(d===Wi)T=-2/(f-u),w=-(f+u)/(f-u);else if(d===$o)T=-1/(f-u),w=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};tc.prototype.isMatrix4=!0;let nn=tc;const Mr=new W,Ci=new nn,ZM=new W(0,0,0),KM=new W(1,1,1),ts=new W,vu=new W,li=new W,M_=new nn,y_=new Vr;class Xr{constructor(t=0,i=0,s=0,l=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],v=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-be(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return M_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return y_.setFromEuler(this),this.setFromQuaternion(y_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class up{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let QM=0;const E_=new W,yr=new Vr,ma=new nn,xu=new W,Ho=new W,JM=new W,jM=new Vr,b_=new W(1,0,0),T_=new W(0,1,0),A_=new W(0,0,1),R_={type:"added"},$M={type:"removed"},Er={type:"childadded",child:null},bh={type:"childremoved",child:null};class hi extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DEFAULT_UP.clone();const t=new W,i=new Xr,s=new Vr,l=new W(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new ce}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(b_,t)}rotateY(t){return this.rotateOnAxis(T_,t)}rotateZ(t){return this.rotateOnAxis(A_,t)}translateOnAxis(t,i){return E_.copy(t).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(b_,t)}translateY(t){return this.translateOnAxis(T_,t)}translateZ(t){return this.translateOnAxis(A_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xu.copy(t):xu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Ho,xu,this.up):ma.lookAt(xu,Ho,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(ma),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(R_),Er.child=t,this.dispatchEvent(Er),Er.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($M),bh.child=t,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(R_),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,JM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,jM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),v=f(t.images),x=f(t.shapes),g=f(t.skeletons),M=f(t.animations),T=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}hi.DEFAULT_UP=new W(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yo extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const E=i.getJointPose(w,s),S=this._getHandJoint(p,w);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),M=.02,T=.005;p.inputState.pinching&&g>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Yo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Ah(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class _e{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=GM(t,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=Ah(f,u,t+1/3),this.g=Ah(f,u,t),this.b=Ah(f,u,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=yi){function s(u){u!==void 0&&parseFloat(u)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=yi){const s=Rv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Re.workingToColorSpace(Nn.copy(this),t),Math.round(be(Nn.r*255,0,255))*65536+Math.round(be(Nn.g*255,0,255))*256+Math.round(be(Nn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,u=Nn.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const x=f-d;switch(p=v<=.5?x/(f+d):x/(2-f-d),f){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=yi){Re.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==yi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(es),this.setHSL(es.h+t,es.s+i,es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(es),t.getHSL(Su);const s=xh(es.h,Su.h,i),l=xh(es.s,Su.s,i),u=xh(es.l,Su.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new _e;_e.NAMES=Rv;const wi=new W,ga=new W,Rh=new W,_a=new W,br=new W,Tr=new W,C_=new W,Ch=new W,wh=new W,Dh=new W,Uh=new an,Nh=new an,Lh=new an;class Ui{constructor(t=new W,i=new W,s=new W){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),wi.subVectors(t,i),l.cross(wi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){wi.subVectors(l,i),ga.subVectors(s,i),Rh.subVectors(t,i);const f=wi.dot(wi),d=wi.dot(ga),m=wi.dot(Rh),p=ga.dot(ga),v=ga.dot(Rh),x=f*p-d*d;if(x===0)return u.set(0,0,0),null;const g=1/x,M=(p*m-d*v)*g,T=(f*v-d*m)*g;return u.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,i,s,l,u,f,d,m){return this.getBarycoord(t,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(d,_a.z),m)}static getInterpolatedAttribute(t,i,s,l,u,f){return Uh.setScalar(0),Nh.setScalar(0),Lh.setScalar(0),Uh.fromBufferAttribute(t,i),Nh.fromBufferAttribute(t,s),Lh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Uh,u.x),f.addScaledVector(Nh,u.y),f.addScaledVector(Lh,u.z),f}static isFrontFacing(t,i,s,l){return wi.subVectors(s,i),ga.subVectors(t,i),wi.cross(ga).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),wi.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let f,d;br.subVectors(l,s),Tr.subVectors(u,s),Ch.subVectors(t,s);const m=br.dot(Ch),p=Tr.dot(Ch);if(m<=0&&p<=0)return i.copy(s);wh.subVectors(t,l);const v=br.dot(wh),x=Tr.dot(wh);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*p;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(br,f);Dh.subVectors(t,u);const M=br.dot(Dh),T=Tr.dot(Dh);if(T>=0&&M<=T)return i.copy(u);const w=M*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(Tr,d);const E=v*T-M*x;if(E<=0&&x-v>=0&&M-T>=0)return C_.subVectors(u,l),d=(x-v)/(x-v+(M-T)),i.copy(l).addScaledVector(C_,d);const S=1/(E+w+g);return f=w*S,d=g*S,i.copy(s).addScaledVector(br,f).addScaledVector(Tr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class il{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Di):Di.fromBufferAttribute(u,f),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mu.copy(s.boundingBox)),Mu.applyMatrix4(t.matrixWorld),this.union(Mu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),yu.subVectors(this.max,Go),Ar.subVectors(t.a,Go),Rr.subVectors(t.b,Go),Cr.subVectors(t.c,Go),ns.subVectors(Rr,Ar),is.subVectors(Cr,Rr),Ds.subVectors(Ar,Cr);let i=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Ds.z,Ds.y,ns.z,0,-ns.x,is.z,0,-is.x,Ds.z,0,-Ds.x,-ns.y,ns.x,0,-is.y,is.x,0,-Ds.y,Ds.x,0];return!Oh(i,Ar,Rr,Cr,yu)||(i=[1,0,0,0,1,0,0,0,1],!Oh(i,Ar,Rr,Cr,yu))?!1:(Eu.crossVectors(ns,is),i=[Eu.x,Eu.y,Eu.z],Oh(i,Ar,Rr,Cr,yu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const va=[new W,new W,new W,new W,new W,new W,new W,new W],Di=new W,Mu=new il,Ar=new W,Rr=new W,Cr=new W,ns=new W,is=new W,Ds=new W,Go=new W,yu=new W,Eu=new W,Us=new W;function Oh(r,t,i,s,l){for(let u=0,f=r.length-3;u<=f;u+=3){Us.fromArray(r,u);const d=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=t.dot(Us),p=i.dot(Us),v=s.dot(Us);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const mn=new W,bu=new Yt;let ey=0;class Zi extends Hs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ey++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=p_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)bu.fromBufferAttribute(this,i),bu.applyMatrix3(t),this.setXY(i,bu.x,bu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Io(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),u=qn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==p_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Cv extends Zi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class wv extends Zi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Qn extends Zi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const ny=new il,Vo=new W,Ph=new W;class cp{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ny.setFromPoints(t).getCenter(s);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Ph)),this.expandByPoint(Vo.copy(t.center).sub(Ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let iy=0;const Mi=new nn,zh=new hi,wr=new W,ui=new il,Xo=new il,Mn=new W;class Oi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(BM(t)?wv:Cv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ce().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,s){return Mi.makeTranslation(t,i,s),this.applyMatrix4(Mi),this}scale(t,i,s){return Mi.makeScale(t,i,s),this.applyMatrix4(Mi),this}lookAt(t){return zh.lookAt(t),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Qn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ui.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Xo.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ui.min,Xo.min),ui.expandByPoint(Mn),Mn.addVectors(ui.max,Xo.max),ui.expandByPoint(Mn)):(ui.expandByPoint(Xo.min),ui.expandByPoint(Xo.max))}ui.getCenter(s);let l=0;for(let u=0,f=t.count;u<f;u++)Mn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Mn.fromBufferAttribute(d,p),m&&(wr.fromBufferAttribute(t,p),Mn.add(wr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Zi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const d=[],m=[];for(let b=0;b<s.count;b++)d[b]=new W,m[b]=new W;const p=new W,v=new W,x=new W,g=new Yt,M=new Yt,T=new Yt,w=new W,E=new W;function S(b,O,K){p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,O),x.fromBufferAttribute(s,K),g.fromBufferAttribute(u,b),M.fromBufferAttribute(u,O),T.fromBufferAttribute(u,K),v.sub(p),x.sub(p),M.sub(g),T.sub(g);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(V),E.copy(x).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(V),d[b].add(w),d[O].add(w),d[K].add(w),m[b].add(E),m[O].add(E),m[K].add(E))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let b=0,O=F.length;b<O;++b){const K=F[b],V=K.start,J=K.count;for(let ht=V,_t=V+J;ht<_t;ht+=3)S(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}const P=new W,C=new W,B=new W,N=new W;function L(b){B.fromBufferAttribute(l,b),N.copy(B);const O=d[b];P.copy(O),P.sub(B.multiplyScalar(B.dot(O))).normalize(),C.crossVectors(N,O);const V=C.dot(m[b])<0?-1:1;f.setXYZW(b,P.x,P.y,P.z,V)}for(let b=0,O=F.length;b<O;++b){const K=F[b],V=K.start,J=K.count;for(let ht=V,_t=V+J;ht<_t;ht+=3)L(t.getX(ht+0)),L(t.getX(ht+1)),L(t.getX(ht+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new W,u=new W,f=new W,d=new W,m=new W,p=new W,v=new W,x=new W;if(t)for(let g=0,M=t.count;g<M;g+=3){const T=t.getX(g+0),w=t.getX(g+1),E=t.getX(g+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),v.subVectors(f,u),x.subVectors(l,u),v.cross(x),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,E),d.add(v),m.add(v),p.add(v),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(E,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,u),x.subVectors(l,u),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,x=d.normalized,g=new p.constructor(m.length*v);let M=0,T=0;for(let w=0,E=m.length;w<E;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*v;for(let S=0;S<v;S++)g[T++]=p[M++]}return new Zi(g,v,x)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,x=p.length;v<x;v++){const g=p[v],M=t(g,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,g=p.length;x<g;x++){const M=p[x];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],x=u[p];for(let g=0,M=x.length;g<M;g++)v.push(x[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,v=f.length;p<v;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ay=0;class al extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Lr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=td,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==us&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$h&&(s.blendSrc=this.blendSrc),this.blendDst!==td&&(s.blendDst=this.blendDst),this.blendEquation!==Os&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Yt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const xa=new W,Bh=new W,Tu=new W,as=new W,Fh=new W,Au=new W,Ih=new W;class Dv{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=xa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Bh.copy(t).add(i).multiplyScalar(.5),Tu.copy(i).sub(t).normalize(),as.copy(this.origin).sub(Bh);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Tu),d=as.dot(this.direction),m=-as.dot(Tu),p=as.lengthSq(),v=Math.abs(1-f*f);let x,g,M,T;if(v>0)if(x=f*m-d,g=f*d-m,T=u*v,x>=0)if(g>=-T)if(g<=T){const w=1/v;x*=w,g*=w,M=x*(x+f*g+2*d)+g*(f*x+g+2*m)+p}else g=u,x=Math.max(0,-(f*g+d)),M=-x*x+g*(g+2*m)+p;else g=-u,x=Math.max(0,-(f*g+d)),M=-x*x+g*(g+2*m)+p;else g<=-T?(x=Math.max(0,-(-f*u+d)),g=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+g*(g+2*m)+p):g<=T?(x=0,g=Math.min(Math.max(-u,-m),u),M=g*(g+2*m)+p):(x=Math.max(0,-(f*u+d)),g=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+g*(g+2*m)+p);else g=f>0?-u:u,x=Math.max(0,-(f*g+d)),M=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Bh).addScaledVector(Tu,g),M}intersectSphere(t,i){xa.subVectors(t.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),v>=0?(u=(t.min.y-g.y)*v,f=(t.max.y-g.y)*v):(u=(t.max.y-g.y)*v,f=(t.min.y-g.y)*v),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,i,s,l,u){Fh.subVectors(i,t),Au.subVectors(s,t),Ih.crossVectors(Fh,Au);let f=this.direction.dot(Ih),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;as.subVectors(this.origin,t);const m=d*this.direction.dot(Au.crossVectors(as,Au));if(m<0)return null;const p=d*this.direction.dot(Fh.cross(as));if(p<0||m+p>f)return null;const v=-d*as.dot(Ih);return v<0?null:this.at(v/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fp extends al{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const w_=new nn,Ns=new Dv,Ru=new cp,D_=new W,Cu=new W,wu=new W,Du=new W,Hh=new W,Uu=new W,U_=new W,Nu=new W;class Li extends hi{constructor(t=new Oi,i=new fp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Uu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],x=u[m];v!==0&&(Hh.fromBufferAttribute(x,t),f?Uu.addScaledVector(Hh,v):Uu.addScaledVector(Hh.sub(i),v))}i.add(Uu)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ru.copy(s.boundingSphere),Ru.applyMatrix4(u),Ns.copy(t.ray).recast(t.near),!(Ru.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Ru,D_)===null||Ns.origin.distanceToSquared(D_)>(t.far-t.near)**2))&&(w_.copy(u).invert(),Ns.copy(t.ray).applyMatrix4(w_),!(s.boundingBox!==null&&Ns.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ns)))}_computeIntersections(t,i,s){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,g=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const E=g[T],S=f[E.materialIndex],F=Math.max(E.start,M.start),P=Math.min(d.count,Math.min(E.start+E.count,M.start+M.count));for(let C=F,B=P;C<B;C+=3){const N=d.getX(C),L=d.getX(C+1),b=d.getX(C+2);l=Lu(this,S,t,s,p,v,x,N,L,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let E=T,S=w;E<S;E+=3){const F=d.getX(E),P=d.getX(E+1),C=d.getX(E+2);l=Lu(this,f,t,s,p,v,x,F,P,C),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const E=g[T],S=f[E.materialIndex],F=Math.max(E.start,M.start),P=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let C=F,B=P;C<B;C+=3){const N=C,L=C+1,b=C+2;l=Lu(this,S,t,s,p,v,x,N,L,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let E=T,S=w;E<S;E+=3){const F=E,P=E+1,C=E+2;l=Lu(this,f,t,s,p,v,x,F,P,C),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function sy(r,t,i,s,l,u,f,d){let m;if(t.side===Zn?m=s.intersectTriangle(f,u,l,!0,d):m=s.intersectTriangle(l,u,f,t.side===us,d),m===null)return null;Nu.copy(d),Nu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Nu);return p<i.near||p>i.far?null:{distance:p,point:Nu.clone(),object:r}}function Lu(r,t,i,s,l,u,f,d,m,p){r.getVertexPosition(d,Cu),r.getVertexPosition(m,wu),r.getVertexPosition(p,Du);const v=sy(r,t,i,s,Cu,wu,Du,U_);if(v){const x=new W;Ui.getBarycoord(U_,Cu,wu,Du,x),l&&(v.uv=Ui.getInterpolatedAttribute(l,d,m,p,x,new Yt)),u&&(v.uv1=Ui.getInterpolatedAttribute(u,d,m,p,x,new Yt)),f&&(v.normal=Ui.getInterpolatedAttribute(f,d,m,p,x,new W),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new W,materialIndex:0};Ui.getNormal(Cu,wu,Du,g.normal),v.face=g,v.barycoord=x}return v}class ry extends Bn{constructor(t=null,i=1,s=1,l,u,f,d,m,p=Cn,v=Cn,x,g){super(null,f,d,m,p,v,l,u,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gh=new W,oy=new W,ly=new ce;class rs{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Gh.subVectors(s,i).cross(oy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Gh),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ly.getNormalMatrix(t),l=this.coplanarPoint(Gh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new cp,uy=new Yt(.5,.5),Ou=new W;class hp{constructor(t=new rs,i=new rs,s=new rs,l=new rs,u=new rs,f=new rs){this.planes=[t,i,s,l,u,f]}set(t,i,s,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Wi,s=!1){const l=this.planes,u=t.elements,f=u[0],d=u[1],m=u[2],p=u[3],v=u[4],x=u[5],g=u[6],M=u[7],T=u[8],w=u[9],E=u[10],S=u[11],F=u[12],P=u[13],C=u[14],B=u[15];if(l[0].setComponents(p-f,M-v,S-T,B-F).normalize(),l[1].setComponents(p+f,M+v,S+T,B+F).normalize(),l[2].setComponents(p+d,M+x,S+w,B+P).normalize(),l[3].setComponents(p-d,M-x,S-w,B-P).normalize(),s)l[4].setComponents(m,g,E,C).normalize(),l[5].setComponents(p-m,M-g,S-E,B-C).normalize();else if(l[4].setComponents(p-m,M-g,S-E,B-C).normalize(),i===Wi)l[5].setComponents(p+m,M+g,S+E,B+C).normalize();else if(i===$o)l[5].setComponents(m,g,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const i=uy.distanceTo(t.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ou.x=l.normal.x>0?t.max.x:t.min.x,Ou.y=l.normal.y>0?t.max.y:t.min.y,Ou.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uv extends Bn{constructor(t=[],i=Fs,s,l,u,f,d,m,p,v){super(t,i,s,l,u,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fr extends Bn{constructor(t,i,s=Ki,l,u,f,d=Cn,m=Cn,p,v=Ta,x=1){if(v!==Ta&&v!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,u,f,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cy extends Fr{constructor(t,i=Ki,s=Fs,l,u,f=Cn,d=Cn,m,p=Ta){const v={width:t,height:t,depth:1},x=[v,v,v,v,v,v];super(t,t,i,s,l,u,f,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nv extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sl extends Oi{constructor(t=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],v=[],x=[];let g=0,M=0;T("z","y","x",-1,-1,s,i,t,f,u,0),T("z","y","x",1,-1,s,i,-t,f,u,1),T("x","z","y",1,1,t,s,i,l,f,2),T("x","z","y",1,-1,t,s,-i,l,f,3),T("x","y","z",1,-1,t,i,s,l,u,4),T("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Qn(p,3)),this.setAttribute("normal",new Qn(v,3)),this.setAttribute("uv",new Qn(x,2));function T(w,E,S,F,P,C,B,N,L,b,O){const K=C/L,V=B/b,J=C/2,ht=B/2,_t=N/2,j=L+1,z=b+1;let H=0,tt=0;const pt=new W;for(let vt=0;vt<z;vt++){const U=vt*V-ht;for(let Z=0;Z<j;Z++){const yt=Z*K-J;pt[w]=yt*F,pt[E]=U*P,pt[S]=_t,p.push(pt.x,pt.y,pt.z),pt[w]=0,pt[E]=0,pt[S]=N>0?1:-1,v.push(pt.x,pt.y,pt.z),x.push(Z/L),x.push(1-vt/b),H+=1}}for(let vt=0;vt<b;vt++)for(let U=0;U<L;U++){const Z=g+U+j*vt,yt=g+U+j*(vt+1),Ct=g+(U+1)+j*(vt+1),Tt=g+(U+1)+j*vt;m.push(Z,yt,Tt),m.push(yt,Ct,Tt),tt+=6}d.addGroup(M,tt,O),M+=tt,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Aa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const u=s.length;let f;i?f=i:f=t*s[u-1];let d=0,m=u-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(u-1);const v=s[l],g=s[l+1]-v,M=(f-v)/g;return(l+M)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const f=this.getPoint(l),d=this.getPoint(u),m=i||(f.isVector2?new Yt:new W);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new W,l=[],u=[],f=[],d=new W,m=new nn;for(let M=0;M<=t;M++){const T=M/t;l[M]=this.getTangentAt(T,new W)}u[0]=new W,f[0]=new W;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);v<=p&&(p=v,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),f[0].crossVectors(l[0],u[0]);for(let M=1;M<=t;M++){if(u[M]=u[M-1].clone(),f[M]=f[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(be(l[M-1].dot(l[M]),-1,1));u[M].applyMatrix4(m.makeRotationAxis(d,T))}f[M].crossVectors(l[M],u[M])}if(i===!0){let M=Math.acos(be(u[0].dot(u[t]),-1,1));M/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(M=-M);for(let T=1;T<=t;T++)u[T].applyMatrix4(m.makeRotationAxis(l[T],M*T)),f[T].crossVectors(l[T],u[T])}return{tangents:l,normals:u,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lv extends Aa{constructor(t=0,i=0,s=1,l=1,u=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Yt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const f=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(f?u=0:u=l),this.aClockwise===!0&&!f&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),x=Math.sin(this.aRotation),g=m-this.aX,M=p-this.aY;m=g*v-M*x+this.aX,p=g*x+M*v+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class fy extends Lv{constructor(t,i,s,l,u,f){super(t,i,s,s,l,u,f),this.isArcCurve=!0,this.type="ArcCurve"}}function dp(){let r=0,t=0,i=0,s=0;function l(u,f,d,m){r=u,t=d,i=-3*u+3*f-2*d-m,s=2*u-2*f+d+m}return{initCatmullRom:function(u,f,d,m,p){l(f,d,p*(d-u),p*(m-f))},initNonuniformCatmullRom:function(u,f,d,m,p,v,x){let g=(f-u)/p-(d-u)/(p+v)+(d-f)/v,M=(d-f)/v-(m-f)/(v+x)+(m-d)/x;g*=v,M*=v,l(f,d,g,M)},calc:function(u){const f=u*u,d=f*u;return r+t*u+i*f+s*d}}}const N_=new W,L_=new W,Vh=new dp,Xh=new dp,kh=new dp;class Ov extends Aa{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new W){const s=i,l=this.points,u=l.length,f=(u-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:m===0&&d===u-1&&(d=u-2,m=1);let p,v;this.closed||d>0?p=l[(d-1)%u]:(L_.subVectors(l[0],l[1]).add(l[0]),p=L_);const x=l[d%u],g=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(N_.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=N_),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(x),M),w=Math.pow(x.distanceToSquared(g),M),E=Math.pow(g.distanceToSquared(v),M);w<1e-4&&(w=1),T<1e-4&&(T=w),E<1e-4&&(E=w),Vh.initNonuniformCatmullRom(p.x,x.x,g.x,v.x,T,w,E),Xh.initNonuniformCatmullRom(p.y,x.y,g.y,v.y,T,w,E),kh.initNonuniformCatmullRom(p.z,x.z,g.z,v.z,T,w,E)}else this.curveType==="catmullrom"&&(Vh.initCatmullRom(p.x,x.x,g.x,v.x,this.tension),Xh.initCatmullRom(p.y,x.y,g.y,v.y,this.tension),kh.initCatmullRom(p.z,x.z,g.z,v.z,this.tension));return s.set(Vh.calc(m),Xh.calc(m),kh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new W().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function O_(r,t,i,s,l){const u=(s-t)*.5,f=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+u+f)*m+(-3*i+3*s-2*u-f)*d+u*r+i}function hy(r,t){const i=1-r;return i*i*t}function dy(r,t){return 2*(1-r)*r*t}function py(r,t){return r*r*t}function Ko(r,t,i,s){return hy(r,t)+dy(r,i)+py(r,s)}function my(r,t){const i=1-r;return i*i*i*t}function gy(r,t){const i=1-r;return 3*i*i*r*t}function _y(r,t){return 3*(1-r)*r*r*t}function vy(r,t){return r*r*r*t}function Qo(r,t,i,s,l){return my(r,t)+gy(r,i)+_y(r,s)+vy(r,l)}class xy extends Aa{constructor(t=new Yt,i=new Yt,s=new Yt,l=new Yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Yt){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Qo(t,l.x,u.x,f.x,d.x),Qo(t,l.y,u.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sy extends Aa{constructor(t=new W,i=new W,s=new W,l=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new W){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Qo(t,l.x,u.x,f.x,d.x),Qo(t,l.y,u.y,f.y,d.y),Qo(t,l.z,u.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class My extends Aa{constructor(t=new Yt,i=new Yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Yt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Yt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yy extends Aa{constructor(t=new W,i=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new W){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new W){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ey extends Aa{constructor(t=new Yt,i=new Yt,s=new Yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Yt){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Ko(t,l.x,u.x,f.x),Ko(t,l.y,u.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pv extends Aa{constructor(t=new W,i=new W,s=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new W){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Ko(t,l.x,u.x,f.x),Ko(t,l.y,u.y,f.y),Ko(t,l.z,u.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class by extends Aa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Yt){const s=i,l=this.points,u=(l.length-1)*t,f=Math.floor(u),d=u-f,m=l[f===0?f:f-1],p=l[f],v=l[f>l.length-2?l.length-1:f+1],x=l[f>l.length-3?l.length-1:f+2];return s.set(O_(d,m.x,p.x,v.x,x.x),O_(d,m.y,p.y,v.y,x.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Yt().fromArray(l))}return this}}var Ty=Object.freeze({__proto__:null,ArcCurve:fy,CatmullRomCurve3:Ov,CubicBezierCurve:xy,CubicBezierCurve3:Sy,EllipseCurve:Lv,LineCurve:My,LineCurve3:yy,QuadraticBezierCurve:Ey,QuadraticBezierCurve3:Pv,SplineCurve:by});class nc extends Oi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,x=t/d,g=i/m,M=[],T=[],w=[],E=[];for(let S=0;S<v;S++){const F=S*g-f;for(let P=0;P<p;P++){const C=P*x-u;T.push(C,-F,0),w.push(0,0,1),E.push(P/d),E.push(1-S/m)}}for(let S=0;S<m;S++)for(let F=0;F<d;F++){const P=F+p*S,C=F+p*(S+1),B=F+1+p*(S+1),N=F+1+p*S;M.push(P,C,N),M.push(C,B,N)}this.setIndex(M),this.setAttribute("position",new Qn(T,3)),this.setAttribute("normal",new Qn(w,3)),this.setAttribute("uv",new Qn(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.width,t.height,t.widthSegments,t.heightSegments)}}class pp extends Oi{constructor(t=new Pv(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:u};const f=t.computeFrenetFrames(i,u);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new W,m=new W,p=new Yt;let v=new W;const x=[],g=[],M=[],T=[];w(),this.setIndex(T),this.setAttribute("position",new Qn(x,3)),this.setAttribute("normal",new Qn(g,3)),this.setAttribute("uv",new Qn(M,2));function w(){for(let P=0;P<i;P++)E(P);E(u===!1?i:0),F(),S()}function E(P){v=t.getPointAt(P/i,v);const C=f.normals[P],B=f.binormals[P];for(let N=0;N<=l;N++){const L=N/l*Math.PI*2,b=Math.sin(L),O=-Math.cos(L);m.x=O*C.x+b*B.x,m.y=O*C.y+b*B.y,m.z=O*C.z+b*B.z,m.normalize(),g.push(m.x,m.y,m.z),d.x=v.x+s*m.x,d.y=v.y+s*m.y,d.z=v.z+s*m.z,x.push(d.x,d.y,d.z)}}function S(){for(let P=1;P<=i;P++)for(let C=1;C<=l;C++){const B=(l+1)*(P-1)+(C-1),N=(l+1)*P+(C-1),L=(l+1)*P+C,b=(l+1)*(P-1)+C;T.push(B,N,b),T.push(N,L,b)}}function F(){for(let P=0;P<=i;P++)for(let C=0;C<=l;C++)p.x=P/i,p.y=C/l,M.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new pp(new Ty[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Ir(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(P_(l))l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(P_(l[0])){const u=[];for(let f=0,d=l.length;f<d;f++)u[f]=l[f].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function zn(r){const t={};for(let i=0;i<r.length;i++){const s=Ir(r[i]);for(const l in s)t[l]=s[l]}return t}function P_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ay(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function zv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const tl={clone:Ir,merge:zn};var Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends al{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=Ay(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new _e().setHex(l.value);break;case"v2":this.uniforms[s].value=new Yt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new W().fromArray(l.value);break;case"v4":this.uniforms[s].value=new an().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ce().fromArray(l.value);break;case"m4":this.uniforms[s].value=new nn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Bv extends On{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wy extends al{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dy extends al{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uy extends al{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ny extends hi{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Wh=new nn,z_=new W,B_=new W;class Ly{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;z_.setFromMatrixPosition(t.matrixWorld),i.position.copy(z_),B_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(B_),i.updateMatrixWorld(),Wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===$o||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pu=new W,zu=new Vr,Gi=new W;class Fv extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pu,zu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,zu,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Pu,zu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,zu,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ss=new W,F_=new Yt,I_=new Yt;class ci extends Fv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(vh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,i){return this.getViewBounds(t,F_,I_),i.subVectors(I_,F_)}setViewOffset(t,i,s,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(vh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Oy extends Ly{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0}}class Py extends Ny{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Oy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class mp extends Fv{constructor(t=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Dr=-90,Ur=1;class zy extends hi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(Dr,Ur,t,i);l.layers=this.layers,this.add(l);const u=new ci(Dr,Ur,t,i);u.layers=this.layers,this.add(u);const f=new ci(Dr,Ur,t,i);f.layers=this.layers,this.add(f);const d=new ci(Dr,Ur,t,i);d.layers=this.layers,this.add(d);const m=new ci(Dr,Ur,t,i);m.layers=this.layers,this.add(m);const p=new ci(Dr,Ur,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(t===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===$o)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,v]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let E=!1;t.isWebGLRenderer===!0?E=t.state.buffers.depth.getReversed():E=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(x,g,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class By extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Fy{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Iy.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Iy(){this._document.hidden===!1&&this.reset()}const H_=new nn;class Hy{constructor(t,i,s=0,l=1/0){this.ray=new Dv(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new up,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):we("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return H_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(H_),this}intersectObject(t,i=!0,s=[]){return Vd(t,this,s,i),s.sort(G_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,u=t.length;l<u;l++)Vd(t[l],this,s,i);return s.sort(G_),s}}function G_(r,t){return r.distance-t.distance}function Vd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const u=r.children;for(let f=0,d=u.length;f<d;f++)Vd(u[f],t,i,!0)}}class Gy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,se("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const Mp=class Mp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=s,u[3]=l,this}};Mp.prototype.isMatrix2=!0;let V_=Mp;function X_(r,t,i,s){const l=Vy(s);switch(i){case yv:return r*t;case bv:return r*t/l.components*l.byteLength;case ip:return r*t/l.components*l.byteLength;case Is:return r*t*2/l.components*l.byteLength;case ap:return r*t*2/l.components*l.byteLength;case Ev:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case sp:return r*t*4/l.components*l.byteLength;case Gu:case Vu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xu:case ku:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fd:case dd:return Math.max(r,16)*Math.max(t,8)/4;case cd:case hd:return Math.max(r,8)*Math.max(t,8)/2;case pd:case md:case _d:case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case gd:case Ku:case xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Md:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case bd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Td:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Od:case Pd:case zd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Bd:case Fd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Qu:case Id:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Vy(r){switch(r){case fi:case vv:return{byteLength:1,components:1};case Jo:case xv:case Kn:return{byteLength:2,components:1};case ep:case np:return{byteLength:2,components:4};case Ki:case tp:case ki:return{byteLength:4,components:1};case Sv:case Mv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);function Iv(){let r=null,t=!1,i=null,s=null;function l(u,f){i(u,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function Xy(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const v=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,v);else{x.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<x.length;M++){const T=x[g],w=x[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,x[g]=w)}x.length=g+1;for(let M=0,T=x.length;M<T;M++){const w=x[M];r.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
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
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
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
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iE=`#ifdef USE_IRIDESCENCE
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
#endif`,aE=`#ifdef USE_BUMPMAP
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
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dE=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mE=`vec3 transformedNormal = objectNormal;
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
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
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
}`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,zE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,VE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tb=`#if defined( USE_POINTS_UV )
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
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
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
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,wb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ub=`#ifdef USE_SKINNING
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
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Ob=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`#include <common>
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
}`,Jb=`#if DEPTH_PACKING == 3200
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
}`,jb=`#define DISTANCE
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
}`,$b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`uniform float scale;
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
}`,iT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,sT=`uniform vec3 diffuse;
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
}`,rT=`#define LAMBERT
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
}`,oT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,lT=`#define MATCAP
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
}`,uT=`#define MATCAP
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
}`,cT=`#define NORMAL
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
}`,fT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hT=`#define PHONG
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
}`,dT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,pT=`#define STANDARD
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
}`,mT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,gT=`#define TOON
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
}`,_T=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,vT=`uniform float size;
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
}`,xT=`uniform vec3 diffuse;
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
}`,ST=`#include <common>
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
}`,MT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,yT=`uniform float rotation;
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
}`,ET=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:ky,alphahash_pars_fragment:Wy,alphamap_fragment:qy,alphamap_pars_fragment:Yy,alphatest_fragment:Zy,alphatest_pars_fragment:Ky,aomap_fragment:Qy,aomap_pars_fragment:Jy,batching_pars_vertex:jy,batching_vertex:$y,begin_vertex:tE,beginnormal_vertex:eE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:aE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:lE,color_fragment:uE,color_pars_fragment:cE,color_pars_vertex:fE,color_vertex:hE,common:dE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:_E,emissivemap_fragment:vE,emissivemap_pars_fragment:xE,colorspace_fragment:SE,colorspace_pars_fragment:ME,envmap_fragment:yE,envmap_common_pars_fragment:EE,envmap_pars_fragment:bE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:zE,envmap_vertex:AE,fog_vertex:RE,fog_pars_vertex:CE,fog_fragment:wE,fog_pars_fragment:DE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:NE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:OE,lights_pars_begin:PE,lights_toon_fragment:BE,lights_toon_pars_fragment:FE,lights_phong_fragment:IE,lights_phong_pars_fragment:HE,lights_physical_fragment:GE,lights_physical_pars_fragment:VE,lights_fragment_begin:XE,lights_fragment_maps:kE,lights_fragment_end:WE,lightprobes_pars_fragment:qE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:ZE,logdepthbuf_pars_vertex:KE,logdepthbuf_vertex:QE,map_fragment:JE,map_pars_fragment:jE,map_particle_fragment:$E,map_particle_pars_fragment:tb,metalnessmap_fragment:eb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:ab,morphnormal_vertex:sb,morphtarget_pars_vertex:rb,morphtarget_vertex:ob,normal_fragment_begin:lb,normal_fragment_maps:ub,normal_pars_fragment:cb,normal_pars_vertex:fb,normal_vertex:hb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:_b,opaque_fragment:vb,packing:xb,premultiplied_alpha_fragment:Sb,project_vertex:Mb,dithering_fragment:yb,dithering_pars_fragment:Eb,roughnessmap_fragment:bb,roughnessmap_pars_fragment:Tb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:Rb,shadowmap_vertex:Cb,shadowmask_pars_fragment:wb,skinbase_vertex:Db,skinning_pars_vertex:Ub,skinning_vertex:Nb,skinnormal_vertex:Lb,specularmap_fragment:Ob,specularmap_pars_fragment:Pb,tonemapping_fragment:zb,tonemapping_pars_fragment:Bb,transmission_fragment:Fb,transmission_pars_fragment:Ib,uv_pars_fragment:Hb,uv_pars_vertex:Gb,uv_vertex:Vb,worldpos_vertex:Xb,background_vert:kb,background_frag:Wb,backgroundCube_vert:qb,backgroundCube_frag:Yb,cube_vert:Zb,cube_frag:Kb,depth_vert:Qb,depth_frag:Jb,distance_vert:jb,distance_frag:$b,equirect_vert:tT,equirect_frag:eT,linedashed_vert:nT,linedashed_frag:iT,meshbasic_vert:aT,meshbasic_frag:sT,meshlambert_vert:rT,meshlambert_frag:oT,meshmatcap_vert:lT,meshmatcap_frag:uT,meshnormal_vert:cT,meshnormal_frag:fT,meshphong_vert:hT,meshphong_frag:dT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:gT,meshtoon_frag:_T,points_vert:vT,points_frag:xT,shadow_vert:ST,shadow_frag:MT,sprite_vert:yT,sprite_frag:ET},Ft={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Xi={basic:{uniforms:zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:zn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:zn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:zn([Ft.points,Ft.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:zn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:zn([Ft.common,Ft.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:zn([Ft.sprite,Ft.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:zn([Ft.common,Ft.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:zn([Ft.lights,Ft.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Xi.physical={uniforms:zn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Bu={r:0,b:0,g:0},bT=new nn,Hv=new ce;Hv.set(-1,0,0,0,1,0,0,0,1);function TT(r,t,i,s,l,u){const f=new _e(0);let d=l===!0?0:1,m,p,v=null,x=0,g=null;function M(F){let P=F.isScene===!0?F.background:null;if(P&&P.isTexture){const C=F.backgroundBlurriness>0;P=t.get(P,C)}return P}function T(F){let P=!1;const C=M(F);C===null?E(f,d):C&&C.isColor&&(E(C,1),P=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(F,P){const C=M(P);C&&(C.isCubeTexture||C.mapping===ec)?(p===void 0&&(p=new Li(new sl(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ir(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,N,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(bT.makeRotationFromEuler(P.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Hv),p.material.toneMapped=Re.getTransfer(C.colorSpace)!==Pe,(v!==C||x!==C.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=C,x=C.version,g=r.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Li(new nc(2,2),new On({name:"BackgroundMaterial",uniforms:Ir(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Re.getTransfer(C.colorSpace)!==Pe,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||x!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=C,x=C.version,g=r.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function E(F,P){F.getRGB(Bu,zv(r)),i.buffers.color.setClear(Bu.r,Bu.g,Bu.b,P,u)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(F,P=1){f.set(F),d=P,E(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(F){d=F,E(f,d)},render:T,addToRenderList:w,dispose:S}}function AT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let u=l,f=!1;function d(V,J,ht,_t,j){let z=!1;const H=x(V,_t,ht,J);u!==H&&(u=H,p(u.object)),z=M(V,_t,ht,j),z&&T(V,_t,ht,j),j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,C(V,J,ht,_t),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function v(V){return r.deleteVertexArray(V)}function x(V,J,ht,_t){const j=_t.wireframe===!0;let z=s[J.id];z===void 0&&(z={},s[J.id]=z);const H=V.isInstancedMesh===!0?V.id:0;let tt=z[H];tt===void 0&&(tt={},z[H]=tt);let pt=tt[ht.id];pt===void 0&&(pt={},tt[ht.id]=pt);let vt=pt[j];return vt===void 0&&(vt=g(m()),pt[j]=vt),vt}function g(V){const J=[],ht=[],_t=[];for(let j=0;j<i;j++)J[j]=0,ht[j]=0,_t[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ht,attributeDivisors:_t,object:V,attributes:{},index:null}}function M(V,J,ht,_t){const j=u.attributes,z=J.attributes;let H=0;const tt=ht.getAttributes();for(const pt in tt)if(tt[pt].location>=0){const U=j[pt];let Z=z[pt];if(Z===void 0&&(pt==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),pt==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;H++}return u.attributesNum!==H||u.index!==_t}function T(V,J,ht,_t){const j={},z=J.attributes;let H=0;const tt=ht.getAttributes();for(const pt in tt)if(tt[pt].location>=0){let U=z[pt];U===void 0&&(pt==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),pt==="instanceColor"&&V.instanceColor&&(U=V.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),j[pt]=Z,H++}u.attributes=j,u.attributesNum=H,u.index=_t}function w(){const V=u.newAttributes;for(let J=0,ht=V.length;J<ht;J++)V[J]=0}function E(V){S(V,0)}function S(V,J){const ht=u.newAttributes,_t=u.enabledAttributes,j=u.attributeDivisors;ht[V]=1,_t[V]===0&&(r.enableVertexAttribArray(V),_t[V]=1),j[V]!==J&&(r.vertexAttribDivisor(V,J),j[V]=J)}function F(){const V=u.newAttributes,J=u.enabledAttributes;for(let ht=0,_t=J.length;ht<_t;ht++)J[ht]!==V[ht]&&(r.disableVertexAttribArray(ht),J[ht]=0)}function P(V,J,ht,_t,j,z,H){H===!0?r.vertexAttribIPointer(V,J,ht,j,z):r.vertexAttribPointer(V,J,ht,_t,j,z)}function C(V,J,ht,_t){w();const j=_t.attributes,z=ht.getAttributes(),H=J.defaultAttributeValues;for(const tt in z){const pt=z[tt];if(pt.location>=0){let vt=j[tt];if(vt===void 0&&(tt==="instanceMatrix"&&V.instanceMatrix&&(vt=V.instanceMatrix),tt==="instanceColor"&&V.instanceColor&&(vt=V.instanceColor)),vt!==void 0){const U=vt.normalized,Z=vt.itemSize,yt=t.get(vt);if(yt===void 0)continue;const Ct=yt.buffer,Tt=yt.type,it=yt.bytesPerElement,St=Tt===r.INT||Tt===r.UNSIGNED_INT||vt.gpuType===tp;if(vt.isInterleavedBufferAttribute){const Mt=vt.data,Ht=Mt.stride,ie=vt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<pt.locationSize;Jt++)S(pt.location+Jt,Mt.meshPerAttribute);V.isInstancedMesh!==!0&&_t._maxInstanceCount===void 0&&(_t._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Jt=0;Jt<pt.locationSize;Jt++)E(pt.location+Jt);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let Jt=0;Jt<pt.locationSize;Jt++)P(pt.location+Jt,Z/pt.locationSize,Tt,U,Ht*it,(ie+Z/pt.locationSize*Jt)*it,St)}else{if(vt.isInstancedBufferAttribute){for(let Mt=0;Mt<pt.locationSize;Mt++)S(pt.location+Mt,vt.meshPerAttribute);V.isInstancedMesh!==!0&&_t._maxInstanceCount===void 0&&(_t._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Mt=0;Mt<pt.locationSize;Mt++)E(pt.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let Mt=0;Mt<pt.locationSize;Mt++)P(pt.location+Mt,Z/pt.locationSize,Tt,U,Z*it,Z/pt.locationSize*Mt*it,St)}}else if(H!==void 0){const U=H[tt];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(pt.location,U);break;case 3:r.vertexAttrib3fv(pt.location,U);break;case 4:r.vertexAttrib4fv(pt.location,U);break;default:r.vertexAttrib1fv(pt.location,U)}}}}F()}function B(){O();for(const V in s){const J=s[V];for(const ht in J){const _t=J[ht];for(const j in _t){const z=_t[j];for(const H in z)v(z[H].object),delete z[H];delete _t[j]}}delete s[V]}}function N(V){if(s[V.id]===void 0)return;const J=s[V.id];for(const ht in J){const _t=J[ht];for(const j in _t){const z=_t[j];for(const H in z)v(z[H].object),delete z[H];delete _t[j]}}delete s[V.id]}function L(V){for(const J in s){const ht=s[J];for(const _t in ht){const j=ht[_t];if(j[V.id]===void 0)continue;const z=j[V.id];for(const H in z)v(z[H].object),delete z[H];delete j[V.id]}}}function b(V){for(const J in s){const ht=s[J],_t=V.isInstancedMesh===!0?V.id:0,j=ht[_t];if(j!==void 0){for(const z in j){const H=j[z];for(const tt in H)v(H[tt].object),delete H[tt];delete j[z]}delete ht[_t],Object.keys(ht).length===0&&delete s[J]}}}function O(){K(),f=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:K,dispose:B,releaseStatesOfGeometry:N,releaseStatesOfObject:b,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:E,disableUnusedAttributes:F}}function RT(r,t,i){let s;function l(m){s=m}function u(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,v){v!==0&&(r.drawArraysInstanced(s,m,p,v),i.update(p,s,v))}function d(m,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,v);let g=0;for(let M=0;M<v;M++)g+=p[M];i.update(g,s,1)}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function CT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(L){return!(L!==Ni&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const b=L===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==fi&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ki&&!b)}function m(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(se("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:E,maxAttributes:S,maxVertexUniforms:F,maxVaryings:P,maxFragmentUniforms:C,maxSamples:B,samples:N}}function wT(r){const t=this;let i=null,s=0,l=!1,u=!1;const f=new rs,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,M){const T=x.clippingPlanes,w=x.clipIntersection,E=x.clipShadows,S=r.get(x);if(!l||T===null||T.length===0||u&&!E)u?v(null):p();else{const F=u?0:s,P=F*4;let C=S.clippingState||null;m.value=C,C=v(T,g,P,M);for(let B=0;B!==P;++B)C[B]=i[B];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(x,g,M,T){const w=x!==null?x.length:0;let E=null;if(w!==0){if(E=m.value,T!==!0||E===null){const S=M+w*4,F=g.matrixWorldInverse;d.getNormalMatrix(F),(E===null||E.length<S)&&(E=new Float32Array(S));for(let P=0,C=M;P!==w;++P,C+=4)f.copy(x[P]).applyMatrix4(F,d),f.normal.toArray(E,C),E[C+3]=f.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,E}}const ls=4,k_=[.125,.215,.35,.446,.526,.582],Ps=20,DT=256,ko=new mp,W_=new _e;let qh=null,Yh=0,Zh=0,Kh=!1;const UT=new W;class q_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=UT}=u;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qh,Yh,Zh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Kn,format:Ni,colorSpace:Ju,depthBuffer:!1},l=Y_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NT(u)),this._blurMaterial=OT(u,t,i),this._ggxMaterial=LT(u,t,i)}return l}_compileMaterial(t){const i=new Li(new Oi,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,s,l,u){const m=new ci(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(W_),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new sl,new fp({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,E=w.material;let S=!1;const F=t.background;F?F.isColor&&(E.color.copy(F),t.background=null,S=!0):(E.color.copy(W_),S=!0);for(let P=0;P<6;P++){const C=P%3;C===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):C===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const B=this._cubeSize;Nr(l,C*B,P>2?B:0,B,B),x.setRenderTarget(l),S&&x.render(w,m),x.render(t,m)}x.toneMapping=M,x.autoClear=g,t.background=F}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===Br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=0+p*1.25,M=x*g,{_lodMax:T}=this,w=this._sizeLods[s],E=3*w*(s>T-ls?s-T+ls:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=T-i,Nr(u,E,S,3*w,2*w),l.setRenderTarget(u),l.render(d,ko),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-s,Nr(t,E,S,3*w,2*w),l.setRenderTarget(t),l.render(d,ko)}_blur(t,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",u),this._halfBlur(f,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ps-1),w=u/T,E=isFinite(u)?1+Math.floor(v*w):Ps;E>Ps&&se(`sigmaRadians, ${u}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ps}`);const S=[];let F=0;for(let L=0;L<Ps;++L){const b=L/w,O=Math.exp(-b*b/2);S.push(O),L===0?F+=O:L<E&&(F+=2*O)}for(let L=0;L<S.length;L++)S[L]=S[L]/F;g.envMap.value=t.texture,g.samples.value=E,g.weights.value=S,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:P}=this;g.dTheta.value=T,g.mipInt.value=P-s;const C=this._sizeLods[l],B=3*C*(l>P-ls?l-P+ls:0),N=4*(this._cubeSize-C);Nr(i,B,N,3*C,2*C),m.setRenderTarget(i),m.render(x,ko)}}function NT(r){const t=[],i=[],s=[];let l=r;const u=r-ls+1+k_.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-ls?m=k_[f-r+ls-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,x=1+p,g=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,T=6,w=3,E=2,S=1,F=new Float32Array(w*T*M),P=new Float32Array(E*T*M),C=new Float32Array(S*T*M);for(let N=0;N<M;N++){const L=N%3*2/3-1,b=N>2?0:-1,O=[L,b,0,L+2/3,b,0,L+2/3,b+1,0,L,b,0,L+2/3,b+1,0,L,b+1,0];F.set(O,w*T*N),P.set(g,E*T*N);const K=[N,N,N,N,N,N];C.set(K,S*T*N)}const B=new Oi;B.setAttribute("position",new Zi(F,w)),B.setAttribute("uv",new Zi(P,E)),B.setAttribute("faceIndex",new Zi(C,S)),s.push(new Li(B,null)),l>ls&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Y_(r,t,i){const s=new Fn(r,t,i);return s.texture.mapping=ec,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function LT(r,t,i){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function OT(r,t,i){const s=new Float32Array(Ps),l=new W(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ic(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Z_(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function K_(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}class Gv extends Fn{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Uv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new sl(5,5,5),u=new On({name:"CubemapFromEquirect",uniforms:Ir(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:qi});u.uniforms.tEquirect.value=i;const f=new Li(l,u),d=i.minFilter;return i.minFilter===zs&&(i.minFilter=Ln),new zy(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(u)}}function PT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===mh||M===gh)if(t.has(g)){const T=t.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Gv(T.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,T=M===mh||M===gh,w=M===Fs||M===Br;if(T||w){let E=i.get(g);const S=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new q_(r)),E=T?s.fromEquirectangular(g,E):s.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),E.texture;if(E!==void 0)return E.texture;{const F=g.image;return T&&F&&F.height>0||w&&F&&m(F)?(s===null&&(s=new q_(r)),E=T?s.fromEquirectangular(g):s.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),g.addEventListener("dispose",v),E.texture):null}}}return g}function d(g,M){return M===mh?g.mapping=Fs:M===gh&&(g.mapping=Br),g}function m(g){let M=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&M++;return M===T}function p(g){const M=g.target;M.removeEventListener("dispose",p);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function zT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Or("WebGLRenderer: "+s+" extension not supported."),l}}}function BT(r,t,i,s){const l={},u=new WeakMap;function f(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const M=u.get(g);M&&(t.remove(M),u.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function p(x){const g=[],M=x.index,T=x.attributes.position;let w=0;if(T===void 0)return;if(M!==null){const F=M.array;w=M.version;for(let P=0,C=F.length;P<C;P+=3){const B=F[P+0],N=F[P+1],L=F[P+2];g.push(B,N,N,L,L,B)}}else{const F=T.array;w=T.version;for(let P=0,C=F.length/3-1;P<C;P+=3){const B=P+0,N=P+1,L=P+2;g.push(B,N,N,L,L,B)}}const E=new(T.count>=65535?wv:Cv)(g,1);E.version=w;const S=u.get(x);S&&t.remove(S),u.set(x,E)}function v(x){const g=u.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function FT(r,t,i){let s;function l(x){s=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,g){r.drawElements(s,g,u,x*f),i.update(g,s,1)}function p(x,g,M){M!==0&&(r.drawElementsInstanced(s,g,u,x*f,M),i.update(g,s,M))}function v(x,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,u,x,0,M);let w=0;for(let E=0;E<M;E++)w+=g[E];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function IT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:we("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function HT(r,t,i){const s=new WeakMap,l=new an;function u(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let K=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",K)};var M=K;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),E===!0&&(C=3);let B=d.attributes.position.count*C,N=1;B>t.maxTextureSize&&(N=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const L=new Float32Array(B*N*4*x),b=new Av(L,B,N,x);b.type=ki,b.needsUpdate=!0;const O=C*4;for(let V=0;V<x;V++){const J=S[V],ht=F[V],_t=P[V],j=B*N*4*V;for(let z=0;z<J.count;z++){const H=z*O;T===!0&&(l.fromBufferAttribute(J,z),L[j+H+0]=l.x,L[j+H+1]=l.y,L[j+H+2]=l.z,L[j+H+3]=0),w===!0&&(l.fromBufferAttribute(ht,z),L[j+H+4]=l.x,L[j+H+5]=l.y,L[j+H+6]=l.z,L[j+H+7]=0),E===!0&&(l.fromBufferAttribute(_t,z),L[j+H+8]=l.x,L[j+H+9]=l.y,L[j+H+10]=l.z,L[j+H+11]=_t.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new Yt(B,N)},s.set(d,g),d.addEventListener("dispose",K)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let E=0;E<p.length;E++)T+=p[E];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:u}}function GT(r,t,i,s,l){let u=new WeakMap;function f(p){const v=l.render.frame,x=p.geometry,g=t.get(p,x);if(u.get(g)!==v&&(t.update(g),u.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),u.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;u.get(M)!==v&&(M.update(),u.set(M,v))}return g}function d(){u=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:d}}const VT={[Yd]:"LINEAR_TONE_MAPPING",[Zd]:"REINHARD_TONE_MAPPING",[Kd]:"CINEON_TONE_MAPPING",[Qd]:"ACES_FILMIC_TONE_MAPPING",[jd]:"AGX_TONE_MAPPING",[$d]:"NEUTRAL_TONE_MAPPING",[Jd]:"CUSTOM_TONE_MAPPING"};function XT(r,t,i,s,l,u){const f=new Fn(t,i,{type:r,depthBuffer:l,stencilBuffer:u,samples:s?4:0,depthTexture:l?new Fr(t,i):void 0}),d=new Fn(t,i,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),m=new Oi;m.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Qn([0,2,0,0,2,0],2));const p=new Bv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Li(m,p),x=new mp(-1,1,1,-1,0,1);let g=null,M=null,T=!1,w,E=null,S=[],F=!1;this.setSize=function(P,C){f.setSize(P,C),d.setSize(P,C);for(let B=0;B<S.length;B++){const N=S[B];N.setSize&&N.setSize(P,C)}},this.setEffects=function(P){S=P,F=S.length>0&&S[0].isRenderPass===!0;const C=f.width,B=f.height;for(let N=0;N<S.length;N++){const L=S[N];L.setSize&&L.setSize(C,B)}},this.begin=function(P,C){if(T||P.toneMapping===Yi&&S.length===0)return!1;if(E=C,C!==null){const B=C.width,N=C.height;(f.width!==B||f.height!==N)&&this.setSize(B,N)}return F===!1&&P.setRenderTarget(f),w=P.toneMapping,P.toneMapping=Yi,!0},this.hasRenderPass=function(){return F},this.end=function(P,C){P.toneMapping=w,T=!0;let B=f,N=d;for(let L=0;L<S.length;L++){const b=S[L];if(b.enabled!==!1&&(b.render(P,N,B,C),b.needsSwap!==!1)){const O=B;B=N,N=O}}if(g!==P.outputColorSpace||M!==P.toneMapping){g=P.outputColorSpace,M=P.toneMapping,p.defines={},Re.getTransfer(g)===Pe&&(p.defines.SRGB_TRANSFER="");const L=VT[M];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=B.texture,P.setRenderTarget(E),P.render(v,x),E=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),d.dispose(),m.dispose(),p.dispose()}}const Vv=new Bn,Xd=new Fr(1,1),Xv=new Av,kv=new YM,Wv=new Uv,Q_=[],J_=[],j_=new Float32Array(16),$_=new Float32Array(9),tv=new Float32Array(4);function kr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=Q_[l];if(u===void 0&&(u=new Float32Array(l),Q_[l]=u),t!==0){s.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(u,d)}return u}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function ac(r,t){let i=J_[t];i===void 0&&(i=new Int32Array(t),J_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function kT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function qT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function YT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function ZT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;tv.set(s),r.uniformMatrix2fv(this.addr,!1,tv),xn(i,s)}}function KT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;$_.set(s),r.uniformMatrix3fv(this.addr,!1,$_),xn(i,s)}}function QT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;j_.set(s),r.uniformMatrix4fv(this.addr,!1,j_),xn(i,s)}}function JT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function t1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function e1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function n1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function i1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function a1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function s1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Xd.compareFunction=i.isReversedDepthBuffer()?op:rp,u=Xd):u=Vv,i.setTexture2D(t||u,l)}function r1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||kv,l)}function o1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Wv,l)}function l1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Xv,l)}function u1(r){switch(r){case 5126:return kT;case 35664:return WT;case 35665:return qT;case 35666:return YT;case 35674:return ZT;case 35675:return KT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return jT;case 35668:case 35672:return $T;case 35669:case 35673:return t1;case 5125:return e1;case 36294:return n1;case 36295:return i1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}function c1(r,t){r.uniform1fv(this.addr,t)}function f1(r,t){const i=kr(t,this.size,2);r.uniform2fv(this.addr,i)}function h1(r,t){const i=kr(t,this.size,3);r.uniform3fv(this.addr,i)}function d1(r,t){const i=kr(t,this.size,4);r.uniform4fv(this.addr,i)}function p1(r,t){const i=kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function m1(r,t){const i=kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function g1(r,t){const i=kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function _1(r,t){r.uniform1iv(this.addr,t)}function v1(r,t){r.uniform2iv(this.addr,t)}function x1(r,t){r.uniform3iv(this.addr,t)}function S1(r,t){r.uniform4iv(this.addr,t)}function M1(r,t){r.uniform1uiv(this.addr,t)}function y1(r,t){r.uniform2uiv(this.addr,t)}function E1(r,t){r.uniform3uiv(this.addr,t)}function b1(r,t){r.uniform4uiv(this.addr,t)}function T1(r,t,i){const s=this.cache,l=t.length,u=ac(i,l);vn(s,u)||(r.uniform1iv(this.addr,u),xn(s,u));let f;this.type===r.SAMPLER_2D_SHADOW?f=Xd:f=Vv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,u[d])}function A1(r,t,i){const s=this.cache,l=t.length,u=ac(i,l);vn(s,u)||(r.uniform1iv(this.addr,u),xn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||kv,u[f])}function R1(r,t,i){const s=this.cache,l=t.length,u=ac(i,l);vn(s,u)||(r.uniform1iv(this.addr,u),xn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Wv,u[f])}function C1(r,t,i){const s=this.cache,l=t.length,u=ac(i,l);vn(s,u)||(r.uniform1iv(this.addr,u),xn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Xv,u[f])}function w1(r){switch(r){case 5126:return c1;case 35664:return f1;case 35665:return h1;case 35666:return d1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return _1;case 35667:case 35671:return v1;case 35668:case 35672:return x1;case 35669:case 35673:return S1;case 5125:return M1;case 36294:return y1;case 36295:return E1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return C1}}class D1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=u1(i.type)}}class U1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=w1(i.type)}}class N1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function ev(r,t){r.seq.push(t),r.map[t.id]=t}function L1(r,t,i){const s=r.name,l=s.length;for(Qh.lastIndex=0;;){const u=Qh.exec(s),f=Qh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){ev(i,p===void 0?new D1(d,r,t):new U1(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new N1(d),ev(i,x)),i=x}}}class Wu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);L1(d,m,this)}const l=[],u=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function nv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const O1=37297;let P1=0;function z1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const iv=new ce;function B1(r){Re._getMatrix(iv,Re.workingColorSpace,r);const t=`mat3( ${iv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case ju:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function av(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+z1(r.getShaderSource(t),d)}else return u}function F1(r,t){const i=B1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const I1={[Yd]:"Linear",[Zd]:"Reinhard",[Kd]:"Cineon",[Qd]:"ACESFilmic",[jd]:"AgX",[$d]:"Neutral",[Jd]:"Custom"};function H1(r,t){const i=I1[t];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fu=new W;function G1(){Re.getLuminanceCoefficients(Fu);const r=Fu.x.toFixed(4),t=Fu.y.toFixed(4),i=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function X1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function k1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),f=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Zo(r){return r!==""}function sv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(r){return r.replace(W1,Y1)}const q1=new Map;function Y1(r,t){let i=ge[t];if(i===void 0){const s=q1.get(t);if(s!==void 0)i=ge[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return kd(i)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ov(r){return r.replace(Z1,K1)}function K1(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function lv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Q1={[Hu]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function J1(r){return Q1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j1={[Fs]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[ec]:"ENVMAP_TYPE_CUBE_UV"};function $1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":j1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const tA={[Br]:"ENVMAP_MODE_REFRACTION"};function eA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":tA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nA={[gv]:"ENVMAP_BLENDING_MULTIPLY",[AM]:"ENVMAP_BLENDING_MIX",[RM]:"ENVMAP_BLENDING_ADD"};function iA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":nA[r.combine]||"ENVMAP_BLENDING_NONE"}function aA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function sA(r,t,i,s){const l=r.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=J1(i),p=$1(i),v=eA(i),x=iA(i),g=aA(i),M=V1(i),T=X1(u),w=l.createProgram();let E,S,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Zo).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Zo).join(`
`),S.length>0&&(S+=`
`)):(E=[lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),S=[lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?ge.tonemapping_pars_fragment:"",i.toneMapping!==Yi?H1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,F1("linearToOutputTexel",i.outputColorSpace),G1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),f=kd(f),f=sv(f,i),f=rv(f,i),d=kd(d),d=sv(d,i),d=rv(d,i),f=ov(f),d=ov(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=F+E+f,C=F+S+d,B=nv(l,l.VERTEX_SHADER,P),N=nv(l,l.FRAGMENT_SHADER,C);l.attachShader(w,B),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function L(V){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(w)||"",ht=l.getShaderInfoLog(B)||"",_t=l.getShaderInfoLog(N)||"",j=J.trim(),z=ht.trim(),H=_t.trim();let tt=!0,pt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,B,N);else{const vt=av(l,B,"vertex"),U=av(l,N,"fragment");we("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+j+`
`+vt+`
`+U)}else j!==""?se("WebGLProgram: Program Info Log:",j):(z===""||H==="")&&(pt=!1);pt&&(V.diagnostics={runnable:tt,programLog:j,vertexShader:{log:z,prefix:E},fragmentShader:{log:H,prefix:S}})}l.deleteShader(B),l.deleteShader(N),b=new Wu(l,w),O=k1(l,w)}let b;this.getUniforms=function(){return b===void 0&&L(this),b};let O;this.getAttributes=function(){return O===void 0&&L(this),O};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(w,O1)),K},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=P1++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=N,this}let rA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new lA(t),i.set(t,s)),s}}class lA{constructor(t){this.id=rA++,this.code=t,this.usedTimes=0}}function uA(r){return r===Is||r===Ku||r===Qu}function cA(r,t,i,s,l,u){const f=new up,d=new oA,m=new Set,p=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,O,K,V,J,ht){const _t=V.fog,j=J.geometry,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,tt=t.get(b.envMap||z,H),pt=tt&&tt.mapping===ec?tt.image.height:null,vt=M[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&se("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const U=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Z=U!==void 0?U.length:0;let yt=0;j.morphAttributes.position!==void 0&&(yt=1),j.morphAttributes.normal!==void 0&&(yt=2),j.morphAttributes.color!==void 0&&(yt=3);let Ct,Tt,it,St;if(vt){const Xt=Xi[vt];Ct=Xt.vertexShader,Tt=Xt.fragmentShader}else{Ct=b.vertexShader,Tt=b.fragmentShader;const Xt=d.getVertexShaderStage(b),je=d.getFragmentShaderStage(b);d.update(b,Xt,je),it=Xt.id,St=je.id}const Mt=r.getRenderTarget(),Ht=r.state.buffers.depth.getReversed(),ie=J.isInstancedMesh===!0,Jt=J.isBatchedMesh===!0,Ve=!!b.map,fe=!!b.matcap,ve=!!tt,xe=!!b.aoMap,pe=!!b.lightMap,Ze=!!b.bumpMap&&b.wireframe===!1,Ke=!!b.normalMap,At=!!b.displacementMap,zt=!!b.emissiveMap,Qt=!!b.metalnessMap,le=!!b.roughnessMap,G=b.anisotropy>0,Se=b.clearcoat>0,re=b.dispersion>0,D=b.iridescence>0,y=b.sheen>0,q=b.transmission>0,$=G&&!!b.anisotropyMap,lt=Se&&!!b.clearcoatMap,Rt=Se&&!!b.clearcoatNormalMap,Dt=Se&&!!b.clearcoatRoughnessMap,ft=D&&!!b.iridescenceMap,ct=D&&!!b.iridescenceThicknessMap,bt=y&&!!b.sheenColorMap,Nt=y&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,Ot=!!b.specularColorMap,$t=!!b.specularIntensityMap,te=q&&!!b.transmissionMap,oe=q&&!!b.thicknessMap,k=!!b.gradientMap,wt=!!b.alphaMap,mt=b.alphaTest>0,Ut=!!b.alphaHash,It=!!b.extensions;let Et=Yi;b.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Et=r.toneMapping);const Zt={shaderID:vt,shaderType:b.type,shaderName:b.name,vertexShader:Ct,fragmentShader:Tt,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Jt,batchingColor:Jt&&J._colorsTexture!==null,instancing:ie,instancingColor:ie&&J.instanceColor!==null,instancingMorph:ie&&J.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:fe,envMap:ve,envMapMode:ve&&tt.mapping,envMapCubeUVHeight:pt,aoMap:xe,lightMap:pe,bumpMap:Ze,normalMap:Ke,displacementMap:At,emissiveMap:zt,normalMapObjectSpace:Ke&&b.normalMapType===DM,normalMapTangentSpace:Ke&&b.normalMapType===Hd,packedNormalMap:Ke&&b.normalMapType===Hd&&uA(b.normalMap.format),metalnessMap:Qt,roughnessMap:le,anisotropy:G,anisotropyMap:$,clearcoat:Se,clearcoatMap:lt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Dt,dispersion:re,iridescence:D,iridescenceMap:ft,iridescenceThicknessMap:ct,sheen:y,sheenColorMap:bt,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:$t,transmission:q,transmissionMap:te,thicknessMap:oe,gradientMap:k,opaque:b.transparent===!1&&b.blending===Lr&&b.alphaToCoverage===!1,alphaMap:wt,alphaTest:mt,alphaHash:Ut,combine:b.combine,mapUv:Ve&&T(b.map.channel),aoMapUv:xe&&T(b.aoMap.channel),lightMapUv:pe&&T(b.lightMap.channel),bumpMapUv:Ze&&T(b.bumpMap.channel),normalMapUv:Ke&&T(b.normalMap.channel),displacementMapUv:At&&T(b.displacementMap.channel),emissiveMapUv:zt&&T(b.emissiveMap.channel),metalnessMapUv:Qt&&T(b.metalnessMap.channel),roughnessMapUv:le&&T(b.roughnessMap.channel),anisotropyMapUv:$&&T(b.anisotropyMap.channel),clearcoatMapUv:lt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&T(b.sheenRoughnessMap.channel),specularMapUv:Lt&&T(b.specularMap.channel),specularColorMapUv:Ot&&T(b.specularColorMap.channel),specularIntensityMapUv:$t&&T(b.specularIntensityMap.channel),transmissionMapUv:te&&T(b.transmissionMap.channel),thicknessMapUv:oe&&T(b.thicknessMap.channel),alphaMapUv:wt&&T(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ke||G),vertexNormals:!!j.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!j.attributes.uv&&(Ve||wt),fog:!!_t,useFog:b.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||j.attributes.normal===void 0&&Ke===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ht,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:yt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ht.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:Et,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&Re.getTransfer(b.map.colorSpace)===Pe,decodeVideoTextureEmissive:zt&&b.emissiveMap.isVideoTexture===!0&&Re.getTransfer(b.emissiveMap.colorSpace)===Pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ya,flipSided:b.side===Zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||Jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=m.has(1),Zt.vertexUv2s=m.has(2),Zt.vertexUv3s=m.has(3),m.clear(),Zt}function E(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const K in b.defines)O.push(K),O.push(b.defines[K]);return b.isRawShaderMaterial===!1&&(S(O,b),F(O,b),O.push(r.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function S(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function F(b,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),b.push(f.mask)}function P(b){const O=M[b.type];let K;if(O){const V=Xi[O];K=tl.clone(V.uniforms)}else K=b.uniforms;return K}function C(b,O){let K=v.get(O);return K!==void 0?++K.usedTimes:(K=new sA(r,O,b,l),p.push(K),v.set(O,K)),K}function B(b){if(--b.usedTimes===0){const O=p.indexOf(b);p[O]=p[p.length-1],p.pop(),v.delete(b.cacheKey),b.destroy()}}function N(b){d.remove(b)}function L(){d.dispose()}return{getParameters:w,getProgramCacheKey:E,getUniforms:P,acquireProgram:C,releaseProgram:B,releaseShaderCache:N,programs:p,dispose:L}}function fA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function hA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function uv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function cv(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,T,w,E,S){let F=r[t];return F===void 0?(F={id:g.id,object:g,geometry:M,material:T,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:E,group:S},r[t]=F):(F.id=g.id,F.object=g,F.geometry=M,F.material=T,F.materialVariant=f(g),F.groupOrder=w,F.renderOrder=g.renderOrder,F.z=E,F.group=S),t++,F}function m(g,M,T,w,E,S){const F=d(g,M,T,w,E,S);T.transmission>0?s.push(F):T.transparent===!0?l.push(F):i.push(F)}function p(g,M,T,w,E,S){const F=d(g,M,T,w,E,S);T.transmission>0?s.unshift(F):T.transparent===!0?l.unshift(F):i.unshift(F)}function v(g,M,T){i.length>1&&i.sort(g||hA),s.length>1&&s.sort(M||uv),l.length>1&&l.sort(M||uv),T&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=t,M=r.length;g<M;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:p,finish:x,sort:v}}function dA(){let r=new WeakMap;function t(s,l){const u=r.get(s);let f;return u===void 0?(f=new cv,r.set(s,[f])):l>=u.length?(f=new cv,u.push(f)):f=u[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function pA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new _e};break;case"SpotLight":i={position:new W,direction:new W,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new _e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":i={color:new _e,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=i,i}}}function mA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let gA=0;function _A(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function vA(r){const t=new pA,i=mA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new W);const l=new W,u=new nn,f=new nn;function d(p){let v=0,x=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let M=0,T=0,w=0,E=0,S=0,F=0,P=0,C=0,B=0,N=0,L=0;p.sort(_A);for(let O=0,K=p.length;O<K;O++){const V=p[O],J=V.color,ht=V.intensity,_t=V.distance;let j=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Is?j=V.shadow.map.texture:j=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=J.r*ht,x+=J.g*ht,g+=J.b*ht;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],ht);L++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,tt=i.get(V);tt.shadowIntensity=H.intensity,tt.shadowBias=H.bias,tt.shadowNormalBias=H.normalBias,tt.shadowRadius=H.radius,tt.shadowMapSize=H.mapSize,s.directionalShadow[M]=tt,s.directionalShadowMap[M]=j,s.directionalShadowMatrix[M]=V.shadow.matrix,F++}s.directional[M]=z,M++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(J).multiplyScalar(ht),z.distance=_t,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[w]=z;const H=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,H.updateMatrices(V),V.castShadow&&N++),s.spotLightMatrix[w]=H.matrix,V.castShadow){const tt=i.get(V);tt.shadowIntensity=H.intensity,tt.shadowBias=H.bias,tt.shadowNormalBias=H.normalBias,tt.shadowRadius=H.radius,tt.shadowMapSize=H.mapSize,s.spotShadow[w]=tt,s.spotShadowMap[w]=j,C++}w++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(J).multiplyScalar(ht),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[E]=z,E++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const H=V.shadow,tt=i.get(V);tt.shadowIntensity=H.intensity,tt.shadowBias=H.bias,tt.shadowNormalBias=H.normalBias,tt.shadowRadius=H.radius,tt.shadowMapSize=H.mapSize,tt.shadowCameraNear=H.camera.near,tt.shadowCameraFar=H.camera.far,s.pointShadow[T]=tt,s.pointShadowMap[T]=j,s.pointShadowMatrix[T]=V.shadow.matrix,P++}s.point[T]=z,T++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(ht),z.groundColor.copy(V.groundColor).multiplyScalar(ht),s.hemi[S]=z,S++}}E>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==E||b.hemiLength!==S||b.numDirectionalShadows!==F||b.numPointShadows!==P||b.numSpotShadows!==C||b.numSpotMaps!==B||b.numLightProbes!==L)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=E,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+B-N,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=L,b.directionalLength=M,b.pointLength=T,b.spotLength=w,b.rectAreaLength=E,b.hemiLength=S,b.numDirectionalShadows=F,b.numPointShadows=P,b.numSpotShadows=C,b.numSpotMaps=B,b.numLightProbes=L,s.version=gA++)}function m(p,v){let x=0,g=0,M=0,T=0,w=0;const E=v.matrixWorldInverse;for(let S=0,F=p.length;S<F;S++){const P=p[S];if(P.isDirectionalLight){const C=s.directional[x];C.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(E),x++}else if(P.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(E),M++}else if(P.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(E),f.identity(),u.copy(P.matrixWorld),u.premultiply(E),f.extractRotation(u),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(P.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(E),g++}else if(P.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(E),w++}}}return{setup:d,setupView:m,state:s}}function fv(r){const t=new vA(r),i=[],s=[],l=[];function u(g){x.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function v(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:p,setupLightsView:v,pushLight:f,pushShadow:d,pushLightProbeGrid:m}}function xA(r){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new fv(r),t.set(l,[d])):u>=f.length?(d=new fv(r),f.push(d)):d=f[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yA=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],EA=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],hv=new nn,Wo=new W,Jh=new W;function bA(r,t,i){let s=new hp;const l=new Yt,u=new Yt,f=new an,d=new Dy,m=new Uy,p={},v=i.maxTextureSize,x={[us]:Zn,[Zn]:us,[ya]:ya},g=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:SA,fragmentShader:MA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new Oi;T.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Li(T,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let S=this.type;this.render=function(N,L,b){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||N.length===0)return;this.type===oM&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hu);const O=r.getRenderTarget(),K=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),J=r.state;J.setBlending(qi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ht=S!==this.type;ht&&L.traverse(function(_t){_t.material&&(Array.isArray(_t.material)?_t.material.forEach(j=>j.needsUpdate=!0):_t.material.needsUpdate=!0)});for(let _t=0,j=N.length;_t<j;_t++){const z=N[_t],H=z.shadow;if(H===void 0){se("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const tt=H.getFrameExtents();l.multiply(tt),u.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/tt.x),l.x=u.x*tt.x,H.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/tt.y),l.y=u.y*tt.y,H.mapSize.y=u.y));const pt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=pt,H.map===null||ht===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===qo){if(z.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Fn(l.x,l.y,{format:Is,type:Kn,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Fr(l.x,l.y,ki),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Ta,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else z.isPointLight?(H.map=new Gv(l.x),H.map.depthTexture=new cy(l.x,Ki)):(H.map=new Fn(l.x,l.y),H.map.depthTexture=new Fr(l.x,l.y,Ki)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Ta,this.type===Hu?(H.map.depthTexture.compareFunction=pt?op:rp,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn);H.camera.updateProjectionMatrix()}const vt=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<vt;U++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,U),r.clear();else{U===0&&(r.setRenderTarget(H.map),r.clear());const Z=H.getViewport(U);f.set(u.x*Z.x,u.y*Z.y,u.x*Z.z,u.y*Z.w),J.viewport(f)}if(z.isPointLight){const Z=H.camera,yt=H.matrix,Ct=z.distance||Z.far;Ct!==Z.far&&(Z.far=Ct,Z.updateProjectionMatrix()),Wo.setFromMatrixPosition(z.matrixWorld),Z.position.copy(Wo),Jh.copy(Z.position),Jh.add(yA[U]),Z.up.copy(EA[U]),Z.lookAt(Jh),Z.updateMatrixWorld(),yt.makeTranslation(-Wo.x,-Wo.y,-Wo.z),hv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(hv,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(z);s=H.getFrustum(),C(L,b,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===qo&&F(H,b),H.needsUpdate=!1}S=this.type,E.needsUpdate=!1,r.setRenderTarget(O,K,V)};function F(N,L){const b=t.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Fn(l.x,l.y,{format:Is,type:Kn})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(L,null,b,g,w,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(L,null,b,M,w,null)}function P(N,L,b,O){let K=null;const V=b.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)K=V;else if(K=b.isPointLight===!0?m:d,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const J=K.uuid,ht=L.uuid;let _t=p[J];_t===void 0&&(_t={},p[J]=_t);let j=_t[ht];j===void 0&&(j=K.clone(),_t[ht]=j,L.addEventListener("dispose",B)),K=j}if(K.visible=L.visible,K.wireframe=L.wireframe,O===qo?K.side=L.shadowSide!==null?L.shadowSide:L.side:K.side=L.shadowSide!==null?L.shadowSide:x[L.side],K.alphaMap=L.alphaMap,K.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,K.map=L.map,K.clipShadows=L.clipShadows,K.clippingPlanes=L.clippingPlanes,K.clipIntersection=L.clipIntersection,K.displacementMap=L.displacementMap,K.displacementScale=L.displacementScale,K.displacementBias=L.displacementBias,K.wireframeLinewidth=L.wireframeLinewidth,K.linewidth=L.linewidth,b.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const J=r.properties.get(K);J.light=b}return K}function C(N,L,b,O,K){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&K===qo)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,N.matrixWorld);const ht=t.update(N),_t=N.material;if(Array.isArray(_t)){const j=ht.groups;for(let z=0,H=j.length;z<H;z++){const tt=j[z],pt=_t[tt.materialIndex];if(pt&&pt.visible){const vt=P(N,pt,O,K);N.onBeforeShadow(r,N,L,b,ht,vt,tt),r.renderBufferDirect(b,null,ht,vt,N,tt),N.onAfterShadow(r,N,L,b,ht,vt,tt)}}}else if(_t.visible){const j=P(N,_t,O,K);N.onBeforeShadow(r,N,L,b,ht,j,null),r.renderBufferDirect(b,null,ht,j,N,null),N.onAfterShadow(r,N,L,b,ht,j,null)}}const J=N.children;for(let ht=0,_t=J.length;ht<_t;ht++)C(J[ht],L,b,O,K)}function B(N){N.target.removeEventListener("dispose",B);for(const b in p){const O=p[b],K=N.target.uuid;K in O&&(O[K].dispose(),delete O[K])}}}function TA(r,t){function i(){let k=!1;const wt=new an;let mt=null;const Ut=new an(0,0,0,0);return{setMask:function(It){mt!==It&&!k&&(r.colorMask(It,It,It,It),mt=It)},setLocked:function(It){k=It},setClear:function(It,Et,Zt,Xt,je){je===!0&&(It*=Xt,Et*=Xt,Zt*=Xt),wt.set(It,Et,Zt,Xt),Ut.equals(wt)===!1&&(r.clearColor(It,Et,Zt,Xt),Ut.copy(wt))},reset:function(){k=!1,mt=null,Ut.set(-1,0,0,0)}}}function s(){let k=!1,wt=!1,mt=null,Ut=null,It=null;return{setReversed:function(Et){if(wt!==Et){const Zt=t.get("EXT_clip_control");Et?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),wt=Et;const Xt=It;It=null,this.setClear(Xt)}},getReversed:function(){return wt},setTest:function(Et){Et?Mt(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(Et){mt!==Et&&!k&&(r.depthMask(Et),mt=Et)},setFunc:function(Et){if(wt&&(Et=HM[Et]),Ut!==Et){switch(Et){case ed:r.depthFunc(r.NEVER);break;case nd:r.depthFunc(r.ALWAYS);break;case id:r.depthFunc(r.LESS);break;case zr:r.depthFunc(r.LEQUAL);break;case ad:r.depthFunc(r.EQUAL);break;case sd:r.depthFunc(r.GEQUAL);break;case rd:r.depthFunc(r.GREATER);break;case od:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ut=Et}},setLocked:function(Et){k=Et},setClear:function(Et){It!==Et&&(It=Et,wt&&(Et=1-Et),r.clearDepth(Et))},reset:function(){k=!1,mt=null,Ut=null,It=null,wt=!1}}}function l(){let k=!1,wt=null,mt=null,Ut=null,It=null,Et=null,Zt=null,Xt=null,je=null;return{setTest:function(ze){k||(ze?Mt(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(ze){wt!==ze&&!k&&(r.stencilMask(ze),wt=ze)},setFunc:function(ze,Jn,jn){(mt!==ze||Ut!==Jn||It!==jn)&&(r.stencilFunc(ze,Jn,jn),mt=ze,Ut=Jn,It=jn)},setOp:function(ze,Jn,jn){(Et!==ze||Zt!==Jn||Xt!==jn)&&(r.stencilOp(ze,Jn,jn),Et=ze,Zt=Jn,Xt=jn)},setLocked:function(ze){k=ze},setClear:function(ze){je!==ze&&(r.clearStencil(ze),je=ze)},reset:function(){k=!1,wt=null,mt=null,Ut=null,It=null,Et=null,Zt=null,Xt=null,je=null}}}const u=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},x={},g={},M=new WeakMap,T=[],w=null,E=!1,S=null,F=null,P=null,C=null,B=null,N=null,L=null,b=new _e(0,0,0),O=0,K=!1,V=null,J=null,ht=null,_t=null,j=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,tt=0;const pt=r.getParameter(r.VERSION);pt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),H=tt>=1):pt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),H=tt>=2);let vt=null,U={};const Z=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Ct=new an().fromArray(Z),Tt=new an().fromArray(yt);function it(k,wt,mt,Ut){const It=new Uint8Array(4),Et=r.createTexture();r.bindTexture(k,Et),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Zt=0;Zt<mt;Zt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,Ut,0,r.RGBA,r.UNSIGNED_BYTE,It):r.texImage2D(wt+Zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,It);return Et}const St={};St[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Mt(r.DEPTH_TEST),f.setFunc(zr),Ze(!1),Ke(c_),Mt(r.CULL_FACE),xe(qi);function Mt(k){v[k]!==!0&&(r.enable(k),v[k]=!0)}function Ht(k){v[k]!==!1&&(r.disable(k),v[k]=!1)}function ie(k,wt){return g[k]!==wt?(r.bindFramebuffer(k,wt),g[k]=wt,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=wt),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function Jt(k,wt){let mt=T,Ut=!1;if(k){mt=M.get(wt),mt===void 0&&(mt=[],M.set(wt,mt));const It=k.textures;if(mt.length!==It.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let Et=0,Zt=It.length;Et<Zt;Et++)mt[Et]=r.COLOR_ATTACHMENT0+Et;mt.length=It.length,Ut=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,Ut=!0);Ut&&r.drawBuffers(mt)}function Ve(k){return w!==k?(r.useProgram(k),w=k,!0):!1}const fe={[Os]:r.FUNC_ADD,[uM]:r.FUNC_SUBTRACT,[cM]:r.FUNC_REVERSE_SUBTRACT};fe[fM]=r.MIN,fe[hM]=r.MAX;const ve={[dM]:r.ZERO,[pM]:r.ONE,[mM]:r.SRC_COLOR,[$h]:r.SRC_ALPHA,[MM]:r.SRC_ALPHA_SATURATE,[xM]:r.DST_COLOR,[_M]:r.DST_ALPHA,[gM]:r.ONE_MINUS_SRC_COLOR,[td]:r.ONE_MINUS_SRC_ALPHA,[SM]:r.ONE_MINUS_DST_COLOR,[vM]:r.ONE_MINUS_DST_ALPHA,[yM]:r.CONSTANT_COLOR,[EM]:r.ONE_MINUS_CONSTANT_COLOR,[bM]:r.CONSTANT_ALPHA,[TM]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(k,wt,mt,Ut,It,Et,Zt,Xt,je,ze){if(k===qi){E===!0&&(Ht(r.BLEND),E=!1);return}if(E===!1&&(Mt(r.BLEND),E=!0),k!==lM){if(k!==S||ze!==K){if((F!==Os||B!==Os)&&(r.blendEquation(r.FUNC_ADD),F=Os,B=Os),ze)switch(k){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jh:r.blendFunc(r.ONE,r.ONE);break;case f_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case h_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:we("WebGLState: Invalid blending: ",k);break}else switch(k){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case f_:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case h_:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",k);break}P=null,C=null,N=null,L=null,b.set(0,0,0),O=0,S=k,K=ze}return}It=It||wt,Et=Et||mt,Zt=Zt||Ut,(wt!==F||It!==B)&&(r.blendEquationSeparate(fe[wt],fe[It]),F=wt,B=It),(mt!==P||Ut!==C||Et!==N||Zt!==L)&&(r.blendFuncSeparate(ve[mt],ve[Ut],ve[Et],ve[Zt]),P=mt,C=Ut,N=Et,L=Zt),(Xt.equals(b)===!1||je!==O)&&(r.blendColor(Xt.r,Xt.g,Xt.b,je),b.copy(Xt),O=je),S=k,K=!1}function pe(k,wt){k.side===ya?Ht(r.CULL_FACE):Mt(r.CULL_FACE);let mt=k.side===Zn;wt&&(mt=!mt),Ze(mt),k.blending===Lr&&k.transparent===!1?xe(qi):xe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const Ut=k.stencilWrite;d.setTest(Ut),Ut&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),zt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(k){V!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),V=k)}function Ke(k){k!==sM?(Mt(r.CULL_FACE),k!==J&&(k===c_?r.cullFace(r.BACK):k===rM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),J=k}function At(k){k!==ht&&(H&&r.lineWidth(k),ht=k)}function zt(k,wt,mt){k?(Mt(r.POLYGON_OFFSET_FILL),(_t!==wt||j!==mt)&&(_t=wt,j=mt,f.getReversed()&&(wt=-wt),r.polygonOffset(wt,mt))):Ht(r.POLYGON_OFFSET_FILL)}function Qt(k){k?Mt(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function le(k){k===void 0&&(k=r.TEXTURE0+z-1),vt!==k&&(r.activeTexture(k),vt=k)}function G(k,wt,mt){mt===void 0&&(vt===null?mt=r.TEXTURE0+z-1:mt=vt);let Ut=U[mt];Ut===void 0&&(Ut={type:void 0,texture:void 0},U[mt]=Ut),(Ut.type!==k||Ut.texture!==wt)&&(vt!==mt&&(r.activeTexture(mt),vt=mt),r.bindTexture(k,wt||St[k]),Ut.type=k,Ut.texture=wt)}function Se(){const k=U[vt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{r.compressedTexImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function y(){try{r.texSubImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function q(){try{r.texSubImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function lt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function Rt(){try{r.texStorage2D(...arguments)}catch(k){we("WebGLState:",k)}}function Dt(){try{r.texStorage3D(...arguments)}catch(k){we("WebGLState:",k)}}function ft(){try{r.texImage2D(...arguments)}catch(k){we("WebGLState:",k)}}function ct(){try{r.texImage3D(...arguments)}catch(k){we("WebGLState:",k)}}function bt(k){return x[k]!==void 0?x[k]:r.getParameter(k)}function Nt(k,wt){x[k]!==wt&&(r.pixelStorei(k,wt),x[k]=wt)}function Lt(k){Ct.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ct.copy(k))}function Ot(k){Tt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Tt.copy(k))}function $t(k,wt){let mt=p.get(wt);mt===void 0&&(mt=new WeakMap,p.set(wt,mt));let Ut=mt.get(k);Ut===void 0&&(Ut=r.getUniformBlockIndex(wt,k.name),mt.set(k,Ut))}function te(k,wt){const Ut=p.get(wt).get(k);m.get(wt)!==Ut&&(r.uniformBlockBinding(wt,Ut,k.__bindingPointIndex),m.set(wt,Ut))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},x={},vt=null,U={},g={},M=new WeakMap,T=[],w=null,E=!1,S=null,F=null,P=null,C=null,B=null,N=null,L=null,b=new _e(0,0,0),O=0,K=!1,V=null,J=null,ht=null,_t=null,j=null,Ct.set(0,0,r.canvas.width,r.canvas.height),Tt.set(0,0,r.canvas.width,r.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:Mt,disable:Ht,bindFramebuffer:ie,drawBuffers:Jt,useProgram:Ve,setBlending:xe,setMaterial:pe,setFlipSided:Ze,setCullFace:Ke,setLineWidth:At,setPolygonOffset:zt,setScissorTest:Qt,activeTexture:le,bindTexture:G,unbindTexture:Se,compressedTexImage2D:re,compressedTexImage3D:D,texImage2D:ft,texImage3D:ct,pixelStorei:Nt,getParameter:bt,updateUBOMapping:$t,uniformBlockBinding:te,texStorage2D:Rt,texStorage3D:Dt,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:$,compressedTexSubImage3D:lt,scissor:Lt,viewport:Ot,reset:oe}}function AA(r,t,i,s,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Yt,v=new WeakMap,x=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,y){return T?new OffscreenCanvas(D,y):$u("canvas")}function E(D,y,q){let $=1;const lt=re(D);if((lt.width>q||lt.height>q)&&($=q/Math.max(lt.width,lt.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Rt=Math.floor($*lt.width),Dt=Math.floor($*lt.height);g===void 0&&(g=w(Rt,Dt));const ft=y?w(Rt,Dt):g;return ft.width=Rt,ft.height=Dt,ft.getContext("2d").drawImage(D,0,0,Rt,Dt),se("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+Rt+"x"+Dt+")."),ft}else return"data"in D&&se("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),D;return D}function S(D){return D.generateMipmaps}function F(D){r.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(D,y,q,$,lt,Rt=!1){if(D!==null){if(r[D]!==void 0)return r[D];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Dt;$&&(Dt=t.get("EXT_texture_norm16"),Dt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=y;if(y===r.RED&&(q===r.FLOAT&&(ft=r.R32F),q===r.HALF_FLOAT&&(ft=r.R16F),q===r.UNSIGNED_BYTE&&(ft=r.R8),q===r.UNSIGNED_SHORT&&Dt&&(ft=Dt.R16_EXT),q===r.SHORT&&Dt&&(ft=Dt.R16_SNORM_EXT)),y===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.R8UI),q===r.UNSIGNED_SHORT&&(ft=r.R16UI),q===r.UNSIGNED_INT&&(ft=r.R32UI),q===r.BYTE&&(ft=r.R8I),q===r.SHORT&&(ft=r.R16I),q===r.INT&&(ft=r.R32I)),y===r.RG&&(q===r.FLOAT&&(ft=r.RG32F),q===r.HALF_FLOAT&&(ft=r.RG16F),q===r.UNSIGNED_BYTE&&(ft=r.RG8),q===r.UNSIGNED_SHORT&&Dt&&(ft=Dt.RG16_EXT),q===r.SHORT&&Dt&&(ft=Dt.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RG8UI),q===r.UNSIGNED_SHORT&&(ft=r.RG16UI),q===r.UNSIGNED_INT&&(ft=r.RG32UI),q===r.BYTE&&(ft=r.RG8I),q===r.SHORT&&(ft=r.RG16I),q===r.INT&&(ft=r.RG32I)),y===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),q===r.UNSIGNED_INT&&(ft=r.RGB32UI),q===r.BYTE&&(ft=r.RGB8I),q===r.SHORT&&(ft=r.RGB16I),q===r.INT&&(ft=r.RGB32I)),y===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),q===r.UNSIGNED_INT&&(ft=r.RGBA32UI),q===r.BYTE&&(ft=r.RGBA8I),q===r.SHORT&&(ft=r.RGBA16I),q===r.INT&&(ft=r.RGBA32I)),y===r.RGB&&(q===r.UNSIGNED_SHORT&&Dt&&(ft=Dt.RGB16_EXT),q===r.SHORT&&Dt&&(ft=Dt.RGB16_SNORM_EXT),q===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),y===r.RGBA){const ct=Rt?ju:Re.getTransfer(lt);q===r.FLOAT&&(ft=r.RGBA32F),q===r.HALF_FLOAT&&(ft=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ft=ct===Pe?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT&&Dt&&(ft=Dt.RGBA16_EXT),q===r.SHORT&&Dt&&(ft=Dt.RGBA16_SNORM_EXT),q===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function B(D,y){let q;return D?y===null||y===Ki||y===jo?q=r.DEPTH24_STENCIL8:y===ki?q=r.DEPTH32F_STENCIL8:y===Jo&&(q=r.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ki||y===jo?q=r.DEPTH_COMPONENT24:y===ki?q=r.DEPTH_COMPONENT32F:y===Jo&&(q=r.DEPTH_COMPONENT16),q}function N(D,y){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==Ln?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function L(D){const y=D.target;y.removeEventListener("dispose",L),O(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&x.delete(y)}function b(D){const y=D.target;y.removeEventListener("dispose",b),V(y)}function O(D){const y=s.get(D);if(y.__webglInit===void 0)return;const q=D.source,$=M.get(q);if($){const lt=$[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&K(D),Object.keys($).length===0&&M.delete(q)}s.remove(D)}function K(D){const y=s.get(D);r.deleteTexture(y.__webglTexture);const q=D.source,$=M.get(q);delete $[y.__cacheKey],f.memory.textures--}function V(D){const y=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let lt=0;lt<y.__webglFramebuffer[$].length;lt++)r.deleteFramebuffer(y.__webglFramebuffer[$][lt]);else r.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)r.deleteFramebuffer(y.__webglFramebuffer[$]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=D.textures;for(let $=0,lt=q.length;$<lt;$++){const Rt=s.get(q[$]);Rt.__webglTexture&&(r.deleteTexture(Rt.__webglTexture),f.memory.textures--),s.remove(q[$])}s.remove(D)}let J=0;function ht(){J=0}function _t(){return J}function j(D){J=D}function z(){const D=J;return D>=l.maxTextures&&se("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),J+=1,D}function H(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function tt(D,y){const q=s.get(D);if(D.isVideoTexture&&G(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const $=D.image;if($===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(q,D,y);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+y)}function pt(D,y){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){Ht(q,D,y);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+y)}function vt(D,y){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){Ht(q,D,y);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+y)}function U(D,y){const q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){ie(q,D,y);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+y)}const Z={[ld]:r.REPEAT,[Ea]:r.CLAMP_TO_EDGE,[ud]:r.MIRRORED_REPEAT},yt={[Cn]:r.NEAREST,[CM]:r.NEAREST_MIPMAP_NEAREST,[_u]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[_h]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},Ct={[UM]:r.NEVER,[zM]:r.ALWAYS,[NM]:r.LESS,[rp]:r.LEQUAL,[LM]:r.EQUAL,[op]:r.GEQUAL,[OM]:r.GREATER,[PM]:r.NOTEQUAL};function Tt(D,y){if(y.type===ki&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ln||y.magFilter===_h||y.magFilter===_u||y.magFilter===zs||y.minFilter===Ln||y.minFilter===_h||y.minFilter===_u||y.minFilter===zs)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Z[y.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Z[y.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Z[y.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,yt[y.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==_u&&y.minFilter!==zs||y.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function it(D,y){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",L));const $=y.source;let lt=M.get($);lt===void 0&&(lt={},M.set($,lt));const Rt=H(y);if(Rt!==D.__cacheKey){lt[Rt]===void 0&&(lt[Rt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,q=!0),lt[Rt].usedTimes++;const Dt=lt[D.__cacheKey];Dt!==void 0&&(lt[D.__cacheKey].usedTimes--,Dt.usedTimes===0&&K(y)),D.__cacheKey=Rt,D.__webglTexture=lt[Rt].texture}return q}function St(D,y,q){return Math.floor(Math.floor(D/q)/y)}function Mt(D,y,q,$){const Rt=D.updateRanges;if(Rt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,q,$,y.data);else{Rt.sort((Nt,Lt)=>Nt.start-Lt.start);let Dt=0;for(let Nt=1;Nt<Rt.length;Nt++){const Lt=Rt[Dt],Ot=Rt[Nt],$t=Lt.start+Lt.count,te=St(Ot.start,y.width,4),oe=St(Lt.start,y.width,4);Ot.start<=$t+1&&te===oe&&St(Ot.start+Ot.count-1,y.width,4)===te?Lt.count=Math.max(Lt.count,Ot.start+Ot.count-Lt.start):(++Dt,Rt[Dt]=Ot)}Rt.length=Dt+1;const ft=i.getParameter(r.UNPACK_ROW_LENGTH),ct=i.getParameter(r.UNPACK_SKIP_PIXELS),bt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Nt=0,Lt=Rt.length;Nt<Lt;Nt++){const Ot=Rt[Nt],$t=Math.floor(Ot.start/4),te=Math.ceil(Ot.count/4),oe=$t%y.width,k=Math.floor($t/y.width),wt=te,mt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,oe,k,wt,mt,q,$,y.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ft),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(r.UNPACK_SKIP_ROWS,bt)}}function Ht(D,y,q){let $=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=r.TEXTURE_3D);const lt=it(D,y),Rt=y.source;i.bindTexture($,D.__webglTexture,r.TEXTURE0+q);const Dt=s.get(Rt);if(Rt.version!==Dt.__version||lt===!0){if(i.activeTexture(r.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const mt=Re.getPrimaries(Re.workingColorSpace),Ut=y.colorSpace===os?null:Re.getPrimaries(y.colorSpace),It=y.colorSpace===os||mt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}i.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let ct=E(y.image,!1,l.maxTextureSize);ct=Se(y,ct);const bt=u.convert(y.format,y.colorSpace),Nt=u.convert(y.type);let Lt=C(y.internalFormat,bt,Nt,y.normalized,y.colorSpace,y.isVideoTexture);Tt($,y);let Ot;const $t=y.mipmaps,te=y.isVideoTexture!==!0,oe=Dt.__version===void 0||lt===!0,k=Rt.dataReady,wt=N(y,ct);if(y.isDepthTexture)Lt=B(y.format===Bs,y.type),oe&&(te?i.texStorage2D(r.TEXTURE_2D,1,Lt,ct.width,ct.height):i.texImage2D(r.TEXTURE_2D,0,Lt,ct.width,ct.height,0,bt,Nt,null));else if(y.isDataTexture)if($t.length>0){te&&oe&&i.texStorage2D(r.TEXTURE_2D,wt,Lt,$t[0].width,$t[0].height);for(let mt=0,Ut=$t.length;mt<Ut;mt++)Ot=$t[mt],te?k&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,bt,Nt,Ot.data):i.texImage2D(r.TEXTURE_2D,mt,Lt,Ot.width,Ot.height,0,bt,Nt,Ot.data);y.generateMipmaps=!1}else te?(oe&&i.texStorage2D(r.TEXTURE_2D,wt,Lt,ct.width,ct.height),k&&Mt(y,ct,bt,Nt)):i.texImage2D(r.TEXTURE_2D,0,Lt,ct.width,ct.height,0,bt,Nt,ct.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){te&&oe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Lt,$t[0].width,$t[0].height,ct.depth);for(let mt=0,Ut=$t.length;mt<Ut;mt++)if(Ot=$t[mt],y.format!==Ni)if(bt!==null)if(te){if(k)if(y.layerUpdates.size>0){const It=X_(Ot.width,Ot.height,y.format,y.type);for(const Et of y.layerUpdates){const Zt=Ot.data.subarray(Et*It/Ot.data.BYTES_PER_ELEMENT,(Et+1)*It/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,Et,Ot.width,Ot.height,1,bt,Zt)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,ct.depth,bt,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Lt,Ot.width,Ot.height,ct.depth,0,Ot.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,ct.depth,bt,Nt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,mt,Lt,Ot.width,Ot.height,ct.depth,0,bt,Nt,Ot.data)}else{te&&oe&&i.texStorage2D(r.TEXTURE_2D,wt,Lt,$t[0].width,$t[0].height);for(let mt=0,Ut=$t.length;mt<Ut;mt++)Ot=$t[mt],y.format!==Ni?bt!==null?te?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,bt,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,mt,Lt,Ot.width,Ot.height,0,Ot.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?k&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,bt,Nt,Ot.data):i.texImage2D(r.TEXTURE_2D,mt,Lt,Ot.width,Ot.height,0,bt,Nt,Ot.data)}else if(y.isDataArrayTexture)if(te){if(oe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Lt,ct.width,ct.height,ct.depth),k)if(y.layerUpdates.size>0){const mt=X_(ct.width,ct.height,y.format,y.type);for(const Ut of y.layerUpdates){const It=ct.data.subarray(Ut*mt/ct.data.BYTES_PER_ELEMENT,(Ut+1)*mt/ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ut,ct.width,ct.height,1,bt,Nt,It)}y.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,bt,Nt,ct.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,ct.width,ct.height,ct.depth,0,bt,Nt,ct.data);else if(y.isData3DTexture)te?(oe&&i.texStorage3D(r.TEXTURE_3D,wt,Lt,ct.width,ct.height,ct.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,bt,Nt,ct.data)):i.texImage3D(r.TEXTURE_3D,0,Lt,ct.width,ct.height,ct.depth,0,bt,Nt,ct.data);else if(y.isFramebufferTexture){if(oe)if(te)i.texStorage2D(r.TEXTURE_2D,wt,Lt,ct.width,ct.height);else{let mt=ct.width,Ut=ct.height;for(let It=0;It<wt;It++)i.texImage2D(r.TEXTURE_2D,It,Lt,mt,Ut,0,bt,Nt,null),mt>>=1,Ut>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const mt=r.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),ct.parentNode!==mt){mt.appendChild(ct),x.add(y),mt.onpaint=Ut=>{const It=Ut.changedElements;for(const Et of x)It.includes(Et.image)&&(Et.needsUpdate=!0)},mt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ct);else{const It=r.RGBA,Et=r.RGBA,Zt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,It,Et,Zt,ct)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if($t.length>0){if(te&&oe){const mt=re($t[0]);i.texStorage2D(r.TEXTURE_2D,wt,Lt,mt.width,mt.height)}for(let mt=0,Ut=$t.length;mt<Ut;mt++)Ot=$t[mt],te?k&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,bt,Nt,Ot):i.texImage2D(r.TEXTURE_2D,mt,Lt,bt,Nt,Ot);y.generateMipmaps=!1}else if(te){if(oe){const mt=re(ct);i.texStorage2D(r.TEXTURE_2D,wt,Lt,mt.width,mt.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Nt,ct)}else i.texImage2D(r.TEXTURE_2D,0,Lt,bt,Nt,ct);S(y)&&F($),Dt.__version=Rt.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ie(D,y,q){if(y.image.length!==6)return;const $=it(D,y),lt=y.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+q);const Rt=s.get(lt);if(lt.version!==Rt.__version||$===!0){i.activeTexture(r.TEXTURE0+q);const Dt=Re.getPrimaries(Re.workingColorSpace),ft=y.colorSpace===os?null:Re.getPrimaries(y.colorSpace),ct=y.colorSpace===os||Dt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const bt=y.isCompressedTexture||y.image[0].isCompressedTexture,Nt=y.image[0]&&y.image[0].isDataTexture,Lt=[];for(let Et=0;Et<6;Et++)!bt&&!Nt?Lt[Et]=E(y.image[Et],!0,l.maxCubemapSize):Lt[Et]=Nt?y.image[Et].image:y.image[Et],Lt[Et]=Se(y,Lt[Et]);const Ot=Lt[0],$t=u.convert(y.format,y.colorSpace),te=u.convert(y.type),oe=C(y.internalFormat,$t,te,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,wt=Rt.__version===void 0||$===!0,mt=lt.dataReady;let Ut=N(y,Ot);Tt(r.TEXTURE_CUBE_MAP,y);let It;if(bt){k&&wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,oe,Ot.width,Ot.height);for(let Et=0;Et<6;Et++){It=Lt[Et].mipmaps;for(let Zt=0;Zt<It.length;Zt++){const Xt=It[Zt];y.format!==Ni?$t!==null?k?mt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,0,0,Xt.width,Xt.height,$t,Xt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,oe,Xt.width,Xt.height,0,Xt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,0,0,Xt.width,Xt.height,$t,te,Xt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt,oe,Xt.width,Xt.height,0,$t,te,Xt.data)}}}else{if(It=y.mipmaps,k&&wt){It.length>0&&Ut++;const Et=re(Lt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,oe,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Nt){k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Lt[Et].width,Lt[Et].height,$t,te,Lt[Et].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,oe,Lt[Et].width,Lt[Et].height,0,$t,te,Lt[Et].data);for(let Zt=0;Zt<It.length;Zt++){const je=It[Zt].image[Et].image;k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,0,0,je.width,je.height,$t,te,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,oe,je.width,je.height,0,$t,te,je.data)}}else{k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,$t,te,Lt[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,oe,$t,te,Lt[Et]);for(let Zt=0;Zt<It.length;Zt++){const Xt=It[Zt];k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,0,0,$t,te,Xt.image[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt+1,oe,$t,te,Xt.image[Et])}}}S(y)&&F(r.TEXTURE_CUBE_MAP),Rt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function Jt(D,y,q,$,lt,Rt){const Dt=u.convert(q.format,q.colorSpace),ft=u.convert(q.type),ct=C(q.internalFormat,Dt,ft,q.normalized,q.colorSpace),bt=s.get(y),Nt=s.get(q);if(Nt.__renderTarget=y,!bt.__hasExternalTextures){const Lt=Math.max(1,y.width>>Rt),Ot=Math.max(1,y.height>>Rt);lt===r.TEXTURE_3D||lt===r.TEXTURE_2D_ARRAY?i.texImage3D(lt,Rt,ct,Lt,Ot,y.depth,0,Dt,ft,null):i.texImage2D(lt,Rt,ct,Lt,Ot,0,Dt,ft,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),le(y)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,lt,Nt.__webglTexture,0,Qt(y)):(lt===r.TEXTURE_2D||lt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,lt,Nt.__webglTexture,Rt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(D,y,q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),y.depthBuffer){const $=y.depthTexture,lt=$&&$.isDepthTexture?$.type:null,Rt=B(y.stencilBuffer,lt),Dt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;le(y)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(y),Rt,y.width,y.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(y),Rt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Rt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Dt,r.RENDERBUFFER,D)}else{const $=y.textures;for(let lt=0;lt<$.length;lt++){const Rt=$[lt],Dt=u.convert(Rt.format,Rt.colorSpace),ft=u.convert(Rt.type),ct=C(Rt.internalFormat,Dt,ft,Rt.normalized,Rt.colorSpace);le(y)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt(y),ct,y.width,y.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt(y),ct,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ct,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(D,y,q){const $=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=s.get(y.depthTexture);if(lt.__renderTarget=y,(!lt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,y.depthTexture.addEventListener("dispose",L)),lt.__webglTexture===void 0){lt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,y.depthTexture);const bt=u.convert(y.depthTexture.format),Nt=u.convert(y.depthTexture.type);let Lt;y.depthTexture.format===Ta?Lt=r.DEPTH_COMPONENT24:y.depthTexture.format===Bs&&(Lt=r.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Lt,y.width,y.height,0,bt,Nt,null)}}else tt(y.depthTexture,0);const Rt=lt.__webglTexture,Dt=Qt(y),ft=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,ct=y.depthTexture.format===Bs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ta)le(y)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,ft,Rt,0,Dt):r.framebufferTexture2D(r.FRAMEBUFFER,ct,ft,Rt,0);else if(y.depthTexture.format===Bs)le(y)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,ft,Rt,0,Dt):r.framebufferTexture2D(r.FRAMEBUFFER,ct,ft,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(D){const y=s.get(D),q=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const $=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const lt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",lt)};$.addEventListener("dispose",lt),y.__depthDisposeCallback=lt}y.__boundDepthTexture=$}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let $=0;$<6;$++)fe(y.__webglFramebuffer[$],D,$);else{const $=D.texture.mipmaps;$&&$.length>0?fe(y.__webglFramebuffer[0],D,0):fe(y.__webglFramebuffer,D,0)}else if(q){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=r.createRenderbuffer(),Ve(y.__webglDepthbuffer[$],D,!1);else{const lt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,Rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,lt,r.RENDERBUFFER,Rt)}}else{const $=D.texture.mipmaps;if($&&$.length>0?i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ve(y.__webglDepthbuffer,D,!1);else{const lt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,lt,r.RENDERBUFFER,Rt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(D,y,q){const $=s.get(D);y!==void 0&&Jt($.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&ve(D)}function pe(D){const y=D.texture,q=s.get(D),$=s.get(y);D.addEventListener("dispose",b);const lt=D.textures,Rt=D.isWebGLCubeRenderTarget===!0,Dt=lt.length>1;if(Dt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=y.version,f.memory.textures++),Rt){q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[ft]=[];for(let ct=0;ct<y.mipmaps.length;ct++)q.__webglFramebuffer[ft][ct]=r.createFramebuffer()}else q.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)q.__webglFramebuffer[ft]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Dt)for(let ft=0,ct=lt.length;ft<ct;ft++){const bt=s.get(lt[ft]);bt.__webglTexture===void 0&&(bt.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&le(D)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ft=0;ft<lt.length;ft++){const ct=lt[ft];q.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ft]);const bt=u.convert(ct.format,ct.colorSpace),Nt=u.convert(ct.type),Lt=C(ct.internalFormat,bt,Nt,ct.normalized,ct.colorSpace,D.isXRRenderTarget===!0),Ot=Qt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,Lt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,q.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Rt){i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,y);for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0)for(let ct=0;ct<y.mipmaps.length;ct++)Jt(q.__webglFramebuffer[ft][ct],D,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ct);else Jt(q.__webglFramebuffer[ft],D,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);S(y)&&F(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let ft=0,ct=lt.length;ft<ct;ft++){const bt=lt[ft],Nt=s.get(bt);let Lt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Nt.__webglTexture),Tt(Lt,bt),Jt(q.__webglFramebuffer,D,bt,r.COLOR_ATTACHMENT0+ft,Lt,0),S(bt)&&F(Lt)}i.unbindTexture()}else{let ft=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ft,$.__webglTexture),Tt(ft,y),y.mipmaps&&y.mipmaps.length>0)for(let ct=0;ct<y.mipmaps.length;ct++)Jt(q.__webglFramebuffer[ct],D,y,r.COLOR_ATTACHMENT0,ft,ct);else Jt(q.__webglFramebuffer,D,y,r.COLOR_ATTACHMENT0,ft,0);S(y)&&F(ft),i.unbindTexture()}D.depthBuffer&&ve(D)}function Ze(D){const y=D.textures;for(let q=0,$=y.length;q<$;q++){const lt=y[q];if(S(lt)){const Rt=P(D),Dt=s.get(lt).__webglTexture;i.bindTexture(Rt,Dt),F(Rt),i.unbindTexture()}}}const Ke=[],At=[];function zt(D){if(D.samples>0){if(le(D)===!1){const y=D.textures,q=D.width,$=D.height;let lt=r.COLOR_BUFFER_BIT;const Rt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=s.get(D),ft=y.length>1;if(ft)for(let bt=0;bt<y.length;bt++)i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const ct=D.texture.mipmaps;ct&&ct.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let bt=0;bt<y.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(lt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(lt|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[bt]);const Nt=s.get(y[bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Nt,0)}r.blitFramebuffer(0,0,q,$,0,0,q,$,lt,r.NEAREST),m===!0&&(Ke.length=0,At.length=0,Ke.push(r.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ke.push(Rt),At.push(Rt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,At)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let bt=0;bt<y.length;bt++){i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[bt]);const Nt=s.get(y[bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.TEXTURE_2D,Nt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const y=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Qt(D){return Math.min(l.maxSamples,D.samples)}function le(D){const y=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function G(D){const y=f.render.frame;v.get(D)!==y&&(v.set(D,y),D.update())}function Se(D,y){const q=D.colorSpace,$=D.format,lt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Ju&&q!==os&&(Re.getTransfer(q)===Pe?($!==Ni||lt!==fi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",q)),y}function re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=z,this.resetTextureUnits=ht,this.getTextureUnits=_t,this.setTextureUnits=j,this.setTexture2D=tt,this.setTexture2DArray=pt,this.setTexture3D=vt,this.setTextureCube=U,this.rebindTextures=xe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function RA(r,t){function i(s,l=os){let u;const f=Re.getTransfer(l);if(s===fi)return r.UNSIGNED_BYTE;if(s===ep)return r.UNSIGNED_SHORT_4_4_4_4;if(s===np)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Sv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Mv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===vv)return r.BYTE;if(s===xv)return r.SHORT;if(s===Jo)return r.UNSIGNED_SHORT;if(s===tp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Kn)return r.HALF_FLOAT;if(s===yv)return r.ALPHA;if(s===Ev)return r.RGB;if(s===Ni)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===Bs)return r.DEPTH_STENCIL;if(s===bv)return r.RED;if(s===ip)return r.RED_INTEGER;if(s===Is)return r.RG;if(s===ap)return r.RG_INTEGER;if(s===sp)return r.RGBA_INTEGER;if(s===Gu||s===Vu||s===Xu||s===ku)if(f===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Gu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Gu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cd||s===fd||s===hd||s===dd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===cd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pd||s===md||s===gd||s===_d||s===vd||s===Ku||s===xd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===pd||s===md)return f===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===gd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===_d)return u.COMPRESSED_R11_EAC;if(s===vd)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Ku)return u.COMPRESSED_RG11_EAC;if(s===xd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Sd||s===Md||s===yd||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Nd||s===Ld)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Sd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Md)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ed)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Td)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ad)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ud)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ld)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Od||s===Pd||s===zd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Od)return f===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bd||s===Fd||s===Qu||s===Id)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Bd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Fd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
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

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Nv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new On({vertexShader:CA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new nc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends Hs{constructor(t,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,v=null,x=null,g=null,M=null,T=null;const w=typeof XRWebGLBinding<"u",E=new DA,S={},F=i.getContextAttributes();let P=null,C=null;const B=[],N=[],L=new Yt;let b=null;const O=new ci;O.viewport=new an;const K=new ci;K.viewport=new an;const V=[O,K],J=new By;let ht=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let St=B[it];return St===void 0&&(St=new Th,B[it]=St),St.getTargetRaySpace()},this.getControllerGrip=function(it){let St=B[it];return St===void 0&&(St=new Th,B[it]=St),St.getGripSpace()},this.getHand=function(it){let St=B[it];return St===void 0&&(St=new Th,B[it]=St),St.getHandSpace()};function j(it){const St=N.indexOf(it.inputSource);if(St===-1)return;const Mt=B[St];Mt!==void 0&&(Mt.update(it.inputSource,it.frame,p||f),Mt.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",H);for(let it=0;it<B.length;it++){const St=N[it];St!==null&&(N[it]=null,B[it].disconnect(St))}ht=null,_t=null,E.reset();for(const it in S)delete S[it];t.setRenderTarget(P),M=null,g=null,x=null,l=null,C=null,Tt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",z),l.addEventListener("inputsourceschange",H),F.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ht=null,ie=null;F.depth&&(ie=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=F.stencil?Bs:Ta,Ht=F.stencil?jo:Ki);const Jt={colorFormat:i.RGBA8,depthFormat:ie,scaleFactor:u};x=this.getBinding(),g=x.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new Fn(g.textureWidth,g.textureHeight,{format:Ni,type:fi,depthTexture:new Fr(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Fn(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Tt.setContext(l),Tt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function H(it){for(let St=0;St<it.removed.length;St++){const Mt=it.removed[St],Ht=N.indexOf(Mt);Ht>=0&&(N[Ht]=null,B[Ht].disconnect(Mt))}for(let St=0;St<it.added.length;St++){const Mt=it.added[St];let Ht=N.indexOf(Mt);if(Ht===-1){for(let Jt=0;Jt<B.length;Jt++)if(Jt>=N.length){N.push(Mt),Ht=Jt;break}else if(N[Jt]===null){N[Jt]=Mt,Ht=Jt;break}if(Ht===-1)break}const ie=B[Ht];ie&&ie.connect(Mt)}}const tt=new W,pt=new W;function vt(it,St,Mt){tt.setFromMatrixPosition(St.matrixWorld),pt.setFromMatrixPosition(Mt.matrixWorld);const Ht=tt.distanceTo(pt),ie=St.projectionMatrix.elements,Jt=Mt.projectionMatrix.elements,Ve=ie[14]/(ie[10]-1),fe=ie[14]/(ie[10]+1),ve=(ie[9]+1)/ie[5],xe=(ie[9]-1)/ie[5],pe=(ie[8]-1)/ie[0],Ze=(Jt[8]+1)/Jt[0],Ke=Ve*pe,At=Ve*Ze,zt=Ht/(-pe+Ze),Qt=zt*-pe;if(St.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Qt),it.translateZ(zt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),ie[10]===-1)it.projectionMatrix.copy(St.projectionMatrix),it.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const le=Ve+zt,G=fe+zt,Se=Ke-Qt,re=At+(Ht-Qt),D=ve*fe/G*le,y=xe*fe/G*le;it.projectionMatrix.makePerspective(Se,re,D,y,le,G),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function U(it,St){St===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(St.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let St=it.near,Mt=it.far;E.texture!==null&&(E.depthNear>0&&(St=E.depthNear),E.depthFar>0&&(Mt=E.depthFar)),J.near=K.near=O.near=St,J.far=K.far=O.far=Mt,(ht!==J.near||_t!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),ht=J.near,_t=J.far),J.layers.mask=it.layers.mask|6,O.layers.mask=J.layers.mask&-5,K.layers.mask=J.layers.mask&-3;const Ht=it.parent,ie=J.cameras;U(J,Ht);for(let Jt=0;Jt<ie.length;Jt++)U(ie[Jt],Ht);ie.length===2?vt(J,O,K):J.projectionMatrix.copy(O.projectionMatrix),Z(it,J,Ht)};function Z(it,St,Mt){Mt===null?it.matrix.copy(St.matrixWorld):(it.matrix.copy(Mt.matrixWorld),it.matrix.invert(),it.matrix.multiply(St.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(St.projectionMatrix),it.projectionMatrixInverse.copy(St.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Gd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(it){m=it,g!==null&&(g.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(J)},this.getCameraTexture=function(it){return S[it]};let yt=null;function Ct(it,St){if(v=St.getViewerPose(p||f),T=St,v!==null){const Mt=v.views;M!==null&&(t.setRenderTargetFramebuffer(C,M.framebuffer),t.setRenderTarget(C));let Ht=!1;Mt.length!==J.cameras.length&&(J.cameras.length=0,Ht=!0);for(let fe=0;fe<Mt.length;fe++){const ve=Mt[fe];let xe=null;if(M!==null)xe=M.getViewport(ve);else{const Ze=x.getViewSubImage(g,ve);xe=Ze.viewport,fe===0&&(t.setRenderTargetTextures(C,Ze.colorTexture,Ze.depthStencilTexture),t.setRenderTarget(C))}let pe=V[fe];pe===void 0&&(pe=new ci,pe.layers.enable(fe),pe.viewport=new an,V[fe]=pe),pe.matrix.fromArray(ve.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ve.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(xe.x,xe.y,xe.width,xe.height),fe===0&&(J.matrix.copy(pe.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ht===!0&&J.cameras.push(pe)}const ie=l.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const fe=x.getDepthInformation(Mt[0]);fe&&fe.isValid&&fe.texture&&E.init(fe,l.renderState)}if(ie&&ie.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let fe=0;fe<Mt.length;fe++){const ve=Mt[fe].camera;if(ve){let xe=S[ve];xe||(xe=new Nv,S[ve]=xe);const pe=x.getCameraImage(ve);xe.sourceTexture=pe}}}}for(let Mt=0;Mt<B.length;Mt++){const Ht=N[Mt],ie=B[Mt];Ht!==null&&ie!==void 0&&ie.update(Ht,St,p||f)}yt&&yt(it,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),T=null}const Tt=new Iv;Tt.setAnimationLoop(Ct),this.setAnimationLoop=function(it){yt=it},this.dispose=function(){}}}const NA=new nn,qv=new ce;qv.set(-1,0,0,0,1,0,0,0,1);function LA(r,t){function i(E,S){E.matrixAutoUpdate===!0&&E.updateMatrix(),S.value.copy(E.matrix)}function s(E,S){S.color.getRGB(E.fogColor.value,zv(r)),S.isFog?(E.fogNear.value=S.near,E.fogFar.value=S.far):S.isFogExp2&&(E.fogDensity.value=S.density)}function l(E,S,F,P,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(E,S):S.isMeshLambertMaterial?(u(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(E,S),x(E,S)):S.isMeshPhongMaterial?(u(E,S),v(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(E,S),g(E,S),S.isMeshPhysicalMaterial&&M(E,S,C)):S.isMeshMatcapMaterial?(u(E,S),T(E,S)):S.isMeshDepthMaterial?u(E,S):S.isMeshDistanceMaterial?(u(E,S),w(E,S)):S.isMeshNormalMaterial?u(E,S):S.isLineBasicMaterial?(f(E,S),S.isLineDashedMaterial&&d(E,S)):S.isPointsMaterial?m(E,S,F,P):S.isSpriteMaterial?p(E,S):S.isShadowMaterial?(E.color.value.copy(S.color),E.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(E,S){E.opacity.value=S.opacity,S.color&&E.diffuse.value.copy(S.color),S.emissive&&E.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.bumpMap&&(E.bumpMap.value=S.bumpMap,i(S.bumpMap,E.bumpMapTransform),E.bumpScale.value=S.bumpScale,S.side===Zn&&(E.bumpScale.value*=-1)),S.normalMap&&(E.normalMap.value=S.normalMap,i(S.normalMap,E.normalMapTransform),E.normalScale.value.copy(S.normalScale),S.side===Zn&&E.normalScale.value.negate()),S.displacementMap&&(E.displacementMap.value=S.displacementMap,i(S.displacementMap,E.displacementMapTransform),E.displacementScale.value=S.displacementScale,E.displacementBias.value=S.displacementBias),S.emissiveMap&&(E.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,E.emissiveMapTransform)),S.specularMap&&(E.specularMap.value=S.specularMap,i(S.specularMap,E.specularMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest);const F=t.get(S),P=F.envMap,C=F.envMapRotation;P&&(E.envMap.value=P,E.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(C)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(qv),E.reflectivity.value=S.reflectivity,E.ior.value=S.ior,E.refractionRatio.value=S.refractionRatio),S.lightMap&&(E.lightMap.value=S.lightMap,E.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,E.lightMapTransform)),S.aoMap&&(E.aoMap.value=S.aoMap,E.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,E.aoMapTransform))}function f(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform))}function d(E,S){E.dashSize.value=S.dashSize,E.totalSize.value=S.dashSize+S.gapSize,E.scale.value=S.scale}function m(E,S,F,P){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.size.value=S.size*F,E.scale.value=P*.5,S.map&&(E.map.value=S.map,i(S.map,E.uvTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function p(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.rotation.value=S.rotation,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function v(E,S){E.specular.value.copy(S.specular),E.shininess.value=Math.max(S.shininess,1e-4)}function x(E,S){S.gradientMap&&(E.gradientMap.value=S.gradientMap)}function g(E,S){E.metalness.value=S.metalness,S.metalnessMap&&(E.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,E.metalnessMapTransform)),E.roughness.value=S.roughness,S.roughnessMap&&(E.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,E.roughnessMapTransform)),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)}function M(E,S,F){E.ior.value=S.ior,S.sheen>0&&(E.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),E.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(E.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,E.sheenColorMapTransform)),S.sheenRoughnessMap&&(E.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,E.sheenRoughnessMapTransform))),S.clearcoat>0&&(E.clearcoat.value=S.clearcoat,E.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(E.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,E.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(E.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&E.clearcoatNormalScale.value.negate())),S.dispersion>0&&(E.dispersion.value=S.dispersion),S.iridescence>0&&(E.iridescence.value=S.iridescence,E.iridescenceIOR.value=S.iridescenceIOR,E.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(E.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,E.iridescenceMapTransform)),S.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),S.transmission>0&&(E.transmission.value=S.transmission,E.transmissionSamplerMap.value=F.texture,E.transmissionSamplerSize.value.set(F.width,F.height),S.transmissionMap&&(E.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,E.transmissionMapTransform)),E.thickness.value=S.thickness,S.thicknessMap&&(E.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=S.attenuationDistance,E.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(E.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(E.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=S.specularIntensity,E.specularColor.value.copy(S.specularColor),S.specularColorMap&&(E.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,E.specularColorMapTransform)),S.specularIntensityMap&&(E.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,S){S.matcap&&(E.matcap.value=S.matcap)}function w(E,S){const F=t.get(S).light;E.referencePosition.value.setFromMatrixPosition(F.matrixWorld),E.nearDistance.value=F.shadow.camera.near,E.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function OA(r,t,i,s){let l={},u={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,B){const N=B.program;s.uniformBlockBinding(C,N)}function p(C,B){let N=l[C.id];N===void 0&&(E(C),N=v(C),l[C.id]=N,C.addEventListener("dispose",F));const L=B.program;s.updateUBOMapping(C,L);const b=t.render.frame;u[C.id]!==b&&(g(C),u[C.id]=b)}function v(C){const B=x();C.__bindingPointIndex=B;const N=r.createBuffer(),L=C.__size,b=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,L,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,B,N),N}function x(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const B=l[C.id],N=C.uniforms,L=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,B);for(let b=0,O=N.length;b<O;b++){const K=N[b];if(Array.isArray(K))for(let V=0,J=K.length;V<J;V++)M(K[V],b,V,L);else M(K,b,0,L)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,B,N,L){if(w(C,B,N,L)===!0){const b=C.__offset,O=C.value;if(Array.isArray(O)){let K=0;for(let V=0;V<O.length;V++){const J=O[V],ht=S(J);T(J,C.__data,K),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(K+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(O,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,C.__data)}}function T(C,B,N){typeof C=="number"||typeof C=="boolean"?B[0]=C:C.isMatrix3?(B[0]=C.elements[0],B[1]=C.elements[1],B[2]=C.elements[2],B[3]=0,B[4]=C.elements[3],B[5]=C.elements[4],B[6]=C.elements[5],B[7]=0,B[8]=C.elements[6],B[9]=C.elements[7],B[10]=C.elements[8],B[11]=0):ArrayBuffer.isView(C)?B.set(new C.constructor(C.buffer,C.byteOffset,B.length)):C.toArray(B,N)}function w(C,B,N,L){const b=C.value,O=B+"_"+N;if(L[O]===void 0)return typeof b=="number"||typeof b=="boolean"?L[O]=b:ArrayBuffer.isView(b)?L[O]=b.slice():L[O]=b.clone(),!0;{const K=L[O];if(typeof b=="number"||typeof b=="boolean"){if(K!==b)return L[O]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(K.equals(b)===!1)return K.copy(b),!0}}return!1}function E(C){const B=C.uniforms;let N=0;const L=16;for(let O=0,K=B.length;O<K;O++){const V=Array.isArray(B[O])?B[O]:[B[O]];for(let J=0,ht=V.length;J<ht;J++){const _t=V[J],j=Array.isArray(_t.value)?_t.value:[_t.value];for(let z=0,H=j.length;z<H;z++){const tt=j[z],pt=S(tt),vt=N%L,U=vt%pt.boundary,Z=vt+U;N+=U,Z!==0&&L-Z<pt.storage&&(N+=L-Z),_t.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),_t.__offset=N,N+=pt.storage}}}const b=N%L;return b>0&&(N+=L-b),C.__size=N,C.__cache={},this}function S(C){const B={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(B.boundary=4,B.storage=4):C.isVector2?(B.boundary=8,B.storage=8):C.isVector3||C.isColor?(B.boundary=16,B.storage=12):C.isVector4?(B.boundary=16,B.storage=16):C.isMatrix3?(B.boundary=48,B.storage=48):C.isMatrix4?(B.boundary=64,B.storage=64):C.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(B.boundary=16,B.storage=C.byteLength):se("WebGLRenderer: Unsupported uniform value type.",C),B}function F(C){const B=C.target;B.removeEventListener("dispose",F);const N=f.indexOf(B.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[B.id]),delete l[B.id],delete u[B.id]}function P(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},u={}}return{bind:m,update:p,dispose:P}}const PA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function zA(){return Vi===null&&(Vi=new ry(PA,16,16,Is,Kn),Vi.name="DFG_LUT",Vi.minFilter=Ln,Vi.magFilter=Ln,Vi.wrapS=Ea,Vi.wrapT=Ea,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class BA{constructor(t={}){const{canvas:i=FM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=fi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const w=M,E=new Set([sp,ap,ip]),S=new Set([fi,Ki,Jo,jo,ep,np]),F=new Uint32Array(4),P=new Int32Array(4),C=new W;let B=null,N=null;const L=[],b=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let V=!1,J=null,ht=null,_t=null,j=null;this._outputColorSpace=yi;let z=0,H=0,tt=null,pt=-1,vt=null;const U=new an,Z=new an;let yt=null;const Ct=new _e(0);let Tt=0,it=i.width,St=i.height,Mt=1,Ht=null,ie=null;const Jt=new an(0,0,it,St),Ve=new an(0,0,it,St);let fe=!1;const ve=new hp;let xe=!1,pe=!1;const Ze=new nn,Ke=new W,At=new an,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function le(){return tt===null?Mt:1}let G=s;function Se(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qd}`),i.addEventListener("webglcontextlost",je,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Jn,!1),G===null){const Y="webgl2";if(G=Se(Y,A),G===null)throw Se(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw we("WebGLRenderer: "+A.message),A}let re,D,y,q,$,lt,Rt,Dt,ft,ct,bt,Nt,Lt,Ot,$t,te,oe,k,wt,mt,Ut,It,Et;function Zt(){re=new zT(G),re.init(),Ut=new RA(G,re),D=new CT(G,re,t,Ut),y=new TA(G,re),D.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ht=G.createFramebuffer(),_t=G.createFramebuffer(),j=G.createFramebuffer(),q=new IT(G),$=new fA,lt=new AA(G,re,y,$,D,Ut,q),Rt=new PT(K),Dt=new Xy(G),It=new AT(G,Dt),ft=new BT(G,Dt,q,It),ct=new GT(G,ft,Dt,It,q),k=new HT(G,D,lt),$t=new wT($),bt=new cA(K,Rt,re,D,It,$t),Nt=new LA(K,$),Lt=new dA,Ot=new xA(re),oe=new TT(K,Rt,y,ct,T,m),te=new bA(K,ct,D),Et=new OA(G,q,D,y),wt=new RT(G,re,q),mt=new FT(G,re,q),q.programs=bt.programs,K.capabilities=D,K.extensions=re,K.properties=$,K.renderLists=Lt,K.shadowMap=te,K.state=y,K.info=q}Zt(),w!==fi&&(O=new XT(w,i.width,i.height,d,l,u));const Xt=new UA(K,G);this.xr=Xt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(A){A!==void 0&&(Mt=A,this.setSize(it,St,!1))},this.getSize=function(A){return A.set(it,St)},this.setSize=function(A,Y,rt=!0){if(Xt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}it=A,St=Y,i.width=Math.floor(A*Mt),i.height=Math.floor(Y*Mt),rt===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(it*Mt,St*Mt).floor()},this.setDrawingBufferSize=function(A,Y,rt){it=A,St=Y,Mt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(w===fi){we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Jt)},this.setViewport=function(A,Y,rt,at){A.isVector4?Jt.set(A.x,A.y,A.z,A.w):Jt.set(A,Y,rt,at),y.viewport(U.copy(Jt).multiplyScalar(Mt).round())},this.getScissor=function(A){return A.copy(Ve)},this.setScissor=function(A,Y,rt,at){A.isVector4?Ve.set(A.x,A.y,A.z,A.w):Ve.set(A,Y,rt,at),y.scissor(Z.copy(Ve).multiplyScalar(Mt).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){y.setScissorTest(fe=A)},this.setOpaqueSort=function(A){Ht=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,rt=!0){let at=0;if(A){let st=!1;if(tt!==null){const Bt=tt.texture.format;st=E.has(Bt)}if(st){const Bt=tt.texture.type,Vt=S.has(Bt),Pt=oe.getClearColor(),Wt=oe.getClearAlpha(),kt=Pt.r,ee=Pt.g,he=Pt.b;Vt?(F[0]=kt,F[1]=ee,F[2]=he,F[3]=Wt,G.clearBufferuiv(G.COLOR,0,F)):(P[0]=kt,P[1]=ee,P[2]=he,P[3]=Wt,G.clearBufferiv(G.COLOR,0,P))}else at|=G.COLOR_BUFFER_BIT}Y&&(at|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(at|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&G.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",je,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Jn,!1),oe.dispose(),Lt.dispose(),Ot.dispose(),$.dispose(),Rt.dispose(),ct.dispose(),It.dispose(),Et.dispose(),bt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",un),Xt.removeEventListener("sessionend",yn),In.stop()};function je(A){A.preventDefault(),__("WebGLRenderer: Context Lost."),V=!0}function ze(){__("WebGLRenderer: Context Restored."),V=!1;const A=q.autoReset,Y=te.enabled,rt=te.autoUpdate,at=te.needsUpdate,st=te.type;Zt(),q.autoReset=A,te.enabled=Y,te.autoUpdate=rt,te.needsUpdate=at,te.type=st}function Jn(A){we("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function jn(A){const Y=A.target;Y.removeEventListener("dispose",jn),qr(Y)}function qr(A){Yr(A),$.remove(A)}function Yr(A){const Y=$.get(A).programs;Y!==void 0&&(Y.forEach(function(rt){bt.releaseProgram(rt)}),A.isShaderMaterial&&bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,rt,at,st,Bt){Y===null&&(Y=zt);const Vt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Pt=wa(A,Y,rt,at,st);y.setMaterial(at,Vt);let Wt=rt.index,kt=1;if(at.wireframe===!0){if(Wt=ft.getWireframeAttribute(rt),Wt===void 0)return;kt=2}const ee=rt.drawRange,he=rt.attributes.position;let jt=ee.start*kt,De=(ee.start+ee.count)*kt;Bt!==null&&(jt=Math.max(jt,Bt.start*kt),De=Math.min(De,(Bt.start+Bt.count)*kt)),Wt!==null?(jt=Math.max(jt,0),De=Math.min(De,Wt.count)):he!=null&&(jt=Math.max(jt,0),De=Math.min(De,he.count));const $e=De-jt;if($e<0||$e===1/0)return;It.setup(st,at,Pt,rt,Wt);let qe,Be=wt;if(Wt!==null&&(qe=Dt.get(Wt),Be=mt,Be.setIndex(qe)),st.isMesh)at.wireframe===!0?(y.setLineWidth(at.wireframeLinewidth*le()),Be.setMode(G.LINES)):Be.setMode(G.TRIANGLES);else if(st.isLine){let Fe=at.linewidth;Fe===void 0&&(Fe=1),y.setLineWidth(Fe*le()),st.isLineSegments?Be.setMode(G.LINES):st.isLineLoop?Be.setMode(G.LINE_LOOP):Be.setMode(G.LINE_STRIP)}else st.isPoints?Be.setMode(G.POINTS):st.isSprite&&Be.setMode(G.TRIANGLES);if(st.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Be.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const Fe=st._multiDrawStarts,Gt=st._multiDrawCounts,wn=st._multiDrawCount,Me=Wt?Dt.get(Wt).bytesPerElement:1,gn=$.get(at).currentProgram.getUniforms();for(let $n=0;$n<wn;$n++)gn.setValue(G,"_gl_DrawID",$n),Be.render(Fe[$n]/Me,Gt[$n])}else if(st.isInstancedMesh)Be.renderInstances(jt,$e,st.count);else if(rt.isInstancedBufferGeometry){const Fe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Gt=Math.min(rt.instanceCount,Fe);Be.renderInstances(jt,$e,Gt)}else Be.render(jt,$e)};function Zr(A,Y,rt){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Ca(A,Y,rt),A.side=us,A.needsUpdate=!0,Ca(A,Y,rt),A.side=ya):Ca(A,Y,rt)}this.compile=function(A,Y,rt=null){rt===null&&(rt=A),N=Ot.get(rt),N.init(Y),b.push(N),rt.traverseVisible(function(st){st.isLight&&st.layers.test(Y.layers)&&(N.pushLight(st),st.castShadow&&N.pushShadow(st))}),A!==rt&&A.traverseVisible(function(st){st.isLight&&st.layers.test(Y.layers)&&(N.pushLight(st),st.castShadow&&N.pushShadow(st))}),N.setupLights();const at=new Set;return A.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Bt=st.material;if(Bt)if(Array.isArray(Bt))for(let Vt=0;Vt<Bt.length;Vt++){const Pt=Bt[Vt];Zr(Pt,rt,st),at.add(Pt)}else Zr(Bt,rt,st),at.add(Bt)}),N=b.pop(),at},this.compileAsync=function(A,Y,rt=null){const at=this.compile(A,Y,rt);return new Promise(st=>{function Bt(){if(at.forEach(function(Vt){$.get(Vt).currentProgram.isReady()&&at.delete(Vt)}),at.size===0){st(A);return}setTimeout(Bt,10)}re.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Gs=null;function Pi(A){Gs&&Gs(A)}function un(){In.stop()}function yn(){In.start()}const In=new Iv;In.setAnimationLoop(Pi),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){Gs=A,Xt.setAnimationLoop(A),A===null?In.stop():In.start()},Xt.addEventListener("sessionstart",un),Xt.addEventListener("sessionend",yn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;J!==null&&J.renderStart(A,Y);const rt=Xt.enabled===!0&&Xt.isPresenting===!0,at=O!==null&&(tt===null||rt)&&O.begin(K,tt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(Y),Y=Xt.getCamera()),A.isScene===!0&&A.onBeforeRender(K,A,Y,tt),N=Ot.get(A,b.length),N.init(Y),N.state.textureUnits=lt.getTextureUnits(),b.push(N),Ze.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ve.setFromProjectionMatrix(Ze,Wi,Y.reversedDepth),pe=this.localClippingEnabled,xe=$t.init(this.clippingPlanes,pe),B=Lt.get(A,L.length),B.init(),L.push(B),Xt.enabled===!0&&Xt.isPresenting===!0){const Vt=K.xr.getDepthSensingMesh();Vt!==null&&cs(Vt,Y,-1/0,K.sortObjects)}cs(A,Y,0,K.sortObjects),B.finish(),K.sortObjects===!0&&B.sort(Ht,ie,Y.reversedDepth),Qt=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,Qt&&oe.addToRenderList(B,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&$t.beginShadows();const st=N.state.shadowsArray;if(te.render(st,A,Y),xe===!0&&$t.endShadows(),(at&&O.hasRenderPass())===!1){const Vt=B.opaque,Pt=B.transmissive;if(N.setupLights(),Y.isArrayCamera){const Wt=Y.cameras;if(Pt.length>0)for(let kt=0,ee=Wt.length;kt<ee;kt++){const he=Wt[kt];ol(Vt,Pt,A,he)}Qt&&oe.render(A);for(let kt=0,ee=Wt.length;kt<ee;kt++){const he=Wt[kt];rl(B,A,he,he.viewport)}}else Pt.length>0&&ol(Vt,Pt,A,Y),Qt&&oe.render(A),rl(B,A,Y)}tt!==null&&H===0&&(lt.updateMultisampleRenderTarget(tt),lt.updateRenderTargetMipmap(tt)),at&&O.end(K),A.isScene===!0&&A.onAfterRender(K,A,Y),It.resetDefaultState(),pt=-1,vt=null,b.pop(),b.length>0?(N=b[b.length-1],lt.setTextureUnits(N.state.textureUnits),xe===!0&&$t.setGlobalState(K.clippingPlanes,N.state.camera)):N=null,L.pop(),L.length>0?B=L[L.length-1]:B=null,J!==null&&J.renderEnd()};function cs(A,Y,rt,at){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ve.intersectsSprite(A)){at&&At.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ze);const Vt=ct.update(A),Pt=A.material;Pt.visible&&B.push(A,Vt,Pt,rt,At.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ve.intersectsObject(A))){const Vt=ct.update(A),Pt=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),At.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),At.copy(Vt.boundingSphere.center)),At.applyMatrix4(A.matrixWorld).applyMatrix4(Ze)),Array.isArray(Pt)){const Wt=Vt.groups;for(let kt=0,ee=Wt.length;kt<ee;kt++){const he=Wt[kt],jt=Pt[he.materialIndex];jt&&jt.visible&&B.push(A,Vt,jt,rt,At.z,he)}}else Pt.visible&&B.push(A,Vt,Pt,rt,At.z,null)}}const Bt=A.children;for(let Vt=0,Pt=Bt.length;Vt<Pt;Vt++)cs(Bt[Vt],Y,rt,at)}function rl(A,Y,rt,at){const{opaque:st,transmissive:Bt,transparent:Vt}=A;N.setupLightsView(rt),xe===!0&&$t.setGlobalState(K.clippingPlanes,rt),at&&y.viewport(U.copy(at)),st.length>0&&fs(st,Y,rt),Bt.length>0&&fs(Bt,Y,rt),Vt.length>0&&fs(Vt,Y,rt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ol(A,Y,rt,at){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[at.id]===void 0){const jt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[at.id]=new Fn(1,1,{generateMipmaps:!0,type:jt?Kn:fi,minFilter:zs,samples:Math.max(4,D.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const Bt=N.state.transmissionRenderTarget[at.id],Vt=at.viewport||U;Bt.setSize(Vt.z*K.transmissionResolutionScale,Vt.w*K.transmissionResolutionScale);const Pt=K.getRenderTarget(),Wt=K.getActiveCubeFace(),kt=K.getActiveMipmapLevel();K.setRenderTarget(Bt),K.getClearColor(Ct),Tt=K.getClearAlpha(),Tt<1&&K.setClearColor(16777215,.5),K.clear(),Qt&&oe.render(rt);const ee=K.toneMapping;K.toneMapping=Yi;const he=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),N.setupLightsView(at),xe===!0&&$t.setGlobalState(K.clippingPlanes,at),fs(A,rt,at),lt.updateMultisampleRenderTarget(Bt),lt.updateRenderTargetMipmap(Bt),re.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let De=0,$e=Y.length;De<$e;De++){const qe=Y[De],{object:Be,geometry:Fe,material:Gt,group:wn}=qe;if(Gt.side===ya&&Be.layers.test(at.layers)){const Me=Gt.side;Gt.side=Zn,Gt.needsUpdate=!0,Ra(Be,rt,at,Fe,Gt,wn),Gt.side=Me,Gt.needsUpdate=!0,jt=!0}}jt===!0&&(lt.updateMultisampleRenderTarget(Bt),lt.updateRenderTargetMipmap(Bt))}K.setRenderTarget(Pt,Wt,kt),K.setClearColor(Ct,Tt),he!==void 0&&(at.viewport=he),K.toneMapping=ee}function fs(A,Y,rt){const at=Y.isScene===!0?Y.overrideMaterial:null;for(let st=0,Bt=A.length;st<Bt;st++){const Vt=A[st],{object:Pt,geometry:Wt,group:kt}=Vt;let ee=Vt.material;ee.allowOverride===!0&&at!==null&&(ee=at),Pt.layers.test(rt.layers)&&Ra(Pt,Y,rt,Wt,ee,kt)}}function Ra(A,Y,rt,at,st,Bt){A.onBeforeRender(K,Y,rt,at,st,Bt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),st.onBeforeRender(K,Y,rt,at,A,Bt),st.transparent===!0&&st.side===ya&&st.forceSinglePass===!1?(st.side=Zn,st.needsUpdate=!0,K.renderBufferDirect(rt,Y,at,st,A,Bt),st.side=us,st.needsUpdate=!0,K.renderBufferDirect(rt,Y,at,st,A,Bt),st.side=ya):K.renderBufferDirect(rt,Y,at,st,A,Bt),A.onAfterRender(K,Y,rt,at,st,Bt)}function Ca(A,Y,rt){Y.isScene!==!0&&(Y=zt);const at=$.get(A),st=N.state.lights,Bt=N.state.shadowsArray,Vt=st.state.version,Pt=bt.getParameters(A,st.state,Bt,Y,rt,N.state.lightProbeGridArray),Wt=bt.getProgramCacheKey(Pt);let kt=at.programs;at.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,at.fog=Y.fog;const ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;at.envMap=Rt.get(A.envMap||at.environment,ee),at.envMapRotation=at.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",jn),kt=new Map,at.programs=kt);let he=kt.get(Wt);if(he!==void 0){if(at.currentProgram===he&&at.lightsStateVersion===Vt)return Ji(A,Pt),he}else Pt.uniforms=bt.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,rt,Pt),A.onBeforeCompile(Pt,K),he=bt.acquireProgram(Pt,Wt),kt.set(Wt,he),at.uniforms=Pt.uniforms;const jt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=$t.uniform),Ji(A,Pt),at.needsLights=ll(A),at.lightsStateVersion=Vt,at.needsLights&&(jt.ambientLightColor.value=st.state.ambient,jt.lightProbe.value=st.state.probe,jt.directionalLights.value=st.state.directional,jt.directionalLightShadows.value=st.state.directionalShadow,jt.spotLights.value=st.state.spot,jt.spotLightShadows.value=st.state.spotShadow,jt.rectAreaLights.value=st.state.rectArea,jt.ltc_1.value=st.state.rectAreaLTC1,jt.ltc_2.value=st.state.rectAreaLTC2,jt.pointLights.value=st.state.point,jt.pointLightShadows.value=st.state.pointShadow,jt.hemisphereLights.value=st.state.hemi,jt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,jt.spotLightMatrix.value=st.state.spotLightMatrix,jt.spotLightMap.value=st.state.spotLightMap,jt.pointShadowMatrix.value=st.state.pointShadowMatrix),at.lightProbeGrid=N.state.lightProbeGridArray.length>0,at.currentProgram=he,at.uniformsList=null,he}function Qi(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Wu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ji(A,Y){const rt=$.get(A);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function hs(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let rt=0,at=A.length;rt<at;rt++){const st=A[rt];if(st.texture!==null&&st.boundingBox.containsPoint(C))return st}return null}function wa(A,Y,rt,at,st){Y.isScene!==!0&&(Y=zt),lt.resetTextureUnits();const Bt=Y.fog,Vt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Y.environment:null,Pt=tt===null?K.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Re.workingColorSpace,Wt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,kt=Rt.get(at.envMap||Vt,Wt),ee=at.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,he=!!rt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),jt=!!rt.morphAttributes.position,De=!!rt.morphAttributes.normal,$e=!!rt.morphAttributes.color;let qe=Yi;at.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(qe=K.toneMapping);const Be=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Fe=Be!==void 0?Be.length:0,Gt=$.get(at),wn=N.state.lights;if(xe===!0&&(pe===!0||A!==vt)){const Oe=A===vt&&at.id===pt;$t.setState(at,A,Oe)}let Me=!1;at.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==wn.state.version||Gt.outputColorSpace!==Pt||st.isBatchedMesh&&Gt.batching===!1||!st.isBatchedMesh&&Gt.batching===!0||st.isBatchedMesh&&Gt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&Gt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&Gt.instancing===!1||!st.isInstancedMesh&&Gt.instancing===!0||st.isSkinnedMesh&&Gt.skinning===!1||!st.isSkinnedMesh&&Gt.skinning===!0||st.isInstancedMesh&&Gt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Gt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Gt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Gt.instancingMorph===!1&&st.morphTexture!==null||Gt.envMap!==kt||at.fog===!0&&Gt.fog!==Bt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==$t.numPlanes||Gt.numIntersection!==$t.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==he||Gt.morphTargets!==jt||Gt.morphNormals!==De||Gt.morphColors!==$e||Gt.toneMapping!==qe||Gt.morphTargetsCount!==Fe||!!Gt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Gt.__version=at.version);let gn=Gt.currentProgram;Me===!0&&(gn=Ca(at,Y,st),J&&at.isNodeMaterial&&J.onUpdateProgram(at,gn,Gt));let $n=!1,Ei=!1,ti=!1;const Ie=gn.getUniforms(),tn=Gt.uniforms;if(y.useProgram(gn.program)&&($n=!0,Ei=!0,ti=!0),at.id!==pt&&(pt=at.id,Ei=!0),Gt.needsLights){const Oe=hs(N.state.lightProbeGridArray,st);Gt.lightProbeGrid!==Oe&&(Gt.lightProbeGrid=Oe,Ei=!0)}if($n||vt!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(G,"projectionMatrix",A.projectionMatrix),Ie.setValue(G,"viewMatrix",A.matrixWorldInverse);const zi=Ie.map.cameraPosition;zi!==void 0&&zi.setValue(G,Ke.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Ie.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),vt!==A&&(vt=A,Ei=!0,ti=!0)}if(Gt.needsLights&&(wn.state.directionalShadowMap.length>0&&Ie.setValue(G,"directionalShadowMap",wn.state.directionalShadowMap,lt),wn.state.spotShadowMap.length>0&&Ie.setValue(G,"spotShadowMap",wn.state.spotShadowMap,lt),wn.state.pointShadowMap.length>0&&Ie.setValue(G,"pointShadowMap",wn.state.pointShadowMap,lt)),st.isSkinnedMesh){Ie.setOptional(G,st,"bindMatrix"),Ie.setOptional(G,st,"bindMatrixInverse");const Oe=st.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ie.setValue(G,"boneTexture",Oe.boneTexture,lt))}st.isBatchedMesh&&(Ie.setOptional(G,st,"batchingTexture"),Ie.setValue(G,"batchingTexture",st._matricesTexture,lt),Ie.setOptional(G,st,"batchingIdTexture"),Ie.setValue(G,"batchingIdTexture",st._indirectTexture,lt),Ie.setOptional(G,st,"batchingColorTexture"),st._colorsTexture!==null&&Ie.setValue(G,"batchingColorTexture",st._colorsTexture,lt));const bi=rt.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&k.update(st,rt,gn),(Ei||Gt.receiveShadow!==st.receiveShadow)&&(Gt.receiveShadow=st.receiveShadow,Ie.setValue(G,"receiveShadow",st.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Y.environment!==null&&(tn.envMapIntensity.value=Y.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=zA()),Ei){if(Ie.setValue(G,"toneMappingExposure",K.toneMappingExposure),Gt.needsLights&&cn(tn,ti),Bt&&at.fog===!0&&Nt.refreshFogUniforms(tn,Bt),Nt.refreshMaterialUniforms(tn,at,Mt,St,N.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const Oe=Gt.lightProbeGrid;tn.probesSH.value=Oe.texture,tn.probesMin.value.copy(Oe.boundingBox.min),tn.probesMax.value.copy(Oe.boundingBox.max),tn.probesResolution.value.copy(Oe.resolution)}Wu.upload(G,Qi(Gt),tn,lt)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Wu.upload(G,Qi(Gt),tn,lt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(G,"center",st.center),Ie.setValue(G,"modelViewMatrix",st.modelViewMatrix),Ie.setValue(G,"normalMatrix",st.normalMatrix),Ie.setValue(G,"modelMatrix",st.matrixWorld),at.uniformsGroups!==void 0){const Oe=at.uniformsGroups;for(let zi=0,Da=Oe.length;zi<Da;zi++){const ds=Oe[zi];Et.update(ds,gn),Et.bind(ds,gn)}}return gn}function cn(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function ll(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(A,Y,rt){const at=$.get(A);at.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=Y,$.get(A.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:rt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const rt=$.get(A);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,rt=0){tt=A,z=Y,H=rt;let at=null,st=!1,Bt=!1;if(A){const Pt=$.get(A);if(Pt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(G.FRAMEBUFFER,Pt.__webglFramebuffer),U.copy(A.viewport),Z.copy(A.scissor),yt=A.scissorTest,y.viewport(U),y.scissor(Z),y.setScissorTest(yt),pt=-1;return}else if(Pt.__webglFramebuffer===void 0)lt.setupRenderTarget(A);else if(Pt.__hasExternalTextures)lt.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ee=A.depthTexture;if(Pt.__boundDepthTexture!==ee){if(ee!==null&&$.has(ee)&&(A.width!==ee.image.width||A.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Bt=!0);const kt=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[Y])?at=kt[Y][rt]:at=kt[Y],st=!0):A.samples>0&&lt.useMultisampledRTT(A)===!1?at=$.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?at=kt[rt]:at=kt,U.copy(A.viewport),Z.copy(A.scissor),yt=A.scissorTest}else U.copy(Jt).multiplyScalar(Mt).floor(),Z.copy(Ve).multiplyScalar(Mt).floor(),yt=fe;if(rt!==0&&(at=ht),y.bindFramebuffer(G.FRAMEBUFFER,at)&&y.drawBuffers(A,at),y.viewport(U),y.scissor(Z),y.setScissorTest(yt),st){const Pt=$.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,rt)}else if(Bt){const Pt=Y;for(let Wt=0;Wt<A.textures.length;Wt++){const kt=$.get(A.textures[Wt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Wt,kt.__webglTexture,rt,Pt)}}else if(A!==null&&rt!==0){const Pt=$.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pt.__webglTexture,rt)}pt=-1},this.readRenderTargetPixels=function(A,Y,rt,at,st,Bt,Vt,Pt=0){if(!(A&&A.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt){y.bindFramebuffer(G.FRAMEBUFFER,Wt);try{const kt=A.textures[Pt],ee=kt.format,he=kt.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),!D.textureFormatReadable(ee)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(he)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-at&&rt>=0&&rt<=A.height-st&&G.readPixels(Y,rt,at,st,Ut.convert(ee),Ut.convert(he),Bt)}finally{const kt=tt!==null?$.get(tt).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,rt,at,st,Bt,Vt,Pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt)if(Y>=0&&Y<=A.width-at&&rt>=0&&rt<=A.height-st){y.bindFramebuffer(G.FRAMEBUFFER,Wt);const kt=A.textures[Pt],ee=kt.format,he=kt.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),!D.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,jt),G.bufferData(G.PIXEL_PACK_BUFFER,Bt.byteLength,G.STREAM_READ),G.readPixels(Y,rt,at,st,Ut.convert(ee),Ut.convert(he),0);const De=tt!==null?$.get(tt).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,De);const $e=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await IM(G,$e,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,jt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Bt),G.deleteBuffer(jt),G.deleteSync($e),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,rt=0){const at=Math.pow(2,-rt),st=Math.floor(A.image.width*at),Bt=Math.floor(A.image.height*at),Vt=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;lt.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Vt,Pt,st,Bt),y.unbindTexture()},this.copyTextureToTexture=function(A,Y,rt=null,at=null,st=0,Bt=0){let Vt,Pt,Wt,kt,ee,he,jt,De,$e;const qe=A.isCompressedTexture?A.mipmaps[Bt]:A.image;if(rt!==null)Vt=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,Wt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,ee=rt.min.y,he=rt.isBox3?rt.min.z:0;else{const tn=Math.pow(2,-st);Vt=Math.floor(qe.width*tn),Pt=Math.floor(qe.height*tn),A.isDataArrayTexture?Wt=qe.depth:A.isData3DTexture?Wt=Math.floor(qe.depth*tn):Wt=1,kt=0,ee=0,he=0}at!==null?(jt=at.x,De=at.y,$e=at.z):(jt=0,De=0,$e=0);const Be=Ut.convert(Y.format),Fe=Ut.convert(Y.type);let Gt;Y.isData3DTexture?(lt.setTexture3D(Y,0),Gt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(lt.setTexture2DArray(Y,0),Gt=G.TEXTURE_2D_ARRAY):(lt.setTexture2D(Y,0),Gt=G.TEXTURE_2D),y.activeTexture(G.TEXTURE0),y.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const wn=y.getParameter(G.UNPACK_ROW_LENGTH),Me=y.getParameter(G.UNPACK_IMAGE_HEIGHT),gn=y.getParameter(G.UNPACK_SKIP_PIXELS),$n=y.getParameter(G.UNPACK_SKIP_ROWS),Ei=y.getParameter(G.UNPACK_SKIP_IMAGES);y.pixelStorei(G.UNPACK_ROW_LENGTH,qe.width),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qe.height),y.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),y.pixelStorei(G.UNPACK_SKIP_ROWS,ee),y.pixelStorei(G.UNPACK_SKIP_IMAGES,he);const ti=A.isDataArrayTexture||A.isData3DTexture,Ie=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const tn=$.get(A),bi=$.get(Y),Oe=$.get(tn.__renderTarget),zi=$.get(bi.__renderTarget);y.bindFramebuffer(G.READ_FRAMEBUFFER,Oe.__webglFramebuffer),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Da=0;Da<Wt;Da++)ti&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$.get(A).__webglTexture,st,he+Da),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$.get(Y).__webglTexture,Bt,$e+Da)),G.blitFramebuffer(kt,ee,Vt,Pt,jt,De,Vt,Pt,G.DEPTH_BUFFER_BIT,G.NEAREST);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(st!==0||A.isRenderTargetTexture||$.has(A)){const tn=$.get(A),bi=$.get(Y);y.bindFramebuffer(G.READ_FRAMEBUFFER,_t),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,j);for(let Oe=0;Oe<Wt;Oe++)ti?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tn.__webglTexture,st,he+Oe):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,tn.__webglTexture,st),Ie?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bi.__webglTexture,Bt,$e+Oe):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bi.__webglTexture,Bt),st!==0?G.blitFramebuffer(kt,ee,Vt,Pt,jt,De,Vt,Pt,G.COLOR_BUFFER_BIT,G.NEAREST):Ie?G.copyTexSubImage3D(Gt,Bt,jt,De,$e+Oe,kt,ee,Vt,Pt):G.copyTexSubImage2D(Gt,Bt,jt,De,kt,ee,Vt,Pt);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ie?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Gt,Bt,jt,De,$e,Vt,Pt,Wt,Be,Fe,qe.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Gt,Bt,jt,De,$e,Vt,Pt,Wt,Be,qe.data):G.texSubImage3D(Gt,Bt,jt,De,$e,Vt,Pt,Wt,Be,Fe,qe):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Bt,jt,De,Vt,Pt,Be,Fe,qe.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Bt,jt,De,qe.width,qe.height,Be,qe.data):G.texSubImage2D(G.TEXTURE_2D,Bt,jt,De,Vt,Pt,Be,Fe,qe);y.pixelStorei(G.UNPACK_ROW_LENGTH,wn),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Me),y.pixelStorei(G.UNPACK_SKIP_PIXELS,gn),y.pixelStorei(G.UNPACK_SKIP_ROWS,$n),y.pixelStorei(G.UNPACK_SKIP_IMAGES,Ei),Bt===0&&Y.generateMipmaps&&G.generateMipmap(Gt),y.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&lt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?lt.setTextureCube(A,0):A.isData3DTexture?lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?lt.setTexture2DArray(A,0):lt.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){z=0,H=0,tt=null,y.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const qu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FA=new mp(-1,1,1,-1,0,1);class IA extends Oi{constructor(){super(),this.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qn([0,2,0,0,2,0],2))}}const HA=new IA;class gp{constructor(t){this._mesh=new Li(HA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,FA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class GA extends Wr{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof On?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=tl.clone(t.uniforms),this.material=new On({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new gp(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class dv extends Wr{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class VA extends Wr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class XA{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new Yt);this._width=s.width,this._height=s.height,i=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new GA(qu),this.copyPass.material.blending=qi,this.timer=new Fy}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}dv!==void 0&&(f instanceof dv?s=!0:f instanceof VA&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kA extends Wr{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _e}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const WA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Hr extends Wr{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Yt(t.x,t.y):new Yt(256,256),this.clearColor=new _e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(u,f,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const x=new Fn(u,f,{type:Kn});x.texture.name="UnrealBloomPass.h"+v,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const g=new Fn(u,f,{type:Kn});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),u=Math.round(u/2),f=Math.round(f/2)}const d=WA;this.highPassUniforms=tl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new On({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new Yt(1/u,1/f),u=Math.round(u/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=tl.clone(qu.uniforms),this.blendMaterial=new On({uniforms:this.copyUniforms,vertexShader:qu.vertexShader,fragmentShader:qu.fragmentShader,premultipliedAlpha:!0,blending:jh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _e,this._oldClearAlpha=1,this._basic=new fp,this._fsQuad=new gp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new Yt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=Hr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Hr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[],s=t/3;for(let l=0;l<t;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new On({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Yt(.5,.5)},direction:{value:new Yt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new On({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Hr.BlurDirectionX=new Yt(1,0);Hr.BlurDirectionY=new Yt(0,1);const Iu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class qA extends Wr{constructor(){super(),this.isOutputPass=!0,this.uniforms=tl.clone(Iu.uniforms),this.material=new Bv({name:Iu.name,uniforms:this.uniforms,vertexShader:Iu.vertexShader,fragmentShader:Iu.fragmentShader}),this._fsQuad=new gp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Re.getTransfer(this._outputColorSpace)===Pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$d?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Jd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const el=8,Yu=[],Zu=[];for(let r=0;r<=el;r++){const t=r/el*Math.PI*2;Yu[r]=Math.sin(t),Zu[r]=-Math.cos(t)}const Sa=new W;function YA(r,t,i,s){const l=r.length;t[0].subVectors(r[1],r[0]).normalize();for(let p=1;p<l-1;p++)t[p].subVectors(r[p+1],r[p-1]).normalize();t[l-1].subVectors(r[l-1],r[l-2]).normalize();const u=t[0],f=Math.abs(u.x),d=Math.abs(u.y),m=Math.abs(u.z);f<=d&&f<=m?Sa.set(1,0,0):d<=m?Sa.set(0,1,0):Sa.set(0,0,1),i[0].crossVectors(u,Sa).normalize(),s[0].crossVectors(u,i[0]);for(let p=1;p<l;p++){i[p].copy(i[p-1]),Sa.crossVectors(t[p-1],t[p]);const v=Sa.length();if(v>1e-6){const x=1/v,g=Sa.x*x,M=Sa.y*x,T=Sa.z*x,w=t[p-1].dot(t[p]),E=1-w,S=i[p],F=S.x,P=S.y,C=S.z,B=M*C-T*P,N=T*F-g*C,L=g*P-M*F,b=g*F+M*P+T*C;S.x=F*w+B*v+g*b*E,S.y=P*w+N*v+M*b*E,S.z=C*w+L*v+T*b*E}s[p].crossVectors(t[p],i[p])}}function ZA(r){const{tubularSegments:t,radius:i}=r.parameters,s=r.getAttribute("position").array,l=r.getAttribute("normal").array,u=r.curve.points,f=r._normals,d=r._binormals,m=(el+1)*3;for(let p=0;p<=t;p++){const v=Math.sin(p/t*Math.PI)*i,x=u[p],g=f[p],M=d[p];let T=p*m;for(let w=0;w<=el;w++){const E=Zu[w]*g.x+Yu[w]*M.x,S=Zu[w]*g.y+Yu[w]*M.y,F=Zu[w]*g.z+Yu[w]*M.z,P=1/Math.sqrt(E*E+S*S+F*F);s[T]=x.x+v*E*P,s[T+1]=x.y+v*S*P,s[T+2]=x.z+v*F*P,l[T]=E*P,l[T+1]=S*P,l[T+2]=F*P,T+=3}}r.getAttribute("position").needsUpdate=!0,r.getAttribute("normal").needsUpdate=!0}class pv extends pp{constructor(t,i){const s=Array.from({length:t+1},(f,d)=>new W(0,0,-d/t*2)),l=new Ov(s);super(l,t,i,el,!1),this.curve=l;const u=t+1;this._tangents=Array.from({length:u},()=>new W),this._normals=Array.from({length:u},()=>new W),this._binormals=Array.from({length:u},()=>new W)}update(){YA(this.curve.points,this._tangents,this._normals,this._binormals),ZA(this)}}function KA(r,t={}){let{bloom:i=null,tubeCount:s=16,minRadius:l=.005,maxRadius:u=.03,minSegments:f=32,maxSegments:d=64,metalness:m=1,roughness:p=.25,colors:v=["#f967fb","#ff6b6b","#53bc28"],lightIntensity:x=200,lightColors:g=["#83f36e","#fe8a2e","#ff008a","#60aed5"],lerp:M=.85,noise:T=.05}=t;const w=300,E=150,S=1,F=2,P=new BA({canvas:r,alpha:!0,antialias:!1,premultipliedAlpha:!1});P.setClearColor(0,0);const C=new ci(75,1,.1,1e3);C.position.set(0,0,5);const B=new Gy,N=new Yo;let L=0,b=0,O=0,K=0,V=0,J=1,ht=1;function _t(){const At=r.parentElement||document.body,zt=At.clientWidth,Qt=At.clientHeight;if(zt<=0||Qt<=0||zt===L&&Qt===b)return;L=zt,b=Qt;const le=C.fov*Math.PI/180;O=2*Math.tan(le/2)*5*(L/b),C.aspect=Math.min(L/b,1.5),C.updateProjectionMatrix(),P.setPixelRatio(Math.min(Math.max(devicePixelRatio,1),1.5)),P.setSize(L,b),Tt&&Tt.resize(L,b);const G=r.getBoundingClientRect();K=G.left,V=G.top,J=G.width||L,ht=G.height||b}const j=new ResizeObserver(_t);j.observe(r.parentElement||document.body);let z=!1;const H=At=>{At.preventDefault(),z=!0},tt=()=>{z=!1,B.getDelta(),Tt&&(Tt.dispose(),Tt=it(i||{}),L>0&&b>0&&Tt.resize(L,b))};r.addEventListener("webglcontextlost",H),r.addEventListener("webglcontextrestored",tt);const pt=g.map((At,zt)=>{const Qt=new Py(At,x);return Qt.position.set(zt<2?-5:5,zt%2===0?-5:5,5),N.add(Qt),Qt}),vt=[],U=new W,Z=v.map(At=>new _e(At));function yt(){const At=Math.floor(f+Math.random()*(d-f)),zt=l+Math.random()*(u-l),Qt=new pv(At,zt),le=new wy({metalness:m,roughness:p}),G=new Li(Qt,le);return G._td=100*Math.random(),G._pts=Qt.curve.points,Qt.update(),G}function Ct(){for(;Z.length<v.length;)Z.push(new _e);Z.length=v.length,v.forEach((zt,Qt)=>Z[Qt].set(zt));const At=Math.max(1,vt.length-1);for(let zt=0;zt<vt.length;zt++){const le=zt/At*(Z.length-1),G=Math.min(Math.floor(le),Z.length-2),Se=le-G,re=Z[G],D=Z[G+1];vt[zt].material.color.setRGB(re.r+Se*(D.r-re.r),re.g+Se*(D.g-re.g),re.b+Se*(D.b-re.b))}}for(let At=0;At<s;At++)vt[At]=yt(),N.add(vt[At]);Ct();let Tt=null;function it(At){const zt=P.getSize(new Yt),Qt=P.getPixelRatio(),le=zt.x*Qt,G=zt.y*Qt,Se=new Fn(le,G,{type:Kn}),re=new XA(P,Se),D=new kA(N,C);D.clearAlpha=0,re.addPass(D);const y=new Hr(new Yt(le/2,G/2),At.strength??.7,At.radius??1.5,At.threshold??0);return re.addPass(y),re.addPass(new qA),{render(){re.render()},resize(q,$){if(q<=0||$<=0)return;const lt=P.getPixelRatio();Se.setSize(Math.floor(q*lt),Math.floor($*lt)),re.setSize(Math.floor(q*lt),Math.floor($*lt))},setParams(q){q.threshold!==void 0&&(y.threshold=q.threshold),q.strength!==void 0&&(y.strength=q.strength),q.radius!==void 0&&(y.radius=q.radius)},dispose(){Se.dispose(),re.dispose()}}}i&&(Tt=it(i));let St=!1;const Mt=new Yt,Ht=new W,ie=new Hy,Jt=new rs(new W(0,0,1),0);function Ve(At,zt,Qt,le){!Number.isFinite(At)||!Number.isFinite(zt)||!Number.isFinite(Qt)||!Number.isFinite(le)||Qt<=0||le<=0||(St=!0,Mt.set(At/Qt*2-1,-(zt/le)*2+1),ie.setFromCamera(Mt,C),C.getWorldDirection(Jt.normal),ie.ray.intersectPlane(Jt,Ht))}function fe(At){Ve(At.clientX-K,At.clientY-V,J,ht)}function ve(At){const zt=At.data;if(!(!zt||zt.source!=="mywallpaper")){if(zt.type==="MYWALLPAPER_POINTER_MOVE"){Ve(Number(zt.x),Number(zt.y),Number(zt.width),Number(zt.height));return}zt.type==="MYWALLPAPER_POINTER_LEAVE"&&(St=!1)}}const xe=()=>{St=!1};document.addEventListener("mousemove",fe,{passive:!0}),document.addEventListener("mouseleave",xe),window.addEventListener("message",ve);let pe=null,Ze=!1;function Ke(){if(Ze||(pe=requestAnimationFrame(Ke),z))return;const At=Math.min(B.getDelta(),1/30),zt=B.getElapsedTime();if(St)U.copy(Ht);else{const q=O/L;U.x=w*q*Math.cos(zt*S),U.y=E*q*Math.sin(zt*F),U.z=0}const Qt=1-Math.pow(1-M,At*60),le=1-Qt,G=T>0,Se=zt*2,re=U.x,D=U.y,y=U.z;for(let q=0;q<vt.length;q++){const $=vt[q],lt=$._pts;let Rt=re,Dt=D,ft=y;if(G){const bt=Se+$._td,Nt=$._td;Rt+=(Math.sin(bt*.7+re*.01)+Math.sin(bt*1.3+Nt))*T,Dt+=(Math.cos(bt*.8+D*.01)+Math.sin(bt*1.1+Nt))*T,ft+=(Math.sin(bt*.6+y*.01)+Math.cos(bt*.9+Nt))*T}const ct=lt[0];ct.x=ct.x*le+Rt*Qt,ct.y=ct.y*le+Dt*Qt,ct.z=ct.z*le+ft*Qt;for(let bt=1;bt<lt.length;bt++){const Nt=lt[bt],Lt=lt[bt-1];Nt.x=Nt.x*le+Lt.x*Qt,Nt.y=Nt.y*le+Lt.y*Qt,Nt.z=Nt.z*le+Lt.z*Qt}$.geometry.update()}Tt?Tt.render():P.render(N,C)}return _t(),Ke(),{setTubeColors(At){v=At,Ct()},setLightColors(At){At.forEach((zt,Qt)=>pt[Qt].color.set(zt))},setLightIntensity(At){pt.forEach(zt=>{zt.intensity=At})},setMaterial(At){At.metalness!==void 0&&(m=At.metalness),At.roughness!==void 0&&(p=At.roughness),vt.forEach(zt=>{At.metalness!==void 0&&(zt.material.metalness=At.metalness),At.roughness!==void 0&&(zt.material.roughness=At.roughness)})},setLerp(At){M=At},setNoise(At){T=At},setTubeCount(At){if(At!==vt.length){for(;vt.length<At;){const zt=yt();vt.push(zt),N.add(zt)}for(;vt.length>At;){const zt=vt.pop();zt.geometry.dispose(),zt.material.dispose(),N.remove(zt)}Ct()}},setTubeGeometry(At){At.maxSegments!==void 0&&(d=At.maxSegments),At.maxRadius!==void 0&&(u=At.maxRadius);for(const zt of vt){const Qt=zt.geometry,le=Math.floor(f+Math.random()*(d-f)),G=l+Math.random()*(u-l);zt.geometry=new pv(le,G),zt._pts=zt.geometry.curve.points,Qt.dispose(),zt.geometry.update()}},setBloomEnabled(At){At&&!Tt?Tt=it(i||{}):!At&&Tt&&(Tt.dispose(),Tt=null)},setBloomParams(At){i||(i={}),Object.assign(i,At),Tt&&Tt.setParams(At)},dispose(){Ze=!0,pe&&cancelAnimationFrame(pe),document.removeEventListener("mousemove",fe),document.removeEventListener("mouseleave",xe),window.removeEventListener("message",ve),j.disconnect(),r.removeEventListener("webglcontextlost",H),r.removeEventListener("webglcontextrestored",tt),Tt&&(Tt.dispose(),Tt=null),vt.forEach(At=>{At.geometry.dispose(),At.material.dispose()}),P.dispose()}}}const QA={tubeCount:16,tubeRadius:.03,tubeLength:64,metalness:1,roughness:.25,smoothness:.85,noise:.05,tubeColor1:"#f967fb",tubeColor2:"#ff6b6b",tubeColor3:"#53bc28",lightIntensity:200,lightColor1:"#83f36e",lightColor2:"#fe8a2e",lightColor3:"#ff008a",lightColor4:"#60aed5",bloomEnabled:!0,bloomThreshold:0,bloomStrength:.7,bloomRadius:1.5},Gr=window.MyWallpaper?.layer,Ma=Gr?.root??document.getElementById("root"),JA={width:"100%",height:"100%",display:"block",pointerEvents:"none"};Ma&&(Ma.classList.add("mwa-tubes-root"),Ma.style.width="100%",Ma.style.height="100%",Ma.style.margin="0",Ma.style.overflow="hidden",Ma.style.background="transparent");Gr||(document.documentElement.style.width="100%",document.documentElement.style.height="100%",document.documentElement.style.margin="0",document.body.style.width="100%",document.body.style.height="100%",document.body.style.margin="0",document.body.style.overflow="hidden",document.body.style.background="transparent");function jA(r){return{...QA,...r}}function Yn(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}function $A(){const[r,t]=Rn.useState(()=>Gr?.settings.get()??{});return Rn.useEffect(()=>Gr?.settings.subscribe(i=>t(i))??(()=>{}),[]),r}function tR(){const r=Rn.useCallback(i=>{Gr?.settings.set(i)},[]),t=Rn.useCallback((i,s)=>Gr?.actions.on(i,s)??(()=>{}),[]);return{setValues:r,onButtonClick:t}}function eR(){const r=jA($A()),{setValues:t,onButtonClick:i}=tR(),s=Rn.useRef(null),l=Rn.useRef(null),u=Rn.useRef(r);return u.current=r,Rn.useEffect(()=>{const f=s.current;if(!f)return;const d=u.current;return l.current=KA(f,{bloom:d.bloomEnabled?{threshold:d.bloomThreshold,strength:d.bloomStrength,radius:d.bloomRadius}:null,tubeCount:d.tubeCount,maxRadius:d.tubeRadius,maxSegments:d.tubeLength,metalness:d.metalness,roughness:d.roughness,colors:[d.tubeColor1,d.tubeColor2,d.tubeColor3],lightIntensity:d.lightIntensity,lightColors:[d.lightColor1,d.lightColor2,d.lightColor3,d.lightColor4],lerp:d.smoothness,noise:d.noise}),()=>{l.current?.dispose(),l.current=null}},[]),Rn.useEffect(()=>{l.current?.setTubeColors([r.tubeColor1,r.tubeColor2,r.tubeColor3])},[r.tubeColor1,r.tubeColor2,r.tubeColor3]),Rn.useEffect(()=>{const f=l.current;f&&(f.setLightColors([r.lightColor1,r.lightColor2,r.lightColor3,r.lightColor4]),f.setLightIntensity(r.lightIntensity))},[r.lightColor1,r.lightColor2,r.lightColor3,r.lightColor4,r.lightIntensity]),Rn.useEffect(()=>{l.current?.setMaterial({metalness:r.metalness,roughness:r.roughness})},[r.metalness,r.roughness]),Rn.useEffect(()=>{const f=l.current;f&&(f.setLerp(r.smoothness),f.setNoise(r.noise))},[r.smoothness,r.noise]),Rn.useEffect(()=>{l.current?.setBloomEnabled(r.bloomEnabled)},[r.bloomEnabled]),Rn.useEffect(()=>{l.current?.setBloomParams({threshold:r.bloomThreshold,strength:r.bloomStrength,radius:r.bloomRadius})},[r.bloomThreshold,r.bloomStrength,r.bloomRadius]),Rn.useEffect(()=>{l.current?.setTubeCount(r.tubeCount)},[r.tubeCount]),Rn.useEffect(()=>{l.current?.setTubeGeometry({maxSegments:r.tubeLength,maxRadius:r.tubeRadius})},[r.tubeLength,r.tubeRadius]),Rn.useEffect(()=>{const f=i("randomizeTubeColors",()=>{t({tubeColor1:Yn(),tubeColor2:Yn(),tubeColor3:Yn()})}),d=i("randomizeLightColors",()=>{t({lightColor1:Yn(),lightColor2:Yn(),lightColor3:Yn(),lightColor4:Yn()})}),m=i("randomizeAll",()=>{t({tubeColor1:Yn(),tubeColor2:Yn(),tubeColor3:Yn(),lightColor1:Yn(),lightColor2:Yn(),lightColor3:Yn(),lightColor4:Yn()})});return()=>{f(),d(),m()}},[i,t]),mv.jsx("canvas",{ref:s,style:JA})}Ma&&aM.createRoot(Ma).render(mv.jsx(eR,{}));
