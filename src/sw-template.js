if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    workbox.routing.registerRoute(
      new RegExp('.+/.+'),
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'characters-data',
        plugins: [
          new workbox.expiration.Plugin({
            // Keep at most 50 entries.
            maxEntries: 50,
            // Don't keep any entries for more than 30 days.
            maxAgeSeconds: 30 * 24 * 60 * 60,
            // Automatically cleanup if quota is exceeded.
            purgeOnQuotaError: true,
          }),
        ],
      })
    );

  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}