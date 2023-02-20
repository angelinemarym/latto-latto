(function () {
  const lattos = document.getElementsByClassName("latto");
  const score = document.getElementById("score");
  const sound = document.getElementById("sound");
  const arena = document.querySelector(".arena");

  let speed = 10;
  let rotate = 10;
  let isPlay = false;

  arena.onclick = function () {
    if (isPlay) {
      rotate = 10;
      UpdatePosition();
      sound.pause();
    } else {
      sound.play();
    }

    isPlay = !isPlay;
  };

  function UpdatePosition() {
    lattos[0].style.cssText = `transform: translate(40px, 0) rotate(${rotate}deg);`;
    lattos[1].style.cssText = `transform: translate(-40px, 0) rotate(-${rotate}deg);`;
  }

  function UpdateGame() {
    if (isPlay) {
      rotate += speed;
      UpdatePosition();
    }
  }

  UpdatePosition();
  setInterval(UpdateGame, 10);
})();

//
