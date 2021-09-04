$(document).ready(function(){
  $('.featured-press').slick({
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    nextArrow: $('.slick-next'),
    prevArrow: $('.slick-prev')
  });
});