import $ from 'jquery';


$(document).ready( function(){
  $(function() {
	let menuTop = $('.header__navigation').offset().top;
	$(window).scroll(function () {
	  	if ($(window).scrollTop() > menuTop) {
			if ($('.header__navigation').css('position') != 'fixed') { 
				$('.header__navigation').css('position','fixed');
				$('.header__navigation').css('top','0'); 
				$('.content').css('margin-top','80px'); 
			}
	  	} else {
			if ($('.header__navigation').css('position') == 'fixed') {
				$('.header__navigation').css('position','');
				$('.header__navigation').css('top','');
				$('.content').css('margin-top','');
				}
	  		}
		});
  });

const hamb = $('.hamburger'),
	  menu = $('.header__menu'), 
	  item = $('.header__item');

hamb.on('click', () => {
	hamb.toggleClass('hamburger_active');
	menu.toggleClass('header__menu_active');
	setTimeout(() => {
		item.toggleClass('header__item_active');
	}, 100);
	});



});