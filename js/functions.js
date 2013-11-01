$(document).ready(function(){

    $("#full_screen").click(function(){

        /*if ($('body').css("background-color") == "rgb(0, 0, 0)"){
            $('body').css("background-color", "#696969");
        }else{
            $('body').css("background-color", "#000000");
        }*/

        $("#canvas").requestFullScreen();

        if(document.fullScreen){

            $("#canvas").css("width", "100%");

        }

    });

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
    });

    $('.color_text').bind({

        mouseenter: function(){
            $(this).html("<img src=\"images/result_hover.png\"/>");
        },

        mouseout: function(){
            $(this).html("<img src=\"images/result.png\"/>");
        },

        mouseleave: function(){
            $(this).html("<img src=\"images/result.png\"/>");
        },

        click: function(){
            colorArray($(".search_form").val());
            $(this).html("<img src=\"images/result.png\"/>");
        }
    });

    // Toggle overlayBox
    $(".copyright").bind(

        "click", doOverlayOpen
    )

    $(".closeOverlay").bind(

        "click", doOverlayClose
    )

});

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

var checkLoop = function(){

    if($(".search_form").val() != '' || $(".search_form").val() != undefined){

        if(previousValue != $(".search_form").val()){

            previousValue = $(".search_form").val();

            //Enter the AJAX check here

            //------ Remove placeInArray -------//
            //placeInArray($(".search_form").val());
            colorArray($(".search_form").val());
            $(".color_text").html("<img src=\"images/result.png\"/>");

            //searchText(previousValue);
        }
    }else{

        if(previousValue != ''){

            //placeInArray('');
            previousValue = '';
        }
    }

    gLoop = setTimeout(checkLoop, 2000);
}
checkLoop();