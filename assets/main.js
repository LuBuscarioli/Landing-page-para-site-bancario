const swiper = new Swiper('.top-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    speed: 800,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const midSwiper = new Swiper ('.mid-swiper', {
    // Optional parameters
    loop: true,
    effect: "cards",
    grabCursor: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.mid-btn-next',
      prevEl: '.mid-btn-prev',
    },
  });
