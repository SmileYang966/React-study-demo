import { useEffect, useState } from "react";

// 
function usePositionHook(){
  const [scrollPositionY,setScrollPositionY] = useState(0);

  useEffect(()=>{
    const handleScroll = () => {
      setScrollPositionY(window.scrollY);
    }
    document.addEventListener('scroll',handleScroll);
    return () => {
      document.removeEventListener('scroll',handleScroll)
    }
  },[])

  return scrollPositionY;
}

export default usePositionHook;