import React, { useState, View } from 'react'
// import ComplexHook from './02-复杂hook处理-useState'
// import UseEffectDemo from './03-useEffect/01-useEffect的使用'
// import HookMonitorDemo from './03-useEffect/02-useEffect来模拟订阅和取消操作'
import MultiuseEffectDemo from './03-useEffect/03-多useEffect一起使用'

export default function App() {

  const [switchComponent, setSwitchComponent] = useState(false)

  return (
    <>
    {/* <ComplexHook/> */}
    {
      switchComponent ? <div>111</div> : <MultiuseEffectDemo/>
    }
    <button onClick={()=>{
      setSwitchComponent(!switchComponent);
    }}>
      切换
    </button>
    </>  
  )
}

