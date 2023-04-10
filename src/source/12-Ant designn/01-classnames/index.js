import React, { PureComponent } from 'react'
import classNames from 'classnames';

export default class App extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      isActive : true
    }
  }

  render() {
    const { isActive } = this.state;
    const isBar = true;


    return (
      <div>
        <h2 className={'title' + (isActive ? " active" : "")}>我是标题1</h2>
        <h2 className={['title' , (isActive ? "active" : "")].join(' ')}>我是标题2</h2>
        <h2 className={classNames({ "active" : isActive, "bar" : isBar },'title','aabbb')}>我是标题3</h2>
      </div>
    )
  }
}
