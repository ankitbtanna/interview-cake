# Introduction
- Simplest sorting algorithm

## What is a sorted array?
- If A[i] <= A[i+1] for all the elements then the array is sorted
- Bubble sort works on this principle
- It passes through the array multiple times
- It compares the adjacent elements
- It swaps if A[i] > A[i+1]
- At the end of each pass of an array, **we will have largest elements at the end of the array**.

## Time Complexity of Bubble Sort
- you pass the array multiple times
- N, N-1, N-2, N-3, ... 1
- Total number of passes = (N + 1)*N/2

```
// For array of 100 elements, number of passes

1...100 = 101
2...99 = 101
3...98 = 101
...
50...51 = 101

Number of passes = 101*50
(N+1)*N/2
Ignore the constants (i.e. / 2)
Time Complexity = O(N^2 + N)
Ignore the insignificant N
Final time complexity = O(N^2);
```

## Solution

```
function bubble_sort(arr: number[]) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j+1]) {
                const tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
}

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

```

## Alternative solution - more verbose
```
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

```