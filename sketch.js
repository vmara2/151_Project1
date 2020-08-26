var x = 0;
var speed = 3;

function setup() {
  createCanvas(400,400);
  // put setup code here
}

function draw() {
  background(100,100,100);
  rect(x,100,110,110);
  fill(20,30,100);

  if (x > width - 100) {
    speed = -speed;
  }
  else if (x <= 3) {
    speed = 3;
  }

  x = x + speed;
  // put drawing code here
}
