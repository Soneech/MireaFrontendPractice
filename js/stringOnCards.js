var featuresTexts = document.querySelectorAll(".feature-text");

function truncate(string, maxlength) {
    if (string.length - 3 > maxlength) {
        let newString = string.substr(0, maxlength);
        newString += "...";
        console.log(newString);
        return newString;
    }
    return string;
}

for (let i = 0; i < featuresTexts.length; i++) {
    featuresTexts[i].textContent = truncate(featuresTexts[i].textContent, 55);
}

var featuresCards = document.querySelector(".features-cards");
console.log(featuresCards);

