import React, { Component } from 'react'


class CounterButton extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {
                    const { clicked } = this.props;
                    if (clicked) {
                        clicked();
                    }
                }}>Click me</button>
            </div>
        );
    }
}



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h2>子传父组件</h2>
                <h2>{this.state.counter}</h2>
                <CounterButton clicked={this.change} />
            </div>
        )
    }

    change = () => {
        console.log("aaabbbbb");
        this.setState({
            counter: this.state.counter + 1
        })
    }

    // change() {
    //     console.log("aaabbbbb");
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }
}
