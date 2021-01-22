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
  
  wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       -100,          // default
    mobile:       true,       // default
    live:         true        // default
  })
  wow.init();

  $(document).on('click', 'a', function(e) {
    const link = $(this).attr('href');

    if (link[0] !== '#') {
      e.preventDefault();

      closeMenu()

      $('.wrapper').removeClass('animate__fadeInUp animate__slower');
      $('.wrapper').addClass('animate__fadeOutUp animate__slow');
      
      $('.wrapper').on('animationend webkitAnimationEnd oAnimationEnd', function () {

        $(location).attr( 'href', link );

      });
    }
  });

  $('.wrapper').on('animationend webkitAnimationEnd oAnimationEnd', function () {
    $('body').removeClass('ov-h');
    return;
  });

  $('.list-social__li').each(function(index) {
    $(this).css('animationDelay', index / 5 + 's');
  });


  function closeMenu() {
    if ($(window).width() < 992) {
      $('.hamburger').removeClass('is-active');
      $('.main-menu').slideUp();  
      $('body').removeClass('ov-h');
    }
  }
});