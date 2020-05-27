$(document).ready(function(){

   // bars action
	$('.nav__btn').on('click', function() {
	
		$(this).toggleClass('nav__btn-active');
		$('.header__menu').slideToggle(400);
	});
   // accordion menu
	$('.header__menu').on('click', function(){
		$(this).slideToggle();
		$('.nav__btn').toggleClass('nav__btn-active');
	});
          // tab link color  
    $('li.tab__item a.tab__link').click(function() {
    $('.contents').removeClass('active');
    $('li.tab__item a.tab__link').removeClass('active');
    $(this).addClass('active');
     // tab action
    var data = $(this).data('menu');  
    $(data).addClass('active');
 
   
   });
    
     $('.menu li.menu__item a.menu__link').click(function(){
      var data = $(this).data('nav');
      var H = $(data).offset().top;
      $('html,body').animate({
        scrollTop: H
      },1000);

     });

    
});