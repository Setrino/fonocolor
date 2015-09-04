$(document).ready(function(){

    var documentHeight = $(document).height();
    var width = 800,
    //width of the canvas
        height = 148,
        full_screen_height = 0,
        full_screen_width = 0,
    //height of the canvas
    c = document.getElementById('canvas'),
    //canvas itself
    ctx = c.getContext('2d');
    ctx.font = 'fundamental__brigade_schwerRg';
    c.width = width;
    c.height = height;

    var pixel_size = 50,
        point_size = pixel_size * 72 / 96,
        audioFiles = {},
        audioPath = 'sound/color/',
        snd = null,
        dragging = false,
        lastY = 0,
        translated = 0,
        translatedD = 0,
        rowLength = 85,
        textArray = new Array(),
        previousLength = 0,
        coloredBlockHeight = 0,
        INCREASE_MULTIPLIER = 1.11;

    $(".logo").click(function(){
        getPage("../menu.html", function(data){
            var newDiv = $("<div/>")
                .addClass("menuOverlay")
                .html(data);
            $("#menu").after(newDiv);
            var menuOverlay = $(".menuOverlay");
            $('body').append('<link rel="stylesheet" type="text/css" href="../css/menu.css">');
            $('body').append('<script type="text/javascript" src="../js/menu.js"></script>');
            menuOverlay.css({'display': "block", 'top': -documentHeight}).animate({top:
            '+=' + documentHeight}, 1000, function(){ menuOverlay.css('height', documentHeight)});
            $(".menuClose").click(function(){
                menuOverlay.animate({top: '-=' + documentHeight}, 1000, function(){
                    menuOverlay.css('display', 'none'); });
            });
        });
    });

    $(".difficulty img").click(function(){
        $(".difficulty").css("display", "none");
        switch($(this).attr('id')){
            case 'easy':
                textArray[0] = 'bonjour';
                wordRequest('bonjour');
                break;
            case 'medium':
                textArray[0] = 'littérature';
                wordRequest('littérature');
                break;
            case 'hard':
                textArray[0] = 'inéligibilité';
                wordRequest('inéligibilité');
                break;
        }
    });

    //Receives array of [[letter, color]]
//i - current word in the textArray
//offsetX - offset along the x axis from previous word
    function obtainColors(array){

        $("#decadade").css("display", 'initial').val("").focus();
        var xDistance = 0;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.font= pixel_size + "px fundamental__brigade_schwerRg";
        textArray[1] = jQuery.parseJSON(array);
        var currentWordArray = textArray[1];

        var totalWidth = 0;
        $.each(currentWordArray, function(k, v){
            totalWidth += ctx.measureText(v[0]).width;
        });
        xDistance = (width - (pixel_size + 10) * currentWordArray.length) / 2;

        for(var j = 0; j < currentWordArray.length; j++){

            var letter = currentWordArray[j][0];

            if(j == 0){
                textArray[0][2] = 3;
            }

            if(letter != undefined){
                ctx.beginPath();
                drawText(3, pixel_size, letter, currentWordArray[j][1], currentWordArray[j][2],
                    xDistance, 1, 0, currentWordArray[j][3]);
                ctx.closePath();
                xDistance += pixel_size + 10;
            }
        }
    }

    $("#decadade").keyup(function(){
       if($(this).val().toLowerCase() == textArray[0]){
           $('.player_won').html("Le mot est correct!");
           $("#continue").css("display", "none");
           $("#decadade").css("display", 'none').val("");
           doOverlayOpen();
       }
    });

    function drawText(x, y, text, colorTop, colorBottom, xDistance, yMultiplier, i, type){

        var lingrad = '';

        if(yMultiplier != 1){
            yMultiplier = yMultiplier * INCREASE_MULTIPLIER;
        }

        if(colorBottom != undefined){
            lingrad = ctx.createLinearGradient(0, y * (yMultiplier - 1), 0, y * yMultiplier);
            lingrad.addColorStop(0, colorTop);
            lingrad.addColorStop(0.75, colorTop);
            lingrad.addColorStop(0.75, colorBottom);
            lingrad.addColorStop(1, colorBottom);
            ctx.fillStyle = lingrad;
        }else{

            ctx.fillStyle = colorTop;
        }

        ctx.font= y + "px fundamental__brigade_schwerRg";
        var yPixels = y * yMultiplier;
        textArray[i][3] = yPixels;
        if(type == 'c') {
            ctx.fillRect(x + xDistance, 0, yPixels, yPixels);
        }else{
            ctx.arc(x + xDistance + yPixels / 2, yPixels / 2, yPixels / 2, 0, Math.PI*2, true);
            ctx.fill();
        }
        //ctx.fillText(text, x + xDistance, yPixels);
    }

    function wordRequest(text, callback){
        $.ajax({
            type: "POST",
            url: "../php/requests.php",
            data: {text: text},
            success: function(msg){
                if(msg == 'ERROR')
                {
                    $('.reply').html('The translation has failed');
                }
                else
                {
                    obtainColors(msg);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $('.reply').html(textStatus+" - "+errorThrown);
            }
        });
    }


    $("#restart").click(function(){
        $(".difficulty").css("display", "block");
        $("#decadade").css("display", 'none').val("");
        $('.player_won').html("");
        ctx.clearRect(0, 0, c.width, c.height);
        doOverlayClose();
        $("#continue").css("display", "initial");
    });

    $("#continue").click(function(){
        doOverlayClose();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            doOverlayOpen();
        }
    });
});