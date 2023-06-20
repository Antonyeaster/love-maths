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



function runGame() {

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