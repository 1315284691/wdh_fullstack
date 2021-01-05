// require 关键字， 引入库
// const fs = require('fs'); // 文件系统 内置模块
const nodemailer = require('nodemailer'); // 第三方库， 安装的
const { default: Axios } = require('axios');
const schedule = require('node-schedule');
// 模块 语法 -> 函数模块化 -> module (水电工，木工，监理..)
// 现代语言中， 一个文件就是一个模块 ...
// const modA = require('./a.js'); // 相对地址
// console.log(modA.add(4, 6));
// fs.readFile('./readme.md', function(err, res) {
//     if (err) {
//         throw new Error(err);
//     }
//     console.log(res.toString());
// });
// 异步函数
// 把土味情话 
function getHoneyedWords() {
    const url = 'https://chp.shadiao.app/api.php';
    return Axios.get(url);
}
// 把发邮件这件事,封装给一个函数
async function sendMail(words) {
    let user = "a1315284691@gmail.com";
    let pass = ""; // 授权码 
    let to = "3534348021@qq.com";
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: user,
            pass: pass
        }
    });
    let info = await transporter.sendMail({ // 要发送的信息
        from: `亲爱的<${user}>`, //sender address
        to: `亲爱的<${to}>`,
        subject: "写给小号的一封信",
        text: words
    })
    console.log('发送成功');
}

schedule.scheduleJob({ hour: 12, minute: 1 }, function() { //定时器
    console.log("启动任务" + new Date());
    getHoneyedWords()
        .then(res => {
            sendMail(res.data);
            // console.log(res.data);
        })
        // sendMail();
})