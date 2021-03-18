(function ($) {
    "use strict";


    /*================================
        Preloader
        ==================================*/
    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // WOW JS init
    new WOW().init();
    /*================================
       slicknav
       ==================================*/
    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });
    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            mainHeader = $('header');

        if (scroll > 1) {
            mainHeader.addClass("black");
        } else {
            mainHeader.removeClass("black");
        }
    });
    
    //isotop filtering
    $('#container').imagesLoaded(function () {
        $('.filter-button-group').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        })
    });
    // filtering li active
    $('.myBtn').on("click", function () {
        if ($(this).hasClass('active-btn')) {
            $(this).removeClass('active-btn');
        } else {
            $(this).addClass('active-btn');
            $(this).siblings().removeClass('active-btn');
        }
    });

    // Image gallery
    $(".light-box").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    // Popup
    $('.play-btn').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });
    // // Collapsible 
    var collapsedBtn = $('.collapsible');
    $(collapsedBtn).on('click', function () {
        $(this).parent().parent().siblings().children('.card-header').find('.mb-0').removeClass('active');
        $(this).toggleClass('active');
    });


}(jQuery));
