

$(function () {
    $('.secure-control-owl').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        mouseDrag: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            768: {
                items: 3
            }
        }
    });

    $('.betters-tools-owl').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        mouseDrag: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            768: {
                items: 1,
                navText: ['<img src="img/left-arrow.png"  alt=""/>', '<img src="img/right-arrow.png"  alt=""/>'],
                nav: true
            },
            992: {
                items: 3

            }
        }
    });


    $('.paneladmin-account-owl').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        mouseDrag: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            768: {
                items: 2,
                dots: true
            },
            992: {
                items: 3
            }
        }
    });

    $('.referal-mobile-owl ').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        items: 1,
        nav: false
    });


    $('.trading-buttns-owl').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        mouseDrag: false,
        nav: false,
        responsive: {
            0: {
                items: 1.3
            },
            425: {
                items: 2.3
            },
            575: {
                items: 3.3
            },
            768: {
                items: 4
            },
            992: {
                items: 5

            }
        }
    });

    $('#tab_selector').on('change', function (e) {
        $('.form-tabs li a').eq($(this).val()).tab('show');
    });


    $("#title1").click(function (event) {
        event.preventDefault();
        $("#footer-links1").slideToggle("");
        $("#footer-links2").slideUp("");
        $("#footer-links3").slideUp("");
        $("#title1").addClass("active");
        $("#title2").removeClass("active");
        $("#title3").removeClass("active");
    });
    $("#title2").click(function (event) {
        event.preventDefault();
        $("#footer-links1").slideUp("");
        $("#footer-links2").slideToggle("");
        $("#footer-links3").slideUp("");
        $("#title1").removeClass("active");
        $("#title2").addClass("active");
        $("#title3").removeClass("active");

    });
    $("#title3").click(function (event) {
        event.preventDefault();
        $("#footer-links1").slideUp("");
        $("#footer-links2").slideUp("");
        $("#footer-links3").slideToggle("");
        $("#title1").removeClass("active");
        $("#title2").removeClass("active");
        $("#title3").addClass("active");

    });
    $('.menu-icon a').click(function (e) {
        e.stopPropagation();
        $('.right-menu').addClass("active");
    });
    $('.right-menu').click(function (e) {
        e.stopPropagation();
    });

    $('body,html').click(function (e) {
        $('.right-menu').removeClass('active');
    });

    $('#close').click(function (event) {
        event.preventDefault();
        $('.wrapper').addClass("active");
    });

    $('.trading-buttns-box').click(function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
    });
    $('.anadir-dropdown-box ul li a').click(function (event) {
        event.preventDefault();
        $(this).parent("li").toggleClass("active");
    });
    $('.buy-detail-discount ul li a').click(function (event) {
        event.preventDefault();
        $(this).parent("li").toggleClass("active");
    });
    $(".anadir-dropdown-box").hide();
    $('#anadir-par').click(function (event) {
        event.preventDefault();
        $(".anadir-dropdown-box").slideToggle();
    });

    $("#hidden_row").hide();
    $(".tec-down-arrow").click(function (event) {
        event.preventDefault();
        $(this).parents("tr").next("#hidden_row").slideToggle("");
        $(this).parent("td").toggleClass("active");
    });
    $(".comisiones-btn-dropdown").hide();
    $('.dropdown-slide').click(function (event) {
        event.preventDefault();
        $(this).next(".comisiones-btn-dropdown").slideToggle("");
    });
    $(".dropdown-slide").click(function (e) {
        e.stopPropagation();
    });
    $(".dropdown-menu").click(function (e) {
        e.stopPropagation();
    });

    $(".toggles-class").click(function (event) {
        event.preventDefault();
        $(".news-info-dasktop").toggleClass("active");
    });
    $(".search-class").click(function (event) {
        event.preventDefault();
        $(".news-info-dasktop").toggleClass("active2");
    });
    $(".referal-program-inner-box .mobile-version .card-header").click(function (event) {
        event.preventDefault();
        $(this).next(".referal-program-inner-box .card-boday").slideToggle("active2");
        $(".referal-program-inner-box .mobile-version .card-header").toggleClass("active");
    });

    $(".portfolio-sort-toggle a").click(function (event) {
        event.preventDefault();
        $(".portfolio-sort-mobaile").slideToggle("");
    });

    $("#toggles-class").click(function (event) {
        event.preventDefault();
        $(".socail-network-filter-sidebar").addClass("active");
    });
    $("#toggles-class").click(function (event) {
        event.preventDefault();
        $(".overlay").addClass("active");
    });
    $(".overlay").click(function (event) {
        event.preventDefault();
        $(".socail-network-filter-sidebar").removeClass("active");
        $(".overlay").removeClass("active");
    });
    $("#gear-menu").click(function (event) {
        event.preventDefault();
        $(".Configuration-setting").addClass("active");
    });
    $("#gear-menu").click(function (event) {
        event.preventDefault();
        $(".overlay").addClass("active");
    });
    $(".overlay").click(function (event) {
        event.preventDefault();
        $(".Configuration-setting").removeClass("active");
        $(".overlay").removeClass("active");
    });
    $("#fbaez-menu").click(function (event) {
        event.preventDefault();
        $(".fbaez-sidebar").addClass("active");
        $(".overlay").addClass("active");
    });
    $("#skip-sidbar").click(function (event) {
        event.preventDefault();
        $(".fbaez-sidebar").removeClass("active");
        $(".overlay").removeClass("active");
    });
    $("#fbaez-back").click(function (event) {
        event.preventDefault();
        $(".fbaez-sidebar").removeClass("active");
        $(".overlay").removeClass("active");
    });
    $(".notification-submenu").hide();
    $("#notification-menu").click(function (event) {
        event.preventDefault();
        $(".notification-submenu").slideToggle("");
    });
    if ($(window).width() < 768) {


        $("#notification-menu").click(function (event) {
            event.preventDefault();
            $(".notification-submenu").addClass("active");
            $(".overlay").addClass("active");
        });
        $(".overlay").click(function (event) {
            event.preventDefault();
            $(".notification-submenu").removeClass("active");
            $(".overlay").removeClass("active");
        });

    }





});
jQuery(document).ready(function () {
    jQuery('.scrollbar-inner').scrollbar();
});