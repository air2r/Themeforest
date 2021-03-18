(function ($) {
    "use strict";

    //    Preloader  ======================

    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });
    //    Preloader  ======================


    //  slicknav ====================

    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });

    //  slicknav ====================


    //    sticky nav bar =====================

    var $header = $('#header'),
        $headerHeight = $header.height(),
        $title = $('.title');

    var navScroll = {

        init: function () {
            $(window).on('scroll', function () {
                navScroll.navDrop();
            })
        },

        navDrop: function () {
            var $scrollTop = $(window).scrollTop();

            if ($scrollTop > $headerHeight) {
                $header.addClass('scrolled');
                $title.css('padding-top', '70px');
            } else if ($scrollTop == 0) {
                $header.removeClass('scrolled');
                $title.css('padding-top', '0');
            }

        }
    }

    $(document).ready(function () {
        navScroll.init();
    })
    //    sticky nav bar =====================


    //     Our Doctore Slider Area   ==============

    $('.doctor').owlCarousel({
        smartSpeed: 1000,
        autoplay: true,
        nav: true,
        navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    })
    //     Our Doctore Slider Area   ==============

    //     All Client Slider Area   ==============

    $('.all-client').owlCarousel({
        smartSpeed: 1000,
        autoplay: true,
        nav: false,
        loop: true,
        margin: 10,
        items: 1,
        responsiveClass: true,
    })

    //   scrollTop  =========================

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click =================
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    // scroll body to 0px on click =================

    //   Tab  Actiove =========================
    $(document).ready(function () {
        $('ul.tabs li').click(function () {
            var tab_id = $(this).attr('data-tab');
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })
    })
    //   Tab  Actiove =========================

    //    chat-doctor =====================================

    $(".close-btn").click(function () {
        $(".chat-doctor").fadeOut("slow", function () {
            // Animation complete.
        });
    });

    //    chat-doctor =====================================

})(jQuery);
