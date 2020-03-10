import React,{ Component } from 'react'
//React.Component 现在直接解构 { Component }
// 导入antd-mobile的 Button
import { Button } from 'antd-mobile';
// 在App组件配置 基本路由  
// 1 下包react-router-dom 2 导入三个组件 3 在最外层包裹一次BrowserRouter 4 Route配置组件 
import {BrowserRouter as Router,Route  } from 'react-router-dom'
// 导入组件使用
// 他会默认找到 文件夹下面的index.js 所以可以省略
import Home  from './pages/Home'
import Citylist  from './pages/Citylist'

export default class App extends Component {
  render() {
    // 一定在根组件 app要包裹一次 否则报错 不能用路由的
    return <Router>
            <div>
              111
              {/*测试可以不要了 app一般就配置路由就行 我是跟组件app*/}
              <Button type="primary">按钮啊啊啊</Button> 
              {/* Route配置路由 /home  /citylist */}
              {/* <Route path="/路径" component={显示的组件}></Route> */}
              {/* home是父路由  里面 有底部切换标签 中间挖坑切换四个子路由(首页 找房 资讯 我的)
               /home/news 资讯
               */}
              <Route path="/home" component={Home}></Route>
              <Route exact path="/citylist" component={Citylist}></Route>

          </div>
    </Router>
      
    
  }
}
