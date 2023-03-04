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
  //set longestIndex as 1
  let longestIndex = [0, 1];

  //iterate length of s starting at 1
  for (let currIdx = 1; currIdx < s.length; currIdx++) {
    //palindrome can be odd or even elements, find both odd length and even length palindromes
    let odd = getLongestPalindrome(s, currIdx - 1, currIdx + 1)
    let even = getLongestPalindrome(s, currIdx - 1, currIdx)
    //chose currLongest as the longer of odd and even length palindrome
    let currLongest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    //update longest index if currLongest longer
    longestIndex = currLongest[1] - currLongest[0] > longestIndex[1] - longestIndex[0] ? currLongest : longestIndex
  }

  //return substring based on longestIndexes
  return s.slice(longestIndex[0], longestIndex[1])
}

//create helper function
function getLongestPalindrome (string, startIdx, endIdx) {
  while (startIdx >= 0 && endIdx < string.length) {
    //if char at two indexes are different, end while loop
    if (string[startIdx] !== string[endIdx]) break;
    //if char at two indexes same, move on to next pair of chars
    startIdx--;
    endIdx++;
  }

  //startIdx + 1 because when exit while loop, startIdx will be one idx to the left of correct substring idx
  //keep endIdx same because at the end we slice, so endIdx being one greater than correct substring idx is okay
  return [startIdx + 1, endIdx]
}