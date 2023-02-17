/*
Given a string s, find the length of the longest substring without repeating characters.
*/

//Solution:
//O(s) time: traverse through the length of s, start is continuosly incrementing, wont delete char at same index twice
//O(n) space: extra set data structure
function lengthOfLongestSubstring (s) {
  //initialize base values
  let maxCount = 0;
  let start = 0
  let repeated = new Set();

  //traverse through word
  for (let i = 0; i < s.length; i++) {
    //check if there is repeating char
    //if there is , remove from beginning of current substring until no more repeating char
    let currChar = s[i]
    while (repeated.has(currChar)) {
      repeated.delete(s[start])
      start++
    }

    //add current char to set
    repeated.add(currChar)


    //if size of set is greater than maxCount, update the maxCount
    if (repeated.size > maxCount) maxCount = repeated.size
  }

  return maxCount
};