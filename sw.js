const staticSolar = "rps-v1"

const assets = [
    "index.html",
    "css/style.css",
    "js/app.js",
    "images/favicon-32x32.png",
    "images/icon-paper.svg",
    "images/icon-rock.svg",
    "images/icon-scissors.svg",
    "images/logo.svg",
    "images/rps_128x128.png",
    "images/rps_192x192.png",
    "images/rps_256x256.png",
    "images/rps_512x512.png",
]

self.addEventListener("install", installEvent => {
    self.skipWaiting();

    installEvent.waitUntil(
        caches.open(staticSolar).then(cache => {
            console.log("done")
            return cache.addAll(assets)
        }).catch((err) => {
            console.log("err", err)
        })
    )
});

self.addEventListener("activate", activateEvent => {
    activateEvent.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== staticSolar) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});