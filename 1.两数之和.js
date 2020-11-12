/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const orders = [...nums].sort((a, b) => a - b);
  const min = target - orders[orders.length - 1];
  const max = target - orders[0];
  const currents = orders.filter((a) => a >= min && a <= max);

  while (currents.length > 1) {
    const b = currents[0];
    currents.splice(0, 1);
    const a = target - b;
    if (currents.indexOf(a) !== -1) {
      return [nums.indexOf(b), nums.lastIndexOf(a)];
    }
  }
  return [];
};
// @lc code=end

