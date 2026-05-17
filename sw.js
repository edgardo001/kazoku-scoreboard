// Incrementar VERSION en cada actualización publicada (semver)
const VERSION = 'kazoku-v1.0.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION).then(c => c.addAll(ASSETS))
  );
  // Toma control sin esperar a que se cierren las pestañas abiertas
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      // Sirve desde caché y actualiza en background (stale-while-revalidate)
      const network = fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          caches.open(VERSION).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => null);
      return cached || network;
    })
  );
});
