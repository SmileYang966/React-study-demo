import React, { useEffect, useState } from 'react'

export default function UseEffectCounterDemo() {

  const [count,setCount] = useState(10);

  useEffect(()=>{
    console.log("count value is ",count);
    setTimeout(() => {
      if(count === 0){
        setCount(Math.random())
      }
    }, 2000);
  },[count])

  return (
    <div>
      <h2>数字: {count}</h2>
      <button onClick={e=>{ setCount(0) }}>修改数字</button>
    </div>
  )
}
