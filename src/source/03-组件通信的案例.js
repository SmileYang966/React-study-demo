import React, { Component } from 'react'
import './03-组件通信.css'

class TabBarControl extends Component{

    render(){
        const tabTitles = this.props.tabTitles;
        const activedIndex = this.props.activedIndex;

        return (
            <div className='tabBarControlStyle'>
                {
                    tabTitles.map((item,index)=>{
                        return (
                            <div className={index === activedIndex ?  'tabBarItemStyle' + ' active'  : 'tabBarItemStyle'  } onClick={()=>{
                                const { selectedItemAction } = this.props;
                                selectedItemAction && selectedItemAction(index);
                            }}>
                                <span>
                                    {item}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        currentIndex : 0
    }

    this.tabTitles = ['流行','新款','精选'];
  }

  render() {
    return (
      <div>
        <TabBarControl tabTitles={this.tabTitles} selectedItemAction={(index)=>{
            this.setState({
                currentIndex : index
            })
        }} activedIndex={this.state.currentIndex}/>
        <h2>{this.tabTitles[this.state.currentIndex]}</h2>
      </div>
    )
  }
}
