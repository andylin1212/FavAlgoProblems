/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/


/*
Solution 1:
O(N * c) time    for each amount, we do a for loop of all possible coins. memoizing for all possible amounts
O(N) space       memoizing all possible amounts
*/
function coinChange (coins, amount, memo = {}) {
  //base cases
  if (memo[amount]) return memo[amount];
  //if amount less than zero, meaning this combination is invalid, so return -1
  if (amount < 0) return -1;
  //if amount is equal to zero, means succesful case reached, 0 ways to create amound of 0 with these coins
  if (amount === 0) return 0;

  //initialize min amount of coins to arbitrarily large value
  let minCoins = Infinity;

  //iterate for each coin
  for (let coin of coins) {
      const remainAmount = amount - coin;
      //calculate minCoins for remainder amount
      const remainCoinCount = coinChange(coins, remainAmount, memo)
      //if not equal to -1, meaning its poosible
      if (remainCoinCount !== -1) {
          //want to update minCoins to smaller of current minCoins or 1 + minCoins of remainder amount
          minCoins = Math.min(minCoins, 1 + remainCoinCount)
      }
  }

  //outside for loop, if minCoins still Infinity, meaning there are no possible combinations, so we store -1 instead
  //store the minCoins for amount in memo
  memo[amount] = minCoins === Infinity ? -1 : minCoins;
  return memo[amount]
};



