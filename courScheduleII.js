/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.


Concept Check:
Difference from courseschedule in the output
II is returning ordering of course you should take to finish all courses

Topological Sort 101

*/

//O(Course + Prereques) time  nodes + edges because we are visiting all nodes along all edges
//O(course) space

function findOrder (numCourses, prerequisites) {
  //build adjacency list of preqs (adjancency map)
  let preMap = Array(numCourses).fill().map(() => [])
  for (let [crs, pre] of prerequisites) {
      preMap[crs].push(pre)
  }

  //a course has 3 possible states
  //unvisited ->rs not added to result or cycle check
  //visiting -> crs not added to result, but added to cycle check
  //visited -> crs has been added to result
  let result = [];
  let visited = new Set();
  let cycle = new Set();

  //iterate through course, if exploreCourse returns false (meaning has a cycle) return empty array
  for (let course = 0; course < numCourses; course++){
      if (!exploreCourses (preMap, course, visited, cycle, result)) return [];
  }

  //if no cycle, return result created by exploreCourses
  return result;
};

//helper function outside, need to pass all ds such as visited set
function exploreCourses (preMap, course, visited, cycle, result) {
  //set base case
  if (cycle.has(course)) return false;
  //if visited dont want to directly return false, we just want to continue
  if (visited.has(course)) return true;

  //start visiting
  cycle.add(course)

  //for all prereqs, want to explore the course
  for (let pre of preMap[course]) {
      if (!exploreCourses(preMap, pre, visited, cycle, result)) return false
  }

  //if no cycle detected, remove from visiting cycle
  cycle.delete(course)
  //add to visited
  visited.add(course)
  //add to result
  result.push(course)
  //and continue
  return true;
}