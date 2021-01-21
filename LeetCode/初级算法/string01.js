// 反转字符串
// var reverseString = function(s) {
//     for (let i = 0; i < s.length / 2; i++) {
//         [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
//     }
//     return s;
// };
var reverseString = function(s) {
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        [s[left], s[right]] = [s[right], s[left]];
    }
    return s;
};
let s = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(s));