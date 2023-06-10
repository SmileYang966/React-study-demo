import React , {useCallback, useState} from 'react'

export default function UseCallBackDemo() {

  const [count,setCount] = useState(0);

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
      <h2>useCallbackDemo的使用 : {count}</h2>
      <button onClick={increment}> +1 </button>
      <button onClick={increment2}> +1 </button>
    </div>
  )
}
