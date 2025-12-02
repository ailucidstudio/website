// AILucid Studio - Main JavaScript
// Global functionality and utilities

// Clean URL redirect - remove index.html from URLs
if (window.location.pathname.endsWith('/index.html')) {
  const cleanPath = window.location.pathname.replace('/index.html', '/');
  window.history.replaceState({}, '', cleanPath + window.location.search + window.location.hash);
}

// Email modal functionality
const emailModal = {
  email: 'contact@ailucidstudio.com',
  
  init() {
    this.createModal();
    this.attachListeners();
  },
  
  createModal() {
    const modal = document.createElement('div');
    modal.id = 'emailModal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" onclick="emailModal.close()">&times;</button>
        <h2>Contacto</h2>
        <p class="lead">Escríbenos a:</p>
        <p class="text-spaced" style="text-align: center; cursor: pointer;" onclick="emailModal.copyEmail()">
          ${this.email}
        </p>
        <div class="cta-row">
          <button class="btn primary" onclick="emailModal.copyEmail()">Copiar email</button>
          <a href="mailto:${this.email}" class="btn">Abrir Gmail</a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },
  
  open() {
    const modal = document.getElementById('emailModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },
  
  close() {
    const modal = document.getElementById('emailModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  },
  
  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      alert('Email copiado al portapapeles!');
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  },
  
  attachListeners() {
    // Close modal on background click
    document.addEventListener('click', (e) => {
      const modal = document.getElementById('emailModal');
      if (e.target === modal) {
        this.close();
      }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }
};

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  emailModal.init();
  initSmoothScroll();
  
  // Add active class to current nav item
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
      link.style.color = 'var(--primary)';
    }
  });
});

// Utility functions
const utils = {
  // Copy text to clipboard
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copiado al portapapeles!');
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  },
  
  // Open email client
  openEmail(email) {
    window.location.href = `mailto:${email}`;
  },
  
  // Debounce function for performance
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};