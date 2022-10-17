let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let li = document.querySelector(".menu li");

toggle.addEventListener("click", ()=> {
    menu.classList.toggle("activate")
    li.classList.toggle("active")
})