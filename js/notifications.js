var popup = document.querySelector(".notification-popup");
var count = 0;

function addNotification() {
    count++;
    console.log(count);

    divElem = document.createElement("div");
    divElem.classList.add("notification-item");

    iElem = document.createElement("i");
    iElem.classList.add("far");
    iElem.classList.add("fa-newspaper");
    
    pElem = document.createElement("p");
    pElem.textContent = "Новое уведомление " + count;

    divElem.appendChild(iElem);
    divElem.appendChild(pElem);
    popup.appendChild(divElem);
}

setInterval(addNotification, 3000);
