import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        console.log("constructor =>", props);
        this.state = {
            counter: 0
        }
        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })
    }
    componentDidMount() {
        console.log("component did mount");
        console.log("================");
    }
    render() {
        console.log("render =>");
        return (
            <>
                <button onClick={this.increment}>increment +</button>
                <button onClick={this.decrement}>decrement -</button>
                <div>
                    counter : {this.state.counter}
                </div>
            </>
        );
    }
    componentDidUpdate(pervProps, prevState, snapShot) {
        console.log("component did update ", this.state.counter);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log("should component update - DO NOT RENDER");
            return false
        }
        console.log("should component update -RENDER");
        return true
    }
    componentWillUnmount() {
        console.log("component will unmount");
        console.log("================");
    }
}

export default Counter;