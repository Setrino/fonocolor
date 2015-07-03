function searchRequest(text, i, offsetX, yMultiplier, callback, loop, length){

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

                    catchColor(msg, i, offsetX.value, yMultiplier, length);
                    callback(offsetX, ctx.measureText(text + " ").width);
                    loop();
                    //$('.reply').html(msg);
                    //console.log(msg + ' ' + i);

                }catch(e){

                    $('.reply').html(e);
                }
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $('.reply').html(textStatus+" - "+errorThrown);
        }
    });
}

function audioRequest(path, object, audioPath, callback){

    $.ajax({
        type: "POST",
        url: "php/requests.php",
        data: {filepath: path},
        success: function(msg){

            if(msg == 'ERROR'){
                $('.reply').html('Couldn\'t retrieve audio files');
            }else{
                callback(jQuery.parseJSON(msg), object, audioPath);
            }
        }
    });
}

function generatePDF(textArray, callback){

    var json = JSON.stringify(textArray);

    $.ajax({
        type: "POST",
        url: "php/requests.php",
        data: {textArray: json},
        success: function(msg){
                callback(msg);
        }
    });
}

function getPage(page, callback){

    $.ajax({
        type: "GET",
        url: page,
        success: function(data){
            callback(data);
        },
        async: true
    });
}