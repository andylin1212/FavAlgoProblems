/*
Question:
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

output[i] equal to product of every number in the input array other than input[i]

Do not solve by using division
*/



/* Concept check: What is the question REALLY asking?
Prompt statement: each element in output array = product of every other number in input array
Which means:      each element in output array = product of every element to its left * product of every element to its right * 1
*/

//O(n) time   O(n) space
//n is length of input array

function arrayOfProducts(array) {
  //initialize result array with same length as input array with all '1's
  const result = new Array(array.length).fill(1);

  //iterate from left to right, update result for each element to product of all elements on the left
  let productOfLeftElements = 1;
  for (let i = 0; i < array.length; i++) {
    result[i] = productOfLeftElements;
    productOfLeftElements *= array[i];
  }

  //then iterate from right to left, similar logic to above but for all elements on the right
  let productOfRightElements = 1;
  for (let j = array.length - 1; j >= 0; j--) {
    result[j] *= productOfRightElements;
    productOfRightElements *= array[j]
  }

  return result;
}


//Test cases

let test1 = arrayOfProducts([9, 3, 2, 1, 9, 5, 3, 2])  // [1620, 4860, 7290, 14580, 1620, 2916, 4860, 7290]
let test2 = arrayOfProducts([-1, 2, 4, 3, 2])          // [48, -24, -12, -16, -24]
let test3 = arrayOfProducts([-1, -1, -1])              // [1, 1, 1]
let test4 = arrayOfProducts([0, 2, 3, 5])              // [30, 0, 0, 0]