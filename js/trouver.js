jQuery(document).ready(function($){

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
    var counter = 1;
    var pixel_size = 100,
        textArray = new Array(),
        c = document.getElementById('trouver-word'),
        ctx = c.getContext('2d');
        ctx.font = 'fundamental__brigade_schwerRg';

    $("body").css("left", documentWidth / 2 - $("body").width() / 2);

    var references = {
        consonants: ['c.b!14', 'c.c!8', 'c.d!17', 'c.f!7', 'c.g!6', 'c.p!12', 'c.t!10', 'c.ph!7', 'c.qu!8', 'c.r!13', 'c.s!1', 'c.se!5', 'c.sse!1', 'c.tt!1', 'c.ve!11', 'c.x!4', 'c.xx!3', 'c.z!5', 'c.ç!1', 'c.ce!1', 'c.ch!18', 'c.ge!2', 'c.gu!6', 'c.j!2', 'c.k!8', 'c.l!16', 'c.m!15', 'c.n!9'],
        vowels: ['v.u!1', 'v.un!15', 'v.y!6', 'v.a!2', 'v.ai!7', 'v.ain!15', 'v.an!3', 'v.au!9', 'v.e_!4', 'v.e!7', 'v.ee!7', 'v.een!3', 'v.eeu!8', 'v.ei!7', 'v.ein!15', 'v.en!15', 'v.er!4', 'v.es!4', 'v.eu!8', 'v.eux!5', 'v.ez!4', 'v.i!6', 'v.in!15', 'v.o!9', 'v.oeu!8', 'v.oi!10', 'v.oin!11', 'v.om!12', 'v.on!12', 'v.oo!13', 'v.ou!14'],
        easy:['oh', 'eh', 'où', 'y', 'ah', 'ai', 'heu', 'heu', 'deux', 'dans', 'de', 'du', 'des', 'dont', 'dis', 'dos', 'dès', 'cinq', 'six', 'sept', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quinze'],
        medium: ['hein', 'en', 'on', 'os', 'hausse', 'ce', 'si', 'sous', 'sein', 'cent', 'ça', 'ses', 'en haut', 'en bas', 'paume', 'pomme', 'on sait', 'sur', 'au lit', 'on lit', 'ceci', 'dessus', 'dessous', 'lundi', 'jeudi', 'dehors', 'joli', 'je dis', 'dessin'],
        hard: ['quand', 'coup', 'qui', 'que', 'pour', 'corps', 'il a', 'elle est', 'femme', 'fils', 'fille', 'sourd', 'sœur', 'encore', 'ouvert', 'fermé', 'mangeons', 'prenez', 'je peux', 'mari', 'monsieur', 'ça sert', 'ça sort', 'sincère', 'mon sire', 'plus', 'mardi', 'dimanche', 'un autre', 'madame'],
        easy2:['mais', 'mes', 'mon', 'jus', 'joue', 'gens', 'jeu', 'âge', 'vous', 'chant', 'chou', 'chez', 'chat', 'chaud', 'roue', 'rond', 'rang', 'rein', 'rue', 'riz', 'rez', 'raie', 'rat', 'rot', 'grand', 'chez eux', 'il est', 'tu dis', 'je vais', 'je vis', 'le vent', 'les vins', 'ils vont', 'tu fais', 'tout fou', 'je veux', 'il va', 'petit', 'vos dents', 'cheveux', 'chanson'],
        medium2: ['un loup', 'le lit', 'un an', 'un nom', 'un nez', 'un nid', 'un nain', 'un nœud', 'saute', 'sotte', 'mais non', 'mes noms', 'cela', 'mes mains', 'il ment', 'du lait', 'trop lent', 'le mot', 'une île', 'douze ans', 'la vie', 'la fin', 'ils font', 'il faut', 'tout nu', 'ne pas', 'le long du', 'quatorze', 'les jours', 'je les lis', 'il y va', 'mercredi', 'nous tous', 'ne plus'],
        hard2: ['le banc', 'au bout', 'un bain', 'tout bu', 'du feu', 'un œuf', 'une heure', 'merci', 'les bottes', 'prenez', 'tu prends', 'cinq heures', 'bonjour', 'un autre', 'ça vaut ça', 'ils prennent', 'samedi', 'avez vous eu'],
        colors:['#3A4972', '#F7D3B5', '#EDC4DD', '#ED6E00', '#930FA5', '#AA930A', '#F43FA5']
    };

    function memGame() {
        this.x = 6;
        this.y = 1;
        this.dif = 'easy';
        //array of words
        this.array = null;
        this.type = null;
        this.attempt = 0;
        this.started = false;
        this.cardLineWidth = 0;
    }

    var game = null;

    function init(){

        if(game === null){
            game = new memGame();
        }else{
            moveLeft('#header_wrapper', 0, 0);
            $('.color_icon').html("");
        }
        clickDif = false;
        ctx.clearRect(0, 0, c.width, c.height);
        $('.menu').css('display', "none");
        $('.players').css("display", "none");
        $('.difficulty img').unbind( "click" );
        $('.difficulty img').click(function(){
            var that = $(this);
            displayAnimation('.level_block');
            displayAnimation('.level');
            $('.color_icon').append(circ_squa);
            $('.difficulty').css("display", "none");
            game.dif = that.attr('id');
            switch(game.dif){
                case 'easy':
                    $('.color_icon').css('left', '12px');
                    playLetter = true;
                    hideColor = false;
                    $('#menu-g').attr("src", "../images/game/decodade_1.png");
                    noOfPlayers(6, 1, game.dif, "colors", generateMatrix);
                    break;
                case 'medium':
                    $('.color_icon').css('left', '150px');
                    playLetter = true;
                    hideColor = false;
                    $('#menu-g').attr("src", "../images/game/decodade_1.png");
                    noOfPlayers(6, 1, game.dif, "objects", generateMatrix);
                    break;
                case 'hard':
                    $('.color_icon').css('left', '313px');
                    playLetter = false;
                    hideColor = false;
                    $('#menu-g').attr("src", "../images/game/decodade_1.png");
                    noOfPlayers(6, 1, game.dif, "objects_white", generateMatrix);
                    break;
                case 'easy2':
                    $('.color_icon').css('left', '12px');
                    playLetter = false;
                    hideColor = true;
                    $('#menu-g').attr("src", "../images/game/decodade_2.png");
                    noOfPlayers(6, 1, game.dif, "objects", generateMatrix);
                    break;
                case 'medium2':
                    $('.color_icon').css('left', '150px');
                    playLetter = false;
                    hideColor = true;
                    $('#menu-g').attr("src", "../images/game/decodade_2.png");
                    noOfPlayers(6, 1, game.dif, "colors", generateMatrix);
                    break;
                case 'hard2':
                    $('.color_icon').css('left', '313px');
                    playLetter = false;
                    hideColor = true;
                    $('#menu-g').attr("src", "../images/game/decodade_2.png");
                    noOfPlayers(6, 1, game.dif, "objects_white", generateMatrix);
                    break;
            }
            moveLeft('#header_wrapper', 60, 0);
            displayAnimation('#menu-g');
        });
    }

    init();

    function scaleStages(id, scale){
        var stage = $("#" + id);
        stage.css('transform', 'scale(' + scale + ')');
        stage.css('transform', 'scale(' + scale + ')');
        stage.css( '-o-transform', 'scale(' + scale + ')');
        stage.css('-ms-transform', 'scale(' + scale + ')');
        stage.css('-webkit-transform', 'scale(' + scale + ')');
        stage.css('-moz-transform', 'scale(' + scale + ')');
        stage.css('-o-transform', 'scale(' + scale + ')');
    }

    scaleStages("Stage", 0.3);

    var loadedAnim = [];

    function loadStage(name, number){
        //console.log(name);
        var tempV = false;
        var scripts = $('head script');
        scripts.each(function(){
            var that = $(this);
            if(that[0].src.match('_edge.js')){
                that.remove();
                tempV = true;
            }
        });
        delete AdobeEdge.compositions['EDGE-2714543' + number];
        if(checkArray(name)){
            //console.log("NA");
            var newScript   = document.createElement("script");
            newScript.type  = "text/javascript";
            newScript.src   = '../animations/' + name + '_edge.js';
            newScript.text  = "";
            document.head.appendChild(newScript);
        }else{
            loadedAnim.push(name);
        }
        AdobeEdge.loadComposition('../animations/' + name, 'EDGE-2714543' + number, {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "00",
            height: "480"
        }, {"dom":{}}, {"dom":{}});
    }

    function checkArray(name){
        var found = false;
        for(var i = 0; i < loadedAnim.length;i++){
            if(loadedAnim[i] == name){
                found = true;
            }
        }
        return found;
    }

    function noOfPlayers(x, y, difficulty, type, callback){
        game.players = 1;
        game.x = x;
        game.y = y;
        game.type = type;
            selectWord(difficulty, function(word, array){callback(x, y, array, game.players, word, type);});
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

        displayAnimation('#rope');
        $(".loader").css("display", "block");
        $("#rope").show().animate({top: 0}, {duration: 2000, easing: 'easeOutElastic'});
        var colors = [array[0][1]];
        var previousColor = colors[0];
        var arrayLength = array.length;

        for(var i = 1; i < arrayLength; i++){
            var tempColor = array[i][1];
            if(array[i][1] !== previousColor && array[i][1] != " "){
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

    function playSound_(track, type) {

        snd = new Audio(soundPath + 'color/_' + track + ".wav");
        snd.play();
    }

    var firstL = 0;
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
                playSound_(track, '');
                timeout = setInterval(function(){
                    console.log(track);
                    playSound_(track, '');
                }, 800);
            }
        });

        $('.draggable').mouseup(function(){
            clearInterval(timeout);
            var that = $(this);
            var collide = false;
            noOfClicks++;
            $.each($(".card_line .flip-container .flipper"), function(i, v){
                var flipper = $(v);
                if(doElsCollide(that, flipper) && that.children().attr('class').split(" ")[1] == flipper.attr('id').split('_')[1]){
                    if(firstL == i){
                        firstL++;
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
                        if(tilesOpened == tilesCovered){
                            firstL = 0;
                            drawColors([], false);
                            setTimeout(function(){resetGame()}, 1000);
                        }
                    }else{
                        that.offset({ top: topThat, left: leftThat});
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
    }

    function resetGame(){
            var timer = 0;
            $("#trouver-cards").css("display", "none");
            $("#anim-canvas").css('display', "block");
            $("#anim-canvas").width(game.cardLineWidth);
        if(counter % 5 == 0){

            timer = 18500;
            start();
        }else{
            displayAnimation('.anim_space');
            timer = 3000;
            loadStage('ouais_seul', '5');
        }
        counter++;

            setTimeout(function(){
                removeElements(function(){
                $("#trouver-cards").css('display', "block");
                $("#anim-canvas").css('display', "none");
                selectWord(game.dif, function(word, array){generateMatrix(game.x, game.y, array,
                    game.players, word, game.type);});
                });
            }, timer);
    }

    $("#rope img").click(function(){
        $("#rope").show().animate({top: 10}, {duration: 1000, easing: 'easeOutElastic'});
        removeElements(function(){
            selectWord(game.dif, function(word, array){generateMatrix(game.x, game.y, array,
                game.players, word, game.type);});
        });
    });

    //Changing difficulty

    $("#select_dif").click(function(e){

        var level2 = (game.dif[game.dif.length - 1] != 2) ? "" : "2";

        if(clickDif){
            var pos = $(this).offset();
            //The following are the x/y coordinates of the mouse click relative to image.
            var x = e.pageX - pos.left;
            var dif = null;
            var difNo = 1;
            if(x >= 0 && x < 56){
                dif = 'easy';
                game.type = 'colors';
                $('.color_icon').css('left', '12px');
            }else if(x >= 120 && x < 200){
                dif = 'medium';
                difNo = 2;
                game.type = 'objects';
                $('.color_icon').css('left', '150px');
            }else if(x >= 260 && x < 400){
                dif = 'hard';
                difNo = 3;
                game.type = 'objects_white';
                $('.color_icon').css('left', '313px');
            }
            dif = dif + level2;
            if(dif != game.dif){
                game.dif = dif;
                game.y = difNo + game.players - 1;
                removeElements(function(){
                    selectWord(game.dif, function(word, array){generateMatrix(game.x, game.y, array,
                        game.players, word, game.type);});
                });
            }
        }
    });

    function selectWord(level, callback){

        var word = '';

        console.log("LEVEL " + level);

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
            case 'easy2':
                word = references.easy2[Math.floor(Math.random() * references.easy2.length)];
                break;
            case 'medium2':
                word = references.medium2[Math.floor(Math.random() * references.medium2.length)];
                break;
            case 'hard2':
                word = references.hard2[Math.floor(Math.random() * references.hard2.length)];
                break;
        }
        console.log(word);
        var words = word.split(" ");
        var wordsL = words.length;
        if(wordsL > 1){
            var wordsArray = new Array();

            var asyncLoop = function(o){
                var i=-1,
                    length = o.length;

                var loop = function(){
                    i++;
                    if(i==length){o.callback(); return;}
                    o.functionToLoop(loop, i);
                }
                loop();//init
            }

            asyncLoop({
                length : wordsL,
                functionToLoop : function(loop, i){

                    wordRequest(words[i], function(word_r, msg){
                       wordsArray = wordsArray.concat(msg);
                        if(i != wordsL - 1){
                            wordsArray.push({"0" : " ", "1" : " ", "3" : " "});
                        }
                        loop();
                    });
                },
                callback : function(){
                    console.log(word + " " + wordsArray);
                    callback(word, wordsArray);
                }
            });
        }else{
            wordRequest(word, callback);
        }
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
                    console.log(word + " " + msg);
                    callback(word, jQuery.parseJSON(msg));
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $('.reply').html(textStatus+" - "+errorThrown);
            }
        });
    }

    function drawColors(array, white, index){

        console.log("Index " + index);

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
        })
        //xDistance = (c.width - (pixel_size * currentWordArray.length)) / 2;

        var previousOne = "#FFFFFF";

        for(var j = 0; j < currentWordArray.length; j++){

            var letter = currentWordArray[j][0];

            if(letter != undefined){
                ctx.beginPath();
                if(white){
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
        openMenu();
    });

    function openMenu(){
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
    }

    function removeElements(callback){
        $('.anim_space').css('display', 'none');
        steps = [];
        ctx.clearRect(0, 0, c.width, c.height);
        $('.trouver-card').remove();
        $('.card_line').find(".flip-container").css({'transform' : 'translateY(300px) rotateZ(120deg)',
            "transition" : "all 0.9s ease-in", 'opacity' : 0});
        setTimeout(function(){
            $('.card_line').html("");
            tilesCovered = 0;
            escapeCounter = 0;
        }, 1000);
        if(callback){
            callback();
        }
    }

    function moveLeft(elem, dist, time){
        setTimeout(function(){
            $(elem).css('left', dist);
        }, time);
    }

    $("#menu-g").click(function(){
        openMenu();
        setTimeout(function(){
            openGamesItem();
        }, 100);
    });

    $("#restart").click(function(){
        removeElements(function(){
            hideAnimation('.level, .level_block, #menu-g');
            setTimeout(function(){$(".type, .difficulty").css("display", "block");}, 1000);
            doOverlayClose();
            setTimeout(function(){
                $('.card_line').remove();
                tilesCovered = 0;
                escapeCounter = 0;
                $("#continue").css("display", "initial");
                init();
            }, 1000);
        });
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
        $("#trouver-cards, #trouver-word, #anim-canvas").width(card_lineWidth);
        game.cardLineWidth = card_lineWidth;
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
                    $(".card_line .flip-container, .card_line .flip-container .flipper, .front, .back, .front img, .back img, .trouver-card").css("width", width);
                    $(".card_line .flip-container, .card_line .flip-container .flipper, .front, .back, .front img, .back img, .trouver-card").css("height", width);
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
                    setTimeout(function(){abortTimer(array); }, timed);
                }
            }
        }
        function abortTimer(array) {
            clearInterval(tid);
            drawColors(array, hideColor);
            $('.loader').css("display", "none");
            setupClicks(players);
            clickDif = true;
        }
    }
});

var canvas, stage, exportRoot;
function start() {
    // --- write your JS code here ---

    canvas = document.getElementById("canvas");
    images = images||{};
    ss = ss||{};

    var loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_.json", type:"spritesheet", id:"ouais10_atlas_"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_2.json", type:"spritesheet", id:"ouais10_atlas_2"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_3.json", type:"spritesheet", id:"ouais10_atlas_3"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_4.json", type:"spritesheet", id:"ouais10_atlas_4"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_5.json", type:"spritesheet", id:"ouais10_atlas_5"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_6.json", type:"spritesheet", id:"ouais10_atlas_6"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_7.json", type:"spritesheet", id:"ouais10_atlas_7"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_8.json", type:"spritesheet", id:"ouais10_atlas_8"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_9.json", type:"spritesheet", id:"ouais10_atlas_9"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_10.json", type:"spritesheet", id:"ouais10_atlas_10"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_11.json", type:"spritesheet", id:"ouais10_atlas_11"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_12.json", type:"spritesheet", id:"ouais10_atlas_12"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_13.json", type:"spritesheet", id:"ouais10_atlas_13"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_14.json", type:"spritesheet", id:"ouais10_atlas_14"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_15.json", type:"spritesheet", id:"ouais10_atlas_15"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_16.json", type:"spritesheet", id:"ouais10_atlas_16"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_17.json", type:"spritesheet", id:"ouais10_atlas_17"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_18.json", type:"spritesheet", id:"ouais10_atlas_18"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_19.json", type:"spritesheet", id:"ouais10_atlas_19"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_20.json", type:"spritesheet", id:"ouais10_atlas_20"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_21.json", type:"spritesheet", id:"ouais10_atlas_21"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_22.json", type:"spritesheet", id:"ouais10_atlas_22"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_23.json", type:"spritesheet", id:"ouais10_atlas_23"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_24.json", type:"spritesheet", id:"ouais10_atlas_24"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_25.json", type:"spritesheet", id:"ouais10_atlas_25"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_26.json", type:"spritesheet", id:"ouais10_atlas_26"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_27.json", type:"spritesheet", id:"ouais10_atlas_27"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_28.json", type:"spritesheet", id:"ouais10_atlas_28"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_29.json", type:"spritesheet", id:"ouais10_atlas_29"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_30.json", type:"spritesheet", id:"ouais10_atlas_30"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_31.json", type:"spritesheet", id:"ouais10_atlas_31"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_32.json", type:"spritesheet", id:"ouais10_atlas_32"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_33.json", type:"spritesheet", id:"ouais10_atlas_33"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_34.json", type:"spritesheet", id:"ouais10_atlas_34"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_35.json", type:"spritesheet", id:"ouais10_atlas_35"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_36.json", type:"spritesheet", id:"ouais10_atlas_36"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_37.json", type:"spritesheet", id:"ouais10_atlas_37"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_38.json", type:"spritesheet", id:"ouais10_atlas_38"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_39.json", type:"spritesheet", id:"ouais10_atlas_39"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_40.json", type:"spritesheet", id:"ouais10_atlas_40"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_41.json", type:"spritesheet", id:"ouais10_atlas_41"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_42.json", type:"spritesheet", id:"ouais10_atlas_42"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_43.json", type:"spritesheet", id:"ouais10_atlas_43"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_44.json", type:"spritesheet", id:"ouais10_atlas_44"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_45.json", type:"spritesheet", id:"ouais10_atlas_45"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_46.json", type:"spritesheet", id:"ouais10_atlas_46"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_47.json", type:"spritesheet", id:"ouais10_atlas_47"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_48.json", type:"spritesheet", id:"ouais10_atlas_48"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_49.json", type:"spritesheet", id:"ouais10_atlas_49"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_50.json", type:"spritesheet", id:"ouais10_atlas_50"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_51.json", type:"spritesheet", id:"ouais10_atlas_51"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_52.json", type:"spritesheet", id:"ouais10_atlas_52"}, true);
    loader.loadFile({src:"../images/trouver/animation/ouais10_atlas_53.json", type:"spritesheet", id:"ouais10_atlas_53"}, true);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
    var queue = evt.target;
    ss["ouais10_atlas_"] = queue.getResult("ouais10_atlas_");
    ss["ouais10_atlas_2"] = queue.getResult("ouais10_atlas_2");
    ss["ouais10_atlas_3"] = queue.getResult("ouais10_atlas_3");
    ss["ouais10_atlas_4"] = queue.getResult("ouais10_atlas_4");
    ss["ouais10_atlas_5"] = queue.getResult("ouais10_atlas_5");
    ss["ouais10_atlas_6"] = queue.getResult("ouais10_atlas_6");
    ss["ouais10_atlas_7"] = queue.getResult("ouais10_atlas_7");
    ss["ouais10_atlas_8"] = queue.getResult("ouais10_atlas_8");
    ss["ouais10_atlas_9"] = queue.getResult("ouais10_atlas_9");
    ss["ouais10_atlas_10"] = queue.getResult("ouais10_atlas_10");
    ss["ouais10_atlas_11"] = queue.getResult("ouais10_atlas_11");
    ss["ouais10_atlas_12"] = queue.getResult("ouais10_atlas_12");
    ss["ouais10_atlas_13"] = queue.getResult("ouais10_atlas_13");
    ss["ouais10_atlas_14"] = queue.getResult("ouais10_atlas_14");
    ss["ouais10_atlas_15"] = queue.getResult("ouais10_atlas_15");
    ss["ouais10_atlas_16"] = queue.getResult("ouais10_atlas_16");
    ss["ouais10_atlas_17"] = queue.getResult("ouais10_atlas_17");
    ss["ouais10_atlas_18"] = queue.getResult("ouais10_atlas_18");
    ss["ouais10_atlas_19"] = queue.getResult("ouais10_atlas_19");
    ss["ouais10_atlas_20"] = queue.getResult("ouais10_atlas_20");
    ss["ouais10_atlas_21"] = queue.getResult("ouais10_atlas_21");
    ss["ouais10_atlas_22"] = queue.getResult("ouais10_atlas_22");
    ss["ouais10_atlas_23"] = queue.getResult("ouais10_atlas_23");
    ss["ouais10_atlas_24"] = queue.getResult("ouais10_atlas_24");
    ss["ouais10_atlas_25"] = queue.getResult("ouais10_atlas_25");
    ss["ouais10_atlas_26"] = queue.getResult("ouais10_atlas_26");
    ss["ouais10_atlas_27"] = queue.getResult("ouais10_atlas_27");
    ss["ouais10_atlas_28"] = queue.getResult("ouais10_atlas_28");
    ss["ouais10_atlas_29"] = queue.getResult("ouais10_atlas_29");
    ss["ouais10_atlas_30"] = queue.getResult("ouais10_atlas_30");
    ss["ouais10_atlas_31"] = queue.getResult("ouais10_atlas_31");
    ss["ouais10_atlas_32"] = queue.getResult("ouais10_atlas_32");
    ss["ouais10_atlas_33"] = queue.getResult("ouais10_atlas_33");
    ss["ouais10_atlas_34"] = queue.getResult("ouais10_atlas_34");
    ss["ouais10_atlas_35"] = queue.getResult("ouais10_atlas_35");
    ss["ouais10_atlas_36"] = queue.getResult("ouais10_atlas_36");
    ss["ouais10_atlas_37"] = queue.getResult("ouais10_atlas_37");
    ss["ouais10_atlas_38"] = queue.getResult("ouais10_atlas_38");
    ss["ouais10_atlas_39"] = queue.getResult("ouais10_atlas_39");
    ss["ouais10_atlas_40"] = queue.getResult("ouais10_atlas_40");
    ss["ouais10_atlas_41"] = queue.getResult("ouais10_atlas_41");
    ss["ouais10_atlas_42"] = queue.getResult("ouais10_atlas_42");
    ss["ouais10_atlas_43"] = queue.getResult("ouais10_atlas_43");
    ss["ouais10_atlas_44"] = queue.getResult("ouais10_atlas_44");
    ss["ouais10_atlas_45"] = queue.getResult("ouais10_atlas_45");
    ss["ouais10_atlas_46"] = queue.getResult("ouais10_atlas_46");
    ss["ouais10_atlas_47"] = queue.getResult("ouais10_atlas_47");
    ss["ouais10_atlas_48"] = queue.getResult("ouais10_atlas_48");
    ss["ouais10_atlas_49"] = queue.getResult("ouais10_atlas_49");
    ss["ouais10_atlas_50"] = queue.getResult("ouais10_atlas_50");
    ss["ouais10_atlas_51"] = queue.getResult("ouais10_atlas_51");
    ss["ouais10_atlas_52"] = queue.getResult("ouais10_atlas_52");
    ss["ouais10_atlas_53"] = queue.getResult("ouais10_atlas_53");
    exportRoot = new lib.ouais09_double();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function playSound(id, loop) {
    return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}