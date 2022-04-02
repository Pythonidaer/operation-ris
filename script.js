let musicOn = false;
let playBtn = document.getElementsByClassName("vaporwave-play");
const audio = document.getElementById("plaza-one");
let playPauseToggle = document.getElementsByClassName("playPauseToggle");

function textToggle() {
  for (let j = 0; j < playPauseToggle.length; j++) {
    playPauseToggle[j].textContent = !musicOn ? "ause" : "lay";
  }
}

function checkMusic() {
  !musicOn ? audio.play() : audio.pause();
  !musicOn ? (musicOn = true) : (musicOn = false);
  textToggle();
}

function vaporPlay() {
  document.addEventListener("keydown", (e) => {
    if (String(e.key) === "Shift") {
      document.addEventListener("keydown", (e) => {
        if (String(e.key) === "P") {
          checkMusic();
        }
      });
    }
  });

  for (let i = 0; i < playBtn.length; i++) {
    playBtn[i].addEventListener("click", () => {
      checkMusic();
    });
  }
}

vaporPlay();
