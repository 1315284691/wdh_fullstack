var plusOne = function(digits) {
    // for (let i = 0; i < digits.length - 1; i++) {
    //     if (0 <= digits[digits.length - 1 - i] && digits[digits.length - 1 - i] < 9) {
    //         digits[digits.length - 1 - i] += 1;
    //         break;
    //     } else {
    //         digits[digits.length - 1 - i] = 0;
    //         digits[digits.length - i - 2] += 1;
    //         break;
    //     }
    // }
    // if (digits[0] == 10) {
    //     digits[0] = 0;
    //     digits.unshift(1);
    // }
    // return digits;
    digits[digits.length - 1] += 1;
    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[digits.length - 1 - i] == 10) {
            digits[digits.length - 1 - i] = 0;
            digits[digits.length - i - 2] += 1;
        }
    }
    if (digits[0] == 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};
let digits = [1, 2, 2, 9, 9, 9, 9];
console.log(plusOne(digits));