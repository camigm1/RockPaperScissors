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
let humanPlayerWon = `Player One wins this round!!!`;
let computerWon = "Computer won this round!!";

const playRound = function (playerSelection, computerSelection) {
  let playerOne = playerSelection;
  if (
    (playerOne === "rock" && computerSelection === "scissors") ||
    (playerOne === "scissors" && computerSelection === "paper") ||
    (playerOne === "paper" && computerSelection === "rock")
  ) {
    let humanPlayerWon = `Player One wins!!!`;
    return humanPlayerWon;
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    let computerWon = "Computer won this round!!";
    return computerWon;
  } else if (playerSelection === computerSelection) {
    return "Its a draw!!";
  } else {
    return "Please enter a value";
  }
};

console.log(playRound(playerSelection, computerSelection));

let game = () => {
  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    if (humanPlayerWon) {
      player += 1;
      return `${humanPlayerWon} and the score is ${player}`;
    } else if (computerWon) {
      computer += 1;
      return `${computerWon} and the score is ${computer}`;
    }
  }
};

console.log(game());
