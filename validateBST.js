/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Concept check:
Each BST node has a max and min allowed value, it can be determined by its parent's node's value
*/

//Solution:
//O(n) time: explore all nodes
//O(d) space: at most depth recursion calls in stack

function isValidBST (root, max = Infinity, min = -Infinity) {
  if (root === null) return true;

  if (root.val >= max || root.val <= min) return false

  return isValidBST(root.left, root.val, min) && isValidBST(root.right, max, root.val)
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}