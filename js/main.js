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
        }
    }
});

//Плавный скролл
$('a[href*="#"]').on('click', function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

// https://derzky.ru/plavnaja-prokrutka-po-jakornym-ssylkam/