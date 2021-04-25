function plusOne(arr, n) {
    if (n === 0) {
        if (arr[0] === 9) {
            arr[0] = 0;
            arr.unshift(1);
        } else {
            arr[0] = arr[0] + 1;
        }
        return arr;
    }
    
    if (arr[n] < 9) {
        arr[n] = arr[n] + 1;
        return arr;
    }

    if (arr[n] === 9) {
        arr[n] = 0;
        plusOne(arr, n - 1);
        return arr;
    }
}

console.log('###############################');
console.log('Plus One');
console.log('###############################');
const input1 = [1,2,4];
console.log(`INPUT = ${JSON.stringify(input1)}`)
const sum = plusOne(input1, 2);
console.log(sum);

const input2 = [9,9,9];
console.log(`INPUT = ${JSON.stringify(input2)}`)
const sum2 = plusOne(input2, 2);
console.log(sum2);
console.log('###############################');