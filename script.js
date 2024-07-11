document.addEventListener('DOMContentLoaded', function() {
    const texts = [
      "Welcome to My Portfolio",
      "Computer Science student",
      "Aspiring Software Developer",
      "Passionate about Technology"
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    const typewriterElement = document.querySelector('.typewriter');
    
    function type() {
      if (currentCharIndex < texts[currentTextIndex].length) {
        typewriterElement.textContent += texts[currentTextIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 100); // Adjust typing speed here
      } else {
        setTimeout(erase, 2000); // Adjust delay before erasing here
      }
    }
    
    function erase() {
      if (currentCharIndex > 0) {
        typewriterElement.textContent = texts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here
      } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(type, 500); // Adjust delay before typing next text here
      }
    }
    
    type();
  });
  