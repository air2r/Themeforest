(function($) {
    'use strict';


        $('.faq .faq-btn').click(function(){
        $(this).toggleClass('active');
        $(this).next('.faq-content').slideToggle(400);
       });


        //for scroll bottom to top js here
    if ($('.scroll__btn').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.scroll__btn').addClass('show');
                } else {
                    $('.scroll__btn').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.scroll__btn').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    })(jQuery);