// let的作用域为块作用域
if (true) {
    var age = 26;
    console.log(age); //26
}
console.log(age); //26
if (true) {
    let age1 = 36;
    console.log(age1); //36
}
// console.log(age1); //报错