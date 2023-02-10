const { StaleWhileRevalidate } = require('workbox-strategies')
const { registerRoute } = require('workbox-routing')
const { CacheableResponsePlugin } = require('workbox-cacheable-response')
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute')

precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
  // callback to filter requests to be cache
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
)
