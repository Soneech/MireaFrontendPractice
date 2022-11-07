window.onload = function() {


    var likeButton = document.getElementById('like-button');
    var likeButtonText = document.getElementById('like-btn-text');

    function changeLikeButtonColor() {
        if (likeButton.style.backgroundColor == 'darkgrey') {
            likeButton.style.backgroundColor = 'crimson';
            likeButtonText.textContent = '1';
        } 
        else {
            likeButton.style.backgroundColor = 'darkgrey';
            likeButtonText.textContent = '0'
        }
    }

    likeButton.onclick = changeLikeButtonColor;
    
    var body = document.querySelector('body');
    var context = body.getContext("2d");    
    var mouseX = 0;
    var mouseY = 0;

    body.addEventListener("mousemove", setMousePosition, false);

    function setMousePosition(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    function draw() {

    }

    function update() {

    }
}

