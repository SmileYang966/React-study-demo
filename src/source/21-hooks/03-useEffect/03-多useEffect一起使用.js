import React , { useState, useEffect } from 'react'

export default function MultiuseEffectDemo() {

  const [counter, setCounter] = useState(0);

  // 1. 当countner发生变化的时候，执行结构体，counter每次发生变化都会调用
  useEffect(()=>{
    console.log("dom操作");
  },[counter])

  // 2. 网络请求，只会在第一次加载组件的时候调用
  useEffect(() => {
    console.log("网络请求");
    return ()=>{
      console.log("注销");
    }
  },[])

  // 3. 订阅事件, 只会在第一次加载组件的时候调用
  useEffect(() => {
    console.log("订阅事件");
  },[])
  

  console.log("执行return操作，返回新的组件");
  return (
    <div>MultiuseEffectDemo : { counter }
      <br/>
      <br/>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>+1</button>  
    </div>
  )
}
