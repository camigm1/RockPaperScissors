const rock = document.querySelector(".rock").value;
const paper = document.querySelector(".paper").value;
const scissors = document.querySelector(".scissors").value;

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
const computerSelection = computerPlay();
const playerSelection = "rock";
let humanPlayerWon = `Player One wins this round!`;
let computerWon = "Computer won this round!";

const playRound = function (playerSelection, computerSelection) {
  let playerOne = playerSelection;
  let playerOnePoints = 0;
  let computerSelectionPoints = 0;
  if (
    (playerOne === "rock" && computerSelection === "scissors") ||
    (playerOne === "scissors" && computerSelection === "paper") ||
    (playerOne === "paper" && computerSelection === "rock")
  ) {
    let humanPlayerWon = `Player One wins!!`;
    return humanPlayerWon;
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    let computerWon = `Computer won`;
    return computerWon;
  } else if (playerSelection === computerSelection) {
    return "Its a draw!!";
  } else {
    return "Please enter a value";
  }
};

// console.log(playRound(playerSelection, computerSelection));

let game = () => {
  let playerOnePoints = 0;
  let computerSelectionPoints = 0;
  playRound(playerSelection, computerSelection);
  for (let i = 0; i < 5; i++) {
    if (computerWon) {
      return `${computerSelectionPoints + 1}`;
    } else if (humanPlayerWon) {
      return `${playerOnePoints + 1}`;
    } else {
      return "Its a draw";
    }
  }
};

console.log(game());
