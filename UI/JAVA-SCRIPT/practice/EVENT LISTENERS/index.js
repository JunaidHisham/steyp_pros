let Title = document.getElementById("title");
Title.addEventListener('click', () => {
    console.log("hello");
});
Title.addEventListener('click', () => {
    console.log("Hii!!");
});
Title.addEventListener('mouseover', () => {
    console.log("Hover");
});

let box = document.getElementById("box");
let button = document.getElementById("button");
let TextNumber = document.getElementById("text");

box.style.cssText = "background-color: green; color: white; height:150px";
randomNumber = () => {
    TextNumber.innerText = Math.random();
}
box.addEventListener('mouseover', randomNumber)
button.addEventListener('click', () => {
    box.removeEventListener('mouseover',randomNumber)
})

let link = document.getElementById("link");
link.addEventListener('click', (event) => {
    event.preventDefault();
    alert("The Link is Dead")
});

// Key Pressing 
document.addEventListener('keypress', (event) => {
    event.ctrlKey && event.code == "KeyP" 
    ? console.log("Key P") 
    : console.log("Not P");
})