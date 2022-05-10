const computerPlay = function () {
  const value = Math.random() * 10;
  if (value < 3) {
    return "rock";
  } else if (3 > value) {
    return "paper";
  } else if (value > 6) {
    return "scissors";
  }
};

// console.log(computerPlay());
const computerSelection = computerPlay();
const playerSelection = "rock";

const playRound = function (playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Human Player wins!!!";
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    return "Computer won this round!!";
  } else if (playerSelection === computerSelection) {
    return "Its a draw!!";
  } else {
    return "Please enter a value";
  }
};

console.log(playRound(playerSelection, computerSelection));
