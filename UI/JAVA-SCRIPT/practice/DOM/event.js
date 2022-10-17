let headings = document.getElementById("demo");
headings.onclick = function(event) {
    event.target.textContent = "hiiii";
    console.log(event);
}