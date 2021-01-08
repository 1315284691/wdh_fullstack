// user 类型 Object name age
const getUserInfo = function(user) {
    if (!user || typeof user != 'object' || !Object.keys(user).includes("name") || !Object.keys(user).includes("name")) {
        throw new Error('参数错误');
    }

    return `name: ${user.name},age: ${user.age}`
}
console.log(getUserInfo({ name: 'koala', age: 18 }));
// 有什么问题?
console.log(getUserInfo({ name: 'koala' }));
console.log(getUserInfo({}));
// 限制一下随意性