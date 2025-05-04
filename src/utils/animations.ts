// This file will be used to initialize the AOS (Animate On Scroll) library
// and any other animation-related utilities

import { useEffect } from 'react';
import { useInView } from './hooks';

// Type for element animation options
export interface AnimationOptions {
  delay?: number;
  duration?: number;
  easing?: string;
  once?: boolean;
}

// Initialize animations
export const initializeAnimations = () => {
  // This is a placeholder for AOS or other animation library initialization
  // Since we're not importing an actual animation library, we'll use
  // custom intersection observer animations
  
  const animateElements = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach((el) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('aos-animate');
            
            // If once is true, stop observing
            if (el.getAttribute('data-aos-once') === 'true') {
              observer.unobserve(el);
            }
          } else {
            if (el.getAttribute('data-aos-once') !== 'true') {
              el.classList.remove('aos-animate');
            }
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      });
      
      observer.observe(el);
    });
  };
  
  // Add animation classes
  document.documentElement.classList.add('aos-init');
  
  // Add base styles if they don't exist
  if (!document.getElementById('aos-styles')) {
    const style = document.createElement('style');
    style.id = 'aos-styles';
    style.innerHTML = `
      [data-aos] {
        opacity: 0;
        transition-property: opacity, transform;
        transition-duration: 0.8s;
        transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      [data-aos].aos-animate {
        opacity: 1;
        transform: translateZ(0);
      }
      
      [data-aos="fade-up"] {
        transform: translate3d(0, 40px, 0);
      }
      
      [data-aos="fade-down"] {
        transform: translate3d(0, -40px, 0);
      }
      
      [data-aos="fade-right"] {
        transform: translate3d(-40px, 0, 0);
      }
      
      [data-aos="fade-left"] {
        transform: translate3d(40px, 0, 0);
      }
      
      [data-aos="zoom-in"] {
        transform: scale(0.9);
      }
      
      [data-aos="zoom-out"] {
        transform: scale(1.1);
      }
    `;
    document.head.appendChild(style);
  }
  
  // Initialize on load
  window.addEventListener('load', animateElements);
  
  // Also call on resize to catch any new elements
  window.addEventListener('resize', animateElements);
  
  return animateElements;
};

// Hook to use animations in components
export const useAnimations = () => {
  useEffect(() => {
    const animate = initializeAnimations();
    animate();
    
    return () => {
      window.removeEventListener('load', animate);
      window.removeEventListener('resize', animate);
    };
  }, []);
};