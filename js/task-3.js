"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
let text = "";

input.addEventListener("input", (event) => {
  text = event.currentTarget.value.trim();
  if (text === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = text;
  }
});
