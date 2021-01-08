var singleNumber = function(nums) {
    let res = 0;
    nums.forEach(element => {
        res = res ^ element;
    });
    return res;
};
let nums = [1, 1, 8, 9, 9, 7, 6, 6, 7];
console.log(singleNumber(nums));