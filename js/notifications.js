var popup = document.querySelector(".notification-popup");
var bell = document.querySelector(".notification-icon");
var countSpan = bell.querySelector("span");

var newCount = 0;
var count = 4;

function addNotification() {
    newCount++;
    count++;
    
    countSpan.textContent = count;

    divElem = document.createElement("div");
    divElem.classList.add("notification-item");

    iElem = document.createElement("i");
    iElem.classList.add("far");
    iElem.classList.add("fa-newspaper");
    
    pElem = document.createElement("p");
    pElem.textContent = "Новое уведомление " + newCount;

    divElem.appendChild(iElem);
    divElem.appendChild(pElem);
    popup.appendChild(divElem);
}

function delayDecorator(func) {
    if (Date.now() - lastOpenTime > 10000) {
        func();
    }
}

function buttonClick() {
    lastOpenTime = Date.now();
}

var lastOpenTime = 0;
setInterval(delayDecorator, 3000, addNotification);
bell.addEventListener('click', buttonClick);
