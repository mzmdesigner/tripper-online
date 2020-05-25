jQuery(document).ready(function($){

    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
    });

    $('.category-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow:"<button class='btn btn-primary btn-prev'><i class='icofont-long-arrow-right'></i></button>",
        nextArrow:"<button class='btn btn-primary btn-next'><i class='icofont-long-arrow-left'></i></button>",
    });

    $(function() {
        $( "#datepicker1" ).datepicker();
    });

    $(function() {
        $( "#datepicker2" ).datepicker();
    });

});