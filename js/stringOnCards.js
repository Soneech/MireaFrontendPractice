var featuresTexts = document.querySelectorAll(".feature-text");
var originalTexts = {};

for (let i = 0; i < featuresTexts.length; i++) {
    originalTexts[i] = featuresTexts[i].textContent;
}

function truncate(string, maxlength) {
    if (string.length - 3 > maxlength) {
        let newString = string.substr(0, maxlength);
        newString += "...";
        return newString;
    }
    return string;
}

for (let i = 0; i < featuresTexts.length; i++) {
    featuresTexts[i].textContent = truncate(featuresTexts[i].textContent, 67);
}

function showBaseTexts(event) {
    featuresTexts[this.pos].textContent = originalTexts[this.pos];
}

var featuresCards = document.querySelectorAll(".feature-card");

//featuresCard1.addEventListener("mouseover", {handleEvent: showBaseTexts, pos: 0});

for (let i = 0; i < featuresCards.length; i++) {
    featuresCards[i].addEventListener("mouseover", {handleEvent: showBaseTexts, pos: i});
}
