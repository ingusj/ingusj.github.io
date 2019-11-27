let img1;
let img2;
let x = 1;
let y = 1;
let xspeed = 1;
let yspeed = 1;

function preload() {
  img1 = loadImage("https://images2.minutemediacdn.com/image/upload/c_crop,h_2367,w_4209,x_0,y_0/f_auto,q_auto,w_1100/v1554989622/shape/mentalfloss/527175-istock-514622028.jpg");

}

function setup() {
  createCanvas(400, 400);
  frameRate(100000);
}

function draw() {
  bounce1();

}


 function bounce1() {
  background(0);
  img1.resize(150, 0)
  image(img1, x, y);
  y = y + yspeed;

  if (y+75==height || y==0) {
    y=1;
    x=random(0,350);
  }



 }
