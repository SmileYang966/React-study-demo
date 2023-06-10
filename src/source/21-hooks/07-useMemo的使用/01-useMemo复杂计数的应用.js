
import React, { useMemo, useState } from 'react'

export default function UseMemoDemo() {

  const [count, setCount] = useState(10);
  const [show, setShow] = useState(false);

  // useMemo的使用是为了进行性能优化
  // 1.useMemo返回的是一个memoized的值
  // 2.在依赖不变的情况下，多次定义的时候，返回相同的值

  const total = useMemo(()=>{
    console.log("useMemo---被调用");
    let totalNum = 0;
    for (let i = 0; i < count; i++){
      totalNum += i;
    }
    return totalNum
  },[count])

  return (
    <div>
      <h2>计算数字的和: {total}</h2>
      <button onClick={e => setCount(count+1)}> + 1 </button>
      <button onClick={e => setShow(!show)}> set show </button>
    </div>
  )
}
