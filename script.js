const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextSlide');
const surpriseBtn = document.getElementById('surpriseButton');

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide++;
  if (currentSlide < slides.length) {
    slides[currentSlide].classList.add('active');
    if (currentSlide === slides.length - 1) {
      nextBtn.style.display = 'none';
      surpriseBtn.style.display = 'inline-block';
    }
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const balloonContainer = document.querySelector('.floating-balloons');
  const totalBalloons = 30;

  for (let i = 0; i < totalBalloons; i++) {
    const balloon = document.createElement('span');
    balloon.className = 'balloon';

    // Random size
    const size = 30 + Math.random() * 30;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.3}px`;

    // Random left position
    balloon.style.left = `${Math.random() * 100}%`;

    // Random speed & delay
    balloon.style.animationDuration = `${10 + Math.random() * 10}s`;
    balloon.style.animationDelay = `${Math.random() * 10}s`;

    balloonContainer.appendChild(balloon);
  }
});

// === Flying Balloons Background ===
document.addEventListener('DOMContentLoaded', () => {
  const balloonContainer = document.querySelector('.floating-balloons');
  const totalBalloons = 30; // Increase for more density

  for (let i = 0; i < totalBalloons; i++) {
    const balloon = document.createElement('span');
    balloon.className = 'balloon';

    // Random pastel color shades
    const hue = Math.floor(Math.random() * 360);
    balloon.style.setProperty('--balloonColor1', `hsl(${hue}, 70%, 80%)`);
    balloon.style.setProperty('--balloonColor2', `hsl(${hue}, 70%, 60%)`);

    // Random size
    const size = 30 + Math.random() * 40; // 30px–70px
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.3}px`;

    // Random horizontal position
    balloon.style.left = `${Math.random() * 100}%`;

    // Random speed & delay
    balloon.style.animationDuration = `${15 + Math.random() * 10}s`;
    balloon.style.animationDelay = `${Math.random() * 10}s`;

    balloonContainer.appendChild(balloon);
  }
});
