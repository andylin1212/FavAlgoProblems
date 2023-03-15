/*
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
*/

//Solution 1: create array of root.vals in sequence then return the kth smallest value (k - 1 to change to 0 -indexed)
//O(n) time: travese through all nodes
//O(n) space: array stores all node values

function kthSmallest (root, k) {
  //create array of root.vals in order
  const inorderArray = inorderTraverse(root)

  //return kth smallest value, k - 1 because array is 0-indexed
  return inorderArray[k - 1]
}

//helper function to create inorderTraverse array
function inorderTraverse(root) {
  if (!root) return []
  return [...inorderTraverse(root.left), root.val, ...inorderTraverse(root.right)]
}