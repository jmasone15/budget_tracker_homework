const CACHE_NAME = "staticCache-v1";
const DATA_CACHE_NAME = "dataCache-v1";

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/manifest.webmanifest',
    '/index.js',
    '/db.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

self.addEventListener("install", (evt) => {
    evt.waitUntil(
        caches.open(DATA_CACHE_NAME).then((cache) => {
            cache.add("/api/transaction")
        })
    );

    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll(FILES_TO_CACHE)
        })
    );

    self.skipWaiting();
});