import AOS from 'aos';
import { ANIMATION_CONFIG } from '../config/constants.js';
import { validateEmail, validatePassword, getPasswordStrength } from '../utils/validation.js';
import { setAuthToken, setRememberMe, getRememberedEmail } from '../utils/storage.js';
import { initializeNavbar } from '../components/navbar.js';

// Initialize AOS
AOS.init(ANIMATION_CONFIG);

// Initialize navbar
initializeNavbar();

// Handle login form submission
const loginForm = document.getElementById('loginForm');
loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  if (!validateEmail(email)) {
    showError('email', 'Please enter a valid email address');
    return;
  }

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (rememberMe) {
      setRememberMe(email);
    }
    
    // Simulate successful login
    setAuthToken('dummy-token');
    window.location.href = '/';
  } catch (error) {
    showError('general', 'Invalid credentials');
  }
});

// Handle password visibility toggle
const togglePassword = document.querySelector('.toggle-password');
togglePassword?.addEventListener('click', function() {
  const password = document.getElementById('password');
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.querySelector('i').classList.toggle('fa-eye');
  this.querySelector('i').classList.toggle('fa-eye-slash');
});

// Handle registration form
const registerForm = document.getElementById('registerForm');
registerForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = e.target.querySelector('input[type="password"]').value;
  
  if (!validatePassword(password)) {
    showError('register-password', 'Password does not meet requirements');
    return;
  }
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Close modal and show success message
    const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    modal.hide();
    showSuccess('Registration successful! Please check your email to verify your account.');
  } catch (error) {
    showError('register-general', 'Registration failed. Please try again.');
  }
});

// Handle forgot password form
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
forgotPasswordForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  if (!validateEmail(email)) {
    showError('forgot-email', 'Please enter a valid email address');
    return;
  }
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Close modal and show success message
    const modal = bootstrap.Modal.getInstance(document.getElementById('forgotPasswordModal'));
    modal.hide();
    showSuccess('Password reset link has been sent to your email.');
  } catch (error) {
    showError('forgot-general', 'Failed to send reset link. Please try again.');
  }
});

// Show error message
function showError(field, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger mt-2';
  errorDiv.textContent = message;
  
  const input = document.querySelector(`[data-field="${field}"]`);
  if (input) {
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
    setTimeout(() => errorDiv.remove(), 3000);
  }
}

// Show success message
function showSuccess(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
  successDiv.style.zIndex = '1050';
  successDiv.textContent = message;
  
  document.body.appendChild(successDiv);
  setTimeout(() => successDiv.remove(), 3000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  // Check for remembered email
  const rememberedEmail = getRememberedEmail();
  if (rememberedEmail) {
    document.getElementById('email').value = rememberedEmail;
    document.getElementById('rememberMe').checked = true;
  }
  
  // Initialize password strength meter
  const passwordInput = document.querySelector('#registerForm input[type="password"]');
  passwordInput?.addEventListener('input', (e) => {
    const strength = getPasswordStrength(e.target.value);
    const strengthMeter = document.querySelector('.password-strength');
    if (strengthMeter) {
      strengthMeter.innerHTML = `
        <div class="progress" style="height: 5px;">
          <div class="progress-bar bg-${getStrengthColor(strength)}" 
               style="width: ${(strength / 5) * 100}%"></div>
        </div>
        <small class="text-${getStrengthColor(strength)} mt-1 d-block">
          ${getStrengthText(strength)}
        </small>
      `;
    }
  });
});

// Helper functions for password strength
function getStrengthColor(strength) {
  if (strength <= 2) return 'danger';
  if (strength <= 3) return 'warning';
  if (strength <= 4) return 'info';
  return 'success';
}

function getStrengthText(strength) {
  if (strength <= 2) return 'Weak';
  if (strength <= 3) return 'Fair';
  if (strength <= 4) return 'Good';
  return 'Strong';
}