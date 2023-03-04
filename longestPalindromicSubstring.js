/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
*/

function longestPalindrome (s) {
  let longestIndex = [0, 1];

  for (let currIdx = 1; currIdx < s.length; currIdx++) {
    let odd = getLongestPalindrome(s, currIdx - 1, currIdx + 1)
    let even = getLongestPalindrome(s, currIdx - 1, currIdx)
    let currLongest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    longestIndex = currLongest[1] - currLongest[0] > longestIndex[1] - longestIndex[0] ? currLongest : longestIndex
  }

  return s.slice(longestIndex[0], longestIndex[1])
}

function getLongestPalindrome (string, startIdx, endIdx) {
  while (startIdx >= 0 && endIdx < string.length) {
    if (string[startIdx] !== string[endIdx]) break;
    startIdx--;
    endIdx++;
  }

  return [startIdx + 1, endIdx]
}