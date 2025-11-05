// script.js - interactividad básica: filtros y modal de imagen
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.menu-item');
  const menuGrid = document.getElementById('menuGrid');

  // Filtrado por categoría
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      items.forEach(it => {
        if (filter === 'all' || it.dataset.category === filter) {
          it.style.display = '';
          it.animate([{opacity:0, transform:'translateY(8px)'},{opacity:1, transform:'translateY(0)'}], {duration:220, easing:'cubic-bezier(.2,.8,.2,1)'});
        } else {
          it.style.display = 'none';
        }
      });
    });
  });

  // Modal de imágenes
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');
  const viewBtns = document.querySelectorAll('.view-btn');

  viewBtns.forEach(b => {
    b.addEventListener('click', (e) => {
      const src = b.dataset.img || b.getAttribute('data-img');
      const card = b.closest('.menu-item');
      const title = card ? card.querySelector('h3').innerText : '';
      modalImg.src = src;
      document.getElementById('modalCaption').innerText = title;
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.setAttribute('aria-hidden', 'true');
      modalImg.src = '';
    }
  });

  // Click fuera del contenido cierra modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.setAttribute('aria-hidden', 'true');
      modalImg.src = '';
    }
  });
});
