const colorModeButton = document.querySelector(".color-mode");
const playerName = document.querySelector(".player-name");
const playerScore = document.querySelector(".player-score");
const playerNum = document.querySelector(".player-num");
const computerScore = document.querySelector(".computer-score");
const computerNum = document.querySelector(".computer-num");
const generateRandomNumsButton = document.querySelector(
  ".generate-random-nums"
);
const drawNoti = document.querySelector(".draw-notification");

playerScore.textContent = 0;
computerScore.textContent = 0;

let getPlayerName = () => {
  return prompt("Enter your name, please!").trim();
};

// Getting player's name
playerName.textContent = getPlayerName();
if (playerName.textContent == "") {
  playerName.textContent = "Guest"
}

let generateRandomNum = () => {
  return Math.floor(Math.random() * 101);
};

let timeoutId;

generateRandomNumsButton.addEventListener("click", () => {
  playerNum.textContent = generateRandomNum();
  //playerNum.textContent = 5;
  computerNum.textContent = generateRandomNum();
  //computerNum.textContent = 5;
  if (playerNum.textContent > computerNum.textContent) {
    playerScore.textContent++;
  } else if (playerNum.textContent < computerNum.textContent) {
    computerScore.textContent++;
  } else {
    drawNoti.classList.add("draw-notification-show");
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
       drawNoti.classList.remove("draw-notification-show");
     }, 3100);
  }
});
