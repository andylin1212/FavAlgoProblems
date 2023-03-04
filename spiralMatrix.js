/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Concept check:
Traverse each "layer" from the outside one layer at a time
do not double count when startR is same as endRow or startC is same as endC
*/


//Solution
//O(n) time: total number of elements in the matrix
//O(n) space: total number of elements in the matrix
function spiralOrder (matrix) {
  //initialize variables to store result and keep track of traversal
  let result = [];
  let startR = 0;
  let endR = matrix.length - 1;
  let startC = 0;
  let endC = matrix[0].length - 1;

  //create while loop with conditions that take into account start and end might be same row/column
  while (startR <= endR && startC <= endC) {
    //traverse first row, left to right
    for (let i = startC; i <= endC; i++) {
      result.push(matrix[startR][i])
    }

    //traverse last Col, from second row to last
    for (let j = startR + 1; j <= endR; j++) {
      result.push(matrix[j][endC])
    }

    //traverse last row, from right to left
    for (let k = endC - 1; k >= startC; k--) {
      //set if condition to stop double count when startR is same as endR
      if (endR > startR) {
        result.push(matrix[endR][k])
      }
    }

    //traverse first column, from bottom up
    for (let m = endR - 1; m > startR; m--) {
      //set if condition to stop double count when startC is same as endC
      if (endC > startC) {
        result.push(matrix[m][startC])
      }
    }

    //move the row and column pointers
    startR++;
    endR--;
    startC++;
    endC--;
  }

  return result
}