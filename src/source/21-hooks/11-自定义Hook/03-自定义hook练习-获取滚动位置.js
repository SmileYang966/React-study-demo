import React, { useEffect } from 'react'
import usePositionHook from './Position-hook';

export default function CustomHookScrollPosition() {

  const scrollPositionY = usePositionHook();

  console.log("scrollPositionY is ",scrollPositionY);

  return (
    <div style={{ padding:'1000px 0'}}>
      CustomHookScrollPosition
    </div>
  )
}
