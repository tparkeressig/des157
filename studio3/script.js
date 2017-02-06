// This is Tara's Studio 3 DES 157 JavaScript Document

console.log("Reading JS");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js goes here inside the addEventListener and function brackets

    var basicButtonJS = document.getElementById('basicButton');

    // on mouseover do these things to the #basicButton:
    basicButtonJS.addEventListener('mouseover', function(){
      basicButton.style.backgroundColor="tomato";
      basicButton.innerHTML = "Oh hello.";
    })
    // on mouseout do these things to the #basicButton:
    basicButtonJS.addEventListener('mouseout', function(){
    basicButton.style.backgroundColor="lightblue";
    basicButton.innerHTML = "This should change color when hovered over!";
    })

});
