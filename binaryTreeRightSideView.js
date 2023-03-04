/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Concept check:
recursively call node.left first then call it on node.right.
Due to rescursion property, elements on the right will update all elements on the left
*/

//Solution
//O(n) time: all nodes in the tree
//Olog n) space: levels in the tree
function rightSideView (root) {
  //return empty array if no trees passed in
  if (!root) return []

  //initialize result array
  let result = []

  //define helper function
  function pre (node, level) {
    //base case, if node is null, simply return
    if (!node) return;
    //set index at level in result array to node.val
    result[level] = node.val;
    //call helper function on node.left first then node.right, when two nodes on same level, due to recursive property, element on right will update last thus overwrite previous updates
    pre(node.left, level + 1)
    pre(node.right, level + 1)
  }

  //call helper function
  pre(root, 0)
  return result;
}

//Supporting TreeNode definition
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }