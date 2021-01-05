// 有哪些情况会是undefined？
let a; // 声明，没有赋值
// 变量声明时，JS类型由值决定
console.log(typeof a); //声明但未赋值 undefined 1
const fnNoReturn = () => {}
console.log(fnNoReturn(), '2'); // ? 函数没有返回值 undefined2
// 参数不传值
const fn = (b) => {
    // 一运行就会有的 this -> 指针对象 指向一个对象 
    console.log(arguments);
    console.log(typeof b); //形参未传值 undefined3
}
console.log(fn(1, 2, 3));
const o = { c: '1' }; // 对象上没有声明的属性 undefined4
console.log(o.d);
// console.log(zr); //直接使用未声明的变量  语法错误

console.log(null == undefined); //true
console.log(null === undefined); //flase