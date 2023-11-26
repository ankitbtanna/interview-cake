# Binary Search
- Most classic problem
- Basis of other algorithms
- How we look at other algorithms?

# Question to ask about your dataset?
- Is your dataset ordered?
- If yes, how will you sort it?
- If our dataset is ordered, we do not need to go to each and every element in an array and search if the element is present or not.
- Algorithms in an optimised form require some guesses. If you jumped the array element's by 10%, the worst case time would still be O(n) but it would still be more efficient than the current program. We didn't improve the algorithm, we just improved it practically speaking. We didn't scan each index. But as we approach million elements, the algorithm becomes slower and approaches closer and closer to O(n)
- Same is the case with the Binary search algorithm
    - You can go and search at 50% of the length of an array and them decide if it's greater than the number you are searching
    - If yes, go back and search the first half. Divide the first half again by 50% and search if the middle element is greater than the number you are searching for.
    - If no, search on the right hand side of the half.
    - There the time complexity is O(log n);
    - n/2^k = 1
    - log2n = k
    - 4096 ---> 2048 ---> 1024 ---> 512 ---> 256 ---> 128 ---> 64 ---> 32 ---> 16 ---> 8 ---> 4 ---> 2 ---> 1
    - You do 12 halvings to get to single element
    - This time of search is called a binary search
    - If you half a value at each state, it is O(log n) or O(n log n)
    
# Pseudo code for the Binary Search
- Let's say you have a function which looks like:
`search(array, itemToSearch)`
- We know that we need to halve the array until we find the number we are looking for
- Let's say we have starting index as `low` and last index as `high`. Initially `low` would be `0` and `high` would be `array.length`.
- We will halve the array repeatedly until `low` matches `high`.
- On each iteration, we would update `low` and `high`
- We can use a `do {...} while(...)` loop
- How will we calculate middle point `mid`? `mid = floor(low + (high-low)/2)`
- Value at middle point can be calculated like `midValue = array[mid]`
- Then we compare `itemToSearch` with `midValue`
- if `itemToSearch = midValue`, return `true` and `mid` as index
- If `itemToSearch > midValue`, adjust our low `low = mid + 1` else
- if `itemToSearch < midValue`, adjust our high `high = mid`
- Why did we not adjust our high as mid - 1 just like our low? We go with one side as inclusive and the other as exclusive to not have a mis-step. `[low, high)`
- What would be our exit condition? `low < high`. Once this condition is met, low and high have cross over.

```
binary_search_fn(array, itemToSearch) {
    low = 0
    high = array.length
    do {
        mid = low + (high - low)/2
        midValue = array[mid]

        if (itemToSearch = midValue) {
            return true;
        }

        if (midValue > itemToSearch) {
            high = mid;
        } else if (midValue < itemToSearch) {
            low = mid + 1;
        }

        if (value > itemToSearch) {
            high = mid;
        } else if (value < itemToSearch) {
            low = mid + 1;
        }
    } while (low < high)

    return false;
}
```

# Assumption
- This all logic is under an assumption that you are doing this in a sorted array
- You can never do this in an unsorted array
- This is because chosing the right half or the left half is solely dependent on the condition.
