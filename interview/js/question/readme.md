# js 有没有可能
a
console.log(a == 1 && a == 2 && a == 3) // true 

null是对象吗？ typeof null //object
JS存在一个bug， 最初版本中使用的是32系统
二进制, 前面的几位用来标明类型
undefined null 
{} 3位 000 Object 
typeof 3位
为了性能考虑变量的类型信息 000 Object
Object.prototype.toString() // 类型转换

# '1'.toString{}