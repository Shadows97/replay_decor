(function ($) { 

    "use strict";

    var testimonial_js = function ($scope, $) {
        // Testimonial Carousel
        if ($('.testimonial-carousel-rtl').length) {
            $('.testimonial-carousel-rtl').owlCarousel({
                loop: true,
                margin: 30,
                dots: false,
                nav: false,
                stagePadding: 0,
                singleItem:true,
                smartSpeed: 500,
                autoplay: true,
                autoplayTimeout:6000,
                navText: [ '<span class="fa fa-long-arrow-left"></span><p>Prev</p>', '<span class="fa fa-long-arrow-right right"></span><p>Next</p>' ],
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
        elementorFrontend.hooks.addAction('frontend/element_ready/wazors_testimonial.default', testimonial_js);
    });
})(window.jQuery);
