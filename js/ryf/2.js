/**
 * @author wdh
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */
const isTypeof = (o, type) => {
    if (['number', 'boolean', 'function', 'string'].indexOf(type) > 0) {
        return typeof o === type;
    } else {
        return Object.prototype.toString.call(o).toLowerCase().indexOf(type) > 0;
    }

}
let a = [1, 2, 3];
// let a = () => {}
// let a = 'hello';
// let a = null;
// let a = true;
// let a;
console.log(isTypeof(a, 'array'));