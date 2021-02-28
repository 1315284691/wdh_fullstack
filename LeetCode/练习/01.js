// 两数之和
/**
 * 解法一
 * var twoSum = function(nums, target) {
        // 用对象模拟Map
        const diffs = {};
        // 记录数组长度
        var len = nums.length;
        for(let i = 0;i<len;i++){
            if(diffs[target-nums[i]] !== undefined) {
                return [diffs[target-nums[i]],i];
            }
            diffs[nums[i]] = i;
        }

    };
    var nums = [2,7,11,15], target = 22;
    console.log(twoSum(nums,target));
*/
// 解法二 哈希表
var twoSum = function(nums, target) {
    // 创建Map
    const hashMap = new Map()
    // 记录数组长度
    var len = nums.length;
    for(let i = 0;i<len;i++){
        if(hashMap.has(target-nums[i])) {
            return [hashMap.get(target-nums[i]),i];
        }
        hashMap.set(nums[i],i);
    }

};
var nums = [2,7,11,15], target = 22;
console.log(twoSum(nums,target));