function two_crystal_balls(breaks: boolean[]): number {
    const length = breaks.length;
    
    let jumpAmount = Math.floor(Math.sqrt(length));

    let i = jumpAmount;

    for(; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;

}

test("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
});

