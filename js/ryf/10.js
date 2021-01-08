function Animal() {}
Animal.prototype.species = '动物';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
var F = function() {}
F.prototype = Animal.prototype;
//没有2的效率问题，没有3修改父的问题 
Cat.prototype = new F(); //  不能使用F.prototype,因为依旧会修改Animal.prototype

var cat1 = new Cat('小花', '白色');
console.log(Animal.prototype.constructor);
console.log(cat1.species);