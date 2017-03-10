 $(document).ready(function(){

  function openPopup(section) {
    $('.pop-up').removeClass('pop-up--active');
    $(section).addClass('pop-up--active');
    $('body').addClass('body--no-overflow');
  };

  $('.bottom__add').click(function (){
    openPopup('.pop-up--new-review');
  });
  $('.info__item--team').click(function (){
    openPopup('.pop-up--team');
  });
  $('.menu__request').click(function (){
    openPopup('.pop-up--request');
  });
  $('.info__item--blog').click(function (){
   openPopup('.pop-up--blog');
  });

  $('.pop-up__close').click(function (){
    $('.pop-up').removeClass('pop-up--active');
    $('body').removeClass('body--no-overflow');
  });
  $('.info__close').click(function() {
    $(this).parent().addClass('hidden');
  })
});