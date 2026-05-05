// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voice_select = document.getElementById("voice-select");
  const text_input = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  const face = document.getElementById("face");

  const synth = window.speechSynthesis;


  let voices =[];

  function populateVoiceList(){
    voices = synth.getVoices();

    voice_select.innerHTML = '<option disabled selected>Select Voice:</option>';

    for (const voice of voices){
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default){
        option.textContent += "- DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);

      voice_select.appendChild(option);
    }
  }

  populateVoiceList();

  if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", () => {
    const text = text_input.value.trim();

    if (!text){
      return;
    }

    const utterThis = new SpeechSynthesisUtterance(text_input.value);

    const selected_option = voice_select.selectedOptions[0];
    const selected_name = selected_option.getAttribute("data-name");

    for (const voice of voices){
      if (voice.name === selected_name){
        utterThis.voice = voice;
      }
    }

    utterThis.onstart = () => {
      face.src = "assets/images/smiling-open.png";
    }
  
    utterThis.onend = () => {
      face.src = "assets/images/smiling.png";
    }
  
    synth.cancel();
    synth.speak(utterThis);
  });
}