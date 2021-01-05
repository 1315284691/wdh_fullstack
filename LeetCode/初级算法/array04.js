var containsDuplicate = function(nums) {
    if (nums.length != 0 && nums.length != 1) {
        nums.sort();
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }
    }
    return false;

};
let nums = [0];
console.log(containsDuplicate(nums));