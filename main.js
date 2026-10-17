// ===== MiraIdeal - Interacciones =====

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animación de entrada al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplicar animación a las cards
document.querySelectorAll('.articulo-card, .categoria-card, .oferta-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Actualizar año en footer automáticamente
const yearEl = document.querySelector('.footer-bottom');
if (yearEl) {
  const currentYear = new Date().getFullYear();
  yearEl.innerHTML = yearEl.innerHTML.replace(/2026/g, currentYear);
}

// Tracking básico de clicks en ofertas (placeholder)
document.querySelectorAll('.btn-oferta').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const oferta = this.closest('.oferta-item');
    const nombre = oferta ? oferta.querySelector('h4').textContent : 'desconocido';
    console.log('Oferta clickeada:', nombre);
    // Aquí se integrará el tracking de afiliados
  });
});
