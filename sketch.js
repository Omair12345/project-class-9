var btn_red;
var btn_green;

var r = 255;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  background("white")  
  
  
}

function draw() {
  if(keyDown(RIGHT_ARROW)){

    background("red")
  }
  if(keyDown(LEFT_ARROW)){

    background("green")
  }
  if(keyDown([UP_ARROW])){

    background("yellow")
  }
  if(keyDown(DOWN_ARROW)){

    background("blue")
  }
  drawSprites()
}

