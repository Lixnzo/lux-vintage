export function initializeContactForm() {
  document.getElementById('contactForm')?.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();
  
  const button = e.target.querySelector('button');
  const originalText = button.innerHTML;
  
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  button.disabled = true;
  
  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    button.classList.add('success');
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove('success');
      button.disabled = false;
      e.target.reset();
    }, 2000);
  }, 1500);
}