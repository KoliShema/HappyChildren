/* Happy Children — push-only service worker.
   Deliberately has no fetch handler and no caching: its one job is to
   receive a push and show it. Caching here would risk serving a stale
   app, which is a problem we have already had on the other app. */

self.addEventListener('install',  function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });

self.addEventListener('push', function(event){
  var d = { title: 'Happy Children', body: 'One small thing today.' };
  try { if (event.data) d = Object.assign(d, event.data.json()); } catch (err) {}
  event.waitUntil(
    self.registration.showNotification(d.title, {
      body: d.body,
      icon: 'icon-192.png',
      badge: 'icon-192.png',
      tag: 'hc-daily',
      renotify: false,
      data: { url: d.url || './' }
    })
  );
});

self.addEventListener('notificationclick', function(event){
  event.notification.close();
  var target = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(
    self.clients.matchAll({ type:'window', includeUncontrolled:true }).then(function(list){
      for (var i = 0; i < list.length; i++){
        if (list[i].url.indexOf(target) !== -1 && 'focus' in list[i]) return list[i].focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(target);
    })
  );
});
