document.addEventListener("DOMContentLoaded", function(){

  'use strict';

  // institutes slider
  $('.top-educational-institutions-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slider-arrow slider-arrow--prev icon-ar-left"></button>',
    nextArrow: '<button class="slider-arrow slider-arrow--next icon-ar-right"></button>',
    dots: true,
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // camps slider
  $('.camps-row').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'slider-dots',
          arrows: true,
          prevArrow: '<button class="slider-arrow slider-arrow--prev icon-ar-left"></button>',
          nextArrow: '<button class="slider-arrow slider-arrow--next icon-ar-right"></button>',
          variableWidth: true,
          centerMode: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'slider-dots',
          arrows: true,
          prevArrow: '<button class="slider-arrow slider-arrow--prev icon-ar-left"></button>',
          nextArrow: '<button class="slider-arrow slider-arrow--next icon-ar-right"></button>',
          variableWidth: true,
          centerMode: true,
          centerPadding: '60px',
        }
      }
    ]
  });

});
