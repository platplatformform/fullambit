  (function titleScroller(text) {
  document.title = text;
  setTimeout(function () {
    titleScroller(text.substr(1) + text.substr(0, 1));
  }, 350);
}("Sitting a little way off, beyond the trees, so as to remain in the full ambit. by Rindon Johnson and Jordan Loeppky-Kolesnik"));
