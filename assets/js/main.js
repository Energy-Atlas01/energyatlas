(function () {
  const scriptReference =
    document.currentScript ||
    document.querySelector('script[src*="assets/js/main.js"]');

  function resolveHomeHref() {
    if (!scriptReference) {
      return 'index.html';
    }

    const rawSrc = scriptReference.getAttribute('src');
    if (!rawSrc) {
      return 'index.html';
    }

    try {
      const scriptUrl = new URL(rawSrc, window.location.href);
      const homeHref = scriptUrl.href.replace(
        /assets\/js\/main\.js(?:\?.*)?$/,
        'index.html'
      );
      return homeHref;
    } catch (error) {
      return 'index.html';
    }
  }

  function updateLogoLinks(homeHref) {
    const logos = document.querySelectorAll('a.logo');
    if (!logos.length) {
      return;
    }

    logos.forEach((logo) => {
      logo.setAttribute('href', homeHref);
    });
  }

  function updateCurrentYear() {
    const yearSpans = document.querySelectorAll('.js-current-year');
    const currentYear = new Date().getFullYear();
    yearSpans.forEach((el) => {
      el.textContent = currentYear;
    });
  }

  const homeHref = resolveHomeHref();
  updateLogoLinks(homeHref);
  updateCurrentYear();
})();
