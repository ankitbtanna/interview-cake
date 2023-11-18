class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    printCount() {
        console.log(this.count);
    }
}

const counterSingleton = (function() {
    let instance;

    return {
        getInstance (){
            if (!instance) {
                instance = new Counter();
            }

            return instance;
        }
    }
}());

const counter1 = counterSingleton.getInstance();
const counter2 = counterSingleton.getInstance();

console.log(counter1 === counter2);

counter1.increment();
counter1.increment();
counter1.decrement();

counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.decrement();

counter1.printCount();
counter2.printCount();
