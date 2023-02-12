/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Concept check: two pointer
move one pointer to node pointing at end of list(null) and other pointer nth node behind, then can remove specific node
*/

function removeNthFromEnd (head, n) {
  //initialize counter and two pointers
  let counter = 1;
  let first = head;
  let second = head;

  //move second pointer to next for n times
  while (counter <= n) {
    second = second.next;
    counter++
  }

  //if second is null, means that we should remove head of list
  if (second === null) return head.next;

  //traverse both pointers, move second pointer to node pointing at end of list
  while (second.next !== null) {
    second = second.next
    first = first.next
  }

  //first pointer will be pointing at node pointing at the nth node from end of list. remove the nth node
  first.next = first.next.next
  return head;
}