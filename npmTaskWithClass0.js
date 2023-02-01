/// classes - class A is shown here, class B inheriting from A is shown in npmTaskWithClass.1.js file. Instance is created and methods are called in npmTaskWithClass2.js file 

class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive() {
        console.log('Bip-bip, I am driving...');
    }
    stop() {
        console.log('Stopping...')
    }
}

module.exports = Car;