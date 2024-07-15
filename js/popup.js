

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
