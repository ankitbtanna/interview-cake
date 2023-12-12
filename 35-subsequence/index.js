/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const sLength = s.length;
    const tLength = t.length;

    if (s.length === t.length && s === t) return true;

    if (t.length === 0) return false;

    const smallerString = sLength > tLength ? t : s;
    const largerString = sLength > tLength ? s : t;

    let j = 0;
    for (let i = 0; i < largerString.length; i++) {
        if (largerString[i] === smallerString[j]) j++;
    }

    return j === smallerString.length;
};