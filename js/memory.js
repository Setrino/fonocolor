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
    var documentWidth = $(document).width();
    var tilesCovered = 0;
    var tilesOpened = 0;
    var escapeCounter = 0;
    var animationTime = 1000;
    var animationStep = 100;
    var card_width = 0;
    var lid = null;
    var showAnim = false;
    //circle animation name
    var mainAnim = 'regarde_et_fixe';
    //easy, medium, hard
    var clickDif = false;

    var references = {
        consonants: ['c.b', 'c.c', 'c.ch', 'c.d', 'c.g', 'c.ge', 'c.l', 'c.m', 'c.n', 'c.p', 'c.ph', 'c.r', 'c.s', 'c.se', 'c.t', 'c.ve'],
        vowels: ['v.a', 'v.ai', 'v.ain', 'v.an', 'v.au', 'v.e_', 'v.eu', 'v.eux', 'v.i', 'v.o', 'v.on', 'v.ou', 'v.u'],
        consonants2: ['c2.b!14', 'c2.c!8', 'c2.d!17', 'c2.f!7', 'c2.g!6', 'c2.p!12', 'c2.t!10', 'c2.ph!7', 'c2.qu!8', 'c2.r!13', 'c2.s!1', 'c2.se!5', 'c2.sse!1', 'c2.tt!1', 'c2.ve!11', 'c2.x!4', 'c2.xx!3', 'c2.z!5', 'c2.ç!1', 'c2.ce!1', 'c2.ch!18', 'c2.ge!2', 'c2.gu!6', 'c2.j!2', 'c2.k!8', 'c2.l!16', 'c2.m!15', 'c2.n!9'],
        vowels2: ['v2.u!1', 'v2.un!15', 'v2.y!6', 'v2.a!2', 'v2.ai!7', 'v2.ain!15', 'v2.an!3', 'v2.au!9', 'v2.e_!4', 'v2.e!7', 'v2.ee!7', 'v2.een!3', 'v2.eeu!8', 'v2.ei!7', 'v2.ein!15', 'v2.en!15', 'v2.er!4', 'v2.es!4', 'v2.eu!8', 'v2.eux!5', 'v2.ez!4', 'v2.i!6', 'v2.in!15', 'v2.o!9', 'v2.oeu!8', 'v2.oi!10', 'v2.oin!11', 'v2.om!12', 'v2.on!12', 'v2.oo!13', 'v2.ou!14'],
        items:[],
        circles: [],
        squares: []
    };

   //setTimeout(addDEBUGBars, 0);

    function memGame() {
        //number of columns
        this.x = 6;
        //number of rows
        this.y = 1;
        this.level = 'lvl_voy';
        this.dif = 'easy';
        //array of words
        this.array = null;
        this.players = 1;
        this.mainAnim = 'regarde_et_fixe';
        this.attempt = 0;
        this.started = false;
    }

    var game = null;

    function init(){
        if(game === null){
            game = new memGame();
        }
        var array = [];
        var clickA = false;
        clickDif = false;
        $('.menu').css('display', "none");
        $('.players').css("display", "none");
        $('.difficulty img').unbind('click');
        $('.type img').css('opacity', '1.0');
        moveLeft('#header_wrapper', 0, 1000);
        hideAnimation('.level');
        hideAnimation('.level_block');
        $('.type img').unbind("click");
        $('.difficulty img').unbind("click");
        $('.type img').click(function(){
            var that = $(this);
            $('.level').html('');
            $('.color_icon').html('');
            game.level = that.attr('id');
            switch(game.level){
                case 'lvl_voy':
                    $('.level').append(voyelle_img);
                    $('.color_icon').append(circle);
                    array = references.vowels;
                    showAnim = true;
                    mainAnim = 'regarde_et_fixe';
                    break;
                case 'lvl_con':
                    $('.level').append(consonnes_img);
                    $('.color_icon').append(square);
                    array = references.consonants;
                    showAnim = true;
                    mainAnim = 'carre_fixe';
                    break;
                case 'lvl_both':
                    $('.level').append(con_voy_img);
                    $('.color_icon').append(circ_squa);
                    array = references.consonants.concat(references.vowels);
                    showAnim = false;
                    break;
                case 'lvl_voy2':
                    $('.level').append(voyelle_img);
                    $('.color_icon').append(circle);
                    array = references.vowels2;
                    showAnim = true;
                    mainAnim = 'regarde_et_fixe';
                    break;
                case 'lvl_con2':
                    $('.level').append(consonnes_img);
                    $('.color_icon').append(square);
                    array = references.consonants2;
                    showAnim = true;
                    mainAnim = 'carre_fixe';
                    break;
                case 'lvl_bot2h':
                    $('.level').append(con_voy_img);
                    $('.color_icon').append(circ_squa);
                    array = references.consonants2.concat(references.vowels2);
                    showAnim = false;
                    break;
            }
            game.array = array;
            clickA = true;
            $('.type img').css('opacity', '0.2');
            that.css('opacity', '1.0');
            $('.difficulty').removeClass("disable");
        });
        $('.difficulty img').click(function(){
            if(clickA){
                $('.type img').off('click');
                $(this).off('click');
                game.dif = $(this).attr('id');
                game.x = 6;
                switch(game.dif){
                    case 'easy':
                        $('.color_icon').css('left', '12px');
                        game.y = 1;
                        noOfPlayers(array, generateMatrix);
                        break;
                    case 'medium':
                        $('.color_icon').css('left', '150px');
                        game.y = 2;
                        noOfPlayers(array, generateMatrix);
                        break;
                    case 'hard':
                        $('.color_icon').css('left', '313px');
                        game.y = 3;
                        noOfPlayers(array, generateMatrix);
                        break;
                }
                displayAnimation('.level_block');
                displayAnimation('.level');
                displayAnimation('.anim_space');
                if(game.level.match('both')){
                    $('.anim_space').css('left', '-65px');
                    moveLeft('#header_wrapper', 135, 0);
                    $(".logo_block").css('width', '480');
                }else{
                    moveLeft('#header_wrapper', 71, 0);
                    $(".logo_block").css('width', '550');
                }
                clearInterval(lid);
                loadStage(mainAnim, '5');
                lid = setInterval(function(){loadStage(mainAnim, '5');}, 7000);
                $('.difficulty').addClass("disable");
                $('.type').removeClass("disable");
                $('.type, .difficulty').css("display", "none");
            }
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
    scaleStages("StageSquare", 0.3);
    scaleStages("StageCircle1", 0.33);
    scaleStages("StageCircle2", 0.33);
    scaleStages("StageCircle3", 0.33);
    scaleStages("StageCircle4", 0.33);
    scaleStages("StageCircle5", 0.33);
    scaleStages("StageCircle6", 0.33);

    var loadedAnim = [];

    function loadStage(name, number){
        //console.log(name);
        var tempV = false;
        var scripts = $('head script');
        scripts.each(function(){
            var that = $(this);
            if(that[0].src.match('_edge.js')){
                that.remove();
                if(name != mainAnim){
                    clearInterval(lid);
                    lid = setInterval(function(){loadStage(mainAnim, number);}, 7000);
                }
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

    function noOfPlayers(array, callback){
        var players = 1;
        displayAnimation(".players");
        $('.players img').click(function(){

            switch($(this).attr('id')){
                case 'one_p':
                    players = 1;
                    break;
                case 'two_p':
                    players = 2;
                    game.y += 1;
                    break;
            };
            $('.players').css("display", "none");
            $(this).off('click');
            game.players = players;
            clickDif = true;
            callback(game.x, game.y, array, players);
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

    function generateMatrix(x, y, array, players){

        var yAxis = y || x;
        var selected = [];
        var tilesNo = x * yAxis / 2;
        tilesCovered = tilesNo;
        var arrayRef = array.slice(0);

        for (var i = 0; i < tilesNo; i++) {
            // Randomly pick one from the array of remaining faces
            var randomInd = Math.floor(Math.random() * arrayRef.length);
            console.log(arrayRef);
            var face_f = arrayRef[randomInd].split('.');
            var face = face_f[1];
            // Push 2 copies onto array

            switch(face_f[0]){
                case 'c':
                    selected.push('consonants_flat/' + face);
                    selected.push('objects/' + face);
                    break;
                case 'v':
                    selected.push('vowels_flat/' + face);
                    selected.push('objects/' + face);
                    break;
                case 'c2':
                    selected.push('consonants/' + face);
                    selected.push('squares/' + face);
                    break;
                case 'v2':
                    selected.push('vowels/' + face);
                    selected.push('circles/' + face);
                    break;
            }
            // Remove from array
            arrayRef.splice(randomInd, 1);
        }

        selected.sort(function() {
            return 0.5 - Math.random();
        });

        animateCards(x, y, selected, players);
    }

    function setupClicks(players){

        var previousClass = undefined;
        var previousObject = undefined;

        var disableClick = false;
        var player1 = 0;
        var player1_score = 0;
        var player2 = 0;
        var player2_score = 0;
        var playerUpdate = (players > 1) ? true : false;

        $('.card_line .flip-container .flipper').click(function(){
            if(!disableClick && !$(this).css('transform').match('matrix3d')) {
                var that = $(this);
                var classes = that.attr('class').split(' ');
                var tempClass = classes[2];
                console.log("Temp " + classes[1] + " trial " + tempClass);
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
                        game.attempt += 1;
                        updateBalls();
                    } else{
                        console.log(tilesCovered);
                        tilesOpened++;
                        if(!playerUpdate){
                            player2_score++;
                            if(players == 1){
                                console.log("Open " + tilesOpened + " " + tempClass);
                                addToPile(that, previousObject, 1, player1_score + player2_score, tempClass);
                            }else{
                                addToPile(that, previousObject, 2, player2_score, tempClass);
                            }
                        }else{
                                player1_score++;
                                if (players == 1) {
                                    console.log("Open " + tilesOpened);
                                    addToPile(that, previousObject, 1, player1_score + player2_score, tempClass);
                                } else {
                                    addToPile(that, previousObject, 1, player1_score, tempClass);
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
                            }, 3000);
                        }
                        disableClick = false;
                    }
                }
            }
        });
    }

    function resetGame(player, noOfClick, score){
        //createFirework(66,139,4,5,50,100,50,50,true,true);
        //setTimeout(function(){createFirework(26,109,3,5,50,100,90,100,true,true);}, 600);
        //setTimeout(function(){createFirework(120,69,2,5,50,100,10,100,true,true);}, 1000);
        clearInterval(shakeInterval);
        $(".anim_circle").css({"top" : block_h - ball_size, "height" : ball_size, "width": ball_size});
        displayAnimation('.anim_circle');
        displayAnimation('.anim_square');
        var disSquare = ($(".bar").length * 85 > 180) ? $(".bar").length * 85: 180;
        $(".anim_square").css("top", documentHeight - disSquare);
        loadStage('ch_', '6');
        loadStage('a_tombe', 7);
        $( ".success_b" ).animate({
            top: "+=" + block_h,
        }, 2000, function() {
        });
        clearInterval(lid);
        tilesCovered = 0;
        tilesOpened = 0;
        if(player == 0){
            $('.player_won').html("Il est un match nul, score " + score + "!");
        }else{
            $('.player_won').html("Joueur " + player + " a gagné avec score " + score + " dans " + noOfClick + " tentatives!");
        }
        setTimeout(function(){
            removeElements(function(){
                console.log(game.array);
                generateMatrix(game.x, game.y, game.array, game.players);
            });
        }, 4000);
    }

    function matchLost(){
        tilesCovered = 0;
        tilesOpened = 0;
        $("#continue").css("display", "none");
        setTimeout(function(){
            $(".anim_circle").css({"top" : block_h - ball_size, "height" : ball_size, "width": ball_size});
            displayAnimation('.anim_circle');
            displayAnimation('.anim_square');
            $(".anim_square").css("top", documentHeight - 180);
            loadStage('r_', '6');
            loadStage('eu_vole', 7);
            $( ".success_b" ).animate({
                top: "-=" + block_h,
            }, 2000, function() {
                // Animation complete.
            });
        }, 2000);
        setTimeout(function(){
            removeElements(function(){
                console.log(game.array);
                generateMatrix(game.x, game.y, game.array, game.players);
            });
        }, 5000);
    }

    function setupCards(){

        $('.card_line .flip-container .flipper, .flip-container.hover .flipper img').click(function(){
            var that = $(this);
            var image_id = that.find('img').attr('class');
            $('.card_line .flip-container .flipper').each(function(k, v){
                var flipper = $(v);
                var image = references[image_id];
                flipper.css('transform', 'rotateY(180deg)');
                if(image && image[k]){
                    //flipper.find('.back').append(image[k]);
                }else{
                    setTimeout(function(){
                        //flipper.css('display', 'none');
                    }, 400);
                }
            });
        });
    }

    var block_h = $("#success_balls").height() - 20;
    var ball_size = (block_h) / 6;
    var ballC = 0;

    function initalizeBalls(){
        ballC = 0;
        updateBalls();
    }

    //Update successBalls
    function updateBalls(){

        if(game.attempt != 1){
            switch(game.dif){
                case "easy":
                    addBall();
                    break;
                case "medium":
                case "hard":
                    if(game.attempt % 2 == 0){
                        addBall();
                    }
                    break;
            }
        }

        if(ballC == 6){
            console.log(game.attempt + "Failed");
            matchLost();
        }
    }

    function addBall(){
        var block = $("#success_balls");
        var ball = $("<div id='ball" + ballC + "'class=\"success_b\"><img src=\"../images/memory/blanc_porte.png\"></div>");
        ball.css({"height" : ball_size, "top" : block_h - (ball_size * (ballC))});
        ballC++;
        ball.find(".success_b, .success_b img").css("height", ball_size);
        block.append(ball);

        setTimeout(function(){
            $( ".success_b" ).animate({
                top: "-=" + ball_size,
            }, 2000, function() {
                if(shakeInterval) {
                    //clearInterval(shakeInterval);
                }
                    shake(ball);
            });
        }, 500);
    }

    $(".logo").hover(function(){
        if(game.started){
            $('#game_menu').stop().animate({width: 'hide'}, 1000);
        }
    }, function(){
        if(game.started){
            $('#game_menu').stop().animate({width: 'show'}, 1000);
        }
    });

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

    function removeElements(callback){
        $('.card_line').find(".flip-container").css({'transform' : 'translateY(300px) rotateZ(120deg)',
            "transition" : "all 0.9s ease-in", 'opacity' : 0});
        game.attempt = 0;
        setTimeout(function(){
            $("#success_balls").empty();
            $(".anim_square, .anim_circle").css("display", "none");
            $('.card_line').remove();
            $('.bar').remove();
            $("#success_balls").empty();
            tilesCovered = 0;
            escapeCounter = 0;
            if(callback){
                callback();
            }
        }, 1001);
    }

    $("#restart-g").click(function(){
        removeElements(function(){
            console.log(game.array);
            generateMatrix(game.x, game.y, game.array, game.players);
        });
    });

    //Click on the restart button
    $("#restart, #menu-g").click(function(){
        game.started = false;
        $('#game_menu').animate({width: 'hide'}, 1000);
        $('.color_icon').html("");
        $(".anim_space").css("display", "none");
        doOverlayClose();
        removeElements();
        setTimeout(function(){
            $(".type, .difficulty").css("display", "block");
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

    function addDEBUGBars(){
        for(var i = 1; i < 6; i++){
            var bar = $('<div class="bar"></div>');
            if(i > 1){
                var neg = (i % 2) ? 8 : -8;
                bar.css({'transform' : 'rotateZ(' + neg + 'deg)', 'bottom' : i * 10});
            }
            console.log(bar);
            $("#body_wrapper").append(bar);
        }

        setTimeout(function(){

            var time = 1000;
                $(".bar").each(function(i, v){
                    var that = $(this);
                    setTimeout(function(){
                        if(i % 2 == 0){
                            that.css({"-webkit-animation" : "rotate20 1.0s", "animation" : "rotate20 1.0s"});
                        }else{
                            that.css({"-webkit-animation" : "rotate20_m 1.0s", "animation" : "rotate20_m 1.0s"});
                        }
                        that.animate({'bottom': "+=" + 200}, 500, function(){that.remove();});
                    }, time);
                    time -= 50;
                });
        }, 2000);
    }

    function addToPile(obj1, obj2, player, player_score, nameAnim){

        console.log(player_score + " " + nameAnim);
        if(showAnim){
            loadStage(nameAnim, '5');
        }
        var left = - (documentWidth / 2 - card_width * 2);
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
        obj1.addClass('flip_pile');
        obj1.parent().addClass('pile');
        obj2.addClass('flip_pile2');
        obj2.parent().addClass('pile2');
        //player 1 left -700, top 300
        //player 2 left 500, top 300

        var topObj = documentHeight / 2;

        //get the width * 2
        obj1.parent().css({"position": "fixed", "top" : topObj, "left" : documentWidth / 2, "transform" :
            'scale(1.5) rotate(350deg)', "z-index" : 30});
        obj2.parent().css({"position": "fixed", "top" : topObj + card_width / 3, "left" : documentWidth / 2
        - card_width * 1.5, "transform" : 'scale(1.5) rotate(350deg)', "z-index" : 30});

        setTimeout(function () {
            $(".flip_pile, .flip_pile2").css({'transform': 'rotateX(90deg) rotateZ(90deg)', "transition-duration" : "1s"});
            $(".pile").animate({
                left: "+=" + left,
                top: "+=" + documentHeight / 2
            }, 1000, function(){
                $(".pile").remove();
            });
            $(".pile2").animate({
                left: "+=" + (left2 + card_width * 1.5),
                top: "+=" + documentHeight / 2
            }, 1000, function(){
                $(".pile2").remove();
                $("#body_wrapper").append(bar);
            });
        }, 2000);
    }

    console.log(documentHeight);

    function moveLeft(elem, dist, time){
        setTimeout(function(){
            $(elem).css('left', dist);
        }, time);
    }

    function animateCards(x, y, selected, players){
        console.log(x + " " + y + " " + selected + " " + players);
        game.started = true;
        //$('#game_menu').show('slide', {direction: 'right'}, 1000);
        $('#game_menu').animate({width: 'show'}, 1000);
        initalizeBalls();
        var left = 0;
        var width = (documentHeight < documentWidth) ? (documentHeight - $("#header_wrapper").height() - 60) / 4 :
        (documentWidth - 20) / x;
        var top = $("#header_wrapper").height() - 60;
        card_width = width;
        var card_lineWidth = ((width + 18) * x);
        var left_step = (documentWidth - card_lineWidth) / 2;
        console.log("From left " + (left_step));
        var unil_left = 0;

        y = (players == 2) ? y - 1 : y;

        switch(y){
            case 1:
                unil_left = $(".logo_difficulty").offset().left - 50;
                left = -(Math.abs(left_step - unil_left));
                break;
            case 2:
                unil_left = $(".logo_difficulty").offset().left + 80;
                left = -(Math.abs(left_step - unil_left));
                break;
            case 3:
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
        card_line.css('width', (width + 18) * x);
        console.log("Height " + width);
        card_line.css('height', width + 9);
        card_line.css('top', (width + 9) * 3);
        bodyWrapper.append(card_line);
        function loopCards() {
            var $newdiv1 = $( "<div class='unil_card'>" );
            var tempJ = j;
            if(i == 0) {
            $newdiv1.css("left", unil_left);
            $("#body_wrapper").append($newdiv1);
                $newdiv1.animate({
                    left: "+=" + (left + (width + 10) * j),
                    top: "+=" + (top + width * 3)
                }, animationTime, function () {
                    $newdiv1.remove();
                });
                $newdiv1.css({"-webkit-animation" : "fly 1.0s", "animation" : "fly 1.0s"});
            }
            setTimeout(function(){
                var temp = selected.pop();
                if(temp != undefined) {
                    var add_card = $(flip_card + temp.split('/')[0] + " " + temp.split('/')[1] + flip_card_2 + '<img src="../images/memory/' + temp + '.png"></div></div></div>');
                    card_line.append(add_card);
                    $(".card_line .flip-container, .front, .back, .front img, .back img").css("width", width);
                    $(".card_line .flip-container, .front, .back, .front img, .back img").css("height", width);
                    add_card.css('left', (width + 9) * tempJ);
                    $(".card_line .flip-container").css("display", "inline-block");
                    if (tempJ == x - 1) {
                        card_line = $('<div class="card_line"></div>');
                        card_line.css('width', card_lineWidth);
                        bodyWrapper.append(card_line);
                        card_line.css('height', width + 9);
                        var jump = 3 - i;
                        console.log(i);
                        if(jump <= 0){
                            jump = -(Math.abs(jump * 2) + 1);
                        }
                        card_line.css('top', ((width + 9) * jump));
                    }
                }
            }, animationTime);
            j++;
            if(j == x){
                j = 0;
                i++;
                if(i == y + 2){
                    setTimeout(function(){abortTimer();}, animationStep);
                }
            }
        }
        function abortTimer() {
            clearInterval(tid);
            setupClicks(players);

        }
    }

    var shakeInterval = null;

    function shake(div){
        var interval = 100;
        var distance = 5;
        var iter = 0;

        shakeInterval = setInterval(function(){
            iter = (iter == 1) ? 0 : 1;
            div.animate({
                left:((iter%2==0 ? distance : distance*-1))
            }, {duration: 100, queue: false});
        },150);

    }
});