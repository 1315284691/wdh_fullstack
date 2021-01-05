var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        let temp = nums.pop(); //pop()删除数组最后一个元素并返回它的值，改变原数组
        nums.unshift(temp);
    }
    return nums;
};
let nums = [1, 2, 3, 4, 5, 6];
console.log(rotate(nums, 3));