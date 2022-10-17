let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let button = document.getElementById("button");
let profile = ["hii", "haai", "hello", "hellllo"]

randomNumbers = () => {
    number1.innerText = Math.random();
};

randomNumber = () => {
    let random = Math.floor(Math.random() * 4);
    number2.innerText = profile[random]
};
randomTimeout = setTimeout(randomNumbers, 400);
updateNumber = setInterval(randomNumber, 1000);

button.addEventListener('click', () => {
    clearInterval(updateNumber);
    clearTimeout(randomTimeout);
})