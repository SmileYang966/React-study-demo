import React, { PureComponent } from 'react'


//购物车组件
class CartPage extends PureComponent{
    render(){
        return (
            <h2>购物车组件</h2>
        )
    }
}

//登录组件
class LoginPage extends PureComponent{
    render(){
        return (
            <h2>登录组件</h2>
        )
    }
}

//鉴权组件
function withAuth(WrappedComponent){
    const newCpt = props => {

        const { isLogin } = props;

        if(isLogin){
            return (
                <WrappedComponent {...props}/>
            )
        }else{//未登录
            return (
                <LoginPage/>
            )
        }
    }
    newCpt.displayName = 'AuthCpn' 
    return newCpt;
}

const AuthCardPage = withAuth(CartPage); 

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCardPage isLogin={false}/>
      </div>
    )
  }
}
