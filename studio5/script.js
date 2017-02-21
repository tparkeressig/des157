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
    if (pressedYet == false) {
      //on click, cat begins purring and pause button appears
      purrAudio.play();
      catButton.src = "./images/purring-with-interaction.png"
      pressedYet = true;
      console.log("Cat pressed, will now purr.");
    }
  });


  // ================ visualization! ================
  // haven't figured this out yet ):
  // Create a new instance of an audio object and adjust some of its properties
  var audio = new Audio();
  audio.src = "./audio/purring.mp3";
  audio.controls = true;
  audio.loop = false;
  audio.autoplay = false;
  // Establish all variables that your Analyser will use
  var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
  // Initialize the MP3 player after the page loads all of its HTML into the window
  window.addEventListener("load", initMp3Player, false);

  function initMp3Player() {
    document.getElementById('audio_box').appendChild(audio);
    context = new AudioContext(); // AudioContext object instance
    analyser = context.createAnalyser(); // AnalyserNode method
    canvas = document.getElementById('analyser_render');
    ctx = canvas.getContext('2d');
    // Re-route audio playback into the processing graph of the AudioContext
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
    frameLooper();
  }
  // frameLooper() animates any style of graphics you wish to the audio frequency
  // Looping at the default frame rate that the browser provides(approx. 60 FPS)
  function frameLooper() {
    window.RequestAnimationFrame(frameLooper);
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = '#00CCFF'; // Color of the bars
    bars = 100;
    for (var i = 0; i < bars; i++) {
      bar_x = i * 3;
      bar_width = 2;
      bar_height = -(fbc_array[i] / 2);
      //  fillRect( x, y, width, height ) // Explanation of the parameters below
      ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    }
  }

  //Last but not least, prevent page from reloading
  return false;
});
