const colorText = document.querySelector(".colorText");
const colorContainer = document.querySelector(".colorNameContainer");
const startBtn = document.querySelector(".startBtn");
const easyBtn = document.querySelector(".easy");
const hardBtn = document.querySelector(".hard");
const resetBtn = document.querySelector(".resetBtn");
const boxes = document.getElementsByClassName("box");
let correctBox;
// function that generates random rgb color
const createRandomColors = function() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
};

// generates random box inot the correct box variable

const createCorrectBox = function() {
    correctBox = Math.floor(Math.random() * boxes.length);
    console.log(boxes[correctBox]);
    colorText.textContent = `The color is ${boxes[correctBox].style.backgroundColor}`;
};
// starts the game
startBtn.addEventListener("click", function() {
    // changes background color to blue at the start of game and after color is changed to correct color
    colorContainer.style.backgroundColor = "blue";
    // loops through boxes html collection to create random colors
    for(box of boxes) {
        box.style.backgroundColor = createRandomColors();
        // gives each child in boxes an event listener to check for correct box
        box.addEventListener("click", function() {
            if(this.style.backgroundColor === boxes[correctBox].style.backgroundColor) {
                console.log("yes");
                // changes the text if you color is correct
                colorText.textContent = "That's correct you got it!";
                // changes background color of blue container to correct color
                colorContainer.style.backgroundColor = boxes[correctBox].style.backgroundColor;
            } else {
                console.log("no")
                // if color is incorrect this text will appear
                colorText.textContent = "That's incorrect try again /:";

            };
        });
    };
    createCorrectBox();
});
