const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

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
    results.textContent = humanPlayerWon;
    playerScore.textContent = playerOnePoints += 1;
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    results.textContent = computerWon;
    computerScore.textContent = computerSelectionPoints += 1;
  } else {
    results.textContent = "Its a Draw";
  }
};

// let game = (value) => {
//   let playerOnePoints = 0;
//   let computerSelectionPoints = 0;
//   for (let i = 0; i < 5; i++) {
//     let computerSelection = computerPlay();
//     const result = playRound(value, computerSelection);
//     console.log(result);
//     if (result === humanPlayerWon) {
//       console.log((playerOnePoints += 1));
//     } else if (result === computerWon) {
//       console.log((computerSelectionPoints += 1));
//     }
//   }
//   if (playerOnePoints > computerSelectionPoints) {
//     console.log("Player is Ultimate winner!!");
//   } else if (computerSelectionPoints > playerOnePoints) {
//     console.log("Computer is ultimate winner");
//   } else {
//     console.log("nobody is the winner");
//   }
// };

// game();

// let game = (value) => {
//   // console.log(result);
//   let playerOnePoints = 0;
//   let computerSelectionPoints = 0;
//   if (value === humanPlayerWon) {
//     console.log((playerOnePoints += 1));
//   } else if (value === computerWon) {
//     console.log((computerSelectionPoints += 1));
//   }

// if (playerOnePoints > computerSelectionPoints) {
//   console.log("Player is Ultimate winner!!");
// } else if (computerSelectionPoints > playerOnePoints) {
//   console.log("Computer is ultimate winner");
// } else {
//   console.log("nobody is the winner");
// }
// };
