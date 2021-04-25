function missingNumber(input, n) {
  const originalArray = [...Array(n).keys()].map(x => x+1);
  let missingNumber;
  const originalArrayLength = originalArray.length;
    for (let i = 0; i < originalArrayLength; i++) {
        if (input.indexOf(originalArray[i]) === -1) {
            missingNumber = originalArray[i];
            break;
        }
    }
  missingNumber
    ? console.log(`Missing number is ${missingNumber}`)
    : console.log(`There is no missing number.`);
}

console.log("###############################");
console.log("Missing Number");
console.log("###############################");
const input1 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
console.log(`INPUT = ${JSON.stringify(input1)}`);
missingNumber(input1, 10);

const input2 = [1, 2, 3, 5];
console.log(`INPUT = ${JSON.stringify(input2)}`);
missingNumber(input2, 5);

const input3 = [1];
console.log(`INPUT = ${JSON.stringify(input3)}`);
missingNumber(input3, 2);
console.log("###############################");
