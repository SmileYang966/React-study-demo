import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'

import appStyle from './style.module.css'


/**
 * css modules -- 3点不足之处
 * 1.引用的类名不能直接使用连接符 setting-item 🙅 ， settingItem 🙆
 * 2.必须都加上 style.title,前面style变量不能省
 * 3.不能动态修改某些样式
 */

export default class App extends PureComponent {
  render() {
    return (
      <div id='app'>
        <h1 className={appStyle.title}>我是app的Title</h1>
        <hr/>
        <Home/>
        <hr/>
        <Profile/>
      </div>
    )
  }
}