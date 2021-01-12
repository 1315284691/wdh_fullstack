# js 常考考点
es6/红宝书 你不知道的javascript leetcode
单线程的语言,数据通信相关 vue/react 不学
1. npm init -y
2. npm i json-server
    命令行，怎么启动db.json 后台数据源
    http server 3000、user db.json 做为数据源
    提供出来访问 后台准备好了

    http://localhost:3000/users user[]
    POST 保存表单 name -> http://localhost:3000/users
3. db.json 数据文件
    json 是 js 前端和后端通信的数据文件
- promise 五星  异步

- postman 可以用来做http访问代理
    POST 再方便不过

- 前端 + 后端
    live-server http 前端服务 index.html 8080
    json-server 后端数据 1234
    前端和后端怎么数据通信
    前端去拉取后端数据
    get 

- ajax 的表达一下
    JS 重要的考点 XMLRequest 对象
    1. 是历史性的突破，带来前端主动请求数据的能力，微博Ajax应用
    前端更主动，ajax + DOM 页面变得丰富，动态
    2. http://localhost:3000/user 一切皆资源 Restfull
    数据资源 请求动作 Get path/users []
    POST 新增的 /users {name:"王嘉新"}
    3. XMLHttpRequest   ActiveXObject("Microsoft.XMLHTTP")
    但是这叫浏览器嗅探 if else
    let httpRequest;    http 协议 Request Response
    - 创建好对象
    - .open('GET',url,true) 打开一个请求通道
        .send() 这个请求真的就发送了
        .onreadystatechange
        XMLHttpRequest.DONE 完成了
        JSON.parse(httpRequest.reponseText) 返回的数据
        json 数组 -> html 数组map `<li>${user.id} - ${user.name}</li>` innerHTML
