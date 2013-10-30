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
    previousLength = 0;

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
function catchColor(array, i){

    textArray[i][1] = jQuery.parseJSON(array);

    for(var j = 0; j < array.length; j++){

        ctx.beginPath();
        drawText(3, pixel_size, (textArray[i][1])[j][0], (textArray[i][1])[j][1], (textArray[i][1])[j][2], j + 1);
        ctx.closePath();
    }

    /*try{
        var colors = jQuery.parseJSON(color);

        textArray[i][2] = colors[1];

    }catch(e){

        textArray[i][1] = color;
    }*/

    console.log(textArray[i][0] + " " + textArray[i][1]);
}


// i - currently select word
function colorArray(text){

    var textLength = text.length;

    if(previousLength < textLength || textLength == 0){

        textArray = [];
    }

    //Sentence
    var splitArray = text.split(" ");

    for(var i = 0; i < splitArray.length; i ++){

        var temp = splitArray[i];

        textArray[i] = new Array();
        textArray[i][0] = temp;

        searchRequest(temp, i);
    }
}

function drawText(x, y, text, colorTop, colorBottom, i){

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
    ctx.fillText(text, x, y * i);
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
    if (dragging){
        var delta = evt.offsetY - lastY;
        translated += delta;
        lastY = evt.offsetY;
        draw(delta);
    }
}

function draw(delta){

    if( ( -translated ) >= ( c.height - pixel_size * textArray.length )){

        translated = - ( c.height - pixel_size * textArray.length );

    } else if( -translated < 0 ){

        translated = 0;

    }else{

        ctx.translate(0, delta);
        ctx.clearRect(0, 0, c.width, c.height + (-translated));

        for(var i = 0; i < textArray.length; i++){
            ctx.beginPath();
            drawText(3, pixel_size, textArray[i], '#00ABEB', '#66CC00', i + 1);
            ctx.closePath();
        }
    }

    console.log(lastY);
}