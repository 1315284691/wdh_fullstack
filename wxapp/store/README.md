#  水果电商小程序

 shop（店） -> 水果

   1. 首页设计店营业/打烊的 需要
   2. 页面功能  搜索、swiper、列表 组件化思想
   3. isShow?  false 不展示没准备好
   4. 搜索
   5. application -> pages -> components -> 组标
      - 小程序由页面构成  
      - 页面由组件组成
      - 组件 由组标构成
   6. tab 切换 
      1. 设备数据 tab 状态相关 activeTypeId
      2. 
         - css flex 1/4 
         位置怎么做？
   7. 数据库设计
      - fruit-board
         支持where操作
         maclass 0 1 2 3
         onShow 是否上架
         详情页 swiper
      
      - 封装云开发数据操作的能力
         1.app.js 是天然的公用js 方法的地方
         const app =


- flex 怎么让元素下去
- 设计一下购物车? 数组 某项商品， 数量
   购物车 首页，要加入购物车 加入 改数量
   购物车 展示出来
   详情页时，加入购物车
   关于购物车的数据，是不是要超出页面化，来到？
   比页面级别更大的是谁？ app

   view image 标签 -> component -> page -> application
   globaData promise 是否有重复的