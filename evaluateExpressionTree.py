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

def evaluateExpressionTree(tree):


#Supporting class
class BinaryTree:
  def __init__(self, value, left = None, right = None):
    self.value = value
    self.left = left
    self.right = right