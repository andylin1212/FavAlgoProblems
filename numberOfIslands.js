/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

//Solution:
//O(wh) time: traversing through all cells
//O(wh) space: visited set


function numIslands (grid) {
  //initialize visited set
  let visited = new Set();

  //initialize number of islands count
  let count = 0;

  //traverse through grid
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      //if successfull explore (explore === true) add one to count
      if (explore(grid, r, c, visited)) count++
    }
  }

  return count;
};

function explore(grid, r, c, visited) {
  //if element out of bounds, return false and move on
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return false;

  //if element not part of island, return false and move on
  if (grid[r][c] === "0") return false;
  //if visited land already, return false and move on
  if (visited.has(r + ',' + c)) return false;

  //add current element to visited set
  visited.add(r + ',' + c);

  //explore neighboring lands to mark all same islands
  explore(grid, r + 1, c, visited)
  explore(grid, r - 1, c, visited)
  explore(grid, r, c + 1, visited)
  explore(grid, r, c - 1, visited)

  //return true so island is counted
  return true;
}