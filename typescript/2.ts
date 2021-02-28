
interface User { /*接口 */
    name: string;
    age: number;
    occupation: string;
};

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;// 普通用户或管理员
// export type User = {
//     name: string;
//     age: number;
//     occupation?: string;
//     role?:string
// };

export const users: Person[] = [
  {
    name: "黄志乾",
    age: 18,
    occupation: "Chimney sweep"
  },
  {
    name: "郑孝龙",
    age: 18,
    occupation: "Astronaut"
  },
  {
      name: "徐蕊",
      age: 18,
      role: "Administrator"
  },
  {
      name: "廖辉",
      age: 18,
      role: '主任'
  }
];

export function logPerson(user: Person) {
//   console.log(`- ${user.name}, ${user.age}`);
  let additionInformation: string;
//   if ((<Admin>user).role) {
    if ("role" in user) {
    additionInformation = (<Admin>user).role;
  } else {
      additionInformation = (<User>user).occupation;
  }
  console.log(`${user.name} ${user.age} ${additionInformation}`);
}

users.forEach(logPerson);
