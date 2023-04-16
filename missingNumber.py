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
#O(n) time: iterating through nums list (not nested loops)
#O(1) space: no extra ds

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

#Solution 3: using Bit XOR
#O(n) time: iterating through for loops
#O(1) space: no extra DS just variable storage

def missingNumbers(nums):
  #XOR all values in nums, and also XOR all values we EXPECT in nums if no missing numbers
  #find XOR in two missing numbers
  solutionXOR = 0

  for i in range(0, len(nums) + 3):
    solutionXOR ^= i

    if i < len(nums):
      solutionXOR ^= nums[i]

  #find bit that is Set in solution XOR, one number will be set, the other wont be
  solution = [0, 0]
  setBit = solutionXOR & -solutionXOR

  #one number will be set in Setbit and the other wont
  for i in range(0, len(nums) + 3):
    if i & setBit == 0:
      solution[0] ^= i
    else:
      solution[1] ^= i

    if i < len(nums):
      if nums[i] & setBit == 0:
        solution[0] ^= nums[i]
      else:
        solution[1] ^= nums[i]

  #sort our solution and return
  return sorted(solution)