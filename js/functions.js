$(document).ready(function(){

    var fullScreen = 0;
    var scroll = true;
    var lastScrollValue = 0;
    var canvasTopMargin = $(".search_output").height() - 5;
    $("#full_screen").click(function(){

        fullScreenOn();
        fullScreen = 1;
        fullScreenApi.requestFullScreen(document.getElementById("scroll_canvas"));
        $("#scroll_canvas").css({'margin-top': '40px',
                                 'width': '100%',
                                 'height': '100%',
                                 'bottom': 0
        });
    });

    $(".comment_full_screen").click(function(){

        fullScreenApi.requestFullScreen(document.getElementById("wrapper"));

    });

    document.addEventListener("fullscreenchange", function () {
        if(fullScreen == 1 && document.fullscreen == false){
            fullScreen == 0;
            fullScreenOff(canvasTopMargin);
        }
    }, false);
    document.addEventListener("mozfullscreenchange", function () {
        if(fullScreen == 1 && document.mozFullScreen == false){
            fullScreen == 0;
            fullScreenOff(canvasTopMargin);
        }
    }, false);
    document.addEventListener("webkitfullscreenchange", function () {
        if(fullScreen == 1 && document.webkitIsFullScreen == false){
            fullScreen == 0;
            fullScreenOff(canvasTopMargin);
        }
    }, false);

    //$(".copyright").css("margin-right", $("#wrapper").width() / 1.1 - $(".copyright").width() * 3);
    //$(".email").css("margin-left", $("#wrapper").width() / 2);

    $("#answer").css("margin-left", $("#phonetic").width() / 2 - 97 / 2);
    $("#answer").css("margin-top", - 19 / 2);

    $(".search_form").css("margin-left", 7);
    $(".search_form").css("margin-top", ( $("#enter").height() - $(".search_form").height() ) / 2 );

    $(".search_output").css("left", ( $("#result").width() - $(".search_output").width() ) / 2 );
    $(".search_output").css("margin-top", ( $("#result").height() - $(".search_output").height() ) / 2 - 5 );





    /*if(window.location.pathname == '/pourquoi.html'){
        $('.logo').css('bottom', '50');
    }*/

    $(document).scroll(function(){
        if(!scroll){
            if(lastScrollValue == 0){
                lastScrollValue = $(this).scrollTop();
            }
            $(this).scrollTop(lastScrollValue);
        }else{
            lastScrollValue = 0;
            $(this).scrollTop();
        }
    });

    $("#voyelle").change(function() {
        if(this.checked) {
            setVoyelle(true);
        }else{
            setVoyelle(false);
        }
        drawArray();
    });

    $("#consonnes").change(function() {
        if(this.checked) {
            setConsonnes(true);
        }else{
            setConsonnes(false);
        }
        drawArray();
    });

    $(".search_form").scroll(function(){
       $("#scroll_canvas").scrollTop($(this).scrollTop() * 1.27);
    });

    $(".search_form, #scroll_canvas").bind({

        mouseenter: function(){
            scroll = false;
        },
        mouseleave: function(){
            scroll = true;
        }
    });

    $("#scroll_canvas").css("bottom", canvasTopMargin);

    $('.clean').click(function(){

        previousValue = '';
        $(".search_form").val(previousValue);
        colorArray($(".search_form").val(), function(){
            resetCanvas();
            hideFullScreen();
            hideDownloadPNG();
        });
    });

    $('.closeFilter').click(closeFilter);

    function closeFilter(){
        $(".overlayFilter").animate({height: '0', top: '+=150'}, 1000);
        $('.filter_drop img').removeClass('rotate').addClass('rotate_back');
        setTimeout(function(){
            $('.closeFilter, .overlayFilterContent').css('display', 'none');
        }, 900);
    }

    $('.filter_drop').click(function(){
        $(this).find('img').toggleClass(function(){
            if($(this).attr('class') == 'rotate'){
                $(".overlayFilter").animate({height: '0', top: '+=150'}, 1000);
                $(this).removeClass('rotate');
                setTimeout(function(){
                    $('.closeFilter, .overlayFilterContent').css('display', 'none');
                }, 900);
                return 'rotate_back';
            }else{
                $(".overlayFilter").animate({height: '150', top: '-=150'}, 1000);
                $(this).removeClass('rotate_back');
                $('.closeFilter, .overlayFilterContent').css('display', 'block');
                return 'rotate';
            }
        });
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

//Create an object with preloaded audioFiles
//fileName - e.g. _087292.wav
//audioFiles - object with preloaded audio files
function preloadAudio(array, object, audioPath){
    console.log(location.href.indexOf('localhost'));
    array.splice(0, (location.href.indexOf('localhost') == -1) ? 2 : 3);
    for(var path in array){
        var fileName = array[path];
        var temp = new Audio(audioPath + fileName);
        temp.preload = 'auto';

        object[fileName.replace('.wav', '')] = temp;
    }
}

function hideFullScreen(){

    $("#full_screen").css("display", "none");
    //$("#canvas").css("overflow-y", "hidden");
}

function showFullScreen(){

    $("#full_screen").css("display", "block");
    //$("#canvas").css("overflow-y", "scroll");
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

$(".search_form").bind('input propertychange keydown', function(e){

    if ((e.keyCode || e.which) == 9) {
        e.preventDefault();
        this.value += "    ";
    }

    var value = this.value;

        if(value != '' || value != undefined){

            if(previousValue != value){

                previousValue = value;

                //Enter the AJAX check here
                colorArray(value);
                $(".color_text").html("<img src=\"images/result.png\"/>");
            }
    }else{
        if(previousValue != ''){
            previousValue = '';
        }
    }
});