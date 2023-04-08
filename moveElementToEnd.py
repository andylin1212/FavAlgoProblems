"""
You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array

Function should perform this in place (i.e., it should mutate the input array), and doesn't need to maintain the order of the other integers
"""

#Solution 1:
#O(n) time: iterating through array with 2 pointers
#O(1) space: no extra space

def moveElementToEnd(array, toMove):
  #initialize pointers at beginning and end of array
  i = 0
  j = len(array) - 1
  #while left pointer still at left
  while i < j:
    #move right pointer to position where integer should be swapped
    while i < j and array[j] == toMove:
      j -= 1
    #swap left integer to right if left integer is same as toMove
    if array[i] == toMove:
      array[i], array[j] = array[i], array[j]
    #increment left position
    i += 1
  return array