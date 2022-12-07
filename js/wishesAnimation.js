var ratImage = document.querySelector(".rat");
var ratImage2 = document.querySelector(".rat2");

function movement() {
    let start = Date.now();

    requestAnimationFrame(function() {
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            ratImage.style.right = 160 + timePassed / 6 + "px";

            if (timePassed >= 6500) {
                clearInterval(timer);
            }
        }, 20);
    });
}

function rotation() {
    let start = Date.now();

    let timerRight = setInterval(function(){
        var timePassed = Date.now() - start;

        if (timePassed < 400) {
            ratImage2.style.transform = "rotate(" + timePassed / 20 + "deg)";
        }
        
        else if (timePassed < 800) {
            ratImage2.style.transform = "rotate(" + (40 - timePassed / 20) + "deg)";
        }
        
    }, 20);

    let timerLeft = setInterval(function(){
        let timePassed = Date.now() - start;

        

        if (timePassed >= 800) {
            clearInterval(timerLeft);
        }
    }, 20);
}

ratImage.onclick = movement;
ratImage2.onclick = rotation;

