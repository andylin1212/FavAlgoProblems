/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Concept Check: understand what the problem is asking. Need to move all reds to beginning of list and blue to end of list in place, then white will be sorted too
*/

//Solution:
//O(n) time:
//O(1) space:  no extra data structure

function sortColors (nums) {
  //initialize pointer to traverse through array
  let pointer = 0;
  //initialize red pointer at beginning and blue pointer at end of array
  let redIdx = 0;
  let blueIdx = nums.length - 1;

  //while pointer is not greater than blue pointer
  while (pointer <= blueIdx) {
    //get current color
    const currColor = nums[pointer]

    //if currColor is red
    if (currColor === 0) {
      //swap the currColor to where the redIdx is suppose to be
      [nums[redIdx], nums[pointer]] = [nums[pointer], nums[redIdx]]
      //move redIdx to next position where red should be
      redIdx++;
      //traverse to next pointer
      pointer++;
      //if currColor is white, just move on to next
    } else if (currColor === 1) {
      pointer++
      //if currColor is blue
    } else {
      //swap currColor to where blue is suppose to be
      [nums[blueIdx], nums[pointer]] = [nums[pointer], nums[blueIdx]]
      //move blueIdx to next position where blue should be
      blueIdx--;
    }
  }

  return nums;
}