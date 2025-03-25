document.addEventListener("DOMContentLoaded", function () {
  const text =
    "Sou Tiago, desenvolvedor dedicado a criar soluções tecnológicas eficientes e de alta qualidade. Vamos trabalhar juntos?";
  const element = document.querySelector(".typing-text");

  let i = 0;

  function typeText() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeText, 50);
    }
  }

  typeText();
});
