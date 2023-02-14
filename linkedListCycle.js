/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Concept: if traverse through linkedList with two pointers, fast moving twice as fast as head (1 extra node compared to head). fast and head would eventually land on same node if there is a cycle.
*/


//Solution
//O(n) time: traverse through linkedList
//O(1) space

function hasCycle (head) {
  //set another pointer called fast
  let fast = head;

  //while we dont reach end of linked list, if exit while loop meaning a node is pointing to null, thus there is not a cycle
  while(fast && fast.next) {
    //traverse head by one node and fast by 2 nodes
    head = head.next;
    fast = fast.next.next;

    //if head and fast are the same node, means fast caught up to head in the cycle
    if (head === fast) return true;
  }

  return false;
}