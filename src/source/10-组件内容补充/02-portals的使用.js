import React, { Component, PureComponent } from 'react'
import ReactDOM  from 'react-dom';

class Home extends Component{
    render(){
        return (
            <div>
                <h2>Hello world</h2>

                {/* 自定义一个Modal */}
                <Modal>
                    <p>1111</p>
                    <h1>2222</h1>
                    <h3>099992</h3>
                </Modal>
            </div>
        );
    }
}



class Modal extends PureComponent{
    render(){ 
        // 第一个参数代表Modal下的所有子组件，第二个参数表示这些子组件要挂载的节点
        // 注意这个modal需要挂载在index.html里新定义的div id="modal"元素里,并且需要定义div相关的css样式

        // document.getElementById("modal")
        // 需要将this.props.children(所有的子节点)挂载到id="modal"的div根元素下
        return ReactDOM.createPortal(
                this.props.children,
                document.getElementById("modal")
        )
    }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}
