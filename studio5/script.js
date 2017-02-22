// This is Tara's Studio 5 DES 157 JavaScript Document

console.log("Reading JS");

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // all other js goes here inside the addEventListener and function brackets

  // ================ create some variables and source the audio ================
  var catButton = document.getElementById("theCat"); //get the img of the cat in a variable
  var pressedYet = false; //boolean to tell if the catButton has been pressed yet
  var purrAudio = new Audio(); //create a variable that is audio
  purrAudio.src = "./audio/purring.mp3"; //bring in the mp3 file


  // ================ mouseover events ================
  catButton.addEventListener("mouseover", function() {
    if (pressedYet == false) {
      //on mouseover, cat is still sleeping but play button appears
      catButton.src = "./images/sleeping-with-interaction.png"
      console.log("Cat hovered while sleeping, show play icon.");
    }
    if (pressedYet == true) {
      //on mouseover after click, cat continues purring and pause button reappears
      catButton.src = "./images/purring-with-interaction.png"
      console.log("Cat hovered while purring, show pause icon.");
    }
  });

  // ================ mouseout events ================
  catButton.addEventListener("mouseout", function() {
    if (pressedYet == false) {
      //on mouseout without click, cat is sleeping & play button disappears
      catButton.src = "./images/sleeping-no-interaction.png"
      console.log("Cat mouseout while sleeping, show no icon.");
    }
    if (pressedYet == true) {
      //on mouseout after click, cat is purring & pause button disappears
      catButton.src = "./images/purring-no-interaction.png"
      console.log("Cat mouseout while purring, show no icon.");
    }
  });

  // ================ click events ================
  catButton.addEventListener("click", function() {
    if (pressedYet == true) {
      //on click, cat begins purring and pause button appears
      purrAudio.pause();
      catButton.src = "./images/sleeping-with-interaction.png"
      pressedYet = false;
      console.log("Cat pressed again, will now stop purring.");
    }
    // if (pressedYet == false) {
    else {
      //on click, cat begins purring and pause button appears
      purrAudio.play();
      catButton.src = "./images/purring-with-interaction.png"
      pressedYet = true;
      console.log("Cat pressed, will now purr.");
    }
  });


  // ================ visualization! ================
  // haven't figured this out yet ):
  var analyser, canvas, ctx;
  canvas = document.getElementById("barvisualizer");
  canvas.width = 500;
  canvas.height = 100;
  ctx = canvas.getContext("2d");

  function setupWebAudio() {
    console.log("The function setupWebAudio has been called.");
    var audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    var source = audioContext.createMediaElementSource(purrAudio);
    source.connect(analyser)
    analyser.connect(audioContext.destination);
  };

  function draw() {
    console.log("The function draw has been called.");
    requestAnimationFrame(draw);
    var freqByteData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(freqByteData);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 1; i < freqByteData.length; i += 10) {

      ctx.fillStyle = "#845F49";
      ctx.fillRect(i, canvas.height - freqByteData[i], 10, canvas.height);
      ctx.strokeRect(i, canvas.height - freqByteData[i], 10, canvas.height);
    }

  };

  setupWebAudio();
  draw();

  //and that's a wrap (but not a line wrap)!
});
