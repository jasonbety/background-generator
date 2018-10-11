var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");
console.log(randomButton);

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textContent = body.style.background + ";";
}

function genererCouleurRandom(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    color1.value = randomColor(letters, color);
    color2.value = randomColor(letters, color);
    setGradient();
}

function randomColor(letters, color){
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

randomButton.addEventListener('click', genererCouleurRandom);

setGradient();
