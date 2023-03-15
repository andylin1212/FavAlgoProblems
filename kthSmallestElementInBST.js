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

//Solution 2:
//O(h + k) time: recursive down explore to left most node (O(h)), then explore k nodes from left most node (O(k))
//O(h) space: recursive call stack

function kthSmallest (root, k) {
  //create treeInfo to pass along info
  let treeInfo = new TreeInfo(0, -1)

  //call helper function to explore tree and UPDATE treeInfo
  inorderTraverseExplore(root, k, treeInfo)

  return treeInfo.lastVisited;
}

//helper function to explore tree
function inorderTraverseExplore (root, k, treeInfo) {
  //base case if reach null root node or if numVisited equal to or greater than k, no need to update treeInfo further and return
  if (!root || treeInfo.numVisited >= k) return;

  //explore left side of tree
  inorderTraverseExplore(root.left, k, treeInfo)
  //if numVisited less than k, means still need to update treeInfo
  if (treeInfo.numVisited < k) {
    //add to numVisited and update lastVisited
    treeInfo.numVisited += 1;
    treeInfo.lastVisited = root.value;
    //then explore right side of tree if still needed
    inorderTraverseExplore(root.right, k, treeInfo)
  }
}

class TreeInfo {
  constructor (numVisited, lastVisited) {
    this.numVisited = numVisited;
    this.lastVisited = lastVisited
  }
}


//supporting TreeNode class
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }