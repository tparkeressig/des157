// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("The js is being read.");

function setup() {
  var canvas = createCanvas(800, 250);
  // Move the canvas so it's inside <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  background(255);
}

function draw() {
  if(mouseIsPressed){
    fill (0);
  }else{
    fill(255);
  }
  ellipse(mouseX,mouseY,50,50);
}
