if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const t=e=>n(e,r),d={module:{uri:r},exports:c,require:t};i[r]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(o(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Cw3qMhV2.css",revision:null},{url:"assets/index-DsbFIBv8.js",revision:null},{url:"index.html",revision:"69f143909ee929214d5a0591aec3d4ca"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icons/android-chrome-192x192.png",revision:"095f19c9af05e8ef1addabd659eb3037"},{url:"icons/android-chrome-512x512.png",revision:"37ca5658c23a060df7476496194357cb"},{url:"icons/apple-touch-icon.png",revision:"b8ba0ae7167bdc4851ee8fef9a673397"},{url:"icons/favicon-16x16.png",revision:"9e1961a459f725160c68d8325dc41678"},{url:"icons/favicon-32x32.png",revision:"4f94163ffd78b37e7675ce128e1a3cba"},{url:"icons/maskable_icon.png",revision:"095f19c9af05e8ef1addabd659eb3037"},{url:"manifest.webmanifest",revision:"e384575e8579f32f60948359eaec1be6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));