function searchRequest(text, i, offsetX, yMultiplier, callback, loop){

    $('.reply').html('<img src="images/preloader.gif" align="absmiddle">&nbsp;Fonocolorizing...');

    $.ajax({
        type: "POST",
        url: "php/requests.php",
        data: {text: text},
        success: function(msg){

            if(msg == 'ERROR')
            {
                $('.reply').html('The translation has failed');
            }
            else
            {
                try{

                    catchColor(msg, i, offsetX.value, yMultiplier);
                    callback(offsetX, ctx.measureText(text + " ").width);
                    loop();
                    $('.reply').html(msg);
                    //$('.reply').html('');

                }catch(e){

                    $('.reply').html(e);
                }
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus+" - "+errorThrown);
        }
    });
}