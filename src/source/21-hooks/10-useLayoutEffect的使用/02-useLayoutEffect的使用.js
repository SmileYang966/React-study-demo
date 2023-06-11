import React, { useState, useLayoutEffect } from 'react'

export default function UseLayoutEffectCounterDemo2() {

  const [count,setCount] = useState(10);

  useLayoutEffect(() => {
    if(count === 0){
      console.log("useLayoutEffect-----1");
      setCount(Math.random() + 200);
    }
  }, [count])

  console.log("执行return函数-----",count);
  // 会在渲染之前先执行useLayoutEffect里的函数，然后再进行渲染
  return (
    <div>
      <h2> UseLayoutEffectCounterDemo2 --- 数字: {count}</h2>
      <button onClick={e=>{ setCount(0) }}>修改数字</button>
    </div>
  )
}
