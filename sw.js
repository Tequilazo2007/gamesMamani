const CACHE_NAME = 'mamani-cache-v2';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './img/app_icon.webp',
  './audio/bgm_menu.mp3',
  './audio/bgm_mapa.mp3',
  './audio/bgm_combate.mp3',
  './audio/bgm_tienda.mp3',
  './audio/bgm_campamento.mp3',
  './audio/bgm_evento.mp3',
  './audio/bgm_cutscene.mp3',
  './audio/bgm_victoria.mp3',
  './audio/bgm_gameover.mp3',
  './audio/sfx_click.mp3',
  './audio/sfx_ataque.mp3',
  './audio/sfx_escudo.mp3',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
