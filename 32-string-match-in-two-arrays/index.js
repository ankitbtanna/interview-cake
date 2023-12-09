/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const stringFromWord1 = word1.join("");
    const word2Length = word2.length;
    let i = 0;

    while (i < word2Length) {
        const joinedWord = word2.slice(0, i + 1).join("");
        if (!stringFromWord1.includes(joinedWord)) {
            return false;
        }

        if (i === word2Length - 1 && joinedWord !== stringFromWord1) {
            return false;
        }

        i++;
    }

    return true;
};