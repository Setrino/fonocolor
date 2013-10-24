$(document).ready(function(){

    $("#full_screen").click(function(){

        if ($('body').css("background-color") == "rgb(0, 0, 0)"){
            $('body').css("background-color", "#696969");
        }else{
            $('body').css("background-color", "#000000");
        }

    });
    $("#answer").css("margin-left", $("#phonetic").width() / 2 - 97 / 2);
    $("#answer").css("margin-top", - 19 / 2);

    $(".search_form").css("margin-left", ( $("#enter").width() - $(".search_form").width() ) / 2 - 20 );
    $(".search_form").css("margin-top", ( $("#enter").height() - $(".search_form").height() ) / 2 );

    $(".search_output").css("left", ( $("#result").width() - $(".search_output").width() ) / 2 );
    $(".search_output").css("margin-top", ( $("#result").height() - $(".search_output").height() ) / 2 - 5 );

    $("#canvas").css("margin-top", -$(".search_output").height() - 5);

    $('.clean').click(function(){

        previousValue = '';

        $(".search_form").val(previousValue);
        $(".search_output").val(previousValue);
    });

    $('.color_text').bind({

        mouseenter: function(){
            $(this).html("<img src=\"images/result_hover.png\"/>");
        },

        mouseout: function(){
            $(this).html("<img src=\"images/result.png\"/>");
        },

        mouseleave: function(){
            $(this).html("<img src=\"images/result.png\"/>");
        },

        click: function(){

            searchText(previousValue);
        }
    });

    // Toggle overlayBox
    $(".copyright").bind(

        "click", doOverlayOpen
    )

    $(".closeOverlay").bind(

        "click", doOverlayClose
    )

});

function searchText(text){

    $(".search_output").val(text);
}

var previousValue = '';

var checkLoop = function(){

    if($(".search_form").val() != '' || $(".search_form").val() != undefined){

        if(previousValue != $(".search_form").val()){

            previousValue = $(".search_form").val();

            //Enter the AJAX check here

            placeInArray($(".search_form").val());

            //searchText(previousValue);
        }
    }

    gLoop = setTimeout(checkLoop, 2000);
}
checkLoop();