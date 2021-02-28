// 面试题 合并两个有序数组
var merge = function(A, m, B, n) {
    A.splice(m,n,...B);
    return A.sort((a,b) => a-b);
};
var A = [1,2,-1,-10,8,0,0,0], m = 5,B = [2,5,6],n = 3;
console.log(merge(A, m, B, n));