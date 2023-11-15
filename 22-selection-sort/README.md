# Time Complexity

The time complexity of the provided selection sort algorithm is O(n^2), where "n" is the number of elements in the array. Let's break down the time complexity analysis:

The outer loop runs for "pass" iterations, where "pass" goes from 0 to n-1 (the length of the array).
Inside the outer loop, there is a nested loop (for loop) that iterates from 1 to (length - pass). In the worst case, this inner loop has roughly n/2 iterations on average.
So, the total number of comparisons and swaps (dominant operations) in the worst case is the sum of the first n-1 integers, which is given by the formula n * (n - 1) / 2. Therefore, the time complexity is O(n^2).

It's worth noting that selection sort is not the most efficient sorting algorithm for large datasets, as its performance is quadratic. There are more efficient algorithms like merge sort or quicksort that have better average and worst-case time complexities for large datasets.

# Space Complexity

The space complexity of the provided selection sort algorithm is O(1), which means it uses constant extra space. Regardless of the size of the input array, the amount of additional memory used by the algorithm remains constant.

In the code, there are only a few variables used for control and temporary storage (length, largest, largestIndex, pass, i, and temp). These variables don't scale with the size of the input array; they are fixed and independent of the input size.

Therefore, the space complexity is considered constant, and it's denoted as O(1).

# Visualize
(Visualize)![https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/]