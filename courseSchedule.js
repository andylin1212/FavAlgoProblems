/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.


Concept check:
need to iterate all courses because courses may not be completed connected  (course without prereqs and are not prereqs of others)
keep track of visited set because there might be a cycle
*/

function canFinish(numCourses, prerequisites) {

  //create adjacency map, key is course, values are preReqs
  let preMap = Array(numCourses).fill().map(() => [])

  for (let [crs, pre] of prerequisites) {
      preMap[crs].push(pre)
  }

  let visited = new Set();


  function dfs(crs) {
      if (visited.has(crs)) return false;
      if (preMap[crs].length === 0) return true;

      visited.add(crs)
      for (let pre of preMap[crs]) {
          if (!dfs(pre)) return false
      }

      visited.delete(crs)
      preMap[crs] = [];

      return true
  }

  for (let crs = 0; crs < numCourses; crs++) {
      if (!dfs(crs)) return false
  }

  return true;
};