import React, { PureComponent,Fragment } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      counter : 0
    }
  }

  render() {
    return (
      // 1.使用Fragement，浏览器不会为它生成一个类似div的标签
      <Fragment>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.increasement()}>+1</button>
      </Fragment>


      //注意：短语法的情况下是不能添加任何key的
      // <>
      //   <h2>当前计数:{this.state.counter}</h2>
      //   <button onClick={e => this.increasement()}>+1</button>
      // </> 
    )
  }

  increasement(){
    this.setState({
      counter : this.state.counter + 1
    })
  }
}

