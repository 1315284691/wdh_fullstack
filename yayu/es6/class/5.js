var obj = {}; // 空对象
// defineProperties 方法 如名 es6 定义对象的新的api
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    enumerable: true,
    writable: false
  }
  
});
// console.log(obj.property1);
obj.property2 = 'aaa';
// console.log(obj.property2);
console.log(Object.keys(obj));