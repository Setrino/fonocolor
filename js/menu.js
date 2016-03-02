$(document).ready(function(){

    var path = window.location.pathname.split("/")[1];
    if(path.match('fonocolor')){
        path = "/fonocolor";
    }else{
        path = "";
    }

    $('.overlay_menu img').each(function(k, v) { if(!$(v).attr('src').match('fonocolor')){$(v).attr('src', path + $(v).attr('src'));}});

    var references = {
        games: {
            0: '<a href=' + path + '/jeux/memory.html><img src=' + path + '/images/menu/harmonie_1.png></a>',
            1: '<a href=' + path + '/jeux/memory_2.html><img src=' + path + '/images/menu/harmonie_2.png></a>',
            2: '<a href=' + path + '/jeux/trouver.html><img src=' + path + '/images/menu/decodade_1.png></a>',
            3: '<a href=' + path + '/jeux/trouver_2.html><img src=' + path + '/images/menu/decodade_2.png></a>'
        },
        understand: {
            0 : '<a href=' + path + '/video.html><img src=' + path + '/images/menu/film.png></a>',
            1: '<a href=' + path + '/comment.html><img src=' + path + '/images/menu/comment.png></a>'
        },
        demander: {
            0 : '<a href=' + path + '/pourquoi.html><img src=' + path + '/images/menu/demander.png></a>'
        }
    };

    $('.overlay_menu .flip-container .flipper').click(function(){
        openMenuItem($(this));
    });

    function openMenuItem(that){
        var image_id = that.find('img').attr('id');
        $('.overlay_menu .flip-container .flipper').each(function(k, v){
            var flipper = $(v);
            var image = references[image_id];
            flipper.css('transform', 'rotateY(180deg)');
            if(image && image[k]){
                flipper.find('.o-back').append(image[k]);
            }else{
                setTimeout(function(){
                    flipper.css('display', 'none');
                }, 400);
            }
        });

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
                'cursor': 'pointer',
                'background-image' : 'url(' + path + '/images/menu/back_arrow.png)'
            });
            $('.back_arrow').click(function(){
                $(this).css({'opacity' : 0, 'cursor' : 'initial'});
                var flipper = $('.overlay_menu .flip-container .flipper');
                flipper.css('display', 'block');
                setTimeout(function(){
                    flipper.css('transform', 'rotateY(0deg)');
                },100);
                setTimeout(function(){
                    flipper.find('.o-back').empty();
                },600);
            });
        }
    }

    $(window).bind('beforeunload', function () {
        $(".menu_line").css("display", "none");
    });
});

function openGamesItem(){
    var path = window.location.pathname.split("/")[1];
    if(path.match('fonocolor')){
        path = "/fonocolor";
    }else{
        path = "";
    }
    var references = {
        games: {
            0: '<a href=' + path + '/jeux/memory.html><img src=' + path + '/images/menu/harmonie_1.png></a>',
            1: '<a href=' + path + '/jeux/memory_2.html><img src=' + path + '/images/menu/harmonie_2.png></a>',
            2: '<a href=' + path + '/jeux/trouver.html><img src=' + path + '/images/menu/decodade_1.png></a>',
            3: '<a href=' + path + '/jeux/trouver_2.html><img src=' + path + '/images/menu/decodade_2.png></a>'
        }
    };
    var image_id = 'games';
    $('.overlay_menu .flip-container .flipper').each(function(k, v){
        var flipper = $(v);
        var image = references[image_id];
        flipper.css('transform', 'rotateY(180deg)');
        if(image && image[k]){
            flipper.find('.o-back').append(image[k]);
        }else{
            setTimeout(function(){
                flipper.css('display', 'none');
            }, 400);
        }
    });

    $('.back_arrow').css({
        'opacity' : 1,
        'cursor': 'pointer',
        'background-image' : 'url(' + path + '/images/menu/back_arrow.png)'
    });
    $('.back_arrow').click(function(){
        $(this).css({'opacity' : 0, 'cursor' : 'initial'});
        var flipper = $('.overlay_menu .flip-container .flipper');
        flipper.css('display', 'block');
        setTimeout(function(){
            flipper.css('transform', 'rotateY(0deg)');
        },100);
        setTimeout(function(){
            flipper.find('.o-back').empty();
        },600);
    });
}