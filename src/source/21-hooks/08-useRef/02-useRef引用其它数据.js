import React, { useState , useRef, useEffect } from 'react'

// 保存上一次数据的值，以及当前数据的值
export default function RefDemo02() {
  const [count,setCount] = useState(0);

  // useRef返回一个ref对象，这个ref对象在整个生命周期内都保持不变
  const numRef = useRef(count);

  // return执行完成后，即渲染完成后才会执行useEffect里的操作
  useEffect(()=>{
    numRef.current = count;
  },[count])

  return (
    <div>
      {/* <h2>RefDemo02 : {numRef.current}</h2>
      <h2>count的值: {count}</h2> */}
      <h2> count上一次值: {numRef.current}</h2>
      <h2> count当前值: {count}</h2>
      <button onClick={e=>setCount(count+10)}> + 10 </button>
    </div>
  )
}
