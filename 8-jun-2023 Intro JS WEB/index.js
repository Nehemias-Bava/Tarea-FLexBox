const btnChange = document.getElementById("btn-change");
const btnCounter = document.getElementById("btn-counter");
const btnReset = document.getElementById("btn-reset");
const colorBox = document.getElementById("color-box");
const paraCounter = document.getElementById("counter");
const nameInput = document.getElementById("name");
const spanWelcome = document.getElementById("welcome");
let counter = 0;

//event listener
btnChange.addEventListener("click", changeColor);
btnCounter.addEventListener("click", countClicks);
btnReset.addEventListener("click", resetClicks);
nameInput.addEventListener("input", handleChange);

function handleChange() {
  spanWelcome.textContent = nameInput.value;
}

function changeColor() {
  colorBox.classList.toggle("hotpink");
}

function resetClicks() {
  counter = 0;
  paraCounter.textContent = "Usted hizo click 0 veces";
}
function countClicks() {
  counter++;
  if (counter <= 1) {
    paraCounter.innerText = `Usted hizo click ${counter} vez`;
  } else {
    paraCounter.innerText = `Usted hizo click ${counter} veces`;
  }
}
