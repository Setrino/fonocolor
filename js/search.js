$(document).ready(function(){

    draw();
})

var width = 700,
//width of the canvas
    height = 148,
    full_screen_height = 0,
//height of the canvas
    c = document.getElementById('canvas'),
//canvas itself
    ctx = c.getContext('2d');
    ctx.font = 'fundamental__brigade_schwerRg';

c.width = width;
c.height = height;

var pixel_size = 43,
    dragging = false,
    lastY = 0,
    translated = 0,
    translatedD = 0,
    rowLength = 85,
    textArray = new Array(),
    previousLength = 0,
    coloredBlockHeight = 0,
    INCREASE_MULTIPLIER = 1.1;

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
function catchColor(array, i, offsetX, yMultiplier){

    var xDistance = 0;

    textArray[i][1] = jQuery.parseJSON(array);
    var currentWordArray = textArray[i][1];

    for(var j = 0; j < currentWordArray.length; j++){

        var letter = currentWordArray[j][0];

        if(letter != undefined){

            ctx.beginPath();
            drawText(3 + offsetX, pixel_size, letter, currentWordArray[j][1], currentWordArray[j][2],
                xDistance, yMultiplier);
            ctx.closePath();
            xDistance += ctx.measureText(letter).width;
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
                xDistance, yMultiplier);
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
function colorArray(text){

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

    text = text.replace(/[\,\r]/gm, "") ;
    text = text.replace(/[\n,\b,\t]/gm, " ");
    text = text.replace("  ", " ");
    text = text.toLowerCase();

    //console.log(text);

    //Sentence
        var splitArray = text.split(" ");
        var splitArrayL = splitArray.length;

        //console.log(text);

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

                if((offsetX.value + ctx.measureText(temp + " ").width) > width){
                    ++yMultiplier;
                    offsetX.value = 0;
                    setBlockHeight(yMultiplier);

                    if(yMultiplier > 3){
                        showFullScreen();
                    }else{
                        hideFullScreen();
                    }
                }
                searchRequest(temp, i, offsetX, yMultiplier, addOffSetX, loop);
        },
        callback : function(){
            //Loop finished
            full_screen_height = yMultiplier * pixel_size * INCREASE_MULTIPLIER + 6;
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

        if((offsetX + ctx.measureText(textArray[i][0] + " ").width) > width){
            ++yMultiplier;
            offsetX = 0;
        }

        var xDistance = 0;
        var currentWordArray = (textArray[i][1]);

        for(var j = 0; j < currentWordArray.length; j++){

            var letter = currentWordArray[j][0];

            if(letter != undefined){

                ctx.beginPath();
                drawText(3 + offsetX, pixel_size, letter, currentWordArray[j][1], currentWordArray[j][2],
                    xDistance, yMultiplier);
                ctx.closePath();
                xDistance += ctx.measureText(letter).width;
            }
        }
        offsetX += ctx.measureText(textArray[i][0] + " ").width;
    }
}

function drawText(x, y, text, colorTop, colorBottom, xDistance, yMultiplier){

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
    ctx.fillText(text, x + xDistance, y * yMultiplier);
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
        draw(delta);
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
    drawArray();
}

function fullScreenOff(){

    c.height = height;
    drawArray();
}

function resetCanvas(){

    full_screen_height = 0;
    ctx.translate(0, (translatedD <= 0) ? 0 : translatedD);
}