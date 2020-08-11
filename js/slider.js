$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5500,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    slideTransition: '',
    items: 1,
    nav: false,
    dots: true,

    responsive: {
      600: {
        items: 1
      }
    }
  });
});

