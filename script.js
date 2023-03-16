const totalScore = { computerScore: 0, playerScore: 0 };

// getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string:
// getComputerChoice() -> 'Rock'
// getComputerChoice() > 'Scissors'

function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

// getResult compares playerChoice & computerChoice and returns the score:
// player wins - getResult('Rock', 'Scissors') -> 1
// player loses - getResult('Scissors', 'Rock') -> -1
// player draws - getResult('Rock', 'Rock') -> 0

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Sccisors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Sccisors" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}

// showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score.
// Also shows Player Choice vs. Computer Choice

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie!";
  } else {
    resultDiv.innerText = "You won!";
  }

  handsDiv.innerText = `👩🏻 ${playerChoice} vs 💻 ${computerChoice}`;
  playerScoreDiv.innerText = `Your Score: ${totalScore["playerScore"]}`;
}

// Calculate who won and show it on the screen:
function onClickRPS(playerChoice) {
  console.log(playerChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  console.log({ score });
  console.log(totalScore);
  showResult(score, playerChoice, computerChoice);
}

// Make the game buttons actively listen for a click and do something once a click is detected:
function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);

  // 1. loop through the buttons using a forEach loop
  // 2. add a 'click' event listener to each button
  // 3. call the onClickRPS function every time someone clicks
  // 4. make sure to pass the currently selected rps button as an argument
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

// endGame function clears all the text on the DOM:
function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
}

playGame();
