function e(){}function t(e,t){for(const a in t)e[a]=t[a];return e}function a(e){return e()}function r(){return Object.create(null)}function n(e){e.forEach(a)}function l(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(t,...a){if(null==t)return e;const r=t.subscribe(...a);return r.unsubscribe?()=>r.unsubscribe():r}function s(e,t,a){e.$$.on_destroy.push(i(t,a))}function c(e){const t={};for(const a in e)"$"!==a[0]&&(t[a]=e[a]);return t}function p(e,t,a=t){return e.set(a),t}function h(e,t){e.appendChild(t)}function u(e,t,a){e.insertBefore(t,a||null)}function d(e){e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function f(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function g(e){return document.createTextNode(e)}function m(){return g(" ")}function v(){return g("")}function x(e,t,a,r){return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)}function b(e,t,a){null==a?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function w(e){return Array.from(e.childNodes)}function $(e,t,a,r){for(let n=0;n<e.length;n+=1){const r=e[n];if(r.nodeName===t){let t=0;const l=[];for(;t<r.attributes.length;){const e=r.attributes[t++];a[e.name]||l.push(e.name)}for(let e=0;e<l.length;e++)r.removeAttribute(l[e]);return e.splice(n,1)[0]}}return r?f(t):y(t)}function E(e,t){for(let a=0;a<e.length;a+=1){const r=e[a];if(3===r.nodeType)return r.data=""+t,e.splice(a,1)[0]}return g(t)}function _(e){return E(e," ")}function z(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function M(e,t,a,r){e.style.setProperty(t,a,r?"important":"")}function k(e,t,a){e.classList[a?"add":"remove"](t)}class T{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,a=null){this.e||(this.e=y(t.nodeName),this.t=t,this.h(e)),this.i(a)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)u(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(d)}}function I(e){const t={};for(const a of e)t[a.name]=a.value;return t}let D;function A(e){D=e}function L(){if(!D)throw new Error("Function called outside component initialization");return D}function S(){const e=L();return(t,a)=>{const r=e.$$.callbacks[t];if(r){const n=function(e,t){const a=document.createEvent("CustomEvent");return a.initCustomEvent(e,!1,!1,t),a}(t,a);r.slice().forEach((t=>{t.call(e,n)}))}}}const q=[],B=[],N=[],P=[],V=Promise.resolve();let C=!1;function H(e){N.push(e)}let O=!1;const R=new Set;function U(){if(!O){O=!0;do{for(let e=0;e<q.length;e+=1){const t=q[e];A(t),j(t.$$)}for(A(null),q.length=0;B.length;)B.pop()();for(let e=0;e<N.length;e+=1){const t=N[e];R.has(t)||(R.add(t),t())}N.length=0}while(q.length);for(;P.length;)P.pop()();C=!1,O=!1,R.clear()}}function j(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}const Y=new Set;function X(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function W(e,t){e.d(1),t.delete(e.key)}function F(e,t){-1===e.$$.dirty[0]&&(q.push(e),C||(C=!0,V.then(U)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(t,o,i,s,c,p,h=[-1]){const u=D;A(t);const y=t.$$={fragment:null,ctx:null,props:p,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:h,skip_bound:!1};let f=!1;if(y.ctx=i?i(t,o.props||{},((e,a,...r)=>{const n=r.length?r[0]:a;return y.ctx&&c(y.ctx[e],y.ctx[e]=n)&&(!y.skip_bound&&y.bound[e]&&y.bound[e](n),f&&F(t,e)),a})):[],y.update(),f=!0,n(y.before_update),y.fragment=!!s&&s(y.ctx),o.target){if(o.hydrate){const e=w(o.target);y.fragment&&y.fragment.l(e),e.forEach(d)}else y.fragment&&y.fragment.c();o.intro&&X(t.$$.fragment),function(e,t,r,o){const{fragment:i,on_mount:s,on_destroy:c,after_update:p}=e.$$;i&&i.m(t,r),o||H((()=>{const t=s.map(a).filter(l);c?c.push(...t):n(t),e.$$.on_mount=[]})),p.forEach(H)}(t,o.target,o.anchor,o.customElement),U()}A(u)}let G;"function"==typeof HTMLElement&&(G=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(a).filter(l);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,a){this[e]=a}disconnectedCallback(){n(this.$$.on_disconnect)}$destroy(){!function(e,t){const a=e.$$;null!==a.fragment&&(n(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(t),()=>{const e=a.indexOf(t);-1!==e&&a.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});const K=[];function Q(t,a=e){let r;const n=[];function l(e){if(o(t,e)&&(t=e,r)){const e=!K.length;for(let a=0;a<n.length;a+=1){const e=n[a];e[1](),K.push(e,t)}if(e){for(let e=0;e<K.length;e+=2)K[e][0](K[e+1]);K.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(o,i=e){const s=[o,i];return n.push(s),1===n.length&&(r=a(l)||e),o(t),()=>{const e=n.indexOf(s);-1!==e&&n.splice(e,1),0===n.length&&(r(),r=null)}}}}function Z(t,a,r){const o=!Array.isArray(t),s=o?[t]:t,c=a.length<2;return{subscribe:Q(r,(t=>{let r=!1;const p=[];let h=0,u=e;const d=()=>{if(h)return;u();const r=a(o?p[0]:p,t);c?t(r):u=l(r)?r:e},y=s.map(((e,t)=>i(e,(e=>{p[t]=e,h&=~(1<<t),r&&d()}),(()=>{h|=1<<t}))));return r=!0,d(),function(){n(y),u()}})).subscribe}}const ee=e=>{const t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),r=Math.floor(e-3600*t-60*a);return(t>0?[t,a,r]:[a,r]).map((e=>e<10?"0"+e:""+e)).join(":")},te=/mobile/i.test(window.navigator.userAgent);function ae(e){if(e){const t=(e=e.replace(/([^\]^\n])\[/g,((e,t)=>t+"\n["))).split("\n");let a=[];const r=t.length;for(let e=0;e<r;e++){const r=t[e].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),n=t[e].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(r){const e=r.length;for(let t=0;t<e;t++){const e=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[t]),l=60*e[1]+parseInt(e[2])+(e[4]?parseInt(e[4])/(2===(e[4]+"").length?100:1e3):0);a.push([l,n])}}}return a=a.filter((e=>e[1])),a.sort(((e,t)=>e[0]-t[0])),a}return[]}console.log("\n %c Svelte APlayer v0.1.1 %c http://svelte-aplayer.js.org \n\n","color: #fff; background: #ff3e00; padding:5px 0;","background: #fadfa3; padding:5px 0;");const re=[];function ne(e,t,a){const r=e.slice();return r[74]=t[a],r[76]=a,r}function le(e,t,a){const r=e.slice();return r[77]=t[a],r[79]=a,r}function oe(e){let t,a,r;return{c(){t=y("div"),a=f("svg"),r=f("path"),this.h()},l(e){t=$(e,"DIV",{class:!0});var n=w(t);a=$(n,"svg",{xmlns:!0,version:!0,viewBox:!0},1);var l=w(a);r=$(l,"path",{d:!0},1),w(r).forEach(d),l.forEach(d),n.forEach(d),this.h()},h(){b(r,"d","M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"),b(a,"xmlns","http://www.w3.org/2000/svg"),b(a,"version","1.1"),b(a,"viewBox","0 0 16 31"),b(t,"class","aplayer-button aplayer-play")},m(e,n){u(e,t,n),h(t,a),h(a,r)},d(e){e&&d(t)}}}function ie(e){let t,a,r;return{c(){t=y("div"),a=f("svg"),r=f("path"),this.h()},l(e){t=$(e,"DIV",{class:!0});var n=w(t);a=$(n,"svg",{xmlns:!0,version:!0,viewBox:!0},1);var l=w(a);r=$(l,"path",{d:!0},1),w(r).forEach(d),l.forEach(d),n.forEach(d),this.h()},h(){b(r,"d","M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"),b(a,"xmlns","http://www.w3.org/2000/svg"),b(a,"version","1.1"),b(a,"viewBox","0 0 17 32"),b(t,"class","aplayer-button aplayer-pause")},m(e,n){u(e,t,n),h(t,a),h(a,r)},d(e){e&&d(t)}}}function se(e){let t,a,r=[],n=new Map,l=e[6];const o=e=>e[77][0];for(let i=0;i<l.length;i+=1){let t=le(e,l,i),a=o(t);n.set(a,r[i]=ce(a,t))}return{c(){t=y("div"),a=y("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=$(e,"DIV",{class:!0});var n=w(t);a=$(n,"DIV",{class:!0,style:!0});var l=w(a);for(let t=0;t<r.length;t+=1)r[t].l(l);l.forEach(d),n.forEach(d),this.h()},h(){b(a,"class","aplayer-lrc-contents"),M(a,"transform","translateY(calc("+Math.max(e[7],0)+" * -1 * calc(var(--base-font-size) + 4px)))"),b(t,"class","aplayer-lrc")},m(e,n){u(e,t,n),h(t,a);for(let t=0;t<r.length;t+=1)r[t].m(a,null)},p(e,t){192&t[0]&&(l=e[6],r=function(e,t,a,r,n,l,o,i,s,c,p,h){let u=e.length,d=l.length,y=u;const f={};for(;y--;)f[e[y].key]=y;const g=[],m=new Map,v=new Map;for(y=d;y--;){const e=h(n,l,y),i=a(e);let s=o.get(i);s?r&&s.p(e,t):(s=c(i,e),s.c()),m.set(i,g[y]=s),i in f&&v.set(i,Math.abs(y-f[i]))}const x=new Set,b=new Set;function w(e){X(e,1),e.m(i,p),o.set(e.key,e),p=e.first,d--}for(;u&&d;){const t=g[d-1],a=e[u-1],r=t.key,n=a.key;t===a?(p=t.first,u--,d--):m.has(n)?!o.has(r)||x.has(r)?w(t):b.has(n)?u--:v.get(r)>v.get(n)?(b.add(r),w(t)):(x.add(n),u--):(s(a,o),u--)}for(;u--;){const t=e[u];m.has(t.key)||s(t,o)}for(;d;)w(g[d-1]);return g}(r,t,o,1,e,l,n,a,W,ce,null,le)),128&t[0]&&M(a,"transform","translateY(calc("+Math.max(e[7],0)+" * -1 * calc(var(--base-font-size) + 4px)))")},d(e){e&&d(t);for(let t=0;t<r.length;t+=1)r[t].d()}}}function ce(e,t){let a,r,n,l=t[77][1]+"";return{key:e,first:null,c(){a=y("p"),r=g(l),n=m(),this.h()},l(e){a=$(e,"P",{});var t=w(a);r=E(t,l),n=_(t),t.forEach(d),this.h()},h(){k(a,"aplayer-lrc-current",t[79]===t[7]),this.first=a},m(e,t){u(e,a,t),h(a,r),h(a,n)},p(e,n){t=e,64&n[0]&&l!==(l=t[77][1]+"")&&z(r,l),192&n[0]&&k(a,"aplayer-lrc-current",t[79]===t[7])},d(e){e&&d(a)}}}function pe(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new T(r)},m(e,t){a.m('<svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  version="1.1"\n                  viewBox="0 0 28 32"\n                  ><path\n                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"\n                  /></svg\n        >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function he(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new T(r)},m(e,t){a.m('<svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  version="1.1"\n                  viewBox="0 0 28 32"\n                  ><path\n                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"\n                  /></svg\n                >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function ue(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new T(r)},m(e,t){a.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 32 32"\n                ><path\n                  d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function de(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new T(r)},m(e,t){a.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 32 32"\n                ><path\n                  d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function ye(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new T(r)},m(e,t){a.m(' <svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 29 32"\n                ><path\n                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function fe(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new T(r)},m(e,t){a.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 33 32"\n                ><path\n                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function ge(t){let a,r;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){a=new T(r)},m(e,t){a.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 29 32"\n                ><path\n                  d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"\n                /></svg\n              >',e,t),u(e,r,t)},p:e,d(e){e&&d(r),e&&a.d()}}}function me(t){let a,r,n,l,o;return{c(){a=y("button"),r=f("svg"),n=f("path"),this.h()},l(e){a=$(e,"BUTTON",{type:!0,class:!0});var t=w(a);r=$(t,"svg",{xmlns:!0,version:!0,viewBox:!0},1);var l=w(r);n=$(l,"path",{d:!0},1),w(n).forEach(d),l.forEach(d),t.forEach(d),this.h()},h(){b(n,"d","M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"),b(r,"xmlns","http://www.w3.org/2000/svg"),b(r,"version","1.1"),b(r,"viewBox","0 0 22 32"),b(a,"type","button"),b(a,"class","aplayer-icon aplayer-icon-menu")},m(e,i){u(e,a,i),h(a,r),h(r,n),l||(o=x(a,"click",t[60]),l=!0)},p:e,d(e){e&&d(a),l=!1,o()}}}function ve(e){let t;return{c(){t=y("span"),this.h()},l(e){t=$(e,"SPAN",{class:!0}),w(t).forEach(d),this.h()},h(){b(t,"class","aplayer-list-cur")},m(e,a){u(e,t,a)},d(e){e&&d(t)}}}function xe(e){let t,a,r,n,l,o,i,s,c,p,f,v,M,k=e[76]+1+"",T=e[74].name+"",I=e[74].artist+"",D=e[76]===e[17].playingIndex&&ve();function A(){return e[61](e[76])}return{c(){t=y("li"),D&&D.c(),a=m(),r=y("span"),n=g(k),l=m(),o=y("span"),i=g(T),s=m(),c=y("span"),p=g(I),f=m(),this.h()},l(e){t=$(e,"LI",{});var h=w(t);D&&D.l(h),a=_(h),r=$(h,"SPAN",{class:!0});var u=w(r);n=E(u,k),u.forEach(d),l=_(h),o=$(h,"SPAN",{class:!0});var y=w(o);i=E(y,T),y.forEach(d),s=_(h),c=$(h,"SPAN",{class:!0});var g=w(c);p=E(g,I),g.forEach(d),f=_(h),h.forEach(d),this.h()},h(){b(r,"class","aplayer-list-index"),b(o,"class","aplayer-list-title"),b(c,"class","aplayer-list-artist")},m(e,d){u(e,t,d),D&&D.m(t,null),h(t,a),h(t,r),h(r,n),h(t,l),h(t,o),h(o,i),h(t,s),h(t,c),h(c,p),h(t,f),v||(M=x(t,"click",A),v=!0)},p(r,n){(e=r)[76]===e[17].playingIndex?D||(D=ve(),D.c(),D.m(t,a)):D&&(D.d(1),D=null),16&n[0]&&T!==(T=e[74].name+"")&&z(i,T),16&n[0]&&I!==(I=e[74].artist+"")&&z(p,I)},d(e){e&&d(t),D&&D.d(),v=!1,M()}}}function be(t){let a,r,o,i,s,c,p,f,v,T,I,D,A,L,S,q,B,N,P,V,C,H,O,R,U,j,Y,X,W,F,J,G,K,Q,Z,ee,ae,re,le,ce,ve,be,we,$e,Ee,_e,ze,Me,ke=t[5].name+"",Te=t[5].artist+"",Ie=t[20].ptime+"",De=t[20].duration+"";function Ae(e,t){return e[1].paused?oe:ie}let Le=Ae(t),Se=Le(t),qe=t[5].lrc&&se(t);function Be(e,t){return e[22].muted||e[1].muted?he:pe}let Ne=Be(t),Pe=Ne(t);function Ve(e,t){return"random"===e[16].order?de:ue}let Ce=Ve(t),He=Ce(t);function Oe(e,t){return"none"===e[16].loop?ge:"one"===e[16].loop?fe:"all"===e[16].loop?ye:void 0}let Re=Oe(t),Ue=Re&&Re(t),je=t[4].length>1&&me(t),Ye=t[4],Xe=[];for(let e=0;e<Ye.length;e+=1)Xe[e]=xe(ne(t,Ye,e));return{c(){a=y("div"),r=y("div"),o=y("div"),Se.c(),i=m(),s=y("div"),c=y("div"),p=y("span"),f=g(ke),v=m(),T=y("span"),I=g(Te),D=m(),qe&&qe.c(),A=m(),L=y("div"),S=y("div"),q=y("div"),B=y("div"),N=m(),P=y("div"),V=y("div"),C=y("span"),H=m(),O=y("div"),R=y("span"),U=y("span"),j=g(Ie),Y=g(" /\n            "),X=y("span"),W=g(De),F=m(),J=y("span"),G=m(),K=y("div"),Q=y("button"),Pe.c(),Z=m(),ee=y("div"),ae=y("div"),re=y("div"),le=m(),ce=y("button"),He.c(),ve=m(),be=y("button"),Ue&&Ue.c(),we=m(),je&&je.c(),$e=m(),Ee=y("div"),_e=y("ol");for(let e=0;e<Xe.length;e+=1)Xe[e].c();this.c=e,this.h()},l(e){a=$(e,"DIV",{class:!0});var t=w(a);r=$(t,"DIV",{class:!0});var n=w(r);o=$(n,"DIV",{class:!0,style:!0});var l=w(o);Se.l(l),l.forEach(d),i=_(n),s=$(n,"DIV",{class:!0});var h=w(s);c=$(h,"DIV",{class:!0});var u=w(c);p=$(u,"SPAN",{class:!0});var y=w(p);f=E(y,ke),y.forEach(d),v=_(u),T=$(u,"SPAN",{class:!0});var g=w(T);I=E(g,Te),g.forEach(d),u.forEach(d),D=_(h),qe&&qe.l(h),A=_(h),L=$(h,"DIV",{class:!0});var m=w(L);S=$(m,"DIV",{class:!0});var x=w(S);q=$(x,"DIV",{class:!0});var b=w(q);B=$(b,"DIV",{class:!0,style:!0}),w(B).forEach(d),N=_(b),P=$(b,"DIV",{class:!0,style:!0});var z=w(P);V=$(z,"DIV",{class:!0});var M=w(V);C=$(M,"SPAN",{class:!0,style:!0}),w(C).forEach(d),M.forEach(d),z.forEach(d),b.forEach(d),x.forEach(d),H=_(m),O=$(m,"DIV",{class:!0});var k=w(O);R=$(k,"SPAN",{class:!0});var te=w(R);U=$(te,"SPAN",{class:!0});var ne=w(U);j=E(ne,Ie),ne.forEach(d),Y=E(te," /\n            "),X=$(te,"SPAN",{class:!0});var oe=w(X);W=E(oe,De),oe.forEach(d),te.forEach(d),F=_(k),J=$(k,"SPAN",{hidden:!0}),w(J).forEach(d),G=_(k),K=$(k,"DIV",{class:!0});var ie=w(K);Q=$(ie,"BUTTON",{type:!0,class:!0});var se=w(Q);Pe.l(se),se.forEach(d),Z=_(ie),ee=$(ie,"DIV",{class:!0});var pe=w(ee);ae=$(pe,"DIV",{class:!0});var he=w(ae);re=$(he,"DIV",{class:!0,style:!0}),w(re).forEach(d),he.forEach(d),pe.forEach(d),ie.forEach(d),le=_(k),ce=$(k,"BUTTON",{type:!0,class:!0});var ue=w(ce);He.l(ue),ue.forEach(d),ve=_(k),be=$(k,"BUTTON",{type:!0,class:!0});var de=w(be);Ue&&Ue.l(de),de.forEach(d),we=_(k),je&&je.l(k),k.forEach(d),m.forEach(d),h.forEach(d),$e=_(n),Ee=$(n,"DIV",{class:!0,style:!0});var ye=w(Ee);_e=$(ye,"OL",{});var fe=w(_e);for(let a=0;a<Xe.length;a+=1)Xe[a].l(fe);fe.forEach(d),ye.forEach(d),n.forEach(d),t.forEach(d),this.h()},h(){b(o,"class","aplayer-pic"),M(o,"background-image","url( "+t[5].cover+" )"),b(p,"class","aplayer-title"),b(T,"class","aplayer-artist"),b(c,"class","aplayer-music"),b(B,"class","aplayer-loaded"),M(B,"width",t[19].bufferPercentage),b(C,"class","aplayer-loading-icon"),M(C,"display",t[21]?"inline":"none"),b(V,"class","aplayer-thumb"),b(P,"class","aplayer-played"),M(P,"width",t[20].playPercentage),b(q,"class","aplayer-bar"),b(S,"class","aplayer-bar-wrap"),b(U,"class","aplayer-ptime"),b(X,"class","aplayer-dtime"),b(R,"class","aplayer-time-inner"),J.hidden=!0,b(Q,"type","button"),b(Q,"class","aplayer-icon aplayer-icon-volume-down"),b(re,"class","aplayer-volume"),M(re,"height",t[1].muted?"0px":t[22].volumePercentage),b(ae,"class","aplayer-volume-bar"),b(ee,"class","aplayer-volume-bar-wrap"),b(K,"class","aplayer-volume-wrap"),b(ce,"type","button"),b(ce,"class","aplayer-icon aplayer-icon-order"),b(be,"type","button"),b(be,"class","aplayer-icon aplayer-icon-loop"),b(O,"class","aplayer-time"),b(L,"class","aplayer-controller"),b(s,"class","aplayer-info"),b(Ee,"class","aplayer-list"),M(Ee,"height",t[16].showList?`${t[18]}px`:"0px"),b(r,"class","aplayer-body "),b(a,"class","aplayer"),k(a,"aplayer-withlrc",t[6].length>0),k(a,"aplayer-withlist",t[4].length>1),k(a,"aplayer-narrow",t[0]),k(a,"aplayer-mobile",te)},m(e,n){u(e,a,n),h(a,r),h(r,o),Se.m(o,null),h(r,i),h(r,s),h(s,c),h(c,p),h(p,f),h(c,v),h(c,T),h(T,I),h(s,D),qe&&qe.m(s,null),h(s,A),h(s,L),h(L,S),h(S,q),h(q,B),h(q,N),h(q,P),h(P,V),h(V,C),C.innerHTML='<svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    version="1.1"\n                    viewBox="0 0 32 32"\n                    ><path\n                      d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"\n                    /></svg\n                  >',t[55](S),h(L,H),h(L,O),h(O,R),h(R,U),h(U,j),h(R,Y),h(R,X),h(X,W),h(O,F),h(O,J),h(O,G),h(O,K),h(K,Q),Pe.m(Q,null),h(K,Z),h(K,ee),h(ee,ae),h(ae,re),t[57](ae),h(O,le),h(O,ce),He.m(ce,null),h(O,ve),h(O,be),Ue&&Ue.m(be,null),h(O,we),je&&je.m(O,null),h(r,$e),h(r,Ee),h(Ee,_e);for(let t=0;t<Xe.length;t+=1)Xe[t].m(_e,null);t[62](Ee),t[63](a),ze||(Me=[x(o,"click",t[54]),x(S,"mousedown",(function(){l(t[13])&&t[13].apply(this,arguments)})),x(S,"mousemove",(function(){l(t[14])&&t[14].apply(this,arguments)})),x(S,"mouseup",(function(){l(t[15])&&t[15].apply(this,arguments)})),x(S,"mouseleave",(function(){l(t[15])&&t[15].apply(this,arguments)})),x(S,"touchstart",(function(){l(t[13])&&t[13].apply(this,arguments)})),x(S,"touchmove",(function(){l(t[14])&&t[14].apply(this,arguments)})),x(S,"touchend",(function(){l(t[15])&&t[15].apply(this,arguments)})),x(Q,"click",t[56],!0),x(ee,"mousedown",(function(){l(t[10])&&t[10].apply(this,arguments)})),x(ee,"mousemove",(function(){l(t[11])&&t[11].apply(this,arguments)})),x(ee,"mouseup",(function(){l(t[12])&&t[12].apply(this,arguments)})),x(ee,"mouseleave",(function(){l(t[12])&&t[12].apply(this,arguments)})),x(ee,"touchstart",(function(){l(t[10])&&t[10].apply(this,arguments)})),x(ee,"touchmove",(function(){l(t[11])&&t[11].apply(this,arguments)})),x(ee,"touchend",(function(){l(t[12])&&t[12].apply(this,arguments)})),x(ce,"click",t[58]),x(be,"click",t[59])],ze=!0)},p(e,r){if(Le!==(Le=Ae(t=e))&&(Se.d(1),Se=Le(t),Se&&(Se.c(),Se.m(o,null))),32&r[0]&&M(o,"background-image","url( "+t[5].cover+" )"),32&r[0]&&ke!==(ke=t[5].name+"")&&z(f,ke),32&r[0]&&Te!==(Te=t[5].artist+"")&&z(I,Te),t[5].lrc?qe?qe.p(t,r):(qe=se(t),qe.c(),qe.m(s,A)):qe&&(qe.d(1),qe=null),524288&r[0]&&M(B,"width",t[19].bufferPercentage),2097152&r[0]&&M(C,"display",t[21]?"inline":"none"),1048576&r[0]&&M(P,"width",t[20].playPercentage),1048576&r[0]&&Ie!==(Ie=t[20].ptime+"")&&z(j,Ie),1048576&r[0]&&De!==(De=t[20].duration+"")&&z(W,De),Ne===(Ne=Be(t))&&Pe?Pe.p(t,r):(Pe.d(1),Pe=Ne(t),Pe&&(Pe.c(),Pe.m(Q,null))),4194306&r[0]&&M(re,"height",t[1].muted?"0px":t[22].volumePercentage),Ce===(Ce=Ve(t))&&He?He.p(t,r):(He.d(1),He=Ce(t),He&&(He.c(),He.m(ce,null))),Re===(Re=Oe(t))&&Ue?Ue.p(t,r):(Ue&&Ue.d(1),Ue=Re&&Re(t),Ue&&(Ue.c(),Ue.m(be,null))),t[4].length>1?je?je.p(t,r):(je=me(t),je.c(),je.m(O,null)):je&&(je.d(1),je=null),131090&r[0]){let e;for(Ye=t[4],e=0;e<Ye.length;e+=1){const a=ne(t,Ye,e);Xe[e]?Xe[e].p(a,r):(Xe[e]=xe(a),Xe[e].c(),Xe[e].m(_e,null))}for(;e<Xe.length;e+=1)Xe[e].d(1);Xe.length=Ye.length}327680&r[0]&&M(Ee,"height",t[16].showList?`${t[18]}px`:"0px"),64&r[0]&&k(a,"aplayer-withlrc",t[6].length>0),16&r[0]&&k(a,"aplayer-withlist",t[4].length>1),1&r[0]&&k(a,"aplayer-narrow",t[0])},i:e,o:e,d(e){e&&d(a),Se.d(),qe&&qe.d(),t[55](null),Pe.d(),t[57](null),He.d(),Ue&&Ue.d(),je&&je.d(),function(e,t){for(let a=0;a<e.length;a+=1)e[a]&&e[a].d(t)}(Xe,e),t[62](null),t[63](null),ze=!1,n(Me)}}}function we(e,a,r){let n,l,o,i,h,u,d,y,f,g,m,v,x,b,w,$,E,_;var z,M;const k=L(),T=S(),I=(e,t)=>{T(e,t),k.dispatchEvent&&k.dispatchEvent(new CustomEvent(e,{detail:t}))},{player:D,playList:A,audioList:q,currentSong:N,rdTime:P,currentTime:V,duration:C,rdBufTime:H,wtBufTime:O,loading:R,lrc:U,controlState:j,volumeState:Y}=function(e){const t=document.createElement("audio");re.push(t),function(e,t){["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"].forEach((a=>{e.addEventListener(a,(e=>{t(a,e)}))}))}(t,e);let a=Q(0),r=Q(NaN);const n=Z([a,r],(([e,t])=>{let a=e/t;return a=Math.max(a,0),a=Math.min(a,1),a*=100,{ptime:ee(e),duration:ee(t),playPercentage:`${a}%`}}));let l=Q(0);const o=Z([l,r],(([e,t])=>{let a=e/t;return a=Math.max(a,0),a=Math.min(a,1),a*=100,{bufferPercentage:`${a}%`,bufTime:e}})),i=Q({playingIndex:0,audio:[]}),s=Z(i,(e=>e.audio)),c=Q({volume:.7,loop:"all",order:"list",showList:!0}),p=Z(c,(e=>({volumePercentage:100*e.volume+"%",muted:0===e.volume}))),h=Z(i,(e=>e.audio[e.playingIndex])),u=Z([o,a],(([{bufTime:e},a])=>!t.paused&&(t.readyState<=HTMLMediaElement.HAVE_CURRENT_DATA||e-a<2&&t.readyState===HTMLMediaElement.HAVE_FUTURE_DATA))),d=Z(h,((e,t)=>{if(!e||!e.lrc)return void t([]);const a=e.lrc;a.startsWith("http")?fetch(a).then((e=>{if(!e.ok)throw new Error(`${e.statusText} canot loading lrc from ${a}`);return e.text()})).then((e=>{t(ae(e))})).catch((e=>{throw t([]),console.error(e),e})):t(ae(a))}),[]);let y=!1;h.subscribe((t=>{y&&e("listswitch",t),y=!0}));let f=!1;return s.subscribe((t=>{f&&e("listchange",t),f=!0})),d.subscribe((t=>{t.length>0?e("lrcshow"):e("lrchide")})),{player:t,playList:i,audioList:s,currentSong:h,rdTime:n,currentTime:a,duration:r,rdBufTime:o,wtBufTime:l,loading:u,lrc:d,controlState:c,volumeState:p}}(I);s(e,A,(e=>r(17,y=e))),s(e,q,(e=>r(4,f=e))),s(e,N,(e=>r(5,g=e))),s(e,P,(e=>r(20,$=e))),s(e,V,(e=>r(66,v=e))),s(e,C,(e=>r(67,x=e))),s(e,H,(e=>r(19,w=e))),s(e,O,(e=>r(68,b=e))),s(e,R,(e=>r(21,E=e))),s(e,U,(e=>r(6,m=e))),s(e,j,(e=>r(16,d=e))),s(e,Y,(e=>r(22,_=e)));let X,{audio:W}=a,{order:F=d.order}=a,{loop:J=d.loop}=a,{volume:G=d.volume}=a,{mini:K=!1}=a,{mutex:te=!0}=a,{autoplay:ne=!1}=a,{theme:le="#fadfa3"}=a,{list_max_height:oe=1/0}=a,ie=!1,{base_font_size:se="12"}=a;const ce=()=>{te&&re.forEach((e=>e.pause())),D.play().catch((e=>{console.error(e)}))};let pe=-1;D.addEventListener("timeupdate",(()=>{if(p(V,v=D.currentTime,v),u.includes("lrc")){for(;pe>0&&D.currentTime<m[pe][0];)r(7,pe--,pe);for(;pe+1<m.length&&D.currentTime>=m[pe+1][0];)r(7,pe++,pe)}})),D.addEventListener("volumechange",(()=>{p(j,d.volume=D.volume,d)})),D.addEventListener("loadedmetadata",(()=>{p(C,x=D.duration,x)})),D.addEventListener("error",(()=>{console.warn("An audio error has occurred, player will skip forward in 2 seconds."),f.length>1&&setTimeout((()=>{p(A,y.playingIndex=(y.playingIndex+1)%f.length,y),D.paused&&ce()}),2e3)}));const he=()=>{const e=D.buffered.length?D.buffered.end(D.buffered.length-1):0;p(O,b=e,b)};D.addEventListener("progress",he),D.addEventListener("canplay",he),D.addEventListener("durationchange",(()=>{p(C,x=D.duration,x)}));let ue,de,ye,fe,ge,me,ve,xe,be,we;var $e;D.addEventListener("ended",(()=>{const e=f,t=(y.playingIndex+1)%e.length;if("none"===d.loop){if("list"===d.order)y.playingIndex<e.length-1?(p(A,y.playingIndex=t,y),r(1,D.currentTime=0,D)):(p(A,y.playingIndex=(y.playingIndex+1)%e.length,y),r(48,X=!0),D.pause());else if("random"===d.order){const a=Math.floor(e.length*Math.random());a===y.playingIndex?p(A,y.playingIndex=t,y):p(A,y.playingIndex=a,y),r(1,D.currentTime=0,D)}}else"one"===d.loop?r(1,D.currentTime=0,D):"all"===d.loop&&p(A,y.playingIndex=t,y)})),$e=()=>{"localhost"===location.hostname&&(window.theAudio=D);const e=function(e,t){let a=!1;return{volumeDragStart:()=>{a=!0},volumeDragMove:r=>{if(a){let a=1-((r.clientY||r.changedTouches[0].clientY)-t.getBoundingClientRect().top)/t.clientHeight;a=Math.max(a,0),a=Math.min(a,1),e.volume=a}},volumeDragEnd:r=>{if(a){let n=1-((r.clientY||r.changedTouches[0].clientY)-t.getBoundingClientRect().top)/t.clientHeight;n=Math.max(n,0),n=Math.min(n,1),e.volume=n,a=!1}}}}(D,ue);r(10,ye=e.volumeDragStart),r(11,fe=e.volumeDragMove),r(12,ge=e.volumeDragEnd);const t=function(e,t){let a=!1;return{progressDragStart:()=>{a=!0},progressDragMove:r=>{if(a){let a=((r.clientX||r.changedTouches[0].clientX)-t.getBoundingClientRect().left)/t.clientWidth;a=Math.max(a,0),a=Math.min(a,1),e.currentTime=e.duration*a}},progressDragEnd:r=>{if(a){a=!1;let n=((r.clientX||r.changedTouches[0].clientX)-t.getBoundingClientRect().left)/t.clientWidth;n=Math.max(n,0),n=Math.min(n,1),e.currentTime=e.duration*n}}}}(D,de);r(13,me=t.progressDragStart),r(14,ve=t.progressDragMove),r(15,xe=t.progressDragEnd),be.addEventListener("transitionend",(()=>{var e;r(18,o=Math.min(null!==(e=null==be?void 0:be.scrollHeight)&&void 0!==e?e:0,oe))}))},L().$$.on_mount.push($e),function(e){L().$$.on_destroy.push(e)}((()=>{I("destroy")}));return e.$$set=e=>{r(73,a=t(t({},a),c(e))),"audio"in e&&r(37,W=e.audio),"order"in e&&r(38,F=e.order),"loop"in e&&r(39,J=e.loop),"volume"in e&&r(40,G=e.volume),"mini"in e&&r(0,K=e.mini),"mutex"in e&&r(41,te=e.mutex),"autoplay"in e&&r(42,ne=e.autoplay),"theme"in e&&r(43,le=e.theme),"list_max_height"in e&&r(44,oe=e.list_max_height),"base_font_size"in e&&r(45,se=e.base_font_size)},e.$$.update=()=>{264256&e.$$.dirty[1]&&(r(48,X=!!ie||!ne),r(49,ie=!0)),64&e.$$.dirty[1]&&r(50,n="string"==typeof W?JSON.parse(W):W),524288&e.$$.dirty[1]&&p(A,y.audio=Array.isArray(n)?n:[n],y),r(51,l=!function(e,t){const a=e[t];return!(null==a||"false"===a)}(a,"list_folded")&&f.length>1),1048576&e.$$.dirty[1]&&p(j,d.showList=l,d),256&e.$$.dirty[1]&&p(j,d.loop=J,d),128&e.$$.dirty[1]&&p(j,d.order=F,d),512&e.$$.dirty[1]&&p(j,d.volume=G,d),4&e.$$.dirty[0]|40960&e.$$.dirty[1]&&r(18,o=Math.min(null!==r(46,z=null==be?void 0:be.scrollHeight)&&void 0!==z?z:0,oe)),512&e.$$.dirty[1]&&r(1,D.volume=G,D),32&e.$$.dirty[0]&&r(1,D.src=g.url,D),32&e.$$.dirty[0]|69632&e.$$.dirty[1]&&r(52,i=null!==r(47,M=g.theme)&&void 0!==M?M:le),16384&e.$$.dirty[1]&&r(53,h=String(se).match(/^\d+/)[0]+"px"),8&e.$$.dirty[0]|6291456&e.$$.dirty[1]&&we&&(we.style.setProperty("--theme-color",i),we.style.setProperty("--base-font-size",h)),64&e.$$.dirty[0]&&(u=m&&m.length>0?"withlrc":""),2&e.$$.dirty[0]|131072&e.$$.dirty[1]&&(D.src,r(7,pe=-1),X||ce(),r(48,X=!1))},a=c(a),[K,D,be,we,f,g,m,pe,ue,de,ye,fe,ge,me,ve,xe,d,y,o,w,$,E,_,I,A,q,N,P,V,C,H,O,R,U,j,Y,ce,W,F,J,G,te,ne,le,oe,se,z,M,X,ie,n,l,i,h,()=>{D.paused?ce():D.pause()},function(e){B[e?"unshift":"push"]((()=>{de=e,r(9,de)}))},()=>{r(1,D.muted=!D.muted,D)},function(e){B[e?"unshift":"push"]((()=>{ue=e,r(8,ue)}))},()=>{p(j,d.order="list"===d.order?"random":"list",d)},()=>{"all"===d.loop?p(j,d.loop="one",d):"one"===d.loop?p(j,d.loop="none",d):"none"===d.loop&&p(j,d.loop="all",d)},()=>{p(j,d.showList=!d.showList,d),d.showList?I("listshow"):I("listhide")},e=>{p(A,y.playingIndex=e,y),r(1,D.currentTime=0,D)},function(e){B[e?"unshift":"push"]((()=>{be=e,r(2,be)}))},function(e){B[e?"unshift":"push"]((()=>{we=e,r(3,we)}))}]}class $e extends G{constructor(e){super(),this.shadowRoot.innerHTML="<style>.aplayer{--base-font-size:12px;--aplayer-height:calc(var(--base-font-size) * 5.5);--lrc-height:calc(calc(var(--base-font-size) + 4px) * 2);--aplayer-height-lrc:calc(var(--aplayer-height) + var(--lrc-height) - 6px);--theme-color:#fadfa3;position:relative;background:#fff;box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);font-family:Arial, Helvetica, sans-serif;margin:5px;overflow:hidden;border-radius:2px;user-select:none;line-height:normal}.aplayer svg{width:100%;height:100%}.aplayer svg path{fill:#fff}.aplayer .aplayer-icon{width:calc(var(--base-font-size) + 3px);height:calc(var(--base-font-size) + 3px);border:none;background-color:transparent;outline:none;cursor:pointer;opacity:0.8;vertical-align:middle;padding:0;font-size:var(--base-font-size);margin:0;display:inline-block}.aplayer .aplayer-icon path{transition:all 0.2s ease-in-out}.aplayer .aplayer-pic{position:relative;float:left;height:var(--aplayer-height);width:var(--aplayer-height);background-color:antiquewhite;background-size:cover;background-position:center;display:flex;justify-content:center;align-items:center;transition:all 0.3s ease;cursor:pointer}.aplayer .aplayer-pic:hover .aplayer-button{opacity:1}.aplayer .aplayer-pic .aplayer-button{position:absolute;border-radius:50%;opacity:0.8;text-shadow:0 1px 1px rgba(0, 0, 0, 0.2);box-shadow:0 1px 1px rgba(0, 0, 0, 0.2);background:rgba(0, 0, 0, 0.2);transition:all 0.1s ease}.aplayer .aplayer-pic .aplayer-play{width:26px;height:26px}.aplayer .aplayer-pic .aplayer-play svg{position:absolute;top:3px;left:4px;height:20px;width:20px}.aplayer .aplayer-pic .aplayer-pause{width:16px;height:16px;border:2px solid #fff;bottom:4px;right:4px}.aplayer .aplayer-pic .aplayer-pause svg{position:absolute;top:2px;left:2px;height:12px;width:12px}.aplayer .aplayer-info{margin-left:var(--aplayer-height);height:var(--aplayer-height);padding:14px 7px 0 10px;box-sizing:border-box}.aplayer .aplayer-info .aplayer-music{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:text;margin:0 0 calc(var(--base-font-size) + 1px) 5px;padding-bottom:2px;cursor:default}.aplayer .aplayer-info .aplayer-music .aplayer-title{font-size:calc(var(--base-font-size) + 2px)}.aplayer .aplayer-info .aplayer-music .aplayer-artist{font-size:var(--base-font-size);color:#666}.aplayer .aplayer-info .aplayer-controller{display:flex;position:relative;align-items:center}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap{flex:1;margin:0 0 0 5px;padding:4px 0;cursor:pointer !important}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap:hover .aplayer-bar .aplayer-played .aplayer-thumb{transform:scale(1)}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar{position:relative;height:2px;width:100%;background:#cdcdcd}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:#aaa;height:2px;transition:all 0.5s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played{position:absolute;left:0;top:0;bottom:0;height:2px;background:var(--theme-color) none repeat scroll 0 0}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:10px;width:10px;border-radius:50%;cursor:pointer;transition:all 0.3s ease-in-out;background:var(--theme-color) none repeat scroll 0 0;transform:scale(0)}.aplayer .aplayer-info .aplayer-controller .aplayer-loading-icon svg{display:block;position:absolute;animation:rotate 1s linear infinite}.aplayer .aplayer-info .aplayer-controller .aplayer-time{position:relative;right:0;bottom:4px;height:calc(var(--base-font-size) + 5px);color:#999;font-size:11px;padding-left:7px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-time-inner{vertical-align:center}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon{cursor:pointer;transition:all 0.2s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon path{fill:#666}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap{display:inline-block;position:relative;margin-left:3px;cursor:pointer}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap:hover .aplayer-volume-bar-wrap{height:40px}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap{position:absolute;bottom:15px;right:-3px;width:25px;height:0;z-index:99;overflow:hidden;transition:all 0.2s ease-in-out}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar{position:absolute;bottom:0;right:10px;width:5px;height:35px;background:#aaa;border-radius:2.5px;overflow:hidden}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume{background:var(--theme-color) none repeat scroll 0 0;position:absolute;bottom:0;right:0;width:5px;transition:all 0.1s ease}.aplayer .aplayer-lrc{display:none;position:relative;height:var(--lrc-height);text-align:center;overflow:hidden;margin:-10px 0 calc(var(--base-font-size) - 5px)}.aplayer .aplayer-lrc p{font-size:var(--base-font-size);color:#666;line-height:calc(var(--base-font-size) + 4px) !important;height:calc(var(--base-font-size) + 4px) !important;padding:0 !important;margin:0 !important;transition:all 0.5s ease-out;opacity:0.4;overflow:hidden}.aplayer .aplayer-lrc p.aplayer-lrc-current{opacity:1;overflow:visible;height:initial !important;min-height:16px}.aplayer .aplayer-lrc .aplayer-lrc-contents{transition:all 0.5s ease-out;width:100%;user-select:text;cursor:default}.aplayer .aplayer-list{transition:all 0.5s ease;will-change:height;display:none;overflow:hidden;list-style-type:none;margin:0;padding:0;overflow-y:auto}.aplayer .aplayer-list ol{list-style-type:none;margin:0;padding:0;overflow-y:auto}.aplayer .aplayer-list li{position:relative;text-align:left;height:calc((var(--base-font-size) + 4px) * 2);line-height:32px;padding:0 15px;font-size:var(--base-font-size);border-top:1px solid #e9e9e9;cursor:pointer;transition:all 0.2s ease;overflow:hidden;margin:0}.aplayer .aplayer-list li:first-child{border-top:none}.aplayer .aplayer-list li:hover{background:#efefef}.aplayer .aplayer-list li .aplayer-list-cur{width:3px;height:calc((var(--base-font-size) + 4px) * 2 - 10px);position:absolute;left:0;top:5px;cursor:pointer;background-color:var(--theme-color)}.aplayer .aplayer-list li .aplayer-list-index{color:#666;margin-right:12px;cursor:pointer}.aplayer .aplayer-list li .aplayer-list-artist{color:#666;float:right;cursor:pointer}.aplayer.aplayer-withlrc .aplayer-pic{height:var(--aplayer-height-lrc);width:var(--aplayer-height-lrc)}.aplayer.aplayer-withlrc .aplayer-info{margin-left:var(--aplayer-height-lrc);height:var(--aplayer-height-lrc);padding:10px 7px 0 7px}.aplayer.aplayer-withlrc .aplayer-lrc{display:block}.aplayer.aplayer-withlist .aplayer-list{display:block}.aplayer.aplayer-narrow{width:var(--aplayer-height)}.aplayer.aplayer-narrow .aplayer-info{display:none}.aplayer.aplayer-narrow .aplayer-list{display:none}.aplayer.aplayer-narrow .aplayer-pic,.aplayer.aplayer-narrow .aplayer-body{height:var(--aplayer-height);width:var(--aplayer-height)}.aplayer.aplayer-mobile .aplayer-icon-volume-down{display:none}@keyframes aplayer-roll{0%{left:0}100%{left:-100%}}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style>",J(this,{target:this.shadowRoot,props:I(this.attributes),customElement:!0},we,be,o,{audio:37,order:38,loop:39,volume:40,mini:0,mutex:41,autoplay:42,theme:43,list_max_height:44,base_font_size:45},[-1,-1,-1]),e&&(e.target&&u(e.target,this,e.anchor),e.props&&(this.$set(e.props),U()))}static get observedAttributes(){return["audio","order","loop","volume","mini","mutex","autoplay","theme","list_max_height","base_font_size"]}get audio(){return this.$$.ctx[37]}set audio(e){this.$set({audio:e}),U()}get order(){return this.$$.ctx[38]}set order(e){this.$set({order:e}),U()}get loop(){return this.$$.ctx[39]}set loop(e){this.$set({loop:e}),U()}get volume(){return this.$$.ctx[40]}set volume(e){this.$set({volume:e}),U()}get mini(){return this.$$.ctx[0]}set mini(e){this.$set({mini:e}),U()}get mutex(){return this.$$.ctx[41]}set mutex(e){this.$set({mutex:e}),U()}get autoplay(){return this.$$.ctx[42]}set autoplay(e){this.$set({autoplay:e}),U()}get theme(){return this.$$.ctx[43]}set theme(e){this.$set({theme:e}),U()}get list_max_height(){return this.$$.ctx[44]}set list_max_height(e){this.$set({list_max_height:e}),U()}get base_font_size(){return this.$$.ctx[45]}set base_font_size(e){this.$set({base_font_size:e}),U()}}customElements.define("s-aplayer",$e);export default $e;
