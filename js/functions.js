$(document).ready(function(){

    var fullScreen = 0;
    $("#full_screen").click(function(){

        fullScreenOn();
        fullScreen = 1;
        fullScreenApi.requestFullScreen(document.getElementById("canvas"));

    });

    $(".comment_full_screen").click(function(){

        fullScreenApi.requestFullScreen(document.getElementById("wrapper"));

    });

    document.addEventListener("fullscreenchange", function () {
        if(fullScreen == 1 && document.fullscreen == false){
            fullScreen == 0;
            fullScreenOff();
        }
    }, false);
    document.addEventListener("mozfullscreenchange", function () {
        if(fullScreen == 1 && document.mozFullScreen == false){
            fullScreen == 0;
            fullScreenOff();
        }
    }, false);
    document.addEventListener("webkitfullscreenchange", function () {
        if(fullScreen == 1 && document.webkitIsFullScreen == false){
            fullScreen == 0;
            fullScreenOff();
        }
    }, false);

    //$(".copyright").css("margin-right", $("#wrapper").width() / 1.1 - $(".copyright").width() * 3);
    //$(".email").css("margin-left", $("#wrapper").width() / 2);

    $("#answer").css("margin-left", $("#phonetic").width() / 2 - 97 / 2);
    $("#answer").css("margin-top", - 19 / 2);

    $(".search_form").css("margin-left", ( $("#enter").width() - $(".search_form").width() ) / 2 - 20 );
    $(".search_form").css("margin-top", ( $("#enter").height() - $(".search_form").height() ) / 2 );

    $(".search_output").css("left", ( $("#result").width() - $(".search_output").width() ) / 2 );
    $(".search_output").css("margin-top", ( $("#result").height() - $(".search_output").height() ) / 2 - 5 );

    $("#canvas").css("margin-top", -$(".search_output").height() - 5);

    $('.clean').click(function(){

        previousValue = '';

        $(".search_form").val(previousValue);
        colorArray($(".search_form").val());
        resetCanvas();
        hideFullScreen();
        hideDownloadPNG();
    });

    $('.color_text').click(function(){

        //$(this).html("<img src=\"images/result_hover.png\"/>");
        colorArray($(".search_form").val());
        //$(this).html("<img src=\"images/result.png\"/>");
    });

    // Toggle overlayBox
    $(".copyright").bind(

        "click", doOverlayOpen
    )

    $(".closeOverlay").bind(

        "click", doOverlayClose
    )

    hideFullScreen();
    hideDownloadPNG();
});

function hideFullScreen(){

    $("#full_screen").css("display", "none");
}

function showFullScreen(){

    $("#full_screen").css("display", "block");
}

function hideDownloadPNG(){

    $("#download").css("display", "none");
}

function showDownloadPNG(){

    $("#download").css("display", "block");
}

(function() {
    var
        fullScreenApi = {
            supportsFullScreen: false,
            isFullScreen: function() { return false; },
            requestFullScreen: function() {},
            cancelFullScreen: function() {},
            fullScreenEventName: '',
            prefix: ''
        },
        browserPrefixes = 'webkit moz o ms khtml'.split(' ');

    // check for native support
    if (typeof document.cancelFullScreen != 'undefined') {
        fullScreenApi.supportsFullScreen = true;
    } else {
        // check for fullscreen support by vendor prefix
        for (var i = 0, il = browserPrefixes.length; i < il; i++ ) {
            fullScreenApi.prefix = browserPrefixes[i];

            if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined' ) {
                fullScreenApi.supportsFullScreen = true;

                break;
            }
        }
    }

    // update methods to do something useful
    if (fullScreenApi.supportsFullScreen) {
        fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';

        fullScreenApi.isFullScreen = function() {
            switch (this.prefix) {
                case '':
                    return document.fullScreen;
                case 'webkit':
                    return document.webkitIsFullScreen;
                default:
                    return document[this.prefix + 'FullScreen'];
            }
        }
        fullScreenApi.requestFullScreen = function(el) {
            return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
        }
        fullScreenApi.cancelFullScreen = function(el) {
            return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
        }
    }

    // jQuery plugin
    if (typeof jQuery != 'undefined') {
        jQuery.fn.requestFullScreen = function() {

            return this.each(function() {
                if (fullScreenApi.supportsFullScreen) {
                    fullScreenApi.requestFullScreen(this);
                }
            });
        };
    }

    // export api
    window.fullScreenApi = fullScreenApi;
})();

var previousValue = '';

$(".search_form").bind('input propertychange', function(){

    var value = this.value;

        if(value != '' || value != undefined){

            if(previousValue != value){

                previousValue = value;

                //Enter the AJAX check here
                showDownloadPNG();
                colorArray(value);
                $(".color_text").html("<img src=\"images/result.png\"/>");
            }
    }else{

        if(previousValue != ''){
            previousValue = '';
        }
    }
});
