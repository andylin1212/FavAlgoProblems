/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

//Solution 1:
//O(r * c * 4^w) time: r and c are row and column and w is the length of the word. 4^w is the time complexity for the dfs
//O(r * c + w) space
function exist (board, word) {
  //no need to check if no word provided
  if (word.length === 0) return false;
  let visited = new Set();

  //traverse the grid for starting letter
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      let currChar = board[r][c]

      //if character on grid same as starting letter
      if (currChar === word[0]) {
        //explore the word, return true if true
        if (exploreWord(r, c, 0)) return true;
      }
    }
  }

  //if explored grid and did not find match, return false
  return false;


  //helper function
  function exploreWord(r, c, idx) {
    //if idx at word.length, that means we found the word so return true;
    if (idx === word.length) return true;

    let rowInbounds = r >= 0 && r < board.length;
    let colInbounds = c >= 0 && c < board[0].length;

    //if already visited grid or out of bounds can just return false
    if (!rowInbounds || !colInbounds) return false;
    if (visited.has(r + ',' + c)) return false

    //if char on grid same at letter in word at idx
    if (word[idx] === board[r][c]) {
      //add current grid position to visited
      visited.add(r + ',' + c)
      //explore the four positions on grid adjacent to current position
      //if any of the positions lead to a true, return true
      if (exploreWord(r + 1, c, idx + 1)) return true;
      if (exploreWord(r - 1, c, idx + 1)) return true;
      if (exploreWord(r, c + 1, idx + 1)) return true;
      if (exploreWord(r, c - 1 , idx + 1)) return true;
      //delete grid position from visited
      visited.delete(r + ',' + c)
    }

    //correct word not found at this starting position
    return false
  }
}