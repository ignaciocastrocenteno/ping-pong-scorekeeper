const counter_1 = document.querySelector("#player1");
const counter_2 = document.querySelector("#player2");
const addPlayer1 = document.querySelector("#addPlayer1");
const addPlayer2 = document.querySelector("#addPlayer2");
const resetGame = document.querySelector("#reset");
const numberOfRounds = document.querySelector("#numberOfRounds");

addPlayer1.addEventListener("click", function (e) {
  const newScore = addPoint(counter_1);
  updateView(counter_1, newScore);
});

addPlayer2.addEventListener("click", function (e) {
  const newScore = addPoint(counter_2);
  updateView(counter_2, newScore);
});

resetGame.addEventListener("click", function (e) {
  counter_1.innerText = 0;
  counter_1.className = "";
  counter_2.innerText = 0;
  counter_2.className = "";
  addPlayer1.removeAttribute("disabled");
  addPlayer2.removeAttribute("disabled");
});

function addPoint(counter) {
  // * I didn't do the validation here because of the score data flow
  let score = Number.parseInt(counter.innerText);
  return ++score;
}

function updateView(counterToUpdate, value) {
  counterToUpdate.innerText = value;
  if (
    counter_1.innerText === numberOfRounds.value ||
    counter_2.innerText === numberOfRounds.value
  ) {
    addPlayer1.setAttribute("disabled", true);
    addPlayer2.setAttribute("disabled", true);
    if (counter_1.innerText > counter_2.innerText) {
      counter_1.classList.add("winner");
      counter_2.classList.add("loser");
    } else {
      counter_1.classList.add("loser");
      counter_2.classList.add("winner");
    }
  }
}
