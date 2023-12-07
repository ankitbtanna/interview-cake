function bubble_sort_alt(arr: number[]) {
    const length = arr.length;
    let pass = 0;

    while(pass < length) {
        for(let i = 0; i < length - pass; ++i) {
            const currentElement = arr[i];
            const nextElement = arr[i+1];

            if (currentElement > nextElement) {
                arr[i] = nextElement;
                arr[i+1] = currentElement;
            }
        }
        pass++;
    }
}

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bubble_sort_alt(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

