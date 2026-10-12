(function(){const X=document.createElement("link").relList;if(X&&X.supports&&X.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))m(D);new MutationObserver(D=>{for(const O of D)if(O.type==="childList")for(const M of O.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&m(M)}).observe(document,{childList:!0,subtree:!0});function E(D){const O={};return D.integrity&&(O.integrity=D.integrity),D.referrerPolicy&&(O.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?O.credentials="include":D.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function m(D){if(D.ep)return;D.ep=!0;const O=E(D);fetch(D.href,O)}})();var ws={exports:{}},ji={};var nh;function rp(){if(nh)return ji;nh=1;var S=Symbol.for("react.transitional.element"),X=Symbol.for("react.fragment");function E(m,D,O){var M=null;if(O!==void 0&&(M=""+O),D.key!==void 0&&(M=""+D.key),"key"in D){O={};for(var U in D)U!=="key"&&(O[U]=D[U])}else O=D;return D=O.ref,{$$typeof:S,type:m,key:M,ref:D!==void 0?D:null,props:O}}return ji.Fragment=X,ji.jsx=E,ji.jsxs=E,ji}var ih;function cp(){return ih||(ih=1,ws.exports=rp()),ws.exports}var u=cp(),Os={exports:{}},ne={};var uh;function sp(){if(uh)return ne;uh=1;var S=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),M=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),A=Symbol.for("react.view_transition"),me=Symbol.iterator;function pe(f){return f===null||typeof f!="object"?null:(f=me&&f[me]||f["@@iterator"],typeof f=="function"?f:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,he={};function Y(f,C,x){this.props=f,this.context=C,this.refs=he,this.updater=x||K}Y.prototype.isReactComponent={},Y.prototype.setState=function(f,C){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,C,"setState")},Y.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function ue(){}ue.prototype=Y.prototype;function ge(f,C,x){this.props=f,this.context=C,this.refs=he,this.updater=x||K}var ie=ge.prototype=new ue;ie.constructor=ge,I(ie,Y.prototype),ie.isPureReactComponent=!0;var Ce=Array.isArray;function F(){}var ae={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function P(f,C,x){var q=x.ref;return{$$typeof:S,type:f,key:C,ref:q!==void 0?q:null,props:x}}function Ye(f,C){return P(f.type,C,f.props)}function He(f){return typeof f=="object"&&f!==null&&f.$$typeof===S}function gt(f){var C={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(x){return C[x]})}var $e=/\/+/g;function Ge(f,C){return typeof f=="object"&&f!==null&&f.key!=null?gt(""+f.key):C.toString(36)}function w(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(F,F):(f.status="pending",f.then(function(C){f.status==="pending"&&(f.status="fulfilled",f.value=C)},function(C){f.status==="pending"&&(f.status="rejected",f.reason=C)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function W(f,C,x,q,ee){var ve=typeof f;(ve==="undefined"||ve==="boolean")&&(f=null);var fe=!1;if(f===null)fe=!0;else switch(ve){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(f.$$typeof){case S:case X:fe=!0;break;case z:return fe=f._init,W(fe(f._payload),C,x,q,ee)}}if(fe)return ee=ee(f),fe=q===""?"."+Ge(f,0):q,Ce(ee)?(x="",fe!=null&&(x=fe.replace($e,"$&/")+"/"),W(ee,C,x,"",function(Nt){return Nt})):ee!=null&&(He(ee)&&(ee=Ye(ee,x+(ee.key==null||f&&f.key===ee.key?"":(""+ee.key).replace($e,"$&/")+"/")+fe)),C.push(ee)),1;fe=0;var G=q===""?".":q+":";if(Ce(f))for(var B=0;B<f.length;B++)q=f[B],ve=G+Ge(q,B),fe+=W(q,C,x,ve,ee);else if(B=pe(f),typeof B=="function")for(f=B.call(f),B=0;!(q=f.next()).done;)q=q.value,ve=G+Ge(q,B++),fe+=W(q,C,x,ve,ee);else if(ve==="object"){if(typeof f.then=="function")return W(w(f),C,x,q,ee);throw C=String(f),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return fe}function R(f,C,x){if(f==null)return f;var q=[],ee=0;return W(f,q,"","",function(ve){return C.call(x,ve,ee++)}),q}function ye(f){if(f._status===-1){var C=f._result,x=C();x.then(function(q){(f._status===0||f._status===-1)&&(f._status=1,f._result=q,x.status===void 0&&(x.status="fulfilled",x.value=q))},function(q){(f._status===0||f._status===-1)&&(f._status=2,f._result=q,x.status===void 0&&(x.status="rejected",x.reason=q))}),f._status===-1&&(f._status=0,f._result=x)}if(f._status===1)return f._result.default;throw f._result}var re=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)};function lt(f){var C=ae.T,x={};x.types=C!==null?C.types:null,ae.T=x;try{var q=f(),ee=ae.S;ee!==null&&ee(x,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(F,re)}catch(ve){re(ve)}finally{C!==null&&x.types!==null&&(C.types=x.types),ae.T=C}}function et(f){var C=ae.T;if(C!==null){var x=C.types;x===null?C.types=[f]:x.indexOf(f)===-1&&x.push(f)}else lt(et.bind(null,f))}var Dt={map:R,forEach:function(f,C,x){R(f,function(){C.apply(this,arguments)},x)},count:function(f){var C=0;return R(f,function(){C++}),C},toArray:function(f){return R(f,function(C){return C})||[]},only:function(f){if(!He(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return ne.Activity=h,ne.Children=Dt,ne.Component=Y,ne.Fragment=E,ne.Profiler=D,ne.PureComponent=ge,ne.StrictMode=m,ne.Suspense=Z,ne.ViewTransition=A,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,ne.__COMPILER_RUNTIME={__proto__:null,c:function(f){return ae.H.useMemoCache(f)}},ne.addTransitionType=et,ne.cache=function(f){return function(){return f.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(f,C,x){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var q=I({},f.props),ee=f.key;if(C!=null)for(ve in C.key!==void 0&&(ee=""+C.key),C)!oe.call(C,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&C.ref===void 0||(q[ve]=C[ve]);var ve=arguments.length-2;if(ve===1)q.children=x;else if(1<ve){for(var fe=Array(ve),G=0;G<ve;G++)fe[G]=arguments[G+2];q.children=fe}return P(f.type,ee,q)},ne.createContext=function(f){return f={$$typeof:M,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:O,_context:f},f},ne.createElement=function(f,C,x){var q,ee={},ve=null;if(C!=null)for(q in C.key!==void 0&&(ve=""+C.key),C)oe.call(C,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(ee[q]=C[q]);var fe=arguments.length-2;if(fe===1)ee.children=x;else if(1<fe){for(var G=Array(fe),B=0;B<fe;B++)G[B]=arguments[B+2];ee.children=G}if(f&&f.defaultProps)for(q in fe=f.defaultProps,fe)ee[q]===void 0&&(ee[q]=fe[q]);return P(f,ve,ee)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(f){return{$$typeof:U,render:f}},ne.isValidElement=He,ne.lazy=function(f){return{$$typeof:z,_payload:{_status:-1,_result:f},_init:ye}},ne.memo=function(f,C){return{$$typeof:k,type:f,compare:C===void 0?null:C}},ne.startTransition=lt,ne.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},ne.use=function(f){return ae.H.use(f)},ne.useActionState=function(f,C,x){return ae.H.useActionState(f,C,x)},ne.useCallback=function(f,C){return ae.H.useCallback(f,C)},ne.useContext=function(f){return ae.H.useContext(f)},ne.useDebugValue=function(){},ne.useDeferredValue=function(f,C){return ae.H.useDeferredValue(f,C)},ne.useEffect=function(f,C){return ae.H.useEffect(f,C)},ne.useEffectEvent=function(f){return ae.H.useEffectEvent(f)},ne.useId=function(){return ae.H.useId()},ne.useImperativeHandle=function(f,C,x){return ae.H.useImperativeHandle(f,C,x)},ne.useInsertionEffect=function(f,C){return ae.H.useInsertionEffect(f,C)},ne.useLayoutEffect=function(f,C){return ae.H.useLayoutEffect(f,C)},ne.useMemo=function(f,C){return ae.H.useMemo(f,C)},ne.useOptimistic=function(f,C){return ae.H.useOptimistic(f,C)},ne.useReducer=function(f,C,x){return ae.H.useReducer(f,C,x)},ne.useRef=function(f){return ae.H.useRef(f)},ne.useState=function(f){return ae.H.useState(f)},ne.useSyncExternalStore=function(f,C,x){return ae.H.useSyncExternalStore(f,C,x)},ne.useTransition=function(){return ae.H.useTransition()},ne.version="19.3.0",ne}var rh;function Rs(){return rh||(rh=1,Os.exports=sp()),Os.exports}var T=Rs(),As={exports:{}},Ni={},_s={exports:{}},Ds={};var ch;function op(){return ch||(ch=1,(function(S){function X(w,W){var R=w.length;w.push(W);e:for(;0<R;){var ye=R-1>>>1,re=w[ye];if(0<D(re,W))w[ye]=W,w[R]=re,R=ye;else break e}}function E(w){return w.length===0?null:w[0]}function m(w){if(w.length===0)return null;var W=w[0],R=w.pop();if(R!==W){w[0]=R;e:for(var ye=0,re=w.length,lt=re>>>1;ye<lt;){var et=2*(ye+1)-1,Dt=w[et],f=et+1,C=w[f];if(0>D(Dt,R))f<re&&0>D(C,Dt)?(w[ye]=C,w[f]=R,ye=f):(w[ye]=Dt,w[et]=R,ye=et);else if(f<re&&0>D(C,R))w[ye]=C,w[f]=R,ye=f;else break e}}return W}function D(w,W){var R=w.sortIndex-W.sortIndex;return R!==0?R:w.id-W.id}if(S.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;S.unstable_now=function(){return O.now()}}else{var M=Date,U=M.now();S.unstable_now=function(){return M.now()-U}}var Z=[],k=[],z=1,h=null,A=3,me=!1,pe=!1,K=!1,I=!1,he=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function ge(w){for(var W=E(k);W!==null;){if(W.callback===null)m(k);else if(W.startTime<=w)m(k),W.sortIndex=W.expirationTime,X(Z,W);else break;W=E(k)}}function ie(w){if(K=!1,ge(w),!pe)if(E(Z)!==null)pe=!0,Ce||(Ce=!0,He());else{var W=E(k);W!==null&&Ge(ie,W.startTime-w)}}var Ce=!1,F=-1,ae=5,oe=-1;function P(){return I?!0:!(S.unstable_now()-oe<ae)}function Ye(){if(I=!1,Ce){var w=S.unstable_now();oe=w;var W=!0;try{e:{pe=!1,K&&(K=!1,Y(F),F=-1),me=!0;var R=A;try{t:{for(ge(w),h=E(Z);h!==null&&!(h.expirationTime>w&&P());){var ye=h.callback;if(typeof ye=="function"){h.callback=null,A=h.priorityLevel;var re=ye(h.expirationTime<=w);if(w=S.unstable_now(),typeof re=="function"){h.callback=re,ge(w),W=!0;break t}h===E(Z)&&m(Z),ge(w)}else m(Z);h=E(Z)}if(h!==null)W=!0;else{var lt=E(k);lt!==null&&Ge(ie,lt.startTime-w),W=!1}}break e}finally{h=null,A=R,me=!1}W=void 0}}finally{W?He():Ce=!1}}}var He;if(typeof ue=="function")He=function(){ue(Ye)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,$e=gt.port2;gt.port1.onmessage=Ye,He=function(){$e.postMessage(null)}}else He=function(){he(Ye,0)};function Ge(w,W){F=he(function(){w(S.unstable_now())},W)}S.unstable_IdlePriority=5,S.unstable_ImmediatePriority=1,S.unstable_LowPriority=4,S.unstable_NormalPriority=3,S.unstable_Profiling=null,S.unstable_UserBlockingPriority=2,S.unstable_cancelCallback=function(w){w.callback=null},S.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<w?Math.floor(1e3/w):5},S.unstable_getCurrentPriorityLevel=function(){return A},S.unstable_next=function(w){switch(A){case 1:case 2:case 3:var W=3;break;default:W=A}var R=A;A=W;try{return w()}finally{A=R}},S.unstable_requestPaint=function(){I=!0},S.unstable_runWithPriority=function(w,W){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var R=A;A=w;try{return W()}finally{A=R}},S.unstable_scheduleCallback=function(w,W,R){var ye=S.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ye+R:ye):R=ye,w){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=R+re,w={id:z++,callback:W,priorityLevel:w,startTime:R,expirationTime:re,sortIndex:-1},R>ye?(w.sortIndex=R,X(k,w),E(Z)===null&&w===E(k)&&(K?(Y(F),F=-1):K=!0,Ge(ie,R-ye))):(w.sortIndex=re,X(Z,w),pe||me||(pe=!0,Ce||(Ce=!0,He()))),w},S.unstable_shouldYield=P,S.unstable_wrapCallback=function(w){var W=A;return function(){var R=A;A=W;try{return w.apply(this,arguments)}finally{A=R}}}})(Ds)),Ds}var sh;function fp(){return sh||(sh=1,_s.exports=op()),_s.exports}var Ms={exports:{}},ht={};var oh;function dp(){if(oh)return ht;oh=1;var S=Rs();function X(z){var h="https://react.dev/errors/"+z;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)h+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+z+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(){}var m={d:{f:E,r:function(){throw Error(X(522))},D:E,C:E,L:E,m:E,X:E,S:E,M:E},p:0,findDOMNode:null},D=Symbol.for("react.portal"),O=Symbol.for("react.recoverable"),M=Symbol.for("react.optimistic_key");function U(z,h,A){var me=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:me==null?null:me===M?M:""+me,children:z,containerInfo:h,implementation:A}}var Z=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(z,h){if(z==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,ht.browser=function(z){return{$$typeof:O,_reason:z}},ht.createPortal=function(z,h){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(X(299));return U(z,h,null,A)},ht.flushSync=function(z){var h=Z.T,A=m.p;try{if(Z.T=null,m.p=2,z)return z()}finally{Z.T=h,m.p=A,m.d.f()}},ht.preconnect=function(z,h){typeof z=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,m.d.C(z,h))},ht.prefetchDNS=function(z){typeof z=="string"&&m.d.D(z)},ht.preinit=function(z,h){if(typeof z=="string"&&h&&typeof h.as=="string"){var A=h.as,me=k(A,h.crossOrigin),pe=typeof h.integrity=="string"?h.integrity:void 0,K=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;A==="style"?m.d.S(z,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:me,integrity:pe,fetchPriority:K}):A==="script"&&m.d.X(z,{crossOrigin:me,integrity:pe,fetchPriority:K,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ht.preinitModule=function(z,h){if(typeof z=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var A=k(h.as,h.crossOrigin);m.d.M(z,{crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}}else h==null&&m.d.M(z)},ht.preload=function(z,h){if(typeof z=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var A=h.as,me=k(A,h.crossOrigin);m.d.L(z,A,{crossOrigin:me,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ht.preloadModule=function(z,h){if(typeof z=="string")if(h){var A=k(h.as,h.crossOrigin);m.d.m(z,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}else m.d.m(z)},ht.requestFormReset=function(z){m.d.r(z)},ht.unstable_batchedUpdates=function(z,h){return z(h)},ht.useFormState=function(z,h,A){return Z.H.useFormState(z,h,A)},ht.useFormStatus=function(){return Z.H.useHostTransitionStatus()},ht.version="19.3.0",ht}var fh;function mp(){if(fh)return Ms.exports;fh=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(X){console.error(X)}}return S(),Ms.exports=dp(),Ms.exports}var dh;function hp(){if(dh)return Ni;dh=1;var S=fp(),X=Rs(),E=mp();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function O(e){for(var t=e,l=t;l&&!l.alternate;)t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function M(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Z(e){if(O(e)!==e)throw Error(m(188))}function k(e){var t=e.alternate;if(!t){if(t=O(e),t===null)throw Error(m(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return Z(n),e;if(i===a)return Z(n),t;i=i.sibling}throw Error(m(188))}if(l.return!==a.return)l=n,a=i;else{for(var r=!1,c=n.child;c;){if(c===l){r=!0,l=n,a=i;break}if(c===a){r=!0,a=n,l=i;break}c=c.sibling}if(!r){for(c=i.child;c;){if(c===l){r=!0,l=i,a=n;break}if(c===a){r=!0,a=i,l=n;break}c=c.sibling}if(!r)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}function h(e,t,l,a,n,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&l(e,a,n,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,l,a,n,i))return!0;e=e.sibling}return!1}function A(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function me(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function pe(e){var t=[null,null],l=A(e);return l===null||K(t,e,l.child,{foundSelf:!1}),t}function K(e,t,l,a){for(;l!==null;){if(l===t)a.foundSelf=!0;else if(l.tag===5||l.tag===27||l.tag===6){if(a.foundSelf)return e[1]=l,!0;e[0]=l}else if((l.tag!==22||l.memoizedState===null)&&K(e,t,l.child,a))return!0;l=l.sibling}return!1}function I(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(m(559))}}var he=null,Y=null;function ue(e,t,l){return e===l?!0:e===t?(he=e,!0):!1}function ge(e,t,l){return e===l?(Y=e,!1):e===t?(Y!==null&&(he=e),!0):!1}function ie(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Ce(e,t,l){for(var a=0,n=e;n;n=l(n))a++;n=0;for(var i=t;i;i=l(i))n++;for(;0<a-n;)e=l(e),a--;for(;0<n-a;)t=l(t),n--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=l(e),t=l(t)}return null}var F=Object.assign,ae=Symbol.for("react.element"),oe=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),Ye=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),gt=Symbol.for("react.profiler"),$e=Symbol.for("react.consumer"),Ge=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),ye=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),et=Symbol.for("react.legacy_hidden"),Dt=Symbol.for("react.memo_cache_sentinel"),f=Symbol.for("react.view_transition"),C=Symbol.for("react.recoverable"),x=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ye:return"Fragment";case gt:return"Profiler";case He:return"StrictMode";case W:return"Suspense";case R:return"SuspenseList";case lt:return"Activity";case f:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case Ge:return e.displayName||"Context";case $e:return(e._context.displayName||"Context")+".Consumer";case w:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ye:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var fe=Array.isArray,G=X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Nt={pending:!1,data:null,method:null,action:null},xl=[],el=-1;function vt(e){return{current:e}}function de(e){0>el||(e.current=xl[el],xl[el]=null,el--)}function Te(e,t){el++,xl[el]=e.current,e.current=t}var Ct=vt(null),Sl=vt(null),Zt=vt(null),Yl=vt(null);function jl(e,t){switch(Te(Zt,t),Te(Sl,e),Te(Ct,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mm(t),e=hm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}de(Ct),Te(Ct,e)}function _(){de(Ct),de(Sl),de(Zt)}function qe(e){var t=e.memoizedState;t!==null&&(zn._currentValue=t.memoizedState,Te(Yl,e)),t=Ct.current;var l=hm(t,e.type);t!==l&&(Te(Sl,e),Te(Ct,l))}function Mt(e){Sl.current===e&&(de(Ct),de(Sl)),Yl.current===e&&(de(Yl),zn._currentValue=Nt)}var cl,zi;function bt(e){if(cl===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);cl=t&&t[1]||"",zi=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cl+e+zi}var Nl=!1;function ha(e,t){if(!e||Nl)return"";Nl=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(H){var d=H}Reflect.construct(e,[],N)}else{try{N.call()}catch(H){d=H}N=!1;try{var b=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),N=!0,new e}finally{N&&(b!==void 0?Object.defineProperty(e.prototype,"props",b):delete e.prototype.props)}}}else{try{throw Error()}catch(H){d=H}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(H){if(H&&d&&typeof H.stack=="string")return[H.stack,d.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],c=i[1];if(r&&c){var s=r.split(`
`),p=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===p.length)for(a=s.length-1,n=p.length-1;1<=a&&0<=n&&s[a]!==p[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==p[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==p[n]){var y=`
`+s[a].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=a&&0<=n);break}}}finally{Nl=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?bt(l):""}function Ei(e,t){switch(e.tag){case 26:case 27:case 5:return bt(e.type);case 16:return bt("Lazy");case 13:return e.child!==t&&t!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return ha(e.type,!1);case 11:return ha(e.type.render,!1);case 1:return ha(e.type,!0);case 31:return bt("Activity");case 30:return bt("ViewTransition");default:return""}}function Ti(e){try{var t="",l=null;do t+=Ei(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var wn=Object.prototype.hasOwnProperty,L=S.unstable_scheduleCallback,J=S.unstable_cancelCallback,te=S.unstable_shouldYield,ze=S.unstable_requestPaint,we=S.unstable_now,at=S.unstable_getCurrentPriorityLevel,Ke=S.unstable_ImmediatePriority,tl=S.unstable_UserBlockingPriority,wi=S.unstable_NormalPriority,gh=S.unstable_LowPriority,Hs=S.unstable_IdlePriority,ph=S.log,vh=S.unstable_setDisableYieldValue,On=null,Ut=null;function Gl(e){if(typeof ph=="function"&&vh(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(On,e)}catch{}}var Rt=Math.clz32?Math.clz32:xh,bh=Math.log,yh=Math.LN2;function xh(e){return e>>>=0,e===0?32:31-(bh(e)/yh|0)|0}var Oi=256,Ai=262144,_i=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=ga(a):(r&=c,r!==0?n=ga(r):l||(l=c&~e,l!==0&&(n=ga(l))))):(c=a&~i,c!==0?n=ga(c):r!==0?n=ga(r):l||(l=a&~e,l!==0&&(n=ga(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function An(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qs(e,t){(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-Rt(l),n=1<<a;t|=e[a],l&=~n}return t}function Sh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bs(){var e=_i;return _i<<=1,(_i&62914560)===0&&(_i=4194304),e}function tr(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function _n(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jh(e,t,l,a,n,i){var r=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,p=e.hiddenUpdates;for(l=r&~l;0<l;){var y=31-Rt(l),N=1<<y;c[y]=0,s[y]=-1;var d=p[y];if(d!==null)for(p[y]=null,y=0;y<d.length;y++){var b=d[y];b!==null&&(b.lane&=-536870913)}l&=~N}a!==0&&Ys(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function Ys(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Rt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Gs(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Rt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Qs(e,t){var l=t&-t;return l=(l&42)!==0?1:lr(l),(l&(e.suspendedLanes|t))!==0?0:l}function lr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xs(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Wm(e.type))}function Vs(e,t){var l=B.p;try{return B.p=e,t()}finally{B.p=l}}var Cl=Math.random().toString(36).slice(2),ct="__reactFiber$"+Cl,zt="__reactProps$"+Cl,Ba="__reactContainer$"+Cl,Zs="__reactEvents$"+Cl,Nh="__reactListeners$"+Cl,Ch="__reactHandles$"+Cl,Ls="__reactResources$"+Cl,Dn="__reactMarker$"+Cl,Mi="__reactLoad$"+Cl;function Ui(e){delete e[ct],delete e[zt],delete e[Nh],delete e[Ch]}function pa(e){var t;if(t=e[ct])return t;for(var l=e.parentNode;l;){if(t=l[Ba]||l[ct]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=_m(e);e!==null;){if(l=e[ct])return l;e=_m(e)}return t}e=l,l=e.parentNode}return null}function Ya(e){if(e=e[ct]||e[Ba]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Mn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Ga(e){var t=e[Ls];return t||(t=e[Ls]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Dn]=!0}function ks(e){e[Mi]=void 0}var Ks=new Set,Js={};function va(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(Js[e]=t,e=0;e<t.length;e++)Ks.add(t[e])}var zh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$s={},Fs={};function Eh(e){return wn.call(Fs,e)?!0:wn.call($s,e)?!1:zh.test(e)?Fs[e]=!0:($s[e]=!0,!1)}var Oe=!1;function Ws(){var e=Oe;return Oe=!1,e}function Ri(e,t,l){if(Eh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,l)}}function Hi(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,l)}}function zl(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,a)}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Is(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Th(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nr(e){if(!e._valueTracker){var t=Is(e)?"checked":"value";e._valueTracker=Th(e,t,""+e[t])}}function Ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Is(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}var wh=/[\n"\\]/g;function Lt(e){return e.replace(wh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ir(e,t,l,a,n,i,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?ur(e,Ht(e.value)):ur(e,Ht(t)):l!=null?ur(e,Ht(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Ht(c):e.removeAttribute("name")}function eo(e,t,l,a,n,i,r,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){nr(e);return}l=l!=null?""+Ht(l):"",t=t!=null?""+Ht(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),nr(e)}function ur(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Xa(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Ht(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function to(e,t,l){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Ht(l):""}function lo(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(m(92));if(fe(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Ht(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),nr(e)}function Va(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Oh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ao(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Oh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function no(e,t,l){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",Oe=!0);for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&(ao(e,n,a),Oe=!0)}else for(var i in t)t.hasOwnProperty(i)&&ao(e,i,t[i])}function rr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_h=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(e){return _h.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sl(){}var cr=null;function sr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,La=null;function io(e){var t=Ya(e);if(t&&(e=t.stateNode)){var l=e[zt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ir(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[zt]||null;if(!n)throw Error(m(90));ir(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Ps(a)}break e;case"textarea":to(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Xa(e,!!l.multiple,t,!1)}}}var or=!1;function uo(e,t,l){if(or)return e(t,l);or=!0;try{var a=e(t);return a}finally{if(or=!1,(Za!==null||La!==null)&&(qu(),Za&&(t=Za,e=La,La=Za=null,io(t),e)))for(t=0;t<e.length;t++)io(e[t])}}function Un(e,t){var l=e.stateNode;if(l===null)return null;var a=l[zt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(m(231,t,typeof l));return l}var El=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fr=!1;if(El)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){fr=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{fr=!1}var Ql=null,dr=null,Bi=null;function ro(){if(Bi)return Bi;var e,t=dr,l=t.length,a,n="value"in Ql?Ql.value:Ql.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var r=l-e;for(a=1;a<=r&&t[l-a]===n[i-a];a++);return Bi=n.slice(e,1<a?1-a:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function co(){return!1}function yt(e){function t(l,a,n,i,r){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gi:co,this.isPropagationStopped=co,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var Xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=yt(Xl),Hn=F({},Xl,{view:0,detail:0}),Dh=yt(Hn),mr,hr,qn,Xi=F({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(mr=e.screenX-qn.screenX,hr=e.screenY-qn.screenY):hr=mr=0,qn=e),mr)},movementY:function(e){return"movementY"in e?e.movementY:hr}}),so=yt(Xi),Mh=F({},Xi,{dataTransfer:0}),Uh=yt(Mh),Rh=F({},Hn,{relatedTarget:0}),gr=yt(Rh),Hh=F({},Xl,{animationName:0,elapsedTime:0,pseudoElement:0}),qh=yt(Hh),Bh=F({},Xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yh=yt(Bh),Gh=F({},Xl,{data:0}),oo=yt(Gh),Qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vh[e])?!!t[e]:!1}function pr(){return Zh}var Lh=F({},Hn,{key:function(e){if(e.key){var t=Qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kh=yt(Lh),Kh=F({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fo=yt(Kh),Jh=F({},Xl,{submitter:0}),$h=yt(Jh),Fh=F({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr}),Wh=yt(Fh),Ih=F({},Xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ph=yt(Ih),e0=F({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=yt(e0),l0=F({},Xl,{newState:0,oldState:0,source:0}),a0=yt(l0),n0=[9,13,27,32],vr=El&&"CompositionEvent"in window,Bn=null;El&&"documentMode"in document&&(Bn=document.documentMode);var i0=El&&"TextEvent"in window&&!Bn,mo=El&&(!vr||Bn&&8<Bn&&11>=Bn),ho=" ",go=!1;function po(e,t){switch(e){case"keyup":return n0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ka=!1;function u0(e,t){switch(e){case"compositionend":return vo(t);case"keypress":return t.which!==32?null:(go=!0,ho);case"textInput":return e=t.data,e===ho&&go?null:e;default:return null}}function r0(e,t){if(ka)return e==="compositionend"||!vr&&po(e,t)?(e=ro(),Bi=dr=Ql=null,ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mo&&t.locale!=="ko"?null:t.data;default:return null}}var c0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!c0[e.type]:t==="textarea"}function yo(e,t,l,a){Za?La?La.push(a):La=[a]:Za=a,t=Vu(t,"onChange"),0<t.length&&(l=new Qi("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Yn=null,Gn=null;function s0(e){rm(e,0)}function Vi(e){var t=Mn(e);if(Ps(t))return e}function xo(e,t){if(e==="change")return t}var So=!1;if(El){var br;if(El){var yr="oninput"in document;if(!yr){var jo=document.createElement("div");jo.setAttribute("oninput","return;"),yr=typeof jo.oninput=="function"}br=yr}else br=!1;So=br&&(!document.documentMode||9<document.documentMode)}function No(){Yn&&(Yn.detachEvent("onpropertychange",Co),Gn=Yn=null)}function Co(e){if(e.propertyName==="value"&&Vi(Gn)){var t=[];yo(t,Gn,e,sr(e)),uo(s0,t)}}function o0(e,t,l){e==="focusin"?(No(),Yn=t,Gn=l,Yn.attachEvent("onpropertychange",Co)):e==="focusout"&&No()}function f0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(Gn)}function d0(e,t){if(e==="click")return Vi(t)}function m0(e,t){if(e==="input"||e==="change")return Vi(t)}function h0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:h0;function Qn(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!wn.call(t,n)||!qt(e[n],t[n]))return!1}return!0}function xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eo(e,t){var l=zo(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=zo(l)}}function To(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?To(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xr(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=xr(e.document)}return t}function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var g0=El&&"documentMode"in document&&11>=document.documentMode,Ka=null,jr=null,Xn=null,Nr=!1;function Oo(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nr||Ka==null||Ka!==xr(a)||(a=Ka,"selectionStart"in a&&Sr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xn&&Qn(Xn,a)||(Xn=a,a=Vu(jr,"onSelect"),0<a.length&&(t=new Qi("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Ka)))}function ba(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Ja={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},Cr={},Ao={};El&&(Ao=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function ya(e){if(Cr[e])return Cr[e];if(!Ja[e])return e;var t=Ja[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Ao)return Cr[e]=t[l];return e}var _o=ya("animationend"),Do=ya("animationiteration"),Mo=ya("animationstart"),p0=ya("transitionrun"),v0=ya("transitionstart"),b0=ya("transitioncancel"),Uo=ya("transitionend"),Ro=new Map,zr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zr.push("scrollEnd");function ll(e,t){Ro.set(e,t),va(t,[e])}var y0=0;function Tl(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=ul.identifierPrefix;var l=y0++;return e="_"+e+"t_"+l.toString(32)+"_",t.autoName=e}function Ho(e){if(e==null||typeof e=="string")return e;var t=null,l=gn;if(l!==null)for(var a=0;a<l.length;a++){var n=e[l[a]];if(n!=null){if(n==="none")return"none";t=t==null?n:t+(" "+n)}}return t??e.default}function wl(e,t){return e=Ho(e),t=Ho(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Zi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],$a=0,Er=0;function Li(){for(var e=$a,t=Er=$a=0;t<e;){var l=kt[t];kt[t++]=null;var a=kt[t];kt[t++]=null;var n=kt[t];kt[t++]=null;var i=kt[t];if(kt[t++]=null,a!==null&&n!==null){var r=a.pending;r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n}i!==0&&qo(l,n,i)}}function ki(e,t,l,a){kt[$a++]=e,kt[$a++]=t,kt[$a++]=l,kt[$a++]=a,Er|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Tr(e,t,l,a){return ki(e,t,l,a),Ki(e)}function xa(e,t){return ki(e,null,null,t),Ki(e)}function qo(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Rt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Ki(e){if(50<oi)throw oi=0,Hu=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fa={};function x0(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,l,a){return new x0(e,t,l,a)}function wr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ol(e,t){var l=e.alternate;return l===null?(l=Et(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&1206910976,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Bo(e,t){e.flags&=1206910978;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ji(e,t,l,a,n,i){var r=0;if(a=e,typeof a=="function")wr(a)&&(r=1);else if(typeof a=="string")r=Jg(e,l,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case lt:return e=Et(31,l,t,n),e.elementType=lt,e.lanes=i,e;case Ye:return Sa(l.children,n,i,t);case He:r=8,n|=24;break;case gt:return e=Et(12,l,t,n|2),e.elementType=gt,e.lanes=i,e;case W:return e=Et(13,l,t,n),e.elementType=W,e.lanes=i,e;case R:return e=Et(19,l,t,n),e.elementType=R,e.lanes=i,e;case et:case f:return e=n|32,e=Et(30,l,t,e),e.elementType=f,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Ge:r=10;break e;case $e:r=9;break e;case w:r=11;break e;case ye:r=14;break e;case re:r=16,a=null;break e}r=29,l=Error(m(130,e===null?"null":typeof e,"")),a=null}return t=Et(r,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Sa(e,t,l,a){return e=Et(7,e,a,t),e.lanes=l,e}function Or(e,t,l){return e=Et(6,e,null,t),e.lanes=l,e}function Yo(e){var t=Et(18,null,null,0);return t.stateNode=e,t}function Ar(e,t,l){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Go=new WeakMap;function Kt(e,t){if(typeof e=="object"&&e!==null){var l=Go.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ti(t)},Go.set(e,t),t)}return{value:e,source:t,stack:Ti(t)}}var Wa=[],Ia=0,$i=null,Vn=0,Jt=[],$t=0,Vl=null,ol=1,fl="";function Al(e,t){Wa[Ia++]=Vn,Wa[Ia++]=$i,$i=e,Vn=t}function Qo(e,t,l){Jt[$t++]=ol,Jt[$t++]=fl,Jt[$t++]=Vl,Vl=e;var a=ol;e=fl;var n=32-Rt(a)-1;a&=~(1<<n),l+=1;var i=32-Rt(t)+n;if(30<i){var r=n-n%5;i=(a&(1<<r)-1).toString(32),a>>=r,n-=r,ol=1<<32-Rt(t)+n|l<<n|a,fl=i+e}else ol=1<<i|l<<n|a,fl=e}function Fi(e){e.return!==null&&(Al(e,1),Qo(e,1,0))}function _r(e){for(;e===$i;)$i=Wa[--Ia],Wa[Ia]=null,Vn=Wa[--Ia],Wa[Ia]=null;for(;e===Vl;)Vl=Jt[--$t],Jt[$t]=null,fl=Jt[--$t],Jt[$t]=null,ol=Jt[--$t],Jt[$t]=null}function Xo(e,t){Jt[$t++]=ol,Jt[$t++]=fl,Jt[$t++]=Vl,ol=t.id,fl=t.overflow,Vl=e}var it=null,Qe=null,be=!1,Zl=null,Ft=!1,Dr=Error(m(519));function Ll(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zn(Kt(t,e)),Dr}function Vo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[ct]=e,t[zt]=a,l){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(l=0;l<di.length;l++)Se(di[l],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),eo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),lo(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||fm(t.textContent,l)?(a.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),a.onScroll!=null&&Se("scroll",t),a.onScrollEnd!=null&&Se("scrollend",t),a.onClick!=null&&(t.onclick=sl),t=!0):t=!1,t||Ll(e,!0)}function Wi(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:Ft=!1;return;case 27:case 3:Ft=!0;return;default:it=it.return}}function Pa(e){if(e!==it)return!1;if(!be)return Wi(e),be=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||cs(e.type,e.memoizedProps)),l=!l),l&&Qe&&Ll(e),Wi(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));Qe=Am(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));Qe=Am(e)}else t===27?(t=Qe,ra(e.type)?(e=vs,vs=null,Qe=e):Qe=t):Qe=it?It(e.stateNode.nextSibling):null;return!0}function ja(){Qe=it=null,be=!1}function Mr(){var e=Zl;return e!==null&&(Ot===null?Ot=e:Ot.push.apply(Ot,e),Zl=null),e}function Zn(e){Zl===null?Zl=[e]:Zl.push(e)}var Ur=vt(null),Na=null,_l=null;function kl(e,t,l){Te(Ur,t._currentValue),t._currentValue=l}function Dl(e){e._currentValue=Ur.current,de(Ur)}function Ii(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Rr(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var s=0;s<t.length;s++)if(c.context===t[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Ii(i.return,l,e),a||(r=null);break e}i=c.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(m(341));r.lanes|=l,i=r.alternate,i!==null&&(i.lanes|=l),Ii(r,l,e),r=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=l,r=n.alternate,r!==null&&(r.lanes|=l),Ii(n.return,l,e),r=n.child,r=r!==null?r.sibling:null):r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Ca(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(m(387));if(r=r.memoizedProps,r!==null){var c=n.type;qt(n.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(n===Yl.current){if(r=n.alternate,r===null)throw Error(m(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(zn):e=[zn])}n=n.return}return e!==null&&Rr(t,e,l,a),t.flags|=262144,e!==null}function Pi(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function za(e){Na=e,_l=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return Zo(Na,e)}function eu(e,t){return Na===null&&za(e),Zo(e,t)}function Zo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},_l===null){if(e===null)throw Error(m(308));_l=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _l=_l.next=t;return l}var S0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},j0=S.unstable_scheduleCallback,N0=S.unstable_NormalPriority,Fe={$$typeof:Ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hr(){return{controller:new S0,data:new Map,refCount:0}}function Ln(e){e.refCount--,e.refCount===0&&j0(N0,function(){e.controller.abort()})}function Lo(e,t){if((e.pendingLanes&4194048)!==0){var l=e.transitionTypes;for(l===null&&(l=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];l.indexOf(a)===-1&&l.push(a)}}}var kn=null;function C0(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Kn=null,qr=0,Ea=0,en=null;function z0(e,t){if(Kn===null){var l=Kn=[];qr=0,Ea=Pc(),en={status:"pending",value:void 0,then:function(a){l.push(a)}}}return qr++,t.then(ko,ko),t}function ko(){if(--qr===0&&(kn=null,Kn!==null)){en!==null&&(en.status="fulfilled");var e=Kn;Kn=null,Ea=0,en=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function E0(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Ko=G.S;G.S=function(e,t){if(Gd=we(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&z0(e,t),kn!==null)for(var l=yn;l!==null;)Lo(l,kn),l=l.next;if(l=e.types,l!==null){for(var a=yn;a!==null;)Lo(a,l),a=a.next;if(Ea!==0){a=kn,a===null&&(a=kn=[]);for(var n=0;n<l.length;n++){var i=l[n];a.indexOf(i)===-1&&a.push(i)}}}Ko!==null&&Ko(e,t)};var Ta=vt(null);function Br(){var e=Ta.current;return e!==null?e:Be.pooledCache}function tu(e,t){t===null?Te(Ta,Ta.current):Te(Ta,t.pool)}function Jo(){var e=Br();return e===null?null:{parent:Fe._currentValue,pool:e}}var tn=Error(m(460)),Yr=Error(m(474)),lu=Error(m(542)),au={then:function(){}};function $o(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(sl,sl),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Io(e),e===void 0&&!("reason"in t)?Error(m(600)):e;default:if(typeof t.status=="string")t.then(sl,sl);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Io(e),e}throw Oa=t,tn}}function wa(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Oa=l,tn):l}}var Oa=null;function Wo(){if(Oa===null)throw Error(m(459));var e=Oa;return Oa=null,e}function Io(e){if(e===tn||e===lu)throw Error(m(483))}var ln=null,Jn=0;function nu(e){var t=Jn;return Jn+=1,ln===null&&(ln=[]),Fo(ln,e,t)}function Kl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function iu(e,t){throw t.$$typeof===ae?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Po(e){function t(g,o){if(e){var v=g.deletions;v===null?(g.deletions=[o],g.flags|=16):v.push(o)}}function l(g,o){if(!e)return null;for(;o!==null;)t(g,o),o=o.sibling;return null}function a(g){for(var o=new Map;g!==null;)g.key===null?o.set(g.index,g):o.set(g.key,g),g=g.sibling;return o}function n(g,o){return g=Ol(g,o),g.index=0,g.sibling=null,g}function i(g,o,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<o?(g.flags|=2,o):v):(g.flags|=134217730,o)):(g.flags|=1048576,o)}function r(g){return e&&g.alternate===null&&(g.flags|=134217730),g}function c(g,o,v,j){return o===null||o.tag!==6?(o=Or(v,g.mode,j),o.return=g,o):(o=n(o,v),o.return=g,o)}function s(g,o,v,j){var Q=v.type;return Q===Ye?(g=y(g,o,v.props.children,j,v.key),Kl(g,v),g):o!==null&&(o.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===re&&wa(Q)===o.type)?(o=n(o,v.props),Kl(o,v),o.return=g,o):(o=Ji(v.type,v.key,v.props,null,g.mode,j),Kl(o,v),o.return=g,o)}function p(g,o,v,j){return o===null||o.tag!==4||o.stateNode.containerInfo!==v.containerInfo||o.stateNode.implementation!==v.implementation?(o=Ar(v,g.mode,j),o.return=g,o):(o=n(o,v.children||[]),o.return=g,o)}function y(g,o,v,j,Q){return o===null||o.tag!==7?(o=Sa(v,g.mode,j,Q),o.return=g,o):(o=n(o,v),o.return=g,o)}function N(g,o,v){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Or(""+o,g.mode,v),o.return=g,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case oe:return v=Ji(o.type,o.key,o.props,null,g.mode,v),Kl(v,o),v.return=g,v;case P:return o=Ar(o,g.mode,v),o.return=g,o;case re:return o=wa(o),N(g,o,v)}if(fe(o)||q(o))return o=Sa(o,g.mode,v,null),o.return=g,o;if(typeof o.then=="function")return N(g,nu(o),v);if(o.$$typeof===Ge)return N(g,eu(g,o),v);iu(g,o)}return null}function d(g,o,v,j){var Q=o!==null?o.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return Q!==null?null:c(g,o,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oe:return v.key===Q?s(g,o,v,j):null;case P:return v.key===Q?p(g,o,v,j):null;case re:return v=wa(v),d(g,o,v,j)}if(fe(v)||q(v))return Q!==null?null:y(g,o,v,j,null);if(typeof v.then=="function")return d(g,o,nu(v),j);if(v.$$typeof===Ge)return d(g,o,eu(g,v),j);iu(g,v)}return null}function b(g,o,v,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return g=g.get(v)||null,c(o,g,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case oe:return g=g.get(j.key===null?v:j.key)||null,s(o,g,j,Q);case P:return g=g.get(j.key===null?v:j.key)||null,p(o,g,j,Q);case re:return j=wa(j),b(g,o,v,j,Q)}if(fe(j)||q(j))return g=g.get(v)||null,y(o,g,j,Q,null);if(typeof j.then=="function")return b(g,o,v,nu(j),Q);if(j.$$typeof===Ge)return b(g,o,v,eu(o,j),Q);iu(o,j)}return null}function H(g,o,v,j){for(var Q=null,Ne=null,$=o,le=o=0,Pe=null;$!==null&&le<v.length;le++){$.index>le?(Pe=$,$=null):Pe=$.sibling;var Ee=d(g,$,v[le],j);if(Ee===null){$===null&&($=Pe);break}e&&$&&Ee.alternate===null&&t(g,$),o=i(Ee,o,le),Ne===null?Q=Ee:Ne.sibling=Ee,Ne=Ee,$=Pe}if(le===v.length)return l(g,$),be&&Al(g,le),Q;if($===null){for(;le<v.length;le++)$=N(g,v[le],j),$!==null&&(o=i($,o,le),Ne===null?Q=$:Ne.sibling=$,Ne=$);return be&&Al(g,le),Q}for($=a($);le<v.length;le++)Pe=b($,g,le,v[le],j),Pe!==null&&(e&&(Ee=Pe.alternate,Ee!==null&&$.delete(Ee.key===null?le:Ee.key)),o=i(Pe,o,le),Ne===null?Q=Pe:Ne.sibling=Pe,Ne=Pe);return e&&$.forEach(function(da){return t(g,da)}),be&&Al(g,le),Q}function V(g,o,v,j){if(v==null)throw Error(m(151));for(var Q=null,Ne=null,$=o,le=o=0,Pe=null,Ee=v.next();$!==null&&!Ee.done;le++,Ee=v.next()){$.index>le?(Pe=$,$=null):Pe=$.sibling;var da=d(g,$,Ee.value,j);if(da===null){$===null&&($=Pe);break}e&&$&&da.alternate===null&&t(g,$),o=i(da,o,le),Ne===null?Q=da:Ne.sibling=da,Ne=da,$=Pe}if(Ee.done)return l(g,$),be&&Al(g,le),Q;if($===null){for(;!Ee.done;le++,Ee=v.next())Ee=N(g,Ee.value,j),Ee!==null&&(o=i(Ee,o,le),Ne===null?Q=Ee:Ne.sibling=Ee,Ne=Ee);return be&&Al(g,le),Q}for($=a($);!Ee.done;le++,Ee=v.next())Ee=b($,g,le,Ee.value,j),Ee!==null&&(e&&(Pe=Ee.alternate,Pe!==null&&$.delete(Pe.key===null?le:Pe.key)),o=i(Ee,o,le),Ne===null?Q=Ee:Ne.sibling=Ee,Ne=Ee);return e&&$.forEach(function(up){return t(g,up)}),be&&Al(g,le),Q}function se(g,o,v,j){if(typeof v=="object"&&v!==null&&v.type===Ye&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case oe:e:{for(var Q=v.key;o!==null;){if(o.key===Q){if(Q=v.type,Q===Ye){if(o.tag===7){l(g,o.sibling),j=n(o,v.props.children),Kl(j,v),j.return=g,g=j;break e}}else if(o.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===re&&wa(Q)===o.type){l(g,o.sibling),j=n(o,v.props),Kl(j,v),j.return=g,g=j;break e}l(g,o);break}else t(g,o);o=o.sibling}v.type===Ye?(j=Sa(v.props.children,g.mode,j,v.key),Kl(j,v),j.return=g,g=j):(j=Ji(v.type,v.key,v.props,null,g.mode,j),Kl(j,v),j.return=g,g=j)}return r(g);case P:e:{for(Q=v.key;o!==null;){if(o.key===Q)if(o.tag===4&&o.stateNode.containerInfo===v.containerInfo&&o.stateNode.implementation===v.implementation){l(g,o.sibling),j=n(o,v.children||[]),j.return=g,g=j;break e}else{l(g,o);break}else t(g,o);o=o.sibling}j=Ar(v,g.mode,j),j.return=g,g=j}return r(g);case re:return v=wa(v),se(g,o,v,j)}if(fe(v))return H(g,o,v,j);if(q(v)){if(Q=q(v),typeof Q!="function")throw Error(m(150));return v=Q.call(v),V(g,o,v,j)}if(typeof v.then=="function")return se(g,o,nu(v),j);if(v.$$typeof===Ge)return se(g,o,eu(g,v),j);iu(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,o!==null&&o.tag===6?(l(g,o.sibling),j=n(o,v),j.return=g,g=j):(l(g,o),j=Or(v,g.mode,j),j.return=g,g=j),r(g)):l(g,o)}return function(g,o,v,j){try{Jn=0;var Q=se(g,o,v,j);return ln=null,Q}catch($){if($===tn||$===lu)throw $;var Ne=Et(29,$,null,g.mode);return Ne.lanes=j,Ne.return=g,Ne}}}var Aa=Po(!0),ef=Po(!1),Jl=!1;function Gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $l(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ae&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Ki(e),qo(e,null,l),t}return ki(e,a,t,l),Ki(e)}function $n(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Gs(e,l)}}function Xr(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var r={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Vr=!1;function Fn(){if(Vr){var e=en;if(e!==null)throw e}}function Wn(e,t,l,a){Vr=!1;var n=e.updateQueue;Jl=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,p=s.next;s.next=null,r===null?i=p:r.next=p,r=s;var y=e.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==r&&(c===null?y.firstBaseUpdate=p:c.next=p,y.lastBaseUpdate=s))}if(i!==null){var N=n.baseState;r=0,y=p=s=null,c=i;do{var d=c.lane&-536870913,b=d!==c.lane;if(b?(je&d)===d:(a&d)===d){d!==0&&d===Ea&&(Vr=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var H=e,V=c;d=t;var se=l;switch(V.tag){case 1:if(H=V.payload,typeof H=="function"){N=H.call(se,N,d);break e}N=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=V.payload,d=typeof H=="function"?H.call(se,N,d):H,d==null)break e;N=F({},N,d);break e;case 2:Jl=!0}}d=c.callback,d!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[d]:b.push(d))}else b={lane:d,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(p=y=b,s=N):y=y.next=b,r|=d;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;b=c,c=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);y===null&&(s=N),n.baseState=s,n.firstBaseUpdate=p,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),aa|=r,e.lanes=r,e.memoizedState=N}}function tf(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function lf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)tf(l[e],t)}var Wl=vt(null),uu=vt(0);function af(e,t){e=ql,Te(uu,e),Te(Wl,t),ql=e|t.baseLanes}function Zr(){Te(uu,ql),Te(Wl,Wl.current)}function Lr(){ql=uu.current,de(Wl),de(uu)}var ot=vt(null),pt=null;function Il(e){var t=e.alternate;Te(ft,ft.current&1),Te(ot,e),pt===null&&(t===null||Wl.current!==null||t.memoizedState!==null)&&(pt=e)}function kr(e){Te(ft,ft.current),Te(ot,e),pt===null&&(pt=e)}function nf(e){e.tag===22?(Te(ft,ft.current),Te(ot,e),pt===null&&(pt=e)):Pl()}function Pl(){Te(ft,ft.current),Te(ot,ot.current)}function Bt(e){de(ot),pt===e&&(pt=null),de(ft)}var ft=vt(0);function In(e,t){Te(ot,ot.current),Te(ft,t)}function Kr(e){de(ft),de(ot),pt===e&&(pt=null)}function ru(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||gs(l)||ps(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=0,ce=null,Re=null,We=null,cu=!1,an=!1,_a=!1,su=0,Pn=0,nn=null,T0=0;function Le(){throw Error(m(321))}function Jr(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!qt(e[l],t[l]))return!1;return!0}function $r(e,t,l,a,n,i){return Ml=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?Xf:Vf,_a=!1,i=l(a,n),_a=!1,an&&(i=rf(t,l,a,n)),uf(e),i}function uf(e){G.H=pu;var t=Re!==null&&Re.next!==null;if(Ml=0,We=Re=ce=null,cu=!1,Pn=0,nn=null,t)throw Error(m(300));e===null||Ie||(e=e.dependencies,e!==null&&Pi(e)&&(Ie=!0))}function rf(e,t,l,a){ce=e;var n=0;do{if(an&&(nn=null),Pn=0,an=!1,25<=n)throw Error(m(301));if(n+=1,We=Re=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}G.H=R0,i=t(l,a)}while(an);return i}function w0(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?ei(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(ce.flags|=1024),t}function Fr(){var e=su!==0;return su=0,e}function Wr(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Ir(e){if(cu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cu=!1}Ml=0,We=Re=ce=null,an=!1,Pn=su=0,nn=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ce.memoizedState=We=e:We=We.next=e,We}function Je(){if(Re===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=We===null?ce.memoizedState:We.next;if(t!==null)We=t,Re=e;else{if(e===null)throw ce.alternate===null?Error(m(467)):Error(m(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},We===null?ce.memoizedState=We=e:We=We.next=e}return We}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ei(e){var t=Pn;return Pn+=1,nn===null&&(nn=[]),e=Fo(nn,e,t),t=ce,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?Xf:Vf),e}function fu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ei(e);if(e.$$typeof===C)return;if(e.$$typeof===Ge)return st(e)}throw Error(m(438,String(e)))}function Pr(e){var t=null,l=ce.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ce.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ou(),ce.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Dt;return t.index++,l}function Ul(e,t){return typeof t=="function"?t(e):t}function du(e){var t=Je();return ec(t,Re,e)}function ec(e,t,l){var a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=r=null,s=null,p=t,y=!1;do{var N=p.lane&-536870913;if(N!==p.lane?(je&N)===N:(Ml&N)===N){var d=p.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),N===Ea&&(y=!0);else if((Ml&d)===d){p=p.next,d===Ea&&(y=!0);continue}else N={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(c=s=N,r=i):s=s.next=N,ce.lanes|=d,aa|=d;N=p.action,_a&&l(i,N),i=p.hasEagerState?p.eagerState:l(i,N)}else d={lane:N,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(c=s=d,r=i):s=s.next=d,ce.lanes|=N,aa|=N;p=p.next}while(p!==null&&p!==t);if(s===null?r=i:s.next=c,!qt(i,e.memoizedState)&&(Ie=!0,y&&(l=en,l!==null)))throw l;e.memoizedState=i,e.baseState=r,e.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function tc(e){var t=Je(),l=t.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);qt(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function cf(e,t,l){var a=ce,n=Je(),i=be;if(i){if(l===void 0)throw Error(m(407));l=l()}else l=t();var r=!qt((Re||n).memoizedState,l);if(r&&(n.memoizedState=l,Ie=!0),n=n.queue,nc(ff.bind(null,a,n,e),[e]),e=n.getSnapshot!==t||r||We!==null&&(We.memoizedState.tag&1)!==0,un(e?9:8,{destroy:void 0},of.bind(null,a,n,l,t),null),e){if(a.flags|=2048,Be===null)throw Error(m(349));i||(Ml&127)!==0||sf(a,t,l)}return l}function sf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ce.updateQueue,t===null?(t=ou(),ce.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function of(e,t,l,a){t.value=l,t.getSnapshot=a,df(t)&&mf(e)}function ff(e,t,l){return l(function(){df(t)&&mf(e)})}function df(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!qt(e,l)}catch{return!0}}function mf(e){var t=xa(e,2);t!==null&&At(t,e,2)}function lc(e){var t=xt();if(typeof e=="function"){var l=e;if(e=l(),_a){Gl(!0);try{l()}finally{Gl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:e},t}function hf(e,t,l,a){return e.baseState=l,ec(e,Re,typeof a=="function"?a:Ul)}function O0(e,t,l,a,n){if(gu(e))throw Error(m(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};G.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,gf(t,i)):(i.next=l.next,t.pending=l.next=i)}}function gf(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=G.T,r={};r.types=i!==null?i.types:null,G.T=r;try{var c=l(n,a),s=G.S;s!==null&&s(r,c),pf(e,t,c)}catch(p){ac(e,t,p)}finally{i!==null&&r.types!==null&&(i.types=r.types),G.T=i}}else try{i=l(n,a),pf(e,t,i)}catch(p){ac(e,t,p)}}function pf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){vf(e,t,a)},function(a){return ac(e,t,a)}):vf(e,t,l)}function vf(e,t,l){t.status="fulfilled",t.value=l,bf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,gf(e,l)))}function ac(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,bf(t),t=t.next;while(t!==a)}e.action=null}function bf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yf(e,t){return t}function xf(e,t){if(be){var l=Be.formState;if(l!==null){e:{var a=ce;if(be){if(Qe){t:{for(var n=Qe,i=Ft;n.nodeType!==8;){if(!i){n=null;break t}if(n=It(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Qe=It(n.nextSibling),a=n.data==="F!";break e}}Ll(a)}a=!1}a&&(t=l[0])}}return l=xt(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yf,lastRenderedState:t},l.queue=a,l=Yf.bind(null,ce,a),a.dispatch=l,a=lc(!1),i=sc.bind(null,ce,!1,a.queue),a=xt(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=O0.bind(null,ce,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Sf(e){var t=Je();return jf(t,Re,e)}function jf(e,t,l){if(t=ec(e,t,yf)[0],e=du(Ul)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ei(t)}catch(r){throw r===tn?lu:r}else a=t;t=Je();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(ce.flags|=2048,un(9,{destroy:void 0},A0.bind(null,n,l),null)),[a,i,e]}function A0(e,t){e.action=t}function Nf(e){var t=Je(),l=Re;if(l!==null)return jf(t,l,e);Je(),t=t.memoizedState,l=Je();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function un(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ce.updateQueue,t===null&&(t=ou(),ce.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Cf(){return Je().memoizedState}function mu(e,t,l,a){var n=xt();ce.flags|=e,n.memoizedState=un(1|t,{destroy:void 0},l,a===void 0?null:a)}function hu(e,t,l,a){var n=Je();a=a===void 0?null:a;var i=n.memoizedState.inst;Re!==null&&a!==null&&Jr(a,Re.memoizedState.deps)?n.memoizedState=un(t,i,l,a):(ce.flags|=e,n.memoizedState=un(1|t,i,l,a))}function zf(e,t){mu(8390656,8,e,t)}function nc(e,t){hu(2048,8,e,t)}function _0(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=ou(),ce.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Ef(e){var t=Je().memoizedState;return _0({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function Tf(e,t){return hu(4,2,e,t)}function wf(e,t){return hu(4,4,e,t)}function Of(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Af(e,t,l){l=l!=null?l.concat([e]):null,hu(4,4,Of.bind(null,t,e),l)}function ic(){}function _f(e,t){var l=Je();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Jr(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Df(e,t){var l=Je();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Jr(t,a[1]))return a[0];if(a=e(),_a){Gl(!0);try{e()}finally{Gl(!1)}}return l.memoizedState=[a,t],a}function uc(e,t,l){return l===void 0||(Ml&1073741824)!==0&&(je&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Xd(),ce.lanes|=e,aa|=e,l)}function Mf(e,t,l,a){return qt(l,t)?l:Wl.current!==null?(e=uc(e,l,a),qt(e,t)||(Ie=!0),e):(Ml&106)===0||(Ml&1073741824)!==0&&(je&261930)===0?(Ie=!0,e.memoizedState=l):(e=Xd(),ce.lanes|=e,aa|=e,t)}function Uf(e,t,l,a,n){var i=B.p;B.p=i!==0&&8>i?i:8;var r=G.T,c={};c.types=r!==null?r.types:null,G.T=c,sc(e,!1,t,l);try{var s=n(),p=G.S;if(p!==null&&p(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=E0(s,a);ti(e,t,y,Xt(e))}else ti(e,t,a,Xt(e))}catch(N){ti(e,t,{then:function(){},status:"rejected",reason:N},Xt())}finally{B.p=i,r!==null&&c.types!==null&&(r.types=c.types),G.T=r}}function D0(){}function rc(e,t,l,a){if(e.tag!==5)throw Error(m(476));var n=Rf(e).queue;Uf(e,n,t,Nt,l===null?D0:function(){return Hf(e),l(a)})}function Rf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Nt,baseState:Nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:Nt},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Hf(e){var t=Rf(e);t.next===null&&(t=e.alternate.memoizedState),ti(e,t.next.queue,{},Xt())}function cc(){return st(zn)}function qf(){return Je().memoizedState}function Bf(){return Je().memoizedState}function M0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Xt();e=$l(l);var a=Fl(t,e,l);a!==null&&(At(a,t,l),$n(a,t,l)),t={cache:Hr()},e.payload=t;return}t=t.return}}function U0(e,t,l){var a=Xt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},gu(e)?Gf(t,l):(l=Tr(e,t,l,a),l!==null&&(At(l,e,a),Qf(l,t,a)))}function Yf(e,t,l){var a=Xt();ti(e,t,l,a)}function ti(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(gu(e))Gf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,c=i(r,l);if(n.hasEagerState=!0,n.eagerState=c,qt(c,r))return ki(e,t,n,0),Be===null&&Li(),!1}catch{}if(l=Tr(e,t,n,a),l!==null)return At(l,e,a),Qf(l,t,a),!0}return!1}function sc(e,t,l,a){if(a={lane:2,revertLane:Pc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gu(e)){if(t)throw Error(m(479))}else t=Tr(e,l,a,2),t!==null&&At(t,e,2)}function gu(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Gf(e,t){an=cu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Qf(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Gs(e,l)}}var pu={readContext:st,use:fu,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le,useEffectEvent:Le},Xf={readContext:st,use:fu,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:zf,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,mu(4194308,4,Of.bind(null,t,e),l)},useLayoutEffect:function(e,t){return mu(4194308,4,e,t)},useInsertionEffect:function(e,t){mu(4,2,e,t)},useMemo:function(e,t){var l=xt();t=t===void 0?null:t;var a=e();if(_a){Gl(!0);try{e()}finally{Gl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=xt();if(l!==void 0){var n=l(t);if(_a){Gl(!0);try{l(t)}finally{Gl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=U0.bind(null,ce,e),[a.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=lc(e);var t=e.queue,l=Yf.bind(null,ce,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:ic,useDeferredValue:function(e,t){var l=xt();return uc(l,e,t)},useTransition:function(){var e=lc(!1);return e=Uf.bind(null,ce,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ce,n=xt();if(be){if(l===void 0)throw Error(m(407));l=l()}else{if(l=t(),Be===null)throw Error(m(349));(je&127)!==0||sf(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,zf(ff.bind(null,a,i,e),[e]),a.flags|=2048,un(9,{destroy:void 0},of.bind(null,a,i,l,t),null),l},useId:function(){var e=xt(),t=Be.identifierPrefix;if(be){var l=fl,a=ol;l=(a&~(1<<32-Rt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=su++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=T0++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:cc,useFormState:xf,useActionState:xf,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=sc.bind(null,ce,!0,l),l.dispatch=t,[e,t]},useMemoCache:Pr,useCacheRefresh:function(){return xt().memoizedState=M0.bind(null,ce)},useEffectEvent:function(e){var t=xt(),l={impl:e};return t.memoizedState=l,function(){if((Ae&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}},Vf={readContext:st,use:fu,useCallback:_f,useContext:st,useEffect:nc,useImperativeHandle:Af,useInsertionEffect:Tf,useLayoutEffect:wf,useMemo:Df,useReducer:du,useRef:Cf,useState:function(){return du(Ul)},useDebugValue:ic,useDeferredValue:function(e,t){var l=Je();return Mf(l,Re.memoizedState,e,t)},useTransition:function(){var e=du(Ul)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:cf,useId:qf,useHostTransitionStatus:cc,useFormState:Sf,useActionState:Sf,useOptimistic:function(e,t){var l=Je();return hf(l,Re,e,t)},useMemoCache:Pr,useCacheRefresh:Bf,useEffectEvent:Ef},R0={readContext:st,use:fu,useCallback:_f,useContext:st,useEffect:nc,useImperativeHandle:Af,useInsertionEffect:Tf,useLayoutEffect:wf,useMemo:Df,useReducer:tc,useRef:Cf,useState:function(){return tc(Ul)},useDebugValue:ic,useDeferredValue:function(e,t){var l=Je();return Re===null?uc(l,e,t):Mf(l,Re.memoizedState,e,t)},useTransition:function(){var e=tc(Ul)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:cf,useId:qf,useHostTransitionStatus:cc,useFormState:Nf,useActionState:Nf,useOptimistic:function(e,t){var l=Je();return Re!==null?hf(l,Re,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Pr,useCacheRefresh:Bf,useEffectEvent:Ef};function oc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:F({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var fc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Xt(),n=$l(a);n.payload=t,l!=null&&(n.callback=l),t=Fl(e,n,a),t!==null&&(At(t,e,a),$n(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Xt(),n=$l(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=Fl(e,n,a),t!==null&&(At(t,e,a),$n(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Xt(),a=$l(l);a.tag=2,t!=null&&(a.callback=t),t=Fl(e,a,l),t!==null&&(At(t,e,l),$n(t,e,l))}};function Zf(e,t,l,a,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!Qn(l,a)||!Qn(n,i):!0}function Lf(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function Da(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=F({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function kf(e){Zi(e)}function Kf(e){console.error(e)}function Jf(e){Zi(e)}function vu(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function $f(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function dc(e,t,l){return l=$l(l),l.tag=3,l.payload={element:null},l.callback=function(){vu(e,t)},l}function Ff(e){return e=$l(e),e.tag=3,e}function Wf(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){$f(t,l,a)}}var r=l.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){$f(t,l,a),typeof n!="function"&&(na===null?na=new Set([this]):na.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function H0(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Ca(t,l,n,!0),l=ot.current,l!==null){switch(l.tag){case 31:case 13:case 19:return pt===null?Bu():l.alternate===null&&ke===0&&(ke=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===au?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Fc(e,a,n)),!1;case 22:return l.flags|=65536,a===au?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Fc(e,a,n)),!1}throw Error(m(435,l.tag))}return Fc(e,a,n),Bu(),!1}if(be)return t=ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Dr&&(e=Error(m(422),{cause:a}),Zn(Kt(e,l)))):(a!==Dr&&(t=Error(m(423),{cause:a}),Zn(Kt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=Kt(a,l),n=dc(e.stateNode,a,n),Xr(e,n),ke!==4&&(ke=2)),!1;var i=Error(m(520),{cause:a});if(i=Kt(i,l),si===null?si=[i]:si.push(i),ke!==4&&(ke=2),t===null)return!0;a=Kt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=dc(l.stateNode,a,e),Xr(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(na===null||!na.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ff(n),Wf(n,e,l,a),Xr(l,n),!1;break;case 22:if(l.memoizedState!==null)return l.flags|=65536,!1}l=l.return}while(l!==null);return!1}var mc=Error(m(461)),Ie=!1;function tt(e,t,l,a){t.child=e===null?ef(t,null,l,a):Aa(t,e.child,l,a)}function If(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var r={};for(var c in a)c!=="ref"&&(r[c]=a[c])}else r=a;return za(t),a=$r(e,t,l,r,i,n),c=Fr(),e!==null&&!Ie?(Wr(e,t,n),Rl(e,t,n)):(be&&c&&Fi(t),t.flags|=1,tt(e,t,a,n),t.child)}function Pf(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!wr(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,ed(e,t,i,a,n)):(e=Ji(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Sc(e,n)){var r=i.memoizedProps;if(l=l.compare,l=l!==null?l:Qn,l(r,a)&&e.ref===t.ref)return Rl(e,t,n)}return t.flags|=1,e=Ol(i,a),e.ref=t.ref,e.return=t,t.child=e}function ed(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Qn(i,a)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=a=i,Sc(e,n))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,Rl(e,t,n)}return hc(e,t,l,a,n)}function td(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return ld(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&tu(t,i!==null?i.cachePool:null),i!==null?af(t,i):Zr(),nf(t);else return a=t.lanes=536870912,ld(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(tu(t,i.cachePool),af(t,i),Pl(),t.memoizedState=null):(e!==null&&tu(t,null),Zr(),Pl());return tt(e,t,n,l),t.child}function li(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ld(e,t,l,a,n){var i=Br();return i=i===null?null:{parent:Fe._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&tu(t,null),Zr(),nf(t),e!==null&&Ca(e,t,a,!0),t.childLanes=n,null}function bu(e,t){return t=yu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ad(e,t,l){return Aa(t,e.child,null,l),e=bu(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function q0(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(be){if(a.mode==="hidden")return e=bu(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},li(null,e);if(kr(t),(e=Qe)?(e=Om(e,Ft),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vl!==null?{id:ol,overflow:fl}:null,retryLane:536870912,hydrationErrors:null},l=Yo(e),l.return=t,t.child=l,it=t,Qe=null)):e=null,e===null)throw Ll(t);return t.lanes=536870912,null}return bu(t,a)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(kr(t),n)if(t.flags&256)t.flags&=-257,t=ad(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Ie||Ca(e,t,l,!1),n=(l&e.childLanes)!==0,Ie||n){if(Wl.current===null){if(a=Be,a!==null&&(r=Qs(a,l),r!==0&&r!==i.retryLane))throw i.retryLane=r,xa(e,r),At(a,e,r),mc;Bu()}t=ad(e,t,l)}else e=i.treeContext,Qe=It(r.nextSibling),it=t,be=!0,Zl=null,Ft=!1,e!==null&&Xo(t,e),t=bu(t,a),t.flags|=134221824;return t}return e=Ol(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rn(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function hc(e,t,l,a,n){return za(t),l=$r(e,t,l,a,void 0,n),a=Fr(),e!==null&&!Ie?(Wr(e,t,n),Rl(e,t,n)):(be&&a&&Fi(t),t.flags|=1,tt(e,t,l,n),t.child)}function nd(e,t,l,a,n,i){return za(t),t.updateQueue=null,l=rf(t,a,l,n),uf(e),a=Fr(),e!==null&&!Ie?(Wr(e,t,i),Rl(e,t,i)):(be&&a&&Fi(t),t.flags|=1,tt(e,t,l,i),t.child)}function id(e,t,l,a,n){if(za(t),t.stateNode===null){var i=Fa,r=l.contextType;typeof r=="object"&&r!==null&&(i=st(r)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Gr(t),r=l.contextType,i.context=typeof r=="object"&&r!==null?st(r):Fa,i.state=t.memoizedState,r=l.getDerivedStateFromProps,typeof r=="function"&&(oc(t,l,r,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&fc.enqueueReplaceState(i,i.state,null),Wn(t,a,i,n),Fn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,s=Da(l,c);i.props=s;var p=i.context,y=l.contextType;r=Fa,typeof y=="object"&&y!==null&&(r=st(y));var N=l.getDerivedStateFromProps;y=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||p!==r)&&Lf(t,i,a,r),Jl=!1;var d=t.memoizedState;i.state=d,Wn(t,a,i,n),Fn(),p=t.memoizedState,c||d!==p||Jl?(typeof N=="function"&&(oc(t,l,N,a),p=t.memoizedState),(s=Jl||Zf(t,l,s,a,d,p,r))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=p),i.props=a,i.state=p,i.context=r,a=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Qr(e,t),r=t.memoizedProps,y=Da(l,r),i.props=y,N=t.pendingProps,d=i.context,p=l.contextType,s=Fa,typeof p=="object"&&p!==null&&(s=st(p)),c=l.getDerivedStateFromProps,(p=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==N||d!==s)&&Lf(t,i,a,s),Jl=!1,d=t.memoizedState,i.state=d,Wn(t,a,i,n),Fn();var b=t.memoizedState;r!==N||d!==b||Jl||e!==null&&e.dependencies!==null&&Pi(e.dependencies)?(typeof c=="function"&&(oc(t,l,c,a),b=t.memoizedState),(y=Jl||Zf(t,l,y,a,d,b,s)||e!==null&&e.dependencies!==null&&Pi(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),i.props=a,i.state=b,i.context=s,a=y):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,rn(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Aa(t,e.child,null,n),t.child=Aa(t,null,l,n)):tt(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Rl(e,t,n),e}function ud(e,t,l,a){return ja(),t.flags|=256,tt(e,t,l,a),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(e){return{baseLanes:e,cachePool:Jo()}}function vc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Qt),e}function rd(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(ft.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(be){if(n?Il(t):Pl(),(e=Qe)?(e=Om(e,Ft),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vl!==null?{id:ol,overflow:fl}:null,retryLane:536870912,hydrationErrors:null},l=Yo(e),l.return=t,t.child=l,it=t,Qe=null)):e=null,e===null)throw Ll(t);return ps(e)?t.lanes=32:t.lanes=536870912,null}return i=a.children,a=a.fallback,n?(Pl(),n=t.mode,i=yu({mode:"hidden",children:i},n),a=Sa(a,n,l,null),i.return=t,a.return=t,i.sibling=a,t.child=i,a=t.child,a.memoizedState=pc(l),a.childLanes=vc(e,r,l),t.memoizedState=gc,li(null,a)):(Il(t),bc(t,i))}var c=e.memoizedState;if(c!==null){var s=c.dehydrated;if(s!==null)return B0(e,t,i,r,a,s,c,l)}return n?(Pl(),n=a.fallback,i=t.mode,c=e.child,s=c.sibling,a=Ol(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,s!==null?n=Ol(s,n):(n=Sa(n,i,l,null),n.flags|=2),n.return=t,a.return=t,a.sibling=n,t.child=a,li(null,a),a=t.child,n=e.child.memoizedState,n===null?n=pc(l):(i=n.cachePool,i!==null?(c=Fe._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Jo(),n={baseLanes:n.baseLanes|l,cachePool:i}),a.memoizedState=n,a.childLanes=vc(e,r,l),t.memoizedState=gc,li(e.child,a)):(Il(t),l=e.child,e=l.sibling,l=Ol(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=l,t.memoizedState=null,l)}function bc(e,t){return t=yu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yu(e,t){return e=Et(22,e,null,t),e.lanes=0,e}function xu(e,t,l){return Aa(t,e.child,null,l),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function B0(e,t,l,a,n,i,r,c){if(l)return t.flags&256?(Il(t),t.flags&=-257,xu(e,t,c)):t.memoizedState!==null?(Pl(),t.child=e.child,t.flags|=128,null):(Pl(),i=n.fallback,r=t.mode,n=yu({mode:"visible",children:n.children},r),i=Sa(i,r,c,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Aa(t,e.child,null,c),n=t.child,n.memoizedState=pc(c),n.childLanes=vc(e,a,c),t.memoizedState=gc,li(null,n));if(Il(t),ps(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var s=a.dgst;return a=s,a!==""&&(n=Error(m(419)),n.stack="",n.digest=a,Zn({value:n,source:null,stack:null})),xu(e,t,c)}if(Ie||Ca(e,t,c,!1),a=(c&e.childLanes)!==0,Ie||a){if(Wl.current!==null)return xu(e,t,c);if(a=Be,a!==null&&(n=Qs(a,c),n!==0&&n!==r.retryLane))throw r.retryLane=n,xa(e,n),At(a,e,n),mc;return gs(i)||Bu(),xu(e,t,c)}return gs(i)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Qe=It(i.nextSibling),it=t,be=!0,Zl=null,Ft=!1,e!==null&&Xo(t,e),t=bc(t,n.children),t.flags|=134221824,t)}function cd(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ii(e.return,t,l)}function sd(e){for(var t=null;e!==null;){var l=e.alternate;l!==null&&ru(l)===null&&(t=e),e=e.sibling}return t}function Su(e,t,l,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=l,r.tailMode=n,r.treeForkCount=i)}function yc(e){var t=e.child;for(e.child=null;t!==null;){var l=t.sibling;t.sibling=e.child,e.child=t,t=l}}function xc(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var r=ft.current;if(t.flags&128)return In(t,r),null;var c=(r&2)!==0;if(c?(r=r&1|2,t.flags|=128):r&=1,In(t,r),n==="backwards"&&e!==null?(yc(e),tt(e,t,a,l),yc(e)):tt(e,t,a,l),a=be?Vn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,l,t);else if(e.tag===19)cd(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"backwards":l=sd(t.child),l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null,yc(t)),Su(t,!0,n,null,i,a);break;case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ru(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Su(t,!0,l,null,i,a);break;case"together":Su(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:l=sd(t.child),l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Su(t,!1,n,l,i,a)}return t.child}function od(e,t,l){var a=t.pendingProps;return kl(t,t.type,a.value),tt(e,t,a.children,l),t.child}function Rl(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Ca(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,l=Ol(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ol(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Sc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pi(e)))}function Y0(e,t,l){switch(t.tag){case 3:jl(t,t.stateNode.containerInfo),kl(t,Fe,e.memoizedState.cache),ja();break;case 27:case 5:qe(t);break;case 4:jl(t,t.stateNode.containerInfo);break;case 10:kl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,kr(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return Il(t),t.flags|=128,null;a=Ca(e,t,l,!1);var n=t.child.childLanes;return a||(l&n)!==0?rd(e,t,l):(Il(t),e=Rl(e,t,l),e!==null?e.sibling:null)}Il(t);break;case 19:if(t.flags&128)return xc(e,t,l);if(n=(e.flags&128)!==0,a=(l&t.childLanes)!==0,a||(Ca(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return xc(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),In(t,ft.current),a)break;return null;case 22:return t.lanes=0,td(e,t,l,t.pendingProps);case 24:kl(t,Fe,e.memoizedState.cache)}return Rl(e,t,l)}function fd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Sc(e,l)&&(t.flags&128)===0)return Ie=!1,Y0(e,t,l);Ie=(e.flags&131072)!==0}else Ie=!1,be&&(t.flags&1048576)!==0&&Qo(t,Vn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e=="function")wr(e)?(a=Da(e,a),t.tag=1,t=id(null,t,e,a,l)):(t.tag=0,t=hc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===w){t.tag=11,t=If(null,t,e,a,l);break e}else if(n===ye){t.tag=14,t=Pf(null,t,e,a,l);break e}else if(n===Ge){t.tag=10,t.type=e,t=od(null,t,l);break e}}throw t=ve(e)||e,Error(m(306,t,""))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Da(a,t.pendingProps),id(e,t,a,n,l);case 3:e:{if(jl(t,t.stateNode.containerInfo),e===null)throw Error(m(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Qr(e,t),Wn(t,a,null,l);var r=t.memoizedState;if(a=r.cache,kl(t,Fe,a),a!==i.cache&&Rr(t,[Fe],l,!0),Fn(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ud(e,t,a,l);break e}else if(a!==n){n=Kt(Error(m(424)),t),Zn(n),t=ud(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=It(e.firstChild),it=t,be=!0,Zl=null,Ft=!0,l=ef(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|134221824,l=l.sibling;else{if(ja(),a===n){t=Rl(e,t,l);break e}tt(e,t,a,l)}t=t.child}return t;case 26:return rn(e,t),e===null?(l=Hm(t.type,null,t.pendingProps,null))?t.memoizedState=l:be||(t.stateNode=gm(t.type,t.pendingProps,Zt.current,t)):t.memoizedState=Hm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qe(t),e===null&&be&&(a=t.stateNode=Dm(t.type,t.pendingProps,Zt.current),it=t,Ft=!0,n=Qe,ra(t.type)?(vs=n,Qe=It(a.firstChild)):Qe=n),tt(e,t,t.pendingProps.children,l),rn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&be&&((n=a=Qe)&&(a=Mg(a,t.type,t.pendingProps,Ft),a!==null?(t.stateNode=a,it=t,Qe=It(a.firstChild),Ft=!1,n=!0):n=!1),n||Ll(t)),qe(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,cs(n,i)?a=null:r!==null&&cs(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=$r(e,t,w0,null,null,l),zn._currentValue=n),rn(e,t),tt(e,t,a,l),t.child;case 6:return e===null&&be&&((e=l=Qe)&&(l=Ug(l,t.pendingProps,Ft),l!==null?(t.stateNode=l,it=t,Qe=null,e=!0):e=!1),e||Ll(t)),null;case 13:return rd(e,t,l);case 4:return jl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Aa(t,null,a,l):tt(e,t,a,l),t.child;case 11:return If(e,t,t.type,t.pendingProps,l);case 7:return a=t.pendingProps,rn(e,t),tt(e,t,a,l),t.child;case 8:return tt(e,t,t.pendingProps.children,l),t.child;case 12:return tt(e,t,t.pendingProps.children,l),t.child;case 10:return od(e,t,l);case 9:return n=t.type._context,a=t.pendingProps.children,za(t),n=st(n),a=a(n),t.flags|=1,tt(e,t,a,l),t.child;case 14:return Pf(e,t,t.type,t.pendingProps,l);case 15:return ed(e,t,t.type,t.pendingProps,l);case 19:return xc(e,t,l);case 31:return q0(e,t,l);case 22:return td(e,t,l,t.pendingProps);case 24:return za(t),a=st(Fe),e===null?(n=Br(),n===null&&(n=Be,i=Hr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Gr(t),kl(t,Fe,n)):((e.lanes&l)!==0&&(Qr(e,t),Wn(t,null,null,l),Fn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),kl(t,Fe,a)):(a=i.cache,kl(t,Fe,a),a!==n.cache&&Rr(t,[Fe],l,!0))),tt(e,t,t.pendingProps.children,l),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:be&&Fi(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:rn(e,t),tt(e,t,a.children,l),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Hl(e){e.flags|=4}function jc(e,t,l,a,n){var i;if((i=(e.mode&32)!==0)&&(i=l===null?Gm(t,a):Gm(t,a)&&(a.src!==l.src||a.srcSet!==l.srcSet)),i){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(kd())e.flags|=8192;else throw Oa=au,Yr}else e.flags&=-16777217}function dd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qm(t))if(kd())e.flags|=8192;else throw Oa=au,Yr}function ju(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bs():536870912,e.lanes|=t,dn|=t)}function ai(e,t){if(!be)switch(e.tailMode){case"visible":break;case"collapsed":for(var l=e.tail,a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&1206910976,a|=n.flags&1206910976,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function G0(e,t,l){var a=t.pendingProps;switch(_r(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return Xe(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Dl(Fe),_(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?Hl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mr())),Xe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Hl(t),i!==null?(Xe(t),dd(t,i)):(Xe(t),jc(t,n,null,a,l))):i?i!==e.memoizedState?(Hl(t),Xe(t),dd(t,i)):(Xe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Hl(t),Xe(t),jc(t,n,e,a,l)),null;case 27:if(Mt(t),l=Zt.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Hl(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return Xe(t),t.subtreeFlags&=-33554433,null}e=Ct.current,Pa(t)?Vo(t):(e=Dm(n,a,l),t.stateNode=e,Hl(t))}return Xe(t),t.subtreeFlags&=-33554433,null;case 5:if(Mt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Hl(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return Xe(t),t.subtreeFlags&=-33554433,null}if(i=Ct.current,Pa(t))Vo(t);else{var r=hi(Zt.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}i[ct]=t,i[zt]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(mt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Hl(t)}}return Xe(t),t.subtreeFlags&=-33554433,jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Hl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(m(166));if(e=Zt.current,Pa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=it,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[ct]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||fm(e.nodeValue,l)),e||Ll(t,!0)}else e=hi(e).createTextNode(a),e[ct]=t,t.stateNode=e}return Xe(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Pa(t),l!==null){if(e===null){if(!a)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[ct]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),e=!1}else l=Mr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(m(558))}return Xe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Pa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[ct]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),n=!1}else n=Mr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),ju(t,t.updateQueue),Xe(t),null);case 4:return _(),e===null&&as(t.stateNode.containerInfo),t.flags|=67108864,Xe(t),null;case 10:return Dl(t.type),Xe(t),null;case 19:if(Kr(t),a=t.memoizedState,a===null)return Xe(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)ai(a,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ru(e),i!==null){for(t.flags|=128,ai(a,!1),e=i.updateQueue,t.updateQueue=e,ju(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Bo(l,e),l=l.sibling;return In(t,ft.current&1|2),be&&Al(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&we()>Uu&&(t.flags|=128,n=!0,ai(a,!1),t.lanes=4194304)}else{if(!n)if(e=ru(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ju(t,e),ai(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!be)return Xe(t),null}else 2*we()-a.renderingStartTime>Uu&&l!==536870912&&(t.flags|=128,n=!0,ai(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}if(a.tail!==null){e=a.tail;e:{for(l=e;l!==null;){if(l.alternate!==null){l=!1;break e}l=l.sibling}l=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=we(),e.sibling=null,i=ft.current,i=n?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!l||be?In(t,i):(l=i,Te(ot,t),Te(ft,l),pt===null&&(pt=t)),be&&Al(t,a.treeForkCount),e}return Xe(t),null;case 22:case 23:return Bt(t),Lr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),l=t.updateQueue,l!==null&&ju(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&de(Ta),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Dl(Fe),Xe(t),null;case 25:return null;case 30:return t.flags|=33554432,Xe(t),null}throw Error(m(156,t.tag))}function Q0(e,t){switch(_r(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dl(Fe),_(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mt(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(m(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Kr(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return _(),null;case 10:return Dl(t.type),null;case 22:case 23:return Bt(t),Lr(),e!==null&&de(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dl(Fe),null;case 25:return null;default:return null}}function md(e,t){switch(_r(t),t.tag){case 3:Dl(Fe),_();break;case 26:case 27:case 5:Mt(t);break;case 4:_();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:Kr(t);break;case 10:Dl(t.type);break;case 22:case 23:Bt(t),Lr(),e!==null&&de(Ta);break;case 24:Dl(Fe)}}function ni(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,r=l.inst;a=i(),r.destroy=a}l=l.next}while(l!==n)}}catch(c){Me(t,t.return,c)}}function ea(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var r=a.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,n=t;var s=l,p=c;try{p()}catch(y){Me(n,s,y)}}}a=a.next}while(a!==i)}}catch(y){Me(t,t.return,y)}}function hd(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{lf(t,l)}catch(a){Me(e,e.return,a)}}}function gd(e,t,l){l.props=Da(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Me(e,t,a)}}function dl(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var n=e.stateNode,i=Tl(e.memoizedProps,n);(n.ref===null||n.ref.name!==i)&&(n.ref=jm(i)),a=n.ref;break;case 7:if(e.stateNode===null){var r=new Vt(e);h(e.child,!1,_g,r,void 0,void 0),e.stateNode=r}a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(c){Me(e,t,c)}}function dt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Me(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Me(e,t,n)}else l.current=null}function Nu(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var l=0;l<t.length;l++)wm(e.stateNode,t[l])}function pd(e){for(var t=e.return;t!==null&&(Cc(t)&&wm(e.stateNode,t.stateNode),!Nc(t));)t=t.return}function ii(e){for(var t=e.return;t!==null&&(Cc(t)&&Dg(e.stateNode,t.stateNode),!Nc(t));)t=t.return}function Nc(e){return e.tag===5||e.tag===3||e.tag===27}function Cc(e){return e&&e.tag===7&&e.stateNode!==null}function zc(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Me(e,e.return,n)}}function Ec(e,t,l){try{var a=e.stateNode;mg(a,e.type,l,t),a[zt]=t}catch(n){Me(e,e.return,n)}}function vd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ra(e.type)||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,t,l,a){var n=e.tag;if(n===5||n===6)n=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(n,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(n),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=sl)),Nu(e,a),Oe=!0;else if(n!==4&&(n===27&&(Nu(e,a),a=null,ra(e.type)&&(l=e.stateNode,t=null)),e=e.child,e!==null))for(wc(e,t,l,a),e=e.sibling;e!==null;)wc(e,t,l,a),e=e.sibling}function Cu(e,t,l,a){var n=e.tag;if(n===5||n===6)n=e.stateNode,t?l.insertBefore(n,t):l.appendChild(n),Nu(e,a),Oe=!0;else if(n!==4&&(n===27&&(Nu(e,a),a=null,ra(e.type)&&(l=e.stateNode)),e=e.child,e!==null))for(Cu(e,t,l,a),e=e.sibling;e!==null;)Cu(e,t,l,a),e=e.sibling}function bd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);mt(t,a,l),t[ct]=e,t[zt]=l}catch(i){Me(e,e.return,i)}}var zu=!1,Yt=null;function yd(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(zu=!0)}var ml=null;function xd(){var e=ml;return ml=null,e}var Tt=0;function cn(e,t,l,a,n){return Tt=0,Sd(e.child,t,l,a,n)}function Sd(e,t,l,a,n){for(var i=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(a!==null){var c=fs(r);a.push(c),c.view&&(i=!0)}else i||fs(r).view&&(i=!0);zu=!0,xm(r,Tt===0?t:t+"_"+Tt,l),Tt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Sd(e.child,t,l,a,n)&&(i=!0));e=e.sibling}return i}function hl(e,t){for(;e!==null;)e.tag===5?Sm(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||hl(e.child,t)),e=e.sibling}function Eu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Eu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(m(544));var l=t.name;t=wl(t.default,t.share),t!=="none"&&(cn(e,l,t,null,!1)||hl(e.child,!1))}e=e.sibling}}function Oc(e,t){if(e.tag===30){var l=e.stateNode,a=e.memoizedProps,n=Tl(a,l),i=wl(a.default,l.paired?a.share:a.enter);i!=="none"?cn(e,n,i,null,!1)?(Eu(e),l.paired||t||pn(e,a.onEnter)):hl(e.child,!1):Eu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Oc(e,t),e=e.sibling;else Eu(e)}function Ac(e){if(Yt!==null&&Yt.size!==0){var t=Yt;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var l=e.memoizedProps,a=l.name;if(a!=null&&a!=="auto"){var n=t.get(a);if(n!==void 0){var i=wl(l.default,l.share);if(i!=="none"&&(cn(e,a,i,null,!1)?(i=e.stateNode,n.paired=i,i.paired=n,pn(e,l.onShare)):hl(e.child,!1)),t.delete(a),t.size===0)break}}}Ac(e)}e=e.sibling}}}function _c(e){if(e.tag===30){var t=e.memoizedProps,l=Tl(t,e.stateNode),a=Yt!==null?Yt.get(l):void 0,n=wl(t.default,a!==void 0?t.share:t.exit);n!=="none"&&(cn(e,l,n,null,!1)?a!==void 0?(n=e.stateNode,a.paired=n,n.paired=a,Yt.delete(l),pn(e,t.onShare)):pn(e,t.onExit):hl(e.child,!1)),Yt!==null&&Ac(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_c(e),e=e.sibling;else Yt!==null&&Ac(e)}function jd(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,l=Tl(t,e.stateNode);t=wl(t.default,t.update),e.flags&=-5,t!=="none"&&cn(e,l,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&jd(e);e=e.sibling}}function Dc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,hl(e.child,!1))}Dc(e)}e=e.sibling}}function Tu(e){if(e.tag===30)e.stateNode.paired=null,hl(e.child,!1),Dc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Tu(e),e=e.sibling;else Dc(e)}function Nd(e){for(e=e.child;e!==null;)e.tag===30?hl(e.child,!1):(e.subtreeFlags&33554432)!==0&&Nd(e),e=e.sibling}function Mc(e,t,l,a,n,i,r){for(var c=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(i!==null&&Tt<i.length){var p=i[Tt],y=fs(s);(p.view||y.view)&&(c=!0);var N;if(N=(e.flags&4)===0)if(y.clip)N=!0;else{N=p.rect;var d=y.rect;N=N.y!==d.y||N.x!==d.x||N.height!==d.height||N.width!==d.width}N&&(e.flags|=4),y.abs?y=!p.abs:(p=p.rect,y=y.rect,y=p.height!==y.height||p.width!==y.width),y&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&xm(s,Tt===0?l:l+"_"+Tt,n),c&&(e.flags&4)!==0||(ml===null&&(ml=[]),ml.push(s,Tt===0?a:a+"_"+Tt,t.memoizedProps)),Tt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Mc(e,t.child,l,a,n,i,r)&&(c=!0));t=t.sibling}return c}function Cd(e,t){for(e=e.child;e!==null;){if(e.tag===30){var l=e.memoizedProps,a=e.stateNode,n=Tl(l,a),i=wl(l.default,l.update),r;r=e.memoizedState,e.memoizedState=null,a=e;var c=e.child;Tt=0,n=Mc(a,c,n,n,i,r,!1),(e.flags&4)!==0&&n&&pn(e,l.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Cd(e);e=e.sibling}}var ut=!1,_e=!1,gl=!1,Uc=!1,zd=typeof WeakSet=="function"?WeakSet:Set,rt=null,pl=!1,ui=!1,wu=!1,Rc=!1;function X0(e,t,l){if(e=e.containerInfo,us=En,e=wo(e),Sr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,s=-1,p=-1,y=0,N=0,d=e,b=null;t:for(;;){for(var H;d!==a||i!==0&&d.nodeType!==3||(s=c+i),d!==r||n!==0&&d.nodeType!==3||(p=c+n),d.nodeType===3&&(c+=d.nodeValue.length),(H=d.firstChild)!==null;)b=d,d=H;for(;;){if(d===e)break t;if(b===a&&++y===i&&(s=c),b===r&&++N===n&&(p=c),(H=d.nextSibling)!==null)break;d=b,b=d.parentNode}d=H}a=s===-1||p===-1?null:{start:s,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(rs={focusedElem:e,selectionRange:a},En=!1,l=(l&335544064)===l,rt=t,t=l?9270:1024;rt!==null;){if(e=rt,l&&(a=e.deletions,a!==null))for(i=0;i<a.length;i++)l&&_c(a[i]);if(e.alternate===null&&(e.flags&2)!==0)l&&yd(e),Ou(l);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&l&&_c(a),Ou(l);continue}else if(a!==null&&a.memoizedState!==null){l&&yd(e),Ou(l);continue}}a=e.child,(e.subtreeFlags&t)!==0&&a!==null?(a.return=e,rt=a):(l&&jd(e),Ou(l))}}Yt=null}function Ou(e){for(;rt!==null;){var t=rt,l=e,a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&a!==null){l=void 0,n=a.memoizedProps,a=a.memoizedState;var i=t.stateNode;try{var r=Da(t.type,n);l=i.getSnapshotBeforeUpdate(r,a),i.__reactInternalSnapshotBeforeUpdate=l}catch(c){Me(t,t.return,c)}}break;case 3:if((n&1024)!==0){if(a=t.stateNode.containerInfo,l=a.nodeType,l===9)hs(a);else if(l===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":hs(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:l&&a!==null&&(l=Tl(a.memoizedProps,a.stateNode),n=t.memoizedProps,n=wl(n.default,n.update),n!=="none"&&cn(a,l,n,a.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(m(163))}if(a=t.sibling,a!==null){a.return=t.return,rt=a;break}rt=t.return}}function Ed(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:vl(e,l),a&4&&ni(5,l);break;case 1:if(vl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(r){Me(l,l.return,r)}else{var n=Da(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Me(l,l.return,r)}}a&64&&hd(l),a&512&&dl(l,l.return);break;case 3:if(vl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{lf(e,t)}catch(r){Me(l,l.return,r)}}break;case 27:t===null&&a&4&&bd(l);case 26:case 5:vl(e,l),t===null&&a&4&&zc(l),a&512&&dl(l,l.return);break;case 12:vl(e,l);break;case 31:vl(e,l),a&4&&Ad(e,l);break;case 13:vl(e,l),a&4&&_d(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=eg.bind(null,l),Rg(e,l))));break;case 22:if(a=l.memoizedState!==null||ut,!a){var i=t!==null&&t.memoizedState!==null||_e;t=ut,n=_e,ut=a,(_e=i)&&!n?(a=2,(l.subtreeFlags&8772)!==0&&(a|=1),il(e,l,a)):vl(e,l),ut=t,_e=n}break;case 30:vl(e,l),a&512&&dl(l,l.return);break;case 7:a&512&&dl(l,l.return);default:vl(e,l)}}function Hc(e,t){for(e=e.child;e!==null;)Td(e,t),e=e.sibling}function Td(e,t){switch(e.tag){case 5:case 26:try{var l=e.stateNode;if(t){var a=l.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var n=e.stateNode,i=e.memoizedProps.style,r=i!=null&&i.hasOwnProperty("display")?i.display:null;n.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(s){Me(e,e.return,s)}qc(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Oe=!0}catch(s){Me(e,e.return,s)}break;case 18:try{var c=e.stateNode;t?ym(c,!0):ym(e.stateNode,!1)}catch(s){Me(e,e.return,s)}break;case 22:case 23:e.memoizedState===null&&Hc(e,t);break;default:Hc(e,t)}}function qc(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var l=e,a=t;switch(l.tag){case 4:Td(l,a);break e;case 22:l.memoizedState===null&&qc(l,a);break e;default:qc(l,a)}}e=e.sibling}}function wd(e){var t=e.alternate;t!==null&&(e.alternate=null,wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ui(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,wt=!1;function al(e,t,l){for(l=l.child;l!==null;)Od(e,t,l),l=l.sibling}function Od(e,t,l){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(On,l)}catch{}switch(l.tag){case 26:_e||dt(l,t),al(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&!_e&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:_e||dt(l,t),ii(l);var a=Ve,n=wt;ra(l.type)&&(Ve=l.stateNode,wt=!1),al(e,t,l),Mm(l.stateNode,l.type,l.memoizedProps),Ve=a,wt=n;break;case 5:_e||dt(l,t),ii(l);case 6:if(l.tag===6&&ii(l),a=Ve,n=wt,Ve=null,al(e,t,l),Ve=a,wt=n,Ve!==null)if(wt)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(l.stateNode),Oe=!0}catch(i){Me(l,t,i)}else try{Ve.removeChild(l.stateNode),Oe=!0}catch(i){Me(l,t,i)}break;case 18:Ve!==null&&(wt?(e=Ve,bm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Tn(e)):bm(Ve,l.stateNode));break;case 4:a=Ve,n=wt,Ve=l.stateNode.containerInfo,wt=!0,al(e,t,l),Ve=a,wt=n;break;case 0:case 11:case 14:case 15:ea(2,l,t),_e||ea(4,l,t),al(e,t,l);break;case 1:_e||(dt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&gd(l,t,a)),al(e,t,l);break;case 21:al(e,t,l);break;case 22:_e=(a=_e)||l.memoizedState!==null,al(e,t,l),_e=a;break;case 30:dt(l,t),al(e,t,l);break;case 7:_e||dt(l,t),al(e,t,l);break;default:al(e,t,l)}}function Ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tn(e)}catch(l){Me(t,t.return,l)}}}function _d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tn(e)}catch(l){Me(t,t.return,l)}}function V0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zd),t;default:throw Error(m(435,e.tag))}}function Au(e,t){var l=V0(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=tg.bind(null,e,a);a.then(n,n)}})}function St(e,t,l){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,c=t,s=c;e:for(;s!==null;){switch(s.tag){case 27:if(ra(s.type)){Ve=s.stateNode,wt=!1;break e}break;case 5:Ve=s.stateNode,wt=!1;break e;case 3:case 4:Ve=s.stateNode.containerInfo,wt=!0;break e}s=s.return}if(Ve===null)throw Error(m(160));Od(r,c,i),Ve=null,wt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Dd(t,e,l),t=t.sibling}var nl=null;function Dd(e,t,l){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(n&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var r=a[i];r.ref.impl=r.nextImpl}St(t,e,l),jt(e),n&4&&(ea(3,e,e.return),ni(3,e),ea(5,e,e.return));break;case 1:St(t,e,l),jt(e),n&512&&(_e||a===null||dt(a,a.return)),n&64&&ut&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?t:l.concat(t))));break;case 26:if(i=nl,St(t,e,l),jt(e),n&512&&(_e||a===null||dt(a,a.return)),n&4)if(n=a!==null?a.memoizedState:null,l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null)if(ut)e.stateNode=gm(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,l=e.memoizedProps,n=i.ownerDocument||i;t:switch(t){case"title":a=n.getElementsByTagName("title")[0],(!a||a[Dn]||a[ct]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(t),n.head.insertBefore(a,n.querySelector("head > title"))),mt(a,t,l),a[ct]=e,nt(a),t=a;break e;case"link":if(i=Ym("link","href",n).get(t+(l.href||""))){for(r=0;r<i.length;r++)if(a=i[r],a.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&a.getAttribute("rel")===(l.rel==null?null:l.rel)&&a.getAttribute("title")===(l.title==null?null:l.title)&&a.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(r,1);break t}}a=n.createElement(t),mt(a,t,l),n.head.appendChild(a);break;case"meta":if(i=Ym("meta","content",n).get(t+(l.content||""))){for(r=0;r<i.length;r++)if(a=i[r],a.getAttribute("content")===(l.content==null?null:""+l.content)&&a.getAttribute("name")===(l.name==null?null:l.name)&&a.getAttribute("property")===(l.property==null?null:l.property)&&a.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&a.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(r,1);break t}}a=n.createElement(t),mt(a,t,l),n.head.appendChild(a);break;default:throw Error(m(468,t))}a[ct]=e,nt(a),t=a}e.stateNode=t}else ut||Ss(i,e.type,e.stateNode);else e.stateNode=Bm(i,l,e.memoizedProps);else n!==l?(n===null?(t=a.stateNode,t===null||_e||t.parentNode.removeChild(t)):n.count--,l===null?ut||Ss(i,e.type,e.stateNode):Bm(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ec(e,e.memoizedProps,a.memoizedProps);break;case 27:St(t,e,l),jt(e),n&512&&(_e||a===null||dt(a,a.return)),a!==null&&n&4&&Ec(e,e.memoizedProps,a.memoizedProps);break;case 5:if(i=gl,gl=!1,St(t,e,l),gl=i,jt(e),n&512&&(_e||a===null||dt(a,a.return)),e.flags&32){t=e.stateNode;try{Va(t,""),Oe=!0}catch(y){Me(e,e.return,y)}}n&4&&e.stateNode!=null&&(t=e.memoizedProps,Ec(e,t,a!==null?a.memoizedProps:t)),n&1024&&(Uc=!0);break;case 6:if(St(t,e,l),jt(e),n&4){if(e.stateNode===null)throw Error(m(162));t=e.memoizedProps,l=e.stateNode;try{l.nodeValue=t,Oe=!0}catch(y){Me(e,e.return,y)}}break;case 3:if(Oe=!1,Lu=null,i=nl,nl=gi(t.containerInfo),St(t,e,l),nl=i,jt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Tn(t.containerInfo)}catch(y){Me(e,e.return,y)}Uc&&(Uc=!1,Md(e)),Oe=!1;break;case 4:n=gl,gl=ut,a=Ws(),i=nl,nl=gi(e.stateNode.containerInfo),St(t,e,l),jt(e),nl=i,Oe&&ui&&(wu=!0),Oe=a,gl=n;break;case 12:St(t,e,l),jt(e);break;case 31:St(t,e,l),jt(e),n&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 13:St(t,e,l),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mu=we()),n&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 22:i=e.memoizedState!==null,r=a!==null&&a.memoizedState!==null;var c=ut,s=_e,p=gl;ut=c||i,gl=p||i,_e=s||r,St(t,e,l),_e=s,gl=p,ut=c,jt(e),n&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||a===null||r||ut||_e||(t=r||_e,l=ut,a=_e,ut=i||ut,_e=t,ta(e,2),ut=l,_e=a),!i&&gl||Hc(e,i)),n&4&&(t=e.updateQueue,t!==null&&(l=t.retryQueue,l!==null&&(t.retryQueue=null,Au(e,l))));break;case 19:St(t,e,l),jt(e),n&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 30:n&512&&(_e||a===null||dt(a,a.return)),n=Ws(),i=ui,r=(l&335544064)===l,c=e.memoizedProps,ui=r&&wl(c.default,c.update)!=="none",St(t,e,l),jt(e),r&&a!==null&&Oe&&(e.flags|=4),ui=i,Oe=n;break;case 21:break;case 7:n&512&&(_e||a===null||dt(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:St(t,e,l),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(vd(a)){l=a;break}a=a.return}a=null;for(var n=e.return;n!==null;){if(Cc(n)){var i=n.stateNode;a===null?a=[i]:a.push(i)}if(Nc(n))break;n=n.return}var r=a;if(l==null)throw Error(m(160));switch(l.tag){case 27:var c=l.stateNode,s=Tc(e);Cu(e,s,c,r);break;case 5:var p=l.stateNode;l.flags&32&&(Va(p,""),l.flags&=-33);var y=Tc(e);Cu(e,y,p,r);break;case 3:case 4:var N=l.stateNode.containerInfo,d=Tc(e);wc(e,d,N,r);break;default:throw Error(m(161))}}catch(b){Me(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Md(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Md(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,En=!0,t.reset(),En=!1),e=e.sibling}}function sn(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling;else Cd(t)}function Ud(e,t){var l=e.alternate;if(l===null)Oc(e,!1);else switch(e.tag){case 3:if(Rc=pl=!1,xd(),sn(t,e),!pl&&!wu){if(e=ml,e!==null)for(var a=0;a<e.length;a+=3){l=e[a];var n=e[a+1];Sm(l,e[a+2]),l=l.ownerDocument.documentElement,l!==null&&l.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Rc=!0}ml=null;break;case 5:sn(t,e);break;case 4:a=pl,pl=!1,sn(t,e),pl&&(wu=!0),pl=a;break;case 22:e.memoizedState===null&&(l.memoizedState!==null?Oc(e,!1):sn(t,e));break;case 30:a=pl,n=xd(),pl=!1,sn(t,e),pl&&(e.flags|=4);var i=e.memoizedProps,r=e.stateNode;t=Tl(i,r),r=Tl(l.memoizedProps,r);var c=wl(i.default,i.update);c==="none"?t=!1:(i=l.memoizedState,l.memoizedState=null,l=e.child,Tt=0,t=Mc(e,l,t,r,c,i,!0),Tt!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(pn(e,e.memoizedProps.onUpdate),ml=n):n!==null&&(n.push.apply(n,ml),ml=n),pl=(e.flags&32)!==0?!0:a;break;default:sn(t,e)}}function vl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ed(e,t.alternate,t),t=t.sibling}function ta(e,t){for(e=e.child;e!==null;){var l=e,a=t;switch(l.tag){case 0:case 11:case 14:case 15:ea(4,l,l.return),ta(l,a);break;case 1:dt(l,l.return);var n=l.stateNode;typeof n.componentWillUnmount=="function"&&gd(l,l.return,n),ta(l,a);break;case 27:(a&2)!==0&&Mm(l.stateNode,l.type,l.memoizedProps);case 5:dt(l,l.return),l.tag!==5&&l.tag!==27||ii(l),ta(l,a);break;case 6:ii(l);break;case 26:dt(l,l.return),n=l.stateNode,l.memoizedState!==null||n===null||_e||n.parentNode.removeChild(n),ta(l,a);break;case 22:l.memoizedState===null&&ta(l,a);break;case 30:dt(l,l.return),ta(l,a);break;case 7:dt(l,l.return);default:ta(l,a)}e=e.sibling}}function il(e,t,l){for(l=(t.subtreeFlags&8772)!==0?l:l&-2,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,r=i.flags,c=(l&1)!==0;switch(i.tag){case 0:case 11:case 15:il(n,i,l),ni(4,i);break;case 1:if(il(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){Me(a,a.return,y)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)tf(p[n],s)}catch(y){Me(a,a.return,y)}}c&&r&64&&hd(i),dl(i,i.return);break;case 27:(l&2)!==0&&bd(i);case 5:i.tag!==5&&i.tag!==27||pd(i),il(n,i,l),c&&a===null&&r&4&&zc(i),dl(i,i.return);break;case 6:pd(i);break;case 26:s=i.stateNode,i.memoizedState!==null||s===null||ut||Ss(gi(s.ownerDocument),i.type,s),il(n,i,l),c&&a===null&&r&4&&zc(i),dl(i,i.return);break;case 12:il(n,i,l);break;case 31:il(n,i,l),c&&r&4&&Ad(n,i);break;case 13:il(n,i,l),c&&r&4&&_d(n,i);break;case 22:i.memoizedState===null&&il(n,i,l),dl(i,i.return);break;case 30:il(n,i,l),dl(i,i.return);break;case 7:dl(i,i.return);default:il(n,i,l)}t=t.sibling}}function Bc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ln(l))}function Yc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ln(e))}function Wt(e,t,l,a){var n=(l&335544064)===l;if(t.subtreeFlags&(n?10262:10256))for(t=t.child;t!==null;)Rd(e,t,l,a),t=t.sibling;else n&&Nd(t)}function Rd(e,t,l,a){var n=(l&335544064)===l;n&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Tu(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,l,a),i&2048&&ni(9,t);break;case 1:Wt(e,t,l,a);break;case 3:Wt(e,t,l,a),n&&Rc&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Ln(i)));break;case 12:if(i&2048){Wt(e,t,l,a),i=t.stateNode;try{var r=t.memoizedProps,c=r.id,s=r.onPostCommit;typeof s=="function"&&s(c,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(p){Me(t,t.return,p)}}else Wt(e,t,l,a);break;case 31:Wt(e,t,l,a);break;case 13:Wt(e,t,l,a);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?(n&&c!==null&&c.memoizedState===null&&Tu(c),r._visibility&2?Wt(e,t,l,a):ri(e,t)):(n&&c!==null&&c.memoizedState!==null&&Tu(t),r._visibility&2?Wt(e,t,l,a):(r._visibility|=2,on(e,t,l,a,(t.subtreeFlags&10256)!==0||!1))),i&2048&&Bc(c,t);break;case 24:Wt(e,t,l,a),i&2048&&Yc(t.alternate,t);break;case 30:n&&(i=t.alternate,i!==null&&(hl(i.child,!0),hl(t.child,!0))),Wt(e,t,l,a);break;default:Wt(e,t,l,a)}}function on(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,c=l,s=a,p=r.flags;switch(r.tag){case 0:case 11:case 15:on(i,r,c,s,n),ni(8,r);break;case 23:break;case 22:var y=r.stateNode;r.memoizedState!==null?y._visibility&2?on(i,r,c,s,n):ri(i,r):(y._visibility|=2,on(i,r,c,s,n)),n&&p&2048&&Bc(r.alternate,r);break;case 24:on(i,r,c,s,n),n&&p&2048&&Yc(r.alternate,r);break;default:on(i,r,c,s,n)}t=t.sibling}}function ri(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:ri(l,a),n&2048&&Bc(a.alternate,a);break;case 24:ri(l,a),n&2048&&Yc(a.alternate,a);break;default:ri(l,a)}t=t.sibling}}var Ma=8192;function Ua(e,t,l){if(e.subtreeFlags&Ma)for(e=e.child;e!==null;)Hd(e,t,l),e=e.sibling}function Hd(e,t,l){switch(e.tag){case 26:Ua(e,t,l),e.flags&Ma&&(e.memoizedState!==null?$g(l,nl,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Vm(l,e)));break;case 5:Ua(e,t,l),e.flags&Ma&&(e=e.stateNode,(t&335544128)===t&&Vm(l,e));break;case 3:case 4:var a=nl;nl=gi(e.stateNode.containerInfo),Ua(e,t,l),nl=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ma,Ma=16777216,Ua(e,t,l),Ma=a):Ua(e,t,l));break;case 30:if((e.flags&Ma)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var n=e.stateNode;n.paired=null,Yt===null&&(Yt=new Map),Yt.set(a,n)}Ua(e,t,l);break;default:Ua(e,t,l)}}function qd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];rt=a,Yd(a,e)}qd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bd(e),e=e.sibling}function Bd(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&ea(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_u(e)):ci(e);break;default:ci(e)}}function _u(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];rt=a,Yd(a,e)}qd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ea(8,t,t.return),_u(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,_u(t));break;default:_u(t)}e=e.sibling}}function Yd(e,t){for(;rt!==null;){var l=rt;switch(l.tag){case 0:case 11:case 15:ea(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ln(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,rt=a;else e:for(l=e;rt!==null;){a=rt;var n=a.sibling,i=a.return;if(wd(a),a===l){rt=null;break e}if(n!==null){n.return=i,rt=n;break e}rt=i}}}var Z0={getCacheForType:function(e){var t=st(Fe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return st(Fe).controller.signal}},L0=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Be=null,xe=null,je=0,De=0,Gt=null,la=!1,fn=!1,Gc=!1,ql=0,ke=0,aa=0,Ra=0,Du=0,Qt=0,dn=0,si=null,Ot=null,Qc=!1,Mu=0,Gd=0,Uu=1/0,Ru=null,na=null,Ze=0,ul=null,Ha=null,bl=0,Xc=0,Vc=null,Qd=null,mn=null,hn=null,gn=null,oi=0,Hu=null;function Xt(){return(Ae&2)!==0&&je!==0?je&-je:G.T!==null?Pc():Xs()}function Xd(){if(Qt===0)if((je&536870912)===0||be){var e=Ai;Ai<<=1,(Ai&3932160)===0&&(Ai=262144),Qt=e}else Qt=536870912;return e=ot.current,e!==null&&(e.flags|=32),Qt}function pn(e,t){if(t!=null){var l=e.stateNode,a=l.ref;a===null&&(a=l.ref=jm(Tl(e.memoizedProps,l))),hn===null&&(hn=[]),hn.push(t.bind(null,a))}}function At(e,t,l){(e===Be&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(vn(e,0),ia(e,je,Qt,!1)),_n(e,l),((Ae&2)===0||e!==Be)&&(e===Be&&((Ae&2)===0&&(Ra|=l),ke===4&&ia(e,je,Qt,!1)),yl(e))}function Vd(e,t,l){if((Ae&6)!==0)throw Error(m(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||An(e,t),n=a?J0(e,t):Lc(e,t,!0),i=a;do{if(n===0){fn&&!a&&ia(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!k0(l)){n=Lc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;n=si;var s=c.current.memoizedState.isDehydrated;if(s&&(vn(c,r).flags|=256),r=Lc(c,r,!1),r!==2&&r!==6){if(Gc&&!s){c.errorRecoveryDisabledLanes|=i,Ra|=i,n=4;break e}i=Ot,Ot=n,i!==null&&(Ot===null?Ot=i:Ot.push.apply(Ot,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){vn(e,0),ia(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ia(a,t,Qt,!la);break e;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=Mu+300-we(),10<n)){if(ia(a,t,Qt,!la),Di(a,0,!0)!==0)break e;bl=t,a.timeoutHandle=os(Zd.bind(null,a,l,Ot,Ru,Qc,t,Qt,Ra,dn,la,i,"Throttled",-0,0),n);break e}Zd(a,l,Ot,Ru,Qc,t,Qt,Ra,dn,la,i,null,-0,0)}}break}while(!0);yl(e)}function Zd(e,t,l,a,n,i,r,c,s,p,y,N,d,b){e.timeoutHandle=-1;var H=t.subtreeFlags,V=(i&335544064)===i;if(N=null,(V||H&8192||(H&16785408)===16785408)&&(N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sl},Yt=null,Hd(t,i,N),V&&(H=N,V=e.containerInfo,V=(V.nodeType===9?V:V.ownerDocument).__reactViewTransition,V!=null&&(H.count++,H.waitingForViewTransition=!0,H=bi.bind(H),V.finished.then(H,H))),H=(i&62914560)===i?Mu-we():(i&4194048)===i?Gd-we():0,H=Fg(N,H),H!==null)){bl=i,e.cancelPendingCommit=H(Id.bind(null,e,t,i,l,a,n,r,c,s,p,y,N,null,d,b)),ia(e,i,r,!p);return}Id(e,t,i,l,a,n,r,c,s,p,y,N)}function k0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!qt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ia(e,t,l,a){t=qs(e,t),t&=~Du,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-Rt(n),r=1<<i;a[i]=-1,n&=~r}l!==0&&Ys(e,l,t)}function qu(){return(Ae&6)===0?(fi(0),!1):!0}function Zc(){if(xe!==null){if(De===0)var e=xe.return;else e=xe,_l=Na=null,Ir(e),ln=null,Jn=0,e=xe;for(;e!==null;)md(e.alternate,e),e=e.return;xe=null}}function vn(e,t){var l=e.timeoutHandle;return l!==-1&&(e.timeoutHandle=-1,pg(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),bl=0,Zc(),Be=e,xe=l=Ol(e.current,null),je=t,De=0,Gt=null,la=!1,fn=An(e,t),Gc=!1,dn=Qt=Du=Ra=aa=ke=0,Ot=si=null,Qc=!1,ql=qs(e,t),Li(),l}function Ld(e,t){ce=null,G.H=pu,t===tn||t===lu?(t=Wo(),De=3):t===Yr?(t=Wo(),De=4):De=t===mc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,xe===null&&(ke=1,vu(e,Kt(t,e.current)))}function kd(){var e=ot.current;return e===null?!0:(je&4194048)===je?pt===null:(je&62914560)===je||(je&536870912)!==0?e===pt:!1}function Kd(){var e=G.H;return G.H=pu,e===null?pu:e}function Jd(){var e=G.A;return G.A=Z0,e}function Bu(){ke=4,la||(je&4194048)!==je&&ot.current!==null||(fn=!0),(aa&134217727)===0&&(Ra&134217727)===0||Be===null||ia(Be,je,Qt,!1)}function Lc(e,t,l){var a=Ae;Ae|=2;var n=Kd(),i=Jd();(Be!==e||je!==t)&&(Ru=null,vn(e,t)),t=!1;var r=ke;e:do try{if(De!==0&&xe!==null){var c=xe,s=Gt;switch(De){case 8:Zc(),r=6;break e;case 3:case 2:case 9:case 6:ot.current===null&&(t=!0);var p=De;if(De=0,Gt=null,bn(e,c,s,p),l&&fn){r=0;break e}break;default:p=De,De=0,Gt=null,bn(e,c,s,p)}}K0(),r=ke;break}catch(y){Ld(e,y)}while(!0);return t&&e.shellSuspendCounter++,_l=Na=null,Ae=a,G.H=n,G.A=i,xe===null&&(Be=null,je=0,Li()),r}function K0(){for(;xe!==null;)$d(xe)}function J0(e,t){var l=Ae;Ae|=2;var a=Kd(),n=Jd();Be!==e||je!==t?(Ru=null,Uu=we()+500,vn(e,t)):fn=An(e,t);e:do try{if(De!==0&&xe!==null){t=xe;var i=Gt;t:switch(De){case 1:De=0,Gt=null,bn(e,t,i,1);break;case 2:case 9:if($o(i)){De=0,Gt=null,Fd(t);break}t=function(){De!==2&&De!==9||Be!==e||(De=7),yl(e)},i.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:$o(i)?(De=0,Gt=null,Fd(t)):(De=0,Gt=null,bn(e,t,i,7));break;case 5:var r=null;switch(xe.tag){case 26:r=xe.memoizedState;case 5:case 27:var c=xe;if(r?Qm(r):c.stateNode.complete){De=0,Gt=null;var s=c.sibling;if(s!==null)xe=s;else{var p=c.return;p!==null?(xe=p,Yu(p)):xe=null}break t}}De=0,Gt=null,bn(e,t,i,5);break;case 6:De=0,Gt=null,bn(e,t,i,6);break;case 8:Zc(),ke=6;break e;default:throw Error(m(462))}}$0();break}catch(y){Ld(e,y)}while(!0);return _l=Na=null,G.H=a,G.A=n,Ae=l,xe!==null?0:(Be=null,je=0,Li(),ke)}function $0(){for(;xe!==null&&!te();)$d(xe)}function $d(e){var t=fd(e.alternate,e,ql);e.memoizedProps=e.pendingProps,t===null?Yu(e):xe=t}function Fd(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=nd(l,t,t.pendingProps,t.type,void 0,je);break;case 11:t=nd(l,t,t.pendingProps,t.type.render,t.ref,je);break;case 5:Ir(t);var a=t;a===it&&(be?(Wi(a),a.tag===5&&a.stateNode!=null&&(Qe=a.stateNode)):(Wi(a),be=!0));default:md(l,t),t=xe=Bo(t,ql),t=fd(l,t,ql)}e.memoizedProps=e.pendingProps,t===null?Yu(e):xe=t}function bn(e,t,l,a){_l=Na=null,Ir(t),ln=null,Jn=0;var n=t.return;try{if(H0(e,n,t,l,je)){ke=1,vu(e,Kt(l,e.current)),xe=null;return}}catch(i){if(n!==null)throw xe=n,i;ke=1,vu(e,Kt(l,e.current)),xe=null;return}t.flags&32768?(be||a===1?e=!0:fn||(je&536870912)!==0?e=!1:(la=e=!0,(a===2||a===9||a===3||a===6)&&(a=ot.current,a!==null&&a.tag===13&&(a.flags|=16384))),Wd(t,e)):Yu(t)}function Yu(e){var t=e;do{if((t.flags&32768)!==0){Wd(t,la);return}e=t.return;var l=G0(t.alternate,t,ql);if(l!==null){xe=l;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);ke===0&&(ke=5)}function Wd(e,t){do{var l=Q0(e.alternate,e);if(l!==null){l.flags&=32767,xe=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=l}while(e!==null);ke=6,xe=null}function Id(e,t,l,a,n,i,r,c,s,p,y,N){e.cancelPendingCommit=null;do Gu();while(Ze!==0);if((Ae&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));e===Be&&(xe=Be=null,je=0),Ha=t,ul=e,bl=l,Vc=n,Qd=a,F0(e,t,l,r,c,s,N)}}function F0(e,t,l,a,n,i,r){var c=t.lanes|t.childLanes;if(Xc=c,c|=Er,jh(e,l,c,a,n,i),hn=null,(l&335544064)===l?(gn=C0(e),a=10262):(gn=null,a=10256),(t.subtreeFlags&a)!==0||(t.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,lg(wi,function(){return $c(),null})):(e.callbackNode=null,e.callbackPriority=0),zu=!1,a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=G.T,G.T=null,n=B.p,B.p=2,i=Ae,Ae|=4;try{X0(e,t,l)}finally{Ae=i,B.p=n,G.T=a}}Ze=1,zu?mn=jg(r,e.containerInfo,gn,kc,Kc,I0,Jc,$c,W0):(kc(),Kc(),Jc())}function W0(e){if(Ze!==0){var t=ul.onRecoverableError;t(e,{componentStack:null})}}function I0(){Ze===3&&(Ze=0,Ud(Ha,ul),Ze=4)}function kc(){if(Ze===1){Ze=0;var e=ul,t=Ha,l=bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var n=B.p;B.p=2;var i=Ae;Ae|=4;try{ui=wu=!1,Dd(t,e,l),l=rs;var r=wo(e.containerInfo),c=l.focusedElem,s=l.selectionRange;if(r!==c&&c&&c.ownerDocument&&To(c.ownerDocument.documentElement,c)){if(s!==null&&Sr(c)){var p=s.start,y=s.end;if(y===void 0&&(y=p),"selectionStart"in c)c.selectionStart=p,c.selectionEnd=Math.min(y,c.value.length);else{var N=c.ownerDocument||document,d=N&&N.defaultView||window;if(d.getSelection){var b=d.getSelection(),H=c.textContent.length,V=Math.min(s.start,H),se=s.end===void 0?V:Math.min(s.end,H);!b.extend&&V>se&&(r=se,se=V,V=r);var g=Eo(c,V),o=Eo(c,se);if(g&&o&&(b.rangeCount!==1||b.anchorNode!==g.node||b.anchorOffset!==g.offset||b.focusNode!==o.node||b.focusOffset!==o.offset)){var v=N.createRange();v.setStart(g.node,g.offset),b.removeAllRanges(),V>se?(b.addRange(v),b.extend(o.node,o.offset)):(v.setEnd(o.node,o.offset),b.addRange(v))}}}}for(N=[],b=c;b=b.parentNode;)b.nodeType===1&&N.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<N.length;c++){var j=N[c];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}En=!!us,rs=us=null}finally{Ae=i,B.p=n,G.T=a}}e.current=t,Ze=2}}function Kc(){if(Ze===2){Ze=0;var e=ul,t=Ha,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=G.T,G.T=null;var a=B.p;B.p=2;var n=Ae;Ae|=4;try{Ed(e,t.alternate,t)}finally{Ae=n,B.p=a,G.T=l}}Ze=3}}function Jc(){if(Ze===4||Ze===3){Ze=0;var e=mn;mn=null,ze();var t=ul,l=Ha,a=bl,n=Qd,i=(a&335544064)===a?10262:10256;if((l.subtreeFlags&i)!==0||(l.flags&i)!==0?Ze=5:(Ze=0,Ha=ul=null,Pd(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(na=null),ar(a),l=l.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(On,l,void 0,(l.current.flags&128)===128)}catch{}if(n!==null){l=G.T,i=B.p,B.p=2,G.T=null;try{for(var r=t.onRecoverableError,c=0;c<n.length;c++){var s=n[c];r(s.value,{componentStack:s.stack})}}finally{G.T=l,B.p=i}}if(n=hn,r=gn,gn=null,n!==null&&(hn=null,r===null&&(r=[]),e!==null))for(s=0;s<n.length;s++)l=(0,n[s])(r),l!==void 0&&e.finished.finally(l);(bl&3)!==0&&Gu(),yl(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===Hu?oi++:(oi=0,Hu=t):(oi=0,Hu=null),fi(0)}}function Pd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ln(t)))}function Gu(){return mn!==null&&(mn.skipTransition(),mn=null),kc(),Kc(),Jc(),$c()}function $c(){if(Ze!==5)return!1;var e=ul,t=Xc;Xc=0;var l=ar(bl),a=G.T,n=B.p;try{B.p=32>l?32:l,G.T=null,l=Vc,Vc=null;var i=ul,r=bl;if(Ze=0,Ha=ul=null,bl=0,(Ae&6)!==0)throw Error(m(331));var c=Ae;if(Ae|=4,Bd(i.current),Rd(i,i.current,r,l),Ae=c,fi(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(On,i)}catch{}return!0}finally{B.p=n,G.T=a,Pd(e,t)}}function em(e,t,l){t=Kt(l,t),t=dc(e.stateNode,t,2),e=Fl(e,t,2),e!==null&&(_n(e,2),yl(e))}function Me(e,t,l){if(e.tag===3)em(e,e,l);else for(;t!==null;){if(t.tag===3){em(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(na===null||!na.has(a))){e=Kt(l,e),l=Ff(2),a=Fl(t,l,2),a!==null&&(Wf(l,a,t,e),_n(a,2),yl(a));break}}t=t.return}}function Fc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new L0;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Gc=!0,n.add(l),e=P0.bind(null,e,t,l),t.then(e,e))}function P0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Be===e&&(je&l)===l&&((ke===4||ke===3&&(je&62914560)===je&&300>we()-Mu)&&(Ae&2)===0?vn(e,0):Du|=l,dn===je&&(dn=0)),yl(e)}function tm(e,t){t===0&&(t=Bs()),e=xa(e,t),e!==null&&(_n(e,t),yl(e))}function eg(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),tm(e,l)}function tg(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(t),tm(e,l)}function lg(e,t){return L(e,t)}var yn=null,xn=null,Wc=!1,Qu=!1,Ic=!1,ua=0;function yl(e){e!==xn&&e.next===null&&(xn===null?yn=xn=e:xn=xn.next=e),Qu=!0,Wc||(Wc=!0,ng())}function fi(e,t){if(!Ic&&Qu){Ic=!0;do for(var l=!1,a=yn;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var r=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-Rt(42|e)+1)-1,i&=n&~(r&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,im(a,i))}else i=je,i=Di(a,a===Be?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||An(a,i)||(l=!0,im(a,i));a=a.next}while(l);Ic=!1}}function ag(){lm()}function lm(){Qu=Wc=!1;var e=0;ua!==0&&gg()&&(e=ua);for(var t=we(),l=null,a=yn;a!==null;){var n=a.next,i=am(a,t);i===0?(a.next=null,l===null?yn=n:l.next=n,n===null&&(xn=l)):(l=a,(e!==0||(i&3)!==0)&&(Qu=!0)),a=n}Ze!==0&&Ze!==5||fi(e),ua!==0&&(ua=0)}function am(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-Rt(i),c=1<<r,s=n[r];s===-1?((c&l)===0||(c&a)!==0)&&(n[r]=Sh(c,t)):s<=t&&(e.expiredLanes|=c),i&=~c}if(t=Be,l=je,l=Di(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&J(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||An(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&J(a),ar(l)){case 2:case 8:l=tl;break;case 32:l=wi;break;case 268435456:l=Hs;break;default:l=wi}return a=nm.bind(null,e),l=L(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&J(a),e.callbackPriority=2,e.callbackNode=null,2}function nm(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Gu()&&e.callbackNode!==l)return null;var a=je;return a=Di(e,e===Be?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Vd(e,a,t),am(e,we()),e.callbackNode!=null&&e.callbackNode===l?nm.bind(null,e):null)}function im(e,t){if(Gu())return null;Vd(e,t,!0)}function ng(){vg(function(){(Ae&6)!==0?L(Ke,ag):lm()})}function Pc(){if(ua===0){var e=Ea;e===0&&(e=Oi,Oi<<=1,(Oi&261888)===0&&(Oi=256)),ua=e}return ua}function um(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qi(e)}function ig(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=um((n[zt]||null).action),r=a.submitter;r&&(t=(t=r[zt]||null)?um(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var c=new Qi("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ua!==0){var s=new FormData(n,r);rc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=new FormData(n,r),rc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var es=0;es<zr.length;es++){var ts=zr[es],ug=ts.toLowerCase(),rg=ts[0].toUpperCase()+ts.slice(1);ll(ug,"on"+rg)}ll(_o,"onAnimationEnd"),ll(Do,"onAnimationIteration"),ll(Mo,"onAnimationStart"),ll("dblclick","onDoubleClick"),ll("focusin","onFocus"),ll("focusout","onBlur"),ll(p0,"onTransitionRun"),ll(v0,"onTransitionStart"),ll(b0,"onTransitionCancel"),ll(Uo,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),va("onBeforeInput",["compositionend","keypress","textInput","paste"]),va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di));function rm(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var c=a[r],s=c.instance,p=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=p;try{i(n)}catch(y){Zi(y)}n.currentTarget=null,i=s}else for(r=0;r<a.length;r++){if(c=a[r],s=c.instance,p=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=p;try{i(n)}catch(y){Zi(y)}n.currentTarget=null,i=s}}}}function Se(e,t){var l=t[Zs];l===void 0&&(l=t[Zs]=new Set);var a=e+"__bubble";l.has(a)||(cm(t,e,2,!1),l.add(a))}function ls(e,t,l){var a=0;t&&(a|=4),cm(l,e,a,t)}var Xu="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[Xu]){e[Xu]=!0,Ks.forEach(function(l){l!=="selectionchange"&&(cg.has(l)||ls(l,!1,e),ls(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xu]||(t[Xu]=!0,ls("selectionchange",!1,t))}}function cm(e,t,l,a){switch(Wm(t)){case 2:var n=ep;break;case 8:n=tp;break;default:n=Ns}l=n.bind(null,t,l,e),n=void 0,!fr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function ns(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var c=a.stateNode.containerInfo;if(c===n)break;if(r===4)for(r=a.return;r!==null;){var s=r.tag;if((s===3||s===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;c!==null;){if(r=pa(c),r===null)return;if(s=r.tag,s===5||s===6||s===26||s===27){a=i=r;continue e}c=c.parentNode}}a=a.return}uo(function(){var p=i,y=sr(l),N=[];e:{var d=Ro.get(e);if(d!==void 0){var b=Qi,H=e;switch(e){case"keypress":if(Yi(l)===0)break e;case"keydown":case"keyup":b=kh;break;case"focusin":H="focus",b=gr;break;case"focusout":H="blur",b=gr;break;case"beforeblur":case"afterblur":b=gr;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Wh;break;case _o:case Do:case Mo:b=qh;break;case Uo:b=Ph;break;case"scroll":case"scrollend":b=Dh;break;case"wheel":b=t0;break;case"copy":case"cut":case"paste":b=Yh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=fo;break;case"submit":b=$h;break;case"toggle":case"beforetoggle":b=a0}var V=(t&4)!==0,se=!V&&(e==="scroll"||e==="scrollend"),g=V?d!==null?d+"Capture":null:d;V=[];for(var o=p,v;o!==null;){var j=o;if(v=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||v===null||g===null||(j=Un(o,g),j!=null&&V.push(mi(o,j,v))),se)break;o=o.return}0<V.length&&(d=new b(d,H,null,l,y),N.push({event:d,listeners:V}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",b&&l!==cr&&(H=l.relatedTarget||l.fromElement)&&(pa(H)||H[Ba]))break e;(d||b)&&(H=y.window===y?y:(b=y.ownerDocument)?b.defaultView||b.parentWindow:window,d?(b=l.relatedTarget||l.toElement,d=p,b=b?pa(b):null,b!==null&&(se=O(b),V=b.tag,b!==se||V!==5&&V!==27&&V!==6)&&(b=null)):(d=null,b=p),d!==b&&(V=so,j="onMouseLeave",g="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(V=fo,j="onPointerLeave",g="onPointerEnter",o="pointer"),se=d==null?H:Mn(d),v=b==null?H:Mn(b),H=new V(j,o+"leave",d,l,y),H.target=se,H.relatedTarget=v,j=null,pa(y)===p&&(V=new V(g,o+"enter",b,l,y),V.target=v,V.relatedTarget=se,j=V),se=j,V=d&&b?Ce(d,b,sg):null,d!==null&&sm(N,H,d,V,!1),b!==null&&se!==null&&sm(N,se,b,V,!0)))}e:{if(d=p?Mn(p):window,b=d.nodeName&&d.nodeName.toLowerCase(),b==="select"||b==="input"&&d.type==="file")var Q=xo;else if(bo(d))if(So)Q=m0;else{Q=f0;var Ne=o0}else b=d.nodeName,!b||b.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?p&&rr(p.elementType)&&(Q=xo):Q=d0;if(Q&&(Q=Q(e,p))){yo(N,Q,l,y);break e}Ne&&Ne(e,d,p)}switch(Ne=p?Mn(p):window,e){case"focusin":(bo(Ne)||Ne.contentEditable==="true")&&(Ka=Ne,jr=p,Xn=null);break;case"focusout":Xn=jr=Ka=null;break;case"mousedown":Nr=!0;break;case"contextmenu":case"mouseup":case"dragend":Nr=!1,Oo(N,l,y);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Oo(N,l,y)}var $;if(vr)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else ka?po(e,l)&&(le="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(le="onCompositionStart");le&&(mo&&l.locale!=="ko"&&(ka||le!=="onCompositionStart"?le==="onCompositionEnd"&&ka&&($=ro()):(Ql=y,dr="value"in Ql?Ql.value:Ql.textContent,ka=!0)),Ne=Vu(p,le),0<Ne.length&&(le=new oo(le,e,null,l,y),N.push({event:le,listeners:Ne}),$?le.data=$:($=vo(l),$!==null&&(le.data=$)))),($=i0?u0(e,l):r0(e,l))&&(le=Vu(p,"onBeforeInput"),0<le.length&&(Ne=new oo("onBeforeInput","beforeinput",null,l,y),N.push({event:Ne,listeners:le}),Ne.data=$)),ig(N,e,p,l,y)}rm(N,t)})}function mi(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Vu(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Un(e,l),n!=null&&a.unshift(mi(e,n,i)),n=Un(e,t),n!=null&&a.push(mi(e,n,i))),e.tag===3)return a;e=e.return}return[]}function sg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sm(e,t,l,a,n){for(var i=t._reactName,r=[];l!==null&&l!==a;){var c=l,s=c.alternate,p=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||p===null||(s=p,n?(p=Un(l,i),p!=null&&r.unshift(mi(l,p,s))):n||(p=Un(l,i),p!=null&&r.push(mi(l,p,s)))),l=l.return}r.length!==0&&e.push({event:t,listeners:r})}var og=/\r\n?/g,fg=/\u0000|\uFFFD/g;function om(e){return(typeof e=="string"?e:""+e).replace(og,`
`).replace(fg,"")}function fm(e,t){return t=om(t),om(e)===t}function Ue(e,t,l,a,n,i){switch(l){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||Va(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&Va(e,""+a);else return;break;case"className":Hi(e,"class",a);break;case"tabIndex":Hi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Hi(e,l,a);break;case"style":no(e,a,i);return;case"data":if(t!=="object"){Hi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=qi(a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&Ue(e,t,"name",n.name,n,null),Ue(e,t,"formEncType",n.formEncType,n,null),Ue(e,t,"formMethod",n.formMethod,n,null),Ue(e,t,"formTarget",n.formTarget,n,null)):(Ue(e,t,"encType",n.encType,n,null),Ue(e,t,"method",n.method,n,null),Ue(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=qi(a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=sl);return;case"onScroll":a!=null&&Se("scroll",e);return;case"onScrollEnd":a!=null&&Se("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));i?.__html!==l&&(e.innerHTML=l)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=qi(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Ri(e,"popover",a);break;case"xlinkActuate":zl(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":zl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":zl(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":zl(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":zl(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":zl(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":zl(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":zl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":zl(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ri(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")l=Ah.get(l)||l,Ri(e,l,a);else return}Oe=!0}function is(e,t,l,a,n,i){switch(l){case"style":no(e,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));i?.__html!==l&&(e.innerHTML=l)}}break;case"children":if(typeof a=="string")Va(e,a);else if(typeof a=="number"||typeof a=="bigint")Va(e,""+a);else return;break;case"onScroll":a!=null&&Se("scroll",e);return;case"onScrollEnd":a!=null&&Se("scrollend",e);return;case"onClick":a!=null&&(e.onclick=sl);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Js.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),i=l.slice(2,n?l.length-7:void 0),t=e[zt]||null,t=t!=null?t[l]:null,typeof t=="function"&&e.removeEventListener(i,t,n),typeof a=="function")){typeof t!="function"&&t!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(i,a,n);break e}Oe=!0,l in e?e[l]=a:a===!0?e.setAttribute(l,""):Ri(e,l,a)}return}Oe=!0}function mt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var r=l[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Ue(e,t,i,r,l,null)}}n&&Ue(e,t,"srcSet",l.srcSet,l,null),a&&Ue(e,t,"src",l.src,l,null);return;case"input":Se("invalid",e);var c=i=r=n=null,s=null,p=null;for(a in l)if(l.hasOwnProperty(a)){var y=l[a];if(y!=null)switch(a){case"name":n=y;break;case"type":r=y;break;case"checked":s=y;break;case"defaultChecked":p=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,t));break;default:Ue(e,t,a,y,l,null)}}eo(e,i,c,s,p,r,n,!1);return;case"select":Se("invalid",e),a=r=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":r=c;break;case"multiple":a=c;default:Ue(e,t,n,c,l,null)}t=i,l=r,e.multiple=!!a,t!=null?Xa(e,!!a,t,!1):l!=null&&Xa(e,!!a,l,!0);return;case"textarea":Se("invalid",e),i=n=a=null;for(r in l)if(l.hasOwnProperty(r)&&(c=l[r],c!=null))switch(r){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:Ue(e,t,r,c,l,null)}lo(e,a,n,i);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ue(e,t,s,a,l,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(a=0;a<di.length;a++)Se(di[a],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in l)if(l.hasOwnProperty(p)&&(a=l[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Ue(e,t,p,a,l,null)}return;default:if(rr(t)){for(y in l)l.hasOwnProperty(y)&&(a=l[y],a!==void 0&&is(e,t,y,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&Ue(e,t,c,a,l,null))}var dg={};function mg(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,c=null,s=null,p=null,y=null;for(b in l){var N=l[b];if(l.hasOwnProperty(b)&&N!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":s=N;default:a.hasOwnProperty(b)||Ue(e,t,b,null,a,N)}}for(var d in a){var b=a[d];if(N=l[d],a.hasOwnProperty(d)&&(b!=null||N!=null))switch(d){case"type":b!==N&&(Oe=!0),i=b;break;case"name":b!==N&&(Oe=!0),n=b;break;case"checked":b!==N&&(Oe=!0),p=b;break;case"defaultChecked":b!==N&&(Oe=!0),y=b;break;case"value":b!==N&&(Oe=!0),r=b;break;case"defaultValue":b!==N&&(Oe=!0),c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(m(137,t));break;default:b!==N&&Ue(e,t,d,b,a,N)}}ir(e,r,c,s,p,y,i,n);return;case"select":b=r=c=d=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":b=s;default:a.hasOwnProperty(i)||Ue(e,t,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":i!==s&&(Oe=!0),d=i;break;case"defaultValue":i!==s&&(Oe=!0),c=i;break;case"multiple":i!==s&&(Oe=!0),r=i;default:i!==s&&Ue(e,t,n,i,a,s)}t=c,l=r,a=b,d!=null?Xa(e,!!l,d,!1):!!a!=!!l&&(t!=null?Xa(e,!!l,t,!0):Xa(e,!!l,l?[]:"",!1));return;case"textarea":b=d=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Ue(e,t,c,null,a,n)}for(r in a)if(n=a[r],i=l[r],a.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":n!==i&&(Oe=!0),d=n;break;case"defaultValue":n!==i&&(Oe=!0),b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&Ue(e,t,r,n,a,i)}to(e,d,b);return;case"option":for(var H in l)d=l[H],l.hasOwnProperty(H)&&d!=null&&!a.hasOwnProperty(H)&&(H==="selected"?e.selected=!1:Ue(e,t,H,null,a,d));for(s in a)d=a[s],b=l[s],a.hasOwnProperty(s)&&d!==b&&(d!=null||b!=null)&&(s==="selected"?(d!==b&&(Oe=!0),e.selected=d&&typeof d!="function"&&typeof d!="symbol"):Ue(e,t,s,d,a,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in l)d=l[V],l.hasOwnProperty(V)&&d!=null&&!a.hasOwnProperty(V)&&Ue(e,t,V,null,a,d);for(p in a)if(d=a[p],b=l[p],a.hasOwnProperty(p)&&d!==b&&(d!=null||b!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(m(137,t));break;default:Ue(e,t,p,d,a,b)}return;default:if(rr(t)){for(var se in l)d=l[se],l.hasOwnProperty(se)&&d!==void 0&&!a.hasOwnProperty(se)&&is(e,t,se,void 0,a,d);for(y in a)d=a[y],b=l[y],!a.hasOwnProperty(y)||d===b||d===void 0&&b===void 0||is(e,t,y,d,a,b);return}}for(var g in l)d=l[g],l.hasOwnProperty(g)&&d!=null&&!a.hasOwnProperty(g)&&Ue(e,t,g,null,a,d);for(N in a)d=a[N],b=l[N],!a.hasOwnProperty(N)||d===b||d==null&&b==null||Ue(e,t,N,d,a,b)}function dm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,r=n.initiatorType,c=n.duration;if(i&&c&&dm(r)){for(r=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],p=s.startTime;if(p>c)break;var y=s.transferSize,N=s.initiatorType;y&&dm(N)&&(s=s.responseEnd,r+=y*(s<c?1:(c-p)/(s-p)))}if(--a,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var us=null,rs=null;function hi(e){return e.nodeType===9?e:e.ownerDocument}function mm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gm(e,t,l,a){return l=hi(l).createElement(e),l[ct]=a,l[zt]=t,mt(l,e,t),nt(l),l}function cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=null;function gg(){var e=window.event;return e&&e.type==="popstate"?e===ss?!1:(ss=e,!0):(ss=null,!1)}var os=typeof setTimeout=="function"?setTimeout:void 0,pg=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,vm=typeof requestAnimationFrame=="function"?requestAnimationFrame:os,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(e){return pm.resolve(null).then(e).catch(bg)}:os;function bg(e){setTimeout(function(){throw e})}function ra(e){return e==="head"}function bm(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Tn(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")bs(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,bs(l);for(var i=l.firstChild;i;){var r=i.nextSibling,c=i.nodeName;i[Dn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=r}}else l==="body"&&bs(e.ownerDocument.body);l=n}while(l);Tn(t)}function ym(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function xm(e,t,l){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,l!=null&&(e.style.viewTransitionClass=l),l=getComputedStyle(e),l.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var n=a=0;n<t.length;n++){var i=t[n];0<i.width&&0<i.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+l.paddingTop,e.marginBottom="-"+l.paddingBottom)}}function Sm(e,t){e=e.style,t=t.style;var l=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=l==null||typeof l=="boolean"?"":(""+l).trim(),l=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=l==null||typeof l=="boolean"?"":(""+l).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(l=t.display,e.display=l==null||typeof l=="boolean"?"":l,l=t.margin,l!=null?e.margin=l:(l=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=l==null||typeof l=="boolean"?"":l,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function yg(e,t,l){return l=l.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=l.innerHeight&&e.left<=l.innerWidth}}function fs(e){var t=e.getBoundingClientRect(),l=getComputedStyle(e);return yg(t,l,e)}function xg(e){return e.documentElement.clientHeight}function Sg(e){this.addEventListener("load",e),this.addEventListener("error",e)}function jg(e,t,l,a,n,i,r,c,s){var p=t.nodeType===9?t:t.ownerDocument;try{var y=p.startViewTransition({update:function(){var d=p.defaultView,b=d.navigation&&d.navigation.transition,H=p.fonts.status;a();var V=[];if(H==="loaded"&&(xg(p),p.fonts.status==="loading"&&V.push(p.fonts.ready)),H=V.length,e!==null)for(var se=e.suspenseyImages,g=0,o=0;o<se.length;o++){var v=se[o];if(!v.complete){var j=v.getBoundingClientRect();if(0<j.bottom&&0<j.right&&j.top<d.innerHeight&&j.left<d.innerWidth){if(g+=Xm(v),g>ku){V.length=H;break}v=new Promise(Sg.bind(v)),V.push(v)}}}if(0<V.length)return d=Promise.race([Promise.all(V),new Promise(function(Q){return setTimeout(Q,500)})]).then(n,n),(b?Promise.allSettled([b.finished,d]):d).then(i,i);if(n(),b)return b.finished.then(i,i);i()},types:l});p.__reactViewTransition=y;var N=[];return y.ready.then(function(){for(var d=p.documentElement.getAnimations({subtree:!0}),b=0;b<d.length;b++){var H=d[b],V=H.effect,se=V.pseudoElement;if(se!=null&&se.startsWith("::view-transition")){N.push(H),H=V.getKeyframes();for(var g=se=void 0,o=!0,v=0;v<H.length;v++){var j=H[v],Q=j.width;if(se===void 0)se=Q;else if(se!==Q){o=!1;break}if(Q=j.height,g===void 0)g=Q;else if(g!==Q){o=!1;break}delete j.width,delete j.height,j.transform==="none"&&delete j.transform}o&&se!==void 0&&g!==void 0&&(V.setKeyframes(H),o=getComputedStyle(V.target,V.pseudoElement),o.width!==se||o.height!==g)&&(o=H[0],o.width=se,o.height=g,o=H[H.length-1],o.width=se,o.height=g,V.setKeyframes(H))}}r()},function(d){p.__reactViewTransition===y&&(p.__reactViewTransition=null);try{typeof d=="object"&&d!==null&&d.name==="InvalidStateError"&&(d.message==="View transition was skipped because document visibility state is hidden."||d.message==="Skipping view transition because document visibility state has become hidden."||d.message==="Skipping view transition because viewport size changed."||d.message==="Transition was aborted because of invalid state")&&(d=null),d!==null&&s(d)}finally{a(),n(),r()}}),y.finished.finally(function(){for(var d=0;d<N.length;d++)N[d].cancel();p.__reactViewTransition===y&&(p.__reactViewTransition=null),c()}),y}catch{return a(),n(),r(),null}}function qa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}qa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:F({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},qa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,l=e.getAnimations({subtree:!0}),a=[],n=0;n<l.length;n++){var i=l[n].effect;i!==null&&i.target===e&&i.pseudoElement===t&&a.push(l[n])}return a},qa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function jm(e){return{name:e,group:new qa("group",e),imagePair:new qa("image-pair",e),old:new qa("old",e),new:new qa("new",e)}}function Vt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Vt.prototype.addEventListener=function(e,t,l){var a=null,n=null;if(!(l!=null&&typeof l!="boolean"&&(a=l.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Cm(i,e,t,l)===-1){var r=this,c=t;l!=null&&typeof l!="boolean"&&l.once===!0&&(c=function(s){r.removeEventListener(e,t,l),typeof t=="function"?t.call(this,s):t.handleEvent(s)}),a!==null&&(n=r.removeEventListener.bind(r,e,t,l),a.addEventListener("abort",n,{once:!0}),n=a.removeEventListener.bind(a,"abort",n)),a=Sn(l),i.push({type:e,listener:t,optionsOrUseCapture:l,attachedListener:c,cleanup:n}),h(this._fragmentFiber.child,!1,Ng,e,c,a)}this._eventListeners=i}};function Ng(e,t,l,a){return I(e).addEventListener(t,l,a),!1}Vt.prototype.removeEventListener=function(e,t,l){var a=this._eventListeners;if(a!==null&&(t=Cm(a,e,t,l),t!==-1)){var n=a[t];l=n.attachedListener;var i=n.cleanup;n=Sn(n.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Cg,e,l,n),a.splice(t,1),i!==null&&i()}};function Cg(e,t,l,a){return I(e).removeEventListener(t,l,a),!1}function Sn(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Nm(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Cm(e,t,l,a){if(e.length===0)return-1;a=Nm(a);for(var n=0;n<e.length;n++){var i=e[n];if(i.type===t&&i.listener===l&&Nm(i.optionsOrUseCapture)===a)return n}return-1}Vt.prototype.dispatchEvent=function(e){var t=A(this._fragmentFiber);if(t===null)return!0;t=I(t);var l=this._eventListeners;if(l!==null&&0<l.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(l)for(var n=0;n<l.length;n++){var i=l[n];a.addEventListener(i.type,i.attachedListener,Sn(i.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),l)for(n=0;n<l.length;n++)i=l[n],a.removeEventListener(i.type,i.attachedListener,Sn(i.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)},Vt.prototype.focus=function(e){h(this._fragmentFiber.child,!0,zm,e,void 0,void 0)};function zm(e,t){return e.tag===6?!1:(e=I(e),Hg(e,t))}Vt.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,ds,t,void 0,void 0);for(var l=t.length-1;0<=l&&!zm(t[l],e);l--);};function ds(e,t){return t.push(e),!1}Vt.prototype.blur=function(){var e=A(this._fragmentFiber);e!==null&&(e=I(e),e=hi(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,zg,e,void 0,void 0))};function zg(e,t){return e.tag===6?!1:(e=I(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Vt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Eg,e,void 0,void 0)};function Eg(e,t){return e.tag===6||(e=I(e),t.observe(e)),!1}Vt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Tg,e,void 0,void 0);for(var l=t=0;l<rl.length;l++){var a=rl[l];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):rl[t++]=a}rl.length=t}};function Tg(e,t){return e.tag===6||(e=I(e),t.unobserve(e)),!1}var rl=[],ms=!1;function wg(e,t,l){rl.push({fragmentInstance:e,observer:t,instance:l}),ms||(ms=!0,qg(function(){ms=!1;var a=rl;rl=[];for(var n=0;n<a.length;n++){var i=a[n];i.observer.unobserve(i.instance)}}))}Vt.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Og,e,void 0,void 0),e};function Og(e,t){if(e.tag===6){e=e.stateNode;var l=e.ownerDocument.createRange();l.selectNodeContents(e),t.push.apply(t,l.getClientRects())}else e=I(e),t.push.apply(t,e.getClientRects());return!1}Vt.prototype.getRootNode=function(e){var t=A(this._fragmentFiber);return t===null?this:I(t).getRootNode(e)},Vt.prototype.compareDocumentPosition=function(e){var t=A(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var l=[];h(this._fragmentFiber.child,!1,ds,l,void 0,void 0);var a=I(t);if(l.length===0){if(l=a,me(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(l=t)}t=this._fragmentFiber;var n=a=l.compareDocumentPosition(e);return l===e?n=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(l=pe(t)[1],l===null?n=Node.DOCUMENT_POSITION_PRECEDING:(e=I(l).compareDocumentPosition(e),n=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=I(l[0]),n=I(l[l.length-1]);var i=me(this._fragmentFiber)?t.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),c=n.compareDocumentPosition(e),s=r&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&i&&r&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||i&&n===e||s||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!i&&n===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ag(t,this._fragmentFiber,l[0],l[l.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ag(e,t,l,a,n){var i=pa(n);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(l=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){l=!0;break e}i=i.return}l=!1}return l}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=n.ownerDocument,n===i||n===i.documentElement||n===i.body;e:{for(i=t,t=A(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===l)&&(t=Ce(l,i,ie),t===null?t=!1:(h(t,!0,ue,i,l),i=he,he=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===a)&&(t=Ce(a,i,ie),t===null?t=!1:(h(t,!0,ge,i,a),i=he,Y=he=null,t=i!==null)),t):!1}function Em(e,t){var l=e.ownerDocument.createRange();l.selectNodeContents(e),e=l.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Vt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(m(566));var t=[];h(this._fragmentFiber.child,!1,ds,t,void 0,void 0);var l=e!==!1;if(t.length===0){var a=pe(this._fragmentFiber);if(a=l?a[1]||a[0]||A(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=I(a),Em(e,l);return}if(a=I(a),a.nodeType!==9){if(a.nodeType===11){l="host"in a?a.host:null,l!==null&&l.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=l?t.length-1:0;a!==(l?-1:t.length);){var n=t[a];n.tag===6?(n=I(n),Em(n,l)):I(n).scrollIntoView(e),a+=l?-1:1}};function _g(e,t){return e=I(e),Tm(e,t),!1}function Tm(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function wm(e,t){var l=t._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];e.addEventListener(n.type,n.attachedListener,Sn(n.optionsOrUseCapture))}e.nodeType!==3&&(l=t._observers,l!==null&&l.forEach(function(i){for(var r=0,c=0;c<rl.length;c++){var s=rl[c];(s.fragmentInstance!==t||s.observer!==i||s.instance!==e)&&(rl[r++]=s)}rl.length=r,i.observe(e)}),Tm(e,t))}function Dg(e,t){var l=t._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];e.removeEventListener(n.type,n.attachedListener,Sn(n.optionsOrUseCapture))}e.nodeType!==3&&(l=t._observers,l!==null&&l.forEach(function(i){typeof i.rootMargin=="string"?wg(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function hs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":hs(l),Ui(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Mg(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Dn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function Ug(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=It(e.nextSibling),e===null))return null;return e}function Om(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=It(e.nextSibling),e===null))return null;return e}function gs(e){return e.data==="$?"||e.data==="$~"}function ps(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rg(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vs=null;function Am(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return It(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function _m(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Hg(e,t){function l(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",l,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",l,!0)}return a}function qg(e){vm(function(){vm(function(t){return e(t)})})}function Dm(e,t,l){switch(t=hi(l),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function Mm(e,t,l){for(var a in l){var n=l[a];l.hasOwnProperty(a)&&n!=null&&Ue(e,t,a,null,dg,n)}l.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===sl&&(e.onclick=null),Ui(e)}function bs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ui(e)}var Pt=new Map,Um=new Set;function gi(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Bl=B.d;B.d={f:Bg,r:Yg,D:Gg,C:Qg,L:Xg,m:Vg,X:Lg,S:Zg,M:kg};function Bg(){var e=Bl.f(),t=qu();return e||t}function Yg(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?Hf(t):Bl.r(e)}var jn=typeof document>"u"?null:document;function Rm(e,t,l){var a=jn;if(a&&typeof t=="string"&&t){var n=Lt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Um.has(n)||(Um.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),mt(t,"link",e),nt(t),a.head.appendChild(t)))}}function Gg(e){Bl.D(e),Rm("dns-prefetch",e,null)}function Qg(e,t){Bl.C(e,t),Rm("preconnect",e,t)}function Xg(e,t,l){Bl.L(e,t,l);var a=jn;if(a&&e&&t){var n='link[rel="preload"][as="'+Lt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Lt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Lt(l.imageSizes)+'"]')):n+='[href="'+Lt(e)+'"]';var i=n;switch(t){case"style":i=Nn(e);break;case"script":i=Cn(e)}if(!(Pt.has(i)||(e=F({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Pt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(pi(i))||t==="script"&&a.querySelector(vi(i))))){var r=a.createElement("link");mt(r,"link",e),t==="style"&&(r[Mi]=!0,r.onload=r.onerror=function(){ks(r)}),nt(r),a.head.appendChild(r)}}}function Vg(e,t){Bl.m(e,t);var l=jn;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Lt(a)+'"][href="'+Lt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Cn(e)}if(!Pt.has(i)&&(e=F({rel:"modulepreload",href:e},t),Pt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(vi(i)))return}a=l.createElement("link"),mt(a,"link",e),nt(a),l.head.appendChild(a)}}}function Zg(e,t,l){Bl.S(e,t,l);var a=jn;if(a&&e){var n=Ga(a).hoistableStyles,i=Nn(e);t=t||"default";var r=n.get(i);if(!r){var c={loading:0,preload:null};if(r=a.querySelector(pi(i)))c.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Pt.get(i))&&ys(e,l);var s=r=a.createElement("link");nt(s),mt(s,"link",e),s._p=new Promise(function(p,y){s.onload=p,s.onerror=y}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Zu(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:c},n.set(i,r)}}}function Lg(e,t){Bl.X(e,t);var l=jn;if(l&&e){var a=Ga(l).hoistableScripts,n=Cn(e),i=a.get(n);i||(i=l.querySelector(vi(n)),i||(e=F({src:e,async:!0},t),(t=Pt.get(n))&&xs(e,t),i=l.createElement("script"),nt(i),mt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function kg(e,t){Bl.M(e,t);var l=jn;if(l&&e){var a=Ga(l).hoistableScripts,n=Cn(e),i=a.get(n);i||(i=l.querySelector(vi(n)),i||(e=F({src:e,async:!0,type:"module"},t),(t=Pt.get(n))&&xs(e,t),i=l.createElement("script"),nt(i),mt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Hm(e,t,l,a){var n=(n=Zt.current)?gi(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(l=Nn(l.href),t=Ga(n).hoistableStyles,a=t.get(l),a||(a={type:"style",instance:null,count:0,state:null},t.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Nn(l.href);var i=Ga(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(pi(e)))?i._p||(r.instance=i,r.state.loading=5):(i=Pt.get(e),i||(i={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Pt.set(e,i)),Kg(n,e,i,r.state))),t&&a===null)throw Error(m(528,""));return r}if(t&&a!==null)throw Error(m(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(l=Cn(l),t=Ga(n).hoistableScripts,a=t.get(l),a||(a={type:"script",instance:null,count:0,state:null},t.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function Nn(e){return'href="'+Lt(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function qm(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function Kg(e,t,l,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Mi]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[Mi]=!0,t.onload=t.onerror=ks.bind(null,t),mt(t,"link",l),nt(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function Cn(e){return'[src="'+Lt(e)+'"]'}function vi(e){return"script[async]"+e}function Bm(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Lt(l.href)+'"]');if(a)return t.instance=a,nt(a),a;var n=F({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),nt(a),mt(a,"style",n),Zu(a,l.precedence,e),t.instance=a;case"stylesheet":n=Nn(l.href);var i=e.querySelector(pi(n));if(i)return t.state.loading|=4,t.instance=i,nt(i),i;a=qm(l),(n=Pt.get(n))&&ys(a,n),i=(e.ownerDocument||e).createElement("link"),nt(i);var r=i;return r._p=new Promise(function(c,s){r.onload=c,r.onerror=s}),mt(i,"link",a),t.state.loading|=4,Zu(i,l.precedence,e),t.instance=i;case"script":return i=Cn(l.src),(n=e.querySelector(vi(i)))?(t.instance=n,nt(n),n):(a=l,(n=Pt.get(i))&&(a=F({},l),xs(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),nt(n),mt(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Zu(a,l.precedence,e));return t.instance}function Zu(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,r=0;r<a.length;r++){var c=a[r];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function ys(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lu=null;function Ym(e,t,l){if(Lu===null){var a=new Map,n=Lu=new Map;n.set(l,a)}else n=Lu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Dn]||i[ct]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var c=a.get(r);c?c.push(i):a.set(r,[i])}}return a}function Ss(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Jg(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gm(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Qm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Vm(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=Wg.bind(e),t.decode().then(e,e))}function $g(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Nn(a.href),i=t.querySelector(pi(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=bi.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,nt(i);return}i=t.ownerDocument||t,a=qm(a),(n=Pt.get(n))&&ys(a,n),i=i.createElement("link"),nt(i);var r=i;r._p=new Promise(function(c,s){r.onload=c,r.onerror=s}),mt(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=bi.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var ku=0;function Fg(e,t){return e.stylesheets&&e.count===0&&Ju(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ku===0&&(ku=62500*hg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ku?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Zm(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ju(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function bi(){this.count--,Zm(this)}function Wg(){this.imgCount--,Zm(this)}var Ku=null;function Ju(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ku=new Map,t.forEach(Ig,e),Ku=null,bi.call(e))}function Ig(e,t){if(!(t.state.loading&4)){var l=Ku.get(e);if(l)var a=l.get(null);else{l=new Map,Ku.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(l.set(r.dataset.precedence,r),a=r)}a&&l.set(null,a)}n=t.instance,r=n.getAttribute("data-precedence"),i=l.get(r)||a,i===a&&l.set(null,n),l.set(r,n),this.count++,a=bi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var zn={$$typeof:Ge,Provider:null,Consumer:null,_currentValue:Nt,_currentValue2:Nt,_threadCount:0};function Pg(e,t,l,a,n,i,r,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tr(0),this.hiddenUpdates=tr(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.transitionTypes=null,this.incompleteTransitions=new Map}function Lm(e,t,l,a,n,i,r,c,s,p,y,N){return e=new Pg(e,t,l,r,s,p,y,N,c),t=1,i===!0&&(t|=24),i=Et(3,null,null,t),e.current=i,i.stateNode=e,t=Hr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Gr(i),e}function km(e){return e?(e=Fa,e):Fa}function Km(e,t,l,a,n,i){n=km(n),a.context===null?a.context=n:a.pendingContext=n,a=$l(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Fl(e,a,t),l!==null&&(At(l,e,t),$n(l,e,t))}function Jm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function js(e,t){Jm(e,t),(e=e.alternate)&&Jm(e,t)}function $m(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&At(t,e,67108864),js(e,67108864)}}function Fm(e){if(e.tag===13||e.tag===31){var t=Xt();t=lr(t);var l=xa(e,t);l!==null&&At(l,e,t),js(e,t)}}var En=!0;function ep(e,t,l,a){var n=G.T;G.T=null;var i=B.p;try{B.p=2,Ns(e,t,l,a)}finally{B.p=i,G.T=n}}function tp(e,t,l,a){var n=G.T;G.T=null;var i=B.p;try{B.p=8,Ns(e,t,l,a)}finally{B.p=i,G.T=n}}function Ns(e,t,l,a){if(En){var n=Cs(a);if(n===null)ns(e,t,a,$u,l),Im(e,a);else if(ap(n,e,t,l,a))a.stopPropagation();else if(Im(e,a),t&4&&-1<lp.indexOf(e)){for(;n!==null;){var i=Ya(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=ga(i.pendingLanes);if(r!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var s=1<<31-Rt(r);c.entanglements[1]|=s,r&=~s}yl(i),(Ae&6)===0&&(Uu=we()+500,fi(0))}}break;case 31:case 13:c=xa(i,2),c!==null&&At(c,i,2),qu(),js(i,2)}if(i=Cs(a),i===null&&ns(e,t,a,$u,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else ns(e,t,a,null,l)}}function Cs(e){return e=sr(e),zs(e)}var $u=null;function zs(e){if($u=null,e=pa(e),e!==null){var t=O(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=M(t),e!==null)return e;e=null}else if(l===31){if(e=U(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $u=e,null}function Wm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case Ke:return 2;case tl:return 8;case wi:case gh:return 32;case Hs:return 268435456;default:return 32}default:return 32}}var Es=!1,ca=null,sa=null,oa=null,yi=new Map,xi=new Map,fa=[],lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Im(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":sa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function Si(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ya(t),t!==null&&$m(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function ap(e,t,l,a,n){switch(t){case"focusin":return ca=Si(ca,e,t,l,a,n),!0;case"dragenter":return sa=Si(sa,e,t,l,a,n),!0;case"mouseover":return oa=Si(oa,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return yi.set(i,Si(yi.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,xi.set(i,Si(xi.get(i)||null,e,t,l,a,n)),!0}return!1}function Pm(e){var t=pa(e.target);if(t!==null){var l=O(t);if(l!==null){if(t=l.tag,t===13){if(t=M(l),t!==null){e.blockedOn=t,Vs(e.priority,function(){Fm(l)});return}}else if(t===31){if(t=U(l),t!==null){e.blockedOn=t,Vs(e.priority,function(){Fm(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Cs(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);cr=a,l.target.dispatchEvent(a),cr=null}else return t=Ya(l),t!==null&&$m(t),e.blockedOn=l,!1;t.shift()}return!0}function eh(e,t,l){Fu(e)&&l.delete(t)}function np(){Es=!1,ca!==null&&Fu(ca)&&(ca=null),sa!==null&&Fu(sa)&&(sa=null),oa!==null&&Fu(oa)&&(oa=null),yi.forEach(eh),xi.forEach(eh)}function Wu(e,t){e.blockedOn===t&&(e.blockedOn=null,Es||(Es=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,np)))}var Iu=null;function th(e){Iu!==e&&(Iu=e,S.unstable_scheduleCallback(S.unstable_NormalPriority,function(){Iu===e&&(Iu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(zs(a||l)===null)continue;break}var i=Ya(l);i!==null&&(e.splice(t,3),t-=3,rc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Tn(e){function t(s){return Wu(s,e)}ca!==null&&Wu(ca,e),sa!==null&&Wu(sa,e),oa!==null&&Wu(oa,e),yi.forEach(t),xi.forEach(t);for(var l=0;l<fa.length;l++){var a=fa[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<fa.length&&(l=fa[0],l.blockedOn===null);)Pm(l),l.blockedOn===null&&fa.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],r=n[zt]||null;if(typeof i=="function")r||th(l);else if(r){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[zt]||null)c=r.formAction;else if(zs(n)!==null)continue}else c=r.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),th(l)}}}function lh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ts(e){this._internalRoot=e}Pu.prototype.render=Ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var l=t.current,a=Xt();Km(l,a,e,t,null,null)},Pu.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Km(e.current,2,null,e,null,null),qu(),t[Ba]=null}};function Pu(e){this._internalRoot=e}Pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<fa.length&&t!==0&&t<fa[l].priority;l++);fa.splice(l,0,e),l===0&&Pm(e)}};var ah=X.version;if(ah!=="19.3.0")throw Error(m(527,ah,"19.3.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=k(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var ip={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!er.isDisabled&&er.supportsFiber)try{On=er.inject(ip),Ut=er}catch{}}return Ni.createRoot=function(e,t){if(!D(e))throw Error(m(299));var l=!1,a="",n=kf,i=Kf,r=Jf;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Lm(e,1,!1,null,null,l,a,null,n,i,r,lh),e[Ba]=t.current,as(e),new Ts(t)},Ni.hydrateRoot=function(e,t,l){if(!D(e))throw Error(m(299));var a=!1,n="",i=kf,r=Kf,c=Jf,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(r=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),t=Lm(e,1,!0,t,l??null,a,n,s,i,r,c,lh),t.context=km(null),l=t.current,a=Xt(),a=lr(a),n=$l(a),n.callback=null,Fl(l,n,a),l=a,t.current.lanes=l,_n(t,l),yl(t),e[Ba]=t.current,as(e),new Pu(t)},Ni.version="19.3.0",Ni}var mh;function gp(){if(mh)return As.exports;mh=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(X){console.error(X)}}return S(),As.exports=hp(),As.exports}var pp=gp();const hh=T.createContext(),_t=()=>T.useContext(hh),ma="http://localhost:5000/api",Us={SEEDORA10:{type:"percent",value:10,code:"SEEDORA10",desc:"10% OFF on all seeds"},ORGANIC50:{type:"flat",value:50,code:"ORGANIC50",desc:"Flat ₹50 OFF on cart"},WELCOME20:{type:"percent",value:20,code:"WELCOME20",desc:"20% OFF for new gardeners"}},vp=({children:S})=>{const[X,E]=T.useState([]),[m,D]=T.useState(!0),[O,M]=T.useState([]),[U,Z]=T.useState([]),[k,z]=T.useState(null),[h,A]=T.useState(null),[me,pe]=T.useState([]),[K,I]=T.useState(null),[he,Y]=T.useState(null),[ue,ge]=T.useState(""),[ie,Ce]=T.useState("All"),[F,ae]=T.useState(1e3),[oe,P]=T.useState("default"),[Ye,He]=T.useState(!1),[gt,$e]=T.useState(!1),[Ge,w]=T.useState(!1),[W,R]=T.useState("login"),[ye,re]=T.useState(!1),[lt,et]=T.useState(!1),[Dt,f]=T.useState(!1),[C,x]=T.useState(!1),[q,ee]=T.useState(null),[ve,fe]=T.useState(null);T.useEffect(()=>{const L=localStorage.getItem("seedoraCart");if(L)try{M(JSON.parse(L))}catch{}const J=localStorage.getItem("seedoraWishlist");if(J)try{Z(JSON.parse(J))}catch{}const te=localStorage.getItem("seedoraToken"),ze=localStorage.getItem("seedoraUser");if(te&&ze)try{A(te),z(JSON.parse(ze))}catch{}},[]),T.useEffect(()=>{localStorage.setItem("seedoraCart",JSON.stringify(O))},[O]),T.useEffect(()=>{localStorage.setItem("seedoraWishlist",JSON.stringify(U))},[U]);const G=T.useCallback(async()=>{D(!0);try{const L=new URLSearchParams;ue&&L.append("search",ue),ie&&ie!=="All"&&L.append("category",ie),F&&L.append("maxPrice",F),oe&&oe!=="default"&&L.append("sortBy",oe);const J=await fetch(`${ma}/products?${L.toString()}`);if(J.ok){const te=await J.json();if(Array.isArray(te)){E(te),D(!1);return}}}catch(L){console.warn("API product fetch failed:",L)}E([]),D(!1)},[ue,ie,F,oe]);T.useEffect(()=>{G()},[G]);const B=(L,J="success")=>{I({message:L,type:J}),setTimeout(()=>{I(null)},3500)},Nt=L=>{const J=L.trim().toUpperCase();return Us[J]?(Y(Us[J]),B(`Coupon '${J}' applied successfully!`,"success"),{success:!0}):(B("Invalid or expired coupon code.","error"),{success:!1,error:"Invalid coupon code"})},xl=()=>{Y(null),B("Coupon removed.","info")},el=async(L,J)=>{try{const te=await fetch(`${ma}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:L,password:J})}),ze=await te.json();if(!te.ok)throw new Error(ze.message||"Login failed");return z(ze),A(ze.token),localStorage.setItem("seedoraToken",ze.token),localStorage.setItem("seedoraUser",JSON.stringify(ze)),B(`Welcome back to Seedora, ${ze.name}!`),w(!1),cl(ze.token),{success:!0}}catch(te){return B(te.message,"error"),{success:!1,error:te.message}}},vt=async(L,J,te,ze,we)=>{try{const at=await fetch(`${ma}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:L,email:J,phone:te,password:ze,confirmPassword:we})}),Ke=await at.json();if(!at.ok)throw new Error(Ke.message||"Registration failed");return z(Ke),A(Ke.token),localStorage.setItem("seedoraToken",Ke.token),localStorage.setItem("seedoraUser",JSON.stringify(Ke)),B(`Account created! Welcome to Seedora, ${Ke.name}.`),w(!1),{success:!0}}catch(at){return B(at.message,"error"),{success:!1,error:at.message}}},de=()=>{z(null),A(null),pe([]),localStorage.removeItem("seedoraToken"),localStorage.removeItem("seedoraUser"),re(!1),x(!1),f(!1),B("Logged out successfully.","info")},Te=async(L,J)=>{if(h)try{const te=await fetch(`${ma}/auth/profile`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify({name:L,phone:J})}),ze=await te.json();if(!te.ok)throw new Error(ze.message);const we={...k,...ze};return z(we),localStorage.setItem("seedoraUser",JSON.stringify(we)),B("Profile updated successfully!"),{success:!0}}catch(te){return B(te.message,"error"),{success:!1,error:te.message}}},Ct=async(L,J)=>{if(h)try{const te=await fetch(`${ma}/auth/change-password`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify({oldPassword:L,newPassword:J})}),ze=await te.json();if(!te.ok)throw new Error(ze.message);return B("Password updated successfully!"),{success:!0}}catch(te){return B(te.message,"error"),{success:!1,error:te.message}}},Sl=(L,J=1)=>{const te=L._id||L.id,ze=L.stock!==void 0?L.stock:50;M(we=>{const at=we.find(tl=>(tl._id||tl.id)===te);return(at?at.quantity:0)+J>ze?(B(`Only ${ze} items in stock for ${L.name}!`,"error"),we):at?we.map(tl=>(tl._id||tl.id)===te?{...tl,quantity:tl.quantity+J}:tl):[...we,{...L,id:te,quantity:J}]}),B(`Added ${L.name} to cart!`),He(!0)},Zt=L=>{M(J=>J.filter(te=>(te._id||te.id)!==L)),B("Item removed from cart.","info")},Yl=(L,J)=>{M(te=>{const ze=te.find(Ke=>(Ke._id||Ke.id)===L);if(!ze)return te;const we=ze.quantity+J,at=ze.stock!==void 0?ze.stock:50;return J>0&&we>at?(B(`Maximum available stock reached (${at}).`,"info"),te):we<=0?te.filter(Ke=>(Ke._id||Ke.id)!==L):te.map(Ke=>(Ke._id||Ke.id)===L?{...Ke,quantity:we}:Ke)})},jl=()=>{M([]),Y(null)},_=L=>{const J=L._id||L.id;qe(J)?(Z(te=>te.filter(ze=>(ze._id||ze.id)!==J)),B("Removed from wishlist.","info")):(Z(te=>[...te,{...L,id:J}]),B(`Added ${L.name} to wishlist!`))},qe=L=>U.some(J=>(J._id||J.id)===L),Mt=async(L,J,te={})=>{if(!k||!h)return w(!0),R("login"),B("Please login to place your order.","info"),{success:!1,requireAuth:!0};try{const ze={items:O,shippingAddress:L,paymentMethod:J,upiId:te.upiId||"",couponCode:he?he.code:"",discountAmount:Nl},we=await fetch(`${ma}/orders`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify(ze)}),at=await we.json();if(!we.ok)throw new Error(at.message||"Failed to place order");return fe(at),jl(),G(),cl(h),B("Order placed successfully! Thank you for choosing Seedora.","success"),{success:!0,order:at}}catch(ze){return B(ze.message,"error"),{success:!1,error:ze.message}}},cl=async(L=h)=>{if(L)try{const J=await fetch(`${ma}/orders/my-orders`,{headers:{Authorization:`Bearer ${L}`}});if(J.ok){const te=await J.json();pe(te)}}catch(J){console.error("Error fetching orders:",J)}},zi=async L=>{if(h)try{const J=await fetch(`${ma}/orders/${L}/cancel`,{method:"PUT",headers:{Authorization:`Bearer ${h}`}}),te=await J.json();if(!J.ok)throw new Error(te.message);return B("Order cancelled."),cl(h),G(),{success:!0}}catch(J){return B(J.message,"error"),{success:!1,error:J.message}}};T.useEffect(()=>{h&&cl(h)},[h]);const bt=O.reduce((L,J)=>L+J.price*J.quantity,0);let Nl=0;he&&bt>0&&(he.type==="percent"?Nl=Math.round(bt*he.value/100):he.type==="flat"&&(Nl=Math.min(bt,he.value)));const ha=Math.max(0,bt-Nl),Ei=ha>=499||bt===0?0:49,Ti=ha+Ei,wn=O.reduce((L,J)=>L+J.quantity,0);return u.jsx(hh.Provider,{value:{products:X,loadingProducts:m,fetchProducts:G,cart:O,addToCart:Sl,removeFromCart:Zt,updateQuantity:Yl,clearCart:jl,rawSubtotal:bt,calculatedDiscount:Nl,discountedSubtotal:ha,deliveryCharge:Ei,finalCartTotal:Ti,cartCount:wn,wishlist:U,toggleWishlist:_,isInWishlist:qe,wishlistCount:U.length,appliedCoupon:he,applyCoupon:Nt,removeCoupon:xl,availableCoupons:Us,user:k,token:h,login:el,register:vt,logout:de,updateProfile:Te,changePassword:Ct,orders:me,fetchMyOrders:cl,placeOrder:Mt,cancelUserOrder:zi,lastConfirmedOrder:ve,setLastConfirmedOrder:fe,notification:K,showNotification:B,searchQuery:ue,setSearchQuery:ge,selectedCategory:ie,setSelectedCategory:Ce,maxPriceFilter:F,setMaxPriceFilter:ae,sortBy:oe,setSortBy:P,isCartOpen:Ye,openCart:()=>He(!0),closeCart:()=>He(!1),isWishlistOpen:gt,openWishlist:()=>$e(!0),closeWishlist:()=>$e(!1),isAuthOpen:Ge,authMode:W,openAuth:(L="login")=>{R(L),w(!0)},closeAuth:()=>w(!1),isProfileOpen:ye,openProfile:()=>re(!0),closeProfile:()=>re(!1),isCheckoutOpen:lt,openCheckout:()=>et(!0),closeCheckout:()=>et(!1),isOrdersOpen:Dt,openOrders:()=>{h?(cl(h),f(!0)):openAuth("login")},closeOrders:()=>f(!1),isAdminOpen:C,openAdmin:()=>x(!0),closeAdmin:()=>x(!1),selectedProductDetails:q,openProductDetails:L=>ee(L),closeProductDetails:()=>ee(null)},children:S})},bp=()=>{const{cartCount:S,openCart:X,wishlistCount:E,openWishlist:m,user:D,openAuth:O,openProfile:M,openOrders:U,openAdmin:Z,searchQuery:k,setSearchQuery:z,setSelectedCategory:h}=_t(),[A,me]=T.useState(!1),pe=I=>{I.preventDefault();const he=document.getElementById("products");he&&he.scrollIntoView({behavior:"smooth"})},K=I=>{h(I);const he=document.getElementById("products");he&&he.scrollIntoView({behavior:"smooth"}),me(!1)};return u.jsxs("nav",{className:"navbar",children:[u.jsxs("div",{className:"container navbar-content",children:[u.jsxs("div",{className:"logo",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[u.jsx("span",{className:"logo-icon",children:"🌱"}),u.jsx("span",{className:"logo-text",children:"Seedora"})]}),u.jsxs("form",{className:"nav-search",onSubmit:pe,children:[u.jsx("input",{type:"text",placeholder:"Search Seedora organic seeds...",value:k,onChange:I=>z(I.target.value)}),u.jsx("button",{type:"submit",className:"search-btn",children:"🔍"})]}),u.jsxs("div",{className:"nav-actions",children:[D?u.jsxs("div",{className:"user-menu",children:[u.jsxs("button",{className:"nav-btn user-btn",onClick:M,children:["👤 ",u.jsx("span",{className:"mobile-hide",children:D.name.split(" ")[0]})]}),u.jsxs("button",{className:"nav-btn",onClick:U,title:"My Orders",children:["📦 ",u.jsx("span",{className:"mobile-hide",children:"Orders"})]}),D.role==="admin"&&u.jsxs("button",{className:"nav-btn admin-badge",onClick:Z,title:"Admin Panel",children:["⚙️ ",u.jsx("span",{className:"mobile-hide",children:"Admin"})]})]}):u.jsxs("div",{className:"auth-btns",children:[u.jsx("button",{className:"nav-btn-link",onClick:()=>O("login"),children:"Login"}),u.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>O("register"),children:"Register"})]}),u.jsxs("button",{className:"nav-btn icon-btn",onClick:m,title:"Wishlist",children:["❤️",E>0&&u.jsx("span",{className:"badge",children:E})]}),u.jsxs("button",{className:"nav-btn icon-btn cart-btn-highlight",onClick:X,title:"Cart",children:["🛒",S>0&&u.jsx("span",{className:"badge",children:S})]}),u.jsx("button",{className:"mobile-toggle",onClick:()=>me(!A),children:"☰"})]})]}),u.jsxs("div",{className:`mobile-nav-drawer ${A?"open":""}`,children:[u.jsxs("form",{className:"mobile-search",onSubmit:pe,children:[u.jsx("input",{type:"text",placeholder:"Search seeds...",value:k,onChange:I=>z(I.target.value)}),u.jsx("button",{type:"submit",children:"🔍"})]}),u.jsxs("div",{className:"mobile-nav-links",children:[u.jsx("h4",{children:"Seed Categories"}),u.jsx("button",{onClick:()=>K("All"),children:"All Seeds"}),u.jsx("button",{onClick:()=>K("Vegetable Seeds"),children:"Vegetable Seeds"}),u.jsx("button",{onClick:()=>K("Flower Seeds"),children:"Flower Seeds"}),u.jsx("button",{onClick:()=>K("Herb Seeds"),children:"Herb Seeds"}),u.jsx("button",{onClick:()=>K("Organic Seeds"),children:"Organic Seeds"}),u.jsx("button",{onClick:()=>K("Fruit Seeds"),children:"Fruit Seeds"}),u.jsx("button",{onClick:()=>K("Gardening Seeds"),children:"Gardening Seeds"})]})]}),u.jsx("style",{jsx:!0,children:`
        .navbar {
          background-color: var(--color-surface);
          box-shadow: var(--shadow-sm);
          padding: 0.85rem 0;
          position: sticky;
          top: 0;
          z-index: 900;
          transition: all 0.3s ease;
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }
        .logo {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          letter-spacing: -0.5px;
          user-select: none;
        }
        .logo-icon {
          font-size: 1.8rem;
          transform: rotate(-10deg);
          transition: transform 0.3s;
        }
        .logo:hover .logo-icon {
          transform: rotate(10deg) scale(1.1);
        }
        .nav-search {
          display: flex;
          align-items: center;
          flex: 1;
          max-width: 480px;
          background-color: var(--color-bg);
          border-radius: 999px;
          padding: 0.35rem 0.5rem 0.35rem 1.2rem;
          border: 1px solid rgba(46, 125, 50, 0.2);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .nav-search:focus-within {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.15);
        }
        .nav-search input {
          border: none;
          background: transparent;
          width: 100%;
          outline: none;
          font-size: 0.95rem;
          color: var(--color-text);
        }
        .search-btn {
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .search-btn:hover {
          background: var(--color-primary-dark);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .user-menu {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .auth-btns {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .nav-btn-link {
          background: transparent;
          border: none;
          font-weight: 600;
          color: var(--color-primary);
          padding: 0.5rem 0.75rem;
          cursor: pointer;
        }
        .nav-btn-link:hover {
          text-decoration: underline;
        }
        .btn-sm {
          padding: 0.45rem 1rem;
          font-size: 0.88rem;
          border-radius: 999px;
        }
        .nav-btn {
          background: transparent;
          font-size: 0.95rem;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.8rem;
          border-radius: var(--radius);
          cursor: pointer;
          position: relative;
          transition: background 0.2s, transform 0.15s;
          font-weight: 500;
        }
        .nav-btn:hover {
          background-color: var(--color-bg);
          transform: translateY(-1px);
        }
        .cart-btn-highlight {
          background-color: var(--color-bg);
          border: 1px solid rgba(46, 125, 50, 0.2);
        }
        .badge {
          background-color: var(--color-accent);
          color: white;
          font-size: 0.75rem;
          padding: 0.15rem 0.45rem;
          border-radius: 999px;
          font-weight: bold;
          position: relative;
          top: -2px;
        }
        .admin-badge {
          color: #d97706;
          font-weight: 700;
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          font-size: 1.5rem;
          border: none;
          cursor: pointer;
          color: var(--color-text);
          padding: 0.3rem;
        }
        .mobile-nav-drawer {
          display: none;
          background: var(--color-surface);
          border-top: 1px solid #e5e7eb;
          padding: 1rem;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-nav-drawer.open {
          display: flex;
        }
        .mobile-search {
          display: flex;
          gap: 0.5rem;
        }
        .mobile-search input {
          flex: 1;
          padding: 0.6rem 1rem;
          border: 1px solid #ccc;
          border-radius: var(--radius);
        }
        .mobile-search button {
          padding: 0.6rem 1rem;
          background: var(--color-primary);
          color: white;
          border-radius: var(--radius);
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-nav-links h4 {
          color: var(--color-text-light);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .mobile-nav-links button {
          background: transparent;
          text-align: left;
          padding: 0.5rem;
          font-size: 0.95rem;
          color: var(--color-text);
          border-radius: 4px;
        }
        .mobile-nav-links button:hover {
          background: var(--color-bg);
          color: var(--color-primary);
        }

        @media (max-width: 850px) {
          .nav-search {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-hide {
            display: none;
          }
        }
      `})]})},yp=()=>u.jsxs("section",{className:"hero",children:[u.jsxs("div",{className:"container hero-content",children:[u.jsx("div",{className:"hero-badge",children:"🌱 Seedora — 100% Certified Organic & Non-GMO"}),u.jsx("h1",{children:"Grow Your Own Organic Paradise with Seedora"}),u.jsx("p",{children:"Nourish your family with fresh vegetables, fragrant culinary herbs, and vibrant flowers grown directly from high-germination premium seeds."}),u.jsx("div",{className:"hero-actions",children:u.jsx("button",{className:"btn btn-accent btn-lg hero-cta",onClick:()=>document.getElementById("products").scrollIntoView({behavior:"smooth"}),children:"Explore Seed Catalog →"})}),u.jsxs("div",{className:"hero-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-num",children:"98%+"}),u.jsx("span",{className:"stat-lbl",children:"Lab Germination Rate"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-num",children:"100%"}),u.jsx("span",{className:"stat-lbl",children:"Open-Pollinated"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-num",children:"Free"}),u.jsx("span",{className:"stat-lbl",children:"Shipping over ₹499"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .hero {
          background: linear-gradient(180deg, rgba(27, 67, 50, 0.75) 0%, rgba(27, 67, 50, 0.88) 100%), url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1400');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 5.5rem 1rem 4.5rem 1rem;
          text-align: center;
          position: relative;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          padding: 0.4rem 1rem;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .hero-content h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.15;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .hero-content p {
          font-size: 1.15rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          color: #d8f3dc;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        .hero-actions {
          margin-bottom: 3rem;
        }
        .hero-cta {
          padding: 0.9rem 2.2rem;
          font-size: 1.05rem;
          border-radius: 999px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.25);
        }
        .hero-stats {
          display: flex;
          gap: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 2rem;
          width: 100%;
          justify-content: center;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-num {
          font-size: 1.8rem;
          font-weight: 800;
          color: #a7f3d0;
        }
        .stat-lbl {
          font-size: 0.82rem;
          color: #d8f3dc;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 650px) {
          .hero-content h1 {
            font-size: 2.1rem;
          }
          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `})]}),xp=[{title:"Vegetable Seeds",icon:"🥦",desc:"Nutritious & delicious veggies",image:"https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=400"},{title:"Flower Seeds",icon:"🌻",desc:"Vibrant blooms & pollinators",image:"https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&q=80&w=400"},{title:"Herb Seeds",icon:"🌿",desc:"Fresh culinary & aromatic herbs",image:"https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&q=80&w=400"},{title:"Organic Seeds",icon:"🏷️",desc:"100% Certified Non-GMO",image:"https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?auto=format&fit=crop&q=80&w=400"},{title:"Fruit Seeds",icon:"🍓",desc:"Juicy berries & watermelons",image:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400"},{title:"Flowering Plants",icon:"🌺",desc:"Perennials & house blooms",image:"https://images.unsplash.com/photo-1597826368522-9f4a332c3f81?auto=format&fit=crop&q=80&w=400"},{title:"Gardening Seeds",icon:"🌱",desc:"Easy-grow beginner packs",image:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=400"}],Sp=()=>{const{setSelectedCategory:S}=_t(),X=E=>{S(E);const m=document.getElementById("products");m&&m.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{className:"categories-section container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{children:"Explore Seed Categories"}),u.jsx("p",{children:"Discover non-GMO, high-germination premium seeds tailored for your garden"})]}),u.jsx("div",{className:"categories-grid",children:xp.map(E=>u.jsxs("div",{className:"category-card",onClick:()=>X(E.title),children:[u.jsx("div",{className:"card-bg",style:{backgroundImage:`url(${E.image})`}}),u.jsx("div",{className:"card-overlay"}),u.jsxs("div",{className:"card-info",children:[u.jsx("span",{className:"cat-icon",children:E.icon}),u.jsx("h3",{children:E.title}),u.jsx("p",{children:E.desc}),u.jsx("span",{className:"browse-link",children:"Shop Category →"})]})]},E.title))}),u.jsx("style",{jsx:!0,children:`
        .categories-section {
          padding: 3.5rem 1rem 1.5rem 1rem;
        }
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .section-header h2 {
          font-size: 2rem;
          color: var(--color-text);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .section-header p {
          color: var(--color-text-light);
          font-size: 1rem;
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .category-card {
          position: relative;
          height: 180px;
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .category-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }
        .card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }
        .category-card:hover .card-bg {
          transform: scale(1.1);
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(27, 67, 50, 0.4) 0%, rgba(27, 67, 50, 0.85) 100%);
        }
        .card-info {
          position: relative;
          z-index: 10;
          padding: 1.25rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: white;
        }
        .cat-icon {
          font-size: 1.8rem;
          margin-bottom: 0.3rem;
        }
        .card-info h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .card-info p {
          font-size: 0.82rem;
          opacity: 0.9;
          margin-bottom: 0.5rem;
        }
        .browse-link {
          font-size: 0.82rem;
          font-weight: 600;
          color: #a7f3d0;
          transition: transform 0.2s;
        }
        .category-card:hover .browse-link {
          transform: translateX(4px);
        }
      `})]})},jp=({product:S,onViewDetails:X})=>{const{addToCart:E,toggleWishlist:m,isInWishlist:D}=_t(),O=S._id||S.id,M=S.stock!==void 0?S.stock:50,U=M<=0,Z=Number(S.price),k=S.originalPrice?Number(S.originalPrice):Math.round(Z*1.4),z=k>Z?Math.round((k-Z)/k*100):0,h=(A=4.5)=>{const me=Math.floor(A),pe=A%1>=.5;return u.jsxs("span",{className:"star-rating",title:`${A} out of 5 stars`,children:["★".repeat(me),pe&&"½",u.jsxs("span",{className:"rating-num",children:["(",A,")"]})]})};return u.jsxs("div",{className:`product-card ${U?"out-of-stock-card":""}`,children:[u.jsxs("div",{className:"card-image",onClick:()=>X(S),children:[u.jsx("img",{src:S.image,alt:S.name,loading:"lazy",onError:A=>{A.target.onerror=null,A.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E"}}),u.jsxs("div",{className:"card-badges",children:[z>0&&u.jsxs("span",{className:"badge-pill badge-discount",children:[z,"% OFF"]}),M>0&&M<=10&&u.jsxs("span",{className:"badge-pill badge-warning",children:["Only ",M," Left!"]}),U&&u.jsx("span",{className:"badge-pill badge-danger",children:"Out of Stock"}),S.brand&&u.jsx("span",{className:"badge-pill badge-info",children:S.brand})]}),u.jsx("button",{className:`wishlist-toggle ${D(O)?"active":""}`,onClick:A=>{A.stopPropagation(),m(S)},title:D(O)?"Remove from wishlist":"Add to wishlist",children:D(O)?"❤️":"🤍"})]}),u.jsxs("div",{className:"card-content",children:[u.jsxs("div",{className:"card-header",children:[u.jsx("span",{className:"category",children:S.category}),u.jsxs("div",{className:"price-box",children:[k>Z&&u.jsxs("span",{className:"orig-price",children:["₹",k]}),u.jsxs("span",{className:"price",children:["₹",Z]})]})]}),u.jsx("h3",{className:"product-title",onClick:()=>X(S),children:S.name}),u.jsx("p",{className:"short-desc",children:S.description}),u.jsx("div",{className:"card-footer-meta",children:h(S.rating)}),u.jsxs("div",{className:"card-actions",children:[u.jsx("button",{className:"btn btn-outline btn-sm view-btn",onClick:()=>X(S),children:"View Details"}),u.jsx("button",{className:"btn btn-primary btn-sm add-btn",disabled:U,onClick:A=>{A.stopPropagation(),E(S)},children:U?"Out of Stock":"Add to Cart"})]})]}),u.jsx("style",{jsx:!0,children:`
        .product-card {
          background: white;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }
        .card-image {
          height: 210px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background-color: #f8fafc;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .product-card:hover .card-image img {
          transform: scale(1.06);
        }
        .card-badges {
          position: absolute;
          top: 0.6rem;
          left: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          z-index: 5;
        }
        .badge-pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .badge-discount { background-color: #dc2626; }
        .badge-warning { background-color: #f59e0b; }
        .badge-danger { background-color: #ef4444; }
        .badge-info { background-color: #2E7D32; opacity: 0.9; }

        .wishlist-toggle {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.1rem;
          transition: transform 0.2s, background 0.2s;
          box-shadow: var(--shadow-sm);
          z-index: 10;
        }
        .wishlist-toggle:hover {
          transform: scale(1.15);
          background: white;
        }
        .card-content {
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }
        .category {
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .price-box {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }
        .orig-price {
          font-size: 0.85rem;
          color: #94a3b8;
          text-decoration: line-through;
        }
        .price {
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--color-text);
        }
        .product-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 0.4rem;
          cursor: pointer;
          line-height: 1.3;
          transition: color 0.2s;
        }
        .product-title:hover {
          color: var(--color-primary);
        }
        .short-desc {
          font-size: 0.85rem;
          color: var(--color-text-light);
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.4;
        }
        .card-footer-meta {
          margin-bottom: 1rem;
          font-size: 0.85rem;
        }
        .star-rating {
          color: #f59e0b;
          font-weight: bold;
        }
        .rating-num {
          color: var(--color-text-light);
          font-size: 0.8rem;
          margin-left: 0.25rem;
        }
        .card-actions {
          margin-top: auto;
          display: flex;
          gap: 0.5rem;
        }
        .view-btn {
          flex: 1;
          padding: 0.5rem;
          font-size: 0.85rem;
        }
        .add-btn {
          flex: 1.2;
          padding: 0.5rem;
          font-size: 0.85rem;
        }
        .add-btn:disabled {
          background-color: #cbd5e1;
          cursor: not-allowed;
        }
      `})]})},Np=["All","Vegetable Seeds","Flower Seeds","Fruit Seeds","Herb Seeds","Organic Seeds","Flowering Plants","Gardening Seeds"],Cp=()=>{const{products:S,loadingProducts:X,selectedCategory:E,setSelectedCategory:m,searchQuery:D,setSearchQuery:O,maxPriceFilter:M,setMaxPriceFilter:U,sortBy:Z,setSortBy:k,openProductDetails:z}=_t();return u.jsxs("div",{id:"products",className:"container product-section",children:[u.jsxs("div",{className:"section-title",children:[u.jsx("h2",{children:"Seedora Organic Seed Catalog"}),u.jsx("p",{children:"100% Non-GMO, Open-Pollinated & High-Germination Premium Seeds"})]}),u.jsxs("div",{className:"filter-panel",children:[u.jsx("div",{className:"filter-categories",children:Np.map(h=>u.jsx("button",{className:`filter-btn ${E===h?"active":""}`,onClick:()=>m(h),children:h},h))}),u.jsxs("div",{className:"filter-controls",children:[u.jsxs("div",{className:"search-filter-box",children:[u.jsx("span",{className:"search-icon",children:"🔍"}),u.jsx("input",{type:"text",placeholder:"Search seeds by name, category...",value:D,onChange:h=>O(h.target.value)}),D&&u.jsx("button",{className:"clear-search",onClick:()=>O(""),children:"×"})]}),u.jsxs("div",{className:"price-filter-box",children:[u.jsxs("label",{children:["Max Price: ",u.jsxs("strong",{children:["₹",M]})]}),u.jsx("input",{type:"range",min:"50",max:"1000",step:"10",value:M,onChange:h=>U(Number(h.target.value))})]}),u.jsxs("div",{className:"sort-filter-box",children:[u.jsx("label",{children:"Sort By:"}),u.jsxs("select",{value:Z,onChange:h=>k(h.target.value),children:[u.jsx("option",{value:"default",children:"Featured / Default"}),u.jsx("option",{value:"price_asc",children:"Price: Low to High"}),u.jsx("option",{value:"price_desc",children:"Price: High to Low"}),u.jsx("option",{value:"rating",children:"Highest Rated"}),u.jsx("option",{value:"name",children:"Alphabetical (A-Z)"})]})]})]})]}),X?u.jsxs("div",{className:"loading-state",children:[u.jsx("div",{className:"spinner"}),u.jsx("p",{children:"Loading organic seeds from catalog..."})]}):S.length===0?u.jsxs("div",{className:"empty-products-state",children:[u.jsx("span",{className:"empty-icon",children:"🌱"}),u.jsx("h3",{children:"No seeds match your criteria"}),u.jsx("p",{children:"Try clearing your search query or adjusting category and price filters."}),u.jsx("button",{className:"btn btn-outline",onClick:()=>{O(""),m("All"),U(1e3),k("default")},children:"Reset Filters"})]}):u.jsx("div",{className:"product-grid",children:S.map(h=>u.jsx(jp,{product:h,onViewDetails:z},h._id||h.id))}),u.jsx("style",{jsx:!0,children:`
        .product-section {
          padding: 2.5rem 1rem;
        }
        .section-title {
          text-align: center;
          margin-bottom: 2rem;
        }
        .section-title h2 {
          font-size: 2.2rem;
          color: var(--color-text);
          font-weight: 800;
        }
        .section-title p {
          color: var(--color-text-light);
          font-size: 1.05rem;
        }
        .filter-panel {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .filter-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          justify-content: center;
        }
        .filter-btn {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: var(--color-text);
          padding: 0.45rem 1.1rem;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .filter-btn:hover {
          background: var(--color-bg);
          color: var(--color-primary);
          border-color: var(--color-primary);
        }
        .filter-btn.active {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
          box-shadow: var(--shadow-sm);
        }
        .filter-controls {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
        }
        .search-filter-box {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 220px;
        }
        .search-icon {
          position: absolute;
          left: 0.75rem;
          font-size: 0.9rem;
          color: #94a3b8;
        }
        .search-filter-box input {
          width: 100%;
          padding: 0.5rem 2rem 0.5rem 2.2rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.9rem;
        }
        .clear-search {
          position: absolute;
          right: 0.6rem;
          background: none;
          border: none;
          font-size: 1.1rem;
          color: #94a3b8;
          cursor: pointer;
        }
        .price-filter-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
        }
        .price-filter-box input[type="range"] {
          accent-color: var(--color-primary);
          cursor: pointer;
        }
        .sort-filter-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }
        .sort-filter-box select {
          padding: 0.5rem 0.75rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.9rem;
          outline: none;
          background: white;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
        }
        .loading-state, .empty-products-state {
          text-align: center;
          padding: 4rem 1rem;
          background: white;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #e2e8f0;
          border-top: 4px solid var(--color-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .empty-products-state h3 {
          font-size: 1.3rem;
          margin-bottom: 0.4rem;
        }
        .empty-products-state p {
          color: var(--color-text-light);
          margin-bottom: 1.25rem;
        }
      `})]})},zp=[{icon:"🌱",title:"100% Non-GMO & Organic",desc:"All our seeds are open-pollinated, non-hybrid, and certified organic free from synthetic chemicals."},{icon:"⚡",title:"High Germination Guarantee",desc:"Lab-tested with 95%+ germination rates so your garden sprouts lush and healthy."},{icon:"🚚",title:"Eco-Friendly Fast Shipping",desc:"Delivered in 100% biodegradable packaging with fast, tracked shipping right to your door."},{icon:"📖",title:"Expert Planting Advice",desc:"Detailed soil preparation and growing guides included with every single packet."}],Ep=()=>u.jsxs("section",{className:"why-us-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-title",children:[u.jsx("h2",{children:"Why Choose SeedShop?"}),u.jsx("p",{children:"We are dedicated to nourishing home gardens and organic farming communities"})]}),u.jsx("div",{className:"features-grid",children:zp.map((S,X)=>u.jsxs("div",{className:"feature-card",children:[u.jsx("span",{className:"feature-icon",children:S.icon}),u.jsx("h3",{children:S.title}),u.jsx("p",{children:S.desc})]},X))})]}),u.jsx("style",{jsx:!0,children:`
        .why-us-section {
          padding: 4rem 1rem;
          background: white;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-title h2 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }
        .section-title p {
          color: var(--color-text-light);
          font-size: 1rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          padding: 2rem 1.5rem;
          background: #f8fafc;
          border-radius: var(--radius);
          text-align: center;
          border: 1px solid #e2e8f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(46, 125, 50, 0.08);
          border-color: var(--color-primary);
        }
        .feature-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }
        .feature-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }
        .feature-card p {
          font-size: 0.88rem;
          color: var(--color-text-light);
          line-height: 1.5;
        }
      `})]}),Tp=[{name:"Sarah Jenkins",location:"Oregon, USA",rating:5,comment:"The Heirloom Tomato seeds sprouted in less than 5 days! Incredible germination rate. Will definitely buy again.",avatar:"👩‍🌾"},{name:"Marcus Vance",location:"California, USA",rating:5,comment:"Organic Basil & Lavender seeds produced the most fragrant kitchen herb garden. Fast shipping & eco packaging!",avatar:"👨‍🌾"},{name:"Emily Watson",location:"Vermont, USA",rating:5,comment:"The Pollinator Wildflower Mix transformed my backyard into a paradise for bees and butterflies. Highly recommend!",avatar:"🐝"}],wp=()=>u.jsxs("section",{className:"reviews-section container",children:[u.jsxs("div",{className:"section-title",children:[u.jsx("h2",{children:"What Our Gardeners Say"}),u.jsx("p",{children:"Loved by over 10,000+ organic gardeners nationwide"})]}),u.jsx("div",{className:"reviews-grid",children:Tp.map((S,X)=>u.jsxs("div",{className:"review-card",children:[u.jsx("div",{className:"review-stars",children:"★".repeat(S.rating)}),u.jsxs("p",{className:"comment",children:['"',S.comment,'"']}),u.jsxs("div",{className:"reviewer-info",children:[u.jsx("span",{className:"avatar",children:S.avatar}),u.jsxs("div",{children:[u.jsx("h4",{children:S.name}),u.jsx("span",{className:"location",children:S.location})]})]})]},X))}),u.jsx("style",{jsx:!0,children:`
        .reviews-section {
          padding: 4rem 1rem;
        }
        .section-title {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .section-title h2 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }
        .section-title p {
          color: var(--color-text-light);
          font-size: 1rem;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .review-card {
          background: white;
          padding: 1.75rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
        }
        .review-stars {
          color: #f59e0b;
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
        }
        .comment {
          font-size: 0.95rem;
          color: #475569;
          font-style: italic;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .avatar {
          font-size: 1.8rem;
        }
        .reviewer-info h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text);
        }
        .location {
          font-size: 0.78rem;
          color: var(--color-text-light);
        }
      `})]}),Op=()=>{const{setSelectedCategory:S,showNotification:X}=_t(),[E,m]=T.useState(""),D=M=>{M.preventDefault(),E&&(X("Thank you for subscribing to Seedora newsletter!","success"),m(""))},O=M=>{S(M);const U=document.getElementById("products");U&&U.scrollIntoView({behavior:"smooth"})};return u.jsxs("footer",{className:"footer",children:[u.jsxs("div",{className:"container footer-grid",children:[u.jsxs("div",{className:"footer-col brand-col",children:[u.jsxs("div",{className:"logo",children:[u.jsx("span",{className:"logo-icon",children:"🌱"}),u.jsx("span",{className:"logo-text",children:"Seedora"})]}),u.jsx("p",{className:"tagline",children:"Your premier online platform for certified organic, non-GMO vegetable, flower, herb, and fruit seeds. Growing a greener future together with Seedora."}),u.jsxs("div",{className:"social-links",children:[u.jsx("span",{children:"🌿 100% Organic Certified"}),u.jsx("span",{children:"⭐ 98.6% Germination Guarantee"}),u.jsx("span",{children:"🚚 Free Shipping on orders over ₹499"})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Seed Categories"}),u.jsxs("ul",{children:[u.jsx("li",{onClick:()=>O("Vegetable Seeds"),children:"Vegetable Seeds"}),u.jsx("li",{onClick:()=>O("Flower Seeds"),children:"Flower Seeds"}),u.jsx("li",{onClick:()=>O("Herb Seeds"),children:"Herb Seeds"}),u.jsx("li",{onClick:()=>O("Organic Seeds"),children:"Organic Seeds"}),u.jsx("li",{onClick:()=>O("Fruit Seeds"),children:"Fruit Seeds"}),u.jsx("li",{onClick:()=>O("Gardening Seeds"),children:"Gardening Seeds"})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{children:"Customer Care"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Shipping & Delivery Policy"}),u.jsx("li",{children:"Germination Guarantee"}),u.jsx("li",{children:"Planting Guides & FAQs"}),u.jsx("li",{children:"Return Policy"}),u.jsx("li",{children:"Contact Seedora Support"})]})]}),u.jsxs("div",{className:"footer-col newsletter-col",children:[u.jsx("h4",{children:"Join Seedora Club"}),u.jsx("p",{children:"Subscribe to receive seasonal planting tips, exclusive coupon codes (SEEDORA10), and new seed releases."}),u.jsxs("form",{onSubmit:D,className:"newsletter-form",children:[u.jsx("input",{type:"email",placeholder:"Enter your email...",value:E,onChange:M=>m(M.target.value),required:!0}),u.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Subscribe"})]})]})]}),u.jsx("div",{className:"footer-bottom",children:u.jsxs("div",{className:"container bottom-content",children:[u.jsxs("p",{children:["© ",new Date().getFullYear()," Seedora — Online Seed E-Commerce Platform. All rights reserved."]}),u.jsxs("div",{className:"payment-badges",children:[u.jsx("span",{children:"📱 UPI (GPay/PhonePe)"}),u.jsx("span",{children:"💵 Cash on Delivery"}),u.jsx("span",{children:"💳 Card Payment"})]})]})}),u.jsx("style",{jsx:!0,children:`
        .footer {
          background-color: #1b4332;
          color: #d8f3dc;
          padding-top: 4rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .logo {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.8rem;
        }
        .tagline {
          font-size: 0.88rem;
          color: #b7e4c7;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: #74c69d;
          font-weight: 600;
        }
        .footer-col h4 {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
        }
        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer-col li {
          font-size: 0.88rem;
          color: #b7e4c7;
          cursor: pointer;
          transition: color 0.2s, transform 0.2s;
        }
        .footer-col li:hover {
          color: #ffffff;
          transform: translateX(4px);
        }
        .newsletter-col p {
          font-size: 0.88rem;
          color: #b7e4c7;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }
        .newsletter-form input {
          flex: 1;
          padding: 0.55rem 0.75rem;
          border: 1px solid #40916c;
          border-radius: var(--radius);
          background: #2d6a4f;
          color: white;
          font-size: 0.88rem;
          outline: none;
        }
        .newsletter-form input::placeholder {
          color: #95d5b2;
        }
        .footer-bottom {
          border-top: 1px solid #2d6a4f;
          padding: 1.5rem 0;
          font-size: 0.82rem;
          color: #95d5b2;
        }
        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .payment-badges {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Ap=()=>{const{cart:S,rawSubtotal:X,calculatedDiscount:E,discountedSubtotal:m,deliveryCharge:D,finalCartTotal:O,removeFromCart:M,updateQuantity:U,clearCart:Z,isCartOpen:k,closeCart:z,openCheckout:h,appliedCoupon:A,applyCoupon:me,removeCoupon:pe}=_t(),[K,I]=T.useState("");if(!k)return null;const he=Y=>{Y.preventDefault(),K&&(me(K),I(""))};return u.jsxs("div",{className:"cart-drawer-overlay",onClick:z,children:[u.jsxs("div",{className:"cart-drawer fade-in",onClick:Y=>Y.stopPropagation(),children:[u.jsxs("div",{className:"drawer-header",children:[u.jsxs("h3",{children:["🛒 Seedora Shopping Cart (",S.reduce((Y,ue)=>Y+ue.quantity,0),")"]}),u.jsx("button",{className:"close-btn",onClick:z,children:"✕"})]}),S.length===0?u.jsxs("div",{className:"empty-cart",children:[u.jsx("span",{className:"empty-cart-icon",children:"🌱"}),u.jsx("h4",{children:"Your cart is empty"}),u.jsx("p",{children:"Start shopping for premium, fresh organic seeds for your home garden!"}),u.jsx("button",{className:"btn btn-primary",onClick:z,children:"Browse Seeds"})]}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"cart-items-list",children:S.map(Y=>{const ue=Y._id||Y.id,ge=Y.stock!==void 0?Y.stock:50;return u.jsxs("div",{className:"cart-item",children:[u.jsx("img",{src:Y.image,alt:Y.name,className:"item-thumb",onError:ie=>{ie.target.onerror=null,ie.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E"}}),u.jsxs("div",{className:"item-details",children:[u.jsx("h4",{children:Y.name}),u.jsxs("span",{className:"item-price",children:["₹",Number(Y.price)," each"]}),u.jsxs("div",{className:"qty-picker",children:[u.jsx("button",{onClick:()=>U(ue,-1),children:"-"}),u.jsx("span",{children:Y.quantity}),u.jsx("button",{disabled:Y.quantity>=ge,onClick:()=>U(ue,1),children:"+"})]})]}),u.jsxs("div",{className:"item-subtotal-col",children:[u.jsxs("span",{className:"subtotal-text",children:["₹",Y.price*Y.quantity]}),u.jsx("button",{className:"remove-btn",onClick:()=>M(ue),title:"Remove item",children:"🗑️"})]})]},ue)})}),u.jsx("div",{className:"coupon-box",children:A?u.jsxs("div",{className:"applied-coupon-pill",children:[u.jsxs("span",{children:["🏷️ ",u.jsx("strong",{children:A.code})," applied (",A.desc,")"]}),u.jsx("button",{onClick:pe,children:"Remove"})]}):u.jsxs("form",{onSubmit:he,className:"coupon-form",children:[u.jsx("input",{type:"text",placeholder:"Enter Coupon (e.g. SEEDORA10)",value:K,onChange:Y=>I(Y.target.value)}),u.jsx("button",{type:"submit",className:"btn btn-outline btn-sm",children:"Apply"})]})}),u.jsxs("div",{className:"drawer-footer",children:[u.jsxs("div",{className:"summary-row",children:[u.jsx("span",{children:"Subtotal:"}),u.jsxs("span",{children:["₹",X]})]}),E>0&&u.jsxs("div",{className:"summary-row discount-row",children:[u.jsxs("span",{children:["Coupon Discount (",A?.code,"):"]}),u.jsxs("span",{children:["-₹",E]})]}),u.jsxs("div",{className:"summary-row",children:[u.jsx("span",{children:"Delivery Charge:"}),u.jsx("span",{children:D===0?u.jsx("strong",{className:"free-tag",children:"FREE"}):`₹${D}`})]}),m<499&&X>0&&u.jsxs("div",{className:"free-shipping-tip",children:["Add ₹",499-m," more for ",u.jsx("strong",{children:"FREE Delivery!"})]}),u.jsxs("div",{className:"summary-row total-row",children:[u.jsx("span",{children:"Grand Total:"}),u.jsxs("span",{children:["₹",O]})]}),u.jsxs("div",{className:"drawer-actions",children:[u.jsx("button",{className:"btn btn-outline flex-1",onClick:Z,children:"Clear Cart"}),u.jsx("button",{className:"btn btn-primary flex-2",onClick:()=>{z(),h()},children:"Proceed to Checkout →"})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .cart-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(2px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }
        .cart-drawer {
          background: white;
          width: 100%;
          max-width: 440px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 25px rgba(0, 0, 0, 0.15);
        }
        .drawer-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drawer-header h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-text);
        }
        .close-btn {
          background: #f1f5f9;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
        }
        .empty-cart {
          padding: 4rem 2rem;
          text-align: center;
          margin: auto 0;
        }
        .empty-cart-icon {
          font-size: 3.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .empty-cart h4 {
          font-size: 1.2rem;
          margin-bottom: 0.4rem;
        }
        .empty-cart p {
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        .cart-items-list {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cart-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #f1f5f9;
        }
        .item-thumb {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 8px;
        }
        .item-details {
          flex: 1;
        }
        .item-details h4 {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .item-price {
          font-size: 0.8rem;
          color: var(--color-text-light);
          display: block;
          margin-bottom: 0.4rem;
        }
        .qty-picker {
          display: inline-flex;
          align-items: center;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          overflow: hidden;
        }
        .qty-picker button {
          background: #f1f5f9;
          width: 26px;
          height: 26px;
          font-weight: bold;
          cursor: pointer;
        }
        .qty-picker button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .qty-picker span {
          padding: 0 0.5rem;
          font-size: 0.85rem;
          font-weight: bold;
        }
        .item-subtotal-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.4rem;
        }
        .subtotal-text {
          font-weight: 800;
          color: var(--color-primary);
          font-size: 0.95rem;
        }
        .remove-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }
        .coupon-box {
          padding: 0.75rem 1.5rem;
          border-top: 1px solid #f1f5f9;
          background: #fafafa;
        }
        .coupon-form {
          display: flex;
          gap: 0.5rem;
        }
        .coupon-form input {
          flex: 1;
          padding: 0.4rem 0.75rem;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        .applied-coupon-pill {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #dcfce7;
          color: #166534;
          padding: 0.4rem 0.75rem;
          border-radius: 4px;
          font-size: 0.82rem;
        }
        .applied-coupon-pill button {
          background: none;
          border: none;
          color: #dc2626;
          font-weight: bold;
          cursor: pointer;
        }
        .drawer-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
        }
        .discount-row {
          color: #dc2626;
          font-weight: 600;
        }
        .total-row {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-text);
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px dashed #cbd5e1;
        }
        .free-tag {
          color: #16a34a;
        }
        .free-shipping-tip {
          font-size: 0.78rem;
          color: var(--color-primary);
          background: #dcfce7;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          margin: 0.4rem 0;
        }
        .drawer-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .flex-1 { flex: 1; }
        .flex-2 { flex: 2; }
      `})]})},_p=()=>{const{wishlist:S,toggleWishlist:X,addToCart:E,isWishlistOpen:m,closeWishlist:D}=_t();return m?u.jsxs("div",{className:"wishlist-overlay",onClick:D,children:[u.jsxs("div",{className:"wishlist-drawer fade-in",onClick:O=>O.stopPropagation(),children:[u.jsxs("div",{className:"wishlist-header",children:[u.jsxs("h2",{children:["❤️ Your Saved Wishlist (",S.length,")"]}),u.jsx("button",{className:"close-btn",onClick:D,children:"✕"})]}),u.jsx("div",{className:"wishlist-items",children:S.length===0?u.jsxs("div",{className:"empty-wishlist",children:[u.jsx("span",{className:"empty-icon",children:"🤍"}),u.jsx("h4",{children:"Your wishlist is empty"}),u.jsx("p",{children:"Tap the heart icon on any seed product card to save it for later!"})]}):S.map(O=>{const M=O._id||O.id;return u.jsxs("div",{className:"wishlist-item",children:[u.jsx("img",{src:O.image,alt:O.name,className:"wishlist-item-img",onError:U=>{U.target.onerror=null,U.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E"}}),u.jsxs("div",{className:"wishlist-item-details",children:[u.jsx("h4",{children:O.name}),u.jsxs("p",{className:"price",children:["₹",Number(O.price)]}),u.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>{E(O),X(O)},children:"Move to Cart"})]}),u.jsx("button",{className:"remove-btn",onClick:()=>X(O),title:"Remove from wishlist",children:"🗑️"})]},M)})})]}),u.jsx("style",{jsx:!0,children:`
        .wishlist-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(2px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }
        .wishlist-drawer {
          background: white;
          width: 100%;
          max-width: 400px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 25px rgba(0,0,0,0.15);
        }
        .wishlist-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .wishlist-header h2 {
          font-size: 1.15rem;
          font-weight: 700;
        }
        .close-btn {
          background: #f1f5f9;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
        }
        .wishlist-items {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 1.5rem;
        }
        .wishlist-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 1rem;
          position: relative;
          align-items: center;
        }
        .wishlist-item-img {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 6px;
        }
        .wishlist-item-details {
          flex: 1;
        }
        .wishlist-item-details h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .price {
          font-weight: 700;
          color: var(--color-primary);
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }
        .remove-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }
        .empty-wishlist {
          padding: 4rem 1rem;
          text-align: center;
        }
        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .empty-wishlist h4 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }
        .empty-wishlist p {
          color: var(--color-text-light);
          font-size: 0.88rem;
        }
        .btn-sm {
          padding: 0.35rem 0.75rem;
          font-size: 0.8rem;
        }
      `})]}):null},Dp=()=>{const{selectedProductDetails:S,closeProductDetails:X,addToCart:E,openCheckout:m}=_t(),[D,O]=T.useState(1);if(!S)return null;const M=S,U=M.stock!==void 0?M.stock:50,Z=U<=0,k=Number(M.price),z=M.originalPrice?Number(M.originalPrice):Math.round(k*1.4),h=z>k?Math.round((z-k)/z*100):0,A=()=>{E(M,D),X()},me=()=>{E(M,D),X(),m()};return u.jsxs("div",{className:"modal-overlay",onClick:X,children:[u.jsxs("div",{className:"modal-content fade-in",onClick:pe=>pe.stopPropagation(),children:[u.jsx("button",{className:"close-btn",onClick:X,children:"✕"}),u.jsxs("div",{className:"product-modal-grid",children:[u.jsx("div",{className:"modal-image-col",children:u.jsx("img",{src:M.image,alt:M.name,onError:pe=>{pe.target.onerror=null,pe.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E"}})}),u.jsxs("div",{className:"modal-details-col",children:[u.jsxs("div",{className:"detail-tags",children:[u.jsx("span",{className:"badge-cat",children:M.category}),u.jsx("span",{className:"badge-brand",children:M.brand||"GreenThumb Organics"}),h>0&&u.jsxs("span",{className:"badge-disc",children:[h,"% OFF"]})]}),u.jsx("h2",{children:M.name}),u.jsxs("div",{className:"price-rating-row",children:[u.jsxs("div",{className:"modal-price-box",children:[z>k&&u.jsxs("span",{className:"modal-orig-price",children:["₹",z]}),u.jsxs("span",{className:"modal-price",children:["₹",k]})]}),u.jsxs("div",{className:"stars",children:["★".repeat(Math.floor(M.rating||4.5)),u.jsxs("span",{children:["(",M.rating||4.5," / 5)"]})]})]}),u.jsx("p",{className:"modal-desc",children:M.description}),u.jsxs("div",{className:"product-specs-box",children:[u.jsxs("div",{className:"spec-item",children:[u.jsx("span",{className:"spec-label",children:"🌱 Growing Guide:"}),u.jsx("span",{className:"spec-val",children:M.growingInstructions||"Sow 1/4 inch deep in moist, sunny soil."})]}),u.jsxs("div",{className:"spec-item",children:[u.jsx("span",{className:"spec-label",children:"☀️ Suitable Season:"}),u.jsx("span",{className:"spec-val",children:M.season||"Spring / Summer"})]}),u.jsxs("div",{className:"spec-item",children:[u.jsx("span",{className:"spec-label",children:"🪴 Soil Type:"}),u.jsx("span",{className:"spec-val",children:M.soilType||"Well-draining fertile loam"})]}),u.jsxs("div",{className:"spec-item",children:[u.jsx("span",{className:"spec-label",children:"📦 Stock Status:"}),u.jsx("span",{className:`stock-status ${Z?"out":"in"}`,children:Z?"Out of Stock":`In Stock (${U} available)`})]})]}),!Z&&u.jsxs("div",{className:"qty-row",children:[u.jsx("label",{children:"Quantity:"}),u.jsxs("div",{className:"qty-controls",children:[u.jsx("button",{onClick:()=>O(Math.max(1,D-1)),children:"-"}),u.jsx("span",{children:D}),u.jsx("button",{onClick:()=>O(Math.min(U,D+1)),children:"+"})]})]}),u.jsxs("div",{className:"modal-actions",children:[u.jsx("button",{className:"btn btn-outline flex-1",disabled:Z,onClick:A,children:"Add to Cart"}),u.jsx("button",{className:"btn btn-primary flex-1",disabled:Z,onClick:me,children:"Buy Now"})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .modal-content {
          background: white;
          width: 100%;
          max-width: 840px;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          max-height: 90vh;
          overflow-y: auto;
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #f1f5f9;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          font-size: 1.1rem;
          cursor: pointer;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .close-btn:hover {
          background: #e2e8f0;
        }
        .product-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .modal-image-col {
          height: 100%;
          min-height: 320px;
          background: #f8fafc;
        }
        .modal-image-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-details-col {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .detail-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          align-items: center;
        }
        .badge-cat {
          background: #dcfce7;
          color: var(--color-primary);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .badge-brand {
          background: #f1f5f9;
          color: var(--color-text-light);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 600;
        }
        .badge-disc {
          background: #ef4444;
          color: white;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .modal-details-col h2 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1.25;
        }
        .price-rating-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .modal-price-box {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
        .modal-orig-price {
          font-size: 1.1rem;
          color: #94a3b8;
          text-decoration: line-through;
        }
        .modal-price {
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .stars {
          color: #f59e0b;
          font-weight: bold;
          font-size: 0.95rem;
        }
        .stars span {
          color: #64748b;
          font-size: 0.8rem;
          margin-left: 0.3rem;
        }
        .modal-desc {
          color: var(--color-text-light);
          font-size: 0.95rem;
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }
        .product-specs-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.88rem;
          margin-bottom: 1.25rem;
        }
        .spec-item {
          display: flex;
          flex-direction: column;
        }
        .spec-label {
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 0.1rem;
        }
        .spec-val {
          color: #475569;
        }
        .stock-status.in {
          color: #16a34a;
          font-weight: 700;
        }
        .stock-status.out {
          color: #dc2626;
          font-weight: 700;
        }
        .qty-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .qty-row label {
          font-weight: 600;
          font-size: 0.9rem;
        }
        .qty-controls {
          display: flex;
          align-items: center;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          overflow: hidden;
        }
        .qty-controls button {
          background: #f1f5f9;
          width: 32px;
          height: 32px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
        }
        .qty-controls span {
          padding: 0 0.8rem;
          font-weight: bold;
        }
        .modal-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }
        .flex-1 { flex: 1; }

        @media (max-width: 700px) {
          .product-modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-image-col {
            height: 220px;
          }
        }
      `})]})},Mp=()=>{const{isCheckoutOpen:S,closeCheckout:X,cart:E,rawSubtotal:m,calculatedDiscount:D,discountedSubtotal:O,deliveryCharge:M,finalCartTotal:U,appliedCoupon:Z,applyCoupon:k,removeCoupon:z,user:h,token:A,openAuth:me,placeOrder:pe,lastConfirmedOrder:K,setLastConfirmedOrder:I,openOrders:he}=_t(),[Y,ue]=T.useState(1),[ge,ie]=T.useState(""),[Ce,F]=T.useState(""),[ae,oe]=T.useState(""),[P,Ye]=T.useState(""),[He,gt]=T.useState(""),[$e,Ge]=T.useState(""),[w,W]=T.useState(""),[R,ye]=T.useState("UPI"),[re,lt]=T.useState(""),[et,Dt]=T.useState("HDFC Bank"),[f,C]=T.useState(""),[x,q]=T.useState(""),[ee,ve]=T.useState(""),[fe,G]=T.useState(""),[B,Nt]=T.useState(""),[xl,el]=T.useState(!1),[vt,de]=T.useState("");if(T.useEffect(()=>{h&&(ge||ie(h.name||""),Ce||F(h.email||""),ae||oe(h.phone||""))},[h]),T.useEffect(()=>{K&&ue(4)},[K]),!S)return null;const Te=()=>{I(null),ue(1),de(""),X()},Ct=_=>{if(_.preventDefault(),de(""),E.length===0){de("Your shopping cart is empty. Please add products before checking out.");return}if(!ge.trim()){de("Please enter your full name.");return}if(!ae.trim()||ae.replace(/\D/g,"").length<10){de("Please enter a valid 10-digit mobile phone number.");return}if(!Ce.trim()||!Ce.includes("@")){de("Please enter a valid email address.");return}if(!P.trim()){de("Please enter your street address / house details.");return}if(!He.trim()){de("Please enter your city/district.");return}if(!$e.trim()){de("Please enter your state.");return}if(!w.trim()||w.trim().length<6){de("Please enter a valid 6-digit PIN code.");return}for(const qe of E){const Mt=qe.stock!==void 0?qe.stock:50;if(qe.quantity>Mt){de(`Insufficient stock for "${qe.name}". Only ${Mt} available.`);return}}ue(2)},Sl=_=>{if(_.preventDefault(),de(""),R==="UPI"){if(!re.trim()){de("Please enter your VPA / UPI ID (e.g. name@upi, 9876543210@paytm).");return}}else if(R==="Credit/Debit Card"){if(!f.trim()||f.replace(/\s/g,"").length<15){de("Please enter a valid card number.");return}if(!ee.trim()){de("Please enter the card expiry date (MM/YY).");return}if(!fe.trim()||fe.trim().length<3){de("Please enter a 3 or 4 digit CVV code.");return}}else if(R==="Net Banking"&&!et){de("Please select your bank for Net Banking.");return}ue(3)},Zt=async()=>{if(de(""),!A||!h){me("login"),de("Please log in to place your order.");return}el(!0);const _={fullName:ge,email:Ce,phone:ae,address:P,city:He,state:$e||"State",pincode:w};let qe={};R==="UPI"?qe.upiId=re:R==="Net Banking"&&(qe.bank=et),setTimeout(async()=>{const Mt=await pe(_,R,qe);el(!1),Mt.success?ue(4):Mt.error&&de(Mt.error)},1200)},Yl=_=>{_.preventDefault(),B.trim()&&(k(B),Nt(""))},jl=K?K._id.startsWith("ord_")?`#SEED${K._id.replace("ord_","").substring(0,8).toUpperCase()}`:`#SEED${K._id.substring(K._id.length-8).toUpperCase()}`:"#SEED123456";return u.jsxs("div",{className:"modal-overlay",onClick:Te,children:[u.jsxs("div",{className:"checkout-container fade-in",onClick:_=>_.stopPropagation(),children:[u.jsx("button",{className:"close-btn",onClick:Te,"aria-label":"Close checkout",children:"✕"}),u.jsxs("div",{className:"checkout-header",children:[u.jsx("span",{className:"brand-logo-text",children:"🌱 Seedora Checkout"}),u.jsx("p",{className:"checkout-subtitle",children:"Safe & Secure Demo Checkout Experience"})]}),u.jsxs("div",{className:"step-indicator-bar",children:[u.jsxs("div",{className:`step-item ${Y===1?"active":""} ${Y>1?"completed":""}`,onClick:()=>Y>1&&Y<4&&ue(1),children:[u.jsx("div",{className:"step-badge",children:Y>1?"✓":"1"}),u.jsx("span",{className:"step-label",children:"Delivery Address"})]}),u.jsx("div",{className:"step-connector"}),u.jsxs("div",{className:`step-item ${Y===2?"active":""} ${Y>2?"completed":""}`,onClick:()=>Y>2&&Y<4&&ue(2),children:[u.jsx("div",{className:"step-badge",children:Y>2?"✓":"2"}),u.jsx("span",{className:"step-label",children:"Payment Method"})]}),u.jsx("div",{className:"step-connector"}),u.jsxs("div",{className:`step-item ${Y===3?"active":""} ${Y>3?"completed":""}`,onClick:()=>Y>3&&ue(3),children:[u.jsx("div",{className:"step-badge",children:Y>3?"✓":"3"}),u.jsx("span",{className:"step-label",children:"Confirm Order"})]}),u.jsx("div",{className:"step-connector"}),u.jsxs("div",{className:`step-item ${Y===4?"active completed":""}`,children:[u.jsx("div",{className:"step-badge",children:"✓"}),u.jsx("span",{className:"step-label",children:"Order Placed"})]})]}),vt&&u.jsxs("div",{className:"error-banner",children:[u.jsxs("span",{children:["⚠️ ",vt]}),u.jsx("button",{className:"close-banner-btn",onClick:()=>de(""),children:"✕"})]}),!h&&Y<4&&u.jsxs("div",{className:"auth-notice-banner",children:["ℹ️ You are checking out as a guest. ",u.jsx("button",{className:"inline-login-btn",onClick:()=>me("login"),children:"Log in or Register"})," to link this order to your account!"]}),Y===1&&u.jsxs("div",{className:"step-content-grid",children:[u.jsxs("div",{className:"main-form-col",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h3",{children:"📍 Delivery Address"}),u.jsx("span",{className:"step-badge-mini",children:"Step 1 of 3"})]}),u.jsxs("form",{onSubmit:Ct,id:"address-form",className:"checkout-form",children:[u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"Full Name *"}),u.jsx("input",{type:"text",placeholder:"e.g. Rahul Sharma",value:ge,onChange:_=>ie(_.target.value),required:!0})]}),u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"Phone Number *"}),u.jsx("input",{type:"tel",placeholder:"e.g. 9876543210",value:ae,onChange:_=>oe(_.target.value),required:!0})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Email Address *"}),u.jsx("input",{type:"email",placeholder:"e.g. rahul.sharma@example.com",value:Ce,onChange:_=>F(_.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Street Address / House No. / Landmark *"}),u.jsx("input",{type:"text",placeholder:"e.g. Flat 402, Green Acre Apartments, Indiranagar",value:P,onChange:_=>Ye(_.target.value),required:!0})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"City / District *"}),u.jsx("input",{type:"text",placeholder:"e.g. Bengaluru",value:He,onChange:_=>gt(_.target.value),required:!0})]}),u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"State *"}),u.jsx("input",{type:"text",placeholder:"e.g. Karnataka",value:$e,onChange:_=>Ge(_.target.value),required:!0})]}),u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"Pincode *"}),u.jsx("input",{type:"text",placeholder:"e.g. 560038",value:w,onChange:_=>W(_.target.value),maxLength:6,required:!0})]})]}),u.jsx("div",{className:"form-actions-bar",children:u.jsx("button",{type:"submit",className:"btn btn-primary btn-lg continue-btn w-full",children:"Continue to Payment →"})})]})]}),u.jsx("div",{className:"sidebar-summary-col",children:u.jsxs("div",{className:"summary-card",children:[u.jsxs("h4",{children:["Order Summary (",E.reduce((_,qe)=>_+qe.quantity,0)," items)"]}),u.jsx("div",{className:"mini-items-scroll",children:E.map(_=>u.jsxs("div",{className:"mini-item",children:[u.jsx("img",{src:_.image,alt:_.name,onError:qe=>{qe.target.onerror=null,qe.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E"}}),u.jsxs("div",{className:"mini-item-info",children:[u.jsx("span",{className:"mini-item-name",children:_.name}),u.jsxs("span",{className:"mini-item-qty",children:["Qty: ",_.quantity," × ₹",Number(_.price)]})]}),u.jsxs("span",{className:"mini-item-total",children:["₹",_.price*_.quantity]})]},_._id||_.id))}),u.jsx("div",{className:"price-calc-divider"}),u.jsxs("div",{className:"price-row",children:[u.jsx("span",{children:"Subtotal"}),u.jsxs("span",{children:["₹",m]})]}),D>0&&u.jsxs("div",{className:"price-row discount",children:[u.jsxs("span",{children:["Discount (",Z?.code,")"]}),u.jsxs("span",{children:["-₹",D]})]}),u.jsxs("div",{className:"price-row",children:[u.jsx("span",{children:"Delivery Charge"}),u.jsx("span",{children:M===0?u.jsx("strong",{className:"green-text",children:"FREE"}):`₹${M}`})]}),u.jsxs("div",{className:"price-row total-row",children:[u.jsx("span",{children:"Total Payable"}),u.jsxs("span",{className:"grand-price",children:["₹",U]})]}),u.jsx("div",{className:"delivery-perk-badge",children:"🚚 Guaranteed Fresh Seed Delivery in 3-5 Business Days"})]})})]}),Y===2&&u.jsxs("div",{className:"step-content-grid",children:[u.jsxs("div",{className:"main-form-col",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h3",{children:"💳 Select Payment Method"}),u.jsx("span",{className:"step-badge-mini",children:"Step 2 of 3"})]}),u.jsxs("div",{className:"address-summary-pill",children:[u.jsxs("div",{className:"pill-text",children:[u.jsx("strong",{children:"Deliver to:"})," ",ge,", ",P,", ",He,", ",$e," - ",w," (",ae,")"]}),u.jsx("button",{type:"button",className:"edit-addr-btn",onClick:()=>ue(1),children:"✏️ Edit"})]}),u.jsxs("form",{onSubmit:Sl,id:"payment-form",className:"checkout-form",children:[u.jsxs("div",{className:"payment-options-list",children:[u.jsx("label",{className:`pay-option-card ${R==="Cash on Delivery"?"selected":""}`,children:u.jsxs("div",{className:"pay-radio-header",children:[u.jsx("input",{type:"radio",name:"paymentMethod",value:"Cash on Delivery",checked:R==="Cash on Delivery",onChange:_=>ye(_.target.value)}),u.jsx("span",{className:"pay-icon",children:"💵"}),u.jsxs("div",{className:"pay-info",children:[u.jsx("strong",{children:"Cash on Delivery (COD)"}),u.jsx("span",{className:"pay-sub",children:"Pay cash when your order arrives at your door"})]})]})}),u.jsxs("label",{className:`pay-option-card ${R==="UPI"?"selected":""}`,children:[u.jsxs("div",{className:"pay-radio-header",children:[u.jsx("input",{type:"radio",name:"paymentMethod",value:"UPI",checked:R==="UPI",onChange:_=>ye(_.target.value)}),u.jsx("span",{className:"pay-icon",children:"📱"}),u.jsxs("div",{className:"pay-info",children:[u.jsx("strong",{children:"UPI Payment"}),u.jsx("span",{className:"pay-sub",children:"Instant payment via GPay, PhonePe, Paytm, BHIM"})]})]}),R==="UPI"&&u.jsxs("div",{className:"pay-details-box fade-in",onClick:_=>_.stopPropagation(),children:[u.jsxs("div",{className:"upi-apps-badges",children:[u.jsx("span",{className:"upi-chip gpay",children:"GPay"}),u.jsx("span",{className:"upi-chip phonepe",children:"PhonePe"}),u.jsx("span",{className:"upi-chip paytm",children:"Paytm"}),u.jsx("span",{className:"upi-chip bhim",children:"BHIM UPI"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Enter VPA / UPI ID *"}),u.jsx("input",{type:"text",placeholder:"e.g. 9876543210@paytm, user@okaxis, user@ybl",value:re,onChange:_=>lt(_.target.value),required:R==="UPI"})]}),u.jsxs("div",{className:"qr-sim-banner",children:[u.jsx("span",{className:"qr-sim-icon",children:"📲 QR Code"}),u.jsxs("span",{children:["Scan QR Code with any UPI app to pay ₹",U]})]})]})]}),u.jsxs("label",{className:`pay-option-card ${R==="Credit/Debit Card"?"selected":""}`,children:[u.jsxs("div",{className:"pay-radio-header",children:[u.jsx("input",{type:"radio",name:"paymentMethod",value:"Credit/Debit Card",checked:R==="Credit/Debit Card",onChange:_=>ye(_.target.value)}),u.jsx("span",{className:"pay-icon",children:"💳"}),u.jsxs("div",{className:"pay-info",children:[u.jsx("strong",{children:"Credit / Debit Card"}),u.jsx("span",{className:"pay-sub",children:"Visa, MasterCard, RuPay, Maestro accepted"})]})]}),R==="Credit/Debit Card"&&u.jsxs("div",{className:"pay-details-box fade-in",onClick:_=>_.stopPropagation(),children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Cardholder Name"}),u.jsx("input",{type:"text",placeholder:"Rahul Sharma",value:x,onChange:_=>q(_.target.value)})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Card Number *"}),u.jsx("input",{type:"text",placeholder:"4532 •••• •••• 8892",value:f,onChange:_=>C(_.target.value),required:R==="Credit/Debit Card"})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"Expiry (MM/YY) *"}),u.jsx("input",{type:"text",placeholder:"12/28",value:ee,onChange:_=>ve(_.target.value),required:R==="Credit/Debit Card"})]}),u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"CVV *"}),u.jsx("input",{type:"password",placeholder:"123",value:fe,onChange:_=>G(_.target.value),maxLength:4,required:R==="Credit/Debit Card"})]})]})]})]}),u.jsxs("label",{className:`pay-option-card ${R==="Net Banking"?"selected":""}`,children:[u.jsxs("div",{className:"pay-radio-header",children:[u.jsx("input",{type:"radio",name:"paymentMethod",value:"Net Banking",checked:R==="Net Banking",onChange:_=>ye(_.target.value)}),u.jsx("span",{className:"pay-icon",children:"🏦"}),u.jsxs("div",{className:"pay-info",children:[u.jsx("strong",{children:"Net Banking"}),u.jsx("span",{className:"pay-sub",children:"All major Indian banks supported"})]})]}),R==="Net Banking"&&u.jsx("div",{className:"pay-details-box fade-in",onClick:_=>_.stopPropagation(),children:u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Select Bank *"}),u.jsxs("select",{value:et,onChange:_=>Dt(_.target.value),className:"bank-select",children:[u.jsx("option",{value:"HDFC Bank",children:"HDFC Bank"}),u.jsx("option",{value:"State Bank of India (SBI)",children:"State Bank of India (SBI)"}),u.jsx("option",{value:"ICICI Bank",children:"ICICI Bank"}),u.jsx("option",{value:"Axis Bank",children:"Axis Bank"}),u.jsx("option",{value:"Kotak Mahindra Bank",children:"Kotak Mahindra Bank"}),u.jsx("option",{value:"Punjab National Bank",children:"Punjab National Bank"}),u.jsx("option",{value:"Bank of Baroda",children:"Bank of Baroda"})]})]})})]})]}),u.jsxs("div",{className:"form-actions-bar row-actions",children:[u.jsx("button",{type:"button",className:"btn btn-outline",onClick:()=>ue(1),children:"← Back to Address"}),u.jsx("button",{type:"submit",className:"btn btn-primary flex-1",children:"Proceed to Review Order →"})]})]})]}),u.jsx("div",{className:"sidebar-summary-col",children:u.jsxs("div",{className:"summary-card",children:[u.jsxs("h4",{children:["Order Summary (",E.reduce((_,qe)=>_+qe.quantity,0)," items)"]}),u.jsx("div",{className:"coupon-checkout-box",children:Z?u.jsxs("div",{className:"applied-coupon-pill",children:[u.jsxs("span",{children:["🏷️ ",u.jsx("strong",{children:Z.code})," Applied"]}),u.jsx("button",{type:"button",onClick:z,children:"✕"})]}):u.jsxs("div",{className:"coupon-inline-form",children:[u.jsx("input",{type:"text",placeholder:"Coupon Code",value:B,onChange:_=>Nt(_.target.value)}),u.jsx("button",{type:"button",className:"btn btn-outline btn-sm",onClick:Yl,children:"Apply"})]})}),u.jsxs("div",{className:"price-row",children:[u.jsx("span",{children:"Subtotal"}),u.jsxs("span",{children:["₹",m]})]}),D>0&&u.jsxs("div",{className:"price-row discount",children:[u.jsxs("span",{children:["Discount (",Z?.code,")"]}),u.jsxs("span",{children:["-₹",D]})]}),u.jsxs("div",{className:"price-row",children:[u.jsx("span",{children:"Delivery Charge"}),u.jsx("span",{children:M===0?u.jsx("strong",{className:"green-text",children:"FREE"}):`₹${M}`})]}),u.jsx("div",{className:"price-calc-divider"}),u.jsxs("div",{className:"price-row total-row",children:[u.jsx("span",{children:"Total Payable"}),u.jsxs("span",{className:"grand-price",children:["₹",U]})]})]})})]}),Y===3&&u.jsxs("div",{className:"step-confirm-container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h3",{children:"📋 Confirm & Place Your Order"}),u.jsx("span",{className:"step-badge-mini",children:"Step 3 of 3"})]}),u.jsxs("div",{className:"confirm-review-grid",children:[u.jsxs("div",{className:"review-card",children:[u.jsxs("div",{className:"review-card-header",children:[u.jsx("h4",{children:"📍 Delivery Address"}),u.jsx("button",{type:"button",className:"link-btn",onClick:()=>ue(1),children:"Change"})]}),u.jsxs("div",{className:"review-card-body",children:[u.jsx("p",{className:"user-name",children:ge}),u.jsx("p",{children:P}),u.jsxs("p",{children:[He,", ",$e," - ",w]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Phone:"})," ",ae]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Email:"})," ",Ce]})]})]}),u.jsxs("div",{className:"review-card",children:[u.jsxs("div",{className:"review-card-header",children:[u.jsx("h4",{children:"💳 Payment Method"}),u.jsx("button",{type:"button",className:"link-btn",onClick:()=>ue(2),children:"Change"})]}),u.jsxs("div",{className:"review-card-body",children:[u.jsxs("p",{className:"pay-method-title",children:[R==="Cash on Delivery"&&"💵 Cash on Delivery (COD)",R==="UPI"&&`📱 UPI Payment (${re||"UPI"})`,R==="Credit/Debit Card"&&`💳 Credit/Debit Card (${f?`•••• ${f.slice(-4)}`:"Demo Card"})`,R==="Net Banking"&&`🏦 Net Banking (${et})`]}),u.jsx("p",{className:"demo-pay-notice",children:"Demo Payment — No money will be deducted."})]})]})]}),u.jsxs("div",{className:"review-card items-review-card",children:[u.jsx("div",{className:"review-card-header",children:u.jsxs("h4",{children:["📦 Items in Your Order (",E.reduce((_,qe)=>_+qe.quantity,0),")"]})}),u.jsx("div",{className:"review-items-list",children:E.map(_=>u.jsxs("div",{className:"review-item-row",children:[u.jsx("img",{src:_.image,alt:_.name,className:"review-item-img",onError:qe=>{qe.target.onerror=null,qe.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E"}}),u.jsxs("div",{className:"review-item-details",children:[u.jsx("span",{className:"item-title",children:_.name}),u.jsxs("span",{className:"item-meta",children:["Qty: ",_.quantity," × ₹",Number(_.price)]})]}),u.jsxs("span",{className:"review-item-price",children:["₹",_.price*_.quantity]})]},_._id||_.id))})]}),u.jsxs("div",{className:"final-price-summary-box",children:[u.jsxs("div",{className:"price-row",children:[u.jsx("span",{children:"Items Subtotal"}),u.jsxs("span",{children:["₹",m]})]}),D>0&&u.jsxs("div",{className:"price-row discount",children:[u.jsxs("span",{children:["Coupon Discount (",Z?.code,")"]}),u.jsxs("span",{children:["-₹",D]})]}),u.jsxs("div",{className:"price-row",children:[u.jsx("span",{children:"Delivery Charge"}),u.jsx("span",{children:M===0?u.jsx("strong",{className:"green-text",children:"FREE"}):`₹${M}`})]}),u.jsx("div",{className:"price-calc-divider"}),u.jsxs("div",{className:"price-row grand-total-row",children:[u.jsx("span",{children:"Total Amount Payable"}),u.jsxs("span",{className:"grand-price-big",children:["₹",U]})]})]}),u.jsxs("div",{className:"confirm-actions-bar",children:[u.jsx("button",{type:"button",className:"btn btn-outline",disabled:xl,onClick:()=>ue(2),children:"← Back to Payment"}),u.jsx("button",{type:"button",className:"btn btn-primary btn-lg place-order-btn flex-1",disabled:xl,onClick:Zt,children:xl?u.jsxs("span",{className:"loading-spinner-wrap",children:[u.jsx("span",{className:"spinner"})," Placing your order..."]}):`Confirm & Place Order (₹${U})`})]})]}),Y===4&&u.jsxs("div",{className:"order-success-screen fade-in",children:[u.jsx("div",{className:"success-icon-circle",children:u.jsxs("svg",{className:"checkmark-svg",viewBox:"0 0 52 52",children:[u.jsx("circle",{className:"checkmark-circle",cx:"26",cy:"26",r:"25",fill:"none"}),u.jsx("path",{className:"checkmark-check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})}),u.jsx("h2",{className:"success-title",children:"Order Placed Successfully!"}),u.jsx("p",{className:"success-tagline",children:"Thank you for shopping with Seedora."}),u.jsx("p",{className:"success-message",children:"Your order has been placed successfully."}),u.jsxs("div",{className:"success-details-card",children:[u.jsxs("div",{className:"detail-pill",children:[u.jsx("span",{children:"Order ID"}),u.jsx("strong",{children:jl})]}),u.jsxs("div",{className:"detail-pill",children:[u.jsx("span",{children:"Total Amount"}),u.jsxs("strong",{className:"green-text",children:["₹",K?K.totalAmount:U]})]}),u.jsxs("div",{className:"detail-pill",children:[u.jsx("span",{children:"Payment Method"}),u.jsx("strong",{children:K?K.paymentMethod:R})]}),u.jsxs("div",{className:"detail-pill",children:[u.jsx("span",{children:"Expected Delivery"}),u.jsx("strong",{children:"3–5 Business Days"})]}),u.jsxs("div",{className:"address-delivery-snippet",children:[u.jsx("span",{children:"📦 Shipping to:"}),u.jsxs("p",{children:[u.jsx("strong",{children:K?.shippingAddress?.fullName||ge})," — ",K?.shippingAddress?.address||P,", ",K?.shippingAddress?.city||He,", ",K?.shippingAddress?.state||$e," - ",K?.shippingAddress?.pincode||w," (Ph: ",K?.shippingAddress?.phone||ae,")"]})]})]}),u.jsxs("div",{className:"success-actions-row",children:[u.jsx("button",{className:"btn btn-outline flex-1",onClick:Te,children:"Continue Shopping"}),u.jsx("button",{className:"btn btn-primary flex-1",onClick:()=>{Te(),he()},children:"View My Orders →"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .checkout-container {
          background: #ffffff;
          width: 100%;
          max-width: 900px;
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          max-height: 92vh;
          overflow-y: auto;
          font-family: inherit;
        }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: #f1f5f9;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          color: #64748b;
          transition: all 0.2s ease;
        }
        .close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .checkout-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }
        .brand-logo-text {
          font-size: 1.4rem;
          font-weight: 800;
          color: #2d6a4f;
          display: block;
        }
        .checkout-subtitle {
          font-size: 0.85rem;
          color: #64748b;
          margin-top: 0.1rem;
        }

        /* Step Indicator Bar */
        .step-indicator-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.85rem 1.25rem;
          margin-bottom: 1.5rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          opacity: 0.55;
          transition: all 0.2s ease;
        }
        .step-item.active {
          opacity: 1;
        }
        .step-item.completed {
          opacity: 0.9;
        }

        .step-badge {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #cbd5e1;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.82rem;
        }
        .step-item.active .step-badge {
          background: #2d6a4f;
          color: white;
          box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.2);
        }
        .step-item.completed .step-badge {
          background: #10b981;
          color: white;
        }

        .step-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #1e293b;
        }

        .step-connector {
          flex: 1;
          height: 2px;
          background: #e2e8f0;
          margin: 0 0.5rem;
        }

        .error-banner {
          background-color: #fef2f2;
          border: 1px solid #fca5a5;
          color: #b91c1c;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .close-banner-btn {
          background: none;
          border: none;
          color: #b91c1c;
          font-weight: bold;
          cursor: pointer;
        }

        .auth-notice-banner {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1d4ed8;
          padding: 0.65rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .inline-login-btn {
          background: none;
          border: none;
          color: #1d4ed8;
          font-weight: 700;
          text-decoration: underline;
          cursor: pointer;
        }

        /* Step Content Grid Layout */
        .step-content-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 1.75rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .section-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }
        .step-badge-mini {
          font-size: 0.75rem;
          font-weight: 700;
          background: #dcfce7;
          color: #166534;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
        }

        .checkout-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: flex;
          gap: 0.85rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
        }
        .form-group input, .bank-select {
          padding: 0.65rem 0.85rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-group input:focus, .bank-select:focus {
          border-color: #2d6a4f;
          box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.1);
        }

        .form-actions-bar {
          margin-top: 1.25rem;
        }
        .row-actions {
          display: flex;
          gap: 0.75rem;
        }

        /* Address Summary Pill */
        .address-summary-pill {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .pill-text {
          color: #166534;
        }
        .edit-addr-btn {
          background: white;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          cursor: pointer;
        }

        /* Payment Options List */
        .payment-options-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .pay-option-card {
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #ffffff;
        }
        .pay-option-card.selected {
          border-color: #2d6a4f;
          background: #f0fdf4;
          box-shadow: 0 0 0 2px rgba(45, 106, 79, 0.15);
        }

        .pay-radio-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .pay-radio-header input[type="radio"] {
          accent-color: #2d6a4f;
          width: 18px;
          height: 18px;
        }
        .pay-icon {
          font-size: 1.4rem;
        }
        .pay-info {
          display: flex;
          flex-direction: column;
        }
        .pay-info strong {
          font-size: 0.95rem;
          color: #0f172a;
        }
        .pay-sub {
          font-size: 0.8rem;
          color: #64748b;
        }

        .pay-details-box {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed #bbf7d0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .upi-apps-badges {
          display: flex;
          gap: 0.5rem;
        }
        .upi-chip {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: white;
        }
        .gpay { background: #ea4335; }
        .phonepe { background: #5f259f; }
        .paytm { background: #00baf2; }
        .bhim { background: #008080; }

        .qr-sim-banner {
          background: white;
          border: 1px dashed #2d6a4f;
          padding: 0.65rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #2d6a4f;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Sidebar Summary Card */
        .sidebar-summary-col {
          display: flex;
          flex-direction: column;
        }
        .summary-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .summary-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.6rem;
        }

        .mini-items-scroll {
          max-height: 180px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .mini-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.82rem;
        }
        .mini-item img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 6px;
        }
        .mini-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .mini-item-name {
          font-weight: 600;
          color: #1e293b;
        }
        .mini-item-qty {
          color: #64748b;
          font-size: 0.75rem;
        }
        .mini-item-total {
          font-weight: 700;
          color: #0f172a;
        }

        .price-calc-divider {
          height: 1px;
          border-top: 1px dashed #cbd5e1;
          margin: 0.3rem 0;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: #334155;
        }
        .price-row.discount {
          color: #dc2626;
          font-weight: 600;
        }
        .price-row.total-row {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          padding-top: 0.4rem;
        }
        .grand-price {
          color: #2d6a4f;
        }
        .green-text {
          color: #10b981;
        }

        .coupon-checkout-box {
          margin-bottom: 0.5rem;
        }
        .coupon-inline-form {
          display: flex;
          gap: 0.4rem;
        }
        .coupon-inline-form input {
          flex: 1;
          padding: 0.4rem 0.6rem;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 0.82rem;
          text-transform: uppercase;
        }
        .applied-coupon-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #dcfce7;
          color: #166534;
          padding: 0.4rem 0.65rem;
          border-radius: 6px;
          font-size: 0.82rem;
        }
        .applied-coupon-pill button {
          background: none;
          border: none;
          color: #dc2626;
          font-weight: bold;
          cursor: pointer;
        }

        .delivery-perk-badge {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-size: 0.78rem;
          padding: 0.5rem;
          border-radius: 6px;
          text-align: center;
          font-weight: 600;
          margin-top: 0.4rem;
        }

        /* Step 3: Confirm Review */
        .step-confirm-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .confirm-review-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .review-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 1.25rem;
        }

        .review-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .review-card-header h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .link-btn {
          background: none;
          border: none;
          color: #2d6a4f;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
        }
        .link-btn:hover {
          text-decoration: underline;
        }

        .review-card-body p {
          font-size: 0.88rem;
          color: #334155;
          margin-bottom: 0.25rem;
        }
        .review-card-body .user-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #0f172a;
        }
        .pay-method-title {
          font-weight: 700;
          color: #0f172a;
          font-size: 0.95rem;
        }
        .demo-pay-notice {
          font-size: 0.78rem;
          color: #64748b;
          font-style: italic;
          margin-top: 0.4rem;
        }

        .items-review-card {
          padding: 1.25rem;
        }
        .review-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: 220px;
          overflow-y: auto;
        }
        .review-item-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-bottom: 0.65rem;
          border-bottom: 1px solid #f1f5f9;
        }
        .review-item-img {
          width: 48px;
          height: 48px;
          object-fit: cover;
          border-radius: 6px;
        }
        .review-item-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .item-title {
          font-weight: 600;
          font-size: 0.9rem;
          color: #0f172a;
        }
        .item-meta {
          font-size: 0.8rem;
          color: #64748b;
        }
        .review-item-price {
          font-weight: 700;
          font-size: 0.95rem;
          color: #0f172a;
        }

        .final-price-summary-box {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 10px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .grand-total-row {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          padding-top: 0.4rem;
        }
        .grand-price-big {
          color: #2d6a4f;
          font-size: 1.3rem;
        }

        .confirm-actions-bar {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .place-order-btn {
          font-size: 1.1rem;
          font-weight: 800;
          padding: 0.9rem 1.5rem;
        }

        .loading-spinner-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .spinner {
          width: 18px;
          height: 18px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Step 4: Success Screen */
        .order-success-screen {
          text-align: center;
          padding: 1.5rem 1rem;
        }

        .success-icon-circle {
          width: 72px;
          height: 72px;
          margin: 0 auto 1.25rem auto;
        }
        .checkmark-svg {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: block;
          stroke-width: 3;
          stroke: #10b981;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #10b981;
          animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s stroke;
        }
        .checkmark-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 3;
          stroke-miterlimit: 10;
          stroke: #10b981;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        .checkmark-check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
        }

        @keyframes stroke {
          100% { stroke-dashoffset: 0; }
        }

        .success-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #2d6a4f;
          margin-bottom: 0.3rem;
        }
        .success-tagline {
          font-size: 1.05rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.2rem;
        }
        .success-message {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 1.5rem;
        }

        .success-details-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.25rem;
          max-width: 540px;
          margin: 0 auto 1.75rem auto;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .detail-pill {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 0.4rem;
        }
        .detail-pill span {
          color: #64748b;
        }
        .detail-pill strong {
          color: #0f172a;
        }

        .address-delivery-snippet {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.85rem;
        }
        .address-delivery-snippet span {
          font-weight: 700;
          color: #2d6a4f;
          display: block;
          margin-bottom: 0.2rem;
        }
        .address-delivery-snippet p {
          color: #334155;
          margin: 0;
        }

        .success-actions-row {
          display: flex;
          gap: 1rem;
          max-width: 540px;
          margin: 0 auto;
        }

        .w-full { width: 100%; }
        .flex-1 { flex: 1; }

        @media (max-width: 768px) {
          .step-content-grid, .confirm-review-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            flex-direction: column;
          }
          .step-indicator-bar {
            overflow-x: auto;
            padding: 0.6rem;
          }
          .step-label {
            font-size: 0.75rem;
          }
        }
      `})]})},Up=()=>{const{isAuthOpen:S,closeAuth:X,authMode:E,setAuthMode:m,login:D,register:O}=_t(),[M,U]=T.useState(""),[Z,k]=T.useState(""),[z,h]=T.useState(""),[A,me]=T.useState(""),[pe,K]=T.useState(""),[I,he]=T.useState(""),[Y,ue]=T.useState(""),[ge,ie]=T.useState(""),[Ce,F]=T.useState(!1);if(!S)return null;const ae=async P=>{if(P.preventDefault(),ie(""),!M||!Z){ie("Please enter both email and password.");return}F(!0);const Ye=await D(M,Z);F(!1),Ye.success||ie(Ye.error||"Login failed")},oe=async P=>{if(P.preventDefault(),ie(""),!z||!A||!I){ie("Name, email, and password are required.");return}if(I!==Y){ie("Passwords do not match.");return}if(I.length<6){ie("Password must be at least 6 characters long.");return}F(!0);const Ye=await O(z,A,pe,I,Y);F(!1),Ye.success||ie(Ye.error||"Registration failed")};return u.jsxs("div",{className:"modal-overlay",onClick:X,children:[u.jsxs("div",{className:"auth-card fade-in",onClick:P=>P.stopPropagation(),children:[u.jsx("button",{className:"close-btn",onClick:X,children:"✕"}),u.jsxs("div",{className:"auth-tabs",children:[u.jsx("button",{className:`tab-btn ${E==="login"?"active":""}`,onClick:()=>{m("login"),ie("")},children:"User Login"}),u.jsx("button",{className:`tab-btn ${E==="register"?"active":""}`,onClick:()=>{m("register"),ie("")},children:"Create Account"})]}),ge&&u.jsx("div",{className:"error-banner",children:ge}),E==="login"?u.jsxs("form",{className:"auth-form",onSubmit:ae,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Email Address"}),u.jsx("input",{type:"email",placeholder:"your.email@example.com",value:M,onChange:P=>U(P.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Password"}),u.jsx("input",{type:"password",placeholder:"Enter your password",value:Z,onChange:P=>k(P.target.value),required:!0})]}),u.jsx("button",{type:"submit",className:"btn btn-primary w-full btn-lg",disabled:Ce,children:Ce?"Logging in...":"Sign In"}),u.jsxs("div",{className:"auth-footer-text",children:["Don't have an account?"," ",u.jsx("span",{onClick:()=>{m("register"),ie("")},children:"Register here"})]})]}):u.jsxs("form",{className:"auth-form",onSubmit:oe,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Full Name *"}),u.jsx("input",{type:"text",placeholder:"John Doe",value:z,onChange:P=>h(P.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Email Address *"}),u.jsx("input",{type:"email",placeholder:"your.email@example.com",value:A,onChange:P=>me(P.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Phone Number"}),u.jsx("input",{type:"tel",placeholder:"+1 (555) 000-0000",value:pe,onChange:P=>K(P.target.value)})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Password (min 6 chars) *"}),u.jsx("input",{type:"password",placeholder:"••••••••",value:I,onChange:P=>he(P.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Confirm Password *"}),u.jsx("input",{type:"password",placeholder:"••••••••",value:Y,onChange:P=>ue(P.target.value),required:!0})]}),u.jsx("button",{type:"submit",className:"btn btn-primary w-full btn-lg",disabled:Ce,children:Ce?"Creating Account...":"Register Account"}),u.jsxs("div",{className:"auth-footer-text",children:["Already registered?"," ",u.jsx("span",{onClick:()=>{m("login"),ie("")},children:"Log in here"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .auth-card {
          background: white;
          width: 100%;
          max-width: 440px;
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
        }
        .auth-tabs {
          display: flex;
          border-bottom: 2px solid #e2e8f0;
          margin-bottom: 1.5rem;
        }
        .tab-btn {
          flex: 1;
          background: none;
          border: none;
          padding: 0.75rem;
          font-weight: 700;
          font-size: 1rem;
          color: #64748b;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          transition: all 0.2s;
        }
        .tab-btn.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }
        .error-banner {
          background-color: #fef2f2;
          border-left: 4px solid #ef4444;
          color: #991b1b;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          font-size: 0.88rem;
          margin-bottom: 1.25rem;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-text);
        }
        .form-group input {
          padding: 0.65rem 0.85rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.95rem;
          outline: none;
        }
        .form-group input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.15);
        }
        .w-full { width: 100%; }
        .btn-lg { padding: 0.85rem; font-size: 1rem; }
        .auth-footer-text {
          text-align: center;
          font-size: 0.88rem;
          color: var(--color-text-light);
          margin-top: 0.5rem;
        }
        .auth-footer-text span {
          color: var(--color-primary);
          font-weight: 700;
          cursor: pointer;
          text-decoration: underline;
        }
      `})]})},Rp=()=>{const{isProfileOpen:S,closeProfile:X,user:E,logout:m,updateProfile:D,changePassword:O,openOrders:M}=_t(),[U,Z]=T.useState("details"),[k,z]=T.useState(E?.name||""),[h,A]=T.useState(E?.phone||""),[me,pe]=T.useState(""),[K,I]=T.useState(""),[he,Y]=T.useState(""),[ue,ge]=T.useState({text:"",type:""}),[ie,Ce]=T.useState(!1);if(!S||!E)return null;const F=async oe=>{oe.preventDefault(),ge({text:"",type:""}),Ce(!0);const P=await D(k,h);Ce(!1),P.success?ge({text:"Profile updated successfully!",type:"success"}):ge({text:P.error||"Update failed",type:"error"})},ae=async oe=>{if(oe.preventDefault(),ge({text:"",type:""}),K!==he){ge({text:"New passwords do not match",type:"error"});return}if(K.length<6){ge({text:"New password must be at least 6 characters",type:"error"});return}Ce(!0);const P=await O(me,K);Ce(!1),P.success?(ge({text:"Password changed successfully!",type:"success"}),pe(""),I(""),Y("")):ge({text:P.error||"Password change failed",type:"error"})};return u.jsxs("div",{className:"modal-overlay",onClick:X,children:[u.jsxs("div",{className:"profile-card fade-in",onClick:oe=>oe.stopPropagation(),children:[u.jsx("button",{className:"close-btn",onClick:X,children:"✕"}),u.jsxs("div",{className:"profile-header",children:[u.jsx("div",{className:"avatar",children:E.name.charAt(0).toUpperCase()}),u.jsx("h3",{children:E.name}),u.jsx("p",{children:E.email}),u.jsx("span",{className:"role-tag",children:E.role==="admin"?"🛡️ Administrator":"🌱 Registered Gardener"})]}),u.jsxs("div",{className:"profile-nav",children:[u.jsx("button",{className:U==="details"?"active":"",onClick:()=>{Z("details"),ge({text:"",type:""})},children:"Account Details"}),u.jsx("button",{className:U==="edit"?"active":"",onClick:()=>{Z("edit"),ge({text:"",type:""})},children:"Edit Profile"}),u.jsx("button",{className:U==="security"?"active":"",onClick:()=>{Z("security"),ge({text:"",type:""})},children:"Change Password"})]}),ue.text&&u.jsx("div",{className:`msg-banner ${ue.type}`,children:ue.text}),U==="details"&&u.jsxs("div",{className:"tab-content",children:[u.jsxs("div",{className:"info-grid",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-label",children:"Full Name"}),u.jsx("span",{className:"info-value",children:E.name})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-label",children:"Email Address"}),u.jsx("span",{className:"info-value",children:E.email})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-label",children:"Phone Number"}),u.jsx("span",{className:"info-value",children:E.phone||"Not provided"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-label",children:"Account Role"}),u.jsx("span",{className:"info-value",children:E.role})]})]}),u.jsxs("div",{className:"profile-actions",children:[u.jsx("button",{className:"btn btn-outline flex-1",onClick:()=>{X(),M()},children:"📦 View My Orders"}),u.jsx("button",{className:"btn btn-accent flex-1",onClick:m,children:"🚪 Logout"})]})]}),U==="edit"&&u.jsxs("form",{className:"tab-content profile-form",onSubmit:F,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Full Name"}),u.jsx("input",{type:"text",value:k,onChange:oe=>z(oe.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Phone Number"}),u.jsx("input",{type:"tel",value:h,onChange:oe=>A(oe.target.value),placeholder:"+1 (555) 000-0000"})]}),u.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:ie,children:ie?"Saving...":"Save Profile Changes"})]}),U==="security"&&u.jsxs("form",{className:"tab-content profile-form",onSubmit:ae,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Current Password"}),u.jsx("input",{type:"password",value:me,onChange:oe=>pe(oe.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"New Password (min 6 chars)"}),u.jsx("input",{type:"password",value:K,onChange:oe=>I(oe.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Confirm New Password"}),u.jsx("input",{type:"password",value:he,onChange:oe=>Y(oe.target.value),required:!0})]}),u.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:ie,children:ie?"Updating Password...":"Update Password"})]})]}),u.jsx("style",{jsx:!0,children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .profile-card {
          background: white;
          width: 100%;
          max-width: 480px;
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
        }
        .profile-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .avatar {
          width: 64px;
          height: 64px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0 auto 0.75rem auto;
        }
        .profile-header h3 {
          font-size: 1.3rem;
          font-weight: 700;
        }
        .profile-header p {
          color: var(--color-text-light);
          font-size: 0.9rem;
        }
        .role-tag {
          display: inline-block;
          margin-top: 0.35rem;
          background: #dcfce7;
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
        }
        .profile-nav {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 1.25rem;
        }
        .profile-nav button {
          flex: 1;
          background: none;
          border: none;
          padding: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748b;
          border-bottom: 2px solid transparent;
          cursor: pointer;
        }
        .profile-nav button.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }
        .msg-banner {
          padding: 0.65rem 0.85rem;
          border-radius: 4px;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }
        .msg-banner.success {
          background-color: #f0fdf4;
          color: #166534;
          border-left: 3px solid #16a34a;
        }
        .msg-banner.error {
          background-color: #fef2f2;
          color: #991b1b;
          border-left: 3px solid #ef4444;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
          background: #f8fafc;
          padding: 1rem;
          border-radius: 8px;
        }
        .info-item {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 0.75rem;
          color: var(--color-text-light);
          text-transform: uppercase;
        }
        .info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text);
        }
        .profile-actions {
          display: flex;
          gap: 0.75rem;
        }
        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .form-group input {
          padding: 0.6rem 0.8rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.9rem;
        }
        .btn-block {
          width: 100%;
          padding: 0.75rem;
          margin-top: 0.5rem;
        }
        .flex-1 { flex: 1; }
      `})]})},Hp=()=>{const{isOrdersOpen:S,closeOrders:X,orders:E,cancelUserOrder:m,fetchProducts:D}=_t();if(!S)return null;const O=U=>{switch(U){case"Confirmed":case"Processing":return u.jsxs("span",{className:"status-badge status-blue",children:["🔵 ",U]});case"Shipped":return u.jsx("span",{className:"status-badge status-purple",children:"🚚 Shipped"});case"Delivered":return u.jsx("span",{className:"status-badge status-green",children:"✅ Delivered"});case"Cancelled":return u.jsx("span",{className:"status-badge status-red",children:"❌ Cancelled"});default:return u.jsxs("span",{className:"status-badge status-yellow",children:["⏳ ",U]})}},M=async U=>{window.confirm("Are you sure you want to cancel this order?")&&(await m(U),await D())};return u.jsxs("div",{className:"modal-overlay",onClick:X,children:[u.jsxs("div",{className:"orders-card fade-in",onClick:U=>U.stopPropagation(),children:[u.jsxs("div",{className:"orders-header",children:[u.jsxs("h3",{children:["📦 Seedora Order History (",E.length,")"]}),u.jsx("button",{className:"close-btn",onClick:X,children:"✕"})]}),E.length===0?u.jsxs("div",{className:"empty-orders",children:[u.jsx("span",{className:"empty-icon",children:"🌱"}),u.jsx("h4",{children:"No orders placed yet"}),u.jsx("p",{children:"Your previous seed orders and shipping status will appear here."}),u.jsx("button",{className:"btn btn-primary",onClick:X,children:"Explore Seedora Catalog"})]}):u.jsx("div",{className:"orders-list",children:E.map(U=>{const Z=new Date(U.createdAt).toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return u.jsxs("div",{className:"order-item-card",children:[u.jsxs("div",{className:"order-card-header",children:[u.jsxs("div",{children:[u.jsxs("span",{className:"order-id",children:["Order #",U._id.substring(0,10),"..."]}),u.jsx("span",{className:"order-date",children:Z})]}),O(U.orderStatus)]}),u.jsx("div",{className:"order-products",children:U.items.map((k,z)=>u.jsxs("div",{className:"ord-prod-row",children:[u.jsx("img",{src:k.image,alt:k.name,className:"ord-thumb",onError:h=>{h.target.onerror=null,h.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f8e9'/%3E%3Cpath d='M200 80 C 140 140, 140 220, 200 220 C 260 220, 260 140, 200 80 Z' fill='%23388e3c' opacity='0.75'/%3E%3Cpath d='M200 110 L200 200' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16' fill='%231b5e20'%3EOrganic Seedora%3C/text%3E%3C/svg%3E"}}),u.jsxs("div",{className:"ord-prod-info",children:[u.jsx("span",{className:"ord-prod-name",children:k.name}),u.jsxs("span",{className:"ord-prod-qty",children:["Qty: ",k.quantity," × ₹",Number(k.price)]})]}),u.jsxs("span",{className:"ord-prod-total",children:["₹",k.price*k.quantity]})]},z))}),u.jsxs("div",{className:"order-card-footer",children:[u.jsxs("div",{className:"footer-meta",children:[u.jsxs("span",{children:["Payment: ",u.jsx("strong",{children:U.paymentMethod})," ",U.upiId?`(${U.upiId})`:""]}),u.jsxs("span",{children:["Total: ",u.jsxs("strong",{className:"total-price",children:["₹",Number(U.totalAmount)]})]})]}),U.orderStatus!=="Delivered"&&U.orderStatus!=="Cancelled"&&u.jsx("button",{className:"btn btn-outline btn-sm cancel-btn",onClick:()=>M(U._id),children:"Cancel Order"})]})]},U._id)})})]}),u.jsx("style",{jsx:!0,children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .orders-card {
          background: white;
          width: 100%;
          max-width: 720px;
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          max-height: 85vh;
          display: flex;
          flex-direction: column;
        }
        .orders-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 1rem;
        }
        .orders-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .close-btn {
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
        }
        .empty-orders {
          text-align: center;
          padding: 4rem 1rem;
        }
        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .empty-orders h4 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }
        .empty-orders p {
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
        }
        .orders-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .order-item-card {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          background: #f8fafc;
        }
        .order-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #cbd5e1;
          padding-bottom: 0.6rem;
          margin-bottom: 0.75rem;
        }
        .order-id {
          font-weight: 700;
          color: var(--color-text);
          display: block;
          font-size: 0.95rem;
        }
        .order-date {
          font-size: 0.78rem;
          color: var(--color-text-light);
        }
        .status-badge {
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
        }
        .status-blue { background: #dbeafe; color: #1e40af; }
        .status-purple { background: #f3e8ff; color: #6b21a8; }
        .status-green { background: #dcfce7; color: #166534; }
        .status-red { background: #fee2e2; color: #991b1b; }
        .status-yellow { background: #fef3c7; color: #92400e; }

        .order-products {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
        }
        .ord-prod-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
        }
        .ord-thumb {
          width: 42px;
          height: 42px;
          object-fit: cover;
          border-radius: 4px;
        }
        .ord-prod-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .ord-prod-name {
          font-weight: 600;
        }
        .ord-prod-qty {
          font-size: 0.78rem;
          color: var(--color-text-light);
        }
        .ord-prod-total {
          font-weight: 700;
          color: var(--color-text);
        }
        .order-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px dashed #cbd5e1;
          padding-top: 0.6rem;
          font-size: 0.88rem;
        }
        .footer-meta {
          display: flex;
          gap: 1rem;
        }
        .total-price {
          color: var(--color-primary);
          font-size: 1rem;
        }
        .cancel-btn {
          color: #dc2626;
          border-color: #fca5a5;
        }
        .cancel-btn:hover {
          background: #fee2e2;
        }
      `})]})},Ci="http://localhost:5000/api",qp=()=>{const{isAdminOpen:S,closeAdmin:X,products:E,fetchProducts:m,token:D,showNotification:O}=_t(),[M,U]=T.useState("products"),[Z,k]=T.useState([]),[z,h]=T.useState(!1),[A,me]=T.useState(null),[pe,K]=T.useState(""),[I,he]=T.useState("Vegetable Seeds"),[Y,ue]=T.useState(""),[ge,ie]=T.useState(""),[Ce,F]=T.useState("50"),[ae,oe]=T.useState(""),[P,Ye]=T.useState(""),[He,gt]=T.useState("GreenThumb Organics"),[$e,Ge]=T.useState("Spring / Summer"),[w,W]=T.useState("Well-draining fertile soil"),[R,ye]=T.useState(""),re=async()=>{if(D)try{const x=await fetch(`${Ci}/orders`,{headers:{Authorization:`Bearer ${D}`}});if(x.ok){const q=await x.json();k(q)}}catch(x){console.error("Fetch admin orders error:",x)}};if(T.useEffect(()=>{S&&M==="orders"&&re()},[S,M]),!S)return null;const lt=()=>{h(!1),me(null),K(""),he("Vegetable Seeds"),ue(""),ie(""),F("50"),oe(""),Ye(""),gt("GreenThumb Organics"),Ge("Spring / Summer"),W("Well-draining fertile soil"),ye("")},et=x=>{h(!0),me(x._id||x.id),K(x.name),he(x.category),ue(x.price),ie(x.originalPrice||Math.round(Number(x.price)*1.4)),F(x.stock!==void 0?x.stock:50),oe(x.image),Ye(x.description||""),gt(x.brand||"GreenThumb Organics"),Ge(x.season||"Spring / Summer"),W(x.soilType||"Well-draining fertile soil"),ye(x.growingInstructions||"")},Dt=async x=>{if(window.confirm("Are you sure you want to delete this product?"))try{const q=await fetch(`${Ci}/products/${x}`,{method:"DELETE",headers:{Authorization:`Bearer ${D}`}}),ee=await q.json();if(!q.ok)throw new Error(ee.message);O("Product deleted"),m()}catch(q){O(q.message,"error")}},f=async x=>{x.preventDefault();const q={name:pe,category:I,price:Number(Y),originalPrice:Number(ge||Math.round(Number(Y)*1.4)),stock:Number(Ce),image:ae,description:P,brand:He,season:$e,soilType:w,growingInstructions:R};try{const ee=z?`${Ci}/products/${A}`:`${Ci}/products`,fe=await fetch(ee,{method:z?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${D}`},body:JSON.stringify(q)}),G=await fe.json();if(!fe.ok)throw new Error(G.message);O(z?"Product updated successfully!":"New product created!"),lt(),m()}catch(ee){O(ee.message,"error")}},C=async(x,q)=>{try{const ee=await fetch(`${Ci}/orders/${x}/status`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${D}`},body:JSON.stringify({status:q})}),ve=await ee.json();if(!ee.ok)throw new Error(ve.message);O(`Order status updated to ${q}`),re()}catch(ee){O(ee.message,"error")}};return u.jsxs("div",{className:"modal-overlay",onClick:X,children:[u.jsxs("div",{className:"admin-card fade-in",onClick:x=>x.stopPropagation(),children:[u.jsxs("div",{className:"admin-header",children:[u.jsx("h3",{children:"⚙️ Seedora Admin Dashboard"}),u.jsx("button",{className:"close-btn",onClick:X,children:"✕"})]}),u.jsxs("div",{className:"admin-tabs",children:[u.jsxs("button",{className:M==="products"?"active":"",onClick:()=>U("products"),children:["🌱 Manage Seed Products (",E.length,")"]}),u.jsxs("button",{className:M==="orders"?"active":"",onClick:()=>U("orders"),children:["📦 Customer Orders (",Z.length,")"]})]}),M==="products"?u.jsxs("div",{className:"admin-content-grid",children:[u.jsxs("form",{className:"admin-form",onSubmit:f,children:[u.jsx("h4",{children:z?"Edit Product":"Add New Seed Product"}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Product Name *"}),u.jsx("input",{type:"text",placeholder:"e.g. Organic Bell Pepper Seeds",value:pe,onChange:x=>K(x.target.value),required:!0})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"Category *"}),u.jsxs("select",{value:I,onChange:x=>he(x.target.value),children:[u.jsx("option",{value:"Vegetable Seeds",children:"Vegetable Seeds"}),u.jsx("option",{value:"Flower Seeds",children:"Flower Seeds"}),u.jsx("option",{value:"Fruit Seeds",children:"Fruit Seeds"}),u.jsx("option",{value:"Herb Seeds",children:"Herb Seeds"}),u.jsx("option",{value:"Organic Seeds",children:"Organic Seeds"}),u.jsx("option",{value:"Flowering Plants",children:"Flowering Plants"}),u.jsx("option",{value:"Gardening Seeds",children:"Gardening Seeds"})]})]}),u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"Offer Price (₹) *"}),u.jsx("input",{type:"number",placeholder:"199",value:Y,onChange:x=>ue(x.target.value),required:!0})]}),u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"MRP (₹)"}),u.jsx("input",{type:"number",placeholder:"299",value:ge,onChange:x=>ie(x.target.value)})]}),u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"Stock Qty *"}),u.jsx("input",{type:"number",placeholder:"50",value:Ce,onChange:x=>F(x.target.value),required:!0})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Image URL *"}),u.jsx("input",{type:"text",placeholder:"https://images.unsplash.com/photo-...",value:ae,onChange:x=>oe(x.target.value),required:!0})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"Brand / Supplier"}),u.jsx("input",{type:"text",value:He,onChange:x=>gt(x.target.value)})]}),u.jsxs("div",{className:"form-group flex-1",children:[u.jsx("label",{children:"Growing Season"}),u.jsx("input",{type:"text",value:$e,onChange:x=>Ge(x.target.value)})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Description"}),u.jsx("textarea",{rows:"2",placeholder:"Short marketing description...",value:P,onChange:x=>Ye(x.target.value)})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Growing Instructions"}),u.jsx("textarea",{rows:"2",placeholder:"Sow 1/4 inch deep in sunny soil...",value:R,onChange:x=>ye(x.target.value)})]}),u.jsxs("div",{className:"form-actions",children:[z&&u.jsx("button",{type:"button",className:"btn btn-outline",onClick:lt,children:"Cancel Edit"}),u.jsx("button",{type:"submit",className:"btn btn-primary flex-1",children:z?"Save Product Changes":"Add Product"})]})]}),u.jsxs("div",{className:"admin-prod-list",children:[u.jsx("h4",{children:"Catalog Inventory"}),u.jsx("div",{className:"prod-scroll",children:E.map(x=>{const q=x._id||x.id;return u.jsxs("div",{className:"admin-prod-item",children:[u.jsx("img",{src:x.image,alt:x.name}),u.jsxs("div",{className:"item-info",children:[u.jsx("strong",{children:x.name}),u.jsxs("span",{children:[x.category," | ₹",Number(x.price)," | Stock: ",x.stock!==void 0?x.stock:50]})]}),u.jsxs("div",{className:"item-btns",children:[u.jsx("button",{className:"btn-edit",onClick:()=>et(x),children:"✏️"}),u.jsx("button",{className:"btn-delete",onClick:()=>Dt(q),children:"🗑️"})]})]},q)})})]})]}):u.jsxs("div",{className:"admin-orders-list",children:[u.jsx("h4",{children:"Manage All Customer Orders"}),Z.length===0?u.jsx("p",{children:"No customer orders placed yet."}):u.jsx("div",{className:"orders-scroll",children:Z.map(x=>u.jsxs("div",{className:"admin-order-row",children:[u.jsxs("div",{className:"order-main",children:[u.jsxs("strong",{children:["Order #",x._id]}),u.jsxs("span",{children:["Customer: ",x.shippingAddress.fullName," (",x.shippingAddress.email,")"]}),u.jsxs("span",{children:["Total: ",u.jsxs("strong",{children:["₹",Number(x.totalAmount)]})," (",x.paymentMethod,")"]})]}),u.jsxs("div",{className:"status-updater",children:[u.jsx("label",{children:"Status:"}),u.jsxs("select",{value:x.orderStatus,onChange:q=>C(x._id,q.target.value),children:[u.jsx("option",{value:"Pending",children:"Pending"}),u.jsx("option",{value:"Confirmed",children:"Confirmed"}),u.jsx("option",{value:"Processing",children:"Processing"}),u.jsx("option",{value:"Shipped",children:"Shipped"}),u.jsx("option",{value:"Delivered",children:"Delivered"}),u.jsx("option",{value:"Cancelled",children:"Cancelled"})]})]})]},x._id))})]})]}),u.jsx("style",{jsx:!0,children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .admin-card {
          background: white;
          width: 100%;
          max-width: 960px;
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
        }
        .admin-header h3 {
          font-size: 1.25rem;
          color: var(--color-primary);
        }
        .close-btn {
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
        }
        .admin-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
          border-bottom: 2px solid #e2e8f0;
        }
        .admin-tabs button {
          background: none;
          border: none;
          padding: 0.6rem 1rem;
          font-weight: 700;
          font-size: 0.95rem;
          color: #64748b;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          cursor: pointer;
        }
        .admin-tabs button.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }
        .admin-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 1.5rem;
          overflow-y: auto;
        }
        .admin-form {
          background: #f8fafc;
          padding: 1.25rem;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .admin-form h4 {
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
        }
        .form-row {
          display: flex;
          gap: 0.6rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .form-group label {
          font-size: 0.8rem;
          font-weight: 600;
        }
        .form-group input, .form-group select, .form-group textarea {
          padding: 0.5rem 0.65rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius);
          font-size: 0.88rem;
          outline: none;
        }
        .form-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .admin-prod-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .prod-scroll {
          max-height: 480px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .admin-prod-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: white;
        }
        .admin-prod-item img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: 4px;
        }
        .item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-size: 0.82rem;
        }
        .item-info strong {
          color: var(--color-text);
        }
        .item-btns {
          display: flex;
          gap: 0.3rem;
        }
        .btn-edit, .btn-delete {
          background: #f1f5f9;
          border: none;
          padding: 0.35rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .orders-scroll {
          max-height: 480px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .admin-order-row {
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .order-main {
          display: flex;
          flex-direction: column;
          font-size: 0.88rem;
          gap: 0.2rem;
        }
        .status-updater {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .status-updater select {
          padding: 0.4rem 0.6rem;
          border-radius: 4px;
          border: 1px solid #cbd5e1;
          font-weight: bold;
        }
        .flex-1 { flex: 1; }

        @media (max-width: 768px) {
          .admin-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Bp=()=>{const{notification:S}=_t();return S?u.jsx("div",{className:"toast-container",children:u.jsx("div",{className:"toast",children:u.jsx("span",{children:S.message})})}):null};function Yp(){return u.jsx(vp,{children:u.jsxs("div",{className:"app",children:[u.jsx(bp,{}),u.jsxs("main",{children:[u.jsx(yp,{}),u.jsx(Sp,{}),u.jsx(Cp,{}),u.jsx(Ep,{}),u.jsx(wp,{})]}),u.jsx(Op,{}),u.jsx(Ap,{}),u.jsx(_p,{}),u.jsx(Dp,{}),u.jsx(Mp,{}),u.jsx(Up,{}),u.jsx(Rp,{}),u.jsx(Hp,{}),u.jsx(qp,{}),u.jsx(Bp,{})]})})}pp.createRoot(document.getElementById("root")).render(u.jsx(T.StrictMode,{children:u.jsx(Yp,{})}));
