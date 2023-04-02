import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
         aaabbb
      </div>
    )
  }
}

//高阶组价1
function enhanceComponent(WrappedComponent){
    class NewComponent extends PureComponent{
        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
    NewComponent.displayName = 'AABBCCDD';
    return NewComponent;
}

//高阶组价2
function enhanceComponent2(WrappedComponent){
    function NewComponent(props){
        return (
            <WrappedComponent {...props}/>
        );
    }
    NewComponent.displayName = 'EEEFFF'
    return NewComponent;
}

const EnhanceComponent = enhanceComponent2(App);
export default EnhanceComponent; 
