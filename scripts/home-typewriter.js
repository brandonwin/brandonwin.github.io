var app = document.getElementById('tw-subhead');

var typewriter = new Typewriter(app, {
  loop: true,
  deleteSpeed: 5,
});

typewriter
  .pauseFor(1000)
  .typeString('product designer')
  .pauseFor(1000)
  .deleteChars(16)
  .pauseFor(500)
  .typeString('people person')
  .pauseFor(1000)
  .deleteChars(13)
  .pauseFor(500)
  .typeString('UX/UI designer')
  .pauseFor(1000)
  .deleteChars(14)
  .pauseFor(500)
  .typeString('game designer')
  .pauseFor(1000)
  .deleteChars(13)
  .pauseFor(500)
  .typeString('Twitch.tv geek')
  .pauseFor(1000)
  .deleteChars(14)
  .pauseFor(500)
  .typeString('Connect 4 lover')
  .pauseFor(1000)
  .deleteChars(20)
  .pauseFor(500)
  .start();
