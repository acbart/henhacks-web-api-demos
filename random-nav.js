/* random-nav.js — injects a "🎲 Random" button into the top nav bar.
   Works on both the index page (.site-nav) and the detail pages (nav). */
(function () {
  const PAGES = [
    'broadcast-channel.html',
    'canvas.html',
    'chartjs.html',
    'clipboard.html',
    'device-orientation.html',
    'drag-and-drop.html',
    'fetch-api.html',
    'file-system-access.html',
    'fullscreen.html',
    'geolocation.html',
    'idle-detection.html',
    'indexeddb.html',
    'markedjs.html',
    'mediastream.html',
    'page-visibility.html',
    'picture-in-picture.html',
    'qr-scanner.html',
    'qrcode.html',
    'screen-capture.html',
    'sensor-apis.html',
    'summarizer.html',
    'vibrate.html',
    'web-animations.html',
    'web-audio.html',
    'web-crypto.html',
    'web-speech.html',
    'web-storage.html',
    'web-workers.html',
  ];

  function goRandom() {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    var choices = PAGES.filter(function (p) { return p !== current; });
    var pick = choices[Math.floor(Math.random() * choices.length)];
    window.location.href = pick;
  }

  function addButton(nav) {
    var btn = document.createElement('button');
    btn.textContent = '🎲 Random';
    btn.className = 'btn-outline';
    btn.style.cssText = 'margin-left:auto;font-size:0.85rem;padding:6px 14px;cursor:pointer;';
    btn.addEventListener('click', goRandom);
    nav.appendChild(btn);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav.site-nav') || document.querySelector('nav');
    if (nav) addButton(nav);
  });
}());
