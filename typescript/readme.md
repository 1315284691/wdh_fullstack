- vscode 是用typescript 写出来
- js 的超集 弱类型语言
    没有Java 静态的编译能力  先编译 后运行
- 在阿里 大型项目用ts代替js
    给js 加上类型约定
- stylus 
    写的是ts，最后运行的是js

- html 不再是html，字符串模板 ``,
- css 不再是css stylus / sass /less
- js 不再是js  ts

1.type 为何？
    ts 就是在js 的基础上， 做一线类型相关
    users forEach
    严谨一些
    数据是users 每个用户的数据不一样的话
    forEach 会产生问题

- 提前分析js 里最容易出错的地方，
    用接口或自定义类来严格要求
- 数据源都给他加上自定义类型定义
- unknown ts 的关键字
- ? 有或没有都可以
- | 类型
- 在user表达类型， 有一两个字段是不一样的 可以用 | 拼接起来
    实现类型的二选