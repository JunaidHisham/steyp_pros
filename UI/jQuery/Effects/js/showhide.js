// Hide And Show
$("#show").click(() => {
    $("#content1 h1").show();
});
$("#hide").click(() => {
    $("#content1 h1").hide();
})
$("#toggle").click(() => {
    $("#content1 h1").toggle();
})

// Slide 
$("#slideDown").click(() => {
    $("#sliding h1").slideDown(1000)
})

$("#slideUp").click(() => {
    $("#sliding h1").slideUp()
})

$("#slideToggle").click(() => {
    $("#sliding h1").slideToggle()
})

// Fading
$("#fadeIn").click( () => {
    $("#fading h1").fadeIn();
})

$("#fadeOut").click( () => {
    $("#fading h1").fadeOut();
})

$("#fadeToggle").click( () => {
    $("#fading h1").fadeToggle();
})

// Animation

$("#forward").click(() => {
    $("#animation div").animate({
        left:"250px"
    })
})
$("#center").click(() => {
    $("#animation div").animate({
        left:"0px"
    })
})
$("#backward").click(() => {
    $("#animation div").animate({
        left:"-250px"
    })
})

// Callback

$("#call").click(() => {
    $("#callback h1").slideUp(2000, function () {
        console.log("Done");
    })
})

// Chain
$("#chain").click(function () {
    $("#chaining h1").slideUp(1000).slideDown(1000).css("color", "red")
})