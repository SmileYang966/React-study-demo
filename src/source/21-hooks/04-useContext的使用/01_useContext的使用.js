import React, { useContext } from 'react'
import { UserContext,ThemeContext } from '../index'

// old做法
 function UseContextDemoOld() {
  return (
    <div>
          <UserContext.Consumer>
      {
        user => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    <span style={{color:theme.color,backgroundColor:theme.themeColor}}>{user.name + 'and age is ' + user.age}</span>
                  );
                }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
    </div>
  )
}

export default function UseContextDemo() {
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  return (
    <div>
        <span style={{color:themeContext.color,backgroundColor:themeContext.themeColor}}>{userContext.name + 'and age is ' + userContext.age}</span>
        <br/>
        <br/>
        <span style={{color:themeContext.themeColor,fontSize:themeContext.fontSize}}>110</span>
    </div>
  )
}
