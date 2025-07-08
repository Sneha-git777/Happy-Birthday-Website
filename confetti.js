const cake = document.getElementById('cake');
const confettiCanvas = document.querySelector('.confetti');
const ctx = confettiCanvas.getContext('2d');
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confetti = [];

cake.addEventListener('click', () => {
  for (let i = 0; i < 300; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 5 + 2,
      color: 'hsl('+(Math.random() * 360)+ ', 100%, 50%)',
      tilt: Math.random() * 10 - 10,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
    });
  }
  drawConfetti();
});

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.lineWidth = c.r / 2;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 4);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach((c, i) => {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.x += Math.sin(c.d);
    c.tiltAngle += c.tiltAngleIncremental;
    c.tilt = Math.sin(c.tiltAngle) * 15;

    if (c.y > confettiCanvas.height) {
      confetti.splice(i, 1);
    }
  });
  if (confetti.length > 0) {
    requestAnimationFrame(drawConfetti);
  }
}