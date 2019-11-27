let canvas;

function setup(){
canvas = createCanvas(windowWidth,windowHeight)
canvas.position (0,0);
canvas.style('z-index', '-1');

background(255, 0, 40);
}

function draw() {


  for (let i = 0; i < windowWidth; i+=5) {
    strokeWeight(0.5);
    stroke(153);
    line(0,i,windowWidth,i);
  }


}
