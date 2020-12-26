// 函数表达式
// 箭头函数
// 故事场景
let calculateBounce;
console.log(typeof calculateBounce);
calculateBounce = '11111';
console.log(typeof calculateBounce);
calculateBounce = 2;
console.log(typeof calculateBounce);
calculateBounce = false;
console.log(typeof calculateBounce);
calculateBounce = null; //为null
console.log(typeof calculateBounce);
calculateBounce = [1, 2, 3]; //数组为Object
console.log(typeof calculateBounce);

/**
 * @author wdh 
 * @date 20-12
 * @func 工资计算
 * @param {salary number, level:string}
 * @return 总工资 number
 */

calculateBounce = (salary, level = 'C') => {


    if (level === 'S') {
        return salary * 18;
    }
    if (level === 'A') {
        return salary * 13;
    }
    if (level === 'B') {
        return salary * 14;
    }
    if (level === 'C') {
        return salary * 15;
    }


}
console.log(typeof calculateBounce);
console.log(calculateBounce(22000, 'S'));
console.log(calculateBounce(22000, 'A'));
console.log(calculateBounce(22000, 'B'));
console.log(calculateBounce(22000));