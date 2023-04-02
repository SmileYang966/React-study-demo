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
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <h2>
                                About : {`name : ${user.nickName} , level : ${user.level}, area : ${user.area} `}
                            </h2>
                        )
                    }
                }
            </UserContext.Consumer>
        );
    }
}

class Home extends PureComponent{
    render(){
        return (
            <UserContext>
                {
                    user => {
                        return (
                            <h2>
                                Home : { `name = ${user.nickName}, Level :   level : ${user.level}, area : ${user.area}`} 
                        </h2>
                        )
                    }
                }
            </UserContext>
        );
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

class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{nickName:'simon111',level:221,area:'china11'}}>
            <EnhanceAbout />
            <EnhanceHome />
        </UserContext.Provider>
      </div>
    )
  }
} 




export default App; 
