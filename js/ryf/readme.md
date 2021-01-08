- 阮一峰

    1.JS的变量的数据类型由值决定,
    常量的话， es6以前没有常量  只有var
    - 类型不能改变
    - 简单类型不可变的，复杂数据类型的值是可以改变的
    - 数据类型：字符串 数值型 布尔值 undefined null symbol 对象（数组，函数）

    2.typeod [1,2,3] 如何知道是数组？
    区分简单数据类型和复杂数据类型
    复杂数据类型之中有函数类型function
    typeof可以正确（细致）得到数据类型
    number string boolean null undefined symbol object(array, function)

    3.Object.prototype.toString.call() 核心
    Object 是谁？ 所有对象的原型对象? 这种机制怎么构建起来？
    prototype 是什么？
    call 借
- call apply 借用方法, fn.call(绑定this,参数1，参数2,...) fn.apply(绑定this,[参数1，参数2,...])

- 继承的几种方式
    1. 基于构造函数继承
    2. prototype模式
    3. 直接继承prototype
    4. 利用空对象作为中介

    2和3相比，3的效率比较高（不用建立和执行Animal的实例了）,缺点是Cat.prototype和Animal.prototype都指向同一个对象，
    在理解上有点不妥，会改变父类的原型对象