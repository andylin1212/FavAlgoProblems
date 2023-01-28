/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.


Concept check:
need to iterate all courses because courses may not be completed connected  (course without prereqs and are not prereqs of others)
keep track of visited set because there might be a cycle
*/

/*
O(Course + Prereq) time: nodes + edges time because we visit every node by moving along each edge
O(course) for space
*/


function canFinish(numCourses, prerequisites) {

  //create adjacency map, key is course, values are preReqs
  //initialize to all empty arrays
  let preMap = Array(numCourses).fill().map(() => [])

  for (let [crs, pre] of prerequisites) {
      preMap[crs].push(pre)
  }

  //create a visited set to avoid loops
  let visited = new Set();


  //helper func for dfs of each course
  //declared function inside canFinish so no need to pass additional ds such as visited set
  function canFinishCourse(crs) {
      //base cases: 1. if we visited already, we failed, theres a loop, 2. if course has no prereqs we must be able to take this course, so return true
      if (visited.has(crs)) return false;
      if (preMap[crs].length === 0) return true;

      //if doesnt hit base case, mark this course as visited
      visited.add(crs)

      //for each of the prereqs, recursively call if canFinishCourse, if cannot, return false immediately, we reached a loop
      for (let pre of preMap[crs]) {
          if (!canFinishCourse(pre)) return false
      }

      //after that move up a level in recursion call, so we no longer visiting this
      visited.delete(crs)
      //know this course can be visited so set preMap[crs] to [] so if we run canFinishCourse on this again, can hit basecase and return 0
      preMap[crs] = [];

      return true
  }

  // call helper func canFinishCourse, loop all courses because courses might not be completely connected. e.g prerequisities = [[0, 1], [2, 3]]
  for (let crs = 0; crs < numCourses; crs++) {
      if (!canFinishCourse(crs)) return false
  }

  return true;
};


//Test cases

let preReq1 = [[0, 1], [1, 0]]
let preReq2 = [[1, 0]];
let preReq3 = [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]]
let preReq4 = [[0, 1], [2, 3]]


let test1 = canFinish(2, preReq1)   // false
let test2 = canFinish(2, preReq2)   // true
let test3 = canFinish(5, preReq3)   // true
let test4 = canFinish(4, preReq4)   // true