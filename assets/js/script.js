// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "submit") {
            alert("You clicked submit!")
          } else {
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
          }
        })
    }
}) 


/**
 * The main game "loop" called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame() {

// Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);
}

function checkAnswers() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function icrementWrongAnswers() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}