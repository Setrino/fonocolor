$(document).ready(function(){

    $(".video").css("display", "none");

    $(".video_skip").click(hideVideo);

    $(".register").click(function(){

        displayVideo();
    });
});

function displayVideo(){

    $(".body_wrapper").css("display", "none");
    $(".video").css("display", "block");
    $(".video_skip").css("margin-right", ($(".video").width() - $(".video_frame").width()) / 1.3);
}

function hideVideo(){

    $(".body_wrapper").css("display", "block");
    $(".video").css("display", "none");
    $(".search_form").css("margin-left", ( $("#enter").width() - $(".search_form").width() ) / 2 - 20 );
    $(".search_form").css("margin-top", ( $("#enter").height() - $(".search_form").height() ) / 2 );
    setCookie("video_view","video_view",0);
};

function getCookie(c_name)
{
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1)
    {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1)
    {
        c_value = null;
    }
    else
    {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1)
        {
            c_end = c_value.length;
        }
        c_value = decodeURI(c_value.substring(c_start,c_end));
    }
    return c_value;
}

function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + 60);
    var c_value= encodeURI(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function checkCookie()
{

    var video_view=getCookie("video_view");
    if (video_view!=null && video_view!="") {

        hideVideo();
    }else{

        displayVideo();
    }
}
