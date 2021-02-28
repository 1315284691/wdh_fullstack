// bable 也是可以写的 源码分析篇

// Person class -> function new 普通调用报错?
// 转义出的代码 不可能是class function 
function _classCallCheck(instance,Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class a function');
    }
}
var Person = function Person(name) {// es5 
    // 函数的运行方式，不是new的方式
    _classCallCheck(this,Person);// 封装
    // if (this instanceof Person) {
    //     throw new TypeError('Cannot call a class a function');
    // }
    this.name = name;
}
new Person();

Person();