- 图片性能优化,我们想到什么？   减少http数， lazyload throttle
    - 编解码
    data:img/jpg;base64,文件头 base4编码格式
    google 大量的使用base64 减少请求数 是最严重的影响页面性能的地方

    1.网页性能的优化
        - 精灵图片的优化技术 多张图（小图）合并为一张图
            减少http请求
        - 历史 lazyload scroll + API, 减少一些执行次数 throttle
        - 现在有 base64 把发送请求的机会都没了 不是所有图片
            衡量，小一点的图片
            ? 哪种方法?
        - 大图的话特别是头图，banner图 商品详情页图片

- js 多线程的苗头 Worker 推出了一段时间了，但是没有成为主流 有多线程的能力
    new Worker('js文件')    单独运行，不会阻塞主线程
    1. 跟DOM相关的事不能做
        js 是css/html的第三者