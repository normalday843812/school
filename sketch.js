
// helpful comemnttn is hthsi
var x = 0;
var y = 30;
var w = 30;
var h = 30;

//sets it up
function setup() {
    createCanvas(400, 400);
}

//makes random values for the shapes
function random(min, max) {
    return Math.random() * (max - min) + min;
  }
//draw fucntion
function draw() {
    //makes x a random number
    x=random(25,30);
    y=random(25,30);
    //CHANGES THE FRAMERATE (AMAZING)
    frameRate(59);
    //makes background grey
    background(200);
    //no stroke for shapes
    noStroke();
    //fills red
    //helpful comment
    fill(255,0,0);
    //makes the first rectangle
    rect(x, y, 2*w, 2*h);
    fill(0,255,0);
    ellipse(x+w*4, y+1*h, 4*w, 2*h);
    fill(0,0,255);
    triangle(x, y+2*h, x+6*w, y+2*h, x+3*w, y+3*h);
    fill(255,0,255);
    rect(x, y+3*h, 3*w, 3*h);
    fill(255,255,0);
    rect(x+w*3, y+3*h, 3*w, 3*h);
    fill(0,255,255);
    ellipse(x+(w*2), y+7*h, w*4, h*2);
    fill(255,255,255);
    rect(x+w*4, y+6*h, w*2, h*2);
    fill(0,0,0);
    rect(x, y+8*h, w*2, h*2);
}
