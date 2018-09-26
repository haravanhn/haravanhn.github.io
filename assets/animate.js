$('#menu .dropdown').hover(function () {
  $('.submenu', this).stop().fadeIn("800");
}, function () {
  $('.submenu', this).stop().fadeOut("800");
});

$('ul.nav li.dropdown.mega-dropdown').hover(function () {
  $('.homepage nav.navbar,.bd-hrw nav.navbar,.bodychannel nav.navbar,.coming_retail nav.navbar,.hrp_zalo nav.navbar, .homepage-hrv nav.navbar').addClass('hv');
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
  $('.homepage nav.navbar,.bd-hrw nav.navbar,.bodychannel nav.navbar,.coming_retail nav.navbar,.hrp_zalo nav.navbar,.homepage-hrv nav.navbar').removeClass('hv');
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$('.col-mega-featured').hover(function () {
  $('.col-mega.mg1,.col-mega.mg2,.col-mega.mg3,.col-mega.mg4').css('opacity', '0.5');
}, function () {
  $('.col-mega.mg1,.col-mega.mg2,.col-mega.mg3,.col-mega.mg4').css('opacity', '1');
});