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
