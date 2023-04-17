"""
Write a function that takes in two non-empty arrays of integers, find the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position

Note that the absolute difference of two integers is the distance between them one the real number line. For example, absolute different of -5 and 5 is 10, and the absolute different of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest difference
"""

#Solution: two pointer after sorting array
#O(nlog(n) + mlog(m)) time: sorting both arrays
#O(1) space: different variables needed but no other DS needed
def smallestDifference(arrayOne, arrayTwo):
  #sort the input arrays
  arrayOne.sort()
  arrayTwo.sort()

  #assign initial values for index pointers, smallest difference, and smallestPair
  idxOne = 0
  idxTwo = 0
  smallest = float("inf")
  current = float("inf")
  smallestPair = []

  #starting at both index = 0, for every pair of the sorted array, we explore all possible solutions by finding if number at arrayOne or arrayTwo is smaller, then increasing the index of the smaller number for next possible pair
  while idxOne < len(arrayOne) and idxTwo < len(arrayTwo):
    firstNum = arrayOne[idxOne]
    secondNum = arrayTwo[idxTwo]

    if firstNum < secondNum:
      current = secondNum - firstNum
      idxOne += 1
    elif secondNum < firstNum:
      current = firstNum - secondNum
      idxTwo += 1
    else:
      return [firstNum, secondNum]

    #update smallest difference and smallest pair if current different is smaller than smallest difference thus far
    if smallest > current:
      smallest = current
      smallestPair = [firstNum, secondNum]

  return smallestPair