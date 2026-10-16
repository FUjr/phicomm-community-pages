
const CACHE='iotcloud-7b2e89eda40335e7';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DMOisQvP.css","assets/LoginPage-DHrZPu0F.css","assets/App-D2zN551Y.css","assets/AuthShell-g-oslqq2.css","assets/AdminPage-C4CNsL0U.css","assets/index-DXCHV7ol.js","assets/demo-ihPAoOAk.js","assets/LoginPage-Drm4Is7v.js","assets/App-D-8LEVnF.js","assets/RegisterPage-WxWbqka6.js","assets/AuthShell-CRrKEgmD.js","assets/AdminPage-DjWP4Lf6.js","assets/deviceProtocol-DNiAofik.js","assets/ThemeToggle-B2ELaPGe.js"];
const urls=FILES.map(file=>new URL(file,self.registration.scope).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(urls))));
self.addEventListener('message',event=>{if(event.data==='ACTIVATE')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('iotcloud-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const request=event.request;
 const url=new URL(request.url);url.hash='';
 if(request.method!=='GET'||!urls.includes(url.href))return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).catch(()=>caches.open(CACHE).then(cache=>cache.match(new URL('index.html',self.registration.scope).href))));return;
 }
 event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(url.href))||fetch(request)));
});
