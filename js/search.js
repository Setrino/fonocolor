$(document).ready(function(){

    draw();
})

var width = 700,
//width of the canvas
    height = 148,
//height of the canvas
    c = document.getElementById('canvas'),
//canvas itself
    ctx = c.getContext('2d');

c.width = width;
c.height = height;

var pixel_size = 20,
    dragging = false,
    lastY = 0,
    translated = 0,
    rowLength = 85,
    textArray = new Array(),
    previousLength = 0,
    coloredBlockHeight = 0;

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

    for(var j = 0; j < textArray[i][1].length; j++){

        var letter = (textArray[i][1])[j][0];

        if(letter != undefined){

            ctx.beginPath();
            drawText(3 + offsetX, pixel_size, letter, (textArray[i][1])[j][1], (textArray[i][1])[j][2],
                xDistance, yMultiplier);
            ctx.closePath();
            xDistance += ctx.measureText(letter).width;
        }
    }

    console.log(textArray[i][0] + " " + textArray[i][1]);
}


// i - currently select word
function colorArray(text){

        var textLength = text.length;
        var offsetX = 0;
        var yMultiplier = 1;
        var textareaWidth = $(".search_output").width();

        ctx.clearRect(0, 0, c.width, c.height);

        if(previousLength < textLength || textLength == 0){

            textArray = [];
        }

        //Sentence
        var splitArray = text.split(" ");

        for(var i = 0; i < splitArray.length; i ++){

            var temp = splitArray[i];

            textArray[i] = new Array();
            textArray[i][0] = temp;

            if((offsetX + ctx.measureText(temp + " ").width / yMultiplier) > textareaWidth){
                ++yMultiplier;
                offsetX = 0;
                setBlockHeight(yMultiplier);
            }

            searchRequest(temp, i, offsetX, yMultiplier);

            offsetX += ctx.measureText(temp + " ").width;

        }
}


//Redraw the entire array
function drawArray(){

    var offsetX = 0;
    var yMultiplier = 1;
    var textareaWidth = $(".search_output").width();

    for(var i = 0; i < textArray.length; i++){

        if((offsetX + ctx.measureText(textArray[i][0] + " ").width / yMultiplier) > textareaWidth){
            ++yMultiplier;
            offsetX = 0;
        }

        var xDistance = 0;

        for(var j = 0; j < (textArray[i][1]).length; j++){

            var letter = (textArray[i][1])[j][0];

            if(letter != undefined){

                ctx.beginPath();
                drawText(3 + offsetX, pixel_size, letter, (textArray[i][1])[j][1], (textArray[i][1])[j][2],
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

    if(colorBottom != undefined){

    lingrad = ctx.createLinearGradient(0, y * (i - 1), 0, y * i);
    lingrad.addColorStop(0, colorTop);
    lingrad.addColorStop(0.6, colorTop);
    lingrad.addColorStop(0.6, colorBottom);
    lingrad.addColorStop(1, colorBottom);
    ctx.fillStyle = lingrad;
    }else{

    ctx.fillStyle = colorTop;
    }

    ctx.font= y + "px Arial";
    ctx.fillText(text, x + xDistance, y * yMultiplier);
}

c.onmousedown = function(e){

    var evt = e || event;
    dragging = true;
    lastY = evt.offsetY;
}

c.onmouseout = function(){

    dragging = false;
}

window.onmouseup = function(){

    dragging = false;
}

window.onmousemove = function(e){
    var evt = e || event;
    window.event.returnValue = false;
    if (dragging){
        var delta = evt.offsetY - lastY;
        translated += delta;
        lastY = evt.offsetY;
        draw(delta);
    }
}

function draw(delta){

    var difference = c.height - pixel_size * coloredBlockHeight;

    if((translated) <= difference * 2 - 3){

        translated = difference * 2 - 3;

    }else if( ( translated ) >= difference ){

        translated = difference;

    }else if(difference >= 0){

        translated = 0;

    }else{

        ctx.translate(0, delta);
        ctx.clearRect(0, 0, c.width, c.height + (-translated));

        drawArray();
    }

    //console.log(lastY + " " + (translated - difference) + " t " + difference);
}

function setBlockHeight(height){

    coloredBlockHeight = height;
}