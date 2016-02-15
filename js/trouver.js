$(document).ready(function(){

    var flip_card = '<div class="flip-container memory"><div class="flipper" id="flipper_';
    var flip_card_2 = '"><div class="front"><img class="" src="../images/memory/unil_back_200.png"></div><div class=\'back\'>';
    var trouver_card = '<div class="ui-widget-content draggable"><img class="trouver-card ';
    var trouver_card2 = '" src="../images/trouver/';
    var voyelle_img = '<img src="../images/game/voyelles.png"/>';
    var consonnes_img = '<img src="../images/game/consonnes.png"/>';
    var con_voy_img = '<img src="../images/game/voyelle_consonnes.png"/>';
    var circle = '<img src="../images/game/circle.png"/>';
    var square = '<img src="../images/game/square.png"/>';
    var circ_squa = '<img src="../images/game/circ_squa.png"/>';
    var soundPath = '../sound/';
    var documentHeight = $(document).height();
    var documentWidth = $(document).width();
    var tilesCovered = 0;
    var tilesOpened = 0;
    var noOfClicks = 0;
    var timeout;
    var escapeCounter = 0;
    var difficulty = 'easy';
    var animationTime = 1000;
    var animationStep = 500;
    var snd = null;
    var playLetter = false;
    var hideColor = false;
    var card_width = 0;
    var clickDif = false;
    var pixel_size = 100,
        textArray = new Array(),
        c = document.getElementById('trouver-word'),
        ctx = c.getContext('2d');
        ctx.font = 'fundamental__brigade_schwerRg';

    $("body").css("left", documentWidth / 2 - $("body").width() / 2);

    var references = {
        consonants: ['c.b!14', 'c.c!8', 'c.d!17', 'c.f!7', 'c.g!6', 'c.p!12', 'c.t!10', 'c.ph!7', 'c.qu!8', 'c.r!13', 'c.s!1', 'c.se!5', 'c.sse!1', 'c.tt!1', 'c.ve!11', 'c.x!4', 'c.xx!3', 'c.z!5', 'c.ç!1', 'c.ce!1', 'c.ch!18', 'c.ge!2', 'c.gu!6', 'c.j!2', 'c.k!8', 'c.l!16', 'c.m!15', 'c.n!9'],
        vowels: ['v.u!1', 'v.un!15', 'v.y!6', 'v.a!2', 'v.ai!7', 'v.ain!15', 'v.an!3', 'v.au!9', 'v.e_!4', 'v.e!7', 'v.ee!7', 'v.een!3', 'v.eeu!8', 'v.ei!7', 'v.ein!15', 'v.en!15', 'v.er!4', 'v.es!4', 'v.eu!8', 'v.eux!5', 'v.ez!4', 'v.i!6', 'v.in!15', 'v.o!9', 'v.oeu!8', 'v.oi!10', 'v.oin!11', 'v.om!12', 'v.on!12', 'v.oo!13', 'v.ou!14'],
        easy:['un', 'ce', 'il', 'pour', 'son', 'sur', 'ami', 'se', 'tu', 'ou', 'si', 'là', 'car', 'ni'],
        medium: ['au', 'pas', 'vous', 'dans', 'elle', 'et', 'être', 'qui', 'faire', 'avec', 'aller', 'sans', 'leur', 'même', 'tout'],
        hard: ['femme', 'goal', 'quelque', 'sept', 'main', 'amer', 'fusil', 'chez', 'coeur', 'vingt', 'dix', 'corps', 'souvent', 'clown'],
        colors:['#3A4972', '#F7D3B5', '#EDC4DD', '#ED6E00', '#930FA5', '#AA930A', '#F43FA5']
    };

    function init(){

        var array = [];
        var clickA = false;
        clickDif = false;
        ctx.clearRect(0, 0, c.width, c.height);
        $('.menu').css('display', "none");
        $('.players').css("display", "none");
        $('.bar').remove();
        $('.difficulty img').unbind( "click" );
        $('.difficulty img').click(function(){
            var that = $(this);
            displayAnimation('.level_block');
            displayAnimation('.level');
            $('.color_icon').append(circ_squa);
            $('.difficulty').addClass("disable");
            $('.difficulty').css("display", "none");
            switch($(this).attr('id')){
                case 'easy':
                    difficulty = 'easy';
                    $('.color_icon').css('left', '12px');
                    playLetter = true;
                    hideColor = false;
                    noOfPlayers(6, 1, difficulty, "colors", generateMatrix);
                    break;
                case 'medium':
                    difficulty = 'medium';
                    $('.color_icon').css('left', '150px');
                    playLetter = true;
                    hideColor = false;
                    noOfPlayers(6, 1, difficulty, "objects", generateMatrix);
                    break;
                case 'hard':
                    difficulty = 'hard';
                    $('.color_icon').css('left', '313px');
                    playLetter = false;
                    hideColor = false;
                    noOfPlayers(6, 1, difficulty, "objects_white", generateMatrix);
                    break;
                case 'easy2':
                    difficulty = 'easy';
                    $('.color_icon').css('left', '12px');
                    playLetter = false;
                    hideColor = true;
                    noOfPlayers(6, 1, difficulty, "objects", generateMatrix);
                    break;
                case 'medium2':
                    difficulty = 'medium';
                    $('.color_icon').css('left', '150px');
                    playLetter = false;
                    hideColor = true;
                    noOfPlayers(6, 1, difficulty, "colors", generateMatrix);
                    break;
                case 'hard2':
                    difficulty = 'hard';
                    $('.color_icon').css('left', '313px');
                    playLetter = false;
                    hideColor = true;
                    noOfPlayers(6, 1, difficulty, "objects_white", generateMatrix);
                    break;
            }
        });
    }

    init();

    function noOfPlayers(x, y, difficulty, type, callback){
        var players = 1;
            selectWord(difficulty, function(word, array){callback(x, y, jQuery.parseJSON(array), players, word, type);});
        clickDif = true;
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

    function generateMatrix(x, y, array, players, word, type){

        var colors = [array[0][1]];
        var previousColor = colors[0];
        var arrayLength = array.length;

        for(var i = 1; i < arrayLength; i++){
            var tempColor = array[i][1];
            if(array[i][1] !== previousColor){
                colors.push(tempColor);
                previousColor = tempColor;
            }
        }
        tilesOpened = colors.length;
        colors = colors.concat(randomColors(6 - colors.length));
        //var colors_fake = randomColors(6 - colors.length);
        console.log("Colors " + colors);
        animateCards(colors.length, y, colors, tilesOpened, players, word, array, type);
    }

    function randomColors(number){
        console.log(number);
        var temp = [];
        for(var i = 0; i < number; i++){
            var color = references.colors[Math.floor(Math.random() * references.colors.length)];
            temp.push(color);
            console.log(color);
        }
        return temp;
    }

    function playSound(track, type) {

        snd = new Audio(soundPath + 'color/_' + track + ".wav");
        snd.play();
    }

    function setupClicks(players){

        var previousClass = undefined;
        var previousObject = undefined;

        var topThat = 0;
        var leftThat = 0;

        $('.draggable').mousedown(function(){
            var that = $(this);
            topThat = that.offset().top;
            leftThat = that.offset().left;
            var track = that.children().attr('class').split(" ")[1];
            if(playLetter){
                playSound(track, '');
                timeout = setInterval(function(){
                    console.log(track);
                    playSound(track, '');
                }, 800);
            }
        });

        $('.draggable').mouseup(function(){
            clearInterval(timeout);
            var that = $(this);
            var collide = false;
            noOfClicks++;
            $.each($(".flip-container .flipper"), function(i, v){
                var flipper = $(v);
                if(doElsCollide(that, flipper) && that.children().attr('class').split(" ")[1] == flipper.attr('id').split('_')[1]){
                    console.log(flipper.attr('id') + " " + flipper.parent().index());
                    if(hideColor) {
                        drawColors([], true, flipper.parent().index());
                    }
                    that.offset({ top: flipper.offset().top - 8, left: flipper.offset().left - 8});
                    that.draggable("destroy");
                    flipper.css('transform', 'rotateY(180deg)');
                    that.css("display", "none");
                    collide = true;
                    tilesCovered++;
                    addToPile(1, tilesCovered);
                    if(tilesOpened == tilesCovered){
                        drawColors([], false);
                        setTimeout(function(){resetGame(1, noOfClicks, tilesOpened)}, 1000);
                    }
                }
            });

            if(!collide){
                that.offset({ top: topThat, left: leftThat});
                //randomPosition($('#trouver-cards'), that);
                //that.css({"top": 0, "left": 0});
            }
        });

        var doElsCollide = function(el1, el2) {
            var dimension = $('.trouver-card').width();
            var offsetEL1 = el1.offset();
            var offsetEL2 = el2.offset();
            el1.bottom = offsetEL1.top + dimension;
            el1.right = offsetEL1.left + dimension;
            el2.bottom = offsetEL2.top + dimension;
            el2.right = offsetEL2.left + dimension;

            //console.log("Top " + offsetEL1.top + " Height " + dimension + " Bottom " + el1.bottom + " Right " + el1.right + " Left " + offsetEL1.left);
            //console.log("Top " + offsetEL2.top + " Height " + dimension + " Bottom " + el2.bottom + " Right " + el2.right + " Left " + offsetEL2.left);

            return !((el1.bottom - dimension / 2 < offsetEL2.top) ||
            (offsetEL1.top > el2.bottom - dimension / 2 ) ||
            (el1.right - dimension / 2 < offsetEL2.left) ||
            (offsetEL1.left > el2.right - dimension / 2))
        };

        /*$('.flip-container .flipper').click(function(){
            if(!disableClick && !$(this).css('transform').match('matrix3d')) {
                var that = $(this);
                var classes = that.attr('class').split(' ');
                var tempClass = classes[2].split('!')[1];
                console.log("Temp " + classes[1]);
                that.css('transform', 'rotateY(180deg)');
                if (!previousObject) {
                    previousObject = $.extend(true, {}, $(this));
                    previousClass = tempClass;
                } else {
                    if(playerUpdate){
                        player2++;
                        playerUpdate = false;
                    }else{
                        player1++;
                        playerUpdate = true;
                    }
                    disableClick = true;
                    if(previousObject.attr('class').split(' ')[1] === classes[1] && previousClass == tempClass){
                        setTimeout(function () {
                            disableClick = false;
                        }, 1000);
                    }
                    else if (previousClass != tempClass) {
                        setTimeout(function () {
                            previousObject.css('transform', 'rotateY(0deg)');
                            that.css('transform', 'rotateY(0deg)');
                            previousClass = undefined;
                            previousObject = undefined;
                            disableClick = false;
                        }, 1000);
                    } else{
                        console.log(tilesCovered);
                        tilesOpened++;
                        console.log("Open " + tilesOpened);
                        if(!playerUpdate){
                            player2_score++;
                            if(players == 1){
                                addToPile(that, previousObject, 1, player1_score + player2_score);
                            }else{
                                addToPile(that, previousObject, 2, player2_score);
                            }
                        }else{
                            player1_score++;
                            if (players == 1) {
                                addToPile(that, previousObject, 1, player1_score + player2_score);
                            } else {
                                addToPile(that, previousObject, 1, player1_score);
                            }
                        }
                        previousClass = undefined;
                        previousObject = undefined;
                        if (tilesCovered == tilesOpened){
                            setTimeout(function () {
                                if(players == 1){
                                    resetGame(1, player1 + player2, tilesOpened);
                                }else if(player1_score > player2_score){
                                    resetGame(1, player1, player1_score);
                                }else if(player2_score > player1_score){
                                    resetGame(2, player2, player2_score);
                                }else{
                                    resetGame(0, player1, player1_score);
                                }
                            }, 1000);
                        }
                        disableClick = false;
                    }
                }
            }
        });*/
    }

    function resetGame(player, noOfClick, score){
        $('.difficulty').removeClass("disable");
        $('.color_icon').html("");
        tilesCovered = 0;
        tilesOpened = 0;
        noOfClicks = 0;
        textArray = [];
        if(player == 0){
            $('.player_won').html("Il est un match nul, score " + score + "!");
        }else{
            $('.player_won').html("Joueur " + player + " a gagné avec score " + score + " dans " + noOfClick + " tentatives!");
        }
        $("#continue").css("display", "none");
        doOverlayOpen();
    }

    $("#select_dif").click(function(e){
        if(clickDif){
            var pos = $(this).offset();
            //The following are the x/y coordinates of the mouse click relative to image.
            var x = e.pageX - pos.left;
            var dif = null;
            var difNo = 1;
            if(x >= 0 && x < 56){
                dif = 'easy';
                $('.color_icon').css('left', '12px');
            }else if(x >= 120 && x < 200){
                dif = 'medium';
                difNo = 2;
                $('.color_icon').css('left', '150px');
            }else if(x >= 260 && x < 400){
                dif = 'hard';
                difNo = 3;
                $('.color_icon').css('left', '313px');
            }

            if(dif != game.dif){
                game.dif = dif;
                game.y = difNo + game.players - 1;
                removeElements(function(){
                    console.log(game.array);
                    generateMatrix(game.x, game.y, game.array, game.players);
                });
            }
        }
    });

    function selectWord(level, callback){

        var word = '';

        switch(level){
            case 'easy':
                word = references.easy[Math.floor(Math.random() * references.easy.length)];
                break;
            case 'medium':
                word = references.medium[Math.floor(Math.random() * references.medium.length)];
                break;
            case 'hard':
                word = references.hard[Math.floor(Math.random() * references.hard.length)];
                break;
        }
        console.log(word);
        wordRequest(word, callback);
    }

    function wordRequest(word, callback){
        $.ajax({
            type: "POST",
            url: "../php/requests.php",
            data: {text: word},
            success: function(msg){
                if(msg == 'ERROR')
                {
                    $('.reply').html('The translation has failed');
                }
                else
                {
                    callback(word, msg);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $('.reply').html(textStatus+" - "+errorThrown);
            }
        });
    }

    function drawColors(array, white, index){

        var xDistance = 0;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillStyle="#000000";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.font= pixel_size + "px fundamental__brigade_schwerRg";
        if(array.length != 0){
            textArray[1] = array;
        }
        console.log(textArray);
        var currentWordArray = textArray[1];

        var totalWidth = 0;
        $.each(currentWordArray, function(k, v){
            totalWidth += ctx.measureText(v[0]).width;
        });
        //xDistance = (c.width - (pixel_size * currentWordArray.length)) / 2;

        for(var j = 0; j < currentWordArray.length; j++){

            var letter = currentWordArray[j][0];

            if(letter != undefined){
                ctx.beginPath();
                if(white && j != index){
                    drawText(3, pixel_size, letter, "#FFFFFF", "#FFFFFF",
                        xDistance, 1);
                }else{
                    drawText(3, pixel_size, letter, currentWordArray[j][1], currentWordArray[j][2],
                        xDistance, 1);
                }
                ctx.closePath();
                xDistance += ctx.measureText(letter).width;
            }
        }
    }

    function drawText(x, y, text, colorTop, colorBottom, xDistance, yMultiplier, i){

        var lingrad = '';

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
        //textArray[i][3] = yPixels;
        ctx.fillText(text, x + xDistance, y);
    }

    $(".logo").click(function(){
        if($("#menu").html() == ""){
            getPage("../menu.html", function(data){
                var newDiv = $("<div/>")
                    .addClass("menuOverlay")
                    .html(data);
                $("#menu").append(newDiv);
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
        }else{
            var menuOverlay = $(".menuOverlay");
            menuOverlay.css({'display': "block", 'top': -documentHeight}).animate({top:
            '+=' + documentHeight}, 1000, function(){ menuOverlay.css('height', documentHeight)});
        }
    });

    $("#restart").click(function(){
        steps = [];
        hideAnimation('.level');
        hideAnimation('.level_block');
        ctx.clearRect(0, 0, c.width, c.height);
        $('.trouver-card').remove();
        setTimeout(function(){$(".type, .difficulty").css("display", "block");}, 1000);
        doOverlayClose();
        $('.card_line').find(".flip-container").css({'transform' : 'translateY(300px) rotateZ(120deg)',
            "transition" : "all 0.9s ease-in", 'opacity' : 0});
        setTimeout(function(){
            $('.card_line').remove();
            tilesCovered = 0;
            escapeCounter = 0;
            $("#continue").css("display", "initial");
            init();
        }, 1000);
    });

    $("#continue").click(function(){
        doOverlayClose();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            escapeCounter++;
            if(escapeCounter > 1){
                doOverlayClose();
                escapeCounter = 0;
            }else{
                if($("#body_wrapper").find(".memory").length != 0){
                    doOverlayOpen();
                }
            }
        }
    });

    function addToPile(player, player_score){

        console.log(player_score);

        /*var left = - (documentWidth / 2 - card_width * 2);
        var left2 = - (documentWidth / 2 - card_width * 1);
        var top = card_width * 2.6;
        var bar = $('<div class="bar"></div>');
        if(player_score > 1){
            var neg = (player_score % 2) ? 8 : -8;
            bar.css({'transform' : 'rotateZ(' + neg + 'deg)', 'bottom' : player_score * 10});
        }

        if(player == 2){
            left = -left;
            left2 = -left2;
            bar.css('left', '89%');
        }

        $("#body_wrapper").append(bar);*/
    }

    var steps = [];

    function containsStep(value){
        var contains = false;
        for(var i = 0; i < steps.length; i++){
            if(steps[i] == value){ contains = true; break;}
        }
        return contains;
    }

    function randomPosition(block, card, size, card_width){
        var step = 0;
        if(steps.length == 0){
            step = Math.floor(Math.random() * size);
            steps.push(step);
        }else{
            do{
                step = Math.floor(Math.random() * size);
            }while(containsStep(step));
            steps.push(step);
        }
        var skid = step * card_width;
        // + Math.floor(Math.random() * card_width / 2)
        card.css("left", skid + Math.floor(Math.random() * card_width / 2));
        card.css("top", Math.floor(Math.random() * block.height() / 2));
    }

    function animateCards(x, y, selected, sel_len, players, word, array, type){

        var left = 0;
        var unil_left = 0;
        console.log("Doc Height " + (documentHeight - $("#header_wrapper").height()));
        var scaleWH = (documentHeight < documentWidth) ? documentHeight : documentWidth;
        var width = (scaleWH - $("#header_wrapper").height() - 30) / 4;
        pixel_size = width - 20;
        card_width = width;
        var card_lineWidth = ((width + 18) * 6);
        var top = card_width * 3.5;
        $("#trouver-cards").height(card_width * 2);
        $("#trouver-word").height(card_width);
        $("#trouver-word").css("display", "block");
        c.height = card_width;
        $("#trouver-cards, #trouver-word").width(card_lineWidth);
        c.width = card_lineWidth;
        var left_step = (documentWidth - card_lineWidth) / 2;
        console.log("From left " + (left_step));

        switch(difficulty){
            case 'easy':
                console.log("Diff " + $(".logo_difficulty").offset().left);
                //112, 250, 413
                unil_left = $(".logo_difficulty").offset().left - 50;
                left = -(Math.abs(left_step - unil_left));
                break;
            case 'medium':
                unil_left = $(".logo_difficulty").offset().left + 80;
                left = -(Math.abs(left_step - unil_left));
                break;
            case 'hard':
                unil_left = $(".logo_difficulty").offset().left + 240;
                left = -(Math.abs(left_step - unil_left));
                break;
        }
        // set interval
        var i = 0;
        var j = 0;
        var bodyWrapper = $('#body_wrapper');
        var tid = setInterval(loopCards, animationStep);
        var card_line = $('<div class="card_line"></div>');
        card_line.css('width', (width + 18) * 6);
        bodyWrapper.append(card_line);
        function loopCards() {
            var $newdiv1 = $( "<div class='unil_card'>" );
            var tempJ = j;
            if(tempJ < sel_len){
                if(i == 0) {
                    $newdiv1.css("left", unil_left);
                    $("#body_wrapper").append($newdiv1);
                    $newdiv1.animate({
                        left: "+=" + (left + (width + 10) * j),
                        top: "+=" + (top + (width + 13) * i)
                    }, animationTime, function () {
                        $newdiv1.remove();
                    });
                    $newdiv1.css({"-webkit-animation" : "fly 1.0s", "animation" : "fly 1.0s"});
                }
            }
            setTimeout(function(){
                var temp = selected.shift();
                console.log(temp);
                if(temp != undefined) {
                    temp = temp.substr(1);
                    var add_card = $(flip_card + temp + flip_card_2 + '<img src="../images/trouver/' + type + '/' + temp + '.png"></div></div></div>');
                    card_line.append(add_card);
                    if(temp == 'empty') {
                        temp = references.colors[Math.floor(Math.random() * references.colors.length)];
                    }
                    var add_color = $(trouver_card + temp + trouver_card2 + type + '/' + temp + '.png"></div>');
                    $('#trouver-cards').append(add_color);
                    randomPosition($('#trouver-cards'), add_color, x, card_width);

                    $('.draggable').draggable();

                    console.log(sel_len);
                    $(".flip-container, .flip-container .flipper, .front, .back, .front img, .back img, .trouver-card").css("width", width);
                    $(".flip-container, .flip-container .flipper, .front, .back, .front img, .back img, .trouver-card").css("height", width);
                    if(tempJ < sel_len){
                        $(".flip-container").css("display", "inline-block");
                        if (tempJ == x - 1) {
                            card_line = $('<div class="card_line"></div>');
                            card_line.css('width', card_lineWidth);
                            bodyWrapper.append(card_line);
                        }
                    }
                }
            }, animationTime);
            j++;
            if(j == x){
                j = 0;
                i++;

                // + 1
                if(i == y + 1){
                    var timed = (x == 1) ? animationTime : animationStep;
                    setTimeout(function(){abortTimer(array);}, timed);
                }
            }
        }
        function abortTimer(array) {
            clearInterval(tid);
            drawColors(array, hideColor);
            setupClicks(players);

        }
    }
});