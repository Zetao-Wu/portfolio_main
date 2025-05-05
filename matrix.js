const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

const engl2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const engl1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = engl2 + engl1 + nums;
const fontSize = 16;

let columns, rainDrops;

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.scale(dpr, dpr);
}

function initializeRain() {
  columns = Math.floor(window.innerWidth / fontSize);
  rainDrops = Array(columns).fill(1);
}

function draw() {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#0F0';
  context.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }

    rainDrops[i]++;
  }
}

resizeCanvas();
initializeRain();
setInterval(draw, 30);

window.addEventListener('resize', () => {
  resizeCanvas();
  initializeRain();
});
