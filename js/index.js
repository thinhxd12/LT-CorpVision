
$(document).ready(function () {
    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position > 200) {
            $('.header').addClass('custom-header');
        }
        else {
            $('.header').removeClass('custom-header');
        }
    });
});

$('.slick-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
});

$('.slick-carousel-feedback').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
});

