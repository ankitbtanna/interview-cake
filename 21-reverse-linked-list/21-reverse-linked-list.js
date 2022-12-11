class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseLinkedList(llElements) {
  const reversed = llElements.reverse();
  let head = reversed.reduce((acc, curr) => {
    if (acc === null) {
      acc = new ListNode(curr);
    }
    acc = new ListNode(curr, acc);
    return acc;
  }, null);

  console.log(head);

  let temp = null;
  let newHead = null;
  while (head !== null) {
    temp = head;
    head = head.next;
    temp.next = newHead;
    newHead = temp;
  }

  console.log(temp);
}

reverseLinkedList([1, 2, 3, 4, 5]);
