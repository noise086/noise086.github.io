import $ from 'jquery';


console.log('Hello');



$(function() {
    let menuTop = $('.header__navigation').offset().top;        // запоминаем положение меню
    $(window).scroll(function () {             // отслеживаем событие прокрутки страницы
      if ($(window).scrollTop() > menuTop) {  // если прокрутка дошла до меню
        if ($('.header__navigation').css('position') != 'fixed') {  // проверяем, если меню еще не зафиксировано
          $('.header__navigation').css('position','fixed');  // задаем блоку меню свойство position = fixed
          $('.header__navigation').css('top','0');           // положение в самом верху
          $('.content').css('margin-top','80px'); // делаем отступ, чтобы контент не "скакал" в момент фиксации меню
        }
      } else {                                 // прокрутка страницы обратно вверх достигла место "перехода" меню
        if ($('.header__navigation').css('position') == 'fixed') {  // если меню зафиксировано
          $('.header__navigation').css('position','');
          $('.header__navigation').css('top','');
          $('.content').css('margin-top','');
        }
      }
    });
  });