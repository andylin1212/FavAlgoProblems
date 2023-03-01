/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

function wordBreak (s, wordDict, startingIdx = 0, visited = {}) {
  //if startingIdx in visited set, return saved value
  if (startingIdx in visited) return visited[startingIdx]

  //if startingIdx exactly same as s length (one idx after last index of s), meaning found solution
  if (startingIdx === s.length) return true;
  //if startingIdx greater than s.length, means didnt find word so can return false
  if (startingIdx > s.length) return false;


  //iterate through all words
  for (let word of wordDict) {
    //if word is found in s at startingIdx
    if (s.indexOf(word, startingIdx) === startingIdx) {
      //recursively call wordBreak, idx changed to startingIdx + word.length which will be the startingIdx of the next word
      if (wordBreak(s, wordDict, startingIdx + word.length, visited)) {
        //if above return true, store value at visited
        visited[startingIdx] = true;
        return true;
      }
    }
  }

  //if out of loop and haven't returned true, return false
  visited[startingIdx] = false;
  return false;
}