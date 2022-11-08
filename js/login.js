function inputWindow(message) {
    let result = prompt(message);
    return result;
}

function cancel() {
    alert("Отменено");
}

var login = inputWindow("Введите логин");
if (login == "Админ") {
    var password = inputWindow("Введите пароль");
    if (password == "Я главный") {
        alert("Здравствуйте!");
    }
    else if(password) {
        alert("Неверный пароль");
    }
    else {
        cancel();
    }
}
else if (login) {
    alert("Я вас не знаю!");
}
else {
    cancel();
}

var regButton = document.querySelector(".reg-button");

regButton.onclick = function () {
    let result = inputWindow("Желаете пройти регистрацию на сайте?");
    if (result == "Да" || result == "да") {
        alert("Круто!")
    }
    else {
        alert("Попробуйте ещё раз");
    }
}