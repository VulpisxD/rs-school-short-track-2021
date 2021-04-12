// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

 class Queue {
  constructor() {
    this.front = null;
    this.end = null;
    this.queue = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (!this.queue) {
      this.front = newNode;
      this.end = newNode;
      this.queue = newNode;
    } else {
      newNode.next = this.queue;
      this.queue = newNode;
      this.end = newNode;
    }
    this.length++;
    return this.queue;
  }

  dequeue() {
    let outElem = null;
    if (this.queue) {
      outElem = this.front.value;
      this.front = this.queue.next;
      this.queue = this.front;
      this.length--;
    }
    return outElem;
  }
}


module.exports = Queue;
