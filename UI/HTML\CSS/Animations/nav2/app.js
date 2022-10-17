const burger = document.querySelector(".burger");
const nav = document.querySelector("div.lists");

burger.addEventListener("click", function() {
    nav.classList.toggle("active");
})