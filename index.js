const btn = document.getElementById("btn");
const result = document.getElementById("result");

const SpeechRecognition = webkitSpeechRecognition;
const rec = new SpeechRecognition();
rec.lang = "ru-RU";

btn.addEventListener("click", () => {
  if(!btn.classList.contains("rec")){
    rec.start();
    btn.classList.add("rec");
  }else {
    rec.stop();
    btn.classList.remove("rec");
  }
});

rec.onresult = function(event) {
  const text = event.results[0][0].transcript;
  btn.classList.remove("rec");
  result.textContent = text;
}

const speakBtn = document.querySelector("#speak_btn");
const text = document.querySelector('textarea')

speakBtn.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(text.value)
  speechSynthesis.speak(utterance)
})