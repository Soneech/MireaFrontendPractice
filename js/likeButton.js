var likeButton = document.querySelector('.like-button');
var likeButtonText = document.querySelector('.like-btn-text');


function changeLikeButtonColor() {
    if (likeButton.style.backgroundColor == 'darkgrey' || likeButton.style.backgroundColor == '') {
        likeButton.style.backgroundColor = 'crimson';
        likeButtonText.textContent = '1';
    } 
    else {
        likeButton.style.backgroundColor = 'darkgrey';
        likeButtonText.textContent = '0'
    }
}

likeButton.onclick = changeLikeButtonColor;
