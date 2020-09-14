
let speed = 0.1;
var angle = 2.0;
var scalar = 3.5;
var offset = 400;
var col = {
  r: 100,
  g: 100,
  b: 100
};
function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  background(0,0,0);
  // put setup code here
}

function draw() {
  col.r = random(0,255);
  col.g = random(0,255);
  col.b = random(0,255);

  // x and y are calculated by converting from polar to cartesian
  var x = (windowWidth/2) + cos(angle) * scalar;
  var y = (windowHeight/2) + sin(angle) * scalar;
  fill(col.r, col.g, col.b);
  ellipse(x,y,5,5);
  angle += speed;
  scalar += speed;
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    speed -= 0.1;
  }

  if (keyCode == RIGHT_ARROW) {
    speed += 0.1;
  }

  if (keyCode == ENTER) {
    speed = 0.0;
  }

  if (keyCode == SHIFT) {
    saveCanvas('coolSpiral', 'png');
  }

  return false
}
