/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Do so in-place.

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

Concept check: Ensure have enough pointers and assign in correct sequence so can keep track of previous, current and next nodes
*/



//Solution 1: iterative
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

//Solution 2: Iterative with es6
//O(n) time: iterating through all the nodes
//O(1) space: reversing in-place

function reverseLinkedList(head) {
  //initialize prev to null, last node in linkedList and curr to head of linkedList
  let [prev, curr] = [null, head]

  //while current is not null, so we still traversing original linkedList
  while (curr) {
    [curr.next, prev, curr] =  [prev, curr, curr.next]
  }

  //after exit while loop, prev will be on last node which is now head of reversed linkedList
  return prev
}

//Solution 3: recursive
//O(n) time: iterating through all the nodes
//O(1) space: reversing in-place

function reverseLinkedListRecursive(head, prev = null) {
  //set the base case where
  if (head === null) return prev;

  const next = head.next;
  head.next = prev;
  return reverseLinkedListRecursive(next, head)
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}