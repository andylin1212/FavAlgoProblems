/*
Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
*/

//Solution:

function canPartition (nums) {
  //if sum of nums array is odd, then there is no way we can partition evenly
  let sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 === 1) return false

  //target will be half of the total sum and initialize the dp array
  let half = sum / 2;
  let dp = new Array(half + 1).fill(false)
  //base case for 0 is true
  dp[0] = true;

  //iterate through all elements of nums
  for (let num of nums) {
    //iterate from current num to target
    for (let target = half; target >= num; target--) {
      //if current value can be created or if complement value can be created, then current value needs to be true
      const complement = target - num;
      dp[target] = dp[target] || dp[complement]

      //at every iteration, check if half is true, if it is, we found a partition
      if (dp[half] === true) return true;
    }
  }

  return false;
}