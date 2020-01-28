importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');


workbox.setConfig({
    debug: false,
  });
  
  // workbox.precaching.precacheAndRoute(self.__precacheManifest, {});   workbox.precaching.precacheAndRoute([]);

  workbox.googleAnalytics.initialize();
  
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'AutiMS-Images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60, 
        }),
      ],
    }),
  );
  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.staleWhileRevalidate({
        cacheName: 'AutiMS-Assets',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
          }),
        ],
      }),
  ); 
  // workbox.routing.registerRoute(
  //   new RegExp('https://res.cloudinary.com/khairahscorner/(.*)'),
  //   workbox.strategies.networkFirst({
  //     cacheName: 'Online-Images',
  //     plugins: [
  //       new workbox.expiration.Plugin({
  //         maxEntries: 30,
  //       }),
  //     ],
  //   }),
  // );