var canvas = document.querySelector(".drawing-canvas");
var context = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();

var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    mouseX = (e.pageX - rect.left) / 2.3;
    mouseY = (e.pageY - rect.top) / 2.3;
}

function update() {
    context.beginPath();
    context.arc(mouseX, mouseY, 5, 0, 2 * Math.PI, true);
    context.fillStyle = "#FF6A6A";
    context.fill();
    if (drawButton.style.backgroundColor == 'blue') {
        requestAnimationFrame(update);
    }
    
}

var drawButton = document.querySelector(".drawing-button");

function startDrawing() {
    if (drawButton.style.backgroundColor == 'red' || drawButton.style.backgroundColor == '') {
        drawButton.style.backgroundColor = 'blue';
        update();
    }
    else if (drawButton.style.backgroundColor == 'blue') {
        drawButton.style.backgroundColor = 'red';
    }
}

drawButton.onclick = startDrawing;

if (drawButton.style.backgroundColor == 'blue') {
    update();
}
