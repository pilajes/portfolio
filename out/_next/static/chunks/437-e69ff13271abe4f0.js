"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[437],{2233:function(e,t,n){n.d(t,{_:function(){return l}});var r=n(5487),o=n(8172),i=n(6742);function a(){let e=!1,t=new Set,n={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(n,o){(0,r.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let a=[];return t.forEach(e=>{a.push((0,i.d)(e,n,{transitionOverride:o}))}),Promise.all(a)},set:n=>((0,r.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{(0,o.gg)(e,n)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,n.stop()})};return n}var u=n(6681),s=n(8868);let l=function(){let e=(0,u.h)(a);return(0,s.L)(e.mount,[]),e}},6783:function(e,t,n){n.d(t,{m:function(){return N}});var r,o=n(7294);let i=(0,o.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),a=(0,o.createContext)({}),u=(0,o.createContext)(null);var s=n(8868),l=n(398),c=n(1804),f=n(7732),d=n(7504);function m(e){return Array.isArray(e)?e.join(" "):e}var v=n(1879),h=n(1741);let g=(0,o.createContext)({}),y=(0,o.createContext)({}),p=Symbol.for("motionComponentSymbol");var b=n(2627),E=n(6728),C=n(406),w=n(8057);let x=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function S(e,t,n){for(let r in t)(0,C.i)(t[r])||(0,E.j)(r,n)||(e[r]=t[r])}function A(e,t,n){let r={},i=function(e,t,n){let r=e.style||{},i={};return S(i,r,e),Object.assign(i,function({transformTemplate:e},t,n){return(0,o.useMemo)(()=>{let r=x();return(0,w.r)(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}(e,t,n)),e.transformValues?e.transformValues(i):i}(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}let V=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport",]);function M(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||V.has(e)}let k=e=>!M(e);try{(r=require("@emotion/is-prop-valid").default)&&(k=e=>e.startsWith("on")?!M(e):r(e))}catch(R){}var L=n(5415);let I=()=>({...x(),attrs:{}});var W=n(9854);function P(e,t,n,r){let i=(0,o.useMemo)(()=>{let n=I();return(0,L.i)(n,t,{enableHardwareAcceleration:!1},(0,W.a)(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let a={};S(a,e.style,e),i.style={...a,...i.style}}return i}var T=n(8504),j=n(6832),B=n(2445),D=n(9432),_=n(6681),H=n(8715);function O(e){let t=(0,C.i)(e)?e.get():e;return(0,H.p)(t)?t.toValue():t}let $=e=>(t,n)=>{let r=(0,o.useContext)(a),i=(0,o.useContext)(u),s=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,i){let a={latestValues:function(e,t,n,r){let o={},i=r(e,{});for(let a in i)o[a]=O(i[a]);let{initial:u,animate:s}=e,l=(0,d.G)(e),c=(0,d.M)(e);t&&c&&!l&&!1!==e.inherit&&(void 0===u&&(u=t.initial),void 0===s&&(s=t.animate));let f=!!n&&!1===n.initial;f=f||!1===u;let m=f?s:u;if(m&&"boolean"!=typeof m&&!(0,B.H)(m)){let v=Array.isArray(m)?m:[m];v.forEach(t=>{let n=(0,D.o)(e,t);if(!n)return;let{transitionEnd:r,transition:i,...a}=n;for(let u in a){let s=a[u];if(Array.isArray(s)){let l=f?s.length-1:0;s=s[l]}null!==s&&(o[u]=s)}for(let c in r)o[c]=r[c]})}return o}(r,o,i,e),renderState:t()};return n&&(a.mount=e=>n(r,e,a)),a})(e,t,r,i);return n?s():(0,_.h)(s)},F={useVisualState:$({scrapeMotionValuesFromProps:j.U,createRenderState:I,onMount(e,t,{renderState:n,latestValues:r}){try{n.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(o){n.dimensions={x:0,y:0,width:0,height:0}}(0,L.i)(n,r,{enableHardwareAcceleration:!1},(0,W.a)(t.tagName),e.transformTemplate),(0,T.K)(t,n)}})};var U=n(189);let q={useVisualState:$({scrapeMotionValuesFromProps:U.U,createRenderState:x})},N=function(e){function t(t,n={}){return function({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:b}){e&&(0,v.K)(e);let E=(0,o.forwardRef)(function(v,p){var E,C,w;let x,S={...(0,o.useContext)(i),...v,layoutId:function({layoutId:e}){let t=(0,o.useContext)(g).id;return t&&void 0!==e?t+"-"+e:e}(v)},{isStatic:A}=S,V=function(e){let{initial:t,animate:n}=function(e,t){if((0,d.G)(e)){let{initial:n,animate:r}=e;return{initial:!1===n||(0,f.$)(n)?n:void 0,animate:(0,f.$)(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,(0,o.useContext)(a));return(0,o.useMemo)(()=>({initial:t,animate:n}),[m(t),m(n)])}(v),M=r(v,A);if(!A&&h.j){V.visualElement=function(e,t,n,r){let{visualElement:c}=(0,o.useContext)(a),f=(0,o.useContext)(l.u),d=(0,o.useContext)(u),m=(0,o.useContext)(i).reducedMotion,v=(0,o.useRef)();r=r||f.renderer,!v.current&&r&&(v.current=r(e,{visualState:t,parent:c,props:n,presenceContext:d,blockInitialAnimation:!!d&&!1===d.initial,reducedMotionConfig:m}));let h=v.current;(0,o.useInsertionEffect)(()=>{h&&h.update(n,d)}),(0,s.L)(()=>{h&&h.render()}),(0,o.useEffect)(()=>{h&&h.updateFeatures()});let g=window.HandoffAppearAnimations?s.L:o.useEffect;return g(()=>{h&&h.animationState&&h.animationState.animateChanges()}),h}(b,M,S,t);let k=(0,o.useContext)(y),R=(0,o.useContext)(l.u).strict;V.visualElement&&(x=V.visualElement.loadFeatures(S,R,e,k))}return o.createElement(a.Provider,{value:V},x&&V.visualElement?o.createElement(x,{visualElement:V.visualElement,...S}):null,n(b,v,(C=V.visualElement,w=p,(0,o.useCallback)(e=>{e&&M.mount&&M.mount(e),C&&(e?C.mount(e):C.unmount()),w&&("function"==typeof w?w(e):(0,c.I)(w)&&(w.current=e))},[C])),M,A,V.visualElement))});return E[p]=b,E}(e(t,n))}if("undefined"==typeof Proxy)return t;let n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}(function(e,{forwardMotionProps:t=!1},n,r){let i=(0,b.q)(e)?F:q;return{...i,preloadedFeatures:n,useRender:function(e=!1){let t=(t,n,r,{latestValues:i},a)=>{let u=(0,b.q)(t)?P:A,s=u(n,i,a,t),l=function(e,t,n){let r={};for(let o in e)("values"!==o||"object"!=typeof e.values)&&(k(o)||!0===n&&M(o)||!t&&!M(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}(n,"string"==typeof t,e),c={...l,...s,ref:r},{children:f}=n,d=(0,o.useMemo)(()=>(0,C.i)(f)?f.get():f,[f]);return(0,o.createElement)(t,{...c,children:d})};return t}(t),createVisualElement:r,Component:e}})},6681:function(e,t,n){n.d(t,{h:function(){return o}});var r=n(7294);function o(e){let t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}},8868:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(7294),o=n(1741);let i=o.j?r.useLayoutEffect:r.useEffect},2708:function(e,t,n){n.d(t,{YD:function(){return s}});var r=n(7294),o=new Map,i=new WeakMap,a=0,u=void 0;function s({threshold:e,delay:t,trackVisibility:n,rootMargin:s,root:l,triggerOnce:c,skip:f,initialInView:d,fallbackInView:m,onChange:v}={}){var h;let[g,y]=r.useState(null),p=r.useRef(),[b,E]=r.useState({inView:!!d,entry:void 0});p.current=v,r.useEffect(()=>{if(f||!g)return;let r;return r=function e(t,n,r={},s=u){if(void 0===window.IntersectionObserver&&void 0!==s){let l=t.getBoundingClientRect();return n(s,{isIntersecting:s,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}let{id:c,observer:f,elements:d}=function(e){var t;let n=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(i.has(n)||(a+=1,i.set(n,a.toString())),i.get(n)):"0":e[t]}`}).toString(),r=o.get(n);if(!r){let u=new Map,s,l=new IntersectionObserver(t=>{t.forEach(t=>{var n;let r=t.isIntersecting&&s.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=r),null==(n=u.get(t.target))||n.forEach(e=>{e(r,t)})})},e);s=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:l,elements:u},o.set(n,r)}return r}(r),m=d.get(t)||[];return d.has(t)||d.set(t,m),m.push(n),f.observe(t),function(){m.splice(m.indexOf(n),1),0===m.length&&(d.delete(t),f.unobserve(t)),0===d.size&&(f.disconnect(),o.delete(c))}}(g,(e,t)=>{E({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&c&&r&&(r(),r=void 0)},{root:l,rootMargin:s,threshold:e,trackVisibility:n,delay:t},m),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,g,l,s,c,f,n,m,t]);let C=null==(h=b.entry)?void 0:h.target,w=r.useRef();g||!C||c||f||w.current===C||(w.current=C,E({inView:!!d,entry:void 0}));let x=[y,b.inView,b.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}r.Component}}]);