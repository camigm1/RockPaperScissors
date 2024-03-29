const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const computerChoice = document.querySelector(".computerChoice");

let valueRock = "";
let valuePaper = "";
let valueScissors = "";

rock.addEventListener("click", function () {
  valueRock = rock.innerHTML.toLowerCase();
  playRound(valueRock, computerPlay());
});

paper.addEventListener("click", function () {
  valuePaper = paper.innerHTML.toLowerCase();
  playRound(valuePaper, computerPlay());
});

scissors.addEventListener("click", function () {
  valueScissors = scissors.innerHTML.toLowerCase();

  playRound(valueScissors, computerPlay());
});

const computerPlay = function () {
  const value = Math.ceil(Math.random() * 3);
  if (value === 3) {
    return "rock";
  } else if (value === 2) {
    return "paper";
  } else if (value === 1) {
    return "scissors";
  }
};
// console.log(computerPlay());
let playerMessage = "Player Wins";
let computerMessage = "Computer Wins";
let humanPlayerWon = `Player One wins this round!`;
let computerWon = "Computer won this round!";
let playerOnePoints = 0;
let computerSelectionPoints = 0;
const playRound = function (playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    results.textContent = playerMessage;
    playerScore.textContent = playerOnePoints += 1;
    // computerChoice.textContent = computerSelection;
    if (playerOnePoints === 5) {
      gameOver(humanPlayerWon);
    }
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    results.textContent = computerMessage;
    computerScore.textContent = computerSelectionPoints += 1;
    if (computerSelectionPoints === 5) {
      gameOver(computerWon);
    }
  } else {
    results.textContent = "Draw";
  }
};

const gameOver = (message) => {
  results.textContent = message;
  computerSelectionPoints = 0;
  playerOnePoints = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
};
