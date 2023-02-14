/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

//Solution 1: Iterative
//O(H) time: O(log n), H is height of tree
//O(1) space: no extra space
function lowestCommonAncestor (root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right
    } else {
      break;
    }
  }
  return root;
}

//Solution 2: Recursive



function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }