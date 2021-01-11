# grid 布局
- 在哪里， 看过这种布局
- 考题中， 有多少元素在屏幕居中的方法
    - flex body d:f justify-content:center align-items:center 一代
    - grid 二代 二维的时候 justify-content : center
    - 定位
    - margin 负值
    - ......
- grid-template-rows|columns
    布局可以直接对二维面声明
- 9个元素，请大家给个方案，每个格子背景颜色不一样？
    - js 是王者 ele.style 夏原俊
    - css方案 .box:nth-child()
- 弹性布局在解决现代移动端甚至未来物联网，不好解决或者解决麻烦
    九宫格 多加每一行的父元素
    grid 的二维布局方案来了
- 在垂直方向做主元素分配高度
     display:grid + grid-template-columns :1fr auto
     更优秀

-   firstChild lastChild
    childNodes 换行符会作为空的文本节点采集
    lastElement