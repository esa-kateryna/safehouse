$(function(){

    $('.home__slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });

    $('.service-tabs__side-item').on('click', function(e){
        e.preventDefault();
        $('.service-tabs__side-item').removeClass('service-tabs__side-item--active');
        $(this).addClass('service-tabs__side-item--active');
        $('.service-tabs__content-item').removeClass('service-tabs__content-item--active');
        $($(this).attr('href')).addClass('service-tabs__content-item--active')
    });

});