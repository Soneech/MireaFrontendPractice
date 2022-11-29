var popup = document.querySelector(".notification-popup");
var bell = document.querySelector(".notification-icon");
var countSpan = bell.querySelector("span");

var newCount = 0;
var count = 4;

function showNotification(notification) {
    count++;
    countSpan.textContent = count;

    divElem = document.createElement("div");
    divElem.classList.add("notification-item");

    iElem = document.createElement("i");
    iElem.classList.add("far");
    iElem.classList.add("fa-newspaper");
    
    pElem = document.createElement("p");
    pElem.textContent = notification;

    divElem.appendChild(iElem);
    divElem.appendChild(pElem);
    popup.appendChild(divElem);

    setTimeout(function() {
        popup.removeChild(divElem);
    }, 1500);
}   

function createNotification() {
    let notification = prompt("Введите текст для уведомления");
    showNotification(notification);
}

bell.addEventListener('click', createNotification);
