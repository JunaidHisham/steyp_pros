// //concatenation

// let a = "Hello";
// let b = "World";
// let My_name = "Junaid Hisham";
// let age = 18;
// let place = "Aluva";

// console.log(a + b);

// let address = `My name is ${My_name}. I am ${age} years old. I'm from ${place}.`;
// console.log(address);

// //Array
// let first_array = [1, 2, 3, 3, 4, 1];
// let second_array = [1, 1, 1, 1, 1, 1];
// console.log(first_array);

// //adding items to an array
// first_array[6] = 4;
// console.log(first_array);

// first_array.push(7);
// console.log(first_array);

// //remoing items from an array
// first_array.pop();
// console.log(first_array);

// first_array.shift();
// console.log(first_array);

// first_array.splice(2, 0);
// console.log(first_array);

// first_array.splice(2, 0, "hii", "hello");
// console.log(first_array);

// // concatinating Arrays (Adding two arrays)

// let Array_three = first_array.concat(second_array);
// console.log(Array_three);

// //Object 

// student = {
//     name: "Awad",
//     age: 18,
//     place: "Muvattupuzha",
// };

// console.log(student.age);

// student.last_name = "Ali";
// console.log(student);

// delete student.last_name;
// console.log(student);

// // loops
// // for loop
// let i;
// for(i = 0; i < 5; i++) {
//     console.log(i);
// }

// // for in loop
// for(x in Array_three) {
//     console.log(Array_three[x]);
// }

// // for of loop
// for(x of Array_three) {
//     console.log(x);
// }

// //while loop
// let aa = 0;
// while (aa < 10) {
//     console.log(i);
//     i++;
// }

// //do while loop
// let bb = 0;
// do {
//     console.log(bb);
//     bb++;
// } while (bb < 10);

// for each 

// let numbers = [10, 15, 20, 25, 30];
// let total = 0;
// const sum = (number) => {
//     total += number;
// }
// numbers.forEach(sum);
// console.log(total);

// map function
// let array2 = numbers.map((number) => { 
//     return number * 20 ;
// });

// console.log(array2);

// calculating exicution time 

// console.time();
// for (let i = 0; i < 100000; i++) {
//     console.info(i);
// }
// console.timeEnd();

// Random Numbers 
// console.info(Math.floor(Math.random() * 101));

// DATE MODULE
// let today = new Date();
// console.log(today);
// let someday = new Date(12,11,12,12,12,12,12)
// console.log(someday)