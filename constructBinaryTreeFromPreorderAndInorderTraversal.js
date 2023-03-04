/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
*/

//Solution

function buildTree (preorder, inorder) {
  //base case when either of the two arrays is empty, reach null node
  if (preorder.length === 0 || inorder.length === 0) return null;

  //first root is first element in preorder array
  let root = new TreeNode (preorder[0])
  //find the first element in inorder array
  let mid = inorder.indexOf(preorder[0])
  //pass the corresponding arrays to recursively call function for root.left and root.right
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid)) //preorder array 1st element is already used, and need to include element at mid, inorder needs to exclude element at mid since it is the root.val
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))  //preorder array start at mid + 1 till end, mid element part of root.left. Inorder needs to exclude element at mid since it is the root.val

  return root
}

//Supporting TreeNode class
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }