function isPalindrome(num) {
  if (num < 0) return false;

  const numStr = num.toString();
  const left = 0;
  const right = numStr.length - 1;

  while (left < right) {
    if (numstr[left] !== numStr[right]) return false;
    left++;
    right--;
  }
  return true;
}
