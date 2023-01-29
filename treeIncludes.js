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

/*Solution 1: Breadth first, iterative
O(n) time: worst case explore all nodes (in this case .shift will be treated as constant time)
O(n) space: building a queue, at most all nodes
*/

function treeIncludes (root, target) {
  if (root === null) return false;

  const queue = [root];

  while (queue.length > 0) {
    const curr = queue.shift();  //will be treated as constant time, actually O(n) time each call in javascript
    //if found target value
    if (curr.val === target) return true;

    //else, add the non nulls left or right to queue for exploration
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  //if finished explore all nodes, no current nodes with target value, just return false
  return false;
}


/* Solution 2: Depth First recursive
O(n) time: exploring all nodes recursively
O(n) space: at worst case will make n layers of recursive calls
*/


function treeIncludesRecurse (root, target) {
  //null base case first
  if (root === null) return false;
  //found target value base case
  if (root.val === target) return true;

  //each node, if target value is in left OR right tree, then can return true
  return treeIncludesRecurse(root.left, target) || treeIncludesRecurse(root.right, target)
}