function findMajorityElement(numbers) {
    let maxCount = 0;
    let index = -1;
    const arrayLength = numbers.length;

    outerLoop: for (let i = 0; i < arrayLength; i++) {
        let count = 0;
        innerLoop: for (let j = 0; j < arrayLength; j++) {
            if (numbers[i] === numbers[j]) count++;
        }

        if (count >= maxCount) {
            index = i;
            maxCount = count;
        }
    }

    if (maxCount > arrayLength / 2) {
        console.log(`Majority element in an array is ${numbers[index]}.`);
        return;
    }
    console.log('There is no majority element.')
}
console.log('###############################');
console.log('Majority Element');
console.log('###############################');
const input1 = [1, 2, 3, 4, 4, 4, 4, 5, 3, 2, 4, 4, 4, 4, 7];
console.log(`INPUT = ${JSON.stringify(input1)}`)
findMajorityElement(input1);

const input2 = [4, 4, 4, 4, 4, 4, 1, 2, 2, 3];
console.log(`INPUT = ${JSON.stringify(input2)}`)
findMajorityElement(input2);
console.log('###############################');