$(document).ready(function(){

    $('.close_video').css({ "cursor" : "pointer", "top" : 20, "position" : "relative"} );
    $('.video_skip').css('display', 'none');
});


function playVideo(play){

    var video = document.getElementById("videoFile");

    if(play){
        video.play();
    }
}

function showMenu(){
    $("#body_wrap").css("display", "initial");
}