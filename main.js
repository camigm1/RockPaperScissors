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
  const playerSelection = prompt("Pick rock,paper, or scissors?").toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
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
    if (result === humanPlayerWon) {
      console.log((playerOnePoints += 1));
    } else if (result === computerWon) {
      console.log((computerSelectionPoints += 1));
    }
  }
  if (playerOnePoints > computerSelectionPoints) {
    console.log("Player is Ultimate winner!!");
  } else if (computerSelectionPoints > playerOnePoints) {
    console.log("Computer is ultimate winner");
  } else {
    console.log("nobody is the winner");
  }
};

game();
