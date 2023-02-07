/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Do so in-place.

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

Concept check: Ensure have enough pointers and assign in correct sequence so can keep track of previous, current and next nodes
*/



//Solution 1:
//O(n) time: iterating through all the nodes
//O(1) space: reversing in-place


function reverseLinkedList(head) {
  //initialize end of linkedList and last node before null
  let prev = null
  let curr = head;
  let next;

  //while we don't reach original end of linked list, we perform reversal
  while (curr !== null) {
    //put pointer on next node that needs to be reversed
    next = curr.next;
    //reverse curr node to point to prev
    curr.next = prev;
    //move prev pointer to point to curr node for next iterations
    prev = curr
    //move curr pointer to next node for next iteration
    curr = next
  }

  //after exit while loop, prev will be on last node which is now head of reversed linkedList
  return prev
}


class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}