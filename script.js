// Selecting elements
const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");
const player1ScoreVal = document.querySelector(".score-p-0");
const player2ScoreVal = document.querySelector(".score-p-1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new-game");
const btnRoll = document.querySelector(".btn--roll-dice");
const btnHold = document.querySelector(".btn--hold");
const current0EL = document.querySelector(".current--0");
const current1EL = document.querySelector(".current--1");

// Starting conditions
player1ScoreVal.textContent = 0;
player2ScoreVal.textContent = 0;
diceElement.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.querySelector(`.current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
};
// Rolling dice functionality

btnRoll.addEventListener("click", function () {
  // 1.Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.Display the dice
  diceElement.classList.remove("hidden");
  diceElement.src = `images\\dice-${dice}.png`;

  // 3.Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.querySelector(`.current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
});

btnNew.addEventListener("click", function () {
  newGame();
});

btnHold.addEventListener("click", function () {
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.querySelector(`.score-p-${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if player's score is >=100
  // Finish the game
  if (scores[activePlayer] >= 10) {
       
  } else {
  }

  // Switch to the next player
  switchPlayer();
});

const newGame = () => {
  currentScore = 0;
  player1ScoreVal.textContent = 0;
  current0EL.textContent = 0;
  player1ScoreVal.textContent = 0;
  current1EL.textContent = 0;
  diceElement.classList.add("hidden");
};
