import React, { createContext, useState, View } from 'react'
// import ComplexHook from './02-复杂hook处理-useState'
// import UseEffectDemo from './03-useEffect/01-useEffect的使用'
// import HookMonitorDemo from './03-useEffect/02-useEffect来模拟订阅和取消操作'
// import MultiuseEffectDemo from './03-useEffect/03-多useEffect一起使用'
// import UseContextDemo from './04-useContext的使用/01_useContext的使用';
// import Home from './05-useReducer的使用/Home';
// import Profile from './05-useReducer的使用/Profile';

// import UseCallBackDemo from './06-useCallback使用/01-useCallback不能进行性能优化';
// import UseCallBackDemo from './06-useCallback使用/02-useCallback进行性能优化';
// import UseMemoDemo from './07-useMemo的使用/01-useMemo复杂计数的应用'
import MemoHookDemo02 from './07-useMemo的使用/02-useMemo传入子组件应用类型'

// 创建两个context，准备去共享数据
const UserContext = createContext();
const ThemeContext = createContext();

export default function App() {

  const [switchComponent, setSwitchComponent] = useState(false)

  return (
    <>
    {/* <ComplexHook/> */}
    {
      switchComponent ? 
      (<div>111</div>) 
              : 
      (
        /* userContext的使用
        <UserContext.Provider value={{name:'Evan',age:'20'}}>
          <ThemeContext.Provider value={{color:'red',themeColor:'blue',fontSize:'30px'}}>
            <UseContextDemo/>
          </ThemeContext.Provider>
        </UserContext.Provider>
        */
       
        /* useReducer的使用
        <div>
            <Home/>
            <hr/>
            <Profile/>
        </div>
        */
       
        // <UseCallBackDemo/>

        // <UseMemoDemo/>

        <MemoHookDemo02/>
      )
    }
    <button onClick={()=>{
      setSwitchComponent(!switchComponent);
    }}>
      切换
    </button>
    </>  
  )
}

export {
  UserContext,
  ThemeContext
}
