function multiplyMatrices(matrixA, matrixB) {
    const resultMatrixDimensions = generateResultMatrixDimensions(matrixA, matrixB);
    console.log('Dimension of the multiplied array: ', resultMatrixDimensions);
    
    const outputArray = generateArrayFromDimensions(resultMatrixDimensions[0], resultMatrixDimensions[1]);
    console.log('Output array looks like this ', outputArray);

    const outputArrayRows = outputArray.length;
    const outputArrayColumns = outputArray[0].length;

    for (let i = 0; i < outputArrayRows; i++) {
        for (let j = 0; j < outputArrayColumns; j++) {
            const matrixARow = matrixA[i];
            const matrixBColumn = matrixB.map((row) => row[j]);
            
            console.log("Getting dot product of ", matrixARow, matrixBColumn);

            outputArray[i][j] = dotMultiplication(matrixARow, matrixBColumn);
        }
    }
    console.log(outputArray);
}

// matrix A = a X b  matrix B = b X c   result matrix = a X c
function generateResultMatrixDimensions(matrixA, matrixB) {
    const matrixARows = matrixA.length;
    const matrixAColumns = matrixA[0].length;

    const matrixBRows = matrixB.length;
    const matrixBColumns = matrixB[0].length;

    if (matrixAColumns !== matrixBRows) {
        throw Error('Cannot multiply matrices as the rows of matrix A is not equal to rows of matrix B');
    }

    return [matrixARows, matrixBColumns];
}

function generateArrayFromDimensions(rows, columns) {
    return Array.from({length: rows}, () => Array(columns).fill(0));
}

function dotMultiplication(row, column) {
    const length = row.length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += row[i]*column[i];
    }

    return sum;
}

// 3 X 2 matrix
const matrixA = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// 2 X 3 Matrix
const matrixB = [
    [10, 20, 30],
    [40, 50, 60]
]

multiplyMatrices(matrixA, matrixB);
