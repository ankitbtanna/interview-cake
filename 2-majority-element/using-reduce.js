function findMajorityElement(input) {
    const majority = input.length / 2;
    let majorityElement;
    input.reduce((accumulator, item) => {
        accumulator.hasOwnProperty(item) ? accumulator[item]++ : accumulator[item] = 1;
        if (accumulator[item] > majority) majorityElement = item;
        return accumulator;
    }, {});
    majorityElement
      ? console.log(`Majority element is ${majorityElement}`)
      : console.log(`There is no majority element.`);
}

console.log("###############################");
console.log("Majority Element"); 
console.log("###############################");
const input1 = [1, 2, 3, 4, 4, 4, 4, 5, 3, 2, 4, 4, 4, 4, 7];
console.log(`INPUT = ${JSON.stringify(input1)}`);
findMajorityElement(input1);

const input2 = [1, 2, 3, 4, 4, 4, 4, 5, 3, 2, 7];
console.log(`INPUT = ${JSON.stringify(input2)}`);
findMajorityElement(input2);
console.log("###############################");