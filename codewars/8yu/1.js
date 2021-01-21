// 位计数
/**编写一个函数，该函数以整数作为输入，并返回该数字的二进制表示形式中等于1的位数。您可以保证输入为非负数。 */

var countBits = function(n) {
    // Program Me
    let y = 0;
    let count = 0;

    while (n !== 0) {
        y = n % 2;
        n = (n - y) / 2;
        if (y === 1) count++;
    }
    return count;
};
console.log(countBits(68));