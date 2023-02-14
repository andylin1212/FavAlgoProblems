/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

//Solution
//O(n) time: iterate through the days
//O(1) space: no extra space

function maxProfit(prices) {
  //initialize values
  let maxProfit = 0;
  let currMin = prices[0]

  //iterate through days starting at second day
  for (let day = 1; day < prices.length; day++) {
    let currPrice = prices[day]
    //if current sell price greater than lowest buy price before current day, compare the profit to current maxProfit. Only update maxProfit if current buy/sell combination is greater
    if (currPrice - currMin > maxProfit) maxProfit = currPrice - currMin;
    //keep track of lowest buy price relative to current sell price
    currMin = Math.min(currMin, currPrice)
  }

  return maxProfit;
}