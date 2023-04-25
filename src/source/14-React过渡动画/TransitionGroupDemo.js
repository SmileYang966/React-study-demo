import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './TransitionGroup.css'

export default class TransitionGroupDemo extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      names : ["codewhy","Evan","lilei"]
    }
  }

  render() {
    return (
      <TransitionGroup>
        {
          this.state.names.map((value,index)=>{
            return (
              <CSSTransition key={index} timeout={500} classNames={'addName'}>
                <div key={value+''+index}>
                  {value}
                </div>
              </CSSTransition>
            )
          })
        }
        <button onClick={e=>{
          this.addName()
        }}>+name</button>
      </TransitionGroup>
    )
  }

  addName(){
     this.setState({
      names : [...this.state.names,'simon']
     })
  }
}
