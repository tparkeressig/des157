// This is Tara's Studio 5 DES 157 JavaScript Document

console.log("Reading JS");

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // all other js goes here inside the addEventListener and function brackets

  var catButton = document.getElementById("theCat"); //get the img of the cat in a variable
  var purrAudio = new Audio(); //create a variable that is audio
  purrAudio.src = "./audio/purring.mp3"; //bring in the mp3 file

  //on mouseover, cat is still sleeping but play button appears
  catButton.addEventListener("mouseover", function() {
    catButton.src = "./images/sleeping-with-interaction.png"
  });

  //on mouseout, cat is still sleeping but play button disappears
  catButton.addEventListener("mouseout", function() {
    catButton.src = "./images/sleeping-no-interaction.png"
  });

  //on click, cat begins purring and pause button appears
  catButton.addEventListener("click", function() {
    purrAudio.play();
    catButton.src = "./images/purring-with-interaction.png"
  });






  //Last but not least, prevent page from reloading
  return false;

});
