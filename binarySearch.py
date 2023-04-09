"""
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
"""

#Solution 1: recursion
#O(log n) time: halfing the nums array every iteration
#O(log n) space: length of call stack

def binarySearch(nums, target):
  return binarySearchHelper(array, target, 0, len(nums) - 1)

def binarySearchHelper(nums, target, left, right):
  if left > right:
    return -1
  #finding the middle index and value
  middle = (left + right) // 2
  potentialMatch = array[middle]
  #compare target to middle value to determine next step to look
  if target == potentialMatch:
    return middle
  elif target < potentialMatch:
    return binarySearchHelper(nums, target, left, middle - 1)
  else:
    return binarySearchHelper(nums, target, middle + 1, right)


#Solution 2: two pointer
#O(log n) time: halfing the nums array every iteration
#O(1) space: no extra space
def binarySearch(nums, target):
  #initialize left and right pointers
  left = 0
  right = len(nums) - 1
  #compare target to middle value to determine next step to look
  while left <= right:
    middle = (left + right) // 2
    potentialMatch = array[middle]
    if target == potentialMatch:
      return middle
    elif target < potentialMatch:
      right = middle - 1
    else:
      left = middle + 1
  return -1