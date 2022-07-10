const colorText = document.querySelector(".colorText");
const colorContainer = document.querySelector(".colorNameContainer");
const startBtn = document.querySelector(".startBtn");
const easyBtn = document.querySelector(".easy");
const hardBtn = document.querySelector(".hard");
const resetBtn = document.querySelector(".reset");
const boxes = document.getElementsByClassName("box");
const boxContainer = document.querySelector(".boxContainer");
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

const easyMode = function() {
    hardBtn.disabled = false;
    
    if(boxes.length === 4) {
        easyBtn.disabled = "true";
        
        
    } else {
        for(let i = 0; i < 4; i++) {
            boxContainer.removeChild(boxContainer.lastChild);
        };
    };
   
};

const hardMode = function() {
    easyBtn.disabled = false;
    
    for(let i = 0; i < 4; i++) {
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        boxContainer.appendChild(newBox);

    };

    if(boxes.length === 12) {
        hardBtn.disabled = true;
    };

    
   
};

const resetMode = function() {
    colorText.textContent = "Let's play the random color game!";
    boxContainer.innerHTML = `<div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>`;
    easyBtn.disabled = false;
    hardBtn.disabled = false;
}

const startGame = function() {
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
                 for(box of boxes) {
                     box.style.backgroundColor = boxes[correctBox].style.backgroundColor;
                 }
             } else {
                 console.log("no")
                 // if color is incorrect this text will appear
                 colorText.textContent = "That's incorrect try again /:";
 
             };
         });
     };
     createCorrectBox();
}
// starts the game
startBtn.addEventListener("click", startGame);

easyBtn.addEventListener("click", function() {
    easyMode();
    startGame();
})

hardBtn.addEventListener("click", function() {
    hardMode();
    startGame();
    
});

resetBtn.addEventListener("click", resetMode)
