/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
     let n = num.length;
        let last = 0;
        let flag = false;
        
        for (let i = n - 1; i >= 0; i--) {
            if (parseInt(num[i]) % 2 === 1) {
                last = i;
                flag = !flag;
                break;
            }
        }

        if (last === 0 && !flag) return "";
        else return num.substring(0, Math.abs(0 - last) + 1);

};