"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const background = document.querySelector("body");
const text = document.querySelector(".color");
let color = "";

changeBtn.addEventListener("click", changeColor);

function changeColor(event) {
  color = getRandomHexColor();
  text.textContent = color;
  background.style.backgroundColor = color;
}
