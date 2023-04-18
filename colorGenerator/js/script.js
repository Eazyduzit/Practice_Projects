"use strict";

// Created by Marius Skjellerud
// Created 3 functions. One for each - RGB, HEX and HSL. 
// Created a random number for each of the number/letter values and put them together in a string.
// If the color is darker than set values, changes text to white for visibility.
// Displays the color and value for each, on a set interval.
// Code could maybe be more DRY..

function rgbGenerator() {
    const r = Math.trunc(Math.random() * 255);
    const g = Math.trunc(Math.random() * 255);
    const b = Math.trunc(Math.random() * 255);
    
    const rgbString = "rgb(" + r + ", " + g + ", " + b + ")";

    document.querySelector(".rgb").style.backgroundColor = rgbString;
    document.querySelector(".rgb h1").textContent = rgbString;

    if (r <= 125 && g <= 125) {
        document.getElementById("strColRgb").style.color = "white";
    } else {
        document.getElementById("strColRgb").style.color = "black";
    }

    console.log(rgbString);
}

function hexGenerator() {
    const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

    const hexRan1 = hexValues[Math.trunc(Math.random() * hexValues.length)];
    const hexRan2 = hexValues[Math.trunc(Math.random() * hexValues.length)];
    const hexRan3 = hexValues[Math.trunc(Math.random() * hexValues.length)];
    const hexRan4 = hexValues[Math.trunc(Math.random() * hexValues.length)];
    const hexRan5 = hexValues[Math.trunc(Math.random() * hexValues.length)];
    const hexRan6 = hexValues[Math.trunc(Math.random() * hexValues.length)];

    const hexString = "#" + hexRan1 + hexRan2 + hexRan3 + hexRan4 + hexRan5 + hexRan6;

    document.querySelector(".hex").style.backgroundColor = hexString;
    document.querySelector(".hex h1").textContent = hexString;

    console.log(hexString);
}

function hslGenerator() {
    const h = Math.trunc(Math.random() * 360);
    const s = Math.trunc(Math.random() * 100);
    const l = Math.trunc(Math.random() * 100);

    const hslString = "hsl(" + h + ", " + s + "%, " + l + "%)";

    document.querySelector(".hsl").style.backgroundColor = hslString;
    document.querySelector(".hsl h1").textContent = hslString;

    if (l <= 20) {
        document.getElementById("strColHsl").style.color = "white";
    } else {
        document.getElementById("strColHsl").style.color = "black";
    }

    console.log(hslString);
}

// rgbGenerator();
// hexGenerator();
// hslGenerator();

setInterval(rgbGenerator, 2000);
setInterval(hexGenerator, 2000);
setInterval(hslGenerator, 2000);