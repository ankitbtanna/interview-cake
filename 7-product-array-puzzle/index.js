function productArrayPuzzle(arr, n) {
  if (arr.length === 1) {
    return [1];
  }

  if (arr.length === 2) {
    return arr.reverse();
  }

  
  return arr.map((item, index, elements) => {
    const newArr = [...elements];
    newArr.splice(index, 1);
    return newArr.reduce((accumulator, el) => {
      return accumulator * el;
    }, 1);
  });
}

console.log('###############################');
console.log('Product Array Puzzle');
console.log('###############################');
const input1 = [1,2,3,4,5,6,7,8,9];
console.log(`INPUT = ${JSON.stringify(input1)}`)
productArrayPuzzle(input1, 9);

const input2 = [12,0];
console.log(`INPUT = ${JSON.stringify(input2)}`)
productArrayPuzzle(input2, 2);

const input3 = [
  4,
  1,
  7,
  7,
  11,
  1,
  3,
  8,
  5,
  12,
  1,
  4,
  11,
  4,
  4,
  13,
  12,
  6,
  2,
  7,
  3,
  4,
  8,
  9,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];
console.log(`INPUT = ${JSON.stringify(input3)}`);
productArrayPuzzle(input3, 55);
console.log('###############################');