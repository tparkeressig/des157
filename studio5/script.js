// This is Tara's Studio 5 DES 157 JavaScript Document

console.log("Reading JS");

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // all other js goes here inside the addEventListener and function brackets

  var catButton = document.getElementById("theCat"); //get the img of the cat in a variable
  var pressedYet = false; //boolean to tell if the catButton has been pressed yet
  var purrAudio = new Audio(); //create a variable that is audio
  purrAudio.src = "./audio/purring.mp3"; //bring in the mp3 file


  catButton.addEventListener("mouseover", function() {
    if (pressedYet == false) {
      //on mouseover, cat is still sleeping but play button appears
      catButton.src = "./images/sleeping-with-interaction.png"
    }
    if (pressedYet == true) {
      //on mouseover after click, cat continues purring and pause button reappears
      catButton.src = "./images/purring-with-interaction.png"
    }
  });

  // mouseout events
  catButton.addEventListener("mouseout", function() {
    if (pressedYet == false) {
      //on mouseout without click, cat is sleeping & play button disappears
      catButton.src = "./images/sleeping-no-interaction.png"
    }
    if (pressedYet == true) {
      //on mouseout after click, cat is purring & pause button disappears
      catButton.src = "./images/purring-no-interaction.png"
    }
  });






  //on click, cat begins purring and pause button appears
  catButton.addEventListener("click", function() {
    purrAudio.play();
    catButton.src = "./images/purring-with-interaction.png"
    pressedYet = true;
  });





  //Last but not least, prevent page from reloading
  return false;

});
