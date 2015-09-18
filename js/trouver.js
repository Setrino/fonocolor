$(document).ready(function(){

    var flip_card = '<div class="flip-container memory"><div class="flipper ';
    var flip_card_2 = '"><div class="front"><img class="consonants" src="../images/memory/unil_back_200.png"></div><div class=\'back\'>';
    var voyelle_img = '<img src="../images/game/voyelles.png"/>';
    var consonnes_img = '<img src="../images/game/consonnes.png"/>';
    var con_voy_img = '<img src="../images/game/voyelle_consonnes.png"/>';
    var circle = '<img src="../images/game/circle.png"/>';
    var square = '<img src="../images/game/square.png"/>';
    var circ_squa = '<img src="../images/game/circ_squa.png"/>';
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
    var animationTime = 2500;
    var animationStep = 500;
    var textArray = [];
    var easy = {
        'gars' : 'ga'
    }
    var medium = {
        'toutes' : 'tu'
    }
    var hard = {
        'partir' : 'paRtiR'
    }

    var references = {
        consonants: ['c.b', 'c.c', 'c.d', 'c.f', 'c.g', 'c.p', 'c.t', 'c.ph', 'c.qu', 'c.r', 'c.s', 'c.se', 'c.sse', 'c.tt', 'c.ve', 'c.x', 'c.xx', 'c.z', 'c.ç', 'c.ce', 'c.ch', 'c.ge', 'c.gu', 'c.j', 'c.k', 'c.l', 'c.m', 'c.n'],
        vowels: ['v.u', 'v.un', 'v.y', 'v.a', 'v.ai', 'v.ain', 'v.an', 'v.au', 'v.e_', 'v.e', 'v.ee', 'v.een', 'v.eeu', 'v.ei', 'v.ein', 'v.en', 'v.er', 'v.es', 'v.eu', 'v.eux', 'v.ez', 'v.i', 'v.in', 'v.o', 'v.oeu', 'v.oi', 'v.oin', 'v.om', 'v.on', 'v.oo', 'v.ou'],
        items:[],
        circles: [],
        squares: []
    };

    function init(){

        var array = [];
        var clickA = false;
        setTimeout(function(){$(".type, .difficulty").css("display", "block");}, 1000);
        $('.menu').css('display', "none");
        $('.players').css("display", "none");
        $('.bar').remove();
        $('.difficulty img').unbind('click');
        $('.type img').css('opacity', '1.0');
        hideAnimation('.level');
        hideAnimation('.level_block');
        $('.type img').click(function(){

            var that = $(this);
            $('.level').html('');
            $('.color_icon').html('');

            switch(that.attr('id')){
                case 'lvl_voy':
                    $('.level').append(voyelle_img);
                    $('.color_icon').append(circle);
                    array = references.vowels;
                    break;
                case 'lvl_con':
                    $('.level').append(consonnes_img);
                    $('.color_icon').append(square);
                    array = references.consonants;
                    break;
                case 'lvl_both':
                    $('.level').append(con_voy_img);
                    $('.color_icon').append(circ_squa);
                    array = references.consonants.concat(references.vowels);
                    break;
            }
            clickA = true;
            $('.type img').css('opacity', '0.2');
            that.css('opacity', '1.0');
            $('.difficulty').removeClass("disable");
        });
        $('.difficulty img').click(function(){
            if(clickA){
                $('.type img').off('click');
                $(this).off('click');
                switch($(this).attr('id')){
                    case 'easy':
                        $('.color_icon').css('left', '112px');
                        noOfPlayers(easy, findPhonetic);
                        break;
                    case 'medium':
                        $('.color_icon').css('left', '250px');
                        noOfPlayers(medium, findPhonetic);
                        break;
                    case 'hard':
                        $('.color_icon').css('left', '413px');
                        noOfPlayers(hard, findPhonetic);
                        break;
                }
                displayAnimation('.level_block');
                displayAnimation('.level');
                $('.difficulty').addClass("disable");
                $('.type').removeClass("disable");
                $('.type, .difficulty').css("display", "none");
            }
        });
    }

    init();

    function noOfPlayers(array, callback){
        var players = 1;
        displayAnimation(".players");
        //$('.players').css('display', 'block');
        $('.players img').click(function(){

            switch($(this).attr('id')){
                case 'one_p':
                    players = 1;
                    break;
                case 'two_p':
                    players = 2;
                    break;
            };
            $('.players').css("display", "none");
            $(this).off('click');
            var keys = Object.keys(array);
            var randomInd = Math.floor(Math.random() * keys.length);
            var key = keys[randomInd];
            callback(key, array[key], players);
        });
    }

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

    //Receives array of [[letter, color]]
//i - current word in the textArray
//offsetX - offset along the x axis from previous word
    function obtainColors(array){

        console.log(array);

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

    function findPhonetic(word, phonetic, players){
        console.log(word + " " + phonetic);
        animateCards(6, 1, phonetic, players);
    }

    function wordRequest(text, players, callback){
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

    function hideAnimation(element){
        $(element).css({"-webkit-animation" : "fadeOut 1s", "animation" : "fadeOut 1s", "transition" : "height 0 1s"});
        setTimeout(function() {
            $(element).css('display', 'none');
        }, 1000);
    }
    function displayAnimation(element){
        $(element).css({"display" : "initial", "-webkit-animation" : "fadeIn 1s", "animation" : "fadeIn 1s"});
    }

    function animateCards(x, y, selected, players){

        var selected = selected.split("");
        var fillArray = Array(x - selected.length).fill('');
        selected = selected.concat(fillArray);

        var left = 100;
        var top = 210;
        var unil_left = "440px";

        switch(x){
            case 2:
                unil_left = "440px";
                break;
            case 4:
                unil_left = "560px";
                left = -225;
                top = 210;
                break;
            case 6:
                unil_left = "740px";
                left = -600;
                top = 210;
                break;
            case 8:
                unil_left = "740px";
                left = -600;
                top = 210;
                break;
        }

        // set interval
        var i = 0;
        var j = 0;
        var bodyWrapper = $('#body_wrapper');
        var width = (documentHeight - 310) / y;
        var tid = setInterval(loopCards, animationStep);
        var card_line = $('<div class="card_line"></div>');
        card_line.css('width', (width + 18) * x);
        bodyWrapper.append(card_line);
        function loopCards() {
            var $newdiv1 = $( "<div class='unil_card'>" );
            var tempJ = j;
            $newdiv1.css("left", unil_left);
            $("#body_wrapper").append($newdiv1);
            $newdiv1.animate({
                left: "+=" + (left + (width + 8) * j),
                top: "+=" + (top + (width + 13) * i)
            }, animationTime, function(){
                $newdiv1.remove();
            });
            $newdiv1.css({"-webkit-animation" : "fly 2.5s", "animation" : "fly 2.5s"});
            $(".flip-container, .flip-container_l, .front, .back, .front img, .back img").css("width", width);
            $(".flip-container, .flip-container_l, .front, .back, .front img, .back img").css("height", width);
            setTimeout(function(){
                $(".flip-container, .flip-container_l, .front, .back, .front img, .back img").css("width", width);
                $(".flip-container, .flip-container_l, .front, .back, .front img, .back img").css("height", width);
                var temp = selected.pop();
                console.log(temp);
                card_line.append(flip_card + temp.split('/')[0] + " " + temp.split('/')[1] + '</div></div>');
                if(tempJ == x - 1){
                    card_line = $('<div class="card_line"></div>');
                    card_line.css('width', (width + 18) * x);
                    bodyWrapper.append(card_line);
                    $(".flip-container, .flip-container_l, .front, .back, .front img, .back img").css("width", width);
                    $(".flip-container, .flip-container_l, .front, .back, .front img, .back img").css("height", width);
                }
            }, animationTime);

            j++;
            if(j == x){
                j = 0;
                i++;
                if(i == y){
                    abortTimer();
                }
            }
        }
        function abortTimer() {
            clearInterval(tid);
        }
    }

    $('body').jGravity({
        drag: true
    });

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

    //$(".draggable").draggable();
});