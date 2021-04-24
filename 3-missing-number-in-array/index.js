function rotateArray(input, n) {
    const originalArray = [...Array(n).keys()];
    let missingNumber;
    originalArray.forEach((item) => {
        if (input.indexOf(item) === -1) {
            missingNumber = item;
        }
    });
    missingNumber
      ? console.log(`Missing number is ${missingNumber}`)
      : console.log(`There is no missing number.`);
}

console.log('###############################');
console.log('Missing Number');
console.log('###############################');
const input1 = [1,2,3,4,5,7,8,9,10];
console.log(`INPUT = ${JSON.stringify(input1)}`)
rotateArray(input1, 10);

const input2 = [1,2,3,5];
console.log(`INPUT = ${JSON.stringify(input2)}`)
rotateArray(input2, 5);
console.log('###############################');