// ملف Service Worker لتفعيل التثبيت (Installable PWA)
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activated');
});

self.addEventListener('fetch', (e) => {
    // ترك هذا الحدث فارغاً يكفي لخداع المتصفح وإظهار زر Install
});