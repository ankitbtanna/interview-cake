function insertionSort(inputArray = []) {
    const size = inputArray.length;

    for (let i = 1; i < size; i++) {
        let j = i;

        while (j > 0 && inputArray[j] < inputArray[j - 1]) {
            let temp = inputArray[j];
            inputArray[j] = inputArray[j - 1];
            inputArray[j - 1] = temp;
            j = j - 1;
        }
        console.log(inputArray);
    }

    console.log(inputArray);
}

const input = [2, 3, 1, 8, 4, 3, 8, 10, 4];
insertionSort(input);
