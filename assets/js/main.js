(function () {
  const yearSpans = document.querySelectorAll('.js-current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach((el) => {
    el.textContent = currentYear;
  });
})();
