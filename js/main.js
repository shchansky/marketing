$(function () {


  $(".menu a, .go-top").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });





  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',

    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      },
    ]


  });


  // $('.menu__btn').on('click', function(){
  //   $('.menu__list').addClass('menu__list--active');
  // }); //с методом addClass при клике к .menu__list добавляется класс menu__list--active и не исчезает-нам это не подходит






  $('.menu__btn, .menu a').on('click', function () {
    $('.header_top-inner').toggleClass('header_top-inner--active');// toggleClass ---при клике к .header_top-inner добавляется класс header_top-inner--active, при повторном клике menu__list--active исчезает
  });






  var mixer = mixitup('.portfolio__content');

});

