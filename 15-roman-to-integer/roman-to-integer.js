function convertRomanNumberToInteger(romanNumber) {
  const romanToIntegerMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanNumberArray = romanNumber.split("");

  let result = 0;

  for (let i = 0; i < romanNumberArray.length; i++) {
    const current = romanToIntegerMap[romanNumberArray[i]];
    const next = romanToIntegerMap[romanNumberArray[i + 1]];

    if (current < next) {
      result += next - current;
      i++;
    } else {
      result = result + current;
    }
  }

  return result;
}

const input = "II";
convertRomanNumberToInteger("III");
convertRomanNumberToInteger("MCMXCIV");

/*  
I-- > 1
II --> 1 + 1 = 2
III-- > 1 + 1 + 1 = 3
IV --> 5 - 1 = 4
VI --> 5 + 1 = 6 
*/
