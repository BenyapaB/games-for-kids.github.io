var audio = new Audio("assets/audio/Carefree.mp3")
function start() {
  audio.play()
  audio.volume(0.8)
}

const problem = document.querySelector("#showquestions");
const btnRefresh = document.querySelector(".form");
// const inputAns = document.querySelector(".inputAnswer")
let state = {
  score: 0,
  wrongAnser: 0,
};
function generateNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function updateProblem() {
  state.currentProblem = generateProblem();
  problem.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`;
}
updateProblem()

function generateProblem(max) {
  return {
    numberOne: generateNumber(10),
    numberTwo: generateNumber(10),
    operator: ["+", "-"][generateNumber(1)],
  };
}

//resetbtn
function resetPage() {
  location.reload()
}

let correctpopup = document.getElementById("correctpopup");
let wrongpopup = document.getElementById("wrongpopup");
let inputpopup = document.getElementById("inputpopup");



function openPopup() {
  var userInput = parseInt(document.getElementById("inputAnswer").value)
    let correctAns;
    const p = state.currentProblem;
    if(p.operator == "+") {
        correctAns = p.numberOne + p.numberTwo
        console.log(correctAns)
    }
    if(p.operator == "-") {
        correctAns = p.numberOne - p.numberTwo
        console.log(correctAns)
    }
    if(correctAns === userInput) {
      correctpopup.classList.add("open-popup")
      console.log(userInput);
    }
    if(correctAns !== userInput) {
      wrongpopup.classList.add("open-popup")
      console.log(userInput);
    }
}

function closePopup() {
  popup.classList.remove("open-popup")
}

