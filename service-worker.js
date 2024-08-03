self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/card-arena/index.html',
                '/card-arena/assets/css/style.css',
                '/card-arena/App/config.js',
                '/card-arena/App/main.js',
                '/card-arena/App/races/angels.js',
                '/card-arena/App/races/demons.js',
                '/card-arena/App/races/dwarves.js',
                '/card-arena/App/races/elves.js',
                '/card-arena/App/races/humans.js',
                '/card-arena/App/races/monsters.js',
                '/card-arena/App/races/orcs.js',
                '/card-arena/App/races/vampires.js',
                '/card-arena/assets/img/cards/1.png',
                '/card-arena/assets/img/decks/angels.png',
                '/card-arena/assets/img/decks/demons.png',
                '/card-arena/assets/img/decks/dwarves.png',
                '/card-arena/assets/img/decks/elves.png',
                '/card-arena/assets/img/decks/humans.png',
                '/card-arena/assets/img/decks/monsters.png',
                '/card-arena/assets/img/decks/orcs.png',
                '/card-arena/assets/img/decks/vampires.png',
                '/card-arena/assets/img/images/back.png',
                '/card-arena/assets/img/images/bg.png',
                '/card-arena/assets/img/images/bg0.gif',
                '/card-arena/assets/img/images/bg1.gif',
                '/card-arena/assets/img/images/bg2.gif',
                '/card-arena/assets/img/images/bg3.gif',
                '/card-arena/assets/img/images/bg4.gif',
                '/card-arena/assets/img/images/bg5.gif',
                '/card-arena/assets/img/images/bg6.gif',
                '/card-arena/assets/img/images/bg7.gif',
                '/card-arena/assets/img/images/bg8.gif',
                '/card-arena/assets/img/images/bg9.gif',
                '/card-arena/assets/img/images/bg10.gif',
                '/card-arena/assets/img/images/bg11.gif',
                '/card-arena/assets/img/images/bg12.gif',
                '/card-arena/assets/img/images/bg13.gif',
                '/card-arena/assets/img/images/bg14.gif',
                '/card-arena/assets/img/images/bg15.gif',
                '/card-arena/assets/img/images/bg16.gif',
                '/card-arena/assets/img/images/config.png',
                '/card-arena/assets/img/images/cure.png',
                '/card-arena/assets/img/images/especial.png',
                '/card-arena/assets/img/images/icon.png',
                '/card-arena/assets/img/images/rules.png',
                '/card-arena/assets/img/images/icon-192x192.png',
                '/card-arena/assets/img/images/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
