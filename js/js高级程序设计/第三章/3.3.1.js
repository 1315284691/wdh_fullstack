//var 声明提升
function foo() {
    console.log(age);
    var age = 26
}
// foo(); //undefined
function foo1() { // 可以反复var一个变量
    var age = 26;
    var age = 29;
    var age = 36;
    console.log(age);

}
foo1(); // 36