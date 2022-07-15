const projectsSlider = new Swiper('.js-partners-slider', {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  navigation: {
    nextEl: '.js-partners-slider-next',
    prevEl: '.js-partners-slider-prev',
    disabledClass: 'nav-btn--disabled'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
  breakpoints: {

    611: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    971: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1281: {
      slidesPerView: 3,
      spaceBetween: 50,
      loopFillGroupWithBlank: true,
    }
  }
});