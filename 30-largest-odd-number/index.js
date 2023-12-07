/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    if (num.trim() === "" || !num) {
        return "";
    }

    const allSubstrings = getAllSubstrings(num);
    const allPossibleNumbers = convertAllSubstrsToNumbers(allSubstrings);
    const allOdds = getAllOdds(allPossibleNumbers);

    if (allOdds.length === 0) {
        return "";
    }

    return allOdds[0].toString();
};

function getAllSubstrings(num) {
    return num.split("").map((character, index) => {
        return num.substring(0, num.length - index);
    }).filter((subStrs) => subStrs !== "");
}

function convertAllSubstrsToNumbers(subStrs) {
    return subStrs.map((subStr) => {
      if (+subStr > Number.MAX_SAFE_INTEGER) {
        return BigInt(subStr);
      }

      return +subStr;
    });
}

function getAllOdds(allNums) {
    return allNums.filter((num) => {
      if (num > Number.MAX_SAFE_INTEGER) {
        const strNum = num+"";

        if (BigInt(strNum) % BigInt(2) === BigInt(0)) {
          return false;
        } else {
          return true;
        }
      }

      return num % 2 !== 0
    });
}