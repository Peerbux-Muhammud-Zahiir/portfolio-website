document.addEventListener("DOMContentLoaded", function() {
  const typewriterText = ["AI and ML enthusiast", "Hackathon participant", "Aspiring developer"];
  let i = 0;
  let j = 0;
  let currentText = "";
  let isDeleting = false;
  const speed = 150;

  function type() {
    if (i < typewriterText.length) {
      if (!isDeleting && j <= typewriterText[i].length) {
        currentText = typewriterText[i].substring(0, j++);
      }
      if (isDeleting && j <= typewriterText[i].length) {
        currentText = typewriterText[i].substring(0, j--);
      }

      document.querySelector(".typewriter").innerHTML = currentText;

      if (j == typewriterText[i].length) {
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentText = "";
        isDeleting = false;
        i++;
      }

      if (i === typewriterText.length) {
        i = 0;
      }
    }
    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type();
});
