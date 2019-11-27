function setup() {
  createCanvas(500, 500);
  strokeWeight(4);
}
function draw() {
  background(255);
  textSize(40);
  fill(0);
  text('DAY',200,200);
  if (keyIsPressed == true) { // If the key is pressed,
  background(0);
  textSize(40);
fill(255);
  text('NIGHT',200,200);
}
}
