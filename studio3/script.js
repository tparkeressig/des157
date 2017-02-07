// This is Tara's Studio 3 DES 157 JavaScript Document

console.log("Reading JS");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js goes here inside the addEventListener and function brackets

    // let's gather all the html elements we will be influencing here:


    // button vairables
    var glendacardButtonJS = document.getElementById('glendacardButton');
    var twodollarButtonJS = document.getElementById('twodollarButton');
    var icecreamButtonJS = document.getElementById('icecreamButton');
    var keysButtonJS = document.getElementById('keysButton');
    var sfcardButtonJS = document.getElementById('sfcardButton');
    // ignore this basicButton one though.
    var basicButtonJS = document.getElementById('basicButton');

    // popup and transparency variables
    var transparencyJS = document.getElementById('transparency')
    var popupJS = document.getElementById('popup');
    var closeJS = document.getElementById('close');
    // tried using by class name instead but it didn't work. The code was var close = document.getElementsByClassName('close');

    // =============== BEGIN original code for "basicButton" ================
    // // on mouseover do these things to the #basicButton:
    // basicButtonJS.addEventListener('mouseover', function() {
    //     basicButton.style.backgroundColor = "tomato";
    //     basicButton.innerHTML = "Oh hello.";
    // })
    // // on mouseout do these things to the #basicButton:
    // basicButtonJS.addEventListener('mouseout', function() {
    //     basicButton.style.backgroundColor = "lightblue";
    //     basicButton.innerHTML = "This should change color when hovered over!";
    // })
    // // on click, do these things to the #transparency:
    // basicButtonJS.addEventListener('click', function() {
    //     transparency.style.display = "block";
    //     popup.style.display = "block";
    // })
    // =============== END original code for "basicButton" ================

    // =============== BEGIN glendacardButton ================
    // on mouseover do these things to the #basicButton:
    glendacardButtonJS.addEventListener('mouseover', function() {
        glendacardButtonJS.style.backgroundColor = "tomato";
    })
    // on mouseout do these things to the #basicButton:
    glendacardButtonJS.addEventListener('mouseout', function() {
        glendacardButtonJS.style.backgroundColor = "lightblue";
    })
    // on click, do these things to the #transparency, the #popup, and the button itself:
    glendacardButtonJS.addEventListener('click', function() {
        glendacardButtonJS.style.backgroundColor = "tomato";
        transparency.style.display = "block";
        popup.style.display = "block";
        popupPara.innerHTML = "This is a thank-you card I recieved from a professor of mine! <br> I really treasure it!";
    })
    // =============== END glendacardButton ================

    // =============== BEGIN twodollarButton ================
    // on mouseover do these things to the #basicButton:
    twodollarButtonJS.addEventListener('mouseover', function() {
        twodollarButtonJS.style.backgroundColor = "tomato";
    })
    // on mouseout do these things to the #basicButton:
    twodollarButtonJS.addEventListener('mouseout', function() {
        twodollarButtonJS.style.backgroundColor = "lightblue";
    })
    // on click, do these things to the #transparency, the #popup, and the button itself:
    twodollarButtonJS.addEventListener('click', function() {
        twodollarButton.style.backgroundColor = "tomato";
        transparency.style.display = "block";
        popup.style.display = "block";
        popupPara.innerHTML = "A friend and fellow design student gave me a two dollar bill for new year's several years ago. <br> How can I possibly spend it?!";
    })
    // =============== END twodollarButton ================

    // =============== BEGIN icecreamButton ================
    // on mouseover do these things to the #basicButton:
    icecreamButtonJS.addEventListener('mouseover', function() {
        icecreamButtonJS.style.backgroundColor = "tomato";
    })
    // on mouseout do these things to the #basicButton:
    icecreamButtonJS.addEventListener('mouseout', function() {
        icecreamButtonJS.style.backgroundColor = "lightblue";
    })
    // on click, do these things to the #transparency, the #popup, and the button itself:
    icecreamButtonJS.addEventListener('click', function() {
        icecreamButtonJS.style.backgroundColor = "tomato";
        transparency.style.display = "block";
        popup.style.display = "block";
        popupPara.innerHTML = "My aunt is a former graphic designer, though I didn't find that out until after I'd started studying it myself! She always sends hand-made cards made from tasty magazine cutouts.";
    })
    // =============== END icecreamButton ================

    // =============== BEGIN keysButton ================
    // on mouseover do these things to the #basicButton:
    keysButtonJS.addEventListener('mouseover', function() {
        keysButtonJS.style.backgroundColor = "tomato";
    })
    // on mouseout do these things to the #basicButton:
    keysButtonJS.addEventListener('mouseout', function() {
        keysButtonJS.style.backgroundColor = "lightblue";
    })
    // on click, do these things to the #transparency, the #popup, and the button itself:
    keysButtonJS.addEventListener('click', function() {
        keysButtonJS.style.backgroundColor = "tomato";
        transparency.style.display = "block";
        popup.style.display = "block";
        popupPara.innerHTML = "I went on a trip to France when I was 16. I may have stolen the window keys from the old paresian aparment we were staying in. I mean... they were nonfunctional.";
    })
    // =============== END keysButton ================

    // =============== BEGIN sfcardButton ================
    // on mouseover do these things to the #basicButton:
    sfcardButtonJS.addEventListener('mouseover', function() {
        sfcardButtonJS.style.backgroundColor = "tomato";
    })
    // on mouseout do these things to the #basicButton:
    sfcardButtonJS.addEventListener('mouseout', function() {
        sfcardButtonJS.style.backgroundColor = "lightblue";
    })
    // on click, do these things to the #transparency, the #popup, and the button itself:
    sfcardButtonJS.addEventListener('click', function() {
        sfcardButtonJS.style.backgroundColor = "tomato";
        transparency.style.display = "block";
        popup.style.display = "block";
        popupPara.innerHTML = "A friend bought me this really cool card last winter. I plan to frame it one day.";
    })
    // =============== END sfcardButton ================

    // == on clicking the close div, do these to the #transparency: ==
    closeJS.addEventListener('click', function() {
        transparency.style.display = "none";
        popup.style.display = "none";
    })


    //Last but not least, prevent page from reloading
    return false;

});
