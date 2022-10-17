window.onload = function () {
    let mobileMenu = document.getElementById("mobile-menu");
    let menuIcon = document.getElementById("menu-icon");
    let closeBar = document.querySelector(".close")
    let overlay = document.querySelector(".overlay")

    let showHide = () => {
        mobileMenu.classList.toggle("active");
        closeBar.classList.toggle("active");
        overlay.classList.toggle("active");
    }
    menuIcon.addEventListener ('click', () => {
        showHide();
    });

    overlay.addEventListener('click', () => {
        showHide();
    });

    closeBar.addEventListener('click', () => {
        showHide();
    });
}