// Mobile menu toggle
(function () {
  var toggle = document.getElementById('menu-toggle');
  var nav = toggle && toggle.closest('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on link tap (mobile)
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Auto-set the footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
