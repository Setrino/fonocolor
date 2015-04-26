$(document).ready(function(){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var current_size = 'small';

    if(dd < 10) {
        dd = '0' + dd
    }

    if(mm < 10) {
        mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;

    /*setTimeout(function(){
        $.each($('.subpage .page_number'), function(i, v){
            $(v).html('Page ' + (i + 1));
        });
        var date = $('.subpage .date')[0].innerHTML;
        $.each($('.subpage .date'), function(i, v){
            $(v).html(today);
        });
    }, 100);*/

    $('#download_pdf').click(function() {

            /*$.ajax({
                type: "POST",
                url: "php/tcp_gen.php",
                data: {html: $('.book').html()},
                success: function(msg){
                    console.log(msg);
                    window.open('tcpdf.php');
                }
            });*/
            $('#download_pdf, #move_top, #template_selector').css('display', 'none');
            window.print();
            $('#download_pdf, #move_top, #template_selector').css('display', 'initial');
    });

    $(".small, .medium, .large").click(function(){

        current_size = $(this).attr('class');
        switch(current_size){
            case 'small':
                pixel_size = 43;
                break;
            case 'medium':
                pixel_size = 55;
                break;
            case 'large':
                pixel_size = 66;
                break;
        }
        $(".small, .medium, .large").removeClass('yellow_text');
        $(this).addClass('yellow_text');
        checkSize(textArray.slice(), document.getElementById('canvas1'));
        $('.text').removeClass("small medium large").addClass(current_size);
    });

    //Set either two blocks on page, or one
    $('.template').click(function(){
        $('.template').removeClass('yellow_b');
        $(this).addClass('yellow_b');

        if(($(this).html()).match('c_t')){
            $('canvas').css('height','122mm');
            var c = document.getElementById('canvas1');
            textObject = {};
            checkArrays(textArray.slice(), c);
            console.log(textObject);
            var i = 1;
            $('.page:not(first-child)').slice(1).remove();
            $.each(textObject, function(k, v){
                if(i > 1){
                    createPage('canvas' + i);
                }
                drawArray(getArray(v), document.getElementById('canvas' + i));
                $('.page:nth-child(' + i + ') .outer_canvas').append('<div class="second_block"><hr>' +
                    '<h4 class="text"></h4></div>');
                $('.text').removeClass("small medium large").addClass(current_size);
                $('.page:nth-child(' + i + ') .second_block .text').append(k);
                i++;
            });
            /*setTimeout(function(){
                $('.second_block').css('overflow', 'hidden');
            }, 0);*/
        }else{
            $('canvas').css('height','250mm');
            var c = document.getElementById('canvas1');
            textObject = {};
            checkSize(textArray.slice(), c);
            $('.second_block').remove();
        }
    });

    //Canvas drawing
    var c = document.getElementById('canvas1'),
        ctx = c.getContext('2d');
        ctx.font = 'fundamental__brigade_schwerRg';
    var voyelle = true;
    var consonne = true;
        c.width = $('canvas').width(),
        c.height = $('canvas').height();


    var pixel_size = 43,
        INCREASE_MULTIPLIER = 1.11;

    var textArray = arrayText;
    drawArray(textArray, c);
    checkSize(textArray.slice(), c);

    //Get text from an array
    function getText(textArray){
        var text = '';
        for(var i = 0; i < textArray.length; i++){
            if(textArray[i][0] == '±'){
                text += '<br>';
            }else{
                text += textArray[i][0] + ' ';
            }
        }
        return text;
    }

    function getArray(object){
        return $.map(object, function(value, index) {
            return [value];
        });
    }

    var textObject = {};

    //Recursive check and split of array
    function checkArrays(array, c){

        c.height = $('canvas').height();
        ctx = c.getContext('2d');
        var offsetX = 0;
        var yMultiplier = 0;
        var textArray = array;
        var splitVal = undefined;

        for(var i = 0; i < textArray.length; i++){

            if(textArray[i][0] == '±'){
                yMultiplier++;
                offsetX = 0;
            }else{
                var xLimit = ctx.measureText(textArray[i][0] + " ").width * 1.1;
                if(offsetX + xLimit > c.width){
                    yMultiplier++;
                    offsetX = 0;
                }
                var add = pixel_size / 22;
                var multiplier = (pixel_size > 60) ? 1.2 : 1.1;
                if((yMultiplier + add) * pixel_size * multiplier > (c.height)){
                    splitVal = i;
                    break;
                }
                offsetX += xLimit;
            }
        }
        if(splitVal){
            var temp = textArray.splice(0, splitVal);
            textObject[getText(temp)] = temp;
            checkArrays(textArray.slice(), c);
        }else{
            textObject[getText(textArray)] = textArray;
        }
    }

    //createPage('canvas2');

    function createPage(canvasId){
            var page = '<div class="page"><div class="subpage"><div class="outer_canvas"><hr><canvas id=' + canvasId +
                '></canvas></div><footer><hr><div class="phonocolor">phonocolor.ch</div><div class="unil_logo">' +
                '</div></footer></div></div>';

            $('.book').append(page);
            $('canvas').css('height',$('canvas').css('height'));

            var c = document.getElementById(canvasId),
                ctx = c.getContext('2d');
            ctx.font = 'fundamental__brigade_schwerRg',
                c.width = $('canvas').width(),
                c.height = $('canvas').height();
    }

    function checkSize(array, c){
        textObject = {};
        checkArrays(array, c);
        console.log(textObject);
        var i = 1;
        $('.page:not(first-child)').slice(1).remove();
        $.each(textObject, function(k, v){
            if(i > 1){
                createPage('canvas' + i);
            }
            drawArray(getArray(v), document.getElementById('canvas' + i));
            i++;
        });
    }

    //Redraw the entire array
    function drawArray(letterArray, c){

        c.height = $('canvas').height();
        ctx = c.getContext('2d');
        var offsetX = 0;
        var yMultiplier = 1;
        var array = letterArray || textArray;
        ctx.fillStyle="#000000";
        ctx.fillRect(0, 0, c.width, c.height);

        for(var i = 0; i < array.length; i++){

            if(array[i][0] == '±'){

                ++yMultiplier;
                offsetX = 0;
            }else{

                if((offsetX + ctx.measureText(array[i][0] + " ").width) > c.width){
                    ++yMultiplier;
                    offsetX = 0;
                }

                var xDistance = 0;
                var currentWordArray = (array[i][1]);

                for(var j = 0; j < currentWordArray.length; j++){

                    var letter = currentWordArray[j][0];

                    if(letter != undefined){

                        var color1 = currentWordArray[j][1];
                        var color2 = currentWordArray[j][2];

                        if(currentWordArray[j][3] == 'c' && !consonne || currentWordArray[j][3] == 'v' && !voyelle){
                            color1 = '#FFFFFF';
                            color2 = undefined;
                        }

                        ctx.beginPath();
                        drawText(3 + offsetX, pixel_size, letter, color1, color2,
                            xDistance, yMultiplier, i);
                        ctx.closePath();
                        xDistance += ctx.measureText(letter).width;
                    }
                }
                offsetX += ctx.measureText(array[i][0] + " ").width;
            }
        }
    }

    function drawText(x, y, text, colorTop, colorBottom, xDistance, yMultiplier, i){

        var lingrad = '';

        if(yMultiplier != 1){
            yMultiplier = yMultiplier * INCREASE_MULTIPLIER;
        }

        if(colorBottom != undefined){
            lingrad = ctx.createLinearGradient(0, y * (yMultiplier - 1), 0, y * yMultiplier);
            lingrad.addColorStop(0, colorTop);
            lingrad.addColorStop(0.75, colorTop);
            lingrad.addColorStop(0.75, colorBottom);
            lingrad.addColorStop(1, colorBottom);
            ctx.fillStyle = lingrad;
        }else{

            ctx.fillStyle = colorTop;
        }

        ctx.font= y + "px fundamental__brigade_schwerRg";
        var yPixels = y * yMultiplier;
        ctx.fillText(text, x + xDistance, yPixels);
    }

    $("#voyelle").change(function() {
        if(this.checked) {
            setVoyelle(true);
        }else{
            setVoyelle(false);
        }
        checkSize(textArray.slice(), document.getElementById('canvas1'));
    });

    $("#consonnes").change(function() {
        if(this.checked) {
            setConsonnes(true);
        }else{
            setConsonnes(false);
        }
        checkSize(textArray.slice(), document.getElementById('canvas1'));
    });

    function setVoyelle(value){
        voyelle = value;
    }

    function setConsonnes(value){
        consonne = value;
    }
});