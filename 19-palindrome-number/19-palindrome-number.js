function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseStrWithoutSpaces = lowerCaseStr.replace(/\s/g, "");
  const lowerCaseStrWithoutSpacesAndNonAlphaNumeric =
    lowerCaseStrWithoutSpaces.replace(/[^a-z0-9]/g, "");

  const left = 0;
  const right = lowerCaseStrWithoutSpacesAndNonAlphaNumeric.length - 1;

  while (left < right) {
    if (
      lowerCaseStrWithoutSpacesAndNonAlphaNumeric[left] !==
      lowerCaseStrWithoutSpacesAndNonAlphaNumeric[right]
    )
      return false;
    left++;
    right--;
  }

  return true;
}
