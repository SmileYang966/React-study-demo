import React, { PureComponent } from 'react'
import profileStyle from './style.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div className={profileStyle.profile}>
        <h2 className={profileStyle.title}>我是Profile的标题</h2>
        <ul className={profileStyle.settings}>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}
