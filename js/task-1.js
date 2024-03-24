"use strict";

const categories = document.querySelectorAll(".item");
console.log("Number of categories: " + categories.length);

categories.forEach((element) => {
  console.log("Category: " + element.querySelector("h2").textContent);

  console.log("Elements: " + element.querySelector("ul").children.length);
});
