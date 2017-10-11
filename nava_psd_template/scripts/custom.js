/*
================================================================================
 Custom script to change placeholder value when width <= 475px
================================================================================
*/

var mediaQuery = window.matchMedia("(max-width: 475px)");
var selector = document.getElementById('reservation_input_placeholder');

if (mediaQuery.matches) {

  selector.placeholder = 'Enter your destination';

}

/*
================================================================================
 Custom script for mobile menu
================================================================================
*/

$('.menu_close_button').click(function() {
  $('.mobile_menu').removeClass('active');
  $('body').removeClass('lock');
});

$('.menu_button').click(function() {
  $('.mobile_menu').addClass('active');
  $('body').addClass('lock');
});
