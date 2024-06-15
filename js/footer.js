jQuery(function ($) {

    'use strict';


    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("sticky-nav");
        } else {
            $(".navbar-fixed-top").removeClass("sticky-nav");
        }
    });



    // -------------------------------------------------------------
    // OffCanvas
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').HippoOffCanvasMenu({
        documentWrapper: '#main-wrapper',
        contentWrapper : '.content-wrapper',
        position       : 'hippo-offcanvas-left',    // class name
        // opener         : 'st-menu-open',            // class name
        effect         : 'slide-in-on-top',             // class name
        closeButton    : '#off-canvas-close-btn',
        menuWrapper    : '.offcanvas-menu',                 // class name below-pusher
        documentPusher : '.offcanvas-pusher'
        });
    }());



    // -------------------------------------------------------------
    // Footer One Flickrfeed #photoStreamOne
    // -------------------------------------------------------------

    (function () {

        $('#photoStreamOne').jflickrfeed({
            limit: 8,
            qstrings: {
                id: '52617155@N08'
            },
            itemTemplate: '<li>'+
                            '<a href="{{image}}" title="{{title}}">' +
                                '<img src="{{image_s}}" alt="{{title}}" />' +
                            '</a>' +
                          '</li>'
        });

    }());



    // -------------------------------------------------------------
    // Footer Three Flickrfeed #photoStreamTwo
    // -------------------------------------------------------------

    (function () {

        $('#photoStreamTwo').jflickrfeed({
            limit: 8,
            qstrings: {
                id: '52617155@N08'
            },
            itemTemplate: '<li>'+
                            '<a href="{{image}}" title="{{title}}">' +
                                '<img src="{{image_s}}" alt="{{title}}" />' +
                            '</a>' +
                          '</li>'
        });

    }());


    // -------------------------------------------------------------
    // Footer Three Twitter Feed
    // -------------------------------------------------------------
    (function () {
        var twitterWidgetConfig = {
            id: "567185781790228482", //put your Widget ID here
            domId: "twitterWidgetThree",
            maxTweets: 3,
            enableLinks: true,
            showUser: true,
            showTime: false,
            showInteraction: false,
            customCallback: handleTweets
        };

        twitterFetcher.fetch(twitterWidgetConfig);

        function handleTweets(tweets) {
            var x = tweets.length;
            var n = 0;
            var html = "";
            while (n < x) {
                html += '<div class="item">' + tweets[n] +
                    "</div>";
                n++
            }
            $(".twitter-widget").html(html);
            $(".twitter_retweet_icon").html(
                '<i class="fa fa-retweet"></i>');
            $(".twitter_reply_icon").html(
                '<i class="fa fa-reply"></i>');
            $(".twitter_fav_icon").html(
                '<i class="fa fa-star"></i>');
            $(".twitter-widget").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                dots: false,
                nav:true,
                navText: [
                    '<i class="fa fa-caret-left"></i>',
                    '<i class="fa fa-caret-right"></i>'
                ]
            });

        }


    }());



    // -------------------------------------------------------------
    // Footer Four Twitter Feed
    // -------------------------------------------------------------
    (function () {
        var twitterWidgetConfig = {
            id: "567185781790228482", //put your Widget ID here
            domId: "twitterWidgetFour",
            maxTweets: 2,
            enableLinks: true,
            showUser: true,
            showTime: true,
            showInteraction: false
        };

        twitterFetcher.fetch(twitterWidgetConfig);

    }());

    // -------------------------------------------------------------
    // Footer Five Twitter Feed
    // -------------------------------------------------------------
    (function () {
        var twitterWidgetConfig = {
            id: "567185781790228482", //put your Widget ID here
            domId: "twitterWidgetFive",
            maxTweets: 2,
            enableLinks: true,
            showUser: true,
            showTime: true,
            showInteraction: false
        };

        twitterFetcher.fetch(twitterWidgetConfig);

    }());
    


    // -------------------------------------------------------------
    // Footer Fourteen Twitter Feed
    // -------------------------------------------------------------
    (function () {
        var twitterWidgetConfig = {
            id: "567185781790228482", //put your Widget ID here
            domId: "twitterWidgetFourteen",
            maxTweets: 2,
            enableLinks: true,
            showUser: true,
            showTime: true,
            showInteraction: false
        };

        twitterFetcher.fetch(twitterWidgetConfig);

    }());


    
    // -------------------------------------------------------------
    // photo-stream-carousel
    // -------------------------------------------------------------
    (function () {

        $('.photo-stream-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

    }());



    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function(){

          $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

            $(window).scroll(function () {
                if ($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            }); 

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());





}); // JQuery end
