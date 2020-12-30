var removeDuplicates = function(nums) {
    nums.splice(2, 1);
    let count = 0;
    for (let i = 0; i < nums.length - count; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
            count++;
        }
    }
    return nums;
};
var nums = [0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 4, 5, 9];
var newnums = removeDuplicates(nums);
console.log(newnums.length);