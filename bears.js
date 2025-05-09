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
