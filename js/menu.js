$(document).ready(function(){

    var references = {
        games: {
            0: '<a href="/fonocolor/jeux/memory.html"><img src="/fonocolor/images/menu/harmonie_1.png"></a>',
            1: '<a href="/fonocolor/jeux/memory.html"><img src="/fonocolor/images/menu/harmonie_2.png"></a>',
            2: '<a href="/fonocolor/jeux/trouver.html"><img src="/fonocolor/images/menu/games.png"></a>',
            3: '<a href="/fonocolor/jeux/trouver.html"><img src="/fonocolor/images/menu/games.png"></a>'
        },
        understand: {
            0 : '<a href="/fonocolor/comment.html"><img src="/fonocolor/images/menu/understand.png"></a>',
            1: '<a href="/fonocolor/comment.html"><img src="/fonocolor/images/menu/understand.png"></a>'
        },
        demander: {
            0 : '<a href="/fonocolor/pourquoi.html"><img src="/fonocolor/images/menu/demander.png"></a>',
            1: '<a href="/fonocolor/pourquoi.html"><img src="/fonocolor/images/menu/demander.png"></a>'
        }
    };

    $('.flip-container .flipper, .flip-container.hover .flipper img').click(function(){
        var that = $(this);
        var image_id = that.find('img').attr('id');
        $('.flip-container .flipper').each(function(k, v){
            var flipper = $(v);
            var image = references[image_id];
            flipper.css('transform', 'rotateY(180deg)');
            if(image && image[k]){
                flipper.find('.back').append(image[k]);
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
        }
    });
});