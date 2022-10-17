let students = [
    {
        name: "Student One",
        class: 1,
        division: "C",
        marks: [10, 15, 20, 25, 30],
    },
    {
        name: "Student Two",
        class: 1,
        division: "C",
        marks: [10, 15, 22, 5, 32],
    },
    {
        name: "Student Three",
        class: 1,
        division: "C",
        marks: [11, 15, 25, 25, 30],
    },
    {
        name: "Student Four",
        class: 1,
        division: "C",
        marks: [17, 15, 19, 35, 40],
    },
    {
        name: "Student Five",
        class: 1,
        division: "C",
        marks: [10, 10, 12, 8, 35],
    },
]

let topper_mark = 0;
let topper_name = "";

for (x of students) {
    let array_of_marks = x.marks;
    let total = 0;

    const sum = (number) => {
        total += number;
    }

    array_of_marks.forEach(sum);

    if (topper_mark < total) {
        topper_mark = total;
        topper_name = x.name;
    }

}

console.log("Topper Name : "+topper_name);
console.log("Top Mark : "+topper_mark );