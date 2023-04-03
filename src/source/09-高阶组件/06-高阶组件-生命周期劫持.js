import React, { PureComponent,Component } from 'react'


function withRenderTime(WrappedComponent){
  return class extends PureComponent{
    componentDidMount(){
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrappedComponent.name}的渲染时间:${interval}`);
    }

    UNSAFE_componentWillMount(){
      this.beginTime = Date.now();
    }

    render(){
      return (
        <WrappedComponent {...this.props}/>
      )
    }
  }
}



class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        About
      </div>
    );
  }
}

const HomeRenderTime = withRenderTime(Home);
const AboutRenderTime = withRenderTime(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HomeRenderTime />
        <AboutRenderTime />
      </div>
    )
  }
}
