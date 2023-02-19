/*
Write a function that takes in an array of integers and return a sorted version of that array. Use Quick Sort Algorithm to sort the array

Concept:
chose a pivot and partition all elements smaller than element to the left and all elements greater to the right
*/

//Solution:
//O(N log N) time:   worst case O(N ^ 2), when pivot is positioned always on the far end, so always creating one super large partition and another small partition
//O(log N) space: recursion stack

function quickSort(array) {
  //call helper passing in starting and ending Idx
  quickSortHelper(array, 0, array.length - 1)
  return array
}

function quickSortHelper(array, startIdx, endIdx) {
  //basecase of no array or array length of 1
  if (startIdx >= endIdx) return;

  //initialize pivot, left and right idx
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx

  //move elements smaller than pivot element to left side and elements larger than pivot element to right side
  while (rightIdx >= endIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(array, leftIdx, rightIdx)
    }

    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx >= array[pivotIdx]]) rightIdx--;
  }
  //swap pivot element to correct position
  swap(array, pivotIdx, rightIdx)

  //call helper function on the smaller length partitioned subarray
  let leftSubIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)
  if (leftSubIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1)
    quickSortHelper(array, rightIdx + 1, endIdx)
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx)
    quickSortHelper(array, startIdx, rightIdx - 1)
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}