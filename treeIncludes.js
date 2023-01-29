/*
Given a tree and target value. Return rather a node of target value is contained in the tree
*/

//Node setup
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Solution 1: Breadth first, iterative
