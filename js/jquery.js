$(function () {

    let header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed Header
    checkScroll(scrollOffset);
    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    // Smooth Scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    });

    // Menu nav toggle
    $('#nav__toggle').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active')
        $('#nav').toggleClass('active')
    });

    $('.nav__link').on('click', function (event) {
        event.preventDefault();

        $(this).removeClass('active')
        $('#nav').removeClass('active')
        $('#nav__toggle').removeClass('active')
    });

    // Collapse
    $('[data-collapse]').on('click', function (event) {
        event.preventDefault();


        let $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass('active');
        $('[data-collapse]').not(this).removeClass('active');
    });

    // Slider
    $('[data-slider]').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});