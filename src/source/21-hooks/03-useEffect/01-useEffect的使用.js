import React , { useEffect, useState } from 'react'

export default function UseEffectDemo() {
  const [counter, setCounter] = useState(0);

  // 下面这个会是在先执行完return操作后，再执行useEffect操作
  useEffect(()=>{
    document.title = counter;
  })

  return (
    <div>
      当前计数: { counter }
      <br/>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
