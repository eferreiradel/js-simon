console.log("5");
//funzioni

const gameContainer = document.querySelector("#gameContainer");
const inputContainer = document.querySelector("#inputContainer");
const timerContainer = document.querySelector("#timerContainer");

document.querySelector("#init").addEventListener("click", () => {
  const setLevel = 5;
  const gameNumbers = [];
  const userAnswer = [];

  for (counter = 0; counter < setLevel; counter++) {
    let gameCards = document.createElement("div");
    gameCards.classList.add("card", "gameNumbers");
    gameCards.innerHTML = getRandomNumber();
    gameContainer.appendChild(gameCards);
    gameNumbers.push(gameCards.innerHTML);
  }

  setTimeout(() => {
    document.querySelectorAll(".gameNumbers").forEach((element) => {
      element.classList.add("d-none");
    });
    for (counter = 0; counter < setLevel; counter++) {
      let gameINputs = document.createElement("input");
      gameINputs.setAttribute("type", "text");
      gameContainer.appendChild(gameINputs);
      gameINputs.classList.add("card");
    }
  }, 5000);

  let gameInputvalue = document.querySelectorAll("input").forEach((element) => {
    userAnswer.push(element.value);
  });

  document.querySelector("#sendAnswer").addEventListener("click", () => {
    gameResult(gameNumbers, userAnswer);
  });
});

function gameResult(valoreUtente, valoreGioco) {
  let a = valoreUtente;
  let b = valoreGioco;
  if (valoreUtente === valoreGioco) {
    alert("Hai Vinto!");
  } else {
    alert("U lose lol");
  }
}
function getRandomNumber(number) {
  number = Math.floor(Math.random() * 100) + 1;
  return number;
}
