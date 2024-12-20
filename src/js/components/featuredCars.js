import { featuredCars } from '../data/featuredCars.js';

export function loadFeaturedCars() {
  const container = document.getElementById('featuredCars');
  
  featuredCars.forEach((car, index) => {
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