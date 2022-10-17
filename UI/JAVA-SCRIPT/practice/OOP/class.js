class Home {
    color = "blue";
    rooms = 5;
    doors = 7;
    open = () => {
        return "opened";
    };
    close = () => {
        console.log("closed");
    };
    clean = () => {
        console.log("cleaned");
    };
};
class School {
    constructor (color, floor, classCount, teachers) {
        this.color = color;
        this.floor = floor;
        this.classCount = classCount;
        this.teachers = teachers;
    }
}

let newHome = new Home();
let school = new School("grey", 3, "1 - 10", 10)
console.log(newHome.open());
console.log(school.classCount);