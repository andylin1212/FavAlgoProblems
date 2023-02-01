/*
Given an integer array nums of unique elements, return all possible
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/


//Solution 1: iterate through nums and concat new num to all previous elements in subset
function subsets (nums) {
    //initialize result subsets
    const subsets = [[]];

    //iterate through nums
    for (let num of nums) {
        //save subsets.length at beginning of concatination
        let length = subsets.length;
        //iterate through subsets
        for (let i = 0; i < length; i++) {
            //push to result subsets the previous subset item concatted with current num
            let currSubset = subsets[i]
            subsets.push(currSubset.concat(num))
        }
    }
    //return result subsets
    return subsets
};