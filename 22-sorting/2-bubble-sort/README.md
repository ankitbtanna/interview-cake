# Time Complexity
The provided code implements the bubble sort algorithm. Let's analyze the time complexity:

The outer loop (while loop) runs for "pass" iterations, where "pass" goes from 0 to n-1 (the length of the array).
Inside the outer loop, there is a nested loop (a for loop) that iterates from 0 to (length - pass). In the worst case, this inner loop has roughly n/2 iterations on average.
For each pair of adjacent elements, a comparison and a swap are performed if they are in the wrong order. In the worst case, the inner loop has to go through the entire array for each pass.

The total number of comparisons and swaps in the worst case is the sum of the first n-1 integers, which is given by the formula n * (n - 1) / 2.

Therefore, the time complexity of the bubble sort algorithm is O(n^2). It's worth noting that bubble sort is not the most efficient sorting algorithm for large datasets, and it's primarily used for educational purposes or small datasets due to its relatively poor performance compared to other sorting algorithms with better time complexities.

# Scpace Complexity
The space complexity of the provided bubble sort algorithm is O(1), which means it uses constant extra space. Regardless of the size of the input array, the amount of additional memory used by the algorithm remains constant.

In the code, there are only a few variables used for control and temporary storage (length, pass, i, currentElement, and nextElement). These variables don't scale with the size of the input array; they are fixed and independent of the input size.

Therefore, the space complexity is considered constant, and it's denoted as O(1).

# Visualization
(Visualize)![https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/]
