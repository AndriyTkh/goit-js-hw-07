function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls").querySelector("input");

let boxList = [];

createButton.addEventListener("click", (e) => {
  destroyBoxes();
  const num = input.value;
  createBoxes(num);
});

destroyButton.addEventListener("click", (e) => {
  destroyBoxes();
});

function createBoxes(amount) {
  if (amount > 0 && amount <= 100) {
    for (let index = 0; index < amount; index++) {
      const boxElement = document.createElement("div");

      boxElement.style.backgroundColor = getRandomHexColor();
      boxElement.textContent = " ";
      boxElement.style.width = (30 + 10 * index).toString() + "px";
      boxElement.style.height = (30 + 10 * index).toString() + "px";

      boxes.append(boxElement);
    }
  } else {
    alert("Choose the number from 1 to a 100");
  }
}

function destroyBoxes() {
  boxList = boxes.childNodes;
  while (boxes.childNodes.length > 0) {
    boxList.forEach((element) => {
      element.remove();
    });
  }
}
