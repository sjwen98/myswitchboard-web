// Keeps the contact address out of the page's static HTML/view-source so
// basic scrapers scanning for "mailto:" or an @ pattern don't pick it up.
// Assembled client-side from split data attributes instead.
document.querySelectorAll('.mail-link').forEach(function (el) {
  var addr = el.dataset.user + '@' + el.dataset.domain;
  el.href = 'mailto:' + addr;
  if (el.dataset.showAddress === 'true') el.textContent = addr;
});
