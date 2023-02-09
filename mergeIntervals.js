/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

//Solution 1:
//O(n log n) time: need to sort the input intervals
//O(n) space: need to create a result array to merge intervals, worse case will have n intervals
function mergeIntervals(intervals) {
  //sort the intervals by start time
  intervals.sort((a, b) => a[0] - b[0])

  //create result array and initialize with first value
  let result = [intervals[0]];

  //iterate through intervals starting at 2nd value
  for (let idx = 1; idx < intervals.length; idx++) {

      //clear assignment of current interval in iteration
      let currInterval = intervals[idx]
      //assignment of last interval in resulted array for comparison
      let lastSortedInterval = result[result.length - 1]

      //if start time of currInterval is greater than end time of last interval in result array, means there is no overlap
      if (currInterval[0] > lastSortedInterval[1]) {
          //so can just add currInterval to the result array
          result.push(currInterval)
      //if there is an overlap
      } else {
          //change the end time of the last sortedInterval to the later time between current end time and end time of currInterval, then continue iteration
          lastSortedInterval[1] = Math.max(lastSortedInterval[1], currInterval[1])
      }
  }

  return result;
};