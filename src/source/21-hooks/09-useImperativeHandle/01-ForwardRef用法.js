import React, { forwardRef, useRef, useImperativeHandle }  from 'react'

const HYInput = forwardRef((props,ref) => {
  const inputRef = useRef();

  // 限制父组件对它进行操控，这里的foucs1,setValue1，相当于是子组件提供给父组件，可调用的方法列表
  useImperativeHandle(ref, ()=>({
    focus1 : () => {
      inputRef.current.focus();
    },
    setValue1 : (str) => {
      inputRef.current.value = str
    }
  }),[inputRef]) //当innputRef发生变化时，才会执行方法体

  return <input type='text' ref={inputRef}/>
});


export default function ForwardRefDemo() {

  const inputRef = useRef();

  return (
    <div>
      {/* 以后运用forwardRef的地方都会这样调用，这种设计方式是比较合理的， useImperativeHandle */}
      <HYInput ref={inputRef}/>
      <button onClick={e=>{inputRef.current.focus1()}}>聚焦1</button>
      <button onClick={e=>{inputRef.current.setValue1('222334')}}>聚焦2</button>
    </div>
  )
}
