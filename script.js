// Computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * (2 + 1));
  if (computerChoice === 0) {
    return "paper";
  } else if (computerChoice === 1) {
    return "rock";
  } else {
    return "scissors";
  }
}
// User choice
function getPlayerChoice() {
  return prompt("Enter Rock/Paper/Scissors").toLowerCase();
}
// Compare strings
function compare(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log("You win, rock beats scissors");
    } else {
      console.log("You lose, paper beats rock");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("You win, paper beats rock");
    } else {
      console.log("You lose, scissors beats paper");
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("You lose, rock beats scissors");
    } else {
      console.log("You win, scissors beat paper");
    }
  }
}
// Play the game
function playGame() {
  for (let i = 0; i <= 4; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    compare(playerSelection, computerSelection);
  }
}
// Call the playgame function to start the game
playGame();
