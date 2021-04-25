function findMissingNumber(arr, d) {
    const clip = arr.slice(0, d);
    arr.splice(0, d);
    console.log([...arr, ...clip].join(" "));
    return [...arr, ...clip].join(' ');
}

console.log('###############################');
console.log('Rotate Array');
console.log('###############################');
const input1 = [1,2,3,4,5,6,7,8,9,10];
console.log(`INPUT = ${JSON.stringify(input1)}`)
findMissingNumber(input1, 2);

const input2 = [1,2,3,4,5];
console.log(`INPUT = ${JSON.stringify(input2)}`)
findMissingNumber(input2, 3);
console.log('###############################');