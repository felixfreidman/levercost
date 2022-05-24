let scriptArray = ['Описание', 'Преимущества', 'Выгода'];
var scriptSwiper = new Swiper('#scriptSwiper', {
    fadeEffect: {
        crossFade: true
    },
    swipeHandler: '.swiper-wrapper',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index) {
            return `<span class="dot swiper-pagination-bullet">${scriptArray[index]}</span>`;
        },
    },
    loop: true,
    spaceBetween: 100,
});
var audioSwiper = new Swiper('#audioSwiper', {
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: '3',
});
let roadMapArray = ['Звонок или заявка на сайте', 'Формальности ', 'Внедряем конструктор скриптов Разрабатываем структуру скрипта', 'Подготавливаем обучающий материал для ваших менеджеров', 'Запускаем в работу', 'Сопровождение'];
var roadmapSwiper = new Swiper('#roadmapSwiper', {
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination-new',
        clickable: true,
        renderBullet: function (index) {
            return `<span class="dot swiper-pagination-bullet"><div class="text-content">${roadMapArray[index]}</div><div class="counter">Шаг №${index + 1}</div></span>`;
        },
    },
    navigation: {
        nextEl: '.swiper-button-next-new',
        prevEl: '.swiper-button-prev-new',
    },
    loop: false,
    spaceBetween: 10,
});


