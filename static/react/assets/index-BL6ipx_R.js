var _m=Object.defineProperty;var jm=(e,t,n)=>t in e?_m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var O=(e,t,n)=>jm(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Gf={exports:{}},Lo={},Kf={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),Em=Symbol.for("react.portal"),Cm=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),Rm=Symbol.for("react.profiler"),Pm=Symbol.for("react.provider"),Mm=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),Am=Symbol.for("react.suspense"),Om=Symbol.for("react.memo"),zm=Symbol.for("react.lazy"),md=Symbol.iterator;function Lm(e){return e===null||typeof e!="object"?null:(e=md&&e[md]||e["@@iterator"],typeof e=="function"?e:null)}var Xf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qf=Object.assign,qf={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=qf,this.updater=n||Xf}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jf(){}Jf.prototype=Tr.prototype;function Ql(e,t,n){this.props=e,this.context=t,this.refs=qf,this.updater=n||Xf}var ql=Ql.prototype=new Jf;ql.constructor=Ql;Qf(ql,Tr.prototype);ql.isPureReactComponent=!0;var xd=Array.isArray,Zf=Object.prototype.hasOwnProperty,Jl={current:null},eh={key:!0,ref:!0,__self:!0,__source:!0};function th(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Zf.call(t,r)&&!eh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vi,type:e,key:s,ref:o,props:i,_owner:Jl.current}}function Dm(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function Im(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bd=/\/+/g;function oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Im(""+e.key):t.toString(36)}function Os(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Vi:case Em:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+oa(o,0):r,xd(i)?(n="",e!=null&&(n=e.replace(bd,"$&/")+"/"),Os(i,t,n,"",function(c){return c})):i!=null&&(Zl(i)&&(i=Dm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",xd(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+oa(s,a);o+=Os(s,t,n,l,i)}else if(l=Lm(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+oa(s,a++),o+=Os(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ts(e,t,n){if(e==null)return e;var r=[],i=0;return Os(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Fm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},zs={transition:null},Bm={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:zs,ReactCurrentOwner:Jl};function nh(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:ts,forEach:function(e,t,n){ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ts(e,function(){t++}),t},toArray:function(e){return ts(e,function(t){return t})||[]},only:function(e){if(!Zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Tr;I.Fragment=Cm;I.Profiler=Rm;I.PureComponent=Ql;I.StrictMode=Nm;I.Suspense=Am;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;I.act=nh;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Jl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Zf.call(t,l)&&!eh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Vi,type:e.type,key:i,ref:s,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:Mm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pm,_context:e},e.Consumer=e};I.createElement=th;I.createFactory=function(e){var t=th.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Tm,render:e}};I.isValidElement=Zl;I.lazy=function(e){return{$$typeof:zm,_payload:{_status:-1,_result:e},_init:Fm}};I.memo=function(e,t){return{$$typeof:Om,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=zs.transition;zs.transition={};try{e()}finally{zs.transition=t}};I.unstable_act=nh;I.useCallback=function(e,t){return Ae.current.useCallback(e,t)};I.useContext=function(e){return Ae.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ae.current.useEffect(e,t)};I.useId=function(){return Ae.current.useId()};I.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ae.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};I.useRef=function(e){return Ae.current.useRef(e)};I.useState=function(e){return Ae.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ae.current.useTransition()};I.version="18.3.1";Kf.exports=I;var w=Kf.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm=w,Wm=Symbol.for("react.element"),Um=Symbol.for("react.fragment"),Vm=Object.prototype.hasOwnProperty,$m=Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ym={key:!0,ref:!0,__self:!0,__source:!0};function rh(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Vm.call(t,r)&&!Ym.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Wm,type:e,key:s,ref:o,props:i,_owner:$m.current}}Lo.Fragment=Um;Lo.jsx=rh;Lo.jsxs=rh;Gf.exports=Lo;var d=Gf.exports,ih={exports:{}},Xe={},sh={exports:{}},oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var z=N.length;N.push(T);e:for(;0<z;){var G=z-1>>>1,Q=N[G];if(0<i(Q,T))N[G]=T,N[z]=Q,z=G;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],z=N.pop();if(z!==T){N[0]=z;e:for(var G=0,Q=N.length,yt=Q>>>1;G<yt;){var Re=2*(G+1)-1,Pt=N[Re],Pe=Re+1,es=N[Pe];if(0>i(Pt,z))Pe<Q&&0>i(es,Pt)?(N[G]=es,N[Pe]=z,G=Pe):(N[G]=Pt,N[Re]=z,G=Re);else if(Pe<Q&&0>i(es,z))N[G]=es,N[Pe]=z,G=Pe;else break e}}return T}function i(N,T){var z=N.sortIndex-T.sortIndex;return z!==0?z:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,x=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=N)r(c),T.sortIndex=T.expirationTime,t(l,T);else break;T=n(c)}}function k(N){if(b=!1,y(N),!x)if(n(l)!==null)x=!0,V(S);else{var T=n(c);T!==null&&X(k,T.startTime-N)}}function S(N,T){x=!1,b&&(b=!1,g(E),E=-1),p=!0;var z=h;try{for(y(T),f=n(l);f!==null&&(!(f.expirationTime>T)||N&&!A());){var G=f.callback;if(typeof G=="function"){f.callback=null,h=f.priorityLevel;var Q=G(f.expirationTime<=T);T=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&r(l),y(T)}else r(l);f=n(l)}if(f!==null)var yt=!0;else{var Re=n(c);Re!==null&&X(k,Re.startTime-T),yt=!1}return yt}finally{f=null,h=z,p=!1}}var _=!1,j=null,E=-1,P=5,R=-1;function A(){return!(e.unstable_now()-R<P)}function L(){if(j!==null){var N=e.unstable_now();R=N;var T=!0;try{T=j(!0,N)}finally{T?Y():(_=!1,j=null)}}else _=!1}var Y;if(typeof m=="function")Y=function(){m(L)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,D=pe.port2;pe.port1.onmessage=L,Y=function(){D.postMessage(null)}}else Y=function(){v(L,0)};function V(N){j=N,_||(_=!0,Y())}function X(N,T){E=v(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||p||(x=!0,V(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var z=h;h=T;try{return N()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return T()}finally{h=z}},e.unstable_scheduleCallback=function(N,T,z){var G=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?G+z:G):z=G,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=z+Q,N={id:u++,callback:T,priorityLevel:N,startTime:z,expirationTime:Q,sortIndex:-1},z>G?(N.sortIndex=z,t(c,N),n(l)===null&&N===n(c)&&(b?(g(E),E=-1):b=!0,X(k,z-G))):(N.sortIndex=Q,t(l,N),x||p||(x=!0,V(S))),N},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(N){var T=h;return function(){var z=h;h=T;try{return N.apply(this,arguments)}finally{h=z}}}})(oh);sh.exports=oh;var Gm=sh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=w,Ke=Gm;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ah=new Set,Si={};function Kn(e,t){kr(e,t),kr(e+"Capture",t)}function kr(e,t){for(Si[e]=t,e=0;e<t.length;e++)ah.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ka=Object.prototype.hasOwnProperty,Xm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yd={},vd={};function Qm(e){return Ka.call(vd,e)?!0:Ka.call(yd,e)?!1:Xm.test(e)?vd[e]=!0:(yd[e]=!0,!1)}function qm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jm(e,t,n,r){if(t===null||typeof t>"u"||qm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function tc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ec,tc);_e[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ec,tc);_e[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ec,tc);_e[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function nc(e,t,n,r){var i=_e.hasOwnProperty(t)?_e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jm(t,n,i,r)&&(n=null),r||i===null?Qm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ns=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),rc=Symbol.for("react.strict_mode"),Xa=Symbol.for("react.profiler"),lh=Symbol.for("react.provider"),ch=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),sc=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),dh=Symbol.for("react.offscreen"),wd=Symbol.iterator;function Wr(e){return e===null||typeof e!="object"?null:(e=wd&&e[wd]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,aa;function ni(e){if(aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);aa=t&&t[1]||""}return`
`+aa+e}var la=!1;function ca(e,t){if(!e||la)return"";la=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{la=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ni(e):""}function Zm(e){switch(e.tag){case 5:return ni(e.type);case 16:return ni("Lazy");case 13:return ni("Suspense");case 19:return ni("SuspenseList");case 0:case 2:case 15:return e=ca(e.type,!1),e;case 11:return e=ca(e.type.render,!1),e;case 1:return e=ca(e.type,!0),e;default:return""}}function Ja(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case Xa:return"Profiler";case rc:return"StrictMode";case Qa:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ch:return(e.displayName||"Context")+".Consumer";case lh:return(e._context.displayName||"Context")+".Provider";case ic:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sc:return t=e.displayName||null,t!==null?t:Ja(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Ja(e(t))}catch{}}return null}function ex(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ja(t);case 8:return t===rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tx(e){var t=uh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rs(e){e._valueTracker||(e._valueTracker=tx(e))}function fh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Za(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hh(e,t){t=t.checked,t!=null&&nc(e,"checked",t,!1)}function el(e,t){hh(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&tl(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tl(e,t,n){(t!=="number"||Zs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ri=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _d(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(ri(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function ph(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var is,mh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _i(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nx=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(e){nx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ui[t]=ui[e]})});function xh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ui.hasOwnProperty(e)&&ui[e]?(""+t).trim():t+"px"}function bh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var rx=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function il(e,t){if(t){if(rx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ol=null;function oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,pr=null,gr=null;function Ed(e){if(e=Gi(e)){if(typeof al!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ho(t),al(e.stateNode,e.type,t))}}function yh(e){pr?gr?gr.push(e):gr=[e]:pr=e}function vh(){if(pr){var e=pr,t=gr;if(gr=pr=null,Ed(e),t)for(e=0;e<t.length;e++)Ed(t[e])}}function wh(e,t){return e(t)}function kh(){}var da=!1;function Sh(e,t,n){if(da)return e(t,n);da=!0;try{return wh(e,t,n)}finally{da=!1,(pr!==null||gr!==null)&&(kh(),vh())}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var r=Ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var ll=!1;if(Ht)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){ll=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{ll=!1}function ix(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var fi=!1,eo=null,to=!1,cl=null,sx={onError:function(e){fi=!0,eo=e}};function ox(e,t,n,r,i,s,o,a,l){fi=!1,eo=null,ix.apply(sx,arguments)}function ax(e,t,n,r,i,s,o,a,l){if(ox.apply(this,arguments),fi){if(fi){var c=eo;fi=!1,eo=null}else throw Error(C(198));to||(to=!0,cl=c)}}function Xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cd(e){if(Xn(e)!==e)throw Error(C(188))}function lx(e){var t=e.alternate;if(!t){if(t=Xn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cd(i),e;if(s===r)return Cd(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function jh(e){return e=lx(e),e!==null?Eh(e):null}function Eh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Eh(e);if(t!==null)return t;e=e.sibling}return null}var Ch=Ke.unstable_scheduleCallback,Nd=Ke.unstable_cancelCallback,cx=Ke.unstable_shouldYield,dx=Ke.unstable_requestPaint,ce=Ke.unstable_now,ux=Ke.unstable_getCurrentPriorityLevel,ac=Ke.unstable_ImmediatePriority,Nh=Ke.unstable_UserBlockingPriority,no=Ke.unstable_NormalPriority,fx=Ke.unstable_LowPriority,Rh=Ke.unstable_IdlePriority,Do=null,Ct=null;function hx(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Do,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:mx,px=Math.log,gx=Math.LN2;function mx(e){return e>>>=0,e===0?32:31-(px(e)/gx|0)|0}var ss=64,os=4194304;function ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ii(a):(s&=o,s!==0&&(r=ii(s)))}else o=n&~i,o!==0?r=ii(o):s!==0&&(r=ii(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function xx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=xx(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ph(){var e=ss;return ss<<=1,!(ss&4194240)&&(ss=64),e}function ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function yx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function lc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Mh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Th,cc,Ah,Oh,zh,ul=!1,as=[],an=null,ln=null,cn=null,Ei=new Map,Ci=new Map,Jt=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rd(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(t.pointerId)}}function Vr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Gi(t),t!==null&&cc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wx(e,t,n,r,i){switch(t){case"focusin":return an=Vr(an,e,t,n,r,i),!0;case"dragenter":return ln=Vr(ln,e,t,n,r,i),!0;case"mouseover":return cn=Vr(cn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ei.set(s,Vr(Ei.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ci.set(s,Vr(Ci.get(s)||null,e,t,n,r,i)),!0}return!1}function Lh(e){var t=An(e.target);if(t!==null){var n=Xn(t);if(n!==null){if(t=n.tag,t===13){if(t=_h(n),t!==null){e.blockedOn=t,zh(e.priority,function(){Ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ol=r,n.target.dispatchEvent(r),ol=null}else return t=Gi(n),t!==null&&cc(t),e.blockedOn=n,!1;t.shift()}return!0}function Pd(e,t,n){Ls(e)&&n.delete(t)}function kx(){ul=!1,an!==null&&Ls(an)&&(an=null),ln!==null&&Ls(ln)&&(ln=null),cn!==null&&Ls(cn)&&(cn=null),Ei.forEach(Pd),Ci.forEach(Pd)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,kx)))}function Ni(e){function t(i){return $r(i,e)}if(0<as.length){$r(as[0],e);for(var n=1;n<as.length;n++){var r=as[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&$r(an,e),ln!==null&&$r(ln,e),cn!==null&&$r(cn,e),Ei.forEach(t),Ci.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)Lh(n),n.blockedOn===null&&Jt.shift()}var mr=Yt.ReactCurrentBatchConfig,io=!0;function Sx(e,t,n,r){var i=U,s=mr.transition;mr.transition=null;try{U=1,dc(e,t,n,r)}finally{U=i,mr.transition=s}}function _x(e,t,n,r){var i=U,s=mr.transition;mr.transition=null;try{U=4,dc(e,t,n,r)}finally{U=i,mr.transition=s}}function dc(e,t,n,r){if(io){var i=fl(e,t,n,r);if(i===null)wa(e,t,r,so,n),Rd(e,r);else if(wx(i,e,t,n,r))r.stopPropagation();else if(Rd(e,r),t&4&&-1<vx.indexOf(e)){for(;i!==null;){var s=Gi(i);if(s!==null&&Th(s),s=fl(e,t,n,r),s===null&&wa(e,t,r,so,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wa(e,t,r,null,n)}}var so=null;function fl(e,t,n,r){if(so=null,e=oc(r),e=An(e),e!==null)if(t=Xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return so=e,null}function Dh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ux()){case ac:return 1;case Nh:return 4;case no:case fx:return 16;case Rh:return 536870912;default:return 16}default:return 16}}var en=null,uc=null,Ds=null;function Ih(){if(Ds)return Ds;var e,t=uc,n=t.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ds=i.slice(e,1<r?1-r:void 0)}function Is(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function Md(){return!1}function Qe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ls:Md,this.isPropagationStopped=Md,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=Qe(Ar),Yi=oe({},Ar,{view:0,detail:0}),jx=Qe(Yi),fa,ha,Yr,Io=oe({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(fa=e.screenX-Yr.screenX,ha=e.screenY-Yr.screenY):ha=fa=0,Yr=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:ha}}),Td=Qe(Io),Ex=oe({},Io,{dataTransfer:0}),Cx=Qe(Ex),Nx=oe({},Yi,{relatedTarget:0}),pa=Qe(Nx),Rx=oe({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Px=Qe(Rx),Mx=oe({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tx=Qe(Mx),Ax=oe({},Ar,{data:0}),Ad=Qe(Ax),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lx[e])?!!t[e]:!1}function hc(){return Dx}var Ix=oe({},Yi,{key:function(e){if(e.key){var t=Ox[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Is(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(e){return e.type==="keypress"?Is(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Is(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fx=Qe(Ix),Bx=oe({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=Qe(Bx),Hx=oe({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),Wx=Qe(Hx),Ux=oe({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=Qe(Ux),$x=oe({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Qe($x),Gx=[9,13,27,32],pc=Ht&&"CompositionEvent"in window,hi=null;Ht&&"documentMode"in document&&(hi=document.documentMode);var Kx=Ht&&"TextEvent"in window&&!hi,Fh=Ht&&(!pc||hi&&8<hi&&11>=hi),zd=" ",Ld=!1;function Bh(e,t){switch(e){case"keyup":return Gx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function Xx(e,t){switch(e){case"compositionend":return Hh(t);case"keypress":return t.which!==32?null:(Ld=!0,zd);case"textInput":return e=t.data,e===zd&&Ld?null:e;default:return null}}function Qx(e,t){if(rr)return e==="compositionend"||!pc&&Bh(e,t)?(e=Ih(),Ds=uc=en=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fh&&t.locale!=="ko"?null:t.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qx[e.type]:t==="textarea"}function Wh(e,t,n,r){yh(r),t=oo(t,"onChange"),0<t.length&&(n=new fc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,Ri=null;function Jx(e){Zh(e,0)}function Fo(e){var t=or(e);if(fh(t))return e}function Zx(e,t){if(e==="change")return t}var Uh=!1;if(Ht){var ga;if(Ht){var ma="oninput"in document;if(!ma){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),ma=typeof Id.oninput=="function"}ga=ma}else ga=!1;Uh=ga&&(!document.documentMode||9<document.documentMode)}function Fd(){pi&&(pi.detachEvent("onpropertychange",Vh),Ri=pi=null)}function Vh(e){if(e.propertyName==="value"&&Fo(Ri)){var t=[];Wh(t,Ri,e,oc(e)),Sh(Jx,t)}}function e0(e,t,n){e==="focusin"?(Fd(),pi=t,Ri=n,pi.attachEvent("onpropertychange",Vh)):e==="focusout"&&Fd()}function t0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(Ri)}function n0(e,t){if(e==="click")return Fo(t)}function r0(e,t){if(e==="input"||e==="change")return Fo(t)}function i0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:i0;function Pi(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ka.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hd(e,t){var n=Bd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bd(n)}}function $h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yh(){for(var e=window,t=Zs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zs(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s0(e){var t=Yh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$h(n.ownerDocument.documentElement,n)){if(r!==null&&gc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Hd(n,s);var o=Hd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var o0=Ht&&"documentMode"in document&&11>=document.documentMode,ir=null,hl=null,gi=null,pl=!1;function Wd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pl||ir==null||ir!==Zs(r)||(r=ir,"selectionStart"in r&&gc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&Pi(gi,r)||(gi=r,r=oo(hl,"onSelect"),0<r.length&&(t=new fc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionend:cs("Transition","TransitionEnd")},xa={},Gh={};Ht&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Bo(e){if(xa[e])return xa[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gh)return xa[e]=t[n];return e}var Kh=Bo("animationend"),Xh=Bo("animationiteration"),Qh=Bo("animationstart"),qh=Bo("transitionend"),Jh=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){Jh.set(e,t),Kn(t,[e])}for(var ba=0;ba<Ud.length;ba++){var ya=Ud[ba],a0=ya.toLowerCase(),l0=ya[0].toUpperCase()+ya.slice(1);kn(a0,"on"+l0)}kn(Kh,"onAnimationEnd");kn(Xh,"onAnimationIteration");kn(Qh,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(qh,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function Vd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ax(r,t,void 0,e),e.currentTarget=null}function Zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Vd(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Vd(i,a,c),s=l}}}if(to)throw e=cl,to=!1,cl=null,e}function q(e,t){var n=t[yl];n===void 0&&(n=t[yl]=new Set);var r=e+"__bubble";n.has(r)||(ep(t,e,2,!1),n.add(r))}function va(e,t,n){var r=0;t&&(r|=4),ep(n,e,r,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function Mi(e){if(!e[ds]){e[ds]=!0,ah.forEach(function(n){n!=="selectionchange"&&(c0.has(n)||va(n,!1,e),va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,va("selectionchange",!1,t))}}function ep(e,t,n,r){switch(Dh(t)){case 1:var i=Sx;break;case 4:i=_x;break;default:i=dc}n=i.bind(null,t,n,e),i=void 0,!ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wa(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=An(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Sh(function(){var c=s,u=oc(n),f=[];e:{var h=Jh.get(e);if(h!==void 0){var p=fc,x=e;switch(e){case"keypress":if(Is(n)===0)break e;case"keydown":case"keyup":p=Fx;break;case"focusin":x="focus",p=pa;break;case"focusout":x="blur",p=pa;break;case"beforeblur":case"afterblur":p=pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Wx;break;case Kh:case Xh:case Qh:p=Px;break;case qh:p=Vx;break;case"scroll":p=jx;break;case"wheel":p=Yx;break;case"copy":case"cut":case"paste":p=Tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Od}var b=(t&4)!==0,v=!b&&e==="scroll",g=b?h!==null?h+"Capture":null:h;b=[];for(var m=c,y;m!==null;){y=m;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,g!==null&&(k=ji(m,g),k!=null&&b.push(Ti(m,k,y)))),v)break;m=m.return}0<b.length&&(h=new p(h,x,null,n,u),f.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==ol&&(x=n.relatedTarget||n.fromElement)&&(An(x)||x[Wt]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?An(x):null,x!==null&&(v=Xn(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(b=Td,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=Od,k="onPointerLeave",g="onPointerEnter",m="pointer"),v=p==null?h:or(p),y=x==null?h:or(x),h=new b(k,m+"leave",p,n,u),h.target=v,h.relatedTarget=y,k=null,An(u)===c&&(b=new b(g,m+"enter",x,n,u),b.target=y,b.relatedTarget=v,k=b),v=k,p&&x)t:{for(b=p,g=x,m=0,y=b;y;y=Qn(y))m++;for(y=0,k=g;k;k=Qn(k))y++;for(;0<m-y;)b=Qn(b),m--;for(;0<y-m;)g=Qn(g),y--;for(;m--;){if(b===g||g!==null&&b===g.alternate)break t;b=Qn(b),g=Qn(g)}b=null}else b=null;p!==null&&$d(f,h,p,b,!1),x!==null&&v!==null&&$d(f,v,x,b,!0)}}e:{if(h=c?or(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=Zx;else if(Dd(h))if(Uh)S=r0;else{S=t0;var _=e0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=n0);if(S&&(S=S(e,c))){Wh(f,S,n,u);break e}_&&_(e,h,c),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&tl(h,"number",h.value)}switch(_=c?or(c):window,e){case"focusin":(Dd(_)||_.contentEditable==="true")&&(ir=_,hl=c,gi=null);break;case"focusout":gi=hl=ir=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,Wd(f,n,u);break;case"selectionchange":if(o0)break;case"keydown":case"keyup":Wd(f,n,u)}var j;if(pc)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else rr?Bh(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Fh&&n.locale!=="ko"&&(rr||E!=="onCompositionStart"?E==="onCompositionEnd"&&rr&&(j=Ih()):(en=u,uc="value"in en?en.value:en.textContent,rr=!0)),_=oo(c,E),0<_.length&&(E=new Ad(E,e,null,n,u),f.push({event:E,listeners:_}),j?E.data=j:(j=Hh(n),j!==null&&(E.data=j)))),(j=Kx?Xx(e,n):Qx(e,n))&&(c=oo(c,"onBeforeInput"),0<c.length&&(u=new Ad("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=j))}Zh(f,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ji(e,n),s!=null&&r.unshift(Ti(e,s,i)),s=ji(e,t),s!=null&&r.push(Ti(e,s,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $d(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ji(n,s),l!=null&&o.unshift(Ti(n,l,a))):i||(l=ji(n,s),l!=null&&o.push(Ti(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var d0=/\r\n?/g,u0=/\u0000|\uFFFD/g;function Yd(e){return(typeof e=="string"?e:""+e).replace(d0,`
`).replace(u0,"")}function us(e,t,n){if(t=Yd(t),Yd(e)!==t&&n)throw Error(C(425))}function ao(){}var gl=null,ml=null;function xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,f0=typeof clearTimeout=="function"?clearTimeout:void 0,Gd=typeof Promise=="function"?Promise:void 0,h0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gd<"u"?function(e){return Gd.resolve(null).then(e).catch(p0)}:bl;function p0(e){setTimeout(function(){throw e})}function ka(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ni(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),Et="__reactFiber$"+Or,Ai="__reactProps$"+Or,Wt="__reactContainer$"+Or,yl="__reactEvents$"+Or,g0="__reactListeners$"+Or,m0="__reactHandles$"+Or;function An(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kd(e);e!==null;){if(n=e[Et])return n;e=Kd(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[Et]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ho(e){return e[Ai]||null}var vl=[],ar=-1;function Sn(e){return{current:e}}function ee(e){0>ar||(e.current=vl[ar],vl[ar]=null,ar--)}function K(e,t){ar++,vl[ar]=e.current,e.current=t}var bn={},Ne=Sn(bn),He=Sn(!1),Bn=bn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function lo(){ee(He),ee(Ne)}function Xd(e,t,n){if(Ne.current!==bn)throw Error(C(168));K(Ne,t),K(He,n)}function tp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,ex(e)||"Unknown",i));return oe({},n,r)}function co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Bn=Ne.current,K(Ne,e),K(He,He.current),!0}function Qd(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=tp(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,ee(He),ee(Ne),K(Ne,e)):ee(He),K(He,n)}var zt=null,Wo=!1,Sa=!1;function np(e){zt===null?zt=[e]:zt.push(e)}function x0(e){Wo=!0,np(e)}function _n(){if(!Sa&&zt!==null){Sa=!0;var e=0,t=U;try{var n=zt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Wo=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),Ch(ac,_n),i}finally{U=t,Sa=!1}}return null}var lr=[],cr=0,uo=null,fo=0,Ze=[],et=0,Hn=null,Dt=1,It="";function Pn(e,t){lr[cr++]=fo,lr[cr++]=uo,uo=e,fo=t}function rp(e,t,n){Ze[et++]=Dt,Ze[et++]=It,Ze[et++]=Hn,Hn=e;var r=Dt;e=It;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dt=1<<32-dt(t)+i|n<<i|r,It=s+e}else Dt=1<<s|n<<i|r,It=e}function mc(e){e.return!==null&&(Pn(e,1),rp(e,1,0))}function xc(e){for(;e===uo;)uo=lr[--cr],lr[cr]=null,fo=lr[--cr],lr[cr]=null;for(;e===Hn;)Hn=Ze[--et],Ze[et]=null,It=Ze[--et],Ze[et]=null,Dt=Ze[--et],Ze[et]=null}var Ge=null,Ye=null,te=!1,ct=null;function ip(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Dt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Ye=null,!0):!1;default:return!1}}function wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(te){var t=Ye;if(t){var n=t;if(!qd(e,t)){if(wl(e))throw Error(C(418));t=dn(n.nextSibling);var r=Ge;t&&qd(e,t)?ip(r,n):(e.flags=e.flags&-4097|2,te=!1,Ge=e)}}else{if(wl(e))throw Error(C(418));e.flags=e.flags&-4097|2,te=!1,Ge=e}}}function Jd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function fs(e){if(e!==Ge)return!1;if(!te)return Jd(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=Ye)){if(wl(e))throw sp(),Error(C(418));for(;t;)ip(e,t),t=dn(t.nextSibling)}if(Jd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ge?dn(e.stateNode.nextSibling):null;return!0}function sp(){for(var e=Ye;e;)e=dn(e.nextSibling)}function _r(){Ye=Ge=null,te=!1}function bc(e){ct===null?ct=[e]:ct.push(e)}var b0=Yt.ReactCurrentBatchConfig;function Gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function hs(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zd(e){var t=e._init;return t(e._payload)}function op(e){function t(g,m){if(e){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=pn(g,m),g.index=0,g.sibling=null,g}function s(g,m,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,y,k){return m===null||m.tag!==6?(m=Pa(y,g.mode,k),m.return=g,m):(m=i(m,y),m.return=g,m)}function l(g,m,y,k){var S=y.type;return S===nr?u(g,m,y.props.children,k,y.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qt&&Zd(S)===m.type)?(k=i(m,y.props),k.ref=Gr(g,m,y),k.return=g,k):(k=$s(y.type,y.key,y.props,null,g.mode,k),k.ref=Gr(g,m,y),k.return=g,k)}function c(g,m,y,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Ma(y,g.mode,k),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function u(g,m,y,k,S){return m===null||m.tag!==7?(m=In(y,g.mode,k,S),m.return=g,m):(m=i(m,y),m.return=g,m)}function f(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Pa(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ns:return y=$s(m.type,m.key,m.props,null,g.mode,y),y.ref=Gr(g,null,m),y.return=g,y;case tr:return m=Ma(m,g.mode,y),m.return=g,m;case Qt:var k=m._init;return f(g,k(m._payload),y)}if(ri(m)||Wr(m))return m=In(m,g.mode,y,null),m.return=g,m;hs(g,m)}return null}function h(g,m,y,k){var S=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(g,m,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ns:return y.key===S?l(g,m,y,k):null;case tr:return y.key===S?c(g,m,y,k):null;case Qt:return S=y._init,h(g,m,S(y._payload),k)}if(ri(y)||Wr(y))return S!==null?null:u(g,m,y,k,null);hs(g,y)}return null}function p(g,m,y,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(y)||null,a(m,g,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ns:return g=g.get(k.key===null?y:k.key)||null,l(m,g,k,S);case tr:return g=g.get(k.key===null?y:k.key)||null,c(m,g,k,S);case Qt:var _=k._init;return p(g,m,y,_(k._payload),S)}if(ri(k)||Wr(k))return g=g.get(y)||null,u(m,g,k,S,null);hs(m,k)}return null}function x(g,m,y,k){for(var S=null,_=null,j=m,E=m=0,P=null;j!==null&&E<y.length;E++){j.index>E?(P=j,j=null):P=j.sibling;var R=h(g,j,y[E],k);if(R===null){j===null&&(j=P);break}e&&j&&R.alternate===null&&t(g,j),m=s(R,m,E),_===null?S=R:_.sibling=R,_=R,j=P}if(E===y.length)return n(g,j),te&&Pn(g,E),S;if(j===null){for(;E<y.length;E++)j=f(g,y[E],k),j!==null&&(m=s(j,m,E),_===null?S=j:_.sibling=j,_=j);return te&&Pn(g,E),S}for(j=r(g,j);E<y.length;E++)P=p(j,g,E,y[E],k),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?E:P.key),m=s(P,m,E),_===null?S=P:_.sibling=P,_=P);return e&&j.forEach(function(A){return t(g,A)}),te&&Pn(g,E),S}function b(g,m,y,k){var S=Wr(y);if(typeof S!="function")throw Error(C(150));if(y=S.call(y),y==null)throw Error(C(151));for(var _=S=null,j=m,E=m=0,P=null,R=y.next();j!==null&&!R.done;E++,R=y.next()){j.index>E?(P=j,j=null):P=j.sibling;var A=h(g,j,R.value,k);if(A===null){j===null&&(j=P);break}e&&j&&A.alternate===null&&t(g,j),m=s(A,m,E),_===null?S=A:_.sibling=A,_=A,j=P}if(R.done)return n(g,j),te&&Pn(g,E),S;if(j===null){for(;!R.done;E++,R=y.next())R=f(g,R.value,k),R!==null&&(m=s(R,m,E),_===null?S=R:_.sibling=R,_=R);return te&&Pn(g,E),S}for(j=r(g,j);!R.done;E++,R=y.next())R=p(j,g,E,R.value,k),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?E:R.key),m=s(R,m,E),_===null?S=R:_.sibling=R,_=R);return e&&j.forEach(function(L){return t(g,L)}),te&&Pn(g,E),S}function v(g,m,y,k){if(typeof y=="object"&&y!==null&&y.type===nr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ns:e:{for(var S=y.key,_=m;_!==null;){if(_.key===S){if(S=y.type,S===nr){if(_.tag===7){n(g,_.sibling),m=i(_,y.props.children),m.return=g,g=m;break e}}else if(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qt&&Zd(S)===_.type){n(g,_.sibling),m=i(_,y.props),m.ref=Gr(g,_,y),m.return=g,g=m;break e}n(g,_);break}else t(g,_);_=_.sibling}y.type===nr?(m=In(y.props.children,g.mode,k,y.key),m.return=g,g=m):(k=$s(y.type,y.key,y.props,null,g.mode,k),k.ref=Gr(g,m,y),k.return=g,g=k)}return o(g);case tr:e:{for(_=y.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Ma(y,g.mode,k),m.return=g,g=m}return o(g);case Qt:return _=y._init,v(g,m,_(y._payload),k)}if(ri(y))return x(g,m,y,k);if(Wr(y))return b(g,m,y,k);hs(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=Pa(y,g.mode,k),m.return=g,g=m),o(g)):n(g,m)}return v}var jr=op(!0),ap=op(!1),ho=Sn(null),po=null,dr=null,yc=null;function vc(){yc=dr=po=null}function wc(e){var t=ho.current;ee(ho),e._currentValue=t}function Sl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){po=e,yc=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(yc!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(po===null)throw Error(C(308));dr=e,po.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var On=null;function kc(e){On===null?On=[e]:On.push(e)}function lp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function Sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,kc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Fs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lc(e,n)}}function eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function go(e,t,n,r){var i=e.updateQueue;qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,b=a;switch(h=t,p=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){f=x.call(p,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,h=typeof x=="function"?x.call(p,f,h):x,h==null)break e;f=oe({},f,h);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Un|=o,e.lanes=o,e.memoizedState=f}}function tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Ki={},Nt=Sn(Ki),Oi=Sn(Ki),zi=Sn(Ki);function zn(e){if(e===Ki)throw Error(C(174));return e}function _c(e,t){switch(K(zi,t),K(Oi,e),K(Nt,Ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rl(t,e)}ee(Nt),K(Nt,t)}function Er(){ee(Nt),ee(Oi),ee(zi)}function dp(e){zn(zi.current);var t=zn(Nt.current),n=rl(t,e.type);t!==n&&(K(Oi,e),K(Nt,n))}function jc(e){Oi.current===e&&(ee(Nt),ee(Oi))}var ie=Sn(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _a=[];function Ec(){for(var e=0;e<_a.length;e++)_a[e]._workInProgressVersionPrimary=null;_a.length=0}var Bs=Yt.ReactCurrentDispatcher,ja=Yt.ReactCurrentBatchConfig,Wn=0,se=null,ge=null,ye=null,xo=!1,mi=!1,Li=0,y0=0;function je(){throw Error(C(321))}function Cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Nc(e,t,n,r,i,s){if(Wn=s,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bs.current=e===null||e.memoizedState===null?S0:_0,e=n(r,i),mi){s=0;do{if(mi=!1,Li=0,25<=s)throw Error(C(301));s+=1,ye=ge=null,t.updateQueue=null,Bs.current=j0,e=n(r,i)}while(mi)}if(Bs.current=bo,t=ge!==null&&ge.next!==null,Wn=0,ye=ge=se=null,xo=!1,t)throw Error(C(300));return e}function Rc(){var e=Li!==0;return Li=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?se.memoizedState=ye=e:ye=ye.next=e,ye}function it(){if(ge===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?se.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(C(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?se.memoizedState=ye=e:ye=ye.next=e}return ye}function Di(e,t){return typeof t=="function"?t(e):t}function Ea(e){var t=it(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,se.lanes|=u,Un|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,ht(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,se.lanes|=s,Un|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ca(e){var t=it(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ht(s,t.memoizedState)||(Ie=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function up(){}function fp(e,t){var n=se,r=it(),i=t(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,Ie=!0),r=r.queue,Pc(gp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Ii(9,pp.bind(null,n,r,i,t),void 0,null),we===null)throw Error(C(349));Wn&30||hp(n,t,i)}return i}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pp(e,t,n,r){t.value=n,t.getSnapshot=r,mp(t)&&xp(e)}function gp(e,t,n){return n(function(){mp(t)&&xp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function xp(e){var t=Ut(e,1);t!==null&&ut(t,e,1,-1)}function nu(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=k0.bind(null,se,e),[t.memoizedState,e]}function Ii(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bp(){return it().memoizedState}function Hs(e,t,n,r){var i=St();se.flags|=e,i.memoizedState=Ii(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var i=it();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Cc(r,o.deps)){i.memoizedState=Ii(t,n,s,r);return}}se.flags|=e,i.memoizedState=Ii(1|t,n,s,r)}function ru(e,t){return Hs(8390656,8,e,t)}function Pc(e,t){return Uo(2048,8,e,t)}function yp(e,t){return Uo(4,2,e,t)}function vp(e,t){return Uo(4,4,e,t)}function wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,wp.bind(null,t,e),n)}function Mc(){}function Sp(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _p(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jp(e,t,n){return Wn&21?(ht(n,t)||(n=Ph(),se.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function v0(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ja.transition;ja.transition={};try{e(!1),t()}finally{U=n,ja.transition=r}}function Ep(){return it().memoizedState}function w0(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cp(e))Np(t,n);else if(n=lp(e,t,n,r),n!==null){var i=Te();ut(n,e,r,i),Rp(n,t,r)}}function k0(e,t,n){var r=hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cp(e))Np(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,o)){var l=t.interleaved;l===null?(i.next=i,kc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=lp(e,t,i,r),n!==null&&(i=Te(),ut(n,e,r,i),Rp(n,t,r))}}function Cp(e){var t=e.alternate;return e===se||t!==null&&t===se}function Np(e,t){mi=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lc(e,n)}}var bo={readContext:rt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},S0={readContext:rt,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hs(4194308,4,wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hs(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=w0.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:nu,useDebugValue:Mc,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=nu(!1),t=e[0];return e=v0.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=St();if(te){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),we===null)throw Error(C(349));Wn&30||hp(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ru(gp.bind(null,r,s,e),[e]),r.flags|=2048,Ii(9,pp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=St(),t=we.identifierPrefix;if(te){var n=It,r=Dt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=y0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_0={readContext:rt,useCallback:Sp,useContext:rt,useEffect:Pc,useImperativeHandle:kp,useInsertionEffect:yp,useLayoutEffect:vp,useMemo:_p,useReducer:Ea,useRef:bp,useState:function(){return Ea(Di)},useDebugValue:Mc,useDeferredValue:function(e){var t=it();return jp(t,ge.memoizedState,e)},useTransition:function(){var e=Ea(Di)[0],t=it().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:fp,useId:Ep,unstable_isNewReconciler:!1},j0={readContext:rt,useCallback:Sp,useContext:rt,useEffect:Pc,useImperativeHandle:kp,useInsertionEffect:yp,useLayoutEffect:vp,useMemo:_p,useReducer:Ca,useRef:bp,useState:function(){return Ca(Di)},useDebugValue:Mc,useDeferredValue:function(e){var t=it();return ge===null?t.memoizedState=e:jp(t,ge.memoizedState,e)},useTransition:function(){var e=Ca(Di)[0],t=it().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:fp,useId:Ep,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vo={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=hn(e),s=Bt(r,i);s.payload=t,n!=null&&(s.callback=n),t=un(e,s,i),t!==null&&(ut(t,e,i,r),Fs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=hn(e),s=Bt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=un(e,s,i),t!==null&&(ut(t,e,i,r),Fs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=hn(e),i=Bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,r),t!==null&&(ut(t,e,r,n),Fs(t,e,r))}};function iu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,s):!0}function Pp(e,t,n){var r=!1,i=bn,s=t.contextType;return typeof s=="object"&&s!==null?s=rt(s):(i=We(t)?Bn:Ne.current,r=t.contextTypes,s=(r=r!=null)?Sr(e,i):bn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vo.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Sc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=rt(s):(s=We(t)?Bn:Ne.current,i.context=Sr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(_l(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vo.enqueueReplaceState(i,i.state,null),go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var n="",r=t;do n+=Zm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Na(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function El(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var E0=typeof WeakMap=="function"?WeakMap:Map;function Mp(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,Ll=r),El(e,t)},n}function Tp(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){El(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){El(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ou(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new E0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=B0.bind(null,e,t,n),t.then(e,e))}function au(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var C0=Yt.ReactCurrentOwner,Ie=!1;function Me(e,t,n,r){t.child=e===null?ap(t,null,n,r):jr(t,e.child,n,r)}function cu(e,t,n,r,i){n=n.render;var s=t.ref;return xr(t,i),r=Nc(e,t,n,r,s,i),n=Rc(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(te&&n&&mc(t),t.flags|=1,Me(e,t,r,i),t.child)}function du(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Fc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ap(e,t,s,r,i)):(e=$s(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(o,r)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=pn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ap(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Pi(s,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return Cl(e,t,n,r,i)}function Op(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(fr,$e),$e|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(fr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(fr,$e),$e|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,K(fr,$e),$e|=r;return Me(e,t,i,n),t.child}function zp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,i){var s=We(n)?Bn:Ne.current;return s=Sr(t,s),xr(t,i),n=Nc(e,t,n,r,s,i),r=Rc(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(te&&r&&mc(t),t.flags|=1,Me(e,t,n,i),t.child)}function uu(e,t,n,r,i){if(We(n)){var s=!0;co(t)}else s=!1;if(xr(t,i),t.stateNode===null)Ws(e,t),Pp(t,n,r),jl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rt(c):(c=We(n)?Bn:Ne.current,c=Sr(t,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&su(t,o,r,c),qt=!1;var h=t.memoizedState;o.state=h,go(t,r,o,i),l=t.memoizedState,a!==r||h!==l||He.current||qt?(typeof u=="function"&&(_l(t,n,u,r),l=t.memoizedState),(a=qt||iu(t,n,a,r,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,cp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:at(t.type,a),o.props=c,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rt(l):(l=We(n)?Bn:Ne.current,l=Sr(t,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&su(t,o,r,l),qt=!1,h=t.memoizedState,o.state=h,go(t,r,o,i);var x=t.memoizedState;a!==f||h!==x||He.current||qt?(typeof p=="function"&&(_l(t,n,p,r),x=t.memoizedState),(c=qt||iu(t,n,c,r,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,s,i)}function Nl(e,t,n,r,i,s){zp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Qd(t,n,!1),Vt(e,t,s);r=t.stateNode,C0.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=jr(t,e.child,null,s),t.child=jr(t,null,a,s)):Me(e,t,a,s),t.memoizedState=r.state,i&&Qd(t,n,!0),t.child}function Lp(e){var t=e.stateNode;t.pendingContext?Xd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xd(e,t.context,!1),_c(e,t.containerInfo)}function fu(e,t,n,r,i){return _r(),bc(i),t.flags|=256,Me(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dp(e,t,n){var r=t.pendingProps,i=ie.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(ie,i&1),e===null)return kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Go(o,r,0,null),e=In(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Pl(n),t.memoizedState=Rl,e):Tc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return N0(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=pn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=pn(a,s):(s=In(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Pl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return s=e.child,e=s.sibling,r=pn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tc(e,t){return t=Go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ps(e,t,n,r){return r!==null&&bc(r),jr(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function N0(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Na(Error(C(422))),ps(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Go({mode:"visible",children:r.children},i,0,null),s=In(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&jr(t,e.child,null,o),t.child.memoizedState=Pl(o),t.memoizedState=Rl,s);if(!(t.mode&1))return ps(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Na(s,r,void 0),ps(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ie||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ut(e,i),ut(r,e,i,-1))}return Ic(),r=Na(Error(C(421))),ps(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=H0.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ye=dn(i.nextSibling),Ge=t,te=!0,ct=null,e!==null&&(Ze[et++]=Dt,Ze[et++]=It,Ze[et++]=Hn,Dt=e.id,It=e.overflow,Hn=t),t=Tc(t,r.children),t.flags|=4096,t)}function hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sl(e.return,t,n)}function Ra(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ip(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Me(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hu(e,n,t);else if(e.tag===19)hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ra(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ra(t,!0,n,null,s);break;case"together":Ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function R0(e,t,n){switch(t.tag){case 3:Lp(t),_r();break;case 5:dp(t);break;case 1:We(t.type)&&co(t);break;case 4:_c(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(ho,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Dp(e,t,n):(K(ie,ie.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);K(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ip(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Op(e,t,n)}return Vt(e,t,n)}var Fp,Ml,Bp,Hp;Fp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ml=function(){};Bp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn(Nt.current);var s=null;switch(n){case"input":i=Za(e,i),r=Za(e,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=nl(e,i),r=nl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ao)}il(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Si.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Si.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&q("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Hp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function P0(e,t,n){var r=t.pendingProps;switch(xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return We(t.type)&&lo(),Ee(t),null;case 3:return r=t.stateNode,Er(),ee(He),ee(Ne),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Fl(ct),ct=null))),Ml(e,t),Ee(t),null;case 5:jc(t);var i=zn(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)Bp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ee(t),null}if(e=zn(Nt.current),fs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Et]=t,r[Ai]=s,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)q(si[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":kd(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":_d(r,s),q("invalid",r)}il(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&us(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&us(r.textContent,a,e),i=["children",""+a]):Si.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":rs(r),Sd(r,s,!0);break;case"textarea":rs(r),jd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Et]=t,e[Ai]=r,Fp(e,t,!1,!1),t.stateNode=e;e:{switch(o=sl(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)q(si[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":kd(e,r),i=Za(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),q("invalid",e);break;case"textarea":_d(e,r),i=nl(e,r),q("invalid",e);break;default:i=r}il(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?bh(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mh(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_i(e,l):typeof l=="number"&&_i(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Si.hasOwnProperty(s)?l!=null&&s==="onScroll"&&q("scroll",e):l!=null&&nc(e,s,l,o))}switch(n){case"input":rs(e),Sd(e,r,!1);break;case"textarea":rs(e),jd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?hr(e,!!r.multiple,s,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=zn(zi.current),zn(Nt.current),fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(s=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:us(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&us(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Ee(t),null;case 13:if(ee(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ye!==null&&t.mode&1&&!(t.flags&128))sp(),_r(),t.flags|=98560,s=!1;else if(s=fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Et]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),s=!1}else ct!==null&&(Fl(ct),ct=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?me===0&&(me=3):Ic())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Er(),Ml(e,t),e===null&&Mi(t.stateNode.containerInfo),Ee(t),null;case 10:return wc(t.type._context),Ee(t),null;case 17:return We(t.type)&&lo(),Ee(t),null;case 19:if(ee(ie),s=t.memoizedState,s===null)return Ee(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Kr(s,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Kr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ie,ie.current&1|2),t.child}e=e.sibling}s.tail!==null&&ce()>Nr&&(t.flags|=128,r=!0,Kr(s,!1),t.lanes=4194304)}else{if(!r)if(e=mo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Ee(t),null}else 2*ce()-s.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,Kr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ce(),t.sibling=null,n=ie.current,K(ie,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Dc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function M0(e,t){switch(xc(t),t.tag){case 1:return We(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),ee(He),ee(Ne),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jc(t),null;case 13:if(ee(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ie),null;case 4:return Er(),null;case 10:return wc(t.type._context),null;case 22:case 23:return Dc(),null;case 24:return null;default:return null}}var gs=!1,Ce=!1,T0=typeof WeakSet=="function"?WeakSet:Set,M=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function Tl(e,t,n){try{n()}catch(r){le(e,t,r)}}var pu=!1;function A0(e,t){if(gl=io,e=Yh(),gc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=e,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++c===i&&(a=o),h===s&&++u===r&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ml={focusedElem:e,selectionRange:n},io=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,v=x.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:at(t.type,b),v);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){le(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return x=pu,pu=!1,x}function xi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tl(t,n,s)}i=i.next}while(i!==r)}}function $o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wp(e){var t=e.alternate;t!==null&&(e.alternate=null,Wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Ai],delete t[yl],delete t[g0],delete t[m0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Up(e){return e.tag===5||e.tag===3||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ao));else if(r!==4&&(e=e.child,e!==null))for(Ol(e,t,n),e=e.sibling;e!==null;)Ol(e,t,n),e=e.sibling}function zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}var ke=null,lt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Vp(e,t,n),n=n.sibling}function Vp(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 5:Ce||ur(n,t);case 6:var r=ke,i=lt;ke=null,Kt(e,t,n),ke=r,lt=i,ke!==null&&(lt?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(lt?(e=ke,n=n.stateNode,e.nodeType===8?ka(e.parentNode,n):e.nodeType===1&&ka(e,n),Ni(e)):ka(ke,n.stateNode));break;case 4:r=ke,i=lt,ke=n.stateNode.containerInfo,lt=!0,Kt(e,t,n),ke=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tl(n,t,o),i=i.next}while(i!==r)}Kt(e,t,n);break;case 1:if(!Ce&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,t,a)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Kt(e,t,n),Ce=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new T0),t.forEach(function(r){var i=W0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,lt=!1;break e;case 3:ke=a.stateNode.containerInfo,lt=!0;break e;case 4:ke=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(ke===null)throw Error(C(160));Vp(s,o,i),ke=null,lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){le(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$p(t,e),t=t.sibling}function $p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),vt(e),r&4){try{xi(3,e,e.return),$o(3,e)}catch(b){le(e,e.return,b)}try{xi(5,e,e.return)}catch(b){le(e,e.return,b)}}break;case 1:ot(t,e),vt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(ot(t,e),vt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var i=e.stateNode;try{_i(i,"")}catch(b){le(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hh(i,s),sl(a,o);var c=sl(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?bh(i,f):u==="dangerouslySetInnerHTML"?mh(i,f):u==="children"?_i(i,f):nc(i,u,f,c)}switch(a){case"input":el(i,s);break;case"textarea":ph(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hr(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?hr(i,!!s.multiple,s.defaultValue,!0):hr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ai]=s}catch(b){le(e,e.return,b)}}break;case 6:if(ot(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){le(e,e.return,b)}}break;case 3:if(ot(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(b){le(e,e.return,b)}break;case 4:ot(t,e),vt(e);break;case 13:ot(t,e),vt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zc=ce())),r&4&&mu(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(c=Ce)||u,ot(t,e),Ce=c):ot(t,e),vt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(M=e,u=e.child;u!==null;){for(f=M=u;M!==null;){switch(h=M,p=h.child,h.tag){case 0:case 11:case 14:case 15:xi(4,h,h.return);break;case 1:ur(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){le(r,n,b)}}break;case 5:ur(h,h.return);break;case 22:if(h.memoizedState!==null){bu(f);continue}}p!==null?(p.return=h,M=p):bu(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xh("display",o))}catch(b){le(e,e.return,b)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){le(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ot(t,e),vt(e),r&4&&mu(e);break;case 21:break;default:ot(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Up(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_i(i,""),r.flags&=-33);var s=gu(e);zl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gu(e);Ol(e,a,o);break;default:throw Error(C(161))}}catch(l){le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function O0(e,t,n){M=e,Yp(e)}function Yp(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ce;a=gs;var c=Ce;if(gs=o,(Ce=l)&&!c)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?yu(i):l!==null?(l.return=o,M=l):yu(i);for(;s!==null;)M=s,Yp(s),s=s.sibling;M=i,gs=a,Ce=c}xu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):xu(e)}}function xu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||$o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&tu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ni(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ce||t.flags&512&&Al(t)}catch(h){le(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function bu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function yu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$o(4,t)}catch(l){le(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){le(t,i,l)}}var s=t.return;try{Al(t)}catch(l){le(t,s,l)}break;case 5:var o=t.return;try{Al(t)}catch(l){le(t,o,l)}}}catch(l){le(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var z0=Math.ceil,yo=Yt.ReactCurrentDispatcher,Ac=Yt.ReactCurrentOwner,nt=Yt.ReactCurrentBatchConfig,B=0,we=null,fe=null,Se=0,$e=0,fr=Sn(0),me=0,Fi=null,Un=0,Yo=0,Oc=0,bi=null,Le=null,zc=0,Nr=1/0,Ot=null,vo=!1,Ll=null,fn=null,ms=!1,tn=null,wo=0,yi=0,Dl=null,Us=-1,Vs=0;function Te(){return B&6?ce():Us!==-1?Us:Us=ce()}function hn(e){return e.mode&1?B&2&&Se!==0?Se&-Se:b0.transition!==null?(Vs===0&&(Vs=Ph()),Vs):(e=U,e!==0||(e=window.event,e=e===void 0?16:Dh(e.type)),e):1}function ut(e,t,n,r){if(50<yi)throw yi=0,Dl=null,Error(C(185));$i(e,n,r),(!(B&2)||e!==we)&&(e===we&&(!(B&2)&&(Yo|=n),me===4&&Zt(e,Se)),Ue(e,r),n===1&&B===0&&!(t.mode&1)&&(Nr=ce()+500,Wo&&_n()))}function Ue(e,t){var n=e.callbackNode;bx(e,t);var r=ro(e,e===we?Se:0);if(r===0)n!==null&&Nd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nd(n),t===1)e.tag===0?x0(vu.bind(null,e)):np(vu.bind(null,e)),h0(function(){!(B&6)&&_n()}),n=null;else{switch(Mh(r)){case 1:n=ac;break;case 4:n=Nh;break;case 16:n=no;break;case 536870912:n=Rh;break;default:n=no}n=eg(n,Gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gp(e,t){if(Us=-1,Vs=0,B&6)throw Error(C(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=ro(e,e===we?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ko(e,r);else{t=r;var i=B;B|=2;var s=Xp();(we!==e||Se!==t)&&(Ot=null,Nr=ce()+500,Dn(e,t));do try{I0();break}catch(a){Kp(e,a)}while(!0);vc(),yo.current=s,B=i,fe!==null?t=0:(we=null,Se=0,t=me)}if(t!==0){if(t===2&&(i=dl(e),i!==0&&(r=i,t=Il(e,i))),t===1)throw n=Fi,Dn(e,0),Zt(e,r),Ue(e,ce()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!L0(i)&&(t=ko(e,r),t===2&&(s=dl(e),s!==0&&(r=s,t=Il(e,s))),t===1))throw n=Fi,Dn(e,0),Zt(e,r),Ue(e,ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Mn(e,Le,Ot);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=zc+500-ce(),10<t)){if(ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bl(Mn.bind(null,e,Le,Ot),t);break}Mn(e,Le,Ot);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*z0(r/1960))-r,10<r){e.timeoutHandle=bl(Mn.bind(null,e,Le,Ot),r);break}Mn(e,Le,Ot);break;case 5:Mn(e,Le,Ot);break;default:throw Error(C(329))}}}return Ue(e,ce()),e.callbackNode===n?Gp.bind(null,e):null}function Il(e,t){var n=bi;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=ko(e,t),e!==2&&(t=Le,Le=n,t!==null&&Fl(t)),e}function Fl(e){Le===null?Le=e:Le.push.apply(Le,e)}function L0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Oc,t&=~Yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function vu(e){if(B&6)throw Error(C(327));br();var t=ro(e,0);if(!(t&1))return Ue(e,ce()),null;var n=ko(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=Fi,Dn(e,0),Zt(e,t),Ue(e,ce()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Le,Ot),Ue(e,ce()),null}function Lc(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Nr=ce()+500,Wo&&_n())}}function Vn(e){tn!==null&&tn.tag===0&&!(B&6)&&br();var t=B;B|=1;var n=nt.transition,r=U;try{if(nt.transition=null,U=1,e)return e()}finally{U=r,nt.transition=n,B=t,!(B&6)&&_n()}}function Dc(){$e=fr.current,ee(fr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,f0(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:Er(),ee(He),ee(Ne),Ec();break;case 5:jc(r);break;case 4:Er();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:wc(r.type._context);break;case 22:case 23:Dc()}n=n.return}if(we=e,fe=e=pn(e.current,null),Se=$e=t,me=0,Fi=null,Oc=Yo=Un=0,Le=bi=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}On=null}return e}function Kp(e,t){do{var n=fe;try{if(vc(),Bs.current=bo,xo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xo=!1}if(Wn=0,ye=ge=se=null,mi=!1,Li=0,Ac.current=null,n===null||n.return===null){me=1,Fi=t,fe=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Se,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=au(o);if(p!==null){p.flags&=-257,lu(p,o,a,s,t),p.mode&1&&ou(s,c,t),t=p,l=c;var x=t.updateQueue;if(x===null){var b=new Set;b.add(l),t.updateQueue=b}else x.add(l);break e}else{if(!(t&1)){ou(s,c,t),Ic();break e}l=Error(C(426))}}else if(te&&a.mode&1){var v=au(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),lu(v,o,a,s,t),bc(Cr(l,a));break e}}s=l=Cr(l,a),me!==4&&(me=2),bi===null?bi=[s]:bi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Mp(s,l,t);eu(s,g);break e;case 1:a=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(fn===null||!fn.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=Tp(s,a,t);eu(s,k);break e}}s=s.return}while(s!==null)}qp(n)}catch(S){t=S,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Xp(){var e=yo.current;return yo.current=bo,e===null?bo:e}function Ic(){(me===0||me===3||me===2)&&(me=4),we===null||!(Un&268435455)&&!(Yo&268435455)||Zt(we,Se)}function ko(e,t){var n=B;B|=2;var r=Xp();(we!==e||Se!==t)&&(Ot=null,Dn(e,t));do try{D0();break}catch(i){Kp(e,i)}while(!0);if(vc(),B=n,yo.current=r,fe!==null)throw Error(C(261));return we=null,Se=0,me}function D0(){for(;fe!==null;)Qp(fe)}function I0(){for(;fe!==null&&!cx();)Qp(fe)}function Qp(e){var t=Zp(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?qp(e):fe=t,Ac.current=null}function qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=M0(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,fe=null;return}}else if(n=P0(n,t,$e),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);me===0&&(me=5)}function Mn(e,t,n){var r=U,i=nt.transition;try{nt.transition=null,U=1,F0(e,t,n,r)}finally{nt.transition=i,U=r}return null}function F0(e,t,n,r){do br();while(tn!==null);if(B&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(yx(e,s),e===we&&(fe=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ms||(ms=!0,eg(no,function(){return br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nt.transition,nt.transition=null;var o=U;U=1;var a=B;B|=4,Ac.current=null,A0(e,n),$p(n,e),s0(ml),io=!!gl,ml=gl=null,e.current=n,O0(n),dx(),B=a,U=o,nt.transition=s}else e.current=n;if(ms&&(ms=!1,tn=e,wo=i),s=e.pendingLanes,s===0&&(fn=null),hx(n.stateNode),Ue(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vo)throw vo=!1,e=Ll,Ll=null,e;return wo&1&&e.tag!==0&&br(),s=e.pendingLanes,s&1?e===Dl?yi++:(yi=0,Dl=e):yi=0,_n(),null}function br(){if(tn!==null){var e=Mh(wo),t=nt.transition,n=U;try{if(nt.transition=null,U=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,wo=0,B&6)throw Error(C(331));var i=B;for(B|=4,M=e.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(M=c;M!==null;){var u=M;switch(u.tag){case 0:case 11:case 15:xi(8,u,s)}var f=u.child;if(f!==null)f.return=u,M=f;else for(;M!==null;){u=M;var h=u.sibling,p=u.return;if(Wp(u),u===c){M=null;break}if(h!==null){h.return=p,M=h;break}M=p}}}var x=s.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var v=b.sibling;b.sibling=null,b=v}while(b!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,M=g;break e}M=s.return}}var m=e.current;for(M=m;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=m;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$o(9,a)}}catch(S){le(a,a.return,S)}if(a===o){M=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,M=k;break e}M=a.return}}if(B=i,_n(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Do,e)}catch{}r=!0}return r}finally{U=n,nt.transition=t}}return!1}function wu(e,t,n){t=Cr(n,t),t=Mp(e,t,1),e=un(e,t,1),t=Te(),e!==null&&($i(e,1,t),Ue(e,t))}function le(e,t,n){if(e.tag===3)wu(e,e,n);else for(;t!==null;){if(t.tag===3){wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=Cr(n,e),e=Tp(t,e,1),t=un(t,e,1),e=Te(),t!==null&&($i(t,1,e),Ue(t,e));break}}t=t.return}}function B0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Se&n)===n&&(me===4||me===3&&(Se&130023424)===Se&&500>ce()-zc?Dn(e,0):Oc|=n),Ue(e,t)}function Jp(e,t){t===0&&(e.mode&1?(t=os,os<<=1,!(os&130023424)&&(os=4194304)):t=1);var n=Te();e=Ut(e,t),e!==null&&($i(e,t,n),Ue(e,n))}function H0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jp(e,n)}function W0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Jp(e,n)}var Zp;Zp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,R0(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,te&&t.flags&1048576&&rp(t,fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ws(e,t),e=t.pendingProps;var i=Sr(t,Ne.current);xr(t,n),i=Nc(null,t,r,e,i,n);var s=Rc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(s=!0,co(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sc(t),i.updater=Vo,t.stateNode=i,i._reactInternals=t,jl(t,r,e,n),t=Nl(null,t,r,!0,s,n)):(t.tag=0,te&&s&&mc(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=V0(r),e=at(r,e),i){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=uu(null,t,r,e,n);break e;case 11:t=cu(null,t,r,e,n);break e;case 14:t=du(null,t,r,at(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Cl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),uu(e,t,r,i,n);case 3:e:{if(Lp(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,cp(e,t),go(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Cr(Error(C(423)),t),t=fu(e,t,r,n,i);break e}else if(r!==i){i=Cr(Error(C(424)),t),t=fu(e,t,r,n,i);break e}else for(Ye=dn(t.stateNode.containerInfo.firstChild),Ge=t,te=!0,ct=null,n=ap(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){t=Vt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return dp(t),e===null&&kl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,xl(r,i)?o=null:s!==null&&xl(r,s)&&(t.flags|=32),zp(e,t),Me(e,t,o,n),t.child;case 6:return e===null&&kl(t),null;case 13:return Dp(e,t,n);case 4:return _c(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),cu(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,K(ho,r._currentValue),r._currentValue=o,s!==null)if(ht(s.value,o)){if(s.children===i.children&&!He.current){t=Vt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sl(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=rt(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=at(r,t.pendingProps),i=at(r.type,i),du(e,t,r,i,n);case 15:return Ap(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Ws(e,t),t.tag=1,We(r)?(e=!0,co(t)):e=!1,xr(t,n),Pp(t,r,i),jl(t,r,i,n),Nl(null,t,r,!0,e,n);case 19:return Ip(e,t,n);case 22:return Op(e,t,n)}throw Error(C(156,t.tag))};function eg(e,t){return Ch(e,t)}function U0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new U0(e,t,n,r)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function V0(e){if(typeof e=="function")return Fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ic)return 11;if(e===sc)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $s(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Fc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case nr:return In(n.children,i,s,t);case rc:o=8,i|=8;break;case Xa:return e=tt(12,n,t,i|2),e.elementType=Xa,e.lanes=s,e;case Qa:return e=tt(13,n,t,i),e.elementType=Qa,e.lanes=s,e;case qa:return e=tt(19,n,t,i),e.elementType=qa,e.lanes=s,e;case dh:return Go(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lh:o=10;break e;case ch:o=9;break e;case ic:o=11;break e;case sc:o=14;break e;case Qt:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=tt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function In(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Go(e,t,n,r){return e=tt(22,e,r,t),e.elementType=dh,e.lanes=n,e.stateNode={isHidden:!1},e}function Pa(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Ma(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,i,s,o,a,l){return e=new $0(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=tt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(s),e}function Y0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tg(e){if(!e)return bn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(We(n))return tp(e,n,t)}return t}function ng(e,t,n,r,i,s,o,a,l){return e=Bc(n,r,!0,e,i,s,o,a,l),e.context=tg(null),n=e.current,r=Te(),i=hn(n),s=Bt(r,i),s.callback=t??null,un(n,s,i),e.current.lanes=i,$i(e,i,r),Ue(e,r),e}function Ko(e,t,n,r){var i=t.current,s=Te(),o=hn(i);return n=tg(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(i,t,o),e!==null&&(ut(e,i,o,s),Fs(e,i,o)),o}function So(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hc(e,t){ku(e,t),(e=e.alternate)&&ku(e,t)}function G0(){return null}var rg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wc(e){this._internalRoot=e}Xo.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ko(e,t,null,null)};Xo.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){Ko(null,e,null,null)}),t[Wt]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&Lh(e)}};function Uc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function K0(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=So(o);s.call(c)}}var o=ng(t,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=o,e[Wt]=o.current,Mi(e.nodeType===8?e.parentNode:e),Vn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=So(l);a.call(c)}}var l=Bc(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=l,e[Wt]=l.current,Mi(e.nodeType===8?e.parentNode:e),Vn(function(){Ko(t,l,n,r)}),l}function qo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=So(o);a.call(l)}}Ko(t,o,e,i)}else o=K0(n,t,e,i,r);return So(o)}Th=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ii(t.pendingLanes);n!==0&&(lc(t,n|1),Ue(t,ce()),!(B&6)&&(Nr=ce()+500,_n()))}break;case 13:Vn(function(){var r=Ut(e,1);if(r!==null){var i=Te();ut(r,e,1,i)}}),Hc(e,1)}};cc=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Te();ut(t,e,134217728,n)}Hc(e,134217728)}};Ah=function(e){if(e.tag===13){var t=hn(e),n=Ut(e,t);if(n!==null){var r=Te();ut(n,e,t,r)}Hc(e,t)}};Oh=function(){return U};zh=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};al=function(e,t,n){switch(t){case"input":if(el(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ho(r);if(!i)throw Error(C(90));fh(r),el(r,i)}}}break;case"textarea":ph(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};wh=Lc;kh=Vn;var X0={usingClientEntryPoint:!1,Events:[Gi,or,Ho,yh,vh,Lc]},Xr={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q0={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jh(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Do=xs.inject(Q0),Ct=xs}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uc(t))throw Error(C(200));return Y0(e,t,null,n)};Xe.createRoot=function(e,t){if(!Uc(e))throw Error(C(299));var n=!1,r="",i=rg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bc(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,Mi(e.nodeType===8?e.parentNode:e),new Wc(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=jh(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Vn(e)};Xe.hydrate=function(e,t,n){if(!Qo(t))throw Error(C(200));return qo(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!Uc(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ng(t,null,e,1,n??null,i,!1,s,o),e[Wt]=t.current,Mi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Xo(t)};Xe.render=function(e,t,n){if(!Qo(t))throw Error(C(200));return qo(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!Qo(e))throw Error(C(40));return e._reactRootContainer?(Vn(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Lc;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return qo(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig)}catch(e){console.error(e)}}ig(),ih.exports=Xe;var q0=ih.exports,sg,_u=q0;sg=_u.createRoot,_u.hydrateRoot;/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vc=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,og=/^[\\/]{2}/;function J0(e,t){return t+e.replace(/\\/g,"/")}var ju="popstate";function Eu(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Z0(e={}){function t(r,i){var c;let s=(c=i.state)==null?void 0:c.masked,{pathname:o,search:a,hash:l}=s||r.location;return Bl("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:$n(i)}return tb(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function pt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function eb(){return Math.random().toString(36).substring(2,10)}function Cu(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Bl(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?zr(t):t,state:n,key:t&&t.key||r||eb(),mask:i}}function $n({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function tb(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,c=u();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function u(){return(o.state||{idx:null}).idx}function f(){a="POP";let v=u(),g=v==null?null:v-c;c=v,l&&l({action:a,location:b.location,delta:g})}function h(v,g){a="PUSH";let m=Eu(v)?v:Bl(b.location,v,g);c=u()+1;let y=Cu(m,c),k=b.createHref(m.mask||m);try{o.pushState(y,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(k)}s&&l&&l({action:a,location:b.location,delta:1})}function p(v,g){a="REPLACE";let m=Eu(v)?v:Bl(b.location,v,g);c=u();let y=Cu(m,c),k=b.createHref(m.mask||m);o.replaceState(y,"",k),s&&l&&l({action:a,location:b.location,delta:0})}function x(v){return nb(i,v)}let b={get action(){return a},get location(){return e(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ju,f),l=v,()=>{i.removeEventListener(ju,f),l=null}},createHref(v){return t(i,v)},createURL:x,encodeLocation(v){let g=x(v);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(v){return o.go(v)}};return b}function nb(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),ne(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:$n(t);return i=i.replace(/ $/,"%20"),!n&&og.test(i)&&(i=r+i),new URL(i,r)}function ag(e,t,n="/"){return rb(e,t,n,!1)}function rb(e,t,n,r,i){let s=typeof t=="string"?zr(t):t,o=$t(s.pathname||"/",n);if(o==null)return null;let a=ib(e),l=null,c=gb(o);for(let u=0;l==null&&u<a.length;++u)l=pb(a[u],c,r);return l}function ib(e){let t=lg(e);return sb(t),t}function lg(e,t=[],n=[],r="",i=!1){let s=(o,a,l=i,c)=>{let u={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(u.relativePath.startsWith("/")){if(!u.relativePath.startsWith(r)&&l)return;ne(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length)}let f=ft([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(ne(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),lg(o.children,t,h,f,l)),!(o.path==null&&!o.index)&&t.push({path:f,score:fb(f,o.index),routesMeta:h.map((p,x)=>{let[b,v]=ug(p.relativePath,p.caseSensitive,x===h.length-1);return{...p,matcher:b,compiledParams:v}})})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let c of cg(o.path))s(o,a,!0,c)}),t}function cg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=cg(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function sb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var ob=/^:[\w-]+$/,ab=3,lb=2,cb=1,db=10,ub=-2,Nu=e=>e==="*";function fb(e,t){let n=e.split("/"),r=n.length;return n.some(Nu)&&(r+=ub),t&&(r+=lb),n.filter(i=>!Nu(i)).reduce((i,s)=>i+(ob.test(s)?ab:s===""?cb:db),r)}function hb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function pb(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?t:t.slice(s.length)||"/",f={path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h=l.matcher&&l.compiledParams?dg(f,u,l.matcher,l.compiledParams):_o(f,u),p=l.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=_o({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:ft([s,h.pathname]),pathnameBase:bb(ft([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=ft([s,h.pathnameBase]))}return o}function _o(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ug(e.path,e.caseSensitive,e.end);return dg(e,t,n,r)}function dg(e,t,n,r){let i=t.match(n);if(!i)return null;let s=i[0],o=Rr(s,1),a=i.slice(1);return{params:r.reduce((c,{paramName:u,isOptional:f},h)=>{if(u==="*"){let x=a[h]||"";o=Rr(s.slice(0,s.length-x.length),1)}const p=a[h];return f&&!p?c[u]=void 0:c[u]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function ug(e,t=!1,n=!0){pt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l,c,u)=>{if(r.push({paramName:a,isOptional:l!=null}),l){let f=u.charAt(c+o.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function gb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return pt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function $t(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mb(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zr(e):e,s;return n?(n=fg(n),n.startsWith("/")||n.startsWith("\\")?s=Ru(n.substring(1),"/"):s=Ru(n,t)):s=t,{pathname:s,search:yb(r),hash:vb(i)}}function Ru(e,t){let n=Rr(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ta(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $c(e){let t=xb(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Jo(e,t,n,r=!1){let i;typeof e=="string"?i=zr(e):(i={...e},ne(!i.pathname||!i.pathname.includes("?"),Ta("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Ta("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Ta("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=mb(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var fg=e=>e.replace(/[\\/]{2,}/g,"/"),ft=e=>fg(e.join("/"));function Rr(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var bb=e=>Rr(e).replace(/^\/*/,"/"),yb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,wb=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function kb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Sb(e){let t=e.map(n=>n.route.path).filter(Boolean);return ft(t)||"/"}var hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pg(e,t){let n=e;if(typeof n!="string"||!Vc.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(hg)try{let s=new URL(window.location.href),o=og.test(n)?new URL(J0(n,s.protocol)):new URL(n),a=$t(o.pathname,t);o.origin===s.origin&&a!=null?n=a+o.search+o.hash:i=!0}catch{pt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Pu=new URL("http://localhost");function Yc(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),Pu)}catch{return Pu}}function Aa(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function _b(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===""||e.slice(n.length).startsWith("//"):!1}function Gc(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let s=new URL(t,n),o=i!=null&&!Aa(i,n),a=!Aa(s,n);if(r==="reject"){if(o||a)throw new Error("External navigation is not allowed")}else if(a&&(i==null||!_b(e,i)||!Aa(i,s)))throw new Error("External navigation is not allowed")}var gg=["POST","PUT","PATCH","DELETE"];new Set(gg);var jb=["GET",...gg];new Set(jb);var Eb=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Cb(e){try{return Eb.includes(new URL(e).protocol)}catch{return!1}}var Lr=w.createContext(null);Lr.displayName="DataRouter";var Zo=w.createContext(null);Zo.displayName="DataRouterState";var mg=w.createContext(!1);function Nb(){return w.useContext(mg)}var xg=w.createContext({isTransitioning:!1});xg.displayName="ViewTransition";var Rb=w.createContext(new Map);Rb.displayName="Fetchers";var Pb=w.createContext(null);Pb.displayName="Await";var qe=w.createContext(null);qe.displayName="Navigation";var Xi=w.createContext(null);Xi.displayName="Location";var mt=w.createContext({outlet:null,matches:[],isDataRoute:!1});mt.displayName="Route";var Kc=w.createContext(null);Kc.displayName="RouteError";var bg="REACT_ROUTER_ERROR",Mb="REDIRECT",Tb="ROUTE_ERROR_RESPONSE";function Ab(e){if(e.startsWith(`${bg}:${Mb}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Ob(e){if(e.startsWith(`${bg}:${Tb}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new wb(t.status,t.statusText,t.data)}catch{}}function zb(e,{relative:t}={}){ne(Dr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=w.useContext(qe),{hash:i,pathname:s,search:o}=Qi(e,{relative:t}),a=s;return n!=="/"&&(a=s==="/"?n:ft([n,s])),r.createHref({pathname:a,search:o,hash:i})}function Dr(){return w.useContext(Xi)!=null}function xt(){return ne(Dr(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Xi).location}var yg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vg(e){w.useContext(qe).static||w.useLayoutEffect(e)}function jn(){let{isDataRoute:e}=w.useContext(mt);return e?Kb():Lb()}function Lb(){ne(Dr(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Lr),{basename:t,navigator:n}=w.useContext(qe),{matches:r}=w.useContext(mt),{pathname:i}=xt(),s=JSON.stringify($c(r)),o=w.useRef(!1);return vg(()=>{o.current=!0}),w.useCallback((l,c={})=>{if(pt(o.current,yg),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=Jo(l,JSON.parse(s),i,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:ft([t,u.pathname])),Gc(typeof l=="string"?l:$n(l),n.createHref(u),Yc(n),"reject"),(c.replace?n.replace:n.push)(u,c.state,c)},[t,n,s,i,e])}w.createContext(null);function wg(){let{matches:e}=w.useContext(mt),t=e[e.length-1];return(t==null?void 0:t.params)??{}}function Qi(e,{relative:t}={}){let{matches:n}=w.useContext(mt),{pathname:r}=xt(),i=JSON.stringify($c(n));return w.useMemo(()=>Jo(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function Db(e,t){return kg(e,t)}function kg(e,t,n){var v;ne(Dr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=w.useContext(qe),{matches:i}=w.useContext(mt),s=i[i.length-1],o=s?s.params:{},a=s?s.pathname:"/",l=s?s.pathnameBase:"/",c=s&&s.route;{let g=c&&c.path||"";_g(a,!c||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let u=xt(),f;if(t){let g=typeof t=="string"?zr(t):t;ne(l==="/"||((v=g.pathname)==null?void 0:v.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=u;let h=f.pathname||"/",p=h;if(l!=="/"){let g=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=n&&n.state.matches.length?n.state.matches.map(g=>Object.assign(g,{route:n.manifest[g.route.id]||g.route})):ag(e,{pathname:p});pt(c||x!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),pt(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=Wb(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:ft([l,r.encodeLocation?r.encodeLocation(g.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:ft([l,r.encodeLocation?r.encodeLocation(g.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:g.pathnameBase])})),i,n);return t&&b?w.createElement(Xi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},b):b}function Ib(){let e=Gb(),t=kb(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:s},"ErrorBoundary")," or"," ",w.createElement("code",{style:s},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}var Fb=w.createElement(Ib,null),Sg=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Ob(e.digest);n&&(e=n)}let t=e!==void 0?w.createElement(mt.Provider,{value:this.props.routeContext},w.createElement(Kc.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?w.createElement(Bb,{error:e},t):t}};Sg.contextType=mg;var Oa=new WeakMap;function Bb({children:e,error:t}){let{basename:n,navigator:r}=w.useContext(qe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=Ab(t.digest);if(i){let s=Oa.get(t);if(s)throw s;let o=pg(i.location,n),a=o.absoluteURL||o.to;if(Gc(i.location,a,Yc(r),"allow-explicit"),Cb(a))throw new Error("Invalid redirect location");if(hg&&!Oa.get(t))if(o.isExternal||i.reloadDocument)window.location.href=a;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:i.replace}));throw Oa.set(t,l),l}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a}`})}}return e}function Hb({routeContext:e,match:t,children:n}){let r=w.useContext(Lr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(mt.Provider,{value:e},n)}function Wb(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,s=r==null?void 0:r.errors;if(s!=null){let u=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);ne(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let o=!1,a=-1;if(n&&r){o=r.renderFallback;for(let u=0;u<i.length;u++){let f=i[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(a=u),f.route.id){let{loaderData:h,errors:p}=r,x=f.route.loader&&!h.hasOwnProperty(f.route.id)&&(!p||p[f.route.id]===void 0);if(f.route.lazy||x){n.isStatic&&(o=!0),a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}}let l=n==null?void 0:n.onError,c=r&&l?(u,f)=>{var h,p;l(u,{location:r.location,params:((p=(h=r.matches)==null?void 0:h[0])==null?void 0:p.params)??{},pattern:Sb(r.matches),errorInfo:f})}:void 0;return i.reduceRight((u,f,h)=>{let p,x=!1,b=null,v=null;r&&(p=s&&f.route.id?s[f.route.id]:void 0,b=f.route.errorElement||Fb,o&&(a<0&&h===0?(_g("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,v=null):a===h&&(x=!0,v=f.route.hydrateFallbackElement||null)));let g=t.concat(i.slice(0,h+1)),m=()=>{let y;return p?y=b:x?y=v:f.route.Component?y=w.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=u,w.createElement(Hb,{match:f,routeContext:{outlet:u,matches:g,isDataRoute:r!=null},children:y})};return r&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(Sg,{location:r.location,revalidation:r.revalidation,component:b,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:c}):m()},null)}function Xc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ub(e){let t=w.useContext(Lr);return ne(t,Xc(e)),t}function Vb(e){let t=w.useContext(Zo);return ne(t,Xc(e)),t}function $b(e){let t=w.useContext(mt);return ne(t,Xc(e)),t}function Qc(e){let t=$b(e),n=t.matches[t.matches.length-1];return ne(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Yb(){return Qc("useRouteId")}function Gb(){var r;let e=w.useContext(Kc),t=Vb("useRouteError"),n=Qc("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Kb(){let{router:e}=Ub("useNavigate"),t=Qc("useNavigate"),n=w.useRef(!1);return vg(()=>{n.current=!0}),w.useCallback(async(i,s={})=>{pt(n.current,yg),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var Mu={};function _g(e,t,n){!t&&!Mu[e]&&(Mu[e]=!0,pt(!1,n))}w.memo(Xb);function Xb({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:s}){return kg(e,void 0,{manifest:t,state:r,isStatic:i,onError:s})}function yn({to:e,replace:t,state:n,relative:r}){ne(Dr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i,navigator:s}=w.useContext(qe);pt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=w.useContext(mt),{pathname:a}=xt(),l=jn(),c=Jo(e,$c(o),a,r==="path");Gc(typeof e=="string"?e:$n(e),s.createHref(c),Yc(s),"reject");let u=JSON.stringify(c);return w.useEffect(()=>{l(JSON.parse(u),{replace:t,state:n,relative:r})},[l,u,r,t,n]),null}function ue(e){ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Qb({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,useTransitions:o}){ne(!Dr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:i,static:s,useTransitions:o,future:{}}),[a,i,s,o]);typeof n=="string"&&(n=zr(n));let{pathname:c="/",search:u="",hash:f="",state:h=null,key:p="default",mask:x}=n,b=w.useMemo(()=>{let v=$t(c,a);return v==null?null:{location:{pathname:v,search:u,hash:f,state:h,key:p,mask:x},navigationType:r}},[a,c,u,f,h,p,r,x]);return pt(b!=null,`<Router basename="${a}"> is not able to match the URL "${c}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:w.createElement(qe.Provider,{value:l},w.createElement(Xi.Provider,{children:t,value:b}))}function qb({children:e,location:t}){return Db(Hl(e),t)}function Hl(e,t=[]){let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Hl(r.props.children,s));return}ne(r.type===ue,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ne(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Hl(r.props.children,s)),n.push(o)}),n}var Ys="get",Gs="application/x-www-form-urlencoded";function ea(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Jb(e){return ea(e)&&e.tagName.toLowerCase()==="button"}function Zb(e){return ea(e)&&e.tagName.toLowerCase()==="form"}function ey(e){return ea(e)&&e.tagName.toLowerCase()==="input"}function ty(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ny(e,t){return e.button===0&&(!t||t==="_self")&&!ty(e)}var bs=null;function ry(){if(bs===null)try{new FormData(document.createElement("form"),0),bs=!1}catch{bs=!0}return bs}var iy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function za(e){return e!=null&&!iy.has(e)?(pt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gs}"`),null):e}function sy(e,t){let n,r,i,s,o;if(Zb(e)){let a=e.getAttribute("action");r=a?$t(a,t):null,n=e.getAttribute("method")||Ys,i=za(e.getAttribute("enctype"))||Gs,s=new FormData(e)}else if(Jb(e)||ey(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?$t(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Ys,i=za(e.getAttribute("formenctype"))||za(a.getAttribute("enctype"))||Gs,s=new FormData(a,e),!ry()){let{name:c,type:u,value:f}=e;if(u==="image"){let h=c?`${c}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else c&&s.append(c,f)}}else{if(ea(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ys,r=null,i=Gs,o=e}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jg(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&$t(i.pathname,t)==="/"?i.pathname=`${Rr(t)}/_root.${r}`:i.pathname=`${Rr(i.pathname)}.${r}`,i}async function oy(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ay(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function ly(e,t,n){let r=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let o=await oy(s,n);return o.links?o.links():[]}return[]}));return fy(r.flat(1).filter(ay).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Tu(e,t,n,r,i,s){let o=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,a=(l,c)=>{var u;return n[c].pathname!==l.pathname||((u=n[c].route.path)==null?void 0:u.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?t.filter((l,c)=>o(l,c)||a(l,c)):s==="data"?t.filter((l,c)=>{var f;let u=r.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(o(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function cy(e,t,{includeHydrateFallback:n}={}){return dy(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function dy(e){return[...new Set(e)]}function uy(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function fy(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let s=JSON.stringify(uy(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Jc(){let e=w.useContext(Lr);return qc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function hy(){let e=w.useContext(Zo);return qc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Zc=w.createContext(void 0);Zc.displayName="FrameworkContext";function ta(){let e=w.useContext(Zc);return qc(e,"You must render this element inside a <HydratedRouter> element"),e}function py(e,t){let n=w.useContext(Zc),[r,i]=w.useState(!1),[s,o]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:f}=t,h=w.useRef(null);w.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let b=g=>{g.forEach(m=>{o(m.isIntersecting)})},v=new IntersectionObserver(b,{threshold:.5});return h.current&&v.observe(h.current),()=>{v.disconnect()}}},[e]),w.useEffect(()=>{if(r){let b=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(b)}}},[r]);let p=()=>{i(!0)},x=()=>{i(!1),o(!1)};return n?e!=="intent"?[s,h,{}]:[s,h,{onFocus:Qr(a,p),onBlur:Qr(l,x),onMouseEnter:Qr(c,p),onMouseLeave:Qr(u,x),onTouchStart:Qr(f,p)}]:[!1,h,{}]}function Qr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function gy({page:e,...t}){let n=Nb(),{nonce:r}=ta(),{router:i}=Jc(),s=w.useMemo(()=>ag(i.routes,e,i.basename),[i.routes,e,i.basename]);return s?(t.nonce==null&&r&&(t={...t,nonce:r}),n?w.createElement(xy,{page:e,matches:s,...t}):w.createElement(by,{page:e,matches:s,...t})):null}function my(e){let{manifest:t,routeModules:n}=ta(),[r,i]=w.useState([]);return w.useEffect(()=>{let s=!1;return ly(e,t,n).then(o=>{s||i(o)}),()=>{s=!0}},[e,t,n]),r}function xy({page:e,matches:t,...n}){let r=xt(),{future:i}=ta(),{basename:s}=Jc(),o=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let a=jg(e,s,i.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,c=[];for(let u of t)typeof u.route.shouldRevalidate=="function"?l=!0:c.push(u.route.id);return l&&c.length>0&&a.searchParams.set("_routes",c.join(",")),[a.pathname+a.search]},[s,i.v8_trailingSlashAwareDataRequests,e,r,t]);return w.createElement(w.Fragment,null,o.map(a=>w.createElement("link",{key:a,rel:"prefetch",as:"fetch",href:a,...n})))}function by({page:e,matches:t,...n}){let r=xt(),{future:i,manifest:s,routeModules:o}=ta(),{basename:a}=Jc(),{loaderData:l,matches:c}=hy(),u=w.useMemo(()=>Tu(e,t,c,s,r,"data"),[e,t,c,s,r]),f=w.useMemo(()=>Tu(e,t,c,s,r,"assets"),[e,t,c,s,r]),h=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let b=new Set,v=!1;if(t.forEach(m=>{var k;let y=s.routes[m.route.id];!y||!y.hasLoader||(!u.some(S=>S.route.id===m.route.id)&&m.route.id in l&&((k=o[m.route.id])!=null&&k.shouldRevalidate)||y.hasClientLoader?v=!0:b.add(m.route.id))}),b.size===0)return[];let g=jg(e,a,i.v8_trailingSlashAwareDataRequests,"data");return v&&b.size>0&&g.searchParams.set("_routes",t.filter(m=>b.has(m.route.id)).map(m=>m.route.id).join(",")),[g.pathname+g.search]},[a,i.v8_trailingSlashAwareDataRequests,l,r,s,u,t,e,o]),p=w.useMemo(()=>cy(f,s),[f,s]),x=my(f);return w.createElement(w.Fragment,null,h.map(b=>w.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),p.map(b=>w.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),x.map(({key:b,link:v})=>w.createElement("link",{key:b,nonce:n.nonce,...v,crossOrigin:v.crossOrigin??n.crossOrigin})))}function yy(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var vy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vy&&(window.__reactRouterVersion="7.18.4")}catch{}function wy({basename:e,children:t,useTransitions:n,window:r}){let i=w.useRef();i.current==null&&(i.current=Z0({window:r,v5Compat:!0}));let s=i.current,[o,a]=w.useState({action:s.action,location:s.location}),l=w.useCallback(c=>{n===!1?a(c):w.startTransition(()=>a(c))},[n]);return w.useLayoutEffect(()=>s.listen(l),[s,l]),w.createElement(Qb,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s,useTransitions:n})}var xe=w.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,mask:a,state:l,target:c,to:u,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:p,...x},b){let{basename:v,navigator:g,useTransitions:m}=w.useContext(qe),y=typeof u=="string"&&Vc.test(u),k=pg(u,v);u=k.to;let S=zb(u,{relative:i}),_=xt(),j=null;if(a){let D=Jo(a,[],_.mask?_.mask.pathname:"/",!0);v!=="/"&&(D.pathname=D.pathname==="/"?v:ft([v,D.pathname])),j=g.createHref(D)}let[E,P,R]=py(r,x),A=jy(u,{replace:o,mask:a,state:l,target:c,preventScrollReset:f,relative:i,viewTransition:h,defaultShouldRevalidate:p,useTransitions:m});function L(D){t&&t(D),D.defaultPrevented||A(D)}let Y=!(k.isExternal||s),pe=w.createElement("a",{...x,...R,href:(Y?j:void 0)||k.absoluteURL||S,onClick:Y?L:t,ref:yy(b,P),target:c,"data-discover":!y&&n==="render"?"true":void 0});return E&&!y?w.createElement(w.Fragment,null,pe,w.createElement(gy,{page:S})):pe});xe.displayName="Link";var ky=w.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...c},u){let f=Qi(o,{relative:c.relative}),h=xt(),p=w.useContext(Zo),{navigator:x,basename:b}=w.useContext(qe),v=p!=null&&Py(f)&&a===!0,g=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,m=h.pathname,y=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(m=m.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&b&&(y=$t(y,b)||y);const k=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let S=m===g||!i&&m.startsWith(g)&&m.charAt(k)==="/",_=y!=null&&(y===g||!i&&y.startsWith(g)&&y.charAt(g.length)==="/"),j={isActive:S,isPending:_,isTransitioning:v},E=S?t:void 0,P;typeof r=="function"?P=r(j):P=[r,S?"active":null,_?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let R=typeof s=="function"?s(j):s;return w.createElement(xe,{...c,"aria-current":E,className:P,ref:u,style:R,to:o,viewTransition:a},typeof l=="function"?l(j):l)});ky.displayName="NavLink";var Sy=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Ys,action:a,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:f,defaultShouldRevalidate:h,...p},x)=>{let{useTransitions:b}=w.useContext(qe),v=Ny(),g=Ry(a,{relative:c}),m=o.toLowerCase()==="get"?"get":"post",y=typeof a=="string"&&Vc.test(a),k=S=>{if(l&&l(S),S.defaultPrevented)return;S.preventDefault();let _=S.nativeEvent.submitter,j=(_==null?void 0:_.getAttribute("formmethod"))||o,E=()=>v(_||S.currentTarget,{fetcherKey:t,method:j,navigate:n,replace:i,state:s,relative:c,preventScrollReset:u,viewTransition:f,defaultShouldRevalidate:h});b&&n!==!1?w.startTransition(()=>E()):E()};return w.createElement("form",{ref:x,method:m,action:g,onSubmit:r?l:k,...p,"data-discover":!y&&e==="render"?"true":void 0})});Sy.displayName="Form";function _y(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eg(e){let t=w.useContext(Lr);return ne(t,_y(e)),t}function jy(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:a,defaultShouldRevalidate:l,useTransitions:c}={}){let u=jn(),f=xt(),h=Qi(e,{relative:o});return w.useCallback(p=>{if(ny(p,t)){p.preventDefault();let x=n!==void 0?n:$n(f)===$n(h),b=()=>u(e,{replace:x,mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:a,defaultShouldRevalidate:l});c?w.startTransition(()=>b()):b()}},[f,u,h,n,r,i,t,e,s,o,a,l,c])}var Ey=0,Cy=()=>`__${String(++Ey)}__`;function Ny(){let{router:e}=Eg("useSubmit"),{basename:t}=w.useContext(qe),n=Yb(),r=e.fetch,i=e.navigate;return w.useCallback(async(s,o={})=>{let{action:a,method:l,encType:c,formData:u,body:f}=sy(s,t);if(o.navigate===!1){let h=o.fetcherKey||Cy();await r(h,n,o.action||a,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:u,body:f,formMethod:o.method||l,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||a,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:u,body:f,formMethod:o.method||l,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,t,n])}function Ry(e,{relative:t}={}){let{basename:n}=w.useContext(qe),r=w.useContext(mt);ne(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Qi(e||".",{relative:t})},o=xt();if(e==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(u=>u==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let u=a.toString();s.search=u?`?${u}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:ft([n,s.pathname])),$n(s)}function Py(e,{relative:t}={}){let n=w.useContext(xg);ne(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Eg("useViewTransitionState"),i=Qi(e,{relative:t});if(!n.isTransitioning)return!1;let s=$t(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=$t(n.nextLocation.pathname,r)||n.nextLocation.pathname;return _o(i.pathname,o)!=null||_o(i.pathname,s)!=null}async function ae(e,{method:t="GET",body:n}={}){const r=await fetch(e,{method:t,credentials:"same-origin",headers:n!==void 0?{"Content-Type":"application/json"}:{},body:n!==void 0?JSON.stringify(n):void 0});let i={};try{i=await r.json()}catch{}if(!r.ok){const s=new Error(i.error||`Request failed (${r.status})`);throw s.status=r.status,s.data=i,s}return i}const re={me:()=>ae("/api/me"),login:(e,t)=>ae("/api/login",{method:"POST",body:{email:e,password:t}}),verifyLogin:e=>ae("/api/verify-login",{method:"POST",body:{otp:e}}),signup:e=>ae("/api/signup",{method:"POST",body:e}),verifySignup:e=>ae("/api/verify-signup",{method:"POST",body:{otp:e}}),logout:()=>ae("/api/logout",{method:"POST"}),myReports:()=>ae("/api/my-reports"),caseNumber:()=>ae("/api/case-number"),submitIncident:e=>ae("/api/incidents",{method:"POST",body:e}),announcements:()=>ae("/api/announcements"),adminIncidents:()=>ae("/api/admin/incidents"),adminIncident:e=>ae(`/api/admin/incidents/${e}`),updateIncident:(e,t)=>ae(`/api/admin/incidents/${e}`,{method:"PUT",body:t}),updateStatus:(e,t)=>ae(`/api/admin/incidents/${e}/status`,{method:"POST",body:{status:t}}),deleteIncident:e=>ae(`/api/admin/incidents/${e}`,{method:"DELETE"}),certificate:e=>ae(`/api/admin/incidents/${e}/certificate`),meetingNotice:(e,t)=>ae(`/api/admin/incidents/${e}/meeting-notice`,{method:"POST",body:t}),analytics:()=>ae("/api/admin/analytics"),users:()=>ae("/api/admin/users"),deleteUser:e=>ae(`/api/admin/users/${e}`,{method:"DELETE"}),addAnnouncement:e=>ae("/api/admin/announcements",{method:"POST",body:e}),deleteAnnouncement:e=>ae(`/api/admin/announcements/${e}`,{method:"DELETE"})},Cg=w.createContext(null);function My({children:e}){const[t,n]=w.useState(null),[r,i]=w.useState(!0),s=w.useCallback(async()=>{try{const o=await re.me();n(o.user)}catch{n(null)}finally{i(!1)}},[]);return w.useEffect(()=>{s()},[s]),d.jsx(Cg.Provider,{value:{user:t,loading:r,refresh:s,setUser:n},children:e})}const Rt=()=>w.useContext(Cg),Ng=w.createContext(null);let Ty=0;function Ay({children:e}){const t=xt(),n=w.useRef([]),[r,i]=w.useState([]);w.useEffect(()=>{i(n.current),n.current=[]},[t.key]);const s=w.useCallback((a,l)=>{const c={id:++Ty,cat:a,msg:l};n.current=[...n.current,c],i(u=>[...u,c])},[]),o=w.useCallback(a=>{n.current=n.current.filter(l=>l.id!==a),i(l=>l.filter(c=>c.id!==a))},[]);return d.jsx(Ng.Provider,{value:{items:r,flash:s,dismiss:o},children:e})}const bt=()=>w.useContext(Ng),Oy=`/* Admin-only size boost: makes every admin page larger and fill the screen */
.sidebar { width: 280px; }
.sidebar-brand { padding: 34px 26px; }
.logo-icon { width: 56px !important; height: 56px !important; font-size: 18px !important; font-weight: 700; color: #fff !important; }
.logo-text { font-size: 19px !important; }
.logo-sub { font-size: 14px !important; }
.sidebar-nav a { font-size: 18px !important; padding: 16px 22px !important; }
.sidebar-footer a { font-size: 18px !important; }
.main { margin-left: 280px !important; width: calc(100% - 280px) !important; padding: 44px 56px !important; }
.header h3, .header h2, .header h5 { font-size: 34px !important; }
.header p { font-size: 18px !important; }
.stats-row { gap: 24px !important; }
.stat-box, .stat-box, .card { padding: 30px 34px !important; }
.stat-num, .stat-box .num, .card .num { font-size: 48px !important; }
.stat-label, .stat-lbl, .card h4 { font-size: 14px !important; }
table th { font-size: 16px !important; padding: 20px 18px !important; }
table td { font-size: 17px !important; padding: 20px 18px !important; }
.search-bar input, .search-bar select, input, select, textarea { font-size: 16px !important; }
.search-bar input { padding: 14px 18px !important; }
.btn-sm, .btn-save, .btn-danger, .btn-back, .btn-submit-form { font-size: 15px !important; padding: 9px 14px !important; }
.status-select { padding: 9px 12px !important; font-size: 15px !important; }
.badge { font-size: 14px !important; padding: 5px 12px !important; }
.grid { gap: 28px !important; }
.panel { padding: 30px !important; }
.panel h3 { font-size: 22px !important; }
`;function Ir({css:e}){return d.jsx("style",{children:e})}function En(){return d.jsx("p",{style:{padding:40,textAlign:"center"},children:"Loading…"})}function qi(){const{items:e,dismiss:t}=bt();return e.length?d.jsx("div",{className:"alert-wrapper",children:e.map(n=>d.jsx("div",{className:`alert alert-${n.cat}`,style:{cursor:"pointer"},title:"Click to dismiss",onClick:()=>t(n.id),children:n.msg},n.id))}):null}const zy=[["/dashboard","Home"],["/my-reports","My Reports"],["/announcements","Announcements"],["/emergency","Emergency Contacts"],["/guide","How to File"]];function Fr({css:e,active:t,hero:n,children:r}){const{user:i}=Rt();return d.jsxs(d.Fragment,{children:[d.jsx(Ir,{css:e}),d.jsx("header",{className:"portal-header",children:d.jsxs("div",{className:"header-container",children:[d.jsx(xe,{to:"/dashboard",className:"brand-group",children:d.jsxs("div",{children:[d.jsx("div",{className:"brand-main-title",children:"Barangay Blotter"}),d.jsx("div",{className:"brand-sub-title",children:"Resident Portal"})]})}),d.jsxs("nav",{className:"portal-nav",children:[zy.map(([s,o])=>d.jsx(xe,{to:s,className:t===s?"active":void 0,children:o},s)),d.jsx(xe,{to:"/submit",className:`action-btn-report${t==="/submit"?" active":""}`,children:"+ File a Report"}),d.jsx(xe,{to:"/logout",className:"btn-logout",children:"Log Out"})]})]})}),d.jsx("div",{className:"user-status-strip",children:d.jsxs("div",{className:"user-status-container",children:[d.jsxs("div",{children:["Logged in Account: ",d.jsx("strong",{children:i==null?void 0:i.name})]}),d.jsx("div",{children:"System Clearance: Resident Profile"})]})}),n,d.jsxs("main",{className:"main-viewport",children:[d.jsx(qi,{}),r]})]})}const Ly=[["/admin","All Blotters"],["/admin/analytics","Analytics"],["/admin/users","Users"],["/admin/announcements","Announcements"]];function Ji({css:e,active:t,children:n}){const{user:r}=Rt();return d.jsxs(d.Fragment,{children:[d.jsx(Ir,{css:e+Oy}),d.jsxs("div",{className:"sidebar",children:[d.jsx("div",{className:"sidebar-brand",children:d.jsxs("div",{className:"logo-mark",children:[d.jsx("div",{className:"logo-icon",children:"BB"}),d.jsxs("div",{children:[d.jsx("div",{className:"logo-text",children:"Barangay Blotter"}),d.jsx("div",{className:"logo-sub",children:"Admin Panel"})]})]})}),d.jsxs("div",{className:"sidebar-user",children:[d.jsx("div",{className:"user-label",children:"Kapitan"}),d.jsx("div",{className:"user-name",children:r==null?void 0:r.name}),d.jsx("div",{className:"user-role",children:"Administrator"})]}),d.jsxs("div",{className:"sidebar-nav",children:[Ly.map(([i,s])=>d.jsx(xe,{to:i,className:t===i?"active":void 0,children:s},i)),d.jsx("a",{href:"/api/admin/export",children:"Export"})]}),d.jsx("div",{className:"sidebar-footer",children:d.jsx(xe,{to:"/logout",children:"Logout"})})]}),d.jsxs("div",{className:"main",children:[d.jsx(qi,{}),n]})]})}function qn({children:e}){const{user:t,loading:n}=Rt();return n?d.jsx(En,{}):t?t.role==="admin"?d.jsx(yn,{to:"/admin",replace:!0}):e:d.jsx(yn,{to:"/login",replace:!0})}function Jn({children:e}){const{user:t,loading:n}=Rt();return n?d.jsx(En,{}):t?t.role!=="admin"?d.jsx(yn,{to:"/dashboard",replace:!0}):e:d.jsx(yn,{to:"/login",replace:!0})}function ys({children:e}){const{user:t,loading:n}=Rt();return n?d.jsx(En,{}):t?d.jsx(yn,{to:t.role==="admin"?"/admin":"/dashboard",replace:!0}):e}const Dy=`*{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    :root{
      --primary:#0b3ea9;
      --primary-dark:#072d80;
      --white:#ffffff;
      --light:#f4f7fb;
      --border:#dbe3ef;
      --text:#10213a;
      --muted:#6b7280;
      --danger:#dc2626;
      --success:#15803d;
      --warning:#d97706;

      --shadow-lg:0 20px 50px rgba(0,0,0,.18);
      --shadow-sm:0 5px 18px rgba(0,0,0,.08);
    }

    body{
      font-family:'Poppins',sans-serif;
      min-height:100vh;
      overflow:hidden;
      position:relative;
      background:#0d3aa9;
    }

    /* BACKGROUND IMAGE */
    body::before{
      content:'';
      position:absolute;
      inset:0;
      background:
        linear-gradient(rgba(11,62,169,.82), rgba(11,62,169,.82)),
        url('/static/images/BRGY.-COMMONWEALTH.webp');
      background-size:cover;
      background-position:center;
      z-index:-2;
      transform:scale(1.03);
    }

    /* TOP BAR */
    .topbar{
      width:100%;
      height:64px;
      background:rgba(5,32,97,.92);
      backdrop-filter:blur(8px);
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 34px;
      position:relative;
      z-index:10;
      border-bottom:1px solid rgba(255,255,255,.08);
    }

    .brand{
      display:flex;
      align-items:center;
      gap:12px;
      color:white;
      text-decoration:none;
    }

    .brand-logo{
      width:38px;
      height:38px;
      border-radius:50%;
      background:white;
      color:var(--primary);
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:18px;
      font-weight:700;
      box-shadow:var(--shadow-sm);
    }

    .brand-title{
      font-size:1.35rem;
      font-weight:700;
      letter-spacing:.3px;
    }

    .top-links{
      display:flex;
      align-items:center;
      gap:24px;
    }

    .top-links a{
      color:rgba(255,255,255,.92);
      text-decoration:none;
      font-size:.92rem;
      font-weight:500;
      transition:.2s;
    }

    .top-links a:hover{
      color:#dbeafe;
    }

    /* MAIN WRAPPER */
    .main-wrapper{
      width:100%;
      min-height:calc(100vh - 64px);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:40px;
    }

    /* LOGIN CARD */
    .login-card{
      width:100%;
      max-width:430px;
      background:rgba(255,255,255,.96);
      backdrop-filter:blur(10px);
      border:1px solid rgba(255,255,255,.5);
      border-radius:8px;
      box-shadow:var(--shadow-lg);
      overflow:hidden;
      animation:fadeUp .6s ease;
    }

    .card-top{
      height:10px;
      background:linear-gradient(to right,var(--primary),#3b82f6);
    }

    .card-content{
      padding:42px 38px;
    }

    /* LOGO */
    .login-logo{
  width:120px;
  height:120px;
  margin:0 auto 22px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.login-logo img{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:50%;
  border:4px solid white;
  box-shadow:0 10px 25px rgba(11,62,169,.25);
}

    .portal-title{
      text-align:center;
      font-size:2.25rem;
      font-weight:700;
      color:var(--primary);
      letter-spacing:.5px;
      margin-bottom:4px;
    }

    .portal-subtitle{
      text-align:center;
      color:var(--muted);
      font-size:.95rem;
      margin-bottom:34px;
    }

    /* ALERTS */
    .alert{
      padding:14px 16px;
      border-radius:8px;
      font-size:.92rem;
      margin-bottom:18px;
      border-left:4px solid;
      font-weight:500;
    }

    .alert-danger{
      background:#fef2f2;
      color:#991b1b;
      border-color:#dc2626;
    }

    .alert-success{
      background:#f0fdf4;
      color:#166534;
      border-color:#16a34a;
    }

    .alert-warning{
      background:#fffbeb;
      color:#92400e;
      border-color:#d97706;
    }

    .alert-info{
      background:#eff6ff;
      color:#1d4ed8;
      border-color:#2563eb;
    }

    /* FORM */
    .form-group{
      margin-bottom:20px;
    }

    .form-group label{
      display:block;
      margin-bottom:8px;
      font-size:.82rem;
      font-weight:600;
      color:var(--text);
      letter-spacing:.3px;
      text-transform:uppercase;
    }

    .input-wrapper{
      position:relative;
    }

    .input-wrapper input{
      width:100%;
      height:54px;
      border:1.5px solid var(--border);
      border-radius:8px;
      padding:0 16px 0 50px;
      font-size:.96rem;
      font-family:'Poppins',sans-serif;
      background:white;
      transition:.2s;
      outline:none;
      color:var(--text);
    }

    .input-wrapper input:focus{
      border-color:var(--primary);
      box-shadow:0 0 0 4px rgba(11,62,169,.08);
    }

    .input-icon{
      position:absolute;
      top:50%;
      left:16px;
      transform:translateY(-50%);
      font-size:1rem;
      color:#64748b;
    }

    .form-options{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-top:-5px;
      margin-bottom:22px;
      font-size:.86rem;
    }

    .remember{
      display:flex;
      align-items:center;
      gap:8px;
      color:var(--muted);
    }

    .forgot-link{
      color:var(--primary);
      text-decoration:none;
      font-weight:500;
    }

    .forgot-link:hover{
      text-decoration:underline;
    }

    /* BUTTON */
    .btn-login{
      width:100%;
      height:56px;
      border:none;
      border-radius:8px;
      background:linear-gradient(to right,var(--primary),#1d4ed8);
      color:white;
      font-size:1rem;
      font-weight:600;
      cursor:pointer;
      transition:.25s;
      position:relative;
      overflow:hidden;
      letter-spacing:.4px;
    }

    .btn-login:hover{
      transform:translateY(-1px);
      box-shadow:0 10px 25px rgba(11,62,169,.25);
    }

    .btn-login::before{
      content:'';
      position:absolute;
      top:0;
      left:-100%;
      width:100%;
      height:100%;
      background:linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.18),
        transparent
      );
      transition:.6s;
    }

    .btn-login:hover::before{
      left:100%;
    }

    /* SIGNUP */
    .signup-link{
      margin-top:26px;
      text-align:center;
      font-size:.92rem;
      color:var(--muted);
    }

    .signup-link a{
      color:var(--primary);
      text-decoration:none;
      font-weight:600;
    }

    .signup-link a:hover{
      text-decoration:underline;
    }

    /* FOOT */
    .card-footer{
      text-align:center;
      padding:16px;
      background:#f8fafc;
      border-top:1px solid #edf2f7;
      font-size:.75rem;
      color:#64748b;
      letter-spacing:.4px;
    }

    /* ANIMATION */
    @keyframes fadeUp{
      from{
        opacity:0;
        transform:translateY(20px);
      }
      to{
        opacity:1;
        transform:translateY(0);
      }
    }

    /* RESPONSIVE */
    @media(max-width:900px){

      body{
        overflow:auto;
      }

      .top-links{
        display:none;
      }

      .main-wrapper{
        padding:20px;
      }

      .card-content{
        padding:34px 24px;
      }

      .portal-title{
        font-size:1.8rem;
      }
    }
`;function Iy(){const e=jn(),{flash:t}=bt(),[n,r]=w.useState(""),[i,s]=w.useState(""),[o,a]=w.useState(!1);async function l(c){c.preventDefault(),a(!0);try{const u=await re.login(n,i);t("info",u.message),e("/verify-login")}catch(u){t(u.status===403?"warning":"danger",u.message),a(!1)}}return d.jsxs(d.Fragment,{children:[d.jsx(Ir,{css:Dy}),d.jsx("div",{className:"main-wrapper",children:d.jsxs("div",{className:"login-card",children:[d.jsx("div",{className:"card-top"}),d.jsxs("div",{className:"card-content",children:[d.jsx("div",{className:"login-logo",children:d.jsx("img",{src:"/static/images/barangaypic.jpg",alt:"Barangay Logo"})}),d.jsx("h1",{className:"portal-title",children:"Resident Login"}),d.jsx("div",{className:"portal-subtitle",children:"Barangay Blotter Management System"}),d.jsx(qi,{}),d.jsxs("form",{onSubmit:l,children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Email Address"}),d.jsxs("div",{className:"input-wrapper",children:[d.jsx("span",{className:"input-icon"}),d.jsx("input",{type:"email",name:"email",placeholder:"Enter your email",required:!0,value:n,onChange:c=>r(c.target.value)})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Password"}),d.jsxs("div",{className:"input-wrapper",children:[d.jsx("span",{className:"input-icon"}),d.jsx("input",{type:"password",name:"password",placeholder:"Enter your password",required:!0,value:i,onChange:c=>s(c.target.value)})]})]}),d.jsx("button",{type:"submit",className:"btn-login",disabled:o,children:o?"Sending code…":"Sign In"})]}),d.jsxs("div",{className:"signup-link",children:["No account yet? ",d.jsx(xe,{to:"/signup",children:"Register as Resident"})]})]}),d.jsx("div",{className:"card-footer",children:"Republic of the Philippines • Barangay Incident Management System"})]})})]})}const Fy=`*{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    :root{
      --primary:#0b3ea9;
      --primary-dark:#072d80;
      --white:#ffffff;
      --light:#f4f7fb;
      --border:#dbe3ef;
      --text:#10213a;
      --muted:#6b7280;
      --danger:#dc2626;
      --success:#15803d;
      --warning:#d97706;

      --shadow-lg:0 20px 50px rgba(0,0,0,.18);
      --shadow-sm:0 5px 18px rgba(0,0,0,.08);
    }

    body{
      font-family:'Poppins',sans-serif;
      min-height:100vh;
      overflow:auto;
      position:relative;
      background:#0d3aa9;
    }

    /* BACKGROUND IMAGE */
    body::before{
      content:'';
      position:fixed;
      inset:0;
      background:
        linear-gradient(rgba(11,62,169,.82), rgba(11,62,169,.82)),
        url('/static/images/BRGY.-COMMONWEALTH.webp');
      background-size:cover;
      background-position:center;
      z-index:-2;
      transform:scale(1.03);
    }

    /* MAIN WRAPPER */
    .right-panel{
      width:100%;
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:40px 20px;
    }

    /* HIDE OLD LEFT PANEL */
    .left-panel{
      display:none;
    }

    /* CARD */
    .form-card{
      width:100%;
      max-width:540px;
      background:rgba(255,255,255,.96);
      backdrop-filter:blur(10px);
      border:1px solid rgba(255,255,255,.5);
      border-radius:10px;
      overflow:hidden;
      box-shadow:var(--shadow-lg);
      animation:fadeUp .6s ease;
      position:relative;
    }

    .form-card::before{
      content:'';
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:10px;
      background:linear-gradient(to right,var(--primary),#3b82f6);
    }

    /* HEADER */
    .form-header{
      padding:42px 38px 28px;
      text-align:center;
    }

    .signup-logo{
      width:120px;
      height:120px;
      margin:0 auto 20px;
    }

    .signup-logo img{
      width:100%;
      height:100%;
      object-fit:cover;
      border-radius:50%;
      border:4px solid white;
      box-shadow:0 10px 25px rgba(11,62,169,.25);
    }

    .eyebrow{
      display:none;
    }

    .form-header h2{
      font-size:2.2rem;
      font-weight:700;
      color:var(--primary);
      margin-bottom:6px;
    }

    .form-header p{
      color:var(--muted);
      font-size:.95rem;
    }

    /* ALERTS */
    .alert{
      padding:14px 16px;
      border-radius:8px;
      font-size:.92rem;
      margin:0 38px 18px;
      border-left:4px solid;
      font-weight:500;
    }

    .alert-danger{
      background:#fef2f2;
      color:#991b1b;
      border-color:#dc2626;
    }

    .alert-success{
      background:#f0fdf4;
      color:#166534;
      border-color:#16a34a;
    }

    .alert-warning{
      background:#fffbeb;
      color:#92400e;
      border-color:#d97706;
    }

    /* FORM */
    form{
      padding:0 38px 36px;
    }

    .form-row{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:16px;
    }

    .form-group{
      margin-bottom:20px;
    }

    .form-group label{
      display:block;
      margin-bottom:8px;
      font-size:.82rem;
      font-weight:600;
      color:var(--text);
      letter-spacing:.3px;
      text-transform:uppercase;
    }

    .form-group input{
      width:100%;
      height:54px;
      border:1.5px solid var(--border);
      border-radius:8px;
      padding:0 16px;
      font-size:.96rem;
      font-family:'Poppins',sans-serif;
      background:white;
      transition:.2s;
      outline:none;
      color:var(--text);
    }

    .form-group input:focus{
      border-color:var(--primary);
      box-shadow:0 0 0 4px rgba(11,62,169,.08);
    }

    .form-group input::placeholder{
      color:#94a3b8;
    }

    /* BUTTON */
    .btn-signup{
      width:100%;
      height:56px;
      border:none;
      border-radius:8px;
      background:linear-gradient(to right,var(--primary),#1d4ed8);
      color:white;
      font-size:1rem;
      font-weight:600;
      cursor:pointer;
      transition:.25s;
      position:relative;
      overflow:hidden;
      letter-spacing:.4px;
      margin-top:8px;
    }

    .btn-signup:hover{
      transform:translateY(-1px);
      box-shadow:0 10px 25px rgba(11,62,169,.25);
    }

    .btn-signup::before{
      content:'';
      position:absolute;
      top:0;
      left:-100%;
      width:100%;
      height:100%;
      background:linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.18),
        transparent
      );
      transition:.6s;
    }

    .btn-signup:hover::before{
      left:100%;
    }

    /* LOGIN LINK */
    .login-link{
      margin-top:24px;
      text-align:center;
      font-size:.92rem;
      color:var(--muted);
    }

    .login-link a{
      color:var(--primary);
      text-decoration:none;
      font-weight:600;
    }

    .login-link a:hover{
      text-decoration:underline;
    }

    /* FOOTER */
    .card-footer{
      text-align:center;
      padding:16px;
      background:#f8fafc;
      border-top:1px solid #edf2f7;
      font-size:.75rem;
      color:#64748b;
      letter-spacing:.4px;
    }

    /* ANIMATION */
    @keyframes fadeUp{
      from{
        opacity:0;
        transform:translateY(20px);
      }
      to{
        opacity:1;
        transform:translateY(0);
      }
    }

    /* RESPONSIVE */
    @media(max-width:768px){

      .right-panel{
        padding:20px;
      }

      .form-card{
        max-width:100%;
      }

      .form-row{
        grid-template-columns:1fr;
        gap:0;
      }

      .form-header{
        padding:34px 24px 24px;
      }

      form{
        padding:0 24px 30px;
      }

      .alert{
        margin:0 24px 18px;
      }

      .form-header h2{
        font-size:1.8rem;
      }
    }
`,By={fullname:"",email:"",password:"",confirm_password:"",address:"",contact:""};function Hy(){const e=jn(),{flash:t}=bt(),[n,r]=w.useState(By),[i,s]=w.useState(!1),o=l=>c=>r({...n,[l]:c.target.value});async function a(l){if(l.preventDefault(),n.password!==n.confirm_password){t("danger","Passwords do not match.");return}if(n.password.length<6){t("danger","Password must be at least 6 characters.");return}s(!0);try{const c=await re.signup({fullname:n.fullname,email:n.email,password:n.password,address:n.address,contact:n.contact});t("success",c.message),e("/verify-signup")}catch(c){t("danger",c.message),s(!1)}}return d.jsxs(d.Fragment,{children:[d.jsx(Ir,{css:Fy}),d.jsx("div",{className:"right-panel",children:d.jsxs("div",{className:"form-card",children:[d.jsxs("div",{className:"form-header",children:[d.jsx("div",{className:"signup-logo",children:d.jsx("img",{src:"/static/images/barangaypic.jpg",alt:"Barangay Logo"})}),d.jsx("h2",{children:"Resident Sign Up"}),d.jsx("p",{children:"Create your resident account to access the barangay blotter system"})]}),d.jsx(qi,{}),d.jsxs("form",{onSubmit:a,children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Full Name"}),d.jsx("input",{type:"text",placeholder:"Juan dela Cruz",required:!0,value:n.fullname,onChange:o("fullname")})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Email Address"}),d.jsx("input",{type:"email",placeholder:"your@email.com",required:!0,value:n.email,onChange:o("email")})]}),d.jsxs("div",{className:"form-row",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Password"}),d.jsx("input",{type:"password",placeholder:"Minimum 6 characters",required:!0,value:n.password,onChange:o("password")})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Confirm Password"}),d.jsx("input",{type:"password",placeholder:"Repeat password",required:!0,value:n.confirm_password,onChange:o("confirm_password")})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Home Address"}),d.jsx("input",{type:"text",placeholder:"Blk 1 Lot 2, Street, Barangay...",value:n.address,onChange:o("address")})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Contact Number"}),d.jsx("input",{type:"text",placeholder:"09xxxxxxxxx",value:n.contact,onChange:o("contact")})]}),d.jsx("button",{type:"submit",className:"btn-signup",disabled:i,children:i?"Creating account…":"Create Account"}),d.jsxs("div",{className:"login-link",children:["Already have an account? ",d.jsx(xe,{to:"/login",children:"Sign in"})]})]}),d.jsx("div",{className:"card-footer",children:"Republic of the Philippines • Barangay Incident Management System"})]})})]})}const Wy=`*{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    :root{
      --primary:#0b3ea9;
      --primary-dark:#072d80;
      --white:#ffffff;
      --light:#f4f7fb;
      --border:#dbe3ef;
      --text:#10213a;
      --muted:#6b7280;
      --danger:#dc2626;
      --success:#15803d;
      --info:#2563eb;

      --shadow-lg:0 20px 50px rgba(0,0,0,.18);
      --shadow-sm:0 5px 18px rgba(0,0,0,.08);
    }

    body{
      font-family:'Poppins',sans-serif;
      min-height:100vh;
      overflow:hidden;
      position:relative;
      background:#0d3aa9;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:20px;
    }

    /* BACKGROUND */
    body::before{
      content:'';
      position:absolute;
      inset:0;
     background:
        linear-gradient(rgba(11,62,169,.82), rgba(11,62,169,.82)),
        url('/static/images/BRGY.-COMMONWEALTH.webp');
      background-size:cover;
      background-position:center;
      z-index:-2;
      transform:scale(1.03);
    }

    /* CARD */
    .card{
      width:100%;
      max-width:450px;
      background:rgba(255,255,255,.96);
      backdrop-filter:blur(10px);
      border:1px solid rgba(255,255,255,.5);
      border-radius:10px;
      overflow:hidden;
      box-shadow:var(--shadow-lg);
      animation:fadeUp .6s ease;
      position:relative;
    }

    .card::before{
      content:'';
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:10px;
      background:linear-gradient(to right,var(--primary),#3b82f6);
    }

    /* CONTENT */
    .card-content{
      padding:42px 38px;
      text-align:center;
    }

    /* LOGO */
    .verify-logo{
      width:115px;
      height:115px;
      margin:0 auto 22px;
    }

    .verify-logo img{
      width:100%;
      height:100%;
      object-fit:cover;
      border-radius:50%;
      border:4px solid white;
      box-shadow:0 10px 25px rgba(11,62,169,.25);
    }

    /* TITLE */
    h2{
      font-size:2rem;
      font-weight:700;
      color:var(--primary);
      margin-bottom:8px;
    }

    .subtitle{
      font-size:.95rem;
      color:var(--muted);
      line-height:1.7;
      margin-bottom:24px;
    }

    /* EXPIRES */
    .expires{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:10px 16px;
      background:#eff6ff;
      color:var(--primary);
      border-radius:999px;
      font-size:.82rem;
      font-weight:500;
      margin-bottom:24px;
      border:1px solid #bfdbfe;
    }

    /* ALERTS */
    .alert{
      padding:14px 16px;
      border-radius:8px;
      font-size:.92rem;
      margin-bottom:18px;
      border-left:4px solid;
      font-weight:500;
      text-align:left;
    }

    .alert-danger{
      background:#fef2f2;
      color:#991b1b;
      border-color:#dc2626;
    }

    .alert-success{
      background:#f0fdf4;
      color:#166534;
      border-color:#16a34a;
    }

    .alert-info{
      background:#eff6ff;
      color:#1d4ed8;
      border-color:#2563eb;
    }

    /* OTP INPUT */
    .otp-input{
      width:100%;
      height:68px;
      border:1.5px solid var(--border);
      border-radius:10px;
      font-size:2rem;
      font-weight:600;
      letter-spacing:14px;
      text-align:center;
      outline:none;
      transition:.2s;
      color:var(--primary);
      margin-bottom:20px;
      font-family:'Poppins',sans-serif;
    }

    .otp-input:focus{
      border-color:var(--primary);
      box-shadow:0 0 0 4px rgba(11,62,169,.08);
    }

    .otp-input::placeholder{
      color:#cbd5e1;
    }

    /* BUTTON */
    .btn-verify{
      width:100%;
      height:56px;
      border:none;
      border-radius:8px;
      background:linear-gradient(to right,var(--primary),#1d4ed8);
      color:white;
      font-size:1rem;
      font-weight:600;
      cursor:pointer;
      transition:.25s;
      position:relative;
      overflow:hidden;
      letter-spacing:.4px;
    }

    .btn-verify:hover{
      transform:translateY(-1px);
      box-shadow:0 10px 25px rgba(11,62,169,.25);
    }

    .btn-verify::before{
      content:'';
      position:absolute;
      top:0;
      left:-100%;
      width:100%;
      height:100%;
      background:linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.18),
        transparent
      );
      transition:.6s;
    }

    .btn-verify:hover::before{
      left:100%;
    }

    /* BACK LINK */
    .back-link{
      display:inline-block;
      margin-top:22px;
      color:var(--primary);
      text-decoration:none;
      font-size:.92rem;
      font-weight:600;
    }

    .back-link:hover{
      text-decoration:underline;
    }

    /* FOOTER */
    .card-footer{
      text-align:center;
      padding:16px;
      background:#f8fafc;
      border-top:1px solid #edf2f7;
      font-size:.75rem;
      color:#64748b;
      letter-spacing:.4px;
    }

    /* ANIMATION */
    @keyframes fadeUp{
      from{
        opacity:0;
        transform:translateY(20px);
      }
      to{
        opacity:1;
        transform:translateY(0);
      }
    }

    /* RESPONSIVE */
    @media(max-width:768px){

      body{
        overflow:auto;
      }

      .card-content{
        padding:34px 24px;
      }

      h2{
        font-size:1.7rem;
      }

      .otp-input{
        font-size:1.6rem;
        letter-spacing:10px;
      }
    }
`;function Au({mode:e}){const t=jn(),{flash:n}=bt(),{refresh:r}=Rt(),[i,s]=w.useState(""),[o,a]=w.useState(!1),l=e==="signup";async function c(u){var f;u.preventDefault(),a(!0);try{if(l){const h=await re.verifySignup(i);n("success",h.message),t("/login")}else{const h=await re.verifyLogin(i);await r(),t(h.user.role==="admin"?"/admin":"/dashboard")}}catch(h){n("danger",h.message),(f=h.data)!=null&&f.redirect?t(`/${h.data.redirect}`):a(!1)}}return d.jsxs(d.Fragment,{children:[d.jsx(Ir,{css:Wy}),d.jsx("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",overflowY:"auto",padding:20},children:d.jsxs("div",{className:"card",children:[d.jsxs("div",{className:"card-content",children:[d.jsx("div",{className:"verify-logo",children:d.jsx("img",{src:"/static/images/barangaypic.jpg",alt:"Barangay Logo"})}),d.jsx("h2",{children:l?"Verify Your Email":"Confirm Your Identity"}),d.jsx("p",{className:"subtitle",children:l?"We sent a 6-digit code to your email address to verify your new account.":"We sent a 6-digit code to your email to confirm this login attempt."}),d.jsx("div",{className:"expires",children:"Expires in 10 minutes"}),d.jsx(qi,{}),d.jsxs("form",{onSubmit:c,children:[d.jsx("input",{className:"otp-input",name:"otp",maxLength:6,placeholder:"000000",inputMode:"numeric",autoComplete:"off",required:!0,value:i,onChange:u=>s(u.target.value)}),d.jsx("button",{type:"submit",className:"btn-verify",disabled:o,children:"Verify Code"})]}),d.jsx(xe,{to:"/login",className:"back-link",children:"← Back to login"})]}),d.jsx("div",{className:"card-footer",children:"Republic of the Philippines • Barangay Incident Management System"})]})})]})}function Uy(){const e=jn(),{flash:t}=bt(),{refresh:n}=Rt();return w.useEffect(()=>{(async()=>{try{await re.logout()}catch{}await n(),t("info","Logged out successfully."),e("/login",{replace:!0})})()},[]),d.jsx(En,{})}const Rg=e=>e?new Date(e).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"",Pg=e=>e?new Date(e).toLocaleDateString("en-US",{month:"long",day:"2-digit",year:"numeric"}):"",Mg=e=>e?new Date(e).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",Vy=e=>e==="Pending"?"pending":e==="Settled"?"settled":"dismissed",Tg=(e,t)=>!t||[e.CaseNumber,e.Complainant,e.Respondent,e.IncidentType].some(n=>String(n??"").toLowerCase().includes(t.toLowerCase())),Pr=(e,t)=>e.filter(n=>n.Status===t).length;function Gt(e,t=[]){const[n,r]=w.useState(null),[i,s]=w.useState(!0),[o,a]=w.useState(""),[l,c]=w.useState(0);w.useEffect(()=>{let f=!0;return s(!0),e().then(h=>{f&&(r(h),a(""))}).catch(h=>{f&&a(h.message)}).finally(()=>{f&&s(!1)}),()=>{f=!1}},[l,...t]);const u=w.useCallback(()=>c(f=>f+1),[]);return{data:n,setData:r,loading:i,error:o,reload:u}}const Ag=["Physical Assault","Verbal Abuse","Theft","Property Damage","Noise Complaint","Domestic Dispute","Trespassing","Harassment","Other"],$y=["General","Health","Safety","Event","Reminder","Emergency"],ed=["Pending","Settled","Dismissed"],Og={Emergency:{border:"#ef233c",bg:"rgba(239,35,60,0.18)",fg:"#fca5a5"},Health:{border:"#34d399",bg:"rgba(52,211,153,0.18)",fg:"#6ee7b7"},Safety:{border:"#fbbf24",bg:"rgba(251,191,36,0.18)",fg:"#fde68a"},Event:{border:"#60a5fa",bg:"rgba(96,165,250,0.18)",fg:"#93c5fd"},Reminder:{border:"#a1a1aa",bg:"rgba(161,161,170,0.18)",fg:"#d4d4d8"}},Yy=Og.Event,Gy=[{no:"001",img:"/static/images/karaoke.webp",alt:"Karaoke",title:"Anti-Noise Pollution",summary:"No excessive noise (karaoke, loud machinery) between 10:00 PM and 6:00 AM in residential areas.",penalty:"₱500 – ₱2k"},{no:"002",img:"/static/images/Litter.webp",alt:"Littering",title:"Anti-Littering",summary:"Proper waste disposal and segregation is required. Dumping trash in creeks and vacant lots is prohibited.",penalty:"₱200 – ₱1k"},{no:"003",img:"/static/images/Curfew.webp",alt:"Curfew",title:"Curfew for Minors",summary:"Minors under 18 years old are strictly not allowed in public areas, streets, and internet cafes between 10:00 PM and 5:00 AM.",penalty:"Parent Summons"},{no:"004",img:"/static/images/smoking.jpg",alt:"Smoking",title:"Anti-Smoking",summary:"Smoking and vaping are strictly prohibited in public parks, main streets, and public utility vehicles.",penalty:"₱500 – ₱1k"},{no:"005",img:"/static/images/dog.webp",alt:"Dog",title:"Stray Animal Control",summary:"Pet owners must keep dogs and cats inside their premises. Roaming pets without a leash will be impounded.",penalty:"₱500 + Impound"},{no:"006",img:"/static/images/no%20parking.webp",alt:"No Parking",title:"Anti-Road Obstruction",summary:"Sidewalks and public roads must remain clear of illegal parking, vendor stalls, and private property extensions.",penalty:"₱1k + Towing"},{no:"007",img:"/static/images/fire.webp",alt:"Fire",title:"Anti-Open Burning",summary:"The burning of garbage, dried leaves, tires, or plastics (siga) in backyards and public spaces is strictly prohibited.",penalty:"₱500 – ₱1k"},{no:"008",img:"/static/images/liqour.webp",alt:"Liquor",title:"Liquor Regulations",summary:"Selling alcohol to minors is banned. Drinking alcoholic beverages on public sidewalks and streets is not allowed.",penalty:"₱1k – ₱2.5k"},{no:"009",img:"/static/images/vandal.webp",alt:"Vandalism",title:"Anti-Vandalism",summary:"Defacing, writing graffiti, or drawing on public property, community fences, and private walls is an offense.",penalty:"₱1k + Cleaning"}],Ky=[{title:"File within 24 hours",text:"Report incidents as soon as possible for accurate documentation and faster resolution."},{title:"Provide accurate information",text:"All information must be truthful and complete. Filing false reports carries legal penalties."},{title:"One report per incident",text:"Do not file duplicate reports for the same incident. Contact the barangay to update existing ones."}],Xy=`/* =========================================================
   ROOT COLORS & GLOBAL
========================================================= */
:root {
  --primary-color: #0b3d91;
  --primary-hover: #072c68;
  --danger-color: #c1121f;
  --danger-hover: #980d18;
  --bg-color: #f4f7fb;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --white: #ffffff;
  --shadow-sm: 0 4px 10px rgba(0,0,0,0.08);
  --shadow-md: 0 10px 25px rgba(0,0,0,0.14);
  --shadow-lg: 0 20px 40px rgba(0,0,0,0.18);
  --radius: 22px;
}
 
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
 
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background:
    linear-gradient(rgba(3, 24, 58, 0.60), rgba(3, 24, 58, 0.60)),
    url('/static/images/BRGY.-COMMONWEALTH.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: var(--text-main);
  line-height: 1.5;
  min-height: 100vh;
}
 
/* =========================================================
   HEADER & NAVIGATION
========================================================= */
.portal-header {
  position: sticky; top: 0; z-index: 1000;
  background: rgba(3, 24, 58, 0.75);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 2px 20px rgba(0,0,0,0.25);
}
.header-container {
  max-width: 1300px; margin: auto; padding: 0 24px;
  height: 80px; display: flex; justify-content: space-between; align-items: center;
}
.brand-group { display: flex; align-items: center; gap: 14px; text-decoration: none; }
.brand-main-title { font-size: 1.2rem; font-weight: 700; color: #ffffff; }
.brand-sub-title { font-size: 0.75rem; color: rgba(255,255,255,0.55); letter-spacing: 1px; text-transform: uppercase; }
 
.portal-nav { display: flex; align-items: center; gap: 8px; }
.portal-nav a { text-decoration: none; color: rgba(255,255,255,0.85); padding: 10px 14px; border-radius: 12px; transition: 0.25s ease; }
.portal-nav a:hover, .portal-nav a.active { background: rgba(255,255,255,0.12); color: #ffffff; }
.portal-nav a.active { font-weight: 700; }
.action-btn-report { background: linear-gradient(135deg, #c1121f, #ef233c); color: white !important; font-weight: 700; box-shadow: 0 8px 20px rgba(193,18,31,0.35); }
.action-btn-report:hover { transform: translateY(-2px); }
.btn-logout { color: #ff6b6b !important; }
 
/* =========================================================
   USER STATUS
========================================================= */
.user-status-strip {
  background: rgba(3, 24, 58, 0.55);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.user-status-container {
  max-width: 1300px; margin: auto; display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; color: rgba(255,255,255,0.80);
}
.user-status-container strong { color: #ffffff; }
 
/* =========================================================
   HERO SECTION
========================================================= */
.hero-wrapper {
  padding: 130px 20px;
  text-align: center;
  overflow: hidden;
}
.hero-glass-panel {
  max-width: 760px; margin: auto;
  background: rgba(255,255,255,0.10);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.20);
  border-radius: 28px;
  padding: 50px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.35);
}
.hero-badge-tag {
  display: inline-block; margin-bottom: 18px;
  font-size: 0.8rem; font-weight: 700;
  color: rgba(255,255,255,0.85);
  letter-spacing: 1px; text-transform: uppercase;
}
.hero-wrapper h1 { font-size: 3.2rem; line-height: 1.15; color: white; margin-bottom: 20px; }
.hero-wrapper p { font-size: 1.08rem; color: rgba(255,255,255,0.92); line-height: 1.8; margin-bottom: 32px; }
.hero-actions-row { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
.primary-cta {
  text-decoration: none; padding: 14px 24px; border-radius: 14px;
  font-weight: 700; transition: 0.25s ease;
  background: linear-gradient(135deg, #c1121f, #ef233c);
  color: white; box-shadow: 0 8px 20px rgba(193,18,31,0.40);
}
.primary-cta:hover { transform: translateY(-3px); }
 
/* =========================================================
   MAIN VIEWPORT — glass overlay so content is readable
========================================================= */
.main-viewport {
  max-width: 1300px; margin: auto; padding: 60px 20px;
}
 
/* =========================================================
   ALERTS
========================================================= */
.alert-wrapper { margin-bottom: 24px; }
.alert { padding: 14px 18px; border-radius: 14px; margin-bottom: 12px; box-shadow: var(--shadow-sm); }
.alert-success { background: #d4edda; color: #155724; }
.alert-danger  { background: #f8d7da; color: #721c24; }
.alert-warning { background: #fff3cd; color: #856404; }
.alert-info    { background: #d1ecf1; color: #0c5460; }
 
/* =========================================================
   FEATURE / STAT CARDS  — frosted-glass on dark bg
========================================================= */
.feature-overlay-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
  margin-bottom: 70px;
}
.feature-card-box {
  background: rgba(255,255,255,0.14);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.20);
  border-radius: 28px; padding: 34px; text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  transition: 0.3s ease;
}
.feature-card-box:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.28); }
.feature-card-lbl {
  font-size: 0.85rem; color: rgba(255,255,255,0.70);
  text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;
}
.feature-card-metric { font-size: 3rem; font-weight: 800; margin-bottom: 6px; color: #ffffff; }
.feature-card-explanation { color: rgba(255,255,255,0.65); }
 
/* =========================================================
   SECTION HEADLINES
========================================================= */
.section-headline-block {
  margin-bottom: 30px; padding-bottom: 16px;
  border-bottom: 2px solid rgba(255,255,255,0.15);
}
.section-headline-block h2 { font-size: 1.8rem; color: #ffffff; margin-bottom: 5px; }
.section-headline-block span { color: rgba(255,255,255,0.60); }
 
/* =========================================================
   ORDINANCE SECTION WRAPPER
========================================================= */
.ordinance-section-wrapper {
  background: rgba(255,255,255,0.10);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 32px;
  padding: 40px 40px 20px 40px;
  margin-bottom: 70px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.20);
}
.ordinance-section-wrapper .section-headline-block {
  border-bottom-color: rgba(255,255,255,0.10);
}
 
.ordinance-grid {
  display: flex; gap: 24px; overflow-x: auto; scroll-behavior: smooth;
  padding: 10px 5px 25px; scrollbar-width: thin; scrollbar-color: #0b3d91 rgba(255,255,255,0.10);
}
.ordinance-grid::-webkit-scrollbar { height: 10px; }
.ordinance-grid::-webkit-scrollbar-track { background: rgba(255,255,255,0.08); border-radius: 20px; }
.ordinance-grid::-webkit-scrollbar-thumb { background: linear-gradient(135deg, #0b3d91, #c1121f); border-radius: 20px; }
 
.ordinance-card {
  min-width: 340px; max-width: 340px; flex-shrink: 0;
  background: rgba(255,255,255,0.95);
  border-radius: 28px; overflow: hidden; position: relative;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  transition: 0.35s ease;
  border: 1px solid rgba(255,255,255,0.30);
}
.ordinance-card:hover { transform: translateY(-10px); box-shadow: 0 24px 48px rgba(0,0,0,0.28); }
.ordinance-img-wrapper { position: relative; height: 220px; overflow: hidden; }
.ordinance-img-wrapper::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05));
}
.ordinance-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s ease; }
.ordinance-card:hover img { transform: scale(1.08); }
.ordinance-content { padding: 24px; }
.ordinance-tag {
  display: inline-block; background: rgba(11,61,145,0.08);
  color: var(--primary-color); padding: 6px 12px; border-radius: 30px;
  font-size: 0.75rem; font-weight: 700; margin-bottom: 14px;
}
.ordinance-title { font-size: 1.25rem; font-weight: 800; margin-bottom: 14px; color: #111827; }
.ordinance-summary { color: #4b5563; line-height: 1.7; margin-bottom: 24px; min-height: 95px; }
.ordinance-footer {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 18px; border-top: 1px solid rgba(0,0,0,0.08);
}
.penalty-label { color: #6b7280; font-weight: 700; font-size: 0.82rem; }
.penalty-badge {
  background: linear-gradient(135deg, #c1121f, #ef233c);
  color: white; padding: 8px 14px; border-radius: 14px;
  font-weight: 700; font-size: 0.84rem;
  box-shadow: 0 6px 14px rgba(193,18,31,0.25);
}
 
/* =========================================================
   FILING GUIDELINES TIMELINE
========================================================= */
.procedural-steps-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 70px;
}
 
.procedural-steps-wrapper::before {
  content: "";
  position: absolute;
  top: 24px; bottom: 40px; left: 23px;
  width: 2px;
  background: rgba(255,255,255,0.20);
  z-index: 0;
}
 
.step-timeline-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  z-index: 1;
  transition: transform 0.3s ease;
}
 
.step-timeline-card:hover { transform: translateX(6px); }
 
.step-circle-number {
  width: 48px; height: 48px; min-width: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  border: 2px solid rgba(255,255,255,0.50);
  color: #ffffff;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.15rem; font-weight: 700;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}
 
.step-timeline-card:hover .step-circle-number {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
  transform: scale(1.05);
}
 
.step-content-box {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.18);
  padding: 24px; border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
  flex-grow: 1;
  transition: all 0.3s ease;
}
 
.step-timeline-card:hover .step-content-box {
  box-shadow: 0 10px 28px rgba(0,0,0,0.20);
  border-color: rgba(255,255,255,0.28);
  background: rgba(255,255,255,0.16);
}
 
.step-title-text {
  display: block; font-size: 1.1rem; font-weight: 700;
  margin-bottom: 6px; color: #ffffff;
}
 
.step-details-text {
  color: rgba(255,255,255,0.72);
  line-height: 1.6; font-size: 0.95rem;
}
 
/* =========================================================
   REPORT TABLE
========================================================= */
.table-frame-holder {
  background: rgba(255,255,255,0.95);
  border-radius: 30px; overflow: hidden;
  box-shadow: 0 14px 34px rgba(0,0,0,0.18);
  border: 1px solid rgba(255,255,255,0.25);
  margin-bottom: 30px;
}
.table-frame-holder table { width: 100%; border-collapse: collapse; }
.table-frame-holder thead { background: linear-gradient(135deg, #0b3d91, #154fb1); }
.table-frame-holder thead th {
  color: white; padding: 20px; text-align: left;
  font-size: 0.92rem; letter-spacing: 0.5px; text-transform: uppercase; border: none;
}
.table-frame-holder tbody tr { transition: 0.25s ease; }
.table-frame-holder tbody tr:nth-child(even) { background: rgba(11,61,145,0.02); }
.table-frame-holder tbody tr:hover { background: rgba(11,61,145,0.06); }
.table-frame-holder tbody td { padding: 20px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #374151; }
 
.case-badge { display: inline-flex; align-items: center; justify-content: center; min-width: 95px; padding: 8px 14px; border-radius: 999px; font-size: 0.82rem; font-weight: 700; }
.case-badge-pending   { background: #fff3cd; color: #856404; }
.case-badge-settled   { background: #d4edda; color: #155724; }
.case-badge-dismissed { background: #e2e3e5; color: #383d41; }
 
/* =========================================================
   RESPONSIVE
========================================================= */
@media(max-width: 900px) {
  .header-container { flex-direction: column; height: auto; padding: 16px; }
  .portal-nav { margin-top: 14px; flex-wrap: wrap; justify-content: center; }
  .hero-wrapper { padding: 90px 20px; }
  .hero-wrapper h1 { font-size: 2rem; }
  .hero-glass-panel { padding: 32px 24px; }
  .user-status-container { flex-direction: column; gap: 6px; text-align: center; }
}
@media(max-width: 768px) {
  body { background-attachment: scroll; }
  .ordinance-section-wrapper { padding: 24px 16px 10px 16px; border-radius: 24px; }
  .ordinance-card { min-width: 85vw; max-width: 85vw; }
  .procedural-steps-wrapper::before { left: 23px; }
}
`;function Qy(){const{user:e}=Rt(),{data:t,loading:n}=Gt(re.myReports),r=t??[],i=o=>n?"…":o,s=d.jsx("section",{className:"hero-wrapper",children:d.jsxs("div",{className:"hero-glass-panel",children:[d.jsx("span",{className:"hero-badge-tag",children:"Official Governance Dashboard"}),d.jsx("h1",{children:"Welcome to the Local Government Portal"}),d.jsx("p",{children:"Submit modern case logs, review past submissions, and track alternative dispute resolutions safely and securely online."}),d.jsx("div",{className:"hero-actions-row",children:d.jsx(xe,{to:"/submit",className:"primary-cta",children:"File an Incident Blotter"})})]})});return d.jsxs(Fr,{css:Xy,active:"/dashboard",hero:s,children:[d.jsxs("div",{className:"feature-overlay-grid",children:[d.jsxs("div",{className:"feature-card-box",children:[d.jsx("div",{className:"feature-card-lbl",children:"Total Reports"}),d.jsx("div",{className:"feature-card-metric",children:i(r.length)}),d.jsx("div",{className:"feature-card-explanation",children:"All reports filed by you"})]}),d.jsxs("div",{className:"feature-card-box",children:[d.jsx("div",{className:"feature-card-lbl",children:"Pending Review"}),d.jsx("div",{className:"feature-card-metric",style:{color:"#fbbf24"},children:i(Pr(r,"Pending"))}),d.jsx("div",{className:"feature-card-explanation",children:"Awaiting official review"})]}),d.jsxs("div",{className:"feature-card-box",children:[d.jsx("div",{className:"feature-card-lbl",children:"Settled Cases"}),d.jsx("div",{className:"feature-card-metric",style:{color:"#6ee7b7"},children:i(Pr(r,"Settled"))}),d.jsx("div",{className:"feature-card-explanation",children:"Successfully resolved"})]})]}),d.jsxs("div",{className:"ordinance-section-wrapper",children:[d.jsxs("div",{className:"section-headline-block",children:[d.jsx("h2",{children:"Barangay Ordinances"}),d.jsx("span",{children:"Know your rights and responsibilities as a resident"})]}),d.jsx("div",{className:"ordinance-grid",children:Gy.map(o=>d.jsxs("div",{className:"ordinance-card",children:[d.jsx("div",{className:"ordinance-img-wrapper",children:d.jsx("img",{src:o.img,alt:o.alt})}),d.jsxs("div",{className:"ordinance-content",children:[d.jsxs("span",{className:"ordinance-tag",children:["Ordinance No. ",o.no]}),d.jsx("h3",{className:"ordinance-title",children:o.title}),d.jsx("p",{className:"ordinance-summary",children:o.summary}),d.jsxs("div",{className:"ordinance-footer",children:[d.jsx("span",{className:"penalty-label",children:"Penalty"}),d.jsx("span",{className:"penalty-badge",children:o.penalty})]})]})]},o.no))})]}),d.jsxs("div",{className:"section-headline-block",children:[d.jsx("h2",{children:"Filing Guidelines"}),d.jsx("span",{children:"Rules you must follow when filing a blotter report"})]}),d.jsx("div",{className:"procedural-steps-wrapper",children:Ky.map((o,a)=>d.jsxs("div",{className:"step-timeline-card",children:[d.jsx("div",{className:"step-circle-number",children:a+1}),d.jsxs("div",{className:"step-content-box",children:[d.jsx("span",{className:"step-title-text",children:o.title}),d.jsx("span",{className:"step-details-text",children:o.text})]})]},o.title))})]})}const qy=`/* =========================================================
   ROOT COLORS & GLOBAL
========================================================= */
:root {
  --primary-color: #0b3d91;
  --primary-hover: #072c68;
  --danger-color: #c1121f;
  --danger-hover: #980d18;
  --bg-color: #f4f7fb;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --white: #ffffff;
  --shadow-sm: 0 4px 10px rgba(0,0,0,0.08);
  --shadow-md: 0 10px 25px rgba(0,0,0,0.14);
  --shadow-lg: 0 20px 40px rgba(0,0,0,0.18);
  --radius: 22px;
}
 
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
 
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background:
    linear-gradient(rgba(3, 24, 58, 0.60), rgba(3, 24, 58, 0.60)),
    url('/static/images/BRGY.-COMMONWEALTH.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: var(--text-main);
  line-height: 1.5;
  min-height: 100vh;
}
 
/* =========================================================
   HEADER & NAVIGATION
========================================================= */
.portal-header {
  position: sticky; top: 0; z-index: 1000;
  background: rgba(3, 24, 58, 0.75);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 2px 20px rgba(0,0,0,0.25);
}
.header-container {
  max-width: 1300px; margin: auto; padding: 0 24px;
  height: 80px; display: flex; justify-content: space-between; align-items: center;
}
.brand-group { display: flex; align-items: center; gap: 14px; text-decoration: none; }
.brand-main-title { font-size: 1.2rem; font-weight: 700; color: #ffffff; }
.brand-sub-title { font-size: 0.75rem; color: rgba(255,255,255,0.55); letter-spacing: 1px; text-transform: uppercase; }
 
.portal-nav { display: flex; align-items: center; gap: 8px; }
.portal-nav a { text-decoration: none; color: rgba(255,255,255,0.85); padding: 10px 14px; border-radius: 12px; transition: 0.25s ease; }
.portal-nav a:hover, .portal-nav a.active { background: rgba(255,255,255,0.12); color: #ffffff; }
.portal-nav a.active { font-weight: 700; }
.action-btn-report { background: linear-gradient(135deg, #c1121f, #ef233c); color: white !important; font-weight: 700; box-shadow: 0 8px 20px rgba(193,18,31,0.35); }
.action-btn-report:hover { transform: translateY(-2px); }
.btn-logout { color: #ff6b6b !important; }
 
/* =========================================================
   USER STATUS
========================================================= */
.user-status-strip {
  background: rgba(3, 24, 58, 0.55);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.user-status-container {
  max-width: 1300px; margin: auto;
  display: flex; justify-content: space-between; align-items: center;
  font-size: 0.9rem; color: rgba(255,255,255,0.80);
}
.user-status-container strong { color: #ffffff; }
 
/* =========================================================
   MAIN VIEWPORT
========================================================= */
.main-viewport {
  max-width: 1300px; margin: auto; padding: 60px 20px;
}
 
/* =========================================================
   PAGE HEADER
========================================================= */
.pg-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 36px;
  padding-bottom: 18px;
  border-bottom: 2px solid rgba(255,255,255,0.15);
}
.pg-header h1 { font-size: 2rem; color: #ffffff; margin-bottom: 6px; }
.pg-header p { font-size: 0.95rem; color: rgba(255,255,255,0.60); }
 
.btn-file-new {
  display: inline-block;
  padding: 12px 22px;
  background: linear-gradient(135deg, #c1121f, #ef233c);
  color: white;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: 0.25s ease;
  box-shadow: 0 8px 20px rgba(193,18,31,0.35);
  border: none;
  cursor: pointer;
  white-space: nowrap;
}
.btn-file-new:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(193,18,31,0.45); }
 
/* =========================================================
   ALERTS
========================================================= */
.alert-wrapper { margin-bottom: 24px; }
.alert { padding: 14px 18px; border-radius: 14px; margin-bottom: 12px; box-shadow: var(--shadow-sm); }
.alert-success { background: #d4edda; color: #155724; }
.alert-danger  { background: #f8d7da; color: #721c24; }
.alert-warning { background: #fff3cd; color: #856404; }
.alert-info    { background: #d1ecf1; color: #0c5460; }
 
/* =========================================================
   STAT CARDS — frosted glass
========================================================= */
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
  margin-bottom: 50px;
}
.stat-box {
  background: rgba(255,255,255,0.14);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.20);
  border-radius: 28px; padding: 34px; text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  transition: 0.3s ease;
}
.stat-box:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.28); }
.stat-lbl {
  font-size: 0.85rem; color: rgba(255,255,255,0.70);
  text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; font-weight: 700;
}
.stat-num { font-size: 3rem; font-weight: 800; margin-bottom: 6px; color: #ffffff; }
.stat-desc { color: rgba(255,255,255,0.65); }
 
/* =========================================================
   REPORTS TABLE — white card over dark bg
========================================================= */
.tbl-wrap {
  background: rgba(255,255,255,0.97);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 14px 40px rgba(0,0,0,0.22);
  border: 1px solid rgba(255,255,255,0.25);
  margin-bottom: 30px;
  overflow-x: auto;
}
.tbl-wrap table { width: 100%; border-collapse: collapse; }
 
.tbl-wrap thead { background: linear-gradient(135deg, #0b3d91, #154fb1); }
.tbl-wrap thead th {
  color: white; padding: 20px; text-align: left;
  font-size: 0.92rem; letter-spacing: 0.5px; text-transform: uppercase; border: none;
  white-space: nowrap;
}
 
.tbl-wrap tbody tr { transition: 0.25s ease; }
.tbl-wrap tbody tr:nth-child(even) { background: rgba(11,61,145,0.03); }
.tbl-wrap tbody tr:hover { background: rgba(11,61,145,0.07); }
.tbl-wrap tbody td {
  padding: 18px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  color: #374151;
  font-size: 0.95rem;
}
 
.case-no { font-weight: 700; color: var(--primary-color); }
 
/* =========================================================
   STATUS BADGES
========================================================= */
.badge {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 95px; padding: 8px 14px;
  border-radius: 999px; font-size: 0.82rem; font-weight: 700;
}
.badge-pending   { background: #fff3cd; color: #856404; }
.badge-settled   { background: #d4edda; color: #155724; }
.badge-dismissed { background: #e2e3e5; color: #383d41; }
 
/* =========================================================
   EMPTY STATE
========================================================= */
.empty-state {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 30px;
  text-align: center;
  padding: 80px 20px;
  color: rgba(255,255,255,0.75);
  box-shadow: 0 8px 30px rgba(0,0,0,0.18);
}
.empty-icon { font-size: 3.5rem; margin-bottom: 16px; }
.empty-state p { font-size: 1rem; color: rgba(255,255,255,0.65); }
 
/* =========================================================
   RESPONSIVE
========================================================= */
@media(max-width: 900px) {
  .header-container { flex-direction: column; height: auto; padding: 16px; }
  .portal-nav { margin-top: 14px; flex-wrap: wrap; justify-content: center; }
  .pg-header { flex-direction: column; align-items: flex-start; gap: 16px; }
  .user-status-container { flex-direction: column; gap: 6px; text-align: center; }
}
@media(max-width: 768px) {
  body { background-attachment: scroll; }
  .main-viewport { padding: 40px 16px; }
  .tbl-wrap { border-radius: 20px; }
}
`,zg=`.react-toolbar { display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }
.react-toolbar input, .react-toolbar select {
  padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.95); font-size: 14px;
}
.react-toolbar input { flex: 1; min-width: 220px; }
.search-bar { display: flex; gap: 10px; align-items: center; }
.btn-save:disabled { opacity: .5; cursor: not-allowed; }
`;function Jy(){const{data:e,loading:t,error:n}=Gt(re.myReports),[r,i]=w.useState(""),[s,o]=w.useState("All"),a=e??[],l=a.filter(c=>Tg(c,r)&&(s==="All"||c.Status===s));return d.jsxs(Fr,{css:qy+zg,active:"/my-reports",children:[d.jsxs("div",{className:"pg-header",children:[d.jsxs("div",{children:[d.jsx("h1",{children:"My Blotter Reports"}),d.jsx("p",{children:"All reports you have filed with the barangay"})]}),d.jsx(xe,{to:"/submit",className:"btn-file-new",children:"+ File New Report"})]}),t&&d.jsx("p",{style:{color:"#fff"},children:"Loading your reports…"}),n&&d.jsx("div",{className:"alert alert-danger",children:n}),!t&&!n&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"stats-row",children:[d.jsxs("div",{className:"stat-box",children:[d.jsx("div",{className:"stat-lbl",children:"Total Reports"}),d.jsx("div",{className:"stat-num",children:a.length}),d.jsx("div",{className:"stat-desc",children:"All reports filed by you"})]}),d.jsxs("div",{className:"stat-box",children:[d.jsx("div",{className:"stat-lbl",children:"Pending Review"}),d.jsx("div",{className:"stat-num",style:{color:"#fbbf24"},children:Pr(a,"Pending")}),d.jsx("div",{className:"stat-desc",children:"Awaiting official review"})]}),d.jsxs("div",{className:"stat-box",children:[d.jsx("div",{className:"stat-lbl",children:"Settled Cases"}),d.jsx("div",{className:"stat-num",style:{color:"#6ee7b7"},children:Pr(a,"Settled")}),d.jsx("div",{className:"stat-desc",children:"Successfully resolved"})]})]}),a.length>0&&d.jsxs("div",{className:"react-toolbar",children:[d.jsx("input",{placeholder:"Search case no., name, or type…",value:r,onChange:c=>i(c.target.value)}),d.jsx("select",{value:s,onChange:c=>o(c.target.value),children:["All","Pending","Settled","Dismissed"].map(c=>d.jsx("option",{children:c},c))})]}),l.length>0?d.jsx("div",{className:"tbl-wrap",children:d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Case No."}),d.jsx("th",{children:"Complainant"}),d.jsx("th",{children:"Reported Person"}),d.jsx("th",{children:"Type"}),d.jsx("th",{children:"Date Filed"}),d.jsx("th",{children:"Status"})]})}),d.jsx("tbody",{children:l.map(c=>d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("span",{className:"case-no",children:c.CaseNumber})}),d.jsx("td",{children:c.Complainant}),d.jsx("td",{children:c.Respondent}),d.jsx("td",{children:c.IncidentType}),d.jsx("td",{children:Rg(c.DateFiled)}),d.jsx("td",{children:d.jsx("span",{className:`badge badge-${Vy(c.Status)}`,children:c.Status})})]},c.IncidentID))})]})}):d.jsxs("div",{className:"empty-state",children:[d.jsx("div",{className:"empty-icon"}),d.jsx("p",{children:a.length?"No reports match your search.":"No blotter records found. Submissions you file will show up securely here."})]})]})]})}const Zy=`/* =========================================================
   ROOT COLORS & GLOBAL
========================================================= */
:root {
  --primary-color: #0b3d91;
  --primary-hover: #072c68;
  --danger-color: #c1121f;
  --danger-hover: #980d18;
  --bg-color: #f4f7fb;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --white: #ffffff;
  --shadow-sm: 0 4px 10px rgba(0,0,0,0.08);
  --shadow-md: 0 10px 25px rgba(0,0,0,0.14);
  --shadow-lg: 0 20px 40px rgba(0,0,0,0.18);
  --radius: 22px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background:
    linear-gradient(rgba(3, 24, 58, 0.65), rgba(3, 24, 58, 0.65)),
    url('/static/images/BRGY.-COMMONWEALTH.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: var(--text-main);
  min-height: 100vh;
}

/* =========================================================
   HEADER & NAVIGATION (Synced with Dashboard)
========================================================= */
.portal-header {
  position: sticky; top: 0; z-index: 1000;
  background: rgba(3, 24, 58, 0.75);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 2px 20px rgba(0,0,0,0.25);
}
.header-container {
  max-width: 1300px; margin: auto; padding: 0 24px;
  height: 80px; display: flex; justify-content: space-between; align-items: center;
}
.brand-group { display: flex; align-items: center; gap: 14px; text-decoration: none; }
.brand-main-title { font-size: 1.2rem; font-weight: 700; color: #ffffff; }
.brand-sub-title { font-size: 0.75rem; color: rgba(255,255,255,0.55); letter-spacing: 1px; text-transform: uppercase; }
 
.portal-nav { display: flex; align-items: center; gap: 8px; }
.portal-nav a { text-decoration: none; color: rgba(255,255,255,0.85); padding: 10px 14px; border-radius: 12px; transition: 0.25s ease; }
.portal-nav a:hover, .portal-nav a.active { background: rgba(255,255,255,0.12); color: #ffffff; }
.portal-nav a.active { font-weight: 700; }
.action-btn-report { background: linear-gradient(135deg, #c1121f, #ef233c); color: white !important; font-weight: 700; box-shadow: 0 8px 20px rgba(193,18,31,0.35); }
.action-btn-report:hover { transform: translateY(-2px); }
.btn-logout { color: #ff6b6b !important; }

/* =========================================================
   USER STATUS
========================================================= */
.user-status-strip {
  background: rgba(3, 24, 58, 0.55);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.user-status-container {
  max-width: 1300px; margin: auto; display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; color: rgba(255,255,255,0.80);
}
.user-status-container strong { color: #ffffff; }

/* =========================================================
   HERO SECTION
========================================================= */
.hero-wrapper {
  padding: 100px 20px 50px;
  text-align: center;
}

.hero-glass-panel {
  max-width: 760px;
  margin: auto;
  background: rgba(255,255,255,0.10);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.20);
  border-radius: 28px;
  padding: 50px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.35);
}

.hero-badge-tag {
  display: inline-block;
  margin-bottom: 18px;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(255,255,255,0.85);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.hero-wrapper h1 {
  font-size: 3rem;
  line-height: 1.15;
  color: white;
  margin-bottom: 20px;
}

.hero-wrapper p {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.92);
  line-height: 1.8;
}

/* =========================================================
   MAIN VIEWPORT
========================================================= */
.main-viewport {
  max-width: 1300px;
  margin: auto;
  padding: 40px 20px 80px;
}

/* =========================================================
   ALERTS
========================================================= */
.alert-wrapper {
  margin-bottom: 24px;
}

.alert {
  padding: 14px 18px;
  border-radius: 14px;
  margin-bottom: 12px;
  box-shadow: var(--shadow-sm);
}

.alert-success {
  background: #d4edda;
  color: #155724;
}

.alert-danger {
  background: #f8d7da;
  color: #721c24;
}

/* =========================================================
   FORM CARD
========================================================= */
.form-section-wrapper {
  max-width: 950px;
  margin: auto;
  background: rgba(255,255,255,0.10);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 32px;
  padding: 40px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.20);
}

.section-headline-block {
  margin-bottom: 30px;
  padding-bottom: 16px;
  border-bottom: 2px solid rgba(255,255,255,0.15);
}

.section-headline-block h2 {
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 5px;
}

.section-headline-block span {
  color: rgba(255,255,255,0.70);
}

/* =========================================================
   CASE NUMBER
========================================================= */
.case-display-box {
  background: rgba(255,255,255,0.95);
  border-radius: 20px;
  padding: 22px;
  margin-bottom: 30px;
  box-shadow: var(--shadow-sm);
}

.case-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 8px;
  font-weight: 700;
}

.case-number {
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--primary-color);
}

.case-note {
  margin-top: 10px;
  color: #6b7280;
  font-size: 0.92rem;
}

/* =========================================================
   FORM
========================================================= */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.form-group {
  margin-bottom: 24px;
}

.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.required {
  color: #fca5a5;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.92);
  border-radius: 16px;
  padding: 15px 18px;
  font-size: 0.96rem;
  color: #111827;
  transition: 0.25s ease;
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 4px rgba(96,165,250,0.18);
}

.form-group textarea {
  resize: vertical;
  min-height: 180px;
}

/* =========================================================
   SUBMIT BUTTON
========================================================= */
.submit-btn {
  width: 100%;
  border: none;
  border-radius: 18px;
  padding: 18px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s ease;
  background: linear-gradient(135deg, #c1121f, #ef233c);
  color: white;
  box-shadow: 0 10px 25px rgba(193,18,31,0.35);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 35px rgba(193,18,31,0.45);
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media(max-width: 900px) {
  .header-container { flex-direction: column; height: auto; padding: 16px; }
  .portal-nav { margin-top: 14px; flex-wrap: wrap; justify-content: center; }
  .hero-wrapper { padding: 80px 20px 40px; }
  .hero-wrapper h1 { font-size: 2rem; }
  .hero-glass-panel { padding: 32px 24px; }
  .form-grid { grid-template-columns: 1fr; }
  .user-status-container { flex-direction: column; gap: 6px; text-align: center; }
}

@media(max-width: 768px) {
  body { background-attachment: scroll; }
  .form-section-wrapper { padding: 24px 18px; border-radius: 24px; }
}
`;function ev(){const e=jn(),{flash:t}=bt(),{user:n}=Rt(),[r,i]=w.useState(""),[s,o]=w.useState(!1),[a,l]=w.useState({incident_type:"",date_incident:"",complainant:(n==null?void 0:n.name)??"",respondent:"",narrative:""});w.useEffect(()=>{re.caseNumber().then(h=>i(h.caseNumber)).catch(h=>t("danger",h.message))},[]);const c=h=>p=>l({...a,[h]:p.target.value});async function u(h){h.preventDefault(),o(!0);try{const p=await re.submitIncident({...a,case_number:r});t("success",p.message),e("/dashboard")}catch(p){t("danger",p.message),o(!1)}}const f=d.jsx("section",{className:"hero-wrapper",children:d.jsxs("div",{className:"hero-glass-panel",children:[d.jsx("span",{className:"hero-badge-tag",children:"Digital Incident Filing System"}),d.jsx("h1",{children:"Submit a Barangay Blotter Report"}),d.jsx("p",{children:"Provide complete and accurate information regarding the incident for proper documentation, mediation, and official barangay review."})]})});return d.jsx(Fr,{css:Zy,active:"/submit",hero:f,children:d.jsxs("div",{className:"form-section-wrapper",children:[d.jsxs("div",{className:"section-headline-block",children:[d.jsx("h2",{children:"Incident Report Form"}),d.jsx("span",{children:"All fields marked with * are required"})]}),d.jsxs("form",{onSubmit:u,children:[d.jsxs("div",{className:"case-display-box",children:[d.jsx("div",{className:"case-label",children:"Automatically Generated Case Number"}),d.jsx("div",{className:"case-number",children:r||"…"}),d.jsx("div",{className:"case-note",children:"This case number is automatically assigned and cannot be modified."})]}),d.jsxs("div",{className:"form-grid",children:[d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Incident Type ",d.jsx("span",{className:"required",children:"*"})]}),d.jsxs("select",{required:!0,value:a.incident_type,onChange:c("incident_type"),children:[d.jsx("option",{value:"",children:"Select Incident Type"}),Ag.map(h=>d.jsx("option",{children:h},h))]})]}),d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Date of Incident ",d.jsx("span",{className:"required",children:"*"})]}),d.jsx("input",{type:"date",required:!0,value:a.date_incident,onChange:c("date_incident")})]}),d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Complainant Name ",d.jsx("span",{className:"required",children:"*"})]}),d.jsx("input",{type:"text",required:!0,value:a.complainant,onChange:c("complainant")})]}),d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{children:["Full name of the person being reported ",d.jsx("span",{className:"required",children:"*"})]}),d.jsx("input",{type:"text",required:!0,placeholder:"Full name of the person being reported",value:a.respondent,onChange:c("respondent")})]}),d.jsxs("div",{className:"form-group full-width",children:[d.jsxs("label",{children:["Incident Narrative / Description ",d.jsx("span",{className:"required",children:"*"})]}),d.jsx("textarea",{required:!0,placeholder:"Describe the incident in detail including the location, date, time, and all important information regarding what happened.",value:a.narrative,onChange:c("narrative")})]}),d.jsx("div",{className:"form-group full-width",children:d.jsx("button",{type:"submit",className:"submit-btn",disabled:s||!r,children:"Submit Blotter Report"})})]})]})]})})}const tv=`/* =========================================================
   ROOT COLORS & GLOBAL
========================================================= */
:root {
  --primary-color: #0b3d91;
  --primary-hover: #072c68;
  --danger-color: #c1121f;
  --danger-hover: #980d18;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --white: #ffffff;
  --shadow-sm: 0 4px 10px rgba(0,0,0,0.08);
  --shadow-lg: 0 20px 40px rgba(0,0,0,0.18);
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background:
    linear-gradient(rgba(3, 24, 58, 0.60), rgba(3, 24, 58, 0.60)),
    url('/static/images/BRGY.-COMMONWEALTH.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: var(--text-main);
  line-height: 1.5;
  min-height: 100vh;
}

/* =========================================================
   HEADER & NAVIGATION
========================================================= */
.portal-header {
  position: sticky; top: 0; z-index: 1000;
  background: rgba(3, 24, 58, 0.75);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 2px 20px rgba(0,0,0,0.25);
}
.header-container {
  max-width: 1300px; margin: auto; padding: 0 24px;
  height: 80px; display: flex; justify-content: space-between; align-items: center;
}
.brand-group { display: flex; align-items: center; gap: 14px; text-decoration: none; }
.brand-main-title { font-size: 1.2rem; font-weight: 700; color: #ffffff; }
.brand-sub-title { font-size: 0.75rem; color: rgba(255,255,255,0.55); letter-spacing: 1px; text-transform: uppercase; }

.portal-nav { display: flex; align-items: center; gap: 8px; }
.portal-nav a { text-decoration: none; color: rgba(255,255,255,0.85); padding: 10px 14px; border-radius: 12px; transition: 0.25s ease; }
.portal-nav a:hover, .portal-nav a.active { background: rgba(255,255,255,0.12); color: #ffffff; }
.portal-nav a.active { font-weight: 700; }
.action-btn-report { background: linear-gradient(135deg, #c1121f, #ef233c); color: white !important; font-weight: 700; box-shadow: 0 8px 20px rgba(193,18,31,0.35); }
.action-btn-report:hover { transform: translateY(-2px); }
.btn-logout { color: #ff6b6b !important; }

/* =========================================================
   USER STATUS
========================================================= */
.user-status-strip {
  background: rgba(3, 24, 58, 0.55);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.user-status-container {
  max-width: 1300px; margin: auto;
  display: flex; justify-content: space-between; align-items: center;
  font-size: 0.9rem; color: rgba(255,255,255,0.80);
}
.user-status-container strong { color: #ffffff; }

/* =========================================================
   MAIN VIEWPORT
========================================================= */
.main-viewport { max-width: 1300px; margin: auto; padding: 60px 20px; }

/* =========================================================
   PAGE HEADER
========================================================= */
.pg-header {
  margin-bottom: 36px; padding-bottom: 18px;
  border-bottom: 2px solid rgba(255,255,255,0.15);
}
.pg-header h1 { font-size: 2rem; color: #ffffff; margin-bottom: 6px; }
.pg-header p { font-size: 0.95rem; color: rgba(255,255,255,0.60); }

/* =========================================================
   SECTION SUBHEADERS
========================================================= */
.sec-head { margin: 40px 0 20px 0; padding-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.12); }
.sec-head h2 { font-size: 1.3rem; color: #ffffff; font-weight: 700; margin-bottom: 4px; }
.sec-head span { font-size: 0.85rem; color: rgba(255,255,255,0.55); }

/* =========================================================
   BARANGAY HALL HERO BANNER
========================================================= */
.hero-banner {
  background: rgba(255,255,255,0.13);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.18);
  border-left: 5px solid #60a5fa;
  border-radius: 24px;
  padding: 30px 34px;
  margin-bottom: 36px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.16);
  display: flex;
  align-items: flex-start;
  gap: 24px;
}
.banner-icon-wrap {
  width: 60px; height: 60px; min-width: 60px;
  border-radius: 16px;
  background: rgba(96,165,250,0.18);
  display: flex; align-items: center; justify-content: center;
}
.banner-icon-wrap svg { width: 30px; height: 30px; }
.banner-tag {
  font-size: 0.75rem; font-weight: 700;
  letter-spacing: 1px; text-transform: uppercase;
  color: rgba(255,255,255,0.55); margin-bottom: 4px;
}
.hero-banner h4 { font-size: 1.35rem; color: #ffffff; margin-bottom: 4px; font-weight: 800; }
.banner-address { font-size: 0.9rem; color: rgba(255,255,255,0.60); margin-bottom: 20px; }
.banner-stats { display: flex; gap: 40px; flex-wrap: wrap; }
.stat-meta-lbl { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: rgba(255,255,255,0.50); margin-bottom: 4px; }
.stat-meta-val { font-size: 1.05rem; color: #ffffff; font-weight: 700; }

/* =========================================================
   EMERGENCY CORE CARDS
========================================================= */
.em-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }

.em-card {
  background: rgba(255,255,255,0.13);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.18);
  border-top: 5px solid transparent;
  border-radius: 24px;
  padding: 26px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.16);
  transition: 0.3s ease;
}
.em-card:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(0,0,0,0.26); background: rgba(255,255,255,0.18); }

.em-icon-wrap {
  width: 52px; height: 52px;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px;
}
.em-icon-wrap svg { width: 26px; height: 26px; }

.em-name { font-size: 1.05rem; font-weight: 800; color: #ffffff; }
.em-sub { font-size: 0.75rem; font-weight: 700; color: rgba(255,255,255,0.55); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
.em-number { font-size: 2.4rem; font-weight: 800; line-height: 1; margin-bottom: 14px; letter-spacing: -0.5px; }
.em-address { font-size: 0.8rem; color: rgba(255,255,255,0.55); border-top: 1px solid rgba(255,255,255,0.10); padding-top: 10px; }

/* =========================================================
   LOCAL HOTLINES
========================================================= */
.hl-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.hl-column { display: flex; flex-direction: column; gap: 14px; }

.hotline-item {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: 18px;
  padding: 18px 20px;
  display: flex; align-items: center; gap: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  transition: 0.3s ease;
}
.hotline-item:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.22); background: rgba(255,255,255,0.17); }

.hotline-avatar {
  width: 48px; height: 48px; min-width: 48px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.hotline-avatar svg { width: 24px; height: 24px; }

.hotline-name { font-size: 0.95rem; font-weight: 700; color: #ffffff; }
.hotline-number { font-size: 1.15rem; font-weight: 800; color: #93c5fd; }
.hotline-desc { font-size: 0.8rem; color: rgba(255,255,255,0.55); }

/* =========================================================
   OFFICIALS TABLE
========================================================= */
.tbl-wrap {
  background: rgba(255,255,255,0.97);
  border-radius: 28px; overflow: hidden;
  box-shadow: 0 14px 40px rgba(0,0,0,0.22);
  border: 1px solid rgba(255,255,255,0.25);
  margin-bottom: 30px;
  overflow-x: auto;
}
.tbl-wrap table { width: 100%; border-collapse: collapse; }
.tbl-wrap thead { background: linear-gradient(135deg, #0b3d91, #154fb1); }
.tbl-wrap thead th {
  color: white; padding: 18px 20px; text-align: left;
  font-size: 0.88rem; letter-spacing: 0.5px; text-transform: uppercase; border: none;
  white-space: nowrap;
}
.tbl-wrap tbody tr { transition: 0.2s ease; }
.tbl-wrap tbody tr:nth-child(even) { background: rgba(11,61,145,0.03); }
.tbl-wrap tbody tr:hover { background: rgba(11,61,145,0.07); }
.tbl-wrap tbody td { padding: 16px 20px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #374151; font-size: 0.95rem; }
.tbl-wrap tbody tr:last-child td { border-bottom: none; }

.custom-badge {
  display: inline-block; font-size: 0.75rem; font-weight: 700;
  padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.4px;
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media(max-width: 900px) {
  .header-container { flex-direction: column; height: auto; padding: 16px; }
  .portal-nav { margin-top: 14px; flex-wrap: wrap; justify-content: center; }
  .user-status-container { flex-direction: column; gap: 6px; text-align: center; }
  .em-grid, .hl-grid { grid-template-columns: 1fr; }
  .hero-banner { flex-direction: column; gap: 16px; }
}
@media(max-width: 768px) {
  body { background-attachment: scroll; }
  .main-viewport { padding: 40px 16px; }
  .banner-stats { gap: 20px; }
}
`,nv=`/* Dark fallback so no white gap shows below the photo */
html { background: #03183a; }
/* Content only: sections and tables for the Emergency Contacts page.
   Background and header come from the shared resident styling. */
.gov-section {
  background: rgba(10, 28, 56, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  padding: 26px 28px;
  margin-bottom: 26px;
  backdrop-filter: blur(8px);
}
.gov-section h2 {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}
.gov-wrap { overflow-x: auto; }
.gov-table { width: 100%; border-collapse: collapse; color: #f1f5f9; font-size: 15px; }
.gov-table th, .gov-table td {
  padding: 12px 14px;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}
.gov-table tr:last-child th, .gov-table tr:last-child td { border-bottom: none; }
.gov-table thead th { background: rgba(255, 255, 255, 0.1); color: #fff; font-weight: 600; font-size: 14px; }
.gov-table tbody th { width: 230px; font-weight: 600; color: #fff; }
.gov-table .gov-num { font-weight: 600; white-space: nowrap; color: #fff; }
.gov-footer {
  margin-top: 8px;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
}
@media (max-width: 700px) {
  .gov-section { padding: 18px 14px; }
  .gov-table tbody th { width: auto; }
  .gov-table th, .gov-table td { padding: 8px; font-size: 13.5px; }
}
`,rv=[{agency:"National Emergency Hotline",number:"911",desc:"Police, fire and medical emergencies. Available 24/7."},{agency:"Philippine National Police",number:"117",desc:"Crime prevention and public security. Command Center, available 24/7."},{agency:"Bureau of Fire Protection",number:"160",desc:"Fire safety and rescue. Operations line, available 24/7."},{agency:"Philippine Red Cross",number:"143",desc:"Disaster rescue and urgent medical support."},{agency:"NDRRMC Operations",number:"(02) 8911-1406",desc:"National risk containment and calamity updates."},{agency:"Nearest General Hospital",number:"(02) 8234-5678",desc:"Emergency trauma ward (approximately 2 km from the barangay)."},{agency:"Social Welfare (DSWD)",number:"931",desc:"Family care and social assistance services."}],iv=[{agency:"Barangay Tanod Desk",number:"0918 765 4321",desc:"Local security division. Available 24/7."},{agency:"Women and Children Desk",number:"1343",desc:"VAW unit protection. Available 24/7."}],sv=[{position:"Punong Barangay",name:"Hon. Juan dela Cruz",phone:"0917 123 4567",role:"Overall barangay administration"},{position:"Barangay Kagawad",name:"Hon. Maria Santos",phone:"0918 234 5678",role:"Peace, order and community security"},{position:"Barangay Kagawad",name:"Hon. Pedro Reyes",phone:"0919 345 6789",role:"Health, environment and sanitation"},{position:"Barangay Kagawad",name:"Hon. Ana Gomez",phone:"0920 456 7890",role:"Women, protection and family affairs"},{position:"SK Chairperson",name:"Hon. Carlo Bautista",phone:"0921 567 8901",role:"Youth leadership, sports and academic councils"},{position:"Barangay Secretary",name:"Ms. Rosa Villanueva",phone:"0922 678 9012",role:"Civil documentation and case records"},{position:"Barangay Treasurer",name:"Mr. Jose Fernandez",phone:"0923 789 0123",role:"Asset allocation and fund auditing"}];function ov(){return d.jsxs(Fr,{css:tv+nv,active:"/emergency",children:[d.jsx("div",{className:"pg-header",children:d.jsxs("div",{children:[d.jsx("h1",{children:"Emergency Contacts"}),d.jsx("p",{children:"Official hotlines and office directory for barangay residents. Please keep these numbers for reference."})]})}),d.jsxs("div",{children:[d.jsxs("section",{className:"gov-section",children:[d.jsx("h2",{children:"1. Barangay Hall"}),d.jsx("div",{className:"gov-wrap",children:d.jsx("table",{className:"gov-table",children:d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("th",{children:"Address"}),d.jsx("td",{children:"Blk 1, Barangay Street, Your City"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Landline"}),d.jsx("td",{className:"gov-num",children:"(02) 8123-4567"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Mobile"}),d.jsx("td",{className:"gov-num",children:"0917 123 4567"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Office hours"}),d.jsx("td",{children:"8:00 AM to 5:00 PM"})]})]})})})]}),d.jsxs("section",{className:"gov-section",children:[d.jsx("h2",{children:"2. National and Regional Emergency Hotlines"}),d.jsx("div",{className:"gov-wrap",children:d.jsxs("table",{className:"gov-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Agency"}),d.jsx("th",{children:"Contact Number"}),d.jsx("th",{children:"Description"})]})}),d.jsx("tbody",{children:rv.map(e=>d.jsxs("tr",{children:[d.jsx("th",{children:e.agency}),d.jsx("td",{className:"gov-num",children:e.number}),d.jsx("td",{children:e.desc})]},e.agency))})]})})]}),d.jsxs("section",{className:"gov-section",children:[d.jsx("h2",{children:"3. Barangay Hotlines"}),d.jsx("div",{className:"gov-wrap",children:d.jsxs("table",{className:"gov-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Desk"}),d.jsx("th",{children:"Contact Number"}),d.jsx("th",{children:"Description"})]})}),d.jsx("tbody",{children:iv.map(e=>d.jsxs("tr",{children:[d.jsx("th",{children:e.agency}),d.jsx("td",{className:"gov-num",children:e.number}),d.jsx("td",{children:e.desc})]},e.agency))})]})})]}),d.jsxs("section",{className:"gov-section",children:[d.jsx("h2",{children:"4. Barangay Officials"}),d.jsx("div",{className:"gov-wrap",children:d.jsxs("table",{className:"gov-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Position"}),d.jsx("th",{children:"Name"}),d.jsx("th",{children:"Contact Number"}),d.jsx("th",{children:"Responsibility"})]})}),d.jsx("tbody",{children:sv.map(e=>d.jsxs("tr",{children:[d.jsx("th",{children:e.position}),d.jsx("td",{children:e.name}),d.jsx("td",{className:"gov-num",children:e.phone}),d.jsx("td",{children:e.role})]},e.name))})]})})]}),d.jsx("div",{className:"gov-footer",children:"Contact details are provided for public assistance. For updates, please visit the Barangay Hall during office hours."})]})]})}const av=`/* =========================================================
    ROOT COLORS & GLOBAL
========================================================= */
:root {
  --primary-color: #0b3d91;
  --primary-hover: #072c68;
  --danger-color: #c1121f;
  --danger-hover: #980d18;
  --bg-color: #f4f7fb;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --white: #ffffff;
  --shadow-sm: 0 4px 10px rgba(0,0,0,0.08);
  --shadow-md: 0 10px 25px rgba(0,0,0,0.14);
  --shadow-lg: 0 20px 40px rgba(0,0,0,0.18);
  --radius: 22px;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
  background:
    linear-gradient(rgba(3,24,58,0.65), rgba(3,24,58,0.65)),
    url('/static/images/BRGY.-COMMONWEALTH.webp');
  background-size:cover;
  background-position:center;
  background-attachment:fixed;
  background-repeat:no-repeat;
  color:var(--text-main);
  line-height:1.6;
  min-height:100vh;
}

/* =========================================================
    HEADER & NAVIGATION
========================================================= */
.portal-header {
  position: sticky; top: 0; z-index: 1000;
  background: rgba(3, 24, 58, 0.75);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 2px 20px rgba(0,0,0,0.25);
}
.header-container {
  max-width: 1300px; margin: auto; padding: 0 24px;
  height: 80px; display: flex; justify-content: space-between; align-items: center;
}
.brand-group { display: flex; align-items: center; gap: 14px; text-decoration: none; }
.brand-main-title { font-size: 1.2rem; font-weight: 700; color: #ffffff; }
.brand-sub-title { font-size: 0.75rem; color: rgba(255,255,255,0.55); letter-spacing: 1px; text-transform: uppercase; }

.portal-nav { display: flex; align-items: center; gap: 8px; }
.portal-nav a { text-decoration: none; color: rgba(255,255,255,0.85); padding: 10px 14px; border-radius: 12px; transition: 0.25s ease; }
.portal-nav a:hover, .portal-nav a.active { background: rgba(255,255,255,0.12); color: #ffffff; }
.portal-nav a.active { font-weight: 700; }
.action-btn-report { background: linear-gradient(135deg, #c1121f, #ef233c); color: white !important; font-weight: 700; box-shadow: 0 8px 20px rgba(193,18,31,0.35); }
.action-btn-report:hover { transform: translateY(-2px); }
.btn-logout { color: #ff6b6b !important; }

/* =========================================================
    USER STATUS BAR
========================================================= */
.user-status-strip{
  background:rgba(3,24,58,0.55);
  backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
  padding:10px 20px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.user-status-container{
  max-width:1300px;
  margin:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:0.9rem;
  color:rgba(255,255,255,0.80);
}

.user-status-container strong{
  color:#ffffff;
}

/* =========================================================
    HERO SECTION
========================================================= */
.hero-wrapper{
  padding:120px 20px 90px;
  text-align:center;
}

.hero-glass-panel{
  max-width:850px;
  margin:auto;
  background:rgba(255,255,255,0.10);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  border:1px solid rgba(255,255,255,0.20);
  border-radius:28px;
  padding:55px;
  box-shadow:0 8px 40px rgba(0,0,0,0.35);
}

.hero-badge-tag{
  display:inline-block;
  margin-bottom:18px;
  font-size:0.8rem;
  font-weight:700;
  color:rgba(255,255,255,0.85);
  letter-spacing:1px;
  text-transform:uppercase;
}

.hero-wrapper h1{
  font-size:3rem;
  line-height:1.15;
  color:white;
  margin-bottom:20px;
}

.hero-wrapper p{
  font-size:1.08rem;
  color:rgba(255,255,255,0.92);
  line-height:1.8;
  margin-bottom:32px;
}

.hero-actions-row{
  display:flex;
  justify-content:center;
  gap:16px;
  flex-wrap:wrap;
}

.primary-cta{
  text-decoration:none;
  padding:14px 24px;
  border-radius:14px;
  font-weight:700;
  transition:0.25s ease;
  background:linear-gradient(135deg,#c1121f,#ef233c);
  color:white;
  box-shadow:0 8px 20px rgba(193,18,31,0.40);
}

.primary-cta:hover{
  transform:translateY(-3px);
}

/* =========================================================
    MAIN CONTENT
========================================================= */
.main-viewport{
  max-width:1200px;
  margin:auto;
  padding:60px 20px;
}

/* =========================================================
    SECTION HEADLINES
========================================================= */
.section-headline-block{
  margin-bottom:30px;
  padding-bottom:16px;
  border-bottom:2px solid rgba(255,255,255,0.15);
}

.section-headline-block h2{
  font-size:1.8rem;
  color:#ffffff;
  margin-bottom:5px;
}

.section-headline-block span{
  color:rgba(255,255,255,0.60);
}

/* =========================================================
    GLASS CONTAINER
========================================================= */
.glass-section{
  background:rgba(255,255,255,0.10);
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  border:1px solid rgba(255,255,255,0.15);
  border-radius:32px;
  padding:40px;
  margin-bottom:60px;
  box-shadow:0 8px 30px rgba(0,0,0,0.20);
}

/* =========================================================
    LEGAL NOTICE
========================================================= */
.notice-card{
  background:rgba(255,255,255,0.14);
  border:1px solid rgba(255,255,255,0.20);
  border-radius:24px;
  padding:30px;
}

.notice-tag{
  display:inline-block;
  margin-bottom:12px;
  font-size:0.8rem;
  font-weight:700;
  color:#dbeafe;
  letter-spacing:1px;
  text-transform:uppercase;
}

.notice-card h3{
  color:#ffffff;
  font-size:1.7rem;
  margin-bottom:16px;
}

.notice-card p{
  color:rgba(255,255,255,0.82);
  line-height:1.8;
}

/* =========================================================
    TIMELINE STEPS
========================================================= */
.procedural-steps-wrapper{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:20px;
}

.procedural-steps-wrapper::before{
  content:"";
  position:absolute;
  top:24px;
  bottom:40px;
  left:23px;
  width:2px;
  background:rgba(255,255,255,0.20);
}

.step-timeline-card{
  position:relative;
  display:flex;
  align-items:flex-start;
  gap:20px;
  z-index:1;
  transition:transform 0.3s ease;
}

.step-timeline-card:hover{
  transform:translateX(6px);
}

.step-circle-number{
  width:48px;
  height:48px;
  min-width:48px;
  border-radius:50%;
  background:rgba(255,255,255,0.12);
  border:2px solid rgba(255,255,255,0.50);
  color:#ffffff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.15rem;
  font-weight:700;
  box-shadow:0 4px 12px rgba(0,0,0,0.15);
  transition:all 0.3s ease;
}

.step-timeline-card:hover .step-circle-number{
  background:var(--primary-color);
  border-color:var(--primary-color);
}

.step-content-box{
  background:rgba(255,255,255,0.12);
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  border:1px solid rgba(255,255,255,0.18);
  padding:24px;
  border-radius:16px;
  box-shadow:0 4px 14px rgba(0,0,0,0.12);
  flex-grow:1;
}

.step-title-text{
  display:block;
  font-size:1.15rem;
  font-weight:700;
  margin-bottom:8px;
  color:#ffffff;
}

.step-details-text{
  color:rgba(255,255,255,0.76);
  line-height:1.7;
  font-size:0.96rem;
}

.step-tip{
  margin-top:16px;
  padding:12px 16px;
  border-radius:12px;
  background:rgba(255,255,255,0.10);
  border-left:4px solid #60a5fa;
  color:#e5eefc;
  font-size:0.9rem;
  font-weight:600;
}

.step-warning{
  border-left-color:#ef4444;
  background:rgba(239,68,68,0.10);
}

/* =========================================================
    STATUS CARDS
========================================================= */
.status-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:22px;
}

.status-card{
  background:rgba(255,255,255,0.14);
  backdrop-filter:blur(14px);
  border:1px solid rgba(255,255,255,0.18);
  border-radius:24px;
  padding:30px;
}

.status-badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  margin-bottom:18px;
  font-weight:800;
  font-size:1rem;
}

.pending{
  color:#fbbf24;
}

.settled{
  color:#6ee7b7;
}

.dismissed{
  color:#fca5a5;
}

.status-card p{
  color:rgba(255,255,255,0.76);
  line-height:1.7;
}

/* =========================================================
    FAQ SECTION
========================================================= */
.faq-grid{
  display:grid;
  gap:20px;
}

.faq-card{
  background:rgba(255,255,255,0.12);
  backdrop-filter:blur(12px);
  border:1px solid rgba(255,255,255,0.18);
  border-radius:22px;
  padding:28px;
}

.faq-card h4{
  color:#ffffff;
  font-size:1.1rem;
  margin-bottom:12px;
}

.faq-card p{
  color:rgba(255,255,255,0.75);
  line-height:1.7;
}

/* =========================================================
    CTA SECTION
========================================================= */
.cta-section{
  text-align:center;
  background:rgba(255,255,255,0.10);
  backdrop-filter:blur(16px);
  border:1px solid rgba(255,255,255,0.18);
  border-radius:30px;
  padding:60px 30px;
  box-shadow:0 10px 30px rgba(0,0,0,0.20);
}

.cta-section h2{
  color:#ffffff;
  font-size:2rem;
  margin-bottom:14px;
}

.cta-section p{
  max-width:700px;
  margin:auto;
  color:rgba(255,255,255,0.78);
  line-height:1.8;
  margin-bottom:30px;
}

/* =========================================================
    RESPONSIVE
========================================================= */
@media(max-width:900px){

  .header-container{
    flex-direction:column;
    height:auto;
    padding:16px;
  }

  .portal-nav{
    margin-top:14px;
    flex-wrap:wrap;
    justify-content:center;
  }

  .hero-wrapper{
    padding:90px 20px;
  }

  .hero-wrapper h1{
    font-size:2rem;
  }

  .hero-glass-panel{
    padding:32px 24px;
  }

  .user-status-container{
    flex-direction:column;
    gap:6px;
    text-align:center;
  }
}

@media(max-width:768px){

  body{
    background-attachment:scroll;
  }

  .glass-section{
    padding:24px 18px;
    border-radius:24px;
  }

  .procedural-steps-wrapper::before{
    left:23px;
  }
}
`,lv=[{title:"Create and Verify Your Account",text:"Residents must register with their legal name, valid email address, and active contact number. Account verification is required before filing access becomes available.",tip:"Notice: Email verification must be completed first."},{title:"Open the Filing Portal",text:"Navigate to the dashboard and select “File a Report” to begin creating a new incident record.",tip:"A case tracking number is automatically generated."},{title:"Enter Complete Incident Information",text:"Provide complete details including names, incident date, location, and a clear narrative description of the complaint.",tip:"False or misleading information may result in legal penalties and report dismissal.",warning:!0},{title:"Wait for Administrative Review",text:"Submitted reports are reviewed by barangay officials to verify jurisdiction and filing completeness.",tip:"Standard review usually takes 3–5 business days."},{title:"Attend Mediation Hearings",text:"Both the complainant and the reported person may be summoned for mediation proceedings before the Lupon.",tip:"Personal attendance may be required by the barangay."},{title:"Final Resolution and Case Closure",text:"Cases may be marked as settled, dismissed, or endorsed for court action depending on the mediation outcome.",tip:"You can monitor updates through the portal dashboard."}],cv=[{cls:"pending",label:"Pending Review",text:"Your report has been successfully submitted and is currently under barangay administrative review."},{cls:"settled",label:"Case Settled",text:"The dispute has been resolved through mediation or amicable settlement between parties."},{cls:"dismissed",label:"Case Dismissed",text:"The barangay has formally closed the complaint or referred the matter for further legal action."}],dv=[{q:"Can I file against someone outside the barangay?",a:"Yes, provided that the incident happened within the territorial jurisdiction of the barangay."},{q:"What is the difference between a blotter and a police report?",a:"A barangay blotter focuses on mediation and local dispute resolution, while police reports are intended for criminal investigations."},{q:"How long does mediation usually take?",a:"Most mediation proceedings are completed within fifteen calendar days depending on the complexity of the dispute."},{q:"Can I withdraw my report online?",a:"No. Withdrawal requests usually require personal appearance and proper documentation at the barangay office."}];function uv(){const e=d.jsx("section",{className:"hero-wrapper",children:d.jsxs("div",{className:"hero-glass-panel",children:[d.jsx("span",{className:"hero-badge-tag",children:"Official Filing Assistance Portal"}),d.jsx("h1",{children:"How to File a Barangay Blotter Report"}),d.jsx("p",{children:"Learn the official procedure for submitting complaints, tracking dispute resolutions, and understanding the barangay mediation process through the online resident portal."}),d.jsx("div",{className:"hero-actions-row",children:d.jsx(xe,{to:"/submit",className:"primary-cta",children:"Start Filing a Report"})})]})});return d.jsxs(Fr,{css:av,active:"/guide",hero:e,children:[d.jsxs("div",{className:"glass-section",children:[d.jsxs("div",{className:"section-headline-block",children:[d.jsx("h2",{children:"Official Legal Overview"}),d.jsx("span",{children:"Understanding the purpose of the barangay blotter system"})]}),d.jsxs("div",{className:"notice-card",children:[d.jsx("span",{className:"notice-tag",children:"Republic Act No. 7160"}),d.jsx("h3",{children:"The Barangay Blotter Registry"}),d.jsx("p",{children:"The barangay blotter serves as the official administrative record of complaints, incidents, and disputes occurring within the territorial jurisdiction of the barangay. Filing a blotter report is commonly the first step toward mediation and dispute settlement under the Katarungang Pambarangay system."})]})]}),d.jsxs("div",{className:"glass-section",children:[d.jsxs("div",{className:"section-headline-block",children:[d.jsx("h2",{children:"Step-by-Step Filing Procedure"}),d.jsx("span",{children:"Follow these official procedures when submitting a report"})]}),d.jsx("div",{className:"procedural-steps-wrapper",children:lv.map((t,n)=>d.jsxs("div",{className:"step-timeline-card",children:[d.jsx("div",{className:"step-circle-number",children:n+1}),d.jsxs("div",{className:"step-content-box",children:[d.jsx("span",{className:"step-title-text",children:t.title}),d.jsx("div",{className:"step-details-text",children:t.text}),d.jsx("div",{className:`step-tip${t.warning?" step-warning":""}`,children:t.tip})]})]},t.title))})]}),d.jsxs("div",{className:"glass-section",children:[d.jsxs("div",{className:"section-headline-block",children:[d.jsx("h2",{children:"Case Status Definitions"}),d.jsx("span",{children:"Understand the meaning of each report status"})]}),d.jsx("div",{className:"status-grid",children:cv.map(t=>d.jsxs("div",{className:"status-card",children:[d.jsx("div",{className:`status-badge ${t.cls}`,children:t.label}),d.jsx("p",{children:t.text})]},t.cls))})]}),d.jsxs("div",{className:"glass-section",children:[d.jsxs("div",{className:"section-headline-block",children:[d.jsx("h2",{children:"Frequently Asked Questions"}),d.jsx("span",{children:"Common questions regarding blotter filing and mediation"})]}),d.jsx("div",{className:"faq-grid",children:dv.map(t=>d.jsxs("div",{className:"faq-card",children:[d.jsx("h4",{children:t.q}),d.jsx("p",{children:t.a})]},t.q))})]}),d.jsxs("div",{className:"cta-section",children:[d.jsx("span",{className:"hero-badge-tag",children:"Ready to Submit a Complaint"}),d.jsx("h2",{children:"Begin Your Online Filing Process"}),d.jsx("p",{children:"Access the secure electronic reporting system to submit your complaint, incident report, or mediation request."}),d.jsx(xe,{to:"/submit",className:"primary-cta",children:"File a Barangay Blotter Report"})]})]})}const fv=`/* =========================================================
   ROOT COLORS & GLOBAL
========================================================= */
:root {
  --primary-color: #0b3d91;
  --primary-hover: #072c68;
  --danger-color: #c1121f;
  --danger-hover: #980d18;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --white: #ffffff;
  --shadow-sm: 0 4px 10px rgba(0,0,0,0.08);
  --shadow-lg: 0 20px 40px rgba(0,0,0,0.18);
}
 
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
 
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background:
    linear-gradient(rgba(3, 24, 58, 0.60), rgba(3, 24, 58, 0.60)),
    url('/static/images/BRGY.-COMMONWEALTH.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: var(--text-main);
  line-height: 1.5;
  min-height: 100vh;
}
 
/* =========================================================
   HEADER & NAVIGATION
========================================================= */
.portal-header {
  position: sticky; top: 0; z-index: 1000;
  background: rgba(3, 24, 58, 0.75);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 2px 20px rgba(0,0,0,0.25);
}
.header-container {
  max-width: 1300px; margin: auto; padding: 0 24px;
  height: 80px; display: flex; justify-content: space-between; align-items: center;
}
.brand-group { display: flex; align-items: center; gap: 14px; text-decoration: none; }
.brand-main-title { font-size: 1.2rem; font-weight: 700; color: #ffffff; }
.brand-sub-title { font-size: 0.75rem; color: rgba(255,255,255,0.55); letter-spacing: 1px; text-transform: uppercase; }
 
.portal-nav { display: flex; align-items: center; gap: 8px; }
.portal-nav a { text-decoration: none; color: rgba(255,255,255,0.85); padding: 10px 14px; border-radius: 12px; transition: 0.25s ease; }
.portal-nav a:hover, .portal-nav a.active { background: rgba(255,255,255,0.12); color: #ffffff; }
.portal-nav a.active { font-weight: 700; }
.action-btn-report { background: linear-gradient(135deg, #c1121f, #ef233c); color: white !important; font-weight: 700; box-shadow: 0 8px 20px rgba(193,18,31,0.35); }
.action-btn-report:hover { transform: translateY(-2px); }
.btn-logout { color: #ff6b6b !important; }
 
/* =========================================================
   USER STATUS
========================================================= */
.user-status-strip {
  background: rgba(3, 24, 58, 0.55);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.user-status-container {
  max-width: 1300px; margin: auto;
  display: flex; justify-content: space-between; align-items: center;
  font-size: 0.9rem; color: rgba(255,255,255,0.80);
}
.user-status-container strong { color: #ffffff; }
 
/* =========================================================
   MAIN VIEWPORT
========================================================= */
.main-viewport {
  max-width: 1300px; margin: auto; padding: 60px 20px;
}
 
/* =========================================================
   PAGE HEADER
========================================================= */
.pg-header {
  margin-bottom: 36px;
  padding-bottom: 18px;
  border-bottom: 2px solid rgba(255,255,255,0.15);
}
.pg-header h1 { font-size: 2rem; color: #ffffff; margin-bottom: 6px; }
.pg-header p { font-size: 0.95rem; color: rgba(255,255,255,0.60); }
 
/* =========================================================
   ANNOUNCEMENT CARDS — frosted glass
========================================================= */
.ann-card {
  background: rgba(255,255,255,0.13);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 24px;
  padding: 30px 32px;
  margin-bottom: 20px;
  border-left-width: 5px;
  border-left-style: solid;
  box-shadow: 0 8px 28px rgba(0,0,0,0.16);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}
.ann-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 44px rgba(0,0,0,0.26);
  background: rgba(255,255,255,0.18);
}
 
.ann-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
 
.cat-badge {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
 
.ann-date {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
}
 
.ann-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.3;
}
 
.ann-content {
  font-size: 0.96rem;
  color: rgba(255,255,255,0.78);
  line-height: 1.75;
}
 
/* =========================================================
   EMPTY STATE
========================================================= */
.empty-state {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 30px;
  text-align: center;
  padding: 80px 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.18);
}
.empty-icon { font-size: 3.5rem; margin-bottom: 16px; }
.empty-state .empty-title {
  font-size: 1.3rem; font-weight: 800;
  margin-bottom: 8px; color: #ffffff;
}
.empty-state .empty-sub {
  font-size: 0.95rem; color: rgba(255,255,255,0.60);
}
 
/* =========================================================
   RESPONSIVE
========================================================= */
@media(max-width: 900px) {
  .header-container { flex-direction: column; height: auto; padding: 16px; }
  .portal-nav { margin-top: 14px; flex-wrap: wrap; justify-content: center; }
  .user-status-container { flex-direction: column; gap: 6px; text-align: center; }
}
@media(max-width: 768px) {
  body { background-attachment: scroll; }
  .main-viewport { padding: 40px 16px; }
  .ann-card { padding: 22px 20px; border-radius: 18px; }
}
`;function hv(){const{data:e,loading:t,error:n}=Gt(re.announcements);return d.jsxs(Fr,{css:fv,active:"/announcements",children:[d.jsxs("div",{className:"pg-header",children:[d.jsx("h1",{children:"Barangay Announcements"}),d.jsx("p",{children:"Official announcements and notices from your barangay authorities"})]}),t&&d.jsx(En,{}),n&&d.jsx("div",{className:"alert alert-danger",children:n}),e&&e.map(r=>{const i=Og[r.Category]??Yy;return d.jsxs("div",{className:"ann-card",style:{borderLeftColor:i.border},children:[d.jsxs("div",{className:"ann-meta",children:[d.jsx("span",{className:"cat-badge",style:{background:i.bg,color:i.fg},children:r.Category}),d.jsx("span",{className:"ann-date",children:Pg(r.CreatedAt)})]}),d.jsx("div",{className:"ann-title",children:r.Title}),d.jsx("div",{className:"ann-content",children:r.Content})]},r.AnnouncementID)}),e&&e.length===0&&d.jsxs("div",{className:"empty-state",children:[d.jsx("div",{className:"empty-title",children:"No Announcements Yet"}),d.jsx("div",{className:"empty-sub",children:"Check back later for official updates from your barangay."})]})]})}const pv={position:"fixed",inset:0,background:"rgba(15, 23, 42, 0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3,padding:20},gv={background:"#fff",width:"100%",maxWidth:540,borderRadius:6,padding:28,color:"#1f2937",boxShadow:"0 20px 50px rgba(0, 0, 0, 0.25)",textAlign:"left"},vs={display:"block",fontWeight:600,marginBottom:6,fontSize:14},ws={width:"100%",padding:"10px 12px",border:"1px solid #cbd2dc",borderRadius:4,fontSize:15,marginBottom:16,boxSizing:"border-box",fontFamily:"inherit"};function mv({record:e,onClose:t}){const{flash:n}=bt(),[r,i]=w.useState({date:"",time:"",place:"",notes:""}),[s,o]=w.useState(!1),a=c=>u=>i({...r,[c]:u.target.value});async function l(c){c.preventDefault(),o(!0);try{const u=await re.meetingNotice(e.IncidentID,r);n("success",u.message),t()}catch(u){n("danger",u.message),o(!1)}}return d.jsx("div",{style:pv,onClick:t,children:d.jsxs("div",{style:gv,onClick:c=>c.stopPropagation(),children:[d.jsx("h3",{style:{margin:"0 0 6px",fontSize:20},children:"Send Meeting Notice"}),d.jsxs("p",{style:{margin:"0 0 22px",color:"#4b5563",fontSize:14},children:["Case ",e.CaseNumber,". The notice is emailed to the complainant (",e.Complainant,"). The meeting is with the reported person: ",d.jsx("strong",{children:e.Respondent}),"."]}),d.jsxs("form",{onSubmit:l,children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14},children:[d.jsxs("div",{children:[d.jsx("label",{style:vs,children:"Meeting date"}),d.jsx("input",{type:"date",required:!0,style:ws,value:r.date,onChange:a("date")})]}),d.jsxs("div",{children:[d.jsx("label",{style:vs,children:"Meeting time"}),d.jsx("input",{type:"time",required:!0,style:ws,value:r.time,onChange:a("time")})]})]}),d.jsx("label",{style:vs,children:"Place"}),d.jsx("input",{required:!0,placeholder:"e.g. Barangay Hall, Session Room",style:ws,value:r.place,onChange:a("place")}),d.jsx("label",{style:vs,children:"Additional instructions (optional)"}),d.jsx("textarea",{rows:3,style:{...ws,resize:"vertical"},value:r.notes,onChange:a("notes")}),d.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:4},children:[d.jsx("button",{type:"button",onClick:t,className:"btn-sm",children:"Cancel"}),d.jsx("button",{type:"submit",disabled:s,className:"btn-save",children:s?"Sending…":"Send Email"})]})]})]})})}const xv=`/* =========================
   BASE UI
========================= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --primary:#0b3d91;
  --primary-dark:#072c68;
  --bg:#f4f7fb;
  --white:#ffffff;
  --text:#1f2937;
  --muted:#6b7280;
  --border:#e5e7eb;
}

body{
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background:var(--bg);
  color:var(--text);
  display:flex;
}

/* =========================
   SIDEBAR
========================= */

.sidebar{
  width:240px;
  min-height:100vh;
  background:linear-gradient(180deg,#071a35,#0b3d91);
  position:fixed;
  left:0;
  top:0;
  display:flex;
  flex-direction:column;
}

.sidebar-brand{
  padding:22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.logo-mark{
  display:flex;
  align-items:center;
  gap:12px;
}

.logo-icon{
  width:52px;
  height:52px;
  border-radius:14px;
  background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.18);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
}

.logo-text{
  color:#fff;
  font-weight:700;
  font-size:16px;
}

.logo-sub{
  font-size:11px;
  color:rgba(255,255,255,0.6);
  margin-top:3px;
}

.sidebar-user{
  padding:16px 22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.user-label{
  font-size:10px;
  color:rgba(255,255,255,0.5);
  text-transform:uppercase;
}

.user-name{
  color:#fff;
  font-weight:600;
  margin-top:4px;
}

.user-role{
  display:inline-block;
  margin-top:6px;
  font-size:11px;
  padding:4px 10px;
  border-radius:20px;
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* NAV */
.sidebar-nav{
  padding:14px;
  flex:1;
}

.nav-label{
  font-size:10px;
  color:rgba(255,255,255,0.4);
  margin:12px 0 6px;
  text-transform:uppercase;
}

.sidebar-nav a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.8);
  text-decoration:none;
  border-radius:10px;
  font-size:14px;
}

.sidebar-nav a:hover{
  background:rgba(255,255,255,0.12);
}

.sidebar-nav a.active{
  background:#fff;
  color:var(--primary);
  font-weight:600;
}

/* LOGOUT */
.sidebar-footer{
  padding:14px;
  border-top:1px solid rgba(255,255,255,0.08);
}

.sidebar-footer a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.7);
  text-decoration:none;
  border-radius:10px;
}

.sidebar-footer a:hover{
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* =========================
   MAIN
========================= */

.main{
  margin-left:240px;
  width:calc(100% - 240px);
  padding:30px;
}

.header h3{
  font-size:24px;
  font-weight:700;
}

.header p{
  color:var(--muted);
  margin-top:4px;
}

/* ALERT */
.alert{
  padding:12px 16px;
  border-radius:10px;
  margin-bottom:16px;
  background:#fff;
  border-left:4px solid;
}

/* STATS */
.stats-row{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:16px;
  margin:20px 0;
}

.stat-box{
  background:#fff;
  padding:20px;
  border-radius:16px;
  box-shadow:0 6px 20px rgba(0,0,0,0.06);
}

.stat-label{
  font-size:11px;
  color:var(--muted);
  text-transform:uppercase;
}

.stat-num{
  font-size:34px;
  font-weight:700;
  margin-top:6px;
}

/* SEARCH BAR (RESTORED) */
.search-bar{
  display:flex;
  gap:10px;
  margin-bottom:18px;
}

.search-bar input{
  flex:1;
  padding:10px 12px;
  border:1px solid var(--border);
  border-radius:10px;
  font-size:13px;
}

.search-bar button{
  padding:10px 14px;
  background:var(--primary);
  color:#fff;
  border:none;
  border-radius:10px;
  cursor:pointer;
}

.clear-btn{
  padding:10px 12px;
  border:1px solid var(--border);
  border-radius:10px;
  text-decoration:none;
  color:var(--muted);
}

/* TABLE */
.table-card{
  background:#fff;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 10px 30px rgba(0,0,0,0.06);
}

table{
  width:100%;
  border-collapse:collapse;
}

thead{
  background:var(--primary);
  color:#fff;
}

th{
  padding:16px;
  text-align:left;
  font-size:12px;
}

td{
  padding:16px;
  border-bottom:1px solid #f1f1f1;
  font-size:14px;
}

tbody tr:hover{
  background:#f9fafb;
}

/* ACTIONS */
.action-group{
  display:flex;
  gap:6px;
  align-items:center;
  flex-wrap:wrap;
}

.btn-sm{
  padding:6px 10px;
  border-radius:8px;
  font-size:12px;
  border:none;
  cursor:pointer;
  text-decoration:none;
}

.btn-edit{ background:#e0ecff; color:#1d4ed8; }
.btn-print{ background:#f3f4f6; color:#374151; }
.btn-delete{ background:#fee2e2; color:#dc2626; }

.btn-save{
  background:#0b3d91;
  color:#fff;
  border:none;
  padding:6px 10px;
  border-radius:8px;
  cursor:pointer;
  font-size:12px;
}

.status-select{
  padding:5px 8px;
  border:1px solid var(--border);
  border-radius:8px;
  font-size:12px;
}
`;function bv({r:e,onSaved:t,onDeleted:n}){const{flash:r}=bt(),[i,s]=w.useState(e.Status),[o,a]=w.useState(!1),[l,c]=w.useState(!1),u=async()=>{a(!0);try{await re.updateStatus(e.IncidentID,i),r("success","Status updated successfully."),t(e.IncidentID,i)}catch(h){r("danger",h.message)}a(!1)},f=async()=>{if(window.confirm("Delete this record?"))try{await re.deleteIncident(e.IncidentID),r("success","Blotter record deleted successfully."),n(e.IncidentID)}catch(h){r("danger",h.message)}};return d.jsxs("tr",{children:[d.jsx("td",{children:e.CaseNumber}),d.jsx("td",{children:e.Complainant}),d.jsx("td",{children:e.Respondent}),d.jsx("td",{children:e.IncidentType}),d.jsx("td",{children:Rg(e.DateFiled)}),d.jsx("td",{children:e.Status}),d.jsxs("td",{children:[d.jsxs("div",{className:"action-group",children:[d.jsx(xe,{to:`/admin/edit/${e.IncidentID}`,className:"btn-sm btn-edit",children:"Edit"}),d.jsx(xe,{to:`/admin/certificate/${e.IncidentID}`,target:"_blank",rel:"noreferrer",className:"btn-sm btn-print",children:"Print"}),d.jsx("button",{className:"btn-sm btn-edit",onClick:()=>c(!0),children:"Notify"}),d.jsx("select",{className:"status-select",value:i,onChange:h=>s(h.target.value),children:ed.map(h=>d.jsx("option",{children:h},h))}),d.jsx("button",{className:"btn-save",onClick:u,disabled:o||i===e.Status,children:o?"…":"Save"}),d.jsx("button",{className:"btn-sm btn-delete",onClick:f,children:"Delete"})]}),l&&d.jsx(mv,{record:e,onClose:()=>c(!1)})]})]})}function yv(){const{data:e,setData:t,loading:n,error:r}=Gt(re.adminIncidents),[i,s]=w.useState(""),[o,a]=w.useState("All"),l=e??[],c=l.filter(u=>Tg(u,i)&&(o==="All"||u.Status===o));return d.jsxs(Ji,{css:xv+zg,active:"/admin",children:[d.jsxs("div",{className:"header",children:[d.jsx("h3",{children:"All Blotter Records"}),d.jsx("p",{children:"Manage and review all incident reports"})]}),n&&d.jsx("p",{children:"Loading records…"}),r&&d.jsx("div",{className:"alert alert-danger",children:r}),!n&&!r&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"stats-row",children:[d.jsxs("div",{className:"stat-box",children:[d.jsx("div",{className:"stat-label",children:"Total"}),d.jsx("div",{className:"stat-num",children:l.length})]}),d.jsxs("div",{className:"stat-box",children:[d.jsx("div",{className:"stat-label",children:"Pending"}),d.jsx("div",{className:"stat-num",children:Pr(l,"Pending")})]}),d.jsxs("div",{className:"stat-box",children:[d.jsx("div",{className:"stat-label",children:"Settled"}),d.jsx("div",{className:"stat-num",children:Pr(l,"Settled")})]})]}),d.jsxs("div",{className:"search-bar",children:[d.jsx("input",{placeholder:"Search blotter...",value:i,onChange:u=>s(u.target.value)}),d.jsx("select",{value:o,onChange:u=>a(u.target.value),className:"status-select",children:["All",...ed].map(u=>d.jsx("option",{children:u},u))}),(i||o!=="All")&&d.jsx("a",{href:"#",className:"clear-btn",onClick:u=>{u.preventDefault(),s(""),a("All")},children:"Clear"})]}),d.jsx("div",{className:"table-card",children:d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Case"}),d.jsx("th",{children:"Complainant"}),d.jsx("th",{children:"Reported Person"}),d.jsx("th",{children:"Type"}),d.jsx("th",{children:"Date"}),d.jsx("th",{children:"Status"}),d.jsx("th",{children:"Actions"})]})}),d.jsxs("tbody",{children:[c.map(u=>d.jsx(bv,{r:u,onSaved:(f,h)=>t(p=>p.map(x=>x.IncidentID===f?{...x,Status:h}:x)),onDeleted:f=>t(h=>h.filter(p=>p.IncidentID!==f))},u.IncidentID)),c.length===0&&d.jsx("tr",{children:d.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:24},children:"No records found."})})]})]})})]})]})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Zi(e){return e+.5|0}const nn=(e,t,n)=>Math.max(Math.min(e,n),t);function oi(e){return nn(Zi(e*2.55),0,255)}function gn(e){return nn(Zi(e*255),0,255)}function Lt(e){return nn(Zi(e/2.55)/100,0,1)}function Ou(e){return nn(Zi(e*100),0,100)}const Je={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Wl=[..."0123456789ABCDEF"],vv=e=>Wl[e&15],wv=e=>Wl[(e&240)>>4]+Wl[e&15],ks=e=>(e&240)>>4===(e&15),kv=e=>ks(e.r)&&ks(e.g)&&ks(e.b)&&ks(e.a);function Sv(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&Je[e[1]]*17,g:255&Je[e[2]]*17,b:255&Je[e[3]]*17,a:t===5?Je[e[4]]*17:255}:(t===7||t===9)&&(n={r:Je[e[1]]<<4|Je[e[2]],g:Je[e[3]]<<4|Je[e[4]],b:Je[e[5]]<<4|Je[e[6]],a:t===9?Je[e[7]]<<4|Je[e[8]]:255})),n}const _v=(e,t)=>e<255?t(e):"";function jv(e){var t=kv(e)?vv:wv;return e?"#"+t(e.r)+t(e.g)+t(e.b)+_v(e.a,t):void 0}const Ev=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Lg(e,t,n){const r=t*Math.min(n,1-n),i=(s,o=(s+e/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function Cv(e,t,n){const r=(i,s=(i+e/60)%6)=>n-n*t*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function Nv(e,t,n){const r=Lg(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function Rv(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function td(e){const n=e.r/255,r=e.g/255,i=e.b/255,s=Math.max(n,r,i),o=Math.min(n,r,i),a=(s+o)/2;let l,c,u;return s!==o&&(u=s-o,c=a>.5?u/(2-s-o):u/(s+o),l=Rv(n,r,i,u,s),l=l*60+.5),[l|0,c||0,a]}function nd(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(gn)}function rd(e,t,n){return nd(Lg,e,t,n)}function Pv(e,t,n){return nd(Nv,e,t,n)}function Mv(e,t,n){return nd(Cv,e,t,n)}function Dg(e){return(e%360+360)%360}function Tv(e){const t=Ev.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?oi(+t[5]):gn(+t[5]));const i=Dg(+t[2]),s=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?r=Pv(i,s,o):t[1]==="hsv"?r=Mv(i,s,o):r=rd(i,s,o),{r:r[0],g:r[1],b:r[2],a:n}}function Av(e,t){var n=td(e);n[0]=Dg(n[0]+t),n=rd(n),e.r=n[0],e.g=n[1],e.b=n[2]}function Ov(e){if(!e)return;const t=td(e),n=t[0],r=Ou(t[1]),i=Ou(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${Lt(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const zu={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Lu={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function zv(){const e={},t=Object.keys(Lu),n=Object.keys(zu);let r,i,s,o,a;for(r=0;r<t.length;r++){for(o=a=t[r],i=0;i<n.length;i++)s=n[i],a=a.replace(s,zu[s]);s=parseInt(Lu[o],16),e[a]=[s>>16&255,s>>8&255,s&255]}return e}let Ss;function Lv(e){Ss||(Ss=zv(),Ss.transparent=[0,0,0,0]);const t=Ss[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Dv=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Iv(e){const t=Dv.exec(e);let n=255,r,i,s;if(t){if(t[7]!==r){const o=+t[7];n=t[8]?oi(o):nn(o*255,0,255)}return r=+t[1],i=+t[3],s=+t[5],r=255&(t[2]?oi(r):nn(r,0,255)),i=255&(t[4]?oi(i):nn(i,0,255)),s=255&(t[6]?oi(s):nn(s,0,255)),{r,g:i,b:s,a:n}}}function Fv(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Lt(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const La=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Zn=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function Bv(e,t,n){const r=Zn(Lt(e.r)),i=Zn(Lt(e.g)),s=Zn(Lt(e.b));return{r:gn(La(r+n*(Zn(Lt(t.r))-r))),g:gn(La(i+n*(Zn(Lt(t.g))-i))),b:gn(La(s+n*(Zn(Lt(t.b))-s))),a:e.a+n*(t.a-e.a)}}function _s(e,t,n){if(e){let r=td(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=rd(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Ig(e,t){return e&&Object.assign(t||{},e)}function Du(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=gn(e[3]))):(t=Ig(e,{r:0,g:0,b:0,a:1}),t.a=gn(t.a)),t}function Hv(e){return e.charAt(0)==="r"?Iv(e):Tv(e)}class Bi{constructor(t){if(t instanceof Bi)return t;const n=typeof t;let r;n==="object"?r=Du(t):n==="string"&&(r=Sv(t)||Lv(t)||Hv(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=Ig(this._rgb);return t&&(t.a=Lt(t.a)),t}set rgb(t){this._rgb=Du(t)}rgbString(){return this._valid?Fv(this._rgb):void 0}hexString(){return this._valid?jv(this._rgb):void 0}hslString(){return this._valid?Ov(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let s;const o=n===s?.5:n,a=2*o-1,l=r.a-i.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;s=1-c,r.r=255&c*r.r+s*i.r+.5,r.g=255&c*r.g+s*i.g+.5,r.b=255&c*r.b+s*i.b+.5,r.a=o*r.a+(1-o)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=Bv(this._rgb,t._rgb,n)),this}clone(){return new Bi(this.rgb)}alpha(t){return this._rgb.a=gn(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Zi(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return _s(this._rgb,2,t),this}darken(t){return _s(this._rgb,2,-t),this}saturate(t){return _s(this._rgb,1,t),this}desaturate(t){return _s(this._rgb,1,-t),this}rotate(t){return Av(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Mt(){}const Wv=(()=>{let e=0;return()=>e++})();function $(e){return e==null}function ve(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function H(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function st(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function wt(e,t){return st(e)?e:t}function F(e,t){return typeof e>"u"?t:e}const Uv=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,Fg=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function J(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function W(e,t,n,r){let i,s,o;if(ve(e))for(s=e.length,i=0;i<s;i++)t.call(n,e[i],i);else if(H(e))for(o=Object.keys(e),s=o.length,i=0;i<s;i++)t.call(n,e[o[i]],o[i])}function jo(e,t){let n,r,i,s;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],s=t[n],i.datasetIndex!==s.datasetIndex||i.index!==s.index)return!1;return!0}function Eo(e){if(ve(e))return e.map(Eo);if(H(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=Eo(e[n[i]]);return t}return e}function Bg(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function Vv(e,t,n,r){if(!Bg(e))return;const i=t[e],s=n[e];H(i)&&H(s)?Hi(i,s,r):t[e]=Eo(s)}function Hi(e,t,n){const r=ve(t)?t:[t],i=r.length;if(!H(e))return e;n=n||{};const s=n.merger||Vv;let o;for(let a=0;a<i;++a){if(o=r[a],!H(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)s(l[c],e,o,n)}return e}function vi(e,t){return Hi(e,t,{merger:$v})}function $v(e,t,n){if(!Bg(e))return;const r=t[e],i=n[e];H(r)&&H(i)?vi(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Eo(i))}const Iu={"":e=>e,x:e=>e.x,y:e=>e.y};function Yv(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function Gv(e){const t=Yv(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function Yn(e,t){return(Iu[t]||(Iu[t]=Gv(t)))(e)}function id(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Wi=e=>typeof e<"u",vn=e=>typeof e=="function",Fu=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function Kv(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Z=Math.PI,he=2*Z,Co=Number.POSITIVE_INFINITY,Xv=Z/180,be=Z/2,Cn=Z/4,Bu=Z*2/3,Hg=Math.log10,mn=Math.sign;function Ks(e,t,n){return Math.abs(e-t)<n}function Hu(e){const t=Math.round(e);e=Ks(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Hg(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function Qv(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,s)=>i-s).pop(),t}function qv(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function No(e){return!qv(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function Jv(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function Zv(e,t,n){let r,i,s;for(r=0,i=e.length;r<i;r++)s=e[r][n],isNaN(s)||(t.min=Math.min(t.min,s),t.max=Math.max(t.max,s))}function Ft(e){return e*(Z/180)}function e1(e){return e*(180/Z)}function Wu(e){if(!st(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function Wg(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n);return s<-.5*Z&&(s+=he),{angle:s,distance:i}}function t1(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function jt(e){return(e%he+he)%he}function Ro(e,t,n,r){const i=jt(e),s=jt(t),o=jt(n),a=jt(s-i),l=jt(o-i),c=jt(i-s),u=jt(i-o);return i===s||i===o||r&&s===o||a>l&&c<u}function Fe(e,t,n){return Math.max(t,Math.min(n,e))}function n1(e){return Fe(e,-32768,32767)}function Ln(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function sd(e,t,n){n=n||(o=>e[o]<t);let r=e.length-1,i=0,s;for(;r-i>1;)s=i+r>>1,n(s)?i=s:r=s;return{lo:i,hi:r}}const Ul=(e,t,n,r)=>sd(e,n,r?i=>{const s=e[i][t];return s<n||s===n&&e[i+1][t]===n}:i=>e[i][t]<n),r1=(e,t,n)=>sd(e,n,r=>e[r][t]>=n);function i1(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const Ug=["push","pop","shift","splice","unshift"];function s1(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Ug.forEach(n=>{const r="_onData"+id(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...s){const o=i.apply(this,s);return e._chartjs.listeners.forEach(a=>{typeof a[r]=="function"&&a[r](...s)}),o}})})}function Uu(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(Ug.forEach(s=>{delete e[s]}),delete e._chartjs)}function Vg(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const $g=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function Yg(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,$g.call(window,()=>{r=!1,e.apply(t,n)}))}}function o1(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const Gg=e=>e==="start"?"left":e==="end"?"right":"center",Ve=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,a1=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t,js=e=>e===0||e===1,Vu=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*he/n)),$u=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*he/n)+1,wi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*be)+1,easeOutSine:e=>Math.sin(e*be),easeInOutSine:e=>-.5*(Math.cos(Z*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>js(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>js(e)?e:Vu(e,.075,.3),easeOutElastic:e=>js(e)?e:$u(e,.075,.3),easeInOutElastic(e){return js(e)?e:e<.5?.5*Vu(e*2,.1125,.45):.5+.5*$u(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-wi.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?wi.easeInBounce(e*2)*.5:wi.easeOutBounce(e*2-1)*.5+.5};function Kg(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Yu(e){return Kg(e)?e:new Bi(e)}function Da(e){return Kg(e)?e:new Bi(e).saturate(.5).darken(.1).hexString()}const l1=["x","y","borderWidth","radius","tension"],c1=["color","borderColor","backgroundColor"];function d1(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:c1},numbers:{type:"number",properties:l1}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function u1(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Gu=new Map;function f1(e,t){t=t||{};const n=e+JSON.stringify(t);let r=Gu.get(n);return r||(r=new Intl.NumberFormat(e,t),Gu.set(n,r)),r}function od(e,t,n){return f1(t,n).format(e)}const h1={values(e){return ve(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,s=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),s=p1(e,n)}const o=Hg(Math.abs(s)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),od(e,r,l)}};function p1(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Xg={formatters:h1};function g1(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Xg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Gn=Object.create(null),Vl=Object.create(null);function ki(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const s=n[r];e=e[s]||(e[s]=Object.create(null))}return e}function Ia(e,t,n){return typeof t=="string"?Hi(ki(e,t),n):Hi(ki(e,""),t)}class m1{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>Da(i.backgroundColor),this.hoverBorderColor=(r,i)=>Da(i.borderColor),this.hoverColor=(r,i)=>Da(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Ia(this,t,n)}get(t){return ki(this,t)}describe(t,n){return Ia(Vl,t,n)}override(t,n){return Ia(Gn,t,n)}route(t,n,r,i){const s=ki(this,t),o=ki(this,r),a="_"+n;Object.defineProperties(s,{[a]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[i];return H(l)?Object.assign({},c,l):F(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(n=>n(this))}}var de=new m1({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[d1,u1,g1]);function x1(e){return!e||$(e.size)||$(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Ku(e,t,n,r,i){let s=t[i];return s||(s=t[i]=e.measureText(i).width,n.push(i)),s>r&&(r=s),r}function Nn(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function Xu(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Qu(e,t,n,r){Qg(e,t,n,r,null)}function Qg(e,t,n,r,i){let s,o,a,l,c,u,f,h;const p=t.pointStyle,x=t.rotation,b=t.radius;let v=(x||0)*Xv;if(p&&typeof p=="object"&&(s=p.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(v),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(b)||b<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,b,0,0,he):e.arc(n,r,b,0,he),e.closePath();break;case"triangle":u=i?i/2:b,e.moveTo(n+Math.sin(v)*u,r-Math.cos(v)*b),v+=Bu,e.lineTo(n+Math.sin(v)*u,r-Math.cos(v)*b),v+=Bu,e.lineTo(n+Math.sin(v)*u,r-Math.cos(v)*b),e.closePath();break;case"rectRounded":c=b*.516,l=b-c,o=Math.cos(v+Cn)*l,f=Math.cos(v+Cn)*(i?i/2-c:l),a=Math.sin(v+Cn)*l,h=Math.sin(v+Cn)*(i?i/2-c:l),e.arc(n-f,r-a,c,v-Z,v-be),e.arc(n+h,r-o,c,v-be,v),e.arc(n+f,r+a,c,v,v+be),e.arc(n-h,r+o,c,v+be,v+Z),e.closePath();break;case"rect":if(!x){l=Math.SQRT1_2*b,u=i?i/2:l,e.rect(n-u,r-l,2*u,2*l);break}v+=Cn;case"rectRot":f=Math.cos(v)*(i?i/2:b),o=Math.cos(v)*b,a=Math.sin(v)*b,h=Math.sin(v)*(i?i/2:b),e.moveTo(n-f,r-a),e.lineTo(n+h,r-o),e.lineTo(n+f,r+a),e.lineTo(n-h,r+o),e.closePath();break;case"crossRot":v+=Cn;case"cross":f=Math.cos(v)*(i?i/2:b),o=Math.cos(v)*b,a=Math.sin(v)*b,h=Math.sin(v)*(i?i/2:b),e.moveTo(n-f,r-a),e.lineTo(n+f,r+a),e.moveTo(n+h,r-o),e.lineTo(n-h,r+o);break;case"star":f=Math.cos(v)*(i?i/2:b),o=Math.cos(v)*b,a=Math.sin(v)*b,h=Math.sin(v)*(i?i/2:b),e.moveTo(n-f,r-a),e.lineTo(n+f,r+a),e.moveTo(n+h,r-o),e.lineTo(n-h,r+o),v+=Cn,f=Math.cos(v)*(i?i/2:b),o=Math.cos(v)*b,a=Math.sin(v)*b,h=Math.sin(v)*(i?i/2:b),e.moveTo(n-f,r-a),e.lineTo(n+f,r+a),e.moveTo(n+h,r-o),e.lineTo(n-h,r+o);break;case"line":o=i?i/2:Math.cos(v)*b,a=Math.sin(v)*b,e.moveTo(n-o,r-a),e.lineTo(n+o,r+a);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(v)*(i?i/2:b),r+Math.sin(v)*b);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function qg(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function ad(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function ld(e){e.restore()}function b1(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),$(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function y1(e,t,n,r,i){if(i.strikethrough||i.underline){const s=e.measureText(r),o=t-s.actualBoundingBoxLeft,a=t+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,c=n+s.actualBoundingBoxDescent,u=i.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(a,u),e.stroke()}}function v1(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Po(e,t,n,r,i,s={}){const o=ve(t)?t:[t],a=s.strokeWidth>0&&s.strokeColor!=="";let l,c;for(e.save(),e.font=i.string,b1(e,s),l=0;l<o.length;++l)c=o[l],s.backdrop&&v1(e,s.backdrop),a&&(s.strokeColor&&(e.strokeStyle=s.strokeColor),$(s.strokeWidth)||(e.lineWidth=s.strokeWidth),e.strokeText(c,n,r,s.maxWidth)),e.fillText(c,n,r,s.maxWidth),y1(e,n,r,c,s),r+=Number(i.lineHeight);e.restore()}function Mo(e,t){const{x:n,y:r,w:i,h:s,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*Z,Z,!0),e.lineTo(n,r+s-o.bottomLeft),e.arc(n+o.bottomLeft,r+s-o.bottomLeft,o.bottomLeft,Z,be,!0),e.lineTo(n+i-o.bottomRight,r+s),e.arc(n+i-o.bottomRight,r+s-o.bottomRight,o.bottomRight,be,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-be,!0),e.lineTo(n+o.topLeft,r)}const w1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,k1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function S1(e,t){const n=(""+e).match(w1);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const _1=e=>+e||0;function cd(e,t){const n={},r=H(t),i=r?Object.keys(t):t,s=H(e)?r?o=>F(e[o],e[t[o]]):o=>e[o]:()=>e;for(const o of i)n[o]=_1(s(o));return n}function Jg(e){return cd(e,{top:"y",right:"x",bottom:"y",left:"x"})}function yr(e){return cd(e,["topLeft","topRight","bottomLeft","bottomRight"])}function gt(e){const t=Jg(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Be(e,t){e=e||{},t=t||de.font;let n=F(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=F(e.style,t.style);r&&!(""+r).match(k1)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:F(e.family,t.family),lineHeight:S1(F(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:F(e.weight,t.weight),string:""};return i.string=x1(i),i}function Es(e,t,n,r){let i,s,o;for(i=0,s=e.length;i<s;++i)if(o=e[i],o!==void 0&&o!==void 0)return o}function j1(e,t,n){const{min:r,max:i}=e,s=Fg(t,(i-r)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(r,-Math.abs(s)),max:o(i,s)}}function Br(e,t){return Object.assign(Object.create(e),t)}function dd(e,t=[""],n,r,i=()=>e[0]){const s=n||e;typeof r>"u"&&(r=nm("_fallback",e));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:s,_fallback:r,_getTarget:i,override:a=>dd([a,...e],t,s,r)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete e[0][l],!0},get(a,l){return em(a,l,()=>A1(l,t,e,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(a,l){return Ju(a).includes(l)},ownKeys(a){return Ju(a)},set(a,l,c){const u=a._storage||(a._storage=i());return a[l]=u[l]=c,delete a._keys,!0}})}function Mr(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:Zg(e,r),setContext:s=>Mr(e,s,n,r),override:s=>Mr(e.override(s),t,n,r)};return new Proxy(i,{deleteProperty(s,o){return delete s[o],delete e[o],!0},get(s,o,a){return em(s,o,()=>C1(s,o,a))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(e,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,o)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(s,o){return Reflect.has(e,o)},ownKeys(){return Reflect.ownKeys(e)},set(s,o,a){return e[o]=a,delete s[o],!0}})}function Zg(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:vn(n)?n:()=>n,isIndexable:vn(r)?r:()=>r}}const E1=(e,t)=>e?e+id(t):t,ud=(e,t)=>H(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function em(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function C1(e,t,n){const{_proxy:r,_context:i,_subProxy:s,_descriptors:o}=e;let a=r[t];return vn(a)&&o.isScriptable(t)&&(a=N1(t,a,e,n)),ve(a)&&a.length&&(a=R1(t,a,e,o.isIndexable)),ud(t,a)&&(a=Mr(a,i,s&&s[t],o)),a}function N1(e,t,n,r){const{_proxy:i,_context:s,_subProxy:o,_stack:a}=n;if(a.has(e))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+e);a.add(e);let l=t(s,o||r);return a.delete(e),ud(e,l)&&(l=fd(i._scopes,i,e,l)),l}function R1(e,t,n,r){const{_proxy:i,_context:s,_subProxy:o,_descriptors:a}=n;if(typeof s.index<"u"&&r(e))return t[s.index%t.length];if(H(t[0])){const l=t,c=i._scopes.filter(u=>u!==l);t=[];for(const u of l){const f=fd(c,i,e,u);t.push(Mr(f,s,o&&o[e],a))}}return t}function tm(e,t,n){return vn(e)?e(t,n):e}const P1=(e,t)=>e===!0?t:typeof e=="string"?Yn(t,e):void 0;function M1(e,t,n,r,i){for(const s of t){const o=P1(n,s);if(o){e.add(o);const a=tm(o._fallback,n,i);if(typeof a<"u"&&a!==n&&a!==r)return a}else if(o===!1&&typeof r<"u"&&n!==r)return null}return!1}function fd(e,t,n,r){const i=t._rootScopes,s=tm(t._fallback,n,r),o=[...e,...i],a=new Set;a.add(r);let l=qu(a,o,n,s||n,r);return l===null||typeof s<"u"&&s!==n&&(l=qu(a,o,s,l,r),l===null)?!1:dd(Array.from(a),[""],i,s,()=>T1(t,n,r))}function qu(e,t,n,r,i){for(;n;)n=M1(e,t,n,r,i);return n}function T1(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return ve(i)&&H(n)?n:i||{}}function A1(e,t,n,r){let i;for(const s of t)if(i=nm(E1(s,e),n),typeof i<"u")return ud(e,i)?fd(n,r,e,i):i}function nm(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function Ju(e){let t=e._keys;return t||(t=e._keys=O1(e._scopes)),t}function O1(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}function hd(){return typeof window<"u"&&typeof document<"u"}function pd(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function To(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const na=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function z1(e,t){return na(e).getPropertyValue(t)}const L1=["top","right","bottom","left"];function Fn(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const s=L1[i];r[s]=parseFloat(e[t+"-"+s+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const D1=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function I1(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:s}=r;let o=!1,a,l;if(D1(i,s,e.target))a=i,l=s;else{const c=t.getBoundingClientRect();a=r.clientX-c.left,l=r.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Tn(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=na(n),s=i.boxSizing==="border-box",o=Fn(i,"padding"),a=Fn(i,"border","width"),{x:l,y:c,box:u}=I1(e,n),f=o.left+(u&&a.left),h=o.top+(u&&a.top);let{width:p,height:x}=t;return s&&(p-=o.width+a.width,x-=o.height+a.height),{x:Math.round((l-f)/p*n.width/r),y:Math.round((c-h)/x*n.height/r)}}function F1(e,t,n){let r,i;if(t===void 0||n===void 0){const s=e&&pd(e);if(!s)t=e.clientWidth,n=e.clientHeight;else{const o=s.getBoundingClientRect(),a=na(s),l=Fn(a,"border","width"),c=Fn(a,"padding");t=o.width-c.width-l.width,n=o.height-c.height-l.height,r=To(a.maxWidth,s,"clientWidth"),i=To(a.maxHeight,s,"clientHeight")}}return{width:t,height:n,maxWidth:r||Co,maxHeight:i||Co}}const rn=e=>Math.round(e*10)/10;function B1(e,t,n,r){const i=na(e),s=Fn(i,"margin"),o=To(i.maxWidth,e,"clientWidth")||Co,a=To(i.maxHeight,e,"clientHeight")||Co,l=F1(e,t,n);let{width:c,height:u}=l;if(i.boxSizing==="content-box"){const h=Fn(i,"border","width"),p=Fn(i,"padding");c-=p.width+h.width,u-=p.height+h.height}return c=Math.max(0,c-s.width),u=Math.max(0,r?c/r:u-s.height),c=rn(Math.min(c,o,l.maxWidth)),u=rn(Math.min(u,a,l.maxHeight)),c&&!u&&(u=rn(c/2)),(t!==void 0||n!==void 0)&&r&&l.height&&u>l.height&&(u=l.height,c=rn(Math.floor(u*r))),{width:c,height:u}}function Zu(e,t,n){const r=t||1,i=rn(e.height*r),s=rn(e.width*r);e.height=rn(e.height),e.width=rn(e.width);const o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==s?(e.currentDevicePixelRatio=r,o.height=i,o.width=s,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const H1=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};hd()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function ef(e,t){const n=z1(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}const W1=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},U1=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function vr(e,t,n){return e?W1(t,n):U1()}function rm(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function im(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function Cs(e,t,n){return e.options.clip?e[n]:t[n]}function V1(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:Cs(n,t,"left"),right:Cs(n,t,"right"),top:Cs(r,t,"top"),bottom:Cs(r,t,"bottom")}:t}function $1(e,t){const n=t._clip;if(n.disabled)return!1;const r=V1(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class Y1{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const s=n.listeners[i],o=n.duration;s.forEach(a=>a({chart:t,initial:n.initial,numSteps:o,currentStep:Math.min(r-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=$g.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const s=r.items;let o=s.length-1,a=!1,l;for(;o>=0;--o)l=s[o],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),a=!0):(s[o]=s[s.length-1],s.pop());a&&(i.draw(),this._notify(i,r,t,"progress")),s.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=s.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Tt=new Y1;const tf="transparent",G1={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=Yu(e||tf),i=r.valid&&Yu(t||tf);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class K1{constructor(t,n,r,i){const s=n[r];i=Es([t.to,i,s,t.from]);const o=Es([t.from,s,i]);this._active=!0,this._fn=t.fn||G1[t.type||typeof o],this._easing=wi[t.easing]||wi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],s=r-this._start,o=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=s,this._loop=!!t.loop,this._to=Es([t.to,n,i,t.from]),this._from=Es([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,s=this._from,o=this._loop,a=this._to;let l;if(this._active=s!==a&&(o||n<r),!this._active){this._target[i]=a,this._notify(!0);return}if(n<0){this._target[i]=s;return}l=n/r%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(s,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class sm{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!H(t))return;const n=Object.keys(de.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const s=t[i];if(!H(s))return;const o={};for(const a of n)o[a]=s[a];(ve(s.properties)&&s.properties||[i]).forEach(a=>{(a===i||!r.has(a))&&r.set(a,o)})})}_animateOptions(t,n){const r=n.options,i=Q1(t,r);if(!i)return[];const s=this._createAnimations(i,r);return r.$shared&&X1(t.options.$animations,r).then(()=>{t.options=r},()=>{}),s}_createAnimations(t,n){const r=this._properties,i=[],s=t.$animations||(t.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,n));continue}const u=n[c];let f=s[c];const h=r.get(c);if(f)if(h&&f.active()){f.update(h,u,a);continue}else f.cancel();if(!h||!h.duration){t[c]=u;continue}s[c]=f=new K1(h,t,c,u),i.push(f)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Tt.add(this._chart,r),!0}}function X1(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const s=e[r[i]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function Q1(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function nf(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,s=n.max===void 0?t:0;return{start:r?s:i,end:r?i:s}}function q1(e,t,n){if(n===!1)return!1;const r=nf(e,n),i=nf(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function J1(e){let t,n,r,i;return H(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function om(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,s;for(i=0,s=r.length;i<s;++i)n.push(r[i].index);return n}function rf(e,t,n,r={}){const i=e.keys,s=r.mode==="single";let o,a,l,c;if(t===null)return;let u=!1;for(o=0,a=i.length;o<a;++o){if(l=+i[o],l===n){if(u=!0,r.all)continue;break}c=e.values[l],st(c)&&(s||t===0||mn(t)===mn(c))&&(t+=c)}return!u&&!r.all?0:t}function Z1(e,t){const{iScale:n,vScale:r}=t,i=n.axis==="x"?"x":"y",s=r.axis==="x"?"x":"y",o=Object.keys(e),a=new Array(o.length);let l,c,u;for(l=0,c=o.length;l<c;++l)u=o[l],a[l]={[i]:u,[s]:e[u]};return a}function Fa(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function e2(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function t2(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function n2(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function sf(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const s=e[i.index];if(n&&s>0||!n&&s<0)return i.index}return null}function of(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=r,l=s.axis,c=o.axis,u=e2(s,o,r),f=t.length;let h;for(let p=0;p<f;++p){const x=t[p],{[l]:b,[c]:v}=x,g=x._stacks||(x._stacks={});h=g[c]=n2(i,u,b),h[a]=v,h._top=sf(h,o,!0,r.type),h._bottom=sf(h,o,!1,r.type);const m=h._visualValues||(h._visualValues={});m[a]=v}}function Ba(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function r2(e,t){return Br(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function i2(e,t,n){return Br(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function qr(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const i of t){const s=i._stacks;if(!s||s[r]===void 0||s[r][n]===void 0)return;delete s[r][n],s[r]._visualValues!==void 0&&s[r]._visualValues[n]!==void 0&&delete s[r]._visualValues[n]}}}const Ha=e=>e==="reset"||e==="none",af=(e,t)=>t?e:Object.assign({},e),s2=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:om(n,!0),values:null};class wr{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Fa(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&qr(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(f,h,p,x)=>f==="x"?h:f==="r"?x:p,s=n.xAxisID=F(r.xAxisID,Ba(t,"x")),o=n.yAxisID=F(r.yAxisID,Ba(t,"y")),a=n.rAxisID=F(r.rAxisID,Ba(t,"r")),l=n.indexAxis,c=n.iAxisID=i(l,s,o,a),u=n.vAxisID=i(l,o,s,a);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Uu(this._data,this),t._stacked&&qr(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(H(n)){const i=this._cachedMeta;this._data=Z1(n,i)}else if(r!==n){if(r){Uu(r,this);const i=this._cachedMeta;qr(i),i._parsed=[]}n&&Object.isExtensible(n)&&s1(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const s=n._stacked;n._stacked=Fa(n.vScale,n),n.stack!==r.stack&&(i=!0,qr(n),n.stack=r.stack),this._resyncElements(t),(i||s!==n._stacked)&&(of(this,n._parsed),n._stacked=Fa(n.vScale,n))}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:s,_stacked:o}=r,a=s.axis;let l=t===0&&n===i.length?!0:r._sorted,c=t>0&&r._parsed[t-1],u,f,h;if(this._parsing===!1)r._parsed=i,r._sorted=!0,h=i;else{ve(i[t])?h=this.parseArrayData(r,i,t,n):H(i[t])?h=this.parseObjectData(r,i,t,n):h=this.parsePrimitiveData(r,i,t,n);const p=()=>f[a]===null||c&&f[a]<c[a];for(u=0;u<n;++u)r._parsed[u+t]=f=h[u],l&&(p()&&(l=!1),c=f);r._sorted=l}o&&of(this,h)}parsePrimitiveData(t,n,r,i){const{iScale:s,vScale:o}=t,a=s.axis,l=o.axis,c=s.getLabels(),u=s===o,f=new Array(i);let h,p,x;for(h=0,p=i;h<p;++h)x=h+r,f[h]={[a]:u||s.parse(c[x],x),[l]:o.parse(n[x],x)};return f}parseArrayData(t,n,r,i){const{xScale:s,yScale:o}=t,a=new Array(i);let l,c,u,f;for(l=0,c=i;l<c;++l)u=l+r,f=n[u],a[l]={x:s.parse(f[0],u),y:o.parse(f[1],u)};return a}parseObjectData(t,n,r,i){const{xScale:s,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let u,f,h,p;for(u=0,f=i;u<f;++u)h=u+r,p=n[h],c[u]={x:s.parse(Yn(p,a),h),y:o.parse(Yn(p,l),h)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,s=this._cachedMeta,o=n[t.axis],a={keys:om(i,!0),values:n._stacks[t.axis]._visualValues};return rf(a,o,s.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const s=r[n.axis];let o=s===null?NaN:s;const a=i&&r._stacks[n.axis];i&&a&&(i.values=a,o=rf(i,s,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,s=r._sorted&&t===r.iScale,o=i.length,a=this._getOtherScale(t),l=s2(n,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:f}=t2(a);let h,p;function x(){p=i[h];const b=p[a.axis];return!st(p[t.axis])||u>b||f<b}for(h=0;h<o&&!(!x()&&(this.updateRangeFromParsed(c,t,p,l),s));++h);if(s){for(h=o-1;h>=0;--h)if(!x()){this.updateRangeFromParsed(c,t,p,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,s,o;for(i=0,s=n.length;i<s;++i)o=n[i][t.axis],st(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,s=this.getParsed(t);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:i?""+i.getLabelForValue(s[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=J1(F(this.options.clip,q1(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],s=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||i.length-a,c=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(t,s,a,l),u=a;u<a+l;++u){const f=i[u];f.hidden||(f.active&&c?o.push(f):f.draw(t,s))}for(u=0;u<o.length;++u)o[u].draw(t,s)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let s;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];s=o.$context||(o.$context=i2(this.getContext(),t,o)),s.parsed=this.getParsed(t),s.raw=i.data[t],s.index=s.dataIndex=t}else s=this.$context||(this.$context=r2(this.chart.getContext(),this.index)),s.dataset=i,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=r,s}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",s=this._cachedDataOpts,o=t+"-"+n,a=s[o],l=this.enableOptionSharing&&Wi(r);if(a)return af(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),f=i?[`${t}Hover`,"hover",t,""]:[t,""],h=c.getOptionScopes(this.getDataset(),u),p=Object.keys(de.elements[t]),x=()=>this.getContext(r,i,n),b=c.resolveNamedOptions(h,p,x,f);return b.$shared&&(b.$shared=l,s[o]=Object.freeze(af(b,l))),b}_resolveAnimations(t,n,r){const i=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,a=s[o];if(a)return a;let l;if(i.options.animation!==!1){const u=this.chart.config,f=u.datasetAnimationScopeKeys(this._type,n),h=u.getOptionScopes(this.getDataset(),f);l=u.createResolver(h,this.getContext(t,r,n))}const c=new sm(i,l&&l.animations);return l&&l._cacheable&&(s[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Ha(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,s=this.getSharedOptions(r),o=this.includeOptions(n,s)||s!==i;return this.updateSharedOptions(s,n,r),{sharedOptions:s,includeOptions:o}}updateElement(t,n,r,i){Ha(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!Ha(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const s=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(s)||s})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const i=r.length,s=n.length,o=Math.min(s,i);o&&this.parse(0,o),s>i?this._insertElements(i,s-i,t):s<i&&this._removeElements(s,i-s)}_insertElements(t,n,r=!0){const i=this._cachedMeta,s=i.data,o=t+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(s),a=t;a<o;++a)s[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,n),r&&this.updateElements(s,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&qr(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}O(wr,"defaults",{}),O(wr,"datasetElementType",null),O(wr,"dataElementType",null);function o2(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let i=0,s=n.length;i<s;i++)r=r.concat(n[i].controller.getAllParsedValues(e));e._cache.$bar=Vg(r.sort((i,s)=>i-s))}return e._cache.$bar}function a2(e){const t=e.iScale,n=o2(t,e.type);let r=t._length,i,s,o,a;const l=()=>{o===32767||o===-32768||(Wi(a)&&(r=Math.min(r,Math.abs(o-a)||r)),a=o)};for(i=0,s=n.length;i<s;++i)o=t.getPixelForValue(n[i]),l();for(a=void 0,i=0,s=t.ticks.length;i<s;++i)o=t.getPixelForTick(i),l();return r}function l2(e,t,n,r){const i=n.barThickness;let s,o;return $(i)?(s=t.min*n.categoryPercentage,o=n.barPercentage):(s=i*r,o=1),{chunk:s/r,ratio:o,start:t.pixels[e]-s/2}}function c2(e,t,n,r){const i=t.pixels,s=i[e];let o=e>0?i[e-1]:null,a=e<i.length-1?i[e+1]:null;const l=n.categoryPercentage;o===null&&(o=s-(a===null?t.end-t.start:a-s)),a===null&&(a=s+s-o);const c=s-(s-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/r,ratio:n.barPercentage,start:c}}function d2(e,t,n,r){const i=n.parse(e[0],r),s=n.parse(e[1],r),o=Math.min(i,s),a=Math.max(i,s);let l=o,c=a;Math.abs(o)>Math.abs(a)&&(l=a,c=o),t[n.axis]=c,t._custom={barStart:l,barEnd:c,start:i,end:s,min:o,max:a}}function am(e,t,n,r){return ve(e)?d2(e,t,n,r):t[n.axis]=n.parse(e,r),t}function lf(e,t,n,r){const i=e.iScale,s=e.vScale,o=i.getLabels(),a=i===s,l=[];let c,u,f,h;for(c=n,u=n+r;c<u;++c)h=t[c],f={},f[i.axis]=a||i.parse(o[c],c),l.push(am(h,f,s,c));return l}function Wa(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function u2(e,t,n){return e!==0?mn(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function f2(e){let t,n,r,i,s;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(i="end",s="start"):(i="start",s="end"),{start:n,end:r,reverse:t,top:i,bottom:s}}function h2(e,t,n,r){let i=t.borderSkipped;const s={};if(!i){e.borderSkipped=s;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:c,bottom:u}=f2(e);i==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=c:(n._bottom||0)===r?i=u:(s[cf(u,o,a,l)]=!0,i=c)),s[cf(i,o,a,l)]=!0,e.borderSkipped=s}function cf(e,t,n,r){return r?(e=p2(e,t,n),e=df(e,n,t)):e=df(e,t,n),e}function p2(e,t,n){return e===t?n:e===n?t:e}function df(e,t,n){return e==="start"?t:e==="end"?n:e}function g2(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Xs extends wr{parsePrimitiveData(t,n,r,i){return lf(t,n,r,i)}parseArrayData(t,n,r,i){return lf(t,n,r,i)}parseObjectData(t,n,r,i){const{iScale:s,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=s.axis==="x"?a:l,u=o.axis==="x"?a:l,f=[];let h,p,x,b;for(h=r,p=r+i;h<p;++h)b=n[h],x={},x[s.axis]=s.parse(Yn(b,c),h),f.push(am(Yn(b,u),x,o,h));return f}updateRangeFromParsed(t,n,r,i){super.updateRangeFromParsed(t,n,r,i);const s=r._custom;s&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,s.min),t.max=Math.max(t.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:i}=n,s=this.getParsed(t),o=s._custom,a=Wa(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(s[i.axis]);return{label:""+r.getLabelForValue(s[r.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,i){const s=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),u=this._getRuler(),{sharedOptions:f,includeOptions:h}=this._getSharedOptions(n,i);for(let p=n;p<n+r;p++){const x=this.getParsed(p),b=s||$(x[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(p),v=this._calculateBarIndexPixels(p,u),g=(x._stacks||{})[a.axis],m={horizontal:c,base:b.base,enableBorderRadius:!g||Wa(x._custom)||o===g._top||o===g._bottom,x:c?b.head:v.center,y:c?v.center:b.head,height:c?v.size:Math.abs(b.size),width:c?Math.abs(b.size):v.size};h&&(m.options=f||this.resolveDataElementOptions(p,t[p].active?"active":i));const y=m.options||t[p].options;h2(m,y,g,o),g2(m,y,u.ratio),this.updateElement(t[p],p,m,i)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(u=>u.controller.options.grouped),s=r.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(n),l=a&&a[r.axis],c=u=>{const f=u._parsed.find(p=>p[r.axis]===l),h=f&&f[u.vScale.axis];if($(h)||isNaN(h))return!0};for(const u of i)if(!(n!==void 0&&c(u))&&((s===!1||o.indexOf(u.stack)===-1||s===void 0&&u.stack===void 0)&&o.push(u.stack),u.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(t).filter(r=>t[r].axis===n).shift()}_getAxis(){const t={},n=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)t[F(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,n)]=!0;return Object.keys(t)}_getStackIndex(t,n,r){const i=this._getStacks(t,r),s=n!==void 0?i.indexOf(n):-1;return s===-1?i.length-1:s}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,i=[];let s,o;for(s=0,o=n.data.length;s<o;++s)i.push(r.getPixelForValue(this.getParsed(s)[r.axis],s));const a=t.barThickness;return{min:a||a2(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:i},options:{base:s,minBarLength:o}}=this,a=s||0,l=this.getParsed(t),c=l._custom,u=Wa(c);let f=l[n.axis],h=0,p=r?this.applyStack(n,l,r):f,x,b;p!==f&&(h=p-f,p=f),u&&(f=c.barStart,p=c.barEnd-c.barStart,f!==0&&mn(f)!==mn(c.barEnd)&&(h=0),h+=f);const v=!$(s)&&!u?s:h;let g=n.getPixelForValue(v);if(this.chart.getDataVisibility(t)?x=n.getPixelForValue(h+p):x=g,b=x-g,Math.abs(b)<o){b=u2(b,n,a)*o,f===a&&(g-=b/2);const m=n.getPixelForDecimal(0),y=n.getPixelForDecimal(1),k=Math.min(m,y),S=Math.max(m,y);g=Math.max(Math.min(g,S),k),x=g+b,r&&!u&&(l._stacks[n.axis]._visualValues[i]=n.getValueForPixel(x)-n.getValueForPixel(g))}if(g===n.getPixelForValue(a)){const m=mn(b)*n.getLineWidthForValue(a)/2;g+=m,b-=m}return{size:b,base:g,head:x,center:x+b/2}}_calculateBarIndexPixels(t,n){const r=n.scale,i=this.options,s=i.skipNull,o=F(i.maxBarThickness,1/0);let a,l;const c=this._getAxisCount();if(n.grouped){const u=s?this._getStackCount(t):n.stackCount,f=i.barThickness==="flex"?c2(t,n,i,u*c):l2(t,n,i,u*c),h=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,p=this._getAxis().indexOf(F(h,this.getFirstScaleIdForIndexAxis())),x=this._getStackIndex(this.index,this._cachedMeta.stack,s?t:void 0)+p;a=f.start+f.chunk*x+f.chunk/2,l=Math.min(o,f.chunk*f.ratio)}else a=r.getPixelForValue(this.getParsed(t)[r.axis],t),l=Math.min(o,n.min*n.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,i=r.length;let s=0;for(;s<i;++s)this.getParsed(s)[n.axis]!==null&&!r[s].hidden&&r[s].draw(this._ctx)}}O(Xs,"id","bar"),O(Xs,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),O(Xs,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function m2(e,t,n){let r=1,i=1,s=0,o=0;if(t<he){const a=e,l=a+t,c=Math.cos(a),u=Math.sin(a),f=Math.cos(l),h=Math.sin(l),p=(y,k,S)=>Ro(y,a,l,!0)?1:Math.max(k,k*n,S,S*n),x=(y,k,S)=>Ro(y,a,l,!0)?-1:Math.min(k,k*n,S,S*n),b=p(0,c,f),v=p(be,u,h),g=x(Z,c,f),m=x(Z+be,u,h);r=(b-g)/2,i=(v-m)/2,s=-(b+g)/2,o=-(v+m)/2}return{ratioX:r,ratioY:i,offsetX:s,offsetY:o}}class ai extends wr{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const r=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=r;else{let s=l=>+r[l];if(H(r[t])){const{key:l="value"}=this._parsing;s=c=>+Yn(r[c],l)}let o,a;for(o=t,a=t+n;o<a;++o)i._parsed[o]=s(o)}}_getRotation(){return Ft(this.options.rotation-90)}_getCircumference(){return Ft(this.options.circumference)}_getRotationExtents(){let t=he,n=-he;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const i=this.chart.getDatasetMeta(r).controller,s=i._getRotation(),o=i._getCircumference();t=Math.min(t,s),n=Math.max(n,s+o)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:r}=n,i=this._cachedMeta,s=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,a=Math.max((Math.min(r.width,r.height)-o)/2,0),l=Math.min(Uv(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:u,rotation:f}=this._getRotationExtents(),{ratioX:h,ratioY:p,offsetX:x,offsetY:b}=m2(f,u,l),v=(r.width-o)/h,g=(r.height-o)/p,m=Math.max(Math.min(v,g)/2,0),y=Fg(this.options.radius,m),k=Math.max(y*l,0),S=(y-k)/this._getVisibleDatasetWeightTotal();this.offsetX=x*y,this.offsetY=b*y,i.total=this.calculateTotal(),this.outerRadius=y-S*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-S*c,0),this.updateElements(s,0,s.length,t)}_circumference(t,n){const r=this.options,i=this._cachedMeta,s=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*s/he)}updateElements(t,n,r,i){const s=i==="reset",o=this.chart,a=o.chartArea,c=o.options.animation,u=(a.left+a.right)/2,f=(a.top+a.bottom)/2,h=s&&c.animateScale,p=h?0:this.innerRadius,x=h?0:this.outerRadius,{sharedOptions:b,includeOptions:v}=this._getSharedOptions(n,i);let g=this._getRotation(),m;for(m=0;m<n;++m)g+=this._circumference(m,s);for(m=n;m<n+r;++m){const y=this._circumference(m,s),k=t[m],S={x:u+this.offsetX,y:f+this.offsetY,startAngle:g,endAngle:g+y,circumference:y,outerRadius:x,innerRadius:p};v&&(S.options=b||this.resolveDataElementOptions(m,k.active?"active":i)),g+=y,this.updateElement(k,m,S,i)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let r=0,i;for(i=0;i<n.length;i++){const s=t._parsed[i];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(i)&&!n[i].hidden&&(r+=Math.abs(s))}return r}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?he*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,i=r.data.labels||[],s=od(n._parsed[t],r.options.locale);return{label:i[t]||"",value:s}}getMaxBorderWidth(t){let n=0;const r=this.chart;let i,s,o,a,l;if(!t){for(i=0,s=r.data.datasets.length;i<s;++i)if(r.isDatasetVisible(i)){o=r.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,s=t.length;i<s;++i)l=a.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let r=0,i=t.length;r<i;++r){const s=this.resolveDataElementOptions(r);n=Math.max(n,s.offset||0,s.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let r=0;r<t;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(t){return Math.max(F(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}O(ai,"id","doughnut"),O(ai,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),O(ai,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),O(ai,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data,{labels:{pointStyle:r,textAlign:i,color:s,useBorderRadius:o,borderRadius:a}}=t.legend.options;return n.labels.length&&n.datasets.length?n.labels.map((l,c)=>{const f=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:f.backgroundColor,fontColor:s,hidden:!t.getDataVisibility(c),lineDash:f.borderDash,lineDashOffset:f.borderDashOffset,lineJoin:f.borderJoinStyle,lineWidth:f.borderWidth,strokeStyle:f.borderColor,textAlign:i,pointStyle:r,borderRadius:o&&(a||f.borderRadius),index:c}}):[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}}});function Rn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class gd{constructor(t){O(this,"options");this.options=t||{}}static override(t){Object.assign(gd.prototype,t)}init(){}formats(){return Rn()}parse(){return Rn()}format(){return Rn()}add(){return Rn()}diff(){return Rn()}startOf(){return Rn()}endOf(){return Rn()}}var x2={_date:gd};function b2(e,t,n,r){const{controller:i,data:s,_sorted:o}=e,a=i._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&s.length){const c=a._reversePixels?r1:Ul;if(r){if(i._sharedOptions){const u=s[0],f=typeof u.getRange=="function"&&u.getRange(t);if(f){const h=c(s,t,n-f),p=c(s,t,n+f);return{lo:h.lo,hi:p.hi}}}}else{const u=c(s,t,n);if(l){const{vScale:f}=i._cachedMeta,{_parsed:h}=e,p=h.slice(0,u.lo+1).reverse().findIndex(b=>!$(b[f.axis]));u.lo-=Math.max(0,p);const x=h.slice(u.hi).findIndex(b=>!$(b[f.axis]));u.hi+=Math.max(0,x)}return u}}return{lo:0,hi:s.length-1}}function ra(e,t,n,r,i){const s=e.getSortedVisibleDatasetMetas(),o=n[t];for(let a=0,l=s.length;a<l;++a){const{index:c,data:u}=s[a],{lo:f,hi:h}=b2(s[a],t,o,i);for(let p=f;p<=h;++p){const x=u[p];x.skip||r(x,c,p)}}}function y2(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const s=t?Math.abs(r.x-i.x):0,o=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function Ua(e,t,n,r,i){const s=[];return!i&&!e.isPointInArea(t)||ra(e,n,t,function(a,l,c){!i&&!qg(a,e.chartArea,0)||a.inRange(t.x,t.y,r)&&s.push({element:a,datasetIndex:l,index:c})},!0),s}function v2(e,t,n,r){let i=[];function s(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],r),{angle:f}=Wg(o,{x:t.x,y:t.y});Ro(f,c,u)&&i.push({element:o,datasetIndex:a,index:l})}return ra(e,n,t,s),i}function w2(e,t,n,r,i,s){let o=[];const a=y2(n);let l=Number.POSITIVE_INFINITY;function c(u,f,h){const p=u.inRange(t.x,t.y,i);if(r&&!p)return;const x=u.getCenterPoint(i);if(!(!!s||e.isPointInArea(x))&&!p)return;const v=a(t,x);v<l?(o=[{element:u,datasetIndex:f,index:h}],l=v):v===l&&o.push({element:u,datasetIndex:f,index:h})}return ra(e,n,t,c),o}function Va(e,t,n,r,i,s){return!s&&!e.isPointInArea(t)?[]:n==="r"&&!r?v2(e,t,n,i):w2(e,t,n,r,i,s)}function uf(e,t,n,r,i){const s=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return ra(e,n,t,(l,c,u)=>{l[o]&&l[o](t[n],i)&&(s.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(t.x,t.y,i))}),r&&!a?[]:s}var k2={modes:{index(e,t,n,r){const i=Tn(t,e),s=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?Ua(e,i,s,r,o):Va(e,i,s,!1,r,o),l=[];return a.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,f=c.data[u];f&&!f.skip&&l.push({element:f,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,n,r){const i=Tn(t,e),s=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?Ua(e,i,s,r,o):Va(e,i,s,!1,r,o);if(a.length>0){const l=a[0].datasetIndex,c=e.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(e,t,n,r){const i=Tn(t,e),s=n.axis||"xy",o=n.includeInvisible||!1;return Ua(e,i,s,r,o)},nearest(e,t,n,r){const i=Tn(t,e),s=n.axis||"xy",o=n.includeInvisible||!1;return Va(e,i,s,n.intersect,r,o)},x(e,t,n,r){const i=Tn(t,e);return uf(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=Tn(t,e);return uf(e,i,"y",n.intersect,r)}}};const lm=["left","top","right","bottom"];function Jr(e,t){return e.filter(n=>n.pos===t)}function ff(e,t){return e.filter(n=>lm.indexOf(n.pos)===-1&&n.box.axis===t)}function Zr(e,t){return e.sort((n,r)=>{const i=t?r:n,s=t?n:r;return i.weight===s.weight?i.index-s.index:i.weight-s.weight})}function S2(e){const t=[];let n,r,i,s,o,a;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:s,options:{stack:o,stackWeight:a=1}}=i,t.push({index:n,box:i,pos:s,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&s+o,stackWeight:a});return t}function _2(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:s}=n;if(!r||!lm.includes(i))continue;const o=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return t}function j2(e,t){const n=_2(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let s,o,a;for(s=0,o=e.length;s<o;++s){a=e[s];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*r:l&&t.availableWidth,a.height=i):(a.width=r,a.height=u?u*i:l&&t.availableHeight)}return n}function E2(e){const t=S2(e),n=Zr(t.filter(c=>c.box.fullSize),!0),r=Zr(Jr(t,"left"),!0),i=Zr(Jr(t,"right")),s=Zr(Jr(t,"top"),!0),o=Zr(Jr(t,"bottom")),a=ff(t,"x"),l=ff(t,"y");return{fullSize:n,leftAndTop:r.concat(s),rightAndBottom:i.concat(l).concat(o).concat(a),chartArea:Jr(t,"chartArea"),vertical:r.concat(i).concat(l),horizontal:s.concat(o).concat(a)}}function hf(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function cm(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function C2(e,t,n,r){const{pos:i,box:s}=n,o=e.maxPadding;if(!H(i)){n.size&&(e[i]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?s.height:s.width),n.size=f.size/f.count,e[i]+=n.size}s.getPadding&&cm(o,s.getPadding());const a=Math.max(0,t.outerWidth-hf(o,e,"left","right")),l=Math.max(0,t.outerHeight-hf(o,e,"top","bottom")),c=a!==e.w,u=l!==e.h;return e.w=a,e.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function N2(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function R2(e,t){const n=t.maxPadding;function r(i){const s={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{s[o]=Math.max(t[o],n[o])}),s}return r(e?["left","right"]:["top","bottom"])}function li(e,t,n,r){const i=[];let s,o,a,l,c,u;for(s=0,o=e.length,c=0;s<o;++s){a=e[s],l=a.box,l.update(a.width||t.w,a.height||t.h,R2(a.horizontal,t));const{same:f,other:h}=C2(t,n,a,r);c|=f&&i.length,u=u||h,l.fullSize||i.push(a)}return c&&li(i,t,n,r)||u}function Ns(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function pf(e,t,n,r){const i=n.padding;let{x:s,y:o}=t;for(const a of e){const l=a.box,c=r[a.stack]||{placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const f=t.w*u,h=c.size||l.height;Wi(c.start)&&(o=c.start),l.fullSize?Ns(l,i.left,o,n.outerWidth-i.right-i.left,h):Ns(l,t.left+c.placed,o,f,h),c.start=o,c.placed+=f,o=l.bottom}else{const f=t.h*u,h=c.size||l.width;Wi(c.start)&&(s=c.start),l.fullSize?Ns(l,s,i.top,h,n.outerHeight-i.bottom-i.top):Ns(l,s,t.top+c.placed,h,f),c.start=s,c.placed+=f,s=l.right}}t.x=s,t.y=o}var sn={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=gt(e.options.layout.padding),s=Math.max(t-i.width,0),o=Math.max(n-i.height,0),a=E2(e.boxes),l=a.vertical,c=a.horizontal;W(e.boxes,b=>{typeof b.beforeLayout=="function"&&b.beforeLayout()});const u=l.reduce((b,v)=>v.box.options&&v.box.options.display===!1?b:b+1,0)||1,f=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/u,hBoxMaxHeight:o/2}),h=Object.assign({},i);cm(h,gt(r));const p=Object.assign({maxPadding:h,w:s,h:o,x:i.left,y:i.top},i),x=j2(l.concat(c),f);li(a.fullSize,p,f,x),li(l,p,f,x),li(c,p,f,x)&&li(l,p,f,x),N2(p),pf(a.leftAndTop,p,f,x),p.x+=p.w,p.y+=p.h,pf(a.rightAndBottom,p,f,x),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},W(a.chartArea,b=>{const v=b.box;Object.assign(v,e.chartArea),v.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class dm{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class P2 extends dm{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Qs="$chartjs",M2={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},gf=e=>e===null||e==="";function T2(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[Qs]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",gf(i)){const s=ef(e,"width");s!==void 0&&(e.width=s)}if(gf(r))if(e.style.height==="")e.height=e.width/(t||2);else{const s=ef(e,"height");s!==void 0&&(e.height=s)}return e}const um=H1?{passive:!0}:!1;function A2(e,t,n){e&&e.addEventListener(t,n,um)}function O2(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,um)}function z2(e,t){const n=M2[e.type]||e.type,{x:r,y:i}=Tn(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function Ao(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function L2(e,t,n){const r=e.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Ao(a.addedNodes,r),o=o&&!Ao(a.removedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function D2(e,t,n){const r=e.canvas,i=new MutationObserver(s=>{let o=!1;for(const a of s)o=o||Ao(a.removedNodes,r),o=o&&!Ao(a.addedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const Ui=new Map;let mf=0;function fm(){const e=window.devicePixelRatio;e!==mf&&(mf=e,Ui.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function I2(e,t){Ui.size||window.addEventListener("resize",fm),Ui.set(e,t)}function F2(e){Ui.delete(e),Ui.size||window.removeEventListener("resize",fm)}function B2(e,t,n){const r=e.canvas,i=r&&pd(r);if(!i)return;const s=Yg((a,l)=>{const c=i.clientWidth;n(a,l),c<i.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||s(c,u)});return o.observe(i),I2(e,s),o}function $a(e,t,n){n&&n.disconnect(),t==="resize"&&F2(e)}function H2(e,t,n){const r=e.canvas,i=Yg(s=>{e.ctx!==null&&n(z2(s,e))},e);return A2(r,t,i),i}class W2 extends dm{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(T2(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[Qs])return!1;const r=n[Qs].initial;["height","width"].forEach(s=>{const o=r[s];$(o)?n.removeAttribute(s):n.setAttribute(s,o)});const i=r.style||{};return Object.keys(i).forEach(s=>{n.style[s]=i[s]}),n.width=n.width,delete n[Qs],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),o={attach:L2,detach:D2,resize:B2}[n]||H2;i[n]=o(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:$a,detach:$a,resize:$a}[n]||O2)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return B1(t,n,r,i)}isAttached(t){const n=t&&pd(t);return!!(n&&n.isConnected)}}function U2(e){return!hd()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?P2:W2}class wn{constructor(){O(this,"x");O(this,"y");O(this,"active",!1);O(this,"options");O(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return No(this.x)&&No(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(s=>{i[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),i}}O(wn,"defaults",{}),O(wn,"defaultRoutes");function V2(e,t){const n=e.options.ticks,r=$2(e),i=Math.min(n.maxTicksLimit||r,r),s=n.major.enabled?G2(t):[],o=s.length,a=s[0],l=s[o-1],c=[];if(o>i)return K2(t,c,s,o/i),c;const u=Y2(s,t,i);if(o>0){let f,h;const p=o>1?Math.round((l-a)/(o-1)):null;for(Rs(t,c,u,$(p)?0:a-p,a),f=0,h=o-1;f<h;f++)Rs(t,c,u,s[f],s[f+1]);return Rs(t,c,u,l,$(p)?t.length:l+p),c}return Rs(t,c,u),c}function $2(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Y2(e,t,n){const r=X2(e),i=t.length/n;if(!r)return Math.max(i,1);const s=Qv(r);for(let o=0,a=s.length-1;o<a;o++){const l=s[o];if(l>i)return l}return Math.max(i,1)}function G2(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function K2(e,t,n,r){let i=0,s=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===s&&(t.push(e[o]),i++,s=n[i*r])}function Rs(e,t,n,r,i){const s=F(r,0),o=Math.min(F(i,e.length),e.length);let a=0,l,c,u;for(n=Math.ceil(n),i&&(l=i-r,n=l/Math.floor(l/n)),u=s;u<0;)a++,u=Math.round(s+a*n);for(c=Math.max(s,0);c<o;c++)c===u&&(t.push(e[c]),a++,u=Math.round(s+a*n))}function X2(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const Q2=e=>e==="left"?"right":e==="right"?"left":e,xf=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,bf=(e,t)=>Math.min(t||e,e);function yf(e,t){const n=[],r=e.length/t,i=e.length;let s=0;for(;s<i;s+=r)n.push(e[Math.floor(s)]);return n}function q2(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),s=e._startPixel,o=e._endPixel,a=1e-6;let l=e.getPixelForTick(i),c;if(!(n&&(r===1?c=Math.max(l-s,o-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<s-a||l>o+a)))return l}function J2(e,t){W(e,n=>{const r=n.gc,i=r.length/2;let s;if(i>t){for(s=0;s<i;++s)delete n.data[r[s]];r.splice(0,i)}})}function ei(e){return e.drawTicks?e.tickLength:0}function vf(e,t){if(!e.display)return 0;const n=Be(e.font,t),r=gt(e.padding);return(ve(e.text)?e.text.length:1)*n.lineHeight+r.height}function Z2(e,t){return Br(e,{scale:t,type:"scale"})}function e5(e,t,n){return Br(e,{tick:n,index:t,type:"tick"})}function t5(e,t,n){let r=Gg(e);return(n&&t!=="right"||!n&&t==="right")&&(r=Q2(r)),r}function n5(e,t,n,r){const{top:i,left:s,bottom:o,right:a,chart:l}=e,{chartArea:c,scales:u}=l;let f=0,h,p,x;const b=o-i,v=a-s;if(e.isHorizontal()){if(p=Ve(r,s,a),H(n)){const g=Object.keys(n)[0],m=n[g];x=u[g].getPixelForValue(m)+b-t}else n==="center"?x=(c.bottom+c.top)/2+b-t:x=xf(e,n,t);h=a-s}else{if(H(n)){const g=Object.keys(n)[0],m=n[g];p=u[g].getPixelForValue(m)-v+t}else n==="center"?p=(c.left+c.right)/2-v+t:p=xf(e,n,t);x=Ve(r,o,i),f=n==="left"?-be:be}return{titleX:p,titleY:x,maxWidth:h,rotation:f}}class Hr extends wn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=wt(t,Number.POSITIVE_INFINITY),n=wt(n,Number.NEGATIVE_INFINITY),r=wt(r,Number.POSITIVE_INFINITY),i=wt(i,Number.NEGATIVE_INFINITY),{min:wt(t,r),max:wt(n,i),minDefined:st(t),maxDefined:st(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:s}=this.getUserBounds(),o;if(i&&s)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),i||(n=Math.min(n,o.min)),s||(r=Math.max(r,o.max));return n=s&&n>r?r:n,r=i&&n>r?n:r,{min:wt(n,wt(r,n)),max:wt(r,wt(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){J(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:s,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=j1(this,s,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?yf(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=V2(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){J(this.options.afterUpdate,[this])}beforeSetDimensions(){J(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){J(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),J(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){J(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],s.label=J(n.callback,[s.value,r,t],this)}afterTickToLabelConversion(){J(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){J(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=bf(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,s=n.maxRotation;let o=i,a,l,c;if(!this._isVisible()||!n.display||i>=s||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),f=u.widest.width,h=u.highest.height,p=Fe(this.chart.width-f,0,this.maxWidth);a=t.offset?this.maxWidth/r:p/(r-1),f+6>a&&(a=p/(r-(t.offset?.5:1)),l=this.maxHeight-ei(t.grid)-n.padding-vf(t.title,this.chart.options.font),c=Math.sqrt(f*f+h*h),o=e1(Math.min(Math.asin(Fe((u.highest.height+6)/a,-1,1)),Math.asin(Fe(l/c,-1,1))-Math.asin(Fe(h/c,-1,1)))),o=Math.max(i,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){J(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){J(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:s}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=vf(i,n.options.font);if(a?(t.width=this.maxWidth,t.height=ei(s)+l):(t.height=this.maxHeight,t.width=ei(s)+l),r.display&&this.ticks.length){const{first:c,last:u,widest:f,highest:h}=this._getLabelSizes(),p=r.padding*2,x=Ft(this.labelRotation),b=Math.cos(x),v=Math.sin(x);if(a){const g=r.mirror?0:v*f.width+b*h.height;t.height=Math.min(this.maxHeight,t.height+g+p)}else{const g=r.mirror?0:b*f.width+v*h.height;t.width=Math.min(this.maxWidth,t.width+g+p)}this._calculatePadding(c,u,v,b)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:s,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,p=0;l?c?(h=i*t.width,p=r*n.height):(h=r*t.height,p=i*n.width):s==="start"?p=n.width:s==="end"?h=t.width:s!=="inner"&&(h=t.width/2,p=n.width/2),this.paddingLeft=Math.max((h-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((p-f+o)*this.width/(this.width-f),0)}else{let u=n.height/2,f=t.height/2;s==="start"?(u=0,f=t.height):s==="end"&&(u=n.height,f=0),this.paddingTop=u+o,this.paddingBottom=f+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){J(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)$(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=yf(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:s}=this,o=[],a=[],l=Math.floor(n/bf(n,r));let c=0,u=0,f,h,p,x,b,v,g,m,y,k,S;for(f=0;f<n;f+=l){if(x=t[f].label,b=this._resolveTickFontOptions(f),i.font=v=b.string,g=s[v]=s[v]||{data:{},gc:[]},m=b.lineHeight,y=k=0,!$(x)&&!ve(x))y=Ku(i,g.data,g.gc,y,x),k=m;else if(ve(x))for(h=0,p=x.length;h<p;++h)S=x[h],!$(S)&&!ve(S)&&(y=Ku(i,g.data,g.gc,y,S),k+=m);o.push(y),a.push(k),c=Math.max(y,c),u=Math.max(k,u)}J2(s,n);const _=o.indexOf(c),j=a.indexOf(u),E=P=>({width:o[P]||0,height:a[P]||0});return{first:E(0),last:E(n-1),widest:E(_),highest:E(j),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return n1(this._alignToPixels?Nn(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=e5(this.getContext(),t,r))}return this.$context||(this.$context=Z2(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=Ft(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=t.autoSkipPadding||0,a=s?s.widest.width+o:0,l=s?s.highest.height+o:0;return this.isHorizontal()?l*r>a*i?a/r:l/i:l*i<a*r?l/r:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:s,position:o,border:a}=i,l=s.offset,c=this.isHorizontal(),f=this.ticks.length+(l?1:0),h=ei(s),p=[],x=a.setContext(this.getContext()),b=x.display?x.width:0,v=b/2,g=function(V){return Nn(r,V,b)};let m,y,k,S,_,j,E,P,R,A,L,Y;if(o==="top")m=g(this.bottom),j=this.bottom-h,P=m-v,A=g(t.top)+v,Y=t.bottom;else if(o==="bottom")m=g(this.top),A=t.top,Y=g(t.bottom)-v,j=m+v,P=this.top+h;else if(o==="left")m=g(this.right),_=this.right-h,E=m-v,R=g(t.left)+v,L=t.right;else if(o==="right")m=g(this.left),R=t.left,L=g(t.right)-v,_=m+v,E=this.left+h;else if(n==="x"){if(o==="center")m=g((t.top+t.bottom)/2+.5);else if(H(o)){const V=Object.keys(o)[0],X=o[V];m=g(this.chart.scales[V].getPixelForValue(X))}A=t.top,Y=t.bottom,j=m+v,P=j+h}else if(n==="y"){if(o==="center")m=g((t.left+t.right)/2);else if(H(o)){const V=Object.keys(o)[0],X=o[V];m=g(this.chart.scales[V].getPixelForValue(X))}_=m-v,E=_-h,R=t.left,L=t.right}const pe=F(i.ticks.maxTicksLimit,f),D=Math.max(1,Math.ceil(f/pe));for(y=0;y<f;y+=D){const V=this.getContext(y),X=s.setContext(V),N=a.setContext(V),T=X.lineWidth,z=X.color,G=N.dash||[],Q=N.dashOffset,yt=X.tickWidth,Re=X.tickColor,Pt=X.tickBorderDash||[],Pe=X.tickBorderDashOffset;k=q2(this,y,l),k!==void 0&&(S=Nn(r,k,T),c?_=E=R=L=S:j=P=A=Y=S,p.push({tx1:_,ty1:j,tx2:E,ty2:P,x1:R,y1:A,x2:L,y2:Y,width:T,color:z,borderDash:G,borderDashOffset:Q,tickWidth:yt,tickColor:Re,tickBorderDash:Pt,tickBorderDashOffset:Pe}))}return this._ticksLength=f,this._borderValue=m,p}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:s}=r,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:f}=s,h=ei(r.grid),p=h+u,x=f?-u:p,b=-Ft(this.labelRotation),v=[];let g,m,y,k,S,_,j,E,P,R,A,L,Y="middle";if(i==="top")_=this.bottom-x,j=this._getXAxisLabelAlignment();else if(i==="bottom")_=this.top+x,j=this._getXAxisLabelAlignment();else if(i==="left"){const D=this._getYAxisLabelAlignment(h);j=D.textAlign,S=D.x}else if(i==="right"){const D=this._getYAxisLabelAlignment(h);j=D.textAlign,S=D.x}else if(n==="x"){if(i==="center")_=(t.top+t.bottom)/2+p;else if(H(i)){const D=Object.keys(i)[0],V=i[D];_=this.chart.scales[D].getPixelForValue(V)+p}j=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")S=(t.left+t.right)/2-p;else if(H(i)){const D=Object.keys(i)[0],V=i[D];S=this.chart.scales[D].getPixelForValue(V)}j=this._getYAxisLabelAlignment(h).textAlign}n==="y"&&(l==="start"?Y="top":l==="end"&&(Y="bottom"));const pe=this._getLabelSizes();for(g=0,m=a.length;g<m;++g){y=a[g],k=y.label;const D=s.setContext(this.getContext(g));E=this.getPixelForTick(g)+s.labelOffset,P=this._resolveTickFontOptions(g),R=P.lineHeight,A=ve(k)?k.length:1;const V=A/2,X=D.color,N=D.textStrokeColor,T=D.textStrokeWidth;let z=j;o?(S=E,j==="inner"&&(g===m-1?z=this.options.reverse?"left":"right":g===0?z=this.options.reverse?"right":"left":z="center"),i==="top"?c==="near"||b!==0?L=-A*R+R/2:c==="center"?L=-pe.highest.height/2-V*R+R:L=-pe.highest.height+R/2:c==="near"||b!==0?L=R/2:c==="center"?L=pe.highest.height/2-V*R:L=pe.highest.height-A*R,f&&(L*=-1),b!==0&&!D.showLabelBackdrop&&(S+=R/2*Math.sin(b))):(_=E,L=(1-A)*R/2);let G;if(D.showLabelBackdrop){const Q=gt(D.backdropPadding),yt=pe.heights[g],Re=pe.widths[g];let Pt=L-Q.top,Pe=0-Q.left;switch(Y){case"middle":Pt-=yt/2;break;case"bottom":Pt-=yt;break}switch(j){case"center":Pe-=Re/2;break;case"right":Pe-=Re;break;case"inner":g===m-1?Pe-=Re:g>0&&(Pe-=Re/2);break}G={left:Pe,top:Pt,width:Re+Q.width,height:yt+Q.height,color:D.backdropColor}}v.push({label:k,font:P,textOffset:L,options:{rotation:b,color:X,strokeColor:N,strokeWidth:T,textAlign:z,textBaseline:Y,translation:[S,_],backdrop:G}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-Ft(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:s}}=this.options,o=this._getLabelSizes(),a=t+s,l=o.widest.width;let c,u;return n==="left"?i?(u=this.right+s,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?i?(u=this.left+s,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:s,height:o}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,s,o),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(s=>s.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let s,o;const a=(l,c,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(c.x,c.y),r.stroke(),r.restore())};if(n.display)for(s=0,o=i.length;s<o;++s){const l=i[s];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,s=r.setContext(this.getContext()),o=r.display?s.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,f,h;this.isHorizontal()?(c=Nn(t,this.left,o)-o/2,u=Nn(t,this.right,a)+a/2,f=h=l):(f=Nn(t,this.top,o)-o/2,h=Nn(t,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(c,f),n.lineTo(u,h),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&ad(r,i);const s=this.getLabelItems(t);for(const o of s){const a=o.options,l=o.font,c=o.label,u=o.textOffset;Po(r,c,0,u,l,a)}i&&ld(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const s=Be(r.font),o=gt(r.padding),a=r.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||H(n)?(l+=o.bottom,ve(r.text)&&(l+=s.lineHeight*(r.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:f,rotation:h}=n5(this,l,n,a);Po(t,r.text,0,0,s,{color:r.color,maxWidth:f,rotation:h,textAlign:t5(a,n,i),textBaseline:"middle",translation:[c,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=F(t.grid&&t.grid.z,-1),i=F(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Hr.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:r,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let s,o;for(s=0,o=n.length;s<o;++s){const a=n[s];a[r]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return Be(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Ps{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;s5(n)&&(r=this.register(n));const i=this.items,s=t.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+t);return s in i||(i[s]=t,r5(t,o,r),this.override&&de.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in de[i]&&(delete de[i][r],this.override&&delete Gn[r])}}function r5(e,t,n){const r=Hi(Object.create(null),[n?de.get(n):{},de.get(t),e.defaults]);de.set(t,r),e.defaultRoutes&&i5(t,e.defaultRoutes),e.descriptors&&de.describe(t,e.descriptors)}function i5(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),s=[e].concat(r).join("."),o=t[n].split("."),a=o.pop(),l=o.join(".");de.route(s,i,l,a)})}function s5(e){return"id"in e&&"defaults"in e}class o5{constructor(){this.controllers=new Ps(wr,"datasets",!0),this.elements=new Ps(wn,"elements"),this.plugins=new Ps(Object,"plugins"),this.scales=new Ps(Hr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const s=r||this._getRegistryForType(i);r||s.isForType(i)||s===this.plugins&&i.id?this._exec(t,s,i):W(i,o=>{const a=r||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,n,r){const i=id(t);J(r["before"+i],[],r),n[t](r),J(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var _t=new o5;class a5{constructor(){this._init=void 0}notify(t,n,r,i){if(n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const s=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(s,t,n,r);return n==="afterDestroy"&&(this._notify(s,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,n,r,i){i=i||{};for(const s of t){const o=s.plugin,a=o[r],l=[n,i,s.options];if(J(a,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){$(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=F(r.options&&r.options.plugins,{}),s=l5(r);return i===!1&&!n?[]:d5(t,s,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(s,o)=>s.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function l5(e){const t={},n=[],r=Object.keys(_t.plugins.items);for(let s=0;s<r.length;s++)n.push(_t.getPlugin(r[s]));const i=e.plugins||[];for(let s=0;s<i.length;s++){const o=i[s];n.indexOf(o)===-1&&(n.push(o),t[o.id]=!0)}return{plugins:n,localIds:t}}function c5(e,t){return!t&&e===!1?null:e===!0?{}:e}function d5(e,{plugins:t,localIds:n},r,i){const s=[],o=e.getContext();for(const a of t){const l=a.id,c=c5(r[l],i);c!==null&&s.push({plugin:a,options:u5(e.config,{plugin:a,local:n[l]},c,o)})}return s}function u5(e,{plugin:t,local:n},r,i){const s=e.pluginScopeKeys(t),o=e.getOptionScopes(r,s);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function $l(e,t){const n=de.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function f5(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function h5(e,t){return e===t?"_index_":"_value_"}function wf(e){if(e==="x"||e==="y"||e==="r")return e}function p5(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Yl(e,...t){if(wf(e))return e;for(const n of t){const r=n.axis||p5(n.position)||e.length>1&&wf(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function kf(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function g5(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return kf(e,"x",n[0])||kf(e,"y",n[0])}return{}}function m5(e,t){const n=Gn[e.type]||{scales:{}},r=t.scales||{},i=$l(e.type,t),s=Object.create(null);return Object.keys(r).forEach(o=>{const a=r[o];if(!H(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Yl(o,a,g5(o,e),de.scales[a.type]),c=h5(l,i),u=n.scales||{};s[o]=vi(Object.create(null),[{axis:l},a,u[l],u[c]])}),e.data.datasets.forEach(o=>{const a=o.type||e.type,l=o.indexAxis||$l(a,t),u=(Gn[a]||{}).scales||{};Object.keys(u).forEach(f=>{const h=f5(f,l),p=o[h+"AxisID"]||h;s[p]=s[p]||Object.create(null),vi(s[p],[{axis:h},r[p],u[f]])})}),Object.keys(s).forEach(o=>{const a=s[o];vi(a,[de.scales[a.type],de.scale])}),s}function hm(e){const t=e.options||(e.options={});t.plugins=F(t.plugins,{}),t.scales=m5(e,t)}function pm(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function x5(e){return e=e||{},e.data=pm(e.data),hm(e),e}const Sf=new Map,gm=new Set;function Ms(e,t){let n=Sf.get(e);return n||(n=t(),Sf.set(e,n),gm.add(n)),n}const ti=(e,t,n)=>{const r=Yn(t,n);r!==void 0&&e.add(r)};class b5{constructor(t){this._config=x5(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=pm(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),hm(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ms(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return Ms(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return Ms(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return Ms(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:s}=this,o=this._cachedScopes(t,r),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{t&&(l.add(t),u.forEach(f=>ti(l,t,f))),u.forEach(f=>ti(l,i,f)),u.forEach(f=>ti(l,Gn[s]||{},f)),u.forEach(f=>ti(l,de,f)),u.forEach(f=>ti(l,Vl,f))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),gm.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:t,type:n}=this;return[t,Gn[n]||{},de.datasets[n]||{},{type:n},de,Vl]}resolveNamedOptions(t,n,r,i=[""]){const s={$shared:!0},{resolver:o,subPrefixes:a}=_f(this._resolverCache,t,i);let l=o;if(v5(o,n)){s.$shared=!1,r=vn(r)?r():r;const c=this.createResolver(t,r,a);l=Mr(o,r,c)}for(const c of n)s[c]=l[c];return s}createResolver(t,n,r=[""],i){const{resolver:s}=_f(this._resolverCache,t,r);return H(n)?Mr(s,n,void 0,i):s}}function _f(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let s=r.get(i);return s||(s={resolver:dd(t,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},r.set(i,s)),s}const y5=e=>H(e)&&Object.getOwnPropertyNames(e).some(t=>vn(e[t]));function v5(e,t){const{isScriptable:n,isIndexable:r}=Zg(e);for(const i of t){const s=n(i),o=r(i),a=(o||s)&&e[i];if(s&&(vn(a)||y5(a))||o&&ve(a))return!0}return!1}var w5="4.5.1";const k5=["top","bottom","left","right","chartArea"];function jf(e,t){return e==="top"||e==="bottom"||k5.indexOf(e)===-1&&t==="x"}function Ef(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Cf(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),J(n&&n.onComplete,[e],t)}function S5(e){const t=e.chart,n=t.options.animation;J(n&&n.onProgress,[e],t)}function mm(e){return hd()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const qs={},Nf=e=>{const t=mm(e);return Object.values(qs).filter(n=>n.canvas===t).pop()};function _5(e,t,n){const r=Object.keys(e);for(const i of r){const s=+i;if(s>=t){const o=e[i];delete e[i],(n>0||s>t)&&(e[s+n]=o)}}}function j5(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}var Xt;let ia=(Xt=class{static register(...t){_t.add(...t),Rf()}static unregister(...t){_t.remove(...t),Rf()}constructor(t,n){const r=this.config=new b5(n),i=mm(t),s=Nf(i);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||U2(i)),this.platform.updateConfig(r);const a=this.platform.acquireContext(i,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=Wv(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new a5,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=o1(f=>this.update(f),o.resizeDelay||0),this._dataChanges=[],qs[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Tt.listen(this,"complete",Cf),Tt.listen(this,"progress",S5),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:s}=this;return $(t)?n&&s?s:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return _t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Zu(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Xu(this.canvas,this.ctx),this}stop(){return Tt.stop(this),this}resize(t,n){Tt.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,s=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,n,s),a=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Zu(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),J(r.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};W(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((o,a)=>(o[a]=!1,o),{});let s=[];n&&(s=s.concat(Object.keys(n).map(o=>{const a=n[o],l=Yl(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),W(s,o=>{const a=o.options,l=a.id,c=Yl(l,a),u=F(a.type,o.dtype);(a.position===void 0||jf(a.position,c)!==jf(o.dposition))&&(a.position=o.dposition),i[l]=!0;let f=null;if(l in r&&r[l].type===u)f=r[l];else{const h=_t.getScale(u);f=new h({id:l,type:u,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(a,t)}),W(i,(o,a)=>{o||delete r[a]}),W(r,o=>{sn.configure(this,o,o.options),sn.addBox(this,o)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,s)=>i.index-s.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(Ef("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(s=>s===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const s=n[r];let o=this.getDatasetMeta(r);const a=s.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=a,o.indexAxis=s.indexAxis||$l(a,this.options),o.order=s.order||0,o.index=r,o.label=""+s.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const l=_t.getController(a),{datasetElementType:c,dataElementType:u}=de.datasets[a];Object.assign(l,{dataElementType:_t.getElement(u),datasetElementType:c&&_t.getElement(c)}),o.controller=new l(this,r),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){W(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:f}=this.getDatasetMeta(c),h=!i&&s.indexOf(f)===-1;f.buildOrUpdateElements(h),o=Math.max(+f.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),i||W(s,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Ef("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){W(this.scales,t=>{sn.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!Fu(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:s}of n){const o=r==="_removeElements"?-s:s;_5(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=s=>new Set(t.filter(o=>o[0]===s).map((o,a)=>a+","+o.splice(1).join(","))),i=r(0);for(let s=1;s<n;s++)if(!Fu(i,r(s)))return;return Array.from(i).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;sn.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],W(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,s)=>{i._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,vn(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Tt.has(this)?this.attached&&!Tt.running(this)&&Tt.start(this):(this.draw(),Cf({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,s;for(i=0,s=n.length;i<s;++i){const o=n[i];(!t||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r={meta:t,index:t.index,cancelable:!0},i=$1(this,t);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(i&&ad(n,i),t.controller.draw(),i&&ld(n),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(t){return qg(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const s=k2.modes[n];return typeof s=="function"?s(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(s=>s&&s._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=Br(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",s=this.getDatasetMeta(t),o=s.controller._resolveAnimations(void 0,i);Wi(n)?(s.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),o.update(s,{visible:r}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),Tt.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Xu(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete qs[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(s,o)=>{n.addEventListener(this,s,o),t[s]=o},i=(s,o,a)=>{s.offsetX=o,s.offsetY=a,this._eventHandler(s)};W(this.options.events,s=>r(s,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,c)=>{n.addEventListener(this,l,c),t[l]=c},i=(l,c)=>{t[l]&&(n.removeEventListener(this,l,c),delete t[l])},s=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),r("resize",s),r("detach",o)};o=()=>{this.attached=!1,i("resize",s),this._stop(),this._resize(0,0),r("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){W(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},W(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let s,o,a,l;for(n==="dataset"&&(s=this.getDatasetMeta(t[0].datasetIndex),s.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:s,index:o})=>{const a=this.getDatasetMeta(s);if(!a)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:a.data[o],index:o}});!jo(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,s=(l,c)=>l.filter(u=>!c.some(f=>u.datasetIndex===f.datasetIndex&&u.index===f.index)),o=s(n,t),a=r?t:s(t,n);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const s=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(s||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:s}=this,o=n,a=this._getActiveElements(t,i,r,o),l=Kv(t),c=j5(t,this._lastEvent,r,l);r&&(this._lastEvent=null,J(s.onHover,[t,a,this],this),l&&J(s.onClick,[t,a,this],this));const u=!jo(a,i);return(u||n)&&(this._active=a,this._updateHoverStyles(a,i,n)),this._lastEvent=c,u}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const s=this.options.hover;return this.getElementsAtEventForMode(t,s.mode,s,i)}},O(Xt,"defaults",de),O(Xt,"instances",qs),O(Xt,"overrides",Gn),O(Xt,"registry",_t),O(Xt,"version",w5),O(Xt,"getChart",Nf),Xt);function Rf(){return W(ia.instances,e=>e._plugins.invalidate())}function E5(e,t,n){const{startAngle:r,x:i,y:s,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:u}=l,f=Math.min(c/o,jt(r-n));if(e.beginPath(),e.arc(i,s,o-c/2,r+f/2,n-f/2),a>0){const h=Math.min(c/a,jt(r-n));e.arc(i,s,a+c/2,n-h/2,r+h/2,!0)}else{const h=Math.min(c/2,o*jt(r-n));if(u==="round")e.arc(i,s,h,n-Z/2,r+Z/2,!0);else if(u==="bevel"){const p=2*h*h,x=-p*Math.cos(n+Z/2)+i,b=-p*Math.sin(n+Z/2)+s,v=p*Math.cos(r+Z/2)+i,g=p*Math.sin(r+Z/2)+s;e.lineTo(x,b),e.lineTo(v,g)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function C5(e,t,n){const{startAngle:r,pixelMargin:i,x:s,y:o,outerRadius:a,innerRadius:l}=t;let c=i/a;e.beginPath(),e.arc(s,o,a,r-c,n+c),l>i?(c=i/l,e.arc(s,o,l,n+c,r-c,!0)):e.arc(s,o,i,n+be,r-be),e.closePath(),e.clip()}function N5(e){return cd(e,["outerStart","outerEnd","innerStart","innerEnd"])}function R5(e,t,n,r){const i=N5(e.options.borderRadius),s=(n-t)/2,o=Math.min(s,r*t/2),a=l=>{const c=(n-Math.min(s,l))*r/2;return Fe(l,0,Math.min(s,c))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Fe(i.innerStart,0,o),innerEnd:Fe(i.innerEnd,0,o)}}function er(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function Oo(e,t,n,r,i,s){const{x:o,y:a,startAngle:l,pixelMargin:c,innerRadius:u}=t,f=Math.max(t.outerRadius+r+n-c,0),h=u>0?u+r+n+c:0;let p=0;const x=i-l;if(r){const D=u>0?u-r:0,V=f>0?f-r:0,X=(D+V)/2,N=X!==0?x*X/(X+r):x;p=(x-N)/2}const b=Math.max(.001,x*f-n/Z)/f,v=(x-b)/2,g=l+v+p,m=i-v-p,{outerStart:y,outerEnd:k,innerStart:S,innerEnd:_}=R5(t,h,f,m-g),j=f-y,E=f-k,P=g+y/j,R=m-k/E,A=h+S,L=h+_,Y=g+S/A,pe=m-_/L;if(e.beginPath(),s){const D=(P+R)/2;if(e.arc(o,a,f,P,D),e.arc(o,a,f,D,R),k>0){const T=er(E,R,o,a);e.arc(T.x,T.y,k,R,m+be)}const V=er(L,m,o,a);if(e.lineTo(V.x,V.y),_>0){const T=er(L,pe,o,a);e.arc(T.x,T.y,_,m+be,pe+Math.PI)}const X=(m-_/h+(g+S/h))/2;if(e.arc(o,a,h,m-_/h,X,!0),e.arc(o,a,h,X,g+S/h,!0),S>0){const T=er(A,Y,o,a);e.arc(T.x,T.y,S,Y+Math.PI,g-be)}const N=er(j,g,o,a);if(e.lineTo(N.x,N.y),y>0){const T=er(j,P,o,a);e.arc(T.x,T.y,y,g-be,P)}}else{e.moveTo(o,a);const D=Math.cos(P)*f+o,V=Math.sin(P)*f+a;e.lineTo(D,V);const X=Math.cos(R)*f+o,N=Math.sin(R)*f+a;e.lineTo(X,N)}e.closePath()}function P5(e,t,n,r,i){const{fullCircles:s,startAngle:o,circumference:a}=t;let l=t.endAngle;if(s){Oo(e,t,n,r,l,i);for(let c=0;c<s;++c)e.fill();isNaN(a)||(l=o+(a%he||he))}return Oo(e,t,n,r,l,i),e.fill(),l}function M5(e,t,n,r,i){const{fullCircles:s,startAngle:o,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:u,borderDash:f,borderDashOffset:h,borderRadius:p}=l,x=l.borderAlign==="inner";if(!c)return;e.setLineDash(f||[]),e.lineDashOffset=h,x?(e.lineWidth=c*2,e.lineJoin=u||"round"):(e.lineWidth=c,e.lineJoin=u||"bevel");let b=t.endAngle;if(s){Oo(e,t,n,r,b,i);for(let v=0;v<s;++v)e.stroke();isNaN(a)||(b=o+(a%he||he))}x&&C5(e,t,b),l.selfJoin&&b-o>=Z&&p===0&&u!=="miter"&&E5(e,t,b),s||(Oo(e,t,n,r,b,i),e.stroke())}class ci extends wn{constructor(n){super();O(this,"circumference");O(this,"endAngle");O(this,"fullCircles");O(this,"innerRadius");O(this,"outerRadius");O(this,"pixelMargin");O(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.getProps(["x","y"],i),{angle:o,distance:a}=Wg(s,{x:n,y:r}),{startAngle:l,endAngle:c,innerRadius:u,outerRadius:f,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),p=(this.options.spacing+this.options.borderWidth)/2,x=F(h,c-l),b=Ro(o,l,c)&&l!==c,v=x>=he||b,g=Ln(a,u+p,f+p);return v&&g}getCenterPoint(n){const{x:r,y:i,startAngle:s,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:u}=this.options,f=(s+o)/2,h=(a+l+u+c)/2;return{x:r+Math.cos(f)*h,y:i+Math.sin(f)*h}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:i}=this,s=(r.offset||0)/4,o=(r.spacing||0)/2,a=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=i>he?Math.floor(i/he):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*s,Math.sin(l)*s);const c=1-Math.sin(Math.min(Z,i||0)),u=s*c;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,P5(n,this,u,o,a),M5(n,this,u,o,a),n.restore()}}O(ci,"id","arc"),O(ci,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),O(ci,"defaultRoutes",{backgroundColor:"backgroundColor"}),O(ci,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function xm(e,t){const{x:n,y:r,base:i,width:s,height:o}=e.getProps(["x","y","base","width","height"],t);let a,l,c,u,f;return e.horizontal?(f=o/2,a=Math.min(n,i),l=Math.max(n,i),c=r-f,u=r+f):(f=s/2,a=n-f,l=n+f,c=Math.min(r,i),u=Math.max(r,i)),{left:a,top:c,right:l,bottom:u}}function on(e,t,n,r){return e?0:Fe(t,n,r)}function T5(e,t,n){const r=e.options.borderWidth,i=e.borderSkipped,s=Jg(r);return{t:on(i.top,s.top,0,n),r:on(i.right,s.right,0,t),b:on(i.bottom,s.bottom,0,n),l:on(i.left,s.left,0,t)}}function A5(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,s=yr(i),o=Math.min(t,n),a=e.borderSkipped,l=r||H(i);return{topLeft:on(!l||a.top||a.left,s.topLeft,0,o),topRight:on(!l||a.top||a.right,s.topRight,0,o),bottomLeft:on(!l||a.bottom||a.left,s.bottomLeft,0,o),bottomRight:on(!l||a.bottom||a.right,s.bottomRight,0,o)}}function O5(e){const t=xm(e),n=t.right-t.left,r=t.bottom-t.top,i=T5(e,n/2,r/2),s=A5(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:s},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,s.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(i.b,i.r))}}}}function Ya(e,t,n,r){const i=t===null,s=n===null,a=e&&!(i&&s)&&xm(e,r);return a&&(i||Ln(t,a.left,a.right))&&(s||Ln(n,a.top,a.bottom))}function z5(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function L5(e,t){e.rect(t.x,t.y,t.w,t.h)}function Ga(e,t,n={}){const r=e.x!==n.x?-t:0,i=e.y!==n.y?-t:0,s=(e.x+e.w!==n.x+n.w?t:0)-r,o=(e.y+e.h!==n.y+n.h?t:0)-i;return{x:e.x+r,y:e.y+i,w:e.w+s,h:e.h+o,radius:e.radius}}class Js extends wn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:s,outer:o}=O5(this),a=z5(o.radius)?Mo:L5;t.save(),(o.w!==s.w||o.h!==s.h)&&(t.beginPath(),a(t,Ga(o,n,s)),t.clip(),a(t,Ga(s,-n,o)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),a(t,Ga(s,n)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,n,r){return Ya(this,t,n,r)}inXRange(t,n){return Ya(this,t,null,n)}inYRange(t,n){return Ya(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:i,horizontal:s}=this.getProps(["x","y","base","horizontal"],t);return{x:s?(n+i)/2:n,y:s?r:(r+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}O(Js,"id","bar"),O(Js,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),O(Js,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const Pf=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},D5=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Mf extends wn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=J(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=Be(r.font),s=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Pf(r,s);let c,u;n.font=i.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,s,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,i,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:s,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=i+a;let f=t;s.textAlign="left",s.textBaseline="middle";let h=-1,p=-u;return this.legendItems.forEach((x,b)=>{const v=r+n/2+s.measureText(x.text).width;(b===0||c[c.length-1]+v+2*a>o)&&(f+=u,c[c.length-(b>0?0:1)]=0,p+=u,h++),l[b]={left:0,top:p,row:h,width:v,height:i},c[c.length-1]+=v+a}),f}_fitCols(t,n,r,i){const{ctx:s,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-t;let f=a,h=0,p=0,x=0,b=0;return this.legendItems.forEach((v,g)=>{const{itemWidth:m,itemHeight:y}=I5(r,n,s,v,i);g>0&&p+y+2*a>u&&(f+=h+a,c.push({width:h,height:p}),x+=h+a,b++,h=p=0),l[g]={left:x,top:p,col:b,width:m,height:y},h=Math.max(h,m),p+=y+a}),f+=h,c.push({width:h,height:p}),f}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:s}}=this,o=vr(s,this.left,this.width);if(this.isHorizontal()){let a=0,l=Ve(r,this.left+i,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=Ve(r,this.left+i,this.right-this.lineWidths[a])),c.top+=this.top+t+i,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+i}else{let a=0,l=Ve(r,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=Ve(r,this.top+t+i,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+i,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;ad(t,this),this._draw(),ld(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:s,labels:o}=t,a=de.color,l=vr(t.rtl,this.left,this.width),c=Be(o.font),{padding:u}=o,f=c.size,h=f/2;let p;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:x,boxHeight:b,itemHeight:v}=Pf(o,f),g=function(_,j,E){if(isNaN(x)||x<=0||isNaN(b)||b<0)return;i.save();const P=F(E.lineWidth,1);if(i.fillStyle=F(E.fillStyle,a),i.lineCap=F(E.lineCap,"butt"),i.lineDashOffset=F(E.lineDashOffset,0),i.lineJoin=F(E.lineJoin,"miter"),i.lineWidth=P,i.strokeStyle=F(E.strokeStyle,a),i.setLineDash(F(E.lineDash,[])),o.usePointStyle){const R={radius:b*Math.SQRT2/2,pointStyle:E.pointStyle,rotation:E.rotation,borderWidth:P},A=l.xPlus(_,x/2),L=j+h;Qg(i,R,A,L,o.pointStyleWidth&&x)}else{const R=j+Math.max((f-b)/2,0),A=l.leftForLtr(_,x),L=yr(E.borderRadius);i.beginPath(),Object.values(L).some(Y=>Y!==0)?Mo(i,{x:A,y:R,w:x,h:b,radius:L}):i.rect(A,R,x,b),i.fill(),P!==0&&i.stroke()}i.restore()},m=function(_,j,E){Po(i,E.text,_,j+v/2,c,{strikethrough:E.hidden,textAlign:l.textAlign(E.textAlign)})},y=this.isHorizontal(),k=this._computeTitleHeight();y?p={x:Ve(s,this.left+u,this.right-r[0]),y:this.top+u+k,line:0}:p={x:this.left+u,y:Ve(s,this.top+k+u,this.bottom-n[0].height),line:0},rm(this.ctx,t.textDirection);const S=v+u;this.legendItems.forEach((_,j)=>{i.strokeStyle=_.fontColor,i.fillStyle=_.fontColor;const E=i.measureText(_.text).width,P=l.textAlign(_.textAlign||(_.textAlign=o.textAlign)),R=x+h+E;let A=p.x,L=p.y;l.setWidth(this.width),y?j>0&&A+R+u>this.right&&(L=p.y+=S,p.line++,A=p.x=Ve(s,this.left+u,this.right-r[p.line])):j>0&&L+S>this.bottom&&(A=p.x=A+n[p.line].width+u,p.line++,L=p.y=Ve(s,this.top+k+u,this.bottom-n[p.line].height));const Y=l.x(A);if(g(Y,L,_),A=a1(P,A+x+h,y?A+R:this.right,t.rtl),m(l.x(A),L,_),y)p.x+=R+u;else if(typeof _.text!="string"){const pe=c.lineHeight;p.y+=bm(_,pe)+u}else p.y+=S}),im(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=Be(n.font),i=gt(n.padding);if(!n.display)return;const s=vr(t.rtl,this.left,this.width),o=this.ctx,a=n.position,l=r.size/2,c=i.top+l;let u,f=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),u=this.top+c,f=Ve(t.align,f,this.right-h);else{const x=this.columnSizes.reduce((b,v)=>Math.max(b,v.height),0);u=c+Ve(t.align,this.top,this.bottom-x-t.labels.padding-this._computeTitleHeight())}const p=Ve(a,f,f+h);o.textAlign=s.textAlign(Gg(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=r.string,Po(o,n.text,p,u,r)}_computeTitleHeight(){const t=this.options.title,n=Be(t.font),r=gt(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,s;if(Ln(t,this.left,this.right)&&Ln(n,this.top,this.bottom)){for(s=this.legendHitBoxes,r=0;r<s.length;++r)if(i=s[r],Ln(t,i.left,i.left+i.width)&&Ln(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!H5(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,s=D5(i,r);i&&!s&&J(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!s&&J(n.onHover,[t,r,this],this)}else r&&J(n.onClick,[t,r,this],this)}}function I5(e,t,n,r,i){const s=F5(r,e,t,n),o=B5(i,r,t.lineHeight);return{itemWidth:s,itemHeight:o}}function F5(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((s,o)=>s.length>o.length?s:o)),t+n.size/2+r.measureText(i).width}function B5(e,t,n){let r=e;return typeof t.text!="string"&&(r=bm(t,n)),r}function bm(e,t){const n=e.text?e.text.length:0;return t*n}function H5(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var W5={id:"legend",_element:Mf,start(e,t,n){const r=e.legend=new Mf({ctx:e.ctx,options:n,chart:e});sn.configure(e,r,n),sn.addBox(e,r)},stop(e){sn.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;sn.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:s,useBorderRadius:o,borderRadius:a}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=gt(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:s,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};const di={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,s=0;for(t=0,n=e.length;t<n;++t){const a=e[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();r.add(l.x),i+=l.y,++s}}return s===0||r.size===0?!1:{x:[...r].reduce((a,l)=>a+l)/r.size,y:i/s}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,s,o,a;for(s=0,o=e.length;s<o;++s){const l=e[s].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=t1(t,c);u<i&&(i=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function kt(e,t){return t&&(ve(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function At(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function U5(e,t){const{element:n,datasetIndex:r,index:i}=t,s=e.getDatasetMeta(r).controller,{label:o,value:a}=s.getLabelAndValue(i);return{chart:e,label:o,parsed:s.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:a,dataset:s.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Tf(e,t){const n=e.chart.ctx,{body:r,footer:i,title:s}=e,{boxWidth:o,boxHeight:a}=t,l=Be(t.bodyFont),c=Be(t.titleFont),u=Be(t.footerFont),f=s.length,h=i.length,p=r.length,x=gt(t.padding);let b=x.height,v=0,g=r.reduce((k,S)=>k+S.before.length+S.lines.length+S.after.length,0);if(g+=e.beforeBody.length+e.afterBody.length,f&&(b+=f*c.lineHeight+(f-1)*t.titleSpacing+t.titleMarginBottom),g){const k=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;b+=p*k+(g-p)*l.lineHeight+(g-1)*t.bodySpacing}h&&(b+=t.footerMarginTop+h*u.lineHeight+(h-1)*t.footerSpacing);let m=0;const y=function(k){v=Math.max(v,n.measureText(k).width+m)};return n.save(),n.font=c.string,W(e.title,y),n.font=l.string,W(e.beforeBody.concat(e.afterBody),y),m=t.displayColors?o+2+t.boxPadding:0,W(r,k=>{W(k.before,y),W(k.lines,y),W(k.after,y)}),m=0,n.font=u.string,W(e.footer,y),n.restore(),v+=x.width,{width:v,height:b}}function V5(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function $5(e,t,n,r){const{x:i,width:s}=r,o=n.caretSize+n.caretPadding;if(e==="left"&&i+s+o>t.width||e==="right"&&i-s-o<0)return!0}function Y5(e,t,n,r){const{x:i,width:s}=n,{width:o,chartArea:{left:a,right:l}}=e;let c="center";return r==="center"?c=i<=(a+l)/2?"left":"right":i<=s/2?c="left":i>=o-s/2&&(c="right"),$5(c,e,t,n)&&(c="center"),c}function Af(e,t,n){const r=n.yAlign||t.yAlign||V5(e,n);return{xAlign:n.xAlign||t.xAlign||Y5(e,t,n,r),yAlign:r}}function G5(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function K5(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function Of(e,t,n,r){const{caretSize:i,caretPadding:s,cornerRadius:o}=e,{xAlign:a,yAlign:l}=n,c=i+s,{topLeft:u,topRight:f,bottomLeft:h,bottomRight:p}=yr(o);let x=G5(t,a);const b=K5(t,l,c);return l==="center"?a==="left"?x+=c:a==="right"&&(x-=c):a==="left"?x-=Math.max(u,h)+i:a==="right"&&(x+=Math.max(f,p)+i),{x:Fe(x,0,r.width-t.width),y:Fe(b,0,r.height-t.height)}}function Ts(e,t,n){const r=gt(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function zf(e){return kt([],At(e))}function X5(e,t,n){return Br(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function Lf(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const ym={beforeTitle:Mt,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Mt,beforeBody:Mt,beforeLabel:Mt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return $(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Mt,afterBody:Mt,beforeFooter:Mt,footer:Mt,afterFooter:Mt};function ze(e,t,n,r){const i=e[t].call(n,r);return typeof i>"u"?ym[t].call(n,r):i}class Gl extends wn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,s=new sm(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=X5(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=ze(r,"beforeTitle",this,t),s=ze(r,"title",this,t),o=ze(r,"afterTitle",this,t);let a=[];return a=kt(a,At(i)),a=kt(a,At(s)),a=kt(a,At(o)),a}getBeforeBody(t,n){return zf(ze(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return W(t,s=>{const o={before:[],lines:[],after:[]},a=Lf(r,s);kt(o.before,At(ze(a,"beforeLabel",this,s))),kt(o.lines,ze(a,"label",this,s)),kt(o.after,At(ze(a,"afterLabel",this,s))),i.push(o)}),i}getAfterBody(t,n){return zf(ze(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=ze(r,"beforeFooter",this,t),s=ze(r,"footer",this,t),o=ze(r,"afterFooter",this,t);let a=[];return a=kt(a,At(i)),a=kt(a,At(s)),a=kt(a,At(o)),a}_createItems(t){const n=this._active,r=this.chart.data,i=[],s=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(U5(this.chart,n[l]));return t.filter&&(a=a.filter((u,f,h)=>t.filter(u,f,h,r))),t.itemSort&&(a=a.sort((u,f)=>t.itemSort(u,f,r))),W(a,u=>{const f=Lf(t.callbacks,u);i.push(ze(f,"labelColor",this,u)),s.push(ze(f,"labelPointStyle",this,u)),o.push(ze(f,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=a,a}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let s,o=[];if(!i.length)this.opacity!==0&&(s={opacity:0});else{const a=di[r.position].call(this,i,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const l=this._size=Tf(this,r),c=Object.assign({},a,l),u=Af(this.chart,r,c),f=Of(r,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,s={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const s=this.getCaretPosition(t,r,i);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:s}=this,{caretSize:o,cornerRadius:a}=r,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:f}=yr(a),{x:h,y:p}=t,{width:x,height:b}=n;let v,g,m,y,k,S;return s==="center"?(k=p+b/2,i==="left"?(v=h,g=v-o,y=k+o,S=k-o):(v=h+x,g=v+o,y=k-o,S=k+o),m=v):(i==="left"?g=h+Math.max(l,u)+o:i==="right"?g=h+x-Math.max(c,f)-o:g=this.caretX,s==="top"?(y=p,k=y-o,v=g-o,m=g+o):(y=p+b,k=y+o,v=g+o,m=g-o),S=y),{x1:v,x2:g,x3:m,y1:y,y2:k,y3:S}}drawTitle(t,n,r){const i=this.title,s=i.length;let o,a,l;if(s){const c=vr(r.rtl,this.x,this.width);for(t.x=Ts(this,r.titleAlign,r),n.textAlign=c.textAlign(r.titleAlign),n.textBaseline="middle",o=Be(r.titleFont),a=r.titleSpacing,n.fillStyle=r.titleColor,n.font=o.string,l=0;l<s;++l)n.fillText(i[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===s&&(t.y+=r.titleMarginBottom-a)}}_drawColorBox(t,n,r,i,s){const o=this.labelColors[r],a=this.labelPointStyles[r],{boxHeight:l,boxWidth:c}=s,u=Be(s.bodyFont),f=Ts(this,"left",s),h=i.x(f),p=l<u.lineHeight?(u.lineHeight-l)/2:0,x=n.y+p;if(s.usePointStyle){const b={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=i.leftForLtr(h,c)+c/2,g=x+l/2;t.strokeStyle=s.multiKeyBackground,t.fillStyle=s.multiKeyBackground,Qu(t,b,v,g),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Qu(t,b,v,g)}else{t.lineWidth=H(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const b=i.leftForLtr(h,c),v=i.leftForLtr(i.xPlus(h,1),c-2),g=yr(o.borderRadius);Object.values(g).some(m=>m!==0)?(t.beginPath(),t.fillStyle=s.multiKeyBackground,Mo(t,{x:b,y:x,w:c,h:l,radius:g}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Mo(t,{x:v,y:x+1,w:c-2,h:l-2,radius:g}),t.fill()):(t.fillStyle=s.multiKeyBackground,t.fillRect(b,x,c,l),t.strokeRect(b,x,c,l),t.fillStyle=o.backgroundColor,t.fillRect(v,x+1,c-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=r,f=Be(r.bodyFont);let h=f.lineHeight,p=0;const x=vr(r.rtl,this.x,this.width),b=function(E){n.fillText(E,x.x(t.x+p),t.y+h/2),t.y+=h+s},v=x.textAlign(o);let g,m,y,k,S,_,j;for(n.textAlign=o,n.textBaseline="middle",n.font=f.string,t.x=Ts(this,v,r),n.fillStyle=r.bodyColor,W(this.beforeBody,b),p=a&&v!=="right"?o==="center"?c/2+u:c+2+u:0,k=0,_=i.length;k<_;++k){for(g=i[k],m=this.labelTextColors[k],n.fillStyle=m,W(g.before,b),y=g.lines,a&&y.length&&(this._drawColorBox(n,t,k,x,r),h=Math.max(f.lineHeight,l)),S=0,j=y.length;S<j;++S)b(y[S]),h=f.lineHeight;W(g.after,b)}p=0,h=f.lineHeight,W(this.afterBody,b),t.y-=s}drawFooter(t,n,r){const i=this.footer,s=i.length;let o,a;if(s){const l=vr(r.rtl,this.x,this.width);for(t.x=Ts(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",o=Be(r.footerFont),n.fillStyle=r.footerColor,n.font=o.string,a=0;a<s;++a)n.fillText(i[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:s,yAlign:o}=this,{x:a,y:l}=t,{width:c,height:u}=r,{topLeft:f,topRight:h,bottomLeft:p,bottomRight:x}=yr(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(a+f,l),o==="top"&&this.drawCaret(t,n,r,i),n.lineTo(a+c-h,l),n.quadraticCurveTo(a+c,l,a+c,l+h),o==="center"&&s==="right"&&this.drawCaret(t,n,r,i),n.lineTo(a+c,l+u-x),n.quadraticCurveTo(a+c,l+u,a+c-x,l+u),o==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(a+p,l+u),n.quadraticCurveTo(a,l+u,a,l+u-p),o==="center"&&s==="left"&&this.drawCaret(t,n,r,i),n.lineTo(a,l+f),n.quadraticCurveTo(a,l,a+f,l),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,s=r&&r.y;if(i||s){const o=di[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Tf(this,t),l=Object.assign({},o,this._size),c=Af(n,t,l),u=Of(t,l,c,n);(i._to!==u.x||s._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=gt(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(t.save(),t.globalAlpha=r,this.drawBackground(s,t,i,n),rm(t,n.textDirection),s.y+=o.top,this.drawTitle(s,t,n),this.drawBody(s,t,n),this.drawFooter(s,t,n),im(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),s=!jo(r,i),o=this._positionChanged(i,n);(s||o)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,s=this._active||[],o=this._getActiveElements(t,s,n,r),a=this._positionChanged(o,t),l=n||!jo(o,s)||a;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,i){const s=this.options;if(t.type==="mouseout")return[];if(!i)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,s.mode,s,r);return s.reverse&&o.reverse(),o}_positionChanged(t,n){const{caretX:r,caretY:i,options:s}=this,o=di[s.position].call(this,t,n);return o!==!1&&(r!==o.x||i!==o.y)}}O(Gl,"positioners",di);var Q5={id:"tooltip",_element:Gl,positioners:di,afterInit(e,t,n){n&&(e.tooltip=new Gl({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:ym},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const q5=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function J5(e,t,n,r){const i=e.indexOf(t);if(i===-1)return q5(e,t,n,r);const s=e.lastIndexOf(t);return i!==s?n:i}const Z5=(e,t)=>e===null?null:Fe(Math.round(e),0,t);function Df(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Kl extends Hr{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:s}of n)r[i]===s&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if($(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:J5(r,t,F(n,t),this._addedLabels),Z5(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let s=this.getLabels();s=t===0&&n===s.length-1?s:s.slice(t,n+1),this._valueRange=Math.max(s.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let o=t;o<=n;o++)i.push({value:o});return i}getLabelForValue(t){return Df.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}O(Kl,"id","category"),O(Kl,"defaults",{ticks:{callback:Df}});function ew(e,t){const n=[],{bounds:i,step:s,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:f,includeBounds:h}=e,p=s||1,x=u-1,{min:b,max:v}=t,g=!$(o),m=!$(a),y=!$(c),k=(v-b)/(f+1);let S=Hu((v-b)/x/p)*p,_,j,E,P;if(S<1e-14&&!g&&!m)return[{value:b},{value:v}];P=Math.ceil(v/S)-Math.floor(b/S),P>x&&(S=Hu(P*S/x/p)*p),$(l)||(_=Math.pow(10,l),S=Math.ceil(S*_)/_),i==="ticks"?(j=Math.floor(b/S)*S,E=Math.ceil(v/S)*S):(j=b,E=v),g&&m&&s&&Jv((a-o)/s,S/1e3)?(P=Math.round(Math.min((a-o)/S,u)),S=(a-o)/P,j=o,E=a):y?(j=g?o:j,E=m?a:E,P=c-1,S=(E-j)/P):(P=(E-j)/S,Ks(P,Math.round(P),S/1e3)?P=Math.round(P):P=Math.ceil(P));const R=Math.max(Wu(S),Wu(j));_=Math.pow(10,$(l)?R:l),j=Math.round(j*_)/_,E=Math.round(E*_)/_;let A=0;for(g&&(h&&j!==o?(n.push({value:o}),j<o&&A++,Ks(Math.round((j+A*S)*_)/_,o,If(o,k,e))&&A++):j<o&&A++);A<P;++A){const L=Math.round((j+A*S)*_)/_;if(m&&L>a)break;n.push({value:L})}return m&&h&&E!==a?n.length&&Ks(n[n.length-1].value,a,If(a,k,e))?n[n.length-1].value=a:n.push({value:a}):(!m||E===a)&&n.push({value:E}),n}function If(e,t,{horizontal:n,minRotation:r}){const i=Ft(r),s=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+e).length;return Math.min(t/s,o)}class tw extends Hr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return $(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:s}=this;const o=l=>i=n?i:l,a=l=>s=r?s:l;if(t){const l=mn(i),c=mn(s);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(i===s){let l=s===0?1:Math.abs(s*.05);a(s+l),t||o(i-l)}this.min=i,this.max=s}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=ew(i,s);return t.bounds==="ticks"&&Zv(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return od(t,this.chart.options.locale,this.options.ticks.format)}}class Xl extends tw{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=st(t)?t:0,this.max=st(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=Ft(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}O(Xl,"id","linear"),O(Xl,"defaults",{ticks:{callback:Xg.formatters.numeric}});const sa={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},De=Object.keys(sa);function Ff(e,t){return e-t}function Bf(e,t){if($(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:s}=e._parseOpts;let o=t;return typeof r=="function"&&(o=r(o)),st(o)||(o=typeof r=="string"?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i==="week"&&(No(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,i)),+o)}function Hf(e,t,n,r){const i=De.length;for(let s=De.indexOf(e);s<i-1;++s){const o=sa[De[s]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-t)/(a*o.size))<=r)return De[s]}return De[i-1]}function nw(e,t,n,r,i){for(let s=De.length-1;s>=De.indexOf(n);s--){const o=De[s];if(sa[o].common&&e._adapter.diff(i,r,o)>=t-1)return o}return De[n?De.indexOf(n):0]}function rw(e){for(let t=De.indexOf(e)+1,n=De.length;t<n;++t)if(sa[De[t]].common)return De[t]}function Wf(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=sd(n,t),s=n[r]>=t?n[r]:n[i];e[s]=!0}}function iw(e,t,n,r){const i=e._adapter,s=+i.startOf(t[0].value,r),o=t[t.length-1].value;let a,l;for(a=s;a<=o;a=+i.add(a,1,r))l=n[a],l>=0&&(t[l].major=!0);return t}function Uf(e,t,n){const r=[],i={},s=t.length;let o,a;for(o=0;o<s;++o)a=t[o],i[a]=o,r.push({value:a,major:!1});return s===0||!n?r:iw(e,r,i,n)}class zo extends Hr{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new x2._date(t.adapters.date);i.init(n),vi(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:Bf(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:s,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!a&&!isNaN(c.max)&&(s=Math.max(s,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=st(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),s=st(s)&&!isNaN(s)?s:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,s-1),this.max=Math.max(i+1,s)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const s=this.min,o=this.max,a=i1(i,s,o);return this._unit=n.unit||(r.autoSkip?Hf(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):nw(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:rw(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Uf(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,s;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,s=this.getDecimalForValue(t[t.length-1]),t.length===1?r=s:r=(s-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;n=Fe(n,0,o),r=Fe(r,0,o),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,s=i.time,o=s.unit||Hf(s.minUnit,n,r,this._getLabelCapacity(n)),a=F(i.ticks.stepSize,1),l=o==="week"?s.isoWeekday:!1,c=No(l)||l===!0,u={};let f=n,h,p;if(c&&(f=+t.startOf(f,"isoWeek",l)),f=+t.startOf(f,c?"day":o),t.diff(r,n,o)>1e5*a)throw new Error(n+" and "+r+" are too far apart with stepSize of "+a+" "+o);const x=i.ticks.source==="data"&&this.getDataTimestamps();for(h=f,p=0;h<r;h=+t.add(h,a,o),p++)Wf(u,h,x);return(h===r||i.bounds==="ticks"||p===1)&&Wf(u,h,x),Object.keys(u).sort(Ff).map(b=>+b)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,s=this._unit,o=n||i[s];return this._adapter.format(t,o)}_tickFormatFunction(t,n,r,i){const s=this.options,o=s.ticks.callback;if(o)return J(o,[t,n,r],this);const a=s.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],f=c&&a[c],h=r[n],p=c&&f&&h&&h.major;return this._adapter.format(t,i||(p?f:u))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=Ft(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:r*s+a*o,h:r*o+a*s}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,s=this._tickFormatFunction(t,0,Uf(this,[t],this._majorUnit),i),o=this._getLabelSize(s),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(Bf(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Vg(t.sort(Ff))}}O(zo,"id","time"),O(zo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function As(e,t,n){let r=0,i=e.length-1,s,o,a,l;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=Ul(e,"pos",t)),{pos:s,time:a}=e[r],{pos:o,time:l}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=Ul(e,"time",t)),{time:s,pos:a}=e[r],{time:o,pos:l}=e[i]);const c=o-s;return c?a+(l-a)*(t-s)/c:a}class Vf extends zo{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=As(n,this.min),this._tableRange=As(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],s=[];let o,a,l,c,u;for(o=0,a=t.length;o<a;++o)c=t[o],c>=n&&c<=r&&i.push(c);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(o=0,a=i.length;o<a;++o)u=i[o+1],l=i[o-1],c=i[o],Math.round((u+l)/2)!==c&&s.push({time:c,pos:o/(a-1)});return s}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,s)=>i-s)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(As(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return As(this._table,r*this._tableRange+this._minPos,!0)}}O(Vf,"id","timeseries"),O(Vf,"defaults",zo.defaults);const vm="label";function $f(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function sw(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function wm(e,t){e.labels=t}function km(e,t,n=vm){const r=[];e.datasets=t.map(i=>{const s=e.datasets.find(o=>o[n]===i[n]);return!s||!i.data||r.includes(s)?{...i}:(r.push(s),Object.assign(s,i),s)})}function ow(e,t=vm){const n={labels:[],datasets:[]};return wm(n,e.labels),km(n,e.datasets,t),n}function aw(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:s,type:o,data:a,options:l,plugins:c=[],fallbackContent:u,updateMode:f,...h}=e,p=w.useRef(null),x=w.useRef(null),b=()=>{p.current&&(x.current=new ia(p.current,{type:o,data:ow(a,s),options:l&&{...l},plugins:c}),$f(t,x.current))},v=()=>{$f(t,null),x.current&&(x.current.destroy(),x.current=null)};return w.useEffect(()=>{!i&&x.current&&l&&sw(x.current,l)},[i,l]),w.useEffect(()=>{!i&&x.current&&wm(x.current.config.data,a.labels)},[i,a.labels]),w.useEffect(()=>{!i&&x.current&&a.datasets&&km(x.current.config.data,a.datasets,s)},[i,a.datasets]),w.useEffect(()=>{x.current&&(i?(v(),setTimeout(b)):x.current.update(f))},[i,l,a.labels,a.datasets,f]),w.useEffect(()=>{x.current&&(v(),setTimeout(b))},[o]),w.useEffect(()=>(b(),()=>v()),[]),d.jsx("canvas",{ref:p,role:"img",height:n,width:r,...h,children:u})}const lw=w.forwardRef(aw);function Sm(e,t){return ia.register(t),w.forwardRef((n,r)=>d.jsx(lw,{...n,ref:r,type:e}))}const cw=Sm("bar",Xs),dw=Sm("doughnut",ai),uw=`/* =========================
   BASE THEME
========================= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --primary:#0b3d91;
  --primary-dark:#072c68;
  --bg:#f4f7fb;
  --white:#ffffff;
  --text:#1f2937;
  --muted:#6b7280;
  --border:#e5e7eb;
}

body{
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background:var(--bg);
  color:var(--text);
  display:flex;
}

/* =========================
   SIDEBAR (EXACT COPY)
========================= */

.sidebar{
  width:240px;
  min-height:100vh;
  background:linear-gradient(180deg,#071a35,#0b3d91);
  position:fixed;
  left:0;
  top:0;
  display:flex;
  flex-direction:column;
}

.sidebar-brand{
  padding:22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.logo-mark{
  display:flex;
  align-items:center;
  gap:12px;
}

.logo-icon{
  width:52px;
  height:52px;
  border-radius:14px;
  background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.18);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
}

.logo-text{
  color:#fff;
  font-weight:700;
  font-size:16px;
}

.logo-sub{
  font-size:11px;
  color:rgba(255,255,255,0.6);
  margin-top:3px;
}

.sidebar-user{
  padding:16px 22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.user-label{
  font-size:10px;
  color:rgba(255,255,255,0.5);
  text-transform:uppercase;
}

.user-name{
  color:#fff;
  font-weight:600;
  margin-top:4px;
}

.user-role{
  display:inline-block;
  margin-top:6px;
  font-size:11px;
  padding:4px 10px;
  border-radius:20px;
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* NAV */
.sidebar-nav{
  padding:14px;
  flex:1;
}

.nav-label{
  font-size:10px;
  color:rgba(255,255,255,0.4);
  margin:12px 0 6px;
  text-transform:uppercase;
}

.sidebar-nav a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.8);
  text-decoration:none;
  border-radius:10px;
  font-size:14px;
}

.sidebar-nav a:hover{
  background:rgba(255,255,255,0.12);
}

.sidebar-nav a.active{
  background:#fff;
  color:var(--primary);
  font-weight:600;
}

/* LOGOUT */
.sidebar-footer{
  padding:14px;
  border-top:1px solid rgba(255,255,255,0.08);
}

.sidebar-footer a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.7);
  text-decoration:none;
  border-radius:10px;
}

.sidebar-footer a:hover{
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* =========================
   MAIN DISPLAY MATCHES
========================= */

.main{
  margin-left:240px;
  width:calc(100% - 240px);
  padding:30px;
}

/* HEADER */
.header h2{
  font-size:24px;
  font-weight:700;
}

.header p{
  color:var(--muted);
  margin-top:4px;
}

/* STATS */
.stats{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:16px;
  margin:20px 0;
}

.card{
  background:#fff;
  border-radius:16px;
  padding:20px;
  box-shadow:0 6px 20px rgba(0,0,0,0.06);
  border-left:4px solid var(--primary);
}

.card h4{
  font-size:11px;
  color:var(--muted);
  text-transform:uppercase;
}

.card .num{
  font-size:34px;
  font-weight:700;
  margin-top:6px;
}

.card small{
  display:block;
  color:var(--muted);
  margin-top:4px;
}

/* CHARTS PANEL */
.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
  margin-top:25px;
}

.panel{
  background:#fff;
  border-radius:16px;
  padding:20px;
  box-shadow:0 10px 30px rgba(0,0,0,0.06);
}

.panel h3{
  font-size:14px;
  margin-bottom:16px;
  color:var(--text);
}

/* RESPONSIVE */
@media(max-width:900px){
  .grid{ grid-template-columns:1fr; }
}
`;ia.register(ci,Js,Kl,Xl,Q5,W5);const fw=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function hw(){const{data:e,loading:t,error:n}=Gt(re.analytics);return d.jsxs(Ji,{css:uw,active:"/admin/analytics",children:[d.jsxs("div",{className:"header",children:[d.jsx("h2",{children:"Analytics Dashboard"}),d.jsx("p",{children:"Overview of barangay blotter statistics"})]}),t&&d.jsx("p",{children:"Loading analytics…"}),n&&d.jsx("div",{className:"alert alert-danger",children:n}),e&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"stats",children:[d.jsxs("div",{className:"card",children:[d.jsx("h4",{children:"TOTAL CASES"}),d.jsx("div",{className:"num",children:e.total}),d.jsx("small",{children:"All records"})]}),d.jsxs("div",{className:"card",style:{borderLeftColor:"#d97706"},children:[d.jsx("h4",{children:"PENDING"}),d.jsx("div",{className:"num",style:{color:"#d97706"},children:e.pending}),d.jsx("small",{children:"Waiting review"})]}),d.jsxs("div",{className:"card",style:{borderLeftColor:"#16a34a"},children:[d.jsx("h4",{children:"SETTLED"}),d.jsx("div",{className:"num",style:{color:"#16a34a"},children:e.settled}),d.jsx("small",{children:"Resolved cases"})]}),d.jsxs("div",{className:"card",style:{borderLeftColor:"#6b7280"},children:[d.jsx("h4",{children:"DISMISSED"}),d.jsx("div",{className:"num",children:e.dismissed}),d.jsx("small",{children:"Closed cases"})]})]}),d.jsxs("div",{className:"grid",children:[d.jsxs("div",{className:"panel",children:[d.jsx("h3",{children:"Status Breakdown"}),d.jsx("div",{style:{height:360},children:d.jsx(dw,{data:{labels:["Pending","Settled","Dismissed"],datasets:[{data:[e.pending,e.settled,e.dismissed],backgroundColor:["#d97706","#16a34a","#6b7280"]}]},options:{maintainAspectRatio:!1}})})]}),d.jsxs("div",{className:"panel",children:[d.jsx("h3",{children:"Monthly Cases"}),d.jsx("div",{style:{height:360},children:d.jsx(cw,{data:{labels:fw,datasets:[{data:e.monthly,backgroundColor:"#0b3d91"}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}}}})})]})]})]})]})}const pw=`/* =========================
   BASE (MATCHED UI)
========================= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --primary:#0b3d91;
  --primary-dark:#072c68;
  --bg:#f4f7fb;
  --white:#ffffff;
  --text:#1f2937;
  --muted:#6b7280;
  --border:#e5e7eb;
}

body{
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background:var(--bg);
  color:var(--text);
  display:flex;
}

/* =========================
   SIDEBAR (COPIED STYLE)
========================= */

.sidebar{
  width:240px;
  min-height:100vh;
  background:linear-gradient(180deg,#071a35,#0b3d91);
  position:fixed;
  left:0;
  top:0;
  display:flex;
  flex-direction:column;
}

.sidebar-brand{
  padding:22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.logo-mark{
  display:flex;
  align-items:center;
  gap:12px;
}

.logo-icon{
  width:52px;
  height:52px;
  border-radius:14px;
  background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.18);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
}

.logo-text{
  color:#fff;
  font-weight:700;
  font-size:16px;
}

.logo-sub{
  font-size:11px;
  color:rgba(255,255,255,0.6);
  margin-top:3px;
}

.sidebar-user{
  padding:16px 22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.user-label{
  font-size:10px;
  color:rgba(255,255,255,0.5);
  text-transform:uppercase;
}

.user-name{
  color:#fff;
  font-weight:600;
  margin-top:4px;
}

.user-role{
  display:inline-block;
  margin-top:6px;
  font-size:11px;
  padding:4px 10px;
  border-radius:20px;
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* NAV */
.sidebar-nav{
  padding:14px;
  flex:1;
}

.nav-label{
  font-size:10px;
  color:rgba(255,255,255,0.4);
  margin:12px 0 6px;
  text-transform:uppercase;
}

.sidebar-nav a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.8);
  text-decoration:none;
  border-radius:10px;
  font-size:14px;
}

.sidebar-nav a:hover{
  background:rgba(255,255,255,0.12);
}

.sidebar-nav a.active{
  background:#fff;
  color:var(--primary);
  font-weight:600;
}

/* LOGOUT */
.sidebar-footer{
  padding:14px;
  border-top:1px solid rgba(255,255,255,0.08);
}

.sidebar-footer a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.7);
  text-decoration:none;
  border-radius:10px;
}

.sidebar-footer a:hover{
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* =========================
   MAIN
========================= */

.main{
  margin-left:240px;
  width:calc(100% - 240px);
  padding:30px;
}

.header h3{
  font-size:24px;
  font-weight:700;
}

.header p{
  color:var(--muted);
  margin-top:4px;
}

/* ALERT */
.alert{
  padding:12px 16px;
  border-radius:10px;
  margin-bottom:16px;
  border-left:4px solid;
  background:#fff;
}

/* =========================
   STATS (MATCHED STYLE)
========================= */

.stats-row{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:16px;
  margin:20px 0;
}

.stat-box{
  background:#fff;
  padding:20px;
  border-radius:16px;
  box-shadow:0 6px 20px rgba(0,0,0,0.06);
}

.stat-label{
  font-size:11px;
  color:var(--muted);
  text-transform:uppercase;
}

.stat-num{
  font-size:34px;
  font-weight:700;
  margin-top:6px;
}

/* =========================
   TABLE
========================= */

.table-card{
  background:#fff;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 10px 30px rgba(0,0,0,0.06);
}

table{
  width:100%;
  border-collapse:collapse;
}

thead{
  background:var(--primary);
  color:#fff;
}

th{
  padding:16px;
  text-align:left;
  font-size:12px;
}

td{
  padding:16px;
  border-bottom:1px solid #f1f1f1;
  font-size:14px;
}

tbody tr:hover{
  background:#f9fafb;
}

/* BADGE */
.badge{
  padding:5px 10px;
  border-radius:999px;
  font-size:12px;
  background:#f3f4f6;
}

/* BUTTON */
.btn-danger{
  background:#ef4444;
  border:none;
  padding:6px 10px;
  border-radius:8px;
  color:#fff;
  font-size:12px;
  cursor:pointer;
}
`;function gw(){const{flash:e}=bt(),{data:t,setData:n,loading:r,error:i}=Gt(re.users),s=t??[],[o,a]=w.useState(""),l=o.trim().toLowerCase(),c=l?s.filter(f=>[f.FullName,f.Email,f.ContactNumber,f.Role,String(f.UserID)].some(h=>String(h??"").toLowerCase().includes(l))):s;async function u(f){if(window.confirm(`Delete ${f.FullName} and all their reports?`))try{const h=await re.deleteUser(f.UserID);e("success",h.message),n(p=>p.filter(x=>x.UserID!==f.UserID))}catch(h){e("danger",h.message)}}return d.jsxs(Ji,{css:pw,active:"/admin/users",children:[d.jsxs("div",{className:"header",children:[d.jsx("h3",{children:"All Registered Users"}),d.jsx("p",{children:"Manage barangay residents and accounts"})]}),r&&d.jsx("p",{children:"Loading users…"}),i&&d.jsx("div",{className:"alert alert-danger",children:i}),t&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"stats-row",children:[d.jsxs("div",{className:"stat-box",children:[d.jsx("div",{className:"stat-label",children:"Total Users"}),d.jsx("div",{className:"stat-num",children:s.length})]}),d.jsxs("div",{className:"stat-box",children:[d.jsx("div",{className:"stat-label",children:"Verified"}),d.jsx("div",{className:"stat-num",children:s.filter(f=>f.IsVerified===1).length})]}),d.jsxs("div",{className:"stat-box",children:[d.jsx("div",{className:"stat-label",children:"Citizens"}),d.jsx("div",{className:"stat-num",children:s.filter(f=>f.Role==="user").length})]})]}),d.jsxs("div",{className:"search-bar",children:[d.jsx("input",{placeholder:"Search by name, email, contact, role or ID...",value:o,onChange:f=>a(f.target.value)}),o&&d.jsx("a",{href:"#",className:"clear-btn",onClick:f=>{f.preventDefault(),a("")},children:"Clear"})]}),d.jsx("div",{className:"table-card",children:d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"ID"}),d.jsx("th",{children:"Name"}),d.jsx("th",{children:"Email"}),d.jsx("th",{children:"Contact"}),d.jsx("th",{children:"Role"}),d.jsx("th",{children:"Status"}),d.jsx("th",{children:"Reports"}),d.jsx("th",{children:"Action"})]})}),d.jsxs("tbody",{children:[c.map(f=>d.jsxs("tr",{children:[d.jsx("td",{children:f.UserID}),d.jsx("td",{children:d.jsx("strong",{children:f.FullName})}),d.jsx("td",{children:f.Email}),d.jsx("td",{children:f.ContactNumber||"—"}),d.jsx("td",{children:d.jsx("span",{className:"badge",children:f.Role})}),d.jsx("td",{children:f.IsVerified===1?d.jsx("span",{className:"badge",style:{background:"#16a34a",color:"#fff"},children:"Verified"}):d.jsx("span",{className:"badge",style:{background:"#ef4444",color:"#fff"},children:"Unverified"})}),d.jsx("td",{children:f.TotalReports}),d.jsx("td",{children:f.Role!=="admin"?d.jsx("button",{className:"btn-danger",onClick:()=>u(f),children:"Delete"}):"Protected"})]},f.UserID)),c.length===0&&d.jsx("tr",{children:d.jsx("td",{colSpan:"8",style:{textAlign:"center",padding:24},children:"No users match your search."})})]})]})})]})]})}const mw=`/* =========================
   BASE THEME (MATCHED ADMIN DASHBOARD)
========================= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --primary:#0b3d91;
  --primary-dark:#072c68;
  --bg:#f4f7fb;
  --white:#ffffff;
  --text:#1f2937;
  --muted:#6b7280;
  --border:#e5e7eb;
}

body{
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background:var(--bg);
  color:var(--text);
  display:flex;
}

/* =========================
   SIDEBAR (SAME AS DASHBOARD)
========================= */

.sidebar{
  width:240px;
  min-height:100vh;
  background:linear-gradient(180deg,#071a35,#0b3d91);
  position:fixed;
  left:0;
  top:0;
  display:flex;
  flex-direction:column;
}

.sidebar-brand{
  padding:22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.logo-mark{
  display:flex;
  align-items:center;
  gap:12px;
}

.logo-icon{
  width:52px;
  height:52px;
  border-radius:14px;
  background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.18);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
}

.logo-text{
  color:#fff;
  font-weight:700;
  font-size:16px;
}

.logo-sub{
  font-size:11px;
  color:rgba(255,255,255,0.6);
  margin-top:3px;
}

.sidebar-user{
  padding:16px 22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.user-label{
  font-size:10px;
  color:rgba(255,255,255,0.5);
  text-transform:uppercase;
}

.user-name{
  color:#fff;
  font-weight:600;
  margin-top:4px;
}

.user-role{
  display:inline-block;
  margin-top:6px;
  font-size:11px;
  padding:4px 10px;
  border-radius:20px;
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* NAV */
.sidebar-nav{
  padding:14px;
  flex:1;
}

.nav-label{
  font-size:10px;
  color:rgba(255,255,255,0.4);
  margin:12px 0 6px;
  text-transform:uppercase;
}

.sidebar-nav a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.8);
  text-decoration:none;
  border-radius:10px;
  font-size:14px;
}

.sidebar-nav a:hover{
  background:rgba(255,255,255,0.12);
}

.sidebar-nav a.active{
  background:#fff;
  color:var(--primary);
  font-weight:600;
}

/* LOGOUT */
.sidebar-footer{
  padding:14px;
  border-top:1px solid rgba(255,255,255,0.08);
}

.sidebar-footer a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.7);
  text-decoration:none;
  border-radius:10px;
}

.sidebar-footer a:hover{
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* =========================
   MAIN
========================= */

.main{
  margin-left:240px;
  width:calc(100% - 240px);
  padding:30px;
}

/* HEADER */
.header h5{
  font-size:24px;
  font-weight:700;
}

.header p{
  font-size:13px;
  color:var(--muted);
  margin-top:4px;
}

/* ALERT */
.alert{
  background:#fff;
  border-left:4px solid var(--primary);
  padding:12px 14px;
  border-radius:10px;
  margin-bottom:15px;
  font-size:13px;
}

/* =========================
   CARD (FORM)
========================= */

.card{
  background:#fff;
  border-radius:16px;
  padding:22px;
  box-shadow:0 6px 20px rgba(0,0,0,0.06);
  margin-bottom:20px;
}

/* FORM */
input, select, textarea{
  width:100%;
  padding:12px;
  border:1px solid var(--border);
  border-radius:10px;
  font-size:14px;
}

label{
  font-size:13px;
  font-weight:600;
  color:var(--text);
}

/* BUTTON */
button{
  background:var(--primary);
  color:#fff;
  border:none;
  padding:12px 18px;
  border-radius:10px;
  cursor:pointer;
  font-weight:600;
}

/* =========================
   ANNOUNCEMENT CARD
========================= */

.ann-card{
  background:#fff;
  border-radius:16px;
  padding:20px;
  margin-bottom:14px;
  box-shadow:0 6px 20px rgba(0,0,0,0.06);
  border-left:4px solid var(--primary);
}

.badge{
  padding:5px 10px;
  border-radius:999px;
  font-size:11px;
  background:#f3f4f6;
}

/* DELETE BUTTON */
.btn-danger{
  background:#ef4444;
  border:none;
  padding:6px 10px;
  border-radius:8px;
  color:#fff;
  font-size:12px;
  cursor:pointer;
}
`,Yf={title:"",category:"General",content:""};function xw(){const{flash:e}=bt(),{data:t,reload:n,loading:r,error:i}=Gt(re.announcements),[s,o]=w.useState(Yf),[a,l]=w.useState(!1),c=p=>x=>o({...s,[p]:x.target.value});async function u(p){p.preventDefault(),l(!0);try{const x=await re.addAnnouncement(s);e("success",x.message),o(Yf),n()}catch(x){e("danger",x.message)}l(!1)}async function f(p){if(window.confirm("Delete this announcement?"))try{const x=await re.deleteAnnouncement(p);e("success",x.message),n()}catch(x){e("danger",x.message)}}const h=t??[];return d.jsxs(Ji,{css:mw,active:"/admin/announcements",children:[d.jsxs("div",{className:"header",children:[d.jsx("h5",{children:"Announcements"}),d.jsx("p",{children:"Post announcements visible to all residents"})]}),d.jsxs("div",{className:"card",children:[d.jsx("div",{style:{fontWeight:700,marginBottom:12},children:"Post New Announcement"}),d.jsxs("form",{onSubmit:u,children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:12},children:[d.jsxs("div",{children:[d.jsx("label",{children:"Title"}),d.jsx("input",{placeholder:"Announcement title...",required:!0,value:s.title,onChange:c("title")})]}),d.jsxs("div",{children:[d.jsx("label",{children:"Category"}),d.jsx("select",{value:s.category,onChange:c("category"),children:$y.map(p=>d.jsx("option",{children:p},p))})]})]}),d.jsxs("div",{style:{marginTop:12},children:[d.jsx("label",{children:"Content"}),d.jsx("textarea",{rows:"4",required:!0,value:s.content,onChange:c("content")})]}),d.jsx("div",{style:{marginTop:12},children:d.jsx("button",{type:"submit",disabled:a,children:"Post Announcement"})})]})]}),r&&d.jsx("p",{children:"Loading announcements…"}),i&&d.jsx("div",{className:"alert alert-danger",children:i}),t&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{fontSize:14,fontWeight:700,marginBottom:10},children:["Posted Announcements (",h.length,")"]}),h.map(p=>d.jsx("div",{className:"ann-card",children:d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12},children:[d.jsxs("div",{style:{flex:1},children:[d.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:8},children:[d.jsx("span",{className:"badge",children:p.Category}),d.jsx("small",{style:{color:"var(--muted)",fontSize:12},children:Mg(p.CreatedAt)})]}),d.jsx("div",{style:{fontWeight:700,fontSize:15,marginBottom:6},children:p.Title}),d.jsx("div",{style:{fontSize:13,color:"var(--muted)",lineHeight:1.5},children:p.Content})]}),d.jsx("button",{className:"btn-danger",onClick:()=>f(p.AnnouncementID),children:"Delete"})]})},p.AnnouncementID)),h.length===0&&d.jsx("div",{style:{textAlign:"center",padding:40,color:"var(--muted)"},children:"No announcements yet"})]})]})}const bw=`/* =========================
   BASE UI
========================= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --primary:#0b3d91;
  --primary-dark:#072c68;
  --bg:#f4f7fb;
  --white:#ffffff;
  --text:#1f2937;
  --muted:#6b7280;
  --border:#e5e7eb;
}

body{
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background:var(--bg);
  color:var(--text);
  display:flex;
}

/* =========================
   SIDEBAR
========================= */

.sidebar{
  width:240px;
  min-height:100vh;
  background:linear-gradient(180deg,#071a35,#0b3d91);
  position:fixed;
  left:0;
  top:0;
  display:flex;
  flex-direction:column;
}

.sidebar-brand{
  padding:22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.logo-mark{
  display:flex;
  align-items:center;
  gap:12px;
}

.logo-icon{
  width:52px;
  height:52px;
  border-radius:14px;
  background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.18);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
}

.logo-text{
  color:#fff;
  font-weight:700;
  font-size:16px;
}

.logo-sub{
  font-size:11px;
  color:rgba(255,255,255,0.6);
  margin-top:3px;
}

.sidebar-user{
  padding:16px 22px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.user-label{
  font-size:10px;
  color:rgba(255,255,255,0.5);
  text-transform:uppercase;
}

.user-name{
  color:#fff;
  font-weight:600;
  margin-top:4px;
}

.user-role{
  display:inline-block;
  margin-top:6px;
  font-size:11px;
  padding:4px 10px;
  border-radius:20px;
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* NAV */
.sidebar-nav{
  padding:14px;
  flex:1;
}

.nav-label{
  font-size:10px;
  color:rgba(255,255,255,0.4);
  margin:12px 0 6px;
  text-transform:uppercase;
}

.sidebar-nav a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.8);
  text-decoration:none;
  border-radius:10px;
  font-size:14px;
}

.sidebar-nav a:hover{
  background:rgba(255,255,255,0.12);
}

.sidebar-nav a.active{
  background:#fff;
  color:var(--primary);
  font-weight:600;
}

/* LOGOUT */
.sidebar-footer{
  padding:14px;
  border-top:1px solid rgba(255,255,255,0.08);
}

.sidebar-footer a{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  color:rgba(255,255,255,0.7);
  text-decoration:none;
  border-radius:10px;
}

.sidebar-footer a:hover{
  background:rgba(255,255,255,0.12);
  color:#fff;
}

/* =========================
   MAIN & FORM STYLES
========================= */

.main{
  margin-left:240px;
  width:calc(100% - 240px);
  padding:30px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header h3{
  font-size:24px;
  font-weight:700;
}

.header p{
  color:var(--muted);
  margin-top:4px;
}

/* FORM CONTAINER CARD */
.form-card{
  background:#fff;
  border-radius:16px;
  padding: 30px;
  max-width: 800px;
  box-shadow:0 10px 30px rgba(0,0,0,0.06);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group.full-width {
  grid-column: span 2;
}

.form-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-control, .form-select, .form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 14px;
  color: var(--text);
  background-color: #fff;
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-control:focus, .form-select:focus, .form-textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-textarea {
  resize: vertical;
}

/* BUTTONS */
.btn-back {
  padding: 10px 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  text-decoration: none;
  color: var(--muted);
  background: #fff;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-back:hover {
  background: #f9fafb;
  color: var(--text);
}

.btn-submit-form {
  padding: 14px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-submit-form:hover {
  background: var(--primary-dark);
}
`;function yw(){const{id:e}=wg(),{data:t,loading:n,error:r}=Gt(()=>re.adminIncident(e),[e]);return d.jsxs(Ji,{css:bw,active:"/admin",children:[n&&d.jsx(En,{}),r&&d.jsx("div",{className:"alert alert-danger",children:r}),t&&d.jsx(vw,{id:e,record:t},t.IncidentID)]})}function vw({id:e,record:t}){const n=jn(),{flash:r}=bt(),[i,s]=w.useState(!1),[o,a]=w.useState({complainant:t.Complainant??"",respondent:t.Respondent??"",incident_type:t.IncidentType??"",date_incident:(t.DateIncident??"").slice(0,10),status:t.Status??"Pending",narrative:t.Narrative??""}),l=u=>f=>a({...o,[u]:f.target.value});async function c(u){u.preventDefault(),s(!0);try{const f=await re.updateIncident(e,o);r("success",f.message),n("/admin")}catch(f){r("danger",f.message),s(!1)}}return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"header-row",children:[d.jsxs("div",{className:"header",children:[d.jsx("h3",{children:"Edit Blotter Record"}),d.jsx("p",{children:"Modify case details and update incident status"})]}),d.jsx(xe,{to:"/admin",className:"btn-back",children:"← Back to Records"})]}),d.jsx("div",{className:"form-card",children:d.jsx("form",{onSubmit:c,children:d.jsxs("div",{className:"form-grid",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Case Number"}),d.jsx("input",{className:"form-control",value:t.CaseNumber??"",disabled:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Incident Type"}),d.jsx("select",{className:"form-select",value:o.incident_type,onChange:l("incident_type"),children:Ag.map(u=>d.jsx("option",{children:u},u))})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Complainant"}),d.jsx("input",{className:"form-control",required:!0,value:o.complainant,onChange:l("complainant")})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Reported Person"}),d.jsx("input",{className:"form-control",required:!0,value:o.respondent,onChange:l("respondent")})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Date of Incident"}),d.jsx("input",{className:"form-control",type:"date",value:o.date_incident,onChange:l("date_incident")})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",children:"Status"}),d.jsx("select",{className:"form-select",value:o.status,onChange:l("status"),children:ed.map(u=>d.jsx("option",{children:u},u))})]}),d.jsxs("div",{className:"form-group full-width",children:[d.jsx("label",{className:"form-label",children:"Narrative"}),d.jsx("textarea",{className:"form-textarea",rows:"6",value:o.narrative,onChange:l("narrative")})]}),d.jsx("div",{className:"form-group full-width",style:{marginTop:10},children:d.jsx("button",{type:"submit",className:"btn-submit-form",disabled:i,children:"Save Changes"})})]})})})]})}const ww=`* { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Times New Roman', serif;
      background: #f0f4f8;
      display: flex;
      justify-content: center;
      padding: 30px;
    }
    .page {
      background: white;
      width: 816px;
      min-height: 1056px;
      padding: 60px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      position: relative;
    }
    .header {
      text-align: center;
      border-bottom: 3px double #1a3c5e;
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    .republic { font-size: 13px; color: #555; margin-bottom: 4px; }
    .barangay-name {
      font-size: 22px;
      font-weight: bold;
      color: #1a3c5e;
      letter-spacing: 1px;
    }
    .barangay-address { font-size: 13px; color: #666; margin-top: 4px; }
    .doc-title {
      text-align: center;
      margin: 28px 0 24px;
    }
    .doc-title h2 {
      font-size: 20px;
      font-weight: bold;
      text-decoration: underline;
      letter-spacing: 2px;
      color: #1a3c5e;
    }
    .doc-subtitle {
      font-size: 13px;
      color: #666;
      margin-top: 6px;
    }
    .case-badge {
      text-align: center;
      margin-bottom: 24px;
    }
    .case-number {
      display: inline-block;
      background: #1a3c5e;
      color: white;
      padding: 8px 24px;
      border-radius: 4px;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .body-text {
      font-size: 14px;
      line-height: 2;
      text-align: justify;
      margin-bottom: 20px;
    }
    .details-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }
    .details-table td {
      padding: 8px 12px;
      border: 1px solid #ddd;
    }
    .details-table td:first-child {
      font-weight: bold;
      background: #f8f9fa;
      width: 35%;
      color: #1a3c5e;
    }
    .narrative-box {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 16px;
      font-size: 13px;
      line-height: 1.8;
      color: #333;
      margin: 16px 0 24px;
      background: #fafafa;
    }
    .certification-text {
      font-size: 14px;
      line-height: 2;
      text-align: justify;
      margin: 20px 0;
    }
    .signature-section {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
    }
    .signature-block { text-align: center; width: 45%; }
    .signature-line {
      border-top: 1px solid #333;
      margin-bottom: 6px;
    }
    .signature-name { font-weight: bold; font-size: 14px; }
    .signature-title { font-size: 12px; color: #666; }
    .footer {
      margin-top: 40px;
      text-align: center;
      font-size: 11px;
      color: #aaa;
      border-top: 1px solid #ddd;
      padding-top: 12px;
    }
    .watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) rotate(-45deg);
      font-size: 80px;
      color: rgba(26,60,94,0.04);
      font-weight: bold;
      pointer-events: none;
      letter-spacing: 10px;
    }
    .print-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 10px 20px;
      background: #1a3c5e;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
    }
    .back-btn {
      position: fixed;
      top: 20px;
      right: 130px;
      padding: 10px 20px;
      background: #6c757d;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      text-decoration: none;
    }
    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; }
      .print-btn, .back-btn { display: none; }
    }
`;function kw(){const{id:e}=wg(),{data:t,loading:n,error:r}=Gt(()=>re.certificate(e),[e]);if(n)return d.jsx(En,{});if(r)return d.jsx("p",{style:{padding:40},children:r});const i=t.record;return d.jsxs(d.Fragment,{children:[d.jsx(Ir,{css:ww}),d.jsx("button",{className:"print-btn",onClick:()=>window.print(),children:"Print Certificate"}),d.jsx(xe,{to:"/admin",className:"back-btn",children:"← Back"}),d.jsxs("div",{className:"page",children:[d.jsx("div",{className:"watermark",children:"OFFICIAL"}),d.jsxs("div",{className:"header",children:[d.jsx("div",{className:"republic",children:"Republic of the Philippines"}),d.jsx("div",{className:"republic",children:"Province / City / Municipality"}),d.jsx("div",{className:"barangay-name",children:"BARANGAY [YOUR BARANGAY NAME]"}),d.jsx("div",{className:"barangay-address",children:"[Complete Address], [City], Philippines"})]}),d.jsxs("div",{className:"doc-title",children:[d.jsx("h2",{children:"BARANGAY BLOTTER RECORD"}),d.jsx("div",{className:"doc-subtitle",children:"Official Record of Incident / Complaint"})]}),d.jsx("div",{className:"case-badge",children:d.jsxs("div",{className:"case-number",children:["CASE NO: ",i.CaseNumber||"N/A"]})}),d.jsx("table",{className:"details-table",children:d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:"Date Filed"}),d.jsx("td",{children:Pg(i.DateFiled)})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Date of Incident"}),d.jsx("td",{children:i.DateIncident||"Not specified"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Complainant"}),d.jsx("td",{children:d.jsx("strong",{children:i.Complainant})})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Reported Person"}),d.jsx("td",{children:d.jsx("strong",{children:i.Respondent})})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Type of Incident"}),d.jsx("td",{children:i.IncidentType})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Filed By (Resident)"}),d.jsx("td",{children:i.FiledBy||"N/A"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:"Current Status"}),d.jsx("td",{children:d.jsx("strong",{children:i.Status})})]})]})}),d.jsx("p",{style:{fontWeight:"bold",fontSize:14,marginBottom:8},children:"NARRATIVE / DESCRIPTION OF INCIDENT:"}),d.jsx("div",{className:"narrative-box",children:i.Narrative||"No narrative provided."}),d.jsxs("div",{className:"certification-text",children:["      This is to certify that the above information has been duly recorded in the ",d.jsx("strong",{children:"Barangay Blotter Book"})," of Barangay [YOUR BARANGAY NAME] and that the same is a true and faithful reproduction of the original entry."]}),d.jsx("div",{className:"certification-text",children:"      This certification is issued upon the request of the interested party for whatever legal purpose it may serve."}),d.jsxs("div",{className:"signature-section",children:[d.jsxs("div",{className:"signature-block",children:[d.jsx("div",{style:{marginBottom:50},children:" "}),d.jsx("div",{className:"signature-line"}),d.jsx("div",{className:"signature-name",children:i.Complainant}),d.jsx("div",{className:"signature-title",children:"Complainant"})]}),d.jsxs("div",{className:"signature-block",children:[d.jsx("div",{style:{marginBottom:50},children:" "}),d.jsx("div",{className:"signature-line"}),d.jsx("div",{className:"signature-name",children:"HON. [KAPITAN NAME]"}),d.jsxs("div",{className:"signature-title",children:["Punong Barangay",d.jsx("br",{}),"Barangay [YOUR BARANGAY NAME]"]})]})]}),d.jsxs("div",{className:"footer",children:[d.jsx("p",{children:"Barangay [YOUR BARANGAY NAME] • [Complete Address] • Tel: [Phone Number]"}),d.jsxs("p",{children:["Generated on: ",Mg(t.now)," • Barangay Blotter Management System"]})]})]})]})}function Sw(){const{user:e,loading:t}=Rt();return t?d.jsx(En,{}):e?d.jsx(yn,{to:e.role==="admin"?"/admin":"/dashboard",replace:!0}):d.jsx(yn,{to:"/login",replace:!0})}function _w(){return d.jsx(Ay,{children:d.jsx(My,{children:d.jsxs(qb,{children:[d.jsx(ue,{path:"/",element:d.jsx(Sw,{})}),d.jsx(ue,{path:"/login",element:d.jsx(ys,{children:d.jsx(Iy,{})})}),d.jsx(ue,{path:"/signup",element:d.jsx(ys,{children:d.jsx(Hy,{})})}),d.jsx(ue,{path:"/verify-login",element:d.jsx(ys,{children:d.jsx(Au,{mode:"login"})})}),d.jsx(ue,{path:"/verify-signup",element:d.jsx(ys,{children:d.jsx(Au,{mode:"signup"})})}),d.jsx(ue,{path:"/logout",element:d.jsx(Uy,{})}),d.jsx(ue,{path:"/dashboard",element:d.jsx(qn,{children:d.jsx(Qy,{})})}),d.jsx(ue,{path:"/my-reports",element:d.jsx(qn,{children:d.jsx(Jy,{})})}),d.jsx(ue,{path:"/submit",element:d.jsx(qn,{children:d.jsx(ev,{})})}),d.jsx(ue,{path:"/emergency",element:d.jsx(qn,{children:d.jsx(ov,{})})}),d.jsx(ue,{path:"/guide",element:d.jsx(qn,{children:d.jsx(uv,{})})}),d.jsx(ue,{path:"/announcements",element:d.jsx(qn,{children:d.jsx(hv,{})})}),d.jsx(ue,{path:"/admin",element:d.jsx(Jn,{children:d.jsx(yv,{})})}),d.jsx(ue,{path:"/admin/analytics",element:d.jsx(Jn,{children:d.jsx(hw,{})})}),d.jsx(ue,{path:"/admin/users",element:d.jsx(Jn,{children:d.jsx(gw,{})})}),d.jsx(ue,{path:"/admin/announcements",element:d.jsx(Jn,{children:d.jsx(xw,{})})}),d.jsx(ue,{path:"/admin/edit/:id",element:d.jsx(Jn,{children:d.jsx(yw,{})})}),d.jsx(ue,{path:"/admin/certificate/:id",element:d.jsx(Jn,{children:d.jsx(kw,{})})}),d.jsx(ue,{path:"*",element:d.jsx(yn,{to:"/",replace:!0})})]})})})}sg(document.getElementById("root")).render(d.jsx(wy,{children:d.jsx(_w,{})}));
