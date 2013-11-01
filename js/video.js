$(document).ready(function(){

    $(".body_wrapper").css("display", "none");
    $(".video_skip").css("margin-right", ($(".video").width() - $(".video_frame").width()) / 1.3);

    $(".video_skip").click(function(){

        $(".body_wrapper").css("display", "block");
        $(".video").css("display", "none");
        $(".search_form").css("margin-left", ( $("#enter").width() - $(".search_form").width() ) / 2 - 20 );
        $(".search_form").css("margin-top", ( $("#enter").height() - $(".search_form").height() ) / 2 );
    })
});