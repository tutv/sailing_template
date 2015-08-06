$(document).ready(function () {
    /* Slider top */
    var carousel_caption = $("#slide-top .carousel-caption");
    carousel_caption.each(function () {
        var height_caption = $(this).outerHeight(false);
        $(this).css('margin-top', -height_caption/2);
    });


    /* Banner */
    var text = $("#banner .text");
    var height = text.outerHeight(false);
    text.css('width', height)
    text.css('margin-left', - height/2);
    text.css('margin-top', -height/2);


    /* Video */
    var videoContainer = $("#video .container-video");
    var heightVideo = videoContainer.outerHeight(false);
    videoContainer.css('margin-top', -height/4);

    //Align Center
    var play = $("#video .title");
    var heightPlay = play.outerHeight(false);
    var widthPlay = play.outerWidth(false);
    play.css('margin-top', -heightPlay/2);
    play.css('margin-left', -widthPlay/2);

    //Control video
    var video = document.getElementById("video-tour");
    var videoJ = $("#video-tour");
    var title = $("#video .title");
    var btnPlay = $("#video .title .play");
    btnPlay.on('click', function () {
        video.play();
        title.fadeOut(400);
        $("#video").toggleClass("paused");
    });

    videoJ.on('click', function () {
       if (!video.paused) {
           video.pause();
           title.fadeIn(400);
           $("#video").toggleClass("paused");
       }
    });
});