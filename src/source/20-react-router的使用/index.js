import React, { PureComponent } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Mine from './pages/Mine'
import { BrowserRouter, Route, Link, HashRouter, Routes, NavLink } from 'react-router-dom'
import './App.css'
import NoMatch from './pages/NoMatch'
import Login from './pages/Login'
import User from './pages/User'

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
        {/* Link都会渲染成a标签 */}
          {/* <Link to="/">首页</Link>
          <Link to="/About">关于</Link>
          <Link to="/Mine">我的</Link> */}

          {/* active的方式1 */}
          {/* <NavLink to="/" style={({isActive, isPending}) => {
            return {
              color : isActive ? 'red' : isPending ? 'blue' : 'black'
            }
          }}>首页</NavLink>
          <NavLink to="/About" style={({isActive, isPending}) => {
            return {
              color : isActive ? 'red' : isPending ? 'blue' : 'black'
            }
          }}>关于</NavLink>
          <NavLink to="/Mine" style={({isActive, isPending}) => {
            return {
              color : isActive ? 'red' : isPending ? 'blue' : 'black'
            }
          }}>我的</NavLink> */}

          {/* active的方式2 */}
          <NavLink to="/">首页</NavLink>
          <NavLink to="/About">关于</NavLink>
          <NavLink to="/Mine">我的</NavLink>
          <NavLink to="/Login">登录</NavLink>
          <NavLink to="/User">用户</NavLink>

          {/* 使用Routes来包含所有的Route，默认只匹配一个 */}
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            {/* 子路由，需要加上/*     */}
            <Route path="/About/*" element={<About/>}/>
            <Route path="/Mine" element={<Mine/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/User' element={<User/>}/>
            <Route element={<NoMatch/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
