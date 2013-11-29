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
    [0, 0, "#A53F0F", "m"],
    [1, 3, "#AA930A", "v"],
    [1, 1, "#96938E", "f"],
    [2, 2, "#3A7728", "p"],
    [2, 4, "#A50544", "b"],
    [4, 0, "#2B4C3F", "n"],
    [5, 1, "#F7D3B5", "ss"],
    [5, 3, "#FC9BB2", "z"],
    [6, 2, "#007770", "t"],
    [6, 4, "#E29100", "d"],
    [7, 1, "#CE898C", "ch"],
    [7, 3, "#894FBF", "ge"],
    [8, 0, "#A3C1AD", "l"],
    [10, 0, "#D3BFB7", "r"],
    [12, 2, "#3A4972", "k"],
    [12, 4, "#9B0070", "g"]
            ];

vowels = new Array();

vowels = [
    [0, 0 + 5, "#E8112D", "i"],
    [0, 2 + 5, "#F7D917", "u"],
    [2, 0 + 5, "#ED6E00", "ez"],
    [2, 2 + 5, "#00B760", "eu"],
    [3, 3 + 5, "#F9BF9E", "in"],
    [4, 0 + 5, "#F43FA5", "ei"],
    [4, 2 + 5, "#CEEA82", "oe"],
    [6, 3 + 5, "#EDC4DD", "an"],
    [6, 1 + 5, "#930FA5", "a"],
    [8, 1 + 5, "#5B77CC", "ot"],
    [9, 3 + 5, "#C4D8E2", "on"],
    [10, 1 + 5, "#0051BA", "au"],
    [12, 1 + 5, "#4CCED1", "ou"]
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

    var x = e.pageX - c.offsetLeft;
    var y = e.pageY - c.offsetTop;

        var consonant = collides(consonants, x, y);
        if (consonant) {
            var snd = new Audio("sound/consonant/" + consonant[3] + ".wav");
            snd.play();
        }
        var vowel = collides(vowels, x, y);
        if (vowel) {
            var snd = new Audio("sound/vowel/" + vowel[3] + ".wav");
            snd.play();
        }
    }, false)