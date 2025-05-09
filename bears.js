// Ursinhos animados
const bearContainer = document.querySelector('.bear-container');
const emojis = ['🧸', '🐻', '🎈'];

function createBear() {
  const bear = document.createElement('div');
  bear.classList.add('bear');
  bear.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  bear.style.left = Math.random() * 100 + 'vw';
  bear.style.animationDuration = 5 + Math.random() * 5 + 's';
  bear.style.fontSize = 24 + Math.random() * 16 + 'px';
  bearContainer.appendChild(bear);
  setTimeout(() => bear.remove(), 10000);
}
setInterval(createBear, 700);

// Contagem regressiva
const countdownEl = document.getElementById('countdown');
const targetDate = new Date('2025-05-30T13:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "É hoje! 💖";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `Faltam ${days}d ${hours}h ${minutes}m ${seconds}s para o grande momento!`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
