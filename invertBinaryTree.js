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


//provided class
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}