document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-mobile-toggle]');
  var menu = document.querySelector('[data-mobile-menu]');
  var aboutToggle = document.querySelector('[data-mobile-about-toggle]');
  var aboutPanel = document.querySelector('[data-mobile-about-panel]');

  function closeMobileMenu() {
    if (menu) menu.classList.remove('is-open');
    if (toggle) {
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    if (aboutPanel) aboutPanel.classList.remove('is-open');
    if (aboutToggle) aboutToggle.classList.remove('is-open');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    // Match the original component's intent: the mobile menu only ever
    // makes sense below the md breakpoint, so drop it if the viewport
    // crosses into desktop while it happens to be open.
    var desktopQuery = window.matchMedia('(min-width: 768px)');
    desktopQuery.addEventListener('change', function (e) {
      if (e.matches) closeMobileMenu();
    });
  }

  if (aboutToggle && aboutPanel) {
    aboutToggle.addEventListener('click', function () {
      var isOpen = aboutPanel.classList.toggle('is-open');
      aboutToggle.classList.toggle('is-open', isOpen);
    });
  }

  var billingGroup = document.querySelector('[data-billing-group]');
  var pricing = document.querySelector('[data-pricing]');
  if (billingGroup && pricing) {
    var buttons = billingGroup.querySelectorAll('[data-billing-btn]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        pricing.setAttribute('data-billing', btn.getAttribute('data-billing-value'));
        buttons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
      });
    });
  }
});
