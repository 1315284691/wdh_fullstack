// 向外输出一个routes 配置 前端路由
import React from 'react';
import Home from '../application/Home';
import Recommend from '../application/recommend';
import Singers from '../application/singers';
import Rank from '../application/rank';

export default [ // App.js routes
    {
        path: '/',
        component: Home,
        routes: [
            // {
            //     path: '/',
            //     exact: true,
            //     component: Home
            // },
            {
                path: '/recommend',
                component: Recommend
            },
            {
                path: '/singers',
                component: Singers
            },
            {
                path: '/rank',
                component: Rank
            }
        ]
    }
]