import React, { PureComponent } from 'react'
import { Button, TimePicker } from 'antd'
import {
  StepBackwardOutlined,
  FormOutlined
} from '@ant-design/icons';



export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <div style={{width:40,height:40,alignItems:'center',justifyContent:'center',display:'flex'}}>
          <StepBackwardOutlined onClick={()=>{
            console.log("StepBackwardOutlined----");
          }} style={{fontSize:30}}/>
        </div>
        <br/>
        <FormOutlined style={{fontSize:30}}/>
        <br/>
        <br/>
        <TimePicker use12Hours format="h:mm:ss A" onChange={this.onChange}/>
        <br/>
        <TimePicker use12Hours format="h:mm a" onChange={this.onChange} />
      </div>
    )
  }

  onChange = (time, timeString) => {
    console.log(time, timeString);
  }
}