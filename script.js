function switchView(view) {
  const isOwner = view === 'owner';
  document.getElementById('btn-owner').classList.toggle('active', isOwner);
  document.getElementById('btn-ally').classList.toggle('active', !isOwner);

  document.getElementById('benefits-owner').classList.toggle('hidden', !isOwner);
  document.getElementById('benefits-ally').classList.toggle('hidden', isOwner);

  const ctaText = document.getElementById('cta-text');
  const ctaButton = document.getElementById('cta-button');

  if (isOwner) {
    ctaText.innerText = '¿List@ para proteger a tu mascota?';
    ctaButton.href = 'https://forms.gle/gJkWfisn9NQEF78M6';
    ctaButton.innerText = '📝 Llena el formulario aquí';
  } else {
    ctaText.innerText = '¿Tienes una veterinaria o petshop? ¡Conviértete en aliado y crece con nosotros!';
    ctaButton.href = 'https://forms.gle/h1PAqgW4zXiwL6976';
    ctaButton.innerText = '🚀 Quiero ser aliado MyPetCare';
  }
}

document.addEventListener('DOMContentLoaded', () => switchView('owner'));