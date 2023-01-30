/*
You're given a two-dimensional array of potentially unequal height and width containing only 0's and 1's. Each 0 represents land, and each 1 represents part of a river
A river consists of any number of 1's that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size.

Not that a river can twist. It doesn't have to be a straight vertical line or a straight horizontal line. It can be L-shaped, for example

Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order
*/

/*
Concept check: Traverse matrix, and count size when 1 (a part of river) is hit.
Once a part of river is hit, explore the whole river and count its size
Need to mark each part of river as "visited" to avoid double count
*/

//Solution 1: with visited set
//O(wh) time -  explore all cells of the 2d matrix
//O(wh) space  - creating a visited set that might contain the whole matrix at worst case

function riverSizes(matrix) {
  let result = [];
  let visited = new Set();

  //traverse through matrix
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {

      //if we are on a part of river
      if (matrix[r][c] === 1) {
        //calculate whole river size and add to result
        const size = countSize(matrix, r, c, visited)
        result.push(size)
      }
    }
  }

  return result;
}

function countSize(matrix, r, c, visited) {
  //check if current index is in bounds
  const rowInbounds = r >= 0 && r < matrix.length;
  const colInbounds = c >= 0 && c < matrix[0].length;

  //if either row or col not inbounds, return size of 0
  if (!rowInbounds || !colInbounds) return 0;

  //if already visited, want to return 0;
  if (visited.has(r + ',' + c)) return 0;

  //if current cell is not part of river, return 0;
  if (matrix[r][c] === 0) return 0;

  //mark current cell as visited
  visited.add(r + ',' + c);

  //count this cell as a size 1 river
  let count = 1;

  //add to the count if any connecting parts of river are one cell above, below, left or right
  count += countSize(matrix, r - 1, c, visited)
  count += countSize(matrix, r + 1, c, visited)
  count += countSize(matrix, r, c - 1, visited)
  count += countSize(matrix, r, c + 1, visited)

  //return the total size of this river, while marking all rivers as visited
  return count;
};



//Solution 2: no extra DS, no visited set
//variation of above solution
//O(wh) time: exploring all cells
//O(wh) space: the input matrix

function riverSizesWithoutSet(matrix) {
  let result = [];

  //traverse through matrix
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {

      //if we are on a part of river
      if (matrix[r][c] === 1) {
        //calculate whole river size and add to result
        const size = countSizeWitoutSet(matrix, r, c)
        result.push(size)
      }
    }
  }
  return result;
}

function countSizeWithoutSet(matrix, r, c) {
  const rowInbounds = r >= 0 && r < matrix.length;
  const colInbounds = c >= 0 && c < matrix[0].length;

  if (!rowInbounds || !colInbounds) return 0;

  //if current cell is not part of river, return 0. current cell might also be 0 because we already visited this cell and counted as part of river
  if (matrix[r][c] === 0) return 0;

  //mark current cell as visited, no visited set but mark as 0 to indicate dont need to count again when cell being explored second time.
  matrix[r][c] = 0;

  //below same as earlier solution
  let count = 1;
  count += countSize(matrix, r - 1, c)
  count += countSize(matrix, r + 1, c)
  count += countSize(matrix, r, c - 1)
  count += countSize(matrix, r, c + 1)
  return count;
};