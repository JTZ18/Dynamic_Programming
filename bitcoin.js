/**
 * You are new to the bitcoin market, and you would like to earn some cash from
investing in bitcoins. Suppose you are given an array A[1...n] where A[i] is the price in dollars
of 1 bitcoin on the i-th day, and an array T[1..n] where T[i] represents the transaction fee
(in dollars) on the i-th day. (You may assume that the numerical entries of A and T satisfy
0 < T[i] < A[i] for all 1 ≤ i ≤ n.) Due to strict regulations imposed by the cryptocurrency
exchange platform, you have the following constraints:
• Each day, you can have at most one transaction. A transaction involves either buying
exactly 1 bitcoin, or selling any integer number of bitcoins that you own, but not both.
You cannot both buy and sell on the same day. (You can choose to have no transaction,
if you wish.)
• On the i-th day, if you choose to have a transaction that involves buying, then you can buy
exactly 1 bitcoin, at the price of A[i] dollars. You are not allowed to buy any fractional
amount of a bitcoin, and you cannot buy more than 1 bitcoin.
• On the i-th day, if you choose to have a transaction that involves selling k bitcoins (k ≥ 1),
then you would have to pay a single transaction fee of T[i] dollars, and the overall cash
you get in dollars for the i-th day would be (k · A[i]) − T[i]. (You can choose to sell any
integer number of bitcoins that you already have in possession. You don’t have to sell all
your bitcoins. You cannot sell bitcoins that you do not own.)
After the end of n days, what is the maximum profit in cash you can achieve? Please note that
bitcoin is not cash. If you only buy bitcoins and never sell bitcoins, then your profit will be
negative, even if you have multiple bitcoins. You need to “cash-out” the bitcoins and pay the
necessary transaction fees, for the overall cash you received to be counted towards your profit.
 */

// Design an algorithm to solve the problem with dynamic programming.
// The problem is to find the maximum profit in cash you can achieve.

const bitcoin = (i, A, T, memo={}) => {


}