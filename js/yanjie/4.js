// es6提供的新的数据结构
// 1.为了数组的优化而来
// Set Map 两种数据结构 存放特定的数据集合
const people = new Set();
people.add('黄伦');
people.add('廖辉');
people.add('过宇潭');
people.add('明平贵');
for (const person of people) {
    console.log(person);
}
const student = new Set(['王殿虎', '谢文航', '夏原俊']);
student.add('支恩泽');
student.delete('王殿虎');
console.log(student);