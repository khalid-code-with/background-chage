function chang(color) {
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    for (let elm of txt) {
        elm.style.color = (color === "#000000") ? "white" : "black";
    }
}