

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
    // mobile menu
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').ucOffCanvasMenu({
        documentWrapper: '#main-wrapper',
        contentWrapper : '.content-wrapper',
        position       : 'uc-offcanvas-left',    // class name
        // opener         : 'st-menu-open',            // class name
        effect         : 'slide-along',             // class name
        closeButton    : '#uc-mobile-menu-close-btn',
        menuWrapper    : '.uc-mobile-menu',                 // class name below-pusher
        documentPusher : '.uc-mobile-menu-pusher'
        });
    }());




    // -------------------------------------------------------------
    // tooltip
    // -------------------------------------------------------------

    (function () {

        $('[data-toggle="tooltip"]').tooltip()

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


    // -------------------------------------------------------------
    // testimonialSlider
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

        // Navigation
        $('.prev').on('click', function(){
            $('.testimonialSlider').flexslider('prev')
            return false;
        })

        $('.next').on('click', function(){
            $('.testimonialSlider').flexslider('next')
            return false;
        })
    }());

}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})

let screenWidth = window.innerWidth; // to get the width of the browser
let screenHeight = window.innerWidth; // to get height of browser

document.addEventListener('DOMContentLoaded', () => {
    const marqueeContent = document.querySelector('.marquee-content');
    const logos = marqueeContent.querySelectorAll('img');
    const marqueeSpeed = 20; // Adjust the speed of the marquee as needed
    const totalLogosWidth = Array.from(logos).reduce((acc, logo) => acc + logo.clientWidth, 0);
    const animationDuration = totalLogosWidth / marqueeSpeed;

    marqueeContent.style.animationDuration = `${animationDuration}s`;
});


window.addEventListener('scroll', function() {
    var marquee = document.getElementById('logo-marquee');
    var scrollPosition = window.scrollY;
    var piclogo = document.getElementById('pic-logo')

    // Calculate the color based on scroll position
    var color;

    if (scrollPosition < 180) { // Change color until a certain scroll position (adjust as needed)
        color = 'rgba(0, 0, 0, 0)'; // Transparent color
        piclogo.size
    } else {
        color = 'rgba(45, 45, 45, 1)';
    }

    if (screenHeight < '')

    // Update background color
    marquee.style.backgroundColor = color;

});

window.onscroll = function () { 
    scrollFunction(); 
}; 

function scrollFunction() { 
    var image = document.getElementById("pic-logo"); 

    if (screenWidth < 500 && screenWidth < 667 && document.documentElement.scrollTop < 180 ) {
        image.style.width = "80px";
        image.style.height = "50px";
    } else if (screenWidth >= 668 && screenWidth < 891 && document.documentElement.scrollTop < 180) {
        image.style.width = "110px";
        image.style.height = "80px";
    } else if (screenWidth >= 892 && screenWidth < 1199 && document.documentElement.scrollTop < 180) {
        image.style.width = "200px";
        image.style.height = "140px";
    } else if (screenWidth > 1200 && document.documentElement.scrollTop < 180 ) {
        image.style.width = "305px";
        image.style.height = "200px";
    } else {
            image.style.width = "80px";
            image.style.height = "50px";
    }
        
} 

let currentSlide = 0;
const slides = document.querySelectorAll('.gallery img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

let slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.querySelector('.gallery-container').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

document.querySelector('.gallery-container').addEventListener('mouseout', () => {
    slideInterval = setInterval(nextSlide, 3000);
});

 // JavaScript to handle popup functionality
 document.addEventListener('DOMContentLoaded', function () {
    var popupLinks = document.getElementsByClassName('popup-link');
    var popupOverlay = document.getElementById('popup-overlay');
    var closeBtn = document.getElementById('close-btn');
    var iframe = document.querySelector('.popup-content iframe');

    Array.from(popupLinks).forEach(function(link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var videoId = this.getAttribute('data-video-id');
        var videoSrc = 'https://www.youtube.com/embed/' + videoId;
        iframe.src = videoSrc;
        popupOverlay.style.display = 'flex';
      });
    });

    // Close the popup
    closeBtn.addEventListener('click', function () {
      popupOverlay.style.display = 'none';
      iframe.src = ''; // Clear the iframe src to stop video playback
    });
  });

  // JavaScript to handle popup functionality about test
 document.addEventListener('DOMContentLoaded', function () {
    var popupLinks = document.getElementsByClassName('popup-link1');
    var popupOverlay = document.getElementById('popup-overlay1');
    var closeBtn = document.getElementById('close-btn1');
    var iframe = document.querySelector('.popup-content1 iframe');

    Array.from(popupLinks).forEach(function(link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var videoId = this.getAttribute('data-video-id');
        var videoSrc = 'https://www.youtube.com/embed/' + videoId;
        iframe.src = videoSrc;
        popupOverlay.style.display = 'flex';
      });
    });

    // Close the popup
    closeBtn.addEventListener('click', function () {
      popupOverlay.style.display = 'none';
      iframe.src = ''; // Clear the iframe src to stop video playback
    });
  });