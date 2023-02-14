/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

//Solution:
//O(n) time: visit all nodes in tree, n is nodes
//O(log n) space: height of tree

function lowestCommonAncestor (root, p, q) {
  //base case, if there is no node return null
  //if currNode value equal to p or q's value, return current node
  if (!root || root.val === p.val || root.val === q.val) return root

  //find the LCA in root.left and root.right
  let resL = lowestCommonAncestor(root.left, p, q)
  let resR = lowestCommonAncestor(root.right, p, q)

  //if both resL and resR have return values, meaning current root is the LCA
  //if not both have return values, return either resL or resR that has value, or null if both p and q were not found
  return (resL && resR) : root : (resL || resR)
}