/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/


/*
*/
function coinChange (coins, amount, memo = {}) {
  if (memo[amount]) return memo[amount];
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  let minCoins = Infinity;

  for (let coin of coins) {
      const remainAmount = amount - coin;
      const remainCoinCount = coinChange(coins, remainAmount, memo)
      if (remainCoinCount !== -1) {
          minCoins = Math.min(minCoins, 1 + remainCoinCount)
      }
  }

  memo[amount] = minCoins === Infinity ? -1 : minCoins;
  return memo[amount]
};



