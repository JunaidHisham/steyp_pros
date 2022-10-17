window.addEventListener("load", () => {
    const burger = document.querySelector(".burger");
    const burgerCross = document.querySelector(".burger i")
    const nav = document.querySelector("div.lists");
    const body = document.querySelector("body");
    const moon = document.querySelector(".color-mode li a i")
    const p = document.querySelector("#spotlight div.left div.content p")
    const modebtn = document.querySelector("header nav div.lists ul.color-mode li a.moonnn")

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
        burgerCross.classList.toggle("fa-bars");
        burgerCross.classList.toggle("fa-times");
    });
    let logoText = document.querySelector(".logo div");

    logoText.addEventListener("mouseover", function () {
        logoText.classList.add("logo-color");
    });
    logoText.addEventListener("mouseout", function () {
        logoText.classList.remove("logo-color");
    });
    let themeBtn = document.querySelector(".color-mode-btn");
    themeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        moon.classList.toggle("fa-moon");
        moon.classList.toggle("fa-sun");
        p.classList.toggle(".white");
        modebtn.classList.toggle(".white");
    });

    let hoverAbout = document.querySelector(".about");
    let hoverProject = document.querySelector(".projects");
    let hoverResume = document.querySelector(".resume");
    let hoverContact = document.querySelector(".contact");

    function mouse(hovering) {
        hovering.addEventListener("mouseover", () => {
            hovering.classList.remove("hoverout");
            hovering.classList.add("hoverin");
        });
        hovering.addEventListener("mouseout", () => {
            hovering.classList.remove("hoverin");
            hovering.classList.add("hoverout");
        });
    }

    hoverAbout.addEventListener("mouseover", mouse(hoverAbout));
    hoverProject.addEventListener("mouseover", mouse(hoverProject));
    hoverResume.addEventListener("mouseover", mouse(hoverResume));
    hoverContact.addEventListener("mouseover", mouse(hoverContact));

    $(document).ready(()=> {
        $('.slide').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll:1,
            adaptiveHeight: true,
            arrows:true,
        });
    })



});
