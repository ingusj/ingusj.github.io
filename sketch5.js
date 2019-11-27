let x;
let y;

let xspeed;
let yspeed;

let dvd;

function preload() {
  dvd = loadImage("16A5DAEF-F2D8-46E8-B7BC-B26C9B25F625.jpeg");
}

function setup() {
  createCanvas(800, 600);
  x = 400;
  y = 300;
  xspeed = 10;
  yspeed = 10;
}

function draw() {
  background(0);
  //rect(x, y, 80, 60);
  image(dvd,x, y, 80, 60);
  x=x+xspeed;
  y=y+yspeed;

  if (x+80==width || x==0) {
    xspeed=-xspeed;
  }

    if (y+80==height || y==0) {
    yspeed=-yspeed;
  }
}
