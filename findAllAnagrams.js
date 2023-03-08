/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/

//Solution:
function findAnagrams (s, p) {
  let result = []
  //create anagram map with constant lookup
  let anagramMap = {};

  //iterate through substring p to populate anagramMap
  for (let i = 0; i < p.length; i++) {
    let currChar = p[i]
    if (currChar in anagramMap) {
      anagramMap[currChar]++
    } else {
      anagramMap[currChar] = 1
    }
  }

  //initialize pointer index and keep track of count
  let start = 0;
  let end = 0;
  let count = p.length

  //iterate through string
  while (end < s.length) {
    //if letter in anagramMap, decrement count and char count
    if (anagramMap[s[end]] > 0) count--;
    anagramMap[s[end]]--
    //move on to next char
    end++

    //when count is at zero, means we found a anagram
    if (count === 0) result.push(start)

    //when two pointers gap is same as substring length
    if (end - start === p.length) {
      //check if char at start is in anagramMap, if it is, need to add it back to count and char count
      if (anagramMap[s[start]] >= 0) count++;
      anagramMap[s[start]]++
      start++
    }
  }

  return result
}