self.addEventListener('fetch', (event) => {
  // Pass through all live requests directly to the network server
  event.respondWith(fetch(event.request));
});
