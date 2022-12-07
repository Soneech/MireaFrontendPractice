var pushBtn = document.querySelector(".push");
var wishesList = document.querySelector(".wishes-list");

function addWishes() {
    let input = prompt("Добавьте своё пожелание");

    while(input) {
        let liElem = document.createElement("li");
        liElem.textContent = input;
        wishesList.appendChild(liElem);
        input = prompt("Добавьте своё пожелание");
    }
}

pushBtn.onclick = addWishes;


function select(event) {
    let liElem = event.target.closest("li");

    if(!liElem)
        return;
    
    var elements = wishesList.querySelectorAll("li");
    for (let i = 0; i < elements.length; i++) {
        if (!event.ctrlKey) {
            elements[i].classList.remove("selected");
        }
        
    }

    liElem.classList.add("selected");
} 

wishesList.onclick = select;
wishesList.onselectstart = function() {
    return false;
}