import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent{

  UNSAFE_componentWillMount(){
    console.log("Home----UNSAFE_componentWillMount");
  }

  render(){
    return (
      <div>
        Home
      </div>
    );
  }
}

class Profile extends PureComponent{

  UNSAFE_componentWillMount(){
    console.log("Profile----UNSAFE_componentWillMount");
  }

  render(){
    return(
      <div>
        <h2 ref="aab">Profile</h2>
      </div>
    )
  }
}

/***
 * StrictMode会检查哪些？
 * 1.一些UNSAFE_标签的
 * 2.使用过时的ref,ref="aab"这个用法已经过时了
 * 3.StrictMode会有副作用，例如被调用多次
 */

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 用StrictMode包裹起来的子组件，会对子组件进行一些安全检查 */}
          <Home/>
        <StrictMode>
          <Profile/>
        </StrictMode>
      </div>
    )
  }
}
