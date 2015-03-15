$(document).ready(function(){

    var references = {
        games: {
            0: '<a href="jeux/memory.html"><img src="images/menu/games.png"></a>',
            1: '<a href="jeux/trouver.html"><img src="images/menu/games.png"></a>',
            2: '<a href="jeux/memory.html"><img src="images/menu/games.png"></a>',
            3: '<a href="jeux/trouver.html"><img src="images/menu/games.png"></a>'
        },
        understand: {
            0 : '<a href="comment.html"><img src="images/menu/understand.png"></a>',
            1: '<a href="comment.html"><img src="images/menu/understand.png"></a>'
        },
        demander: {
            0 : '<a href="pourquoi.html"><img src="images/menu/demander.png"></a>',
            1: '<a href="pourquoi.html"><img src="images/menu/demander.png"></a>'
        }
    };

    $('.flip-container .flipper, .flip-container.hover .flipper img').click(function(){
        var that = $(this);
        var image_id = that.find('img').attr('id');
        $('.flip-container .flipper').each(function(k, v){
            var flipper = $(v);
            var image = references[image_id];
            flipper.css('transform', 'rotateY(180deg)');
            if(image[k]){
                flipper.find('.back').append(image[k]);
            }else{
                flipper.css('display', 'none');
            }
        });
        if(image_id == 'colorize'){
            setTimeout(function(){
                window.open('/fonocolor', '_self');
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