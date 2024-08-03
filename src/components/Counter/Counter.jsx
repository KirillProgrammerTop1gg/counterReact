import React, { Component } from "react";

class Counter extends Component{
    state = {
        data: this.props,
        count: 0,
    }
    renderCount = () => document.querySelector('.count__text').innerHTML = this.state.count;
    addPoints = () => (this.state.count += Number(this.props.step), this.renderCount());
    minusPoints = () => (this.state.count -= Number(this.props.step), this.renderCount());
    render() {
        return <>
            <p>Count <span className="count__text">{this.state.count}</span></p>
            <button onClick={this.addPoints}>+1</button>
            <button onClick={this.minusPoints}>-1</button>
        </>
    }
}

export default Counter;