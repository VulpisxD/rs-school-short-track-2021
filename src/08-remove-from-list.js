/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let listNode = { ...l };
  let head = listNode;
  let prev = null;

  while (listNode) {
    if (head.value === k) {
      head = listNode.next;
      listNode = listNode.next;
      prev = listNode;
    } else if (listNode.value === k) {
      prev.next = listNode.next;
      listNode = listNode.next;
    } else {
      prev = listNode;
      listNode = listNode.next;
    }
  }
  return head;
}

module.exports = removeKFromList;
