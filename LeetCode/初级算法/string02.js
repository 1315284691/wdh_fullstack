// 整数反转
var reverse = function(x) {
    let rev = 0;
    let end = 0;
    while (x != 0) {
        end = x % 10;
        x = (x - end) / 10;
        rev = rev * 10 + end;
    }
    if (rev > Math.pow(2, 31) - 1 || rev < -Math.pow(2, 31))
        return 0;
    return rev;
};
let x = 1534236469;
console.log(reverse(x));