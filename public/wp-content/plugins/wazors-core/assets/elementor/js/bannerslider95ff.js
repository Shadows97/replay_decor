(function ($) { 

    "use strict";

    var banner_js = function ($scope, $) {
        
        // Main Slider Carousel
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                loop:true,
                margin:0,
                dots: true,
                nav:true,
                singleItem:true,
                smartSpeed: 500,
                autoplay: true,
                autoplayTimeout:6000,
                navText: [ '<span class="flaticon-next"></span>', '<span class="flaticon-next"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1024:{
                        items:1
                    }
                }
            });    		
        }

    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/wazors_banner_slider.default', banner_js);
    });
})(window.jQuery);