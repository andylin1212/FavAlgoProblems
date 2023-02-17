/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Sample output: [[3],[9,20],[15,7]]
              each record is all nodes in a level
*/

//Solution 1:

function levelOrder (root) {
  if (!root) return [];

  let result = [];
  let queue = [[root, 0]]

  while (queue.length > 0) {
    const [currNode, currLevel] = queue.shift();

    if (!result[currLevel]) {
      result[currLevel] = []
    }
    result[currLevel].push(currNode.val)

    if (currNode.left) queue.push([currNode.left, currLevel + 1])
    if (currNode.right) queue.push([currNode.right, currLevel + 1])
  }

  return result
}

//Solution 2:


//Node function
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }