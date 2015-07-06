$(document).ready(function(){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var current_size = 'small';
    var portrait = true;

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
            (portrait) ? cssPagedMedia.size('A4') : cssPagedMedia.size('landscape');
            $('.book').css('left', '0');
            window.print();
            $('#download_pdf, #move_top, #template_selector').css('display', 'initial');
            (portrait) ? $('.book').css('left', '0') : $('.book').css('left', '50px');
    });

    $(".small, .medium, .large").click(function(){

        current_size = $(this).attr('class');
        switch(current_size){
            case 'small':
                pixel_size = 58;
                break;
            case 'medium':
                pixel_size = 75;
                break;
            case 'large':
                pixel_size = 94;
                break;
        }
        $(".small, .medium, .large").removeClass('yellow_text');
        $(this).addClass('yellow_text');
        checkSize(textArray.slice(), c);
        $('.text').removeClass("small medium large").addClass(current_size);
    });

    $('.template_lp').click(function(){
        $('.template_lp').removeClass('yellow_b');
        $(this).addClass('yellow_b');

        //Landscape mode
        if(($(this).html()).match('c_only')){
            $(this).css('height', '58px');
            $(".two_lines").html('<img src="images/pdf/templates/l_t.png"/>');
            $(".page").removeClass('page').addClass('page_l');
            $(".subpage").removeClass('subpage').addClass('subpage_l');
            $(".book").css('left', '50px');
            $('canvas').css('height','160mm');
            $('.outer_canvas').css('height','160mm');
            widthH = $('.subpage_l').width();
            heightH = $('canvas').height();
            portrait = false;

        //Portrait mode
        }else{
            $(".two_lines").html('<img src="images/pdf/templates/c_t.png"/>');
            $(".page_l").removeClass('page_l').addClass('page');
            $(".subpage_l").removeClass('subpage_l').addClass('subpage');
            $(".book").css('left', '0px');
            $('canvas').css('height','250mm');
            $('.outer_canvas').css('height','250mm');
            widthH = $('.subpage').width();
            heightH = $('canvas').height();
            portrait = true;
        }

        currentMode = 'c_only';
        $('canvas').css('width', widthH);
        $('.outer_canvas').css('width', widthH);
        var c = document.getElementById('canvas1');
        textObject = {};
        checkSize(textArray.slice(), c);
        $('.template').addClass('yellow_b');
        $(".two_lines").removeClass('yellow_b');
        $('.second_block, .second_block_l').remove();
    });

    var widthH = $('.subpage').width();
    var heightH = $('canvas').height();
    var currentMode = 'c_only';

    //Set either two blocks on page, or one
    $('.template').click(function(){
        $('.template').removeClass('yellow_b');
        $(this).addClass('yellow_b');

        if(($(this).html()).match('c_only')){

            currentMode = 'c_only';
            $('canvas').css('width', widthH);
            $('.outer_canvas').css('width', widthH);
            $('canvas').css('height', heightH);
            var c = document.getElementById('canvas1');
            textObject = {};
            checkSize(textArray.slice(), c);
            $('.second_block, .second_block_l').remove();
        }else if(($(this).html()).match('c_t')){

            currentMode = 'c_t';
            $('canvas').css('width', widthH);
            $('.outer_canvas').css('width', widthH);
            $('canvas').css('height','122mm');
            var c = document.getElementById('canvas1');
            textObject = {};
            checkSize(textArray.slice(), c);
        }else if(($(this).html()).match('l_t')){

            currentMode = 'l_t';
            $('canvas').css('width', widthH / 2 - 1);
            var c = document.getElementById('canvas1');
            textObject = {};
            checkSize(textArray.slice(), c);
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


    var pixel_size = 57,
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

    function checkSize(array, c){

        var pageClass = '.page';
        var secondBlock = 'second_block';
        var space = '<hr>';

        if(portrait){
            pageClass = '.page';
            secondBlock = 'second_block';
            space = '<hr>';
        }else{
            pageClass = '.page_l';
            secondBlock = 'second_block_l';
            space = '';
        }

        var classType = (portrait) ? undefined : 'page_l';

        textObject = {};
        checkArrays(array, c);
        var i = 1;
        $('.' + (classType || "page") + ':not(first-child)').slice(1).remove();
        $.each(textObject, function(k, v){
            if(i > 1){
                createPage('canvas' + i, classType);
            }
            drawArray(getArray(v), document.getElementById('canvas' + i));
            i++;
        });

        $('.second_block, .second_block_l').remove();
        switch(currentMode){
            case 'c_t':
                var i = 1;
                $(pageClass + ':not(first-child)').slice(1).remove();
                $.each(textObject, function(k, v){
                    if(i > 1){
                        createPage('canvas' + i, (portrait) ? undefined : 'page_l');
                    }
                    drawArray(getArray(v), document.getElementById('canvas' + i));
                    $(pageClass + ':nth-child(' + i + ') .outer_canvas').append('<div class="' + secondBlock + '">' + space +
                        '<h4 class="text"></h4></div>');
                    $('.text').removeClass("small medium large").addClass(current_size);
                    $(pageClass + ':nth-child(' + i + ') .' + secondBlock + ' .text').append(k);
                    i++;
                });
                break;
            case 'l_t':
                var i = 1;
                $('.page_l:not(first-child)').slice(1).remove();
                $.each(textObject, function(k, v){
                    if(i > 1){
                        createPage('canvas' + i, 'page_l');
                    }
                    drawArray(getArray(v), document.getElementById('canvas' + i));
                    $('.page_l:nth-child(' + i + ') .outer_canvas').append('<div class="second_block_l">' +
                        '<h4 class="text"></h4></div>');
                    $('.second_block_l').css('width', $('canvas').width() - 1);
                    $('.text').removeClass("small medium large").addClass(current_size);
                    $('.page_l:nth-child(' + i + ') .second_block_l .text').append(k);
                    i++;
                });
                break;
        }
    }

    //Recursive check and split of array
    function checkArrays(array, c){

        c.height = $('canvas').height();
        c.width = $('canvas').width();
        ctx = c.getContext('2d');
        ctx.font= pixel_size + "px fundamental__brigade_schwerRg";
        var offsetX = 0;
        var yMultiplier = 1;
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

                //var landscape = (classType) ? 1 : 0;

                if((yMultiplier + 1) * pixel_size > c.height){
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

    function createPage(canvasId, classType){
            var page = '<div class="' + (classType || "page") + '"><div class="' + ((classType) ? 'subpage_l' : 'subpage') +
                '"><div class="outer_canvas"><hr>' +
                '<canvas id=' + canvasId + '></canvas></div><footer><hr><div class="phonocolor">phonocolor.ch</div>' +
                '<div class="unil_logo"></div></footer></div></div>';

            $('.book').append(page);
            $('.outer_canvas').css('height', (classType) ? '160mm' : '250mm');
            $('canvas').css('height',$('canvas').css('height'));
            $('canvas').css('width',$('canvas').css('width'));

            var c = document.getElementById(canvasId),
                ctx = c.getContext('2d');
            ctx.font = 'fundamental__brigade_schwerRg',
                c.width = $('canvas').width(),
                c.height = $('canvas').height();
    }

    //Redraw the entire array
    function drawArray(letterArray, c){

        c.height = $('canvas').height();
        c.width = $('canvas').width();
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
        checkSize(textArray.slice(), c);
    });

    $("#consonnes").change(function() {
        if(this.checked) {
            setConsonnes(true);
        }else{
            setConsonnes(false);
        }
        checkSize(textArray.slice(), c);
    });

    var cssPagedMedia = (function () {
        var style = document.createElement('style');
        document.head.appendChild(style);
        return function (rule) {
            style.innerHTML = rule;
        };
    }());

    cssPagedMedia.size = function (size) {
        cssPagedMedia('@page {size: ' + size + '}');
    };

    function setVoyelle(value){
        voyelle = value;
    }

    function setConsonnes(value){
        consonne = value;
    }
});