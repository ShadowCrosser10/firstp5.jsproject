function preload() {
}

function setup() {
   canvas = createCanvas(680, 320);
   webcam = createCapture(VIDEO);
   webcam.hide();
   canvas.position(110, 250);
   color = "";
}

function draw() {
    image(webcam, 0, 0, 680, 320);
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(630, 50, 75);

     
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 50, 75);

     
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 270, 75);

     
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(630, 270, 75);
}

function take_snapshot() {

}


