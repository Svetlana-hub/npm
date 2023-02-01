const Car = require('./npmTaskWithClass0');

class Flyingcar extends Car {
    flyFast() {
        console.log('I am flying fast')
    }
    flySuperFast() {
        console.log('I am flying super fast...');
    }
}


module.exports = Flyingcar