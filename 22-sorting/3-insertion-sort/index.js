function insertionSort(items) {
    let length = items.length;

    // Iterate through each element in the array
    for(let i = 0; i < length; i++) {
        // Store the current element to be inserted
        let currentItem = items[i];
        let j = i;

        // Move elements greater than currentItem to the right
        while (j > 0 && currentItem < items[j - 1]) {
            items[j] = items[j - 1];

            j--;
        }

        // Insert the currentItem at its correct position
        items[j] = currentItem;
    }
    
    return items;
}

const items = [
    89, 31, 87, 26, 4, 9, 34, 88, 55, 71, 26, 43, 4, 24, 42, 7, 53, 18, 94, 15,
    74, 83, 94, 13, 76, 58, 94, 75, 86, 68,
];

console.log(insertionSort(items));