const input = [2, 1, 5, 6, 2, 3];
const calculatedAreas = [];

const size = input.length;

let segmentSize = 1;
for (let i = 0; i < size; i++) {
    for (let j = 0; j + segmentSize <= size; j++) {
        const slicedArray = input.slice(j, j + segmentSize);
        const minHeight = Math.min(...slicedArray);
        const area = minHeight * segmentSize;
        calculatedAreas.push(area);
    }
    segmentSize++;
}

console.log(Math.max(...calculatedAreas));