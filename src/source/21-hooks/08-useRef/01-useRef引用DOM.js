import React , { useRef } from 'react'

export default function UseRefDemo() {
  
  const titleRef = useRef();
  const inputRef = useRef();

  const changeDom = () => {
    titleRef.current.innerHTML = "Hello Simon"
  }

  return (
    <div>
      <h2 ref={titleRef}>UseRefHookDemo</h2>
      <input ref={inputRef} type='input'/>
      <br/>
      <button onClick={e=>changeDom()}>修改DOM</button>
    </div>
  )
}
