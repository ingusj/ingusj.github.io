let x = 1;
function setup() {
 createCanvas(windowWidth,windowHeight);
 strokeWeight(4);
}
function draw() {
 background(204);
 if (keyIsPressed == true) { // If the key is pressed,
   x++;                      // add 1 to x.
 }
 textSize(x);
 text('What???',mouseX,mouseY+100);
}
