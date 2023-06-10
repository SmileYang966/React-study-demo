import React , {memo, useCallback, useState} from 'react'

// useCallback + memo组合
const HYButton = memo((props) => {
  console.log("HYButton重新渲染",props.title);
  return (
    <button onClick={props.increment}> 
    + 1 
    </button>
  );
})


export default function UseCallBackDemo() {

  
  const [count,setCount] = useState(0);
  const [show,setShow] = useState(false);

  const increment = () => {
    console.log("increment");
    setCount(count+1);
  }

  const increment2 = useCallback(() => {
    console.log("increment2");
    setCount(count+1);
  },[count])

  return (
    <div>
      <h2>useCallbackDemo的使用2 : {count}</h2>
      <HYButton increment={increment} title={' btn1 '}/>
      <HYButton increment={increment2} title={' btn2 '}/>
      <button onClick={e=>setShow(!show)}>set Show</button>
    </div>
  )
}
