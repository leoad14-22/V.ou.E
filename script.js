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
});
