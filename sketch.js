var x = 0;
var speed = 3;

var ball = {
  x: 150,
  y: 150,
  xspeed: 4,
  yspeed: -3
}

function setup() {
  createCanvas(400,400);
  // put setup code here
}

function draw() {
  background(100,100,100);
  move();
  bounce();
  display();
  // put drawing code here
}
function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}
function display() {
  fill(255, 0, 0);
  rect(ball.x, ball.y, 25, 25);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
