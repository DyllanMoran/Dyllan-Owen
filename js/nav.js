document.querySelectorAll('.nav-group').forEach(function (group) {
  var label = group.querySelector('.nav-group-label');

  label.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = group.classList.toggle('open');
    label.setAttribute('aria-expanded', isOpen);
  });

  // Use pointerdown to cover both mouse and touch on iOS
  document.addEventListener('pointerdown', function (e) {
    if (!group.contains(e.target)) {
      group.classList.remove('open');
      label.setAttribute('aria-expanded', 'false');
    }
  });
});
