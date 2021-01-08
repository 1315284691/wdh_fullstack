var intersect = function(nums1, nums2) {
    var newArray = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                newArray.push(nums1[i]);
                nums1.splice(i, 1); // 暴力解法 直接删除共同元素
                nums2.splice(j, 1);
                i--;
                j--;
                break;
            }
        }
    }
    return newArray;
};
let nums1 = [1, 1, 2, 3, 5, 8, 3],
    nums2 = [3, 2, 8, 1, 3, 6, 1];
console.log(intersect(nums1, nums2));