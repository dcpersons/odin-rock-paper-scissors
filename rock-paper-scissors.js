// Make computer get random number from 0-2
// Assign rock for 0, paper for 1, scissors for 2 and save as variable "cpu"


// Prompt player for a choice and save as variable "player"
// Set score variables for cpu and player, cpuScore and playerScore
let cpuScore = 0;
let playerScore = 0;
let playerChoice;
let outcome;
const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");
const results = document.querySelector(".results");


// Add listeners to make "playerChoice" = button clicked
buttons.forEach ((button) => button.addEventListener("click", buttonPress))

function buttonPress(button){
    playerChoice = event.target.className;
    playRound();
    score.textContent = `(You: ${playerScore}) (CPU: ${cpuScore})`;
    if (playerScore == 5) {
        results.textContent =`You win! Final score: ${playerScore} for you and ${cpuScore} for the computer!`;
        buttons.forEach ((button) => button.removeEventListener("click", buttonPress));
    } if (cpuScore == 5) {
        results.textContent = `You lose! Final score: ${playerScore} for you and ${cpuScore} for the computer!`;
        buttons.forEach ((button) => button.removeEventListener("click", buttonPress));
    }
}

// Convert "player" choice to lowercase
// Run getComputerChoise for the cpu
// Compare "player" choice with "cpu" choice
// If equal, results in a tie
// Check all possible orientations for player win
// If no player win, cpu wins
function playRound() {
    cpuChoice = getComputerChoice();
    if (playerChoice === cpuChoice) {
        results.textContent = `It was a tie. You both chose ${cpuChoice}.`;
    } else if (playerChoice === "paper" && cpuChoice === "rock"  || 
    playerChoice === "scissors" && cpuChoice === "paper" || 
    playerChoice === "rock" && cpuChoice === "scissors") {
        results.textContent = `You win this round. You chose ${playerChoice} which beats ${cpuChoice}!`;
        return playerScore += 1;
    } else {
        results.textContent = `You lose this round. Sadly ${cpuChoice} beats ${playerChoice}.`;
        return cpuScore += 1;
    } 
};

function getComputerChoice() {
    let n = (Math.floor(Math.random() * 3));
    if (n === 0) {
        return "rock";
    } else if (n === 1) {
        return "paper";
    } else {return "scissors"};
};

