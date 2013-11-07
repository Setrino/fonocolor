$(document).ready(function(){

    drawConsonants();
    drawVowels();
    drawGrid();
})

var width = 650,
//width of the canvas
    height = 450,
//height of the canvas
    dim = 50,
    grid = null,
    c = document.getElementById('c'),
//canvas itself
    ctx = c.getContext('2d');
//and two-dimensional graphic context of the
//canvas, the only one supported by all
//browsers for now

//array of position, color, sound
consonants = new Array();

consonants = [
    [0, 4, "#BA5D4F", "m"],
    [1, 2, "#A2844E", "f"],
    [1, 0, "#909497", "v"],
    [2, 1, "#517855", "p"],
    [2, 3, "#BF4D6C", "b"],
    [4, 4, "#455D5B", "n"],
    [5, 0, "#FCCAB3", "ss"],
    [5, 2, "#FF9DAF", "z"],
    [6, 1, "#007D79", "t"],
    [6, 3, "#C77C48", "d"],
    [7, 0, "#C6888C", "ch"],
    [7, 2, "#9570BD", "ge"],
    [8, 4, "#7BB1A1", "l"],
    [10, 4, "#BAA8AC", "r"],
    [12, 1, "#5A697F", "k"],
    [12, 3, "#BC5187", "g"]
            ];

vowels = new Array();

vowels = [
    [0, 1 + 5, "#ff455f", "i"],
    [0, 3 + 5, "#ffdd61", "u"],
    [2, 1 + 5, "#ff6544", "ez"],
    [2, 3 + 5, "#00a86d", "eu"],
    [3, 0 + 5, "#ffb9a1", "in"],
    [4, 1 + 5, "#fe67ae", "ei"],
    [4, 3 + 5, "#a7e88f", "oe"],
    [6, 0 + 5, "#f6b9e3", "an"],
    [6, 2 + 5, "#ba5fb3", "a"],
    [8, 2 + 5, "#6089cc", "ot"],
    [9, 0 + 5, "#9cd6ea", "on"],
    [10, 2 + 5, "#1e5c9d", "au"],
    [12, 2 + 5, "#2edadd", "ou"]
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

function drawConsonants(){

    for(var i = 0; i < consonants.length; i++){

        drawBox(consonants[i][0], consonants[i][1], consonants[i][2]);
    }
}

function drawVowels(){

    for(var i = 0; i < vowels.length; i++){

        drawCircle(vowels[i][0], vowels[i][1], vowels[i][2]);
    }
}

function drawBox(x, y, color, sound){

    ctx.beginPath();
    ctx.fillStyle = color;

    orgX = x * dim;
    orgY = y * dim;

    ctx.fillRect(orgX, orgY, dim, dim);

    ctx.closePath();
}

function drawCircle(x, y, color, sound){

    ctx.beginPath();
    ctx.fillStyle = color;

    orgX = x * dim + dim / 2;
    orgY = y * dim + dim / 2;

    ctx.arc(orgX, orgY, dim / 2, 0 , 2 * Math.PI);
    ctx.fill();

    ctx.closePath();
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
        var consonant = collides(consonants, e.offsetX, e.offsetY);
        if (consonant) {
            var snd = new Audio("sound/consonant/" + consonant[3] + ".mp3");
            snd.play();
        }
        var vowel = collides(vowels, e.offsetX, e.offsetY);
        if (vowel) {
            var snd = new Audio("sound/vowel/" + vowel[3] + ".mp3");
            snd.play();
        }
    }, false)