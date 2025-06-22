self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.mode === 'navigate' && req.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then(resp => resp.text())
        .then(html => {
          const injected = html.replace('</body>', '<script src="/examples.js"></script></body>');
          return new Response(injected, { headers: resp.headers });
        })
    );
  }
});
