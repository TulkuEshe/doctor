$(function() {
  $('.hamburger').click(function() {
    $('.header').addClass('header--active');
  });
  $('.header').click(function() {
    $('.header').removeClass('header--active');
  });
});
