function setup() {
  createCanvas(400, 400);
  background(255, 55, 55);
  stroke(255, 255, 255);
  strokeWeight(15);
  fill(100, 100, 100);
  triangle(200, 100, 90, 250, 310, 250);

  fill(255, 200, 10);
  rect(150, 260, 100, 100);

}

function draw() {
stroke(mouseX, mouseY, mouseX);
  strokeWeight(5);

  point(random(0, 400), random(0, 400));

}
