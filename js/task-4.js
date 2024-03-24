"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const loginInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  if (loginInput.value === "" || passwordInput.value === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      email: loginInput.value,
      password: passwordInput.value,
    };
    console.log(obj);
  }
});
