/*
You're given a two-dimensional array of potentially unequal height and width containing only 0's and 1's. Each 0 represents land, and each 1 represents part of a river
A river consists of any number of 1's that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size.

Not that a river can twist. It doesn't have to be a straight vertical line or a straight horizontal line. It can be L-shaped, for example

Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order
*/

/*
Concept check: Traverse matrix, and count size when 1 (a part of river) is hit.
Once a part of river is hit, explore the whole river and count its size
Need to mark each part of river as "visited" to avoid double count
*/

//O(wh) time -  explore all cells of the 2d matrix
//O(wh) space