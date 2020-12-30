// es6 手册
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}
// JS里没有类， class只是语法糖
// var p = new Point(1, 2);
console.log(typeof Point);