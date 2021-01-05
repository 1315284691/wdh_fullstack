var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= prices[i + 1]) {
            profit += (prices[i + 1] - prices[i]);
        }
    }
    console.log(profit);
    return profit;
};
var prices = [1, 2, 8, 4, 5, 6];
maxProfit(prices);