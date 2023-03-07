/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

//Solution

function letterCombinations (digits, result = [], currCombo = "", idx = 0) {
  //if digits is empty return empty array
  if (digits.length === 0) return [];
  //if currCombo same length as digits, add that combo to result
  if (currCombo.length === digits.length) {
    result.push(currCombo)
    return;
  }

  //iterate through every corresponding char at current digit
  for (let char of map[digits[idx]]) {
    //recursively call the function with the next digit while adding current mapped char of digit to currCombo
    letterCombinations(digits, result, currCombo + char, idx + 1)
  }

  return result;
}

//supporting DS to constant map digits to characters
let map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}