/*
Fibonacci sequence defined as follows: first number of sequence is 0, second numer is 1
nth number is the sum of the (n-1)th and (n-2)th number

Write a function that takes integer n and return nth Fibonacci number

Concept check:
1st number is F0  = 0
2nd number is F1  = 1     getNthFib(2)
*/


/*
Solution 1:
O(2^n) time: every call has 2 recursion calls, the height of max stack of recursion calls is n
O(n) space: the height of max stack of recursion calls is n
straight forward but BAD time complexity
*/

function getNthFibBASIC(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return getNthFibBASIC(n - 1) + getNthFibBASIC(n - 2)
}
/*

Solution 2:
O(n) time: O(2 * n) but remove constant
O(n) space: the height of max stack of recursion calls is n
store results in memo object to avoid duplicate calculations
*/

//initialize default memo object to include basecases
function getNthFibMemo(n, memo ={1: 0, 2: 1}) {
  if (n in memo) return memo[n];

  //store result in memo for future calls
  memo[n] = getNthFibMemo(n - 1, memo) + getNthFibMemo(n - 2, memo)
  return memo[n];
}

/*
Solution 3:
O(n) time: iterate from 3 to n
O(1) space: constant space, the tuple doesnt increase in size depending on value of n
*/

//initialize default memo object to include basecases
function getNthFibDP(n) {
  //initialize base case tuple
  let lastTwo = [0, 1]
  let counter = 3

  //iterate from 3 to n
  while (counter <= n) {
    //calculate nextFib
    let nextFib = lastTwo[0] + lastTwo[1];
    //set firstValue to prev second value
    lastTwo[0] = lastTwo[1]
    //set second value to new nextFib
    lastTwo[1] = nextFib;

    counter++
  }

  //return lastTwo[1] except when n is 1 in which we need to return 0
  return n > 1 ? lastTwo[1] : lastTwo[0]
}

//Test case
//Solution 1
let test1 = getNthFibBASIC(2)  //1
let test2 = getNthFibBASIC(8)  //13
let test3 = getNthFibBASIC(15)  //377

//Solution 2
let test4 = getNthFibMemo(2)  //1
let test5 = getNthFibMemo(8)  //13
let test6 = getNthFibMemo(15)  //377

//Solution 3
let test7 = getNthFibDP(2)  //1
let test8 = getNthFibDP(8)  //13
let test9 = getNthFibDP(15)  //377