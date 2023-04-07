/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/*
Solution 1:
O(n ^ 2) time: concatinating string in for loop. string manipulation is O(n) in itself
O(n) space: new string
*/

function isPalindrome(s) {
  let reversedString = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i]
  }
  return s === reversedString;
}

/*
Solution 2:
O(n) time: for loop
O(n) space: new string
*/

function isPalindrome(s) {
  let reversedChars = [];
  for (let i = s.length - 1; i >= 0; i--) {
    reversedChars.push(s[i])
  }

  return s = reversedChars.join('')
}