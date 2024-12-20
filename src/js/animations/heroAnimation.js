import { gsap } from 'gsap';

export function animateHero() {
  const tl = gsap.timeline();
  
  tl.from('.hero h1', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out'
  })
  .from('.hero h2', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
  .from('.hero .lead', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  .from('.hero .btn-gold', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.4');
}