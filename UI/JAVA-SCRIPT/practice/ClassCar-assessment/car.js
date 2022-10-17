class Car {
    constructor (mileage, length, boot_space) {
        this.mileage = mileage;
        this.length = length;
        this.boot_space = boot_space;
    }
    details = () => {
        car_mileage.innerText = `car mileage is ${this.mileage}`;
        car_length.innerText = `car length is ${this.length}`;
        car_boot_space.innerText = `car boot space is ${this.boot_space}`;
    }
}

let car_mileage = document.getElementById("car_mileage");
let car_length = document.getElementById("car_length");
let car_boot_space = document.getElementById("car_boot_space");

let car_info = new Car(12,32,42)

console.log(car_info.details());
