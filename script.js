const inputNumber = document.getElementById("text");
const buttonPress = document.getElementById("button");
const containerResult = document.getElementById("container");
const secondContainer = document.getElementById("secondContainer")
buttonPress.addEventListener("click", click);
function click(){
    let R = inputNumber;
    let PI = 3.14159;
    const containerResult = PI*R*R;
    const secondContainer = 2*PI*R
}
