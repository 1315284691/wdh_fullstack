var moveZeroes = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length - count; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            count++;
        }
    }
    return nums;
};
const nums = [0, 3, 5, 9, 6, 0, 2, 0];
console.log(moveZeroes(nums));