var newGallery = document.querySelector(".new-gallery-container");
var bigImage = document.querySelector(".big-image");

function showImage(event) {
    let image = event.target.closest("img");
    if (!image || !image.classList.contains("small-image"))
        return;

    bigImage.src = image.src;
}

newGallery.onclick = showImage;