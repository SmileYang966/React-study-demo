import React , { useEffect, useState } from 'react'
import useLocalStorageHook from './customHooks/LocalStorage-hook'

export default function CustomLocalStorageHook() {

  const [name,setName] =  useLocalStorageHook('name');

  return (
    <div>
      <h2>StorageHook:{name}</h2>
      <button onClick={e => setName('EvanYang22')}>设置name</button>
    </div>
  )
} 
