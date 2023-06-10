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

  // 这个每次重新渲染的时候，都会重新执行下面这个函数,并重新赋值给increment变量,因此下面的
  // <HYButton increment={increment} title={' btn1 '}/>都会被重新执行

  const increment = () => {
    console.log("increment");
    setCount(count+1);
  }

    // 这个每次重新渲染的时候，因为加上了useCallback,会保留上一次()=>{}返回的函数值。
    // 下面这个就不会重复执行了，因为这里的increment2是和上次一模一样的，因此对于HYButton的props来说，它没有任何变化，因此HYButton不会被重复rennder
    // <HYButton increment={increment2} title={' btn2 '}/>
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
