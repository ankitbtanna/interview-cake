/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const oneBitRegex = /1/g;
    const matches = n.toString(2).match(oneBitRegex);

    return matches?.length || 0;
};