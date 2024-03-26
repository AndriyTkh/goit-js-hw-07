"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const loginInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  if (loginInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      email: loginInput.value.trim(),
      password: passwordInput.value.trim(),
    };
    console.log(obj);
  }

  event.target.reset();
});
