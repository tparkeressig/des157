// This is Tara's Studio 3 DES 157 JavaScript Document

console.log("Reading JS");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js goes here inside the addEventListener and function brackets

    var basicButtonJS = document.getElementByID('basicButton');

    basicButtonJS.addEventListener('mouseover', function(){
      basicButtonJS.style.backgroundColor="yellow";
    })

});
