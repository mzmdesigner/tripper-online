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

    // Show More & Show Less Categories » Category Page & Search Page
    if ($('.cat-list').length > 5) {
        $('.cat-list:gt(3)').hide();
        $('.show-more-cat').show();
    }
    $('.show-more-cat').on('click', function() {
        //toggle elements with class .cat-list that their index is bigger than 3
        $('.cat-list:gt(3)').toggle();
        //change text of show more element just for demonstration purposes to this demo
        $(this).text() === '+ Show More' ? $(this).text('- Show less') : $(this).text('+ Show More');
    });

    // Price Range Slider Control
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 100,
        to: 500,
        grid: true,
        prefix: "$",
        skin: "flat",
    });

    // Show More & Show Less Country » Category Page & Search Page
    if ($('.country-list').length > 5) {
        $('.country-list:gt(3)').hide();
        $('.show-more-country').show();
    }
    $('.show-more-country').on('click', function() {
        //toggle elements with class .country-list that their index is bigger than 3
        $('.country-list:gt(3)').toggle();
        //change text of show more element just for demonstration purposes to this demo
        $(this).text() === '+ Show More' ? $(this).text('- Show less') : $(this).text('+ Show More');
    });

    // Show More & Show Less City » Category Page & Search Page
    if ($('.city-list').length > 5) {
        $('.city-list:gt(3)').hide();
        $('.show-more-city').show();
    }
    $('.show-more-city').on('click', function() {
        //toggle elements with class .city-list that their index is bigger than 3
        $('.city-list:gt(3)').toggle();
        //change text of show more element just for demonstration purposes to this demo
        $(this).text() === '+ Show More' ? $(this).text('- Show less') : $(this).text('+ Show More');
    });

    // Trip Slider Settings » Trip Details Page
    $('.trip-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        prevArrow:"<button class='btn btn-primary btn-prev'><i class='icofont-long-arrow-right'></i></button>",
        nextArrow:"<button class='btn btn-primary btn-next'><i class='icofont-long-arrow-left'></i></button>",
    });

    // Datepicker From » Trip Details
    $(function() {
        $( "#datepicker3" ).datepicker();
    });

    // Datepicker To » Trip Details
    $(function() {
        $( "#datepicker4" ).datepicker();
    });

    // Reviews Slider Settings » Trip Details Page
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        prevArrow:"<button class='btn btn-primary btn-prev'><i class='icofont-long-arrow-right'></i></button>",
        nextArrow:"<button class='btn btn-primary btn-next'><i class='icofont-long-arrow-left'></i></button>",
    });

});
