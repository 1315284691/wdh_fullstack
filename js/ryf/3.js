//对象
//抽象的概念
//es6以前没有class关键字
var Cat = {
        name: '',
        color: '',
        sayHello() {
            console.log('喵');
        }
    }
    //JS 是基于原型的继承
var cat1 = {};
cat1.name = '大毛';
cat1.color = '黄色';

var cat2 = {};
cat2.name = '二毛';
cat2.color = '黑色';


// 缺点？ JS 代码里要表达好多的对象， 写起来好烦