(function ($) {
    "use strict";

    //    Preloader  ======================

    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });



 
   


    //   WOW js  ==================================*/

    new WOW().init();

})(jQuery);
