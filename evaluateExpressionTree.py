"""
Given a binary expression tree. Write a function to evaluate this tree mathematically and return a single resulting integer

All leaf nodes in tree represent operands, which will always be positive integers. All the other nodes represent operands, which will always be positive integers. All of the other nodes represents operators, each will be a negative integer

-1 = Addition: adding left and right subtrees
-2 = Subtraction: subtracting right subtree from left subtree
-3 = Division: dividing left subtree by right subtree (rounded to integer)
-4 = Multiplication: multiply left and right subtree

Can assume tree will always be a valid expression tree. Each operator also works as grouping symbol, meaning bottom of the tree is always evaluated first, regardless of the operator
"""

#Solution 1:
#O(n) time: visiting all nodes
#O(h) space: logn - the height is the max length of the call stack
def evaluateExpressionTree(tree):
  #if we reach positive value, return the value (all positive values are operands)
  if tree.value >= 0:
    return tree.value

  #curr tree must be operator at this point
  #know we need to evaluate left and right, recursively call function to obtain left and right values so bottom of tree is always evaluated first
  leftVal = evaluateExpressionTree(tree.left)
  rightVal = evaluateExpressionTree(tree.right)

  #evaluate left and right value based on operator and return the value
  if tree.value == -1:
    return leftVal + rightVal
  if tree.val == -2
    return leftVal - rightVal
  if tree.val == -3:
    return int(leftVal / rightVal)
  return leftVal * rightVal

#Supporting class
class BinaryTree:
  def __init__(self, value, left = None, right = None):
    self.value = value
    self.left = left
    self.right = right