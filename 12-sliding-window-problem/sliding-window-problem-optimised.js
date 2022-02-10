const Dequeue = require("../generics/dequeue").Dequeue;

const input = [1, 3, -1, -3, 5, 3, 6, 7];
const windowSize = 3;
const maxForEachWindow = [];
const size = input.length;

for (let i = 0; i + windowSize <= size; i++) {
    const window = input.slice(i, i + windowSize);
    const dequeue = new Dequeue();

    window.forEach((element) => {
        if (dequeue.isEmpty()) {
            dequeue.appendElement(element);
        } else {
            if (dequeue.getFirst() < element) {
                dequeue.removeFromFront();
                dequeue.appendElement(element);
            } else {
                void 0;
            }
        }
    });

    maxForEachWindow.push(dequeue.getFirst());
    dequeue.clearQueue();
}

console.log(maxForEachWindow);