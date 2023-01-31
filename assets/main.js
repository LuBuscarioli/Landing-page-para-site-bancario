/* dropdown menu */
let dropBtn = document.querySelectorAll('.dropdown__menu');

dropBtn.forEach((drop) => {
  drop.addEventListener('click', () => {
    drop.classList.toggle("active");
  });
});

/* CARROSSEL JS */
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


/* SLIDER-preço JS */  

let cashVal = document.getElementById('cashback-value');
let cost = document.getElementById('cost');
let cost2 = document.getElementById('cost2');
let slider = document.getElementById('price-slider');
let toggle = document.getElementById('billing');
let percentage = ["5%", "10%", "20%", "25%", "30%"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener('input', () => {
    updateValue();
    cashVal.innerHTML = percentage[slider.value]

    let value = slider.value *25
    
    slider.style.background = `linear-gradient(to right,
        hsl(191, 48%, 55%) 0%,
        hsl(191, 48%, 55%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`
});

toggle.addEventListener('change', () => {
    if (isYearly == false) {
        isYearly = true
    } else {
        isYearly = false
    }
    updateValue();
});

function updateValue () {
    if (isYearly) {
        cost.innerHTML = perMonth[slider.value] * .75
        cost2.innerHTML = perMonth[slider.value] * .75
    } else {
        cost.innerHTML = perMonth[slider.value]
        cost2.innerHTML = perMonth[slider.value]
    }
};