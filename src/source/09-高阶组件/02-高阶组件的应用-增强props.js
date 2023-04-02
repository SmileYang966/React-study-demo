import React, { PureComponent } from 'react'

class About extends PureComponent{
    render(){
        return (
            <h2>
                About : {`name : ${this.props.nickName} , level : level : ${this.props.level}, area : ${this.props.region} `}
            </h2>
        );
    }
}

class Home extends PureComponent{
    render(){
        return (
            <h2>
                Home : { `name = ${this.props.nickName}, Level :   level : ${this.props.level}, area : ${this.props.region}`} 
            </h2>
        );
    }
}

function enhanceRegionProps(WrappedComponent){
    return props => {
        return <WrappedComponent {...props}/>
    }
}

const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);

class App extends PureComponent {
  render() {
    return (
      <div>
         <EnhanceAbout nickName={'Evan'} level={12} region='china'/>
         <EnhanceHome nickName={'Simon'} level={20}/>
      </div>
    )
  }
} 




export default App; 
