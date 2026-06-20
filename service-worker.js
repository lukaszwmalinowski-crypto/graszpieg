const CACHE_NAME = "szpieg-v58";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./places.js",
  "./manifest.json",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons-lite/player-card-art.jpg",
  "./icons-lite/reveal-agent-card.jpg",
  "./icons-lite/reveal-spy-card.jpg",
  "./icons-lite/reveal-card-back.jpg",
  "./icons-lite/reveal-bg-desktop.jpg",
  "./icons-lite/reveal-bg-mobile.jpg",
  "./icons-lite/cards-table-bg.jpg",
  "./icons-lite/dossier-bg.jpg",
  "./icons-lite/title-screen.jpg",
  "./icons-lite/title-screen-mobile.jpg",
  "./icons-lite/help-screen.jpg",
  "./icons-lite/help-step-1.jpg",
  "./icons-lite/help-step-2.jpg",
  "./icons-lite/help-step-3.jpg",
  "./icons-lite/help-step-4.jpg",
  "./icons-lite/help-step-5.jpg",
  "./icons-lite/round-screen.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
