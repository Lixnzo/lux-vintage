import AOS from 'aos';
import { ANIMATION_CONFIG } from '../config/constants.js';
import { vintageCars } from '../data/vintageCars.js';
import { initializeNavbar } from '../components/navbar.js';

// Initialize AOS
AOS.init(ANIMATION_CONFIG);

// Initialize navbar
initializeNavbar();

// Load vintage cars
function loadVintageCars() {
  const container = document.getElementById('vintageCarsGrid');
  
  vintageCars.forEach((car, index) => {
    const carElement = document.createElement('div');
    carElement.className = 'col-lg-4 col-md-6 mb-4';
    carElement.setAttribute('data-aos', 'fade-up');
    carElement.setAttribute('data-aos-delay', (index * 100).toString());
    
    carElement.innerHTML = `
      <div class="car-card">
        <div class="car-image-wrapper">
          <img src="${car.image}" alt="${car.name}" class="car-image">
        </div>
        <div class="car-details">
          <h3>${car.name}</h3>
          <p class="text-muted">${car.year}</p>
          <p>${car.description}</p>
          <p class="car-price">${car.price}</p>
          <button class="btn btn-gold w-100">View Details</button>
        </div>
      </div>
    `;
    
    container.appendChild(carElement);
  });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  loadVintageCars();
  AOS.init({
    duration: 800,
    offset: 100,
    once: true
  });
});