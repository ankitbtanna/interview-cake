const Stack = require('../generics/stack').Stack;

const myStack = new Stack();

const input = [11, 4, 3, 2, 10, 12];
const output = Array(6).fill(-1);

const size = input.length;
for (let i = 0; i < size; i++) {
    if (myStack.isEmpty() || (input[myStack.top() + 1] <= input[myStack.top()])) {
        myStack.push(i);
        continue;
    }

    let iterator = i;
    while (!myStack.isEmpty() && (input[iterator] > input[myStack.top()])) {
        output[myStack.top()] = input[iterator];
        myStack.pop();
    }
    myStack.push(i);
}

console.log(output);