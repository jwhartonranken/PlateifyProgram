let $ = function(id) { return document.getElementById(id); };

// Declare Constants
const adminLogin                = "admin@example.com";
const adminPassword             = "password";
const successMessage            = "Welcome back Admin!<br>Logging in...";
const errorMissingInfoMessage   = "You seem to have forgotten your username and password.";
const errorWrongInfoMessage     = "That email and password doesn't seem to be right. Try again.";

// Declare Variable
let countdownNumber = 3;
let loginTimer;


window.onload = () => {
    $("submit").addEventListener("click", submitLoginInfo)
    console.log("Email: admin@example.com\nPassword: password");
}

const submitLoginInfo = (event) => {
    event.preventDefault();
    let loginEmail = ($("email").value);
    let loginPassword = ($("password").value);
    let isValid = true;
    let message = "";

    loginEmail = loginEmail.trim();
    loginPassword = loginPassword.trim();

    if (loginEmail === "" || loginPassword === "") {
        isValid = false;
        message = errorMissingInfoMessage;
        $("loginMessage").classList.add("text-danger");
    }
    
    if (isValid) {
        if (loginEmail === adminLogin && loginPassword === adminPassword) {
            message = successMessage;
            $("loginMessage").classList.remove("text-danger");
            $("loginMessage").classList.add("text-success");
            loginTimer = setInterval(goToHome, 1000)
        }
        else {
            message = errorWrongInfoMessage;
            $("loginMessage").classList.add("text-danger");
        }
    }

    $("loginMessage").innerHTML = message;
}

const goToHome = () => {
    $("countdown").innerHTML = countdownNumber;
    countdownNumber--;

    if (countdownNumber <= -1) {
        $("countdown").innerHTML = "";
        clearInterval(loginTimer);
        window.open("../upvoteDownvote.html", "_self");
    }
}