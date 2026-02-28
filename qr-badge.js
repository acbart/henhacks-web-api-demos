/* qr-badge.js — auto-generates a QR code linking to the current page.
   Large screens (≥768 px): fixed badge in the bottom-left corner.
   Small screens (<768 px): static badge at the very bottom of the page. */
(function () {
  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #qr-page-badge {
      background: #ffffff;
      border-radius: 10px;
      padding: 8px 8px 4px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.4);
      text-align: center;
      width: 216px;
      line-height: 1;
    }
    #qr-page-badge .qr-label {
      font-size: 0.6rem;
      color: #555;
      margin-top: 4px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    /* Small screens: static, at the bottom of the page */
    #qr-badge-wrapper {
      padding: 24px;
    }
    /* Large screens: fixed in bottom-left corner */
    @media (min-width: 768px) {
      #qr-badge-wrapper {
        position: fixed;
        bottom: 16px;
        left: 16px;
        z-index: 1000;
        padding: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Create wrapper + badge elements
  const wrapper = document.createElement('div');
  wrapper.id = 'qr-badge-wrapper';

  const badge = document.createElement('div');
  badge.id = 'qr-page-badge';

  const codeContainer = document.createElement('div');
  codeContainer.id = 'qr-badge-code';

  const label = document.createElement('div');
  label.className = 'qr-label';
  label.textContent = 'Scan to visit';

  badge.appendChild(codeContainer);
  badge.appendChild(label);
  wrapper.appendChild(badge);
  document.body.appendChild(wrapper);

  // Dynamically load qrcode.js then render
  const script = document.createElement('script');
  // Resolve path relative to this script file
  const scriptSrc = (document.currentScript && document.currentScript.src)
    ? new URL('qrcode.min.js', document.currentScript.src).href
    : 'qrcode.min.js';
  script.src = scriptSrc;
  script.onload = function () {
    new QRCode(codeContainer, {
      text: window.location.href,
      width: 200,
      height: 200,
      colorDark: '#000000',
      colorLight: '#ffffff',
    });
  };
  script.onerror = function () {
    wrapper.style.display = 'none';
  };
  document.head.appendChild(script);
}());
