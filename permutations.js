/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

//Solution 1:
//O(n^2 * n!) time: upper bound - total n! permutations, n! total calls to helper methods, n for newNums and newPerm
//O(n * n!) space: store n! permutation in array, all permutations have length n
function permute (nums) {
  //if no more num in nums and we appended to currPerm, add currPerm to result array
  if (!nums.length && currPerm.length) {
    result.push(currPerm)
    return;
  }

  //iterate through each num
  for (let i = 0; i < nums.length; i++) {   //O(n) time
    //get remaining usable nums in newNums array (permutation cannot reuse current item)
    let newNums = [...nums.slice(0, i), ...nums.slice(i + 1)]
    //add curr num to the permutation
    let newPerm = currPerm.concat([nums[i]])   //O(n) time
    //call helper function for more calls to add to permutation
    permute(newNums, newPerm, result)  //O(n!) time: n! total calls to helper
  }

  return result
}

//the above solution, do we actually have to create newNums each time?

//Solution 2:
//O(n * n!) time: upper bound - n * n! to the helper method
//O(n * n!) space: store n! permutation in array, all permutations have length n

function permuteTWO (nums, i = 0, result = []) {
  //if at last index, can push copy of nums to result
  if (i === nums.length - 1) {
    result.push(nums.slice())  //O(n) time
  } else {
    //starting at index 1, swap currIdx j and i, call function again and swap back
    for (let j = i; j < nums.length; j++) {  //O(n!) total n! permutations - n! calls to helper method
      [nums[i], nums[j]] = [nums[j], nums[i]]
      permuteTWO(nums, i + 1, result)
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }
  return result
}