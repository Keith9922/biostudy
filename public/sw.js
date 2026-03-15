const CACHE_NAME = "biostudy-shell-v1";
const basePath = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const withBasePath = (path) => `${basePath}${path === "/" ? "/" : path}`;
const ASSETS = [
  withBasePath("/"),
  withBasePath("/manifest.webmanifest"),
  withBasePath("/hero-command-center.svg"),
  withBasePath("/mentor-cloud.svg"),
  withBasePath("/offer-radar.svg"),
  withBasePath("/material-governance.svg"),
  withBasePath("/icon.svg"),
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }

            return Promise.resolve(false);
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then((response) => {
        const clonedResponse = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clonedResponse);
        });

        return response;
      });
    }),
  );
});
