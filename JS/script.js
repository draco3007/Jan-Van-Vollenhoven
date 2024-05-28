
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "01001000 01101001 00101100 00100000 01101001 01110100 00100111 01110011 00100000 01101101 01100101 00100000 01001010 01100001 01101110 00001101 00001010 00001101 00001010 01001001 00100000 01100001 01101101 00100000 01100001 01101110 00100000 01101001 01101110 01110011 01110000 01101001 01110010 01101001 01101110 01100111 00100000 01000111 01100001 01101101 01100101 00100000 01000100 01100101 01110110 01100101 01101100 01101111 01110000 01100101 01110010 00100000 01100001 01101110 01100100 00100000 01010111 01100101 01100010 01110011 01101001 01110100 01100101 00100000 01000100 01100101 01110011 01101001 01100111 01101110 01100101 01110010 00100000 01110111 01101000 01101111 00100000 01101001 01110011 00100000 01110011 01110100 01110101 01100100 01111001 01101001 01101110 01100111 00100000 01100001 01110100 00100000 01010011 01000001 01000101 00100000 01001010 01101111 01101000 01100001 01101110 01101110 01100101 01110011 01100010 01110101 01110010 01100111 00100000 01101001 01101110 00100000 01010011 01101111 01110101 01110100 01101000 00100000 01000001 01100110 01110010 01101001 01100011 01100001 00101110";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#03A062";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);



