var contents = document.getElementById("contents");

function open(event) {
    let li = event.target.closest("li");

    if (!li) {
        return;
    }

    if (!contents.contains(li)) {
        return;
    }

    let response = confirm("Хотите покинуть страницу?");
    
    if (!response)
        return false;
}

contents.onclick = open;