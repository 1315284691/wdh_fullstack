// 函数 对象
// js 类型 
const arr = [1, 2, 3];
console.log(typeof arr); // Object
const obj = { a: 1 };
obj.b = 2;
arr.push(4);
console.log(arr);
const a = 'hello'; // const 必须在声明的时候赋值
console.log(typeof a);
// a = 1;


function Cart() {
    this.type = "择耳";

}
Cart.prototype.sayHello = function() {
    console.log('喵');
}