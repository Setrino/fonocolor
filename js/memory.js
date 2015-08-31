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
    var escapeCounter = 0;

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
        var bodyWrapper = $('#body_wrapper');

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
        }

        setupClicks();
    }

    function setupClicks(){

        var previousClass = undefined;
        var previousObject = undefined;
        var tilesOpened = 0;
        var disableClick = false;

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
                    disableClick = true;
                    if(previousObject.attr('class').split(' ')[1] === classes[1] && previousClass == tempClass){
                        disableClick = false;
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
                        tilesOpened++;
                        previousClass = undefined;
                        previousObject = undefined;
                        if (tilesCovered == tilesOpened) {
                            setTimeout(function () {
                                resetGame();
                            }, 1000);
                        }
                        disableClick = false;
                    }
                }
            }
        });
    }

    function resetGame(){
        $('.card_line').remove();
        tilesCovered = 0;
        var menu = $('.menu');
        if(menu.length == 0){
            var div_win = '<div class="menu"><span class="player_won">Joueur 1 gagner<span><br>' +
                '<span class="new_game">Nouveau Jeu</span></div>';
            $('#body_wrapper').append(div_win);

            $('.new_game').click(function(){
                init();
            });
        }else{
            menu.css("display", "block");
        }
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

       /*
        if(image_id == 'colorize'){
            setTimeout(function(){
                if(window.location.hostname == 'localhost'){
                    window.open('/fonocolor', '_self');
                }else{
                    window.open('/', '_self');
                }
            }, 400);
        }else{
            $('.back_arrow').css({
                'opacity' : 1,
                'cursor': 'pointer'
            });
            $('.back_arrow').click(function(){
                $(this).css({'opacity' : 0, 'cursor' : 'initial'});
                var flipper = $('.flip-container .flipper');
                flipper.css('display', 'block');
                setTimeout(function(){
                    flipper.css('transform', 'rotateY(0deg)');
                },100);
                setTimeout(function(){
                    flipper.find('.back').empty();
                },600);
            });
        }*/
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
        $('.card_line').remove();
        tilesCovered = 0;
        escapeCounter = 0;
        doOverlayClose();
        init();
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
});