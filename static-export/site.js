(function () {
  var toggle = document.querySelector('[data-mobile-toggle]');
  var menu = document.querySelector('[data-mobile-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  var aboutToggle = document.querySelector('[data-mobile-about-toggle]');
  var aboutPanel = document.querySelector('[data-mobile-about-panel]');
  if (aboutToggle && aboutPanel) {
    aboutToggle.addEventListener('click', function () {
      var isOpen = aboutPanel.classList.toggle('is-open');
      aboutToggle.classList.toggle('is-open', isOpen);
    });
  }

  var pricing = document.querySelector('[data-pricing]');
  var billingBtns = document.querySelectorAll('[data-billing-btn]');
  if (pricing && billingBtns.length) {
    billingBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var value = btn.getAttribute('data-billing-value');
        pricing.setAttribute('data-billing', value);
        billingBtns.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
      });
    });
  }

  var toast = document.querySelector('[data-booking-toast]');
  var bookBtns = document.querySelectorAll('[data-book-btn]');
  if (toast && bookBtns.length) {
    var hideTimer = null;
    var showToast = function () {
      toast.classList.add('is-open');
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        toast.classList.remove('is-open');
      }, 6000);
    };
    var hideToast = function () {
      toast.classList.remove('is-open');
      if (hideTimer) clearTimeout(hideTimer);
    };
    bookBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        showToast();
        if (btn.hasAttribute('data-mobile-book-btn') && menu && toggle) {
          menu.classList.remove('is-open');
          toggle.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
    var dismissBtn = document.querySelector('[data-booking-toast-dismiss]');
    if (dismissBtn) dismissBtn.addEventListener('click', hideToast);
    var toastLink = document.querySelector('[data-booking-toast-link]');
    if (toastLink) toastLink.addEventListener('click', hideToast);
  }
})();
