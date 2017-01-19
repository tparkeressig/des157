// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("The js is being read.");

function setup() {
    var canvas = createCanvas(800, 250);
    // Move the canvas so it's inside <div id="sketch-holder">.
    canvas.parent('p5');
    background(255);

    noStroke();
}


function draw() {
    var ran = random(0, 225);

    if (mouseIsPressed) {
        fill(ran);
    } else {
        fill(0);
    }
    if (keyIsPressed) {
        rect(mouseX, mouseY, 100, 100);
    } else {
        triangle(mouseX + 30, mouseY + 75, mouseX + 58, mouseY + 20, mouseX + 86, mouseY + 75);
    }

}
