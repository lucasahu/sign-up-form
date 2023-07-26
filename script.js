let fullNameHasError = false;
let emailHasError = false;
let passwordHasError = false;
let confirmPasswordHasError = false;

function confirmSignUp () {
    if (fullNameHasError == false && emailHasError == false && passwordHasError == false && confirmPasswordHasError == false) {
        background.style.width = "101vw";
        background.style.height = "101vh";
        endPrompt.style.visibility = "visible";

    }
}

function refreshPage() {
    window.location.reload();
}

function formValidate() {
    let numberRegex = /\d+/

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (fullName.value.length == 0) {
        fullName.style.border = "2px solid rgba(255, 0, 0, 0.6)"
        fullNameError.style.color = "rgba(255, 0, 0, 0.6)"
        fullNameError.textContent = "This field is requiered"
        fullNameHasError = true;

    }  else if (numberRegex.test(fullName.value)) {
        fullName.style.border = "2px solid rgba(255, 0, 0, 0.6)"
        fullNameError.style.color = "rgba(255, 0, 0, 0.6)"
        fullNameError.textContent = "Introduce a valid name"
        fullNameHasError = true;

    } else {
        fullName.style.border = "2px solid rgba(1, 121, 0, 0.6)"
        fullNameError.textContent = ""
        fullNameHasError = false;
    }


    if (email.value.length == 0) {
        email.style.border = "2px solid rgba(255, 0, 0, 0.6)"
        emailError.style.color = "rgba(255, 0, 0, 0.6)"
        emailError.textContent = "This field is requiered"
        emailHasError = true;

    } else if (emailRegex.test(email.value) == false) {
        email.style.border = "2px solid rgba(255, 0, 0, 0.6)"
        emailError.style.color = "rgba(255, 0, 0, 0.6)"
        emailError.textContent = "Introduce a valid email"
        emailHasError = true;

    } else {
        email.style.border = "2px solid rgba(1, 121, 0, 0.6)"
        emailError.textContent = ""
        emailHasError = false;
    }


    if (password.value.length == 0) {
        password.style.border = "2px solid rgba(255, 0, 0, 0.6)"
        passwordError.style.color = "rgba(255, 0, 0, 0.6)"
        passwordError.textContent = "This field is requiered"
        passwordHasError = true;

    } else if (password.value.length < 3) {
        password.style.border = "2px solid rgba(255, 0, 0, 0.6)"
        passwordError.style.color = "rgba(255, 0, 0, 0.6)"
        passwordError.textContent = "The password is too short"
        passwordHasError = true;

    } else {
        password.style.border = "2px solid rgba(1, 121, 0, 0.6)"
        passwordError.textContent = ""
        passwordHasError = false;
    }


    if (confirmPassword.value.length == 0) {
        confirmPassword.style.border = "2px solid rgba(255, 0, 0, 0.6)"
        confirmPasswordError.style.color = "rgba(255, 0, 0, 0.6)"
        confirmPasswordError.textContent = "This field is requiered"
        confirmPasswordHasError = true;

    } else if (confirmPassword.value !== password.value) {
        confirmPassword.style.border = "2px solid rgba(255, 0, 0, 0.6)"
        confirmPasswordError.style.color = "rgba(255, 0, 0, 0.6)"
        confirmPasswordError.textContent = "The passwords do not match"
        confirmPasswordHasError = true;

    } else {
        confirmPassword.style.border = "2px solid rgba(1, 121, 0, 0.6)"
        confirmPasswordError.textContent = ""
        confirmPasswordHasError = false;
    }

}

const endPrompt = document.querySelector(".end-prompt");
const background = document.querySelector(".background");
const fullName = document.querySelector(".full-name");
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");
const confirmPassword = document.querySelector(".confirm-password-input");
const submitButton = document.querySelector(".sign-up-button");
const fullNameError = document.querySelector(".fullname-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");
const homeButton = document.querySelector(".button-prompt");

submitButton.addEventListener('click', () =>  formValidate());
submitButton.addEventListener('click', () => confirmSignUp());
homeButton.addEventListener('click', () => refreshPage())