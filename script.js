const inputNumber = document.getElementById("text");
const buttonPress = document.getElementById("button");
const containerResult = document.getElementById("container");
const secondContainer = document.getElementById("secondContainer")
buttonPress.addEventListener("click", click);

function click(){
    const R = inputNumber;
    const PI = 3;
    containerResult.innerHTML = PI * R * R;
    secondContainer.innerText = 2 * PI * R
}

