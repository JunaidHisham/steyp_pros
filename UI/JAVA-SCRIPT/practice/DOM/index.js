let heading = document.getElementById("demo");
console.log(heading);

let boxes = document.getElementsByClassName("box");
console.log(boxes);

let link = document.getElementsByTagName("a");
console.log(link);

// Updating Style Property
// heading.style.color = "red";
heading.style.cssText = "color:red;font-size:60px;"