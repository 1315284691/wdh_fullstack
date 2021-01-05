function ListNode(val) {
    this.val = val;
    this.next = null;
}
//  创建链表
let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(6);
let n4 = new ListNode(3);
let n5 = new ListNode(4);
let n6 = new ListNode(5);
let n7 = new ListNode(6);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
// console.log(n1);

var removeElements = function(head, val) {
    const dummy = { // 哨兵节点  假节点
        next: head
    }
    let current = dummy;
    while (current && current.next) {
        let next = current.next;
        if (next.val === val) {
            current.next = next.next;
        } else {
            current = next;
        }
    }
    return dummy.next;

};
console.log(removeElements(n1, 6));