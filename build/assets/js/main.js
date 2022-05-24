"use strict";

var scriptArray = ['Описание', 'Преимущества', 'Выгода'];
var scriptSwiper = new Swiper('#scriptSwiper', {
  fadeEffect: {
    crossFade: true
  },
  swipeHandler: '.swiper-wrapper',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function renderBullet(index) {
      return "<span class=\"dot swiper-pagination-bullet\">".concat(scriptArray[index], "</span>");
    }
  },
  loop: true,
  spaceBetween: 100
});
var audioSwiper = new Swiper('#audioSwiper', {
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: '3'
});
var roadMapArray = ['Звонок или заявка на сайте', 'Формальности ', 'Внедряем конструктор скриптов Разрабатываем структуру скрипта', 'Подготавливаем обучающий материал для ваших менеджеров', 'Запускаем в работу', 'Сопровождение'];
var roadmapSwiper = new Swiper('#roadmapSwiper', {
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination-new',
    clickable: true,
    renderBullet: function renderBullet(index) {
      return "<span class=\"dot swiper-pagination-bullet\"><div class=\"text-content\">".concat(roadMapArray[index], "</div><div class=\"counter\">\u0428\u0430\u0433 \u2116").concat(index + 1, "</div></span>");
    }
  },
  navigation: {
    nextEl: '.swiper-button-next-new',
    prevEl: '.swiper-button-prev-new'
  },
  loop: false,
  spaceBetween: 10
}); // // header-swiper
// var swiper = new Swiper('#main-swiper', {
//   fadeEffect: {
//     crossFade: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next--header',
//     prevEl: '.swiper-button-prev--header',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   loop: true,
//   // autoplay: {
//   //   delay: 2300,
//   // },
//   fadeEffect: {
//     crossFade: true
//   },
//   speed: 800,
//   watchSlidesProgress: true,
//   watchVisibility: true,
//   disableOnInteraction: true,
// });