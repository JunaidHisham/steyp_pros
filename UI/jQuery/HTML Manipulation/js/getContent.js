// Getting value

let text1 = $("#first h1").text();
console.log(text1);

let text2 = $("#first h1").html();
console.log(text2);
let inputval;

$("#first input").on("change", function() {
    let $val = $(this);
    inputval = $val.val()
    console.log(inputval);

})

// Setting value
$("#second button").on("click", function() {
    $("#second h1").text(inputval)
    $("#second h2").html(`<span>${inputval}</span>`)
})

// Getting and Setting Attributes

$("#third button").click(function() {
    $("#third a").attr("href", "https://www.google.com") 
})

// Removing Element
 $("#fourth button").on("click", function() {
     $("#fourth h1").remove();
     $("#fourth h2").empty();
 })

//  Getting Setting Custom attribute value

$("#fifth button").click(function() {
    // console.log($("#fifth h1").attr("data-number")) 
    console.log($("#fifth h1").data("number"))
})

$("#fifth button").click(function() {
    // console.log($("#fifth h1").attr("data-number",10)) 
    console.log($("#fifth h1").data("number",10))
})

// Adding Class

$("#sixth button").on("click", function() {
    $("#sixth h1").addClass("hello");
    $("#sixth h1").removeClass("hii");
    $("#sixth h1").toggleClass("hi");

    // Checking Class
    if($("#sixth h1").hasClass("hi")) {
        console.log("indu");
    } else {
        console.log("illa");
    }
})

// Adding CSS property
$("#seventh button").click(function() {
    $("#seventh h1").css({
        backgroundColor: "blue",
        fontSize: "50px",
        color:"white"
    })
})

// Getting Width and Height of an element
let $div = $("div.box");
console.log("width is",$div.width());   //Actual width
console.log("height is",$div.height()); //Actual height

console.log("Inner width is",$div.innerWidth());   //Actual width + padding
console.log("Inner height is",$div.innerHeight()); //Actual height + padding

console.log("Outer width is",$div.outerWidth());   //Actual width + padding + border
console.log("Outer height is",$div.outerHeight()); //Actual height + padding + border

console.log("Outer width is",$div.outerWidth(true));   //Actual width + padding + border + margin
console.log("Outer height is",$div.outerHeight(true)); //Actual height + padding + border + margin