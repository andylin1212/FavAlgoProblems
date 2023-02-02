/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

Concept check:
Since can only move right or down from the start (or each grid), the paths to get to any block on the grid is the summation of paths to get to the block above current block and paths to get to the block to the left of current block.

There would only be one path from all blocks that have same row or column with starting block
row === 1 || col === 1, that is the base case
*/

//Solution 1: create matrix, dp
//O(m * n) time: traverse whole matrix
//O(m * n) space: create matrix
function uniquePaths(m, n) {
  //create matrix of same size, m and n.
  //fill all with 1s (important part is 1st row and 1st column are all 1s,initiated others as 1st because we will overwrite eventually)
  let grid = new Array(m).fill().map(()=> new Array(n).fill(1))

  for (let r = 1; r < m; r++) {
      for (let c = 1; c < n; c++) {
          grid[r][c] = grid[r - 1][c] + grid[r][c - 1]
      }
  }

  return grid[m - 1][n - 1]
};