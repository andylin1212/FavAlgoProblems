/*
You're given two positive integers representing the height of a staircase and the maximum number of steps that you can advance up the staircase at a time. Write a function that returns the number of ways in which you can climb the staircase.

For example, if you were given a staircase of height = 3 and maxSteps = 2 you could climb the staircase in 3 ways. You could take 1 step, 1 step, then 1 step, you could also take 1 step, then 2 steps, and you could take 2 steps, then 1 step.

Note that maxSteps <= height will always be true
*/

//Solution 1: recursion with memoization
//O(n * k) time: where n is height and k is maxSteps (if no memoization will be k ^ n time complexity)
//O(n) space: max recursive calls on stack

function staircaseTraversal(height, maxSteps, visited = {}) {
  //set base cases
  if (height in visited) return visited[height]
  //one way to climb a zero height
  if (height === 0) return 1;
  if (height < 0) return 0;

  //initialize count to zero
  let count = 0;

  //iterate from 1 to max amount of steps you can take
  for (let i = 1; i <= maxSteps; i++) {
    //sum up ways to get to all steps that are height - allowed steps
    count += staircaseTraversal(height - i, maxSteps, visited)
  }

  //return
  visited[height] = count;
  return visited[height]
}


//Solution 2: iterative solution
//O(n * k) time: where n is height and k is maxSteps
//O(n) space: steps array is size of n height + 1
function staircaseTraversal(height, maxSteps) {
  //create steps array where last index is height
  let steps = new Array(height + 1).fill(0)

  //base case, steps to get to height 0 and 1 is just 1
  steps[0] = 1;
  steps[1] = 1;

  //starting at height 2 to target height
  for (let h = 2; h <= height; h++) {
    //iterate through possible amount of steps
    for (let step = 1; step <= maxSteps; step++) {
      //if not in range just continue
      if (h - step < 0) continue;
      //add ways to get to steps[h - step] to ways to current step
      steps[h] += steps[h - step]
    }
  }

  //return steps at that height
  return steps[height]
};

//Solution 3: iterative solution, sliding window
//O(n) time: traversing from 1 to height n
//O(n) space: creating a waysToTop array of height n
function staircaseTraversal(height, maxSteps) {
  let currWays = 0;
  let waysToTop = [1];

  //iterate from 1 to height
  for (let currHeight = 1; currHeight <= height; currHeight++) {
    //find prevStart of window and end of window
    let startOfPrevWindow = currHeight - maxSteps - 1;
    let endOfWindow = currHeight - 1;

    //if startOfPrevWindow >= 0, that means we are sliding window, and need to remove value at previous start
    if (startOfPrevWindow >= 0) currWays -= waysToTop[startOfPrevWindow]

    //add value at endOfWindow
    currWays += waysToTop[endOfWindow];
    //add to our array to keep track of ways to reach certain height
    waysToTop.push(currWays)
  }
  return currWays;
}