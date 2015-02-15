$(document).ready(function(){

    $("#download").bind(
        "click", savePNG
    );
    audioRequest(audioPath, audioFiles, audioPath, preloadAudio);
});

var width = 700,
//width of the canvas
    height = 148,
    full_screen_height = 0,
    full_screen_width = 0,
//height of the canvas
    c = document.getElementById('canvas'),
//canvas itself
    ctx = c.getContext('2d');
    ctx.font = 'fundamental__brigade_schwerRg',
    clicks = 0,
    voyelle = true,
    consonne = true;

c.width = width;
c.height = height;

var pixel_size = 43,
    point_size = pixel_size * 72 / 96,
    audioFiles = {},
    audioPath = 'sound/color/',
    snd = null,
    dragging = false,
    lastY = 0,
    translated = 0,
    translatedD = 0,
    rowLength = 85,
    textArray = new Array(),
    previousLength = 0,
    coloredBlockHeight = 0,
    INCREASE_MULTIPLIER = 1.11;


function setVoyelle(value){
    voyelle = value;
}



function setConsonnes(value){
    consonne = value;
}

function drawRectangle(){

    ctx.beginPath();
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = 'yellow';
    ctx.fill();
}

function placeInArray(text){

    var textLength = text.length;

    if(previousLength < textLength || textLength == 0){

        textArray = [];
    }

    for(var i = 0; i < Math.ceil(textLength / rowLength); i++){

        textArray[i] = text.substring(rowLength * i, rowLength * i + rowLength);
    }

    previousLength = textLength;

    draw();
}

//Receives array of [[letter, color]]
//i - current word in the textArray
//offsetX - offset along the x axis from previous word
function catchColor(array, i, offsetX, yMultiplier, length){

    var xDistance = 0;

    textArray[i][1] = jQuery.parseJSON(array);
    textArray[i][2] = yMultiplier;
    var currentWordArray = textArray[i][1];

    for(var j = 0; j < currentWordArray.length; j++){

        var letter = currentWordArray[j][0];

        if(j == 0){
            textArray[i][2] = 3 + offsetX;
        }

        if(letter != undefined){

            ctx.beginPath();
            drawText(3 + offsetX, pixel_size, letter, currentWordArray[j][1], currentWordArray[j][2],
                xDistance, yMultiplier, i);
            ctx.closePath();
            xDistance += ctx.measureText(letter).width;
        }
        if(j == currentWordArray.length - 1){
            textArray[i][4] = 3 + offsetX + xDistance;
        }
    }

    if((i == length - 1)){

        $('.reply').html('');
        //$('.reply').html(array);
        showDownloadPNG();

        if(yMultiplier > 3){
            showFullScreen();
        }else{
            hideFullScreen();
        }
    }
    //console.log(textArray[i][0] + " " + textArray[i][1]);
}

function drawWhite(array, i, offsetX, yMultiplier){

    var xDistance = 0;

    textArray[i][1] = array;
    var currentWordArray = textArray[i][1];

    for(var j = 0; j < currentWordArray.length; j++){

        var letter = currentWordArray[j];

        if(letter != undefined){

            ctx.beginPath();
            drawText(3 + offsetX, pixel_size, letter, '#FFFFFF', undefined,
                xDistance, yMultiplier, i);
            ctx.closePath();
            xDistance += ctx.measureText(letter).width;
        }
    }
}

function offSetX(){
    this.value = 0;
}

function addOffSetX(offSetX, value){

    offSetX.value += value;
}

// i - currently select word
function colorArray(text, callback){

        var textLength = text.length;
        var offsetX = new offSetX();
        var yMultiplier = 1;
        var textareaWidth = $(".search_output").width();

        ctx.clearRect(0, 0, c.width, (full_screen_height != 0) ? full_screen_height : c.height);
        ctx.fillStyle="#000000";
        ctx.fillRect(0, 0, c.width, (full_screen_height != 0) ? full_screen_height : c.height);

        if(previousLength < textLength || textLength == 0){

            textArray = [];
        }

    //text = text.replace(/[\,\r]/gm, "") ;
    text = text.replace(/\r\n|\n|\r/g, " ± ");
    text = text.replace(/\t/g, "    ");
    //text = text.replace("  ", " ");
    //text = text.toLowerCase();

    //console.log(text);

    //Sentence
        var splitArray = text.split(" ");
        //console.log(text.search(/\r\n|\n|\r/g));
        var splitArrayL = splitArray.length;

    var asyncLoop = function(o){
        var i=-1,
            length = o.length;

        var loop = function(){
            i++;
            if(i==length){o.callback(); return;}
            o.functionToLoop(loop, i);
        }
        loop();//init
    }

    asyncLoop({
        length : splitArrayL,
        functionToLoop : function(loop, i){

                var temp = splitArray[i];

                textArray[i] = {};
                textArray[i][0] = temp;

                if((offsetX.value + ctx.measureText(temp + " ").width) > width || temp == '±'){
                    ++yMultiplier;
                    offsetX.value = 0;
                    setBlockHeight(yMultiplier);
                }

                if(temp != '±'){
                    searchRequest(temp, i, offsetX, yMultiplier, addOffSetX, loop, splitArrayL);
                }else{
                    loop();
                }

        },
        callback : function(){
            //Loop finished
            full_screen_height = yMultiplier * pixel_size * INCREASE_MULTIPLIER + 6;
            c.height = (full_screen_height > height) ? full_screen_height : height;
            drawArray();
            if(callback) callback();
        }
    });


    for(var i = 0; i < splitArray.length; i ++){}
}

//Redraw the entire array
function drawArray(){

    var offsetX = 0;
    var yMultiplier = 1;
    var textareaWidth = $(".search_output").width();
    ctx.fillStyle="#000000";
    ctx.fillRect(0, 0, c.width, (full_screen_height != 0) ? full_screen_height : c.height);

    for(var i = 0; i < textArray.length; i++){

        if(textArray[i][0] == '±'){

            ++yMultiplier;
            offsetX = 0;
        }else{

            if((offsetX + ctx.measureText(textArray[i][0] + " ").width) > c.width){
                ++yMultiplier;
                offsetX = 0;
            }

            var xDistance = 0;
            var currentWordArray = (textArray[i][1]);

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
            offsetX += ctx.measureText(textArray[i][0] + " ").width;
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
    textArray[i][3] = yPixels;
    ctx.fillText(text, x + xDistance, yPixels);
}

c.onmousedown = function(e){

    var evt = e || event;
    dragging = true;
    lastY = evt.offsetY==undefined?evt.layerY:evt.offsetY;
}

c.onmouseout = function(){

    dragging = false;
}

c.ontouchstart = function(e) {
    if (e.touches) e = e.touches[0];
    return false;
}

window.onmouseup = function(){

    dragging = false;
}


window.onmousemove = function(e){
    var evt = e || event;
    if (dragging){
        var offSetY = evt.offsetY==undefined?evt.layerY:evt.offsetY;
        var delta =  offSetY - lastY;
        translated += delta;
        lastY = offSetY;
        //draw(delta);
    }
}

function draw(delta){

    var difference = c.height - full_screen_height;

    //console.log("T " + translated + " D " + (difference * 2 - 3) + " F " + full_screen_height);

    if((translated) <= difference * 2 - 3){

        translated = difference * 2 - 3;

    }else if( ( translated ) > difference ){

        translated = difference;

    }else if(difference >= 0){

        translated = 0;

    }else{

        ctx.translate(0, delta);
        ctx.clearRect(0, 0, c.width, c.height + (-translated));

        drawArray();
    }

    translatedD = -(translated - difference);

    //console.log(lastY + " " + (translated - difference) + " t " + difference);
}

//Save canvas to PNG on button click
function savePNG(){

    if($(".search_form").val() != ''){
        fullScreenOn();
        var date = new Date();
        var twoDigitDay = ((date.getDate().length + 1) === 1) ? (date.getDate()) : '0' + (date.getDate());
        var twoDigitMonth = ((date.getMonth().length + 1) === 1)? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
        var currentDate = twoDigitDay + "-" + twoDigitMonth + "-" + date.getFullYear();
        fname = 'fonocolor-' + currentDate;

        var data = c.toDataURL("image/png");
        data = data.substr(data.indexOf(',') + 1).toString();

        var dataInput = document.createElement("input") ;
        dataInput.setAttribute("name", 'imgdata') ;
        dataInput.setAttribute("value", data);
        dataInput.setAttribute("type", "hidden");

        var nameInput = document.createElement("input") ;
        nameInput.setAttribute("name", 'name') ;
        nameInput.setAttribute("value", fname + '.png');

        var form = document.createElement("form");
        form.method = 'POST';
        form.action = 'php/requests.php';

        form.appendChild(dataInput);
        form.appendChild(nameInput);
        form.submit();
        fullScreenOff();
    }
}

function setBlockHeight(height){

    coloredBlockHeight = height;
}

function fullScreenOn(){

    c.height = full_screen_height;
    c.width = $(document).width() * 0.8;
    drawArray();
    //$("#canvas").css("overflow-y", "hidden");
}

function fullScreenOff(){

    $("#scroll_canvas").css({
        'margin-top': '0',
        'bottom': '141px',
        'width': '700px',
        'height': '148px'
    });
    c.height = (full_screen_height > height) ? full_screen_height : height;
    c.width = width;
    //$("#canvas").css("margin-top", canvasMarginTop);
    //$("#canvas").css("overflow-y", "scroll");
    drawArray();
}

function resetCanvas(){

    full_screen_height = 0;
    ctx.translate(0, (translatedD <= 0) ? 0 : translatedD);;
}

//Checks where on the canvas the user has clicked to find which word and letter he clicked
//textArray[i][0] - word
//textArray[i][1] - wordArray
//textArray[i][2] - xBeginning
//textArray[i][4] - xEnd
//textArray[i][3] - yBeginning
//double - if double clicked
function collides(event, single){

    if(snd){snd.pause();}
    var x = event.pageX - $('#canvas').offset().left;
    var y = event.pageY - $('#canvas').offset().top;
    var buffer = {

        buffer : [],

        addTrack : function(track){
            this.buffer.push(track);
        },
        nextTrack : function(){
            if(this.buffer.length != 0){
                var temp = this.buffer.shift();
                snd = audioFiles[temp];
                try{
                    snd.play();
                    snd.addEventListener("ended", function()
                    {
                        buffer.nextTrack();
                    });
                }catch(e){
                    if(temp != 'undefined' && temp != 'null'){
                        $('.reply').html('Missing audio file for ' + temp);
                    }
                }
            }
        },
        clearBuffer : function(){
            this.buffer = [];
        },
        bufferLength : function(){
            return this.buffer.length;
        }
    }
    var textArrayLength = textArray.length;

    //console.log("x " + x + " y " + y + ' ' + (textArray[0][2]));

    for(var i = 0; i < textArrayLength; i++){
        var xBegin = textArray[i][2];

        if(textArray[i][3] - point_size  < y && y < textArray[i][3]){
            if(xBegin < x && x < textArray[i][4]){
                var currentWord = textArray[i][1];
                var currentWordLength = currentWord.length;
                var xIncrement = xBegin;
                var location = '';

                for(var j = 0; j < currentWordLength; j++){
                    var letter = currentWord[j][0];

                    if(single){
                        if((xIncrement) < x && x < (xIncrement + ctx.measureText(letter).width)){
                            var location = currentWord[j][1] + ((currentWord[j][2] != undefined) ? currentWord[j][2] : '');
                            location = location.replace(/#/g, "_");
                            //console.log("Letter " + currentWord[j][0] + " " + location);
                            snd = audioFiles[location];
                            try{
                                snd.play();
                            }catch(e){
                                $('.reply').html('Missing audio file for ' + location);
                            }
                        }
                    }else{
                        var soundTemp = (currentWord[j][1] + ((currentWord[j][2] != undefined) ? currentWord[j][2] : '')).replace(/#/g, "_");
                        if(soundTemp != location){
                            //console.log("Word " + textArray[i][0] + " " + soundTemp);
                            buffer.addTrack(soundTemp);
                        }
                        location = soundTemp;
                    }
                    xIncrement += ctx.measureText(letter).width;
                }

                if(!single && buffer.bufferLength() > 0){
                    buffer.nextTrack();
                }
            }
        }
    }
}

c.addEventListener('click', function(event) {

    clicks++;
    if (clicks == 1) {
        setTimeout(function(){
            if(clicks == 1) {
                collides(event, true);
                //console.log("SINGLE");
            } else {
                collides(event, false);
                //console.log("DOUBLE");
            }
            clicks = 0;
        }, 300);
    }
}, false);
