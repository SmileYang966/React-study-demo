import React, { PureComponent } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {

  // 动态路由接受参数 react-router v6用法
  const { id } = useParams();

  return (
    <div>Detail:{id}</div>
  )
}
