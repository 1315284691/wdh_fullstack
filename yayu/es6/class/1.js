// es6 提供了class关键字
// 语法糖 其实还是原型式继承
// 像大型语言，传统面向对象的写法
// 接几招？
class Person {
    // 新的属性
   count = 0;
    constructor(name) {
        this.name = name;
    }
    sayHello () {
        return "hello,i'm " + this.name
    }
}

// const kevin = new Person('Kevin');
// es6 里可枚举怎么实现？
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
