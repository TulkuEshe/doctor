window.onload = function(){
  var step = 150;
  $('body').removeClass('preload1');

  setTimeout(function() {
   $('body').removeClass('preload2');
  }, 1000);

  setTimeout(function() {
   $('body').removeClass('preload3');
  }, 3000);


  Draggable.create(".services__list", {
   type:"x",
   edgeResistance:0.9,
   bounds:".services__main",
   throwProps:true,
   onDragEnd: function(e) {
     $('.services__controls').addClass('services__controls--hidden');
     $('.services__line').addClass('nohover');
    }
  });

  function moveServices(offset) {
   TweenMax.to($('.services__list'), 0.5, {
     x: offset + 'px',
     ease: Power0.easeNone
   });
 };

  $('.services__line').hover(function() {
    if (!$(this).hasClass('nohover')) {
      moveServices('-=' + step);
    }
  });

  $('.services__control--left').click(function() {
   moveServices('+=' + step);
  });
  $('.services__control--right').click(function() {
   moveServices('-=' + step);
  });
  var flipTimeout = true;
  function setFlipTimeout() {
    flipTimeout = false;
    setTimeout(function() {
      flipTimeout = true;
    }, 2000);
  }

  $('.services__title').hover(function() {
    var card = $(this).next().find('.card');
    if (!card.hasClass('card--flipped') && flipTimeout) {
      card.addClass('card--flipped');
      setFlipTimeout();
    } else if (flipTimeout) {
      card.removeClass('card--flipped');
      setFlipTimeout();
    }
  });

  $('.services__item').click(function() {
    $('.services__item').removeClass('services__item--active');
    $(this).addClass('services__item--active')
  });
  $('.appointment, .nav__request').click(function() {
    $('.pop-up').addClass('pop-up--active');
    $('.pop-up__item--request').addClass('pop-up__item--active');
    $('.body').addClass('body--no-overflow');
  });
  $('.pop-up__close').click(function() {
    $('.pop-up').removeClass('pop-up--active');
    $('.pop-up__item').removeClass('pop-up__item--active');
    $('.body').removeClass('body--no-overflow');
  })
}
