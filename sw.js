if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>n(e,r),t={module:{uri:r},exports:c,require:d};i[r]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BDWsSwYj.js",revision:null},{url:"assets/index-Cyv0GPvA.css",revision:null},{url:"index.html",revision:"8346668b03c2f9ddc26ff379f8ad46e2"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icons/android-chrome-192x192.png",revision:"5ca08d770742c8e97788369f217c805f"},{url:"icons/android-chrome-512x512.png",revision:"241010a532d61092772c6391654c9713"},{url:"icons/apple-touch-icon.png",revision:"4256198d76bf226238f2c44b2a8347fd"},{url:"icons/favicon-16x16.png",revision:"be0cf87cd1675a7a9bd4b3a9b875b4c1"},{url:"icons/favicon-32x32.png",revision:"06a8d4437b8100c202a58554bae01ed1"},{url:"icons/maskable_icon.png",revision:"dacf83a4f2d32cd25956663895b55199"},{url:"manifest.webmanifest",revision:"ef1f744869389fd47d37b9479f5b0dda"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
