// BOOTSTRAP VARS
const bootstrap_sm = '769px';
const bootstrap_md = '992px';


jQuery(document).ready(function ($) {

  //--ALL PAGES--//
  //HAMBURGER
  $('.hamburger').on('click',function () {
    let ham = $(this);
    ham.toggleClass('is-active');
    toggleMenu($, ham);
  });

});

//MENU TOGGLE
function toggleMenu($, ham) {

  let hamOffset       = ham.offset();
  let hamOffsetRight  = ($(window).width() - (hamOffset.left + ham.outerWidth()));
  let hamOffsetBottom = hamOffset.top + ham.outerHeight();
  let headerNav       = $('nav#headerNav');

  if (!headerNav.hasClass('toggled')) {
    headerNav.appendTo('body');
  }

  headerNav.addClass('toggled shadow');

  headerNav
    .toggleClass('is-visible')
    .removeClass('align-items-center d-lg-flex')
    .css('top',hamOffsetBottom)
    .css('right',hamOffsetRight);
}
