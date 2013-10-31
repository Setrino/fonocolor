// AJAX call to retrieve the sentence in color
//checkOff function called
function searchRequest(text, i, offsetX, yMultiplier){

    $('.reply').html('<img src="images/preloader.gif" align="absmiddle">&nbsp;Fonocolorizing...');

    $.ajax({
        type: "POST",
        url: "php/requests.php",
        data: {"text": text},
        success: function(msg){

            if(msg == 'ERROR')
            {
                $('.reply').html('The translation has failed');
            }
            else
            {
                try{
                    //catchColor(msg, i, offsetX, yMultiplier);
                    $('.reply').html(msg);

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