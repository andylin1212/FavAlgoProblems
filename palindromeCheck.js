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
  //reverse the string, O(n) in itself for string manipulation
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i]
  }
  //compare string with its reverse
  return s === reversedString;
}

/*
Solution 2: same as solution 1 but NO string manipulation
O(n) time: for loop
O(n) space: new string
*/

function isPalindrome(s) {
  //reverse the string in an array
  let reversedChars = [];
  for (let i = s.length - 1; i >= 0; i--) {
    reversedChars.push(s[i])
  }

  //compare string with reversed string created from array
  return s = reversedChars.join('')
}

/*
Solution 3:
O(n) time: recursion stack
O(n) space: recursion stack
*/

function isPalindrome(s, i = 0) {
  const j = s.length - 1 - i;
  return i >= j ? true; s[i] === s[j] && isPalindrome(s, i + 1)
}

/*
Solution 4:
O(n) time:
O(1) space: no extra string or object
*/

function isPalindrome(s) {
  //initialize index starting on left most char and right most char
  let leftIdx = 0
  let rightIdx = s.length - 1;

  //while left index is less than right index
  while (leftIdx < rightIdx) {
    //if the characters are different, its not a valid palindrome so return false
    if (s[leftIdx] !== s[rightIdx]) return false;
    //increment the indexes
    leftIdx++;
    rightIdx--;
  }

  return true
}