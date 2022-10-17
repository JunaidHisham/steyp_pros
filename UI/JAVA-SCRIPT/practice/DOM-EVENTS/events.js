let buttonOne = document.getElementById("button1");
let buttonTwo = document.getElementById("button2");
let buttonThree = document.getElementById("button3");
let buttonFour = document.getElementById("button4");
let buttonFive = document.getElementById("button5");

buttonOne.onclick = function () {
    buttonOne.style.cssText = "display:none"
}
buttonTwo.onmouseover = function() {
    buttonTwo.style.color = "green";
}
window.onload = function () {
    console.log(buttonFive);
}