function findMissingNumber(input, n) {
    const sum1 = [...Array(n).keys()].map((x) => x + 1).reduce((sum, num) => sum + num, 0);
    const sum2 = input.reduce((sum, num) => sum + num, 0);
    const missingNumber = sum1 - sum2;
  missingNumber
    ? console.log(`Missing number is ${missingNumber}`)
    : console.log(`There is no missing number.`);
}

console.log("###############################");
console.log("Missing Number");
console.log("###############################");
const input1 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
console.log(`INPUT = ${JSON.stringify(input1)}`);
findMissingNumber(input1, 10);

const input2 = [1, 2, 3, 5];
console.log(`INPUT = ${JSON.stringify(input2)}`);
findMissingNumber(input2, 5);

const input3 = [1];
console.log(`INPUT = ${JSON.stringify(input3)}`);
findMissingNumber(input3, 2);
console.log("###############################");
