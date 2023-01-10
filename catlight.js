function buttonOn() {
    document.getElementById("bulbid").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catid").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch-status").textContent = "Switched On";
    document.getElementById("button_off").style.backgroundColor = "red";
    document.getElementById("button_on").style.backgroundColor = "#cbd2d9";
}

function buttonOff() {
    document.getElementById("bulbid").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catid").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switch-status").textContent = "Switched Off";
    document.getElementById("button_off").style.backgroundColor = "#cbd2d9";
    document.getElementById("button_on").style.backgroundColor = "#22c55e";
}