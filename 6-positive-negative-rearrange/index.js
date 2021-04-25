function rearrange(arr, n) {
    const positiveNumbers = [...arr].map(x => x >= 0 ? x : undefined).filter(y => !!y || y === 0);
    const negativeNumbers = [...arr]
      .map((x) => (x < 0 ? x : undefined))
      .filter((y) => !!y);
    const min = Math.min(positiveNumbers.length, negativeNumbers.length);
    const output = [];
    for (let i = 0; i < min; i++) {
        output.push(positiveNumbers[i], negativeNumbers[i]);
    }
    output.push(...positiveNumbers.slice(min), ...negativeNumbers.slice(min));
    return output;
}

console.log('###############################');
console.log('Rearrange');
console.log('###############################');
const input1 = [1, -1, 2, -3, 0, 5, 4, 8, -5];
console.log(`INPUT = ${JSON.stringify(input1)}`)
rearrange(input1, 9);

const input2 = [1, -2, 0, 2, -3];
console.log(`INPUT = ${JSON.stringify(input2)}`)
rearrange(input2, 5);
console.log('###############################');