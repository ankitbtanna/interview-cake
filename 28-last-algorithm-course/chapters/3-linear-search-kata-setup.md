# Note
- Good way to practice these algorithms is to only use .length properties and practice push pop assign and deletion operations
- It is good to visualize all the problems first
- Try to draw boxes and arrows
- Then program it
- It's a core competency that will be useful for the rest of the life

# Linear Search
- Simplest form of algorithm
- Everyone has to do a certain kind of search
- Simplest search is a Linear search
- Try and whiteboard the solutions always
- What does indexOf method do? Which algorithm does it use?
- It uses linear search

# What is the Big O?
- Important concepts to remember here
    - Growth is w.r.t. input
    - Constants are dropped
    - Consider always the worst case
- What is the possible worst case situation?
    - If the thing that we are searching for, does not exist.
    - We go till the end of an array
    - it is O(n)


```
function linear_fn(haystack: number[], needle: number): boolean {
    // looking for needle in a hay stack
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    
    return false;
}

test("linear search array", function() {

    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(linear_fn(foo, 69)).toEqual(true);
    expect(linear_fn(foo, 1336)).toEqual(false);
    expect(linear_fn(foo, 69420)).toEqual(true);
    expect(linear_fn(foo, 69421)).toEqual(false);
    expect(linear_fn(foo, 1)).toEqual(true);
    expect(linear_fn(foo, 0)).toEqual(false);
});


```

