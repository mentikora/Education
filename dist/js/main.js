document.addEventListener("DOMContentLoaded",function(){

  $('.top-educational-institutions-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slider-arrow slider-arrow--prev icon-ar-left"></button>',
    nextArrow: '<button class="slider-arrow slider-arrow--next icon-ar-right"></button>',
    dots: true,
    dotsClass: 'slider-dots'
  });

});