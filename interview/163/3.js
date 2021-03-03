// 引用数据类型

const a = [];
const b = a;
b.push(1);
console.log(a);

// const a = [];
// const b = a;
// b.push(1);
// console.log(a);


function test(person) {
    person.age = 26;
    person = {
      name: 'yyy',
      age: 30
    }
    return person
  }
  
const p1 = {
name: 'yck',
age: 25
}
const p2 = test(p1);
console.log(p1) ;
console.log(p2);
