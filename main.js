// const rock = document.querySelector(".rock");
// const paper = document.querySelector(".paper").value;
// const scissors = document.querySelector(".scissors").value;

// rock.addEvenlistener("click", function (e) {
//   const valueRock = e.target.value;
//   console.log(valueRock);
// });

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

let humanPlayerWon = `Player One wins this round!`;
let computerWon = "Computer won this round!";

const playRound = function (computerSelection) {
  let playerOnePoints = 0;
  let computerSelectionPoints = 0;
  const playerSelection = prompt("Pick rock,paper, or scissors?").toLowerCase();
  let playerOne = playerSelection;
  if (
    (playerOne === "rock" && computerSelection === "scissors") ||
    (playerOne === "scissors" && computerSelection === "paper") ||
    (playerOne === "paper" && computerSelection === "rock")
  ) {
    return humanPlayerWon;
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    return computerWon;
  } else if (playerSelection === computerSelection) {
    return "Its a draw!!";
  } else {
    return "Please enter a value";
  }
};

// console.log(playRound(computerSelection));

let game = () => {
  let playerOnePoints = 0;
  let computerSelectionPoints = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    const result = playRound(computerSelection);
    console.log(result);
  }
};

game();
