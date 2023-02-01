/*
Given an integer array nums of unique elements, return all possible
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/


//Solution 1: iterate through nums and concat new num to all previous elements in subset
//O(n * 2^n) time: will create 2^n subsets, and for every subset, we concat array (O(n) operation)
//O(n * 2^n) space: 2^n subsets, each subset has on average n/2 elements
function subsets (nums) {
    //initialize result subsets
    const subsets = [[]];

    //iterate through nums
    for (let num of nums) {
        //save subsets.length at beginning of concatination
        let length = subsets.length;
        //iterate through subsets
        for (let i = 0; i < length; i++) {
            //push to result subsets the previous subset item concatenated with current num
            let currSubset = subsets[i]
            subsets.push(currSubset.concat(num))
        }
    }
    //return result subsets
    return subsets
};

//Solution 2:
//O(n * 2^n) time: recursion with max depth of n, each recusion call has a O(n) time concatenation
//O(n * 2^n) space: 2^n subsets, each subset has on average n/2 elements
function subsetsRecursion (nums, idx = 0, curr = [], result = []) {
  //push curr at every step, including empty array
  result.push(curr)

  //iterate through nums starting at currIdx to end of nums
  for (let i = idx; i < nums.length; i ++) {
      //create new permutation with current permutation but adding nums at i
      let newPerm = curr.concat(nums[i]);
      //call recursively passing in newPerm and increasing the index by 1
      subsets(nums, i + 1, newPerm, result)
  }

  return result;
};