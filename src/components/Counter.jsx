import React, { component, Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.initialCount,
        clicks: 0
    }

    add = () => {
        const { count, clicks } = this.state;

        this.setState({
            count: count + 1,
            clicks: clicks + 1
        });
    }

    subtract = () => {
        const { count, clicks } = this.state;

        this.setState({
            count: Math.max(count - 1, 0),
            clicks: clicks + 1
        });
    }

    render() {
        const { clicks, count } = this.state;

        return(
            <div className="counter">
                <button onClick={this.subtract}>-</button>
                <span className="count">{count}</span>
                <button onClick={this.add}>+</button>
                <span className="count-string" >You clicked {clicks} times</span>
            </div>
        )
    }
}

export default Counter;