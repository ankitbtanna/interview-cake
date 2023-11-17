function selectionSort(items) {
    // Get the length of the array
    let length = items.length;
    // Variable to keep track of the number of passes
    let pass = 0;

    // Continue iterating until all passes are completed
    while (pass < length) {
        // Initialize variables to track the largest element and its index
        let largest = items[0];
        let largestIndex = 0;

        // Iterate through the unsorted portion of the array
        for (let i = 1; i < length - pass; i++) {
            // Find the largest element and its index
            if (items[i] > largest) {
                largest = items[i];
                largestIndex = i;
            }
        }

        // Swap the largest element with the last unsorted element
        let temp = items[length - 1 - pass];
        items[length - 1 - pass] = largest;
        items[largestIndex] = temp;

        // Each pass ensures the largest unsorted element is at its correct position
        pass++;
    }

    // The array is now sorted, return the sorted array
    return items;
}


// generate a random array of 30 numbers between 1 and 100
//const items = Array.from({length: 30}, () => Math.floor(Math.random() * 100));

const items = [
    89, 31, 87, 26, 4, 9, 34, 88, 55, 71, 26, 43, 4, 24, 42, 7, 53, 18, 94, 15,
    74, 83, 94, 13, 76, 58, 94, 75, 86, 68,
];

console.log(selectionSort(items));
