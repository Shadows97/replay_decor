(function ($) { 

    "use strict";

    var project_carousel = function ($scope, $) {
        
        // Project Carousel
        if ($('.project-carousel').length) {
            $('.project-carousel').owlCarousel({
                loop: true,
                margin: 30,
                dots: true,
                nav: false,
                stagePadding: 0,
                singleItem:true,
                smartSpeed: 500,
                autoplay: true,
                autoplayTimeout:6000,
                navText: [ '<span class="icon-down-arrow-1"></span>', '<span class="icon-down-arrow-1 right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    1024:{
                        items:2
                    }
                }
            });    		
        }

    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/wazors_recent_projects.default', project_carousel);
    });
})(window.jQuery);