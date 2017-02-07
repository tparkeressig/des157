// This is Tara's Studio 3 DES 157 JavaScript Document

console.log("Reading JS");

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // all other js goes here inside the addEventListener and function brackets

  // let's gather all the html elements we will be influencing here:
  var basicButtonJS = document.getElementById('basicButton');
  var transparencyJS = document.getElementById('transparency')
  var popupJS = document.getElementById('popup');
  var closeJS = document.getElementById('close');

  // tried using by class name instead but it didn't work. The code was var close = document.getElementsByClassName('close');

  // on mouseover do these things to the #basicButton:
  basicButtonJS.addEventListener('mouseover', function() {
    basicButton.style.backgroundColor = "tomato";
    basicButton.innerHTML = "Oh hello.";
  })
  // on mouseout do these things to the #basicButton:
  basicButtonJS.addEventListener('mouseout', function() {
    basicButton.style.backgroundColor = "lightblue";
    basicButton.innerHTML = "This should change color when hovered over!";
  })
  // on click, do these things to the #transparency:
  basicButtonJS.addEventListener('click', function() {
    transparency.style.display = "block";
    popup.style.display = "block";
  })
  // on clicking the close div, do these to the #transparency:
  closeJS.addEventListener('click', function(){
  transparency.style.display="none";
  popup.style.display="none";
})




  //Last but not least, prevent page from reloading
  return false;

});
