self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('solver2x2').then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'icon-192.jpg',
        'icon-512.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
