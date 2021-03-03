// 隐式类型转换
// 当一侧操作数为string类型时，会优先将另一侧转换成字符串类型
console.log(1 + '2');
// 当一侧操作数为number类型，另一侧会变成number
console.log(1 + true);
// 为number类型，另一侧为引用类型
console.log(1 + {});
console.log(3*{valueOf: function() { return 5}});
