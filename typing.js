const words = ["Cloud Engineer", "Software Engineer", "AI/ML Engineer", "Fullstack Developer"];
const typedText = document.getElementById("typed-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const deletingDelay = 60;
const holdDelay = 1200;

let pauseUntil = 0;

function animateTyping(time) {
  if (time < pauseUntil) {
    requestAnimationFrame(animateTyping);
    return;
  }

  const currentWord = words[wordIndex];
  const visibleText = currentWord.slice(0, charIndex);
  typedText.textContent = visibleText;

  if (!isDeleting) {
    if (charIndex < currentWord.length) {
      charIndex++;
      pauseUntil = time + typingDelay;
    } else {
      isDeleting = true;
      pauseUntil = time + holdDelay;
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      pauseUntil = time + deletingDelay;
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      pauseUntil = time + 200;
    }
  }

  requestAnimationFrame(animateTyping);
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(animateTyping);
});
