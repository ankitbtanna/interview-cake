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

const counter1 = new Counter();
const counter2 = new Counter();
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
