$(document).ready(function(){

    drawConsonants();
    drawVowels();
    //drawGrid();
})

var width = 700,
//width of the canvas
    height = 650,
//height of the canvas
    dim = 50,
    grid = null,
    c = document.getElementById('c'),
//canvas itself
    ctx = c.getContext('2d'),
//constant for canvas to move vowels drawing
    RIGHT_OFFSET = 6,
//space between boxes and circles
    SPACING = 3,
//width of the consonants and vowels block used for right offset
    SOUNDS_WIDTH = 500,
//canvas text font size
    textFontSize = 60;
//and two-dimensional graphic context of the
//canvas, the only one supported by all
//browsers for now

//array of position, color, sound
consonants = new Array();

consonants = [
    [0, 0, "#A53F0F", "m", ["ment", "m'en", "mans", "mens"]],
    [2, 1, "#AA930A", "v", ["vent", "vans", "vend"]],
    [4, 1, "#96938E", "f", ["faon", "fend"]],
    [3, 2, "#3A7728", "p", ["paon", "pan", "pend"]],
    [1, 2, "#A50544", "b", ["banc", "ban"]],
    [0, 4, "#2B4C3F", "n", ["nan"]],
    [4, 5, "#F7D3B5", "s", ["sans", "cent", "sang", "s'en"]],
    [2, 5, "#FC9BB2", "z", ["zan"]],
    [3, 6, "#007770", "t", ["tant", "taon", "temps", "tend"]],
    [1, 6, "#E29100", "d", ["dent", "dans", "d'en"]],
    [4, 7, "#CE898C", "ch", ["champ", "chant"]],
    [2, 7, "#894FBF", "ge", ["gens", "Jean", "j'en"]],
    [0, 8, "#A3C1AD", "l", ["lent", "l'an"]],
    [0, 10, "#D3BFB7", "r", ["rang", "rend"]],
    [3, 12, "#3A4972", "qu", ["quand", "qu'en", "quant", "Caen"]],
    [1, 12, "#9B0070", "g", ["gant", "Gand"]]
            ];

vowels = new Array();

vowels = [
    [2 + RIGHT_OFFSET, 0, "#E8112D", "i"],
    [0 + RIGHT_OFFSET, 0, "#F7D917", "u"],
    [2 + RIGHT_OFFSET, 2, "#ED6E00", "ez"],
    [0 + RIGHT_OFFSET, 2, "#00B760", "eu"],
    [3 + RIGHT_OFFSET, 3, "#F9BF9E", "in"],
    [2 + RIGHT_OFFSET, 4, "#F43FA5", "ei"],
    [0 + RIGHT_OFFSET, 4, "#CEEA82", "oe"],
    [3 + RIGHT_OFFSET, 6, "#EDC4DD", "an"],
    [1 + RIGHT_OFFSET, 6, "#930FA5", "a"],
    [1 + RIGHT_OFFSET, 8, "#5B77CC", "ot"],
    [3 + RIGHT_OFFSET, 9, "#C4D8E2", "on"],
    [1 + RIGHT_OFFSET, 10, "#0051BA", "au"],
    [1 + RIGHT_OFFSET, 12, "#4CCED1", "ou"]
];

c.width = width;
c.height = height;
//setting canvas size

//grid size
noOfx = Math.floor(width / dim);
noOfy = Math.floor(height / dim);


//Game grid used for AI to navigate and to place sweets

function drawGrid(){

    ctx.beginPath();
    ctx.strokeStyle = "white";

    for(var i = 0; i <= noOfy; i++){

        ctx.moveTo(0, i * dim);
        ctx.lineTo(noOfx * dim, i * dim);
        ctx.stroke();
    }

    for(var i = 0; i <= noOfx; i++){

        ctx.moveTo(i * dim, 0);
        ctx.lineTo(i * dim, noOfy * dim);
        ctx.stroke();
    }
    ctx.closePath();
}

function drawConsonants(color){

    for(var i = 0; i < consonants.length; i++){

        drawBox(consonants[i][0], consonants[i][1], color || consonants[i][2]);
    }
}

function drawVowels(color){

    for(var i = 0; i < vowels.length; i++){

        drawCircle(vowels[i][0], vowels[i][1], color || vowels[i][2]);
    }
}

function drawBox(x, y, color, sound){

    ctx.beginPath();
    ctx.fillStyle = color;

    orgX = x * dim;
    orgY = y * dim;

    ctx.fillRect(orgX + SPACING, orgY + SPACING, dim - SPACING, dim - SPACING);

    ctx.closePath();
}

function drawCircle(x, y, color, sound){

    ctx.beginPath();
    ctx.fillStyle = color;

    orgX = x * dim + dim / 2;
    orgY = y * dim + dim / 2;

    ctx.arc(orgX + SPACING, orgY + SPACING, (dim - SPACING) / 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.closePath();
}

// Draws examples to the right of consonant + vowel "in" combination
// text - examples array
// color - consonant color
// letter - consonant letter
function drawTextConsonantVowel(text, color, letter){

    var textL = text.length;
    var offSetY = 1;
    ctx.font= textFontSize + "px fundamental__brigade_schwerRg";

    for(var i = 0; i < textL; i++){

        var word = text[i].split('');
        var wordL = word.length;
        var letterL = letter.length;
        var offSetX = SOUNDS_WIDTH + dim;

        for(var j = 0; j < wordL; j++){

            if(j < letterL){

                ctx.fillStyle = color;

                if(word[j] == '\''){

                    ctx.fillStyle = "#FFFFFF";
                }
            }else if(word[j] == '\''){

                ctx.fillStyle = "#FFFFFF";
            }else{

                ctx.fillStyle = "#F9BF9E";
            }

            ctx.fillText(word[j], offSetX, textFontSize * offSetY);

            offSetX += ctx.measureText(word[j]).width;
        }
        offSetY++;
    }
}

function collides(rects, x, y) {
    var isCollision = false;
    for (var i = 0, len = rects.length; i < len; i++) {
        var left = rects[i][0] * dim, right = rects[i][0] * dim + dim;
        var top = rects[i][1] * dim, bottom = rects[i][1] * dim + dim;

        if (right >= x
            && left <= x
            && bottom >= y
            && top <= y) {
            isCollision = rects[i];
        }
    }
    return isCollision;
}

c.addEventListener('click', function(e) {

    var x = e.pageX - c.offsetLeft;
    var y = e.pageY - c.offsetTop;

        var consonant = collides(consonants, x, y);
        if (consonant) {

            ctx.clearRect(0, 0, c.width, c.height);
            drawTextConsonantVowel(consonant[4], consonant[2], consonant[3]);
            var snd = new Audio("sound/consonant/" + consonant[3] + ".wav");
                snd.play();
                ctx.globalAlpha = 0.5;
                drawConsonants();
                drawVowels();
                ctx.globalAlpha = 1.0;
                drawBox(consonant[0], consonant[1], consonant[2]);
                drawCircle(vowels[4][0], vowels[4][1], vowels[4][2]);

            snd.addEventListener("ended", function()
            {
                ctx.clearRect(0, 0, c.width, c.height);
                drawConsonants();
                drawVowels();
            });
        }
        var vowel = collides(vowels, x, y);
        if (vowel) {
            var snd = new Audio("sound/vowel/" + vowel[3] + ".wav");
            snd.play();
        }
    }, false);

c.addEventListener('mouseover', function(e) {

    var x = e.pageX - c.offsetLeft;
    var y = e.pageY - c.offsetTop;

    var consonant = collides(consonants, x, y);
    if (consonant) {
        $('#c').css('cursor','pointer');
    }
    var vowel = collides(vowels, x, y);
    if (vowel) {
        $('#c').css('cursor','pointer');
    }
}, false);