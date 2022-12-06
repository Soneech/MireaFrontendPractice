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