const input = [10, 7, 4, 2, 9, 10, 11, 3, 2];
const output = Array(9).fill(-1);

const size = input.length;
for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
        if (input[i] < input[j]) {
            output[i] = input[j];
            break;
        }
    }
}

console.log(output);