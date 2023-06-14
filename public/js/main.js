/*!

=========================================================
* Design System - v1.1.0
=========================================================


* Copyright 2023 GEDE Juniada
* Licensed ISC

* Coded by @djna911

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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

// toogle
const navbarNav= document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};