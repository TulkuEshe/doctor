$(function() {
  $('.hamburger').click(function() {
    $('.header').addClass('header--active');
    $('.body').addClass('body--no-overflow');
  });
  $('.header').click(function() {
    $('.header').removeClass('header--active');
    $('.body').removeClass('body--no-overflow');
  });
});
