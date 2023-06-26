



// zooom

$(window).scroll(function() {

  var scroll = $(window).scrollTop();

  $("header").css({
    width: (100 + scroll/6)  +"%",
    top: -(scroll/10)  +"%",
    "-webkit-filter":"blur(" + (scroll/100) +"px)",
    filter:"blur(" + (scroll/100) +"px)"
  });
});




// mouseHover


$(document).ready(function() {
$('.about-image #img').mouseParallax({ moveFactor: 5 });
$('.about-image #img').mouseParallax({ moveFactor: 10 });
$('.about-image #img').mouseParallax({ moveFactor: 15 });

$('.about-image #img').mouseParallax({ moveFactor: 20 });
$('.about-image').height(3000);
});




// wow

 new WOW().init();




$.fn.parallax = function(resistance, mouse) {
  $el = $(this);
  TweenLite.to($el, 0.2, {
    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
    y: -((mouse.clientY - window.innerHeight / 2) / resistance)
  });
};

$(document).mousemove(function(e) {
  $("#img").parallax(-30, e);
  $("#img").parallax(10, e);
  $("#img").parallax(20, e);
  $("#img").parallax(30, e);
  });







//  multi layer hover

$(window).parallaxmouse({
  elms: [
      {el: $('img1'), rate: 0.2},
      {el: $('img2'), rate: 0.2},
      {el: $('img3'), rate: 0.2},
      {el: $('img4'), rate: 0.2},
      {el: $('img5'), rate: 0.2},
      {el: $('img6'), rate: 0.2},
  ]
});




