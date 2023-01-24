/*
Question:

Given an array of integers nums and an integer target, return the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

expected output is a tuple of integers if found targetSum
empty array if not
*/


/*
Solution 1:
O(n) time: iterate through array once
O(n) space: worst case create an extra map containing n elements
n is length of array
*/


function twoNumberSumWithMap(array, target) {
  //use a hashtable to store correct pairings
  const pairings = {};

  //iterate through array
  //if found correct pair, return the pair of values
  for (let num of array) {
    const rightPair = target - num;
    if (rightPair in pairings) {
      return [rightPair, num]
    } else {
  //if not, store in map for future reference
      pairings[num] = true
    }
  }
  //if exit for loop and no correct pair found
  return [];
}



/*
Solution 2:
O(n * log n) time: sorted the array
O(1) space: no auxilary data structure
n is length of array
*/

function twoNumberSumFirstSort(array, target) {
  //first sort the array
  array.sort((a, b) => a - b);

  //initialize pointers at first and last index
  let left = 0;
  let right = array.length -1;

  //when left pointer on the left of right pointer, cant point to same IDX
  while (left < right) {
    const currSum = array[left] + array[right]
    if (currSum === target) {
      return [array[left], array[right]]
    // if currSum less than target, only way to increase is to move left index to right
    } else if (currSum < target) {
      left++
    //can simply be else but wrote else if statement for readability
    } else if (currSum > target) {
      right--
    }
  }

  //if exit while loop and no pair found
  return [];
}


//Test Cases

let test1 = twoNumberSumWithMap([3, 5, -4, 8, 11, 1, -1, 6], 10)   //[11, -1]
let test2 = twoNumberSumFirstSort([3, 5, -4, 8, 11, 1, -1, 6], 10)  //[-1, 11]

let test3 = twoNumberSumWithMap([14, 22], 12)    // []
let test4 = twoNumberSumFirstSort([14, 22], 12)  //  []

let test5 = twoNumberSumWithMap([-3, 2, -1, 100, -2, 3], -5)  //[-3, -2]
let test6 = twoNumberSumFirstSort([-3, 2, -1, 100, -2, 3], -5)  //[-3, -2]