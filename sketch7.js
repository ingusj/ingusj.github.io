let t=1

function setup() {
  createCanvas(600, 600);
  strokeWeight(4);
}
function draw() {

  background(255);
  textSize(100);
  fill(0);
  if (t<100){

  text(t,400,400);
    t++;
  }
  else {
   text("go home",random(0,500),random(0,500));

            }
}
