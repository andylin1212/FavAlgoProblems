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
function staircaseTraversal(height, maxSteps) {
  let steps = new Array(height + 1).fill(0)

};