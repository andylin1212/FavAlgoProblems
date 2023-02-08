/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

//Solution 1: iterative solution
//O(n + m) time: n and m are the length of the two lists
//O(1) space: merge the linkedList in place

function mergeLinkedLists(headOne, headTwo) {
  //initialize p1, p2 and a dummy prev node
  //treat list with headOne as the base branch
  let p1 = headOne;
  let p2 = headTwo;
  let p1Prev = null;

  //while both lists still have remaining values
  while (p1 && p2) {
    //if p1 value is less than p2 value
    if (p1.value < p2.value) {
      //iterate prev and p1 to the next nodes
      p1Prev = p1;
      p1 = p1.next
    //if p1 value is greater or equal to p2 value
    } else {
      //set the next of current last node of sorted linkedList to p2
      if (p1Prev !== null) prev.next = p2;
      //iterate prev and p2 and link new prev's next to p1
      prev = p2
      p2 = p2.next
      prev.next = p1;
    }
  }

  //if done traversing p1, link current tail node with remainder of headTwo list
  if (p1 === null) prev.next = p2;

  //return the list with smallest head value
  return headOne.value < headTwo.value ? headOne : headTwo;
}

//Solution 2: recursive solution
//O(n + m) time: n and m are the length of the two lists, at most n + m on the recursive stack
//O(1) space: merge sorted linkedList in place

function mergeLinkedListsRecursive(headOne, headTwo) {
  //if either one of the linkedList is null, return the other list
  if (!headOne || !headTwo) return (headOne || headTwo)
  //if headOne value is less than, set the next of headOne to the mergedLinkedList of headOne.next and headTwo
  if (headOne.value < headTwo.value) {
    headOne.next = mergeLinkedListsRecursive(headOne.next, headTwo)
    return headOne
  //otherwise, set the next of headTwo to the mergedLinkedList of headOne and headTwo.next
  } else {
    headTwo.next = mergeLinkedListsRecursive(headOne, headTwo.next)
    return headTwo
  }
}
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}