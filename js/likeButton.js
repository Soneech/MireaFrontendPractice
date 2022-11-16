var likeButton = document.querySelector('.like-button');
var likeButtonText = document.querySelector('.like-btn-text');

function Liker(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let addValue = prompt("Какого кол-ва лайков заслуживает эта прекрасная пикча? :з");
        if (addValue) {
            this.value += Number(addValue);
            likeButtonText.textContent = this.value;
        }
    };
}

var liker = new Liker(0);


function click() {
    if (likeButton.style.backgroundColor == 'darkgrey' || likeButton.style.backgroundColor == '') {
        likeButton.style.backgroundColor = 'crimson';
    } 
    liker.read();
}

likeButton.onclick = click;
