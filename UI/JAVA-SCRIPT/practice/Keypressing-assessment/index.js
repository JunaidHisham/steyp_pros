document.addEventListener('keypress', (event) => {
    event.code == "KeyE" || 
    event.code == "KeyQ" || 
    event.code == "KeyU" || 
    event.code == "KeyA" || 
    event.code == "KeyL" 
    ? console.log("You clicked equal") 
    : console.log("not equal");
})  