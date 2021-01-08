function duplicateCount(text) {
    var str = text.toLowerCase().split('').sort().join('');
    // 请得到所有数字
    // var word = '123-4560-666';
    // 正则 判断字符串是否符合规则
    // console.log(/\d+/.test(word));
    // console.log(word.match(/\d+/g));
    // 相邻的字符是一样的,
    // [a-z] 正则 表示匹配a-z中的任意一个 ()小括号表示分组 \1表示RegExp$1 g表示全局查找
    var arr = str.match(/(.)\1+/g);
    console.log(arr);
    return arr.length;

}
console.log(duplicateCount('gkjfdghafjewaifj'));