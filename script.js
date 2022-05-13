//importazione elementi
const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
//first name
const errorMessageFirst = document.querySelector(".error-message-first");
const errorIconFirst = document.querySelector(".error-icon-first");
//last name
const errorMessageLast = document.querySelector(".error-message-last");
const errorIconLast = document.querySelector(".error-icon-last");
//mail
const errorMessageEmail = document.querySelector(".error-message-email");
const errorIconEmail = document.querySelector(".error-icon-email");
//password
const errorMessagePassword = document.querySelector(".error-message-password");
const errorIconPassword = document.querySelector(".error-icon-password");

const checkFirstName = function () {
  firstName.style.border = "2px solid #FF7979";
  firstName.setAttribute("placeholder", "");
  errorMessageFirst.classList.remove("display-none");
  errorIconFirst.classList.remove("display-none");
};
const checkLastName = function () {
  lastName.style.border = "2px solid #FF7979";
  lastName.setAttribute("placeholder", "");
  errorMessageLast.classList.remove("display-none");
  errorIconLast.classList.remove("display-none");
};

const checkPassword = function () {
  password.style.border = "2px solid #FF7979";
  password.setAttribute("placeholder", "");
  errorMessagePassword.classList.remove("display-none");
  errorIconPassword.classList.remove("display-none");
};

const validateEmail = function (mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
};

const checkEmail = function () {
  if (validateEmail()) {
    return email;
  } else {
    email.style.border = "2px solid #FF7979";
    email.setAttribute("placeholder", "email@example/com");
    errorMessageEmail.classList.remove("display-none");
    errorIconEmail.classList.remove("display-none");
  }
};

submit.addEventListener("click", function () {
  if (firstName === "") {
  } else {
    checkFirstName();
  }
  if (lastName === "") {
  } else {
    checkLastName();
  }
  if (email === "" && validateEmail()) {
  } else {
    checkEmail();
  }
  if (password === "") {
  } else {
    checkPassword();
  }
});
