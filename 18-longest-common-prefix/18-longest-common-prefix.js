function longestCommonPrefix(strs) {
  const isAnyEmpty = strs.some((str) => str.length === 0);
  if (isAnyEmpty) return "";

  let minLength = strs.map((str) => str.length).sort((a, b) => a - b)[0];
  let i = 0;
  let result = "";

  while (i < minLength) {
    const currentChar = strs[0][i];
    const isAllSame = strs.every((str) => str[i] === currentChar);
    if (!isAllSame) break;
    result += currentChar;
    i++;
  }

  return result;
}

const input = ["fig", "flow", "flight"];
console.log(longestCommonPrefix(input));
