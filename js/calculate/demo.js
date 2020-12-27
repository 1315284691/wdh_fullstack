//所以的奖金策略用一个JSON Object 来表达

const strategies = {
    "S": (salary) => {
        return salary * 18
    },
    "A": (salary) => {
        return salary * 13
    },
    "B": (salary) => {
        return salary * 14
    },
    "C": (salary) => {
        return salary * 15
    },
}
console.log(typeof strategies);
const calculateBonus = (salary, level = 'C') => {
    console.log(typeof salary);
    // return level == 'A' ? salary * 13 : (level == 'S' ? salary * 18 : (level == 'B' ? salary * 14 : salary * 15));
    return strategies[level](salary);
}
console.log(calculateBonus(22000));