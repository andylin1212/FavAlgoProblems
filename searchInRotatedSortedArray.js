/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Concept Check: either left or right half will be sorted
*/

//Solution
//O(log n) time: binary search
//O(1) space: no extra ds

function search (nums, target) {
  //initialize two pointers, 1st and last item in sorted Array
  let left = 0;
  let right = nums.length - 1;

  //while left index smaller or equal to right index, meaning we still searching
  while (left <= right) {

    //find midPoint and check its value
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid;

    //check if leftSide is sorted
    if (nums[left] <= nums[mid]) {
      //check if target contained in left side by just comparing value to nums[left] and nums[mid] since it is sorted
      if (nums[left] <= target && target <= nums[mid]) {
        //if target is here, focus on leftside
        right = mid - 1;
      } else {
        //target not here, focus on rightside
        left = mid + 1;
      }
    } else { //left side is not sorted, so right side must be
      //check if target in right side
      if (nums[mid] <= target && target <= nums[right]) {
        //it target is here, focus on rightside
        left = mid + 1;
      } else {
        //target not here, focus on leftside
        right = mid - 1;
      }
    }
  }

  //exit while loop
  return -1;
}