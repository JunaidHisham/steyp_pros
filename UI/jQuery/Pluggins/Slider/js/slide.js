$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 10,
        items: 3,
        nav: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            640: {
                items: 2,
            },
            980: {
                items: 3,
            },
        },
        navText: [
            "<button class='prev'>Prev</button>",
            "<button class='next'>Next</button>",
        ]
    });
});
