let num1 = prompt("enter the first number");
let num2 = prompt("enter the second number");
if (num1 > 0 && num2 > 0) {
    let result = Math.max(num1,num2);
    alert(result);
} else {
    alert("You entered a non-integer value");
}
