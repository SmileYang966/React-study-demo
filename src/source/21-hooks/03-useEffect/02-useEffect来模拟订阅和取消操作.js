import React , { useState,useEffect } from 'react'

export default function HookMonitorDemo() {

  const [counter, setCounter] = useState(0);

  // 按钮点击后
  // 第一步： 执行return 
  // 第二步： 取消订阅
  // 第三步： 订阅事件
  // 每次刷新都会执行
  // 相当于componentWillMount
  /*
  useEffect(()=>{
    console.log("订阅事件");

    return ()=>{
      console.log("取消订阅");
    }
  })
  */

  // 下面这个是相当于componentDidMount
  useEffect(()=>{
    console.log("订阅事件");

    return ()=>{
      console.log("取消订阅");
    }
  },[])

  return (
    <div>
      HookMonitor : {counter}
      <br/>
      <br/>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>+1</button>
    </div>
  )
}
