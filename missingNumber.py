"""
You're given an unordered list of unique integers 'nums' in the range '[1, n]', where 'n' represents the length of 'nums + 2'. This means that two numbers in this range are missing from the list

Write a function that takes in this list and returns a new list with the two missing numbers, sorted numerically
"""

#Solution 1: create extra ds to compare
#O(n) time: creating set and for loop iterating
#O(n) space: have set with all numbers in it

def missingNumbers(nums):
  #create a set of all nums for constant lookup
  numSet = set(nums)

  #for all numbers in range 1 to nums + 2, check if in numSet, if not add to solution
  solution = []
  for num in range(1, len(nums) + 3):
    if not num in numSet:
      solution.append(num)

  return solution

#Solution 2: find the two numbers by getting expected total of whole array and then expected totals of the 2 halfs of the array
#O(n) time:
#O(1) space:

def missingNumbers(nums):
  #find the total sum of range 1 to nums + 2
  total = sum(range(1, len(nums) + 3))

  #subtract all number from current nums list to get total missing value
  for num in nums:
    total -= num

  #calculate the average missing value and compare to expected first and second half value to get missing number exactly
  #key concept is that one value must be less than average missing value and the other must be greater than average missing value
  averageMissingVal = total // 2
  foundFirstHalf = 0
  foundSecondHalf = 0

  for num in nums:
    if num <= averageMissingVal:
      foundFirstHalf += num
    else:
      foundSecondHalf += num

  expectedFirstHalf = sum(range(1, averageMissingVal + 1))
  expectedSecondHalf = sum(range(averageMissingVal + 1, len(nums) + 3))

  return [expectedFirstHalf - foundFirstHalf, expectedSecondHalf - foundSecondHalf]