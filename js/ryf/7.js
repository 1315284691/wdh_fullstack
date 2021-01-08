// 阮一峰面向对象第二篇
function Animal() {
    console.log(arguments, '--------');
    this.species = "动物";
}
// 拿到函数的原型链上的对象
// 函数是一等对象 Object()
// Animal -> Function
console.log(Animal.__proto__.__proto__);

function Cat(name, color) {
    // 怎么拿到Animal的属性,归cat所有
    // 借用一下，指定内部的this 为当前的this
    Animal.apply(this, arguments);
    Animal.call(this, name, color);
    this.name = name;
    this.color = color;
}
// 猫是Animal的子类， 继承
var cat1 = new Cat('大毛', "黑色");
console.log(cat1.species);