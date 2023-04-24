import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './CSSTransition.css'
import al1 from  './res/a11.jpeg'

export default class CSSTransitionDemo extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      isShow : true
    }
  }

  render() {

    const { isShow } = this.state;
    console.log("isShow is ",isShow)
    return (
      <div>
        {/* in表示是否显示，timeout展示时间 , unmountOnExit=true，默认是需要卸载的 , appear:第一次出现的时候需要添加这个属性*/}
        <CSSTransition in={isShow} classNames='card' timeout={300} unmountOnExit={true} appear
                       onEnter={el => { console.log("进入状态") }}
                       onEntering={el => { console.log("正在进入") }}
                       onEntered={ el => { console.log("进入完成") }}
                       onExit={el => { console.log("开始退出") }}
                       onExiting={el => { console.log("退出状态") }}
                       onExited={el => { console.log("退出完成") }}

        >
          <div>
            <h2 className=''>哈哈哈</h2>
            <img src={al1} style={{width:200,height:200}}/>
          </div>
        </CSSTransition>
        <button onClick={this.buttonClick}>显示与隐藏</button>
      </div>
    )
  }

  buttonClick = () => {
    this.setState({
      isShow : !this.state.isShow
    })
  }
}
