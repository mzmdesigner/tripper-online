jQuery(document).ready(function($){
    
    // Hero Slider Settings » Home
    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
    });

    // Category Slider Settings » Home
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

    // Popular Trip Slider Settings » Home
    $('.popular-trip-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        prevArrow:"<button class='btn btn-primary btn-prev'><i class='icofont-long-arrow-right'></i></button>",
        nextArrow:"<button class='btn btn-primary btn-next'><i class='icofont-long-arrow-left'></i></button>",
    });

    // Datepicker From » Home
    $(function() {
        $( "#datepicker1" ).datepicker();
    });

    // Datepicker To » Home
    $(function() {
        $( "#datepicker2" ).datepicker();
    });

});
