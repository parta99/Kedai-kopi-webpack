// main.js
// import { initScrollToTopButton } from './scrollToTop';

// initScrollToTopButton();
// main.js

const btn = document.getElementById('button');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
