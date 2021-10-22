import Swiper from 'swiper'

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    direction: 'horizontal',
    speed: 400,
    spaceBetween: 40,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      },
      920: {
        slidesPerView: 4,
      }
    }
  });