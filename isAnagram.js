/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

//Solution 1:
//O(s + t) time: iterate through s first and then t
//O(s) space: create an extra data object of s space

function isAnagram (s, t) {
  //if different length, definitely not anagram
  if (s.length !== t.length) return false

  //create new map
  const map = new Map();

  //for string s, store character counts in map structure
  for (let i = 0; i < s.length; i ++) {
    if (!map.has(s[i])) map.set(s[i], 1)
    else map.set(s[i], map.get(s[i]) + 1)
  }

  //for string t, check if character count matches string s, when reach any inconsistency return false
  for (let j = 0; j < t.length; j++) {
    //if map structure doesnt have current character, return false
    if (!map.has(t[j])) return false
    //if curr char count is zero return false
    if (map.get(t[j]) === 0) return false
    //decrease current char count
    map.set(t[j], map.get(t[j]) - 1)
  }

  return true
}