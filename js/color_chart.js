$(document).ready(function(){

    drawConsonants();
    drawVowels();
    //drawGrid();
    audioRequest((location.href.indexOf('localhost') == -1) ? consonantPath : '/fonocolor/' +
        consonantPath, consonantAudio, consonantPath, preloadAudio);
    audioRequest((location.href.indexOf('localhost') == -1) ? vowelPath : '/fonocolor/' +
        vowelPath, vowelsAudio, vowelPath, preloadAudio);
});

var width = 830,
//width of the canvas
    height = 600,
//height of the canvas
    dim = 50,
    grid = null,
    c = document.getElementById('c'),
//canvas itself
    ctx = c.getContext('2d'),
//constant for canvas to move vowels drawing
    RIGHT_OFFSET = 7,
//space between boxes and circles
    SPACING = 3,
//width of the consonants and vowels block used for right offset
    SOUNDS_WIDTH = 615,
//canvas text font size
    textFontSize = 60,
//prebuffered object of audio files
    consonantAudio = {},
//prebuffered object of audio files
    vowelsAudio = {},
//path to audio files
    consonantPath = 'sound/consonant/',
    vowelPath = 'sound/vowel/';
//and two-dimensional graphic context of the
//canvas, the only one supported by all
//browsers for now

//array of position, color, sound
consonants = new Array();

consonants = [
    [0, 0, "#A53F0F", "m", ["ment", "m'en", "Mans", "mens"]],
    [2, 1, "#AA930A", "v", ["vent", "vans", "vend"]],
    [4, 1, "#96938E", "f", ["faon", "fend"]],
    [3, 2, "#3A7728", "p", ["paon", "pan", "pend"]],
    [1, 2, "#A50544", "b", ["banc", "ban"]],
    [0, 4, "#2B4C3F", "n", ["1 n an"]],
    [4, 5, "#F7D3B5", "s", ["sans", "cent", "sang", "s'en"]],
    [2, 5, "#FC9BB2", "z", ["2 z ans"]],
    [3, 6, "#007770", "t", ["tant", "taon", "temps", "tend"]],
    [1, 6, "#E29100", "d", ["dent", "dans", "d'en"]],
    [4, 7, "#CE898C", "ch", ["champ", "chant"]],
    [2, 7, "#894FBF", "j", ["gens", "Jean", "j'en"]],
    [0, 8, "#A3C1AD", "l", ["lent", "l'an"]],
    [0, 10, "#D3BFB7", "r", ["rang", "rend"]],
    [3, 11, "#3A4972", "qu", ["quand", "qu'en", "quant", "Caen"]],
    [1, 11, "#9B0070", "g", ["gant", "Gand"]]
];

//

vowels = new Array();

vowels = [
    [2 + RIGHT_OFFSET, 0, "#E8112D", "i"],
    [0 + RIGHT_OFFSET, 0, "#F7D917", "u"],
    [2 + RIGHT_OFFSET, 2, "#ED6E00", "ez"],
    [0 + RIGHT_OFFSET, 2, "#00B760", "eu"],
    [4 + RIGHT_OFFSET, 3, "#F9BF9E", "in"],
    [2 + RIGHT_OFFSET, 4, "#F43FA5", "ei"],
    [0 + RIGHT_OFFSET, 4, "#CEEA82", "oe"],
    [4 + RIGHT_OFFSET, 6, "#EDC4DD", "an"],
    [1 + RIGHT_OFFSET, 6, "#930FA5", "a"],
    [1 + RIGHT_OFFSET, 8, "#5B77CC", "ot"],
    [4 + RIGHT_OFFSET, 9, "#C4D8E2", "on"],
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
    orgY = (y + 1) * 41 + dim / 2 + 12;

    ctx.arc(orgX + (SPACING / 2), orgY + (SPACING / 2), (dim - SPACING) / 2, 0, 2 * Math.PI);
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
    var beginY = 0;

    switch(textL){
        case 1:
            beginY = 285;
            break;
        case 2:
            beginY = 255;
            break;
        case 3:
            beginY = 225;
            break;
        case 4:
            beginY = 195;
            break;
    }

    ctx.font= textFontSize + "px fundamental__brigade_schwerRg";

    for(var i = 0; i < textL; i++){

        var word = text[i].split('');
        var wordL = word.length;
        var letterL = letter.length;
        var offSetX = SOUNDS_WIDTH + dim;

        for(var j = 0; j < wordL; j++){

            if(j < letterL){

                ctx.fillStyle = color;

                if(word[j] == '\'' || word[j] == '1' || word[j] == '2'){

                    ctx.fillStyle = "#FFFFFF";
                }else if(word[j - 1] == 'J' || word[j - 1] == 'C'){

                    ctx.fillStyle = "#EDC4DD";
                }
            }else if(word[j] == '\''){

                ctx.fillStyle = "#FFFFFF";
            }else{

                ctx.fillStyle = "#EDC4DD";

                if(word[j - 2] == '1' || word[j - 2] == '2'){

                    ctx.fillStyle = color;
                }
            }

            ctx.fillText(word[j], offSetX, beginY + offSetY * textFontSize);

            offSetX += ctx.measureText(word[j]).width;
        }
        offSetY++;
    }
}

function collides(rects, x, y, dimY, offSetY, multiplierY) {
    var isCollision = false;

    for (var i = 0, len = rects.length; i < len; i++) {
        var left = rects[i][0] * dim, right = rects[i][0] * dim + dim;
        var top = (rects[i][1] + multiplierY) * dimY + offSetY, bottom = (rects[i][1] + multiplierY) * dimY + dimY + offSetY;

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

        var consonant = collides(consonants, x, y, dim, 0, 0);
        if (consonant) {

            ctx.clearRect(0, 0, c.width, c.height);
            drawTextConsonantVowel(consonant[4], consonant[2], consonant[3]);
            var snd = consonantAudio[consonant[3]];
                snd.play();
                ctx.globalAlpha = 0.4;
                drawConsonants();
                drawVowels();
                ctx.globalAlpha = 1.0;
                drawBox(consonant[0], consonant[1], consonant[2]);
                drawCircle(vowels[7][0], vowels[7][1], vowels[7][2]);

            snd.addEventListener("ended", function()
            {
                ctx.clearRect(0, 0, SOUNDS_WIDTH, c.height);
                drawConsonants();
                drawVowels();
            });
        }
    //For reason of scaling size less than dimension of box was used, so dim = 41, offSetY = 12 and multiplierY = 1
        var vowel = collides(vowels, x, y, 41, 12, 1);
        if (vowel) {
            ctx.clearRect(0, 0, c.width, c.height);
            var snd = vowelsAudio[vowel[3]];
            snd.play();
            ctx.globalAlpha = 0.4;
            drawConsonants();
            drawVowels();
            ctx.globalAlpha = 1.0;
            drawCircle(vowel[0], vowel[1], vowel[2]);
            snd.addEventListener("ended", function()
            {
                setTimeout(
                    function() {
                        ctx.clearRect(0, 0, c.width, c.height);
                        drawConsonants();
                        drawVowels();
                    }, 1500);
            });
        }
    }, false);

//Create an object with preloaded audioFiles
//fileName - e.g. a.wav
//audioFiles - object with preloaded audio files

/*c.addEventListener('mouseover', function(e) {

    var x = e.pageX - c.offsetLeft;
    var y = e.pageY - c.offsetTop;

    var consonant = collides(consonants, x, y, dim, 0, 0);
    if (consonant) {
        $('#c').css('cursor','pointer');
    }
    var vowel = collides(vowels, x, y, dim, 0, 0);
    if (vowel) {
        $('#c').css('cursor','pointer');
    }
}, false);*/