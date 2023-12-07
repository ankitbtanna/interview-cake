/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let balance = 0;
    let firstTerm = 1;
    let numberOfWeeks = Math.floor(n/7);
    let additionalDays = n%7;

    console.log("Number of weeks ", numberOfWeeks);

    if (numberOfWeeks === 0) {
      balance = n*(n+1)/2
      return balance;
    }

    for(let i = 1; i <= numberOfWeeks; i++) {
      const firstNumber = firstTerm;
      const lastNumber = firstTerm + 7 - 1;
      const numberOfDays = 7;
      
      balance = balance + numberOfDays*(firstNumber + lastNumber)/2;

      console.log(`-------- Week ${i} --------`);
      console.log('balance ', balance);
      console.log('term ', firstTerm);
      console.log('------------------------')
      firstTerm = firstTerm + 1;
    }

    console.log('Balance after full weeks ', balance);
    console.log('------------------------')

    if (additionalDays === 0) {
      return balance;
    }
    
    if(additionalDays > 0) {
      let termBase = firstTerm;
      for(let i = 1; i <= additionalDays; ++i) {
        console.log('Credited ', termBase);
        balance += termBase;
        termBase++;
        console.log("week balance ", balance)
      }
      console.log(balance);
    }

    return balance;
};

// 1 2 3 4 5 6 7 - 28
// 2 3 4 5 6 7 8 - 35
// 3 4 5 6 7 8   - 33