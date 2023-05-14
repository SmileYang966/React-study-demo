import React, { PureComponent } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Mine from './pages/Mine'
import { BrowserRouter, Route, Link, HashRouter, Routes, NavLink } from 'react-router-dom'
import './App.css'

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

          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/About" Component={About}/>
            <Route path="/Mine" Component={Mine}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
