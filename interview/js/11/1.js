const arr = [3, 4, 5];
// 给出在数组尾部、头部 加、删除的方法
arr.push(6); // js是面向对象的  push()尾部插入
console.log(arr.pop()); //pop()删除首元素
arr.unshift(1);
arr.shift(1);
// 把数组打印出来，有多少总方法？
for (let num in arr) {
    console.log(num);
}
arr.forEach(item => {
    console.log(item);
})
console.log(arr.join(" "));
console.log(arr.splice(0, arr.length));
console.log(arr.map(item => item));