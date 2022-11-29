var popup = document.querySelector(".notification-popup");
var bell = document.querySelector(".notification-icon");
var countSpan = bell.querySelector("span");

var newCount = 0;
var count = 6;

function showNotification(notification) {
    setCount(1);

    let divElem = document.createElement("div");
    divElem.classList.add("notification-item");

    let iElem = document.createElement("i");
    iElem.classList.add("far");
    iElem.classList.add("fa-newspaper");
    
    let pElem = document.createElement("p");
    pElem.textContent = notification;

    let btnElem = document.createElement("button");
    btnElem.textContent = "x";
    btnElem.classList.add("close");

    divElem.appendChild(iElem);
    divElem.appendChild(pElem);
    divElem.appendChild(btnElem);
    popup.appendChild(divElem);

    setTimeout(function() {
        popup.removeChild(divElem);
        setCount(-1);
    }, 1500);
}

function setCount(summand) {
    count += summand;
    countSpan.textContent = count;
}

function createNotification() {
    let notification = prompt("Введите текст для уведомления");
    if (notification) {
        showNotification(notification);
    }
}

function deleteNotification(event) {
    let button = event.target.closest("button");

    if (!button) {
        return;
    }
    if (!popup.contains(button)) {
        return;
    }

    let notification = button.parentNode;
    popup.removeChild(notification);
    setCount(-1);
}

bell.addEventListener('click', createNotification);
popup.addEventListener('click', deleteNotification);
