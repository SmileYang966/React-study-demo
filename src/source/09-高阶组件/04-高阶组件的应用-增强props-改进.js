import React, { createContext, PureComponent } from 'react'

//创建UserContext
const UserContext = createContext({
    nickName : '默认',
    level : -1,
    area : '中国'
})

class About extends PureComponent{
    render(){
        return (
            <h2>
                About : {`name : ${this.props.nickName} , level : ${this.props.level}, area : ${this.props.area} `}
            </h2>
        )
    }
}

class Home extends PureComponent{
    render(){
        return (
            <h2>
                Home : { `name = ${this.props.nickName}, Level :   level : ${this.props.level}, area : ${this.props.area}`} 
            </h2>
        )
    }
}

class UserDetail extends PureComponent{
    render(){
        return (
            <ul>
                <li>{this.props.nickName}</li>
                <li>{this.props.level}</li>
                <li>{this.props.area}</li>
            </ul>
        )
    }
}


function withUser(WrappedComponent){
    return props => {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <WrappedComponent {...user} {...props}/>
                    }
                }
            </UserContext.Consumer>
        );
    }
}

const EnhanceHome = withUser(Home);
const EnhanceAbout = withUser(About);
const EnhanceUserDetail = withUser(UserDetail);

class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{nickName:'simon',level:221,area:'china'}}>
            <EnhanceAbout />
            <EnhanceHome />
            <EnhanceUserDetail />
        </UserContext.Provider>
      </div>
    )
  }
} 




export default App; 
