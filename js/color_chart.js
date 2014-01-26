$(document).ready(function(){

    drawConsonants();
    drawVowels();
    //drawGrid();
})

var width = 500,
//width of the canvas
    height = 650,
//height of the canvas
    dim = 50,
    grid = null,
    c = document.getElementById('c'),
//canvas itself
    ctx = c.getContext('2d'),
//constant for canvas to move vowels drawing
    HORIZONTAl_RIGHT = 6,
//space between boxes and circles
    SPACING = 0;
//and two-dimensional graphic context of the
//canvas, the only one supported by all
//browsers for now

//array of position, color, sound
consonants = new Array();

consonants = [
    [0, 0, "#A53F0F", "m"],
    [2, 1, "#AA930A", "v"],
    [4, 1, "#96938E", "f"],
    [3, 2, "#3A7728", "p"],
    [1, 2, "#A50544", "b"],
    [0, 4, "#2B4C3F", "n"],
    [4, 5, "#F7D3B5", "s"],
    [2, 5, "#FC9BB2", "z"],
    [3, 6, "#007770", "t"],
    [1, 6, "#E29100", "d"],
    [4, 7, "#CE898C", "ch"],
    [2, 7, "#894FBF", "ge"],
    [0, 8, "#A3C1AD", "l"],
    [0, 10, "#D3BFB7", "r"],
    [3, 12, "#3A4972", "k"],
    [1, 12, "#9B0070", "g"]
            ];

vowels = new Array();

vowels = [
    [2 + HORIZONTAl_RIGHT, 0, "#E8112D", "i"],
    [0 + HORIZONTAl_RIGHT, 0, "#F7D917", "u"],
    [2 + HORIZONTAl_RIGHT, 2, "#ED6E00", "ez"],
    [0 + HORIZONTAl_RIGHT, 2, "#00B760", "eu"],
    [3 + HORIZONTAl_RIGHT, 3, "#F9BF9E", "in"],
    [2 + HORIZONTAl_RIGHT, 4, "#F43FA5", "ei"],
    [0 + HORIZONTAl_RIGHT, 4, "#CEEA82", "oe"],
    [3 + HORIZONTAl_RIGHT, 6, "#EDC4DD", "an"],
    [1 + HORIZONTAl_RIGHT, 6, "#930FA5", "a"],
    [1 + HORIZONTAl_RIGHT, 8, "#5B77CC", "ot"],
    [3 + HORIZONTAl_RIGHT, 9, "#C4D8E2", "on"],
    [1 + HORIZONTAl_RIGHT, 10, "#0051BA", "au"],
    [1 + HORIZONTAl_RIGHT, 12, "#4CCED1", "ou"]
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

    ctx.fillRect(orgX + SPACING, orgY + SPACING, dim - SPACING, dim - SPACING);

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