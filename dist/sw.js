if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>n(e,r),t={module:{uri:r},exports:c,require:d};i[r]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Da9j0cgu.js",revision:null},{url:"assets/index-j8JlpMsV.css",revision:null},{url:"index.html",revision:"b1df115959103a434758869a6c6a320d"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icons/android-chrome-192x192.png",revision:"b3e9c3e6c6110e3d19e2262e90a145f6"},{url:"icons/android-chrome-512x512.png",revision:"0325c7378079467e56f0e6502a5841a8"},{url:"icons/apple-touch-icon.png",revision:"8bb23b4ad6f8d6cbb1fc4d23ad10102b"},{url:"icons/favicon-16x16.png",revision:"7dd832770d57804d7cc47a306478761f"},{url:"icons/favicon-32x32.png",revision:"99f7485ba86bb8e0a1b322b34b766c27"},{url:"icons/maskable_icon.png",revision:"0325c7378079467e56f0e6502a5841a8"},{url:"manifest.webmanifest",revision:"ef1f744869389fd47d37b9479f5b0dda"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
