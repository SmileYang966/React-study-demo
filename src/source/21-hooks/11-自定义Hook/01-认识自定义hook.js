import React, { useEffect } from 'react'

function Home(props){

  useLoggingLife('Home');

  return <h2>Home</h2>
}

function Profile(props){

  useLoggingLife('Profile');

  return <h2>Profile</h2>
}


export default function CustomLifeHookDemo01() {

  useLoggingLife('CustomLifeHookDemo01');

  return (
    <div>
      CustomLifeHookDemo01
      <Home/>
      <Profile/>
    </div>
  )
}


function useLoggingLife(name){
  useEffect(()=>{
    console.log(`${name}Profile被调用了`);

    return ()=>{
      console.log(`${name}被销毁掉了`);
    }
  },[]) 
}