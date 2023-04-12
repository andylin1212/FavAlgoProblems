"""
Write a function that takes a positive integer represented as a string "number" and an integer "numDigits". Remove numDigits from the string so that the number represented by string is as large as possible afterwards

Note that the order of the remaining digits cannot be changed. You can assume numDigits will always be less than the length of number and greater than or equal to 0

Sample:
Input:
number =  "462839"
numDigits = 2

Output:
"6839"
"""

#Solution:
#O(n) time: n is length of number
#O(n) space: n is length of number, max length of stack

def bestDigits(number, numDigits):
  stack = []

  #iterate through all number
  for digit in number:
    #if there are still digits to remove and there are items on stack, check if last item on stack less than current digit, if it is remove last item on stack
    while numDigits > 0 and len(stack) > 0 and digit > stack[len(stack) - 1]:
      numDigits -= 1
      stack.pop()
    #add current digit to stack
    stack.append(digit)

  #might be situation where all numbers are added, but not enough numbers removed
  #remove from end of stack (the lowest numbers)
  while numDigits > 0:
    numDigits -= 1
    stack.pop()

  return "".join(stack)
