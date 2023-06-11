import React, { useContext } from 'react'
// 创建共享的useUserContext，从外部文件导入
import useUserContext from './User-hook'

export default function CustomHookContextShare() {

  const [userCtx,tokenCtx] = useUserContext();

  return (
    <div>
      CustomHookDemo2
      <br/>
      <h2>
        {
          `userInfo is name ${userCtx.name},age is ${userCtx.age}`
        }
      </h2>
      <h3>
        {
          `token is ${tokenCtx.token}`
        }
      </h3>
    </div>
  )
}
