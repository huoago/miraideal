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
    e.preventDefault();
    const oferta = this.closest('.oferta-item');
    const nombre = oferta ? oferta.querySelector('h4').textContent : 'esta oferta';
    
    // Mostrar toast de que el enlace se activará pronto
    showToast(`🔗 Estamos configurando nuestros enlaces de afiliados. Pronto podrás ver la oferta de "${nombre}" directamente en la tienda.`);
    
    console.log('Oferta clickeada:', nombre);
  });
});

// ===== Toast Notification =====
function showToast(message) {
  // Crear toast si no existe
  let toast = document.getElementById('miraToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'miraToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: #2D3436;
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      font-size: 14px;
      max-width: 90%;
      z-index: 1000;
      transition: transform 0.3s ease;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      line-height: 1.5;
    `;
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.style.transform = 'translateX(-50%) translateY(0)';
  
  // Ocultar después de 4 segundos
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, 4000);
}

// ===== Back to Top Button =====
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.innerHTML = '↑';
backToTopBtn.setAttribute('aria-label', 'Volver arriba');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
