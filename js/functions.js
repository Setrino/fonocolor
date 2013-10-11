$(document).ready(function(){

    $("#color_in").click(function(){

        if ($('body').css("background-color") == "rgb(0, 0, 0)"){
            $('body').css("background-color", "#696969");
        }else{
            $('body').css("background-color", "#000000");
        }

    });
    $("#answer").css("margin-left", $("#phonetic").width() / 2 - 97 / 2);
    $("#answer").css("margin-top", - 19 / 2);

    $('.color_text').bind({

        mouseenter: function(){
            $(this).html("<img src=\"images/result_hover.png\"/>");
        },

        mouseout: function(){
            $(this).html("<img src=\"images/result.png\"/>");
        },

        mouseleave: function(){
            $(this).html("<img src=\"images/result.png\"/>");
        }
    });
});