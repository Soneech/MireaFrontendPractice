var captchaLabel = document.querySelector(".captcha-label");
var captchaText = document.querySelector(".captcha-text");
var userInput = document.querySelector(".captcha-input");
var reportButton = document.querySelector(".report-btn");
var reportForm = document.querySelector(".report-form");

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var minLength = 5;
var maxlength = 8;
var captcha = "";


function startCaptcha() {
    if (captchaText.textContent == "") {
        let length = Math.floor(Math.random() * (maxlength - minLength + 1) + minLength);
        for (let i = 0; i < length; i++) {
            captcha += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        captchaText.textContent = captcha;
    }
}
startCaptcha();


function formSubmit(form) {
    if (captcha.toString() == userInput.value) {
        form.submit();
    }
    else {
        alert("Неверный ввод!");
        generateCaptcha();
    }
}


function generateCaptcha() {
    console.log("generate...");
    let max = 10;
    let min = -10;
    let value1 = Math.floor(Math.random() * (max - min + 1) + min);
    let value2 = Math.floor(Math.random() * (max - min + 1) + min);

    if (value2 < 0) {
        captchaText.textContent = value1 + " + (" + value2 + ") =";
    }
    else {
        captchaText.textContent = value1 + " + " + value2 + " =";
    }
    captchaLabel.textContent = "Введите значение выражения:";
    captcha = value1 + value2;
}