const Stack = require("../generics/stack").Stack;

const inputArray = [4, 5, 2, 10, 8];
const size = inputArray.length;
const outputArray = Array(size).fill(-1); // Expected Output [-1, 4, -1, 2, 2]
const myStack = new Stack();
console.log(myStack.stack);

for (let i = size - 1; i >= 0; i--) {
  if (
    myStack.isEmpty() ||
    inputArray[myStack.stack.length - 1] <= inputArray[i]
  ) {
    myStack.push(i);
    continue;
  }
  while (
    !myStack.isEmpty() &&
    inputArray[myStack.stack.length - 1] > inputArray[i]
  ) {
    outputArray[myStack.stack.length - 1] = inputArray[i];
    myStack.pop();
  }
  myStack.push(i);
}
console.log(outputArray);
