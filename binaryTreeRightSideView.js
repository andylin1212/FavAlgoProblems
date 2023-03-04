/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Concept check:
recursively call node.left first then call it on node.right.
Due to rescursion property, elements on the right will update all elements on the left
*/

//Solution
function rightSideView (root) {
  if (!root) return []
  let result = []

  function pre (node, level) {
    if (!node) return;
    result[level] = node.val;
    pre(node.left, level + 1)
    pre(node.right, level + 1)
  }

  pre(root, 0)
  return result;
}

//Supporting TreeNode definition
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }