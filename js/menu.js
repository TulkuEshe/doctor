$(function() {

  function openMenu() {
    $('.header').addClass('header--active');
    $('.call__wrap').addClass('call__wrap--active');
    $('.body').addClass('body--no-overflow');
  }
  function closeMenu(ev) {
    $('.header').removeClass('header--active');
    $('.call__wrap').removeClass('call__wrap--active');
    if (!ev.target.classList.contains('menu__request')) {
      $('.body').removeClass('body--no-overflow');
    }
  }

  $('.hamburger').click(function(ev) {
    if ($('.header').hasClass('header--active')) {
      closeMenu(ev);
    } else {
      openMenu()
    }
  });
  $('.header:not(.header .menu__link)').click(function(ev) {
    // ev.preventDefault();
    // console.log(ev.target)
    // console.log()
    closeMenu(ev);

  });
});
