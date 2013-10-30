// AJAX call to retrieve the sentence in color
function searchRequest(text, i, offsetX){

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

                    catchColor(msg, i, offsetX);
                    $('.reply').html(msg);

                }catch(e){

                    $('.reply').html('fail');
                }
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus+" - "+errorThrown);
        }
    });
}

/**
 type - 1v1, 2v2, 3v3, 4v4
 lP - localPlayer nick
 */
function joinPvP(lP, type){

    $('.info').html('<img src="../images/preloader.gif" align="absmiddle">&nbsp;Joining a ' +
        type + 'v' + type + ' game...');

    $.ajax({
        type: "POST",
        url: "../templates/pvp_requests.php",
        data: {"type": type, "lP" : lP},
        success: function(msg){

            if(msg == 'ERROR')
            {
                $('.info').html('<span>Failed to join a PvP Game</span>');
            }
            else if(msg != '')
            {
                $('.info').html('<div>Join Room ' + msg +
                    '</div><a>Enter</a>');
                $('.info a').on('click', function(){ updateUserRoom(msg, function()
                {window.location.href = '../pvp/' + msg})});
            }else{
                $('.info').html('<div>No room found</div><input type="button" value="Refresh" class="refresh">');
                $('.refresh').on('click', currentPvP);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus+" - "+errorThrown);
        }
    });
}

function hostPvP(lP, type){

    $('.info').html('<img src="../images/preloader.gif" align="absmiddle">&nbsp;Creating a ' +
        type + 'v' + type + ' game...');

    $.ajax({
        type: "POST",
        url: "../templates/pvp_requests.php",
        data: {"type": type, "player" : lP},
        success: function(msg){

            if(msg == 'ERROR')
            {
                $('.info').html('<span>Failed to host a PvP Game</span>');
            }
            else
            {
                $('.info').html('<div>Room ID is ' + msg +
                    '</div><a href="../pvp/'+ msg +'">Enter</a>');
                //window.location.href = '../pvp/' + msg;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus+" - "+errorThrown);
        }
    });
}