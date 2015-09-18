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
    var tilesCovered = 0;
    var tilesOpened = 0;
    var escapeCounter = 0;
    var animationTime = 2500;
    var animationStep = 500;

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
                        noOfPlayers(4, 4, array, generateMatrix);
                        break;
                    case 'medium':
                        $('.color_icon').css('left', '250px');
                        noOfPlayers(6, 4, array, generateMatrix);
                        break;
                    case 'hard':
                        $('.color_icon').css('left', '413px');
                        noOfPlayers(8, 4, array, generateMatrix);
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

    function noOfPlayers(x, y, array, callback){
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
            callback(x, y, array, players);
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
        var arrayRef = array;

        for (var i = 0; i < tilesNo; i++) {
            // Randomly pick one from the array of remaining faces
            var randomInd = Math.floor(Math.random() * arrayRef.length);
            console.log(arrayRef);
            var face_f = arrayRef[randomInd].split('.');
            var face = face_f[1];
            // Push 2 copies onto array

            switch(face_f[0]){
                case 'c':
                    selected.push('consonants/' + face);
                    selected.push('squares/' + face);
                    break;
                case 'v':
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

        $('.flip-container .flipper').click(function(){
            if(!disableClick && !$(this).css('transform').match('matrix3d')) {
                var that = $(this);
                var classes = that.attr('class').split(' ');
                var tempClass = classes[2];
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
                            if(players == 1) {
                                addToPile(that, previousObject, 1, player1_score + player2_score);
                            }else{
                                addToPile(that, previousObject, 1, player1_score);
                            }
                        }
                        previousClass = undefined;
                        previousObject = undefined;
                        if (tilesCovered == tilesOpened) {
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
        });
    }

    function resetGame(player, noOfClick, score){
        $('.card_line').remove();
        tilesCovered = 0;
        tilesOpened = 0;
        if(player == 0){
            $('.player_won').html("Il est un match nul, score " + score + "!");
        }else{
            $('.player_won').html("Joueur " + player + " a gagné avec score " + score + " dans " + noOfClick + " tentatives!");
        }
        $("#continue").css("display", "none");
        doOverlayOpen();
    }

    function setupCards(){

        $('.flip-container .flipper, .flip-container.hover .flipper img').click(function(){
            var that = $(this);
            var image_id = that.find('img').attr('class');
            $('.flip-container .flipper').each(function(k, v){
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

    $("#restart").click(function(){
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

    function addToPile(obj1, obj2, player, player_score){

        console.log(player_score);

        var left = -700;
        var left2 = -500;
        var top = 300;
        var bar = $('<div class="bar"></div>');
        if(player_score > 1){
            var neg = (player_score % 2) ? 8 : -8;
            bar.css({'transform' : 'rotateZ(' + neg + 'deg)', 'bottom' : player_score * 10});
        }


        if(player == 2){
            left = 500;
            left2 = 700;
            bar.css('left', '89%');
        }
        obj1.addClass('flip_pile');
        obj1.parent().addClass('pile');
        obj2.addClass('flip_pile2');
        obj2.parent().addClass('pile2');
        //player 1 left -700, top 300
        //player 2 left 500, top 300
        setTimeout(function () {
            $(".flip_pile, .flip_pile2").css('transform', 'rotateX(90deg) rotateZ(90deg)');
            $(".pile").animate({
                left: "+=" + left,
                top: "+=" + top
            }, 1000, function(){
                $(".pile").remove();
            });
            $(".pile2").animate({
                left: "+=" + left2,
                top: "+=" + top
            }, 1000, function(){
                $(".pile2").remove();
                $("#body_wrapper").append(bar);
            });
        }, 800);
    }

    console.log(documentHeight);

    function animateCards(x, y, selected, players){

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
                card_line.append(flip_card + temp.split('/')[0] + " " + temp.split('/')[1] + flip_card_2 + '<img src="../images/memory/' + temp + '_200.png"></div></div></div>');
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
            setupClicks(players);
        }
    }
});