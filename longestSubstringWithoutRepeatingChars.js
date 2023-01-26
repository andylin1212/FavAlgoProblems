/*
Questions:
Given a string s, find the length of the longest substring without repeating characters.
*/

//Concept Check: a variation of the sliding window technique
//O(n) time   O(n) space

function lengthOfLongestSubstring(s) {
   let maxCount = 0;
   let start = 0;
   let repeated = new Set();

   //
   for (let i = 0; i < s.length; i++) {
      let currChar = s[i]

      //if set already has currChar, need to delete from beginning of set Subarray
      //and check after every deletion if currChar still in the set, meaning there is still duplicate chars in subArray
      //exit while loop after no repeating chars
      while (repeated.has(currChar)) {
          repeated.delete(s[start])
          start++;
      }

      //add currChar to set
      repeated.add(currChar)

      //if length of current subarry with no repeating chars greater than maxCount, update maxCount
      maxCount = Math.max(maxCount, i - start + 1)
   }

   return maxCount;
};


//Test Cases
let test1 = lengthOfLongestSubstring('aabbaca') //3
let test2 = lengthOfLongestSubstring('aaaa')  //1
let test3 = lengthOfLongestSubstring('ccacdefff') //5
let test4 = lengthOfLongestSubstring('') //0
