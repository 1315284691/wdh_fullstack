# react 小书

- 简单应用，不是一个完整的上线网站，只是一个功能 不需要route
    react 是现在流行的web 网站（应用）开发框架

- 组件组织起来？
    1. CommentApp 根组件 index.js render
    2. 子组件 Comment 
    3. 数据放在父组件中(原则),通过prop 一路传递下去 comments 放在CommentApp里的主要原因是 CommentInput
    4. 每个组件由专属的css 方便css 的管理
        组件要卸载的时候，方便css 移除赶紧

    5. 子组件要通知父组件 有事情怎么办？