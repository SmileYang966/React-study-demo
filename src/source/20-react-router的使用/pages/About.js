import React, { PureComponent } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Contact from './About1/Contact'
import AboutCompany from './About1/AboutCompany'
import Culture from './About1/Culture'

export default class About extends PureComponent {
  render() {
    return (
      <div>
        {/* 子路由，NavLink 的to,写全 */}
          <NavLink  to="/About/culture" className={ ({isActive}) => (isActive ? "nav-link-activated" : "nav-link") }>企业文化</NavLink>
          <NavLink  to="/About/history" className={ ({isActive}) => (isActive ? "nav-link-activated" : "nav-link") }>历史记录</NavLink>
          <NavLink  to="/About/contact" className={ ({isActive}) => (isActive ? "nav-link-activated" : "nav-link") }>联系我们</NavLink>

          <hr/>

          <div>
          <Routes>
            {/* 子路由，Route的path，写相对于About路由写就行*/}
            <Route exact path="/" element={<Culture/>}/>
            <Route exact path="/culture" element={<Culture/>}/>
            <Route exact path="/history" element={<AboutCompany/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
          </div>
      </div>
    )
  }
}
