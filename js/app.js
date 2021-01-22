$(function() {
  $('.testimonials__slider').slick({
    dots: false,
    appendArrows: $('.testimonials__nav'),
    prevArrow: `<button type="button" class="slick-prev slick-arrow"><svg><use href="img/slider/sprite.svg#prev"></use></svg></button>`,
    nextArrow: `<button type="button" class="slick-next slick-arrow"><svg><use href="img/slider/sprite.svg#next"></use></svg></button>`,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
  });

  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('.main-menu').slideToggle();  
    $('body').toggleClass('ov-h');
	});
});