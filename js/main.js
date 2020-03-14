const span = document.querySelector(".type-writing");
const wordsToType = JSON.parse(span.getAttribute("data-words"));
const cursor = document.querySelector(".cursor");

let wordsIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let timer = 350;

function typing() {
  let currentWordToShow = wordsToType[wordsIndex];
  let theShowedPart = currentWordToShow.substring(0, letterIndex);
  span.innerHTML = `${theShowedPart}`;
  if (!isDeleting) {
    letterIndex++;
    time = timer;
  } else {
    letterIndex--;
    time = timer / 3;
  }
  if (letterIndex > currentWordToShow.length) {
    isDeleting = true;
    time = timer * 10;
  }
  if (letterIndex == 0) {
    isDeleting = false;
    wordsIndex++;
  }
  if (wordsIndex == wordsToType.length) {
    wordsIndex = 0;
  }
  setTimeout(typing, time);
}

typing();

setInterval(() => {
  cursor.classList.toggle("opacity");
}, timer);
