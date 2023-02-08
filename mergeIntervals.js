/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

//Solution 1:
//O(n log n) time:
//O(n) space:
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = [intervals[0]];

  for (let idx = 1; idx < intervals.length; idx++) {
      let currInterval = intervals[idx]
      let lastSortedInterval = result[result.length - 1]

      if (currInterval[0] > lastSortedInterval[1]) {
          result.push(currInterval)
      } else {
          lastSortedInterval[1] = Math.max(lastSortedInterval[1], currInterval[1])
      }
  }

  return result;
};