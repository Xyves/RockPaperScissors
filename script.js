let userScore = 0;
let computerScore = 0;

const resetButton = document.querySelector(".reset");
const roundCountElement = document.getElementById("roundCount");
const userScoreElement = document.getElementById("userScore");
const computerScoreElement = document.getElementById("computerScore");

function updateScore() {
  document.getElementById("userScore").textContent = userScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function updateResult(result) {
  let roundCountElement = document.getElementById("roundCount");
  let roundNumber = parseInt(roundCountElement.textContent);
  roundNumber++;
  roundCountElement.textContent = roundNumber;
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function handleButtonClick(choice) {
  let computerChoice = getComputerChoice();
  let result = compare(choice, computerChoice);
  updateScore();
  updateResult(result);
  toggleUserSelection(choice);
  toggleComputerSelection(computerChoice);
}

function toggleUserSelection(choice) {
  let userImage = document.getElementById("userImage");
  userImage.className = "img " + choice;
}

function toggleComputerSelection(choice) {
  let computerImage = document.getElementById("computerImage");
  computerImage.className = "compImg " + choice;
}

function compare(playerChoice, computerSelection) {
  if (playerChoice === computerSelection) {
    document.getElementById("result").textContent = "It's a tie";
    return "tie";
  } else if (playerChoice === "rock") {
    if (computerSelection === "scissors") {
      document.getElementById("result").textContent = "You win!";
      userScore++;
      return "win";
    } else {
      document.getElementById("result").textContent = "You lose!";
      computerScore++;
      return "lose";
    }
  } else if (playerChoice === "paper") {
    if (computerSelection === "rock") {
      document.getElementById("result").textContent = "You win!";
      userScore++;
      return "win";
    } else {
      document.getElementById("result").textContent = "You lose!";
      computerScore++;
      return "lose";
    }
  } else if (playerChoice === "scissors") {
    if (computerSelection === "rock") {
      document.getElementById("result").textContent = "You lose!";
      computerScore++;
      return "lose";
    } else {
      document.getElementById("result").textContent = "You win!";
      userScore++;
      return "win";
    }
  }
}

document.getElementById("rock").addEventListener("click", function () {
  handleButtonClick("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  handleButtonClick("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  handleButtonClick("scissors");
});
resetButton.addEventListener("click", function () {
  roundCountElement.textContent = "0";

  userScore = 0;
  userScoreElement.textContent = userScore;

  computerScore = 0;
  computerScoreElement.textContent = computerScore;
});
