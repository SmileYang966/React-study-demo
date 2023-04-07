import React, { PureComponent } from 'react'
import { HomeWrapper,TitleWrapper } from './style'



export default class App extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>我是home的标题</TitleWrapper>
        <div className='banner '>
          <span> 轮播图 </span>
          <span className='active'> 轮播图 </span>
          <span> 轮播图 </span>
          <span> 轮播图 </span>
        </div>
      </HomeWrapper>
    )
  }
}