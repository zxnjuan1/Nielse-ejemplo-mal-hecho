const publishBtn = document.getElementById('publishBtn');
const wrongBtn = document.getElementById('wrongBtn');
const statusMessage = document.getElementById('statusMessage');
const helpBtn = document.getElementById('helpBtn');
const errorOverlay = document.getElementById('errorOverlay');
const closeOverlay = document.getElementById('closeOverlay');

publishBtn?.addEventListener('click', () => {
  const postText = document.getElementById('postText');
  if (!postText || postText.value.trim() === '') {
    statusMessage.textContent = 'Estado: no escribiste nada, pero igual no importa';
    return;
  }

  statusMessage.textContent = 'Estado: publicando...';
  setTimeout(() => {
    statusMessage.textContent = 'Estado: no se pudo publicar. inténtalo después.';
    postText.value = '';
  }, 800);
});

wrongBtn?.addEventListener('click', () => {
  statusMessage.textContent = 'Estado: acción desconocida';
});

helpBtn?.addEventListener('click', () => {
  errorOverlay.classList.remove('hidden');
});

closeOverlay?.addEventListener('click', () => {
  errorOverlay.classList.add('hidden');
});

setInterval(() => {
  const statusList = [
    'Error: sin conexión',
    'Error: servidor no responde',
    'Error: no clear description',
    'Actualizando... nunca',
  ];
  statusMessage.textContent = statusList[Math.floor(Math.random() * statusList.length)];
}, 6000);
