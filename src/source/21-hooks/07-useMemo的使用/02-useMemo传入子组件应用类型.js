import React, {memo, useMemo, useState} from 'react'

const HYInfo = memo((props) => {
  console.log("HYInfo rennder");
  return (
    <h2>名字:{props.info.name}, 年龄:{props.info.age}</h2>
  );
});

export default function MemoHookDemo02() {
  const [show, setShow] = useState(false);
  // const info = { "name" : "Evan", "age" : 20 }

  // useMemo针对返回值做优化，useCallback只针对函数进行了优化
  const info = useMemo(()=>{
    console.log("useMemo值被调用");
    return { "name" : "Evan", "age" : 20 }
  },[])

  console.log("MemoHookDemo02重新渲染");
  return (
    <div>
      <HYInfo info={info}/>
      <button onClick={e=>setShow(!show)}> show 切换 </button>
    </div>
  )
}
