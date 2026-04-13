// 002. Add Two Numbers
// Difficulty: Medium
// Tags: Linked List, Math
// Date: 2026-04-13

function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function addTwoNumbers(l1, l2){
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry){
        const x1 = l1 ? l1.val : 0 ;
        const x2 = l2 ? l2.val : 0 ;

        const sum = x1 + x2 + carry ;
        current.next = new ListNode(sum % 10);
        current = current.next;
        carry = Math.floor(sum / 10);

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return dummyHead.next;
}

const arrToList = (arr) => {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    for(let sum of arr){
        current.next = new ListNode(sum);
        current = current.next;
    }
    return dummyHead.next;
}

const listToArr = (list) => {
    const arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr; 
}

const l1 = arrToList([2,4,3]);
const l2 = arrToList([5,6,4]);

const sr = addTwoNumbers(l1, l2);

console.log(listToArr(sr));
