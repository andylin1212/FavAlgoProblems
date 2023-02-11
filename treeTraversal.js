/*
Write three functions that take in a Binary Search Tree (BST) and an empty array, traverse the BST, add its nodes' values to the input array, and return that array. The three functions shoulds traverse the BST useing the in-order, pre-order, and post-order tree-traversal techniques, respectively.

If you're unfamiliar with tree-traversal techniques, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

Each BST node has an integer value, a left childe node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/null
*/

//Solution below O(n) time and O(n) space as we traverse through each node once

function inOrderTraverse(tree, array) {
  //base case if no tree
  if (!tree) return [];

  //left -> curr -> right for every node
  return [...inOrderTraverse(tree.left, array), tree.value, ...inOrderTraverse(tree.right, array)]
}

function preOrderTraverse(tree, array) {
  //base case if no tree
  if (!tree) return [];

  //curr -> left -> right for every node
  return [tree.value, ...preOrderTraverse(tree.left, array), ...preOrderTraverse(tree.right, array)]
}

function preOrderTraverseSecond(tree, array) {
  if (!tree) return array;

  //push curr, then left and then right
  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);

  return array;
}

function postOrderTraverse(tree, array) {
  //base case if no tree
   if (!tree) return [];

  //left -> right -> curr for every node
  return [...postOrderTraverse(tree.left, array), ...postOrderTraverse(tree.right, array), tree.value]
}
