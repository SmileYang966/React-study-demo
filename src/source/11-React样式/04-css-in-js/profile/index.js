import React, { PureComponent } from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
  background-color: brown;
  width: 450px;
  height: 30px;
`

// attrs的使用，一般存放一些静态的属性，看下方的this.state.color的例子
//3.传入state作为props
const EvanInputStyle = styled.input.attrs({
  type : 'password',
  placeholder:'EVVDS',
  borderColor:'blue'
})`
  border-color: ${props => props.borderColor};
  color:${props => props.color};
  background-color: lightgray;
  width: 450px;
  height: 30px;
`


export default class App extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      color : 'yellow'
    }
  }
  render() {
    return (
      <div>
        {/* type='password',具有props穿透的效果，所以这里设置type='password'，也会在input上生效 */}
        <InputStyle type='password'/>
        <br/>
        <br/>
        <EvanInputStyle color={this.state.color}/>
        <h2>我是Profile的标题</h2>
        <ul>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}
