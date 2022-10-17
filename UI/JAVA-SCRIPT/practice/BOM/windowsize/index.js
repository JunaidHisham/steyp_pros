let height = document.getElementById("height");
let width = document.getElementById("width");

calculate = () => {
    let h = window.innerHeight;
    let w = window.innerWidth;
    height.innerText = "height is "+ h;
    width.innerText ="width is "+ w;
}

window.onload = calculate;
window.onresize = calculate;