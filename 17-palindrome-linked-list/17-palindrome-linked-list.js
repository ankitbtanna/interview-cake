class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isLinkedListAPalindrome(head) {
  const values = [];

  console.log(head.hasOwnProperty("reverse"));
  let current = head.reverse().reduce((acc, current) => {
    if (acc === null) {
      acc = new ListNode(current);
    }

    acc = new ListNode(current, acc);

    return acc;
  }, null);

  while (current.next !== null) {
    values.push(current.val);
    current = current.next;
  }
  values.push(current.val);

  const reverseValues = [...values].reverse();

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== reverseValues[i]) {
      return false;
    }
  }

  return true;
}

const head = [1, 2];

console.log(isLinkedListAPalindrome(head));
