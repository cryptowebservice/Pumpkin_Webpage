/*========================================================================

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Project:        Halloween Party template HTML5 Template
Primary use:    Halloween Party
Author:         Ingenious_team
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

========================================================================*/
$(function() {
    "use strict";
    $('body').scrollspy({
        target: '#bs-example-navbar-collapse-1'
    });
    // for navbar background color when scrolling
    $(window).scroll(function() {
        var $scrolling = $(this).scrollTop();
        var bc2top = $("#back-top-btn");
        var stickytop = $(".sticky-top");
        if ($scrolling >= 100) {
            stickytop.addClass('navcss');
        } else {
            stickytop.removeClass('navcss');
        }

        if ($scrolling > 150) {
            bc2top.fadeIn(2000);
        } else {
            bc2top.fadeOut(2000);
        }
    });

    //Preloader js


    // this is for back to top js
    var bc2top = $('#back-top-btn');
    bc2top.on('click', function() {
        html_body.animate({
            scrollTop: 0
        }, 1500);
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    //animation scroll js
    var nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    /* navOffset ends */
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });

});