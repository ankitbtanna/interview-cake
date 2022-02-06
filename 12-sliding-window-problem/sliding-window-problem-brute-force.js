const input = [1, 3, -1, -3, 5, 3, 6, 7];
const windowSize = 3;
const maxForEachWindow = [];
const size = input.length;


for (let i = 0; i + windowSize < size; i++) {
    const window = input.slice(i, i + windowSize);
    maxForEachWindow.push(Math.max(...window));
}

console.log(maxForEachWindow);