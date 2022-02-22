var app = document.getElementById('tw-subhead');

var typewriter = new Typewriter(app, {
  loop: true,
  deleteSpeed: 5,
});

typewriter
  .pauseFor(1000)
  .typeString('UX/UI designer')
  .pauseFor(1000)
  .deleteChars(14)
  .pauseFor(500)
  .typeString('information architect')
  .pauseFor(1000)
  .deleteChars(21)
  .pauseFor(500)
  .typeString('game designer')
  .pauseFor(1000)
  .deleteChars(13)
  .pauseFor(500)
  .typeString('photographer')
  .pauseFor(1000)
  .deleteChars(12)
  .pauseFor(500)
  .typeString('social media strategist')
  .pauseFor(1000)
  .deleteChars(23)
  .pauseFor(500)
  .typeString('Twitch.tv geek')
  .pauseFor(1000)
  .deleteChars(14)
  .pauseFor(500)
  .typeString('Connect 4 enthusiast')
  .pauseFor(1000)
  .deleteChars(20)
  .pauseFor(500)
  .start();
