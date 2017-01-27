// JavaScript Document

console.log("reading");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js below here

    //capture the submit event
    document.theForm.onsubmit = processForm;

    //define process function
    function processForm() {

      //store user name in a variable
      var userName = document.theForm.userName.value;
      //alert('Hi ' + userName);

      //store userColor in a variable called userColor
      var userProfesh = document.theForm.userProfesh.value;

      //comment out the alert message above

      //apply the method of innerHTML to concantenate a message with userName and userColor
      myMsg.innerHTML="What's up, " + userName + "? I hear you're an expert " + userProfesh + " designer !";

      //prevent page from reloading
      return false;

    }

});
