// JavaScript for Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuBars = document.querySelectorAll('.menu-toggle span');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBars.forEach(bar => bar.classList.toggle('active'));
});

// typing effect on the hero section 

document.addEventListener("DOMContentLoaded", () => {
  const textArray = [
    "A Frontend Developer.",
    "An UI/UX Designer.",
    "Passionate about coding :)",
  ]; // Add your phrases here
  const typingSpeed = 100; // Speed of typing (ms per character)
  const erasingSpeed = 50; // Speed of erasing (ms per character)
  const delayBetweenPhrases = 1500; // Delay before starting the next phrase (ms)

  let currentTextIndex = 0; // Tracks the current phrase
  let charIndex = 0; // Tracks the current character in the phrase
  const typewriterElement = document.getElementById("typewriter");

  function typeText() {
    if (charIndex < textArray[currentTextIndex].length) {
      // Add the next character of the current phrase
      typewriterElement.textContent += textArray[currentTextIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      // Pause before erasing
      setTimeout(eraseText, delayBetweenPhrases);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      // Remove the last character of the current phrase
      typewriterElement.textContent = textArray[currentTextIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, erasingSpeed);
    } else {
      // Move to the next phrase and start typing
      currentTextIndex = (currentTextIndex + 1) % textArray.length; // Loop back to the first phrase
      setTimeout(typeText, typingSpeed);
    }
  }

  // Start the typing effect
  typeText();
});

// Dynamically update the year on the footer 

document.addEventListener("DOMContentLoaded", () => {
  const footerYear = document.getElementById("footer-year");
  const currentYear = new Date().getFullYear(); // Get the current year
  footerYear.textContent = currentYear; // Set the year in the footer
});
