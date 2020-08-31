var cfill = {
  r: 4,
  g: 29,
  b: 64
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // put setup code here
}

function draw() {
  background(cfill.r, cfill.g, cfill.b);
  circle(mouseX, mouseY, 50);
  stroke(51);
  strokeWeight(4);
  fill(mouseX, mouseY, mouseY);
  // put drawing code here
}

function mouseClicked() {
  cfill.r = cfill.r + 5;
  cfill.g = cfill.g + 5;
  cfill.b = cfill.b + 5;
  print('r: ' + cfill.r);
}

function keyPressed() {
  if (keyCode == BACKSPACE) {
    cfill.r = 4;
    cfill.g = 29;
    cfill.b = 64;
  }
}
