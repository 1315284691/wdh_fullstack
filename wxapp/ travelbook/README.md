1. 做一款小程序
2. 写一篇文章
3. 结合腾讯云 BASS Backend as service
    大前端 SDK 存
    投中一篇 
- 小程序基本的架构是pages
    右键先建文件夹，.wxml+.js+.wxss+.json
    .js  的架构思路
    ```javascript
        .wxml bindtap
        Page({
            startAccounts() {
                wx.showLoading+.hideLoading 小程序的内置API
                wx.navigateTo 跳转
            }
        })
    ```
- background-size 手机端图片 响应式背景方案
    1. 图片与盒子大小是不一致的
    2. 等比例去缩放这张图片 100% 100% 盒子与图片的比例是相等的
    3.  cover | contain 

- flex 布局的使用
    元素是比較簡單的， 用flex-direction:colum 去搞定，是移動端快速搞定的利器
    align-items: 縱軸 水平方向
    margin 順時針

- 小程序之所以小 有大小限制，2Mb
    圖片不方便在images裡面的
    以鏈接的方式存在云服務器裡
    雲開發來解決 存儲問題 

- 使用了header footer 代替div 标签 语义化标签
    html 语义化更好，对百度的蜘蛛会更好 有利于搜索引擎优化

    flex + flex-direction: column flex: 1 主体内容
    弹性布局的意思是无所谓多大,我会分好
    overflow + overflow-scrolling:touch

- vant 框架 解决了开发中常见的问题
    1. 布局页面 row + col
    2. 常用组件 
    pannel button 60%都不用写， 有框架

- MVVM 思想
    js data 里的数据叫 Model
    wxml view 
    VM {{}} 视图模型层 


