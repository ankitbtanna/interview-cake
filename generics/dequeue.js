class Dequeue {
  constructor() {
    this.elements = [];
  }

  getFirst() {
    if (this.elements.length === 0) return undefined;
    return this.elements[0];
  }

  getLast() {
    if (this.elements.length === 0) return undefined;
    return this.elements[this.elements.length - 1];
  }

  appendElement(value) {
    this.elements.push(value);
  }

  removeFromFront() {
    if (this.elements.length === 0) return undefined;
    this.elements.shift();
  }

  removeElementFromEnd() {
    if (this.elements.length === 0) return undefined;
    this.elements.pop();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  clearQueue() {
    this.elements = [];
  }
}

module.exports = {
  Dequeue: Dequeue,
};
