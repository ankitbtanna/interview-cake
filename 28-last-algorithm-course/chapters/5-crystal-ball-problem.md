# The two crystal ball problem

Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.

## Let's discuss our options
1. Linear Search
2. Binary Search

```
[
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
]
```

## Linear search and Binary Seaarch combined
- We start walking from `0`
- We will eventually find first true where the crystall ball will break
- But we are given **2 crystal balls**, we need to use this constraint for improving the algorithm
- We don't want to linearly walk through the array: `O(n)`
- We try to split the array into 2. We have `0th` index and `n/2th` index. We check if `n/2th index = true`. If not, we split the array again until we first find `true`.
- Now that we found true, we'll start walking from `0th` index towards right. Let's say we found our first true after splitting the array twice i.e. `0 to N/4` so our run time would be `O(N/4) ---> dropping the constants ---> O(N)`

## Other optimised solutions
- We can optimise the problem by jumping by `square root of N`
- If one of the crystal ball breaks, we walk back to last known good point
- We would have to walk at most `square root of N`
- Worst case = `O(sqrt(N) + sqrt(N))`

## Why suddently square root?
- If you jump to the middle element `N/2`, and your crystal ball breaks, you are now left with only one crystal ball.
- You need to start from `0` and walk up till `N/2`
- Jumping by `sqrt(N)` means we will at-most walk `sqrt(N)`.
- Worst case could have been walk the half of the array, instead, you now just need to walk `sqrt(N)`


## Solution
```
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

```