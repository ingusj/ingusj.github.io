function setup(){
createCanvas(windowWidth,windowHeight);


}

function draw(){
background(255,51,200);
rect(windowWidth/2,windowHeight/2,100,100);


if(mouseIsPressed){
fons2();
fons3();
}
}
function fons2() {
fill(0,255,200);
  ellipse(random(0,windowWidth),random(0,windowHeight),random(10,15),random(0,100))
}

function fons3() {
fill(random(0,20),random(0,30),random(0,40));
  rect(random(0,windowWidth),random(0,windowHeight),random(10,15),random(0,100));
}
