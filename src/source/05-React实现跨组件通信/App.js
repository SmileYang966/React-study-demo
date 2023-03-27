import React, { Component } from 'react'


class ProfileHeader extends Component{
    render(){
        console.log("ProfileHeader value is ",this.context);

        // 3.传递给数据给哪个组见你，就需要给相应的类组件赋值
        return (
            <div>
              <h2>用户昵称: {this.context.nickname}</h2>
              <h2>用户等级: {this.context.level}</h2>
            </div>
        );
    }
}

//多个Context需要传递数据的时候，如何操作？
function ProfileHeader1(){
    return (
        // 3.传递给数据给哪个组见你，就需要给相应的类组件赋值
        <UserContext.Consumer>
            {
                value => {
                    return (
                        <ThemeContext.Consumer>
                            {
                                theme => {
                                    return(
                                        <div>
                                        <h2 style={{color:theme.color}}>用户昵称: {value.nickname}</h2>
                                        <h2>用户等级: {value.level}</h2>
                                        <h2>颜色: {theme.color}</h2>
                                      </div>
                                    )
                                }
                            }
                        </ThemeContext.Consumer>
                    );
                }
            }
        </UserContext.Consumer>
    );
}


function Profile() {
    return (
      <div>
        <ProfileHeader/>
        <ProfileHeader1/>
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
        </ul>
      </div>
    )
  }

  /**
   * 1.创建context对象,并且给一个默认值
   * 2.通过UserContext.provider包含Profile子组件,value属性是要赋予需要传递的具体数据
   * 3.传递给数据给哪个组见你，就需要给相应的类组件赋值
   */

  //1.创建context对象,并且给一个默认值
  const UserContext = React.createContext({
     nickname : 'EvanYang',
     level : -1
  })

  const ThemeContext = React.createContext({
    color : 'red'
  })
  ProfileHeader.contextType = UserContext;


export default class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          nickname: "kobe11",
          level: 100
        }
      }

  render() {
    return (
      <div>
        {/* 2.通过UserContext.provider包含Profile子组件,value属性是要赋予需要传递的具体数据 */}
        <UserContext.Provider value={this.state}>
            <ThemeContext.Provider value={{color:'blue'}}>
                <Profile/>
            </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
