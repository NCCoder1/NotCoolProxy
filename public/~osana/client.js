(()=>{"use strict";var e={925:(e,t,o)=>{o.d(t,{Z:()=>n}),Error,self.__osana$config={bare:`${location.origin}/bare/`,prefix:"/~osana/",codec:{encode:e=>e,decode:e=>e},files:{config:"/~osana/config.js",client:"/~osana/client.js"}};const n=self.__osana$config}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=o(925);function t(t,o){let n={};return"window"in self&&(n=new URL(e.Z.codec.decode(location.pathname.replace(new RegExp(`^${e.Z.prefix}`),"")))),o&&(n=new URL(o)),/^(data|mailto):/.test(t)?t:/^https?:\/\//.test(t)?`${e.Z.prefix}${e.Z.codec.encode(t)}`:/^\/\//.test(t)?`${e.Z.prefix}${e.Z.codec.encode((n.protocol?n.protocol:"https:")+t)}`:n?`${e.Z.prefix}${e.Z.codec.encode(function(e,t){return e.pathname=e.pathname.replace(/[^/]+?\.[^/]+?$/,""),/^\//.test(t)?e.origin+t:/^\.\//.test(t)?e.href.replace(/\/$/,"")+t.replace(/^\./,""):/^\.\.\//.test(t)?e.href.replace(/\/[^/]+?\/?$/,"")+t.replace(/^\.\./,""):e.href.replace(/\/?$/,"/")+t}(n,t))}`:t}function n(t){if(!t)return t;let o;return o=/^https?:\/\//.test(t)?new URL(e.Z.codec.decode(new URL(t).pathname.replace(new RegExp(`^${e.Z.prefix}`),""))):new URL(e.Z.codec.decode(t.replace(new RegExp(`^${e.Z.prefix}`),""))),o.href}const r={href:[HTMLAnchorElement,HTMLLinkElement,HTMLAreaElement,HTMLBaseElement],src:[HTMLAudioElement,HTMLEmbedElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLScriptElement,HTMLSourceElement,HTMLTrackElement,HTMLVideoElement],srcset:[HTMLImageElement,HTMLSourceElement],action:[HTMLFormElement]},c=Object.getOwnPropertyDescriptor(Element.prototype,"setAttribute").value,a=Object.getOwnPropertyDescriptor(Element.prototype,"getAttribute").value;function i(t){try{let o=new URL(e.Z.codec.decode(location.pathname.replace(new RegExp(`^${e.Z.prefix}`),"")));return t&&(o.href=new URL(e.Z.codec.decode(t.location.pathname.replace(new RegExp(`^${e.Z.prefix}`),"")))),o.ancestorOrigins={length:0},o.assign=t=>location.assign(e.Z.prefix+e.Z.codec.encode(t)),o.reload=()=>location.reload(),o.replace=t=>location.replace(e.Z.prefix+e.Z.codec.encode(t)),o.toString=()=>o.href,o}catch(e){return{}}}Element.prototype.setAttribute=function(e,o){if(r[e])for(let n in r[e])if(this instanceof r[e][n])return void c.apply(this,[e,t(o)]);if(void 0===e||void 0===o)throw new TypeError(`Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only ${e||o?1:0} present.`);c.apply(this,[e,o])},Element.prototype.getAttribute=function(e){if(r[e])for(let t in r[e])if(this instanceof r[e][t])return n(a.apply(this,[e]));if(void 0===e)throw new TypeError("Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.");return a.apply(this,[e])},Object.keys(r).forEach((e=>{r[e].forEach((o=>{try{if(["href","src","srcset","action"].includes(e)){const{set:r,get:c}=Object.getOwnPropertyDescriptor(o.prototype,e);Object.defineProperty(o.prototype,e,{get(){return n(c.call(this))},set(e){return r.call(this,[t(e)])}})}}catch(e){}}))})),window.Location=class{};class s{constructor(t){return new Proxy(new Location,{get:(e,o,n)=>i(t)[o],set(o,n,r){console.log(n);let c=i(t);return c[n]=r,location.pathname=e.Z.prefix+e.Z.codec.encode(c.href),c[n]}})}}const p=new s;function l(e){return new Proxy({getItem:t=>e.getItem(`${t}@${p.host}`),setItem(t,o){e.setItem(`${t}@${p.host}`,o)},removeItem(t){e.removeItem(`${t}@${p.host}`)},clear(){Object.keys(e).forEach((e=>{new RegExp(`@${p.host}$`).test(e)&&this.removeItem(e.replace(new RegExp(`@${p.host}$`),""))}))}},{get:(t,o,n)=>"length"===o?Object.keys(e).filter((e=>new RegExp(`@${p.host}$`).test(e))).length:["getItem","setItem","removeItem","clear"].includes(o)?t[o]:t.getItem(o),set:(e,t,o)=>e.setItem(t,o)})}const w=indexedDB.open;if(indexedDB.open=(e,t)=>w.call(indexedDB,`${e}@${p.host}`,t),openDatabase){const e=openDatabase;openDatabase=(t,o,n,r)=>e(`${t}@${p.host}`,o,n,r)}window.__localStorage=l(localStorage),window.__sessionStorage=l(sessionStorage);const d=new Proxy(fetch,{apply:(e,o,n)=>(n[0]&&(n[0]=t(n[0])),Reflect.apply(e,o,n))}),f=new Proxy(window.history.pushState,{apply(e,o,n){n[2]=t(n[2]),Reflect.apply(e,o,n)}}),u=new Proxy(window.history.replaceState,{apply(e,o,n){console.log((new Error).stack),n[2]=t(n[2]),Reflect.apply(e,o,n)}});class h{constructor(e){return new Proxy(e,{get(t,o,n){return t[o]&&t[o].toString&&"function"==typeof t[o]&&/{ \[native code\] }/.test(t[o].toString())&&!["Symbol","Number","setTimeout","setInterval","parseFloat","parseInt","fetch"].includes(o)?"class"==("function"==typeof(r=t[o])?r.prototype?Object.getOwnPropertyDescriptor(r,"prototype").writable?"function":"class":"AsyncFunction"===r.constructor.name?"async":"arrow":"")?class extends t[o]{constructor(...e){super(...e)}}:function(){return e[o].apply(window,arguments)}:"location"===o?new s(t):["parent","top"].includes(o)?window===window[o]?window.__window:new h(t[o]):["window","self","globalThis"].includes(o)?new h(t):"localStorage"===o?window.__localStorage:"sessionStorage"===o?window.__sessionStorage:t[o];var r},set:(t,o,n)=>e[o]=n})}}const g=new h(window),m=window.XMLHttpRequest.prototype.open,y=new Proxy(Request,{construct:(o,n)=>(n[0]&&(n[0]=t(n[0])),new Proxy(Reflect.construct(o,n),{get:(t,o,n)=>"url"===o?new URL(e.Z.codec.decode(location.pathname.replace(new RegExp(`^${e.Z.prefix}`),""))).href:t[o]}))}),x=new Proxy(navigator.sendBeacon,{apply:(e,o,n)=>(n[0]&&(n[0]=t(n[0])),Reflect.apply(e,o,n))});window.fetch=d,window.Request=y,window.history.pushState=f,window.history.replaceState=u,window.__parent=g.parent,window.__top=g.top,window.__window=g,window.__location=p,window.__self=g,window.XMLHttpRequest.prototype.open=function(...e){return e[1]=t(e[1]),m.call(this,...e)},navigator.sendBeacon=x})()})();