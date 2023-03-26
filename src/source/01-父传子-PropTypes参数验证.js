import PropTypes from 'prop-types'
import React, { Component } from 'react'


class Son extends Component{
    render(){
        const { name,age,height,hobbies } = this.props;
        return(
            <div>
                <p>{name}</p>
                <p>{age}</p>
                <p>{height}</p>
                {
                    hobbies.map((item,index)=>{
                        return (
                            <p key={index}>{item}</p>
                        )
                    })
                }
            </div>
        );
    }
}
//定义父组件传递子组件 属性的类型
Son.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number,
    height : PropTypes.number,
    hobbies : PropTypes.array
}

//定义父组件传递子组件 属性的默认值
Son.defaultProps = {
    name : 'simon',
    age : 111,
    height : 1.99,
    hobbies : ['somon','11233']
}

function Daughter(props){

    const { name, age, friendCount } = props;

    return (
        <div>
            <p>{'My name is ' + name}</p>
            <p>{'My age is ' + age}</p>
            <p>{'I have ' + friendCount + ' friends'}</p>
            
        </div>
    );
}

Daughter.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string,
    age : PropTypes.number,
    friendCount : PropTypes.number
}


export default class App extends Component {
  render() {
    return (
        <div>
            <Son name={'Evan111'} age={28} height={1.899} hobbies={['writing','gym111']}/>
            <Son/> 
            <Daughter id={1} name={'Simon'} age={32} friendCount={100}/> 
        </div>
    )
  }
}
