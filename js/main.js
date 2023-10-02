const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu--open');
});


const swiperone = new Swiper('.feedback__slider', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
  });


  const swipertwo = new Swiper('.sertificates__slider', {
    
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
  });