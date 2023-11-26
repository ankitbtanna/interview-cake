function binary_fn(haystack: number[], itemToSearch: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const mid = Math.floor(low + (high - low)/2);
        const value = haystack[mid];

        if(itemToSearch === value) {
            return true;
        }

        if (itemToSearch > value) {
            low = mid + 1;
        } else if (itemToSearch < value) {
            high = mid;
        }
        
    } while(low > high)

    return false;
}

test("binary search array", function() {

    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_fn(foo, 69)).toEqual(true);
    expect(binary_fn(foo, 1336)).toEqual(false);
    expect(binary_fn(foo, 69420)).toEqual(true);
    expect(binary_fn(foo, 69421)).toEqual(false);
    expect(binary_fn(foo, 1)).toEqual(true);
    expect(binary_fn(foo, 0)).toEqual(false);
});

