// import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
// es6 模块化规范
import { GlobalStyle } from './style'; // style
// iconfont
import { IconStyle } from './assets/iconfont/iconfont';
import { HashRouter } from 'react-router-dom'; // 前端路由
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';


function App() { // react 组件 函数式组件 界面显示 StatelessComponent
  return ( // JSX 
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className="iconfont">&#xe62b;</i>
      {renderRoutes(routes)}
    </HashRouter>
  )
}

export default App;
