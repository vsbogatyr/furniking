const swiper = new Swiper('.reviews__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const swiperPreview = new Swiper('.header__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    thumbs: {
        swiper: {
            el: '.header__preview .swiper',
            direction: 'vertical',
            freeMode: true, // при перетаскивании превью ведет себя как при скролле
            slidesPerView: 3,
            spaceBetween: 22, // расстояние между слайдами
            mousewheel: true, // можно прокручивать изображения колёсиком мыши
            breakpoints: { // условия для разных размеров окна браузера
                0: { // при 0px и выше
                    direction: 'horizontal', // горизонтальная прокрутка
                    slidesPerView: 2,
                },

                480: {
                    slidesPerView: 3,

                },

                769: { // при 768px и выше
                    direction: 'vertical', // вертикальная прокрутка
                }
            }
        }
    },

    pagination: {
        el: '.header__dots',
        type: 'bullets',
        bulletClass: 'header__dot',
        clickable: true,
    },
});

//Плавный скролл
$('a[href*="#"]').on('click', function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

// https://derzky.ru/plavnaja-prokrutka-po-jakornym-ssylkam/

// Инициализая секции с которой работаем
let grid = new Isotope('.product__trending', {
    itemSelector: '.product__trending .product__item',
    layoutMode: 'fitRows',
    fitRows: {
        gutter: 30
    }
});

// Работаем с кнопками фильтров
let filterBtn = document.querySelectorAll('.tab__trending .tab__btn');
for (let i = 0; i < filterBtn.length; i++) {
    // Если кликнули по ссылке
    filterBtn[i].onclick = function (click) {
        // Отменяем переход
        click.preventDefault();
        // Получаем значение дата-атрибута кнопки
        let filterData = event.target.getAttribute('data-filter');
        // Применяем фильтрацию элементов в Isotope
        grid.arrange({
            filter: filterData
        });
    };
}