let button = document.getElementById("button");
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);

button.addEventListener('click', () => {
    location.assign("https://www.talrop.com/");
})