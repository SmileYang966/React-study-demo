import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'
// ThemeProvider=》主题
import styled,{ ThemeProvider } from 'styled-components'

const HYButton = styled.button`
  padding: 10px 20px;
  border-color: gray;
  color: red;
`
//继承，HYButton的3个特性
const HYPrimaryButton = styled(HYButton)`
  background-color: green;
`

// const HYPrimaryButton = styled.button`
//   padding: 10px 20px;
//   border-color: gray;
//   color: red;
//   background-color: green;
// `

export default class App extends PureComponent {
  render() {
    return (
      // ThemeProvider是这个高级特性,下面共享了themeColor和fontSize这两个属性，可以看home下的index.js里的具体应用
      <ThemeProvider theme={{themeColor:'purple',fontSize:'50px'}}>
        <h1>我是app的Title</h1>
        <hr/>
        <Home/>
        <hr/>
        <Profile/>
        <HYButton>我是普通按钮</HYButton>
        <HYPrimaryButton>我是主要的按钮</HYPrimaryButton>
      </ThemeProvider>
    )
  }
}