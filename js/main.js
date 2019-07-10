$(document).ready(function() {
  'use strict';
  var menuBotton = $(".js-burger-icon, .js-close-menu");
  var sugestionBtn = $(".js-sugestion");
  var sugestionBtnClose = $(".js-sugestion-close");
  menuBotton.on("click", function(e) {
    $(".nav-burger_menu").toggleClass("active");
  });
  sugestionBtn.on("click", function(e) {
    $(".hero-container_sigestion").addClass("active");
  });
  sugestionBtnClose.on("click", function(e) {
    $(".hero-container_sigestion").removeClass("active");
  });
});

// two slider
$(window).load(function() {
    $('#main-slider').flexslider({
      animation: "slide",
      customDirectionNav: $(".flex-container a"),
      slideshow: true,
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 15,
      minItems: 3,
      maxItems: 3,
    });
  
    $('#secondary-slider').flexslider({
        animation: 'slide',
        customDirectionNav: $(".flex-container2 a"),
        animationLoop: false,
        itemWidth: 350,
        itemMargin: 37,
        minItems: 3,
        maxItems: 3
    });

    $('#third-slider').flexslider({
        animation: 'slide',
        customDirectionNav: $(".flex-container3 a"),
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 15,
        minItems: 3,
        maxItems: 3
    });

    $('#fourth-slider').flexslider({
        animation: 'slide',
        customDirectionNav: $(".flex-container4 a"),
        animationLoop: false,
        itemMargin: 0,
        minItems: 1,
        maxItems: 1
    });
});

