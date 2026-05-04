

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn_select = document.getElementById("horn-select");
  const horn_image = document.querySelector("#expose > img");

  const audio = document.querySelector("audio");

  const volume_control = document.getElementById("volume");
  const volume_icon = document.querySelector("#volume-controls img");

  const play_button = document.querySelector("button");


  //horn dropdown
  horn_select.addEventListener("change", ()=> {
    const value = horn_select.value;

    if (value === "air-horn"){
      horn_image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (value === "car-horn"){
      horn_image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (value === "party-horn"){
      horn_image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  //volume slider
  volume_control.addEventListener("input", () => {
    const value = volume_control.value;

    audio.volume = value/100;

    if (value == 0){
      volume_icon.src = "assets/icons/volume-level-0.svg"
    }
    else if (value < 33){
      volume_icon.src = "assets/icons/volume-level-1.svg"
    }
    else if (value < 67){
      volume_icon.src = "assets/icons/volume-level-2.svg"
    }
    else {
      volume_icon.src = "assets/icons/volume-level-3.svg"
    }
  });

  //play button
  play_button.addEventListener("click", () => {
    audio.play();

    if (horn_select.value === "party-horn"){
      const confetti = new JSConfetti();

      confetti.addConfetti();
    }
  });
}