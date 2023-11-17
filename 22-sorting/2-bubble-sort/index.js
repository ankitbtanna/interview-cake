function bubbleSort(items) {
    // Get the length of the array
    let length = items.length;
    // Variable to keep track of the number of passes
    let pass = 0;

    // Continue iterating until all passes are completed
    while (pass < length) {
        // Iterate through the array
        for (let i = 0; i < length - pass; i++) {
            // Get the current and next elements
            let currentElement = items[i];
            let nextElement = items[i + 1];

            // Swap elements if they are in the wrong order
            if (nextElement < currentElement) {
                items[i] = nextElement;
                items[i + 1] = currentElement;
            }
        }

        // Each pass ensures the largest unsorted element is at its correct position (i.e. at the end)
        pass++;
    }

    // The array is now sorted, return the sorted array
    return items;
}

const items = [
    89, 31, 87, 26, 4, 9, 34, 88, 55, 71, 26, 43, 4, 24, 42, 7, 53, 18, 94, 15,
    74, 83, 94, 13, 76, 58, 94, 75, 86, 68,
];

console.log(bubbleSort(items));
