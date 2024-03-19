let firstPlayerName = "";
let secondPlayerName = "";

let firstPlayerScore = 0;
let secondPlayerScore = 0;

let totalScore = 0;

function onSubmit(event) {
  event.preventDefault();
  const formData = document.getElementsByTagName("input");
  firstPlayerName = formData[0].value;
  secondPlayerName = formData[1].value;
  totalScore = formData[2].value;

  document.getElementById("form-container").style.display = "none";
  document.getElementById("board-container").style.display = "block";

  document
    .getElementById("player1")
    .getElementsByClassName("heading")[0].innerHTML = firstPlayerName;
  document
    .getElementById("player2")
    .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;
}

function Toss() {
  const tossNumber = getTossNumber();
  console.log(tossNumber);
//   document.getElementById("toss-button").value = `Player${tossNumber}`;
  document.getElementById("toss-button").setAttribute("disabled", true);
  if (tossNumber == 1) {
    document.getElementById("toss-button").value = firstPlayerName;
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .removeAttribute("disabled");
  } else {
    document.getElementById("toss-button").value = secondPlayerName;

    document
      .getElementById("player2")
      .getElementsByTagName("input")[0]
      .removeAttribute("disabled");
  }
}
function rollDice(playerIndex) {
  const randomNumber = getRandomNumber();
  const playerNodes = document.getElementById(`player${playerIndex}`);
  playerNodes
    .querySelector(".dice img")
    .setAttribute("src", `./assets/dice${randomNumber}.png`);
  switch (playerIndex) {
    case 1:
      firstPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        firstPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player2")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    case 2:
      secondPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        secondPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player1")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    default:
      break;
  }
  checkIfWinnerExists();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function getTossNumber() {
  return Math.floor(Math.random() * 2) + 1;
}

function checkIfWinnerExists() {
  if (firstPlayerScore >= totalScore) {
    document.getElementById(
      "player1"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player2")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }

  if (secondPlayerScore >= totalScore) {
    document.getElementById(
      "player2"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }
}
