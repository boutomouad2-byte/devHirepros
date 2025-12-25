(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function f(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(h){if(h.ep)return;h.ep=!0;const p=f(h);fetch(h.href,p)}})();var _u={exports:{}},nr={};var hm;function Ag(){if(hm)return nr;hm=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(u,h,p){var v=null;if(p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),"key"in h){p={};for(var S in h)S!=="key"&&(p[S]=h[S])}else p=h;return h=p.ref,{$$typeof:i,type:u,key:v,ref:h!==void 0?h:null,props:p}}return nr.Fragment=c,nr.jsx=f,nr.jsxs=f,nr}var gm;function Yg(){return gm||(gm=1,_u.exports=Ag()),_u.exports}var n=Yg(),Ou={exports:{}},le={};var pm;function zg(){if(pm)return le;pm=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),M=Symbol.iterator;function R(j){return j===null||typeof j!="object"?null:(j=M&&j[M]||j["@@iterator"],typeof j=="function"?j:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,Q={};function V(j,_,L){this.props=j,this.context=_,this.refs=Q,this.updater=L||O}V.prototype.isReactComponent={},V.prototype.setState=function(j,_){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,_,"setState")},V.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function U(){}U.prototype=V.prototype;function q(j,_,L){this.props=j,this.context=_,this.refs=Q,this.updater=L||O}var G=q.prototype=new U;G.constructor=q,H(G,V.prototype),G.isPureReactComponent=!0;var F=Array.isArray;function oe(){}var P={H:null,A:null,T:null,S:null},ge=Object.prototype.hasOwnProperty;function ue(j,_,L){var K=L.ref;return{$$typeof:i,type:j,key:_,ref:K!==void 0?K:null,props:L}}function je(j,_){return ue(j.type,_,j.props)}function _e(j){return typeof j=="object"&&j!==null&&j.$$typeof===i}function Je(j){var _={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(L){return _[L]})}var Ct=/\/+/g;function bt(j,_){return typeof j=="object"&&j!==null&&j.key!=null?Je(""+j.key):_.toString(36)}function yt(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(oe,oe):(j.status="pending",j.then(function(_){j.status==="pending"&&(j.status="fulfilled",j.value=_)},function(_){j.status==="pending"&&(j.status="rejected",j.reason=_)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function X(j,_,L,K,ae){var ie=typeof j;(ie==="undefined"||ie==="boolean")&&(j=null);var be=!1;if(j===null)be=!0;else switch(ie){case"bigint":case"string":case"number":be=!0;break;case"object":switch(j.$$typeof){case i:case c:be=!0;break;case A:return be=j._init,X(be(j._payload),_,L,K,ae)}}if(be)return ae=ae(j),be=K===""?"."+bt(j,0):K,F(ae)?(L="",be!=null&&(L=be.replace(Ct,"$&/")+"/"),X(ae,_,L,"",function(bl){return bl})):ae!=null&&(_e(ae)&&(ae=je(ae,L+(ae.key==null||j&&j.key===ae.key?"":(""+ae.key).replace(Ct,"$&/")+"/")+be)),_.push(ae)),1;be=0;var Pe=K===""?".":K+":";if(F(j))for(var ke=0;ke<j.length;ke++)K=j[ke],ie=Pe+bt(K,ke),be+=X(K,_,L,ie,ae);else if(ke=R(j),typeof ke=="function")for(j=ke.call(j),ke=0;!(K=j.next()).done;)K=K.value,ie=Pe+bt(K,ke++),be+=X(K,_,L,ie,ae);else if(ie==="object"){if(typeof j.then=="function")return X(yt(j),_,L,K,ae);throw _=String(j),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return be}function B(j,_,L){if(j==null)return j;var K=[],ae=0;return X(j,K,"","",function(ie){return _.call(L,ie,ae++)}),K}function te(j){if(j._status===-1){var _=j._result;_=_(),_.then(function(L){(j._status===0||j._status===-1)&&(j._status=1,j._result=L)},function(L){(j._status===0||j._status===-1)&&(j._status=2,j._result=L)}),j._status===-1&&(j._status=0,j._result=_)}if(j._status===1)return j._result.default;throw j._result}var ve=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},Se={map:B,forEach:function(j,_,L){B(j,function(){_.apply(this,arguments)},L)},count:function(j){var _=0;return B(j,function(){_++}),_},toArray:function(j){return B(j,function(_){return _})||[]},only:function(j){if(!_e(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return le.Activity=w,le.Children=Se,le.Component=V,le.Fragment=f,le.Profiler=h,le.PureComponent=q,le.StrictMode=u,le.Suspense=b,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,le.__COMPILER_RUNTIME={__proto__:null,c:function(j){return P.H.useMemoCache(j)}},le.cache=function(j){return function(){return j.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(j,_,L){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var K=H({},j.props),ae=j.key;if(_!=null)for(ie in _.key!==void 0&&(ae=""+_.key),_)!ge.call(_,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&_.ref===void 0||(K[ie]=_[ie]);var ie=arguments.length-2;if(ie===1)K.children=L;else if(1<ie){for(var be=Array(ie),Pe=0;Pe<ie;Pe++)be[Pe]=arguments[Pe+2];K.children=be}return ue(j.type,ae,K)},le.createContext=function(j){return j={$$typeof:v,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:p,_context:j},j},le.createElement=function(j,_,L){var K,ae={},ie=null;if(_!=null)for(K in _.key!==void 0&&(ie=""+_.key),_)ge.call(_,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ae[K]=_[K]);var be=arguments.length-2;if(be===1)ae.children=L;else if(1<be){for(var Pe=Array(be),ke=0;ke<be;ke++)Pe[ke]=arguments[ke+2];ae.children=Pe}if(j&&j.defaultProps)for(K in be=j.defaultProps,be)ae[K]===void 0&&(ae[K]=be[K]);return ue(j,ie,ae)},le.createRef=function(){return{current:null}},le.forwardRef=function(j){return{$$typeof:S,render:j}},le.isValidElement=_e,le.lazy=function(j){return{$$typeof:A,_payload:{_status:-1,_result:j},_init:te}},le.memo=function(j,_){return{$$typeof:g,type:j,compare:_===void 0?null:_}},le.startTransition=function(j){var _=P.T,L={};P.T=L;try{var K=j(),ae=P.S;ae!==null&&ae(L,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(oe,ve)}catch(ie){ve(ie)}finally{_!==null&&L.types!==null&&(_.types=L.types),P.T=_}},le.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},le.use=function(j){return P.H.use(j)},le.useActionState=function(j,_,L){return P.H.useActionState(j,_,L)},le.useCallback=function(j,_){return P.H.useCallback(j,_)},le.useContext=function(j){return P.H.useContext(j)},le.useDebugValue=function(){},le.useDeferredValue=function(j,_){return P.H.useDeferredValue(j,_)},le.useEffect=function(j,_){return P.H.useEffect(j,_)},le.useEffectEvent=function(j){return P.H.useEffectEvent(j)},le.useId=function(){return P.H.useId()},le.useImperativeHandle=function(j,_,L){return P.H.useImperativeHandle(j,_,L)},le.useInsertionEffect=function(j,_){return P.H.useInsertionEffect(j,_)},le.useLayoutEffect=function(j,_){return P.H.useLayoutEffect(j,_)},le.useMemo=function(j,_){return P.H.useMemo(j,_)},le.useOptimistic=function(j,_){return P.H.useOptimistic(j,_)},le.useReducer=function(j,_,L){return P.H.useReducer(j,_,L)},le.useRef=function(j){return P.H.useRef(j)},le.useState=function(j){return P.H.useState(j)},le.useSyncExternalStore=function(j,_,L){return P.H.useSyncExternalStore(j,_,L)},le.useTransition=function(){return P.H.useTransition()},le.version="19.2.3",le}var xm;function Fu(){return xm||(xm=1,Ou.exports=zg()),Ou.exports}var m=Fu(),Zu={exports:{}},rr={},Uu={exports:{}},Hu={};var bm;function Mg(){return bm||(bm=1,(function(i){function c(X,B){var te=X.length;X.push(B);e:for(;0<te;){var ve=te-1>>>1,Se=X[ve];if(0<h(Se,B))X[ve]=B,X[te]=Se,te=ve;else break e}}function f(X){return X.length===0?null:X[0]}function u(X){if(X.length===0)return null;var B=X[0],te=X.pop();if(te!==B){X[0]=te;e:for(var ve=0,Se=X.length,j=Se>>>1;ve<j;){var _=2*(ve+1)-1,L=X[_],K=_+1,ae=X[K];if(0>h(L,te))K<Se&&0>h(ae,L)?(X[ve]=ae,X[K]=te,ve=K):(X[ve]=L,X[_]=te,ve=_);else if(K<Se&&0>h(ae,te))X[ve]=ae,X[K]=te,ve=K;else break e}}return B}function h(X,B){var te=X.sortIndex-B.sortIndex;return te!==0?te:X.id-B.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var v=Date,S=v.now();i.unstable_now=function(){return v.now()-S}}var b=[],g=[],A=1,w=null,M=3,R=!1,O=!1,H=!1,Q=!1,V=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function G(X){for(var B=f(g);B!==null;){if(B.callback===null)u(g);else if(B.startTime<=X)u(g),B.sortIndex=B.expirationTime,c(b,B);else break;B=f(g)}}function F(X){if(H=!1,G(X),!O)if(f(b)!==null)O=!0,oe||(oe=!0,Je());else{var B=f(g);B!==null&&yt(F,B.startTime-X)}}var oe=!1,P=-1,ge=5,ue=-1;function je(){return Q?!0:!(i.unstable_now()-ue<ge)}function _e(){if(Q=!1,oe){var X=i.unstable_now();ue=X;var B=!0;try{e:{O=!1,H&&(H=!1,U(P),P=-1),R=!0;var te=M;try{t:{for(G(X),w=f(b);w!==null&&!(w.expirationTime>X&&je());){var ve=w.callback;if(typeof ve=="function"){w.callback=null,M=w.priorityLevel;var Se=ve(w.expirationTime<=X);if(X=i.unstable_now(),typeof Se=="function"){w.callback=Se,G(X),B=!0;break t}w===f(b)&&u(b),G(X)}else u(b);w=f(b)}if(w!==null)B=!0;else{var j=f(g);j!==null&&yt(F,j.startTime-X),B=!1}}break e}finally{w=null,M=te,R=!1}B=void 0}}finally{B?Je():oe=!1}}}var Je;if(typeof q=="function")Je=function(){q(_e)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,bt=Ct.port2;Ct.port1.onmessage=_e,Je=function(){bt.postMessage(null)}}else Je=function(){V(_e,0)};function yt(X,B){P=V(function(){X(i.unstable_now())},B)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(X){X.callback=null},i.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<X?Math.floor(1e3/X):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_next=function(X){switch(M){case 1:case 2:case 3:var B=3;break;default:B=M}var te=M;M=B;try{return X()}finally{M=te}},i.unstable_requestPaint=function(){Q=!0},i.unstable_runWithPriority=function(X,B){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var te=M;M=X;try{return B()}finally{M=te}},i.unstable_scheduleCallback=function(X,B,te){var ve=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ve+te:ve):te=ve,X){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=te+Se,X={id:A++,callback:B,priorityLevel:X,startTime:te,expirationTime:Se,sortIndex:-1},te>ve?(X.sortIndex=te,c(g,X),f(b)===null&&X===f(g)&&(H?(U(P),P=-1):H=!0,yt(F,te-ve))):(X.sortIndex=Se,c(b,X),O||R||(O=!0,oe||(oe=!0,Je()))),X},i.unstable_shouldYield=je,i.unstable_wrapCallback=function(X){var B=M;return function(){var te=M;M=B;try{return X.apply(this,arguments)}finally{M=te}}}})(Hu)),Hu}var ym;function Cg(){return ym||(ym=1,Uu.exports=Mg()),Uu.exports}var Bu={exports:{}},et={};var vm;function Xg(){if(vm)return et;vm=1;var i=Fu();function c(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)g+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},h=Symbol.for("react.portal");function p(b,g,A){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:w==null?null:""+w,children:b,containerInfo:g,implementation:A}}var v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,et.createPortal=function(b,g){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return p(b,g,null,A)},et.flushSync=function(b){var g=v.T,A=u.p;try{if(v.T=null,u.p=2,b)return b()}finally{v.T=g,u.p=A,u.d.f()}},et.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(b,g))},et.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},et.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var A=g.as,w=S(A,g.crossOrigin),M=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;A==="style"?u.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:M,fetchPriority:R}):A==="script"&&u.d.X(b,{crossOrigin:w,integrity:M,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},et.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var A=S(g.as,g.crossOrigin);u.d.M(b,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(b)},et.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var A=g.as,w=S(A,g.crossOrigin);u.d.L(b,A,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},et.preloadModule=function(b,g){if(typeof b=="string")if(g){var A=S(g.as,g.crossOrigin);u.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(b)},et.requestFormReset=function(b){u.d.r(b)},et.unstable_batchedUpdates=function(b,g){return b(g)},et.useFormState=function(b,g,A){return v.H.useFormState(b,g,A)},et.useFormStatus=function(){return v.H.useHostTransitionStatus()},et.version="19.2.3",et}var jm;function kg(){if(jm)return Bu.exports;jm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Bu.exports=Xg(),Bu.exports}var Nm;function Dg(){if(Nm)return rr;Nm=1;var i=Cg(),c=Fu(),f=kg();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var r=a.return;if(r===null)break;var s=r.alternate;if(s===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===a)return b(r),e;if(s===l)return b(r),t;s=s.sibling}throw Error(u(188))}if(a.return!==l.return)a=r,l=s;else{for(var o=!1,d=r.child;d;){if(d===a){o=!0,a=r,l=s;break}if(d===l){o=!0,l=r,a=s;break}d=d.sibling}if(!o){for(d=s.child;d;){if(d===a){o=!0,a=s,l=r;break}if(d===l){o=!0,l=s,a=r;break}d=d.sibling}if(!o)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function A(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=A(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,M=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),q=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),je=Symbol.for("react.memo_cache_sentinel"),_e=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=_e&&e[_e]||e["@@iterator"],typeof e=="function"?e:null)}var Ct=Symbol.for("react.client.reference");function bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case V:return"Profiler";case Q:return"StrictMode";case F:return"Suspense";case oe:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case q:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:bt(e.type)||"Memo";case ge:t=e._payload,e=e._init;try{return bt(e(t))}catch{}}return null}var yt=Array.isArray,X=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ve=[],Se=-1;function j(e){return{current:e}}function _(e){0>Se||(e.current=ve[Se],ve[Se]=null,Se--)}function L(e,t){Se++,ve[Se]=e.current,e.current=t}var K=j(null),ae=j(null),ie=j(null),be=j(null);function Pe(e,t){switch(L(ie,t),L(ae,e),L(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Of(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Of(t),e=Zf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(K),L(K,e)}function ke(){_(K),_(ae),_(ie)}function bl(e){e.memoizedState!==null&&L(be,e);var t=K.current,a=Zf(t,e.type);t!==a&&(L(ae,e),L(K,a))}function yl(e){ae.current===e&&(_(K),_(ae)),be.current===e&&(_(be),er._currentValue=te)}var fr,Fs;function ma(e){if(fr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fr=t&&t[1]||"",Fs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fr+e+Fs}var mr=!1;function hr(e,t){if(!e||mr)return"";mr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(z){var Y=z}Reflect.construct(e,[],D)}else{try{D.call()}catch(z){Y=z}e.call(D.prototype)}}else{try{throw Error()}catch(z){Y=z}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(z){if(z&&Y&&typeof z.stack=="string")return[z.stack,Y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),o=s[0],d=s[1];if(o&&d){var x=o.split(`
`),T=d.split(`
`);for(r=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;r<T.length&&!T[r].includes("DetermineComponentFrameRoot");)r++;if(l===x.length||r===T.length)for(l=x.length-1,r=T.length-1;1<=l&&0<=r&&x[l]!==T[r];)r--;for(;1<=l&&0<=r;l--,r--)if(x[l]!==T[r]){if(l!==1||r!==1)do if(l--,r--,0>r||x[l]!==T[r]){var C=`
`+x[l].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=l&&0<=r);break}}}finally{mr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ma(a):""}function oc(e,t){switch(e.tag){case 26:case 27:case 5:return ma(e.type);case 16:return ma("Lazy");case 13:return e.child!==t&&t!==null?ma("Suspense Fallback"):ma("Suspense");case 19:return ma("SuspenseList");case 0:case 15:return hr(e.type,!1);case 11:return hr(e.type.render,!1);case 1:return hr(e.type,!0);case 31:return ma("Activity");default:return""}}function Is(e){try{var t="",a=null;do t+=oc(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var gr=Object.prototype.hasOwnProperty,pr=i.unstable_scheduleCallback,xr=i.unstable_cancelCallback,uc=i.unstable_shouldYield,cc=i.unstable_requestPaint,st=i.unstable_now,dc=i.unstable_getCurrentPriorityLevel,Ps=i.unstable_ImmediatePriority,ei=i.unstable_UserBlockingPriority,sn=i.unstable_NormalPriority,fc=i.unstable_LowPriority,ti=i.unstable_IdlePriority,mc=i.log,hc=i.unstable_setDisableYieldValue,vl=null,it=null;function Kt(e){if(typeof mc=="function"&&hc(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(vl,e)}catch{}}var ot=Math.clz32?Math.clz32:xc,gc=Math.log,pc=Math.LN2;function xc(e){return e>>>=0,e===0?32:31-(gc(e)/pc|0)|0}var on=256,un=262144,cn=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~s,l!==0?r=ha(l):(o&=d,o!==0?r=ha(o):a||(a=d&~e,a!==0&&(r=ha(a))))):(d=l&~s,d!==0?r=ha(d):o!==0?r=ha(o):a||(a=l&~e,a!==0&&(r=ha(a)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:r}function jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bc(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ai(){var e=cn;return cn<<=1,(cn&62914560)===0&&(cn=4194304),e}function br(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yc(e,t,a,l,r,s){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,x=e.expirationTimes,T=e.hiddenUpdates;for(a=o&~a;0<a;){var C=31-ot(a),D=1<<C;d[C]=0,x[C]=-1;var Y=T[C];if(Y!==null)for(T[C]=null,C=0;C<Y.length;C++){var z=Y[C];z!==null&&(z.lane&=-536870913)}a&=~D}l!==0&&li(e,l,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function li(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ni(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ot(a),r=1<<l;r&t|e[l]&t&&(e[l]|=t),a&=~r}}function ri(e,t){var a=t&-t;return a=(a&42)!==0?1:yr(a),(a&(e.suspendedLanes|t))!==0?0:a}function yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function si(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:im(e.type))}function ii(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var $t=Math.random().toString(36).slice(2),Qe="__reactFiber$"+$t,at="__reactProps$"+$t,Qa="__reactContainer$"+$t,jr="__reactEvents$"+$t,vc="__reactListeners$"+$t,jc="__reactHandles$"+$t,oi="__reactResources$"+$t,wl="__reactMarker$"+$t;function Nr(e){delete e[Qe],delete e[at],delete e[jr],delete e[vc],delete e[jc]}function Va(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Qf(e);e!==null;){if(a=e[Qe])return a;e=Qf(e)}return t}e=a,a=e.parentNode}return null}function Ja(e){if(e=e[Qe]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Sl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ka(e){var t=e[oi];return t||(t=e[oi]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[wl]=!0}var ui=new Set,ci={};function ga(e,t){$a(e,t),$a(e+"Capture",t)}function $a(e,t){for(ci[e]=t,e=0;e<t.length;e++)ui.add(t[e])}var Nc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),di={},fi={};function wc(e){return gr.call(fi,e)?!0:gr.call(di,e)?!1:Nc.test(e)?fi[e]=!0:(di[e]=!0,!1)}function fn(e,t,a){if(wc(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function mn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ht(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mi(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sc(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){if(!e._valueTracker){var t=mi(e)?"checked":"value";e._valueTracker=Sc(e,t,""+e[t])}}function hi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=mi(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function hn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ec=/[\n"\\]/g;function jt(e){return e.replace(Ec,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Sr(e,t,a,l,r,s,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Er(e,o,vt(t)):a!=null?Er(e,o,vt(a)):l!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+vt(d):e.removeAttribute("name")}function gi(e,t,a,l,r,s,o,d){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){wr(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),wr(e)}function Er(e,t,a){t==="number"&&hn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Wa(e,t,a,l){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function pi(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function xi(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(yt(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),wr(e)}function Fa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Tc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bi(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Tc.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yi(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&a[r]!==l&&bi(e,r,l)}else for(var s in t)t.hasOwnProperty(s)&&bi(e,s,t[s])}function Tr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gn(e){return Yc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bt(){}var Ar=null;function Yr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,Pa=null;function vi(e){var t=Ja(e);if(t&&(e=t.stateNode)){var a=e[at]||null;e:switch(e=t.stateNode,t.type){case"input":if(Sr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var r=l[at]||null;if(!r)throw Error(u(90));Sr(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&hi(l)}break e;case"textarea":pi(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Wa(e,!!a.multiple,t,!1)}}}var zr=!1;function ji(e,t,a){if(zr)return e(t,a);zr=!0;try{var l=e(t);return l}finally{if(zr=!1,(Ia!==null||Pa!==null)&&(ws(),Ia&&(t=Ia,e=Pa,Pa=Ia=null,vi(t),e)))for(t=0;t<e.length;t++)vi(e[t])}}function El(e,t){var a=e.stateNode;if(a===null)return null;var l=a[at]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mr=!1;if(Lt)try{var Tl={};Object.defineProperty(Tl,"passive",{get:function(){Mr=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{Mr=!1}var Wt=null,Cr=null,pn=null;function Ni(){if(pn)return pn;var e,t=Cr,a=t.length,l,r="value"in Wt?Wt.value:Wt.textContent,s=r.length;for(e=0;e<a&&t[e]===r[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===r[s-l];l++);return pn=r.slice(e,1<l?1-l:void 0)}function xn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function wi(){return!1}function lt(e){function t(a,l,r,s,o){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bn:wi,this.isPropagationStopped=wi,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yn=lt(pa),Al=w({},pa,{view:0,detail:0}),zc=lt(Al),Xr,kr,Yl,vn=w({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yl&&(Yl&&e.type==="mousemove"?(Xr=e.screenX-Yl.screenX,kr=e.screenY-Yl.screenY):kr=Xr=0,Yl=e),Xr)},movementY:function(e){return"movementY"in e?e.movementY:kr}}),Si=lt(vn),Mc=w({},vn,{dataTransfer:0}),Cc=lt(Mc),Xc=w({},Al,{relatedTarget:0}),Dr=lt(Xc),kc=w({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Dc=lt(kc),Rc=w({},pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_c=lt(Rc),Oc=w({},pa,{data:0}),Ei=lt(Oc),Zc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hc[e])?!!t[e]:!1}function Rr(){return Bc}var Lc=w({},Al,{key:function(e){if(e.key){var t=Zc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rr,charCode:function(e){return e.type==="keypress"?xn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qc=lt(Lc),Gc=w({},vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ti=lt(Gc),Qc=w({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rr}),Vc=lt(Qc),Jc=w({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kc=lt(Jc),$c=w({},vn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wc=lt($c),Fc=w({},pa,{newState:0,oldState:0}),Ic=lt(Fc),Pc=[9,13,27,32],_r=Lt&&"CompositionEvent"in window,zl=null;Lt&&"documentMode"in document&&(zl=document.documentMode);var e0=Lt&&"TextEvent"in window&&!zl,Ai=Lt&&(!_r||zl&&8<zl&&11>=zl),Yi=" ",zi=!1;function Mi(e,t){switch(e){case"keyup":return Pc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ci(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var el=!1;function t0(e,t){switch(e){case"compositionend":return Ci(t);case"keypress":return t.which!==32?null:(zi=!0,Yi);case"textInput":return e=t.data,e===Yi&&zi?null:e;default:return null}}function a0(e,t){if(el)return e==="compositionend"||!_r&&Mi(e,t)?(e=Ni(),pn=Cr=Wt=null,el=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ai&&t.locale!=="ko"?null:t.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l0[e.type]:t==="textarea"}function ki(e,t,a,l){Ia?Pa?Pa.push(l):Pa=[l]:Ia=l,t=Ms(t,"onChange"),0<t.length&&(a=new yn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Ml=null,Cl=null;function n0(e){Cf(e,0)}function jn(e){var t=Sl(e);if(hi(t))return e}function Di(e,t){if(e==="change")return t}var Ri=!1;if(Lt){var Or;if(Lt){var Zr="oninput"in document;if(!Zr){var _i=document.createElement("div");_i.setAttribute("oninput","return;"),Zr=typeof _i.oninput=="function"}Or=Zr}else Or=!1;Ri=Or&&(!document.documentMode||9<document.documentMode)}function Oi(){Ml&&(Ml.detachEvent("onpropertychange",Zi),Cl=Ml=null)}function Zi(e){if(e.propertyName==="value"&&jn(Cl)){var t=[];ki(t,Cl,e,Yr(e)),ji(n0,t)}}function r0(e,t,a){e==="focusin"?(Oi(),Ml=t,Cl=a,Ml.attachEvent("onpropertychange",Zi)):e==="focusout"&&Oi()}function s0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jn(Cl)}function i0(e,t){if(e==="click")return jn(t)}function o0(e,t){if(e==="input"||e==="change")return jn(t)}function u0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:u0;function Xl(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!gr.call(t,r)||!ut(e[r],t[r]))return!1}return!0}function Ui(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hi(e,t){var a=Ui(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ui(a)}}function Bi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Li(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=hn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=hn(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var c0=Lt&&"documentMode"in document&&11>=document.documentMode,tl=null,Hr=null,kl=null,Br=!1;function qi(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Br||tl==null||tl!==hn(l)||(l=tl,"selectionStart"in l&&Ur(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),kl&&Xl(kl,l)||(kl=l,l=Ms(Hr,"onSelect"),0<l.length&&(t=new yn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=tl)))}function xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var al={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},Lr={},Gi={};Lt&&(Gi=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function ba(e){if(Lr[e])return Lr[e];if(!al[e])return e;var t=al[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Gi)return Lr[e]=t[a];return e}var Qi=ba("animationend"),Vi=ba("animationiteration"),Ji=ba("animationstart"),d0=ba("transitionrun"),f0=ba("transitionstart"),m0=ba("transitioncancel"),Ki=ba("transitionend"),$i=new Map,qr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qr.push("scrollEnd");function Xt(e,t){$i.set(e,t),ga(t,[e])}var Nn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Nt=[],ll=0,Gr=0;function wn(){for(var e=ll,t=Gr=ll=0;t<e;){var a=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var r=Nt[t];Nt[t++]=null;var s=Nt[t];if(Nt[t++]=null,l!==null&&r!==null){var o=l.pending;o===null?r.next=r:(r.next=o.next,o.next=r),l.pending=r}s!==0&&Wi(a,r,s)}}function Sn(e,t,a,l){Nt[ll++]=e,Nt[ll++]=t,Nt[ll++]=a,Nt[ll++]=l,Gr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Qr(e,t,a,l){return Sn(e,t,a,l),En(e)}function ya(e,t){return Sn(e,null,null,t),En(e)}function Wi(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,s=e.return;s!==null;)s.childLanes|=a,l=s.alternate,l!==null&&(l.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-ot(a),e=s.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=a|536870912),s):null}function En(e){if(50<Jn)throw Jn=0,su=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function h0(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,a,l){return new h0(e,t,a,l)}function Vr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,t){var a=e.alternate;return a===null?(a=ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fi(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Tn(e,t,a,l,r,s){var o=0;if(l=e,typeof e=="function")Vr(e)&&(o=1);else if(typeof e=="string")o=gg(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=ct(31,a,t,r),e.elementType=ue,e.lanes=s,e;case H:return va(a.children,r,s,t);case Q:o=8,r|=24;break;case V:return e=ct(12,a,t,r|2),e.elementType=V,e.lanes=s,e;case F:return e=ct(13,a,t,r),e.elementType=F,e.lanes=s,e;case oe:return e=ct(19,a,t,r),e.elementType=oe,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:o=10;break e;case U:o=9;break e;case G:o=11;break e;case P:o=14;break e;case ge:o=16,l=null;break e}o=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=ct(o,a,t,r),t.elementType=e,t.type=l,t.lanes=s,t}function va(e,t,a,l){return e=ct(7,e,l,t),e.lanes=a,e}function Jr(e,t,a){return e=ct(6,e,null,t),e.lanes=a,e}function Ii(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function Kr(e,t,a){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pi=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var a=Pi.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Is(t)},Pi.set(e,t),t)}return{value:e,source:t,stack:Is(t)}}var nt=[],ja=0,Dl=null,rl=0,dt=[],ft=0,Gt=null,Z=1,W="";function St(e,t){nt[ja++]=rl,nt[ja++]=Dl,Dl=e,rl=t}function g0(e,t,a){dt[ft++]=Z,dt[ft++]=W,dt[ft++]=Gt,Gt=e;var l=Z;e=W;var r=32-ot(l)-1;l&=~(1<<r),a+=1;var s=32-ot(t)+r;if(30<s){var o=r-r%5;s=(l&(1<<o)-1).toString(32),l>>=o,r-=o,Z=1<<32-ot(t)+r|a<<r|l,W=s+e}else Z=1<<s|a<<r|l,W=e}function eo(e){e.return!==null&&(St(e,1),g0(e,1,0))}function to(e){for(;e===Dl;)Dl=nt[--ja],nt[ja]=null,rl=nt[--ja],nt[ja]=null;for(;e===Gt;)Gt=dt[--ft],dt[ft]=null,W=dt[--ft],dt[ft]=null,Z=dt[--ft],dt[ft]=null}function p0(e,t){dt[ft++]=Z,dt[ft++]=W,dt[ft++]=Gt,Z=t.id,W=t.overflow,Gt=e}var Ke=null,ze=null,he=!1,Na=null,kt=!1,ao=Error(u(519));function wa(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw An(wt(t,e)),ao}function x0(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Qe]=e,t[at]=l,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<$n.length;a++)de($n[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),gi(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),xi(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Rf(t.textContent,a)?(l.popover!=null&&(de("beforetoggle",t),de("toggle",t)),l.onScroll!=null&&de("scroll",t),l.onScrollEnd!=null&&de("scrollend",t),l.onClick!=null&&(t.onclick=Bt),t=!0):t=!1,t||wa(e,!0)}function b0(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:Ke=Ke.return}}function Rl(e){if(e!==Ke)return!1;if(!he)return b0(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ju(e.type,e.memoizedProps)),a=!a),a&&ze&&wa(e),b0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ze=Gf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ze=Gf(e)}else t===27?(t=ze,Oa(e.type)?(e=Tu,Tu=null,ze=e):ze=t):ze=Ke?Rt(e.stateNode.nextSibling):null;return!0}function sl(){ze=Ke=null,he=!1}function lo(){var e=Na;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),Na=null),e}function An(e){Na===null?Na=[e]:Na.push(e)}var no=j(null),il=null,Ft=null;function Sa(e,t,a){L(no,t._currentValue),t._currentValue=a}function It(e){e._currentValue=no.current,_(no)}function ro(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function so(e,t,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var o=r.child;s=s.firstContext;e:for(;s!==null;){var d=s;s=r;for(var x=0;x<t.length;x++)if(d.context===t[x]){s.lanes|=a,d=s.alternate,d!==null&&(d.lanes|=a),ro(s.return,a,e),l||(o=null);break e}s=d.next}}else if(r.tag===18){if(o=r.return,o===null)throw Error(u(341));o.lanes|=a,s=o.alternate,s!==null&&(s.lanes|=a),ro(o,a,e),o=null}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}}function _l(e,t,a,l){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var o=r.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var d=r.type;ut(r.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(r===be.current){if(o=r.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(er):e=[er])}r=r.return}e!==null&&so(t,e,a,l),t.flags|=262144}function $r(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ol(e){il=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return y0(il,e)}function Wr(e,t){return il===null&&ol(e),y0(e,t)}function y0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ft===null){if(e===null)throw Error(u(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return a}var dh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},fh=i.unstable_scheduleCallback,mh=i.unstable_NormalPriority,Ue={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function io(){return{controller:new dh,data:new Map,refCount:0}}function Yn(e){e.refCount--,e.refCount===0&&fh(mh,function(){e.controller.abort()})}var zn=null,oo=0,Ol=0,Zl=null;function hh(e,t){if(zn===null){var a=zn=[];oo=0,Ol=fu(),Zl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return oo++,t.then(v0,v0),t}function v0(){if(--oo===0&&zn!==null){Zl!==null&&(Zl.status="fulfilled");var e=zn;zn=null,Ol=0,Zl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var j0=X.S;X.S=function(e,t){nf=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&hh(e,t),j0!==null&&j0(e,t)};var ul=j(null);function uo(){var e=ul.current;return e!==null?e:Ye.pooledCache}function Fr(e,t){t===null?L(ul,ul.current):L(ul,t.pool)}function N0(){var e=uo();return e===null?null:{parent:Ue._currentValue,pool:e}}var Ul=Error(u(460)),co=Error(u(474)),Ir=Error(u(542)),Pr={then:function(){}};function w0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function S0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Bt,Bt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,T0(e),e;default:if(typeof t.status=="string")t.then(Bt,Bt);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,T0(e),e}throw dl=t,Ul}}function cl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dl=a,Ul):a}}var dl=null;function E0(){if(dl===null)throw Error(u(459));var e=dl;return dl=null,e}function T0(e){if(e===Ul||e===Ir)throw Error(u(483))}var Hl=null,Mn=0;function es(e){var t=Mn;return Mn+=1,Hl===null&&(Hl=[]),S0(Hl,e,t)}function Cn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ts(e,t){throw t.$$typeof===M?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function A0(e){function t(N,y){if(e){var E=N.deletions;E===null?(N.deletions=[y],N.flags|=16):E.push(y)}}function a(N,y){if(!e)return null;for(;y!==null;)t(N,y),y=y.sibling;return null}function l(N){for(var y=new Map;N!==null;)N.key!==null?y.set(N.key,N):y.set(N.index,N),N=N.sibling;return y}function r(N,y){return N=qt(N,y),N.index=0,N.sibling=null,N}function s(N,y,E){return N.index=E,e?(E=N.alternate,E!==null?(E=E.index,E<y?(N.flags|=67108866,y):E):(N.flags|=67108866,y)):(N.flags|=1048576,y)}function o(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function d(N,y,E,k){return y===null||y.tag!==6?(y=Jr(E,N.mode,k),y.return=N,y):(y=r(y,E),y.return=N,y)}function x(N,y,E,k){var I=E.type;return I===H?C(N,y,E.props.children,k,E.key):y!==null&&(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ge&&cl(I)===y.type)?(y=r(y,E.props),Cn(y,E),y.return=N,y):(y=Tn(E.type,E.key,E.props,null,N.mode,k),Cn(y,E),y.return=N,y)}function T(N,y,E,k){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=Kr(E,N.mode,k),y.return=N,y):(y=r(y,E.children||[]),y.return=N,y)}function C(N,y,E,k,I){return y===null||y.tag!==7?(y=va(E,N.mode,k,I),y.return=N,y):(y=r(y,E),y.return=N,y)}function D(N,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Jr(""+y,N.mode,E),y.return=N,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case R:return E=Tn(y.type,y.key,y.props,null,N.mode,E),Cn(E,y),E.return=N,E;case O:return y=Kr(y,N.mode,E),y.return=N,y;case ge:return y=cl(y),D(N,y,E)}if(yt(y)||Je(y))return y=va(y,N.mode,E,null),y.return=N,y;if(typeof y.then=="function")return D(N,es(y),E);if(y.$$typeof===q)return D(N,Wr(N,y),E);ts(N,y)}return null}function Y(N,y,E,k){var I=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return I!==null?null:d(N,y,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case R:return E.key===I?x(N,y,E,k):null;case O:return E.key===I?T(N,y,E,k):null;case ge:return E=cl(E),Y(N,y,E,k)}if(yt(E)||Je(E))return I!==null?null:C(N,y,E,k,null);if(typeof E.then=="function")return Y(N,y,es(E),k);if(E.$$typeof===q)return Y(N,y,Wr(N,E),k);ts(N,E)}return null}function z(N,y,E,k,I){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return N=N.get(E)||null,d(y,N,""+k,I);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case R:return N=N.get(k.key===null?E:k.key)||null,x(y,N,k,I);case O:return N=N.get(k.key===null?E:k.key)||null,T(y,N,k,I);case ge:return k=cl(k),z(N,y,E,k,I)}if(yt(k)||Je(k))return N=N.get(E)||null,C(y,N,k,I,null);if(typeof k.then=="function")return z(N,y,E,es(k),I);if(k.$$typeof===q)return z(N,y,E,Wr(y,k),I);ts(y,k)}return null}function J(N,y,E,k){for(var I=null,pe=null,$=y,se=y=0,me=null;$!==null&&se<E.length;se++){$.index>se?(me=$,$=null):me=$.sibling;var xe=Y(N,$,E[se],k);if(xe===null){$===null&&($=me);break}e&&$&&xe.alternate===null&&t(N,$),y=s(xe,y,se),pe===null?I=xe:pe.sibling=xe,pe=xe,$=me}if(se===E.length)return a(N,$),he&&St(N,se),I;if($===null){for(;se<E.length;se++)$=D(N,E[se],k),$!==null&&(y=s($,y,se),pe===null?I=$:pe.sibling=$,pe=$);return he&&St(N,se),I}for($=l($);se<E.length;se++)me=z($,N,se,E[se],k),me!==null&&(e&&me.alternate!==null&&$.delete(me.key===null?se:me.key),y=s(me,y,se),pe===null?I=me:pe.sibling=me,pe=me);return e&&$.forEach(function(La){return t(N,La)}),he&&St(N,se),I}function ee(N,y,E,k){if(E==null)throw Error(u(151));for(var I=null,pe=null,$=y,se=y=0,me=null,xe=E.next();$!==null&&!xe.done;se++,xe=E.next()){$.index>se?(me=$,$=null):me=$.sibling;var La=Y(N,$,xe.value,k);if(La===null){$===null&&($=me);break}e&&$&&La.alternate===null&&t(N,$),y=s(La,y,se),pe===null?I=La:pe.sibling=La,pe=La,$=me}if(xe.done)return a(N,$),he&&St(N,se),I;if($===null){for(;!xe.done;se++,xe=E.next())xe=D(N,xe.value,k),xe!==null&&(y=s(xe,y,se),pe===null?I=xe:pe.sibling=xe,pe=xe);return he&&St(N,se),I}for($=l($);!xe.done;se++,xe=E.next())xe=z($,N,se,xe.value,k),xe!==null&&(e&&xe.alternate!==null&&$.delete(xe.key===null?se:xe.key),y=s(xe,y,se),pe===null?I=xe:pe.sibling=xe,pe=xe);return e&&$.forEach(function(Tg){return t(N,Tg)}),he&&St(N,se),I}function Ae(N,y,E,k){if(typeof E=="object"&&E!==null&&E.type===H&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case R:e:{for(var I=E.key;y!==null;){if(y.key===I){if(I=E.type,I===H){if(y.tag===7){a(N,y.sibling),k=r(y,E.props.children),k.return=N,N=k;break e}}else if(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ge&&cl(I)===y.type){a(N,y.sibling),k=r(y,E.props),Cn(k,E),k.return=N,N=k;break e}a(N,y);break}else t(N,y);y=y.sibling}E.type===H?(k=va(E.props.children,N.mode,k,E.key),k.return=N,N=k):(k=Tn(E.type,E.key,E.props,null,N.mode,k),Cn(k,E),k.return=N,N=k)}return o(N);case O:e:{for(I=E.key;y!==null;){if(y.key===I)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){a(N,y.sibling),k=r(y,E.children||[]),k.return=N,N=k;break e}else{a(N,y);break}else t(N,y);y=y.sibling}k=Kr(E,N.mode,k),k.return=N,N=k}return o(N);case ge:return E=cl(E),Ae(N,y,E,k)}if(yt(E))return J(N,y,E,k);if(Je(E)){if(I=Je(E),typeof I!="function")throw Error(u(150));return E=I.call(E),ee(N,y,E,k)}if(typeof E.then=="function")return Ae(N,y,es(E),k);if(E.$$typeof===q)return Ae(N,y,Wr(N,E),k);ts(N,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,y!==null&&y.tag===6?(a(N,y.sibling),k=r(y,E),k.return=N,N=k):(a(N,y),k=Jr(E,N.mode,k),k.return=N,N=k),o(N)):a(N,y)}return function(N,y,E,k){try{Mn=0;var I=Ae(N,y,E,k);return Hl=null,I}catch($){if($===Ul||$===Ir)throw $;var pe=ct(29,$,null,N.mode);return pe.lanes=k,pe.return=N,pe}}}var fl=A0(!0),Y0=A0(!1),Ea=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ye&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=En(e),Wi(e,null,a),t}return Sn(e,l,t,a),En(e)}function Xn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ni(e,a)}}function ho(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?r=s=o:s=s.next=o,a=a.next}while(a!==null);s===null?r=s=t:s=s.next=t}else r=s=t;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var go=!1;function kn(){if(go){var e=Zl;if(e!==null)throw e}}function Dn(e,t,a,l){go=!1;var r=e.updateQueue;Ea=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,d=r.shared.pending;if(d!==null){r.shared.pending=null;var x=d,T=x.next;x.next=null,o===null?s=T:o.next=T,o=x;var C=e.alternate;C!==null&&(C=C.updateQueue,d=C.lastBaseUpdate,d!==o&&(d===null?C.firstBaseUpdate=T:d.next=T,C.lastBaseUpdate=x))}if(s!==null){var D=r.baseState;o=0,C=T=x=null,d=s;do{var Y=d.lane&-536870913,z=Y!==d.lane;if(z?(fe&Y)===Y:(l&Y)===Y){Y!==0&&Y===Ol&&(go=!0),C!==null&&(C=C.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var J=e,ee=d;Y=t;var Ae=a;switch(ee.tag){case 1:if(J=ee.payload,typeof J=="function"){D=J.call(Ae,D,Y);break e}D=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ee.payload,Y=typeof J=="function"?J.call(Ae,D,Y):J,Y==null)break e;D=w({},D,Y);break e;case 2:Ea=!0}}Y=d.callback,Y!==null&&(e.flags|=64,z&&(e.flags|=8192),z=r.callbacks,z===null?r.callbacks=[Y]:z.push(Y))}else z={lane:Y,tag:d.tag,payload:d.payload,callback:d.callback,next:null},C===null?(T=C=z,x=D):C=C.next=z,o|=Y;if(d=d.next,d===null){if(d=r.shared.pending,d===null)break;z=d,d=z.next,z.next=null,r.lastBaseUpdate=z,r.shared.pending=null}}while(!0);C===null&&(x=D),r.baseState=x,r.firstBaseUpdate=T,r.lastBaseUpdate=C,s===null&&(r.shared.lanes=0),Xa|=o,e.lanes=o,e.memoizedState=D}}function z0(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function M0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)z0(a[e],t)}var Bl=j(null),as=j(0);function C0(e,t){e=ia,L(as,e),L(Bl,t),ia=e|t.baseLanes}function po(){L(as,ia),L(Bl,Bl.current)}function xo(){ia=as.current,_(Bl),_(as)}var Et=j(null),Dt=null;function Ya(e){var t=e.alternate;L(Oe,Oe.current&1),L(Et,e),Dt===null&&(t===null||Bl.current!==null||t.memoizedState!==null)&&(Dt=e)}function bo(e){L(Oe,Oe.current),L(Et,e),Dt===null&&(Dt=e)}function X0(e){e.tag===22?(L(Oe,Oe.current),L(Et,e),Dt===null&&(Dt=e)):za()}function za(){L(Oe,Oe.current),L(Et,Et.current)}function Tt(e){_(Et),Dt===e&&(Dt=null),_(Oe)}var Oe=j(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Su(a)||Eu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pt=0,ne=null,Ee=null,He=null,ns=!1,Ll=!1,ml=!1,rs=0,Rn=0,ql=null,ph=0;function De(){throw Error(u(321))}function yo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function vo(e,t,a,l,r,s){return Pt=s,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?gd:Ro,ml=!1,s=a(l,r),ml=!1,Ll&&(s=D0(t,a,l,r)),k0(e),s}function k0(e){X.H=Zn;var t=Ee!==null&&Ee.next!==null;if(Pt=0,He=Ee=ne=null,ns=!1,Rn=0,ql=null,t)throw Error(u(300));e===null||Be||(e=e.dependencies,e!==null&&$r(e)&&(Be=!0))}function D0(e,t,a,l){ne=e;var r=0;do{if(Ll&&(ql=null),Rn=0,Ll=!1,25<=r)throw Error(u(301));if(r+=1,He=Ee=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}X.H=pd,s=t(a,l)}while(Ll);return s}function xh(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?_n(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(ne.flags|=1024),t}function jo(){var e=rs!==0;return rs=0,e}function No(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function wo(e){if(ns){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ns=!1}Pt=0,He=Ee=ne=null,Ll=!1,Rn=rs=0,ql=null}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ne.memoizedState=He=e:He=He.next=e,He}function Ze(){if(Ee===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=He===null?ne.memoizedState:He.next;if(t!==null)He=t,Ee=e;else{if(e===null)throw ne.alternate===null?Error(u(467)):Error(u(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},He===null?ne.memoizedState=He=e:He=He.next=e}return He}function ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _n(e){var t=Rn;return Rn+=1,ql===null&&(ql=[]),e=S0(ql,e,t),t=ne,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?gd:Ro),e}function is(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _n(e);if(e.$$typeof===q)return $e(e)}throw Error(u(438,String(e)))}function So(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ss(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=je;return t.index++,a}function ea(e,t){return typeof t=="function"?t(e):t}function os(e){var t=Ze();return Eo(t,Ee,e)}function Eo(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var r=e.baseQueue,s=l.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}t.baseQueue=r=s,l.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var d=o=null,x=null,T=t,C=!1;do{var D=T.lane&-536870913;if(D!==T.lane?(fe&D)===D:(Pt&D)===D){var Y=T.revertLane;if(Y===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),D===Ol&&(C=!0);else if((Pt&Y)===Y){T=T.next,Y===Ol&&(C=!0);continue}else D={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(d=x=D,o=s):x=x.next=D,ne.lanes|=Y,Xa|=Y;D=T.action,ml&&a(s,D),s=T.hasEagerState?T.eagerState:a(s,D)}else Y={lane:D,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(d=x=Y,o=s):x=x.next=Y,ne.lanes|=D,Xa|=D;T=T.next}while(T!==null&&T!==t);if(x===null?o=s:x.next=d,!ut(s,e.memoizedState)&&(Be=!0,C&&(a=Zl,a!==null)))throw a;e.memoizedState=s,e.baseState=o,e.baseQueue=x,l.lastRenderedState=s}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function To(e){var t=Ze(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,s=t.memoizedState;if(r!==null){a.pending=null;var o=r=r.next;do s=e(s,o.action),o=o.next;while(o!==r);ut(s,t.memoizedState)||(Be=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,l]}function R0(e,t,a){var l=ne,r=Ze(),s=he;if(s){if(a===void 0)throw Error(u(407));a=a()}else a=t();var o=!ut((Ee||r).memoizedState,a);if(o&&(r.memoizedState=a,Be=!0),r=r.queue,zo(Z0.bind(null,l,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,Gl(9,{destroy:void 0},O0.bind(null,l,r,a,t),null),Ye===null)throw Error(u(349));s||(Pt&127)!==0||_0(l,t,a)}return a}function _0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=ss(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function O0(e,t,a,l){t.value=a,t.getSnapshot=l,U0(t)&&H0(e)}function Z0(e,t,a){return a(function(){U0(t)&&H0(e)})}function U0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function H0(e){var t=ya(e,2);t!==null&&xt(t,e,2)}function Ao(e){var t=rt();if(typeof e=="function"){var a=e;if(e=a(),ml){Kt(!0);try{a()}finally{Kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function B0(e,t,a,l){return e.baseState=a,Eo(e,Ee,typeof l=="function"?l:ea)}function bh(e,t,a,l,r){if(ds(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};X.T!==null?a(!0):s.isTransition=!1,l(s),a=t.pending,a===null?(s.next=t.pending=s,L0(t,s)):(s.next=a.next,t.pending=a.next=s)}}function L0(e,t){var a=t.action,l=t.payload,r=e.state;if(t.isTransition){var s=X.T,o={};X.T=o;try{var d=a(r,l),x=X.S;x!==null&&x(o,d),q0(e,t,d)}catch(T){Yo(e,t,T)}finally{s!==null&&o.types!==null&&(s.types=o.types),X.T=s}}else try{s=a(r,l),q0(e,t,s)}catch(T){Yo(e,t,T)}}function q0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){G0(e,t,l)},function(l){return Yo(e,t,l)}):G0(e,t,a)}function G0(e,t,a){t.status="fulfilled",t.value=a,Q0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,L0(e,a)))}function Yo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Q0(t),t=t.next;while(t!==l)}e.action=null}function Q0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function V0(e,t){return t}function J0(e,t){if(he){var a=Ye.formState;if(a!==null){e:{var l=ne;if(he){if(ze){t:{for(var r=ze,s=kt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Rt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){ze=Rt(r.nextSibling),l=r.data==="F!";break e}}wa(l)}l=!1}l&&(t=a[0])}}return a=rt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:V0,lastRenderedState:t},a.queue=l,a=fd.bind(null,ne,l),l.dispatch=a,l=Ao(!1),s=Do.bind(null,ne,!1,l.queue),l=rt(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,a=bh.bind(null,ne,r,s,a),r.dispatch=a,l.memoizedState=e,[t,a,!1]}function K0(e){var t=Ze();return $0(t,Ee,e)}function $0(e,t,a){if(t=Eo(e,t,V0)[0],e=os(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=_n(t)}catch(o){throw o===Ul?Ir:o}else l=t;t=Ze();var r=t.queue,s=r.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,Gl(9,{destroy:void 0},yh.bind(null,r,a),null)),[l,s,e]}function yh(e,t){e.action=t}function W0(e){var t=Ze(),a=Ee;if(a!==null)return $0(t,a,e);Ze(),t=t.memoizedState,a=Ze();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Gl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ne.updateQueue,t===null&&(t=ss(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function F0(){return Ze().memoizedState}function us(e,t,a,l){var r=rt();ne.flags|=e,r.memoizedState=Gl(1|t,{destroy:void 0},a,l===void 0?null:l)}function cs(e,t,a,l){var r=Ze();l=l===void 0?null:l;var s=r.memoizedState.inst;Ee!==null&&l!==null&&yo(l,Ee.memoizedState.deps)?r.memoizedState=Gl(t,s,a,l):(ne.flags|=e,r.memoizedState=Gl(1|t,s,a,l))}function I0(e,t){us(8390656,8,e,t)}function zo(e,t){cs(2048,8,e,t)}function vh(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=ss(),ne.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function P0(e){var t=Ze().memoizedState;return vh({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function ed(e,t){return cs(4,2,e,t)}function td(e,t){return cs(4,4,e,t)}function ad(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,a){a=a!=null?a.concat([e]):null,cs(4,4,ad.bind(null,t,e),a)}function Mo(){}function nd(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&yo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function rd(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&yo(t,l[1]))return l[0];if(l=e(),ml){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[l,t],l}function Co(e,t,a){return a===void 0||(Pt&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sf(),ne.lanes|=e,Xa|=e,a)}function sd(e,t,a,l){return ut(a,t)?a:Bl.current!==null?(e=Co(e,a,l),ut(e,t)||(Be=!0),e):(Pt&42)===0||(Pt&1073741824)!==0&&(fe&261930)===0?(Be=!0,e.memoizedState=a):(e=sf(),ne.lanes|=e,Xa|=e,t)}function id(e,t,a,l,r){var s=B.p;B.p=s!==0&&8>s?s:8;var o=X.T,d={};X.T=d,Do(e,!1,t,a);try{var x=r(),T=X.S;if(T!==null&&T(d,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var C=gh(x,l);On(e,t,C,zt(e))}else On(e,t,l,zt(e))}catch(D){On(e,t,{then:function(){},status:"rejected",reason:D},zt())}finally{B.p=s,o!==null&&d.types!==null&&(o.types=d.types),X.T=o}}function jh(){}function Xo(e,t,a,l){if(e.tag!==5)throw Error(u(476));var r=od(e).queue;id(e,r,t,te,a===null?jh:function(){return ud(e),a(l)})}function od(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:te},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ud(e){var t=od(e);t.next===null&&(t=e.alternate.memoizedState),On(e,t.next.queue,{},zt())}function ko(){return $e(er)}function cd(){return Ze().memoizedState}function dd(){return Ze().memoizedState}function Nh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=zt();e=Ta(a);var l=Aa(t,e,a);l!==null&&(xt(l,t,a),Xn(l,t,a)),t={cache:io()},e.payload=t;return}t=t.return}}function wh(e,t,a){var l=zt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ds(e)?md(t,a):(a=Qr(e,t,a,l),a!==null&&(xt(a,e,l),hd(a,t,l)))}function fd(e,t,a){var l=zt();On(e,t,a,l)}function On(e,t,a,l){var r={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ds(e))md(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,d=s(o,a);if(r.hasEagerState=!0,r.eagerState=d,ut(d,o))return Sn(e,t,r,0),Ye===null&&wn(),!1}catch{}if(a=Qr(e,t,r,l),a!==null)return xt(a,e,l),hd(a,t,l),!0}return!1}function Do(e,t,a,l){if(l={lane:2,revertLane:fu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ds(e)){if(t)throw Error(u(479))}else t=Qr(e,a,l,2),t!==null&&xt(t,e,2)}function ds(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function md(e,t){Ll=ns=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function hd(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ni(e,a)}}var Zn={readContext:$e,use:is,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};Zn.useEffectEvent=De;var gd={readContext:$e,use:is,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:I0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,us(4194308,4,ad.bind(null,t,e),a)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var a=rt();t=t===void 0?null:t;var l=e();if(ml){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=rt();if(a!==void 0){var r=a(t);if(ml){Kt(!0);try{a(t)}finally{Kt(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=wh.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ao(e);var t=e.queue,a=fd.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Mo,useDeferredValue:function(e,t){var a=rt();return Co(a,e,t)},useTransition:function(){var e=Ao(!1);return e=id.bind(null,ne,e.queue,!0,!1),rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ne,r=rt();if(he){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ye===null)throw Error(u(349));(fe&127)!==0||_0(l,t,a)}r.memoizedState=a;var s={value:a,getSnapshot:t};return r.queue=s,I0(Z0.bind(null,l,s,e),[e]),l.flags|=2048,Gl(9,{destroy:void 0},O0.bind(null,l,s,a,t),null),a},useId:function(){var e=rt(),t=Ye.identifierPrefix;if(he){var a=W,l=Z;a=(l&~(1<<32-ot(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=rs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=ph++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ko,useFormState:J0,useActionState:J0,useOptimistic:function(e){var t=rt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Do.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:So,useCacheRefresh:function(){return rt().memoizedState=Nh.bind(null,ne)},useEffectEvent:function(e){var t=rt(),a={impl:e};return t.memoizedState=a,function(){if((ye&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Ro={readContext:$e,use:is,useCallback:nd,useContext:$e,useEffect:zo,useImperativeHandle:ld,useInsertionEffect:ed,useLayoutEffect:td,useMemo:rd,useReducer:os,useRef:F0,useState:function(){return os(ea)},useDebugValue:Mo,useDeferredValue:function(e,t){var a=Ze();return sd(a,Ee.memoizedState,e,t)},useTransition:function(){var e=os(ea)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:_n(e),t]},useSyncExternalStore:R0,useId:cd,useHostTransitionStatus:ko,useFormState:K0,useActionState:K0,useOptimistic:function(e,t){var a=Ze();return B0(a,Ee,e,t)},useMemoCache:So,useCacheRefresh:dd};Ro.useEffectEvent=P0;var pd={readContext:$e,use:is,useCallback:nd,useContext:$e,useEffect:zo,useImperativeHandle:ld,useInsertionEffect:ed,useLayoutEffect:td,useMemo:rd,useReducer:To,useRef:F0,useState:function(){return To(ea)},useDebugValue:Mo,useDeferredValue:function(e,t){var a=Ze();return Ee===null?Co(a,e,t):sd(a,Ee.memoizedState,e,t)},useTransition:function(){var e=To(ea)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:_n(e),t]},useSyncExternalStore:R0,useId:cd,useHostTransitionStatus:ko,useFormState:W0,useActionState:W0,useOptimistic:function(e,t){var a=Ze();return Ee!==null?B0(a,Ee,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:So,useCacheRefresh:dd};pd.useEffectEvent=P0;function _o(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Oo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=zt(),r=Ta(l);r.payload=t,a!=null&&(r.callback=a),t=Aa(e,r,l),t!==null&&(xt(t,e,l),Xn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=zt(),r=Ta(l);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=Aa(e,r,l),t!==null&&(xt(t,e,l),Xn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=zt(),l=Ta(a);l.tag=2,t!=null&&(l.callback=t),t=Aa(e,l,a),t!==null&&(xt(t,e,a),Xn(t,e,a))}};function xd(e,t,a,l,r,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,o):t.prototype&&t.prototype.isPureReactComponent?!Xl(a,l)||!Xl(r,s):!0}function bd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function hl(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function yd(e){Nn(e)}function vd(e){console.error(e)}function jd(e){Nn(e)}function fs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Nd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Zo(e,t,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){fs(e,t)},a}function wd(e){return e=Ta(e),e.tag=3,e}function Sd(e,t,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var s=l.value;e.payload=function(){return r(s)},e.callback=function(){Nd(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Nd(t,a,l),typeof r!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function Sh(e,t,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&_l(t,a,r,!0),a=Et.current,a!==null){switch(a.tag){case 31:case 13:return Dt===null?Ss():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===Pr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),uu(e,l,r)),!1;case 22:return a.flags|=65536,l===Pr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),uu(e,l,r)),!1}throw Error(u(435,a.tag))}return uu(e,l,r),Ss(),!1}if(he)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==ao&&(e=Error(u(422),{cause:l}),An(wt(e,a)))):(l!==ao&&(t=Error(u(423),{cause:l}),An(wt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=wt(l,a),r=Zo(e.stateNode,l,r),ho(e,r),Re!==4&&(Re=2)),!1;var s=Error(u(520),{cause:l});if(s=wt(s,a),Vn===null?Vn=[s]:Vn.push(s),Re!==4&&(Re=2),t===null)return!0;l=wt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=Zo(a.stateNode,l,e),ho(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ka===null||!ka.has(s))))return a.flags|=65536,r&=-r,a.lanes|=r,r=wd(r),Sd(r,e,a,l),ho(a,r),!1}a=a.return}while(a!==null);return!1}var Uo=Error(u(461)),Be=!1;function We(e,t,a,l){t.child=e===null?Y0(t,null,a,l):fl(t,e.child,a,l)}function Ed(e,t,a,l,r){a=a.render;var s=t.ref;if("ref"in l){var o={};for(var d in l)d!=="ref"&&(o[d]=l[d])}else o=l;return ol(t),l=vo(e,t,a,o,s,r),d=jo(),e!==null&&!Be?(No(e,t,r),ta(e,t,r)):(he&&d&&eo(t),t.flags|=1,We(e,t,l,r),t.child)}function Td(e,t,a,l,r){if(e===null){var s=a.type;return typeof s=="function"&&!Vr(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Ad(e,t,s,l,r)):(e=Tn(a.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Jo(e,r)){var o=s.memoizedProps;if(a=a.compare,a=a!==null?a:Xl,a(o,l)&&e.ref===t.ref)return ta(e,t,r)}return t.flags|=1,e=qt(s,l),e.ref=t.ref,e.return=t,t.child=e}function Ad(e,t,a,l,r){if(e!==null){var s=e.memoizedProps;if(Xl(s,l)&&e.ref===t.ref)if(Be=!1,t.pendingProps=l=s,Jo(e,r))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,ta(e,t,r)}return Ho(e,t,a,l,r)}function Yd(e,t,a,l){var r=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~s}else l=0,t.child=null;return zd(e,t,s,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fr(t,s!==null?s.cachePool:null),s!==null?C0(t,s):po(),X0(t);else return l=t.lanes=536870912,zd(e,t,s!==null?s.baseLanes|a:a,a,l)}else s!==null?(Fr(t,s.cachePool),C0(t,s),za(),t.memoizedState=null):(e!==null&&Fr(t,null),po(),za());return We(e,t,r,a),t.child}function Un(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zd(e,t,a,l,r){var s=uo();return s=s===null?null:{parent:Ue._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&Fr(t,null),po(),X0(t),e!==null&&_l(e,t,l,!0),t.childLanes=r,null}function ms(e,t){return t=gs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Md(e,t,a){return fl(t,e.child,null,a),e=ms(t,t.pendingProps),e.flags|=2,Tt(t),t.memoizedState=null,e}function Eh(e,t,a){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(l.mode==="hidden")return e=ms(t,l),t.lanes=536870912,Un(null,e);if(bo(t),(e=ze)?(e=qf(e,kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gt!==null?{id:Z,overflow:W}:null,retryLane:536870912,hydrationErrors:null},a=Ii(e),a.return=t,t.child=a,Ke=t,ze=null)):e=null,e===null)throw wa(t);return t.lanes=536870912,null}return ms(t,l)}var s=e.memoizedState;if(s!==null){var o=s.dehydrated;if(bo(t),r)if(t.flags&256)t.flags&=-257,t=Md(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Be||_l(e,t,a,!1),r=(a&e.childLanes)!==0,Be||r){if(l=Ye,l!==null&&(o=ri(l,a),o!==0&&o!==s.retryLane))throw s.retryLane=o,ya(e,o),xt(l,e,o),Uo;Ss(),t=Md(e,t,a)}else e=s.treeContext,ze=Rt(o.nextSibling),Ke=t,he=!0,Na=null,kt=!1,e!==null&&p0(t,e),t=ms(t,l),t.flags|=4096;return t}return e=qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hs(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ho(e,t,a,l,r){return ol(t),a=vo(e,t,a,l,void 0,r),l=jo(),e!==null&&!Be?(No(e,t,r),ta(e,t,r)):(he&&l&&eo(t),t.flags|=1,We(e,t,a,r),t.child)}function Cd(e,t,a,l,r,s){return ol(t),t.updateQueue=null,a=D0(t,l,a,r),k0(e),l=jo(),e!==null&&!Be?(No(e,t,s),ta(e,t,s)):(he&&l&&eo(t),t.flags|=1,We(e,t,a,s),t.child)}function Xd(e,t,a,l,r){if(ol(t),t.stateNode===null){var s=nl,o=a.contextType;typeof o=="object"&&o!==null&&(s=$e(o)),s=new a(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Oo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},fo(t),o=a.contextType,s.context=typeof o=="object"&&o!==null?$e(o):nl,s.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(_o(t,a,o,l),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&Oo.enqueueReplaceState(s,s.state,null),Dn(t,l,s,r),kn(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var d=t.memoizedProps,x=hl(a,d);s.props=x;var T=s.context,C=a.contextType;o=nl,typeof C=="object"&&C!==null&&(o=$e(C));var D=a.getDerivedStateFromProps;C=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,C||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d||T!==o)&&bd(t,s,l,o),Ea=!1;var Y=t.memoizedState;s.state=Y,Dn(t,l,s,r),kn(),T=t.memoizedState,d||Y!==T||Ea?(typeof D=="function"&&(_o(t,a,D,l),T=t.memoizedState),(x=Ea||xd(t,a,x,l,Y,T,o))?(C||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),s.props=l,s.state=T,s.context=o,l=x):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,mo(e,t),o=t.memoizedProps,C=hl(a,o),s.props=C,D=t.pendingProps,Y=s.context,T=a.contextType,x=nl,typeof T=="object"&&T!==null&&(x=$e(T)),d=a.getDerivedStateFromProps,(T=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==D||Y!==x)&&bd(t,s,l,x),Ea=!1,Y=t.memoizedState,s.state=Y,Dn(t,l,s,r),kn();var z=t.memoizedState;o!==D||Y!==z||Ea||e!==null&&e.dependencies!==null&&$r(e.dependencies)?(typeof d=="function"&&(_o(t,a,d,l),z=t.memoizedState),(C=Ea||xd(t,a,C,l,Y,z,x)||e!==null&&e.dependencies!==null&&$r(e.dependencies))?(T||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,z,x),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,z,x)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=z),s.props=l,s.state=z,s.context=x,l=C):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,hs(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=fl(t,e.child,null,r),t.child=fl(t,null,a,r)):We(e,t,a,r),t.memoizedState=s.state,e=t.child):e=ta(e,t,r),e}function kd(e,t,a,l){return sl(),t.flags|=256,We(e,t,a,l),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lo(e){return{baseLanes:e,cachePool:N0()}}function qo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Yt),e}function Dd(e,t,a){var l=t.pendingProps,r=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),o&&(r=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(r?Ya(t):za(),(e=ze)?(e=qf(e,kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gt!==null?{id:Z,overflow:W}:null,retryLane:536870912,hydrationErrors:null},a=Ii(e),a.return=t,t.child=a,Ke=t,ze=null)):e=null,e===null)throw wa(t);return Eu(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,r?(za(),r=t.mode,d=gs({mode:"hidden",children:d},r),l=va(l,r,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=Lo(a),l.childLanes=qo(e,o,a),t.memoizedState=Bo,Un(null,l)):(Ya(t),Go(t,d))}var x=e.memoizedState;if(x!==null&&(d=x.dehydrated,d!==null)){if(s)t.flags&256?(Ya(t),t.flags&=-257,t=Qo(e,t,a)):t.memoizedState!==null?(za(),t.child=e.child,t.flags|=128,t=null):(za(),d=l.fallback,r=t.mode,l=gs({mode:"visible",children:l.children},r),d=va(d,r,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,fl(t,e.child,null,a),l=t.child,l.memoizedState=Lo(a),l.childLanes=qo(e,o,a),t.memoizedState=Bo,t=Un(null,l));else if(Ya(t),Eu(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var T=o.dgst;o=T,l=Error(u(419)),l.stack="",l.digest=o,An({value:l,source:null,stack:null}),t=Qo(e,t,a)}else if(Be||_l(e,t,a,!1),o=(a&e.childLanes)!==0,Be||o){if(o=Ye,o!==null&&(l=ri(o,a),l!==0&&l!==x.retryLane))throw x.retryLane=l,ya(e,l),xt(o,e,l),Uo;Su(d)||Ss(),t=Qo(e,t,a)}else Su(d)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,ze=Rt(d.nextSibling),Ke=t,he=!0,Na=null,kt=!1,e!==null&&p0(t,e),t=Go(t,l.children),t.flags|=4096);return t}return r?(za(),d=l.fallback,r=t.mode,x=e.child,T=x.sibling,l=qt(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,T!==null?d=qt(T,d):(d=va(d,r,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,Un(null,l),l=t.child,d=e.child.memoizedState,d===null?d=Lo(a):(r=d.cachePool,r!==null?(x=Ue._currentValue,r=r.parent!==x?{parent:x,pool:x}:r):r=N0(),d={baseLanes:d.baseLanes|a,cachePool:r}),l.memoizedState=d,l.childLanes=qo(e,o,a),t.memoizedState=Bo,Un(e.child,l)):(Ya(t),a=e.child,e=a.sibling,a=qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Go(e,t){return t=gs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gs(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function Qo(e,t,a){return fl(t,e.child,null,a),e=Go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ro(e.return,t,a)}function Vo(e,t,a,l,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r,treeForkCount:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=r,o.treeForkCount=s)}function _d(e,t,a){var l=t.pendingProps,r=l.revealOrder,s=l.tail;l=l.children;var o=Oe.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,L(Oe,o),We(e,t,l,a),l=he?rl:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rd(e,a,t);else if(e.tag===19)Rd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&ls(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),Vo(t,!1,r,a,s,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ls(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Vo(t,!0,a,null,s,l);break;case"together":Vo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ta(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(_l(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Jo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$r(e)))}function Th(e,t,a){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),Sa(t,Ue,e.memoizedState.cache),sl();break;case 27:case 5:bl(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,bo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Dd(e,t,a):(Ya(t),e=ta(e,t,a),e!==null?e.sibling:null);Ya(t);break;case 19:var r=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(_l(e,t,a,!1),l=(a&t.childLanes)!==0),r){if(l)return _d(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),L(Oe,Oe.current),l)break;return null;case 22:return t.lanes=0,Yd(e,t,a,t.pendingProps);case 24:Sa(t,Ue,e.memoizedState.cache)}return ta(e,t,a)}function Od(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Jo(e,a)&&(t.flags&128)===0)return Be=!1,Th(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,he&&(t.flags&1048576)!==0&&g0(t,rl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=cl(t.elementType),t.type=e,typeof e=="function")Vr(e)?(l=hl(e,l),t.tag=1,t=Xd(null,t,e,l,a)):(t.tag=0,t=Ho(null,t,e,l,a));else{if(e!=null){var r=e.$$typeof;if(r===G){t.tag=11,t=Ed(null,t,e,l,a);break e}else if(r===P){t.tag=14,t=Td(null,t,e,l,a);break e}}throw t=bt(e)||e,Error(u(306,t,""))}}return t;case 0:return Ho(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,r=hl(l,t.pendingProps),Xd(e,t,l,r,a);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var s=t.memoizedState;r=s.element,mo(e,t),Dn(t,l,null,a);var o=t.memoizedState;if(l=o.cache,Sa(t,Ue,l),l!==s.cache&&so(t,[Ue],a,!0),kn(),l=o.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=kd(e,t,l,a);break e}else if(l!==r){r=wt(Error(u(424)),t),An(r),t=kd(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=Rt(e.firstChild),Ke=t,he=!0,Na=null,kt=!0,a=Y0(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(sl(),l===r){t=ta(e,t,a);break e}We(e,t,l,a)}t=t.child}return t;case 26:return hs(e,t),e===null?(a=$f(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,l=Cs(ie.current).createElement(a),l[Qe]=t,l[at]=e,Fe(l,a,e),qe(l),t.stateNode=l):t.memoizedState=$f(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return bl(t),e===null&&he&&(l=t.stateNode=Vf(t.type,t.pendingProps,ie.current),Ke=t,kt=!0,r=ze,Oa(t.type)?(Tu=r,ze=Rt(l.firstChild)):ze=r),We(e,t,t.pendingProps.children,a),hs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((r=l=ze)&&(l=ag(l,t.type,t.pendingProps,kt),l!==null?(t.stateNode=l,Ke=t,ze=Rt(l.firstChild),kt=!1,r=!0):r=!1),r||wa(t)),bl(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,ju(r,s)?l=null:o!==null&&ju(r,o)&&(t.flags|=32),t.memoizedState!==null&&(r=vo(e,t,xh,null,null,a),er._currentValue=r),hs(e,t),We(e,t,l,a),t.child;case 6:return e===null&&he&&((e=a=ze)&&(a=lg(a,t.pendingProps,kt),a!==null?(t.stateNode=a,Ke=t,ze=null,e=!0):e=!1),e||wa(t)),null;case 13:return Dd(e,t,a);case 4:return Pe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=fl(t,null,l,a):We(e,t,l,a),t.child;case 11:return Ed(e,t,t.type,t.pendingProps,a);case 7:return We(e,t,t.pendingProps,a),t.child;case 8:return We(e,t,t.pendingProps.children,a),t.child;case 12:return We(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Sa(t,t.type,l.value),We(e,t,l.children,a),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,ol(t),r=$e(r),l=l(r),t.flags|=1,We(e,t,l,a),t.child;case 14:return Td(e,t,t.type,t.pendingProps,a);case 15:return Ad(e,t,t.type,t.pendingProps,a);case 19:return _d(e,t,a);case 31:return Eh(e,t,a);case 22:return Yd(e,t,a,t.pendingProps);case 24:return ol(t),l=$e(Ue),e===null?(r=uo(),r===null&&(r=Ye,s=io(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=a),r=s),t.memoizedState={parent:l,cache:r},fo(t),Sa(t,Ue,r)):((e.lanes&a)!==0&&(mo(e,t),Dn(t,null,null,a),kn()),r=e.memoizedState,s=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Sa(t,Ue,l)):(l=s.cache,Sa(t,Ue,l),l!==r.cache&&so(t,[Ue],a,!0))),We(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function aa(e){e.flags|=4}function Ko(e,t,a,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(df())e.flags|=8192;else throw dl=Pr,co}else e.flags&=-16777217}function Zd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!em(t))if(df())e.flags|=8192;else throw dl=Pr,co}function ps(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ai():536870912,e.lanes|=t,Kl|=t)}function Hn(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Ah(e,t,a){var l=t.pendingProps;switch(to(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),It(Ue),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rl(t)?aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lo())),Me(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(aa(t),s!==null?(Me(t),Zd(t,s)):(Me(t),Ko(t,r,null,l,a))):s?s!==e.memoizedState?(aa(t),Me(t),Zd(t,s)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&aa(t),Me(t),Ko(t,r,e,l,a)),null;case 27:if(yl(t),a=ie.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Me(t),null}e=K.current,Rl(t)?x0(t):(e=Vf(r,l,a),t.stateNode=e,aa(t))}return Me(t),null;case 5:if(yl(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Me(t),null}if(s=K.current,Rl(t))x0(t);else{var o=Cs(ie.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?o.createElement(r,{is:l.is}):o.createElement(r)}}s[Qe]=t,s[at]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=s;e:switch(Fe(s,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&aa(t)}}return Me(t),Ko(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ie.current,Rl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,r=Ke,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Rf(e.nodeValue,a)),e||wa(t,!0)}else e=Cs(e).createTextNode(l),e[Qe]=t,t.stateNode=e}return Me(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Rl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Qe]=t}else sl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else a=lo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Tt(t),t):(Tt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Me(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Rl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[Qe]=t}else sl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),r=!1}else r=lo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Tt(t),t):(Tt(t),null)}return Tt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==r&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ps(t,t.updateQueue),Me(t),null);case 4:return ke(),e===null&&pu(t.stateNode.containerInfo),Me(t),null;case 10:return It(t.type),Me(t),null;case 19:if(_(Oe),l=t.memoizedState,l===null)return Me(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Hn(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ls(e),s!==null){for(t.flags|=128,Hn(l,!1),e=s.updateQueue,t.updateQueue=e,ps(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Fi(a,e),a=a.sibling;return L(Oe,Oe.current&1|2),he&&St(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&st()>js&&(t.flags|=128,r=!0,Hn(l,!1),t.lanes=4194304)}else{if(!r)if(e=ls(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ps(t,e),Hn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!he)return Me(t),null}else 2*st()-l.renderingStartTime>js&&a!==536870912&&(t.flags|=128,r=!0,Hn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=st(),e.sibling=null,a=Oe.current,L(Oe,r?a&1|2:a&1),he&&St(t,l.treeForkCount),e):(Me(t),null);case 22:case 23:return Tt(t),xo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&ps(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&_(ul),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),It(Ue),Me(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Yh(e,t){switch(to(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return It(Ue),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yl(t),null;case 31:if(t.memoizedState!==null){if(Tt(t),t.alternate===null)throw Error(u(340));sl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Tt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));sl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Oe),null;case 4:return ke(),null;case 10:return It(t.type),null;case 22:case 23:return Tt(t),xo(),e!==null&&_(ul),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return It(Ue),null;case 25:return null;default:return null}}function Ud(e,t){switch(to(t),t.tag){case 3:It(Ue),ke();break;case 26:case 27:case 5:yl(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&Tt(t);break;case 13:Tt(t);break;case 19:_(Oe);break;case 10:It(t.type);break;case 22:case 23:Tt(t),xo(),e!==null&&_(ul);break;case 24:It(Ue)}}function Bn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var s=a.create,o=a.inst;l=s(),o.destroy=l}a=a.next}while(a!==r)}}catch(d){we(t,t.return,d)}}function Ma(e,t,a){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var s=r.next;l=s;do{if((l.tag&e)===e){var o=l.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,r=t;var x=a,T=d;try{T()}catch(C){we(r,x,C)}}}l=l.next}while(l!==s)}}catch(C){we(t,t.return,C)}}function Hd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{M0(t,a)}catch(l){we(e,e.return,l)}}}function Bd(e,t,a){a.props=hl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){we(e,t,l)}}function Ln(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){we(e,t,r)}}function Qt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){we(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){we(e,t,r)}else a.current=null}function Ld(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){we(e,e.return,r)}}function $o(e,t,a){try{var l=e.stateNode;Wh(l,e.type,a,t),l[at]=t}catch(r){we(e,e.return,r)}}function qd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Wo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Bt));else if(l!==4&&(l===27&&Oa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Fo(e,t,a),e=e.sibling;e!==null;)Fo(e,t,a),e=e.sibling}function xs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(xs(e,t,a),e=e.sibling;e!==null;)xs(e,t,a),e=e.sibling}function Gd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Fe(t,l,a),t[Qe]=e,t[at]=a}catch(s){we(e,e.return,s)}}var la=!1,Le=!1,Io=!1,Qd=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function zh(e,t){if(e=e.containerInfo,yu=Zs,e=Li(e),Ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var o=0,d=-1,x=-1,T=0,C=0,D=e,Y=null;t:for(;;){for(var z;D!==a||r!==0&&D.nodeType!==3||(d=o+r),D!==s||l!==0&&D.nodeType!==3||(x=o+l),D.nodeType===3&&(o+=D.nodeValue.length),(z=D.firstChild)!==null;)Y=D,D=z;for(;;){if(D===e)break t;if(Y===a&&++T===r&&(d=o),Y===s&&++C===l&&(x=o),(z=D.nextSibling)!==null)break;D=Y,Y=D.parentNode}D=z}a=d===-1||x===-1?null:{start:d,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(vu={focusedElem:e,selectionRange:a},Zs=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,r=s.memoizedProps,s=s.memoizedState,l=a.stateNode;try{var J=hl(a.type,r);e=l.getSnapshotBeforeUpdate(J,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){we(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)wu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function Vd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),l&4&&Bn(5,a);break;case 1:if(ra(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){we(a,a.return,o)}else{var r=hl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){we(a,a.return,o)}}l&64&&Hd(a),l&512&&Ln(a,a.return);break;case 3:if(ra(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{M0(e,t)}catch(o){we(a,a.return,o)}}break;case 27:t===null&&l&4&&Gd(a);case 26:case 5:ra(e,a),t===null&&l&4&&Ld(a),l&512&&Ln(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),l&4&&$d(e,a);break;case 13:ra(e,a),l&4&&Wd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zh.bind(null,a),ng(e,a))));break;case 22:if(l=a.memoizedState!==null||la,!l){t=t!==null&&t.memoizedState!==null||Le,r=la;var s=Le;la=l,(Le=t)&&!s?sa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),la=r,Le=s}break;case 30:break;default:ra(e,a)}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,mt=!1;function na(e,t,a){for(a=a.child;a!==null;)Kd(e,t,a),a=a.sibling}function Kd(e,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(vl,a)}catch{}switch(a.tag){case 26:Le||Qt(a,t),na(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||Qt(a,t);var l=Ce,r=mt;Oa(a.type)&&(Ce=a.stateNode,mt=!1),na(e,t,a),Fn(a.stateNode),Ce=l,mt=r;break;case 5:Le||Qt(a,t);case 6:if(l=Ce,r=mt,Ce=null,na(e,t,a),Ce=l,mt=r,Ce!==null)if(mt)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(a.stateNode)}catch(s){we(a,t,s)}else try{Ce.removeChild(a.stateNode)}catch(s){we(a,t,s)}break;case 18:Ce!==null&&(mt?(e=Ce,Bf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),an(e)):Bf(Ce,a.stateNode));break;case 4:l=Ce,r=mt,Ce=a.stateNode.containerInfo,mt=!0,na(e,t,a),Ce=l,mt=r;break;case 0:case 11:case 14:case 15:Ma(2,a,t),Le||Ma(4,a,t),na(e,t,a);break;case 1:Le||(Qt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Bd(a,t,l)),na(e,t,a);break;case 21:na(e,t,a);break;case 22:Le=(l=Le)||a.memoizedState!==null,na(e,t,a),Le=l;break;default:na(e,t,a)}}function $d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{an(e)}catch(a){we(t,t.return,a)}}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{an(e)}catch(a){we(t,t.return,a)}}function Mh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qd),t;default:throw Error(u(435,e.tag))}}function bs(e,t){var a=Mh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var r=Uh.bind(null,e,l);l.then(r,r)}})}function ht(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],s=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Oa(d.type)){Ce=d.stateNode,mt=!1;break e}break;case 5:Ce=d.stateNode,mt=!1;break e;case 3:case 4:Ce=d.stateNode.containerInfo,mt=!0;break e}d=d.return}if(Ce===null)throw Error(u(160));Kd(s,o,r),Ce=null,mt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fd(t,e),t=t.sibling}var Zt=null;function Fd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),gt(e),l&4&&(Ma(3,e,e.return),Bn(3,e),Ma(5,e,e.return));break;case 1:ht(t,e),gt(e),l&512&&(Le||a===null||Qt(a,a.return)),l&64&&la&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=Zt;if(ht(t,e),gt(e),l&512&&(Le||a===null||Qt(a,a.return)),l&4){var s=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":s=r.getElementsByTagName("title")[0],(!s||s[wl]||s[Qe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(l),r.head.insertBefore(s,r.querySelector("head > title"))),Fe(s,l,a),s[Qe]=e,qe(s),l=s;break e;case"link":var o=If("link","href",r).get(l+(a.href||""));if(o){for(var d=0;d<o.length;d++)if(s=o[d],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(d,1);break t}}s=r.createElement(l),Fe(s,l,a),r.head.appendChild(s);break;case"meta":if(o=If("meta","content",r).get(l+(a.content||""))){for(d=0;d<o.length;d++)if(s=o[d],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(d,1);break t}}s=r.createElement(l),Fe(s,l,a),r.head.appendChild(s);break;default:throw Error(u(468,l))}s[Qe]=e,qe(s),l=s}e.stateNode=l}else Pf(r,e.type,e.stateNode);else e.stateNode=Ff(r,l,e.memoizedProps);else s!==l?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,l===null?Pf(r,e.type,e.stateNode):Ff(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&$o(e,e.memoizedProps,a.memoizedProps)}break;case 27:ht(t,e),gt(e),l&512&&(Le||a===null||Qt(a,a.return)),a!==null&&l&4&&$o(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ht(t,e),gt(e),l&512&&(Le||a===null||Qt(a,a.return)),e.flags&32){r=e.stateNode;try{Fa(r,"")}catch(J){we(e,e.return,J)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,$o(e,r,a!==null?a.memoizedProps:r)),l&1024&&(Io=!0);break;case 6:if(ht(t,e),gt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(J){we(e,e.return,J)}}break;case 3:if(Ds=null,r=Zt,Zt=Xs(t.containerInfo),ht(t,e),Zt=r,gt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{an(t.containerInfo)}catch(J){we(e,e.return,J)}Io&&(Io=!1,Id(e));break;case 4:l=Zt,Zt=Xs(e.stateNode.containerInfo),ht(t,e),gt(e),Zt=l;break;case 12:ht(t,e),gt(e);break;case 31:ht(t,e),gt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bs(e,l)));break;case 13:ht(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vs=st()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bs(e,l)));break;case 22:r=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,T=la,C=Le;if(la=T||r,Le=C||x,ht(t,e),Le=C,la=T,gt(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||x||la||Le||gl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(s=x.stateNode,r)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=x.stateNode;var D=x.memoizedProps.style,Y=D!=null&&D.hasOwnProperty("display")?D.display:null;d.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(J){we(x,x.return,J)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=r?"":x.memoizedProps}catch(J){we(x,x.return,J)}}}else if(t.tag===18){if(a===null){x=t;try{var z=x.stateNode;r?Lf(z,!0):Lf(x.stateNode,!1)}catch(J){we(x,x.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,bs(e,a))));break;case 19:ht(t,e),gt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bs(e,l)));break;case 30:break;case 21:break;default:ht(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(qd(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var r=a.stateNode,s=Wo(e);xs(e,s,r);break;case 5:var o=a.stateNode;a.flags&32&&(Fa(o,""),a.flags&=-33);var d=Wo(e);xs(e,d,o);break;case 3:case 4:var x=a.stateNode.containerInfo,T=Wo(e);Fo(e,T,x);break;default:throw Error(u(161))}}catch(C){we(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Id(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Id(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vd(e,t.alternate,t),t=t.sibling}function gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ma(4,t,t.return),gl(t);break;case 1:Qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Bd(t,t.return,a),gl(t);break;case 27:Fn(t.stateNode);case 26:case 5:Qt(t,t.return),gl(t);break;case 22:t.memoizedState===null&&gl(t);break;case 30:gl(t);break;default:gl(t)}e=e.sibling}}function sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:sa(r,s,a),Bn(4,s);break;case 1:if(sa(r,s,a),l=s,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(T){we(l,l.return,T)}if(l=s,r=l.updateQueue,r!==null){var d=l.stateNode;try{var x=r.shared.hiddenCallbacks;if(x!==null)for(r.shared.hiddenCallbacks=null,r=0;r<x.length;r++)z0(x[r],d)}catch(T){we(l,l.return,T)}}a&&o&64&&Hd(s),Ln(s,s.return);break;case 27:Gd(s);case 26:case 5:sa(r,s,a),a&&l===null&&o&4&&Ld(s),Ln(s,s.return);break;case 12:sa(r,s,a);break;case 31:sa(r,s,a),a&&o&4&&$d(r,s);break;case 13:sa(r,s,a),a&&o&4&&Wd(r,s);break;case 22:s.memoizedState===null&&sa(r,s,a),Ln(s,s.return);break;case 30:break;default:sa(r,s,a)}t=t.sibling}}function Po(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yn(a))}function eu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e))}function Ut(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pd(e,t,a,l),t=t.sibling}function Pd(e,t,a,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,a,l),r&2048&&Bn(9,t);break;case 1:Ut(e,t,a,l);break;case 3:Ut(e,t,a,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e)));break;case 12:if(r&2048){Ut(e,t,a,l),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,d=s.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){we(t,t.return,x)}}else Ut(e,t,a,l);break;case 31:Ut(e,t,a,l);break;case 13:Ut(e,t,a,l);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?Ut(e,t,a,l):qn(e,t):s._visibility&2?Ut(e,t,a,l):(s._visibility|=2,Ql(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Po(o,t);break;case 24:Ut(e,t,a,l),r&2048&&eu(t.alternate,t);break;default:Ut(e,t,a,l)}}function Ql(e,t,a,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,o=t,d=a,x=l,T=o.flags;switch(o.tag){case 0:case 11:case 15:Ql(s,o,d,x,r),Bn(8,o);break;case 23:break;case 22:var C=o.stateNode;o.memoizedState!==null?C._visibility&2?Ql(s,o,d,x,r):qn(s,o):(C._visibility|=2,Ql(s,o,d,x,r)),r&&T&2048&&Po(o.alternate,o);break;case 24:Ql(s,o,d,x,r),r&&T&2048&&eu(o.alternate,o);break;default:Ql(s,o,d,x,r)}t=t.sibling}}function qn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,r=l.flags;switch(l.tag){case 22:qn(a,l),r&2048&&Po(l.alternate,l);break;case 24:qn(a,l),r&2048&&eu(l.alternate,l);break;default:qn(a,l)}t=t.sibling}}var Gn=8192;function Vl(e,t,a){if(e.subtreeFlags&Gn)for(e=e.child;e!==null;)ef(e,t,a),e=e.sibling}function ef(e,t,a){switch(e.tag){case 26:Vl(e,t,a),e.flags&Gn&&e.memoizedState!==null&&pg(a,Zt,e.memoizedState,e.memoizedProps);break;case 5:Vl(e,t,a);break;case 3:case 4:var l=Zt;Zt=Xs(e.stateNode.containerInfo),Vl(e,t,a),Zt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Gn,Gn=16777216,Vl(e,t,a),Gn=l):Vl(e,t,a));break;default:Vl(e,t,a)}}function tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Qn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ve=l,lf(l,e)}tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)af(e),e=e.sibling}function af(e){switch(e.tag){case 0:case 11:case 15:Qn(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:Qn(e);break;case 12:Qn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ys(e)):Qn(e);break;default:Qn(e)}}function ys(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ve=l,lf(l,e)}tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ma(8,t,t.return),ys(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ys(t));break;default:ys(t)}e=e.sibling}}function lf(e,t){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:Ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else e:for(a=e;Ve!==null;){l=Ve;var r=l.sibling,s=l.return;if(Jd(l),l===a){Ve=null;break e}if(r!==null){r.return=s,Ve=r;break e}Ve=s}}}var Ch={getCacheForType:function(e){var t=$e(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return $e(Ue).controller.signal}},Xh=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ye=null,ce=null,fe=0,Ne=0,At=null,Ca=!1,Jl=!1,tu=!1,ia=0,Re=0,Xa=0,pl=0,au=0,Yt=0,Kl=0,Vn=null,pt=null,lu=!1,vs=0,nf=0,js=1/0,Ns=null,ka=null,Ge=0,Da=null,$l=null,oa=0,nu=0,ru=null,rf=null,Jn=0,su=null;function zt(){return(ye&2)!==0&&fe!==0?fe&-fe:X.T!==null?fu():si()}function sf(){if(Yt===0)if((fe&536870912)===0||he){var e=un;un<<=1,(un&3932160)===0&&(un=262144),Yt=e}else Yt=536870912;return e=Et.current,e!==null&&(e.flags|=32),Yt}function xt(e,t,a){(e===Ye&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Wl(e,0),Ra(e,fe,Yt,!1)),Nl(e,a),((ye&2)===0||e!==Ye)&&(e===Ye&&((ye&2)===0&&(pl|=a),Re===4&&Ra(e,fe,Yt,!1)),Vt(e))}function of(e,t,a){if((ye&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||jl(e,t),r=l?Rh(e,t):ou(e,t,!0),s=l;do{if(r===0){Jl&&!l&&Ra(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!kh(a)){r=ou(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;r=Vn;var x=d.current.memoizedState.isDehydrated;if(x&&(Wl(d,o).flags|=256),o=ou(d,o,!1),o!==2){if(tu&&!x){d.errorRecoveryDisabledLanes|=s,pl|=s,r=4;break e}s=pt,pt=r,s!==null&&(pt===null?pt=s:pt.push.apply(pt,s))}r=o}if(s=!1,r!==2)continue}}if(r===1){Wl(e,0),Ra(e,t,0,!0);break}e:{switch(l=e,s=r,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ra(l,t,Yt,!Ca);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=vs+300-st(),10<r)){if(Ra(l,t,Yt,!Ca),dn(l,0,!0)!==0)break e;oa=t,l.timeoutHandle=Uf(uf.bind(null,l,a,pt,Ns,lu,t,Yt,pl,Kl,Ca,s,"Throttled",-0,0),r);break e}uf(l,a,pt,Ns,lu,t,Yt,pl,Kl,Ca,s,null,-0,0)}}break}while(!0);Vt(e)}function uf(e,t,a,l,r,s,o,d,x,T,C,D,Y,z){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bt},ef(t,s,D);var J=(s&62914560)===s?vs-st():(s&4194048)===s?nf-st():0;if(J=xg(D,J),J!==null){oa=s,e.cancelPendingCommit=J(xf.bind(null,e,t,s,a,l,r,o,d,x,C,D,null,Y,z)),Ra(e,s,o,!T);return}}xf(e,t,s,a,l,r,o,d,x)}function kh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],s=r.getSnapshot;r=r.value;try{if(!ut(s(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ra(e,t,a,l){t&=~au,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var s=31-ot(r),o=1<<s;l[s]=-1,r&=~o}a!==0&&li(e,a,t)}function ws(){return(ye&6)===0?(Kn(0),!1):!0}function iu(){if(ce!==null){if(Ne===0)var e=ce.return;else e=ce,Ft=il=null,wo(e),Hl=null,Mn=0,e=ce;for(;e!==null;)Ud(e.alternate,e),e=e.return;ce=null}}function Wl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ph(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,iu(),Ye=e,ce=a=qt(e.current,null),fe=t,Ne=0,At=null,Ca=!1,Jl=jl(e,t),tu=!1,Kl=Yt=au=pl=Xa=Re=0,pt=Vn=null,lu=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-ot(l),s=1<<r;t|=e[r],l&=~s}return ia=t,wn(),a}function cf(e,t){ne=null,X.H=Zn,t===Ul||t===Ir?(t=E0(),Ne=3):t===co?(t=E0(),Ne=4):Ne=t===Uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,ce===null&&(Re=1,fs(e,wt(t,e.current)))}function df(){var e=Et.current;return e===null?!0:(fe&4194048)===fe?Dt===null:(fe&62914560)===fe||(fe&536870912)!==0?e===Dt:!1}function ff(){var e=X.H;return X.H=Zn,e===null?Zn:e}function mf(){var e=X.A;return X.A=Ch,e}function Ss(){Re=4,Ca||(fe&4194048)!==fe&&Et.current!==null||(Jl=!0),(Xa&134217727)===0&&(pl&134217727)===0||Ye===null||Ra(Ye,fe,Yt,!1)}function ou(e,t,a){var l=ye;ye|=2;var r=ff(),s=mf();(Ye!==e||fe!==t)&&(Ns=null,Wl(e,t)),t=!1;var o=Re;e:do try{if(Ne!==0&&ce!==null){var d=ce,x=At;switch(Ne){case 8:iu(),o=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var T=Ne;if(Ne=0,At=null,Fl(e,d,x,T),a&&Jl){o=0;break e}break;default:T=Ne,Ne=0,At=null,Fl(e,d,x,T)}}Dh(),o=Re;break}catch(C){cf(e,C)}while(!0);return t&&e.shellSuspendCounter++,Ft=il=null,ye=l,X.H=r,X.A=s,ce===null&&(Ye=null,fe=0,wn()),o}function Dh(){for(;ce!==null;)hf(ce)}function Rh(e,t){var a=ye;ye|=2;var l=ff(),r=mf();Ye!==e||fe!==t?(Ns=null,js=st()+500,Wl(e,t)):Jl=jl(e,t);e:do try{if(Ne!==0&&ce!==null){t=ce;var s=At;t:switch(Ne){case 1:Ne=0,At=null,Fl(e,t,s,1);break;case 2:case 9:if(w0(s)){Ne=0,At=null,gf(t);break}t=function(){Ne!==2&&Ne!==9||Ye!==e||(Ne=7),Vt(e)},s.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:w0(s)?(Ne=0,At=null,gf(t)):(Ne=0,At=null,Fl(e,t,s,7));break;case 5:var o=null;switch(ce.tag){case 26:o=ce.memoizedState;case 5:case 27:var d=ce;if(o?em(o):d.stateNode.complete){Ne=0,At=null;var x=d.sibling;if(x!==null)ce=x;else{var T=d.return;T!==null?(ce=T,Es(T)):ce=null}break t}}Ne=0,At=null,Fl(e,t,s,5);break;case 6:Ne=0,At=null,Fl(e,t,s,6);break;case 8:iu(),Re=6;break e;default:throw Error(u(462))}}_h();break}catch(C){cf(e,C)}while(!0);return Ft=il=null,X.H=l,X.A=r,ye=a,ce!==null?0:(Ye=null,fe=0,wn(),Re)}function _h(){for(;ce!==null&&!uc();)hf(ce)}function hf(e){var t=Od(e.alternate,e,ia);e.memoizedProps=e.pendingProps,t===null?Es(e):ce=t}function gf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Cd(a,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=Cd(a,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:wo(t);default:Ud(a,t),t=ce=Fi(t,ia),t=Od(a,t,ia)}e.memoizedProps=e.pendingProps,t===null?Es(e):ce=t}function Fl(e,t,a,l){Ft=il=null,wo(t),Hl=null,Mn=0;var r=t.return;try{if(Sh(e,r,t,a,fe)){Re=1,fs(e,wt(a,e.current)),ce=null;return}}catch(s){if(r!==null)throw ce=r,s;Re=1,fs(e,wt(a,e.current)),ce=null;return}t.flags&32768?(he||l===1?e=!0:Jl||(fe&536870912)!==0?e=!1:(Ca=e=!0,(l===2||l===9||l===3||l===6)&&(l=Et.current,l!==null&&l.tag===13&&(l.flags|=16384))),pf(t,e)):Es(t)}function Es(e){var t=e;do{if((t.flags&32768)!==0){pf(t,Ca);return}e=t.return;var a=Ah(t.alternate,t,ia);if(a!==null){ce=a;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);Re===0&&(Re=5)}function pf(e,t){do{var a=Yh(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);Re=6,ce=null}function xf(e,t,a,l,r,s,o,d,x){e.cancelPendingCommit=null;do Ts();while(Ge!==0);if((ye&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Gr,yc(e,a,s,o,d,x),e===Ye&&(ce=Ye=null,fe=0),$l=t,Da=e,oa=a,nu=s,ru=r,rf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hh(sn,function(){return Nf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=X.T,X.T=null,r=B.p,B.p=2,o=ye,ye|=4;try{zh(e,t,a)}finally{ye=o,B.p=r,X.T=l}}Ge=1,bf(),yf(),vf()}}function bf(){if(Ge===1){Ge=0;var e=Da,t=$l,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var l=B.p;B.p=2;var r=ye;ye|=4;try{Fd(t,e);var s=vu,o=Li(e.containerInfo),d=s.focusedElem,x=s.selectionRange;if(o!==d&&d&&d.ownerDocument&&Bi(d.ownerDocument.documentElement,d)){if(x!==null&&Ur(d)){var T=x.start,C=x.end;if(C===void 0&&(C=T),"selectionStart"in d)d.selectionStart=T,d.selectionEnd=Math.min(C,d.value.length);else{var D=d.ownerDocument||document,Y=D&&D.defaultView||window;if(Y.getSelection){var z=Y.getSelection(),J=d.textContent.length,ee=Math.min(x.start,J),Ae=x.end===void 0?ee:Math.min(x.end,J);!z.extend&&ee>Ae&&(o=Ae,Ae=ee,ee=o);var N=Hi(d,ee),y=Hi(d,Ae);if(N&&y&&(z.rangeCount!==1||z.anchorNode!==N.node||z.anchorOffset!==N.offset||z.focusNode!==y.node||z.focusOffset!==y.offset)){var E=D.createRange();E.setStart(N.node,N.offset),z.removeAllRanges(),ee>Ae?(z.addRange(E),z.extend(y.node,y.offset)):(E.setEnd(y.node,y.offset),z.addRange(E))}}}}for(D=[],z=d;z=z.parentNode;)z.nodeType===1&&D.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<D.length;d++){var k=D[d];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Zs=!!yu,vu=yu=null}finally{ye=r,B.p=l,X.T=a}}e.current=t,Ge=2}}function yf(){if(Ge===2){Ge=0;var e=Da,t=$l,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var l=B.p;B.p=2;var r=ye;ye|=4;try{Vd(e,t.alternate,t)}finally{ye=r,B.p=l,X.T=a}}Ge=3}}function vf(){if(Ge===4||Ge===3){Ge=0,cc();var e=Da,t=$l,a=oa,l=rf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,$l=Da=null,jf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ka=null),vr(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(vl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=X.T,r=B.p,B.p=2,X.T=null;try{for(var s=e.onRecoverableError,o=0;o<l.length;o++){var d=l[o];s(d.value,{componentStack:d.stack})}}finally{X.T=t,B.p=r}}(oa&3)!==0&&Ts(),Vt(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===su?Jn++:(Jn=0,su=e):Jn=0,Kn(0)}}function jf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yn(t)))}function Ts(){return bf(),yf(),vf(),Nf()}function Nf(){if(Ge!==5)return!1;var e=Da,t=nu;nu=0;var a=vr(oa),l=X.T,r=B.p;try{B.p=32>a?32:a,X.T=null,a=ru,ru=null;var s=Da,o=oa;if(Ge=0,$l=Da=null,oa=0,(ye&6)!==0)throw Error(u(331));var d=ye;if(ye|=4,af(s.current),Pd(s,s.current,o,a),ye=d,Kn(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(vl,s)}catch{}return!0}finally{B.p=r,X.T=l,jf(e,t)}}function wf(e,t,a){t=wt(a,t),t=Zo(e.stateNode,t,2),e=Aa(e,t,2),e!==null&&(Nl(e,2),Vt(e))}function we(e,t,a){if(e.tag===3)wf(e,e,a);else for(;t!==null;){if(t.tag===3){wf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ka===null||!ka.has(l))){e=wt(a,e),a=wd(2),l=Aa(t,a,2),l!==null&&(Sd(a,l,t,e),Nl(l,2),Vt(l));break}}t=t.return}}function uu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Xh;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(a)||(tu=!0,r.add(a),e=Oh.bind(null,e,t,a),t.then(e,e))}function Oh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(fe&a)===a&&(Re===4||Re===3&&(fe&62914560)===fe&&300>st()-vs?(ye&2)===0&&Wl(e,0):au|=a,Kl===fe&&(Kl=0)),Vt(e)}function Sf(e,t){t===0&&(t=ai()),e=ya(e,t),e!==null&&(Nl(e,t),Vt(e))}function Zh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Sf(e,a)}function Uh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Sf(e,a)}function Hh(e,t){return pr(e,t)}var As=null,Il=null,cu=!1,Ys=!1,du=!1,_a=0;function Vt(e){e!==Il&&e.next===null&&(Il===null?As=Il=e:Il=Il.next=e),Ys=!0,cu||(cu=!0,Lh())}function Kn(e,t){if(!du&&Ys){du=!0;do for(var a=!1,l=As;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var s=0;else{var o=l.suspendedLanes,d=l.pingedLanes;s=(1<<31-ot(42|e)+1)-1,s&=r&~(o&~d),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Yf(l,s))}else s=fe,s=dn(l,l===Ye?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||jl(l,s)||(a=!0,Yf(l,s));l=l.next}while(a);du=!1}}function Bh(){Ef()}function Ef(){Ys=cu=!1;var e=0;_a!==0&&Ih()&&(e=_a);for(var t=st(),a=null,l=As;l!==null;){var r=l.next,s=Tf(l,t);s===0?(l.next=null,a===null?As=r:a.next=r,r===null&&(Il=a)):(a=l,(e!==0||(s&3)!==0)&&(Ys=!0)),l=r}Ge!==0&&Ge!==5||Kn(e),_a!==0&&(_a=0)}function Tf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-ot(s),d=1<<o,x=r[o];x===-1?((d&a)===0||(d&l)!==0)&&(r[o]=bc(d,t)):x<=t&&(e.expiredLanes|=d),s&=~d}if(t=Ye,a=fe,a=dn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&xr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&xr(l),vr(a)){case 2:case 8:a=ei;break;case 32:a=sn;break;case 268435456:a=ti;break;default:a=sn}return l=Af.bind(null,e),a=pr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&xr(l),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ts()&&e.callbackNode!==a)return null;var l=fe;return l=dn(e,e===Ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(of(e,l,t),Tf(e,st()),e.callbackNode!=null&&e.callbackNode===a?Af.bind(null,e):null)}function Yf(e,t){if(Ts())return null;of(e,t,!0)}function Lh(){eg(function(){(ye&6)!==0?pr(Ps,Bh):Ef()})}function fu(){if(_a===0){var e=Ol;e===0&&(e=on,on<<=1,(on&261888)===0&&(on=256)),_a=e}return _a}function zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gn(""+e)}function Mf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function qh(e,t,a,l,r){if(t==="submit"&&a&&a.stateNode===r){var s=zf((r[at]||null).action),o=l.submitter;o&&(t=(t=o[at]||null)?zf(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var d=new yn("action","action",null,l,r);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(_a!==0){var x=o?Mf(r,o):new FormData(r);Xo(a,{pending:!0,data:x,method:r.method,action:s},null,x)}}else typeof s=="function"&&(d.preventDefault(),x=o?Mf(r,o):new FormData(r),Xo(a,{pending:!0,data:x,method:r.method,action:s},s,x))},currentTarget:r}]})}}for(var mu=0;mu<qr.length;mu++){var hu=qr[mu],Gh=hu.toLowerCase(),Qh=hu[0].toUpperCase()+hu.slice(1);Xt(Gh,"on"+Qh)}Xt(Qi,"onAnimationEnd"),Xt(Vi,"onAnimationIteration"),Xt(Ji,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(d0,"onTransitionRun"),Xt(f0,"onTransitionStart"),Xt(m0,"onTransitionCancel"),Xt(Ki,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($n));function Cf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var o=l.length-1;0<=o;o--){var d=l[o],x=d.instance,T=d.currentTarget;if(d=d.listener,x!==s&&r.isPropagationStopped())break e;s=d,r.currentTarget=T;try{s(r)}catch(C){Nn(C)}r.currentTarget=null,s=x}else for(o=0;o<l.length;o++){if(d=l[o],x=d.instance,T=d.currentTarget,d=d.listener,x!==s&&r.isPropagationStopped())break e;s=d,r.currentTarget=T;try{s(r)}catch(C){Nn(C)}r.currentTarget=null,s=x}}}}function de(e,t){var a=t[jr];a===void 0&&(a=t[jr]=new Set);var l=e+"__bubble";a.has(l)||(Xf(t,e,2,!1),a.add(l))}function gu(e,t,a){var l=0;t&&(l|=4),Xf(a,e,l,t)}var zs="_reactListening"+Math.random().toString(36).slice(2);function pu(e){if(!e[zs]){e[zs]=!0,ui.forEach(function(a){a!=="selectionchange"&&(Vh.has(a)||gu(a,!1,e),gu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zs]||(t[zs]=!0,gu("selectionchange",!1,t))}}function Xf(e,t,a,l){switch(im(t)){case 2:var r=vg;break;case 8:r=jg;break;default:r=Cu}a=r.bind(null,t,a,e),r=void 0,!Mr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function xu(e,t,a,l,r){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var d=l.stateNode.containerInfo;if(d===r)break;if(o===4)for(o=l.return;o!==null;){var x=o.tag;if((x===3||x===4)&&o.stateNode.containerInfo===r)return;o=o.return}for(;d!==null;){if(o=Va(d),o===null)return;if(x=o.tag,x===5||x===6||x===26||x===27){l=s=o;continue e}d=d.parentNode}}l=l.return}ji(function(){var T=s,C=Yr(a),D=[];e:{var Y=$i.get(e);if(Y!==void 0){var z=yn,J=e;switch(e){case"keypress":if(xn(a)===0)break e;case"keydown":case"keyup":z=qc;break;case"focusin":J="focus",z=Dr;break;case"focusout":J="blur",z=Dr;break;case"beforeblur":case"afterblur":z=Dr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Si;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Vc;break;case Qi:case Vi:case Ji:z=Dc;break;case Ki:z=Kc;break;case"scroll":case"scrollend":z=zc;break;case"wheel":z=Wc;break;case"copy":case"cut":case"paste":z=_c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Ti;break;case"toggle":case"beforetoggle":z=Ic}var ee=(t&4)!==0,Ae=!ee&&(e==="scroll"||e==="scrollend"),N=ee?Y!==null?Y+"Capture":null:Y;ee=[];for(var y=T,E;y!==null;){var k=y;if(E=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||E===null||N===null||(k=El(y,N),k!=null&&ee.push(Wn(y,k,E))),Ae)break;y=y.return}0<ee.length&&(Y=new z(Y,J,null,a,C),D.push({event:Y,listeners:ee}))}}if((t&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",Y&&a!==Ar&&(J=a.relatedTarget||a.fromElement)&&(Va(J)||J[Qa]))break e;if((z||Y)&&(Y=C.window===C?C:(Y=C.ownerDocument)?Y.defaultView||Y.parentWindow:window,z?(J=a.relatedTarget||a.toElement,z=T,J=J?Va(J):null,J!==null&&(Ae=p(J),ee=J.tag,J!==Ae||ee!==5&&ee!==27&&ee!==6)&&(J=null)):(z=null,J=T),z!==J)){if(ee=Si,k="onMouseLeave",N="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Ti,k="onPointerLeave",N="onPointerEnter",y="pointer"),Ae=z==null?Y:Sl(z),E=J==null?Y:Sl(J),Y=new ee(k,y+"leave",z,a,C),Y.target=Ae,Y.relatedTarget=E,k=null,Va(C)===T&&(ee=new ee(N,y+"enter",J,a,C),ee.target=E,ee.relatedTarget=Ae,k=ee),Ae=k,z&&J)t:{for(ee=Jh,N=z,y=J,E=0,k=N;k;k=ee(k))E++;k=0;for(var I=y;I;I=ee(I))k++;for(;0<E-k;)N=ee(N),E--;for(;0<k-E;)y=ee(y),k--;for(;E--;){if(N===y||y!==null&&N===y.alternate){ee=N;break t}N=ee(N),y=ee(y)}ee=null}else ee=null;z!==null&&kf(D,Y,z,ee,!1),J!==null&&Ae!==null&&kf(D,Ae,J,ee,!0)}}e:{if(Y=T?Sl(T):window,z=Y.nodeName&&Y.nodeName.toLowerCase(),z==="select"||z==="input"&&Y.type==="file")var pe=Di;else if(Xi(Y))if(Ri)pe=o0;else{pe=s0;var $=r0}else z=Y.nodeName,!z||z.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?T&&Tr(T.elementType)&&(pe=Di):pe=i0;if(pe&&(pe=pe(e,T))){ki(D,pe,a,C);break e}$&&$(e,Y,T),e==="focusout"&&T&&Y.type==="number"&&T.memoizedProps.value!=null&&Er(Y,"number",Y.value)}switch($=T?Sl(T):window,e){case"focusin":(Xi($)||$.contentEditable==="true")&&(tl=$,Hr=T,kl=null);break;case"focusout":kl=Hr=tl=null;break;case"mousedown":Br=!0;break;case"contextmenu":case"mouseup":case"dragend":Br=!1,qi(D,a,C);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":qi(D,a,C)}var se;if(_r)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else el?Mi(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Ai&&a.locale!=="ko"&&(el||me!=="onCompositionStart"?me==="onCompositionEnd"&&el&&(se=Ni()):(Wt=C,Cr="value"in Wt?Wt.value:Wt.textContent,el=!0)),$=Ms(T,me),0<$.length&&(me=new Ei(me,e,null,a,C),D.push({event:me,listeners:$}),se?me.data=se:(se=Ci(a),se!==null&&(me.data=se)))),(se=e0?t0(e,a):a0(e,a))&&(me=Ms(T,"onBeforeInput"),0<me.length&&($=new Ei("onBeforeInput","beforeinput",null,a,C),D.push({event:$,listeners:me}),$.data=se)),qh(D,e,T,a,C)}Cf(D,t)})}function Wn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ms(e,t){for(var a=t+"Capture",l=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=El(e,a),r!=null&&l.unshift(Wn(e,r,s)),r=El(e,t),r!=null&&l.push(Wn(e,r,s))),e.tag===3)return l;e=e.return}return[]}function Jh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kf(e,t,a,l,r){for(var s=t._reactName,o=[];a!==null&&a!==l;){var d=a,x=d.alternate,T=d.stateNode;if(d=d.tag,x!==null&&x===l)break;d!==5&&d!==26&&d!==27||T===null||(x=T,r?(T=El(a,s),T!=null&&o.unshift(Wn(a,T,x))):r||(T=El(a,s),T!=null&&o.push(Wn(a,T,x)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Kh=/\r\n?/g,$h=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(Kh,`
`).replace($h,"")}function Rf(e,t){return t=Df(t),Df(e)===t}function Te(e,t,a,l,r,s){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Fa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Fa(e,""+l);break;case"className":mn(e,"class",l);break;case"tabIndex":mn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":mn(e,a,l);break;case"style":yi(e,l,s);break;case"data":if(t!=="object"){mn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=gn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Te(e,t,"name",r.name,r,null),Te(e,t,"formEncType",r.formEncType,r,null),Te(e,t,"formMethod",r.formMethod,r,null),Te(e,t,"formTarget",r.formTarget,r,null)):(Te(e,t,"encType",r.encType,r,null),Te(e,t,"method",r.method,r,null),Te(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=gn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Bt);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=gn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":de("beforetoggle",e),de("toggle",e),fn(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ac.get(a)||a,fn(e,a,l))}}function bu(e,t,a,l,r,s){switch(a){case"style":yi(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Fa(e,l):(typeof l=="number"||typeof l=="bigint")&&Fa(e,""+l);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Bt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ci.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),s=e[at]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof l=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):fn(e,a,l)}}}function Fe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var l=!1,r=!1,s;for(s in a)if(a.hasOwnProperty(s)){var o=a[s];if(o!=null)switch(s){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,s,o,a,null)}}r&&Te(e,t,"srcSet",a.srcSet,a,null),l&&Te(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var d=s=o=r=null,x=null,T=null;for(l in a)if(a.hasOwnProperty(l)){var C=a[l];if(C!=null)switch(l){case"name":r=C;break;case"type":o=C;break;case"checked":x=C;break;case"defaultChecked":T=C;break;case"value":s=C;break;case"defaultValue":d=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:Te(e,t,l,C,a,null)}}gi(e,s,d,x,T,o,r,!1);return;case"select":de("invalid",e),l=o=s=null;for(r in a)if(a.hasOwnProperty(r)&&(d=a[r],d!=null))switch(r){case"value":s=d;break;case"defaultValue":o=d;break;case"multiple":l=d;default:Te(e,t,r,d,a,null)}t=s,a=o,e.multiple=!!l,t!=null?Wa(e,!!l,t,!1):a!=null&&Wa(e,!!l,a,!0);return;case"textarea":de("invalid",e),s=r=l=null;for(o in a)if(a.hasOwnProperty(o)&&(d=a[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":r=d;break;case"children":s=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:Te(e,t,o,d,a,null)}xi(e,l,r,s);return;case"option":for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!=null)&&(x==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Te(e,t,x,l,a,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(l=0;l<$n.length;l++)de($n[l],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,T,l,a,null)}return;default:if(Tr(t)){for(C in a)a.hasOwnProperty(C)&&(l=a[C],l!==void 0&&bu(e,t,C,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&Te(e,t,d,l,a,null))}function Wh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,o=null,d=null,x=null,T=null,C=null;for(z in a){var D=a[z];if(a.hasOwnProperty(z)&&D!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":x=D;default:l.hasOwnProperty(z)||Te(e,t,z,null,l,D)}}for(var Y in l){var z=l[Y];if(D=a[Y],l.hasOwnProperty(Y)&&(z!=null||D!=null))switch(Y){case"type":s=z;break;case"name":r=z;break;case"checked":T=z;break;case"defaultChecked":C=z;break;case"value":o=z;break;case"defaultValue":d=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,t));break;default:z!==D&&Te(e,t,Y,z,l,D)}}Sr(e,o,d,x,T,C,s,r);return;case"select":z=o=d=Y=null;for(s in a)if(x=a[s],a.hasOwnProperty(s)&&x!=null)switch(s){case"value":break;case"multiple":z=x;default:l.hasOwnProperty(s)||Te(e,t,s,null,l,x)}for(r in l)if(s=l[r],x=a[r],l.hasOwnProperty(r)&&(s!=null||x!=null))switch(r){case"value":Y=s;break;case"defaultValue":d=s;break;case"multiple":o=s;default:s!==x&&Te(e,t,r,s,l,x)}t=d,a=o,l=z,Y!=null?Wa(e,!!a,Y,!1):!!l!=!!a&&(t!=null?Wa(e,!!a,t,!0):Wa(e,!!a,a?[]:"",!1));return;case"textarea":z=Y=null;for(d in a)if(r=a[d],a.hasOwnProperty(d)&&r!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Te(e,t,d,null,l,r)}for(o in l)if(r=l[o],s=a[o],l.hasOwnProperty(o)&&(r!=null||s!=null))switch(o){case"value":Y=r;break;case"defaultValue":z=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==s&&Te(e,t,o,r,l,s)}pi(e,Y,z);return;case"option":for(var J in a)Y=a[J],a.hasOwnProperty(J)&&Y!=null&&!l.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Te(e,t,J,null,l,Y));for(x in l)Y=l[x],z=a[x],l.hasOwnProperty(x)&&Y!==z&&(Y!=null||z!=null)&&(x==="selected"?e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol":Te(e,t,x,Y,l,z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)Y=a[ee],a.hasOwnProperty(ee)&&Y!=null&&!l.hasOwnProperty(ee)&&Te(e,t,ee,null,l,Y);for(T in l)if(Y=l[T],z=a[T],l.hasOwnProperty(T)&&Y!==z&&(Y!=null||z!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(u(137,t));break;default:Te(e,t,T,Y,l,z)}return;default:if(Tr(t)){for(var Ae in a)Y=a[Ae],a.hasOwnProperty(Ae)&&Y!==void 0&&!l.hasOwnProperty(Ae)&&bu(e,t,Ae,void 0,l,Y);for(C in l)Y=l[C],z=a[C],!l.hasOwnProperty(C)||Y===z||Y===void 0&&z===void 0||bu(e,t,C,Y,l,z);return}}for(var N in a)Y=a[N],a.hasOwnProperty(N)&&Y!=null&&!l.hasOwnProperty(N)&&Te(e,t,N,null,l,Y);for(D in l)Y=l[D],z=a[D],!l.hasOwnProperty(D)||Y===z||Y==null&&z==null||Te(e,t,D,Y,l,z)}function _f(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var r=a[l],s=r.transferSize,o=r.initiatorType,d=r.duration;if(s&&d&&_f(o)){for(o=0,d=r.responseEnd,l+=1;l<a.length;l++){var x=a[l],T=x.startTime;if(T>d)break;var C=x.transferSize,D=x.initiatorType;C&&_f(D)&&(x=x.responseEnd,o+=C*(x<d?1:(d-T)/(x-T)))}if(--l,t+=8*(s+o)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yu=null,vu=null;function Cs(e){return e.nodeType===9?e:e.ownerDocument}function Of(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ju(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nu=null;function Ih(){var e=window.event;return e&&e.type==="popstate"?e===Nu?!1:(Nu=e,!0):(Nu=null,!1)}var Uf=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(tg)}:Uf;function tg(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Bf(e,t){var a=t,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(r),an(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Fn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fn(a);for(var s=a.firstChild;s;){var o=s.nextSibling,d=s.nodeName;s[wl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=o}}else a==="body"&&Fn(e.ownerDocument.body);a=r}while(a);an(t)}function Lf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function wu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wu(a),Nr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ag(e,t,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function lg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Rt(e.nextSibling),e===null))return null;return e}function qf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function Su(e){return e.data==="$?"||e.data==="$~"}function Eu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ng(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Tu=null;function Gf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Rt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vf(e,t,a){switch(t=Cs(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Fn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nr(e)}var _t=new Map,Jf=new Set;function Xs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=B.d;B.d={f:rg,r:sg,D:ig,C:og,L:ug,m:cg,X:fg,S:dg,M:mg};function rg(){var e=ua.f(),t=ws();return e||t}function sg(e){var t=Ja(e);t!==null&&t.tag===5&&t.type==="form"?ud(t):ua.r(e)}var Pl=typeof document>"u"?null:document;function Kf(e,t,a){var l=Pl;if(l&&typeof t=="string"&&t){var r=jt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Jf.has(r)||(Jf.add(r),e={rel:e,crossOrigin:a,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),Fe(t,"link",e),qe(t),l.head.appendChild(t)))}}function ig(e){ua.D(e),Kf("dns-prefetch",e,null)}function og(e,t){ua.C(e,t),Kf("preconnect",e,t)}function ug(e,t,a){ua.L(e,t,a);var l=Pl;if(l&&e&&t){var r='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+jt(a.imageSizes)+'"]')):r+='[href="'+jt(e)+'"]';var s=r;switch(t){case"style":s=en(e);break;case"script":s=tn(e)}_t.has(s)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),_t.set(s,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(In(s))||t==="script"&&l.querySelector(Pn(s))||(t=l.createElement("link"),Fe(t,"link",e),qe(t),l.head.appendChild(t)))}}function cg(e,t){ua.m(e,t);var a=Pl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+jt(l)+'"][href="'+jt(e)+'"]',s=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=tn(e)}if(!_t.has(s)&&(e=w({rel:"modulepreload",href:e},t),_t.set(s,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Pn(s)))return}l=a.createElement("link"),Fe(l,"link",e),qe(l),a.head.appendChild(l)}}}function dg(e,t,a){ua.S(e,t,a);var l=Pl;if(l&&e){var r=Ka(l).hoistableStyles,s=en(e);t=t||"default";var o=r.get(s);if(!o){var d={loading:0,preload:null};if(o=l.querySelector(In(s)))d.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=_t.get(s))&&Au(e,a);var x=o=l.createElement("link");qe(x),Fe(x,"link",e),x._p=new Promise(function(T,C){x.onload=T,x.onerror=C}),x.addEventListener("load",function(){d.loading|=1}),x.addEventListener("error",function(){d.loading|=2}),d.loading|=4,ks(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:d},r.set(s,o)}}}function fg(e,t){ua.X(e,t);var a=Pl;if(a&&e){var l=Ka(a).hoistableScripts,r=tn(e),s=l.get(r);s||(s=a.querySelector(Pn(r)),s||(e=w({src:e,async:!0},t),(t=_t.get(r))&&Yu(e,t),s=a.createElement("script"),qe(s),Fe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(r,s))}}function mg(e,t){ua.M(e,t);var a=Pl;if(a&&e){var l=Ka(a).hoistableScripts,r=tn(e),s=l.get(r);s||(s=a.querySelector(Pn(r)),s||(e=w({src:e,async:!0,type:"module"},t),(t=_t.get(r))&&Yu(e,t),s=a.createElement("script"),qe(s),Fe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(r,s))}}function $f(e,t,a,l){var r=(r=ie.current)?Xs(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=en(a.href),a=Ka(r).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=en(a.href);var s=Ka(r).hoistableStyles,o=s.get(e);if(o||(r=r.ownerDocument||r,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=r.querySelector(In(e)))&&!s._p&&(o.instance=s,o.state.loading=5),_t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_t.set(e,a),s||hg(r,e,a,o.state))),t&&l===null)throw Error(u(528,""));return o}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=tn(a),a=Ka(r).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function en(e){return'href="'+jt(e)+'"'}function In(e){return'link[rel="stylesheet"]['+e+"]"}function Wf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function hg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Fe(t,"link",a),qe(t),e.head.appendChild(t))}function tn(e){return'[src="'+jt(e)+'"]'}function Pn(e){return"script[async]"+e}function Ff(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+jt(a.href)+'"]');if(l)return t.instance=l,qe(l),l;var r=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Fe(l,"style",r),ks(l,a.precedence,e),t.instance=l;case"stylesheet":r=en(a.href);var s=e.querySelector(In(r));if(s)return t.state.loading|=4,t.instance=s,qe(s),s;l=Wf(a),(r=_t.get(r))&&Au(l,r),s=(e.ownerDocument||e).createElement("link"),qe(s);var o=s;return o._p=new Promise(function(d,x){o.onload=d,o.onerror=x}),Fe(s,"link",l),t.state.loading|=4,ks(s,a.precedence,e),t.instance=s;case"script":return s=tn(a.src),(r=e.querySelector(Pn(s)))?(t.instance=r,qe(r),r):(l=a,(r=_t.get(s))&&(l=w({},a),Yu(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),qe(r),Fe(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ks(l,a.precedence,e));return t.instance}function ks(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,s=r,o=0;o<l.length;o++){var d=l[o];if(d.dataset.precedence===t)s=d;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ds=null;function If(e,t,a){if(Ds===null){var l=new Map,r=Ds=new Map;r.set(a,l)}else r=Ds,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var s=a[r];if(!(s[wl]||s[Qe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var d=l.get(o);d?d.push(s):l.set(o,[s])}}return l}function Pf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function gg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function em(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function pg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=en(l.href),s=t.querySelector(In(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,qe(s);return}s=t.ownerDocument||t,l=Wf(l),(r=_t.get(r))&&Au(l,r),s=s.createElement("link"),qe(s);var o=s;o._p=new Promise(function(d,x){o.onload=d,o.onerror=x}),Fe(s,"link",l),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Rs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var zu=0;function xg(e,t){return e.stylesheets&&e.count===0&&Os(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Os(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&zu===0&&(zu=62500*Fh());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Os(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>zu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function Rs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Os(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _s=null;function Os(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_s=new Map,t.forEach(bg,e),_s=null,Rs.call(e))}function bg(e,t){if(!(t.state.loading&4)){var a=_s.get(e);if(a)var l=a.get(null);else{a=new Map,_s.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var o=r[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}r=t.instance,o=r.getAttribute("data-precedence"),s=a.get(o)||l,s===l&&a.set(null,r),a.set(o,r),this.count++,l=Rs.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var er={$$typeof:q,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function yg(e,t,a,l,r,s,o,d,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.hiddenUpdates=br(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function tm(e,t,a,l,r,s,o,d,x,T,C,D){return e=new yg(e,t,a,o,x,T,C,D,d),t=1,s===!0&&(t|=24),s=ct(3,null,null,t),e.current=s,s.stateNode=e,t=io(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:a,cache:t},fo(s),e}function am(e){return e?(e=nl,e):nl}function lm(e,t,a,l,r,s){r=am(r),l.context===null?l.context=r:l.pendingContext=r,l=Ta(t),l.payload={element:a},s=s===void 0?null:s,s!==null&&(l.callback=s),a=Aa(e,l,t),a!==null&&(xt(a,e,t),Xn(a,e,t))}function nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Mu(e,t){nm(e,t),(e=e.alternate)&&nm(e,t)}function rm(e){if(e.tag===13||e.tag===31){var t=ya(e,67108864);t!==null&&xt(t,e,67108864),Mu(e,67108864)}}function sm(e){if(e.tag===13||e.tag===31){var t=zt();t=yr(t);var a=ya(e,t);a!==null&&xt(a,e,t),Mu(e,t)}}var Zs=!0;function vg(e,t,a,l){var r=X.T;X.T=null;var s=B.p;try{B.p=2,Cu(e,t,a,l)}finally{B.p=s,X.T=r}}function jg(e,t,a,l){var r=X.T;X.T=null;var s=B.p;try{B.p=8,Cu(e,t,a,l)}finally{B.p=s,X.T=r}}function Cu(e,t,a,l){if(Zs){var r=Xu(l);if(r===null)xu(e,t,l,Us,a),om(e,l);else if(wg(r,e,t,a,l))l.stopPropagation();else if(om(e,l),t&4&&-1<Ng.indexOf(e)){for(;r!==null;){var s=Ja(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=ha(s.pendingLanes);if(o!==0){var d=s;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var x=1<<31-ot(o);d.entanglements[1]|=x,o&=~x}Vt(s),(ye&6)===0&&(js=st()+500,Kn(0))}}break;case 31:case 13:d=ya(s,2),d!==null&&xt(d,s,2),ws(),Mu(s,2)}if(s=Xu(l),s===null&&xu(e,t,l,Us,a),s===r)break;r=s}r!==null&&l.stopPropagation()}else xu(e,t,l,null,a)}}function Xu(e){return e=Yr(e),ku(e)}var Us=null;function ku(e){if(Us=null,e=Va(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=S(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Us=e,null}function im(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dc()){case Ps:return 2;case ei:return 8;case sn:case fc:return 32;case ti:return 268435456;default:return 32}default:return 32}}var Du=!1,Za=null,Ua=null,Ha=null,tr=new Map,ar=new Map,Ba=[],Ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function om(e,t){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(t.pointerId)}}function lr(e,t,a,l,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ja(t),t!==null&&rm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function wg(e,t,a,l,r){switch(t){case"focusin":return Za=lr(Za,e,t,a,l,r),!0;case"dragenter":return Ua=lr(Ua,e,t,a,l,r),!0;case"mouseover":return Ha=lr(Ha,e,t,a,l,r),!0;case"pointerover":var s=r.pointerId;return tr.set(s,lr(tr.get(s)||null,e,t,a,l,r)),!0;case"gotpointercapture":return s=r.pointerId,ar.set(s,lr(ar.get(s)||null,e,t,a,l,r)),!0}return!1}function um(e){var t=Va(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,ii(e.priority,function(){sm(a)});return}}else if(t===31){if(t=S(a),t!==null){e.blockedOn=t,ii(e.priority,function(){sm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ar=l,a.target.dispatchEvent(l),Ar=null}else return t=Ja(a),t!==null&&rm(t),e.blockedOn=a,!1;t.shift()}return!0}function cm(e,t,a){Hs(e)&&a.delete(t)}function Sg(){Du=!1,Za!==null&&Hs(Za)&&(Za=null),Ua!==null&&Hs(Ua)&&(Ua=null),Ha!==null&&Hs(Ha)&&(Ha=null),tr.forEach(cm),ar.forEach(cm)}function Bs(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Sg)))}var Ls=null;function dm(e){Ls!==e&&(Ls=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ls===e&&(Ls=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(ku(l||a)===null)continue;break}var s=Ja(a);s!==null&&(e.splice(t,3),t-=3,Xo(s,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function an(e){function t(x){return Bs(x,e)}Za!==null&&Bs(Za,e),Ua!==null&&Bs(Ua,e),Ha!==null&&Bs(Ha,e),tr.forEach(t),ar.forEach(t);for(var a=0;a<Ba.length;a++){var l=Ba[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)um(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],s=a[l+1],o=r[at]||null;if(typeof s=="function")o||dm(a);else if(o){var d=null;if(s&&s.hasAttribute("formAction")){if(r=s,o=s[at]||null)d=o.formAction;else if(ku(r)!==null)continue}else d=o.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),dm(a)}}}function fm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return r=o})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Ru(e){this._internalRoot=e}qs.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=zt();lm(a,l,e,t,null,null)},qs.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lm(e.current,2,null,e,null,null),ws(),t[Qa]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=si();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ba.length&&t!==0&&t<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&um(e)}};var mm=c.version;if(mm!=="19.2.3")throw Error(u(527,mm,"19.2.3"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var Eg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gs.isDisabled&&Gs.supportsFiber)try{vl=Gs.inject(Eg),it=Gs}catch{}}return rr.createRoot=function(e,t){if(!h(e))throw Error(u(299));var a=!1,l="",r=yd,s=vd,o=jd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tm(e,1,!1,null,null,a,l,null,r,s,o,fm),e[Qa]=t.current,pu(e),new Ru(t)},rr.hydrateRoot=function(e,t,a){if(!h(e))throw Error(u(299));var l=!1,r="",s=yd,o=vd,d=jd,x=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=tm(e,1,!0,t,a??null,l,r,x,s,o,d,fm),t.context=am(null),a=t.current,l=zt(),l=yr(l),r=Ta(l),r.callback=null,Aa(a,r,l),a=l,t.current.lanes=a,Nl(t,a),Vt(t),e[Qa]=t.current,pu(e),new qs(t)},rr.version="19.2.3",rr}var wm;function Rg(){if(wm)return Zu.exports;wm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Zu.exports=Dg(),Zu.exports}var _g=Rg();var Sm="popstate";function Og(i={}){function c(u,h){let{pathname:p,search:v,hash:S}=u.location;return Ju("",{pathname:p,search:v,hash:S},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function f(u,h){return typeof h=="string"?h:or(h)}return Ug(c,f,null,i)}function Xe(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function Ot(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Zg(){return Math.random().toString(36).substring(2,10)}function Em(i,c){return{usr:i.state,key:i.key,idx:c}}function Ju(i,c,f=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof c=="string"?ln(c):c,state:f,key:c&&c.key||u||Zg()}}function or({pathname:i="/",search:c="",hash:f=""}){return c&&c!=="?"&&(i+=c.charAt(0)==="?"?c:"?"+c),f&&f!=="#"&&(i+=f.charAt(0)==="#"?f:"#"+f),i}function ln(i){let c={};if(i){let f=i.indexOf("#");f>=0&&(c.hash=i.substring(f),i=i.substring(0,f));let u=i.indexOf("?");u>=0&&(c.search=i.substring(u),i=i.substring(0,u)),i&&(c.pathname=i)}return c}function Ug(i,c,f,u={}){let{window:h=document.defaultView,v5Compat:p=!1}=u,v=h.history,S="POP",b=null,g=A();g==null&&(g=0,v.replaceState({...v.state,idx:g},""));function A(){return(v.state||{idx:null}).idx}function w(){S="POP";let Q=A(),V=Q==null?null:Q-g;g=Q,b&&b({action:S,location:H.location,delta:V})}function M(Q,V){S="PUSH";let U=Ju(H.location,Q,V);g=A()+1;let q=Em(U,g),G=H.createHref(U);try{v.pushState(q,"",G)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;h.location.assign(G)}p&&b&&b({action:S,location:H.location,delta:1})}function R(Q,V){S="REPLACE";let U=Ju(H.location,Q,V);g=A();let q=Em(U,g),G=H.createHref(U);v.replaceState(q,"",G),p&&b&&b({action:S,location:H.location,delta:0})}function O(Q){return Hg(Q)}let H={get action(){return S},get location(){return i(h,v)},listen(Q){if(b)throw new Error("A history only accepts one active listener");return h.addEventListener(Sm,w),b=Q,()=>{h.removeEventListener(Sm,w),b=null}},createHref(Q){return c(h,Q)},createURL:O,encodeLocation(Q){let V=O(Q);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:M,replace:R,go(Q){return v.go(Q)}};return H}function Hg(i,c=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(f,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:or(i);return u=u.replace(/ $/,"%20"),!c&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function _m(i,c,f="/"){return Bg(i,c,f,!1)}function Bg(i,c,f,u){let h=typeof c=="string"?ln(c):c,p=da(h.pathname||"/",f);if(p==null)return null;let v=Om(i);Lg(v);let S=null;for(let b=0;S==null&&b<v.length;++b){let g=Pg(p);S=Fg(v[b],g,u)}return S}function Om(i,c=[],f=[],u="",h=!1){let p=(v,S,b=h,g)=>{let A={relativePath:g===void 0?v.path||"":g,caseSensitive:v.caseSensitive===!0,childrenIndex:S,route:v};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(u)&&b)return;Xe(A.relativePath.startsWith(u),`Absolute route path "${A.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(u.length)}let w=ca([u,A.relativePath]),M=f.concat(A);v.children&&v.children.length>0&&(Xe(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Om(v.children,c,M,w,b)),!(v.path==null&&!v.index)&&c.push({path:w,score:$g(w,v.index),routesMeta:M})};return i.forEach((v,S)=>{if(v.path===""||!v.path?.includes("?"))p(v,S);else for(let b of Zm(v.path))p(v,S,!0,b)}),c}function Zm(i){let c=i.split("/");if(c.length===0)return[];let[f,...u]=c,h=f.endsWith("?"),p=f.replace(/\?$/,"");if(u.length===0)return h?[p,""]:[p];let v=Zm(u.join("/")),S=[];return S.push(...v.map(b=>b===""?p:[p,b].join("/"))),h&&S.push(...v),S.map(b=>i.startsWith("/")&&b===""?"/":b)}function Lg(i){i.sort((c,f)=>c.score!==f.score?f.score-c.score:Wg(c.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var qg=/^:[\w-]+$/,Gg=3,Qg=2,Vg=1,Jg=10,Kg=-2,Tm=i=>i==="*";function $g(i,c){let f=i.split("/"),u=f.length;return f.some(Tm)&&(u+=Kg),c&&(u+=Qg),f.filter(h=>!Tm(h)).reduce((h,p)=>h+(qg.test(p)?Gg:p===""?Vg:Jg),u)}function Wg(i,c){return i.length===c.length&&i.slice(0,-1).every((u,h)=>u===c[h])?i[i.length-1]-c[c.length-1]:0}function Fg(i,c,f=!1){let{routesMeta:u}=i,h={},p="/",v=[];for(let S=0;S<u.length;++S){let b=u[S],g=S===u.length-1,A=p==="/"?c:c.slice(p.length)||"/",w=Ks({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},A),M=b.route;if(!w&&g&&f&&!u[u.length-1].route.index&&(w=Ks({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},A)),!w)return null;Object.assign(h,w.params),v.push({params:h,pathname:ca([p,w.pathname]),pathnameBase:lp(ca([p,w.pathnameBase])),route:M}),w.pathnameBase!=="/"&&(p=ca([p,w.pathnameBase]))}return v}function Ks(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[f,u]=Ig(i.path,i.caseSensitive,i.end),h=c.match(f);if(!h)return null;let p=h[0],v=p.replace(/(.)\/+$/,"$1"),S=h.slice(1);return{params:u.reduce((g,{paramName:A,isOptional:w},M)=>{if(A==="*"){let O=S[M]||"";v=p.slice(0,p.length-O.length).replace(/(.)\/+$/,"$1")}const R=S[M];return w&&!R?g[A]=void 0:g[A]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:v,pattern:i}}function Ig(i,c=!1,f=!0){Ot(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],h="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,S,b)=>(u.push({paramName:S,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(u.push({paramName:"*"}),h+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?h+="\\/*$":i!==""&&i!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,c?void 0:"i"),u]}function Pg(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Ot(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),i}}function da(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let f=c.endsWith("/")?c.length-1:c.length,u=i.charAt(f);return u&&u!=="/"?null:i.slice(f)||"/"}var Um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ep=i=>Um.test(i);function tp(i,c="/"){let{pathname:f,search:u="",hash:h=""}=typeof i=="string"?ln(i):i,p;if(f)if(ep(f))p=f;else{if(f.includes("//")){let v=f;f=f.replace(/\/\/+/g,"/"),Ot(!1,`Pathnames cannot have embedded double slashes - normalizing ${v} -> ${f}`)}f.startsWith("/")?p=Am(f.substring(1),"/"):p=Am(f,c)}else p=c;return{pathname:p,search:np(u),hash:rp(h)}}function Am(i,c){let f=c.replace(/\/+$/,"").split("/");return i.split("/").forEach(h=>{h===".."?f.length>1&&f.pop():h!=="."&&f.push(h)}),f.length>1?f.join("/"):"/"}function Lu(i,c,f,u){return`Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ap(i){return i.filter((c,f)=>f===0||c.route.path&&c.route.path.length>0)}function Iu(i){let c=ap(i);return c.map((f,u)=>u===c.length-1?f.pathname:f.pathnameBase)}function Pu(i,c,f,u=!1){let h;typeof i=="string"?h=ln(i):(h={...i},Xe(!h.pathname||!h.pathname.includes("?"),Lu("?","pathname","search",h)),Xe(!h.pathname||!h.pathname.includes("#"),Lu("#","pathname","hash",h)),Xe(!h.search||!h.search.includes("#"),Lu("#","search","hash",h)));let p=i===""||h.pathname==="",v=p?"/":h.pathname,S;if(v==null)S=f;else{let w=c.length-1;if(!u&&v.startsWith("..")){let M=v.split("/");for(;M[0]==="..";)M.shift(),w-=1;h.pathname=M.join("/")}S=w>=0?c[w]:"/"}let b=tp(h,S),g=v&&v!=="/"&&v.endsWith("/"),A=(p||v===".")&&f.endsWith("/");return!b.pathname.endsWith("/")&&(g||A)&&(b.pathname+="/"),b}var ca=i=>i.join("/").replace(/\/\/+/g,"/"),lp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),np=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,rp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,sp=class{constructor(i,c,f,u=!1){this.status=i,this.statusText=c||"",this.internal=u,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function ip(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function op(i){return i.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Hm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bm(i,c){let f=i;if(typeof f!="string"||!Um.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let u=f,h=!1;if(Hm)try{let p=new URL(window.location.href),v=f.startsWith("//")?new URL(p.protocol+f):new URL(f),S=da(v.pathname,c);v.origin===p.origin&&S!=null?f=S+v.search+v.hash:h=!0}catch{Ot(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:h,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Lm=["POST","PUT","PATCH","DELETE"];new Set(Lm);var up=["GET",...Lm];new Set(up);var nn=m.createContext(null);nn.displayName="DataRouter";var $s=m.createContext(null);$s.displayName="DataRouterState";var cp=m.createContext(!1),qm=m.createContext({isTransitioning:!1});qm.displayName="ViewTransition";var dp=m.createContext(new Map);dp.displayName="Fetchers";var fp=m.createContext(null);fp.displayName="Await";var Mt=m.createContext(null);Mt.displayName="Navigation";var cr=m.createContext(null);cr.displayName="Location";var Jt=m.createContext({outlet:null,matches:[],isDataRoute:!1});Jt.displayName="Route";var ec=m.createContext(null);ec.displayName="RouteError";var Gm="REACT_ROUTER_ERROR",mp="REDIRECT",hp="ROUTE_ERROR_RESPONSE";function gp(i){if(i.startsWith(`${Gm}:${mp}:{`))try{let c=JSON.parse(i.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function pp(i){if(i.startsWith(`${Gm}:${hp}:{`))try{let c=JSON.parse(i.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new sp(c.status,c.statusText,c.data)}catch{}}function xp(i,{relative:c}={}){Xe(rn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=m.useContext(Mt),{hash:h,pathname:p,search:v}=dr(i,{relative:c}),S=p;return f!=="/"&&(S=p==="/"?f:ca([f,p])),u.createHref({pathname:S,search:v,hash:h})}function rn(){return m.useContext(cr)!=null}function fa(){return Xe(rn(),"useLocation() may be used only in the context of a <Router> component."),m.useContext(cr).location}var Qm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vm(i){m.useContext(Mt).static||m.useLayoutEffect(i)}function Ga(){let{isDataRoute:i}=m.useContext(Jt);return i?Mp():bp()}function bp(){Xe(rn(),"useNavigate() may be used only in the context of a <Router> component.");let i=m.useContext(nn),{basename:c,navigator:f}=m.useContext(Mt),{matches:u}=m.useContext(Jt),{pathname:h}=fa(),p=JSON.stringify(Iu(u)),v=m.useRef(!1);return Vm(()=>{v.current=!0}),m.useCallback((b,g={})=>{if(Ot(v.current,Qm),!v.current)return;if(typeof b=="number"){f.go(b);return}let A=Pu(b,JSON.parse(p),h,g.relative==="path");i==null&&c!=="/"&&(A.pathname=A.pathname==="/"?c:ca([c,A.pathname])),(g.replace?f.replace:f.push)(A,g.state,g)},[c,f,p,h,i])}m.createContext(null);function dr(i,{relative:c}={}){let{matches:f}=m.useContext(Jt),{pathname:u}=fa(),h=JSON.stringify(Iu(f));return m.useMemo(()=>Pu(i,JSON.parse(h),u,c==="path"),[i,h,u,c])}function yp(i,c){return Jm(i,c)}function Jm(i,c,f,u,h){Xe(rn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=m.useContext(Mt),{matches:v}=m.useContext(Jt),S=v[v.length-1],b=S?S.params:{},g=S?S.pathname:"/",A=S?S.pathnameBase:"/",w=S&&S.route;{let U=w&&w.path||"";$m(g,!w||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let M=fa(),R;if(c){let U=typeof c=="string"?ln(c):c;Xe(A==="/"||U.pathname?.startsWith(A),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${U.pathname}" was given in the \`location\` prop.`),R=U}else R=M;let O=R.pathname||"/",H=O;if(A!=="/"){let U=A.replace(/^\//,"").split("/");H="/"+O.replace(/^\//,"").split("/").slice(U.length).join("/")}let Q=_m(i,{pathname:H});Ot(w||Q!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),Ot(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Sp(Q&&Q.map(U=>Object.assign({},U,{params:Object.assign({},b,U.params),pathname:ca([A,p.encodeLocation?p.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?A:ca([A,p.encodeLocation?p.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),v,f,u,h);return c&&V?m.createElement(cr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},V):V}function vp(){let i=zp(),c=ip(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),f=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=m.createElement(m.Fragment,null,m.createElement("p",null,"💿 Hey developer 👋"),m.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",m.createElement("code",{style:p},"ErrorBoundary")," or"," ",m.createElement("code",{style:p},"errorElement")," prop on your route.")),m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},c),f?m.createElement("pre",{style:h},f):null,v)}var jp=m.createElement(vp,null),Km=class extends m.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,c){return c.location!==i.location||c.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:c.error,location:c.location,revalidation:i.revalidation||c.revalidation}}componentDidCatch(i,c){this.props.onError?this.props.onError(i,c):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const f=pp(i.digest);f&&(i=f)}let c=i!==void 0?m.createElement(Jt.Provider,{value:this.props.routeContext},m.createElement(ec.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?m.createElement(Np,{error:i},c):c}};Km.contextType=cp;var qu=new WeakMap;function Np({children:i,error:c}){let{basename:f}=m.useContext(Mt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let u=gp(c.digest);if(u){let h=qu.get(c);if(h)throw h;let p=Bm(u.location,f);if(Hm&&!qu.get(c))if(p.isExternal||u.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:u.replace}));throw qu.set(c,v),v}return m.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return i}function wp({routeContext:i,match:c,children:f}){let u=m.useContext(nn);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),m.createElement(Jt.Provider,{value:i},f)}function Sp(i,c=[],f=null,u=null,h=null){if(i==null){if(!f)return null;if(f.errors)i=f.matches;else if(c.length===0&&!f.initialized&&f.matches.length>0)i=f.matches;else return null}let p=i,v=f?.errors;if(v!=null){let A=p.findIndex(w=>w.route.id&&v?.[w.route.id]!==void 0);Xe(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),p=p.slice(0,Math.min(p.length,A+1))}let S=!1,b=-1;if(f)for(let A=0;A<p.length;A++){let w=p[A];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(b=A),w.route.id){let{loaderData:M,errors:R}=f,O=w.route.loader&&!M.hasOwnProperty(w.route.id)&&(!R||R[w.route.id]===void 0);if(w.route.lazy||O){S=!0,b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}let g=f&&u?(A,w)=>{u(A,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:op(f.matches),errorInfo:w})}:void 0;return p.reduceRight((A,w,M)=>{let R,O=!1,H=null,Q=null;f&&(R=v&&w.route.id?v[w.route.id]:void 0,H=w.route.errorElement||jp,S&&(b<0&&M===0?($m("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,Q=null):b===M&&(O=!0,Q=w.route.hydrateFallbackElement||null)));let V=c.concat(p.slice(0,M+1)),U=()=>{let q;return R?q=H:O?q=Q:w.route.Component?q=m.createElement(w.route.Component,null):w.route.element?q=w.route.element:q=A,m.createElement(wp,{match:w,routeContext:{outlet:A,matches:V,isDataRoute:f!=null},children:q})};return f&&(w.route.ErrorBoundary||w.route.errorElement||M===0)?m.createElement(Km,{location:f.location,revalidation:f.revalidation,component:H,error:R,children:U(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:g}):U()},null)}function tc(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ep(i){let c=m.useContext(nn);return Xe(c,tc(i)),c}function Tp(i){let c=m.useContext($s);return Xe(c,tc(i)),c}function Ap(i){let c=m.useContext(Jt);return Xe(c,tc(i)),c}function ac(i){let c=Ap(i),f=c.matches[c.matches.length-1];return Xe(f.route.id,`${i} can only be used on routes that contain a unique "id"`),f.route.id}function Yp(){return ac("useRouteId")}function zp(){let i=m.useContext(ec),c=Tp("useRouteError"),f=ac("useRouteError");return i!==void 0?i:c.errors?.[f]}function Mp(){let{router:i}=Ep("useNavigate"),c=ac("useNavigate"),f=m.useRef(!1);return Vm(()=>{f.current=!0}),m.useCallback(async(h,p={})=>{Ot(f.current,Qm),f.current&&(typeof h=="number"?await i.navigate(h):await i.navigate(h,{fromRouteId:c,...p}))},[i,c])}var Ym={};function $m(i,c,f){!c&&!Ym[i]&&(Ym[i]=!0,Ot(!1,f))}m.memo(Cp);function Cp({routes:i,future:c,state:f,onError:u}){return Jm(i,void 0,f,u,c)}function Xp({to:i,replace:c,state:f,relative:u}){Xe(rn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:h}=m.useContext(Mt);Ot(!h,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=m.useContext(Jt),{pathname:v}=fa(),S=Ga(),b=Pu(i,Iu(p),v,u==="path"),g=JSON.stringify(b);return m.useEffect(()=>{S(JSON.parse(g),{replace:c,state:f,relative:u})},[S,g,u,c,f]),null}function tt(i){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kp({basename:i="/",children:c=null,location:f,navigationType:u="POP",navigator:h,static:p=!1,unstable_useTransitions:v}){Xe(!rn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=i.replace(/^\/*/,"/"),b=m.useMemo(()=>({basename:S,navigator:h,static:p,unstable_useTransitions:v,future:{}}),[S,h,p,v]);typeof f=="string"&&(f=ln(f));let{pathname:g="/",search:A="",hash:w="",state:M=null,key:R="default"}=f,O=m.useMemo(()=>{let H=da(g,S);return H==null?null:{location:{pathname:H,search:A,hash:w,state:M,key:R},navigationType:u}},[S,g,A,w,M,R,u]);return Ot(O!=null,`<Router basename="${S}"> is not able to match the URL "${g}${A}${w}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:m.createElement(Mt.Provider,{value:b},m.createElement(cr.Provider,{children:c,value:O}))}function Dp({children:i,location:c}){return yp(Ku(i),c)}function Ku(i,c=[]){let f=[];return m.Children.forEach(i,(u,h)=>{if(!m.isValidElement(u))return;let p=[...c,h];if(u.type===m.Fragment){f.push.apply(f,Ku(u.props.children,p));return}Xe(u.type===tt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let v={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(v.children=Ku(u.props.children,p)),f.push(v)}),f}var Vs="get",Js="application/x-www-form-urlencoded";function Ws(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function Rp(i){return Ws(i)&&i.tagName.toLowerCase()==="button"}function _p(i){return Ws(i)&&i.tagName.toLowerCase()==="form"}function Op(i){return Ws(i)&&i.tagName.toLowerCase()==="input"}function Zp(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Up(i,c){return i.button===0&&(!c||c==="_self")&&!Zp(i)}var Qs=null;function Hp(){if(Qs===null)try{new FormData(document.createElement("form"),0),Qs=!1}catch{Qs=!0}return Qs}var Bp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gu(i){return i!=null&&!Bp.has(i)?(Ot(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Js}"`),null):i}function Lp(i,c){let f,u,h,p,v;if(_p(i)){let S=i.getAttribute("action");u=S?da(S,c):null,f=i.getAttribute("method")||Vs,h=Gu(i.getAttribute("enctype"))||Js,p=new FormData(i)}else if(Rp(i)||Op(i)&&(i.type==="submit"||i.type==="image")){let S=i.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=i.getAttribute("formaction")||S.getAttribute("action");if(u=b?da(b,c):null,f=i.getAttribute("formmethod")||S.getAttribute("method")||Vs,h=Gu(i.getAttribute("formenctype"))||Gu(S.getAttribute("enctype"))||Js,p=new FormData(S,i),!Hp()){let{name:g,type:A,value:w}=i;if(A==="image"){let M=g?`${g}.`:"";p.append(`${M}x`,"0"),p.append(`${M}y`,"0")}else g&&p.append(g,w)}}else{if(Ws(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Vs,u=null,h=Js,v=i}return p&&h==="text/plain"&&(v=p,p=void 0),{action:u,method:f.toLowerCase(),encType:h,formData:p,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lc(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function qp(i,c,f){let u=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u.pathname==="/"?u.pathname=`_root.${f}`:c&&da(u.pathname,c)==="/"?u.pathname=`${c.replace(/\/$/,"")}/_root.${f}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${f}`,u}async function Gp(i,c){if(i.id in c)return c[i.id];try{let f=await import(i.module);return c[i.id]=f,f}catch(f){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qp(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Vp(i,c,f){let u=await Promise.all(i.map(async h=>{let p=c.routes[h.route.id];if(p){let v=await Gp(p,f);return v.links?v.links():[]}return[]}));return Wp(u.flat(1).filter(Qp).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function zm(i,c,f,u,h,p){let v=(b,g)=>f[g]?b.route.id!==f[g].route.id:!0,S=(b,g)=>f[g].pathname!==b.pathname||f[g].route.path?.endsWith("*")&&f[g].params["*"]!==b.params["*"];return p==="assets"?c.filter((b,g)=>v(b,g)||S(b,g)):p==="data"?c.filter((b,g)=>{let A=u.routes[b.route.id];if(!A||!A.hasLoader)return!1;if(v(b,g)||S(b,g))return!0;if(b.route.shouldRevalidate){let w=b.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Jp(i,c,{includeHydrateFallback:f}={}){return Kp(i.map(u=>{let h=c.routes[u.route.id];if(!h)return[];let p=[h.module];return h.clientActionModule&&(p=p.concat(h.clientActionModule)),h.clientLoaderModule&&(p=p.concat(h.clientLoaderModule)),f&&h.hydrateFallbackModule&&(p=p.concat(h.hydrateFallbackModule)),h.imports&&(p=p.concat(h.imports)),p}).flat(1))}function Kp(i){return[...new Set(i)]}function $p(i){let c={},f=Object.keys(i).sort();for(let u of f)c[u]=i[u];return c}function Wp(i,c){let f=new Set;return new Set(c),i.reduce((u,h)=>{let p=JSON.stringify($p(h));return f.has(p)||(f.add(p),u.push({key:p,link:h})),u},[])}function Wm(){let i=m.useContext(nn);return lc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Fp(){let i=m.useContext($s);return lc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var nc=m.createContext(void 0);nc.displayName="FrameworkContext";function Fm(){let i=m.useContext(nc);return lc(i,"You must render this element inside a <HydratedRouter> element"),i}function Ip(i,c){let f=m.useContext(nc),[u,h]=m.useState(!1),[p,v]=m.useState(!1),{onFocus:S,onBlur:b,onMouseEnter:g,onMouseLeave:A,onTouchStart:w}=c,M=m.useRef(null);m.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let H=V=>{V.forEach(U=>{v(U.isIntersecting)})},Q=new IntersectionObserver(H,{threshold:.5});return M.current&&Q.observe(M.current),()=>{Q.disconnect()}}},[i]),m.useEffect(()=>{if(u){let H=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(H)}}},[u]);let R=()=>{h(!0)},O=()=>{h(!1),v(!1)};return f?i!=="intent"?[p,M,{}]:[p,M,{onFocus:sr(S,R),onBlur:sr(b,O),onMouseEnter:sr(g,R),onMouseLeave:sr(A,O),onTouchStart:sr(w,R)}]:[!1,M,{}]}function sr(i,c){return f=>{i&&i(f),f.defaultPrevented||c(f)}}function Pp({page:i,...c}){let{router:f}=Wm(),u=m.useMemo(()=>_m(f.routes,i,f.basename),[f.routes,i,f.basename]);return u?m.createElement(t1,{page:i,matches:u,...c}):null}function e1(i){let{manifest:c,routeModules:f}=Fm(),[u,h]=m.useState([]);return m.useEffect(()=>{let p=!1;return Vp(i,c,f).then(v=>{p||h(v)}),()=>{p=!0}},[i,c,f]),u}function t1({page:i,matches:c,...f}){let u=fa(),{manifest:h,routeModules:p}=Fm(),{basename:v}=Wm(),{loaderData:S,matches:b}=Fp(),g=m.useMemo(()=>zm(i,c,b,h,u,"data"),[i,c,b,h,u]),A=m.useMemo(()=>zm(i,c,b,h,u,"assets"),[i,c,b,h,u]),w=m.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let O=new Set,H=!1;if(c.forEach(V=>{let U=h.routes[V.route.id];!U||!U.hasLoader||(!g.some(q=>q.route.id===V.route.id)&&V.route.id in S&&p[V.route.id]?.shouldRevalidate||U.hasClientLoader?H=!0:O.add(V.route.id))}),O.size===0)return[];let Q=qp(i,v,"data");return H&&O.size>0&&Q.searchParams.set("_routes",c.filter(V=>O.has(V.route.id)).map(V=>V.route.id).join(",")),[Q.pathname+Q.search]},[v,S,u,h,g,c,i,p]),M=m.useMemo(()=>Jp(A,h),[A,h]),R=e1(A);return m.createElement(m.Fragment,null,w.map(O=>m.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...f})),M.map(O=>m.createElement("link",{key:O,rel:"modulepreload",href:O,...f})),R.map(({key:O,link:H})=>m.createElement("link",{key:O,nonce:f.nonce,...H})))}function a1(...i){return c=>{i.forEach(f=>{typeof f=="function"?f(c):f!=null&&(f.current=c)})}}var l1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l1&&(window.__reactRouterVersion="7.11.0")}catch{}function n1({basename:i,children:c,unstable_useTransitions:f,window:u}){let h=m.useRef();h.current==null&&(h.current=Og({window:u,v5Compat:!0}));let p=h.current,[v,S]=m.useState({action:p.action,location:p.location}),b=m.useCallback(g=>{f===!1?S(g):m.startTransition(()=>S(g))},[f]);return m.useLayoutEffect(()=>p.listen(b),[p,b]),m.createElement(kp,{basename:i,children:c,location:v.location,navigationType:v.action,navigator:p,unstable_useTransitions:f})}var Im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=m.forwardRef(function({onClick:c,discover:f="render",prefetch:u="none",relative:h,reloadDocument:p,replace:v,state:S,target:b,to:g,preventScrollReset:A,viewTransition:w,unstable_defaultShouldRevalidate:M,...R},O){let{basename:H,unstable_useTransitions:Q}=m.useContext(Mt),V=typeof g=="string"&&Im.test(g),U=Bm(g,H);g=U.to;let q=xp(g,{relative:h}),[G,F,oe]=Ip(u,R),P=o1(g,{replace:v,state:S,target:b,preventScrollReset:A,relative:h,viewTransition:w,unstable_defaultShouldRevalidate:M,unstable_useTransitions:Q});function ge(je){c&&c(je),je.defaultPrevented||P(je)}let ue=m.createElement("a",{...R,...oe,href:U.absoluteURL||q,onClick:U.isExternal||p?c:ge,ref:a1(O,F),target:b,"data-discover":!V&&f==="render"?"true":void 0});return G&&!V?m.createElement(m.Fragment,null,ue,m.createElement(Pp,{page:q})):ue});Ie.displayName="Link";var r1=m.forwardRef(function({"aria-current":c="page",caseSensitive:f=!1,className:u="",end:h=!1,style:p,to:v,viewTransition:S,children:b,...g},A){let w=dr(v,{relative:g.relative}),M=fa(),R=m.useContext($s),{navigator:O,basename:H}=m.useContext(Mt),Q=R!=null&&m1(w)&&S===!0,V=O.encodeLocation?O.encodeLocation(w).pathname:w.pathname,U=M.pathname,q=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;f||(U=U.toLowerCase(),q=q?q.toLowerCase():null,V=V.toLowerCase()),q&&H&&(q=da(q,H)||q);const G=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let F=U===V||!h&&U.startsWith(V)&&U.charAt(G)==="/",oe=q!=null&&(q===V||!h&&q.startsWith(V)&&q.charAt(V.length)==="/"),P={isActive:F,isPending:oe,isTransitioning:Q},ge=F?c:void 0,ue;typeof u=="function"?ue=u(P):ue=[u,F?"active":null,oe?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let je=typeof p=="function"?p(P):p;return m.createElement(Ie,{...g,"aria-current":ge,className:ue,ref:A,style:je,to:v,viewTransition:S},typeof b=="function"?b(P):b)});r1.displayName="NavLink";var s1=m.forwardRef(({discover:i="render",fetcherKey:c,navigate:f,reloadDocument:u,replace:h,state:p,method:v=Vs,action:S,onSubmit:b,relative:g,preventScrollReset:A,viewTransition:w,unstable_defaultShouldRevalidate:M,...R},O)=>{let{unstable_useTransitions:H}=m.useContext(Mt),Q=d1(),V=f1(S,{relative:g}),U=v.toLowerCase()==="get"?"get":"post",q=typeof S=="string"&&Im.test(S),G=F=>{if(b&&b(F),F.defaultPrevented)return;F.preventDefault();let oe=F.nativeEvent.submitter,P=oe?.getAttribute("formmethod")||v,ge=()=>Q(oe||F.currentTarget,{fetcherKey:c,method:P,navigate:f,replace:h,state:p,relative:g,preventScrollReset:A,viewTransition:w,unstable_defaultShouldRevalidate:M});H&&f!==!1?m.startTransition(()=>ge()):ge()};return m.createElement("form",{ref:O,method:U,action:V,onSubmit:u?b:G,...R,"data-discover":!q&&i==="render"?"true":void 0})});s1.displayName="Form";function i1(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pm(i){let c=m.useContext(nn);return Xe(c,i1(i)),c}function o1(i,{target:c,replace:f,state:u,preventScrollReset:h,relative:p,viewTransition:v,unstable_defaultShouldRevalidate:S,unstable_useTransitions:b}={}){let g=Ga(),A=fa(),w=dr(i,{relative:p});return m.useCallback(M=>{if(Up(M,c)){M.preventDefault();let R=f!==void 0?f:or(A)===or(w),O=()=>g(i,{replace:R,state:u,preventScrollReset:h,relative:p,viewTransition:v,unstable_defaultShouldRevalidate:S});b?m.startTransition(()=>O()):O()}},[A,g,w,f,u,c,i,h,p,v,S,b])}var u1=0,c1=()=>`__${String(++u1)}__`;function d1(){let{router:i}=Pm("useSubmit"),{basename:c}=m.useContext(Mt),f=Yp(),u=i.fetch,h=i.navigate;return m.useCallback(async(p,v={})=>{let{action:S,method:b,encType:g,formData:A,body:w}=Lp(p,c);if(v.navigate===!1){let M=v.fetcherKey||c1();await u(M,f,v.action||S,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:A,body:w,formMethod:v.method||b,formEncType:v.encType||g,flushSync:v.flushSync})}else await h(v.action||S,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:A,body:w,formMethod:v.method||b,formEncType:v.encType||g,replace:v.replace,state:v.state,fromRouteId:f,flushSync:v.flushSync,viewTransition:v.viewTransition})},[u,h,c,f])}function f1(i,{relative:c}={}){let{basename:f}=m.useContext(Mt),u=m.useContext(Jt);Xe(u,"useFormAction must be used inside a RouteContext");let[h]=u.matches.slice(-1),p={...dr(i||".",{relative:c})},v=fa();if(i==null){p.search=v.search;let S=new URLSearchParams(p.search),b=S.getAll("index");if(b.some(A=>A==="")){S.delete("index"),b.filter(w=>w).forEach(w=>S.append("index",w));let A=S.toString();p.search=A?`?${A}`:""}}return(!i||i===".")&&h.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:ca([f,p.pathname])),or(p)}function m1(i,{relative:c}={}){let f=m.useContext(qm);Xe(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Pm("useViewTransitionState"),h=dr(i,{relative:c});if(!f.isTransitioning)return!1;let p=da(f.currentLocation.pathname,u)||f.currentLocation.pathname,v=da(f.nextLocation.pathname,u)||f.nextLocation.pathname;return Ks(h.pathname,v)!=null||Ks(h.pathname,p)!=null}const h1=i=>{const c=JSON.parse(localStorage.getItem("users"))||[];c.push(i),localStorage.setItem("users",JSON.stringify(c))},g1=()=>JSON.parse(localStorage.getItem("users"))||[],p1=(i,c)=>{const u=g1().find(h=>h.email===i&&h.password===c);return u?(localStorage.setItem("loggedInUser",JSON.stringify(u)),!0):!1},eh=()=>JSON.parse(localStorage.getItem("loggedInUser")),x1=()=>{localStorage.removeItem("loggedInUser")};const b1=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y1=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,f,u)=>u?u.toUpperCase():f.toLowerCase()),Mm=i=>{const c=y1(i);return c.charAt(0).toUpperCase()+c.slice(1)},th=(...i)=>i.filter((c,f,u)=>!!c&&c.trim()!==""&&u.indexOf(c)===f).join(" ").trim(),v1=i=>{for(const c in i)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};var j1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const N1=m.forwardRef(({color:i="currentColor",size:c=24,strokeWidth:f=2,absoluteStrokeWidth:u,className:h="",children:p,iconNode:v,...S},b)=>m.createElement("svg",{ref:b,...j1,width:c,height:c,stroke:i,strokeWidth:u?Number(f)*24/Number(c):f,className:th("lucide",h),...!p&&!v1(S)&&{"aria-hidden":"true"},...S},[...v.map(([g,A])=>m.createElement(g,A)),...Array.isArray(p)?p:[p]]));const re=(i,c)=>{const f=m.forwardRef(({className:u,...h},p)=>m.createElement(N1,{ref:p,iconNode:c,className:th(`lucide-${b1(Mm(i))}`,`lucide-${i}`,u),...h}));return f.displayName=Mm(i),f};const w1=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],S1=re("activity",w1);const E1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ah=re("arrow-right",E1);const T1=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],lh=re("award",T1);const A1=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Cm=re("brain",A1);const Y1=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],rc=re("briefcase",Y1);const z1=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],M1=re("building",z1);const C1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],X1=re("calendar",C1);const k1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],nh=re("chevron-down",k1);const D1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],R1=re("chevron-left",D1);const _1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],O1=re("chevron-right",_1);const Z1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],rh=re("circle-check-big",Z1);const U1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],H1=re("circle-x",U1);const B1=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],$u=re("clock",B1);const L1=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Xm=re("code-xml",L1);const q1=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],km=re("cpu",q1);const G1=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],sh=re("dollar-sign",G1);const Q1=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],V1=re("eye-off",Q1);const J1=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],K1=re("eye",J1);const $1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Qu=re("globe",$1);const W1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],F1=re("heart",W1);const I1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],P1=re("house",I1);const ex=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],tx=re("layout-dashboard",ex);const ax=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],lx=re("linkedin",ax);const nx=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],rx=re("lock",nx);const sx=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ix=re("log-out",sx);const ox=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],sc=re("mail",ox);const ux=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],cx=re("map-pin",ux);const dx=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],ih=re("menu",dx);const fx=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],mx=re("message-square",fx);const hx=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],gx=re("pause",hx);const px=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Dm=re("play",px);const xx=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],ir=re("rocket",xx);const bx=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],oh=re("shield",bx);const yx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],xl=re("sparkles",yx);const vx=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],uh=re("star",vx);const jx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Nx=re("target",jx);const wx=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Sx=re("trending-down",wx);const Ex=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],qa=re("trending-up",Ex);const Tx=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ax=re("user-check",Tx);const Yx=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Vu=re("user",Yx);const zx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ur=re("users",zx);const Mx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wu=re("x",Mx),ic=()=>{const i=Ga(),c=fa(),[f,u]=m.useState(!1),[h,p]=m.useState(null),[v,S]=m.useState(!1),[b,g]=m.useState(null),[A,w]=m.useState(!1),[M,R]=m.useState(!0),O=()=>{u(!f),f||setTimeout(()=>{document.querySelector(".mobile-menu")?.classList.add("animate-bounce-in")},50)},H=()=>{document.querySelector(".logout-btn")?.classList.add("animate-pulse"),setTimeout(()=>{x1(),p(null),i("/login")},300)};m.useEffect(()=>{const U=eh();p(U);const q=()=>{S(window.scrollY>10)};window.addEventListener("scroll",q);const G=setInterval(()=>{R(F=>!F)},3e3);return()=>{window.removeEventListener("scroll",q),clearInterval(G)}},[]);const Q=[{path:"/",label:"Home",icon:P1},{path:"/jobs-listings",label:"Jobs",icon:rc},{path:"/dashboard",label:"Dashboard",icon:tx},{path:"/contact",label:"Contact",icon:sc},{path:"/candidates",label:"About Us",icon:ur}],V=()=>n.jsx(n.Fragment,{children:Q.map(U=>{const q=U.icon,G=c.pathname===U.path;return n.jsxs(Ie,{to:U.path,className:`relative px-4 py-2.5 rounded-xl transition-all duration-500 group overflow-hidden ${G?"text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg":"text-gray-700 hover:text-blue-600 bg-white/80 hover:bg-white"}`,onMouseEnter:()=>{g(U.path);const F=document.getElementById(`nav-${U.path}`);F&&(F.classList.add("animate-ripple"),setTimeout(()=>{F.classList.remove("animate-ripple")},600))},onMouseLeave:()=>g(null),children:[n.jsx("div",{id:`nav-${U.path}`,className:"absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"}),n.jsxs("div",{className:"relative flex items-center gap-3",children:[n.jsx(q,{className:`w-4 h-4 transition-all duration-500 ${b===U.path?"scale-125 rotate-12":""} ${G?"text-white":"text-blue-500"}`}),n.jsx("span",{className:`font-medium transition-all duration-300 ${b===U.path?"tracking-wide":""}`,children:U.label}),G&&n.jsx("div",{className:"absolute -right-2 w-2 h-2 bg-white rounded-full animate-ping"})]}),b===U.path&&!G&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float",style:{animationDelay:"0.1s"}}),n.jsx("div",{className:"absolute top-2 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-float",style:{animationDelay:"0.3s"}})]})]},U.path)})});return n.jsxs("nav",{className:`sticky top-0 z-50 transition-all duration-700 ${v?"bg-gradient-to-r from-white via-blue-50/80 to-indigo-50/80 backdrop-blur-xl shadow-2xl py-3 border-b border-blue-100/50":"bg-gradient-to-r from-white via-blue-50 to-indigo-50 shadow-lg py-4"}`,children:[n.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[[...Array(5)].map((U,q)=>n.jsx("div",{className:"absolute w-1 h-1 bg-blue-300/40 rounded-full animate-float",style:{left:`${10+q*20}%`,top:"30%",animationDelay:`${q*.5}s`,animationDuration:"3s"}},q)),n.jsx("div",{className:`absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl transition-all duration-3000 ${M?"opacity-70 scale-125":"opacity-40 scale-100"}`}),n.jsx("div",{className:`absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl transition-all duration-3000 ${M?"opacity-70 scale-125":"opacity-40 scale-100"}`,style:{animationDelay:"1.5s"}})]}),n.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsxs(Ie,{to:"/",className:"flex items-center gap-3 group relative",onMouseEnter:()=>{document.querySelector(".logo-glow")?.classList.add("animate-pulse")},onMouseLeave:()=>{document.querySelector(".logo-glow")?.classList.remove("animate-pulse")},children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"logo-glow absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"}),n.jsxs("div",{className:"relative w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3",children:[n.jsx("span",{className:"text-white font-bold text-xl",children:"DH"}),n.jsx(xl,{className:"absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-spin-slow"})]}),n.jsx("div",{className:"absolute -inset-1 border-2 border-transparent rounded-2xl group-hover:border-blue-400/50 transition-all duration-700"})]}),n.jsxs("div",{className:"transform transition-all duration-500 group-hover:translate-x-1",children:[n.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-gradient",children:"DevHire"}),n.jsxs("p",{className:"text-xs text-gray-500 -mt-1 flex items-center gap-1",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Hiring made brilliant"]})]})]}),n.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[n.jsx("div",{className:"flex items-center gap-2 bg-white/60 backdrop-blur-sm p-2 rounded-2xl border border-white/40 shadow-inner",children:n.jsx(V,{})}),n.jsx("div",{className:"h-8 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent mx-3 animate-pulse"}),h?n.jsxs("div",{className:"relative",children:[n.jsxs("button",{onClick:()=>{w(!A),document.querySelector(".user-btn")?.classList.add("animate-bounce"),setTimeout(()=>{document.querySelector(".user-btn")?.classList.remove("animate-bounce")},300)},className:"user-btn flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 group shadow-lg hover:shadow-xl",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500",children:n.jsx(Vu,{className:"w-5 h-5 text-white"})}),n.jsx("div",{className:"absolute -inset-1 border-2 border-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 animate-ping-slow"})]}),n.jsx("span",{className:"font-semibold text-gray-800 group-hover:text-blue-600 transition-colors",children:h.name||"Account"}),n.jsx(nh,{className:`w-4 h-4 text-gray-500 transition-transform duration-500 ${A?"rotate-180":""}`})]}),n.jsxs("div",{className:`absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden transition-all duration-500 ${A?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-4 scale-95 pointer-events-none"}`,children:[n.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-white/50",children:[n.jsx("p",{className:"font-bold text-gray-800",children:h.email}),n.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Welcome back!"})]}),n.jsxs("div",{className:"p-2",children:[n.jsxs(Ie,{to:"/profile",className:"flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50/80 transition-all duration-300 hover:translate-x-2 group",onClick:()=>w(!1),children:[n.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors",children:n.jsx(Vu,{className:"w-4 h-4 text-blue-600"})}),n.jsx("span",{children:"My Profile"})]}),n.jsxs(Ie,{to:"/settings",className:"flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50/80 transition-all duration-300 hover:translate-x-2 group",onClick:()=>w(!1),children:[n.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors",children:n.jsxs("svg",{className:"w-4 h-4 text-indigo-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),n.jsx("span",{children:"Settings"})]}),n.jsx("div",{className:"border-t border-gray-100/50 mt-2 pt-2",children:n.jsxs("button",{onClick:()=>{H(),w(!1)},className:"logout-btn flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50/80 text-red-600 w-full transition-all duration-300 hover:translate-x-2 group",children:[n.jsx("div",{className:"w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors",children:n.jsx(ix,{className:"w-4 h-4"})}),n.jsx("span",{children:"Logout"})]})})]})]})]}):n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(Ie,{to:"/login",className:"px-5 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition-all duration-500 rounded-xl hover:bg-white/80 backdrop-blur-sm border border-transparent hover:border-blue-200 hover:shadow-md",children:"Login"}),n.jsxs(Ie,{to:"/register",className:"relative px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-600 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 overflow-hidden group",children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700"}),n.jsxs("span",{className:"relative flex items-center gap-2",children:["Get Started",n.jsx(xl,{className:"w-4 h-4 group-hover:rotate-180 transition-transform duration-500"})]})]})]})]}),n.jsxs("button",{onClick:O,className:`md:hidden w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-700 relative overflow-hidden ${f?"bg-gradient-to-r from-blue-500 to-indigo-500 text-white rotate-90":"bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200 hover:border-blue-300 hover:scale-110"}`,children:[n.jsx("div",{className:`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-transform duration-700 ${f?"translate-x-0":"-translate-x-full"}`}),f?n.jsx(Wu,{className:"w-6 h-6 relative z-10 animate-spin-in"}):n.jsx(ih,{className:"w-6 h-6 relative z-10"})]})]}),n.jsx("div",{className:`md:hidden mobile-menu overflow-hidden transition-all duration-700 ${f?"max-h-[500px] opacity-100 mt-4 scale-100":"max-h-0 opacity-0 scale-95"}`,children:n.jsxs("div",{className:"bg-gradient-to-br from-white via-blue-50/90 to-indigo-50/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/40",children:[n.jsx("div",{className:"space-y-2 mb-6",children:Q.map(U=>{const q=U.icon,G=c.pathname===U.path;return n.jsxs(Ie,{to:U.path,onClick:()=>{u(!1);const F=document.querySelector(`#mobile-${U.path}`);F&&(F.classList.add("animate-pulse"),setTimeout(()=>{F.classList.remove("animate-pulse")},300))},id:`mobile-${U.path}`,className:`flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-500 transform hover:scale-[1.02] ${G?"bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg -translate-x-1":"bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"}`,children:[n.jsx(q,{className:`w-5 h-5 ${G?"text-white":"text-blue-500"}`}),n.jsx("span",{className:"font-semibold",children:U.label}),G&&n.jsx("div",{className:"ml-auto w-2 h-2 bg-white rounded-full animate-ping"})]},U.path)})}),n.jsx("div",{className:"pt-6 border-t border-white/30",children:h?n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/40",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center",children:n.jsx(Vu,{className:"w-6 h-6 text-white"})}),n.jsx("div",{className:"absolute -inset-1 border-2 border-blue-400/50 rounded-full animate-ping-slow"})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-bold text-gray-800",children:h.name||"User"}),n.jsx("p",{className:"text-sm text-gray-600",children:h.email})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx(Ie,{to:"/profile",onClick:()=>u(!1),className:"p-3 bg-white/80 backdrop-blur-sm text-center rounded-xl font-semibold hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-105",children:"Profile"}),n.jsx("button",{onClick:()=>{H(),u(!1)},className:"logout-btn p-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-105",children:"Logout"})]})]}):n.jsxs("div",{className:"space-y-3",children:[n.jsx(Ie,{to:"/login",onClick:()=>u(!1),className:"block p-3.5 bg-white/80 backdrop-blur-sm text-center rounded-xl font-semibold hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-105",children:"Login"}),n.jsx(Ie,{to:"/register",onClick:()=>u(!1),className:"block p-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold text-center hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",children:"Get Started Free"})]})})]})})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes spin-in {
          from {
            transform: rotate(-180deg) scale(0);
            opacity: 0;
          }
          to {
            transform: rotate(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-ripple {
          animation: ripple 0.6s linear;
        }
        
        .animate-spin-in {
          animation: spin-in 0.5s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `})]})},Cx=()=>{const[i,c]=m.useState(0),[f,u]=m.useState(!0),[h,p]=m.useState({x:0,y:0}),[v,S]=m.useState(!1),[b,g]=m.useState(0),[A,w]=m.useState({width:0,height:0}),[M,R]=m.useState(new Date),[O,H]=m.useState({x:0,y:0}),[Q,V]=m.useState(!1),[U,q]=m.useState("hero"),[G,F]=m.useState(50),[oe,P]=m.useState(1),[ge,ue]=m.useState("purple"),[je,_e]=m.useState(!0),[Je,Ct]=m.useState([]),[bt,yt]=m.useState(0),[X,B]=m.useState(1),[te,ve]=m.useState(1),[Se,j]=m.useState(100),[_,L]=m.useState(3),[K,ae]=m.useState(.5),[ie,be]=m.useState(1),[Pe,ke]=m.useState(1),[bl,yl]=m.useState(.7),[fr,Fs]=m.useState(300),[ma,mr]=m.useState("ease-out"),[hr,oc]=m.useState(1e3),[Is,gr]=m.useState("center"),[pr,xr]=m.useState("hidden"),[uc,cc]=m.useState("preserve-3d"),[st,dc]=m.useState("transform"),[Ps,ei]=m.useState("blur(0px)"),[sn,fc]=m.useState("normal"),[ti,mc]=m.useState("auto"),[hc,vl]=m.useState("none"),[it,Kt]=m.useState("none"),[ot,gc]=m.useState("none"),[pc,xc]=m.useState("none"),[on,un]=m.useState("center"),[cn,ha]=m.useState("cover"),[dn,jl]=m.useState("no-repeat"),[bc,ai]=m.useState("scroll"),[br,Nl]=m.useState("padding-box"),[yc,li]=m.useState("border-box"),[ni,ri]=m.useState("cover"),[yr,vr]=m.useState("center"),[si,ii]=m.useState("0px"),[$t,Qe]=m.useState("0px"),[at,Qa]=m.useState("solid"),[jr,vc]=m.useState("transparent"),[jc,oi]=m.useState("0px"),[wl,Nr]=m.useState("none"),[Va,Ja]=m.useState("transparent"),[Sl,Ka]=m.useState("0px"),[qe,ui]=m.useState("auto"),[ci,ga]=m.useState("balance"),[$a,Nc]=m.useState("normal"),[di,fi]=m.useState("none"),[wc,fn]=m.useState("currentColor"),[mn,Ht]=m.useState("none"),[vt,mi]=m.useState("medium"),[Sc,wr]=m.useState("none"),[hi,hn]=m.useState("auto"),[Ec,jt]=m.useState("auto"),[Sr,gi]=m.useState("auto"),[Er,Wa]=m.useState("auto"),[pi,xi]=m.useState("slice"),[Fa,Tc]=m.useState("content-box"),[bi,yi]=m.useState("block"),[Tr,Ac]=m.useState("none"),[Yc,gn]=m.useState("none"),[Bt,Ar]=m.useState("baseline"),[Yr,Ia]=m.useState("start"),[Pa,vi]=m.useState("auto"),[zr,ji]=m.useState("auto"),[El,Lt]=m.useState("normal"),[Mr,Tl]=m.useState("normal"),[Wt,Cr]=m.useState("normal"),[pn,Ni]=m.useState("0px"),[xn,bn]=m.useState("clip"),[wi,lt]=m.useState("none"),[pa,yn]=m.useState("normal"),[Al,zc]=m.useState("normal"),[Xr,kr]=m.useState("normal"),[Yl,vn]=m.useState(8),[Si,Mc]=m.useState("manual"),[Cc,Xc]=m.useState("auto"),[Dr,kc]=m.useState("auto"),[Dc,Rc]=m.useState("none"),[_c,Oc]=m.useState("auto"),[Ei,Zc]=m.useState("auto"),[Uc,Hc]=m.useState("auto"),[Bc,Rr]=m.useState("none"),[Lc,qc]=m.useState("transform"),[Gc,Ti]=m.useState("none"),[Qc,Vc]=m.useState("visible"),[Jc,Kc]=m.useState("auto"),[$c,Wc]=m.useState("auto"),[Fc,Ic]=m.useState("auto"),[Pc,_r]=m.useState("auto"),[zl,e0]=m.useState("auto"),[Ai,Yi]=m.useState("auto"),[zi,Mi]=m.useState("static"),[Ci,el]=m.useState("visible"),[t0,a0]=m.useState("visible"),[l0,Xi]=m.useState("visible"),[ki,Ml]=m.useState("visible"),[Cl,n0]=m.useState("visible"),[jn,Di]=m.useState("auto"),[Ri,Or]=m.useState("auto"),[Zr,_i]=m.useState("auto"),[Oi,Zi]=m.useState("auto"),[r0,s0]=m.useState("auto"),[i0,o0]=m.useState("visible"),[u0,ut]=m.useState(1),[Xl,Ui]=m.useState("auto"),[Hi,Bi]=m.useState("normal"),[Li,Ur]=m.useState("normal"),[c0,tl]=m.useState("none"),[Hr,kl]=m.useState("none"),[Br,qi]=m.useState("none"),[xa,al]=m.useState("50% 50%"),[Lr,Gi]=m.useState("none"),[ba,Qi]=m.useState("view-box"),[Vi,Ji]=m.useState("50% 50%"),[d0,f0]=m.useState("visible"),[m0,Ki]=m.useState("flat"),[$i,qr]=m.useState("none"),[Xt,Nn]=m.useState("0s"),[Nt,ll]=m.useState("ease"),[Gr,wn]=m.useState("0s"),[Sn,Qr]=m.useState("1"),[ya,Wi]=m.useState("normal"),[En,nl]=m.useState("none"),[h0,ct]=m.useState("running"),[Vr,qt]=m.useState("all"),[Fi,Tn]=m.useState("0s"),[va,Jr]=m.useState("ease"),[Ii,Kr]=m.useState("0s"),[Pi,wt]=m.useState("normal"),nt=["../../images/hero_1.jpg","../../images/hero_2.png","../../images/hero_4.png"];m.useEffect(()=>{let Z;return f&&(Z=setInterval(()=>{c(W=>(W+1)%nt.length)},5e3)),()=>clearInterval(Z)},[f,nt.length]),m.useEffect(()=>{const Z=W=>{p({x:W.clientX,y:W.clientY}),H({x:W.clientX-h.x,y:W.clientY-h.y}),Ct(St=>[...St.slice(-20),{x:W.clientX,y:W.clientY}])};return window.addEventListener("mousemove",Z),()=>window.removeEventListener("mousemove",Z)},[h.x,h.y]),m.useEffect(()=>{const Z=()=>{g(window.scrollY),q(ja())};return window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)},[]),m.useEffect(()=>{const Z=()=>{w({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",Z),Z(),()=>window.removeEventListener("resize",Z)},[]),m.useEffect(()=>{const Z=setInterval(()=>{R(new Date),yt(W=>W+ie),B(1+Math.sin(Date.now()/1e3)*.5),ve(1+Math.cos(Date.now()/2e3)*.3)},50);return()=>clearInterval(Z)},[ie]),m.useEffect(()=>{const Z=setInterval(()=>{P(W=>1+Math.sin(Date.now()/3e3)*.5),ae(W=>.5+Math.cos(Date.now()/2e3)*.3),L(W=>3+Math.sin(Date.now()/4e3)*2),ke(W=>1+Math.sin(Date.now()/5e3)*.2),yl(W=>.7+Math.cos(Date.now()/3500)*.3)},100);return()=>clearInterval(Z)},[]),m.useEffect(()=>{const Z=setInterval(()=>{F(W=>50+Math.floor(Math.sin(Date.now()/2e3)*30)),j(W=>100+Math.floor(Math.cos(Date.now()/3e3)*50))},500);return()=>clearInterval(Z)},[]),m.useEffect(()=>{const Z=setInterval(()=>{const W=["purple","blue","cyan","pink","indigo","green"],St=W.indexOf(ge);ue(W[(St+1)%W.length])},1e4);return()=>clearInterval(Z)},[ge]);const ja=()=>{const Z=["hero","features","stats","testimonials"],W=window.scrollY/(document.body.scrollHeight-window.innerHeight);return Z[Math.floor(W*Z.length)]||"hero"},Dl=()=>{c(Z=>(Z+1)%nt.length)},rl=()=>{c(Z=>(Z-1+nt.length)%nt.length)},dt=Z=>{c(Z)},ft=[{icon:n.jsx(Cm,{className:"w-8 h-8"}),title:"AI-Powered Matching",description:"Advanced algorithms analyze skills, experience, and cultural fit to find perfect candidates instantly.",gradient:"from-purple-500 to-pink-500"},{icon:n.jsx(Xm,{className:"w-8 h-8"}),title:"Real-time Code Assessment",description:"Evaluate technical skills with live coding challenges and automated scoring systems.",gradient:"from-blue-500 to-cyan-500"},{icon:n.jsx(qa,{className:"w-8 h-8"}),title:"Predictive Analytics",description:"Data-driven insights to predict candidate success and optimize hiring decisions.",gradient:"from-green-500 to-emerald-500"},{icon:n.jsx(oh,{className:"w-8 h-8"}),title:"Secure & Compliant",description:"Enterprise-grade security with full compliance to data protection regulations.",gradient:"from-orange-500 to-red-500"},{icon:n.jsx(Qu,{className:"w-8 h-8"}),title:"Global Talent Pool",description:"Access to millions of developers worldwide with diverse skills and backgrounds.",gradient:"from-indigo-500 to-purple-500"},{icon:n.jsx(ir,{className:"w-8 h-8"}),title:"Lightning Fast",description:"Reduce hiring time by 80% with streamlined workflows and automation.",gradient:"from-pink-500 to-rose-500"}],Gt=[{number:"50K+",label:"Developers",icon:n.jsx(Xm,{className:"w-6 h-6"})},{number:"1000+",label:"Companies",icon:n.jsx(Qu,{className:"w-6 h-6"})},{number:"95%",label:"Success Rate",icon:n.jsx(qa,{className:"w-6 h-6"})},{number:"24h",label:"Avg. Hire Time",icon:n.jsx(ir,{className:"w-6 h-6"})}];return n.jsxs("div",{className:"min-h-screen bg-black text-white overflow-hidden relative",style:{backgroundImage:'url("../../images/hero_1.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"},children:[n.jsxs("div",{className:"fixed inset-0 z-0",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900"}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-10 left-10 w-32 h-32 animate-3d-cube",children:n.jsx("div",{className:"w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-purple-400/30 transform-gpu"})}),n.jsx("div",{className:"absolute top-1/3 right-20 w-24 h-24 animate-3d-cube-reverse",children:n.jsx("div",{className:"w-full h-full bg-gradient-to-br from-cyan-500/30 to-pink-500/30 border border-cyan-400/30 transform-gpu"})}),n.jsx("div",{className:"absolute top-1/4 right-1/3 w-40 h-40 animate-3d-sphere",children:n.jsx("div",{className:"w-full h-full bg-gradient-to-tr from-blue-500/40 to-purple-500/40 rounded-full shadow-2xl"})}),n.jsx("div",{className:"absolute bottom-1/3 right-1/4 w-36 h-36 animate-3d-sphere-reverse",children:n.jsx("div",{className:"w-full h-full bg-gradient-to-tr from-pink-500/40 to-cyan-500/40 rounded-full shadow-2xl"})})]}),n.jsx("div",{className:"absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/25 to-blue-600/25 rounded-full blur-3xl animate-float-orb-3d"}),n.jsx("div",{className:"absolute top-1/2 right-0 w-[700px] h-[700px] bg-gradient-to-r from-cyan-600/25 to-pink-600/25 rounded-full blur-3xl animate-float-orb-3d-reverse"}),n.jsx("div",{className:"absolute bottom-0 left-1/2 w-[900px] h-[900px] bg-gradient-to-r from-indigo-600/25 to-purple-600/25 rounded-full blur-3xl animate-float-orb-3d"}),n.jsx("div",{className:"absolute inset-0",children:[...Array(30)].map((Z,W)=>n.jsx("div",{className:"absolute w-2 h-2 bg-gradient-to-r from-purple-400/50 to-cyan-400/50 rounded-full animate-particle-float-3d",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*8}s`,animationDuration:`${20+Math.random()*15}s`}},W))}),n.jsx("div",{className:"absolute inset-0 bg-grid-white/15 bg-[size:80px_80px] animate-grid-move-3d"}),n.jsx("div",{className:"absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-cyan-500/40 rounded-full blur-3xl pointer-events-none transition-all duration-150 ease-out",style:{left:h.x-250,top:h.y-250}}),n.jsx("div",{className:"absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur-2xl pointer-events-none transition-all duration-200 ease-out",style:{left:h.x-150,top:h.y-150}}),n.jsx("div",{className:"absolute w-[150px] h-[150px] bg-gradient-to-r from-cyan-500/60 to-pink-500/60 rounded-full blur-xl pointer-events-none transition-all duration-300 ease-out",style:{left:h.x-75,top:h.y-75}})]}),n.jsx("nav",{className:"relative z-10 px-6 py-6",children:n.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[n.jsxs("div",{className:"flex items-center gap-3 group",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:rotate-12",children:n.jsx(km,{className:"w-7 h-7 text-white animate-icon-3d-spin"})}),n.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"DevHire"})]}),n.jsx("div",{className:"hidden md:flex items-center gap-10",children:n.jsx(Ie,{to:"/register",className:"px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 hover:translate-z-10",onMouseEnter:Z=>Z.target.classList.add("animate-button-3d-hover"),onMouseLeave:Z=>Z.target.classList.remove("animate-button-3d-hover"),children:"Get Started"})}),n.jsx("button",{onClick:()=>S(!v),className:"md:hidden text-white w-10 h-10 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 transform-gpu transition-all duration-300 hover:scale-110 hover:rotate-6",children:v?n.jsx(Wu,{className:"w-6 h-6"}):n.jsx(ih,{className:"w-6 h-6"})})]})}),v&&n.jsx("div",{className:"md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl",children:n.jsxs("div",{className:"flex flex-col items-center justify-center h-full space-y-8",children:[n.jsx(Ie,{to:"/register",className:"px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white transform-gpu transition-all duration-300 hover:scale-105",onClick:()=>S(!1),children:"Get Started"}),n.jsx("button",{onClick:()=>S(!1),className:"text-gray-400 hover:text-white transition-colors",children:n.jsx(Wu,{className:"w-6 h-6"})})]})}),n.jsx("section",{className:"relative z-10 min-h-screen flex items-center px-6",children:n.jsx("div",{className:"container mx-auto",children:n.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[n.jsxs("div",{className:"space-y-8",children:[n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30",children:[n.jsx(xl,{className:"w-4 h-4 text-purple-400"}),n.jsx("span",{className:"text-sm text-purple-300",children:"AI-Powered Hiring Platform"})]}),n.jsxs("h1",{className:"text-5xl lg:text-7xl font-bold leading-tight animate-text-glow",children:[n.jsx("span",{className:"block",children:"Hire the"}),n.jsx("span",{className:"block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent",children:"Future of Tech"}),n.jsx("span",{className:"block",children:"Talent"})]}),n.jsx("p",{className:"text-xl text-gray-300 max-w-lg",children:"Revolutionize your hiring process with AI-driven candidate matching, real-time code assessments, and predictive analytics."})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-6",children:[n.jsxs(Ie,{to:"/register",className:"group px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl font-bold text-white transform-gpu transition-all duration-700 hover:scale-125 hover:shadow-4xl hover:shadow-purple-500/70 flex items-center justify-center gap-4 relative overflow-hidden animate-pulse-glow",onMouseEnter:Z=>Z.target.classList.add("animate-button-3d-hover"),onMouseLeave:Z=>Z.target.classList.remove("animate-button-3d-hover"),children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),n.jsx(ir,{className:"w-8 h-8 relative z-10 group-hover:animate-icon-3d-spin transform transition-all duration-500 group-hover:scale-150 group-hover:rotate-180"}),n.jsx("span",{className:"relative z-10 text-xl font-bold tracking-wide transform transition-all duration-500 group-hover:scale-110",children:"Start Hiring Now"}),n.jsx("div",{className:"absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-90 transition-all duration-700 animate-pulse"})]}),n.jsxs("button",{className:"group px-12 py-6 bg-gradient-to-r from-white/15 to-white/25 backdrop-blur-xl rounded-3xl font-bold border-2 border-white/40 transform-gpu transition-all duration-700 hover:scale-125 hover:shadow-3xl hover:shadow-white/50 flex items-center justify-center gap-4 relative overflow-hidden animate-glow-pulse",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/20 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),n.jsx(Dm,{className:"w-8 h-8 relative z-10 group-hover:animate-icon-3d-spin transform transition-all duration-500 group-hover:scale-150 group-hover:rotate-180"}),n.jsx("span",{className:"relative z-10 text-xl font-bold tracking-wide transform transition-all duration-500 group-hover:scale-110",children:"Watch Demo"}),n.jsx("div",{className:"absolute -inset-2 bg-gradient-to-r from-white/30 to-white/40 rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition-all duration-700 animate-pulse"})]})]}),n.jsx("div",{className:"flex items-center gap-8 pt-8",children:Gt.map((Z,W)=>n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"text-purple-400",children:Z.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-2xl font-bold text-white",children:Z.number}),n.jsx("div",{className:"text-sm text-gray-400",children:Z.label})]})]},W))})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-3xl rotate-45 animate-spin-slow shadow-2xl shadow-purple-500/50"}),n.jsx("div",{className:"absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full animate-pulse shadow-2xl shadow-cyan-500/50"}),n.jsx("div",{className:"absolute top-1/2 -left-48 w-56 h-56 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-2xl animate-bounce-slow shadow-2xl shadow-indigo-500/40"}),n.jsx("div",{className:"absolute top-1/3 -right-48 w-72 h-72 bg-gradient-to-r from-pink-600/30 to-cyan-600/30 rounded-full animate-float-slow shadow-2xl shadow-pink-500/40"}),n.jsxs("div",{className:"relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl border-2 border-slate-700/50 overflow-hidden shadow-2xl shadow-black/50",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl border-2 border-purple-500/20 pointer-events-none"}),n.jsx("div",{className:"absolute inset-1 rounded-3xl border border-slate-600/30 pointer-events-none"}),n.jsx("div",{className:"absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 via-black/60 to-transparent p-6",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"}),n.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"}),n.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"}),n.jsx("div",{className:"ml-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full",children:n.jsx("span",{className:"text-xs text-white/80 font-medium",children:"DevHire Platform"})})]}),n.jsx("div",{className:"flex items-center gap-2",children:n.jsx("div",{className:"px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30",children:n.jsx("span",{className:"text-xs text-purple-300 font-medium",children:"Live Demo"})})})]})}),n.jsxs("div",{className:"relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/70",children:[nt.map((Z,W)=>n.jsxs("div",{className:`absolute inset-0 transition-all duration-1500 ease-in-out ${W===i?"opacity-100 scale-100":"opacity-0 scale-95"}`,children:[n.jsx("img",{src:Z,alt:`DevHire Dashboard ${W+1}`,className:"w-full h-full object-cover transform-gpu transition-all duration-1500",style:{filter:W===i?"brightness(1) contrast(1.1)":"brightness(0.8) contrast(0.9)"}}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 mix-blend-overlay"})]},W)),n.jsxs("div",{className:"absolute top-20 left-6 right-6 z-30 flex justify-between items-center",children:[n.jsxs("div",{className:"px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/20",children:[i+1," / ",nt.length]}),n.jsx("div",{className:"flex gap-3",children:n.jsx("button",{onClick:()=>u(!f),className:"w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors",children:f?n.jsx(gx,{className:"w-4 h-4"}):n.jsx(Dm,{className:"w-4 h-4"})})})]}),n.jsx("button",{onClick:rl,className:"absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110",children:n.jsx(R1,{className:"w-5 h-5"})}),n.jsx("button",{onClick:Dl,className:"absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110",children:n.jsx(O1,{className:"w-5 h-5"})}),n.jsx("div",{className:"absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex gap-3",children:nt.map((Z,W)=>n.jsx("button",{onClick:()=>dt(W),className:`w-2 h-2 rounded-full transition-all duration-300 ${W===i?"w-8 bg-white":"bg-white/50 hover:bg-white/75"}`},W))})]})]})]})]})})}),n.jsx("section",{id:"features",className:"relative z-10 py-20 px-6",children:n.jsxs("div",{className:"container mx-auto",children:[n.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-6",children:[n.jsx(uh,{className:"w-4 h-4 text-purple-400"}),n.jsx("span",{className:"text-sm text-purple-300",children:"CUTTING-EDGE FEATURES"})]}),n.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-6",children:n.jsx("span",{className:"bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent",children:"Next-Generation Hiring"})}),n.jsx("p",{className:"text-xl text-gray-300",children:"Experience the future of recruitment with our advanced AI-powered platform"})]}),n.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:ft.map((Z,W)=>n.jsxs("div",{className:"group relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20",children:[n.jsx("div",{className:`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${Z.gradient} rounded-xl mb-6`,children:n.jsx("div",{className:"text-white",children:Z.icon})}),n.jsx("h3",{className:"text-2xl font-bold mb-4",children:Z.title}),n.jsx("p",{className:"text-gray-300",children:Z.description})]},W))})]})}),n.jsx("section",{id:"stats",className:"relative z-10 py-20 px-6",children:n.jsx("div",{className:"container mx-auto",children:n.jsx("div",{className:"bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-12",children:n.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[{number:"50K+",label:"Active Developers",change:"+12%"},{number:"1000+",label:"Companies",change:"+25%"},{number:"95%",label:"Success Rate",change:"+5%"},{number:"24h",label:"Avg. Hire Time",change:"-80%"}].map((Z,W)=>n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2",children:Z.number}),n.jsx("div",{className:"text-gray-300 mb-2",children:Z.label}),n.jsx("div",{className:`text-sm font-semibold ${Z.change.startsWith("+")?"text-green-400":"text-cyan-400"}`,children:Z.change})]},W))})})})}),n.jsx("section",{className:"relative z-10 py-20 px-6",children:n.jsxs("div",{className:"container mx-auto",children:[n.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-6",children:[n.jsx(qa,{className:"w-4 h-4 text-purple-400"}),n.jsx("span",{className:"text-sm text-purple-300",children:"REAL-TIME ANALYTICS"})]}),n.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-6",children:n.jsx("span",{className:"bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent",children:"Industry-Leading Metrics"})}),n.jsx("p",{className:"text-xl text-gray-300",children:"Track your hiring success with our advanced 3D analytics dashboard"})]}),n.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 mb-12",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl border border-purple-500/30 p-8 overflow-hidden group",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("h3",{className:"text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"Hiring Growth Trajectory"}),n.jsx("div",{className:"relative h-64 mb-6",children:n.jsx("div",{className:"absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 h-full",children:[{height:"40%",label:"Q1",value:"2.1K",color:"from-purple-500 to-purple-600"},{height:"55%",label:"Q2",value:"3.8K",color:"from-blue-500 to-blue-600"},{height:"70%",label:"Q3",value:"5.2K",color:"from-cyan-500 to-cyan-600"},{height:"85%",label:"Q4",value:"7.1K",color:"from-pink-500 to-pink-600"}].map((Z,W)=>n.jsxs("div",{className:"flex-1 flex flex-col items-center justify-end",children:[n.jsx("div",{className:`w-full bg-gradient-to-t ${Z.color} rounded-t-lg transform-gpu transition-all duration-700 hover:scale-105 hover:translate-y-2 relative group`,style:{height:Z.height},children:n.jsx("div",{className:"absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity",children:Z.value})}),n.jsx("span",{className:"text-xs text-gray-400 mt-2",children:Z.label})]},W))})}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-sm text-gray-400",children:"Quarterly Growth"}),n.jsx("span",{className:"text-sm font-semibold text-green-400",children:"+238% YoY"})]})]})]}),n.jsxs("div",{className:"relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl border border-purple-500/30 p-8 overflow-hidden group",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-3xl"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("h3",{className:"text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"In-Demand Skills Distribution"}),n.jsx("div",{className:"relative h-64 mb-6",children:n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsxs("div",{className:"relative w-48 h-48",children:[[{percentage:85,color:"from-purple-500 to-purple-600",label:"React",offset:0},{percentage:78,color:"from-blue-500 to-blue-600",label:"Python",offset:90},{percentage:72,color:"from-cyan-500 to-cyan-600",label:"AWS",offset:180},{percentage:68,color:"from-pink-500 to-pink-600",label:"Node.js",offset:270}].map((Z,W)=>n.jsxs("div",{className:"absolute inset-0",style:{transform:`rotate(${Z.offset}deg)`},children:[n.jsx("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 w-2 bg-gradient-to-t ${Z.color} rounded-full origin-bottom transform-gpu transition-all duration-1000 hover:scale-110`,style:{height:`${Z.percentage*.8}px`,animation:`pulse-slow ${2+W*.5}s ease-in-out infinite`}}),n.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap",style:{transform:`rotate(-${Z.offset}deg)`},children:[Z.label,": ",Z.percentage,"%"]})]},W)),n.jsx("div",{className:"absolute inset-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-2 border-purple-500/30 flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"4.2K"}),n.jsx("div",{className:"text-xs text-gray-400",children:"Active Skills"})]})})]})})}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-sm text-gray-400",children:"Top Technologies"}),n.jsx("span",{className:"text-sm font-semibold text-cyan-400",children:"Updated Live"})]})]})]})]}),n.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{title:"Time to Hire",value:"24h",change:"-80%",icon:n.jsx(ir,{className:"w-6 h-6"}),gradient:"from-purple-500 to-pink-500",description:"Average placement time"},{title:"Success Rate",value:"95%",change:"+15%",icon:n.jsx(qa,{className:"w-6 h-6"}),gradient:"from-blue-500 to-cyan-500",description:"Successful matches"},{title:"Global Reach",value:"150+",change:"+45%",icon:n.jsx(Qu,{className:"w-6 h-6"}),gradient:"from-green-500 to-emerald-500",description:"Countries covered"},{title:"AI Accuracy",value:"98.7%",change:"+12%",icon:n.jsx(Cm,{className:"w-6 h-6"}),gradient:"from-orange-500 to-red-500",description:"Match precision rate"}].map((Z,W)=>n.jsxs("div",{className:"group relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-2xl border border-purple-500/30 p-6 transform-gpu transition-all duration-500 hover:scale-105 hover:translate-z-10 hover:shadow-2xl hover:shadow-purple-500/20",children:[n.jsx("div",{className:`absolute inset-0 bg-gradient-to-r ${Z.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${Z.gradient} rounded-xl mb-4 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`,children:n.jsx("div",{className:"text-white",children:Z.icon})}),n.jsx("h4",{className:"text-lg font-semibold text-white mb-2",children:Z.title}),n.jsxs("div",{className:"flex items-baseline gap-2 mb-2",children:[n.jsx("span",{className:"text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent",children:Z.value}),n.jsx("span",{className:`text-sm font-semibold ${Z.change.startsWith("+")?"text-green-400":"text-cyan-400"}`,children:Z.change})]}),n.jsx("p",{className:"text-sm text-gray-400",children:Z.description}),n.jsx("div",{className:"mt-4 h-1 bg-slate-700 rounded-full overflow-hidden",children:n.jsx("div",{className:`h-full bg-gradient-to-r ${Z.gradient} transform-gpu transition-all duration-1000`,style:{width:"0%",animation:`progress-fill ${2+W*.3}s ease-out forwards`}})})]})]},W))})]})}),n.jsx("section",{className:"relative z-10 py-20 px-6",children:n.jsx("div",{className:"container mx-auto text-center",children:n.jsxs("div",{className:"bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-16",children:[n.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-6",children:n.jsx("span",{className:"bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent",children:"Ready to Revolutionize Your Hiring?"})}),n.jsx("p",{className:"text-xl text-gray-300 mb-8 max-w-2xl mx-auto",children:"Join thousands of companies already using DevHire to build their dream teams"}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx(Ie,{to:"/register",className:"px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105",children:"Start Free Trial"}),n.jsx("button",{className:"px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300",children:"Schedule Demo"})]})]})})}),n.jsx("footer",{className:"relative z-10 border-t border-purple-500/30 py-12 px-6",children:n.jsx("div",{className:"container mx-auto",children:n.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-6 md:mb-0",children:[n.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center",children:n.jsx(km,{className:"w-5 h-5 text-white"})}),n.jsx("span",{className:"text-xl font-bold",children:"DevHire"})]}),n.jsxs("div",{className:"text-gray-400 text-sm",children:["© ",new Date().getFullYear()," DevHire. All rights reserved."]})]})})}),n.jsx("style",{children:`
        @keyframes 3d-cube {
          0%, 100% {
            transform: rotateX(0deg) rotateY(0deg) translateZ(0px);
            opacity: 0.7;
          }
          25% {
            transform: rotateX(45deg) rotateY(45deg) translateZ(50px);
            opacity: 0.9;
          }
          50% {
            transform: rotateX(90deg) rotateY(90deg) translateZ(30px);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(135deg) rotateY(135deg) translateZ(60px);
            opacity: 0.95;
          }
        }
        
        @keyframes 3d-cube-reverse {
          0%, 100% {
            transform: rotateX(360deg) rotateY(360deg) translateZ(0px);
            opacity: 0.7;
          }
          25% {
            transform: rotateX(315deg) rotateY(315deg) translateZ(50px);
            opacity: 0.9;
          }
          50% {
            transform: rotateX(270deg) rotateY(270deg) translateZ(30px);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(225deg) rotateY(225deg) translateZ(60px);
            opacity: 0.95;
          }
        }
        
        @keyframes 3d-sphere {
          0%, 100% {
            transform: translateZ(0px) scale(1) rotateX(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateZ(100px) scale(1.2) rotateX(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateZ(50px) scale(0.9) rotateX(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translateZ(150px) scale(1.1) rotateX(270deg);
            opacity: 0.9;
          }
        }
        
        @keyframes 3d-sphere-reverse {
          0%, 100% {
            transform: translateZ(0px) scale(1) rotateX(360deg);
            opacity: 0.6;
          }
          25% {
            transform: translateZ(100px) scale(1.2) rotateX(270deg);
            opacity: 0.8;
          }
          50% {
            transform: translateZ(50px) scale(0.9) rotateX(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translateZ(150px) scale(1.1) rotateX(90deg);
            opacity: 0.9;
          }
        }
        
        @keyframes float-orb-3d {
          0%, 100% {
            transform: translate(0, 0) translateZ(0px) scale(1) rotateX(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translate(100px, -150px) translateZ(100px) scale(1.3) rotateX(45deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50px, -100px) translateZ(50px) scale(0.8) rotateX(90deg);
            opacity: 0.5;
          }
          75% {
            transform: translate(-100px, 150px) translateZ(150px) scale(1.2) rotateX(135deg);
            opacity: 0.7;
          }
        }
        
        @keyframes float-orb-3d-reverse {
          0%, 100% {
            transform: translate(0, 0) translateZ(0px) scale(1) rotateX(360deg);
            opacity: 0.4;
          }
          25% {
            transform: translate(-100px, 150px) translateZ(100px) scale(1.3) rotateX(315deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(50px, 100px) translateZ(50px) scale(0.8) rotateX(270deg);
            opacity: 0.5;
          }
          75% {
            transform: translate(100px, -150px) translateZ(150px) scale(1.2) rotateX(225deg);
            opacity: 0.7;
          }
        }
        
        @keyframes particle-float-3d {
          0% {
            transform: translateY(100vh) translateX(0) translateZ(0px) scale(0) rotateX(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) translateX(-30px) translateZ(50px) scale(1) rotateX(90deg);
          }
          50% {
            transform: translateY(50vh) translateX(20px) translateZ(100px) scale(1.2) rotateX(180deg);
            opacity: 0.8;
          }
          90% {
            opacity: 1;
            transform: translateY(10vh) translateX(30px) translateZ(50px) scale(1) rotateX(270deg);
          }
          100% {
            transform: translateY(0) translateX(0) translateZ(0px) scale(0) rotateX(360deg);
            opacity: 0;
          }
        }
        
        @keyframes grid-move-3d {
          0% {
            transform: translate(0, 0) translateZ(0px) rotateX(0deg);
          }
          50% {
            transform: translate(40px, 40px) translateZ(20px) rotateX(2deg);
          }
          100% {
            transform: translate(80px, 80px) translateZ(0px) rotateX(0deg);
          }
        }
        
        @keyframes button-3d-hover {
          0% {
            transform: translateZ(0px) scale(1) rotateX(0deg);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% {
            transform: translateZ(10px) scale(1.05) rotateX(-5deg);
            box-shadow: 0 10px 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(59, 130, 246, 0.6);
          }
          100% {
            transform: translateZ(15px) scale(1.1) rotateX(-10deg);
            box-shadow: 0 15px 50px rgba(147, 51, 234, 0.9), 0 0 80px rgba(59, 130, 246, 0.7);
          }
        }
        
        @keyframes icon-3d-spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
        
        .animate-3d-cube {
          animation: 3d-cube 15s ease-in-out infinite;
        }
        
        .animate-3d-cube-reverse {
          animation: 3d-cube-reverse 18s ease-in-out infinite;
        }
        
        .animate-3d-sphere {
          animation: 3d-sphere 12s ease-in-out infinite;
        }
        
        .animate-3d-sphere-reverse {
          animation: 3d-sphere-reverse 14s ease-in-out infinite;
        }
        
        .animate-float-orb-3d {
          animation: float-orb-3d 25s ease-in-out infinite;
        }
        
        .animate-float-orb-3d-reverse {
          animation: float-orb-3d-reverse 30s ease-in-out infinite;
        }
        
        .animate-particle-float-3d {
          animation: particle-float-3d linear infinite;
        }
        
        .animate-grid-move-3d {
          animation: grid-move-3d 15s linear infinite;
        }
        
        .animate-button-3d-hover {
          animation: button-3d-hover 0.6s ease-in-out;
        }
        
        .animate-icon-3d-spin {
          animation: icon-3d-spin 20s linear infinite;
        }
        
        .bg-grid-white\\/15 {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px);
        }
        
        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(50px, -100px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-30px, -50px) scale(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translate(-50px, 100px) scale(1.05);
            opacity: 0.9;
          }
        }
        
        @keyframes float-orb-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(-50px, 100px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(30px, 50px) scale(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translate(50px, -100px) scale(1.05);
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes pulse-slow-reverse {
          0%, 100% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) translateX(-20px) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(10vh) translateX(20px) scale(1);
          }
          100% {
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(59, 130, 246, 0.6);
          }
        }
        
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float-orb {
          animation: float-orb 20s ease-in-out infinite;
        }
        
        .animate-float-orb-reverse {
          animation: float-orb-reverse 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 8s ease-in-out infinite;
        }
        
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 10s linear infinite;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .bg-grid-white\\/10 {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-2000 {
          animation-delay: 2000ms;
        }
        
        /* ========================================
           MASSIVE 3D ANIMATION SYSTEM
           ======================================== */
        
        /* Professional Corporate Animations */
        @keyframes corporate-wall-slide {
          0% {
            transform: translateX(-100%) translateY(0px) translateZ(0px) rotateY(0deg);
            opacity: 0;
            filter: brightness(0.8) contrast(1.1);
          }
          20% {
            transform: translateX(-50%) translateY(-20px) translateZ(100px) rotateY(15deg);
            opacity: 0.4;
            filter: brightness(0.9) contrast(1.2);
          }
          40% {
            transform: translateX(-25%) translateY(-40px) translateZ(200px) rotateY(30deg);
            opacity: 0.7;
            filter: brightness(1) contrast(1.3);
          }
          60% {
            transform: translateX(0%) translateY(-60px) translateZ(300px) rotateY(45deg);
            opacity: 0.9;
            filter: brightness(1.1) contrast(1.4);
          }
          80% {
            transform: translateX(25%) translateY(-40px) translateZ(200px) rotateY(30deg);
            opacity: 0.7;
            filter: brightness(1) contrast(1.3);
          }
          100% {
            transform: translateX(50%) translateY(-20px) translateZ(100px) rotateY(15deg);
            opacity: 0.4;
            filter: brightness(0.9) contrast(1.2);
          }
        }
        
        @keyframes professional-data-flow {
          0% {
            transform: translateY(100vh) translateX(0px) scale(0.1) rotateZ(0deg);
            opacity: 0;
            filter: hue-rotate(0deg) brightness(0.8);
          }
          100% {
            transform: translateY(0vh) translateX(-100px) scale(2.1) rotateZ(360deg);
            opacity: 0;
            filter: hue-rotate(300deg) brightness(0.8);
          }
        }
        
        @keyframes executive-panel-glow {
          0% {
            transform: scale(1) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.8);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            transform: scale(1.1) rotateX(10deg) rotateY(20deg);
            opacity: 0.7;
            filter: brightness(1) saturate(1);
            box-shadow: 0 0 60px rgba(147, 51, 234, 0.7);
          }
          100% {
            transform: scale(1) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.8);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
        }
        
        @keyframes business-grid-rotate {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
            opacity: 0.4;
            filter: hue-rotate(0deg) brightness(0.9);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(1.4);
            opacity: 0.8;
            filter: hue-rotate(180deg) brightness(1.3);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(1);
            opacity: 0.4;
            filter: hue-rotate(360deg) brightness(0.9);
          }
        }
        
        @keyframes professional-float-orbital {
          0% {
            transform: rotate(0deg) translateX(200px) rotate(0deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9);
          }
          25% {
            transform: rotate(90deg) translateX(220px) rotate(-90deg) scale(1.1);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1);
          }
          50% {
            transform: rotate(180deg) translateX(250px) rotate(-180deg) scale(1.25);
            opacity: 0.8;
            filter: brightness(1.05) saturate(1.15);
          }
          75% {
            transform: rotate(270deg) translateX(220px) rotate(-270deg) scale(1.1);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1);
          }
          100% {
            transform: rotate(360deg) translateX(200px) rotate(-360deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9);
          }
        }
        
        @keyframes enterprise-pulse-wave {
          0% {
            transform: scale(0.8) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.7) contrast(0.9);
          }
          25% {
            transform: scale(1.1) translateX(30px) translateY(-15px);
            opacity: 0.5;
            filter: brightness(0.85) contrast(1.05);
          }
          50% {
            transform: scale(1.4) translateX(60px) translateY(-30px);
            opacity: 0.8;
            filter: brightness(1) contrast(1.2);
          }
          75% {
            transform: scale(1.1) translateX(30px) translateY(-15px);
            opacity: 0.5;
            filter: brightness(0.85) contrast(1.05);
          }
          100% {
            transform: scale(0.8) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.7) contrast(0.9);
          }
        }
        
        @keyframes corporate-helix-spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px) translateY(0px);
            opacity: 0.3;
            filter: hue-rotate(0deg) brightness(0.9) saturate(0.9);
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(22.5deg) translateZ(50px) translateY(-25px);
            opacity: 0.5;
            filter: hue-rotate(90deg) brightness(1) saturate(1);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) translateZ(100px) translateY(-50px);
            opacity: 0.8;
            filter: hue-rotate(180deg) brightness(1.15) saturate(1.15);
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(67.5deg) translateZ(50px) translateY(-25px);
            opacity: 0.5;
            filter: hue-rotate(270deg) brightness(1) saturate(1);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) translateZ(0px) translateY(0px);
            opacity: 0.3;
            filter: hue-rotate(360deg) brightness(0.9) saturate(0.9);
          }
        }
        
        @keyframes professional-morph-transition {
          0% {
            border-radius: 20% 80% 80% 20% / 20% 80% 20% 80%;
            transform: rotate(0deg) scale(1) translateX(0px) translateY(0px);
            opacity: 0.4;
            filter: hue-rotate(0deg) brightness(0.9) saturate(0.9);
          }
          25% {
            border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
            transform: rotate(90deg) scale(1.2) translateX(20px) translateY(-10px);
            opacity: 0.6;
            filter: hue-rotate(90deg) brightness(1) saturate(1);
          }
          50% {
            border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;
            transform: rotate(180deg) scale(1.4) translateX(40px) translateY(-20px);
            opacity: 0.8;
            filter: hue-rotate(180deg) brightness(1.1) saturate(1.1);
          }
          75% {
            border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
            transform: rotate(270deg) scale(1.2) translateX(20px) translateY(-10px);
            opacity: 0.6;
            filter: hue-rotate(270deg) brightness(1) saturate(1);
          }
          100% {
            border-radius: 20% 80% 80% 20% / 20% 80% 20% 80%;
            transform: rotate(360deg) scale(1) translateX(0px) translateY(0px);
            opacity: 0.4;
            filter: hue-rotate(360deg) brightness(0.9) saturate(0.9);
          }
        }
        
        /* 3D Cube Animations */
        @keyframes cube-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
            opacity: 0.3;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) translateZ(50px);
            opacity: 0.6;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) translateZ(100px);
            opacity: 0.9;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) translateZ(50px);
            opacity: 0.6;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) translateZ(0px);
            opacity: 0.3;
          }
        }
        
        @keyframes cube-float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg);
            filter: hue-rotate(0deg) brightness(1);
          }
          25% {
            transform: translateY(-30px) translateX(20px) translateZ(60px) rotateX(90deg) rotateY(45deg);
            filter: hue-rotate(90deg) brightness(1.2);
          }
          50% {
            transform: translateY(-60px) translateX(-20px) translateZ(120px) rotateX(180deg) rotateY(90deg);
            filter: hue-rotate(180deg) brightness(1.4);
          }
          75% {
            transform: translateY(-30px) translateX(-40px) translateZ(60px) rotateX(270deg) rotateY(135deg);
            filter: hue-rotate(270deg) brightness(1.2);
          }
        }
        
        @keyframes corporate-wall-expand {
          0% {
            transform: scaleX(0.1) scaleY(0.1) scaleZ(0.1) translateX(-50%) translateY(-50%);
            opacity: 0.1;
            filter: brightness(0.5) contrast(0.8);
          }
          50% {
            transform: scaleX(0.9) scaleY(0.9) scaleZ(0.9) translateX(10%) translateY(10%);
            opacity: 0.7;
            filter: brightness(1.1) contrast(1.3);
          }
          100% {
            transform: scaleX(1.5) scaleY(1.5) scaleZ(1.5) translateX(50%) translateY(50%);
            opacity: 0.3;
            filter: brightness(0.7) contrast(0.9);
          }
        }
        
        @keyframes cube-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          25% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(90deg) rotateY(45deg) rotateZ(45deg);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
          50% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(180deg) rotateY(90deg) rotateZ(90deg);
            box-shadow: 0 0 60px rgba(59, 130, 246, 1);
          }
          75% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(270deg) rotateY(135deg) rotateZ(135deg);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }
        
        @keyframes professional-data-stream {
          0% {
            transform: translateY(-100vh) translateX(0px) rotateZ(0deg) scale(0.5);
            opacity: 0;
            filter: hue-rotate(0deg) brightness(0.8) blur(2px);
          }
          50% {
            transform: translateY(0vh) translateX(-100px) rotateZ(180deg) scale(1.5);
            opacity: 1;
            filter: hue-rotate(180deg) brightness(1.2) blur(0px);
          }
          100% {
            transform: translateY(100vh) translateX(0px) rotateZ(360deg) scale(0.5);
            opacity: 0;
            filter: hue-rotate(360deg) brightness(0.8) blur(2px);
          }
        }
        
        @keyframes executive-panel-slide {
          0% {
            transform: translateX(-100vw) translateY(0px) rotateY(90deg) scale(0.5);
            opacity: 0;
            filter: brightness(0.7) saturate(0.7);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.2);
          }
          50% {
            transform: translateX(0vw) translateY(-60px) rotateY(45deg) scale(1.1);
            opacity: 0.8;
            filter: brightness(1) saturate(1);
            box-shadow: 0 0 70px rgba(147, 51, 234, 0.8);
          }
          100% {
            transform: translateX(100vw) translateY(0px) rotateY(0deg) scale(0.5);
            opacity: 0;
            filter: brightness(0.7) saturate(0.7);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.2);
          }
        }
        
        @keyframes business-hologram-float {
          0% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.3;
            filter: brightness(0.8) hue-rotate(0deg) blur(1px);
          }
          50% {
            transform: translateY(-60px) translateX(60px) translateZ(120px) rotateX(180deg) rotateY(90deg) rotateZ(45deg);
            opacity: 0.9;
            filter: brightness(1.1) hue-rotate(180deg) blur(0.4px);
          }
          100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(360deg) rotateY(180deg) rotateZ(90deg);
            opacity: 0.3;
            filter: brightness(0.8) hue-rotate(360deg) blur(1px);
          }
        }
        
        @keyframes corporate-energy-field {
          0% {
            transform: scale(0.5) rotate(0deg) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(0deg);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.3), inset 0 0 10px rgba(6, 182, 212, 0.3);
          }
          50% {
            transform: scale(1.2) rotate(180deg) translateX(80px) translateY(-40px);
            opacity: 0.9;
            filter: brightness(1) saturate(1.2) hue-rotate(180deg);
            box-shadow: 0 0 50px rgba(147, 51, 234, 0.7), inset 0 0 50px rgba(6, 182, 212, 0.7);
          }
          100% {
            transform: scale(0.5) rotate(360deg) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(360deg);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.3), inset 0 0 10px rgba(6, 182, 212, 0.3);
          }
        }
        
        @keyframes professional-neural-network {
          0% {
            transform: scale(0.3) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.1;
            filter: brightness(0.5) contrast(0.8) hue-rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotateX(180deg) rotateY(90deg) rotateZ(45deg);
            opacity: 0.8;
            filter: brightness(0.9) contrast(1.2) hue-rotate(180deg);
          }
          100% {
            transform: scale(0.3) rotateX(360deg) rotateY(180deg) rotateZ(90deg);
            opacity: 0.1;
            filter: brightness(0.5) contrast(0.8) hue-rotate(360deg);
          }
        }
        
        @keyframes executive-vortex-spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.5) translateZ(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(0deg);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(1.1) translateZ(100px);
            opacity: 0.8;
            filter: brightness(1) saturate(1.1) hue-rotate(180deg);
            box-shadow: 0 0 65px rgba(147, 51, 234, 0.8);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(0.5) translateZ(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(360deg);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
          }
        }
        
        @keyframes corporate-quantum-field {
          0% {
            transform: scale(0.2) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.4) contrast(0.7) saturate(0.8) hue-rotate(0deg) blur(2px);
          }
          50% {
            transform: scale(1.1) rotateX(180deg) rotateY(90deg) rotateZ(45deg) translateX(90px) translateY(-45px) translateZ(90px);
            opacity: 0.8;
            filter: brightness(1) contrast(1.3) saturate(1.1) hue-rotate(180deg) blur(0.8px);
          }
          100% {
            transform: scale(0.2) rotateX(360deg) rotateY(180deg) rotateZ(90deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.4) contrast(0.7) saturate(0.8) hue-rotate(360deg) blur(2px);
          }
        }
        
        @keyframes professional-matrix-rain {
          0% {
            transform: translateY(-100vh) translateX(0px) scale(0.1) rotateZ(0deg);
            opacity: 0;
            filter: hue-rotate(120deg) brightness(0.8) blur(1px);
          }
          10% {
            transform: translateY(-80vh) translateX(-10px) scale(0.3) rotateZ(36deg);
            opacity: 0.1;
            filter: hue-rotate(108deg) brightness(0.85) blur(0.9px);
          }
          20% {
            transform: translateY(-60vh) translateX(-20px) scale(0.5) rotateZ(72deg);
            opacity: 0.2;
            filter: hue-rotate(96deg) brightness(0.9) blur(0.8px);
          }
          30% {
            transform: translateY(-40vh) translateX(-30px) scale(0.7) rotateZ(108deg);
            opacity: 0.3;
            filter: hue-rotate(84deg) brightness(0.95) blur(0.7px);
          }
          40% {
            transform: translateY(-20vh) translateX(-40px) scale(0.9) rotateZ(144deg);
            opacity: 0.4;
            filter: hue-rotate(72deg) brightness(1) blur(0.6px);
          }
          50% {
            transform: translateY(0vh) translateX(-50px) scale(1.1) rotateZ(180deg);
            opacity: 0.5;
            filter: hue-rotate(60deg) brightness(1.05) blur(0.5px);
          }
          60% {
            transform: translateY(20vh) translateX(-40px) scale(0.9) rotateZ(216deg);
            opacity: 0.4;
            filter: hue-rotate(48deg) brightness(1) blur(0.6px);
          }
          70% {
            transform: translateY(40vh) translateX(-30px) scale(0.7) rotateZ(252deg);
            opacity: 0.3;
            filter: hue-rotate(36deg) brightness(0.95) blur(0.7px);
          }
          80% {
            transform: translateY(60vh) translateX(-20px) scale(0.5) rotateZ(288deg);
            opacity: 0.2;
            filter: hue-rotate(24deg) brightness(0.9) blur(0.8px);
          }
          90% {
            transform: translateY(80vh) translateX(-10px) scale(0.3) rotateZ(324deg);
            opacity: 0.1;
            filter: hue-rotate(12deg) brightness(0.85) blur(0.9px);
          }
          100% {
            transform: translateY(100vh) translateX(0px) scale(0.1) rotateZ(360deg);
            opacity: 0;
            filter: hue-rotate(0deg) brightness(0.8) blur(1px);
          }
        }
        
        @keyframes executive-cyber-grid {
          0% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) contrast(1.1) saturate(0.9);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2));
          }
          12.5% {
            transform: perspective(1000px) rotateX(45deg) rotateY(11.25deg) scale(1.1);
            opacity: 0.4;
            filter: brightness(0.85) contrast(1.15) saturate(0.95);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(6, 182, 212, 0.3));
          }
          25% {
            transform: perspective(1000px) rotateX(90deg) rotateY(22.5deg) scale(1.2);
            opacity: 0.5;
            filter: brightness(0.9) contrast(1.2) saturate(1);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.4), rgba(6, 182, 212, 0.4));
          }
          37.5% {
            transform: perspective(1000px) rotateX(135deg) rotateY(33.75deg) scale(1.3);
            opacity: 0.6;
            filter: brightness(0.95) contrast(1.25) saturate(1.05);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(6, 182, 212, 0.5));
          }
          50% {
            transform: perspective(1000px) rotateX(180deg) rotateY(45deg) scale(1.4);
            opacity: 0.7;
            filter: brightness(1) contrast(1.3) saturate(1.1);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(6, 182, 212, 0.6));
          }
          62.5% {
            transform: perspective(1000px) rotateX(225deg) rotateY(56.25deg) scale(1.3);
            opacity: 0.6;
            filter: brightness(0.95) contrast(1.25) saturate(1.05);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(6, 182, 212, 0.5));
          }
          75% {
            transform: perspective(1000px) rotateX(270deg) rotateY(67.5deg) scale(1.2);
            opacity: 0.5;
            filter: brightness(0.9) contrast(1.2) saturate(1);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.4), rgba(6, 182, 212, 0.4));
          }
          87.5% {
            transform: perspective(1000px) rotateX(315deg) rotateY(78.75deg) scale(1.1);
            opacity: 0.4;
            filter: brightness(0.85) contrast(1.15) saturate(0.95);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(6, 182, 212, 0.3));
          }
          100% {
            transform: perspective(1000px) rotateX(360deg) rotateY(90deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) contrast(1.1) saturate(0.9);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2));
          }
        }
        
        @keyframes professional-dna-helix {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9) hue-rotate(0deg);
          }
          8.33% {
            transform: rotateX(30deg) rotateY(15deg) rotateZ(7.5deg) translateX(15px) translateY(-7.5px) translateZ(15px);
            opacity: 0.4;
            filter: brightness(0.85) saturate(0.95) hue-rotate(30deg);
          }
          16.66% {
            transform: rotateX(60deg) rotateY(30deg) rotateZ(15deg) translateX(30px) translateY(-15px) translateZ(30px);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1) hue-rotate(60deg);
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(22.5deg) translateX(45px) translateY(-22.5px) translateZ(45px);
            opacity: 0.6;
            filter: brightness(0.95) saturate(1.05) hue-rotate(90deg);
          }
          33.33% {
            transform: rotateX(120deg) rotateY(60deg) rotateZ(30deg) translateX(60px) translateY(-30px) translateZ(60px);
            opacity: 0.7;
            filter: brightness(1) saturate(1.1) hue-rotate(120deg);
          }
          41.66% {
            transform: rotateX(150deg) rotateY(75deg) rotateZ(37.5deg) translateX(75px) translateY(-37.5px) translateZ(75px);
            opacity: 0.8;
            filter: brightness(1.05) saturate(1.15) hue-rotate(150deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) translateX(90px) translateY(-45px) translateZ(90px);
            opacity: 0.9;
            filter: brightness(1.1) saturate(1.2) hue-rotate(180deg);
          }
          58.33% {
            transform: rotateX(210deg) rotateY(105deg) rotateZ(52.5deg) translateX(75px) translateY(-37.5px) translateZ(75px);
            opacity: 0.8;
            filter: brightness(1.05) saturate(1.15) hue-rotate(210deg);
          }
          66.66% {
            transform: rotateX(240deg) rotateY(120deg) rotateZ(60deg) translateX(60px) translateY(-30px) translateZ(60px);
            opacity: 0.7;
            filter: brightness(1) saturate(1.1) hue-rotate(240deg);
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(67.5deg) translateX(45px) translateY(-22.5px) translateZ(45px);
            opacity: 0.6;
            filter: brightness(0.95) saturate(1.05) hue-rotate(270deg);
          }
          83.33% {
            transform: rotateX(300deg) rotateY(150deg) rotateZ(75deg) translateX(30px) translateY(-15px) translateZ(30px);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1) hue-rotate(300deg);
          }
          91.66% {
            transform: rotateX(330deg) rotateY(165deg) rotateZ(82.5deg) translateX(15px) translateY(-7.5px) translateZ(15px);
            opacity: 0.4;
            filter: brightness(0.85) saturate(0.95) hue-rotate(330deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9) hue-rotate(360deg);
          }
        }
        
        @keyframes corporate-photon-wave {
          0% {
            transform: scale(0.1) rotate(0deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.3) contrast(0.7) saturate(0.8) hue-rotate(0deg) blur(3px);
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.2), 0 0 10px rgba(6, 182, 212, 0.2);
          }
          10% {
            transform: scale(0.3) rotate(36deg) translateX(20px) translateY(-10px) translateZ(10px);
            opacity: 0.2;
            filter: brightness(0.4) contrast(0.8) saturate(0.85) hue-rotate(36deg) blur(2.7px);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3), 0 0 30px rgba(6, 182, 212, 0.3);
          }
          20% {
            transform: scale(0.5) rotate(72deg) translateX(40px) translateY(-20px) translateZ(20px);
            opacity: 0.3;
            filter: brightness(0.5) contrast(0.9) saturate(0.9) hue-rotate(72deg) blur(2.4px);
            box-shadow: 0 0 25px rgba(147, 51, 234, 0.4), 0 0 50px rgba(6, 182, 212, 0.4);
          }
          30% {
            transform: scale(0.7) rotate(108deg) translateX(60px) translateY(-30px) translateZ(30px);
            opacity: 0.4;
            filter: brightness(0.6) contrast(1) saturate(0.95) hue-rotate(108deg) blur(2.1px);
            box-shadow: 0 0 35px rgba(147, 51, 234, 0.5), 0 0 70px rgba(6, 182, 212, 0.5);
          }
          40% {
            transform: scale(0.9) rotate(144deg) translateX(80px) translateY(-40px) translateZ(40px);
            opacity: 0.5;
            filter: brightness(0.7) contrast(1.1) saturate(1) hue-rotate(144deg) blur(1.8px);
            box-shadow: 0 0 45px rgba(147, 51, 234, 0.6), 0 0 90px rgba(6, 182, 212, 0.6);
          }
          50% {
            transform: scale(1.1) rotate(180deg) translateX(100px) translateY(-50px) translateZ(50px);
            opacity: 0.6;
            filter: brightness(0.8) contrast(1.2) saturate(1.05) hue-rotate(180deg) blur(1.5px);
            box-shadow: 0 0 55px rgba(147, 51, 234, 0.7), 0 0 110px rgba(6, 182, 212, 0.7);
          }
          60% {
            transform: scale(0.9) rotate(216deg) translateX(80px) translateY(-40px) translateZ(40px);
            opacity: 0.5;
            filter: brightness(0.7) contrast(1.1) saturate(1) hue-rotate(216deg) blur(1.8px);
            box-shadow: 0 0 45px rgba(147, 51, 234, 0.6), 0 0 90px rgba(6, 182, 212, 0.6);
          }
          70% {
            transform: scale(0.7) rotate(252deg) translateX(60px) translateY(-30px) translateZ(30px);
            opacity: 0.4;
            filter: brightness(0.6) contrast(1) saturate(0.95) hue-rotate(252deg) blur(2.1px);
            box-shadow: 0 0 35px rgba(147, 51, 234, 0.5), 0 0 70px rgba(6, 182, 212, 0.5);
          }
          80% {
            transform: scale(0.5) rotate(288deg) translateX(40px) translateY(-20px) translateZ(20px);
            opacity: 0.3;
            filter: brightness(0.5) contrast(0.9) saturate(0.9) hue-rotate(288deg) blur(2.4px);
            box-shadow: 0 0 25px rgba(147, 51, 234, 0.4), 0 0 50px rgba(6, 182, 212, 0.4);
          }
          90% {
            transform: scale(0.3) rotate(324deg) translateX(20px) translateY(-10px) translateZ(10px);
            opacity: 0.2;
            filter: brightness(0.4) contrast(0.8) saturate(0.85) hue-rotate(324deg) blur(2.7px);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3), 0 0 30px rgba(6, 182, 212, 0.3);
          }
          100% {
            transform: scale(0.1) rotate(360deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.3) contrast(0.7) saturate(0.8) hue-rotate(360deg) blur(3px);
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.2), 0 0 10px rgba(6, 182, 212, 0.2);
          }
        }
        
        /* 3D Sphere Animations */
        @keyframes sphere-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1);
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          }
          25% {
            transform: rotateX(90deg) rotateY(90deg) rotateZ(90deg) scale3d(1.1, 1.1, 1.1);
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
          }
          50% {
            transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg) scale3d(1.2, 1.2, 1.2);
            background: linear-gradient(225deg, #ec4899, #f59e0b);
          }
          75% {
            transform: rotateX(270deg) rotateY(270deg) rotateZ(270deg) scale3d(1.1, 1.1, 1.1);
            background: linear-gradient(315deg, #f59e0b, #3b82f6);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg) scale3d(1, 1, 1);
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          }
        }
        
        @keyframes sphere-orbit-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) translateZ(0px);
          }
          25% {
            transform: rotateX(45deg) rotateY(90deg) translateX(100px) translateY(-50px) translateZ(50px);
          }
          50% {
            transform: rotateX(90deg) rotateY(180deg) translateX(0px) translateY(-100px) translateZ(100px);
          }
          75% {
            transform: rotateX(135deg) rotateY(270deg) translateX(-100px) translateY(-50px) translateZ(50px);
          }
          100% {
            transform: rotateX(180deg) rotateY(360deg) translateX(0px) translateY(0px) translateZ(0px);
          }
        }
        
        @keyframes sphere-morph-3d {
          0%, 100% {
            border-radius: 50%;
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
            filter: blur(0px);
          }
          25% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: scale3d(1.3, 0.7, 1.2) rotateX(45deg) rotateY(90deg);
            filter: blur(2px);
          }
          50% {
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            transform: scale3d(0.7, 1.3, 0.8) rotateX(90deg) rotateY(180deg);
            filter: blur(4px);
          }
          75% {
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
            transform: scale3d(1.2, 0.8, 1.1) rotateX(135deg) rotateY(270deg);
            filter: blur(2px);
          }
        }
        
        /* Pyramid Animations */
        @keyframes pyramid-spin-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
            opacity: 0.4;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) translateZ(30px);
            opacity: 0.6;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) translateZ(60px);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) translateZ(30px);
            opacity: 0.6;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) translateZ(0px);
            opacity: 0.4;
          }
        }
        
        @keyframes pyramid-float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            filter: brightness(1) contrast(1);
          }
          25% {
            transform: translateY(-40px) translateX(30px) translateZ(80px) rotateX(45deg) rotateY(90deg) rotateZ(45deg);
            filter: brightness(1.3) contrast(1.2);
          }
          50% {
            transform: translateY(-80px) translateX(-30px) translateZ(160px) rotateX(90deg) rotateY(180deg) rotateZ(90deg);
            filter: brightness(1.6) contrast(1.4);
          }
          75% {
            transform: translateY(-40px) translateX(-60px) translateZ(80px) rotateX(135deg) rotateY(270deg) rotateZ(135deg);
            filter: brightness(1.3) contrast(1.2);
          }
        }
        
        @keyframes pyramid-glow-3d {
          0%, 100% {
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.6), inset 0 0 30px rgba(236, 72, 153, 0.3);
            background: linear-gradient(45deg, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.8));
          }
          25% {
            box-shadow: 0 0 60px rgba(236, 72, 153, 0.8), inset 0 0 60px rgba(236, 72, 153, 0.5);
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(139, 92, 246, 0.9));
          }
          50% {
            box-shadow: 0 0 90px rgba(236, 72, 153, 1), inset 0 0 90px rgba(236, 72, 153, 0.7);
            background: linear-gradient(225deg, rgba(236, 72, 153, 1), rgba(139, 92, 246, 1));
          }
          75% {
            box-shadow: 0 0 60px rgba(236, 72, 153, 0.8), inset 0 0 60px rgba(236, 72, 153, 0.5);
            background: linear-gradient(315deg, rgba(236, 72, 153, 0.9), rgba(139, 92, 246, 0.9));
          }
        }
        
        /* Torus Ring Animations */
        @keyframes torus-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 0.3);
            border-radius: 50%;
            opacity: 0.7;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) scale3d(1.1, 1.1, 0.4);
            border-radius: 45% 55% 55% 45% / 45% 45% 55% 55%;
            opacity: 0.8;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) scale3d(1.2, 1.2, 0.5);
            border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
            opacity: 0.9;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) scale3d(1.1, 1.1, 0.4);
            border-radius: 45% 55% 55% 45% / 45% 45% 55% 55%;
            opacity: 0.8;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) scale3d(1, 1, 0.3);
            border-radius: 50%;
            opacity: 0.7;
          }
        }
        
        @keyframes torus-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 0.3) rotateX(0deg) rotateY(0deg);
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.6), inset 0 0 40px rgba(245, 158, 11, 0.3);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.8), rgba(236, 72, 153, 0.6));
          }
          25% {
            transform: scale3d(1.3, 1.3, 0.5) rotateX(90deg) rotateY(45deg);
            box-shadow: 0 0 80px rgba(245, 158, 11, 0.8), inset 0 0 80px rgba(245, 158, 11, 0.5);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.9), rgba(236, 72, 153, 0.8));
          }
          50% {
            transform: scale3d(1.6, 1.6, 0.7) rotateX(180deg) rotateY(90deg);
            box-shadow: 0 0 120px rgba(245, 158, 11, 1), inset 0 0 120px rgba(245, 158, 11, 0.7);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 1), rgba(236, 72, 153, 1));
          }
          75% {
            transform: scale3d(1.3, 1.3, 0.5) rotateX(270deg) rotateY(135deg);
            box-shadow: 0 0 80px rgba(245, 158, 11, 0.8), inset 0 0 80px rgba(245, 158, 11, 0.5);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.9), rgba(236, 72, 153, 0.8));
          }
        }
        
        @keyframes torus-orbit-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px);
          }
          25% {
            transform: rotateX(45deg) rotateY(90deg) rotateZ(45deg) translateX(150px) translateY(-75px) translateZ(75px);
          }
          50% {
            transform: rotateX(90deg) rotateY(180deg) rotateZ(90deg) translateX(0px) translateY(-150px) translateZ(150px);
          }
          75% {
            transform: rotateX(135deg) rotateY(270deg) rotateZ(135deg) translateX(-150px) translateY(-75px) translateZ(75px);
          }
          100% {
            transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg) translateX(0px) translateY(0px) translateZ(0px);
          }
        }
        
        /* Hexagon Animations */
        @keyframes hexagon-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1);
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            opacity: 0.6;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) scale3d(1.1, 1.1, 1.1);
            clip-path: polygon(25% 5%, 75% 5%, 95% 25%, 95% 75%, 75% 95%, 25% 95%, 5% 75%, 5% 25%);
            opacity: 0.7;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) scale3d(1.2, 1.2, 1.2);
            clip-path: polygon(20% 10%, 80% 10%, 90% 20%, 90% 80%, 80% 90%, 20% 90%, 10% 80%, 10% 20%);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) scale3d(1.1, 1.1, 1.1);
            clip-path: polygon(25% 5%, 75% 5%, 95% 25%, 95% 75%, 75% 95%, 25% 95%, 5% 75%, 5% 25%);
            opacity: 0.7;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) scale3d(1, 1, 1);
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            opacity: 0.6;
          }
        }
        
        @keyframes hexagon-morph-3d {
          0%, 100% {
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
            background: linear-gradient(45deg, #10b981, #3b82f6);
          }
          25% {
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            transform: scale3d(1.2, 0.8, 1.1) rotateX(45deg) rotateY(90deg);
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          }
          50% {
            clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
            transform: scale3d(0.8, 1.2, 0.9) rotateX(90deg) rotateY(180deg);
            background: linear-gradient(225deg, #8b5cf6, #ec4899);
          }
          75% {
            clip-path: polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%);
            transform: scale3d(1.1, 0.9, 1.2) rotateX(135deg) rotateY(270deg);
            background: linear-gradient(315deg, #ec4899, #10b981);
          }
        }
        
        @keyframes hexagon-glow-3d {
          0%, 100% {
            box-shadow: 0 0 50px rgba(16, 185, 129, 0.7), inset 0 0 50px rgba(16, 185, 129, 0.4);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 0.9), rgba(59, 130, 246, 0.7));
            filter: brightness(1) saturate(1);
          }
          25% {
            box-shadow: 0 0 100px rgba(16, 185, 129, 0.9), inset 0 0 100px rgba(16, 185, 129, 0.6);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 1), rgba(59, 130, 246, 0.9));
            filter: brightness(1.3) saturate(1.2);
          }
          50% {
            box-shadow: 0 0 150px rgba(16, 185, 129, 1), inset 0 0 150px rgba(16, 185, 129, 0.8);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 1), rgba(59, 130, 246, 1));
            filter: brightness(1.6) saturate(1.4);
          }
          75% {
            box-shadow: 0 0 100px rgba(16, 185, 129, 0.9), inset 0 0 100px rgba(16, 185, 129, 0.6);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 1), rgba(59, 130, 246, 0.9));
            filter: brightness(1.3) saturate(1.2);
          }
        }
        
        /* Particle System Animations */
        @keyframes particle-float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) scale3d(1, 1, 1);
            opacity: 0.3;
            filter: blur(1px);
          }
          25% {
            transform: translateY(-50px) translateX(30px) translateZ(100px) scale3d(1.2, 1.2, 1.2);
            opacity: 0.5;
            filter: blur(0.5px);
          }
          50% {
            transform: translateY(-100px) translateX(-30px) translateZ(200px) scale3d(1.5, 1.5, 1.5);
            opacity: 0.7;
            filter: blur(0px);
          }
          75% {
            transform: translateY(-50px) translateX(-60px) translateZ(100px) scale3d(1.2, 1.2, 1.2);
            opacity: 0.5;
            filter: blur(0.5px);
          }
        }
        
        @keyframes particle-swarm-3d {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateX(80px) translateY(-60px) translateZ(120px) rotateX(90deg) rotateY(45deg) rotateZ(45deg);
            opacity: 0.6;
          }
          50% {
            transform: translateX(0px) translateY(-120px) translateZ(240px) rotateX(180deg) rotateY(90deg) rotateZ(90deg);
            opacity: 0.8;
          }
          75% {
            transform: translateX(-80px) translateY(-60px) translateZ(120px) rotateX(270deg) rotateY(135deg) rotateZ(135deg);
            opacity: 0.6;
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(360deg) rotateY(180deg) rotateZ(180deg);
            opacity: 0.4;
          }
        }
        
        @keyframes particle-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
            background: radial-gradient(circle, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.7));
          }
          25% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(90deg) rotateY(45deg) rotateZ(45deg);
            box-shadow: 0 0 30px rgba(59, 130, 246, 1);
            background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(139, 92, 246, 0.9));
          }
          50% {
            transform: scale3d(2, 2, 2) rotateX(180deg) rotateY(90deg) rotateZ(90deg);
            box-shadow: 0 0 50px rgba(59, 130, 246, 1);
            background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(139, 92, 246, 1));
          }
          75% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(270deg) rotateY(135deg) rotateZ(135deg);
            box-shadow: 0 0 30px rgba(59, 130, 246, 1);
            background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(139, 92, 246, 0.9));
          }
        }
        
        /* Lightning Effect Animations */
        @keyframes lightning-strike-3d {
          0%, 90%, 100% {
            opacity: 0;
            transform: scaleY(0) rotateX(0deg) rotateY(0deg);
            filter: brightness(1);
          }
          5% {
            opacity: 1;
            transform: scaleY(1) rotateX(45deg) rotateY(90deg);
            filter: brightness(2);
          }
          10% {
            opacity: 0.8;
            transform: scaleY(0.8) rotateX(90deg) rotateY(135deg);
            filter: brightness(1.5);
          }
          15% {
            opacity: 1;
            transform: scaleY(1.2) rotateX(135deg) rotateY(180deg);
            filter: brightness(2.5);
          }
          20% {
            opacity: 0.6;
            transform: scaleY(0.6) rotateX(180deg) rotateY(225deg);
            filter: brightness(1.2);
          }
        }
        
        @keyframes lightning-glow-3d {
          0%, 85%, 100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.8));
            filter: brightness(1) contrast(1);
          }
          5% {
            box-shadow: 0 0 50px rgba(255, 255, 255, 1);
            background: linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(59, 130, 246, 1));
            filter: brightness(3) contrast(2);
          }
          10% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.9);
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.95), rgba(59, 130, 246, 0.9));
            filter: brightness(2) contrast(1.5);
          }
          15% {
            box-shadow: 0 0 80px rgba(255, 255, 255, 1);
            background: linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(59, 130, 246, 1));
            filter: brightness(4) contrast(3);
          }
          20% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.85);
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.85));
            filter: brightness(1.5) contrast(1.2);
          }
        }
        
        /* Grid Pattern Animations */
        @keyframes grid-move-3d {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
            filter: hue-rotate(0deg);
          }
          25% {
            transform: translateX(100px) translateY(-50px) translateZ(200px) rotateX(45deg) rotateY(90deg);
            opacity: 0.5;
            filter: hue-rotate(90deg);
          }
          50% {
            transform: translateX(0px) translateY(-100px) translateZ(400px) rotateX(90deg) rotateY(180deg);
            opacity: 0.7;
            filter: hue-rotate(180deg);
          }
          75% {
            transform: translateX(-100px) translateY(-50px) translateZ(200px) rotateX(135deg) rotateY(270deg);
            opacity: 0.5;
            filter: hue-rotate(270deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(180deg) rotateY(360deg);
            opacity: 0.3;
            filter: hue-rotate(360deg);
          }
        }
        
        @keyframes grid-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
            background-size: 20px 20px;
            opacity: 0.4;
          }
          25% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(90deg) rotateY(45deg);
            background-size: 25px 25px;
            opacity: 0.6;
          }
          50% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(180deg) rotateY(90deg);
            background-size: 30px 30px;
            opacity: 0.8;
          }
          75% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(270deg) rotateY(135deg);
            background-size: 25px 25px;
            opacity: 0.6;
          }
        }
        
        @keyframes grid-morph-3d {
          0%, 100% {
            background-image: 
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            background-image: 
              linear-gradient(rgba(139, 92, 246, 0.5) 2px, transparent 2px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 2px, transparent 2px);
            transform: perspective(1000px) rotateX(45deg) rotateY(90deg);
          }
          50% {
            background-image: 
              linear-gradient(rgba(236, 72, 153, 0.7) 3px, transparent 3px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.7) 3px, transparent 3px);
            transform: perspective(1000px) rotateX(90deg) rotateY(180deg);
          }
          75% {
            background-image: 
              linear-gradient(rgba(245, 158, 11, 0.5) 2px, transparent 2px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.5) 2px, transparent 2px);
            transform: perspective(1000px) rotateX(135deg) rotateY(270deg);
          }
        }
        
        /* Mouse Follower Animations */
        @keyframes mouse-follower-3d-1 {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1, 1, 1);
            opacity: 0.6;
            filter: blur(0px) hue-rotate(0deg);
          }
          25% {
            transform: translateX(30px) translateY(-20px) translateZ(50px) scale3d(1.1, 1.1, 1.1);
            opacity: 0.7;
            filter: blur(1px) hue-rotate(90deg);
          }
          50% {
            transform: translateX(60px) translateY(-40px) translateZ(100px) scale3d(1.2, 1.2, 1.2);
            opacity: 0.8;
            filter: blur(2px) hue-rotate(180deg);
          }
          75% {
            transform: translateX(30px) translateY(-20px) translateZ(50px) scale3d(1.1, 1.1, 1.1);
            opacity: 0.7;
            filter: blur(1px) hue-rotate(270deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1, 1, 1);
            opacity: 0.6;
            filter: blur(0px) hue-rotate(360deg);
          }
        }
        
        @keyframes mouse-follower-3d-2 {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(0.8, 0.8, 0.8) rotateX(0deg) rotateY(0deg);
            opacity: 0.5;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.6));
          }
          25% {
            transform: translateX(-40px) translateY(30px) translateZ(80px) scale3d(0.9, 0.9, 0.9) rotateX(90deg) rotateY(45deg);
            opacity: 0.6;
            background: radial-gradient(circle, rgba(236, 72, 153, 0.9), rgba(245, 158, 11, 0.7));
          }
          50% {
            transform: translateX(-80px) translateY(60px) translateZ(160px) scale3d(1, 1, 1) rotateX(180deg) rotateY(90deg);
            opacity: 0.7;
            background: radial-gradient(circle, rgba(245, 158, 11, 1), rgba(16, 185, 129, 0.8));
          }
          75% {
            transform: translateX(-40px) translateY(30px) translateZ(80px) scale3d(0.9, 0.9, 0.9) rotateX(270deg) rotateY(135deg);
            opacity: 0.6;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.9), rgba(59, 130, 246, 0.7));
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(0.8, 0.8, 0.8) rotateX(360deg) rotateY(180deg);
            opacity: 0.5;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.6));
          }
        }
        
        @keyframes mouse-follower-3d-3 {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1.2, 1.2, 1.2) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.4;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
          25% {
            transform: translateX(50px) translateY(-30px) translateZ(120px) scale3d(1.3, 1.3, 1.3) rotateX(45deg) rotateY(90deg) rotateZ(45deg);
            opacity: 0.5;
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.8);
          }
          50% {
            transform: translateX(100px) translateY(-60px) translateZ(240px) scale3d(1.4, 1.4, 1.4) rotateX(90deg) rotateY(180deg) rotateZ(90deg);
            opacity: 0.6;
            box-shadow: 0 0 60px rgba(236, 72, 153, 1);
          }
          75% {
            transform: translateX(50px) translateY(-30px) translateZ(120px) scale3d(1.3, 1.3, 1.3) rotateX(135deg) rotateY(270deg) rotateZ(135deg);
            opacity: 0.5;
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.8);
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1.2, 1.2, 1.2) rotateX(180deg) rotateY(360deg) rotateZ(180deg);
            opacity: 0.4;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
          }
        }
        
        /* Advanced Orb Animations */
        @keyframes orb-float-3d-advanced {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            filter: blur(0px) brightness(1) saturate(1) hue-rotate(0deg);
            opacity: 0.8;
          }
          12.5% {
            transform: translateY(-40px) translateX(60px) translateZ(120px) scale3d(1.1, 1.1, 1.1) rotateX(45deg) rotateY(90deg) rotateZ(45deg);
            filter: blur(1px) brightness(1.2) saturate(1.1) hue-rotate(45deg);
            opacity: 0.85;
          }
          25% {
            transform: translateY(-80px) translateX(120px) translateZ(240px) scale3d(1.2, 1.2, 1.2) rotateX(90deg) rotateY(180deg) rotateZ(90deg);
            filter: blur(2px) brightness(1.4) saturate(1.2) hue-rotate(90deg);
            opacity: 0.9;
          }
          37.5% {
            transform: translateY(-60px) translateX(180px) translateZ(180px) scale3d(1.3, 1.3, 1.3) rotateX(135deg) rotateY(270deg) rotateZ(135deg);
            filter: blur(1.5px) brightness(1.3) saturate(1.15) hue-rotate(135deg);
            opacity: 0.85;
          }
          50% {
            transform: translateY(-40px) translateX(240px) translateZ(120px) scale3d(1.4, 1.4, 1.4) rotateX(180deg) rotateY(360deg) rotateZ(180deg);
            filter: blur(1px) brightness(1.6) saturate(1.4) hue-rotate(180deg);
            opacity: 0.95;
          }
          62.5% {
            transform: translateY(-20px) translateX(180px) translateZ(60px) scale3d(1.3, 1.3, 1.3) rotateX(225deg) rotateY(450deg) rotateZ(225deg);
            filter: blur(0.5px) brightness(1.3) saturate(1.15) hue-rotate(225deg);
            opacity: 0.85;
          }
          75% {
            transform: translateY(0px) translateX(120px) translateZ(0px) scale3d(1.2, 1.2, 1.2) rotateX(270deg) rotateY(540deg) rotateZ(270deg);
            filter: blur(0px) brightness(1.2) saturate(1.1) hue-rotate(270deg);
            opacity: 0.8;
          }
          87.5% {
            transform: translateY(-20px) translateX(60px) translateZ(60px) scale3d(1.1, 1.1, 1.1) rotateX(315deg) rotateY(630deg) rotateZ(315deg);
            filter: blur(0.5px) brightness(1.1) saturate(1.05) hue-rotate(315deg);
            opacity: 0.75;
          }
        }
        
        @keyframes orb-pulse-3d-advanced {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 0.8),
              0 0 60px rgba(139, 92, 246, 0.6),
              0 0 90px rgba(236, 72, 153, 0.4),
              inset 0 0 30px rgba(59, 130, 246, 0.4);
            background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.7), rgba(236, 72, 153, 0.5));
            opacity: 0.9;
          }
          20% {
            transform: scale3d(1.3, 1.3, 1.3) rotateX(72deg) rotateY(72deg) rotateZ(72deg);
            box-shadow: 
              0 0 60px rgba(139, 92, 246, 0.9),
              0 0 120px rgba(236, 72, 153, 0.7),
              0 0 180px rgba(245, 158, 11, 0.5),
              inset 0 0 60px rgba(139, 92, 246, 0.5);
            background: radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 1), rgba(236, 72, 153, 0.8), rgba(245, 158, 11, 0.6));
            opacity: 0.95;
          }
          40% {
            transform: scale3d(1.6, 1.6, 1.6) rotateX(144deg) rotateY(144deg) rotateZ(144deg);
            box-shadow: 
              0 0 90px rgba(236, 72, 153, 1),
              0 0 180px rgba(245, 158, 11, 0.8),
              0 0 270px rgba(16, 185, 129, 0.6),
              inset 0 0 90px rgba(236, 72, 153, 0.6);
            background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 1), rgba(245, 158, 11, 0.9), rgba(16, 185, 129, 0.7));
            opacity: 1;
          }
          60% {
            transform: scale3d(1.4, 1.4, 1.4) rotateX(216deg) rotateY(216deg) rotateZ(216deg);
            box-shadow: 
              0 0 120px rgba(245, 158, 11, 0.9),
              0 0 240px rgba(16, 185, 129, 0.7),
              0 0 360px rgba(59, 130, 246, 0.5),
              inset 0 0 120px rgba(245, 158, 11, 0.7);
            background: radial-gradient(circle at 60% 60%, rgba(245, 158, 11, 1), rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6));
            opacity: 0.95;
          }
          80% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(288deg) rotateY(288deg) rotateZ(288deg);
            box-shadow: 
              0 0 60px rgba(16, 185, 129, 0.8),
              0 0 120px rgba(59, 130, 246, 0.6),
              0 0 180px rgba(139, 92, 246, 0.4),
              inset 0 0 60px rgba(16, 185, 129, 0.4);
            background: radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.95), rgba(59, 130, 246, 0.75), rgba(139, 92, 246, 0.55));
            opacity: 0.9;
          }
        }
        
        /* Complex Wave Animations */
        @keyframes wave-complex-3d {
          0%, 100% {
            transform: 
              translateX(0px) translateY(0px) translateZ(0px)
              rotateX(0deg) rotateY(0deg) rotateZ(0deg)
              scale3d(1, 1, 1)
              skewX(0deg) skewY(0deg);
            opacity: 0.6;
            filter: blur(0px) brightness(1) contrast(1) saturate(1);
          }
          10% {
            transform: 
              translateX(20px) translateY(-15px) translateZ(40px)
              rotateX(36deg) rotateY(36deg) rotateZ(36deg)
              scale3d(1.1, 1.1, 1.1)
              skewX(5deg) skewY(-5deg);
            opacity: 0.65;
            filter: blur(0.5px) brightness(1.1) contrast(1.05) saturate(1.05);
          }
          20% {
            transform: 
              translateX(40px) translateY(-30px) translateZ(80px)
              rotateX(72deg) rotateY(72deg) rotateZ(72deg)
              scale3d(1.2, 1.2, 1.2)
              skewX(10deg) skewY(-10deg);
            opacity: 0.7;
            filter: blur(1px) brightness(1.2) contrast(1.1) saturate(1.1);
          }
          30% {
            transform: 
              translateX(60px) translateY(-45px) translateZ(120px)
              rotateX(108deg) rotateY(108deg) rotateZ(108deg)
              scale3d(1.3, 1.3, 1.3)
              skewX(15deg) skewY(-15deg);
            opacity: 0.75;
            filter: blur(1.5px) brightness(1.3) contrast(1.15) saturate(1.15);
          }
          40% {
            transform: 
              translateX(80px) translateY(-60px) translateZ(160px)
              rotateX(144deg) rotateY(144deg) rotateZ(144deg)
              scale3d(1.4, 1.4, 1.4)
              skewX(20deg) skewY(-20deg);
            opacity: 0.8;
            filter: blur(2px) brightness(1.4) contrast(1.2) saturate(1.2);
          }
          50% {
            transform: 
              translateX(100px) translateY(-75px) translateZ(200px)
              rotateX(180deg) rotateY(180deg) rotateZ(180deg)
              scale3d(1.5, 1.5, 1.5)
              skewX(25deg) skewY(-25deg);
            opacity: 0.85;
            filter: blur(2.5px) brightness(1.5) contrast(1.25) saturate(1.25);
          }
          60% {
            transform: 
              translateX(80px) translateY(-60px) translateZ(160px)
              rotateX(216deg) rotateY(216deg) rotateZ(216deg)
              scale3d(1.4, 1.4, 1.4)
              skewX(20deg) skewY(-20deg);
            opacity: 0.8;
            filter: blur(2px) brightness(1.4) contrast(1.2) saturate(1.2);
          }
          70% {
            transform: 
              translateX(60px) translateY(-45px) translateZ(120px)
              rotateX(252deg) rotateY(252deg) rotateZ(252deg)
              scale3d(1.3, 1.3, 1.3)
              skewX(15deg) skewY(-15deg);
            opacity: 0.75;
            filter: blur(1.5px) brightness(1.3) contrast(1.15) saturate(1.15);
          }
          80% {
            transform: 
              translateX(40px) translateY(-30px) translateZ(80px)
              rotateX(288deg) rotateY(288deg) rotateZ(288deg)
              scale3d(1.2, 1.2, 1.2)
              skewX(10deg) skewY(-10deg);
            opacity: 0.7;
            filter: blur(1px) brightness(1.2) contrast(1.1) saturate(1.1);
          }
          90% {
            transform: 
              translateX(20px) translateY(-15px) translateZ(40px)
              rotateX(324deg) rotateY(324deg) rotateZ(324deg)
              scale3d(1.1, 1.1, 1.1)
              skewX(5deg) skewY(-5deg);
            opacity: 0.65;
            filter: blur(0.5px) brightness(1.1) contrast(1.05) saturate(1.05);
          }
          @keyframes progress-fill {
            0% {
              width: 0%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              width: var(--progress-width, 75%);
              opacity: 1;
            }
          }
        `})]})},Xx=()=>{const i=Ga(),[c,f]=m.useState({email:"",password:""}),[u,h]=m.useState(""),[p,v]=m.useState(!1),[S,b]=m.useState(!1),[g,A]=m.useState(!1),[w,M]=m.useState(!1),[R,O]=m.useState({email:!1,password:!1});m.useEffect(()=>{M(!0)},[]);const H=q=>{f({...c,[q.target.name]:q.target.value}),u&&h("")},Q=async q=>{q.preventDefault(),b(!0),setTimeout(()=>{p1(c.email,c.password)?i("/dashboard"):(h("Invalid email or password"),document.querySelectorAll("input").forEach(F=>{F.classList.add("animate-shake"),setTimeout(()=>F.classList.remove("animate-shake"),500)})),b(!1)},1500)},V=q=>{O(G=>({...G,[q]:!0}))},U=q=>{O(G=>({...G,[q]:!1}))};return n.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden relative",children:[n.jsxs("div",{className:`absolute inset-0 transition-opacity duration-1000 ${w?"opacity-100":"opacity-0"}`,children:[[...Array(20)].map((q,G)=>n.jsx("div",{className:"absolute w-1 h-1 bg-blue-400 rounded-full animate-float",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${G*.2}s`,animationDuration:`${3+Math.random()*4}s`}},G)),n.jsx("div",{className:"absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"}),n.jsx("div",{className:"absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow",style:{animationDelay:"1s"}}),n.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`linear-gradient(to right, #4f46e5 1px, transparent 1px),
                              linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,backgroundSize:"50px 50px"}})]}),n.jsxs("div",{className:"relative z-10 w-full max-w-md mx-4",children:[n.jsxs("div",{className:"backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden",children:[n.jsx("div",{className:"relative h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",children:n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x"})}),n.jsxs("div",{className:"p-8",children:[n.jsxs("div",{className:"text-center mb-8 animate-fade-in-up",children:[n.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg",children:n.jsx(oh,{className:"w-8 h-8 text-white"})}),n.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Welcome Back"}),n.jsx("p",{className:"text-gray-400",children:"Sign in to continue to your account"})]}),u&&n.jsx("div",{className:"mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl animate-fade-in",children:n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:"flex-shrink-0",children:n.jsx("div",{className:"w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center",children:n.jsx("svg",{className:"w-5 h-5 text-red-400",fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})})}),n.jsx("div",{className:"ml-3",children:n.jsx("p",{className:"text-sm text-red-200",children:u})})]})}),n.jsxs("form",{onSubmit:Q,className:"space-y-6",children:[n.jsxs("div",{className:"group animate-fade-in-up",style:{animationDelay:"0.1s"},children:[n.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Email Address"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-300 ${R.email?"text-blue-400":"text-gray-500"}`,children:n.jsx(sc,{size:18})}),n.jsx("input",{type:"email",name:"email",placeholder:"you@example.com",value:c.email,onChange:H,onFocus:()=>V("email"),onBlur:()=>U("email"),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10",required:!0}),c.email&&!u&&n.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center animate-pulse",children:n.jsx(rh,{className:"w-5 h-5 text-green-400"})})]})]}),n.jsxs("div",{className:"group animate-fade-in-up",style:{animationDelay:"0.2s"},children:[n.jsxs("div",{className:"flex justify-between items-center mb-2",children:[n.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Password"}),n.jsx("button",{type:"button",className:"text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200",onClick:()=>{},children:"Forgot password?"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-300 ${R.password?"text-blue-400":"text-gray-500"}`,children:n.jsx(rx,{size:18})}),n.jsx("input",{type:p?"text":"password",name:"password",placeholder:"Enter your password",value:c.password,onChange:H,onFocus:()=>V("password"),onBlur:()=>U("password"),className:"w-full pl-12 pr-12 py-4 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10",required:!0}),n.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>v(!p),children:p?n.jsx(V1,{className:"w-5 h-5 text-gray-500 hover:text-gray-300 transition-colors"}):n.jsx(K1,{className:"w-5 h-5 text-gray-500 hover:text-gray-300 transition-colors"})})]})]}),n.jsx("div",{className:"flex items-center justify-between animate-fade-in-up",style:{animationDelay:"0.3s"},children:n.jsxs("label",{className:"flex items-center cursor-pointer",children:[n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"checkbox",checked:g,onChange:()=>A(!g),className:"sr-only"}),n.jsx("div",{className:`w-5 h-5 border rounded-md flex items-center justify-center transition-all duration-200 ${g?"bg-blue-500 border-blue-500":"border-gray-600 bg-white/5"}`,children:g&&n.jsx("svg",{className:"w-3 h-3 text-white animate-check",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M5 13l4 4L19 7"})})})]}),n.jsx("span",{className:"ml-2 text-sm text-gray-300",children:"Remember me"})]})}),n.jsx("button",{type:"submit",disabled:S,className:`w-full py-4 px-4 rounded-xl font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 ${S?"bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed":"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl"} animate-fade-in-up`,style:{animationDelay:"0.4s"},children:S?n.jsxs("div",{className:"flex items-center justify-center",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"}),"Signing in..."]}):n.jsxs("div",{className:"flex items-center justify-center",children:[n.jsx("span",{children:"Sign In"}),n.jsx(ah,{className:"ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"})]})})]}),n.jsx("div",{className:"mt-8 text-center animate-fade-in-up",style:{animationDelay:"0.8s"},children:n.jsxs("p",{className:"text-gray-400",children:["Don't have an account?"," ",n.jsx("button",{onClick:()=>i("/register"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200",children:"Sign up now"})]})})]})]}),n.jsxs("div",{className:"mt-8 text-center text-gray-500 text-sm animate-fade-in-up",style:{animationDelay:"1s"},children:[n.jsx("p",{children:"By signing in, you agree to our Terms and Privacy Policy"}),n.jsxs("p",{className:"mt-2",children:["© ",new Date().getFullYear()," Your Company. All rights reserved."]})]})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
        
        @keyframes check {
          from {
            stroke-dashoffset: 20;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-check {
          animation: check 0.3s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `})]})},kx=()=>{const i=Ga(),[c,f]=m.useState({name:"",email:"",password:""}),[u,h]=m.useState(!1),[p,v]=m.useState(!1),[S,b]=m.useState(!1),[g,A]=m.useState(0),[w,M]=m.useState({}),[R,O]=m.useState(!1);m.useEffect(()=>{b(!0);let G=0;c.password.length>=8&&(G+=25),/[A-Z]/.test(c.password)&&(G+=25),/[0-9]/.test(c.password)&&(G+=25),/[^A-Za-z0-9]/.test(c.password)&&(G+=25),A(G)},[c.password]);const H=G=>{const{name:F,value:oe}=G.target;f({...c,[F]:oe}),w[F]&&M(P=>({...P,[F]:""})),F==="email"&&R&&O(!1)},Q=()=>{const G={};c.name.trim()?c.name.length<2&&(G.name="Name must be at least 2 characters"):G.name="Full name is required";const F=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return c.email.trim()?F.test(c.email)?JSON.parse(localStorage.getItem("users")||"[]").some(ge=>ge.email===c.email)?(G.email="This email is already registered",O(!0)):O(!1):G.email="Please enter a valid email address":G.email="Email address is required",c.password?c.password.length<8?G.password="Password must be at least 8 characters":/[A-Z]/.test(c.password)?/[0-9]/.test(c.password)?/[^A-Za-z0-9]/.test(c.password)||(G.password="Password must contain at least one special character"):G.password="Password must contain at least one number":G.password="Password must contain at least one uppercase letter":G.password="Password is required",M(G),Object.keys(G).length===0},V=G=>{if(G.preventDefault(),!Q()){const oe=document.querySelector("form");oe.classList.add("animate-shake"),setTimeout(()=>{oe.classList.remove("animate-shake")},500);return}if(v(!0),JSON.parse(localStorage.getItem("users")||"[]").some(oe=>oe.email===c.email)){M({email:"This email is already registered"}),O(!0),v(!1);const oe=document.querySelector('input[name="email"]');oe.parentElement.classList.add("animate-shake"),setTimeout(()=>{oe.parentElement.classList.remove("animate-shake")},500);return}setTimeout(()=>{h1(c),v(!1),document.querySelector("form").classList.add("animate-success"),setTimeout(()=>{alert("Registered successfully!"),i("/login")},1e3)},1500)},U=()=>g<25?"bg-red-500":g<50?"bg-orange-500":g<75?"bg-yellow-500":"bg-green-500",q=()=>g<25?"Very Weak":g<50?"Weak":g<75?"Fair":g<100?"Good":"Strong";return n.jsxs("div",{className:"min-h-screen flex justify-center items-center bg-gray-100 p-4 overflow-hidden",children:[n.jsxs("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:[[...Array(12)].map((G,F)=>n.jsx("div",{className:`absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 ${S?"animate-float":"opacity-0"}`,style:{width:`${40+Math.random()*80}px`,height:`${40+Math.random()*80}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${F*.2}s`,animationDuration:`${3+Math.random()*3}s`}},F)),n.jsx("div",{className:`absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl ${S?"animate-pulse-slow":"opacity-0"}`}),n.jsx("div",{className:`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-indigo-300/20 to-pink-300/20 rounded-full blur-3xl ${S?"animate-pulse-slow":"opacity-0"}`,style:{animationDelay:"1s"}})]}),n.jsxs("div",{className:`relative z-10 w-full max-w-md transform transition-all duration-700 ${S?"translate-y-0 opacity-100 scale-100":"translate-y-10 opacity-0 scale-95"}`,children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg overflow-hidden",children:n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x"})}),n.jsx("div",{className:"absolute top-3 right-4 animate-bounce",children:n.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg",children:n.jsx("span",{className:"text-white text-sm font-bold",children:"✓"})})})]}),n.jsxs("form",{onSubmit:V,className:"bg-white rounded-b-lg shadow-2xl p-8",children:[n.jsxs("div",{className:"text-center mb-8 animate-fade-in",children:[n.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg animate-pulse-once",children:n.jsx("span",{className:"text-white text-2xl",children:"👤"})}),n.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Create Account"}),n.jsx("p",{className:"text-gray-600",children:"Join our community today"})]}),n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"group animate-fade-in-up",style:{animationDelay:"0.1s"},children:[n.jsxs("div",{className:"relative",children:[n.jsx("span",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors",children:"👤"}),n.jsx("input",{type:"text",name:"name",placeholder:"Full Name",value:c.name,onChange:H,className:`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-gray-100 ${w.name?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500 focus:border-transparent"}`,required:!0}),c.name&&!w.name&&n.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 animate-check",children:n.jsx("span",{className:"text-green-500",children:"✓"})}),w.name&&n.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 animate-check",children:n.jsx("span",{className:"text-red-500",children:"✗"})})]}),w.name&&n.jsx("p",{className:"mt-1 text-sm text-red-600 animate-fade-in",children:w.name})]}),n.jsxs("div",{className:"group animate-fade-in-up",style:{animationDelay:"0.2s"},children:[n.jsxs("div",{className:"relative",children:[n.jsx("span",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors",children:"✉️"}),n.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:c.email,onChange:H,className:`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-gray-100 ${w.email||R?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500 focus:border-transparent"}`,required:!0}),c.email&&!w.email&&!R&&n.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 animate-check",children:n.jsx("span",{className:"text-green-500",children:"✓"})}),(w.email||R)&&n.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 animate-check",children:n.jsx("span",{className:"text-red-500",children:"✗"})})]}),(w.email||R)&&n.jsx("p",{className:"mt-1 text-sm text-red-600 animate-fade-in",children:w.email||"This email is already registered"})]}),n.jsxs("div",{className:"group animate-fade-in-up",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"relative",children:[n.jsx("span",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors",children:"🔒"}),n.jsx("input",{type:u?"text":"password",name:"password",placeholder:"Password",value:c.password,onChange:H,className:`w-full pl-10 pr-12 py-3 bg-gray-50 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:bg-gray-100 ${w.password?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500 focus:border-transparent"}`,required:!0}),n.jsx("button",{type:"button",className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",onClick:()=>h(!u),children:u?"🙈":"👁️"})]}),w.password&&n.jsx("p",{className:"mt-1 text-sm text-red-600 animate-fade-in",children:w.password}),c.password&&!w.password&&n.jsxs("div",{className:"mt-3 space-y-2 animate-fade-in",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-sm text-gray-600",children:"Password strength"}),n.jsx("span",{className:`text-sm font-medium ${g<25?"text-red-600":g<50?"text-orange-600":g<75?"text-yellow-600":"text-green-600"}`,children:q()})]}),n.jsx("div",{className:"h-2 bg-gray-200 rounded-full overflow-hidden",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${U()}`,style:{width:`${g}%`}})})]})]}),n.jsxs("div",{className:"flex items-center animate-fade-in-up",style:{animationDelay:"0.4s"},children:[n.jsx("input",{id:"terms",type:"checkbox",required:!0,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"}),n.jsxs("label",{htmlFor:"terms",className:"ml-2 text-sm text-gray-600",children:["I agree to the"," ",n.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-800 font-medium",children:"Terms"})," ","and"," ",n.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-800 font-medium",children:"Privacy Policy"})]})]}),n.jsx("button",{type:"submit",disabled:p,className:`w-full py-4 px-4 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${p?"bg-gradient-to-r from-gray-500 to-gray-600 cursor-not-allowed":"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl"} animate-fade-in-up`,style:{animationDelay:"0.5s"},children:p?n.jsxs("div",{className:"flex items-center justify-center",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"}),"Creating Account..."]}):n.jsxs("div",{className:"flex items-center justify-center",children:[n.jsx("span",{children:"Create Account"}),n.jsx("span",{className:"ml-2 text-lg",children:"🚀"})]})}),n.jsx("div",{className:"text-center pt-4 border-t border-gray-200 animate-fade-in-up",style:{animationDelay:"0.6s"},children:n.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",n.jsx(Ie,{to:"/login",className:"text-blue-600 hover:text-blue-800 font-medium transition-colors",children:"Sign in here"})]})})]})]}),n.jsx("div",{className:"mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4",children:[{icon:"⚡",text:"Fast Setup"},{icon:"🔒",text:"Secure"},{icon:"🎯",text:"Easy to Use"}].map((G,F)=>n.jsxs("div",{className:`bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-100 flex flex-col items-center text-center transform transition-all duration-500 ${S?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,style:{transitionDelay:`${F*100+700}ms`},children:[n.jsx("span",{className:"text-2xl mb-2 animate-bounce",style:{animationDelay:`${F*.2+1}s`},children:G.icon}),n.jsx("span",{className:"text-sm font-medium text-gray-700",children:G.text})]},F))})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
        
        @keyframes pulse-once {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes check {
          0% {
            opacity: 0;
            transform: translateY(-10px) translateX(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
        
        @keyframes success {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
        
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(5px);
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-once {
          animation: pulse-once 0.5s ease-in-out;
        }
        
        .animate-check {
          animation: check 0.3s ease-out;
        }
        
        .animate-success {
          animation: success 1s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `})]})},Rm=()=>{const[i,c]=m.useState({candidates:120,jobs:45,interviews:10,hires:38,pending:17,revenue:"$42,500"}),[f,u]=m.useState(!1),[h,p]=m.useState("overview"),[v,S]=m.useState([{id:1,user:"John Doe",action:"completed frontend test",time:"5 min ago",status:"success"},{id:2,user:"Sarah Smith",action:"applied for Backend Engineer",time:"12 min ago",status:"success"},{id:3,user:"Mike Johnson",action:"failed technical interview",time:"1 hour ago",status:"failed"},{id:4,user:"Emma Wilson",action:"scheduled interview",time:"2 hours ago",status:"pending"}]);m.useEffect(()=>{setTimeout(()=>u(!0),100);const g=setInterval(()=>{c(A=>({...A,candidates:A.candidates+Math.floor(Math.random()*3),interviews:A.interviews+Math.floor(Math.random()*2)}))},5e3);return()=>clearInterval(g)},[]);const b=({title:g,value:A,icon:w,trend:M,color:R,delay:O})=>n.jsxs("div",{className:`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${O}ms`},children:[n.jsx("div",{className:`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${R} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}),n.jsxs("div",{className:"p-6",children:[n.jsxs("div",{className:"flex justify-between items-start mb-6",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-gray-500 text-sm font-medium mb-1",children:g}),n.jsx("h3",{className:"text-3xl font-bold text-gray-900",children:A})]}),n.jsx("div",{className:`p-3 rounded-xl ${R.split(" ")[0]} ${R.split(" ")[1]}`,children:n.jsx(w,{className:"w-6 h-6 text-white"})})]}),M&&n.jsxs("div",{className:"flex items-center gap-2 mt-4",children:[M.direction==="up"?n.jsx(qa,{className:"w-4 h-4 text-green-500"}):n.jsx(Sx,{className:"w-4 h-4 text-red-500"}),n.jsxs("span",{className:`text-sm font-medium ${M.direction==="up"?"text-green-600":"text-red-600"}`,children:[M.value,"% ",M.period]})]})]})]});return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 p-4 md:p-8",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-8 animate-fade-in",children:[n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",children:[n.jsxs("div",{children:[n.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-3",children:["Admin ",n.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600",children:"Dashboard"})]}),n.jsx("p",{className:"text-gray-600 text-lg",children:"Real-time insights and analytics for your hiring platform"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full",children:n.jsxs("span",{className:"text-green-700 font-semibold flex items-center gap-2",children:[n.jsx(S1,{className:"w-4 h-4"}),"Live Updates"]})}),n.jsx("div",{className:"text-sm text-gray-500",children:"Last updated: Just now"})]})]}),n.jsx("div",{className:"flex gap-2 mb-6 overflow-x-auto pb-2",children:["overview","candidates","jobs","interviews","analytics"].map(g=>n.jsx("button",{onClick:()=>p(g),className:`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 capitalize ${h===g?"bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"}`,children:g},g))})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[n.jsx(b,{title:"Total Candidates",value:i.candidates,icon:ur,color:"from-blue-500 to-blue-600",trend:{direction:"up",value:12,period:"this week"},delay:100}),n.jsx(b,{title:"Active Jobs",value:i.jobs,icon:rc,color:"from-green-500 to-emerald-600",trend:{direction:"up",value:8,period:"this month"},delay:200}),n.jsx(b,{title:"Interviews Scheduled",value:i.interviews,icon:X1,color:"from-purple-500 to-purple-600",trend:{direction:"up",value:23,period:"today"},delay:300}),n.jsx(b,{title:"Successful Hires",value:i.hires,icon:Ax,color:"from-orange-500 to-orange-600",trend:{direction:"up",value:15,period:"this month"},delay:400})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[n.jsxs("div",{className:`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transition-all duration-700 ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:"500ms"},children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"Pending Reviews"}),n.jsx($u,{className:"w-5 h-5 text-yellow-500"})]}),n.jsx("div",{className:"text-4xl font-bold text-gray-900 mb-2",children:i.pending}),n.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000",style:{width:`${i.pending/50*100}%`}})}),n.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Candidates awaiting review"})]}),n.jsxs("div",{className:`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transition-all duration-700 ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:"600ms"},children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"Monthly Revenue"}),n.jsx(sh,{className:"w-5 h-5 text-green-500"})]}),n.jsx("div",{className:"text-4xl font-bold text-gray-900 mb-2",children:i.revenue}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(qa,{className:"w-4 h-4 text-green-500"}),n.jsx("span",{className:"text-sm text-green-600 font-medium",children:"+18.5% from last month"})]})]}),n.jsxs("div",{className:`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transition-all duration-700 ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:"700ms"},children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"Success Rate"}),n.jsx(lh,{className:"w-5 h-5 text-blue-500"})]}),n.jsx("div",{className:"text-4xl font-bold text-gray-900 mb-2",children:"84%"}),n.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:n.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-1000",style:{width:"84%"}})}),n.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Candidate to hire conversion"})]})]}),n.jsxs("div",{className:`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transition-all duration-700 ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:"800ms"},children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Recent Activity"}),n.jsx(mx,{className:"w-6 h-6 text-gray-400"})]}),n.jsx("div",{className:"space-y-4",children:v.map(g=>n.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all duration-300 group",children:[n.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${g.status==="success"?"bg-green-100":g.status==="failed"?"bg-red-100":"bg-yellow-100"}`,children:g.status==="success"?n.jsx(rh,{className:"w-5 h-5 text-green-600"}):g.status==="failed"?n.jsx(H1,{className:"w-5 h-5 text-red-600"}):n.jsx($u,{className:"w-5 h-5 text-yellow-600"})}),n.jsxs("div",{className:"flex-1",children:[n.jsxs("p",{className:"font-medium text-gray-900",children:[n.jsx("span",{className:"text-blue-600",children:g.user})," ",g.action]}),n.jsx("p",{className:"text-sm text-gray-500",children:g.time})]}),n.jsx("div",{className:`px-3 py-1 rounded-full text-xs font-bold ${g.status==="success"?"bg-green-100 text-green-700":g.status==="failed"?"bg-red-100 text-red-700":"bg-yellow-100 text-yellow-700"}`,children:g.status.charAt(0).toUpperCase()+g.status.slice(1)})]},g.id))}),n.jsx("div",{className:"mt-6 pt-6 border-t border-gray-100",children:n.jsx("button",{className:"w-full py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl font-medium hover:from-gray-200 hover:to-gray-300 transition-all duration-300",children:"View All Activity"})})]}),n.jsxs("div",{className:`mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transition-all duration-700 ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:"900ms"},children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Performance Overview"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("button",{className:"px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium",children:"Weekly"}),n.jsx("button",{className:"px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium",children:"Monthly"}),n.jsx("button",{className:"px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium",children:"Yearly"})]})]}),n.jsx("div",{className:"h-64 flex items-end justify-between gap-1",children:[65,80,60,75,90,85,70,95,88,72,82,90].map((g,A)=>n.jsxs("div",{className:"flex-1 flex flex-col items-center",children:[n.jsx("div",{className:"w-6 rounded-t-lg bg-gradient-to-t from-blue-500 to-indigo-400 transition-all duration-1000 hover:opacity-80",style:{height:`${g}%`},title:`${g}%`}),n.jsx("span",{className:"text-xs text-gray-500 mt-2",children:["J","F","M","A","M","J","J","A","S","O","N","D"][A]})]},A))}),n.jsxs("div",{className:"flex justify-between items-center mt-6 pt-6 border-t border-gray-100",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-gray-500",children:"Avg. Hires per Month"}),n.jsx("p",{className:"text-2xl font-bold text-gray-900",children:"42"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(qa,{className:"w-5 h-5 text-green-500"}),n.jsx("span",{className:"text-green-600 font-medium",children:"+12.4% growth"})]})]})]})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `})]})},Dx=()=>{const[i,c]=m.useState(!1),[f,u]=m.useState(!1),[h,p]=m.useState(!1);m.useEffect(()=>{setTimeout(()=>c(!0),300);const b=()=>{p(window.scrollY>100),window.scrollY>400&&!f&&u(!0)};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]);const v=[{id:1,name:"Gregory Arrington",role:"CEO & Founder",image:"../images/CEO.jpeg",bio:"Former Google Engineering Lead with 15+ years. Passionate about bridging the talent gap.",stats:"Led 500+ successful hires",color:"from-blue-500 to-indigo-600",response:"CEO & Leadership"},{id:2,name:"Jeremiah Kalmus",role:"CTO",image:"../images/CTO.jpeg",bio:"Full Stack expert with the experience of tech hiring.",stats:"32 patents in Full Stack recruitment",color:"from-purple-500 to-pink-600",response:"CTO & Decision"},{id:3,name:"Nakasi Fujimoto",role:"Head of Talent",image:"../images/Talent.jpg",bio:"Ex-Meta HR Director with expertise in scaling engineering teams for startups to enterprises.",stats:"Scaled 50+ engineering teams",color:"from-green-500 to-emerald-600",response:"Project Manager"}],S=[{number:"10,000+",label:"Developers Hired",icon:ur},{number:"95%",label:"Client Satisfaction",icon:F1},{number:"500+",label:"Companies Trust Us",icon:Nx},{number:"4.9/5",label:"Platform Rating",icon:uh}];return n.jsxs("div",{className:"min-h-screen bg-gray-100",children:[n.jsxs("section",{className:"relative h-screen overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url(/images/a.png)"},children:n.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40"})}),n.jsxs("div",{className:`relative h-full flex flex-col items-center justify-center text-white transition-all duration-1000 ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[[...Array(20)].map((b,g)=>n.jsx("div",{className:"absolute w-1 h-1 bg-blue-400 rounded-full animate-float",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${g*.2}s`,animationDuration:`${3+Math.random()*4}s`}},g)),n.jsxs("div",{className:"text-center px-4",children:[n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"inline-flex items-center gap-3 mb-6 animate-fade-in-up",style:{animationDelay:"0.3s"},children:[n.jsx(xl,{className:"w-8 h-8 text-yellow-300 animate-spin-slow"}),n.jsx("span",{className:"text-2xl font-light tracking-widest text-blue-300",children:"WELCOME TO"}),n.jsx(xl,{className:"w-8 h-8 text-yellow-300 animate-spin-slow"})]}),n.jsx("h1",{className:"text-7xl md:text-9xl font-bold mb-6 animate-gradient-text",children:"DevHire"}),n.jsx("p",{className:"text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up",style:{animationDelay:"0.6s"},children:"Revolutionizing tech hiring with AI-powered talent matching and seamless recruitment solutions"})]}),n.jsx("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",children:n.jsx(nh,{className:"w-8 h-8 text-white/70"})})]})]}),n.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent"})]}),n.jsx("section",{className:"py-16 bg-white",children:n.jsx("div",{className:"container mx-auto px-6",children:n.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8",children:S.map((b,g)=>{const A=b.icon;return n.jsxs("div",{className:`text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg transition-all duration-700 ${h?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${g*100}ms`},children:[n.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center",children:n.jsx(A,{className:"w-8 h-8 text-white"})}),n.jsx("div",{className:"text-4xl font-bold text-gray-900 mb-2",children:b.number}),n.jsx("div",{className:"text-gray-600",children:b.label})]},g)})})})}),n.jsx("section",{className:"py-20 bg-gradient-to-br from-blue-50/50 to-indigo-50/50",children:n.jsx("div",{className:"container mx-auto px-6",children:n.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-8",children:[n.jsx(ir,{className:"w-4 h-4"}),"OUR MISSION"]}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-8",children:["Building the future of ",n.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600",children:"tech recruitment"})]}),n.jsx("p",{className:"text-xl text-gray-700 leading-relaxed mb-12",children:"At DevHire, we believe finding the right talent shouldn't be a challenge. We're on a mission to transform how companies discover, assess, and hire exceptional developers through cutting-edge technology and human expertise."}),n.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{title:"Innovation",desc:"Leveraging AI for smarter matches",icon:"🚀"},{title:"Excellence",desc:"97% candidate satisfaction rate",icon:"🏆"},{title:"Community",desc:"Growing network of 50K+ developers",icon:"🤝"}].map((b,g)=>n.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-lg border border-gray-100",children:[n.jsx("div",{className:"text-4xl mb-4",children:b.icon}),n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:b.title}),n.jsx("p",{className:"text-gray-600",children:b.desc})]},g))})]})})}),n.jsx("section",{className:"py-20 bg-white",children:n.jsxs("div",{className:"container mx-auto px-6",children:[n.jsxs("div",{className:"text-center mb-16",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-bold mb-4",children:[n.jsx(ur,{className:"w-4 h-4"}),"MEET THE VISIONARIES"]}),n.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:["Your ",n.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600",children:"Managers"})]}),n.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"The brilliant minds behind DevHire's success, dedicated to revolutionizing how the world hires tech talent."})]}),n.jsx("div",{className:"grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",children:v.map((b,g)=>n.jsxs("div",{className:`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-3xl ${f?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${g*200}ms`},children:[n.jsx("div",{className:`absolute top-4 right-4 z-20 px-4 py-2 bg-gradient-to-r ${b.color} text-white rounded-full text-sm font-bold shadow-lg`,children:b.role.includes("&")?b.role.split("&")[0].trim():b.role}),n.jsx("div",{className:"relative pt-12 pb-8",children:n.jsxs("div",{className:"relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl",children:[n.jsx("div",{className:`absolute inset-0 bg-gradient-to-r ${b.color} opacity-20`}),n.jsx("img",{src:b.image,alt:b.name,className:"w-full h-full object-cover object-center",style:{objectPosition:"center 25%"}}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-full"})]})}),n.jsxs("div",{className:"p-8 pt-0",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-2",children:b.name}),n.jsx("div",{className:`inline-block px-4 py-1 bg-gradient-to-r ${b.color} bg-clip-text text-transparent font-bold`,children:b.role.includes("&")?b.role.split("&")[1].trim():b.role})]}),n.jsx("p",{className:"text-gray-600 text-center mb-6 leading-relaxed",children:b.bio}),n.jsx("div",{className:"mb-6 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(lh,{className:`w-5 h-5 ${b.color.split(" ")[0]} ${b.color.split(" ")[1].replace("to-","text-")}`}),n.jsx("span",{className:"text-sm font-medium text-gray-700",children:b.stats})]})}),n.jsxs("div",{className:"flex justify-center gap-4",children:[n.jsx("button",{className:"w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors",children:n.jsx(lx,{className:"w-4 h-4"})}),n.jsx("button",{className:"w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-200 transition-colors"}),n.jsx("button",{className:"w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors",children:n.jsx(sc,{className:"w-4 h-4"})})]})]}),n.jsx("div",{className:"px-6 py-4 bg-gradient-to-r from-gray-100 to-gray-200 border-t border-gray-300 text-center",children:n.jsx("span",{className:"text-gray-700 font-bold uppercase tracking-wider",children:b.response})})]},b.id))})]})}),n.jsx("section",{className:"py-20 bg-gradient-to-br from-gray-100 to-gray-200",children:n.jsx("div",{className:"container mx-auto px-6",children:n.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[n.jsxs("h2",{className:"text-4xl font-bold text-gray-900 mb-12",children:["Our Core ",n.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600",children:"Values"})]}),n.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{title:"Transparency",desc:"Clear processes, honest communication",color:"from-blue-400 to-blue-600"},{title:"Excellence",desc:"Going above and beyond always",color:"from-purple-400 to-purple-600"},{title:"Innovation",desc:"Constantly evolving our technology",color:"from-green-400 to-green-600"},{title:"Partnership",desc:"Working together for success",color:"from-orange-400 to-orange-600"}].map((b,g)=>n.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300",children:[n.jsx("div",{className:`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${b.color} flex items-center justify-center`,children:n.jsx(xl,{className:"w-6 h-6 text-white"})}),n.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:b.title}),n.jsx("p",{className:"text-gray-600",children:b.desc})]},g))})]})})}),n.jsx("section",{className:"py-20 bg-gradient-to-r from-blue-600 to-indigo-700",children:n.jsxs("div",{className:"container mx-auto px-6 text-center",children:[n.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"Ready to Transform Your Hiring?"}),n.jsx("p",{className:"text-xl text-blue-100 mb-8 max-w-2xl mx-auto",children:"Join thousands of companies who have revolutionized their tech recruitment with DevHire."}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n.jsx("button",{className:"px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl",children:"Get Started Free"}),n.jsx("button",{className:"px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300",children:"Contact Our Team"})]})]})}),n.jsx("footer",{className:"bg-gray-900 text-white py-12",children:n.jsx("div",{className:"container mx-auto px-6",children:n.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[n.jsxs("div",{className:"mb-6 md:mb-0",children:[n.jsxs("div",{className:"text-2xl font-bold flex items-center gap-2",children:[n.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold",children:"DH"})}),"DevHire"]}),n.jsx("p",{className:"text-gray-400 mt-2",children:"Redefining tech recruitment since 2020"})]}),n.jsxs("div",{className:"text-gray-400",children:["© ",new Date().getFullYear()," DevHire. All rights reserved."]})]})})}),n.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-gradient-text {
          background: linear-gradient(90deg, #fff, #60a5fa, #3b82f6, #8b5cf6, #fff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-text 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
      `})]})},Rx=()=>{const i=[{id:1,title:"Frontend Developer",location:"Remote",type:"Full-time",status:"Open"},{id:2,title:"Backend Developer",location:"Bangalore",type:"Contract",status:"Closed"},{id:3,title:"AI Engineer",location:"Hyderabad",type:"Full-time",status:"Open"}];return n.jsxs("div",{children:[n.jsx(ic,{}),n.jsxs("div",{className:"container mx-auto px-6 py-6",children:[n.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Jobs Posted"}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"min-w-full bg-white rounded shadow",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-gray-100 text-left",children:[n.jsx("th",{className:"py-2 px-4",children:"ID"}),n.jsx("th",{className:"py-2 px-4",children:"Title"}),n.jsx("th",{className:"py-2 px-4",children:"Location"}),n.jsx("th",{className:"py-2 px-4",children:"Type"}),n.jsx("th",{className:"py-2 px-4",children:"Status"})]})}),n.jsx("tbody",{children:i.map(c=>n.jsxs("tr",{className:"border-b",children:[n.jsx("td",{className:"py-2 px-4",children:c.id}),n.jsx("td",{className:"py-2 px-4",children:c.title}),n.jsx("td",{className:"py-2 px-4",children:c.location}),n.jsx("td",{className:"py-2 px-4",children:c.type}),n.jsx("td",{className:"py-2 px-4",children:c.status})]},c.id))})]})})]})]})},_x=()=>{const[i,c]=m.useState({name:"Ashish Kumar",email:"ashish.kumar@gmail.com",password:"",notifications:!0}),f=h=>{const{name:p,value:v,type:S,checked:b}=h.target;c({...i,[p]:S==="checkbox"?b:v})},u=h=>{h.preventDefault(),console.log("Settings saved:",i),alert("Settings updated successfully!")};return n.jsx("div",{className:"min-h-screen bg-gray-100 p-6 flex justify-center",children:n.jsxs("form",{onSubmit:u,className:"bg-white shadow rounded p-6 w-full max-w-md",children:[n.jsx("h1",{className:"text-3xl font-bold mb-4 text-blue-700 text-center",children:"Settings"}),n.jsx("label",{className:"block mb-2 font-medium",children:"Full Name"}),n.jsx("input",{type:"text",name:"name",value:i.name,onChange:f,className:"w-full border border-gray-300 rounded p-2 mb-4",required:!0}),n.jsx("label",{className:"block mb-2 font-medium",children:"Email"}),n.jsx("input",{type:"email",name:"email",value:i.email,onChange:f,className:"w-full border border-gray-300 rounded p-2 mb-4",required:!0}),n.jsx("label",{className:"block mb-2 font-medium",children:"Password"}),n.jsx("input",{type:"password",name:"password",value:i.password,onChange:f,className:"w-full border border-gray-300 rounded p-2 mb-4",placeholder:"Enter new password"}),n.jsxs("div",{className:"flex items-center mb-4",children:[n.jsx("input",{type:"checkbox",name:"notifications",checked:i.notifications,onChange:f,className:"mr-2"}),n.jsx("label",{className:"font-medium",children:"Enable Notifications"})]}),n.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full",children:"Save Changes"})]})})},ch=()=>n.jsx("footer",{className:"bg-white shadow mt-8",children:n.jsxs("div",{className:"container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm",children:[n.jsxs("p",{children:["© ",new Date().getFullYear()," DevHire. All rights reserved."]}),n.jsxs("div",{className:"space-x-4",children:[n.jsx("a",{href:"#",className:"hover:text-blue-600",children:"Privacy Policy"}),n.jsx("a",{href:"#",className:"hover:text-blue-600",children:"Terms of Service"})]})]})}),Ox=()=>{const i={name:"Ashish Kumar",email:"ashish.kumar@gmail.com",location:"India",role:"Admin"};return n.jsx("div",{className:"min-h-screen bg-gray-100 p-6 flex justify-center",children:n.jsxs("div",{className:"bg-white shadow rounded p-6 w-full max-w-md",children:[n.jsx("h1",{className:"text-3xl font-bold mb-4 text-blue-700 text-center",children:"Your Profile"}),n.jsxs("div",{className:"space-y-4 text-lg text-gray-700",children:[n.jsxs("p",{children:["👤 ",n.jsx("span",{className:"font-medium",children:"Name:"})," ",i.name]}),n.jsxs("p",{children:["📧 ",n.jsx("span",{className:"font-medium",children:"Email:"})," ",i.email]}),n.jsxs("p",{children:["📍 ",n.jsx("span",{className:"font-medium",children:"Location:"})," ",i.location]}),n.jsxs("p",{children:["📝 ",n.jsx("span",{className:"font-medium",children:"Role:"})," ",i.role]})]})]})})},Zx=()=>{const i=[{id:1,candidate:"Rajesh",job:"Frontend Developer",date:"2025-07-10",time:"10:00 AM",status:"Scheduled"},{id:2,candidate:"Jane Smith",job:"Backend Developer",date:"2025-07-12",time:"2:00 PM",status:"Scheduled"}];return n.jsxs("div",{children:[n.jsx(ic,{}),n.jsxs("div",{className:"container mx-auto px-6 py-6",children:[n.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Interview Room"}),n.jsx("div",{className:"overflow-x-auto bg-white rounded shadow",children:n.jsxs("table",{className:"min-w-full",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-gray-100",children:[n.jsx("th",{className:"py-2 px-4",children:"ID"}),n.jsx("th",{className:"py-2 px-4",children:"Candidate"}),n.jsx("th",{className:"py-2 px-4",children:"Job"}),n.jsx("th",{className:"py-2 px-4",children:"Date"}),n.jsx("th",{className:"py-2 px-4",children:"Time"}),n.jsx("th",{className:"py-2 px-4",children:"Status"}),n.jsx("th",{className:"py-2 px-4",children:"Action"})]})}),n.jsx("tbody",{children:i.map(c=>n.jsxs("tr",{className:"border-b",children:[n.jsx("td",{className:"py-2 px-4",children:c.id}),n.jsx("td",{className:"py-2 px-4",children:c.candidate}),n.jsx("td",{className:"py-2 px-4",children:c.job}),n.jsx("td",{className:"py-2 px-4",children:c.date}),n.jsx("td",{className:"py-2 px-4",children:c.time}),n.jsx("td",{className:"py-2 px-4",children:c.status}),n.jsx("td",{className:"py-2 px-4",children:n.jsx("button",{className:"bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700",children:"Join"})})]},c.id))})]})})]}),n.jsx(ch,{})]})},Ux=()=>{const[i,c]=m.useState({title:"",location:"",salary:"",description:""}),f=h=>{c({...i,[h.target.name]:h.target.value})},u=h=>{h.preventDefault(),console.log("Job Posted:",i),alert("Job Posted Successfully!")};return n.jsxs("div",{className:"min-h-screen bg-gray-100 p-6",children:[n.jsx("h1",{className:"text-3xl font-bold mb-4 text-blue-700",children:"Post a New Job"}),n.jsxs("form",{onSubmit:u,className:"bg-white shadow rounded p-6 max-w-md mx-auto",children:[n.jsx("label",{className:"block mb-2 font-medium",children:"Job Title"}),n.jsx("input",{type:"text",name:"title",value:i.title,onChange:f,className:"w-full border border-gray-300 rounded p-2 mb-4",required:!0}),n.jsx("label",{className:"block mb-2 font-medium",children:"Location"}),n.jsx("input",{type:"text",name:"location",value:i.location,onChange:f,className:"w-full border border-gray-300 rounded p-2 mb-4",required:!0}),n.jsx("label",{className:"block mb-2 font-medium",children:"Salary"}),n.jsx("input",{type:"text",name:"salary",value:i.salary,onChange:f,className:"w-full border border-gray-300 rounded p-2 mb-4",required:!0}),n.jsx("label",{className:"block mb-2 font-medium",children:"Description"}),n.jsx("textarea",{name:"description",value:i.description,onChange:f,className:"w-full border border-gray-300 rounded p-2 mb-4",rows:"4",required:!0}),n.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Post Job"})]})]})},Hx=()=>{const i=Ga(),[c,f]=m.useState(null),[u,h]=m.useState(!1),[p,v]=m.useState("all"),[S,b]=m.useState("");m.useEffect(()=>{setTimeout(()=>h(!0),100)},[]);const g=[{id:1,title:"Frontend Developer",company:"TechCorp Inc.",location:"Remote",type:"Full-Time",link:"/frontendTest",salary:"$90,000 - $120,000",experience:"2+ years",posted:"2 days ago",skills:["React","TypeScript","Tailwind CSS"],featured:!0,applicants:42},{id:2,title:"Backend Engineer",company:"InnoSoft Solutions",location:"Bangalore, India",type:"Part-Time",link:"/frontendTest",salary:"$70,000 - $95,000",experience:"3+ years",posted:"1 week ago",skills:["Node.js","Python","AWS","MongoDB"],featured:!1,applicants:28},{id:3,title:"Full Stack Developer",company:"CodeWorks Technologies",location:"San Francisco, CA",type:"Contract",link:"/frontendTest",salary:"$110,000 - $140,000",experience:"4+ years",posted:"3 days ago",skills:["React","Next.js","GraphQL","PostgreSQL"],featured:!0,applicants:56},{id:4,title:"UI/UX Designer",company:"DesignHub",location:"Remote",type:"Full-Time",link:"/frontendTest",salary:"$85,000 - $110,000",experience:"3+ years",posted:"5 days ago",skills:["Figma","Adobe XD","Prototyping","User Research"],featured:!1,applicants:31},{id:5,title:"DevOps Engineer",company:"CloudTech",location:"Austin, TX",type:"Full-Time",link:"/frontendTest",salary:"$100,000 - $130,000",experience:"5+ years",posted:"Yesterday",skills:["Docker","Kubernetes","CI/CD","Terraform"],featured:!0,applicants:19},{id:6,title:"Mobile Developer",company:"AppCraft",location:"Remote",type:"Contract",link:"/frontendTest",salary:"$95,000 - $125,000",experience:"3+ years",posted:"4 days ago",skills:["React Native","Swift","Android","Firebase"],featured:!1,applicants:37}],A=g.filter(M=>!(p!=="all"&&M.type!==p||S&&!M.title.toLowerCase().includes(S.toLowerCase())&&!M.company.toLowerCase().includes(S.toLowerCase()))),w=M=>{const R=document.getElementById(`apply-btn-${M.id}`);R&&(R.classList.add("animate-pulse"),setTimeout(()=>{R.classList.remove("animate-pulse"),i(M.link)},300))};return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 p-4 md:p-8",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"mb-10 animate-fade-in",children:[n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",children:[n.jsxs("div",{children:[n.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-3",children:["Discover Your Next ",n.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600",children:"Career Move"})]}),n.jsx("p",{className:"text-gray-600 text-lg",children:"Find the perfect tech role that matches your skills and ambitions"})]}),n.jsx("div",{className:"flex items-center gap-2",children:n.jsx("div",{className:"px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full",children:n.jsxs("span",{className:"text-green-700 font-semibold flex items-center gap-2",children:[n.jsx(qa,{className:"w-4 h-4"}),g.length," Open Positions"]})})})]}),n.jsx("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-8 border border-white/50",children:n.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[n.jsxs("div",{className:"flex-1 relative",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:n.jsx("svg",{className:"w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),n.jsx("input",{type:"text",placeholder:"Search jobs by title or company...",value:S,onChange:M=>b(M.target.value),className:"w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"})]}),n.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 md:pb-0",children:["all","Full-Time","Part-Time","Contract"].map(M=>n.jsx("button",{onClick:()=>v(M),className:`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${p===M?"bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"}`,children:M==="all"?"All Jobs":M},M))})]})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:A.map((M,R)=>n.jsxs("div",{className:`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${u?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${R*100}ms`},onMouseEnter:()=>f(M.id),onMouseLeave:()=>f(null),children:[M.featured&&n.jsx("div",{className:"absolute top-4 right-4 z-10",children:n.jsxs("div",{className:"px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg",children:[n.jsx(xl,{className:"w-3 h-3"}),"Featured"]})}),n.jsxs("div",{className:"p-6",children:[n.jsx("div",{className:"flex items-start justify-between mb-4",children:n.jsx("div",{children:n.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center",children:n.jsx(rc,{className:"w-6 h-6 text-white"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors",children:M.title}),n.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[n.jsx(M1,{className:"w-4 h-4 text-gray-400"}),n.jsx("span",{className:"text-gray-600 font-medium",children:M.company})]})]})]})})}),n.jsxs("div",{className:"space-y-3 mb-6",children:[n.jsxs("div",{className:"flex flex-wrap gap-2",children:[n.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg",children:[n.jsx(cx,{className:"w-4 h-4 text-blue-500"}),n.jsx("span",{className:"text-sm font-medium text-blue-700",children:M.location})]}),n.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg",children:[n.jsx($u,{className:"w-4 h-4 text-green-500"}),n.jsx("span",{className:"text-sm font-medium text-green-700",children:M.type})]}),n.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-lg",children:[n.jsx(sh,{className:"w-4 h-4 text-purple-500"}),n.jsx("span",{className:"text-sm font-medium text-purple-700",children:M.salary})]})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"Required Skills:"}),n.jsx("div",{className:"flex flex-wrap gap-2",children:M.skills.map((O,H)=>n.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:scale-105",children:O},H))})]}),n.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-gray-100",children:[n.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:[n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx(ur,{className:"w-4 h-4"}),n.jsxs("span",{children:[M.applicants," applicants"]})]}),n.jsx("span",{children:"•"}),n.jsx("span",{children:M.posted})]}),n.jsxs("span",{className:"text-sm text-gray-500",children:[M.experience," exp"]})]})]}),n.jsxs("button",{id:`apply-btn-${M.id}`,onClick:()=>w(M),className:`w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-500 flex items-center justify-center gap-2 ${c===M.id?"bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl transform scale-[1.02]":"bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"}`,children:[n.jsx("span",{children:"Apply Now"}),n.jsx(ah,{className:`w-4 h-4 transition-transform duration-500 ${c===M.id?"translate-x-2":""}`})]})]}),n.jsx("div",{className:`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-500 pointer-events-none ${c===M.id?"opacity-100":""}`})]},M.id))}),A.length===0&&n.jsxs("div",{className:"text-center py-16 animate-fade-in",children:[n.jsx("div",{className:"w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center",children:n.jsx("svg",{className:"w-12 h-12 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),n.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-2",children:"No jobs found"}),n.jsx("p",{className:"text-gray-600 mb-6",children:"Try adjusting your search or filter criteria"}),n.jsx("button",{onClick:()=>{v("all"),b("")},className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-600 transition-all",children:"View All Jobs"})]}),n.jsx("div",{className:"mt-12 p-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl border border-white/50",children:n.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:g.length}),n.jsx("div",{className:"text-gray-600",children:"Total Jobs"})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-3xl font-bold text-green-600 mb-2",children:g.filter(M=>M.featured).length}),n.jsx("div",{className:"text-gray-600",children:"Featured Roles"})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-3xl font-bold text-purple-600 mb-2",children:g.filter(M=>M.location==="Remote").length}),n.jsx("div",{className:"text-gray-600",children:"Remote Positions"})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-3xl font-bold text-orange-600 mb-2",children:"24h"}),n.jsx("div",{className:"text-gray-600",children:"Avg Response Time"})]})]})})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 0.3s ease-in-out;
        }
      `})]})},Bx=()=>n.jsx("div",{className:"flex justify-center items-center py-4",children:n.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"})}),Lx=()=>{const[i,c]=m.useState({name:"",email:"",message:""}),[f,u]=m.useState({}),[h,p]=m.useState(!1),[v,S]=m.useState(!1),[b,g]=m.useState(!1);m.useEffect(()=>{const R=setTimeout(()=>{S(!0)},100);return()=>clearTimeout(R)},[]);const A=R=>{const{name:O,value:H}=R.target;c({...i,[O]:H}),f[O]&&u(Q=>({...Q,[O]:""}))},w=()=>{let R={};return i.name.trim()||(R.name="Name is required"),i.email.trim()?/\S+@\S+\.\S+/.test(i.email)||(R.email="Email is invalid"):R.email="Email is required",i.message.trim()||(R.message="Message is required"),u(R),Object.keys(R).length===0},M=R=>{R.preventDefault(),w()&&(p(!0),setTimeout(()=>{console.log("Contact form submitted:",i),p(!1),g(!0);const O=document.createElement("div");O.className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-fade-in",O.innerHTML=`
        <div class="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 transform scale-0 animate-pop-up">
          <div class="flex justify-center mb-4">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-success-icon">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-800 text-center mb-2">Message Sent!</h3>
          <p class="text-gray-600 text-center mb-6">We'll get back to you soon.</p>
          <button onclick="this.parentElement.parentElement.remove()" class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Close
          </button>
        </div>
      `,document.body.appendChild(O),setTimeout(()=>{c({name:"",email:"",message:""}),g(!1)},3e3)},2e3))};return n.jsxs("div",{className:"min-h-screen bg-gray-100 from-blue-50 via-indigo-50 to-purple-50 p-6 flex items-center justify-center overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[[...Array(20)].map((R,O)=>n.jsx("div",{className:`absolute rounded-full bg-gradient-to-r from-blue-300/10 to-purple-300/10 ${v?"animate-float":"opacity-0"}`,style:{width:`${20+Math.random()*60}px`,height:`${20+Math.random()*60}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${O*.1}s`,animationDuration:`${3+Math.random()*4}s`}},O)),n.jsx("div",{className:`absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl ${v?"animate-pulse-slow":"opacity-0"}`}),n.jsx("div",{className:`absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-300/20 to-pink-300/20 rounded-full blur-3xl ${v?"animate-pulse-slow":"opacity-0"}`,style:{animationDelay:"1s"}})]}),n.jsx("div",{className:`relative z-10 w-full max-w-4xl transform transition-all duration-700 ${v?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:n.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[n.jsxs("div",{className:"space-y-8 animate-fade-in-left",children:[n.jsxs("div",{children:[n.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4",children:["Let’s Build Something ",n.jsx("span",{className:"text-blue-600",children:"Great"})]}),n.jsx("p",{className:"text-gray-600 text-lg",children:"Whether you have an idea, a question, or a project in mind — we’re here to help you move forward with clarity and confidence."})]}),n.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-gray-100",children:[n.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"Why Contact Us?"}),n.jsx("ul",{className:"space-y-4",children:[{icon:"🚀",title:"Fast & Clear Communication",text:"We respond quickly and keep everything transparent."},{icon:"🧠",title:"Expert Guidance",text:"Get practical advice, not generic answers."},{icon:"🎯",title:"Goal-Focused Solutions",text:"We focus on results that actually matter to you."}].map((R,O)=>n.jsxs("li",{className:"flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-1",children:[n.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl",children:R.icon}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold text-gray-800",children:R.title}),n.jsx("p",{className:"text-gray-600 text-sm",children:R.text})]})]},O))})]}),n.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl",children:[n.jsx("h3",{className:"text-xl font-bold mb-4",children:"What Happens Next?"}),n.jsxs("ol",{className:"space-y-3 text-sm",children:[n.jsxs("li",{className:"flex items-center space-x-3",children:[n.jsx("span",{className:"font-bold text-lg",children:"1."}),n.jsx("span",{children:"We review your message carefully"})]}),n.jsxs("li",{className:"flex items-center space-x-3",children:[n.jsx("span",{className:"font-bold text-lg",children:"2."}),n.jsx("span",{children:"We respond within 24 hours"})]}),n.jsxs("li",{className:"flex items-center space-x-3",children:[n.jsx("span",{className:"font-bold text-lg",children:"3."}),n.jsx("span",{children:"We propose the best next step"})]})]})]}),n.jsxs("div",{className:"flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md border border-gray-100",children:[n.jsx("span",{className:"text-2xl",children:"🔒"}),n.jsx("p",{className:"text-gray-600 text-sm",children:"Your message is 100% confidential. We never share your information."})]})]}),n.jsx("div",{className:"animate-fade-in-right",children:n.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 border border-gray-100",children:[n.jsx("div",{className:"relative overflow-hidden rounded-t-xl -mt-8 -mx-8 mb-8",children:n.jsx("div",{className:"h-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500",children:n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x"})})}),n.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6 text-center",children:"Send us a Message"}),n.jsxs("form",{onSubmit:M,className:"space-y-6",children:[n.jsxs("div",{className:"group",children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Your Name"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 ${i.name?"text-blue-500":"text-gray-400"}`,children:n.jsx("span",{className:"text-xl",children:"👤"})}),n.jsx("input",{type:"text",name:"name",value:i.name,onChange:A,className:`w-full pl-12 pr-4 py-3 bg-gray-50 border ${f.name?"border-red-300 focus:border-red-500 focus:ring-red-500":"border-gray-300 focus:border-blue-500 focus:ring-blue-500"} rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all duration-300 hover:bg-gray-100`,placeholder:"Enter your full name"}),i.name&&!f.name&&n.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center animate-pulse",children:n.jsx("span",{className:"text-green-500",children:"✓"})})]}),f.name&&n.jsx("p",{className:"text-red-500 text-sm mt-1 animate-shake",children:f.name})]}),n.jsxs("div",{className:"group",children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 ${i.email?"text-blue-500":"text-gray-400"}`,children:n.jsx("span",{className:"text-xl",children:"✉️"})}),n.jsx("input",{type:"email",name:"email",value:i.email,onChange:A,className:`w-full pl-12 pr-4 py-3 bg-gray-50 border ${f.email?"border-red-300 focus:border-red-500 focus:ring-red-500":"border-gray-300 focus:border-blue-500 focus:ring-blue-500"} rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all duration-300 hover:bg-gray-100`,placeholder:"you@example.com"}),i.email&&!f.email&&n.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center animate-pulse",children:n.jsx("span",{className:"text-green-500",children:"✓"})})]}),f.email&&n.jsx("p",{className:"text-red-500 text-sm mt-1 animate-shake",children:f.email})]}),n.jsxs("div",{className:"group",children:[n.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Your Message"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`absolute top-3 left-3 pointer-events-none transition-colors duration-300 ${i.message?"text-blue-500":"text-gray-400"}`,children:n.jsx("span",{className:"text-xl",children:"💬"})}),n.jsx("textarea",{name:"message",value:i.message,onChange:A,rows:"4",className:`w-full pl-12 pr-4 py-3 bg-gray-50 border ${f.message?"border-red-300 focus:border-red-500 focus:ring-red-500":"border-gray-300 focus:border-blue-500 focus:ring-blue-500"} rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all duration-300 hover:bg-gray-100 resize-none`,placeholder:"How can we help you?"})]}),n.jsxs("div",{className:"flex justify-between items-center mt-1",children:[f.message&&n.jsx("p",{className:"text-red-500 text-sm animate-shake",children:f.message}),n.jsxs("span",{className:`text-sm ml-auto ${i.message.length>200?"text-red-500":"text-gray-500"}`,children:[i.message.length,"/500"]})]})]}),h?n.jsx("div",{className:"flex justify-center",children:n.jsx(Bx,{})}):n.jsx("button",{type:"submit",disabled:b,className:`w-full py-4 px-4 rounded-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${b?"bg-gradient-to-r from-green-500 to-green-600 cursor-not-allowed":"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl"}`,children:b?n.jsxs("div",{className:"flex items-center justify-center",children:[n.jsx("span",{className:"mr-2",children:"✅"}),"Message Sent!"]}):n.jsxs("div",{className:"flex items-center justify-center",children:[n.jsx("span",{children:"Send Message"}),n.jsx("span",{className:"ml-2 text-lg",children:"🚀"})]})}),n.jsx("div",{className:"text-center",children:n.jsx("div",{className:"text-sm text-gray-500",children:"We typically respond within 24 hours"})})]})]})})]})}),n.jsx("style",{jsx:!0,children:`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes pop-up {
          0% {
            transform: scale(0);
          }
          70% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes success-icon {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-fade-in-left {
          opacity: 0;
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          opacity: 0;
          animation: fade-in-right 0.8s ease-out 0.2s forwards;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-pop-up {
          animation: pop-up 0.5s ease-out forwards;
        }
        
        .animate-success-icon {
          animation: success-icon 0.5s ease-out forwards;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `})]})},qx=()=>{const[i,c]=m.useState(0),[f,u]=m.useState({}),[h,p]=m.useState(!1),[v,S]=m.useState(!1),[b,g]=m.useState(0),[A,w]=m.useState(0),[M,R]=m.useState(!1),O=Ga(),H=[{id:1,question:"What does the 'typeof' operator return for an array?",options:["object","array","undefined","function"],correctAnswer:"object",explanation:"In JavaScript, arrays are a type of object. This can be confusing, but typeof [] returns 'object'.",category:"JavaScript"},{id:2,question:"Which CSS property is used to change the text color?",options:["text-color","font-color","color","text-style"],correctAnswer:"color",explanation:"The 'color' property sets the color of text. Example: color: blue;",category:"CSS"},{id:3,question:"What is the purpose of React's useState hook?",options:["To fetch data from APIs","To add state to functional components","To style components","To create reusable functions"],correctAnswer:"To add state to functional components",explanation:"useState allows functional components to have state variables. Before hooks, only class components could have state.",category:"React"},{id:4,question:"Which HTML5 tag is used for navigation links?",options:["<nav>","<header>","<sidebar>","<menu>"],correctAnswer:"<nav>",explanation:"<nav> defines a set of navigation links. It's a semantic tag for better accessibility and SEO.",category:"HTML"},{id:5,question:"What does CSS stand for?",options:["Computer Style Sheets","Creative Style System","Cascading Style Sheets","Colorful Style Sheets"],correctAnswer:"Cascading Style Sheets",explanation:"CSS stands for Cascading Style Sheets. 'Cascading' refers to how styles cascade from multiple sources.",category:"CSS"}],Q=()=>{p(!0),c(0),u({}),S(!1),g(0),w(0),R(!1)},V=ue=>{const je={...f,[H[i].id]:ue};if(u(je),R(!0),ue===H[i].correctAnswer){const _e=document.getElementById(`option-${ue}`);_e&&(_e.classList.add("border-green-500","bg-green-50"),setTimeout(()=>{_e.classList.remove("border-green-500","bg-green-50")},500))}},U=()=>{R(!1),i<H.length-1?c(i+1):(q(),S(!0))},q=()=>{let ue=0;H.forEach(je=>{f[je.id]===je.correctAnswer&&ue++}),w(ue),g(ue/H.length*100)},G=()=>{R(!1),i>0&&c(i-1)},F=()=>A>=4?"Excellent! You've qualified for the next stage! 🚀":A>=3?"Good job! You passed the test. 👍":"Keep learning and try again! 📚",oe=()=>A>=4?{bg:"bg-gradient-to-r from-green-100 to-emerald-100",text:"text-green-700",border:"border-green-200"}:A>=3?{bg:"bg-gradient-to-r from-yellow-100 to-amber-100",text:"text-yellow-700",border:"border-yellow-200"}:{bg:"bg-gradient-to-r from-red-100 to-orange-100",text:"text-red-700",border:"border-red-200"};if(!h)return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center",children:[n.jsx("div",{className:"w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6",children:n.jsx("span",{className:"text-3xl text-white",children:"💻"})}),n.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Frontend Developer Test"}),n.jsxs("p",{className:"text-gray-600 mb-8",children:["Test your knowledge with ",H.length," questions about HTML, CSS, JavaScript, and React."]}),n.jsxs("div",{className:"space-y-4 mb-8",children:[n.jsxs("div",{className:"flex items-center justify-center space-x-3",children:[n.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),n.jsx("span",{className:"text-gray-700",children:"HTML & CSS Fundamentals"})]}),n.jsxs("div",{className:"flex items-center justify-center space-x-3",children:[n.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),n.jsx("span",{className:"text-gray-700",children:"JavaScript Core Concepts"})]}),n.jsxs("div",{className:"flex items-center justify-center space-x-3",children:[n.jsx("div",{className:"w-3 h-3 bg-purple-500 rounded-full"}),n.jsx("span",{className:"text-gray-700",children:"React Basics"})]})]}),n.jsxs("div",{className:"bg-blue-50 rounded-lg p-4 mb-6",children:[n.jsxs("p",{className:"text-sm text-blue-700",children:[n.jsx("span",{className:"font-bold",children:"Passing Score:"})," 4 out of 5 correct answers"]}),n.jsxs("p",{className:"text-sm text-blue-700 mt-1",children:[n.jsx("span",{className:"font-bold",children:"Qualify for:"})," Advanced Technical Interview"]})]}),n.jsx("button",{onClick:Q,className:"w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",children:"Start Test"})]})});if(v){const ue=oe(),je=A>=4;return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 max-w-md w-full",children:[n.jsxs("div",{className:`${ue.bg} ${ue.border} border rounded-xl p-6 mb-8 text-center`,children:[n.jsx("div",{className:`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${je?"bg-gradient-to-r from-green-400 to-emerald-500":A>=3?"bg-gradient-to-r from-yellow-400 to-amber-500":"bg-gradient-to-r from-red-400 to-orange-500"}`,children:n.jsx("span",{className:"text-3xl text-white font-bold",children:A})}),n.jsx("h2",{className:`text-2xl font-bold ${ue.text} mb-2`,children:F()}),n.jsxs("p",{className:"text-gray-700",children:["You got ",A," out of ",H.length," questions correct"]}),n.jsx("div",{className:"mt-4",children:n.jsxs("span",{className:`px-4 py-2 rounded-full text-sm font-bold ${je?"bg-green-100 text-green-700":A>=3?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:["Score: ",Math.round(b),"%"]})})]}),n.jsxs("div",{className:`mb-8 p-4 rounded-lg border ${je?"bg-gradient-to-r from-green-50 to-emerald-50 border-green-200":"bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200"}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"font-bold text-gray-800",children:"Next Stage Access:"}),n.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-bold ${je?"bg-green-100 text-green-700":"bg-gray-200 text-gray-700"}`,children:je?"UNLOCKED":"LOCKED"})]}),n.jsx("p",{className:"text-sm text-gray-600",children:je?"🎉 Congratulations! You qualify for the advanced technical interview.":`Need ${4-A} more correct answers to unlock the next stage.`})]}),n.jsx("div",{className:"space-y-4",children:je?n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>O("/FrontendTestSecond"),className:"w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center",children:[n.jsx("span",{className:"mr-2",children:"🚀"}),"Proceed to Next Stage",n.jsx("span",{className:"ml-2",children:"→"})]}),n.jsx("button",{onClick:Q,className:"w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300",children:"Retake Test"})]}):n.jsx("button",{onClick:Q,className:"w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",children:"Retake Test"})}),n.jsxs("div",{className:"mt-8",children:[n.jsx("h3",{className:"font-bold text-gray-800 mb-4",children:"Review Your Answers:"}),n.jsx("div",{className:"space-y-3 max-h-64 overflow-y-auto pr-2",children:H.map((_e,Je)=>{const Ct=f[_e.id],bt=Ct===_e.correctAnswer;return n.jsxs("div",{className:"p-3 border border-gray-200 rounded-lg",children:[n.jsxs("div",{className:"flex justify-between items-start mb-2",children:[n.jsxs("span",{className:"font-medium text-gray-800",children:["Q",Je+1,": ",_e.question]}),n.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${bt?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:bt?"✓ Correct":"✗ Incorrect"})]}),n.jsxs("div",{className:"text-sm space-y-1",children:[n.jsxs("p",{className:"text-gray-600",children:[n.jsx("span",{className:"font-medium",children:"Your answer:"})," ",Ct||"Not answered"]}),n.jsxs("p",{className:"text-gray-600",children:[n.jsx("span",{className:"font-medium",children:"Correct:"})," ",n.jsx("span",{className:"text-green-600 font-medium",children:_e.correctAnswer})]})]})]},_e.id)})})]})]})})}const P=H[i],ge=f[P.id];return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4",children:n.jsxs("div",{className:"max-w-2xl mx-auto",children:[n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-4 mb-6",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"text-lg font-bold text-gray-800 mb-1",children:"Frontend Developer Test"}),n.jsxs("div",{className:"flex items-center space-x-2",children:[n.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium",children:P.category}),n.jsxs("span",{className:"text-sm text-gray-600",children:["Question ",i+1," of ",H.length]})]})]}),n.jsx("div",{className:"mt-2 sm:mt-0",children:n.jsxs("div",{className:"text-right",children:[n.jsx("span",{className:"text-sm text-gray-600",children:"Required to pass:"}),n.jsxs("div",{className:"flex items-center justify-end space-x-1",children:[n.jsx("span",{className:"text-sm font-medium text-gray-800",children:"4/5 correct"}),n.jsx("div",{className:"w-8 h-2 bg-gray-200 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-green-500",style:{width:"80%"}})})]})]})})]}),n.jsx("div",{className:"h-2 bg-gray-200 rounded-full",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300",style:{width:`${(i+1)/H.length*100}%`}})})]}),n.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-6",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[n.jsx("div",{className:"w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold",children:i+1}),n.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Select the correct answer"})]}),n.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-6 leading-relaxed",children:P.question})]}),n.jsx("div",{className:"space-y-3",children:P.options.map((ue,je)=>n.jsx("button",{id:`option-${ue}`,onClick:()=>V(ue),className:`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${ge===ue?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-blue-300 hover:bg-blue-50"}`,children:n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:`w-8 h-8 rounded-full border-2 mr-3 flex items-center justify-center ${ge===ue?"border-blue-500 bg-blue-500 text-white":"border-gray-300 text-gray-600"}`,children:String.fromCharCode(65+je)}),n.jsx("span",{className:"font-medium text-gray-800",children:ue})]})},je))}),M&&ge&&n.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 animate-fade-in",children:n.jsxs("div",{className:"flex items-start",children:[n.jsx("span",{className:"text-blue-600 mr-2",children:"💡"}),n.jsx("div",{children:n.jsxs("p",{className:"text-sm text-blue-800",children:[n.jsx("span",{className:"font-bold",children:"Explanation:"})," ",P.explanation]})})]})})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("button",{onClick:G,disabled:i===0,className:`px-6 py-3 rounded-lg font-medium transition-all ${i===0?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow"}`,children:"← Previous"}),n.jsx("button",{onClick:U,disabled:!ge,className:`px-6 py-3 rounded-lg font-medium transition-all ${ge?i===H.length-1?"bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-lg":"bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg":"bg-gray-100 text-gray-400 cursor-not-allowed"}`,children:i===H.length-1?"Submit Test":"Next Question →"})]})]})})},Gx=()=>{const[i,c]=m.useState(""),[f,u]=m.useState("input"),[h,p]=m.useState(15),[v,S]=m.useState(!0),b=Ga();m.useEffect(()=>{let R;return f==="waiting"&&h>0&&(R=setInterval(()=>{p(O=>O<=1?(clearInterval(R),u("result"),0):O-1)},1e3)),()=>clearInterval(R)},[f,h]);const g=R=>/^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+(\/?)$/.test(R.trim()),A=()=>{if(!i.trim()){S(!1);return}if(!g(i)){S(!1);return}S(!0),u("waiting"),p(15)},w=()=>{c(""),u("input"),S(!0)},M=R=>{R.key==="Enter"&&A()};return f==="input"?n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 max-w-md w-full",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("div",{className:"w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4",children:n.jsx("svg",{className:"w-8 h-8 text-white",fill:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})}),n.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Please enter your GitHub URL"}),n.jsx("p",{className:"text-gray-600",children:"We'll use this to invite you to our coding test repository"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:n.jsx("svg",{className:"w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),n.jsx("input",{type:"text",value:i,onChange:R=>{c(R.target.value),S(!0)},onKeyPress:M,placeholder:"https://github.com/yourusername",className:`w-full pl-10 pr-4 py-3 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${v?"border-gray-300":"border-red-300 bg-red-50"}`})]}),!v&&n.jsxs("div",{className:"mt-2 flex items-center text-red-600 text-sm",children:[n.jsx("svg",{className:"w-4 h-4 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Please enter a valid GitHub URL (e.g., https://github.com/username)"]}),n.jsx("div",{className:"mt-3 p-3 bg-blue-50 rounded-lg",children:n.jsxs("p",{className:"text-sm text-blue-700",children:[n.jsx("span",{className:"font-bold",children:"Note:"})," Make sure your GitHub profile is public to receive the invitation."]})})]}),n.jsxs("div",{className:"flex space-x-4",children:[n.jsx("button",{onClick:w,className:"flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300",children:"Cancel"}),n.jsx("button",{onClick:A,className:"flex-1 py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg font-bold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg",children:"OK"})]})]})}):f==="waiting"?n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center",children:[n.jsx("div",{className:"mb-8",children:n.jsxs("div",{className:"relative w-24 h-24 mx-auto",children:[n.jsx("div",{className:"absolute inset-0 border-4 border-gray-200 rounded-full"}),n.jsx("div",{className:"absolute inset-0 border-4 border-transparent border-t-gray-800 rounded-full animate-spin"}),n.jsx("div",{className:"absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center",children:n.jsxs("span",{className:"text-2xl text-white font-bold",children:[h,"s"]})})]})}),n.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Please wait for a while"}),n.jsx("p",{className:"text-gray-600 mb-8",children:"We're processing your GitHub URL and preparing the test invitation..."}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between mb-2",children:[n.jsx("span",{className:"text-sm text-gray-600",children:"Processing..."}),n.jsxs("span",{className:"text-sm font-medium text-gray-800",children:[Math.round((15-h)/15*100),"%"]})]}),n.jsx("div",{className:"h-2 bg-gray-200 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-full transition-all duration-1000",style:{width:`${(15-h)/15*100}%`}})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-center text-sm text-gray-600",children:[n.jsx("div",{className:`w-3 h-3 rounded-full mr-2 ${h<=12?"bg-green-500":"bg-gray-300"}`}),n.jsx("span",{children:"Validating GitHub URL..."}),h<=12&&n.jsx("span",{className:"ml-2 text-green-600",children:"✓"})]}),n.jsxs("div",{className:"flex items-center justify-center text-sm text-gray-600",children:[n.jsx("div",{className:`w-3 h-3 rounded-full mr-2 ${h<=8?"bg-green-500":"bg-gray-300"}`}),n.jsx("span",{children:"Creating test repository..."}),h<=8&&n.jsx("span",{className:"ml-2 text-green-600",children:"✓"})]}),n.jsxs("div",{className:"flex items-center justify-center text-sm text-gray-600",children:[n.jsx("div",{className:`w-3 h-3 rounded-full mr-2 ${h<=4?"bg-green-500":"bg-gray-300"}`}),n.jsx("span",{children:"Sending invitation..."}),h<=4&&n.jsx("span",{className:"ml-2 text-green-600",children:"✓"})]})]})]})}):n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center",children:[n.jsx("div",{className:"mb-8",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"}),n.jsx("div",{className:"absolute inset-2 bg-green-200 rounded-full animate-ping opacity-50"}),n.jsx("div",{className:"relative w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto",children:n.jsx("svg",{className:"w-12 h-12 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M5 13l4 4L19 7"})})})]})}),n.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"I invited you to my test!"}),n.jsx("p",{className:"text-gray-600 mb-8",children:"Check your GitHub notifications for the invitation to our coding test repository. You have 7 days to complete the test."}),n.jsx("div",{className:"mb-8 p-4 bg-gray-50 rounded-lg",children:n.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[n.jsx("svg",{className:"w-5 h-5 text-gray-600",fill:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),n.jsx("span",{className:"text-gray-800 font-medium truncate",children:i})]})}),n.jsxs("div",{className:"mb-8 space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-center text-sm text-gray-600",children:[n.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mr-2"}),n.jsx("span",{children:"Test duration: 60 minutes"})]}),n.jsxs("div",{className:"flex items-center justify-center text-sm text-gray-600",children:[n.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mr-2"}),n.jsx("span",{children:"Languages: JavaScript, HTML, CSS"})]}),n.jsxs("div",{className:"flex items-center justify-center text-sm text-gray-600",children:[n.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mr-2"}),n.jsx("span",{children:"Difficulty: Intermediate"})]})]}),n.jsx("button",{onClick:()=>b("/dashboard"),className:"w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",children:"OK"}),n.jsx("p",{className:"mt-6 text-sm text-gray-500",children:"Need help? Contact support@example.com"})]})})},Qx=({children:i})=>eh()?i:n.jsx(Xp,{to:"/login"});function Vx(){return n.jsxs(n1,{children:[n.jsx(ic,{}),n.jsxs(Dp,{children:[n.jsx(tt,{path:"/",element:n.jsx(Cx,{})}),n.jsx(tt,{path:"/login",element:n.jsx(Xx,{})}),n.jsx(tt,{path:"/register",element:n.jsx(kx,{})}),n.jsx(tt,{path:"/dashboard",element:n.jsx(Rm,{})}),n.jsx(tt,{path:"/candidates",element:n.jsx(Dx,{})}),n.jsx(tt,{path:"/jobs",element:n.jsx(Rx,{})}),n.jsx(tt,{path:"/settings",element:n.jsx(_x,{})}),n.jsx(tt,{path:"/profile",element:n.jsx(Ox,{})}),n.jsx(tt,{path:"/interview-room",element:n.jsx(Zx,{})}),n.jsx(tt,{path:"/post-job",element:n.jsx(Ux,{})}),n.jsx(tt,{path:"/jobs-listings",element:n.jsx(Hx,{})}),n.jsx(tt,{path:"/contact",element:n.jsx(Lx,{})}),n.jsx(tt,{path:"/frontendTest",element:n.jsx(qx,{})}),n.jsx(tt,{path:"/FrontendTestSecond",element:n.jsx(Gx,{})}),n.jsx(tt,{path:"/dashboard",element:n.jsx(Qx,{children:n.jsx(Rm,{})})})]}),n.jsx(ch,{})]})}_g.createRoot(document.getElementById("root")).render(n.jsx(m.StrictMode,{children:n.jsx(Vx,{})}));
