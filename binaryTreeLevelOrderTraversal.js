/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Sample output: [[3],[9,20],[15,7]]
              each record is all nodes in a level
*/

//Solution 1 BFS with queue keeping track of level:
//O(n) time: traversing all nodes
//O(n) space: output array has n length items

function levelOrder (root) {
  if (!root) return [];

  let result = [];
  let queue = [[root, 0]]

  while (queue.length > 0) {
    const [currNode, currLevel] = queue.shift(); //technically another O(n)

    if (!result[currLevel]) {
      result[currLevel] = []
    }
    result[currLevel].push(currNode.val)

    if (currNode.left) queue.push([currNode.left, currLevel + 1])
    if (currNode.right) queue.push([currNode.right, currLevel + 1])
  }

  return result
}

//Solution 2: BFS, creating level array and pushing it to result
//O(n) time: traversing all nodes
//O(n) space: output array has n length items

function levelOrderTwo (root) {
  if (!root) return [];
  let result = []
  let queue = [root]

  while (queue.length > 0) {
    let qLength = queue.length;
    let level = []

    for (let i = 1; i <= qLength; i++) {
      let currNode = queue.shift();
      level.push(currNode.val)

      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
    }
    result.push(level)
  }
  return result;
}

//Node function
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }