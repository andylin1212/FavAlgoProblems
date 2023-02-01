/*
Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

Each Binary Tree node has an integer value, a left child node, and a right child node. Children nodes can either be Binary Tree nodes themselves or null;

Concept check:
Break down the problem in pseudocode first, define base case and implement in code.
*/

/*
Solution 1: recursion
O(n) time: visiting all nodes
O(d) space: depth space, at most there are depth recursive stacks
*/

function invertBinaryTree(tree) {
  //if tree is null, just return, no need to invert it
  if (tree === null) return;

  //swap the left and right tree
  [tree.left, tree.right] = [tree.right, tree.left]

  //after left and right swapped, invert the new tree.left and then the new tree.right
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)

  return tree;
}

/*
Solution 2: queue, BFS to invert each node
O(n) time: visiting all nodes
O(n) space: at worse all nodes can be in the queue
*/

function invertBinaryTreeQueue(tree) {
  //initialize queue with root node
  let queue = [tree]

  //terminate case is when no more nodes in queue
  while (queue.length) {
    //shift the current queue, technically O(n) in JS
    let current = queue.shift();

    //if current node is null, move on to next node in queue
    if (current === null) continue;

    //swap the left and right tree of current node
    [current.left, current.right] = [current.right, current.left]

    //add left and right tree to queue
    queue.push(current.left)
    queue.push(current.right)
  }

  return tree;
}


//provided class
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}