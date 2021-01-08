const dogs = new Map(); // 弥补了js没有hashmap
const friends = new Map();
friends.set('黄志乾', '华灯初上');
friends.set('何江涛', '鸡毛');
friends.forEach((val, key) => console.log(val, key))
for (const [key, value] of friends) {
    console.log(key, value);
}
const [a, b] = [1, 2];
const { foo: bar } = { "a": 3, "c": 6 }
console.log(foo, bar);