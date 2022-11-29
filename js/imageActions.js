var imageBlock = document.querySelector(".image-block");
var image = document.querySelector(".rats");
var coordsBlock = document.querySelector(".coords-block");

var xElem = document.querySelector(".X");
var yElem = document.querySelector(".Y");


function setPosition() {
    imageBlock.style.margin = "50px auto";
    image.style.width = "450px";

    image.style.display = "block";
    image.style.margin = "auto";

    coordsBlock.style.width = "15%";
    coordsBlock.style.margin = "auto";
}
setPosition();


function getCoords(event) {
    var x = event.pageX - image.offsetLeft;
    var y = event.pageY - image.offsetTop;

    xElem.textContent = "X: " + x;
    yElem.textContent = "Y: " + y;
}
image.addEventListener("click", getCoords);