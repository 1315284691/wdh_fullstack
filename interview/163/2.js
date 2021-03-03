const theBiggestInt = 8007199254740991n;// 在数字后面加n代表bigint
const alsoHuge = BigInt(8007199254740991);

const b1 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(b1);
console.log(Number.MIN_SAFE_INTEGER);

const maxPlusOne = b1 + 1n;
console.log(maxPlusOne);