// Make computer get random number from 0-2
// Assign rock for 0, paper for 1, scissors for 2 and save as variable "cpu"


// Prompt player for a choice and save as variable "player"
// Set score variables for cpu and player, cpuScore and playerScore
let cpuScore = 0;
let playerScore = 0;
let playerChoice;
let outcome;
const buttons = document.querySelectorAll("button");
const score = document.querySelector("score");
const result = document.querySelector("result");

// Add listeners to make "playerChoice" = button clicked
buttons.forEach ((button) => button.addEventListener("click", (event) => {
    playerChoice = event.target.className;
    playRound();
}))

// Run the playRound function 5 times
// function playGame() {
//     for (let i = 4; ; i--) {
//         playRound();
//         // Kicks in after final round is played.
//         if (i === 0) {
//             if (playerScore > cpuScore) {
//                 outcome = "win";
//             } else if (playerScore < cpuScore) {
//                 outcome = "lose";
//             } else {
//                 outcome = "tie";
//             };
//             alert(`The final score is ${playerScore} for you and ${cpuScore} \
// for the computer. You ${outcome}!` );
//             break;
//         // Updates player on current score and remaining rounds, asks for a new input
//         } else player = prompt(`The score is currently ${playerScore} for you and \
// ${cpuScore} for the computer and there are ${i} rounds left. 
// Please type rock, paper, or scissors to play again`, "");
//     };
// };

// Convert "player" choice to lowercase
// Run getComputerChoise for the cpu
// Compare "player" choice with "cpu" choice
// If equal, results in a tie
// Check all possible orientations for player win
// If no player win, cpu wins
function playRound() {
    cpuChoice = getComputerChoice();
    if (playerChoice === cpuChoice) {
        result.textContent = `It was a tie. You both chose ${cpuChoice}.`;
    } else if (playerChoice === "paper" && cpuChoice === "rock"  || 
    playerChoice === "scissors" && cpuChoice === "paper" || 
    playerChoice === "rock" && cpuChoice === "scissors") {
        result.textContent = `You win this round. You chose ${playerChoice} which beats ${cpuChoice}!`;
        return playerScore += 1;
    } else {
        result.textContent = `You lose this round. Sadly ${cpuChoice} beats ${playerChoice}.`;
        return cpuScore += 1;
    };
};

function getComputerChoice() {
    let n = (Math.floor(Math.random() * 3));
    if (n === 0) {
        return "rock";
    } else if (n === 1) {
        return "paper";
    } else {return "scissors"};
};

