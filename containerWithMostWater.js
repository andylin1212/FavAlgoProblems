/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

//Solution:
//O(n) time:
//O(1) space

function maxArea (height) {
  //initialize return value and supporting pointers
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    //calculate water amount with current pointers
    let lowerHeight = Math.min(height[left], height[right])
    let currMax = (right - left) * lowerHeight

    //update the max water amount if current water amount is greater
    if (currMax > max) max = currMax;

    //update the pointer with lower height to potentially get a higher amount
    if (height[left] < height[right]) left++
    else right--
  }

  return max
}