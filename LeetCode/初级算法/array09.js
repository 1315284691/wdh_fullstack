// 两数之和
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
const nums = [2, 7, 11, 15];
let target = 26;
console.log(twoSum(nums, target));