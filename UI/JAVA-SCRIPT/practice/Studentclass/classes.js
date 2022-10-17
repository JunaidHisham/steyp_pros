class Student {
    constructor (name, studentClass, division, marks) {
        this.name = name;
        this.studentClass = studentClass;
        this.division = division;
        this.marks = marks;
    };
    total = () => {
        let Total = 0;
        this.marks.map((mark) => {
            Total += mark;
        });
        
        return `Total Marks: ${Total}`
    };
};

const student = new Student("Joe", 10, "D", [10, 30, 30, 20, 30]);
console.log(student.total());
