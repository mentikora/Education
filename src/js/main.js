document.addEventListener("DOMContentLoaded", function(){

  'use strict';

  // mobile menu
  $('.button--menu').on('click', function(){
    var icon = $(this).find('i').toggleClass('is-active');

    $('.header__menu').slideToggle(200);
    $('.header').toggleClass('is-shadow');
  });

  // show form button, mobile
  var consultationForm = $('.consultation-form-wrapper');

  $('.button-show-form').on('click', function(){
    consultationForm.addClass('is-active');

    // hide popup on white bg click/touch
    document.addEventListener('click', function(event){
      if ( $(event.target).closest('.consultation-form').length != 0 || $(event.target).closest('.button-show-form').length != 0) return false;
      consultationForm.removeClass('is-active');
    }, false);
  });

  // directions list
  $('.directions-list-wrapper-inner').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'slider-dots',
          variableWidth: true
        }
      }
    ]
  });

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
