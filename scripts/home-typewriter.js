var app = document.getElementById('home-subhead');

var typewriter = new Typewriter(app, {
  loop: false,
  deleteSpeed: 6,
  delay: 40,
});

typewriter
  .pauseFor(300)
  .typeString('a product designer with a passion for intuitive and accessible design. (•◡•)')
  .pauseFor(1500)
  .deleteChars(6)
  .start();