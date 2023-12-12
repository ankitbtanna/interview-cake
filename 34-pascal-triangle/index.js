/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascalsTriangle = [];
    let row = 1;

    for(let i = 1; i <= numRows; i++) {
        pascalsTriangle.push(Array(i).fill(1));
    }

    for(let j = 2; j < pascalsTriangle.length; j++) {
        let previousRow = pascalsTriangle[j - 1];
        let currentRow = pascalsTriangle[j];

        for (let i = 1; i < currentRow.length - 1; i++) {
            pascalsTriangle[j][i] = previousRow[i] + previousRow[i -1];
        }
    }

    return pascalsTriangle;
};

console.log(generate(5));