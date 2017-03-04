window.onload = function(){
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
     $('.services__list').addClass('services__list--nohover');
    }
 });

 function moveServices(offset) {
   TweenMax.to($('.services__list'), 0.5, {
     x: offset + 'px',
     ease: Power0.easeNone
   });
 }
 var step = 150;

 $('.services__list .services__line').not('.services__list--nohover .services__line').hover(function() {
   moveServices('-=' + step);
 });

 $('.services__control--left').click(function() {
   moveServices('+=' + step);
 });
 $('.services__control--right').click(function() {
   moveServices('-=' + step);
 });

}
