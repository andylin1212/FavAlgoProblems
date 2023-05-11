'''
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
'''

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = deque() #create a queue

        #initialize variables
        time, fresh = 0, 0
        maxRow, maxCol = len(grid), len(grid[0])

        #prework , to update fresh oranges and add rotten oranges to queue
        for r in range(maxRow):
            for c in range(maxCol):
                if grid[r][c] == 1:
                    fresh += 1
                if grid[r][c] == 2:
                    q.append([r, c])

        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        #rotten oranges by batch and count up the minutes
        #exit rotten oranges process when there are no more rotten oranges that hasn't been processed or there are no more fresh oranges
        while q and fresh > 0:
            for i in range(len(q)):
                r, c = q.popleft()
                for dr, dc in directions:
                    nr, nc = r + dr, c + dc
                    #check if in bounds
                    if not (0 <= nr < maxRow and 0 <= nc < maxCol):
                        continue
                    #no need to process if its not a fresh tomatoe ready to be rotten
                    if grid[nr][nc] != 1:
                        continue
                    grid[nr][nc] = 2
                    q.append([nr, nc])
                    fresh -= 1
            time += 1
        return time if fresh == 0 else -1