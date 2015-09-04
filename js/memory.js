$(document).ready(function(){

    var flip_card = '<div class="flip-container memory"><div class="flipper ';
    var flip_card_2 = '"><div class="front"><img class="consonants" src="../images/memory/unil_back_182.png"></div><div class="back">';
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
    var animationTime = 4000;

    var references = {
        consonants: ['c.b', 'c.ch', 'c.d', 'c.ge', 'c.j', 'c.l', 'c.m', 'c.n', 'c.p', 'c.ph', 'c.r', 'c.s', 'c.t', 'c.ve', 'c.z'],
        vowels: ['v.i', 'v.eau', 'v.u', 'v.a', 'v.ai', 'v.ou', 'v.an', 'v.eu', 'v.e_', 'v.on', 'v.o', 'v.ain', 'v.oe'],
        circles: [],
        squares: []
    };

    function init(){

        var array = [];
        var clickA = false;
        setTimeout(function(){$(".type, .difficulty").css("display", "block");}, 1000);
        $('.menu').css('display', "none");
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
                        noOfPlayers(2, 2, array, generateMatrix);
                        break;
                    case 'medium':
                        $('.color_icon').css('left', '250px');
                        noOfPlayers(4, 2, array, generateMatrix);
                        break;
                    case 'hard':
                        $('.color_icon').css('left', '413px');
                        noOfPlayers(6, 3, array, generateMatrix);
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

        animateCards(x, y);

        setTimeout(function(){
            var bodyWrapper = $('#body_wrapper');
            for(var i = 0; i < yAxis; i++){
                var card_line = '<div class="card_line">';
                bodyWrapper.append();
                for(var j = 0; j < x; j++){
                    var temp = selected.pop();
                    card_line += flip_card + temp.split('/')[0] + " " + temp.split('/')[1] + flip_card_2;
                    card_line += '<img src="../images/memory/' + temp + '_182.png">';
                    card_line += '</div></div></div>';
                }
                card_line += '</div>';
                bodyWrapper.append(card_line);
                setupClicks(players);
            }
        }, animationTime);
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

    function animateCards(x, y){

        var left = 75;
        var top = 245;
        var unil_left = "440px";

        switch(x){
            case 2:
                unil_left = "440px";
                break;
            case 4:
                unil_left = "560px";
                left = -240;
                top = 245;
                break;
            case 6:
                unil_left = "740px";
                left = -615;
                top = 245;
                break;
        }

        for(var i = 0; i < y; i++){
            for(var j = 0; j < x; j++){
                var $newdiv1 = $( "<div class='unil_card'></div>" );
                $newdiv1.css("left", unil_left);
                $("#body_wrapper").append($newdiv1);
                $newdiv1.animate({
                    left: "+=" + (left + 195 * j),
                    top: "+=" + (top + 195 * i)
                }, animationTime + (i+j) * 200, function(){
                    $(".unil_card").remove();
                });
                $newdiv1.css({"-webkit-animation" : "fly 4s", "animation" : "fly 4s"});
            }
        }
    }
});