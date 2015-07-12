$(document).ready(function(){

    var flip_card = '<div class="flip-container"><div class="flipper ';
    var flip_card_2 = '"><div class="front"><img class="consonants" src="../images/memory/unil_back_182.png"></div><div class="back">';
    var tilesCovered = 0;

    var references = {
        consonants: ['b', 'ch', 'd', 'ge', 'j', 'l', 'm', 'n', 'p', 'ph', 'r', 's', 't', 've', 'z'],
        vowels: [],
        circles: [],
        squares: []
    };

    $('.difficulty > span').click(function(){

        $('.difficulty').css('display', 'none');

        switch($(this).attr('class')){
            case 'easy':
                    generateMatrix(2);
                break;
            case 'medium':
                    generateMatrix(4, 2);
                break;
            case 'hard':
                    generateMatrix(6, 3);
                break;
        }
    });

    function generateMatrix(x, y){

        var yAxis = y || x;
        var bodyWrapper = $('#body_wrapper');

        var selected = [];
        var tilesNo = x * yAxis / 2;
        tilesCovered = tilesNo;
        var arrayRef = references.consonants;

        for (var i = 0; i < tilesNo; i++) {
            // Randomly pick one from the array of remaining faces
            var randomInd = Math.floor(Math.random() * arrayRef.length);
            var face = arrayRef[randomInd];
            // Push 2 copies onto array
            selected.push('consonants/' + face);
            selected.push('squares/' + face);
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
                console.log(temp.substring(temp.length - 1));
                card_line += flip_card + temp.substring(temp.length - 1) + flip_card_2;
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

        $('.flip-container .flipper').click(function(){
            console.log(previousObject);
            var that = $(this);
            var tempClass = that.attr('class').substring(that.attr('class').length - 1);
            that.css('transform', 'rotateY(180deg)');
            if(!previousObject){
               previousObject = $.extend(true, {}, $(this));
               previousClass = tempClass;
            }else{
                if(previousClass != tempClass){
                    setTimeout(function(){
                        previousObject.css('transform', 'rotateY(0deg)');
                        that.css('transform', 'rotateY(0deg)');
                        previousClass = undefined;
                        previousObject = undefined;
                    }, 1000);
                }else{
                    tilesOpened++;
                    previousClass = undefined;
                    previousObject = undefined;
                    if(tilesCovered == tilesOpened){
                        setTimeout(function(){
                            resetGame();
                        }, 1000);
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
                $(".difficulty").css("display", "block");
                $('.menu').css('display', "none");
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
});