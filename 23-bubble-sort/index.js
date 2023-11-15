function bubbleSort(items) {
    let length = items.length;
    let pass = 0;

    while (pass < length) {
        for (let i = 0; i < length - pass; i++) {
            let currentElement = items[i];
            let nextElement = items[i + 1];

            if (nextElement < currentElement) {
                items[i] = nextElement;
                items[i + 1] = currentElement;
            }
        }

        pass++;
    }

    return items;
}

const items = [
    89, 31, 87, 26, 4, 9, 34, 88, 55, 71, 26, 43, 4, 24, 42, 7, 53, 18, 94, 15,
    74, 83, 94, 13, 76, 58, 94, 75, 86, 68,
];

console.log(bubbleSort(items));
