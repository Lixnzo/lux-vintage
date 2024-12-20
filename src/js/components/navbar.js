let lastScroll = 0;

export function initializeNavbar() {
  window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
  const navbar = document.querySelector('.navbar');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.style.padding = '1.5rem 0';
    navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
  } else if (currentScroll > lastScroll) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
    navbar.style.padding = '1rem 0';
    navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
  }
  
  lastScroll = currentScroll;
}

export function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', handleSmoothScroll);
  });
}

function handleSmoothScroll(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}