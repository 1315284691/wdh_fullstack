var mySymbol = Symbol() // 初始化
// var shapeType = { // 形状的类型  json object 
//   triangle: 'Triangle', // 三角形
//   square: 'Square' // 正方形
// }
var shapeType = { // 形状的类型  json object 
    triangle: Symbol(), // 三角形
    square: Symbol() // 正方形
  }

function getArea(shape, options) {
  var area = 0;
  switch(shape) {
    case shapeType.triangle:
      area = 0.5 * options.width *options.height;
    break;
    case shapeType.square:
      area = options.width * options.height;
    break;
  }
  return area;
}
console.log(getArea(shapeType.square, {
  width: 100,
  height: 100
}))

// const obj = {
//     toString() {
//         return 'abc'
//     }
// }
// const sym = Symbol(obj);
// console.log(sym.toString());

var obj = {};
var a = Symbol("a");
var b = Symbol("b");

obj[a] = 'Hello';
obj[b] = 'world';
obj.cc = 'cc'; // 常规 取个名字

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[a]);

for (let key in obj) {
    console.log(obj[key])
}
Object.getOwnPropertySymbols(obj).forEach(item => {
    console.log(obj[item]);
})


