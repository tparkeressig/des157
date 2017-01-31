// JavaScript Document

console.log("reading");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //First, capture the submit event
    document.theForm.onsubmit = processForm;

    //Next, define process function(s) (we'll now be inside the function!!!)
    function processForm() {

        //Third, store player's name in a variable called userNameJS
        var userNameJS = document.theForm.userName.value;

        //Fourth, store "something yummy" in a variable called userYumJS
        var userYumJS = document.theForm.userYum.value;

        //Fifth, store the favorite color the user imput in a variable called userColorJS
        var userColorJS = document.theForm.userColor.value;

        //Fifth, store the chosen animal the user imput in a variable called userAnimalJS
        var userAnimalJS = document.theForm.userAnimal.value;

        //Fifth, store the "good thing" the user imput in a variable called goodThingJS
        var goodThingJS = document.theForm.goodThing.value;

        //Sixth, store the dropdown aka selection response in a variable called foodTypeJS
        //the below didn't work. ):< Will just go back to my old variable
        // var foodTypeDropdown =  document.getElementById("foodType");
        // var foodTypeJS = foodTypeDropdown.options[foodTypeDropdown.selectedIndex].text;
        var foodTypeJS = "cookies";

        //Finally, apply the method of innerHTML to concantenate a message with the variables you've stored earlier.
        msg1.innerHTML = "What's up, " + userNameJS + "? Let's bake " + userYumJS + " " + foodTypeJS + "!";
        msg2.innerHTML = "Let's cut them out in the shape of a " + userAnimalJS + " and put " + userColorJS + " frosting on them!";
        msg3.innerHTML = "Wow, your " + foodTypeJS + " look great! You must have put so much " + goodThingJS + " into making them!";

        //Also, prevent page from reloading
        return false;

    }
    //Now we're back outside the function!
});
