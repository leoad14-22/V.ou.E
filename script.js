// === Confirmação de presença via WhatsApp ===
const form = document.getElementById('rsvpForm');
const formStatus = document.getElementById('formStatus');
const targetPhone = "(16)99295-5432";

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phoneInput = document.getElementById('phone').value.trim();
  const guests = document.getElementById('guests').value.trim();

  if (!name || !phoneInput || guests === "") {
    formStatus.textContent = 'Por favor, preencha todos os campos.';
    formStatus.style.color = 'red';
    return;
  }

  const message = `
✅ Confirmação de Presença
👤 Nome: ${name}
📞 Telefone: ${phoneInput}
👥 Acompanhantes: ${guests}
  `;

  const url = `https://wa.me/55${targetPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');

  formStatus.textContent = 'Presença confirmada com sucesso! 🎉';
  formStatus.style.color = 'green';

  // Resetar o formulário opcionalmente
  form.reset();
});

// === Contagem regressiva ===
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
