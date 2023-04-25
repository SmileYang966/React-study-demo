import React, { PureComponent } from 'react'
import { SwitchTransition , CSSTransition} from 'react-transition-group'
import './SwitchTransition.css'

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isOn : true 
    }
  }

  render() {

    const { isOn } = this.state;

    return (
      <div>
        <SwitchTransition>
          <CSSTransition key={isOn ? 'on' : 'off'} classNames="btn" timeout={1000} mode={'in-out'}>
            <button onClick={e=>{
              this.setState({
                isOn : !this.state.isOn
              })
            }}>{ isOn ? "on" : "off" }</button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
