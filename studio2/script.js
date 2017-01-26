// JavaScript Document

console.log("reading");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js below here

    // notice the form submission event
    document.madlibsInput.onsubmit = processMadlibs;

    // define the process function (whatever THAT means)
    function processMadlibs();

    // store the player's name in a variable
    var designerName = document.madlibsForm.designerName.value;

    //apply the method of innerHTML to concantenate a message with designerName
    clientResponse.innerHTML="Hi there, designerName, nice to meet you.";

    //prevent the page from reloading
    return false;

});
