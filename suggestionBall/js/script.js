"use strict";

// set variables
const suggestionArray = [
    "take a break",
    "go for a walk",
    "do some work",
    "call a friend",
    "call a family member",
    "get some sleep",
    "read a book",
    "go workout",
    "play some games"
];
const colorObject = {
    lightgreen: "",
    lightblue: "",
    lightgrey: "",
    lightpink: ""
}
const content = document.querySelector(".content");
const h1 = document.querySelector(".content h1");
const body = document.querySelector("body");

// function that returns a random sentence from the array
function randomWordGenerator() {
    return suggestionArray[Math.trunc(Math.random() * suggestionArray.length)];
}

// function that returns random color from the object
function randomColorGenerator(colorObject) {
    const keys = Object.keys(colorObject);
    return keys[Math.trunc(Math.random() * keys.length)];
}

// run function on click, displays random sentence, and random color
content.addEventListener("click", function() {
    h1.innerHTML = `You should ${randomWordGenerator()}`;
    body.style.backgroundColor = randomColorGenerator(colorObject);
});

// just testing more functions.. not DRY, yet..
function test() {
    document.querySelector(".title1").style.fontSize = "1.5rem";
    document.querySelector(".title2").style.fontSize = "1.5rem";
    document.querySelector(".title1").style.marginTop = "30px";
    document.querySelector(".title2").style.marginTop = "33px";
}
document.querySelector(".title2").addEventListener("click", function() {
    test();
});

