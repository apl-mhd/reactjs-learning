import React from 'react';
import './style.css';

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button
          onClick={this.handleDecrement}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
