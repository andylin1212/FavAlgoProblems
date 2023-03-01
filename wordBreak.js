/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

function wordBreak (s, wordDict, startingIdx = 0, visited = {}) {
  if (startingIdx in visited) return visited[startingIdx]

  if (startingIdx === s.length) return true;
  if (startingIdx > s.length) return false;

  for (let word of wordDict) {
    if (s.indexOf(word, startingIdx) === startingIdx) {
      if (wordBreak(s, wordDict, startingIdx + word.length, visited)) {
        visited[startingIdx] = true;
        return true;
      }
    }
  }

  visited[startingIdx] = false;
  return false;
}