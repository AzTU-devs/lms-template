// Stub service worker for UniFlow PWA prototype.
// Caches a minimal set of routes for offline demo only — not production-ready.
const CACHE = 'uniflow-v1';
const ASSETS = [
  '/static-mockups/index.html',
  '/static-mockups/student/schedule.html',
  '/static-mockups/student/homework.html',
  '/static-mockups/assets/css/styles.css',
  '/static-mockups/assets/js/app.js',
  '/static-mockups/assets/js/mock-data.js'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
