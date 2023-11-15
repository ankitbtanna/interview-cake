function selectionSort(items) {
    let length = items.length; // know the length of the array
    let pass = 0; // we'll make multiple passes to the array, each time decrementing by one. This variable is for keeping track of passes

    while (pass < length) {
        // iterate passes
        let largest = items[0]; // Reset largest for each pass
        let largestIndex = 0; // Reset largestIndex for each pass

        // pass until the last but passed elements
        for (let i = 1; i < length - pass; i++) {
            if (items[i] > largest) {
                largest = items[i]; // update largest
                largestIndex = i; // update largestIndex
            }
        }

        // swap the last element of the pass with largest element
        let temp = items[length - 1 - pass];
        items[length - 1 - pass] = largest;
        items[largestIndex] = temp;

        pass++;
    }

    return items;
}

// generate a random array of 30 numbers between 1 and 100
//const items = Array.from({length: 30}, () => Math.floor(Math.random() * 100));

const items = [
    89, 31, 87, 26, 4, 9, 34, 88, 55, 71, 26, 43, 4, 24, 42, 7, 53, 18, 94, 15,
    74, 83, 94, 13, 76, 58, 94, 75, 86, 68,
];

console.log(selectionSort(items));
