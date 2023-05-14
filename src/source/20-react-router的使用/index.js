import React, { PureComponent } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Mine from './pages/Mine'
import { BrowserRouter, Route, Link, HashRouter, Routes } from 'react-router-dom'

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
        {/* Link都会渲染成a标签 */}
          <Link to="/">首页</Link>
          <Link to="/About">关于</Link>
          <Link to="/Mine">我的</Link>

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
