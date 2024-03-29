/*!
 * Start Bootstrap - Creative v6.0.5 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });


    //map
    var map = L.map('map', {
        center: [48.1288, 14.9897],
        zoom: 18,
        gestureHandling: true,
        gestureHandlingOptions: {
            text: {
                touch: "Benutzen Sie zwei Finger um die Karte zu bewegen",
                scroll: "Benutzen Sie Strg + Scroll um die Karte zu zoomen",
                scrollMac: "Benutzen Sie \u2318 + Scroll um die Karte zu zoomen"
            },
            duration: 1000
        }
    });


    L.tileLayer('https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png', {
        attribution: 'Datenquelle: <a href="https://www.openstreetmap.org/copyright">basemap.at</a>',
        maxZoom: 19,
        minZoom: 9,
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);

    var marker = L.marker([48.1288, 14.9897]).addTo(map);
    marker.bindPopup("<div style=\"text-align: center\"><b>Produktion & Schauraum</b><br>Hauptstraße 24a<br/>3372 Blindenmarkt</div>").openPopup();




})(jQuery); // End of use strict