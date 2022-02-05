class Stack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
    Stack: Stack
};