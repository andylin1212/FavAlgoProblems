/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

//Solution 1:
function combinationSum (candidates, target) {
  //initialize return result
  let result = [];

  //define helper function
  function exploreCombo(index, target, currCombo) {
    //base case:
    //if target amount is less than zero there are no possible combinations so just return
    if (target < 0) return;
    //if target amount is exactly zero, that means combination found, and add to result
    if (target === 0) result.push(currCombo)

    //iterate from i = index, so values before currIndex not reused
    for (let i = index; i < candidates.length; i++) {
      const currCandidate = candidates[i]
      //new target amount is current target amount minus current candidate
      const remainder = target - currCandidate
      //add current candidate to currentCombo
      const newCombo = currCombo.concat(currCandidate)
      //recursively call exploreCombo with remainder ammount and newCombo
      exploreCombo(i, remainder, newCombo)
    }
  }

  //call helper function starting at index = 0 with original target and empty currCombo
  exploreCombo(0, target, [])
  return result
};


//Solution 2: Backtracking
//main changes from solution 1 in comments below, implement backtracking
function combinationSumBacktrack (candidates, target) {
  let result = [];

  function exploreCombo(index, target, currCombo) {
    if (target < 0) return;
    //need to add a copy of currCombo, cannot directly push currCombo because it is reference to currCombo array and in backtracking, we manipulate original currCombo array
    if (target === 0) result.push([...currCombo])

    for (let i = index; i < candidates.length; i++) {
      const currCandidate = candidates[i]
      const remainder = target - currCandidate

      //add current candidate to currentCombo
      currCombo.push(currCandidate)
      //recursively call exploreCombo with remainder amount and reference to same currCombo array
      exploreCombo(i, remainder, currCombo)
      //remove added candidate from currentCombo for next iteration with alternate candidate
      currCombo.pop()
    }
  }

  exploreCombo(0, target, [])
  return result
};