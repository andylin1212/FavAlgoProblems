/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

//Solution 1:
//O(n^2 * n!) time: upper bound - total n! permutations, n total calls to helper methods, n for newNums and newPerm
//O(n * n!) space: store n! permutation in array, all permutations have length n
function permute (nums) {
  //if no more num in nums and we appended to currPerm, add currPerm to result array
  if (!nums.length && currPerm.length) {
    result.push(currPerm)
    return;
  }

  //iterate through each num
  for (let i = 0; i < nums.length; i++) {
    //get remaining usable nums in newNums array (permutation cannot reuse current item)
    let newNums = [...nums.slice(0, i), ...nums.slice(i + 1)]
    //add curr num to the permutation
    let newPerm = currPerm.concat([nums[i]])
    //call helper function for more calls to add to permutation
    permute(newNums, newPerm, result)
  }

  return result
}