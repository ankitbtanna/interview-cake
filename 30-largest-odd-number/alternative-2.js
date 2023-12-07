/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const len = num.length;
    if (len === 0) {
      return "";
    }

    let i = 0;
    while(parseInt(num.charAt(len - 1 - i)) % 2 === 0) {
      ++i;
      num = num.substring(0, len - i);
    }

    if (num.length === 0) {
      return "";
    } else {
      return num;
    }
};