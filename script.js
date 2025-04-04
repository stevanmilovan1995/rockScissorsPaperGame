const choices = document.querySelectorAll(".choice");
const playerChoiceIcon = document.querySelector("#player-choice-icon");
const computerChoiceIcon = document.querySelector("#computer-choice-icon");
const playerScoreIcon = document.querySelector("#player-score");
const computerScoreIcon = document.querySelector("#computer-score");
const resetGameBtn = document.querySelector("#reset");
const roundNumber = document.querySelector("#round");
const resultMessage = document.querySelector("#result-text");
const choiceIcons = ["✊", "✋", "✌️"]
let choicesArray = ["rock", "paper", "scissors"];
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

const winRules = {
  "rock": "scissors",
  "paper": "rock",
  "scissors": "paper"
};
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choicesArray[randomNumber];
  console.log("Racunar je izabrao:", computerChoice);
  computerChoiceIcon.textContent = checkIconValues(computerChoice);
}

function handlePlayerChoice(event) {
  humanChoice = event.target.id;
  console.log("A player has selected: ", humanChoice);
  playerChoiceIcon.textContent = checkIconValues(humanChoice);
  getComputerChoice();
  whoWins();
  currentRound++;
  roundNumber.textContent = currentRound;
}

function checkIconValues(choice) {
  switch (choice) {
    case "rock":
      return choiceIcons[0];
    case "paper":
      return choiceIcons[1];
    case "scissors":
      return choiceIcons[2];
    default:
      return "?";
  }
}

function whoWins() {
  if (humanChoice === computerChoice) {
    displayResult("Draw! Both players choose the same.")
    return;
  }
  if (winRules[humanChoice] === computerChoice) {
    humanScore++;
    displayResult("You won!");
  } else {
    computerScore++;
    displayResult("Computer won!")
  }
  playerScoreIcon.textContent = humanScore;
  computerScoreIcon.textContent = computerScore;
}

function displayResult(message) {
  resultMessage.textContent = message;
}

function resetGame() {
  playerChoiceIcon.textContent = "?";
  computerChoiceIcon.textContent = "?";
  humanScore = 0;
  computerScore = 0;
  playerScoreIcon.textContent = humanScore;
  computerScoreIcon.textContent = computerScore;
  currentRound = 1;
  roundNumber.textContent = currentRound;
  resultMessage.textContent = "Select your choice:";
}

function initGame() {
  roundNumber.textContent = currentRound;
  choices.forEach((choice) => {
    choice.addEventListener("click", handlePlayerChoice)
  });
  resetGameBtn.addEventListener("click", resetGame);
}

initGame();



