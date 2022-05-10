const computerPlay = function () {
  const value = Math.random() * 10;
  if (value < 3) {
    return "rock";
  } else if (3 < value) {
    return "paper";
  } else if (value > 6) {
    return "scissors";
  }
};

// console.log(computerPlay());
const computerSelection = computerPlay();
const playerSelection = "rock";
let humanPlayerWon = `Player One wins!!!`;
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

// console.log(playRound(playerSelection, computerSelection));

const game = function (playerSelection, computerSelection) {
  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
  if (humanPlayerWon) {
    player += 1;
  } else if (computerWon) {
    computer = +1;
  }
};

console.log(game());
