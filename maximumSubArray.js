/* Question
Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/

/*O(n) time and O(1) space
  iterating throught the array once, keeping track of the maxSUm
*/

/*Concept Check:
  take note of input and output requirements, output only expect maximum Subarray Sum (one single value) and not the subArray

  be aware of negative values, you cant completely ignore them for test cases like below
  [30, -20, 50, 4]

  the answer here (64) includes the -20
  [30, -20] is a net positive contribution to potential result
*/

function maxSubArray (nums) {
  //initialize maxSum to first value
  let maxSum = nums[0];

  //iterate starting from idx = 1;
  for (let i = 1; i < nums.length; i++) {
    //at every iteration, the maxSubArraySum is either nums[i], or nums[i] + the maxSubArraySum of nums[i - 1]
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];

    //after determining maxSubArraySum for nums[i], compare that to the result maxSum, update if current maxSubArraySum is greater
    if (nums[i] > maxSum) maxSum = nums[i]
  }

  //return result maxSum
  return maxSum;
};

//Test Cases

let test1 = maxSubArray([5, 4, -1, 7, 8])     // 23
let test2 = maxSubArray([30, -20, 50, 4])     // 64
let test3 = maxSubArray([-2, -3, 0, -4, -5])  // 0
let test4 = maxSubArray([2, 2, 2, -1000, 1001])  //1001
