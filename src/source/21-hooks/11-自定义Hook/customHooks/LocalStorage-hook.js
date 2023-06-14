import React, { useState, useEffect } from 'react'

function useLocalStorageHook(key) {
  const [name, setName] = useState(()=>{
    const name = window.localStorage.getItem(key);
    return name;
  })

  useEffect(()=>{
    window.localStorage.setItem(key,name)
  },[name])

  return [name,setName];
}

export default useLocalStorageHook;
