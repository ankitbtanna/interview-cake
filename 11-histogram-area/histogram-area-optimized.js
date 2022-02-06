const Stack = require("../generics/stack").Stack;
const myStack = new Stack();
const input = [2, 1, 5, 6, 2, 3];
const size = input.length;

const smallestElementLeftSide = Array(6).fill(-1);
const smallestElementRightSide = Array(6).fill(size);
let maxArea = 0;

// Right side
for (let i = 0; i < size; i++) {
    if (myStack.isEmpty() || input[myStack.top()] <= input[i]) {
        myStack.push(i);
        continue;
    }

    while (!myStack.isEmpty() && input[myStack.top()] > input[i]) {
        smallestElementRightSide[myStack.top()] = i;
        myStack.pop();
    }
    myStack.push(i);
}

while (myStack.isEmpty()) myStack.pop();

// Left side
for (let i = size - 1; i >= 0; i--) {
    if (myStack.isEmpty() || input[myStack.top()] <= input[i]) {
        myStack.push(i);
        continue;
    }

    while (!myStack.isEmpty() && input[myStack.top()] > input[i]) {
        smallestElementLeftSide[myStack.top()] = i;
        myStack.pop();
    }
    myStack.push(i);
}

console.log(smallestElementLeftSide);
console.log(smallestElementRightSide);

for (let j = 0; j < size; j++) {
    let elementUnderConsideration = input[j];
    let heightOfElementUnderConsideration = elementUnderConsideration;
    let width = (smallestElementRightSide[j] - smallestElementLeftSide[j] + 1 - 2)
    let area = width * heightOfElementUnderConsideration;
    maxArea = Math.max(maxArea, area);
}

console.log(maxArea);