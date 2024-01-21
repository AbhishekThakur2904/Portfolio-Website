var typed = new Typed (".text", {
  strings:["Frontend Developer", "Web Developer", "Computer Science Student"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const navbar = document.querySelector('.navbar');

  menuButton.addEventListener('click', function () {
      navbar.classList.toggle('show');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  if ('ontouchstart' in document.documentElement) {
      // If the device supports touch, add the 'touch' class to the rows
      var rows = document.querySelectorAll('.row');
      rows.forEach(function (row) {
          row.addEventListener('touchstart', function () {
              row.classList.add('touch');
          });
          row.addEventListener('touchend', function () {
              row.classList.remove('touch');
          });
      });
  }
});