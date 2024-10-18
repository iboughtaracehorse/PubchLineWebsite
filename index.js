let elt = document.querySelectorAll('.sliding-title > *')

anime({
  targets: elt,
  translateX: '-100%',
  duration: 1200,
  easing: 'linear',
  loop: true
});