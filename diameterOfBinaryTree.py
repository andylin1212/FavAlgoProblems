'''
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
'''

#IMPORTANT: diameter is number of EDGES between nodes

#Solution:
#O(n) time: visit all nodes once recursively
#O(log n) space: recursion call stack

class Solution:
  def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
    #define helper function with basecase to keeptrack of 1.maxDepth and 2. maxDiameter of each note
    def helper(root):
      if root == None:
        return [0, 0]

      #find 1.maxDepth and 2.maxDiameter for left and right subtrees
      maxHeightL, longestL = helper(root.left)
      maxHeightR, longestR = helper(root.right)

      #calculate with above information the 1.maxDepth and 2.maxDiameter of this node
      maxHeight = 1 + max(maxHeightL, maxHeightR)
      longest = max(maxHeightL +  maxHeightR, longestL, longestR)

      return [maxHeight, longest]

    #call the helper function
    maxHeight, longest = helper(root)

    #return max number of edges
    return max(maxHeight - 1, longest)

