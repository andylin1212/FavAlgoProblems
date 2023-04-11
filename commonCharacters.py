"""
Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ignoring multiplicity

Note that the strings are not guaranteed to only contain alphanumeric characters. The list you return can be in any order
"""

#Solution 1: count how many strings do each characters appear in
#O(n * m) time: n = number of strings, m = length of longest string
#O(c) space: c = number of unique chars across all strings

def commonChars(strings):
  charCounts = {} #create dict to count all char counts
  for string in strings:  #iterate through all strings
    uniqueStringChar = set(string)  #create uniqueChar set for each string

    #add character count to charCounts
    for char in uniqueStringChars:
      if char not in charCounts:
        charCounts[char] = 0
      charCounts[char] += 1

  #after iterating through all strings, check charCounts to see which character has counts same as length of strings, then add it to final return list
  finalChars = []
  for char, count in charCounts.items():
    if count == len(strings):
      finalChars.append(char)
  return finalChars