<!-- /////     BACK TO TOP     ///// -->

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.backtotop').fadeIn();
  } else {
    $('.backtotop').fadeOut();
  }
});

$(".backtotop").click(function () { 
    scrollToTopOf("body", 2000); 
});