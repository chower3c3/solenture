(function() {
  var gtmId = 'GTM-NFRVX3R5'; // Replace with your GTM Container ID

  // 1. Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    'event': 'gtm.js'
  });

  // 2. Load GTM script into <head>
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=' + gtmId;
  document.head.appendChild(script);

  // 3. Inject noscript iframe fallback into <body>
  document.addEventListener('DOMContentLoaded', function() {
    var noscript = document.createElement('noscript');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=' + gtmId;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  });
})();
