function debConsole() {
  console.log("debug console -- ok");
}

console.log("check -- ok - ok");

// funzione che gnera un numero Random
//store la lista di numero in un array

//SE i numero generati sono uguali ai numeri che VORREI generate allora parti il timer

//timer che parte dopo la funzine
// come? con una condition booleana true

//allo scadee del tempo parte la funzione che mnasconde gli oggeti:

//funzione che allo aggiunde la casse " hide"

document.getElementById("initGame").addEventListener("click", function () {
  console.log("check");

  let gameContainer = document.querySelector("#gameContainer");
  let gameNumbers = [];

  let difficultLevel = 5;
  for (counter = 0; counter < difficultLevel; counter++) {
    generateDomElement("gameContainer", "div", "card");
  }
  let card = document.querySelectorAll(".card");
  card.forEach((card) => {
    card.innerHTML = getRandomNumber();
    gameNumbers.push(card.innerHTML);
  });

  setTimeout(function () {
    gameContainer.classList.add("d-none");
  }, 5000);
});

function generateDomElement(elementParent, tagHtml, cssClass) {
  let parent = document.getElementById(elementParent);

  let element = document.createElement(tagHtml);
  element.classList.add(cssClass);

  parent.appendChild(element);
}

function getRandomNumber() {
  let random = Math.floor(Math.random() * 100 + 1);
  console.log(random);
  return random;
}

function getRandomNumbers(numbers) {
  let randomNUmbers = [];
  for (counter = 0; counter < numbers; counter++) {
    let random = Math.floor(Math.random() * 100 + 1);
    randomNUmbers.push(random);
  }
  return randomNUmbers;
}

function hideObject(element) {
  element.classList.add("d-none");
}
